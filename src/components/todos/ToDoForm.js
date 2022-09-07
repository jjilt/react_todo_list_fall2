import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({ title: '', complete: false })

  const handleSubmit = (e) => {
    // stoping from dumping the state and reload the page and posting in the url bar
    e.preventDefault();
    addTodo(todo)
    // clear form 
    setTodo({ title: '', complete: false })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          name='title'
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          required
          placeholder='title'
        />
        {/* <input
          name='age'
          value={todo.age}
          onChange={(e) => setTodo({ ...todo, age: e.target.value })}
        /> */}
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default TodoForm;