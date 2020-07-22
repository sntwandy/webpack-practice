import '../css/styles.css';
import text from './text';

console.log('Hello Megan E.');
text();

if (module.hot) {
  module.hot.accept('./text.js', function () {
    console.log('Recargued!!');
    text();
  });
}