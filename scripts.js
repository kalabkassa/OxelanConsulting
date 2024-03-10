const nav = document.querySelector('.nav>ul');
const navToggle = document.querySelector(".mobile-menu");

const tabContainer = document.querySelector(".tabs-container");
const tabsList = tabContainer.querySelector("ul");
const tabButtons = tabsList.querySelectorAll("a");
const tabPanels = tabContainer.querySelectorAll(".panelwrapper");

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');
    const expanded = navToggle.getAttribute('aria-expanded')

    console.log(expanded);
    if (visibility === "false"){
        nav.setAttribute('data-visible', "true");
        navToggle.setAttribute('aria-expanded', "true");
    }
    else {
        nav.setAttribute('data-visible', "false");
        navToggle.setAttribute('aria-expanded', "false");
    }
})

tabButtons.forEach((tab, index) => {
    if(index ===0){

    } else {
        tabPanels[index].setAttribute("hidden", "");
    }
})

tabContainer.addEventListener("click", (e) => {
    const clickedTab = e.target.closest("a");
    if(!clickedTab) return;
    e.preventDefault();

    const activePanelId = clickedTab.getAttribute("href");
    const activePanel = tabContainer.querySelector(activePanelId);

    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
        panel.setAttribute("aria-expanded", "false");
    });
    activePanel.removeAttribute("hidden", false);
    activePanel.setAttribute("aria-expanded", "true")
})