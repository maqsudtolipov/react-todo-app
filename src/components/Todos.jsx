import { useEffect, useState } from 'react';

import Todo from './Todo';
import Input from './Input';

const Todos = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) =>
    setTodos([
      ...todos,
      {
        text,
        completed: false,
        createdAt: new Date().toLocaleString('en-US', {
          minute: 'numeric',
          hour: 'numeric',
          hour12: true,
        }),
      },
    ]);

  const updateTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <Input addTodo={addTodo} />
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </>
  );
};

export default Todos;
