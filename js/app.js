/**
 * Define Global Variables
 *
 */
const navbarList = document.querySelector("#navbar__list");
const main = document.querySelector("main");

// create section
const createSection = function(secNum) {
    const sectionHtml = ` 
    <section id="section${secNum}" data-nav="Section ${secNum}" >
    <div class="landing__container">
    <h2>Section ${secNum}</h2>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
    convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis,
    aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.
    </p>
    
    <p>
    Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor
    tortor, eget elementum tortor mollis non.
    </p>
    </div>
    </section>`;

    // add section in html
    main.insertAdjacentHTML("beforeend", sectionHtml);
};

// create section 4
createSection(4);

// All sections
const sections = [...document.querySelectorAll("section")];

// build the nav
(function() {
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
})();

// Add class 'active' to section when near top of viewport

// remove all active classes
const removeActive = () =>
    sections.forEach((section) => section.classList.remove("your-active-class"));

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

// Set sections as active
window.addEventListener("scroll", check);