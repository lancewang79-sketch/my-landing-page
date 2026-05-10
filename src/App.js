import React, { useRef, useState } from "react";
import "./App.css";

import gentleCleanserImg from "./images/gentle-cleanser.jpg";
import lightweightMoisturiserImg from "./images/lightweight-moisturiser.jpg";
import everydaySunscreenImg from "./images/everyday-sunscreen.jpg";
import lipBalmImg from "./images/lip-balm.jpg";
import makeupSpongeImg from "./images/makeup-sponge.jpg";
import beautyOrganiserImg from "./images/beauty-organiser.jpg";
import softFaceTowelsImg from "./images/soft-face-towels.jpg";
import travelToiletryBagImg from "./images/travel-toiletry-bag.jpg";
import ceraveCleanserImg from "./images/cerave-cleanser.jpg";
import salicylicCleanserImg from "./images/salicylic-acid-cleanser.jpg";
import benzoylPeroxideWashImg from "./images/benzoyl-peroxide-wash.jpg";
import azelaicBlemishSerumImg from "./images/azelaic-acid-blemish-serum.jpg";
import nonComedogenicMoisturiserImg from "./images/non-comedogenic-lightweight-moisturiser.jpg";
import oilFreeSunscreenAcneImg from "./images/oil-free-sunscreen-acne-prone.jpg";
import ceramideCreamImg from "./images/ceramide-moisturising-cream.jpg";
import richMoisturiserImg from "./images/fragrance-free-rich-moisturiser.jpg";
import cicaplastBaumeImg from "./images/cicaplast-baume-b5.jpg";
import petrolatumOintmentImg from "./images/petrolatum-healing-ointment.jpg";
import hydratingCleanserDryImg from "./images/hydrating-cleanser-dry-sensitive.jpg";
import fragranceFreeCleanserImg from "./images/fragrance-free-gentle-cleanser.jpg";
import barrierRepairCreamImg from "./images/barrier-repair-cream.jpg";
import mineralSunscreenImg from "./images/mineral-sunscreen-zinc-spf30.jpg";
import azelaicRednessSerumImg from "./images/azelaic-acid-redness-serum.jpg";
import centellaCalmingSerumImg from "./images/centella-calming-serum.webp";
import foamingCleanserOilyImg from "./images/foaming-cleanser-oily-skin.jpg";
import niacinamideOilyPoresImg from "./images/niacinamide-oily-pores-serum.jpg";
import oilFreeGelMoisturiserImg from "./images/oil-free-gel-moisturiser.jpg";
import oilFreeSunscreenSpf50Img from "./images/oil-free-sunscreen-spf50.jpg";
import clayMaskOilyTzoneImg from "./images/clay-mask-oily-tzone.jpg";
import beginnerRetinolSerumImg from "./images/beginner-retinol-serum.jpg";
import beginnerRetinalSerumImg from "./images/beginner-retinal-serum.jpg";
import peptideSerumImg from "./images/peptide-serum-fine-lines.jpg";
import hyaluronicAcidSerumImg from "./images/hyaluronic-acid-serum.jpg";
import spf50AntiAgingImg from "./images/spf50-anti-aging-sunscreen.jpg";
import spf50DarkSpotsImg from "./images/spf50-dark-spots-sunscreen.jpg";
import niacinamideUnevenToneImg from "./images/niacinamide-uneven-tone-serum.jpg";
import azelaicHyperpigmentationImg from "./images/azelaic-acid-hyperpigmentation.jpg";
import vitaminCSerumImg from "./images/vitamin-c-sensitive-dark-spots.jpg";
import retinolUnevenToneImg from "./images/retinol-uneven-tone-beginner.jpg";
import bhaLiquidExfoliantImg from "./images/bha-2-liquid-exfoliant.jpg";
import salicylicAcidTonerImg from "./images/salicylic-acid-toner.jpg";
import niacinamidePoresSerumImg from "./images/niacinamide-pores-serum.jpg";
import gentleFoamingCleanserPoresImg from "./images/gentle-foaming-cleanser-pores.jpg";
import clayMaskPoresTzoneImg from "./images/clay-mask-pores-tzone.jpg";

