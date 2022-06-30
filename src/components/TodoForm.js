
import React, { useState } from 'react';

const TodoForm = ({ refetch }) => {

    const formOnSubmit = e => {
        e.preventDefault()
        const todo = e.target.input.value;

        fetch('http://localhost:5000/todos', {
            method: 'POST',
            body: JSON.stringify({
                todo
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                refetch()
            });
        e.target.reset()
    }
    return (
        <form className='mx-auto' onSubmit={formOnSubmit}>
            <div className="flex w-1/2 mx-auto">
                <input type="text" name='input' placeholder="Type here" class="input input-bordered lg:w-full max-w-lg rounded-r-none" required />
                <button className='btn btn-primary rounded-l-none flex-grow'>Add Task</button>

            </div>
        </form>
    );
};

export default TodoForm;