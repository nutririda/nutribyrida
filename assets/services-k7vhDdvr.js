import{o as e,t}from"./footer-5xFcM9cR.js";function n(){return`
<section class="services-hero">

    <div class="container">

        <span class="section-tag">
            OUR SERVICES
        </span>

        <h1>
            Nutrition Care
            <span>Tailored Just For You</span>
        </h1>

        <p>
            From personalized meal plans to medical nutrition therapy,
            every service is designed to help you achieve lasting health
            through evidence-based nutrition.
        </p>

    </div>

</section>
`}function r(){return`
<section class="all-services">

    <div class="container">

        <div class="services-grid">

            <div class="service-box large">
                <div class="icon">🥗</div>
                <h3>Personalized Diet Plans</h3>
                <p>Customized meal plans according to your health condition, lifestyle and goals.</p>
            </div>

            <div class="service-box">
                <div class="icon">⚖️</div>
                <h3>Weight Management</h3>
                <p>Healthy weight loss and weight gain programs with sustainable nutrition guidance.</p>
            </div>

            <div class="service-box">
                <div class="icon">🩺</div>
                <h3>Nutrition Consultation</h3>
                <p>Professional one-on-one consultations to improve your overall health.</p>
            </div>

            <div class="service-box large">
                <div class="icon">❤️</div>
                <h3>Medical Nutrition Therapy</h3>
                <p>Nutrition care for Diabetes, Hypertension, PCOS, Uric Acid, Arthritis and other medical conditions.</p>
            </div>

            <div class="service-box">
                <div class="icon">🤰</div>
                <h3>Pregnancy Nutrition</h3>
                <p>Safe nutritional guidance for mothers throughout pregnancy.</p>
            </div>

            <div class="service-box">
                <div class="icon">👶</div>
                <h3>Children Nutrition</h3>
                <p>Balanced nutrition plans for growing school-age children.</p>
            </div>

        </div>

        
    </div>

</section>
`}function i(){return`
<section class="conditions-section">

    <div class="container">

        <div class="section-heading">

            <span class="section-tag">
                HEALTH CONDITIONS
            </span>

            <h2>
                Conditions We
                <span>Support</span>
            </h2>

            <p>
                Personalized nutrition guidance for a wide range of health
                conditions and lifestyle goals.
            </p>

        </div>

        <div class="conditions-grid">

            <span>⚖️ Obesity</span>
            <span>📉 Underweight</span>
            <span>🩸 Anemia</span>
            <span>💙 Hypertension</span>
            <span>🩺 Diabetes</span>
            <span>🌸 PCOS</span>
            <span>🦴 Arthritis</span>
            <span>🧬 Uric Acid</span>
            <span>🌿 Constipation</span>
            <span>🤰 Pregnancy Nutrition</span>
            <span>👶 School Children</span>

        </div>

    </div>

</section>
`}function a(){return`
<section class="services-cta">

    <div class="container">

        <div class="services-cta-box">

            <h2>
                Still Confused?
                <span></span>
            </h2>

            <p>
                Every health journey is unique. Book your consultation today
                and receive personalized nutrition guidance designed around
                your goals and lifestyle.
            </p>

            <a
                href="https://wa.me/923001234567"
                target="_blank"
                class="primary-btn"
            >
                Book Consultation
            </a>

        </div>

    </div>

</section>
`}document.querySelector(`#app`).innerHTML=`
    ${e()}
    ${n()}
    ${r()}
    ${i()}
    ${a()}
    ${t()}

   
`;var o=document.querySelector(`.menu-toggle`),s=document.querySelector(`.nav-links`);o&&s&&o.addEventListener(`click`,()=>{s.classList.toggle(`active`)});