const copy = {
  en: {
    toggle: "中文",
    announcement: "As an Amazon Associate, I earn from qualifying purchases.",
    navProducts: "Product Picks",
    navGuides: "Beauty Guides",
    navAnalysis: "Skin Analysis",
    navDisclosure: "Disclosure",
    heroKicker: "Beauty edits for everyday routines",
    heroTitle: "Curated skincare, beauty tools and self-care finds.",
    heroText:
      "Glow Skin Picks helps readers discover thoughtful beauty products, compare everyday essentials and build simple routines with clear, transparent affiliate disclosures.",
    shop: "Shop the Edit",
    analyse: "Try Skin Analysis",
    note:
      "This page may contain affiliate links. If you buy through these links, I may earn a commission at no extra cost to you.",
    categoryKicker: "The beauty counter",
    categories: "Browse by category",
    featured: "Featured recommendations",
    featuredTitle: "Everyday picks worth considering",
    featuredText:
      "These product buttons use Amazon affiliate links. Product recommendations are for general informational purposes only.",
    bestFor: "Best for",
    amazon: "Check on Amazon",
    guide: "Guide",
    journal: "Beauty journal",
    journalTitle: "Guides that build trust",
    readMore: "Read more",
    disclosureKicker: "Transparency",
    disclosureTitle: "Affiliate disclosure",
    disclosureText:
      "As an Amazon Associate, I earn from qualifying purchases. This means I may earn a commission when readers purchase products through affiliate links on this website, at no extra cost to them. Product recommendations are for general informational purposes only.",
    footer: "Beauty, skincare and self-care recommendations.",
    privacy: "Privacy Policy",
    contact: "Contact",

    analysisKicker: "AI-style visual beauty analysis",
    analysisTitle: "Glow Skin Visual Analysis + Magnifier",
    analysisIntro:
      "Use the camera as a skin magnifier. Capture an overview photo, zoom into details, analyse local areas and receive a structured beauty-care report.",
    consent:
      "I understand this is a beauty routine helper, not a medical diagnosis tool.",
    privacyNote:
      "Your photo stays in your browser in this demo. It is not uploaded or stored.",
    medicalDisclaimer:
      "This tool is for general beauty and self-care guidance only. It does not diagnose or treat acne, eczema, rosacea, infection, allergy, pigmentation disease, skin cancer or any medical skin condition.",
    startCamera: "Start Camera",
    stopCamera: "Stop Camera",
    takePhoto: "Take Overview Photo",
    takeMagnifiedPhoto: "Take Magnified Photo",
    retake: "Retake",
    clearPhoto: "Clear Photo",
    runAnalysis: "Analyse Overview",
    analyseArea: "Analyse Magnified Area",
    consentRequired: "Please confirm the consent note before starting the camera.",
    cameraUnavailable:
      "Camera access is not available. Please check browser permissions or try another browser.",
    noPhoto: "Please take a photo first.",
    photoReady: "Photo captured. You can analyse the full image or inspect details with Magnifier Mode.",
    noPhotoYet: "Start camera and take a clear front-facing photo in even light.",
    lightingTips:
      "For a better result, face a window or soft light, remove strong shadows, clean your lens and avoid heavy filters.",
    reportTitle: "Your skin visual report",
    confidence: "Analysis confidence",
    scoreLow: "Low",
    scoreMild: "Mild",
    scoreModerate: "Moderate",
    scoreHigh: "High",
    expertAdvice: "Beauty-care advice",
    recommendedProducts: "Recommended products",
    targetedProductOptions: "Targeted product options",
    productLibrary: "Product Library",
    productLibraryTitle: "Shop by skin concern",
    productLibraryIntro: "Browse product options grouped by the concern detected by the visual analysis tool. Each group explains the routine purpose and shows relevant affiliate product options.",
    viewProducts: "View products",
    concernGroups: "Concern groups",
    solutionBundle: "Targeted solution bundle",
    whyBundle: "Why this combination",
    howToUse: "How to use",
    whatToAvoid: "What to avoid",
    searchKeywords: "Product search keywords",
    ingredientDirection: "Ingredient direction",
    cameraUpgradeTip: "For sharper analysis, use your phone camera, preferably the rear camera, in bright even daylight. Laptop webcams often cannot show pores, peeling or fine lines clearly.",
    routineTitle: "Suggested routine",
    morning: "Morning",
    evening: "Evening",
    optional: "Optional",
    retakeAdvice: "Retake photo for better accuracy",
    overviewMode: "Overview Mode",
    magnifierMode: "Magnifier Mode",
    zoom: "Zoom",
    selectedArea: "Selected area",
    forehead: "Forehead",
    nose: "Nose / T-zone",
    leftCheek: "Left cheek",
    rightCheek: "Right cheek",
    chin: "Chin",
    customCentre: "Centre close-up",
    localReport: "Magnified area report",
    compareZones: "Zone comparison",
    algorithmNote:
      "The algorithm estimates visual tendencies from brightness, colour-channel balance, local contrast, highlights and texture variation. It is not a clinical measurement.",
    cameraQuality: "Camera quality",
    resolution: "Resolution",
    hdTip: "For real skin detail, move the camera closer and use bright, even light. Digital zoom alone can look blurry.",
    lowResWarning: "The current camera stream is low resolution. Try a phone camera, rear camera, brighter light, or the live GitHub Pages site on mobile for sharper detail.",
    metrics: {
      lighting: "Lighting quality",
      acne: "Blemish / acne-like visibility",
      dryness: "Dryness / flaking tendency",
      redness: "Redness tendency",
      shine: "Shine / oiliness tendency",
      texture: "Texture / fine-line visibility",
      pores: "Pore / detail visibility",
      pigmentation: "Dark-spot contrast",
      evenness: "Tone evenness",
      blur: "Sharpness quality",
    },
  },
  zh: {
    toggle: "English",
    announcement: "作为 Amazon Associate，我会从符合条件的购买中获得佣金。",
    navProducts: "好物推荐",
    navGuides: "美妆指南",
    navAnalysis: "皮肤分析",
    navDisclosure: "联盟披露",
    heroKicker: "日常护肤与美妆精选",
    heroTitle: "精选护肤、美妆工具与自我护理好物。",
    heroText:
      "Glow Skin Picks 帮助读者发现值得关注的美妆护肤产品，比较日常实用好物，并用清晰透明的联盟披露建立信任。",
    shop: "浏览精选好物",
    analyse: "体验皮肤分析",
    note:
      "本页面可能包含联盟链接。如果你通过这些链接购买产品，我可能会获得佣金，但不会增加你的额外费用。",
    categoryKicker: "美妆分类",
    categories: "按类别浏览",
    featured: "精选推荐",
    featuredTitle: "值得考虑的日常美妆护肤好物",
    featuredText:
      "以下按钮已使用 Amazon 联盟链接。产品推荐仅用于一般信息参考，不构成医疗或专业建议。",
    bestFor: "适合",
    amazon: "在 Amazon 查看",
    guide: "指南",
    journal: "美妆护肤专栏",
    journalTitle: "用内容建立信任",
    readMore: "阅读更多",
    disclosureKicker: "透明披露",
    disclosureTitle: "联盟链接披露",
    disclosureText:
      "作为 Amazon Associate，我会从符合条件的购买中获得佣金。这意味着当读者通过本网站的联盟链接购买产品时，我可能会获得佣金，但不会增加读者的额外费用。本网站的产品推荐仅供一般信息参考。",
    footer: "美妆、护肤与自我护理推荐。",
    privacy: "隐私政策",
    contact: "联系",

    analysisKicker: "AI 风格皮肤视觉分析",
    analysisTitle: "Glow Skin 皮肤视觉分析 + 放大镜",
    analysisIntro:
      "把相机变成皮肤放大镜。先拍摄整体照片，再放大查看细节，分析局部区域，并生成结构化护肤报告。",
    consent:
      "我理解这是美妆护肤流程助手，不是医疗诊断工具。",
    privacyNote:
      "在这个演示版本中，你的照片只会保留在浏览器中，不会上传，也不会被储存。",
    medicalDisclaimer:
      "本工具仅用于一般美妆与自我护理建议，不用于诊断或治疗痘痘、湿疹、玫瑰痤疮、感染、过敏、色素疾病、皮肤癌或任何医学皮肤问题。",
    startCamera: "打开相机",
    stopCamera: "关闭相机",
    takePhoto: "拍摄整体照片",
    takeMagnifiedPhoto: "拍摄放大区域",
    retake: "重新拍摄",
    clearPhoto: "清除照片",
    runAnalysis: "分析整体照片",
    analyseArea: "分析放大区域",
    consentRequired: "请先勾选同意说明，再打开相机。",
    cameraUnavailable:
      "无法访问相机。请检查浏览器权限，或尝试使用其他浏览器。",
    noPhoto: "请先拍摄照片。",
    photoReady: "照片已拍摄。你可以分析整体图像，也可以使用放大镜查看细节。",
    noPhotoYet: "请打开相机，在均匀光线下拍摄清晰的正面照片。",
    lightingTips:
      "为了提升结果稳定性，建议面对窗边或柔和光源，避免强阴影，擦净镜头，不使用重滤镜。",
    reportTitle: "你的皮肤视觉分析报告",
    confidence: "分析可信度",
    scoreLow: "低",
    scoreMild: "轻微",
    scoreModerate: "中等",
    scoreHigh: "较高",
    expertAdvice: "护肤顾问建议",
    recommendedProducts: "推荐产品",
    targetedProductOptions: "针对性产品组合",
    productLibrary: "产品库",
    productLibraryTitle: "按皮肤问题浏览产品",
    productLibraryIntro: "根据视觉分析工具识别的皮肤关注点浏览产品组合。每个分组都会说明护理目的，并展示相关联盟产品选择。",
    viewProducts: "查看产品",
    concernGroups: "问题分组",
    solutionBundle: "针对性解决方案组合",
    whyBundle: "为什么这样组合",
    howToUse: "使用方法",
    whatToAvoid: "需要避免",
    searchKeywords: "产品搜索关键词",
    ingredientDirection: "成分方向",
    cameraUpgradeTip: "为了获得更清晰的分析，建议使用手机摄像头，最好是后置摄像头，并在明亮均匀的自然光下拍摄。笔记本电脑摄像头通常很难看清毛孔、脱皮和细纹。",
    routineTitle: "建议护肤流程",
    morning: "早上",
    evening: "晚上",
    optional: "可选",
    retakeAdvice: "建议重新拍摄以提高准确度",
    overviewMode: "整体模式",
    magnifierMode: "放大镜模式",
    zoom: "放大倍数",
    selectedArea: "选择区域",
    forehead: "额头",
    nose: "鼻子 / T 区",
    leftCheek: "左脸颊",
    rightCheek: "右脸颊",
    chin: "下巴",
    customCentre: "中心近距离",
    localReport: "放大区域报告",
    compareZones: "区域对比",
    algorithmNote:
      "算法会从亮度、颜色通道、局部对比度、反光和纹理变化估算视觉倾向。这不是临床检测。",
    cameraQuality: "相机质量",
    resolution: "分辨率",
    hdTip: "想看到真正皮肤细节，请把相机靠近皮肤，并使用明亮均匀光线。单纯数码放大会变模糊。",
    lowResWarning: "当前相机流分辨率偏低。建议使用手机摄像头、后置摄像头、更亮光线，或在手机上打开 GitHub Pages 网页获得更清晰细节。",
    metrics: {
      lighting: "光线质量",
      acne: "痘痘 / 瑕疵可见度",
      dryness: "干燥 / 脱皮倾向",
      redness: "泛红倾向",
      shine: "油光 / 反光倾向",
      texture: "纹理 / 细纹可见度",
      pores: "毛孔 / 细节可见度",
      pigmentation: "色沉 / 斑点样色差",
      evenness: "肤色均匀度",
      blur: "清晰度质量",
    },
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
  {
    id: "gentle-cleanser",
    label: { en: "Cleanser", zh: "洁面" },
    name: { en: "Gentle Daily Cleanser", zh: "温和日常洁面" },
    line: {
      en: "A soft-start cleansing pick for simple morning and evening routines.",
      zh: "适合早晚基础护肤流程的温和洁面选择。",
    },
    category: { en: "Cleanser", zh: "洁面" },
    bestFor: { en: "New skincare routines", zh: "护肤新手与日常清洁" },
    href: "https://amzn.to/4wlR6QS",
    image: gentleCleanserImg,
  },
  {
    id: "moisturiser",
    label: { en: "Moisturiser", zh: "面霜" },
    name: { en: "Lightweight Moisturiser", zh: "轻盈保湿面霜" },
    line: {
      en: "A comfortable daily moisturiser category for a smoother routine.",
      zh: "适合日常使用的轻盈保湿选择，让护肤流程更简单。",
    },
    category: { en: "Moisturiser", zh: "保湿" },
    bestFor: { en: "Everyday hydration", zh: "日常补水保湿" },
    href: "https://amzn.to/4wABDfY",
    image: lightweightMoisturiserImg,
  },
  {
    id: "sunscreen",
    label: { en: "Sunscreen", zh: "防晒" },
    name: { en: "Everyday Sunscreen", zh: "日常防晒" },
    line: {
      en: "A daily protection step for readers building a consistent morning routine.",
      zh: "适合建立早间护肤习惯的日常防护步骤。",
    },
    category: { en: "Sunscreen", zh: "防晒" },
    bestFor: { en: "Morning skincare", zh: "早间护肤流程" },
    href: "https://amzn.to/4nmIqpe",
    image: everydaySunscreenImg,
  },
  {
    id: "lip-balm",
    label: { en: "Lip Care", zh: "唇部护理" },
    name: { en: "Lip Balm", zh: "润唇膏" },
    line: {
      en: "A handbag-friendly lip care pick for everyday self-care and travel.",
      zh: "适合放在包里、旅行或日常使用的唇部护理好物。",
    },
    category: { en: "Lip Care", zh: "唇部护理" },
    bestFor: { en: "Daily beauty essentials", zh: "日常美妆必备" },
    href: "https://amzn.to/4cXKjFm",
    image: lipBalmImg,
  },
  {
    id: "makeup-sponge",
    label: { en: "Beauty Tool", zh: "美妆工具" },
    name: { en: "Makeup Sponge", zh: "美妆蛋" },
    line: {
      en: "A practical tool pick for softer blending and everyday makeup.",
      zh: "适合日常底妆晕染的实用美妆工具。",
    },
    category: { en: "Beauty Tool", zh: "美妆工具" },
    bestFor: { en: "Beginner makeup", zh: "新手日常妆容" },
    href: "https://amzn.to/4dfi5ot",
    image: makeupSpongeImg,
  },
  {
    id: "organiser",
    label: { en: "Storage", zh: "收纳" },
    name: { en: "Beauty Organiser", zh: "美妆收纳盒" },
    line: {
      en: "A polished organiser pick for keeping skincare and makeup easier to find.",
      zh: "帮助整理护肤品、彩妆和工具，让梳妆台更清爽。",
    },
    category: { en: "Beauty Storage", zh: "美妆收纳" },
    bestFor: { en: "Tidier vanity setups", zh: "梳妆台收纳" },
    href: "https://amzn.to/4do9gJc",
    image: beautyOrganiserImg,
  },
  {
    id: "face-towels",
    label: { en: "Self-Care", zh: "自我护理" },
    name: { en: "Soft Face Towels", zh: "柔软洁面巾" },
    line: {
      en: "A simple hygiene-focused addition for cleaner skincare habits.",
      zh: "适合提升日常清洁习惯的简单护理小物。",
    },
    category: { en: "Face Care", zh: "面部护理" },
    bestFor: { en: "Clean skincare routines", zh: "干净清爽的护肤流程" },
    href: "https://amzn.to/3R0hWOj",
    image: softFaceTowelsImg,
  },
  {
    id: "toiletry-bag",
    label: { en: "Travel", zh: "旅行" },
    name: { en: "Travel Toiletry Bag", zh: "旅行洗漱包" },
    line: {
      en: "A useful travel beauty essential for organising skincare and makeup.",
      zh: "适合旅行时整理护肤、彩妆和洗漱用品。",
    },
    category: { en: "Travel Beauty", zh: "旅行美妆" },
    bestFor: { en: "Trips and weekends away", zh: "短途旅行与周末出行" },
    href: "https://amzn.to/4dzmgwD",
    image: travelToiletryBagImg,
  },
  {
    id: "cerave",
    label: { en: "Featured", zh: "精选" },
    name: { en: "CeraVe Hydrating Facial Cleanser", zh: "CeraVe 保湿洁面乳" },
    line: {
      en: "A widely recognised cleanser option often searched by skincare beginners.",
      zh: "护肤新手常搜索的经典洁面产品之一。",
    },
    category: { en: "Cleanser", zh: "洁面" },
    bestFor: { en: "Gentle everyday cleansing", zh: "温和日常清洁" },
    href: "https://amzn.to/48T3EVJ",
    image: ceraveCleanserImg,
  },
];

const guides = [
  {
    id: "skincare-basics",
    en: "Best Skincare Basics for Beginners",
    zh: "新手护肤基础好物指南",
    summaryEn:
      "Start with a simple routine: a gentle cleanser, a comfortable moisturiser, daily sunscreen and one or two practical extras.",
    summaryZh:
      "新手护肤可以从简单流程开始：温和洁面、舒适保湿、日常防晒，再加一两个实用小物。",
  },
  {
    id: "sunscreen-guide",
    en: "Everyday Sunscreen Guide",
    zh: "日常防晒选择指南",
    summaryEn:
      "When comparing sunscreen, consider texture, finish, comfort under makeup and whether you are likely to use it consistently.",
    summaryZh:
      "选择防晒时，可以关注质地、肤感、妆前舒适度，以及自己是否愿意每天坚持使用。",
  },
  {
    id: "beauty-tools",
    en: "Beauty Tools That Are Actually Useful",
    zh: "真正实用的美妆工具",
    summaryEn:
      "Useful beauty tools should make your routine easier, cleaner or more organised.",
    summaryZh:
      "实用的美妆工具应该让流程更方便、更干净或更有条理。",
  },
];

const zoneDefs = {
  forehead: { x: 0.3, y: 0.08, w: 0.4, h: 0.22 },
  nose: { x: 0.38, y: 0.28, w: 0.24, h: 0.32 },
  leftCheek: { x: 0.14, y: 0.34, w: 0.28, h: 0.28 },
  rightCheek: { x: 0.58, y: 0.34, w: 0.28, h: 0.28 },
  chin: { x: 0.36, y: 0.66, w: 0.28, h: 0.22 },
  customCentre: { x: 0.25, y: 0.22, w: 0.5, h: 0.5 },
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function levelFromScore(score) {
  if (score < 28) return "low";
  if (score < 52) return "mild";
  if (score < 76) return "moderate";
  return "high";
}

function levelText(t, score) {
  const level = levelFromScore(score);
  return {
    low: t.scoreLow,
    mild: t.scoreMild,
    moderate: t.scoreModerate,
    high: t.scoreHigh,
  }[level];
}

function analyseCanvas(canvas, crop = null) {
  const ctx = canvas.getContext("2d");
  let sx = 0;
  let sy = 0;
  let sw = canvas.width;
  let sh = canvas.height;

  if (crop) {
    sx = Math.floor(canvas.width * crop.x);
    sy = Math.floor(canvas.height * crop.y);
    sw = Math.floor(canvas.width * crop.w);
    sh = Math.floor(canvas.height * crop.h);
  }

  const image = ctx.getImageData(sx, sy, sw, sh).data;

  let count = 0;
  let brightnessSum = 0;
  let saturationSum = 0;
  let rednessSum = 0;
  let shinePixels = 0;
  let veryBright = 0;
  let veryDark = 0;
  let skinLikePixels = 0;
  let colorVarianceSum = 0;
  let brownContrastSum = 0;
  let luminances = [];

  const sampleStep = 4;

  for (let y = 0; y < sh; y += sampleStep) {
    for (let x = 0; x < sw; x += sampleStep) {
      const idx = (y * sw + x) * 4;
      const r = image[idx];
      const g = image[idx + 1];
      const b = image[idx + 2];

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
      const saturation = max === 0 ? 0 : (max - min) / max;
      const redness = r - (g + b) / 2;
      const brownish = Math.max(0, r * 0.45 + g * 0.32 - b * 0.62 - 32);

      const skinLike =
        r > 50 &&
        g > 32 &&
        b > 20 &&
        r > b * 0.92 &&
        r > g * 0.72 &&
        saturation < 0.72 &&
        brightness > 35;

      count++;
      brightnessSum += brightness;
      saturationSum += saturation;
      rednessSum += redness;
      colorVarianceSum += Math.abs(r - g) + Math.abs(g - b) + Math.abs(r - b);
      brownContrastSum += brownish;
      luminances.push(brightness);

      if (skinLike) skinLikePixels++;
      if (brightness > 215 && saturation < 0.25) shinePixels++;
      if (brightness > 235) veryBright++;
      if (brightness < 35) veryDark++;
    }
  }

  const avgBrightness = brightnessSum / count;
  const avgSaturation = saturationSum / count;
  const avgRedness = rednessSum / count;
  const skinRatio = skinLikePixels / count;
  const avgBrownContrast = brownContrastSum / count;

  let textureSum = 0;
  let edgeCount = 0;
  let microEdges = 0;

  for (let y = 4; y < sh - 4; y += 6) {
    for (let x = 4; x < sw - 4; x += 6) {
      const idx = (y * sw + x) * 4;
      const idxRight = (y * sw + Math.min(sw - 1, x + 3)) * 4;
      const idxDown = (Math.min(sh - 1, y + 3) * sw + x) * 4;

      const lum = 0.299 * image[idx] + 0.587 * image[idx + 1] + 0.114 * image[idx + 2];
      const lumR = 0.299 * image[idxRight] + 0.587 * image[idxRight + 1] + 0.114 * image[idxRight + 2];
      const lumD = 0.299 * image[idxDown] + 0.587 * image[idxDown + 1] + 0.114 * image[idxDown + 2];

      const localEdge = Math.abs(lum - lumR) + Math.abs(lum - lumD);
      textureSum += localEdge;
      edgeCount++;
      if (localEdge > 32) microEdges++;
    }
  }

  const avgTexture = textureSum / edgeCount;
  const brightnessSpread = Math.sqrt(
    luminances.reduce((sum, lum) => sum + Math.pow(lum - avgBrightness, 2), 0) / luminances.length
  );

  const lightingScore = clamp(
    100 -
      Math.abs(avgBrightness - 145) * 0.75 -
      (veryBright / count) * 180 -
      (veryDark / count) * 160 -
      Math.max(0, brightnessSpread - 58) * 0.45,
    0,
    100
  );

  const sharpnessScore = clamp(avgTexture * 2.25 + (microEdges / Math.max(edgeCount, 1)) * 120, 0, 100);

  const acneScore = clamp(
    Math.max(0, avgRedness - 8) * 1.45 +
      Math.max(0, avgTexture - 22) * 0.9 +
      avgSaturation * 24,
    0,
    100
  );

  const drynessScore = clamp(
    Math.max(0, avgTexture - 18) * 1.15 +
      Math.max(0, 115 - avgBrightness) * 0.28 +
      Math.max(0, brightnessSpread - 42) * 0.35,
    0,
    100
  );

  const rednessScore = clamp(Math.max(0, avgRedness - 4) * 2.4 + avgSaturation * 18, 0, 100);
  const shineScore = clamp(
    (shinePixels / count) * 900 +
      (veryBright / count) * 500 +
      Math.max(0, avgBrightness - 165) * 0.45 -
      avgSaturation * 8,
    0,
    100
  );

  const textureScore = clamp(avgTexture * 1.6 + Math.max(0, brightnessSpread - 38) * 0.55, 0, 100);
  const poreScore = clamp((microEdges / Math.max(edgeCount, 1)) * 240 + Math.max(0, avgTexture - 20) * 1.1, 0, 100);
  const pigmentationScore = clamp(avgBrownContrast * 1.65 + Math.max(0, brightnessSpread - 44) * 0.55, 0, 100);
  const evennessScore = clamp(
    100 - (colorVarianceSum / count) * 0.55 - brightnessSpread * 0.55 - rednessScore * 0.12,
    0,
    100
  );

  return {
    lighting: Math.round(lightingScore),
    acne: Math.round(acneScore),
    dryness: Math.round(drynessScore),
    redness: Math.round(rednessScore),
    shine: Math.round(shineScore),
    texture: Math.round(textureScore),
    pores: Math.round(poreScore),
    pigmentation: Math.round(pigmentationScore),
    evenness: Math.round(evennessScore),
    blur: Math.round(sharpnessScore),
    confidence: Math.round(clamp(lightingScore * 0.55 + Math.min(skinRatio * 150, 100) * 0.25 + sharpnessScore * 0.2, 0, 100)),
  };
}

function getDominantConcern(result) {
  const concernScores = [
    ["acne", result.acne],
    ["dryness", result.dryness],
    ["redness", result.redness],
    ["shine", result.shine],
    ["texture", result.texture],
    ["pores", result.pores],
    ["pigmentation", result.pigmentation],
  ].sort((a, b) => b[1] - a[1]);

  return concernScores[0][1] >= 48 ? concernScores[0][0] : "maintenance";
}




const concernGroups = [
  {
    id: "acne",
    key: "acne",
    en: "Acne-like blemishes / clogged pores",
    zh: "痘痘样瑕疵 / 闭口毛孔堵塞",
    summaryEn:
      "For spot-like redness, clogged-pore texture and blemish-prone routines. Focus on gentle cleansing, low-frequency actives and barrier-safe moisturising.",
    summaryZh:
      "适合点状泛红、闭口样纹理和瑕疵倾向。重点是温和清洁、低频活性成分和不破坏屏障的保湿。",
  },
  {
    id: "dryness",
    key: "dryness",
    en: "Dryness / peeling / flaking",
    zh: "干燥 / 脱皮 / 起屑",
    summaryEn:
      "For dry-looking texture, roughness and flaky patches. Focus on barrier comfort, richer moisturising and avoiding harsh exfoliation.",
    summaryZh:
      "适合干燥纹理、粗糙和脱皮小片。重点是屏障舒缓、加强保湿和避免强去角质。",
  },
  {
    id: "redness",
    key: "redness",
    en: "Redness / sensitivity / barrier stress",
    zh: "泛红 / 敏感 / 屏障压力",
    summaryEn:
      "For red-tone tendency and stressed-looking skin. Focus on simplifying the routine, fragrance-free basics and calming support.",
    summaryZh:
      "适合泛红倾向和屏障压力感。重点是精简流程、无香精基础护理和舒缓支持。",
  },
  {
    id: "shine",
    key: "shine",
    en: "Oiliness / shine / T-zone reflection",
    zh: "油光 / T 区反光",
    summaryEn:
      "For visible shine and oily-feeling routines. Focus on gentle cleansing, lightweight hydration and comfortable sunscreen.",
    summaryZh:
      "适合明显油光和偏油肤感。重点是温和清洁、轻盈保湿和肤感舒适的防晒。",
  },
  {
    id: "texture",
    key: "texture",
    en: "Texture / fine lines / wrinkles",
    zh: "纹理 / 细纹 / 皱纹",
    summaryEn:
      "For visible texture and line-like detail. Focus on hydration, sunscreen and slow introduction of beginner anti-ageing actives.",
    summaryZh:
      "适合纹理和线状细节可见度较高。重点是保湿、防晒和循序渐进加入新手抗老成分。",
  },
  {
    id: "pigmentation",
    key: "pigmentation",
    en: "Uneven tone / dark-spot-like contrast",
    zh: "肤色不均 / 斑点样色差",
    summaryEn:
      "For uneven colour and dark-spot-like contrast. Focus on daily sunscreen first, then brightening-support ingredients.",
    summaryZh:
      "适合肤色不均和斑点样色差。重点是先稳定防晒，再考虑提亮辅助成分。",
  },
  {
    id: "pores",
    key: "pores",
    en: "Pores / visible detail / rough texture",
    zh: "毛孔 / 细节可见 / 粗糙纹理",
    summaryEn:
      "For pore visibility and rough-looking texture. Focus on gentle cleansing, low-frequency BHA and oil-balance support.",
    summaryZh:
      "适合毛孔可见度和粗糙纹理。重点是温和清洁、低频 BHA 和油脂平衡支持。",
  },
];

const affiliateLibrary = {
  acne: [
    {
      en: "Salicylic Acid Cleanser 0.5%–2%",
      zh: "水杨酸洁面 0.5%–2%",
      roleEn: "For clogged-pore and blemish-prone routines. Start slowly if skin is sensitive.",
      roleZh: "适合闭口、毛孔堵塞和痘痘倾向。敏感皮建议低频开始。",
      image: salicylicCleanserImg,
      href: "https://amzn.to/4tYtlwv",
    },
    {
      en: "Benzoyl Peroxide Wash 2.5%–4%",
      zh: "过氧化苯甲酰洁面 2.5%–4%",
      roleEn: "Optional acne-care wash. Can be drying, so pair with moisturiser.",
      roleZh: "可选控痘洁面。可能拔干，需配合保湿。",
      image: benzoylPeroxideWashImg,
      href: "https://amzn.to/42pzoOM",
    },
    {
      en: "Azelaic Acid 10% Serum",
      zh: "壬二酸 10% 精华",
      roleEn: "For blemish-prone skin, uneven tone and redness tendency.",
      roleZh: "适合瑕疵、肤色不均和泛红倾向。",
      image: azelaicBlemishSerumImg,
      href: "https://amzn.to/4d29ref",
    },
    {
      en: "Non-Comedogenic Lightweight Moisturiser",
      zh: "非致粉刺轻盈保湿",
      roleEn: "Keeps hydration in the routine without a heavy feel.",
      roleZh: "帮助维持保湿，同时减少厚重感。",
      image: nonComedogenicMoisturiserImg,
      href: "https://amzn.to/4tphjuW",
    },
    {
      en: "Oil-Free SPF 30–50 Sunscreen",
      zh: "无油 SPF30–50 防晒",
      roleEn: "Daily protection for acne-prone or oily-feeling skin.",
      roleZh: "适合痘痘肌或偏油肤感的日常防护。",
      image: oilFreeSunscreenAcneImg,
      href: "https://amzn.to/3QZjQyE",
    },
  ],
  dryness: [
    {
      en: "Ceramide Moisturising Cream",
      zh: "神经酰胺保湿霜",
      roleEn: "Core barrier-support moisturiser for dry or tight-feeling skin.",
      roleZh: "适合干燥、紧绷肤感的核心屏障保湿。",
      image: ceramideCreamImg,
      href: "https://amzn.to/4u3JRvq",
    },
    {
      en: "Fragrance-Free Rich Moisturiser",
      zh: "无香精滋润型保湿霜",
      roleEn: "Richer moisturising support for dry skin routines.",
      roleZh: "为干燥皮肤提供更滋润的保湿支持。",
      image: richMoisturiserImg,
      href: "https://amzn.to/3Pg5dqa",
    },
    {
      en: "Cicaplast Baume B5 Barrier Cream",
      zh: "Cicaplast B5 屏障修护霜",
      roleEn: "Barrier-comfort option for dry-looking or stressed areas.",
      roleZh: "适合干燥或屏障压力区域的修护选择。",
      image: cicaplastBaumeImg,
      href: "https://amzn.to/4wkWBix",
    },
    {
      en: "Petrolatum Healing Ointment",
      zh: "凡士林类修护膏",
      roleEn: "Occlusive support for very dry patches; use a small amount.",
      roleZh: "适合局部很干区域的封闭修护，少量使用即可。",
      image: petrolatumOintmentImg,
      href: "https://amzn.to/4tXz45P",
    },
    {
      en: "Hydrating Cleanser for Dry Sensitive Skin",
      zh: "干敏肌保湿洁面",
      roleEn: "Gentler cleansing direction for dryness or peeling tendency.",
      roleZh: "适合干燥或脱皮倾向的温和清洁方向。",
      image: hydratingCleanserDryImg,
      href: "https://amzn.to/4dhHBcA",
    },
  ],
  redness: [
    {
      en: "Fragrance-Free Gentle Cleanser",
      zh: "无香精温和洁面",
      roleEn: "Lower-irritation cleansing option for redness tendency.",
      roleZh: "适合泛红倾向的低刺激清洁选择。",
      image: fragranceFreeCleanserImg,
      href: "https://amzn.to/49H24qf",
    },
    {
      en: "Ceramide + Panthenol Barrier Cream",
      zh: "神经酰胺 + 泛醇屏障霜",
      roleEn: "Barrier-support option when skin looks stressed.",
      roleZh: "适合皮肤看起来有屏障压力时使用。",
      image: barrierRepairCreamImg,
      href: "https://amzn.to/4tv0ZZM",
    },
    {
      en: "Mineral Zinc Oxide SPF 30 Sunscreen",
      zh: "氧化锌矿物 SPF30 防晒",
      roleEn: "Gentler sunscreen direction for sensitive-feeling skin.",
      roleZh: "适合敏感肤感的温和防晒方向。",
      image: mineralSunscreenImg,
      href: "https://amzn.to/4tqTgfk",
    },
    {
      en: "Azelaic Acid 10% for Redness-Prone Skin",
      zh: "泛红倾向壬二酸 10%",
      roleEn: "Optional low-frequency active for redness and unevenness tendency.",
      roleZh: "可低频使用，适合泛红和不均匀倾向。",
      image: azelaicRednessSerumImg,
      href: "https://amzn.to/4uFWigJ",
    },
    {
      en: "Centella Calming Serum",
      zh: "积雪草舒缓精华",
      roleEn: "Calming-support direction for sensitive routines.",
      roleZh: "适合敏感护理流程的舒缓方向。",
      image: centellaCalmingSerumImg,
      href: "https://amzn.to/49pLZ8h",
    },
  ],
  shine: [
    {
      en: "Gentle Foaming Cleanser for Oily Skin",
      zh: "偏油肌温和泡沫洁面",
      roleEn: "Cleansing support for shine without aggressive stripping.",
      roleZh: "帮助清洁油光，但避免过度拔干。",
      image: foamingCleanserOilyImg,
      href: "https://amzn.to/4nloHGx",
    },
    {
      en: "Niacinamide Serum for Oily Skin/Pores",
      zh: "偏油/毛孔烟酰胺精华",
      roleEn: "Optional balancing ingredient for shine and visible pores.",
      roleZh: "适合油光和毛孔可见度的平衡型成分。",
      image: niacinamideOilyPoresImg,
      href: "https://amzn.to/4nlpCXh",
    },
    {
      en: "Oil-Free Gel Moisturiser",
      zh: "无油凝胶保湿",
      roleEn: "Light hydration without a heavy feel.",
      roleZh: "轻盈保湿，不容易有厚重感。",
      image: oilFreeGelMoisturiserImg,
      href: "https://amzn.to/4dE7ZxN",
    },
    {
      en: "Oil-Free SPF 50 Sunscreen",
      zh: "无油 SPF50 防晒",
      roleEn: "Comfortable daily protection for oily-feeling skin.",
      roleZh: "适合偏油肤感的日常防晒。",
      image: oilFreeSunscreenSpf50Img,
      href: "https://amzn.to/4deK1bT",
    },
    {
      en: "Clay Mask for Oily T-Zone",
      zh: "T 区油光泥膜",
      roleEn: "Occasional use only; not a daily stripping step.",
      roleZh: "低频使用即可，不建议每天强清洁。",
      image: clayMaskOilyTzoneImg,
      href: "https://amzn.to/4uwQsye",
    },
  ],
  texture: [
    {
      en: "Beginner Retinol Serum 0.1%–0.2%",
      zh: "新手低浓度视黄醇 0.1%–0.2%",
      roleEn: "Optional night active for texture/fine-line routines. Start slowly.",
      roleZh: "适合纹理/细纹护理的夜间进阶成分，需低频开始。",
      image: beginnerRetinolSerumImg,
      href: "https://amzn.to/4d03Tkl",
    },
    {
      en: "Beginner Retinal Serum",
      zh: "新手视黄醛精华",
      roleEn: "Advanced texture-care direction; introduce cautiously.",
      roleZh: "进阶纹理护理方向，需谨慎建立耐受。",
      image: beginnerRetinalSerumImg,
      href: "https://amzn.to/4dAMMWo",
    },
    {
      en: "Peptide Serum for Fine Lines",
      zh: "细纹胜肽精华",
      roleEn: "Supportive serum direction for visible fine-line routines.",
      roleZh: "适合细纹可见度护理的辅助型精华。",
      image: peptideSerumImg,
      href: "https://amzn.to/4d04533",
    },
    {
      en: "Hyaluronic Acid Serum",
      zh: "透明质酸补水精华",
      roleEn: "Hydration support when lines look more visible from dryness.",
      roleZh: "当细纹因干燥更明显时，提供补水支持。",
      image: hyaluronicAcidSerumImg,
      href: "https://amzn.to/4eDphx8",
    },
    {
      en: "Broad-Spectrum SPF 50 Anti-Aging Sunscreen",
      zh: "广谱 SPF50 抗老防晒",
      roleEn: "Daily foundation for texture, fine-line and prevention routines.",
      roleZh: "纹理、细纹和预防型护理流程的日间基础。",
      image: spf50AntiAgingImg,
      href: "https://amzn.to/4toOI92",
    },
  ],
  pigmentation: [
    {
      en: "Broad-Spectrum SPF 50 for Dark Spots",
      zh: "色沉/斑点广谱 SPF50 防晒",
      roleEn: "First priority for uneven tone and dark-spot-like contrast.",
      roleZh: "肤色不均和斑点样色差的第一优先级。",
      image: spf50DarkSpotsImg,
      href: "https://amzn.to/4uKsUGl",
    },
    {
      en: "Niacinamide 5%–10% Serum",
      zh: "烟酰胺 5%–10% 精华",
      roleEn: "Brightening-support direction for uneven tone.",
      roleZh: "适合肤色不均的提亮辅助成分。",
      image: niacinamideUnevenToneImg,
      href: "https://amzn.to/3R2aXEr",
    },
    {
      en: "Azelaic Acid 10% for Uneven Tone",
      zh: "肤色不均壬二酸 10%",
      roleEn: "Optional active for redness and pigmentation-like contrast.",
      roleZh: "适合泛红和色沉样色差的可选活性成分。",
      image: azelaicHyperpigmentationImg,
      href: "https://amzn.to/4tpuxYE",
    },
    {
      en: "Vitamin C Serum for Sensitive Skin",
      zh: "敏感肌维 C 精华",
      roleEn: "Brightening-support option; patch test if sensitive.",
      roleZh: "提亮辅助选择；敏感皮建议先局部测试。",
      image: vitaminCSerumImg,
      href: "https://amzn.to/3QZl3pG",
    },
    {
      en: "Beginner Retinol for Uneven Tone",
      zh: "肤色不均新手视黄醇",
      roleEn: "Night active direction. Use slowly and pair with sunscreen.",
      roleZh: "夜间进阶成分，需低频使用并重视防晒。",
      image: retinolUnevenToneImg,
      href: "https://amzn.to/4deKz1r",
    },
  ],
  pores: [
    {
      en: "2% BHA Liquid Exfoliant",
      zh: "2% BHA 水杨酸精华水",
      roleEn: "Optional exfoliant for clogged pores and visible texture.",
      roleZh: "适合闭口和纹理可见度，建议低频开始。",
      image: bhaLiquidExfoliantImg,
      href: "https://amzn.to/4d3tUiQ",
    },
    {
      en: "Salicylic Acid Toner",
      zh: "水杨酸爽肤水",
      roleEn: "Pore-care active direction; avoid daily use at first.",
      roleZh: "毛孔护理活性方向，初期不建议每天使用。",
      image: salicylicAcidTonerImg,
      href: "https://amzn.to/4uKt1lf",
    },
    {
      en: "Niacinamide Serum for Pores",
      zh: "毛孔烟酰胺精华",
      roleEn: "Supportive option for oil balance and pore visibility.",
      roleZh: "适合油脂平衡和毛孔可见度的辅助选择。",
      image: niacinamidePoresSerumImg,
      href: "https://amzn.to/4djInpG",
    },
    {
      en: "Gentle Foaming Cleanser for Pores",
      zh: "毛孔护理温和泡沫洁面",
      roleEn: "Daily cleansing support for oily or pore-visible areas.",
      roleZh: "适合偏油或毛孔可见区域的日常清洁。",
      image: gentleFoamingCleanserPoresImg,
      href: "https://amzn.to/4wkvXpZ",
    },
    {
      en: "Clay Mask for Pores/T-Zone",
      zh: "毛孔/T 区泥膜",
      roleEn: "Occasional T-zone care; avoid overuse.",
      roleZh: "T 区可低频使用，避免过度清洁。",
      image: clayMaskPoresTzoneImg,
      href: "https://amzn.to/4uKtALT",
    },
  ],
  maintenance: [
    {
      en: "CeraVe Hydrating Facial Cleanser",
      zh: "CeraVe 保湿洁面乳",
      roleEn: "Gentle everyday cleanser for stable basic routines.",
      roleZh: "适合稳定基础流程的温和日常洁面。",
      image: ceraveCleanserImg,
      href: "https://amzn.to/48T3EVJ",
    },
    {
      en: "Lightweight Moisturiser",
      zh: "轻盈保湿面霜",
      roleEn: "Daily moisturising support without a heavy feel.",
      roleZh: "日常保湿支持，不容易厚重。",
      image: lightweightMoisturiserImg,
      href: "https://amzn.to/4wABDfY",
    },
    {
      en: "Everyday Sunscreen",
      zh: "日常防晒",
      roleEn: "Daily protection foundation for most routines.",
      roleZh: "大多数护肤流程的日间防护基础。",
      image: everydaySunscreenImg,
      href: "https://amzn.to/4nmIqpe",
    },
  ],
};

function getSolutionBundle(lang, main) {
  const zh = lang === "zh";

  const bundles = {
    acne: {
      title: zh ? "瑕疵/痘痘倾向：控痘但不破坏屏障" : "Blemish-prone: control breakouts while protecting the barrier",
      why: zh
        ? "当画面中出现点状泛红、局部不均匀和纹理变化时，护理重点不是猛用强功效产品，而是先温和清洁、维持保湿，再低频加入针对闭口或痘痘的成分。"
        : "When the image shows spot-like redness, local unevenness and texture changes, the goal is not to overload actives. Start with gentle cleansing and moisturising, then add blemish-focused ingredients slowly.",
      ingredientDirection: zh
        ? "水杨酸/BHA、低浓度过氧化苯甲酰、壬二酸、温和洁面、非致粉刺保湿、防晒。强功效产品应低频开始。"
        : "Salicylic acid/BHA, low-strength benzoyl peroxide, azelaic acid, gentle cleanser, non-comedogenic moisturiser and sunscreen. Start strong actives slowly.",
      howToUse: zh
        ? ["早上：温和洁面 → 轻盈保湿 → 防晒", "晚上：温和洁面 → 保湿；每周低频加入一种控痘/疏通毛孔产品", "一次只新增一个强功效产品，观察 1–2 周耐受度"]
        : ["Morning: gentle cleanser → lightweight moisturiser → sunscreen", "Evening: gentle cleanser → moisturiser; add one blemish/clogged-pore product at low frequency", "Introduce only one strong active at a time and watch tolerance for 1–2 weeks"],
      avoid: zh
        ? ["不要同时叠加水杨酸、过氧化苯甲酰和视黄醇", "不要用磨砂膏反复摩擦痘痘", "不要因为出油就过度清洁"]
        : ["Do not layer salicylic acid, benzoyl peroxide and retinol all at once", "Avoid scrubbing blemishes", "Avoid over-cleansing because skin feels oily"],
      productIds: ["gentle-cleanser", "face-towels", "sunscreen", "moisturiser"],
      keywords: [
        "salicylic acid cleanser 0.5% 2% gentle acne prone skin",
        "benzoyl peroxide wash 2.5% 4% sensitive skin",
        "azelaic acid 10% serum redness blemish prone skin",
        "non comedogenic lightweight moisturiser acne prone skin",
        "oil free sunscreen SPF 30 50 acne prone skin"
      ],
    },
    dryness: {
      title: zh ? "干燥/脱皮倾向：屏障舒缓与保湿修护" : "Dryness/flaking: barrier comfort and moisture recovery",
      why: zh
        ? "如果画面出现粗糙、灰白小片或脱皮样纹理，优先级应是减少刺激、补充保湿和修护屏障，而不是立刻去角质或上视黄醇。"
        : "If the image shows roughness, grey-white patches or flaking-like texture, prioritise reducing irritation, moisturising and barrier support rather than exfoliating or starting retinol immediately.",
      ingredientDirection: zh
        ? "神经酰胺、甘油、透明质酸、尿素低浓度、角鲨烷、乳木果脂、凡士林/封闭型修护膏。"
        : "Ceramides, glycerin, hyaluronic acid, low-strength urea, squalane, shea butter and petrolatum/occlusive balms.",
      howToUse: zh
        ? ["早上：清水或温和洁面 → 保湿霜 → 防晒", "晚上：温和洁面 → 较滋润面霜；局部脱皮处可少量叠加修护膏", "皮肤刺痛或脱皮时暂停酸类和视黄醇"]
        : ["Morning: rinse or gentle cleanser → moisturiser → sunscreen", "Evening: gentle cleanser → richer cream; apply a small amount of balm on flaky patches", "Pause acids and retinoids while skin is stinging or peeling"],
      avoid: zh
        ? ["热水洗脸", "强清洁/强去角质", "脱皮时使用高浓度酸类或视黄醇"]
        : ["Hot water", "Harsh cleansing or strong exfoliation", "High-strength acids or retinol while peeling"],
      productIds: ["moisturiser", "lip-balm", "cerave", "sunscreen"],
      keywords: [
        "ceramide moisturising cream dry sensitive skin",
        "fragrance free rich moisturiser glycerin ceramides",
        "cicaplast baume b5 barrier repair cream",
        "petrolatum healing ointment dry patches",
        "hydrating cleanser dry sensitive skin"
      ],
    },
    redness: {
      title: zh ? "泛红/屏障压力：精简、舒缓、低刺激" : "Redness/barrier stress: simplify, calm and reduce irritation",
      why: zh
        ? "红色通道偏高可能来自光线、温度、刺激或皮肤状态。此时最重要的是减少复杂度，而不是继续增加强功效产品。"
        : "Higher red-channel balance can be caused by lighting, temperature, irritation or skin state. The priority is reducing routine complexity rather than adding more strong actives.",
      ingredientDirection: zh
        ? "无香精温和洁面、神经酰胺、泛醇、积雪草、壬二酸低频、矿物/温和防晒。"
        : "Fragrance-free gentle cleanser, ceramides, panthenol, centella, low-frequency azelaic acid and gentle/mineral sunscreen.",
      howToUse: zh
        ? ["早上：清水或温和洁面 → 屏障保湿 → 防晒", "晚上：温和洁面 → 修护型面霜", "先维持 2 周极简流程，再考虑加入活性成分"]
        : ["Morning: rinse or gentle cleanser → barrier moisturiser → sunscreen", "Evening: gentle cleanser → repair-style moisturiser", "Keep a minimal routine for 2 weeks before adding actives"],
      avoid: zh
        ? ["香精浓重产品", "频繁刷酸", "磨砂膏", "同时使用多种活性成分"]
        : ["Heavy fragrance", "Frequent acids", "Scrubs", "Multiple active ingredients at once"],
      productIds: ["cerave", "moisturiser", "face-towels", "sunscreen"],
      keywords: [
        "fragrance free gentle cleanser sensitive redness skin",
        "barrier repair cream ceramide panthenol sensitive skin",
        "mineral sunscreen zinc oxide sensitive skin SPF 30",
        "azelaic acid 10% sensitive redness prone skin",
        "centella calming serum sensitive skin"
      ],
    },
    shine: {
      title: zh ? "油光/T区反光：控油但不拔干" : "Shine/T-zone reflection: balance oil without stripping",
      why: zh
        ? "明显反光常与皮脂、护肤品残留或光线有关。护理目标是温和清洁和轻盈保湿，而不是把皮肤洗到紧绷。"
        : "Visible shine can come from sebum, skincare residue or lighting. The goal is gentle cleansing and lightweight hydration, not stripping the skin until it feels tight.",
      ingredientDirection: zh
        ? "温和泡沫洁面、烟酰胺、轻盈凝胶面霜、清爽防晒、吸油纸/柔软洁面巾、低频泥膜。"
        : "Gentle foaming cleanser, niacinamide, lightweight gel moisturiser, comfortable sunscreen, blotting sheets/soft towels and occasional clay mask.",
      howToUse: zh
        ? ["早上：温和洁面 → 轻盈保湿 → 清爽防晒", "白天：出油时用吸油纸轻压，不要反复洗脸", "晚上：洁面 → 轻盈保湿；泥膜每周 1 次即可"]
        : ["Morning: gentle cleanse → lightweight moisturiser → comfortable sunscreen", "Daytime: blot gently rather than washing repeatedly", "Evening: cleanser → lightweight moisturiser; clay mask about once weekly if tolerated"],
      avoid: zh
        ? ["频繁洗脸", "完全跳过保湿", "厚重闷感产品如果不舒服"]
        : ["Washing repeatedly", "Skipping moisturiser completely", "Heavy products if they feel uncomfortable"],
      productIds: ["gentle-cleanser", "sunscreen", "face-towels", "moisturiser"],
      keywords: [
        "foaming cleanser oily skin gentle",
        "niacinamide serum oily skin pores",
        "oil free gel moisturiser non comedogenic",
        "oil free sunscreen SPF 50 acne prone oily skin",
        "clay mask oily t zone once weekly"
      ],
    },
    texture: {
      title: zh ? "纹理/细纹可见度：保湿、防晒、循序渐进抗老" : "Texture/fine-line visibility: hydrate, protect and introduce actives slowly",
      why: zh
        ? "纹理和线状细节会被干燥、表情、光线和相机锐度放大。基础是保湿和防晒；耐受稳定后再考虑低强度视黄醇。"
        : "Texture and line-like detail can be amplified by dryness, expression, lighting and camera sharpness. Start with moisturising and sunscreen; consider low-strength retinol only when the skin is stable.",
      ingredientDirection: zh
        ? "保湿霜、防晒、低浓度视黄醇/视黄醛、烟酰胺、胜肽、透明质酸。视黄醇需夜间低频开始。"
        : "Moisturiser, sunscreen, low-strength retinol/retinal, niacinamide, peptides and hyaluronic acid. Retinol should start low-frequency at night.",
      howToUse: zh
        ? ["早上：保湿 → 防晒", "晚上：洁面 → 保湿；耐受后每周 1–2 晚加入低强度视黄醇", "使用视黄醇期间必须重视防晒和保湿"]
        : ["Morning: moisturiser → sunscreen", "Evening: cleanser → moisturiser; add low-strength retinol 1–2 nights weekly if tolerated", "When using retinol, be strict with sunscreen and moisturising"],
      avoid: zh
        ? ["一开始每天使用视黄醇", "脱皮泛红时继续加量", "白天不防晒"]
        : ["Starting retinol every night", "Increasing while peeling/red", "Skipping daytime sunscreen"],
      productIds: ["moisturiser", "sunscreen", "cerave", "makeup-sponge"],
      keywords: [
        "beginner retinol serum 0.1% 0.2% sensitive skin",
        "retinal serum beginner sensitive skin",
        "peptide serum fine lines fragrance free",
        "hyaluronic acid serum dry fine lines",
        "broad spectrum sunscreen SPF 50 anti aging"
      ],
    },
    pores: {
      title: zh ? "毛孔/细节可见度：疏通、控油、减少刺激" : "Pore/detail visibility: decongest, balance shine and avoid irritation",
      why: zh
        ? "毛孔可见度会受出油、近距离拍摄、光线和妆容影响。产品不能真正永久缩小毛孔，但可以通过温和清洁、控油和低频 BHA 让视觉上更平整。"
        : "Pore visibility is affected by oil, close-up distance, lighting and makeup. Products cannot permanently shrink pores, but gentle cleansing, oil balance and low-frequency BHA can help the skin look smoother.",
      ingredientDirection: zh
        ? "BHA/水杨酸、烟酰胺、温和洁面、轻盈保湿、防晒、低频泥膜。"
        : "BHA/salicylic acid, niacinamide, gentle cleanser, lightweight moisturiser, sunscreen and occasional clay mask.",
      howToUse: zh
        ? ["早上：洁面 → 轻盈保湿 → 防晒", "晚上：洁面 → 保湿；BHA 每周 1–3 次视耐受使用", "T区可低频泥膜，不要每天使用"]
        : ["Morning: cleanser → lightweight moisturiser → sunscreen", "Evening: cleanser → moisturiser; BHA 1–3 times weekly depending on tolerance", "Clay mask can be occasional for T-zone, not daily"],
      avoid: zh
        ? ["用撕拉面膜频繁拉扯", "每天强去角质", "把毛孔当作可以永久关闭的问题"]
        : ["Frequent peel-off masks", "Daily strong exfoliation", "Thinking pores can be permanently closed"],
      productIds: ["gentle-cleanser", "face-towels", "makeup-sponge", "sunscreen"],
      keywords: [
        "2% BHA liquid exfoliant pores blackheads",
        "salicylic acid toner clogged pores",
        "niacinamide serum pores oily skin",
        "gentle foaming cleanser pores oily skin",
        "clay mask pores oily t zone"
      ],
    },
    pigmentation: {
      title: zh ? "色沉/斑点样色差：防晒优先，提亮辅助" : "Dark-spot contrast/uneven tone: sunscreen first, brightening support second",
      why: zh
        ? "色差和斑点样对比最怕没有稳定防晒。任何提亮类护理都应建立在日间防晒基础上，否则效果不稳定。"
        : "Dark-spot-like contrast and uneven tone require consistent sunscreen first. Brightening-support products are less reliable without daily sun protection.",
      ingredientDirection: zh
        ? "广谱 SPF30+ 防晒、烟酰胺、维C、壬二酸、温和保湿、低频视黄醇。避免承诺快速淡斑。"
        : "Broad-spectrum SPF30+ sunscreen, niacinamide, vitamin C, azelaic acid, moisturiser and low-frequency retinol. Avoid promises of rapid spot removal.",
      howToUse: zh
        ? ["早上：保湿 → 防晒；可选维C或烟酰胺", "晚上：洁面 → 保湿；根据耐受选择壬二酸/烟酰胺/低频视黄醇", "户外时补涂防晒并配合帽子/遮阳"]
        : ["Morning: moisturiser → sunscreen; optional vitamin C or niacinamide", "Evening: cleanser → moisturiser; choose azelaic acid/niacinamide/low-frequency retinol depending on tolerance", "Reapply sunscreen outdoors and use hats/shade"],
      avoid: zh
        ? ["不防晒只用美白精华", "同时叠加多种提亮成分", "对快速变化、边界异常的斑点自行处理"]
        : ["Using brightening serums without sunscreen", "Layering many brightening actives at once", "Self-treating rapidly changing or irregular spots"],
      productIds: ["sunscreen", "moisturiser", "cerave", "lip-balm"],
      keywords: [
        "broad spectrum sunscreen SPF 50 dark spots",
        "niacinamide serum uneven skin tone 5% 10%",
        "azelaic acid 10% hyperpigmentation redness",
        "vitamin C serum sensitive skin dark spots",
        "retinol serum uneven tone beginner"
      ],
    },
    maintenance: {
      title: zh ? "状态维持：稳定基础护肤组合" : "Maintenance: stable basic routine",
      why: zh
        ? "当前没有单一特别突出的视觉问题时，不需要复杂叠加。稳定清洁、保湿、防晒就是最有价值的组合。"
        : "When there is no strong dominant concern, a stable cleanser-moisturiser-sunscreen routine is the most useful combination.",
      ingredientDirection: zh
        ? "温和洁面、保湿、防晒、必要时加入唇部护理和收纳工具。"
        : "Gentle cleanser, moisturiser, sunscreen, plus lip care and organisation if useful.",
      howToUse: zh
        ? ["早上：保湿 → 防晒", "晚上：温和洁面 → 保湿", "每次只新增一个产品，观察皮肤反应"]
        : ["Morning: moisturiser → sunscreen", "Evening: gentle cleanser → moisturiser", "Add only one new product at a time and observe response"],
      avoid: zh
        ? ["因为皮肤状态还可以就频繁尝试强功效", "跟风买太多产品"]
        : ["Adding strong actives just because skin is doing well", "Buying too many trend products"],
      productIds: ["cerave", "moisturiser", "sunscreen", "lip-balm"],
      keywords: [
        "gentle cleanser normal skin",
        "daily moisturiser fragrance free",
        "broad spectrum sunscreen SPF 30 50 daily face",
        "lip balm dry lips",
        "basic skincare set cleanser moisturiser sunscreen"
      ],
    },
  };

  return bundles[main] || bundles.maintenance;
}

function generateReport(lang, result, zoneName = "") {
  const zh = lang === "zh";
  const main = getDominantConcern(result);
  const bundle = getSolutionBundle(lang, main);
  const areaPrefix = zoneName
    ? zh
      ? `在${zoneName}区域，`
      : `In the ${zoneName} area, `
    : "";

  const advice = zh
    ? `${areaPrefix}主要视觉倾向是「${bundle.title}」。${bundle.why} 下面的方案不是医学处方，而是基于照片视觉信号生成的护肤组合建议。`
    : `${areaPrefix}the main visual tendency is “${bundle.title}.” ${bundle.why} The plan below is not a medical prescription; it is a skincare combination generated from visual signals in the photo.`;

  return {
    advice,
    routine: {
      morning: bundle.howToUse[0] || "",
      evening: bundle.howToUse[1] || "",
      optional: bundle.howToUse[2] || "",
    },
    productIds: bundle.productIds,
    main,
    bundle,
  };
}

function getProductById(id) {
  return products.find((product) => product.id === id) || products[0];
}

function MetricCard({ label, score, t, inverse = false }) {
  const displayScore = inverse ? 100 - score : score;
  return (
    <div className="metricCard">
      <div className="metricTop">
        <span>{label}</span>
        <strong>{inverse ? `${score}/100` : levelText(t, displayScore)}</strong>
      </div>
      <div className="scoreTrack">
        <div className="scoreFill" style={{ width: `${clamp(displayScore, 0, 100)}%` }} />
      </div>
      <small>{displayScore}/100</small>
    </div>
  );
}

function ProductMini({ product, lang }) {
  return (
    <a href={product.href} target="_blank" rel="noreferrer" className="miniRecommendation">
      <img src={product.image} alt={product.name[lang]} />
      <span>{product.name[lang]}</span>
    </a>
  );
}


function getAffiliateItems(main) {
  return affiliateLibrary[main] || affiliateLibrary.maintenance || [];
}

function ReportPanel({ title, result, report, t, lang, compact = false }) {
  if (!result || !report) return null;
  const recommendedProducts = report.productIds.map(getProductById);
  const affiliateItems = getAffiliateItems(report.main);

  return (
    <div className={compact ? "compactReport" : "fullReport"}>
      <div className="reportHeader">
        <p className="kicker">{title}</p>
        <h3>{t.confidence}: {result.confidence}/100</h3>
        {result.confidence < 55 && <span className="retakeBadge">{t.retakeAdvice}</span>}
      </div>

      <div className="metricGrid">
        <MetricCard label={t.metrics.lighting} score={result.lighting} t={t} inverse />
        <MetricCard label={t.metrics.blur} score={result.blur} t={t} inverse />
        <MetricCard label={t.metrics.acne} score={result.acne} t={t} />
        <MetricCard label={t.metrics.dryness} score={result.dryness} t={t} />
        <MetricCard label={t.metrics.redness} score={result.redness} t={t} />
        <MetricCard label={t.metrics.shine} score={result.shine} t={t} />
        <MetricCard label={t.metrics.texture} score={result.texture} t={t} />
        <MetricCard label={t.metrics.pores} score={result.pores} t={t} />
        <MetricCard label={t.metrics.pigmentation} score={result.pigmentation} t={t} />
        <MetricCard label={t.metrics.evenness} score={100 - result.evenness} t={t} inverse />
      </div>

      <div className="expertBox">
        <p className="kicker">{t.expertAdvice}</p>
        <p>{report.advice}</p>
      </div>

      {report.bundle && (
        <div className="bundleBox">
          <p className="kicker">{t.solutionBundle}</p>
          <h4>{report.bundle.title}</h4>

          <div className="bundleSection">
            <strong>{t.ingredientDirection}</strong>
            <p>{report.bundle.ingredientDirection}</p>
          </div>

          <div className="bundleSection">
            <strong>{t.howToUse}</strong>
            <ul>
              {report.bundle.howToUse.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="bundleSection">
            <strong>{t.whatToAvoid}</strong>
            <ul>
              {report.bundle.avoid.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="bundleSection">
            <strong>{t.searchKeywords}</strong>
            <div className="keywordGrid">
              {report.bundle.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
            </div>
          </div>
        </div>
      )}

      {!compact && (
        <div className="routineBox">
          <p className="kicker">{t.routineTitle}</p>
          <div><strong>{t.morning}:</strong> {report.routine.morning}</div>
          <div><strong>{t.evening}:</strong> {report.routine.evening}</div>
          <div><strong>{t.optional}:</strong> {report.routine.optional}</div>
        </div>
      )}

      <div className="analysisProducts">
        <p className="kicker">{t.targetedProductOptions || t.recommendedProducts}</p>

        {affiliateItems.length > 0 ? (
          <div className="solutionProductGrid">
            {affiliateItems.map((item) => (
              <a href={item.href} target="_blank" rel="noreferrer" className="solutionProductCard" key={item.href}>
                {item.image && (
                  <img src={item.image} alt={lang === "en" ? item.en : item.zh} />
                )}
                <strong>{lang === "en" ? item.en : item.zh}</strong>
                <span>{lang === "en" ? item.roleEn : item.roleZh}</span>
              </a>
            ))}
          </div>
        ) : (
          <div className="miniRecommendationGrid">
            {recommendedProducts.map((product) => (
              <ProductMini product={product} lang={lang} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [lang, setLang] = useState("en");
  const [consent, setConsent] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const [photo, setPhoto] = useState("");
  const [overallAnalysis, setOverallAnalysis] = useState(null);
  const [localAnalysis, setLocalAnalysis] = useState(null);
  const [zoneComparisons, setZoneComparisons] = useState(null);
  const [zoom, setZoom] = useState(2);
  const [selectedZone, setSelectedZone] = useState("customCentre");
  const [analysisMode, setAnalysisMode] = useState("overview");
  const [cameraInfo, setCameraInfo] = useState(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const canvasRef = useRef(null);
  const t = copy[lang];

  const overallReport = overallAnalysis ? generateReport(lang, overallAnalysis) : null;
  const localReport = localAnalysis ? generateReport(lang, localAnalysis.result, localAnalysis.zoneLabel) : null;

  const startCamera = async () => {
    setCameraError("");
    if (!consent) {
      setCameraError(t.consentRequired);
      return;
    }

    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 3840, min: 1280 },
          height: { ideal: 2160, min: 720 },
          frameRate: { ideal: 30 },
        },
        audio: false,
      });

      streamRef.current = stream;

      const videoTrack = stream.getVideoTracks()[0];
      const settings = videoTrack ? videoTrack.getSettings() : {};
      setCameraInfo({
        width: settings.width || 0,
        height: settings.height || 0,
        label: videoTrack?.label || "",
      });

      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "user",
            width: { ideal: 1920 },
            height: { ideal: 1080 },
          },
          audio: false,
        });

        streamRef.current = stream;
        const videoTrack = stream.getVideoTracks()[0];
        const settings = videoTrack ? videoTrack.getSettings() : {};
        setCameraInfo({
          width: settings.width || 0,
          height: settings.height || 0,
          label: videoTrack?.label || "",
        });

        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch {
        setCameraError(t.cameraUnavailable);
      }
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) videoRef.current.srcObject = null;
  };

  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const videoWidth = video.videoWidth || 1280;
    const videoHeight = video.videoHeight || 720;
    const ctx = canvas.getContext("2d");

    if (analysisMode === "magnifier") {
      const selectedCrop = zoneDefs[selectedZone];
      const sx = Math.floor(videoWidth * selectedCrop.x);
      const sy = Math.floor(videoHeight * selectedCrop.y);
      const sw = Math.floor(videoWidth * selectedCrop.w);
      const sh = Math.floor(videoHeight * selectedCrop.h);

      canvas.width = Math.max(sw, 1);
      canvas.height = Math.max(sh, 1);
      ctx.drawImage(video, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
      setPhoto(canvas.toDataURL("image/png"));
      setOverallAnalysis(null);
      setLocalAnalysis(null);
      setZoneComparisons(null);
      return;
    }

    canvas.width = videoWidth;
    canvas.height = videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    setPhoto(canvas.toDataURL("image/png"));
    setOverallAnalysis(null);
    setLocalAnalysis(null);
    setZoneComparisons(null);
  };

  const loadPhotoToCanvas = (callback) => {
    if (!photo) {
      setCameraError(t.noPhoto);
      return;
    }
    const image = new Image();
    image.onload = () => {
      const canvas = canvasRef.current;
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0);
      callback(canvas);
    };
    image.src = photo;
  };

  const runOverallAnalysis = () => {
    loadPhotoToCanvas((canvas) => {
      const result = analyseCanvas(canvas);
      const comparisons = Object.entries(zoneDefs).reduce((acc, [zone, crop]) => {
        acc[zone] = analyseCanvas(canvas, crop);
        return acc;
      }, {});
      setOverallAnalysis(result);
      setZoneComparisons(comparisons);
      setCameraError("");
    });
  };

  const runLocalAnalysis = () => {
    loadPhotoToCanvas((canvas) => {
      const result = analysisMode === "magnifier"
        ? analyseCanvas(canvas)
        : analyseCanvas(canvas, zoneDefs[selectedZone]);
      setLocalAnalysis({ result, zone: selectedZone, zoneLabel: t[selectedZone] });
      setCameraError("");
    });
  };

  const clearPhoto = () => {
    setPhoto("");
    setOverallAnalysis(null);
    setLocalAnalysis(null);
    setZoneComparisons(null);
  };

  const crop = zoneDefs[selectedZone];

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
          <a href="#product-library">{t.productLibrary}</a>
          <a href="#guides">{t.navGuides}</a>
          <a href="#skin-analysis">{t.navAnalysis}</a>
          <a href="#disclosure">{t.navDisclosure}</a>
          <button className="langToggle" type="button" onClick={() => setLang(lang === "en" ? "zh" : "en")}>
            {t.toggle}
          </button>
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
              <a href="#skin-analysis" className="button light">{t.analyse}</a>
            </div>
          </div>
          <div className="heroFeatured">
            <div className="heroProductMain">
              <img src={ceraveCleanserImg} alt="CeraVe Hydrating Facial Cleanser" />
              <div>
                <p className="kicker">Featured Pick</p>
                <h2>CeraVe Hydrating Facial Cleanser</h2>
                <p>A widely recognised cleanser option for simple everyday routines.</p>
                <a href="https://amzn.to/48T3EVJ" className="button dark" target="_blank" rel="noreferrer">
                  {t.amazon}
                </a>
              </div>
            </div>
            <div className="heroMiniProducts">
              <a href="https://amzn.to/4nmIqpe" target="_blank" rel="noreferrer">
                <img src={everydaySunscreenImg} alt="Everyday Sunscreen" />
                <span>Daily Sunscreen</span>
              </a>
              <a href="https://amzn.to/4cXKjFm" target="_blank" rel="noreferrer">
                <img src={lipBalmImg} alt="Lip Balm" />
                <span>Lip Care</span>
              </a>
            </div>
          </div>
        </section>

        <section className="editorialNote">
          <p>{t.note}</p>
        </section>

        <section id="skin-analysis" className="section visualAnalysis">
          <div className="sectionIntro">
            <p className="kicker">{t.analysisKicker}</p>
            <h2>{t.analysisTitle}</h2>
            <p>{t.analysisIntro}</p>
          </div>

          <div className="analysisGrid">
            <div className="cameraPanel">
              <div className="cameraConsent">
                <label>
                  <input checked={consent} onChange={(event) => setConsent(event.target.checked)} type="checkbox" />
                  <span>{t.consent}</span>
                </label>
                <p>{t.privacyNote}</p>
                <p>{t.medicalDisclaimer}</p>
              </div>

              <div className="modeTabs">
                <button
                  type="button"
                  className={analysisMode === "overview" ? "active" : ""}
                  onClick={() => setAnalysisMode("overview")}
                >
                  {t.overviewMode}
                </button>
                <button
                  type="button"
                  className={analysisMode === "magnifier" ? "active" : ""}
                  onClick={() => setAnalysisMode("magnifier")}
                >
                  {t.magnifierMode}
                </button>
              </div>

              <div className="cameraQualityBox">
                <strong>{t.cameraQuality}</strong>
                <span>
                  {cameraInfo?.width
                    ? `${t.resolution}: ${cameraInfo.width} × ${cameraInfo.height}`
                    : `${t.resolution}: —`}
                </span>
                <p>{t.hdTip}</p>
                {cameraInfo?.width > 0 && cameraInfo.width < 1280 && (
                  <p className="qualityWarning">{t.lowResWarning}</p>
                )}
              </div>

              <div className="cameraFrame magnifierFrame">
                {photo ? (
                  <div className="photoMagnifier">
                    <img
                      src={photo}
                      alt={lang === "en" ? "Captured skin visual analysis" : "已拍摄的皮肤视觉分析照片"}
                      style={
                        analysisMode === "magnifier"
                          ? {
                              transform: `scale(${zoom})`,
                              transformOrigin: "50% 50%",
                            }
                          : undefined
                      }
                    />
                    {analysisMode === "magnifier" && <div className="magnifiedBadge">{t.magnifierMode}</div>}
                  </div>
                ) : analysisMode === "magnifier" ? (
                  <div className="photoMagnifier liveMagnifier">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      style={{
                        transform: `scale(${zoom})`,
                        transformOrigin: `${(crop.x + crop.w / 2) * 100}% ${(crop.y + crop.h / 2) * 100}%`,
                      }}
                    />
                    <div
                      className="cropBox"
                      style={{
                        left: `${crop.x * 100}%`,
                        top: `${crop.y * 100}%`,
                        width: `${crop.w * 100}%`,
                        height: `${crop.h * 100}%`,
                      }}
                    />
                  </div>
                ) : (
                  <video ref={videoRef} autoPlay playsInline muted />
                )}
                <canvas ref={canvasRef} className="hiddenCanvas" />
              </div>

              <div className="magnifierControls">
                <div className="fieldGroup">
                  <label>{t.selectedArea}</label>
                  <select value={selectedZone} onChange={(event) => setSelectedZone(event.target.value)}>
                    <option value="customCentre">{t.customCentre}</option>
                    <option value="forehead">{t.forehead}</option>
                    <option value="nose">{t.nose}</option>
                    <option value="leftCheek">{t.leftCheek}</option>
                    <option value="rightCheek">{t.rightCheek}</option>
                    <option value="chin">{t.chin}</option>
                  </select>
                </div>
                <div className="fieldGroup">
                  <label>{t.zoom}: {zoom.toFixed(1)}x</label>
                  <input min="1" max="4" step="0.25" value={zoom} onChange={(event) => setZoom(Number(event.target.value))} type="range" />
                </div>
              </div>

              <div className="cameraButtons">
                <button className="button dark" type="button" onClick={startCamera}>{t.startCamera}</button>
                <button className="button light" type="button" onClick={takePhoto}>{analysisMode === "magnifier" ? t.takeMagnifiedPhoto : t.takePhoto}</button>
                <button className="button light" type="button" onClick={clearPhoto}>{photo ? t.retake : t.clearPhoto}</button>
                <button className="button light" type="button" onClick={stopCamera}>{t.stopCamera}</button>
              </div>

              <div className="cameraButtons">
                <button className="button dark wideButton" type="button" onClick={runOverallAnalysis}>
                  {t.runAnalysis}
                </button>
                <button className="button light wideButton" type="button" onClick={runLocalAnalysis}>
                  {t.analyseArea}
                </button>
              </div>

              {cameraError && <div className="cameraError">{cameraError}</div>}
              <div className="cameraStatus">{photo ? t.photoReady : t.noPhotoYet}</div>
              <div className="lightingTip">{t.lightingTips}</div>
              <div className="cameraUpgradeTip">{t.cameraUpgradeTip}</div>
              <div className="algorithmNote">{t.algorithmNote}</div>
            </div>

            <div className="reportPanel">
              {!overallAnalysis && !localAnalysis ? (
                <div className="emptyReport">
                  <p className="kicker">{t.reportTitle}</p>
                  <h3>{lang === "en" ? "Capture, magnify and analyse." : "拍摄、放大并分析。"}</h3>
                  <p>{t.medicalDisclaimer}</p>
                </div>
              ) : (
                <>
                  {overallAnalysis && (
                    <ReportPanel
                      title={t.reportTitle}
                      result={overallAnalysis}
                      report={overallReport}
                      t={t}
                      lang={lang}
                    />
                  )}

                  {localAnalysis && (
                    <ReportPanel
                      title={`${t.localReport}: ${t[localAnalysis.zone]}`}
                      result={localAnalysis.result}
                      report={localReport}
                      t={t}
                      lang={lang}
                      compact
                    />
                  )}

                  {zoneComparisons && (
                    <div className="zoneComparison">
                      <p className="kicker">{t.compareZones}</p>
                      <div className="zoneGrid">
                        {Object.entries(zoneComparisons).map(([zone, result]) => (
                          <button type="button" key={zone} onClick={() => { setSelectedZone(zone); setLocalAnalysis({ zone, zoneLabel: t[zone], result }); }}>
                            <strong>{t[zone]}</strong>
                            <span>{t.metrics.redness}: {levelText(t, result.redness)}</span>
                            <span>{t.metrics.shine}: {levelText(t, result.shine)}</span>
                            <span>{t.metrics.texture}: {levelText(t, result.texture)}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>

        <section className="section split">
          <div>
            <p className="kicker">{t.categoryKicker}</p>
            <h2>{t.categories}</h2>
          </div>
          <div className="categoryList">
            {categories.map((category) => <a href="#products" key={category.en}>{category[lang]}</a>)}
          </div>
        </section>

        
        <section id="product-library" className="section productLibrary">
          <div className="sectionIntro">
            <p className="kicker">{t.productLibrary}</p>
            <h2>{t.productLibraryTitle}</h2>
            <p>{t.productLibraryIntro}</p>
          </div>

          <div className="concernJumpGrid">
            {concernGroups.map((group) => (
              <a href={`#concern-${group.id}`} key={group.id}>
                <strong>{lang === "en" ? group.en : group.zh}</strong>
                <span>{t.viewProducts}</span>
              </a>
            ))}
          </div>

          <div className="concernProductSections">
            {concernGroups.map((group) => {
              const items = affiliateLibrary[group.key] || [];
              return (
                <section id={`concern-${group.id}`} className="concernProductGroup" key={group.id}>
                  <div className="concernGroupHeader">
                    <p className="kicker">{t.concernGroups}</p>
                    <h3>{lang === "en" ? group.en : group.zh}</h3>
                    <p>{lang === "en" ? group.summaryEn : group.summaryZh}</p>
                  </div>

                  <div className="groupedProductGrid">
                    {items.map((item) => (
                      <a href={item.href} target="_blank" rel="noreferrer" className="groupedProductCard" key={item.href}>
                        {item.image && <img src={item.image} alt={lang === "en" ? item.en : item.zh} />}
                        <div>
                          <strong>{lang === "en" ? item.en : item.zh}</strong>
                          <span>{lang === "en" ? item.roleEn : item.roleZh}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        <section id="products" className="section productSection">
          <div className="sectionIntro">
            <p className="kicker">{t.featured}</p>
            <h2>{t.featuredTitle}</h2>
            <p>{t.featuredText}</p>
          </div>
          <div className="productGrid">
            {products.map((product) => (
              <article className="productCard" key={product.name.en}>
                <div className="productImage">
                  <img src={product.image} alt={product.name[lang]} />
                  <span>{product.label[lang]}</span>
                </div>
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
                <div className="guideSummary">{lang === "en" ? guide.summaryEn : guide.summaryZh}</div>
                <a href={`#guide-${guide.id}`} className="guideLink">{t.readMore}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section guideDetails">
          <div className="sectionIntro">
            <p className="kicker">{lang === "en" ? "In-depth guides" : "详细指南"}</p>
            <h2>{lang === "en" ? "Beauty advice with product direction" : "带有产品方向的美妆护肤建议"}</h2>
          </div>

          <article id="guide-skincare-basics" className="guideDetailCard">
            <div className="guideVisual"><img src={ceraveCleanserImg} alt="Gentle cleanser guide" /></div>
            <div>
              <p className="kicker">{lang === "en" ? "Beginner skincare" : "新手护肤"}</p>
              <h3>{lang === "en" ? "Best Skincare Basics for Beginners" : "新手护肤基础好物指南"}</h3>
              <p>{lang === "en" ? "A beginner routine does not need to be complicated. Start with a gentle cleanser, a comfortable moisturiser and a daily sunscreen. After these basics feel stable, you can slowly add lip care, beauty tools or travel-friendly storage." : "新手护肤不需要一开始就很复杂。可以先从温和洁面、舒适保湿和日常防晒开始。等基础流程稳定之后，再慢慢加入唇部护理、美妆工具或旅行收纳类好物。"}</p>
              <a href="https://amzn.to/48T3EVJ" className="button dark" target="_blank" rel="noreferrer">{t.amazon}</a>
            </div>
          </article>

          <article id="guide-sunscreen-guide" className="guideDetailCard reverse">
            <div className="guideVisual"><img src={everydaySunscreenImg} alt="Everyday sunscreen guide" /></div>
            <div>
              <p className="kicker">{lang === "en" ? "Daily protection" : "日常防护"}</p>
              <h3>{lang === "en" ? "Everyday Sunscreen Guide" : "日常防晒选择指南"}</h3>
              <p>{lang === "en" ? "Sunscreen is one of the most useful daily skincare categories. When comparing products, focus on texture, finish, comfort and whether you would actually use it every morning." : "防晒是最值得重视的日常护肤类别之一。选择时可以关注质地、肤感、妆前舒适度，以及自己是否愿意每天使用。"}</p>
              <a href="https://amzn.to/4nmIqpe" className="button dark" target="_blank" rel="noreferrer">{t.amazon}</a>
            </div>
          </article>

          <article id="guide-beauty-tools" className="guideDetailCard">
            <div className="guideVisual"><img src={makeupSpongeImg} alt="Useful beauty tools" /></div>
            <div>
              <p className="kicker">{lang === "en" ? "Useful tools" : "实用工具"}</p>
              <h3>{lang === "en" ? "Beauty Tools That Are Actually Useful" : "真正实用的美妆工具"}</h3>
              <p>{lang === "en" ? "Good beauty tools should make your routine cleaner, faster or easier. Makeup sponges, soft towels and organisers are helpful because they support daily habits rather than adding unnecessary complexity." : "好的美妆工具应该让流程更干净、更快速或更方便。美妆蛋、柔软洁面巾和收纳工具比较实用，因为它们能辅助日常习惯，而不是增加复杂度。"}</p>
              <a href="https://amzn.to/4dfi5ot" className="button dark" target="_blank" rel="noreferrer">{t.amazon}</a>
            </div>
          </article>
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
