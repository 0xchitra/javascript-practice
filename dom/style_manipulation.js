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
  btn.style.backgroundColor = "#00e9d6";
  btn.style.width = "180px"
  btn.style.height = "120px"
});

//45 element.style.color = ""
// This removes the inline color style from the element.