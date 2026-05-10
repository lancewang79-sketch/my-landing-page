import React, { useState } from "react";
import "./App.css";

const copy = {
  en: {
    toggle: "中文",
    announcement: "As an Amazon Associate, I earn from qualifying purchases.",
    navProducts: "Product Picks",
    navGuides: "Beauty Guides",
    navRoutine: "Routine",
    navDisclosure: "Disclosure",
    heroKicker: "Beauty edits for everyday routines",
    heroTitle: "Curated skincare, beauty tools and self-care finds.",
    heroText: "Glow Skin Picks helps readers discover thoughtful beauty products, compare everyday essentials and build simple routines with clear, transparent affiliate disclosures.",
    shop: "Shop the Edit",
    guides: "Read the Guides",
    note: "This page may contain affiliate links. If you buy through these links, I may earn a commission at no extra cost to you.",
    categories: "Browse by category",
    categoryKicker: "The beauty counter",
    featured: "Featured recommendations",
    featuredTitle: "Everyday picks worth considering",
    featuredText: "These product buttons use Amazon affiliate links. Product recommendations are for general informational purposes only.",
    bestFor: "Best for",
    amazon: "Check on Amazon",
    routineKicker: "Simple routine framework",
    routineTitle: "Cleanse. Hydrate. Protect. Refine.",
    routineText: "A professional affiliate site should help readers understand how a product fits into a routine, not only push a product link.",
    journal: "Beauty journal",
    journalTitle: "Guides that build trust",
    guide: "Guide",
    readMore: "Read more",
    disclosureKicker: "Transparency",
    disclosureTitle: "Affiliate disclosure",
    disclosureText: "As an Amazon Associate, I earn from qualifying purchases. This means I may earn a commission when readers purchase products through affiliate links on this website, at no extra cost to them. Product recommendations are for general informational purposes only.",
    footer: "Beauty, skincare and self-care recommendations.",
    privacy: "Privacy Policy",
    contact: "Contact",
    steps: [
      ["Cleanse", "Start with a comfortable everyday cleanser category."],
      ["Hydrate", "Introduce moisturiser and simple self-care essentials."],
      ["Protect", "Guide readers toward daily sunscreen education."],
      ["Refine", "Add tools, makeup basics and routine-friendly extras."],
    ],
  },
  zh: {
    toggle: "English",
    announcement: "作为 Amazon Associate，我会从符合条件的购买中获得佣金。",
    navProducts: "好物推荐",
    navGuides: "美妆指南",
    navRoutine: "护肤流程",
    navDisclosure: "联盟披露",
    heroKicker: "日常护肤与美妆精选",
    heroTitle: "精选护肤、美妆工具与自我护理好物。",
    heroText: "Glow Skin Picks 帮助读者发现值得关注的美妆护肤产品，比较日常实用好物，并用清晰透明的联盟披露建立信任。",
    shop: "浏览精选好物",
    guides: "阅读美妆指南",
    note: "本页面可能包含联盟链接。如果你通过这些链接购买产品，我可能会获得佣金，但不会增加你的额外费用。",
    categories: "按类别浏览",
    categoryKicker: "美妆分类",
    featured: "精选推荐",
    featuredTitle: "值得考虑的日常美妆护肤好物",
    featuredText: "以下按钮已使用 Amazon 联盟链接。产品推荐仅用于一般信息参考，不构成医疗或专业建议。",
    bestFor: "适合",
    amazon: "在 Amazon 查看",
    routineKicker: "简单护肤框架",
    routineTitle: "清洁。保湿。防护。优化。",
    routineText: "专业的联盟网站不应只放产品链接，也应帮助读者理解产品如何融入日常护肤和美妆流程。",
    journal: "美妆护肤专栏",
    journalTitle: "用内容建立信任",
    guide: "指南",
    readMore: "阅读更多",
    disclosureKicker: "透明披露",
    disclosureTitle: "联盟链接披露",
    disclosureText: "作为 Amazon Associate，我会从符合条件的购买中获得佣金。这意味着当读者通过本网站的联盟链接购买产品时，我可能会获得佣金，但不会增加读者的额外费用。本网站的产品推荐仅供一般信息参考。",
    footer: "美妆、护肤与自我护理推荐。",
    privacy: "隐私政策",
    contact: "联系",
    steps: [
      ["清洁", "从适合日常使用的温和洁面开始。"],
      ["保湿", "加入保湿产品和简单的自我护理好物。"],
      ["防护", "帮助读者了解日常防晒的重要性。"],
      ["优化", "加入美妆工具、基础彩妆和流程辅助好物。"],
    ],
  },
};

