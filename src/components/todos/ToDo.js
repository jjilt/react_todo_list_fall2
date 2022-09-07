const Todo = ({ id, title, complete }) => {

  return (
    // <li key={id}>
    <li
      style={{ textDecoration: complete ?  'line-through' : 'none' }}
    >
      {title}
    </li>
  )
}

export default Todo;