import ridaImage from "../assets/images/rida.png";

export function AboutPreview() {
  return `
    <section class="about-preview" id="about-preview">

      <div class="container about-container">

        <div class="about-image">

          <img src="${ridaImage}" alt="Syeda Rida Batool">

          <div class="about-badge degree">
            🎓 Food & Nutrition Graduate
          </div>

          <div class="about-badge research">
            🔬 Research Experience
          </div>

        </div>

        <div class="about-content">

          <span class="section-tag">
            MEET YOUR NUTRITIONIST
          </span>

          <h2>
            Syeda Rida Batool
          </h2>

          <p>
            Passionate about helping individuals build healthier lifestyles through practical nutrition guidance, research and clinical experience.
          </p>

          <div class="about-list">

            <div class="about-item">
               Bachelor's in Food & Nutrition
            </div>

            <div class="about-item">
               Principal Researcher – GIFT University
            </div>

            <div class="about-item">
               Health Coordinator – NDS Pakistan
            </div>

            <div class="about-item">
               Hospital & Community Nutrition Experience
            </div>

          </div>

          <a href="/about.html" class="btn-primary">
            Learn More About Rida
          </a>

        </div>

      </div>

    </section>
  `;
}