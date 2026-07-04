import instagram from '../assets/social/instagram.png';
import facebook from '../assets/social/facebook.png';
import tiktok from '../assets/social/tik-tok.png';
import youtube from '../assets/social/youtube.png';
import whatsapp from '../assets/social/whatsapp.png';

export function Connect() {
  return `
<section class="connect-section">

    <div class="container">

        <div class="connect-box">

            <h2>
                Ready to Start Your
                <span>Health Journey?</span>
            </h2>

            <p>
                Whether you're looking to improve your nutrition,
                build healthier habits or receive personalized guidance,
                I'm here to help.
            </p>

            <a
                href="https://wa.me/923001234567"
                target="_blank"
                class="connect-btn"
            >
                <img src="${whatsapp}" alt="WhatsApp">
                Book a Consultation
            </a>

            <div class="social-divider">
                Follow My Journey
            </div>

            <div class="social-links">

                <a href="#" target="_blank">
                    <img src="${instagram}" alt="Instagram">
                </a>

                <a href="#" target="_blank">
                    <img src="${facebook}" alt="Facebook">
                </a>

                <a href="#" target="_blank">
                    <img src="${tiktok}" alt="TikTok">
                </a>

                <a href="#" target="_blank">
                    <img src="${youtube}" alt="YouTube">
                </a>

            </div>

        </div>

    </div>

</section>
`;
}