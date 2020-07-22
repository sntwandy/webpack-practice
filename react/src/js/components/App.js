import React, { useState } from 'react';
import data from './data.json';
import Loader from './Loader';

// data.loaders.map(n => console.log(n));
const App = () => {
  const [loadersList, setLoadersList] = useState([]);

  const handleClick = () => {
    setLoadersList(data.loaders);
  };

  return(
    <div>
      <p>Hello, from React!!!</p>
      <ul>
        {
          loadersList.map(loader => <Loader {...loader} key={loader.id} />)
        }
      </ul>
      <button onClick={handleClick}>Show all learned until today.</button>
    </div>
  );
};

export default App;