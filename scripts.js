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

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    const expanded = navToggle.getAttribute("aria-expanded");

    console.log(expanded);
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
            console.log(tabPanels[index]);
        }
    });

    tabContainer.addEventListener("click", (e) => {
        const clickedTab = e.target.closest("li");
        if (!clickedTab) return;
        e.preventDefault();

        const activePanelId = clickedTab.getAttribute("href");
        const activePanel = document.querySelector(activePanelId);

        tabPanels.forEach((panel, index) => {
            panel.setAttribute("hidden", true);
            panel.setAttribute("aria-expanded", "false");
            tabButtons[index].setAttribute("aria-expanded", "false");
            tabButtons[index]
                .querySelector("a")
                .setAttribute("aria-expanded", "false");
        });

        activePanel.removeAttribute("hidden", false);
        activePanel.setAttribute("aria-expanded", "true");
        clickedTab.setAttribute("aria-expanded", "true");
        clickedTab.querySelector("a").setAttribute("aria-expanded", "true");
    });
}

const navObserver = new IntersectionObserver(
    (entries) => {
        console.log(entries);
        navbar.classList.toggle("stickynav", !entries[0].isIntersecting);
    },
    { rootMargin: "-800px 0px 0px 0px" }
);

const herosection = document.querySelector(".herocontent");
const subherosection = document.querySelector(".subherocontent");

if (herosection) navObserver.observe(herosection);
else navObserver.observe(subherosection);
// navObserver.observe(scrollWatcher);
