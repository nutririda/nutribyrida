import '../css/style.css';

import { Navbar } from '../components/navbar.js';
import { AboutHero } from '../components/aboutHero.js';

import { DNAJourney } from "../components/dnaJourney.js";
import { Philosophy } from "../components/philosophy.js";
import { Connect } from '../components/connect.js';
import { Footer } from '../components/footer.js';

document.querySelector('#app').innerHTML = `
    ${Navbar()}

    ${AboutHero()}

${DNAJourney()}
${Philosophy()}
${Connect()}
${Footer()}
`;
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}