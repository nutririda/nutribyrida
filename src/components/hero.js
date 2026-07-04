import heroImage from '../assets/images/hero.jpg';

export function Hero() {
  return `
    <section class="hero">
      <div class="container hero-container">

        <div class="hero-content">

          <span class="hero-tag">
            Evidence-Based Nutrition
          </span>

          <h1>
            Eat Better.<br>
            Feel Stronger.<br>
            Live Healthier.
          </h1>

          <p>
            Personalized nutrition guidance rooted in science, helping you build healthier habits with practical and sustainable care.
          </p>

          <div class="hero-buttons">

            <a
              href="https://wa.me/923212880323?text=Hello%20Rida,%20I%20visited%20your%20website%20and%20would%20like%20to%20book%20a%20nutrition%20consultation."
              target="_blank"
              class="btn-primary">

              Book Consultation

            </a>

            <a href="services.html" class="btn-secondary">
              Explore Services
            </a>

          </div>

        </div>

        <div class="hero-image">
          <img src="${heroImage}" alt="Healthy Lifestyle">
        </div>

      </div>
    </section>
  `;
}