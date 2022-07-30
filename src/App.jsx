import { useState, useEffect } from 'react';

import Todos from './components/Todos';
import Time from './components/Time';

function App() {
  return (
    <div className='app'>
      <Time />
      <h1 className='heading-primary'>To Do App</h1>
      <Todos />
    </div>
  );
}

export default App;
