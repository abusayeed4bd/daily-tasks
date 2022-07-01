
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const TodoLists = ({ todos, isLoading, refetch }) => {
    const navigate = useNavigate()
    // if (isLoading) {
    //     return <p>loadig...</p>
    // }
    const MySwal = withReactContent(Swal);
    const handleDelete = (id) => {

        MySwal.fire({
            title: <strong>Are You Sure?</strong>,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            icon: 'warning'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://dailytaskbyabusayeed.herokuapp.com/todos/${id}`, {
                    method: 'DELETE',
                    header: {
                        "content-type": "application/json",
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            refetch();
                            Swal.fire('Successfully Deleted!', '', 'success');
                        } else {
                            Swal.fire('Failed to Delete!', '', 'error');
                        }
                    })
            }
        })



        // delete end


        // fetch(`https://dailytaskbyabusayeed.herokuapp.com/todos/${id}`, {
        //     method: 'DELETE',
        //     header: {
        //         "content-type": "application/json",
        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         refetch()
        //     })
    }

    const handleComplate = (id) => {
        fetch(`http://localhost:5000/todo/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
    }

    return (
        <div>
            {todos?.map(todo => <>{todo.complate || <div className='lg:w-1/2 p-3 mx-4 lg:mx-auto bg-primary my-2 rounded-lg text-white flex justify-between items-center'>

                <button onClick={() => handleComplate(todo?._id)} className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>

                {!(todo.complate) && <p >{todo.todo}</p>}

                <div className="flex">
                    <button onClick={() => navigate(`/todos/${todo._id}`)} className="mx-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg></button>
                    <button onClick={() => handleDelete(todo?._id)} className='btn btn-sm btn-danger'>Delete</button>

                </div></div>}</>)}

        </div>
    );
};

export default TodoLists;  