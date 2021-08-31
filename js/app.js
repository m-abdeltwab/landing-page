/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sections = [...document.querySelectorAll("section")];
const navbarList = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const buildListItems = function() {
    // loop over each element in section list to get the information
    sections.forEach((val) => {
        // create list element
        const list = document.createElement("li");
        // add the link who carry the information to each list element

        list.innerHTML += `<a href="#${val.getAttribute(
      "id"
    )}" class="menu__link" >${val.getAttribute("data-nav")}</a>`;
        // add the entire list element to navbar list
        navbarList.appendChild(list);
    });
};

// Add class 'active' to section when near top of viewport

// #################################
// ######### (1)-First way #########
// #################################

// remove all active classes
const removeActive = () =>
    sections.forEach((section) => section.classList.remove("your-active-class"));

// (1.1)-Function First Way

// check from active section
const check = function() {
    sections.forEach((section) => {
        // set section dimensions
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;
        // check from viewport position
        if (pageYOffset >= sectionTop - sectionHeight / 2) {
            removeActive();
            section.classList.add("your-active-class");
        }
    });
};

// (1.2)-Function Second Way

// check from active section
// const check = function() {
//     sections.forEach((section) => {
//         let sectionTop = section.getBoundingClientRect().top + window.scrollY;
//         let sectionHeight = section.getBoundingClientRect().height;
//         if (pageYOffset >= sectionTop - sectionHeight / 2) {
//             removeActive();
//             section.classList.add("your-active-class");
//         }
//     });
// };

// #################################
// ######### (2)-Second way #########
// #################################

// const secFun = function(entries) {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             removeActive();
//             entry.target.classList.add("your-active-class");
//         }
//     });
// };
// const sectionObserver = new IntersectionObserver(secFun, {
//     root: null,
//     threshold: 0.5,
// });

// sections.forEach((sec) => sectionObserver.observe(sec));

// Scroll to anchor ID using scrollTO events

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildListItems();

// Set sections as active
window.addEventListener("scroll", check);