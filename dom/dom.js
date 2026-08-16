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
// getElementsByClassName = returns a live HTMLCollection
// querySelectorAll = returns a static nodelist

//7
// HTMLCollection = contains elements, usually live, has .index, can be accessed by using index
// nodelist = contains nodes, has .length, support forEach()

//8
let fruits = document.querySelectorAll("li ul");
fruits.forEach((fruit) => {
  console.log(fruit.textContent);
});

//9
let firstItem = document.querySelector(".frt");
console.log(firstItem.textContent);

//10
document.querySelector("h1"); //by tag
document.querySelector("#name"); // by id
document.querySelector(".name"); // by class
document.querySelector([(src = "abc.com")]); // by attribute

//11
// textContent = to access all text inside an element
// innerText = to access the visible taxts of an element
// innerHTML = to access the HTML markup inside an element

//12
let box = document.querySelector("#box");
console.log(box.textContent);
console.log(box.innerText);
console.log(box.innerHTML);

//13
box.innerText = "Hello innerText";

//14
box.innerHTML =
  "<h3>Hello innerHtml</h3> <p>lorem hu khs hisdl  dhoie asdfh lok dfienhf<p>";

//15
// If the input contains malicious HTML/JavaScript, it can potentially lead to Cross-Site Scripting (XSS).

// For example, untrusted input like:

// <img src="x" onerror="alert('XSS')">
// can be dangerous when inserted as HTML.

//16
let list = document.querySelectorAll("li");
list.forEach((li) => {
  console.log(li.textContent);
});

//17
let paragraph = document.createElement("p");
paragraph.textContent = "hey this paragraph is created with dom";
document.body.append(paragraph);

//18
// attributes provide additional information for an HTML Element.
// some attributes : id, class, href, src, alt

//19
let image = document.querySelector("profile");
console.log(image.getAttribute("src"));

//20
image.setAttribute("src", "new_profile.jpg");

//21
paragraph.setAttribute("class", "para");

//22
paragraph.removeAttribute("class");

//23
// Element.id = directly accesses the elements dom property
// setAttribute = works with the elements html attributes

//24
image.setAttribute("src", "new.jpg");
image.setAttribute("alt", "new profile pic");

//25
let link = document.querySelector("a");
link.setAttribute("href", "www.new.com");
link.setAttribute("target", "_blank");
