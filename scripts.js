const nav = document.querySelector(".nav>ul");
const navToggle = document.querySelector(".mobile-menu");
const navbar = document.querySelector(".navbar");

const container = document.querySelector(".container");
const contactbutton = document.createElement("div");
contactbutton.setAttribute("class", "contactbutton");
contactbutton.setAttribute("onClick", "toggleContactbutton()");

const contactbuttoncontent = document.createElement("div");
contactbuttoncontent.setAttribute("class", "contactbuttoncontent");

const contactbuttoncontentcontainer = document.createElement("div");
contactbuttoncontentcontainer.setAttribute(
    "class",
    "contactbuttoncontentcontainer"
);

const contactbuttoncontainer = document.createElement("div");
contactbuttoncontainer.setAttribute("class", "contactbuttoncontainer");

const phone = document.createElement("div");
phone.setAttribute("class", "phone");
const whatsup = document.createElement("div");
whatsup.setAttribute("class", "whatsup");
const telegram = document.createElement("div");
telegram.setAttribute("class", "telegramc");
const gmail = document.createElement("div");
gmail.setAttribute("class", "gmail");

contactbuttoncontent.appendChild(phone);
contactbuttoncontent.appendChild(whatsup);
contactbuttoncontent.appendChild(telegram);
contactbuttoncontent.appendChild(gmail);

contactbuttoncontentcontainer.appendChild(contactbuttoncontent);
contactbuttoncontainer.appendChild(contactbuttoncontentcontainer);
contactbuttoncontainer.appendChild(contactbutton);
container.after(contactbuttoncontainer);

const tabContainer = document.querySelector(".tabs-container");

function toggleContactbutton() {
    contactbuttoncontent.classList.toggle("showcontacts");
}

function navto(page) {
    window.location.href = page;
}

function whychooseusnav(active) {
    var activePanel = document.getElementById(active);
    if (!activePanel) return;
    var section = document.querySelector(".whychooseuswrapper");
    section.scrollIntoView({ behavior: "smooth" });
    var lists = document
        .querySelector(".whychooseusnav")
        .querySelector("ul")
        .querySelectorAll("li");
    lists.forEach((list) => {
        list.classList.remove("active");
    });
    var list = document.getElementsByClassName(active);
    list[0].classList.add("active");

    var Panels = document
        .querySelector(".whychooseusmaincontent")
        .querySelectorAll("div");
    Panels.forEach((panel) => {
        panel.setAttribute("aria-current", "fale");
    });

    activePanel.setAttribute("aria-current", "true");
}

function getQueryParams() {
    var queryString = window.location.search.substring(1);
    return queryString;
}

// Example usage: Get the value of param1
var queryParams = getQueryParams();
if (queryParams && tabContainer) {
    const tabsList = tabContainer.querySelector("ul");
    const tabButtons = tabsList.querySelectorAll("li");
    var clickedTab = document.getElementsByClassName(queryParams)[0];
    const tabPanels = document.querySelectorAll(".panelwrapper");
    tabPanels.forEach((panel, index) => {
        panel.setAttribute("hidden", true);
        panel.setAttribute("aria-expanded", "false");
        tabButtons[index].setAttribute("aria-expanded", "false");
        tabButtons[index]
            .querySelector("a")
            .setAttribute("aria-expanded", "false");
    });
    const activePanelId = clickedTab.getAttribute("href");
    const activePanel = document.querySelector(activePanelId);

    activePanel.removeAttribute("hidden", false);
    activePanel.setAttribute("aria-expanded", "true");
    clickedTab.setAttribute("aria-expanded", "true");
    clickedTab.querySelector("a").setAttribute("aria-expanded", "true");
    console.log(activePanel);
} else if (queryParams) {
    var section = document.getElementsByClassName(queryParams);
    if (section) section[0].scrollIntoView(false);
    whychooseusnav(queryParams);
}

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    const expanded = navToggle.getAttribute("aria-expanded");

    if (visibility === "false") {
        nav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
    } else {
        nav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
    }
});

if (tabContainer) {
    const tabsList = tabContainer.querySelector("ul");
    const tabButtons = tabsList.querySelectorAll("li");
    const tabPanels = document.querySelectorAll(".panelwrapper");
    tabButtons.forEach((tab, index) => {
        if (index === 0) {
        } else {
            tabPanels[index].setAttribute("hidden", "");
        }
    });

    tabContainer.addEventListener("click", (e) => {
        const clickedTab = e.target.closest("li");
        if (!clickedTab) return;
        e.preventDefault();

        const activePanelId = clickedTab.getAttribute("href");
        const activePanel = document.querySelectorAll(activePanelId);
        console.log(activePanel);

        tabButtons.forEach((tab) => {
            tab.setAttribute("aria-expanded", "false");
            tab.querySelector("a").setAttribute("aria-expanded", "false");
        })

        tabPanels.forEach((panel, index) => {
            panel.setAttribute("hidden", true);
            panel.setAttribute("aria-expanded", "false");
        });

        activePanel.forEach((panel) => {
            panel.removeAttribute("hidden", false);
            panel.setAttribute("aria-expanded", "true");
        });
        clickedTab.setAttribute("aria-expanded", "true");
        clickedTab.querySelector("a").setAttribute("aria-expanded", "true");
    });
}

const navObserver = new IntersectionObserver(
    (entries) => {
        navbar.classList.toggle("stickynav", !entries[0].isIntersecting);
    },
    { threshold: 0.8 }
);

const herosection = document.querySelector(".herocontent");
const subherosection = document.querySelector(".subherosection");

if (herosection) navObserver.observe(herosection);
else navObserver.observe(subherosection);

function scrollToSection() {
    var section = document.getElementById("about");
    section.scrollIntoView({ behavior: "smooth" });
}
// animation

const sections = document.querySelectorAll("section");

const options = {
    rootMargin: "100px",
    threshold: 0.5,
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const animate = entry.target.querySelectorAll(".animate");
        if (animate) {
            animate.forEach((anima) => {
                anima.classList.toggle("animation");
            });
        }
        const fade = entry.target.querySelectorAll(".fade");
        if (fade) {
            fade.forEach((anima) => {
                anima.classList.toggle("fadein");
            });
        }
    });
}, options);

sections.forEach((section) => {
    observer.observe(section);
});

function countUp(target, element, duration) {
    var start = 0;
    var increment = Math.floor(target / duration);
    if (!increment) increment = 1;

    // Interval function to update the count
    var timer = setInterval(function () {
        start += increment;
        element.textContent = start;
        if (start >= target) {
            clearInterval(timer);
            element.textContent = target; // Ensure the target is reached exactly
        }
    }, 1000 / duration); // Update every second
}

// Intersection Observer to trigger countUp function when the h1 element is in view
var observer2 = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                console.log(parseInt(entry.target.textContent));
                countUp(
                    parseInt(entry.target.textContent.replace("+", "")),
                    entry.target,
                    40
                ); // Count up to the number in 3 seconds
                observer2.unobserve(entry.target); // Stop observing once triggered
            }
        });
    },
    { threshold: 0.9 }
);

// Start observing the h1 element
// observer2.observe(document.getElementById("countup"));

document.querySelectorAll("#countup").forEach((h) => {
    observer2.observe(h);
});
let popup = document.getElementById("popup");
function openpopup() {
    popup.classList.add("open-popup");
}
function closepopup() {
    popup.classList.remove("open-popup");
}
