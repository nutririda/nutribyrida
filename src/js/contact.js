import '../css/style.css';

import { Navbar } from '../components/navbar.js';
import { ContactHero } from '../components/contactHero.js';
import { ContactSection } from '../components/contactSection.js';
import { ContactEnding } from '../components/contactEnding.js';
import { Footer } from '../components/footer.js';

document.querySelector('#app').innerHTML = `
    ${Navbar()}

    ${ContactHero()}
    ${ContactSection()}
    ${ContactEnding()}
    ${Footer()}
`;
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}