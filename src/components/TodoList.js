import React, {useContext} from 'react';
import TodoContext from '../context';

const lineThrough = {
    background: 'red',
    textDecoration: 'underline'
  };

export default function TodoList() {
    const {state, dispatch} = useContext(TodoContext);

    const title = state.todos.length > 0 ? `${state.todos.length} Todos` : 'Nothing To Do!'
    

    return(


        <div>

<style type="text/css">
    {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }

    .lineThrough {
        background: red;
        color: green
    }
    `}
  </style>



            <h1>{title}</h1>
            <ul>
                {state.todos.map(todo => (
                    <li key={todo.id}>
                        <span
                        onDoubleClick={() => dispatch({type: 'TOGGLE_TODO', payload: todo})}
                        className={`${todo.complete && 'lineThrough'}`}
                        style={{textDecoration: 'underline'}}
                        
                        >{todo.text}</span>
                        <button
                            onClick={() => dispatch({type: 'SET_CURRENT_TODO', payload: todo})}
                        >
                            <img 
                            src="https://icon.now.sh/edit/0050c5"
                            alt="Edit Icon"
                            />
                        </button>
                        <button
                            onClick={() => dispatch({type: 'REMOVE_TODO', payload: todo})}
                        >
                            <img 
                            src="https://icon.now.sh/delete/8b0000"
                            alt="Delete Icon"
                            />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}