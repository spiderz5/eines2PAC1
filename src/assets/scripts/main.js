/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */




var elmenu = document.getElementById('menu');
document.getElementById('obrir').addEventListener('click', function () {
   elmenu.classList.add('visible');
  });
document.getElementById('tancar').addEventListener('click', function () {
   elmenu.classList.remove('visible');
});
document.getElementById('menu').addEventListener('click', function () {
   elmenu.classList.remove('visible');
 });
