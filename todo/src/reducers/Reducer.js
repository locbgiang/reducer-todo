import React, { useState, useReducer } from 'react';

export const inititalState = {
    todo: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Work out',
        completed: false,
        id: 3254945474
    }]
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todo: [...state.todo, 
                    {
                        item:action.payload,
                        completed:false,
                        id: new Date()
                    }
                ]
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todo: state.todo.map((item)=>{
                    if(item.id===action.payload.id){
                        return{
                            ...item,
                            completed: !action.payload.complete
                        }
                    }
                    return item;
                })
            }
        case 'REMOVE_TODO':
            return {
                ...state,
                todo: state.todo.filter(item=>!item.completed)
            }
    }
    return state;
};


