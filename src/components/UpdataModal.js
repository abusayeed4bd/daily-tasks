import React from 'react';

const UpdataModal = ({ todo }) => {
    const { _id } = todo;
    console.log(todo.todo)
    const handleUpdate = (e, id) => {
        e.preventDefault()
        fetch(`http://localhost:5000/todos/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(todo)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <form className='mx-auto' onSubmit={() => handleUpdate(_id)} >
                        <div className="flex mx-auto">
                            <input type="text" name='input' placeholder="Type here" class="input input-bordered lg:w-full max-w-lg rounded-r-none text-black" required defaultValue={todo.todo} />
                            <button className='btn btn-primary rounded-l-none flex-grow'>Add Task</button>

                        </div>
                    </form>
                    <div class="modal-action">
                        <label for="my-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdataModal;