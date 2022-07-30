import { IoTrash } from 'react-icons/io5';

const Todo = ({ todo, index, updateTodo, removeTodo }) => {
  return (
    <div className='item'>
      <div className='task'>
        <input
          id={'task' + index}
          className='checkbox'
          type='checkbox'
          checked={todo.completed}
          onChange={() => updateTodo(index)}
        ></input>

        <label htmlFor={'task' + index}>{todo.text}</label>
        <IoTrash className='icon' onClick={() => removeTodo(index)}></IoTrash>
      </div>
      <span className='item__date'>{todo.createdAt}</span>
    </div>
  );
};

export default Todo;