const categories = [
  { en: "Skincare", zh: "护肤" },
  { en: "Makeup", zh: "彩妆" },
  { en: "Beauty Tools", zh: "美妆工具" },
  { en: "Body Care", zh: "身体护理" },
  { en: "Hair Care", zh: "头发护理" },
  { en: "Travel Beauty", zh: "旅行美妆" },
];

const products = [
  { label: { en: "Cleanser", zh: "洁面" }, name: { en: "Gentle Daily Cleanser", zh: "温和日常洁面" }, line: { en: "A soft-start cleansing pick for simple morning and evening routines.", zh: "适合早晚基础护肤流程的温和洁面选择。" }, category: { en: "Cleanser", zh: "洁面" }, bestFor: { en: "New skincare routines", zh: "护肤新手与日常清洁" }, href: "https://amzn.to/4wlR6QS" },
  { label: { en: "Moisturiser", zh: "面霜" }, name: { en: "Lightweight Moisturiser", zh: "轻盈保湿面霜" }, line: { en: "A comfortable daily moisturiser category for a smoother routine.", zh: "适合日常使用的轻盈保湿选择，让护肤流程更简单。" }, category: { en: "Moisturiser", zh: "保湿" }, bestFor: { en: "Everyday hydration", zh: "日常补水保湿" }, href: "https://amzn.to/4wABDfY" },
  { label: { en: "Sunscreen", zh: "防晒" }, name: { en: "Everyday Sunscreen", zh: "日常防晒" }, line: { en: "A daily protection step for readers building a consistent morning routine.", zh: "适合建立早间护肤习惯的日常防护步骤。" }, category: { en: "Sunscreen", zh: "防晒" }, bestFor: { en: "Morning skincare", zh: "早间护肤流程" }, href: "https://amzn.to/4nmIqpe" },
  { label: { en: "Lip Care", zh: "唇部护理" }, name: { en: "Lip Balm", zh: "润唇膏" }, line: { en: "A handbag-friendly lip care pick for everyday self-care and travel.", zh: "适合放在包里、旅行或日常使用的唇部护理好物。" }, category: { en: "Lip Care", zh: "唇部护理" }, bestFor: { en: "Daily beauty essentials", zh: "日常美妆必备" }, href: "https://amzn.to/4cXKjFm" },
  { label: { en: "Beauty Tool", zh: "美妆工具" }, name: { en: "Makeup Sponge", zh: "美妆蛋" }, line: { en: "A practical tool pick for softer blending and everyday makeup.", zh: "适合日常底妆晕染的实用美妆工具。" }, category: { en: "Beauty Tool", zh: "美妆工具" }, bestFor: { en: "Beginner makeup", zh: "新手日常妆容" }, href: "https://amzn.to/4dfi5ot" },
  { label: { en: "Storage", zh: "收纳" }, name: { en: "Beauty Organiser", zh: "美妆收纳盒" }, line: { en: "A polished organiser pick for keeping skincare and makeup easier to find.", zh: "帮助整理护肤品、彩妆和工具，让梳妆台更清爽。" }, category: { en: "Beauty Storage", zh: "美妆收纳" }, bestFor: { en: "Tidier vanity setups", zh: "梳妆台收纳" }, href: "https://amzn.to/4do9gJc" },
  { label: { en: "Self-Care", zh: "自我护理" }, name: { en: "Soft Face Towels", zh: "柔软洁面巾" }, line: { en: "A simple hygiene-focused addition for cleaner skincare habits.", zh: "适合提升日常清洁习惯的简单护理小物。" }, category: { en: "Face Care", zh: "面部护理" }, bestFor: { en: "Clean skincare routines", zh: "干净清爽的护肤流程" }, href: "https://amzn.to/3R0hWOj" },
  { label: { en: "Travel", zh: "旅行" }, name: { en: "Travel Toiletry Bag", zh: "旅行洗漱包" }, line: { en: "A useful travel beauty essential for organising skincare and makeup.", zh: "适合旅行时整理护肤、彩妆和洗漱用品。" }, category: { en: "Travel Beauty", zh: "旅行美妆" }, bestFor: { en: "Trips and weekends away", zh: "短途旅行与周末出行" }, href: "https://amzn.to/4dzmgwD" },
  { label: { en: "Featured", zh: "精选" }, name: { en: "CeraVe Hydrating Facial Cleanser", zh: "CeraVe 保湿洁面乳" }, line: { en: "A widely recognised cleanser option often searched by skincare beginners.", zh: "护肤新手常搜索的经典洁面产品之一。" }, category: { en: "Cleanser", zh: "洁面" }, bestFor: { en: "Gentle everyday cleansing", zh: "温和日常清洁" }, href: "https://amzn.to/48T3EVJ" },
];

