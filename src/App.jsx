import { useState, useEffect } from 'react';

import Todos from './components/Todos';

function App() {
  // show date format like 'Tue 1 Jan 2020'
  const date = new Date().toLocaleString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  

  return (
    <div className='app'>
      <div className='time'>
        <div className='clock'>{time}</div>
        <span className='date'>{date}</span>
      </div>
      <h1 className='heading-primary'>To Do App</h1>
      <Todos />
    </div>
  );
}

export default App;
