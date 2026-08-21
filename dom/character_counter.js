let textArea = document.querySelector("#message");
let counter = document.querySelector("#counts");

textArea.addEventListener("input", function () {
  let chars = textArea.value.length;
  counter.textContent = `Total Character: ${chars}`
});
