import React from 'react';

import TodoForm from './TodoForm';
import TodoLists from './TodoLists';
import { useQuery } from 'react-query'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Loading from './Loading';

const Home = () => {
    const [user] = useAuthState(auth)
    const email = user?.email;
    const { data: todos, isLoading, refetch } = useQuery('todos', () => fetch(`https://dailytaskbyabusayeed.herokuapp.com/todos`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    const myTodos = todos.filter((todo) => user?.email === todo.email)


    return (
        <div className='my-5 min-h-screen'>
            <h2 className="tex-primary text-5xl font-bold uppercase text-center">
                Daily Tasks
            </h2>
            <TodoForm refetch={refetch}></TodoForm>
            <TodoLists todos={myTodos} isLoading={isLoading} refetch={refetch} ></TodoLists>

        </div>
    );
};

export default Home;