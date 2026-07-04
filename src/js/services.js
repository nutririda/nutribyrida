import '../css/style.css';

import { Navbar } from '../components/navbar.js';
import { ServicesHero } from '../components/servicesHero.js';
import { AllServices } from '../components/allServices.js';
import { Conditions } from '../components/conditions.js';
import { ServicesCTA } from '../components/servicesCTA.js';
import { Footer } from '../components/footer.js';

document.querySelector('#app').innerHTML = `
    ${Navbar()}
    ${ServicesHero()}
    ${AllServices()}
    ${Conditions()}
    ${ServicesCTA()}
    ${Footer()}

   
`;
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}