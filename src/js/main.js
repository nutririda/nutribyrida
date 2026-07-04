import '../css/style.css';
import { Navbar } from '../components/navbar';
import { Hero } from '../components/hero';
import { WhyChoose } from '../components/whyChoose';
import { AboutPreview } from "../components/aboutPreview";
import { ServicesPreview } from '../components/servicesPreview.js';
import { Testimonials } from '../components/testimonials.js';
import { Footer } from '../components/footer.js';

document.querySelector('#app').innerHTML = `
  ${Navbar()}
  ${Hero()}
  ${WhyChoose()}
  ${AboutPreview()}
  ${ServicesPreview()}
  ${Testimonials()}
   ${Footer()}
`;
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}