const guides = [
  { en: "Best Skincare Basics for Beginners", zh: "新手护肤基础好物指南" },
  { en: "Simple Morning Skincare Routine", zh: "简单早间护肤流程" },
  { en: "Everyday Sunscreen Guide", zh: "日常防晒选择指南" },
  { en: "Beauty Tools That Are Actually Useful", zh: "真正实用的美妆工具" },
  { en: "Affordable Makeup Essentials", zh: "日常基础彩妆必备" },
  { en: "Beauty Gift Ideas for Her", zh: "适合送她的美妆礼物灵感" },
];

function App() {
  const [lang, setLang] = useState("en");
  const t = copy[lang];

  return (
    <div className="site">
      <div className="announcement">{t.announcement}</div>

      <header className="header">
        <a className="brand" href="#home" aria-label="Glow Skin Picks home">
          <span>Glow Skin</span>
          <em>Picks</em>
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#products">{t.navProducts}</a>
          <a href="#guides">{t.navGuides}</a>
          <a href="#routine">{t.navRoutine}</a>
          <a href="#disclosure">{t.navDisclosure}</a>
          <button className="langToggle" type="button" onClick={() => setLang(lang === "en" ? "zh" : "en")}>{t.toggle}</button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="heroCopy">
            <p className="kicker">{t.heroKicker}</p>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroText}</p>
            <div className="actions">
              <a href="#products" className="button dark">{t.shop}</a>
              <a href="#guides" className="button light">{t.guides}</a>
            </div>
          </div>
          <div className="heroVisual" aria-label="Beauty editorial visual">
            <div className="portraitCard large"><span>SKINCARE</span></div>
            <div className="portraitCard small top"><span>GLOW</span></div>
            <div className="portraitCard small bottom"><span>CARE</span></div>
          </div>
        </section>

        <section className="editorialNote"><p>{t.note}</p></section>

        <section className="section split">
          <div>
            <p className="kicker">{t.categoryKicker}</p>
            <h2>{t.categories}</h2>
          </div>
          <div className="categoryList">
            {categories.map((category) => <a href="#products" key={category.en}>{category[lang]}</a>)}
          </div>
        </section>

        <section id="products" className="section productSection">
          <div className="sectionIntro">
            <p className="kicker">{t.featured}</p>
            <h2>{t.featuredTitle}</h2>
            <p>{t.featuredText}</p>
          </div>
          <div className="productGrid">
            {products.map((product, index) => (
              <article className="productCard" key={product.name.en}>
                <div className={`productImage tone${(index % 4) + 1}`}><span>{product.label[lang]}</span></div>
                <div className="productDetails">
                  <p className="productMeta">{product.category[lang]}</p>
                  <h3>{product.name[lang]}</h3>
                  <p>{product.line[lang]}</p>
                  <p className="bestFor"><strong>{t.bestFor}:</strong> {product.bestFor[lang]}</p>
                  <a href={product.href} className="textButton" target="_blank" rel="noreferrer">{t.amazon}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="routine" className="routine">
          <div className="routinePanel">
            <p className="kicker">{t.routineKicker}</p>
            <h2>{t.routineTitle}</h2>
            <p>{t.routineText}</p>
          </div>
          <div className="routineSteps">
            {t.steps.map((step, index) => (
              <div key={step[0]}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step[0]}</h3>
                <p>{step[1]}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="guides" className="section guides">
          <div className="sectionIntro">
            <p className="kicker">{t.journal}</p>
            <h2>{t.journalTitle}</h2>
          </div>
          <div className="guideGrid">
            {guides.map((guide) => (
              <article className="guideCard" key={guide.en}>
                <p>{t.guide}</p>
                <h3>{guide[lang]}</h3>
                <a href="#guides" className="guideLink">{t.readMore}</a>
              </article>
            ))}
          </div>
        </section>

        <section id="disclosure" className="disclosure">
          <div>
            <p className="kicker">{t.disclosureKicker}</p>
            <h2>{t.disclosureTitle}</h2>
          </div>
          <p>{t.disclosureText}</p>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Glow Skin Picks</strong>
          <p>{t.footer}</p>
        </div>
        <div>
          <a href="#disclosure">{t.navDisclosure}</a>
          <a href="#disclosure">{t.privacy}</a>
          <a href="#disclosure">{t.contact}</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
