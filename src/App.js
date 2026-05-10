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
      <h1>Student Productivity Recommendations</h1>
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
      <h2>Build a Better Study Desk</h2>
      <h3>Explore our recommendations for study, productivity, and desk setup products.</h3>
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
        <img src="#" alt="Ergonomic Desk Lamp" />
        <h3>Ergonomic Desk Lamp</h3>
        <p>Brighten your workspace and reduce eye strain.</p>
        <button className="cta-button">Check on Amazon</button>
      </div>
      <div className="product-card">
        <img src="#" alt="Noise-Cancelling Headphones" />
        <h3>Noise-Cancelling Headphones</h3>
        <p>Minimize distractions while studying.</p>
        <button className="cta-button">Check on Amazon</button>
      </div>
      <div className="product-card">
        <img src="#" alt="Laptop Stand" />
        <h3>Laptop Stand</h3>
        <p>Improve ergonomics and comfort.</p>
        <button className="cta-button">Check on Amazon</button>
      </div>
      <div className="product-card">
        <img src="#" alt="Mechanical Keyboard" />
        <h3>Mechanical Keyboard</h3>
        <p>Enhance your typing experience.</p>
        <button className="cta-button">Check on Amazon</button>
      </div>
      <div className="product-card">
        <img src="#" alt="Study Planner" />
        <h3>Study Planner</h3>
        <p>Organize your study sessions effectively.</p>
        <button className="cta-button">Check on Amazon</button>
      </div>
      <div className="product-card">
        <img src="#" alt="Desk Organiser" />
        <h3>Desk Organiser</h3>
        <p>Keeps your workspace tidy and efficient.</p>
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
      <p>We provide recommendations for products that enhance productivity and organization for students.</p>
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
      <p>© 2026 Student Productivity Recommendations</p>
    </footer>
  );
};

export default App;