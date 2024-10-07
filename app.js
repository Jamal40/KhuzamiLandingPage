const getCurrentLanguage = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const language = urlParams.get("language");

  const isEnglish = language === "en";

  const html = document.querySelector("html");
  html.setAttribute("dir", isEnglish ? "ltr" : "rtl");
  html.setAttribute("lang", isEnglish ? "en" : "ar");

  return isEnglish ? en : ar;
};
var locale = getCurrentLanguage();

Array.from(document.querySelectorAll(".locale")).forEach((element) => {
  let localeValue = locale[element.textContent.trim()];

  const isInput = ["TEXTAREA", "INPUT"].includes(element.tagName);
  if (isInput) {
    localeValue = locale[element.placeholder.trim()];
  }
  if (!localeValue) {
    console.warn(`${element.textContent} not found`);
    return;
  }
  if (isInput) {
    element.placeholder = localeValue;
    return;
  }
  element.innerHTML = localeValue;
});

const navItems = Array.from(document.querySelectorAll(".app-bar .nav-item"));
navItems.forEach((element) => {
  element.addEventListener("click", (e) => {
    navItems.forEach((item) => item.classList.remove("active"));
    e.currentTarget.classList.add("active");
  });
});

const collapse = document.querySelector(".collapse");
const expand = document.querySelector(".expand");
const appBar = document.querySelector(".app-bar");

collapse.addEventListener("click", () => {
  collapse.style.display = "none";
  expand.style.display = "block";
  appBar.style.height = "60px";
});

expand.addEventListener("click", () => {
  expand.style.display = "none";
  collapse.style.display = "block";
  appBar.style.height = "280px";
});
