import { useState } from 'react';

const Input = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (value.length < 3) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form className='input' onSubmit={submitHandler}>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='✔ Add a new todo'
      />
      <button type='submit'>Add</button>
    </form>
  );
};

export default Input;
