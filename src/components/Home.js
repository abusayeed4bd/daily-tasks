import React from 'react';

import TodoForm from './TodoForm';
import TodoLists from './TodoLists';
import {
    useQuery,

} from 'react-query'

const Home = () => {
    const { data: todos, isLoading, refetch } = useQuery('todos', () => fetch('http://localhost:5000/todos').then(res => res.json()))


    return (
        <div className='my-5'>
            <h2 className="tex-primary text-5xl font-bold uppercase text-center">
                Daily Tasks
            </h2>
            <TodoForm refetch={refetch}></TodoForm>
            <TodoLists todos={todos} isLoading={isLoading} refetch={refetch} ></TodoLists>

        </div>
    );
};

export default Home;