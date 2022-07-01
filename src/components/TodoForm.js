
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

const TodoForm = ({ refetch }) => {
    const [user] = useAuthState(auth)
    const date = new Date();
    let day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    const year = date.getFullYear();
    const inputDay = (`${year}-${month}-${day}`);


    const formOnSubmit = e => {
        e.preventDefault()
        const todo = e.target.input.value;
        const email = user.email;

        fetch('https://dailytaskbyabusayeed.herokuapp.com/todos', {
            method: 'POST',
            body: JSON.stringify({
                todo, email, inputDay
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