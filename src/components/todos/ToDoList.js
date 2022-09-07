import Todo from './Todo';

const TodoList = ({ todos }) => (
  <>
    <ul>
      { todos.map( t => 
        // <li key={t.id}>
        //   {t.title}
        // </li>
        <Todo key={t.id} {...t} />
        // <Todo id={t.id} title={t.title} complete={t.complete} />
      )}
    </ul>
  </>
)

export default TodoList;