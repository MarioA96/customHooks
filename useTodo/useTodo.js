import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/index';


const initialState = [];

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
};


export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    
    }, [todos]);


    const handleNewTodo = (newTodo) => {
        // console.log({newTodo});
        const action = {
            type: '[TODO] Add TODO',
            payload: newTodo
        };
        
        dispatch( action );
    };

    const handleDeleteTodo = (todoId) => {
        // console.log(todoId);
        const action = {
            type: '[TODO] Remove TODO',
            payload: todoId
        };

        dispatch( action );
    };

    const handleToggleTodo = (todoId) => {
        // console.log( {todoId} );
        const action = {
            type: '[TODO] Toggle TODO',
            payload: todoId
        };

        dispatch( action );
    };

    return {
        todos,

        todosCount: todos.length, 
        pendingTodos: todos.filter( todo => !todo.done ).length,
        
        handleNewTodo, 
        handleDeleteTodo, 
        handleToggleTodo
    }

};


