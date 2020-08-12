import React from 'react';
import {
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO
} from '../constants'
const addTask = task => ({
    type: ADD_TODO,
    payload: task,
});

const toggleTask = key => ({
    type: TOGGLE_TODO,
    payload: key
})

const deleteTask = key => ({
    type: DELETE_TODO,
    payload: key
})

export { addTask, toggleTask, deleteTask };