import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    // Function to handle the form Changes
    const handleChange = e => {
        setInput(e.target.value);
    };

    // Function to handle the form submit
    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {
                props.edit ? ( 
                    <div className='edit-form'>
                        <input
                            type='text'
                            placeholder='Update Todo'
                            value={input}
                            name='text'
                            className='todo-input edit'
                            onChange={handleChange}
                            ref={inputRef}
                        />            
                        <button className='todo-button edit'>Update</button>
                    </div>
                ) :
                (
                    <div className='edit-form'>
                        <input
                            type='text'
                            placeholder='Type things to do?'
                            value={input}
                            name='text'
                            className='todo-input'
                            onChange={handleChange}
                            ref={inputRef}
                        />                        
                        <button className='todo-button add'>Add Todo</button>
                    </div>
                )
            }            
        </form>
    )
}

export default TodoForm