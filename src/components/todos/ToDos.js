import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Footer from '../shared/Footer';

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn Rails', complete: true },
    { id: 2, title: 'Learn ReactJS', complete: false },
    { id: 3, title: 'Graduate DPL', complete: false },
    // { id: 8adx, title: 'buy milk', complete false },
  ])
  const [filter, setFilter] = useState('All')

  const getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

          //  { title: 'buy milk', complete false}
  const addTodo = (todo) => {
    // only for not having db 
    const newTodo = { id: getUniqId, ...todo }
    // const newTodo = { id: 8adx, title: 'buy milk', complete false }
    // const newTodo = { id: getUniqId, title: todo.title, complete: todo.complete }
    setTodos([...todos, newTodo])
  }

  const visibleItems = () => {
    switch(filter) {
      case 'Active': 
        return todos.filter( t => !t.complete )
      case 'Completed':
        return todos.filter( t => t.complete )
      default:
        return todos;
    }
  }

  return (
    <>
      <h1>Todo List</h1>
      {/* <TodoList todos={todos} /> */}
      <TodoList todos={visibleItems()} />
      <TodoForm addTodo={addTodo} />
      <Footer 
        filter={filter} 
        setFilter={setFilter} 
      />
    </>
  )
}

export default Todos;