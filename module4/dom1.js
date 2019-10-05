// dom manipulations

// Targets the tag with id "first" and change the innerHTMLin the DOM
// OPTION 1
// const element = document.getElementById("first");
// element.innerHTML = "Welcome to DOM Manipulations";

// OPTION 2
// document.getElementById("first").innerHTML = "I choose to replace the first header with this content!"

// const main = document.getElementById("main");
// const childNode = main.childNodes;
// console.log(childNode)

// Taget all p elements in the DOM
// document.getElementsByTagName("p");

// Taget only the first p element in the DOM
// document.getElementsByTagName("p")[0].textContent = "Hello Ahmed"

// create an element and add to the DOM
// const h1 = document.createElement('h1');
// h1.innerHTML = "This is the introduction to DOM Manipulation";

// Add the created element to the end of the main div
// document.getElementById('main').appendChild(h1, 'h3');

// Add the created element to the bigginng of the main div
// const el = document.getElementById('first');
// document.getElementById('main').insertBefore(h1, el);