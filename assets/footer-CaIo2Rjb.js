(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=`/nutribyrida/`;return`
<header>
  <nav class="container navbar">
    <div class="logo">
      Nutri<span>ByRida</span>
    </div>

    <div class="menu-toggle">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <ul class="nav-links">
      <li><a href="${e}index.html">Home</a></li>
      <li><a href="${e}about.html">About</a></li>
      <li><a href="${e}services.html">Services</a></li>
      <li><a href="#">Research</a></li>
      <li><a href="${e}contact.html">Contact</a></li>
      <li class="mobile-btn">
        <a href="https://wa.me/923001234567" target="_blank" class="btn-primary">
          Book Consultation
        </a>
      </li>
    </ul>

    <a href="https://wa.me/923001234567" target="_blank" class="btn-primary desktop-btn">
      Book Consultation
    </a>
  </nav>
</header>
`}var t=`/nutribyrida/assets/instagram-CVFJBcOL.png`,n=`/nutribyrida/assets/facebook-ejnf6rkB.png`,r=`/nutribyrida/assets/tik-tok-DYhNgQYZ.png`,i=`/nutribyrida/assets/youtube-SsrGC1K8.png`;function a(){return`
<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <h3>NutriByRida</h3>
            <p>
                Helping you achieve a healthier lifestyle through
                evidence-based nutrition.
            </p>

            <div class="footer-social">
                <a href="https://www.instagram.com/nutribyrida/" target="_blank"><img src="${t}" alt="Instagram"></a>
                <a href="#" target="_blank"><img src="${n}" alt="Facebook"></a>
                <a href="https://www.tiktok.com/@nutribyrida" target="_blank"><img src="${r}" alt="TikTok"></a>
                <a href="https://youtube.com/@nutribyrida?si=Sosk4ahDxme-B5bG" target="_blank"><img src="${i}" alt="YouTube"></a>
            </div>

            <div class="footer-contact">
                <span>📞 +92 300 1234567</span>
                <span>📧 nutribyrida@gmail.com</span>
            </div>
        </div>

        <div class="footer-bottom">
            © 2026 NutriByRida • Designed by Ali Waqar
        </div>
    </div>
</footer>
`}export{t as a,n as i,i as n,e as o,r,a as t};