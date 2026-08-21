const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tab.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });
    
    const tabId = tab.dataset.tab;
    const content = document.querySelector(`#${tabId}`);

    content.classList.add("active");
  });
});
