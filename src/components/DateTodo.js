import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import { useNavigate } from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { useQuery } from 'react-query'
import Loading from './Loading';



const DateTodo = () => {

    const [todos, setTodo] = useState([]);
    const [user] = useAuthState(auth)
    const navigate = useNavigate()


    useEffect(() => {
        fetch('https://dailytaskbyabusayeed.herokuapp.com/todos')
            .then(res => res.json())
            .then(data => setTodo(data))
    }, [])


    const myTodos = todos.filter((todo) => user?.email === todo.email)

    function handleDate(e) {
        const date = (e.target.value);
        const todyTodo = myTodos?.filter(todo => todo?.inputDay === date);
        console.log(todyTodo);
        setTodo(todyTodo);


    }


    // additional


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

                            Swal.fire('Successfully Deleted!', '', 'success');
                        } else {
                            Swal.fire('Failed to Delete!', '', 'error');
                        }
                    })
            }
        })
    }

    const handleComplate = (id) => {
        fetch(`https://dailytaskbyabusayeed.herokuapp.com/todo/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
    }
    return (
        <div className='min-h-screen text-center'>
            <h2 className="text-3xl text-primary text-center font-bold my-5">Date wise Task</h2>
            <input className='input  input-bordered shadow-md inline-block mx-auto w-1/3' onChange={handleDate} type="date" name="" id="" />

            {myTodos?.map(todo => <>{todo.complate || <div className='lg:w-1/2 p-3 mx-4 lg:mx-auto bg-primary my-2 rounded-lg text-white flex justify-between items-center'>

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

export default DateTodo;