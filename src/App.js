import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Disclosure />
      <ProductCategories />
      <ProductRecommendations />
      <Articles />
      <TrustSection />
      <Footer />
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Glow Skin Picks</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#picks">Product Picks</a></li>
        <li><a href="#guides">Beauty Guides</a></li>
        <li><a href="#disclosure">Disclosure</a></li>
        <li><button className="cta-button">View Product Picks</button></li>
        <li><button className="cta-button secondary">Read Beauty Guides</button></li>
      </ul>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="hero">
      <h2>Glow Skin Picks: Beauty & Skincare Finds Worth Trying</h2>
      <h3>Simple, helpful product recommendations for skincare, beauty tools, everyday makeup, and self-care routines.</h3>
      <button className="cta-button">Explore Product Picks</button>
      <button className="cta-button secondary">Read Beauty Guides</button>
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

const ProductCategories = () => {
  return (
    <section className="product-categories">
      <h2>Product Categories</h2>
      <div className="category-card">
        <h3>Skincare Basics</h3>
        <p>Essential products for your daily routine.</p>
      </div>
      <div className="category-card">
        <h3>Sunscreen & Daily Protection</h3>
        <p>Protect your skin from harmful UV rays.</p>
      </div>
      <div className="category-card">
        <h3>Moisturisers</h3>
        <p>Hydrate your skin effectively.</p>
      </div>
      <div className="category-card">
        <h3>Cleansers</h3>
        <p>Keep your skin clean and fresh.</p>
      </div>
      <div className="category-card">
        <h3>Beauty Tools</h3>
        <p>Enhance your beauty routine effortlessly.</p>
      </div>
      <div className="category-card">
        <h3>Everyday Makeup</h3>
        <p>Must-haves for a simple, natural look.</p>
      </div>
      <div className="category-card">
        <h3>Body Care</h3>
        <p>Everything you need for healthy skin all over.</p>
      </div>
      <div className="category-card">
        <h3>Hair Care</h3>
        <p>Keep your hair looking its best.</p>
      </div>
    </section>
  );
};

const ProductRecommendations = () => {
  return (
    <section id="picks" className="product-recommendations">
      <h2>Featured Product Recommendations</h2>
      <div className="product-card">
        <img src="https://via.placeholder.com/150" alt="Gentle Daily Cleanser" />
        <h3>Gentle Daily Cleanser</h3>
        <p>Brighten up your daily routine with this soothing cleanser.</p>
        <p>Best for: All skin types</p>
        <a className="cta-button" href="#">Check on Amazon</a>
      </div>
      <div className="product-card">
        <img src="https://via.placeholder.com/150" alt="Lightweight Moisturiser" />
        <h3>Lightweight Moisturiser</h3>
        <p>Keep your skin hydrated without feeling heavy.</p>
        <p>Best for: Dry skin</p>
        <a className="cta-button" href="#">Check on Amazon</a>
      </div>
      <div className="product-card">
        <img src="https://via.placeholder.com/150" alt="Everyday Sunscreen" />
        <h3>Everyday Sunscreen</h3>
        <p>Protect your skin from sun damage with ease.</p>
        <p>Best for: Daily wear</p>
        <a className="cta-button" href="#">Check on Amazon</a>
      </div>
      <div className="product-card">
        <img src="https://via.placeholder.com/150" alt="Lip Balm" />
        <h3>Lip Balm</h3>
        <p>Keep your lips hydrated and protected.</p>
        <p>Best for: Chapped lips</p>
        <a className="cta-button" href="#">Check on Amazon</a>
      </div>
      <div className="product-card">
        <img src="https://via.placeholder.com/150" alt="Makeup Sponge" />
        <h3>Makeup Sponge</h3>
        <p>Achieve a flawless finish with this must-have tool.</p>
        <p>Best for: Makeup application</p>
        <a className="cta-button" href="#">Check on Amazon</a>
      </div>
      <div className="product-card">
        <img src="https://via.placeholder.com/150" alt="Beauty Organiser" />
        <h3>Beauty Organiser</h3>
        <p>Keep your products organized and easily accessible.</p>
        <p>Best for: Storage solutions</p>
        <a className="cta-button" href="#">Check on Amazon</a>
      </div>
      <div className="product-card">
        <img src="https://via.placeholder.com/150" alt="Soft Face Towels" />
        <h3>Soft Face Towels</h3>
        <p>Gentle on your skin and perfect for daily use.</p>
        <p>Best for: Daily skincare routine</p>
        <a className="cta-button" href="#">Check on Amazon</a>
      </div>
      <div className="product-card">
        <img src="https://via.placeholder.com/150" alt="Travel Toiletry Bag" />
        <h3>Travel Toiletry Bag</h3>
        <p>Your skincare essentials sorted for travel.</p>
        <p>Best for: Convenient storage</p>
        <a className="cta-button" href="#">Check on Amazon</a>
      </div>
    </section>
  );
};

