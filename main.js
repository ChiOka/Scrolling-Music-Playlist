const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeConent = document.querySelector(".marquee-content");

root.style.setProperty("--marquee-elements", marqueeConent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeConent.appendChild(marqueeConent.children[i].cloneNode(true));
}

