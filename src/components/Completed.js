import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import { useQuery } from 'react-query'
import Loading from './Loading';


const Completed = () => {
    const [user] = useAuthState(auth)
    const email = user?.email;
    const { data: todos, isLoading, refetch } = useQuery('todos', () => fetch(`https://dailytaskbyabusayeed.herokuapp.com/todos`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    const myTodos = todos.filter((todo) => user.email === todo.email)
    return (
        <div className='min-h-screen'>
            <h2 className="text-2xl text-primary font-bold uppercse text-center my-4">
                Completed tasks
            </h2>
            {myTodos.map(todo => <> {(todo.complate) && <div className='lg:w-1/2 p-3 mx-4 lg:mx-auto bg-primary my-2 rounded-lg text-white flex justify-between items-center'>



                {<p >{todo.todo}</p>}


            </div>}</>)}
        </div>
    );
};

export default Completed;