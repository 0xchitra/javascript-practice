//1 Document Object Model is a programming interface that represent an HTML document as a tree of objects(nodes).
// When the browser loads HTML it parses it and creates a DOM tree that javascript can interact with.

//2 a node is a basic object in the DOM tree.
// different type of nodes: document node, Element node, text node, comment node, DocumentType node.

//3 an element, text, comment, document are all nodes
// <div>text</div>, here, <div> is an element and 'text' is a text node

//4
let nameById = document.getElementById("name");
console.log(nameById);

let nameByQuery = document.querySelector("#name");
let heading = document.querySelector("h2");
let about = document.querySelector(".about");
console.log(nameByQuery);
console.log(heading);
console.log(about);

let aboutByAll = document.querySelectorAll(".about");
console.log(aboutByAll);

//5
// querySelector = first matching element
// querySelectorAll = all matching element, we can iterate over them

//6
