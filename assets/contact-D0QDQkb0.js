import{a as e,i as t,n,o as r,r as i,t as a}from"./footer-Baq36xRm.js";function o(){return`
<section class="contact-hero">

    <div class="container">

        <span class="section-tag">
            CONTACT
        </span>

        <h1>
            Let's Start Your
            <span>Health Journey</span>
        </h1>

        <p>
            Have a question or ready to book your consultation?
            I'd love to hear from you. Reach out today and let's
            work together towards a healthier lifestyle.
        </p>

    </div>

</section>
`}function s(){return`
<section class="contact-section">
    <div class="container">
        <div class="contact-wrapper">
            <div class="contact-info">
                <span class="section-tag">
                    GET IN TOUCH
                </span>

                <h2>
                    Let's Talk About
                    <span>Your Health Goals</span>
                </h2>

                <p>
                    Whether you have questions about nutrition, want to book a consultation,
                    or simply need guidance, feel free to reach out. I'd be happy to help.
                </p>

                <div class="info-card">
                    <div class="info-icon">📞</div>
                    <div>
                        <h4>Phone / WhatsApp</h4>
                        <p>+92 300 1234567</p>
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-icon">📧</div>
                    <div>
                        <h4>Email</h4>
                        <p>nutribyrida@gmail.com</p>
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-icon">📍</div>
                    <div>
                        <h4>Location</h4>
                        <p>Pakistan</p>
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-icon">🕒</div>
                    <div>
                        <h4>Working Hours</h4>
                        <p>Mon - Sat | 9:00 AM - 6:00 PM</p>
                    </div>
                </div>

                <div class="contact-social-box" style="margin-top: 30px;">
                    <h4 style="margin-bottom: 15px; color: var(--text-dark);">Connect on Social Media</h4>
                    <div class="social-links" style="display: flex; gap: 15px;">
                        <a href="https://www.instagram.com/nutribyrida/" target="_blank"><img src="${e}" alt="Instagram" style="width: 32px; height: 32px;"></a>
                        <a href="#" target="_blank"><img src="${t}" alt="Facebook" style="width: 32px; height: 32px;"></a>
                        <a href="https://www.tiktok.com/@nutribyrida" target="_blank"><img src="${i}" alt="TikTok" style="width: 32px; height: 32px;"></a>
                        <a href="https://youtube.com/@nutribyrida?si=Sosk4ahDxme-B5bG" target="_blank"><img src="${n}" alt="YouTube" style="width: 32px; height: 32px;"></a>
                    </div>
                </div>
            </div>

            <div class="contact-form-box">
                <form>
                    <input type="text" placeholder="Your Name" required>
                    <input type="email" placeholder="Email Address" required>
                    <input type="tel" placeholder="Phone Number" required>
                    <textarea rows="6" placeholder="Tell me about your goals..." required></textarea>
                    <button type="submit" class="primary-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>
`}function c(){return`
<section class="contact-ending">

    <div class="container">

        <h3>
            Stay Connected
        </h3>

        <p>
            Follow for nutrition tips, healthy recipes and wellness updates.
        </p>

        <div class="social-links">

            <a href="#">
                <img src="/src/assets/social/instagram.png" alt="">
            </a>

            <a href="#">
                <img src="/src/assets/social/facebook.png" alt="">
            </a>

            <a href="#">
                <img src="/src/assets/social/tik-tok.png" alt="">
            </a>

            <a href="#">
                <img src="/src/assets/social/youtube.png" alt="">
            </a>

        </div>

    </div>

</section>
`}document.querySelector(`#app`).innerHTML=`
    ${r()}

    ${o()}
    ${s()}
    ${c()}
    ${a()}
`;var l=document.querySelector(`.menu-toggle`),u=document.querySelector(`.nav-links`);l&&u&&l.addEventListener(`click`,()=>{u.classList.toggle(`active`)});