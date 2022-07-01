import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams, useNavigate } from 'react-router-dom'
import auth from './components/firebase.init';

const UpdataTodo = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth);
    const email = user.email;
    const navigate = useNavigate()
    const handleUpdate = (e) => {
        const todo = e.target.input.value;
        e.preventDefault()

        fetch(`https://dailytaskbyabusayeed.herokuapp.com/todos/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                todo, email
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                navigate('/')

            });
    }
    return (
        <div className="min-h-screen">
            <div class="card w-96 bg-base-100 shadow-xl mx-auto my-5">
                <div class="card-body">
                    <div className="text-3xl text-primary font-bold text-center">
                        Update task
                    </div>
                    <form className='mx-auto' onSubmit={handleUpdate} >
                        <div className="flex mx-auto">
                            <input type="text" name='input' placeholder="Type here" class="input input-bordered lg:w-full max-w-lg rounded-r-none text-black" required />
                            <button className='btn btn-primary rounded-l-none flex-grow'>Update</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdataTodo;