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
// let image = document.querySelector("profile");
// console.log(image.getAttribute("src"));

//20
// image.setAttribute("src", "new_profile.jpg");

//21
paragraph.setAttribute("class", "para");

//22
paragraph.removeAttribute("class");

//23
// Element.id = directly accesses the elements dom property
// setAttribute = works with the elements html attributes

//24
// image.setAttribute("src", "new.jpg");
// image.setAttribute("alt", "new profile pic");

//25
let link = document.querySelector("a");
link.setAttribute("href", "www.new.com");
link.setAttribute("target", "_blank");

//26
// hasAttribute = check whether an attribute exist
// getAttribute = gets an attribute value
// setAttribute = creates or changes an attribute
// removeAttribute = removes an attribute

//27
let button = document.querySelector("#btn");
let userId = button.getAttribute("data-user-id"); //using getAttribute
console.log(userId);

let userIdd = button.dataset.userId; //by dataset
console.log(userIdd);

//28
// createElement = creates an actual DOM Element
// innerHTML = parses an HTML string and creates the corresponding DOM

//29
// solved in Q17;

//30
let lists = document.querySelector("#fruits");
let items = document.createElement("li");
items.textContent = "Guava";
lists.append(items);

//31
// append() = adds content at the end
// appendChild() = adds ONE Node at the end
// prepend() = adds content at the beginning

//32
// solved in Q30

//33
const element = document.querySelector("#box");
element.remove();

//34
// remove() = remove the element itself
// removeChild() = parent remove a specific child

//35
let newBtn = document.createElement("button");
newBtn.textContent = "Click Me";
document.body.appendChild(newBtn);

//36
let div = document.createElement("div");
let h2 = document.createElement("h1");
h2.textContent = "Javascript";
let p = document.createElement("p");
p.textContent = "Dom Practice";
div.append(h2, p);
document.body.appendChild(div);

//37
let names = ["Chitra", "Daya", "Hugo", "Ravi", "Sita"];
let ul = document.querySelector("ul");
names.forEach((name) => {
  let li = document.createElement("li");
  li.textContent = name;
  ul.appendChild(li);
});

//38
let listss = document.querySelector("ul");

names.forEach((name) => {
  let li = document.createElement("li");
  li.textContent = name;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  listss.appendChild(li);
});

//39
let itemsList = document.querySelector("#items");

let firstitem = document.createElement("li");
firstitem.textContent = "New First Item";

let lastItem = document.createElement("li");
lastItem.textContent = "New Last Item";

itemsList.prepend(firstitem);
itemsList.append(lastItem);

//40
function createCard(title, description) {
  let card = document.createElement("div");

  let heading = document.createElement("h2");
  heading.textContent = title;

  let paragraph = document.createElement("p");
  paragraph.textContent = description;

  card.append(heading, paragraph);
  return card;
}

const card = createCard(
  "JavaScript",
  "Learn DOM manipulation"
);

document.body.appendChild(card);