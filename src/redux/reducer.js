import { GET_TODOS, COMPLETE_TODO, REMOVE_TODO, UPDATE_TODO, ADD_TODO } from './actions';

const initialState = {
    todos: []
}

export default function reducer(state = initialState, { type, payload }) {
    console.log(payload)
    switch (type) {
        case GET_TODOS:
            return {
                ...state,
                todos: payload
            };
        case COMPLETE_TODO:
            return {
                ...state,
                todos: [...state.todos, state.todos.map(e => e.id === payload ? e.completed = true : null)]
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(e => e.id !== payload)
            };
        case UPDATE_TODO:
            return {
                ...state,
                todos: [...state.todos, state.todos.map(e => e.id === payload.id ? e = payload : null)]
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload]
            };
        default:
            return state;
    }
}