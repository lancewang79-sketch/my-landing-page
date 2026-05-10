import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductRecommendations />
      <Disclosure />
      <About />
      <Articles />
      <Footer />
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Beauty and Skincare Essentials</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#picks">Picks</a></li>
        <li><a href="#guides">Guides</a></li>
        <li><a href="#disclosure">Disclosure</a></li>
        <li><button className="cta-button">View Product Picks</button></li>
        <li><button className="cta-button secondary">Read Buying Guide</button></li>
      </ul>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="hero">
      <h2>Glow Up Your Skincare Routine</h2>
      <h3>Explore our recommendations for beauty and skincare products.</h3>
      <button className="cta-button">View Product Picks</button>
      <button className="cta-button secondary">Read Buying Guide</button>
    </section>
  );
};

const ProductRecommendations = () => {
  return (
    <section id="picks" className="product-recommendations">
      <h2>Our Top Picks</h2>
      <div className="product-card">
        <img src="#" alt="Moisturizer" />
        <h3>Moisturizer</h3>
        <p>Hydrate and rejuvenate your skin.</p>
        <button className="cta-button">Check on Amazon</button>
      </div>
      <div className="product-card">
        <img src="#" alt="Serum" />
        <h3>Serum</h3>
        <p>Target specific skin concerns effectively.</p>
        <button className="cta-button">Check on Amazon</button>
      </div>
      <div className="product-card">
        <img src="#" alt="Sunscreen" />
        <h3>Sunscreen</h3>
        <p>Protect your skin from harmful UV rays.</p>
        <button className="cta-button">Check on Amazon</button>
      </div>
      <div className="product-card">
        <img src="#" alt="Cleanser" />
        <h3>Cleanser</h3>
        <p>Keep your face clean and fresh.</p>
        <button className="cta-button">Check on Amazon</button>
      </div>
      <div className="product-card">
        <img src="#" alt="Makeup Remover" />
        <h3>Makeup Remover</h3>
        <p>Gently remove makeup without harming skin.</p>
        <button className="cta-button">Check on Amazon</button>
      </div>
      <div className="product-card">
        <img src="#" alt="Face Mask" />
        <h3>Face Mask</h3>
        <p>Indulge your skin with a nourishing mask.</p>
        <button className="cta-button">Check on Amazon</button>
      </div>
    </section>
  );
};

const Disclosure = () => {
  return (
    <section id="disclosure" className="disclosure">
      <p>As an Amazon Associate, I earn from qualifying purchases.</p>
      <p>This page may contain affiliate links. If you buy through these links, I may earn a commission at no extra cost to you.</p>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>We provide recommendations for beauty and skincare products that enhance your routine.</p>
    </section>
  );
};

const Articles = () => {
  return (
    <section id="articles" className="articles">
      <h2>Latest Articles</h2>
      {[1,2,3,4,5,6,7,8,9,10].map(num => (
        <div key={num} className="article-card">
          <h3>Article Title {num}</h3>
          <p>Short description of what this article is about.</p>
        </div>
      ))}
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2026 Beauty and Skincare Essentials</p>
    </footer>
  );
};

export default App;