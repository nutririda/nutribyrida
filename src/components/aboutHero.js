import ridaImage from "../assets/images/rida.png";

export function AboutHero() {
    return `

<section class="about-hero">

<div class="container about-hero-container">

<div class="about-left">

<span class="section-tag">
ABOUT NUTRIBYRIDA
</span>

<h1>
Meet <span>Syeda Rida Batool</span>
</h1>

<p>
Dedicated Nutritionist with a strong academic background in Food & Nutrition and hands-on experience in clinical nutrition, research and community health. Passionate about helping individuals improve their well-being through practical, evidence-based nutritional guidance.
</p>

<div class="about-highlights">

<div class="highlight">
🎓 Bachelor of Home Economics (Food & Nutrition)
</div>

<div class="highlight">
🏥 Clinical Nutrition Experience
</div>

<div class="highlight">
🔬 Principal Researcher
</div>

<div class="highlight">
🌍 Health Coordinator – NDS Pakistan
</div>

</div>



</div>

<div class="about-right">

<div class="about-photo">

<img src="${ridaImage}" alt="Syeda Rida Batool">

<div class="floating-card card1">

🎓 Nutrition Graduate

</div>

<div class="floating-card card2">

🔬 Research Experience

</div>

</div>

</div>

</div>

</section>

`;
}