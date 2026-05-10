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

function generateReport(lang, result, zoneName = "") {
  const zh = lang === "zh";
  const main = getDominantConcern(result);

  const areaPrefix = zoneName
    ? zh
      ? `在${zoneName}区域，`
      : `In the ${zoneName} area, `
    : "";

  const advice = {
    acne: zh
      ? `${areaPrefix}图像中可见较多局部红色或点状不均匀信号，可能与瑕疵、刺激、光线或相机清晰度有关。建议先保持温和清洁，不要频繁叠加强功效产品；如果有疼痛、反复红肿、结节样变化或持续加重，请咨询皮肤科医生。`
      : `${areaPrefix}the image shows stronger local red or spot-like uneven signals. This may relate to blemishes, irritation, lighting or camera clarity. Start with gentle cleansing and avoid layering too many strong active products. If there is pain, recurring swelling, nodular changes or worsening symptoms, consider a dermatologist.`,
    dryness: zh
      ? `${areaPrefix}图像中干燥、粗糙或脱皮样纹理信号较明显。建议减少刺激性清洁、热水和频繁去角质，优先使用温和洁面与保湿修护。`
      : `${areaPrefix}the image suggests stronger dryness, roughness or flaking-like texture. Reduce harsh cleansing, hot water and frequent exfoliation; prioritise gentle cleansing and moisturising support.`,
    redness: zh
      ? `${areaPrefix}红色调相对偏高，可能受光线、温度、刺激或皮肤状态影响。建议降低护肤流程复杂度，先用温和基础护理观察稳定性。`
      : `${areaPrefix}the red-tone balance appears higher. This may be affected by lighting, temperature, irritation or skin state. Simplify the routine and focus on gentle basics first.`,
    shine: zh
      ? `${areaPrefix}反光或油光倾向较明显。建议选择温和洁面、轻盈保湿和肤感舒适的防晒，避免因为出油而过度清洁。`
      : `${areaPrefix}shine or reflective signals are more visible. A gentle cleanser, lightweight moisturiser and comfortable sunscreen may fit better than over-cleansing.`,
    texture: zh
      ? `${areaPrefix}纹理和线状细节较明显，可能受干燥、表情、光线和镜头锐度影响。建议先做好保湿和防晒；如果皮肤耐受，再循序渐进考虑温和进阶护理。`
      : `${areaPrefix}texture and line-like detail appear more visible, which can be affected by dryness, expression, lighting and camera sharpness. Prioritise moisturising and sunscreen first; consider advanced care gradually if tolerated.`,
    pores: zh
      ? `${areaPrefix}毛孔或细节可见度较高，常与光线、出油、近距离拍摄和局部纹理有关。建议温和清洁、轻盈保湿，并保持工具和毛巾清洁。`
      : `${areaPrefix}pore or detail visibility appears higher, often influenced by lighting, shine, close-up distance and local texture. Use gentle cleansing, lightweight moisturising and clean tools/towels.`,
    pigmentation: zh
      ? `${areaPrefix}色沉或斑点样色差对比较明显。建议优先稳定日常防晒，避免承诺快速淡化；如果色斑快速变化、边界异常或伴随不适，应咨询医生。`
      : `${areaPrefix}dark-spot or pigmentation-like contrast appears more visible. Prioritise daily sunscreen and avoid promises of rapid fading. If spots change rapidly, have irregular borders or symptoms, consult a clinician.`,
    maintenance: zh
      ? `${areaPrefix}整体没有出现特别突出的单一视觉问题。建议继续维持温和清洁、保湿和日间防晒，让皮肤状态保持稳定。`
      : `${areaPrefix}the photo does not show one strongly dominant visual concern. Continue maintaining gentle cleansing, moisturising and daily sunscreen for a stable routine.`,
  }[main];

  const routine = {
    morning: zh
      ? "温和清洁或清水清洁 → 轻盈保湿 → 日常防晒"
      : "Gentle cleanse or rinse → lightweight moisturiser → daily sunscreen",
    evening: zh
      ? "温和洁面 → 保湿修护 → 根据需要加入唇部护理或柔软洁面巾"
      : "Gentle cleanser → moisturising support → lip care or soft face towels if useful",
    optional: zh
      ? "如瑕疵或闭口明显，可低频率、单一成分地尝试控油/祛痘类护理；不要一次叠加太多强功效产品。"
      : "If blemishes or clogged-pore-like texture are a concern, consider low-frequency, single-active care; avoid adding many strong products at once.",
  };

  let productIds = ["cerave", "moisturiser", "sunscreen"];
  if (main === "acne") productIds = ["gentle-cleanser", "face-towels", "sunscreen"];
  if (main === "dryness") productIds = ["moisturiser", "lip-balm", "cerave"];
  if (main === "redness") productIds = ["cerave", "moisturiser", "face-towels"];
  if (main === "shine") productIds = ["gentle-cleanser", "sunscreen", "face-towels"];
  if (main === "texture") productIds = ["moisturiser", "sunscreen", "makeup-sponge"];
  if (main === "pores") productIds = ["gentle-cleanser", "face-towels", "makeup-sponge"];
  if (main === "pigmentation") productIds = ["sunscreen", "moisturiser", "cerave"];

  return { advice, routine, productIds, main };
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

function ReportPanel({ title, result, report, t, lang, compact = false }) {
  if (!result || !report) return null;
  const recommendedProducts = report.productIds.map(getProductById);

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

      {!compact && (
        <div className="routineBox">
          <p className="kicker">{t.routineTitle}</p>
          <div><strong>{t.morning}:</strong> {report.routine.morning}</div>
          <div><strong>{t.evening}:</strong> {report.routine.evening}</div>
          <div><strong>{t.optional}:</strong> {report.routine.optional}</div>
        </div>
      )}

      <div className="analysisProducts">
        <p className="kicker">{t.recommendedProducts}</p>
        <div className="miniRecommendationGrid">
          {recommendedProducts.map((product) => (
            <ProductMini product={product} lang={lang} key={product.id} />
          ))}
        </div>
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
