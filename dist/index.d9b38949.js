let myToggler = document.querySelector(".nav__toggler");
let myNav = document.querySelector(".nav__menu");
myToggler.addEventListener("click", function() {
    if (myNav.classList.contains("nav__menu")) myNav.classList.replace("nav__menu", "nav__collapsible");
    else myNav.classList.replace("nav__collapsible", "nav__menu");
});

//# sourceMappingURL=index.d9b38949.js.map
