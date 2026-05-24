import a from './app.js';
import {arr, name} from './app.js';

var h1 = document.createElement('h1');

h1.innerHTML = `The value of a is ${a}`;
h1.innerHTML += `<br>The name is ${name}`;
h1.innerHTML += `<br>The array is ${arr[1]}`;

document.body.appendChild(h1);


console.log(a);