export function Navbar() {
  return `
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



`;
}