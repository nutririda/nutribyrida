export function ContactSection() {
    return `
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
                        <h4>Phone</h4>
                        <p>+92 XXX XXXXXXX</p>
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-icon">📧</div>

                    <div>
                        <h4>Email</h4>
                        <p>example@email.com</p>
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

            </div>

            <div class="contact-form-box">

                <form>

                    <input
                        type="text"
                        placeholder="Your Name"
                    >

                    <input
                        type="email"
                        placeholder="Email Address"
                    >

                    <input
                        type="tel"
                        placeholder="Phone Number"
                    >

                    <textarea
                        rows="6"
                        placeholder="Tell me about your goals..."
                    ></textarea>

                    <button
                        type="submit"
                        class="primary-btn"
                    >
                        Send Message
                    </button>

                </form>

            </div>

        </div>

    </div>

</section>
`;
}