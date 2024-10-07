const getCurrentLanguage = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const language = urlParams.get('language');

    const isEnglish = language === 'en'

    const html = document.querySelector('html');
    html.setAttribute('dir', isEnglish ? 'ltr' : 'rtl');
    html.setAttribute('lang', isEnglish ? 'en' : "ar")

    return isEnglish ? en : ar
}
var locale = getCurrentLanguage();

Array.from(document.querySelectorAll(".locale")).forEach(element => {
    let localeValue = locale[element.textContent];

    const isInput = ['TEXTAREA', 'INPUT'].includes(element.tagName)
    if (isInput) {
        localeValue = locale[element.placeholder];
    }
    if (!localeValue) {
        console.warn(`${element.textContent} not found in ${locale}`)
        return;
    }
    if (isInput) {
        element.placeholder = localeValue;
        return
    }
    element.innerHTML = localeValue;
});

const navItems = Array.from(document.querySelectorAll(".app-bar .nav-item"));
navItems.forEach(element => {
    element.addEventListener("click", (e) => {
        navItems.forEach(item => item.classList.remove("active"));
        e.currentTarget.classList.add("active");
    })
});