import React from "react";
import "./App.css";

const products = [
  {
    label: "Cleanser",
    name: "Gentle Daily Cleanser",
    line: "A soft-start cleansing pick for simple morning and evening routines.",
    category: "Cleanser",
    bestFor: "New skincare routines",
    href: "https://amzn.to/4wlR6QS",
  },
  {
    label: "Moisturiser",
    name: "Lightweight Moisturiser",
    line: "A comfortable daily moisturiser category for a smoother routine.",
    category: "Moisturiser",
    bestFor: "Everyday hydration",
    href: "https://amzn.to/4wABDfY",
  },
  {
    label: "Sunscreen",
    name: "Everyday Sunscreen",
    line: "A daily protection step for readers building a consistent morning routine.",
    category: "Sunscreen",
    bestFor: "Morning skincare",
    href: "https://amzn.to/4nmIqpe",
  },
  {
    label: "Lip Care",
    name: "Lip Balm",
    line: "A handbag-friendly lip care pick for everyday self-care and travel.",
    category: "Lip Care",
    bestFor: "Daily beauty essentials",
    href: "https://amzn.to/4cXKjFm",
  },
  {
    label: "Beauty Tool",
    name: "Makeup Sponge",
    line: "A practical tool pick for softer blending and everyday makeup.",
    category: "Beauty Tool",
    bestFor: "Beginner makeup",
    href: "https://amzn.to/4dfi5ot",
  },
  {
    label: "Storage",
    name: "Beauty Organiser",
    line: "A polished organiser pick for keeping skincare and makeup easier to find.",
    category: "Beauty Storage",
    bestFor: "Tidier vanity setups",
    href: "https://amzn.to/4do9gJc",
  },
  {
    label: "Self-Care",
    name: "Soft Face Towels",
    line: "A simple hygiene-focused addition for cleaner skincare habits.",
    category: "Face Care",
    bestFor: "Clean skincare routines",
    href: "https://amzn.to/3R0hWOj",
  },
  {
    label: "Travel",
    name: "Travel Toiletry Bag",
    line: "A useful travel beauty essential for organising skincare and makeup.",
    category: "Travel Beauty",
    bestFor: "Trips and weekends away",
    href: "https://amzn.to/4dzmgwD",
  },
  {
    label: "Featured",
    name: "CeraVe Hydrating Facial Cleanser",
    line: "A widely recognised cleanser option often searched by skincare beginners.",
    category: "Cleanser",
    bestFor: "Gentle everyday cleansing",
    href: "https://amzn.to/48T3EVJ",
  },
];

const categories = [
  "Skincare",
  "Makeup",
  "Beauty Tools",
  "Body Care",
  "Hair Care",
  "Travel Beauty",
];

const guides = [
  "Best Skincare Basics for Beginners",
  "Simple Morning Skincare Routine",
  "Everyday Sunscreen Guide",
  "Beauty Tools That Are Actually Useful",
  "Affordable Makeup Essentials",
  "Beauty Gift Ideas for Her",
];

function App() {
  return (
    <div className="site">
      <div className="announcement">
        As an Amazon Associate, I earn from qualifying purchases.
      </div>

      <header className="header">
        <a className="brand" href="#home" aria-label="Glow Skin Picks home">
          <span>Glow Skin</span>
          <em>Picks</em>
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#products">Product Picks</a>
          <a href="#guides">Beauty Guides</a>
          <a href="#routine">Routine</a>
          <a href="#disclosure">Disclosure</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="heroCopy">
            <p className="kicker">Beauty edits for everyday routines</p>
            <h1>Curated skincare, beauty tools and self-care finds.</h1>
            <p>
              Glow Skin Picks helps readers discover thoughtful beauty products,
              compare everyday essentials and build simple routines with clear,
              transparent affiliate disclosures.
            </p>
            <div className="actions">
              <a href="#products" className="button dark">
                Shop the Edit
              </a>
              <a href="#guides" className="button light">
                Read the Guides
              </a>
            </div>
          </div>

          <div className="heroVisual" aria-label="Beauty editorial visual">
            <div className="portraitCard large">
              <span>SKINCARE</span>
            </div>
            <div className="portraitCard small top">
              <span>GLOW</span>
            </div>
            <div className="portraitCard small bottom">
              <span>CARE</span>
            </div>
          </div>
        </section>

        <section className="editorialNote">
          <p>
            This page may contain affiliate links. If you buy through these
            links, I may earn a commission at no extra cost to you.
          </p>
        </section>

        <section className="section split">
          <div>
            <p className="kicker">The beauty counter</p>
            <h2>Browse by category</h2>
          </div>
          <div className="categoryList">
            {categories.map((category) => (
              <a href="#products" key={category}>
                {category}
              </a>
            ))}
          </div>
        </section>

        <section id="products" className="section productSection">
          <div className="sectionIntro">
            <p className="kicker">Featured recommendations</p>
            <h2>Everyday picks worth considering</h2>
            <p>
              Replace the placeholder buttons with your real Amazon affiliate
              links after your Associates account is fully ready.
            </p>
          </div>

          <div className="productGrid">
            {products.map((product, index) => (
              <article className="productCard" key={product.name}>
                <div className={`productImage tone${index + 1}`}>
                  <span>{product.label}</span>
                </div>
                <div className="productDetails">
                  <p className="productMeta">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p>{product.line}</p>
                  <p className="bestFor">
                    <strong>Best for:</strong> {product.bestFor}
                  </p>
                  <a href={product.href} className="textButton" target="_blank" rel="noreferrer">
                    Check on Amazon
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="routine" className="routine">
          <div className="routinePanel">
            <p className="kicker">Simple routine framework</p>
            <h2>Cleanse. Hydrate. Protect. Refine.</h2>
            <p>
              A professional affiliate site should help readers understand how a
              product fits into a routine, not only push a product link.
            </p>
          </div>
          <div className="routineSteps">
            <div>
              <span>01</span>
              <h3>Cleanse</h3>
              <p>Start with a comfortable everyday cleanser category.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Hydrate</h3>
              <p>Introduce moisturiser and simple self-care essentials.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Protect</h3>
              <p>Guide readers toward daily sunscreen education.</p>
            </div>
            <div>
              <span>04</span>
              <h3>Refine</h3>
              <p>Add tools, makeup basics and routine-friendly extras.</p>
            </div>
          </div>
        </section>

        <section id="guides" className="section guides">
          <div className="sectionIntro">
            <p className="kicker">Beauty journal</p>
            <h2>Guides that build trust</h2>
          </div>
          <div className="guideGrid">
            {guides.map((guide) => (
              <article className="guideCard" key={guide}>
                <p>Guide</p>
                <h3>{guide}</h3>
                <a href="#guides" className="guideLink">
                  Read more
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="disclosure" className="disclosure">
          <div>
            <p className="kicker">Transparency</p>
            <h2>Affiliate disclosure</h2>
          </div>
          <p>
            As an Amazon Associate, I earn from qualifying purchases. This means
            I may earn a commission when readers purchase products through
            affiliate links on this website, at no extra cost to them. Product
            recommendations are for general informational purposes only.
          </p>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Glow Skin Picks</strong>
          <p>Beauty, skincare and self-care recommendations.</p>
        </div>
        <div>
          <a href="#disclosure">Disclosure</a>
          <a href="#disclosure">Privacy Policy</a>
          <a href="#disclosure">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
