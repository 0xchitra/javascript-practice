//41
let title = document.querySelector("h1");
title.style.color = "red";

//42
title.style.backgroundColor = "pink";
title.style.fontSize = "45px";
title.style.width = "200px";
title.style.height = "240px";
title.style.border = "12px solid orange";
title.style.borderRadius = "8px";

//43
// This is necessary because background-color would otherwise be interpreted by JavaScript as background - color
// CSS uses kebab-case(background-color)
// JS uses camelCase(backgroundColor)

//44
let btn = document.querySelector("#Btn");
btn.addEventListener("click", () => {
  btn.style.backgroundColor = "rgb(93, 195, 142)";
  btn.style.width = "180px";
  btn.style.height = "120px";
  btn.style.transition = "all .5s";
});

//45 element.style.color = ""
// This removes the inline color style from the element.

//46
// .style = Directly modifies inline styles
// .classList = Adds/removes CSS classes

//47
// classList represent the collection of css classes applied to an element

//48
// classList.add() = element.classList.add("active");
// result = <div class="active"></div>

//classList.remove() = removes a class
// classList.toggle() = adds the class if it doesn't exist and removes it if it does.
// classList.contains() = Checks whether an element has a particular class.
// classList.replace() = replace a class, element.classList.replace("old", "new");

//49
title.classList.add("head");
let head = document.querySelector(".head");
head.style.color = "blue";

//50
head.classList.remove("head");

//51
let dark = document.querySelector("#darkBtn");
dark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

//52
// if (box.classList.contains("active")) {
//   console.log("The element has the active class.");
// } else {
//   console.log("The element does not have the active class.");
// }

//53
let menu = document.querySelector("#menu");
let menuBtn = document.querySelector("#menuBtn");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

//54
let headings = document.querySelectorAll(".heading");

headings.forEach((heading) => {
  heading.addEventListener("click", () => {
    let content = heading.nextElementSibling;

    content.classList.toggle("hidden");
  });
});
