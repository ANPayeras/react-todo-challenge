import axios from 'axios'

export const GET_TODOS = "GET_TODOS";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const ADD_TODO = "ADD_TODO";

export function getTodos() {
    return async function (dispatch) {
        try {
            return await axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(res => dispatch({
                    type: GET_TODOS, payload: res.data
                }))
        } catch (error) {
            console.log(error)
        }
    }
}

export function completeTodos(todoId) {
    return {
        type: COMPLETE_TODO,
        payload: todoId
    }
}

export function removeTodos(todoId) {
    return {
        type: REMOVE_TODO,
        payload: todoId
    }
}

export function updateTodos(todo) {
    return {
        type: UPDATE_TODO,
        payload: todo

    }
}

export function addtodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo

    }
}

