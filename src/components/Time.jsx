import { useEffect, useState } from 'react';

const Time = () => {
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

  const date = new Date().toLocaleString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className='time'>
      <div className='clock'>{time}</div>
      <span className='date'>{date}</span>
    </div>
  );
};

export default Time;
