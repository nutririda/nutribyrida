(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`
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

<li><a href="/">Home</a></li>

<li><a href="/about.html">About</a></li>

<li><a href="/services.html">Services</a></li>

<li><a href="#">Research</a></li>

<li><a href="/contact.html">Contact</a></li>

<li class="mobile-btn">
<a
href="https://wa.me/923001234567"
target="_blank"
class="btn-primary"
>
Book Consultation
</a>
</li>

</ul>

<a
href="https://wa.me/923001234567"
target="_blank"
class="btn-primary desktop-btn"
>
Book Consultation
</a>

</nav>

</header>



`}function t(){return`
<footer class="footer">

    <div class="container">

        <div class="footer-content">

            <h3>NutriByRida</h3>

            <p>
                Helping you achieve a healthier lifestyle through
                evidence-based nutrition.
            </p>

            <div class="footer-social">

                <a href="#"><img src="/src/assets/social/instagram.png" alt=""></a>

                <a href="#"><img src="/src/assets/social/facebook.png" alt=""></a>

                <a href="#"><img src="/src/assets/social/tik-tok.png" alt=""></a>

                <a href="#"><img src="/src/assets/social/youtube.png" alt=""></a>

            </div>

            <div class="footer-contact">

                <span>📞 +92 XXX XXXXXXX</span>

                <span>📧 example@email.com</span>

            </div>

        </div>

        <div class="footer-bottom">

            © 2026 NutriByRida • Designed by Ali Waqar

        </div>

    </div>

</footer>
`}export{e as n,t};