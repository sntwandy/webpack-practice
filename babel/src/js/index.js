import '../css/styles.css';
import search from './search';
import render from './render';

const id = prompt('Type and id');

search(id)
  .then(data => render(data))
  .catch(err => console.error(err));