const TrustSection = () => {
  return (
    <section className="trust-section">
      <h2>Why Trust Us</h2>
      <p>Our recommendations are curated for everyday routines.</p>
      <p>We keep our content simple and beginner-friendly.</p>
      <p>All product descriptions are clear and avoid exaggerated claims.</p>
      <p>Affiliate links are disclosed to maintain transparency.</p>
    </section>
  );
};

const Articles = () => {
  return (
    <section id="articles" className="articles">
      <h2>Latest Articles</h2>
      <div className="article-card">
        <h3>Best Skincare Basics for Beginners</h3>
        <p>Learn about essential skincare products to start your journey.</p>
        <p>Category: Skincare Basics</p>
        <a className="cta-button" href="#">Read Guide</a>
      </div>
      <div className="article-card">
        <h3>Simple Morning Skincare Routine</h3>
        <p>A quick guide to kickstart your day with healthy skin.</p>
        <p>Category: Skincare Basics</p>
        <a className="cta-button" href="#">Read Guide</a>
      </div>
      <div className="article-card">
        <h3>Simple Night Skincare Routine</h3>
        <p>How to maintain your glow overnight.</p>
        <p>Category: Skincare Basics</p>
        <a className="cta-button" href="#">Read Guide</a>
      </div>
      <div className="article-card">
        <h3>How to Choose a Gentle Cleanser</h3>
        <p>Tips for selecting a cleanser that suits your skin.</p>
        <p>Category: Cleansers</p>
        <a className="cta-button" href="#">Read Guide</a>
      </div>
      <div className="article-card">
        <h3>Everyday Sunscreen Guide</h3>
        <p>Your go-to guide for sunscreen selection and use.</p>
        <p>Category: Sunscreens</p>
        <a className="cta-button" href="#">Read Guide</a>
      </div>
      <div className="article-card">
        <h3>Beauty Tools That Are Actually Useful</h3>
        <p>Discover the tools that will enhance your beauty routine.</p>
        <p>Category: Beauty Tools</p>
        <a className="cta-button" href="#">Read Guide</a>
      </div>
      <div className="article-card">
        <h3>Affordable Makeup Essentials</h3>
        <p>Must-have makeup products that won’t break the bank.</p>
        <p>Category: Makeup Essentials</p>
        <a className="cta-button" href="#">Read Guide</a>
      </div>
      <div className="article-card">
        <h3>Travel Beauty Products Checklist</h3>
        <p>Your essential packing list for beautiful skin when traveling.</p>
        <p>Category: Beauty Tools</p>
        <a className="cta-button" href="#">Read Guide</a>
      </div>
      <div className="article-card">
        <h3>Body Care Products for Daily Self-Care</h3>
        <p>How to care for your body while balancing your skincare routine.</p>
        <p>Category: Body Care</p>
        <a className="cta-button" href="#">Read Guide</a>
      </div>
      <div className="article-card">
        <h3>Beauty Gift Ideas for Her</h3>
        <p>Perfect gift ideas for the beauty lover in your life.</p>
        <p>Category: Gift Ideas</p>
        <a className="cta-button" href="#">Read Guide</a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2026 Glow Skin Picks</p>
      <p>Beauty, skincare, and self-care recommendations are our focus.</p>
      <p>As an Amazon Associate, I earn from qualifying purchases.</p>
      <p><a href="#">Privacy Policy</a> | <a href="#">Contact</a> | <a href="#disclosure">Disclosure</a></p>
    </footer>
  );
};

export default App;