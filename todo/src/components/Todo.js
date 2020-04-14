import React, { useState, useReducer } from 'react';
import { reducer, inititalState } from '../reducers/Reducer';

function Todo() {
    const [state, dispatch] = useReducer(reducer, inititalState);

    const [newTodo, setNewTodo] = useState('');

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };
    return (
        <div>
            <div>
                <input 
                    className = 'todo-input'
                    type = 'text'
                    name = 'newTodo'
                    value = {newTodo}
                    onChange = {handleChanges}
                />
                <button
                    onClick ={()=>
                        dispatch({type: 'ADD_TODO', payload: newTodo })
                    }    
                >ADD NEW TODO</button>
            </div>
            <div>
                {state.todo.map((todoItem) => (
                    <div className={`todo${todoItem.completed ? " completed" : ""}`} onClick={()=>
                    dispatch({type: 'TOGGLE_TODO', payload: todoItem})}>{todoItem.item}</div>
                ))}
            </div>
            <button
                onClick ={()=>
                        dispatch({type: 'REMOVE_TODO'})
                }    
            >REMOVE COMPLETED</button>
        </div>
    );

}
export default Todo;