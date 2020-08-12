import React from 'react';
import {
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO
} from '../constants';

const INITIAL_STATE = {
    tasks: []
};

const taskReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        /* Language Setter */
        case ADD_TODO:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case TOGGLE_TODO:
            state.tasks[action.payload].status = !state.tasks[action.payload].status
            return { ...state, tasks: [...state.tasks] };
        case DELETE_TODO:
            state.tasks.splice(action.payload, 1);
            return { ...state, tasks: [...state.tasks] };
        default:
            return state;
    }
};

export default taskReducer;
