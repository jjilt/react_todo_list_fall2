import { useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn Rails', complete: true },
    { id: 2, title: 'Learn ReactJS', complete: false },
    { id: 3, title: 'Graduate DPL', complete: false },
  ])

  return (
    <>
    
    </>
  )
}

export default Todos;