import React, { useState } from 'react';
import data from './data.json';
import Loader from './Loader';

// Assets
import logo from '../../images/platzi.png';
import video from '../../video/que-es-core.mp4';

// Styles
import '../../sass/sass.scss';
import '../../less/less.less';
import '../../stylus/stylus.styl';

// data.loaders.map(n => console.log(n));
const App = () => {
  const [loadersList, setLoadersList] = useState([]);

  const handleClick = () => {
    setLoadersList(data.loaders);
  };

  return(
    <div>
      <p className="sass">This is SASS</p>
      <p className="less">This is LESS</p>
      <p className="stylus">This is STYLUS</p>
      <p className="post-css">This is POSTCSS</p>
      <p>Hello, from React!!!</p>
      <img src={logo} alt="" width={40} />
      <video src={video} width={500} controls poster={logo}></video>
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