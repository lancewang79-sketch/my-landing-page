import React, { useRef, useState } from "react";
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";
import "./App.css";
import promoVideo from "./videos/glow-skin-promo.mp4";

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
    videoKicker: "Brand video",
    videoTitle: "See how Glow Skin Picks works",
    videoText: "Watch the short introduction to understand how camera-based skin review, routine planning, product pairing and daily checklist tracking help users make clearer skincare decisions.",
    videoKicker: "品牌宣传片",
    videoTitle: "了解 Glow Skin Picks 如何帮助你护肤",
    videoText: "观看这段简短介绍，了解相机肤况分析、护肤方案生成、产品组合搭配和每日打勾记录如何帮助用户更清楚地选择护肤方案。",
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
    analysisTitle: "Glow Skin Visual Analysis",
    analysisIntro:
      "Follow a short guided scan, let the app auto-capture useful frames, and receive a structured beauty-care report based on camera evidence and your own skin concerns.",
    consent:
      "I understand this is a beauty routine helper, not a medical diagnosis tool.",
    privacyNote:
      "Your photo stays in your browser in this demo. It is not uploaded or stored.",
    medicalDisclaimer:
      "This tool is for general beauty and self-care guidance only. It does not diagnose or treat acne, eczema, rosacea, infection, allergy, pigmentation disease, skin cancer or any medical skin condition.",
    startCamera: "Start Camera",
    stopCamera: "Stop Camera",
    takePhoto: "Take Photo",
    takeMagnifiedPhoto: "Take Close-up Photo",
    retake: "Retake",
    clearPhoto: "Clear Photo",
    runAnalysis: "Analyse Overview",
    analyseArea: "Analyse Current Photo",
    consentRequired: "Please confirm the consent note before starting the camera.",
    cameraUnavailable:
      "Camera access is not available. Please check browser permissions or try another browser.",
    noPhoto: "Please take a photo first.",
    photoReady: "Photo captured. You can analyse the full image or inspect details with Magnifier Mode.",
    noPhotoYet: "Start camera and take a clear front-facing photo in even light.",
    lightingTips:
      "For a better result, face a window or soft light, remove strong shadows, clean your lens and avoid heavy filters.",
    reportTitle: "Your skin visual report",
    confidence: "Skin condition snapshot",
    skinSnapshotNote: "Visible signals from this scan only. This is skincare guidance, not medical diagnosis.",
    routineIntensity: "Routine intensity",
    regionEvidence: "Region evidence",
    regionEvidenceIntro: "The scanner reviews zoomed skin-region crops instead of treating the whole photo as one flat image.",
    skinQualityScore: "Skin quality snapshot",
    scoreLow: "Low",
    scoreMild: "Mild",
    scoreModerate: "Moderate",
    scoreHigh: "High",
    expertAdvice: "Beauty-care advice",
    recommendedProducts: "Recommended products",
    targetedProductOptions: "Personalised product plan",
    personalisationNote: "Selected by concern score, barrier tolerance, routine role and product diversity — not by a fixed product list.",
    roleFoundation: "Foundation",
    roleTreatment: "Targeted treatment",
    roleWeekly: "Weekly option",
    roleRepair: "Repair support",
    productReason: "Why selected",
    routineProtocol: "Detailed routine protocol",
    morningProtocol: "Morning protocol",
    eveningProtocol: "Evening protocol",
    weeklyProtocol: "Weekly rhythm",
    amount: "Amount",
    order: "Order",
    waitTime: "Wait time",
    expectedResults: "Expected results",
    diary: "Routine diary",
    markDone: "Mark done",
    todayProgress: "Today’s completion",
    localDiaryNote: "This diary is saved locally on this device. For real user accounts and visitor/registration records, connect a backend such as Firebase or Supabase.",
    useTheseProducts: "Use these products",
    productDose: "Product dose",
    productMethod: "How to apply",
    noSpecificProduct: "No specific product required for this step",
    loginNote: "Login + registration tracking requires a backend; GitHub Pages alone cannot securely store user accounts.",
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
    cameraUpgradeTip: "For sharper analysis, use your phone camera, preferably the rear camera, in bright even daylight. Keep only the face or target skin area inside the camera frame. For close-up steps, move the camera closer instead of using digital zoom.",
    visiaKicker: "VISIA-inspired protocol",
    visiaTitle: "VISIA-style Skin Review",
    visiaIntro: "A more rigorous workflow: multi-angle capture, close-up evidence, photo-quality gate, user concern calibration and eight-dimension visual scoring.",
    captureProtocol: "Capture protocol",
    userCalibration: "Your skin concerns",
    selectConcerns: "Select the concerns you already notice. The report combines camera evidence with your own skin experience.",
    combinedPriority: "Combined priorities",
    evidenceReport: "Evidence-based result",
    photoQualityGate: "Photo quality gate",
    notReliable: "Not reliable",
    possible: "Possible",
    visible: "Visible",
    notClear: "Not clearly visible",
    retakeGuide: "Retake guidance",
    capturedPhotos: "Captured photos",
    captureThisStep: "Capture current step",
    scanKicker: "Guided skin scan",
    scanTitle: "One scan, several useful frames",
    scanIntro: "No need to manually take seven photos. Click Start Skin Scan, follow the short on-screen prompts, and the app will auto-capture usable frames while you slowly move your face.",
    scanInsteadManual: "This scan replaces the manual photo boxes. It is easier for users and usually gives more consistent framing.",
    startScan: "Start Skin Scan",
    stopScan: "Stop Scan",
    scanProgress: "Scan progress",
    scanPrepare: "Get ready",
    scanCapturing: "Capturing",
    scanNext: "Next step soon",
    scanCountdown: "seconds left",
    scanSlowTip: "Move slowly. The app gives you time to adjust before each frame is captured.",
    currentScanStep: "Current scan step",
    scanReady: "Ready to scan",
    scanComplete: "Scan complete — report generated",
    scanAutoCaptured: "Auto-captured frames",
    scanQuality: "Live quality check",
    faceDetectStatus: "Face detection",
    faceEngineStatus: "Face engine",
    faceEngineLoading: "Loading FaceMesh",
    faceEngineMesh: "MediaPipe FaceMesh active",
    faceEngineFallback: "Fallback detector active",
    faceDetected: "Face found — scanner will crop automatically",
    faceNotDetected: "Face not found yet — keep your face visible in the camera window",
    autoFaceCropNote: "The scanner now searches for the face inside the camera window and uses the detected face area for skin-region crops where supported.",
    meshNote: "Face guide overlay",
    scanLighting: "Lighting",
    scanResolution: "Resolution",
    scanStability: "Stability",
    scanGood: "Good",
    scanImproveLight: "Use brighter, even light",
    scanHoldStill: "Hold still",
    scanMoveCloser: "Move a little closer",
    retakeCurrentStep: "Retake current step",
    currentStepGuide: "Current photo guide",
    poseExample: "Pose example",
    captureTip: "Follow the selected guide. The app will automatically use the right analysis mode for that pose.",
    noAreaSelectionNeeded: "No magnifier mode is needed. For close-up steps, physically move the phone/camera closer to the skin area and keep the image sharp.",
    analysePhotoSet: "Analyse photo set",
    requiredPhotosHint: "For a fuller VISIA-style review, capture at least: front overview, one cheek close-up, T-zone close-up and problem-area close-up.",
    photoSetIncomplete: "Photo set is incomplete. You can still analyse, but some concerns may be missed.",
    useThisPhoto: "Use this photo",
    visiaDisclaimer: "This is a VISIA-inspired consumer camera workflow. It cannot detect true UV spots or porphyrins because those require UV/special imaging hardware.",
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
    localReport: "Current photo report",
    compareZones: "Zone comparison",
    algorithmNote:
      "The algorithm estimates visual tendencies from brightness, colour-channel balance, local contrast, highlights and texture variation. It is not a clinical measurement.",
    cameraQuality: "Camera quality",
    resolution: "Resolution",
    hdTip: "For real skin detail, move the camera closer and use bright, even light. Digital zoom alone can look blurry.",
    lowResWarning: "The current camera stream is low resolution. Try a phone camera, rear camera, brighter light, or the live GitHub Pages site on mobile for sharper detail.",
    metrics: {
      lighting: "Lighting quality",
      acne: "Visible blemish-like signal",
      dryness: "Dryness / flaking signal",
      redness: "Visible redness signal",
      shine: "Shine / oiliness signal",
      texture: "Texture / fine-line signal",
      pores: "Pore-like detail signal",
      pigmentation: "Uneven-tone / dark-spot-like signal",
      evenness: "Tone-balance signal",
      blur: "Image sharpness",
    },
  },
  zh: {
    toggle: "English",
    announcement: "部分链接为 Amazon 联盟链接，购买不会增加你的额外费用。",
    navProducts: "好物推荐",
    navGuides: "美妆指南",
    navAnalysis: "皮肤分析",
    navDisclosure: "推荐说明",
    heroKicker: "日常护肤与美妆精选",
    heroTitle: "精选护肤好物。",
    heroText:
      "用相机分析肤况，按皮肤问题推荐更合适的护肤组合。",
    shop: "浏览精选好物",
    analyse: "体验皮肤分析",
    note:
      "本页可能包含联盟链接。通过链接购买不会增加你的费用，也能支持本站继续整理护肤内容。",
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
    disclosureKicker: "安心说明",
    disclosureTitle: "关于推荐与链接",
    disclosureText:
      "本网站部分产品链接为 Amazon 联盟链接。若你通过这些链接购买，我可能会获得少量佣金，但不会增加你的购买成本。推荐内容以日常护肤参考为主，不替代专业医疗建议。",
    footer: "美妆、护肤与自我护理推荐。",
    privacy: "隐私政策",
    contact: "联系",

    analysisKicker: "AI 风格皮肤视觉分析",
    analysisTitle: "Glow Skin 皮肤视觉分析",
    analysisIntro:
      "按照简短的引导式扫描流程，系统会自动截取可用画面，并结合相机证据和你的真实肤感生成结构化护肤报告。",
    consent:
      "我理解这是美妆护肤流程助手，不是医疗诊断工具。",
    privacyNote:
      "在这个演示版本中，你的照片只会保留在浏览器中，不会上传，也不会被储存。",
    medicalDisclaimer:
      "本工具仅用于一般美妆与自我护理建议，不用于诊断或治疗痘痘、湿疹、玫瑰痤疮、感染、过敏、色素疾病、皮肤癌或任何医学皮肤问题。",
    startCamera: "打开相机",
    stopCamera: "关闭相机",
    takePhoto: "拍摄照片",
    takeMagnifiedPhoto: "拍摄局部近照",
    retake: "重新拍摄",
    clearPhoto: "清除照片",
    runAnalysis: "分析整体照片",
    analyseArea: "分析当前照片",
    consentRequired: "请先勾选同意说明，再打开相机。",
    cameraUnavailable:
      "无法访问相机。请检查浏览器权限，或尝试使用其他浏览器。",
    noPhoto: "请先拍摄照片。",
    photoReady: "照片已拍摄。你可以分析整体图像，也可以使用放大镜查看细节。",
    noPhotoYet: "请打开相机，在均匀光线下拍摄清晰的正面照片。",
    lightingTips:
      "为了提升结果稳定性，建议面对窗边或柔和光源，避免强阴影，擦净镜头，不使用重滤镜。",
    reportTitle: "你的皮肤视觉分析报告",
    confidence: "肤况概览",
    skinSnapshotNote: "仅反映本次扫描中的可见皮肤状态信号，属于护肤参考，不是医疗诊断。",
    routineIntensity: "方案强度",
    regionEvidence: "区域证据",
    regionEvidenceIntro: "扫描器会分析自动放大的皮肤区域，而不是把整张照片平均处理。",
    skinQualityScore: "肤况状态概览",
    scoreLow: "低",
    scoreMild: "轻微",
    scoreModerate: "中等",
    scoreHigh: "较高",
    expertAdvice: "护肤顾问建议",
    recommendedProducts: "推荐产品",
    targetedProductOptions: "按评分生成的产品方案",
    productReason: "推荐原因",
    routineProtocol: "详细使用方案",
    morningProtocol: "早间方案",
    eveningProtocol: "晚间方案",
    weeklyProtocol: "每周节奏",
    amount: "用量",
    order: "顺序",
    waitTime: "间隔",
    expectedResults: "周期预期",
    diary: "护肤日记打勾",
    markDone: "打勾完成",
    todayProgress: "今日完成情况",
    localDiaryNote: "当前打勾日记会保存在本设备浏览器。若要真实记录访问人数、注册用户和完成情况，需要接入 Firebase 或 Supabase 等后端。",
    useTheseProducts: "使用产品",
    productDose: "产品用量",
    productMethod: "具体用法",
    noSpecificProduct: "这一步不需要指定产品",
    loginNote: "登录、注册和访问统计需要后端支持；GitHub Pages 静态网站本身不能安全保存用户账号。",
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
    cameraUpgradeTip: "为了获得更清晰的分析，建议使用手机摄像头，最好是后置摄像头，并在明亮均匀的自然光下拍摄。请让画面里主要是脸部或目标皮肤区域，减少背景。拍局部近照时，请靠近皮肤，而不是依赖数码放大。",
    visiaKicker: "VISIA 风格流程",
    visiaTitle: "VISIA 式肤况复核",
    visiaIntro: "更严谨的流程：多角度采集、局部近拍证据、照片质量门槛、用户自述校准和八维视觉评分。",
    captureProtocol: "拍摄流程",
    userCalibration: "你的皮肤关注点",
    selectConcerns: "请选择你已经注意到的问题。报告会结合相机证据和你的真实肤感。",
    combinedPriority: "综合优先级",
    evidenceReport: "证据式结果",
    photoQualityGate: "照片质量门槛",
    notReliable: "无法可靠判断",
    possible: "可能存在",
    visible: "较明显",
    notClear: "未明显可见",
    retakeGuide: "重拍建议",
    capturedPhotos: "已拍照片",
    captureThisStep: "拍摄当前步骤",
    scanKicker: "引导式肤况扫描",
    scanTitle: "一次扫描，自动截取关键画面",
    scanIntro: "不再要求用户手动拍七张照片。点击开始肤况扫描，按屏幕提示缓慢调整角度，系统会自动截取可用画面。",
    scanInsteadManual: "这个扫描流程替代原来的手动照片框，用户更容易完成，取景也会更稳定。",
    startScan: "开始肤况扫描",
    stopScan: "停止扫描",
    scanProgress: "扫描进度",
    scanPrepare: "准备调整",
    scanCapturing: "正在截取",
    scanNext: "即将进入下一步",
    scanCountdown: "秒后截取",
    scanSlowTip: "请慢慢调整。每一步都会先给你准备时间，再自动截取画面。",
    currentScanStep: "当前扫描步骤",
    scanReady: "准备扫描",
    scanComplete: "扫描完成，报告已生成",
    scanAutoCaptured: "自动截取画面",
    scanQuality: "实时质量检查",
    faceDetectStatus: "人脸检测",
    faceEngineStatus: "人脸引擎",
    faceEngineLoading: "正在加载 FaceMesh",
    faceEngineMesh: "MediaPipe FaceMesh 已启用",
    faceEngineFallback: "备用检测已启用",
    faceDetected: "已找到人脸，系统会自动裁剪分析区域",
    faceNotDetected: "暂未找到人脸，请让脸部出现在相机画面内",
    autoFaceCropNote: "扫描器会在相机画面中寻找人脸，并在浏览器支持时基于检测到的人脸区域自动裁剪皮肤分析区域。",
    meshNote: "人脸网格引导",
    scanLighting: "光线",
    scanResolution: "分辨率",
    scanStability: "稳定度",
    scanGood: "良好",
    scanImproveLight: "请使用更明亮均匀的光线",
    scanHoldStill: "请保持稳定",
    scanMoveCloser: "请稍微靠近一些",
    retakeCurrentStep: "重拍当前步骤",
    currentStepGuide: "当前拍摄指导",
    poseExample: "姿势示意",
    captureTip: "按照当前步骤的提示拍摄。系统会自动为该姿势选择对应分析方式。",
    noAreaSelectionNeeded: "不需要放大镜模式。拍局部近照时，请把手机/摄像头靠近对应皮肤区域，并保持清晰。",
    analysePhotoSet: "分析整组照片",
    requiredPhotosHint: "为了更接近 VISIA 式复核，建议至少拍摄：正脸整体、脸颊近拍、T 区近拍和问题区域近拍。",
    photoSetIncomplete: "照片组不完整。仍可分析，但部分问题可能漏检。",
    useThisPhoto: "使用这张照片",
    visiaDisclaimer: "这是 VISIA-inspired 的普通相机流程。它不能真正检测 UV spots 或 porphyrins，因为这些需要 UV/特殊光源硬件。",
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
    localReport: "当前照片报告",
    compareZones: "区域对比",
    algorithmNote:
      "算法会从亮度、颜色通道、局部对比度、反光和纹理变化估算视觉倾向。这不是临床检测。",
    cameraQuality: "相机质量",
    resolution: "分辨率",
    hdTip: "想看到真正皮肤细节，请把相机靠近皮肤，并使用明亮均匀光线。单纯数码放大会变模糊。",
    lowResWarning: "当前相机流分辨率偏低。建议使用手机摄像头、后置摄像头、更亮光线，或在手机上打开 GitHub Pages 网页获得更清晰细节。",
    metrics: {
      lighting: "光线质量",
      acne: "瑕疵样可见信号",
      dryness: "干燥 / 脱皮信号",
      redness: "可见泛红信号",
      shine: "油光信号",
      texture: "纹理 / 细纹信号",
      pores: "毛孔样细节信号",
      pigmentation: "肤色不均 / 色沉样信号",
      evenness: "肤色平衡信号",
      blur: "图像清晰度",
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


const FACE_REGION_CROPS = [
  {
    id: "forehead",
    en: "Forehead",
    zh: "额头",
    crop: { x: 0.22, y: 0.08, w: 0.56, h: 0.24 },
    weights: { texture: 1.2, shine: 0.9, pigmentation: 0.9, dryness: 0.8 },
  },
  {
    id: "leftCheek",
    en: "Left cheek",
    zh: "左脸颊",
    crop: { x: 0.08, y: 0.30, w: 0.42, h: 0.36 },
    weights: { redness: 1.25, dryness: 1.15, texture: 1.05, pores: 0.95, pigmentation: 1.0 },
  },
  {
    id: "rightCheek",
    en: "Right cheek",
    zh: "右脸颊",
    crop: { x: 0.50, y: 0.30, w: 0.42, h: 0.36 },
    weights: { redness: 1.25, dryness: 1.15, texture: 1.05, pores: 0.95, pigmentation: 1.0 },
  },
  {
    id: "tzone",
    en: "T-zone / nose",
    zh: "T 区 / 鼻翼",
    crop: { x: 0.30, y: 0.18, w: 0.40, h: 0.50 },
    weights: { shine: 1.35, pores: 1.25, acne: 1.05, redness: 0.8 },
  },
  {
    id: "chin",
    en: "Chin / lower face",
    zh: "下巴 / 下脸部",
    crop: { x: 0.24, y: 0.62, w: 0.52, h: 0.27 },
    weights: { acne: 1.25, dryness: 0.95, texture: 0.9 },
  },
  {
    id: "eyeForehead",
    en: "Eye-side / upper face",
    zh: "眼周 / 上脸部",
    crop: { x: 0.18, y: 0.17, w: 0.64, h: 0.28 },
    weights: { texture: 1.35, dryness: 0.9, pigmentation: 0.85 },
  },
];

function weightedAverage(items, key, weights = {}) {
  let numerator = 0;
  let denominator = 0;
  items.forEach((item) => {
    const weight = item.region.weights?.[key] || weights[key] || 1;
    numerator += (item.scores[key] || 0) * weight;
    denominator += weight;
  });
  return denominator ? numerator / denominator : 0;
}

function createZoomCropDataUrl(sourceCanvas, crop) {
  const zoomCanvas = document.createElement("canvas");
  const sourceWidth = Math.max(24, Math.floor(sourceCanvas.width * crop.w));
  const sourceHeight = Math.max(24, Math.floor(sourceCanvas.height * crop.h));
  const sourceX = Math.max(0, Math.floor(sourceCanvas.width * crop.x));
  const sourceY = Math.max(0, Math.floor(sourceCanvas.height * crop.y));

  zoomCanvas.width = 360;
  zoomCanvas.height = 360;
  const ctx = zoomCanvas.getContext("2d");
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(sourceCanvas, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, zoomCanvas.width, zoomCanvas.height);
  return zoomCanvas.toDataURL("image/jpeg", 0.84);
}


function normaliseDetectedFaceBox(rawBox, canvas) {
  if (!rawBox || !canvas?.width || !canvas?.height) return null;

  const x = clamp(rawBox.x / canvas.width, 0, 1);
  const y = clamp(rawBox.y / canvas.height, 0, 1);
  const w = clamp(rawBox.width / canvas.width, 0, 1);
  const h = clamp(rawBox.height / canvas.height, 0, 1);

  // Expand more generously so forehead, cheeks and chin are not reduced to tiny slices.
  const expandX = w * 0.22;
  const expandYTop = h * 0.24;
  const expandYBottom = h * 0.18;

  return {
    x: clamp(x - expandX, 0, 1),
    y: clamp(y - expandYTop, 0, 1),
    w: clamp(w + expandX * 2, 0.18, 1),
    h: clamp(h + expandYTop + expandYBottom, 0.22, 1),
  };
}


function normaliseFaceBoxFromLandmarks(landmarks, canvas) {
  if (!landmarks?.length || !canvas?.width || !canvas?.height) return null;

  let minX = 1;
  let minY = 1;
  let maxX = 0;
  let maxY = 0;

  landmarks.forEach((point) => {
    if (typeof point.x !== "number" || typeof point.y !== "number") return;
    minX = Math.min(minX, point.x);
    minY = Math.min(minY, point.y);
    maxX = Math.max(maxX, point.x);
    maxY = Math.max(maxY, point.y);
  });

  if (maxX <= minX || maxY <= minY) return null;

  const raw = {
    x: minX * canvas.width,
    y: minY * canvas.height,
    width: (maxX - minX) * canvas.width,
    height: (maxY - minY) * canvas.height,
  };

  return normaliseDetectedFaceBox(raw, canvas);
}

function createMeshPreviewPoints(landmarks) {
  if (!landmarks?.length) return [];

  // A small subset is enough for visual feedback without slowing down React rendering.
  const indices = [
    10, 338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288, 397, 365, 379, 378,
    400, 377, 152, 148, 176, 149, 150, 136, 172, 58, 132, 93, 234, 127, 162, 21,
    54, 103, 67, 109, 151, 9, 8, 168, 6, 197, 195, 5, 4, 1, 19, 94, 2, 98, 327,
    33, 133, 362, 263, 61, 291, 13, 14, 78, 308
  ];

  return indices
    .map((index) => landmarks[index])
    .filter(Boolean)
    .map((point) => ({
      x: clamp(point.x, 0, 1),
      y: clamp(point.y, 0, 1),
    }));
}

async function detectFaceWithMediaPipe(canvas, faceLandmarker) {
  if (!canvas || !faceLandmarker) return null;

  try {
    const result = faceLandmarker.detect(canvas);
    const landmarks = result?.faceLandmarks?.[0];

    if (!landmarks?.length) return null;

    return {
      faceBox: normaliseFaceBoxFromLandmarks(landmarks, canvas),
      meshPoints: createMeshPreviewPoints(landmarks),
      source: "mediapipe",
    };
  } catch {
    return null;
  }
}

function estimateFaceBoxFromSkinPixels(canvas) {
  if (!canvas?.width || !canvas?.height) return null;

  const ctx = canvas.getContext("2d");
  const sampleCanvas = document.createElement("canvas");
  const targetW = 220;
  const targetH = Math.round((canvas.height / canvas.width) * targetW);
  sampleCanvas.width = targetW;
  sampleCanvas.height = targetH;
  const sampleCtx = sampleCanvas.getContext("2d");
  sampleCtx.drawImage(canvas, 0, 0, targetW, targetH);
  const data = sampleCtx.getImageData(0, 0, targetW, targetH).data;

  let minX = targetW;
  let minY = targetH;
  let maxX = 0;
  let maxY = 0;
  let skinCount = 0;

  for (let y = 0; y < targetH; y += 2) {
    for (let x = 0; x < targetW; x += 2) {
      const idx = (y * targetW + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
      const saturation = max === 0 ? 0 : (max - min) / max;

      const skinLike =
        r > 50 &&
        g > 30 &&
        b > 18 &&
        r > b * 0.88 &&
        r > g * 0.68 &&
        saturation < 0.82 &&
        brightness > 38 &&
        brightness < 238;

      if (skinLike) {
        skinCount += 1;
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }

  const total = (targetW * targetH) / 4;
  if (skinCount < total * 0.035 || maxX <= minX || maxY <= minY) return null;

  const raw = {
    x: (minX / targetW) * canvas.width,
    y: (minY / targetH) * canvas.height,
    width: ((maxX - minX) / targetW) * canvas.width,
    height: ((maxY - minY) / targetH) * canvas.height,
  };

  return normaliseDetectedFaceBox(raw, canvas);
}

function cropWithinFace(faceBox, regionCrop) {
  if (!faceBox) return regionCrop;

  return {
    x: clamp(faceBox.x + faceBox.w * regionCrop.x, 0, 1),
    y: clamp(faceBox.y + faceBox.h * regionCrop.y, 0, 1),
    w: clamp(faceBox.w * regionCrop.w, 0.03, 1),
    h: clamp(faceBox.h * regionCrop.h, 0.03, 1),
  };
}

async function detectFaceBoxFromCanvas(canvas, faceLandmarker = null) {
  if (!canvas) return null;

  const mediaPipeResult = await detectFaceWithMediaPipe(canvas, faceLandmarker);
  if (mediaPipeResult?.faceBox) return mediaPipeResult;

  if (window.FaceDetector) {
    try {
      const detector = new window.FaceDetector({
        fastMode: true,
        maxDetectedFaces: 1,
      });
      const faces = await detector.detect(canvas);

      if (faces && faces.length) {
        const box = faces[0].boundingBox;
        const normalised = normaliseDetectedFaceBox(box, canvas);
        if (normalised) {
          return {
            faceBox: normalised,
            source: "browser-face-detector",
            meshPoints: [],
          };
        }
      }
    } catch {
      // Fall through to skin-pixel fallback below.
    }
  }

  const fallback = estimateFaceBoxFromSkinPixels(canvas);
  return fallback
    ? {
        faceBox: fallback,
        source: "skin-pixel-fallback",
        meshPoints: [],
      }
    : null;
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
    sw = Math.max(10, Math.floor(canvas.width * crop.w));
    sh = Math.max(10, Math.floor(canvas.height * crop.h));
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
  let redSpotPixels = 0;
  let darkSpotPixels = 0;
  const luminances = [];

  const sampleStep = 3;

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
      const brownish = Math.max(0, r * 0.48 + g * 0.34 - b * 0.68 - 34);

      const skinLike =
        r > 45 &&
        g > 28 &&
        b > 18 &&
        r > b * 0.86 &&
        r > g * 0.66 &&
        saturation < 0.78 &&
        brightness > 32 &&
        brightness < 245;

      count += 1;
      brightnessSum += brightness;
      saturationSum += saturation;
      rednessSum += redness;
      colorVarianceSum += Math.abs(r - g) + Math.abs(g - b) + Math.abs(r - b);
      brownContrastSum += brownish;
      luminances.push(brightness);

      if (skinLike) skinLikePixels += 1;
      if (brightness > 210 && saturation < 0.28) shinePixels += 1;
      if (brightness > 235) veryBright += 1;
      if (brightness < 36) veryDark += 1;
      if (skinLike && redness > 26 && saturation > 0.18) redSpotPixels += 1;
      if (skinLike && brownish > 24 && brightness < 176) darkSpotPixels += 1;
    }
  }

  const avgBrightness = brightnessSum / Math.max(count, 1);
  const avgSaturation = saturationSum / Math.max(count, 1);
  const avgRedness = rednessSum / Math.max(count, 1);
  const skinRatio = skinLikePixels / Math.max(count, 1);
  const avgBrownContrast = brownContrastSum / Math.max(count, 1);

  let textureSum = 0;
  let edgeCount = 0;
  let microEdges = 0;
  let lineLikeEdges = 0;

  for (let y = 4; y < sh - 4; y += 4) {
    for (let x = 4; x < sw - 4; x += 4) {
      const idx = (y * sw + x) * 4;
      const idxRight = (y * sw + Math.min(sw - 1, x + 2)) * 4;
      const idxDown = (Math.min(sh - 1, y + 2) * sw + x) * 4;
      const idxDiag = (Math.min(sh - 1, y + 2) * sw + Math.min(sw - 1, x + 2)) * 4;

      const lum = 0.299 * image[idx] + 0.587 * image[idx + 1] + 0.114 * image[idx + 2];
      const lumR = 0.299 * image[idxRight] + 0.587 * image[idxRight + 1] + 0.114 * image[idxRight + 2];
      const lumD = 0.299 * image[idxDown] + 0.587 * image[idxDown + 1] + 0.114 * image[idxDown + 2];
      const lumDiag = 0.299 * image[idxDiag] + 0.587 * image[idxDiag + 1] + 0.114 * image[idxDiag + 2];

      const horizontalEdge = Math.abs(lum - lumR);
      const verticalEdge = Math.abs(lum - lumD);
      const diagonalEdge = Math.abs(lum - lumDiag);
      const localEdge = horizontalEdge + verticalEdge + diagonalEdge * 0.6;

      textureSum += localEdge;
      edgeCount += 1;
      if (localEdge > 24) microEdges += 1;
      if (horizontalEdge > 18 && verticalEdge < horizontalEdge * 0.65) lineLikeEdges += 1;
    }
  }

  const avgTexture = textureSum / Math.max(edgeCount, 1);
  const microEdgeRatio = microEdges / Math.max(edgeCount, 1);
  const lineEdgeRatio = lineLikeEdges / Math.max(edgeCount, 1);
  const brightnessSpread = Math.sqrt(
    luminances.reduce((sum, lum) => sum + Math.pow(lum - avgBrightness, 2), 0) / Math.max(luminances.length, 1)
  );

  const lightingScore = clamp(
    100 -
      Math.abs(avgBrightness - 148) * 0.72 -
      (veryBright / Math.max(count, 1)) * 180 -
      (veryDark / Math.max(count, 1)) * 165 -
      Math.max(0, brightnessSpread - 60) * 0.42,
    0,
    100
  );

  const sharpnessScore = clamp(avgTexture * 2.1 + microEdgeRatio * 130, 0, 100);
  const acneScore = clamp(
    (redSpotPixels / Math.max(skinLikePixels, 1)) * 520 +
      Math.max(0, avgRedness - 9) * 1.35 +
      Math.max(0, avgTexture - 23) * 0.65 +
      avgSaturation * 18,
    0,
    100
  );

  const drynessScore = clamp(
    Math.max(0, avgTexture - 18) * 1.08 +
      Math.max(0, 120 - avgBrightness) * 0.26 +
      Math.max(0, brightnessSpread - 44) * 0.34 +
      Math.max(0, 0.45 - skinRatio) * 22,
    0,
    100
  );

  const rednessScore = clamp(
    Math.max(0, avgRedness - 4) * 2.15 +
      (redSpotPixels / Math.max(skinLikePixels, 1)) * 260 +
      avgSaturation * 12,
    0,
    100
  );

  const shineScore = clamp(
    (shinePixels / Math.max(count, 1)) * 950 +
      (veryBright / Math.max(count, 1)) * 460 +
      Math.max(0, avgBrightness - 166) * 0.42 -
      avgSaturation * 7,
    0,
    100
  );

  const textureScore = clamp(
    avgTexture * 1.35 +
      Math.max(0, brightnessSpread - 38) * 0.48 +
      lineEdgeRatio * 160,
    0,
    100
  );

  const poreScore = clamp(
    microEdgeRatio * 260 +
      Math.max(0, avgTexture - 20) * 0.95 +
      Math.max(0, avgSaturation - 0.22) * 22,
    0,
    100
  );

  const pigmentationScore = clamp(
    avgBrownContrast * 1.45 +
      (darkSpotPixels / Math.max(skinLikePixels, 1)) * 360 +
      Math.max(0, brightnessSpread - 45) * 0.48,
    0,
    100
  );

  const evennessScore = clamp(
    100 - (colorVarianceSum / Math.max(count, 1)) * 0.48 - brightnessSpread * 0.52 - rednessScore * 0.1,
    0,
    100
  );

  const visualQuality = Math.round(
    clamp(lightingScore * 0.48 + Math.min(skinRatio * 165, 100) * 0.25 + sharpnessScore * 0.27, 0, 100)
  );

  const skinReliability = clamp((skinRatio - 0.16) / 0.42, 0.25, 1);
  const safeConcernScore = (score) => Math.round(clamp(score * skinReliability, 0, 100));

  return {
    lighting: Math.round(lightingScore),
    acne: safeConcernScore(acneScore),
    dryness: safeConcernScore(drynessScore),
    redness: safeConcernScore(rednessScore),
    shine: Math.round(clamp(shineScore * clamp((skinRatio - 0.08) / 0.36, 0.45, 1), 0, 100)),
    texture: safeConcernScore(textureScore),
    pores: safeConcernScore(poreScore),
    pigmentation: safeConcernScore(pigmentationScore),
    evenness: Math.round(evennessScore),
    blur: Math.round(sharpnessScore),
    visualQuality,
    confidence: visualQuality,
    skinRatio: Math.round(skinRatio * 100),
  };
}

function analyseFrameRegions(canvas, stepId = "front", detectedFaceBox = null) {
  const closeUpMap = {
    tzone: ["tzone", "forehead"],
    cheek: ["leftCheek", "rightCheek"],
    left: ["leftCheek"],
    right: ["rightCheek"],
    front: ["forehead", "leftCheek", "rightCheek", "tzone", "chin"],
    problemArea: ["leftCheek", "rightCheek", "chin"],
  };

  const selectedIds = closeUpMap[stepId] || closeUpMap.front;
  const selectedRegions = FACE_REGION_CROPS.filter((region) => selectedIds.includes(region.id));

  return selectedRegions.map((region) => {
    const analysisCrop = cropWithinFace(detectedFaceBox, region.crop);
    return {
      region,
      scores: analyseCanvas(canvas, analysisCrop),
      zoomImage: createZoomCropDataUrl(canvas, analysisCrop),
      usedFaceDetection: Boolean(detectedFaceBox),
    };
  });
}

function combineRegionResults(regionItems) {
  if (!regionItems.length) {
    return analyseCanvas(document.createElement("canvas"));
  }

  const metrics = ["acne", "dryness", "redness", "shine", "texture", "pores", "pigmentation"];
  const combined = {};

  metrics.forEach((key) => {
    combined[key] = Math.round(clamp(weightedAverage(regionItems, key), 0, 100));
  });

  combined.lighting = Math.round(weightedAverage(regionItems, "lighting"));
  combined.blur = Math.round(weightedAverage(regionItems, "blur"));
  combined.evenness = Math.round(weightedAverage(regionItems, "evenness"));
  combined.visualQuality = Math.round(weightedAverage(regionItems, "visualQuality"));
  combined.confidence = combined.visualQuality;

  // Region-specific boosts: do not let one whole-face average hide visible local concerns.
  const maxFor = (key) => Math.max(...regionItems.map((item) => item.scores[key] || 0));
  combined.acne = Math.round(clamp(combined.acne * 0.72 + maxFor("acne") * 0.28, 0, 100));
  combined.redness = Math.round(clamp(combined.redness * 0.7 + maxFor("redness") * 0.3, 0, 100));
  combined.pores = Math.round(clamp(combined.pores * 0.65 + maxFor("pores") * 0.35, 0, 100));
  combined.pigmentation = Math.round(clamp(combined.pigmentation * 0.72 + maxFor("pigmentation") * 0.28, 0, 100));

  const evidenceByRegion = new Map();

  regionItems.forEach((item) => {
    const dominant = [
      ["acne", item.scores.acne],
      ["dryness", item.scores.dryness],
      ["redness", item.scores.redness],
      ["shine", item.scores.shine],
      ["texture", item.scores.texture],
      ["pores", item.scores.pores],
      ["pigmentation", item.scores.pigmentation],
    ].sort((a, b) => b[1] - a[1])[0];

    const evidenceItem = {
      id: item.region.id,
      en: item.region.en,
      zh: item.region.zh,
      dominant: dominant[0],
      score: Math.round(dominant[1]),
      skinRatio: item.scores.skinRatio || 0,
      scores: item.scores,
      zoomImage: item.zoomImage,
    };

    const existing = evidenceByRegion.get(evidenceItem.id);
    if (!existing || evidenceItem.score + evidenceItem.skinRatio * 0.25 > existing.score + existing.skinRatio * 0.25) {
      evidenceByRegion.set(evidenceItem.id, evidenceItem);
    }
  });

  combined.regionEvidence = Array.from(evidenceByRegion.values())
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  combined.priorityScores = [
    { key: "acne", score: combined.acne },
    { key: "dryness", score: combined.dryness },
    { key: "redness", score: combined.redness },
    { key: "shine", score: combined.shine },
    { key: "pores", score: combined.pores },
    { key: "texture", score: combined.texture },
    { key: "pigmentation", score: combined.pigmentation },
  ].sort((a, b) => b.score - a.score);

  combined.routineLevel = determineRoutineLevel(combined);
  combined.skinQuality = Math.round(
    clamp(
      100 -
        combined.acne * 0.14 -
        combined.dryness * 0.15 -
        combined.redness * 0.15 -
        combined.shine * 0.08 -
        combined.pores * 0.1 -
        combined.texture * 0.12 -
        combined.pigmentation * 0.11 +
        combined.visualQuality * 0.2,
      0,
      100
    )
  );

  return combined;
}

function determineRoutineLevel(result) {
  const barrierStress = Math.max(result.dryness || 0, result.redness || 0);
  const activeNeed = Math.max(result.acne || 0, result.pores || 0, result.texture || 0, result.pigmentation || 0);
  if (barrierStress >= 68) return "repair";
  if (activeNeed >= 76 && barrierStress < 55) return "active";
  if (activeNeed >= 58 || barrierStress >= 52) return "balanced";
  return "maintenance";
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

  return concernScores[0][1] >= 45 ? concernScores[0][0] : "maintenance";
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


const captureSteps = [
  {
    id: "front",
    en: "Front overview",
    zh: "正脸整体照",
    enTip: "Good for tone, redness, shine and overall balance.",
    zhTip: "适合观察肤色、泛红、油光和整体状态。",
    enInstruction: "Face the camera directly. Keep the whole face visible, remove glasses if possible, and use even front light.",
    zhInstruction: "正对镜头，完整露出全脸；尽量摘下眼镜，在正面均匀光线下拍摄。",
  },
  {
    id: "left",
    en: "Left 45° angle",
    zh: "左侧 45°",
    enTip: "Useful for cheek texture, redness and uneven tone.",
    zhTip: "适合观察脸颊纹理、泛红和肤色不均。",
    enInstruction: "Turn your face about 45 degrees to the left. Keep the cheek clear and avoid strong side shadows.",
    zhInstruction: "脸向左转约 45 度，露出脸颊；避免强侧光阴影。",
  },
  {
    id: "right",
    en: "Right 45° angle",
    zh: "右侧 45°",
    enTip: "Useful for side comparison and hidden uneven areas.",
    zhTip: "适合左右对比和发现侧脸不均匀区域。",
    enInstruction: "Turn your face about 45 degrees to the right. Keep the cheek and jawline clear.",
    zhInstruction: "脸向右转约 45 度，露出脸颊和下颌线。",
  },
  {
    id: "tzone",
    en: "T-zone / nose close-up",
    zh: "T 区 / 鼻翼近拍",
    enTip: "Best for shine, pores and clogged-pore-like texture.",
    zhTip: "最适合观察油光、毛孔和闭口样纹理。",
    enInstruction: "Move closer to the nose and T-zone. Use your phone rear camera if possible; avoid digital zoom blur.",
    zhInstruction: "靠近鼻翼和 T 区拍摄；建议用手机后置摄像头，避免过度数码放大导致模糊。",
  },
  {
    id: "cheek",
    en: "Cheek close-up",
    zh: "脸颊近拍",
    enTip: "Best for redness, dryness, pores and pigmentation contrast.",
    zhTip: "最适合观察泛红、干燥、毛孔和色差。",
    enInstruction: "Move closer to one cheek. Keep the cheek flat to the camera and use soft natural light.",
    zhInstruction: "靠近一侧脸颊拍摄，让脸颊尽量正对镜头，并使用柔和自然光。",
  },
  {
    id: "eyeForehead",
    en: "Eye / forehead close-up",
    zh: "眼周 / 额头近拍",
    enTip: "Best for fine lines and texture visibility.",
    zhTip: "最适合观察细纹和线状纹理。",
    enInstruction: "Move closer to the eye/forehead area. Keep expression relaxed and avoid squinting.",
    zhInstruction: "靠近眼周或额头拍摄，表情放松，不要眯眼。",
  },
  {
    id: "problemArea",
    en: "Problem-area close-up",
    zh: "问题区域近拍",
    enTip: "Use this for peeling, blemishes or any area you already worry about.",
    zhTip: "用于你已经在意的脱皮、瑕疵或局部问题。",
    enInstruction: "Aim at the exact area you already worry about, such as peeling, blemishes, redness, or rough texture.",
    zhInstruction: "对准你最在意的具体区域，例如脱皮、瑕疵、泛红或粗糙纹理。",
  },
];

const scanSteps = [
  {
    id: "front",
    en: "Look straight",
    zh: "正对镜头",
    enInstruction: "Keep your face inside the oval. Use bright, even light.",
    zhInstruction: "让脸部进入椭圆框内，使用明亮均匀的光线。",
    prepare: 3200,
    capture: 1200,
    duration: 4400,
  },
  {
    id: "left",
    en: "Turn slightly left",
    zh: "轻微向左转",
    enInstruction: "Slowly turn your face left. Keep your cheek visible.",
    zhInstruction: "脸部慢慢向左转，让脸颊保持清楚可见。",
    prepare: 3200,
    capture: 1200,
    duration: 4400,
  },
  {
    id: "right",
    en: "Turn slightly right",
    zh: "轻微向右转",
    enInstruction: "Slowly turn your face right. Keep your cheek visible.",
    zhInstruction: "脸部慢慢向右转，让另一侧脸颊保持清楚可见。",
    prepare: 3200,
    capture: 1200,
    duration: 4400,
  },
  {
    id: "tzone",
    en: "Move closer to T-zone",
    zh: "靠近 T 区",
    enInstruction: "Move the camera closer to the forehead and nose area. Do not use digital zoom.",
    zhInstruction: "把摄像头靠近额头和鼻翼区域，不要使用数码放大。",
    prepare: 3600,
    capture: 1400,
    duration: 5000,
  },
  {
    id: "cheek",
    en: "Move closer to cheek",
    zh: "靠近脸颊",
    enInstruction: "Move closer to one cheek so redness, dryness and texture are easier to see.",
    zhInstruction: "靠近一侧脸颊，方便观察泛红、干燥和纹理。",
    prepare: 3600,
    capture: 1400,
    duration: 5000,
  },
];



const selfConcernOptions = [
  { id: "acne", en: "Blemishes / clogged pores", zh: "痘痘 / 闭口" },
  { id: "dryness", en: "Dryness / peeling / tightness", zh: "干燥 / 脱皮 / 紧绷" },
  { id: "redness", en: "Redness / sensitivity", zh: "泛红 / 敏感" },
  { id: "shine", en: "Oiliness / shine", zh: "油光 / 出油" },
  { id: "texture", en: "Fine lines / texture", zh: "细纹 / 纹理" },
  { id: "pores", en: "Pores / rough detail", zh: "毛孔 / 粗糙" },
  { id: "pigmentation", en: "Uneven tone / dark spots", zh: "肤色不均 / 色沉" },
];

const visiaMetricConfig = [
  {
    key: "acne",
    en: "Spots / blemish proxy",
    zh: "可见斑点 / 瑕疵 proxy",
    helpEn: "Looks for spot-like redness, local contrast and uneven areas. This is not an acne diagnosis.",
    helpZh: "观察点状泛红、局部对比和不均匀区域。这不是痤疮诊断。",
  },
  {
    key: "texture",
    en: "Wrinkles / fine-line visibility",
    zh: "皱纹 / 细纹可见度",
    helpEn: "Uses line-like texture and edge density. Close-up eye/forehead photos are more reliable.",
    helpZh: "基于线状纹理和边缘密度。眼周/额头近拍更可靠。",
  },
  {
    key: "texture",
    en: "Texture roughness",
    zh: "纹理粗糙度",
    helpEn: "Measures local contrast and micro-edge variation.",
    helpZh: "基于局部对比度和细小边缘变化。",
  },
  {
    key: "pores",
    en: "Pore / detail visibility",
    zh: "毛孔 / 细节可见度",
    helpEn: "Requires a sharp close-up. If the image is blurry, the result should be treated as not reliable.",
    helpZh: "需要清晰近拍。如果图像模糊，结果应视为不可靠。",
  },
  {
    key: "pigmentation",
    en: "Brown-spot-like contrast",
    zh: "棕色 / 色沉样对比",
    helpEn: "Estimates brown/dark local contrast under visible light.",
    helpZh: "估算普通可见光下的棕色/暗色局部对比。",
  },
  {
    key: "redness",
    en: "Red areas",
    zh: "泛红区域",
    helpEn: "Uses red-channel balance and regional redness tendency.",
    helpZh: "基于红色通道和区域泛红倾向。",
  },
  {
    key: "dryness",
    en: "Dryness / flaking proxy",
    zh: "干燥 / 脱皮 proxy",
    helpEn: "Looks for roughness, grey-white patches and flaky-looking texture.",
    helpZh: "观察粗糙、灰白小片和脱皮样纹理。",
  },
  {
    key: "shine",
    en: "Shine / sebum-reflection proxy",
    zh: "油光 / 皮脂反光 proxy",
    helpEn: "Looks for high-brightness, low-saturation reflective areas.",
    helpZh: "观察高亮、低饱和的反光区域。",
  },
];

function classifyEvidence(score, confidence, t, selfNoted = false) {
  if (confidence < 45) return t.notReliable;
  if (score >= 70) return t.visible;
  if (score >= 45 || selfNoted) return t.possible;
  return t.notClear;
}

function buildVisiaRows(lang, result, selfConcerns, t) {
  if (!result) return [];
  const confidence = result.confidence || 0;

  return visiaMetricConfig.map((metric) => {
    const rawScore = Math.round(result[metric.key] || 0);
    const selfNoted = selfConcerns.includes(metric.key);
    const adjustedScore = Math.min(100, rawScore + (selfNoted ? 18 : 0));
    return {
      ...metric,
      score: adjustedScore,
      rawScore,
      status: classifyEvidence(adjustedScore, confidence, t, selfNoted),
      selfNoted,
      help: lang === "en" ? metric.helpEn : metric.helpZh,
      label: lang === "en" ? metric.en : metric.zh,
    };
  });
}

function getRetakeAdvice(lang, result, selfConcerns = []) {
  const zh = lang === "zh";
  if (!result) return "";
  if (result.confidence < 45) {
    return zh
      ? "当前照片可信度偏低。请使用手机后置摄像头，在自然光下重新拍摄。"
      : "The photo confidence is low. Use a phone rear camera in natural daylight and retake.";
  }
  if (result.blur < 45) {
    return zh
      ? "清晰度不足，毛孔、脱皮和细纹可能漏检。请靠近皮肤，避免数码放大过度。"
      : "Sharpness is low, so pores, peeling and fine lines may be missed. Move closer and avoid excessive digital zoom.";
  }
  if (selfConcerns.includes("pores")) {
    return zh
      ? "你关注毛孔，建议补拍鼻翼/T 区或脸颊近距离照片。"
      : "Because you selected pores, take a nose/T-zone or cheek close-up.";
  }
  if (selfConcerns.includes("texture")) {
    return zh
      ? "你关注细纹/纹理，建议补拍眼周或额头近距离照片。"
      : "Because you selected fine lines/texture, take an eye or forehead close-up.";
  }
  if (selfConcerns.includes("dryness")) {
    return zh
      ? "你关注干燥/脱皮，建议补拍最干燥区域的近距离照片。"
      : "Because you selected dryness/flaking, take a close-up of the driest area.";
  }
  return zh
    ? "如果结果与实际肤感不一致，请补拍对应区域的局部近照。"
    : "If the report misses a known concern, take a close-up of that exact area.";
}


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
  const priorities = (result.priorityScores || [])
    .slice(0, 3)
    .map((item) => {
      const labels = {
        acne: zh ? "瑕疵样信号" : "blemish-like signal",
        dryness: zh ? "干燥/脱皮信号" : "dryness/flaking signal",
        redness: zh ? "泛红信号" : "redness signal",
        shine: zh ? "油光信号" : "shine signal",
        texture: zh ? "纹理/细纹信号" : "texture/fine-line signal",
        pores: zh ? "毛孔样细节信号" : "pore-like detail signal",
        pigmentation: zh ? "肤色不均/色沉样信号" : "uneven-tone signal",
      };
      return `${labels[item.key]} ${Math.round(item.score)}/100`;
    });

  const intensityLabel = {
    repair: zh ? "Level 1 — 修护优先" : "Level 1 — barrier-first",
    maintenance: zh ? "Level 1 — 稳定维持" : "Level 1 — maintenance",
    balanced: zh ? "Level 2 — 稳定基础上谨慎加入活性" : "Level 2 — cautious active support",
    active: zh ? "Level 3 — 屏障稳定时可加强功效" : "Level 3 — stronger active pathway if barrier is stable",
  }[result.routineLevel || "maintenance"];

  const areaPrefix = zoneName
    ? zh
      ? `在${zoneName}区域，`
      : `In the ${zoneName} area, `
    : "";

  const evidenceText = priorities.length
    ? zh
      ? `本次扫描的主要可见优先级为：${priorities.join("，")}。`
      : `The main visible priorities in this scan are: ${priorities.join(", ")}.`
    : "";

  const advice = zh
    ? `${areaPrefix}${evidenceText} 推荐方案强度：${intensityLabel}。${bundle.why} 下面的方案不是医学处方，而是基于本次扫描的可见肤况信号和你选择的肤感问题生成的护肤组合建议。`
    : `${areaPrefix}${evidenceText} Recommended routine intensity: ${intensityLabel}. ${bundle.why} The plan below is not a medical prescription; it is skincare guidance generated from visible scan signals and your selected concerns.`;

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
    intensityLabel,
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


function uniqueByHref(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (!item || !item.href || seen.has(item.href)) return false;
    seen.add(item.href);
    return true;
  });
}

function withReason(item, reasonEn, reasonZh) {
  return {
    ...item,
    reasonEn,
    reasonZh,
  };
}

function firstItems(group, indexes = []) {
  const list = affiliateLibrary[group] || [];
  return indexes.map((index) => list[index]).filter(Boolean);
}



const PRODUCT_ROLE_LABELS = {
  foundation: { en: "Foundation", zh: "基础护理" },
  treatment: { en: "Targeted treatment", zh: "针对性护理" },
  weekly: { en: "Weekly option", zh: "每周选项" },
  repair: { en: "Repair support", zh: "修护支持" },
};

const PRODUCT_SCORE_PROFILES = {
  acne: {
    role: "treatment",
    concernTags: ["acne", "pores"],
    avoidIfBarrierHigh: false,
    strength: "active",
    minScore: { acne: 46 },
    boostIf: { acne: 48, pores: 55 },
    riskIf: { dryness: 65, redness: 65 },
  },
  dryness: {
    role: "repair",
    concernTags: ["dryness", "redness"],
    avoidIfBarrierHigh: false,
    strength: "gentle",
    minScore: { dryness: 34 },
    boostIf: { dryness: 45, redness: 52 },
    riskIf: {},
  },
  redness: {
    role: "repair",
    concernTags: ["redness", "dryness"],
    avoidIfBarrierHigh: false,
    strength: "gentle",
    minScore: { redness: 38 },
    boostIf: { redness: 48, dryness: 58 },
    riskIf: {},
  },
  shine: {
    role: "foundation",
    concernTags: ["shine", "pores"],
    avoidIfBarrierHigh: false,
    strength: "gentle",
    minScore: { shine: 42 },
    boostIf: { shine: 52, pores: 52 },
    riskIf: { dryness: 75 },
  },
  pores: {
    role: "treatment",
    concernTags: ["pores", "shine"],
    avoidIfBarrierHigh: false,
    strength: "active",
    minScore: { pores: 46 },
    boostIf: { pores: 52, shine: 55 },
    riskIf: { dryness: 68, redness: 68 },
  },
  texture: {
    role: "treatment",
    concernTags: ["texture", "dryness"],
    avoidIfBarrierHigh: true,
    strength: "active",
    minScore: { texture: 48 },
    boostIf: { texture: 56 },
    riskIf: { dryness: 62, redness: 62 },
  },
  pigmentation: {
    role: "treatment",
    concernTags: ["pigmentation", "redness"],
    avoidIfBarrierHigh: false,
    strength: "active",
    minScore: { pigmentation: 45 },
    boostIf: { pigmentation: 52, redness: 58 },
    riskIf: { redness: 76 },
  },
  maintenance: {
    role: "foundation",
    concernTags: ["maintenance"],
    avoidIfBarrierHigh: false,
    strength: "gentle",
    minScore: {},
    boostIf: {},
    riskIf: {},
  },
};

function inferProductRole(group, item, index) {
  const text = `${item?.en || ""} ${item?.zh || ""}`.toLowerCase();

  if (
    text.includes("sunscreen") ||
    text.includes("spf") ||
    text.includes("cleanser") ||
    text.includes("洁面") ||
    text.includes("防晒")
  ) {
    return "foundation";
  }

  if (
    text.includes("cicaplast") ||
    text.includes("petrolatum") ||
    text.includes("ointment") ||
    text.includes("barrier") ||
    text.includes("ceramide") ||
    text.includes("moisturiser") ||
    text.includes("moisturising") ||
    text.includes("cream") ||
    text.includes("修护") ||
    text.includes("保湿") ||
    text.includes("面霜")
  ) {
    return group === "dryness" || group === "redness" ? "repair" : "foundation";
  }

  if (
    text.includes("mask") ||
    text.includes("泥膜") ||
    text.includes("clay")
  ) {
    return "weekly";
  }

  if (
    text.includes("bha") ||
    text.includes("salicylic") ||
    text.includes("benzoyl") ||
    text.includes("retinol") ||
    text.includes("retinal") ||
    text.includes("vitamin c") ||
    text.includes("niacinamide") ||
    text.includes("azelaic") ||
    text.includes("peptide") ||
    text.includes("水杨酸") ||
    text.includes("壬二酸") ||
    text.includes("烟酰胺") ||
    text.includes("视黄") ||
    text.includes("维 c")
  ) {
    return "treatment";
  }

  return PRODUCT_SCORE_PROFILES[group]?.role || "foundation";
}

function inferProductTags(group, item) {
  const text = `${item?.en || ""} ${item?.zh || ""}`.toLowerCase();
  const tags = new Set(PRODUCT_SCORE_PROFILES[group]?.concernTags || [group]);

  if (text.includes("sunscreen") || text.includes("spf") || text.includes("防晒")) tags.add("sunscreen");
  if (text.includes("cleanser") || text.includes("洁面")) tags.add("cleanser");
  if (text.includes("moistur") || text.includes("cream") || text.includes("保湿") || text.includes("面霜")) tags.add("moisturiser");
  if (text.includes("barrier") || text.includes("ceramide") || text.includes("cicaplast") || text.includes("repair") || text.includes("修护") || text.includes("屏障")) tags.add("barrier");
  if (text.includes("bha") || text.includes("salicylic") || text.includes("水杨酸")) tags.add("bha");
  if (text.includes("benzoyl") || text.includes("过氧化")) tags.add("benzoyl");
  if (text.includes("azelaic") || text.includes("壬二酸")) tags.add("azelaic");
  if (text.includes("niacinamide") || text.includes("烟酰胺")) tags.add("niacinamide");
  if (text.includes("retinol") || text.includes("retinal") || text.includes("视黄")) tags.add("retinoid");
  if (text.includes("vitamin c") || text.includes("维 c")) tags.add("vitamin-c");
  if (text.includes("clay") || text.includes("mask") || text.includes("泥膜")) tags.add("weekly-mask");
  if (text.includes("mineral") || text.includes("zinc") || text.includes("矿物")) tags.add("sensitive-sunscreen");

  return Array.from(tags);
}

function buildProductCandidates() {
  return Object.entries(affiliateLibrary).flatMap(([group, items]) =>
    (items || []).map((item, index) => ({
      ...item,
      group,
      libraryIndex: index,
      role: inferProductRole(group, item, index),
      tags: inferProductTags(group, item),
      profile: PRODUCT_SCORE_PROFILES[group] || PRODUCT_SCORE_PROFILES.maintenance,
    }))
  );
}

function scoreProductCandidate(candidate, result, selfConcerns = [], selected = []) {
  const scores = {
    acne: result.acne || 0,
    dryness: result.dryness || 0,
    redness: result.redness || 0,
    shine: result.shine || 0,
    pores: result.pores || 0,
    texture: result.texture || 0,
    pigmentation: result.pigmentation || 0,
  };

  const barrierStress = Math.max(scores.dryness, scores.redness);
  const activeNeed = Math.max(scores.acne, scores.pores, scores.texture, scores.pigmentation);
  const profile = candidate.profile || PRODUCT_SCORE_PROFILES.maintenance;

  let score = 8;

  // Concern match
  (profile.concernTags || []).forEach((tag) => {
    if (scores[tag] !== undefined) score += scores[tag] * 0.48;
    if (selfConcerns.includes(tag)) score += 14;
  });

  // Explicit min-score requirements
  Object.entries(profile.minScore || {}).forEach(([key, min]) => {
    if ((scores[key] || 0) < min && !selfConcerns.includes(key)) score -= 28;
  });

  // Boost thresholds
  Object.entries(profile.boostIf || {}).forEach(([key, threshold]) => {
    if ((scores[key] || 0) >= threshold) score += 12 + ((scores[key] || 0) - threshold) * 0.18;
  });

  // Safety penalties
  Object.entries(profile.riskIf || {}).forEach(([key, threshold]) => {
    if ((scores[key] || 0) >= threshold) score -= 18 + ((scores[key] || 0) - threshold) * 0.2;
  });

  if (profile.avoidIfBarrierHigh && barrierStress >= 62) score -= 40;
  if (candidate.tags.includes("benzoyl") && barrierStress >= 58) score -= 30;
  if (candidate.tags.includes("retinoid") && barrierStress >= 58) score -= 34;
  if (candidate.tags.includes("bha") && barrierStress >= 68) score -= 28;
  if (candidate.tags.includes("vitamin-c") && scores.redness >= 70) score -= 18;

  // Foundation logic
  if (candidate.role === "foundation") score += 18;
  if (candidate.tags.includes("sunscreen")) score += 20;
  if (candidate.tags.includes("cleanser")) score += barrierStress >= 58 ? 16 : 8;
  if (candidate.tags.includes("moisturiser")) score += barrierStress >= 50 ? 18 : 10;
  if (candidate.tags.includes("barrier")) score += barrierStress * 0.32;

  // Treatment logic
  if (candidate.role === "treatment") {
    score += activeNeed >= 55 ? 12 : -8;
    if (barrierStress >= 70) score -= 18;
  }

  // Weekly logic
  if (candidate.role === "weekly") {
    score += scores.shine >= 70 || scores.pores >= 70 ? 12 : -18;
    if (barrierStress >= 55) score -= 24;
  }

  // Diversity penalty: avoid repeated same functional tags.
  const selectedTags = selected.flatMap((item) => item.tags || []);
  candidate.tags.forEach((tag) => {
    const count = selectedTags.filter((selectedTag) => selectedTag === tag).length;
    if (count > 0 && !["sunscreen", "moisturiser", "barrier"].includes(tag)) score -= 14 * count;
  });

  // Avoid too many items from same original group.
  const sameGroupCount = selected.filter((item) => item.group === candidate.group).length;
  if (sameGroupCount >= 2) score -= 18 * sameGroupCount;

  // Gentle fairness: rotate products inside the same group so later products are not impossible to show.
  // This is deliberately small and applied after safety penalties.
  score += Math.min(candidate.libraryIndex || 0, 4) * 1.8;

  return Math.round(score * 10) / 10;
}

function reasonForCandidate(candidate, result, lang) {
  const zh = lang === "zh";
  const topConcern = [
    ["acne", result.acne || 0, zh ? "瑕疵样信号" : "blemish-like signal"],
    ["dryness", result.dryness || 0, zh ? "干燥/脱皮信号" : "dryness/flaking signal"],
    ["redness", result.redness || 0, zh ? "泛红信号" : "redness signal"],
    ["shine", result.shine || 0, zh ? "油光信号" : "shine signal"],
    ["pores", result.pores || 0, zh ? "毛孔样细节" : "pore-like detail"],
    ["texture", result.texture || 0, zh ? "纹理/细纹信号" : "texture/fine-line signal"],
    ["pigmentation", result.pigmentation || 0, zh ? "肤色不均信号" : "uneven-tone signal"],
  ].sort((a, b) => b[1] - a[1])[0];

  const role = PRODUCT_ROLE_LABELS[candidate.role] || PRODUCT_ROLE_LABELS.foundation;

  if (zh) {
    if (candidate.tags.includes("sunscreen")) return `作为${role.zh}，防晒是所有色沉、细纹和屏障护理的基础步骤。`;
    if (candidate.tags.includes("barrier")) return `作为${role.zh}，适合在干燥/泛红或屏障压力较高时优先使用。`;
    if (candidate.tags.includes("bha")) return `针对${topConcern[2]}，低频使用更适合闭口、毛孔和油光管理。`;
    if (candidate.tags.includes("azelaic")) return `针对${topConcern[2]}，壬二酸方向可兼顾瑕疵、泛红和肤色不均。`;
    if (candidate.tags.includes("retinoid")) return `针对${topConcern[2]}，仅在屏障稳定时作为循序渐进的夜间功效步骤。`;
    if (candidate.tags.includes("niacinamide")) return `针对${topConcern[2]}，烟酰胺方向更适合油脂平衡、毛孔和肤色支持。`;
    return `根据${topConcern[2]}和当前方案强度，作为${role.zh}加入。`;
  }

  if (candidate.tags.includes("sunscreen")) return `As ${role.en.toLowerCase()}, sunscreen is foundational for tone, texture and barrier support.`;
  if (candidate.tags.includes("barrier")) return `As ${role.en.toLowerCase()}, this supports dryness, redness and barrier-stress signals.`;
  if (candidate.tags.includes("bha")) return `For ${topConcern[2]}, low-frequency BHA direction can support clogged-pore, pore and shine management.`;
  if (candidate.tags.includes("azelaic")) return `For ${topConcern[2]}, azelaic acid direction can support blemish, redness and uneven-tone concerns.`;
  if (candidate.tags.includes("retinoid")) return `For ${topConcern[2]}, use only if the barrier is stable and introduce slowly at night.`;
  if (candidate.tags.includes("niacinamide")) return `For ${topConcern[2]}, niacinamide direction can support oil balance, pores and tone.`;
  return `Selected as ${role.en.toLowerCase()} based on the visible priority signals and routine intensity.`;
}

function pickBestByRole(scored, role, selected, limit = 1) {
  const picked = [];
  for (const item of scored) {
    if (item.role !== role) continue;
    if (selected.some((selectedItem) => selectedItem.href === item.href)) continue;
    picked.push(item);
    selected.push(item);
    if (picked.length >= limit) break;
  }
  return picked;
}



function buildScoreBasedProductPlan(result, report, selfConcerns = []) {
  if (!result) return getAffiliateItems(report?.main || "maintenance");

  const candidates = buildProductCandidates();

  const selected = [];
  const scored = candidates
    .map((candidate) => ({
      ...candidate,
      suitabilityScore: scoreProductCandidate(candidate, result, selfConcerns, selected),
    }))
    .sort((a, b) => b.suitabilityScore - a.suitabilityScore);

  // 1) Foundation: one cleanser, one moisturiser/repair, one sunscreen where possible.
  const cleanser = scored.find((item) => item.tags.includes("cleanser"));
  if (cleanser) selected.push(cleanser);

  const moisturiser = scored.find(
    (item) =>
      !selected.some((selectedItem) => selectedItem.href === item.href) &&
      (item.tags.includes("moisturiser") || item.tags.includes("barrier"))
  );
  if (moisturiser) selected.push(moisturiser);

  const sunscreen = scored.find(
    (item) =>
      !selected.some((selectedItem) => selectedItem.href === item.href) &&
      item.tags.includes("sunscreen")
  );
  if (sunscreen) selected.push(sunscreen);

  // 2) Targeted treatments, safely diversified.
  const treatmentSlots = result.routineLevel === "repair" ? 1 : result.routineLevel === "active" ? 3 : 2;
  const treatmentCandidates = scored
    .filter((item) => item.role === "treatment")
    .sort((a, b) => scoreProductCandidate(b, result, selfConcerns, selected) - scoreProductCandidate(a, result, selfConcerns, selected));

  for (const item of treatmentCandidates) {
    if (selected.length >= 3 + treatmentSlots) break;
    if (selected.some((selectedItem) => selectedItem.href === item.href)) continue;

    const refreshedScore = scoreProductCandidate(item, result, selfConcerns, selected);
    if (refreshedScore < 22) continue;

    selected.push({
      ...item,
      suitabilityScore: refreshedScore,
    });
  }

  // 3) Weekly / optional support only when it makes sense.
  const weeklyCandidate = scored
    .filter((item) => item.role === "weekly")
    .sort((a, b) => scoreProductCandidate(b, result, selfConcerns, selected) - scoreProductCandidate(a, result, selfConcerns, selected))[0];

  if (weeklyCandidate && selected.length < 8) {
    const weeklyScore = scoreProductCandidate(weeklyCandidate, result, selfConcerns, selected);
    if (weeklyScore >= 26) {
      selected.push({
        ...weeklyCandidate,
        suitabilityScore: weeklyScore,
      });
    }
  }

  // 4) Fill remaining slots with high scoring but diverse products.
  for (const candidate of scored) {
    if (selected.length >= 8) break;
    if (selected.some((item) => item.href === candidate.href)) continue;

    const refreshedScore = scoreProductCandidate(candidate, result, selfConcerns, selected);
    if (refreshedScore < 20) continue;

    selected.push({
      ...candidate,
      suitabilityScore: refreshedScore,
    });
  }

  return uniqueByHref(selected)
    .sort((a, b) => {
      const roleOrder = { foundation: 0, repair: 1, treatment: 2, weekly: 3 };
      const roleDiff = (roleOrder[a.role] ?? 9) - (roleOrder[b.role] ?? 9);
      if (roleDiff !== 0) return roleDiff;
      return (b.suitabilityScore || 0) - (a.suitabilityScore || 0);
    })
    .map((item) => ({
      ...item,
      reasonEn: reasonForCandidate(item, result, "en"),
      reasonZh: reasonForCandidate(item, result, "zh"),
    }));
}




function buildRoutineProtocol(main, result, selfConcerns, lang) {
  const zh = lang === "zh";
  const score = (key) => Math.round(result?.[key] || 0);
  const highDry = score("dryness") >= 62 || selfConcerns.includes("dryness");
  const highRed = score("redness") >= 58 || selfConcerns.includes("redness");
  const acne = score("acne") >= 55 || selfConcerns.includes("acne");
  const pores = score("pores") >= 58 || selfConcerns.includes("pores");
  const shine = score("shine") >= 55 || selfConcerns.includes("shine");
  const texture = score("texture") >= 58 || selfConcerns.includes("texture");
  const pigmentation = score("pigmentation") >= 55 || selfConcerns.includes("pigmentation");

  const base = {
    morning: [
      {
        id: "am-cleanse",
        step: zh ? "清洁" : "Cleanse",
        amount: zh ? "约 20–30 秒；干敏时可只用清水" : "20–30 seconds; rinse only if dry/sensitive",
        detail: zh ? "不要用热水，不要搓到紧绷。" : "Avoid hot water and do not cleanse until tight.",
        wait: zh ? "擦干后立即下一步" : "Next step immediately after patting dry",
      },
      {
        id: "am-moisturise",
        step: zh ? "保湿" : "Moisturise",
        amount: zh ? "豌豆到一枚硬币大小，薄涂全脸" : "pea to coin-size, thin layer over face",
        detail: zh ? "干燥区域可多半层；T 区偏油则薄涂。" : "Add half-layer on dry patches; keep T-zone thin if oily.",
        wait: zh ? "等待 1–2 分钟" : "wait 1–2 minutes",
      },
      {
        id: "am-sunscreen",
        step: zh ? "防晒" : "Sunscreen",
        amount: zh ? "两指长度或约 1/4 茶匙用于脸和颈部" : "two-finger length or about 1/4 tsp for face and neck",
        detail: zh ? "白天最后一步。户外、流汗或擦拭后需要补涂。" : "Last morning step. Reapply outdoors, after sweating or wiping.",
        wait: zh ? "出门前 15 分钟更理想" : "ideally 15 minutes before going out",
      },
    ],
    evening: [
      {
        id: "pm-cleanse",
        step: zh ? "温和清洁" : "Gentle cleanse",
        amount: zh ? "30–45 秒；有防晒/彩妆时认真清洁" : "30–45 seconds; cleanse thoroughly if wearing sunscreen/makeup",
        detail: zh ? "避免磨砂和过度清洁。" : "Avoid scrubs and over-cleansing.",
        wait: zh ? "擦干后 1 分钟内保湿" : "moisturise within 1 minute after patting dry",
      },
      {
        id: "pm-repair",
        step: zh ? "修护保湿" : "Repair moisturiser",
        amount: zh ? "一枚硬币大小；干燥处可加量" : "coin-size; add more on dry areas",
        detail: zh ? "这是多数问题的安全基础，尤其泛红、干燥、刺痛时。" : "Safe foundation for most concerns, especially redness/dryness/stinging.",
        wait: zh ? "作为最后一步，或等活性成分后 5 分钟再用" : "last step, or 5 minutes after active treatment",
      },
    ],
    weekly: [],
    expected: [],
  };

  if (acne || pores) {
    base.evening.splice(1, 0, {
      id: "pm-bha",
      step: zh ? "BHA/水杨酸或控痘活性" : "BHA/salicylic or blemish active",
      amount: zh ? "每次薄薄一层；从每周 1–2 晚开始" : "thin layer; start 1–2 nights per week",
      detail: highDry || highRed
        ? (zh ? "因干燥/泛红分数较高，先不要叠加强活性。优先选温和方向，如壬二酸或低频 BHA。" : "Because dryness/redness is elevated, avoid stacking strong actives. Prefer gentler direction such as azelaic acid or low-frequency BHA.")
        : (zh ? "只选一种活性，不要同晚叠加 BHA、过氧化苯甲酰和视黄醇。" : "Choose one active only; do not stack BHA, benzoyl peroxide and retinol on the same night."),
      wait: zh ? "使用后等 5–10 分钟，再上保湿" : "wait 5–10 minutes, then moisturise",
    });
    base.weekly.push(zh ? "闭口/痘痘护理：第 1–2 周每周 1–2 晚；若不刺痛脱皮，第 3–4 周可到每周 2–3 晚。" : "Blemish/clogged-pore care: weeks 1–2 use 1–2 nights/week; if no stinging/peeling, weeks 3–4 increase to 2–3 nights/week.");
  }

  if (shine) {
    base.weekly.push(zh ? "油光明显时：泥膜只建议 T 区每周 1 次，5–10 分钟即可，不要每天使用。" : "If shine is high: clay mask T-zone only once weekly for 5–10 minutes, not daily.");
  }

  if (texture && !highDry && !highRed) {
    base.evening.splice(1, 0, {
      id: "pm-retinol",
      step: zh ? "新手视黄醇/视黄醛夜间护理" : "Beginner retinol/retinal night care",
      amount: zh ? "全脸豌豆大小；避开眼角、鼻翼沟、嘴角" : "pea-size for entire face; avoid eye corners, nose folds and mouth corners",
      detail: zh ? "每周 1–2 晚开始，不和酸类同晚使用。孕期/备孕/哺乳不要使用视黄醇类。" : "Start 1–2 nights/week; do not use with acids same night. Avoid retinoids during pregnancy/trying/breastfeeding.",
      wait: zh ? "洁面后等皮肤干 10 分钟，再上；之后保湿" : "wait 10 minutes after cleansing until skin is dry; moisturise after",
    });
    base.weekly.push(zh ? "细纹/纹理：第 1–4 周建立耐受；第 6–8 周通常更容易看到肤感平整度变化。" : "Texture/fine lines: weeks 1–4 build tolerance; weeks 6–8 are more realistic for visible smoothness changes.");
  }

  if (pigmentation) {
    base.morning.splice(1, 0, {
      id: "am-brightening",
      step: zh ? "提亮辅助：烟酰胺/维 C/壬二酸三选一" : "Brightening support: choose niacinamide / vitamin C / azelaic acid",
      amount: zh ? "2–3 滴或薄薄一层" : "2–3 drops or a thin layer",
      detail: highRed
        ? (zh ? "泛红倾向时优先烟酰胺或壬二酸，维 C 需谨慎局部测试。" : "If redness-prone, prefer niacinamide or azelaic acid; patch test vitamin C carefully.")
        : (zh ? "不要同时叠加太多提亮成分，防晒才是核心。" : "Do not layer too many brightening actives; sunscreen is the core."),
      wait: zh ? "等待 1–2 分钟再保湿" : "wait 1–2 minutes before moisturiser",
    });
    base.expected.push(zh ? "色沉/肤色不均：2–4 周主要看稳定度和不再加深；8–12 周才更适合评估淡化趋势。" : "Uneven tone: weeks 2–4 look for stability/no darkening; weeks 8–12 are more realistic for fading trend.");
  }

  if (highDry || highRed) {
    base.evening.push({
      id: "pm-occlusive",
      step: zh ? "局部封闭修护" : "Spot occlusive repair",
      amount: zh ? "米粒大小，只点涂干裂/脱皮处" : "rice-grain amount only on cracked/flaky patches",
      detail: zh ? "不要全脸厚涂在容易闷痘区域。" : "Do not apply thickly over acne-prone areas.",
      wait: zh ? "晚间最后一步" : "last evening step",
    });
    base.weekly.unshift(zh ? "屏障优先：连续 7–14 天先把刺痛、紧绷、脱皮压下来，再逐步加入活性成分。" : "Barrier first: for 7–14 days reduce stinging/tightness/flaking before adding actives.");
    base.expected.push(zh ? "干燥/泛红：3–7 天应先看到紧绷感下降；2 周后观察脱皮和刺痛是否减少。" : "Dryness/redness: in 3–7 days tightness should reduce; after 2 weeks check peeling/stinging.");
  }

  if (!base.weekly.length) {
    base.weekly.push(zh ? "维持型：连续 2 周保持清洁 + 保湿 + 防晒，不急着增加强功效。" : "Maintenance: keep cleanser + moisturiser + sunscreen for 2 weeks before adding strong actives.");
  }

  if (!base.expected.length) {
    base.expected.push(zh ? "第 1–2 周：先看是否更稳定、更少紧绷或出油。第 4 周：再判断是否需要加入更强成分。" : "Weeks 1–2: look for more stability, less tightness or shine. Week 4: decide whether stronger actives are needed.");
  }

  return base;
}


function productText(item, lang) {
  if (!item) return "";
  return lang === "zh" ? item.zh : item.en;
}

function findProductForStep(productPlan, stepId, lang) {
  const text = (item) => `${item.en || ""} ${item.zh || ""}`.toLowerCase();
  const findMany = (patterns, limit = 2) =>
    productPlan.filter((item) => patterns.some((pattern) => text(item).includes(pattern))).slice(0, limit);

  if (stepId.includes("cleanse")) {
    return findMany(["cleanser", "洁面", "清洁"], 2);
  }

  if (stepId.includes("moisturise") || stepId.includes("repair")) {
    return findMany(["moisturiser", "moisturising", "cream", "barrier", "保湿", "修护", "屏障", "霜"], 2);
  }

  if (stepId.includes("sunscreen")) {
    return findMany(["sunscreen", "spf", "防晒"], 2);
  }

  if (stepId.includes("bha")) {
    return findMany(["bha", "salicylic", "benzoyl", "azelaic", "水杨酸", "过氧化", "壬二酸"], 2);
  }

  if (stepId.includes("retinol")) {
    return findMany(["retinol", "retinal", "视黄醇", "视黄醛"], 2);
  }

  if (stepId.includes("brightening")) {
    return findMany(["niacinamide", "vitamin c", "azelaic", "烟酰胺", "维 c", "壬二酸"], 2);
  }

  if (stepId.includes("occlusive")) {
    return findMany(["petrolatum", "ointment", "cicaplast", "凡士林", "修护膏", "b5"], 2);
  }

  return [];
}

function getStepProductInstruction(stepId, products, lang) {
  const zh = lang === "zh";
  const names = products.map((item) => productText(item, lang)).join(" / ");

  if (!products.length) {
    return {
      names: "",
      dose: zh ? "按肤感执行即可。" : "Follow skin feel.",
      method: zh ? "这一步以手法和顺序为主。" : "This step is mainly about method and order.",
    };
  }

  if (stepId.includes("cleanse")) {
    return {
      names,
      dose: zh ? "约黄豆到豌豆大小，或按产品泵头 1 泵。" : "soybean to pea-size, or 1 pump if pump bottle.",
      method: zh ? "湿脸后轻柔按摩 20–45 秒，用温水冲净；不要洗到紧绷。" : "Massage on wet face for 20–45 seconds, rinse with lukewarm water; do not cleanse until tight.",
    };
  }

  if (stepId.includes("moisturise") || stepId.includes("repair")) {
    return {
      names,
      dose: zh ? "豌豆到一枚硬币大小；干燥区可多半层。" : "pea to coin-size; add half-layer on dry areas.",
      method: zh ? "在精华/活性成分后薄涂全脸。T 区偏油则薄涂，两颊干燥可加量。" : "Apply a thin layer after serum/active. Keep T-zone light; add more to dry cheeks.",
    };
  }

  if (stepId.includes("sunscreen")) {
    return {
      names,
      dose: zh ? "脸和颈部约两指长度，或约 1/4 茶匙。" : "two-finger length for face/neck, or about 1/4 tsp.",
      method: zh ? "早上最后一步。出门前 15 分钟使用；户外、流汗、擦拭后补涂。" : "Last morning step. Apply 15 minutes before going out; reapply outdoors, after sweating or wiping.",
    };
  }

  if (stepId.includes("bha")) {
    return {
      names,
      dose: zh ? "薄薄一层；初期每周 1–2 晚，不要每天开始。" : "thin layer; start 1–2 nights/week, not daily.",
      method: zh ? "洁面后、保湿前使用。先选一种活性，不要同晚叠加 BHA、过氧化苯甲酰和视黄醇。" : "Use after cleansing and before moisturiser. Choose one active only; do not stack BHA, benzoyl peroxide and retinol the same night.",
    };
  }

  if (stepId.includes("retinol")) {
    return {
      names,
      dose: zh ? "全脸豌豆大小；避开眼角、鼻翼沟和嘴角。" : "pea-size for the full face; avoid eye corners, nose folds and mouth corners.",
      method: zh ? "夜间使用。洁面后等皮肤干 10 分钟再上，之后保湿；每周 1–2 晚开始。" : "Night only. Wait 10 minutes after cleansing until dry, then apply; moisturise after. Start 1–2 nights/week.",
    };
  }

  if (stepId.includes("brightening")) {
    return {
      names,
      dose: zh ? "2–3 滴或薄薄一层。" : "2–3 drops or a thin layer.",
      method: zh ? "早上可用在保湿前，敏感皮先局部测试。提亮类必须配合防晒。" : "Use in the morning before moisturiser; patch test if sensitive. Brightening steps must pair with sunscreen.",
    };
  }

  if (stepId.includes("occlusive")) {
    return {
      names,
      dose: zh ? "米粒大小，只点涂在干裂/脱皮处。" : "rice-grain amount only on cracked/flaky patches.",
      method: zh ? "晚间最后一步，局部点涂。不要全脸厚涂在容易闷痘区域。" : "Last evening step, spot apply only. Do not apply thickly over acne-prone areas.",
    };
  }

  return {
    names,
    dose: zh ? "少量薄涂，根据耐受调整。" : "use a small thin layer; adjust by tolerance.",
    method: zh ? "按步骤顺序使用，若刺痛明显则暂停。" : "Use in sequence; pause if significant stinging occurs.",
  };
}

function RoutineProtocolPanel({ result, report, lang, t, selfConcerns, isDiaryItemDone, toggleDiaryItem }) {
  const protocol = buildRoutineProtocol(report?.main, result, selfConcerns, lang);
  const productPlan = buildScoreBasedProductPlan(result, report, selfConcerns);
  const renderSteps = (steps, prefix) => (
    <div className="protocolStepList">
      {steps.map((step, index) => {
        const itemId = `${prefix}-${step.id}`;
        const done = isDiaryItemDone(itemId);
        return (
          <div className={`protocolStep ${done ? "done" : ""}`} key={itemId}>
            <div className="stepNumber">{index + 1}</div>
            <div>
              <h5>{step.step}</h5>
              {(() => {
                const stepProducts = findProductForStep(productPlan, step.id, lang);
                const instruction = getStepProductInstruction(step.id, stepProducts, lang);
                return (
                  <div className="stepProductUse">
                    {stepProducts.length > 0 ? (
                      <>
                        <p><strong>{t.useTheseProducts}:</strong> {instruction.names}</p>
                        <p><strong>{t.productDose}:</strong> {instruction.dose}</p>
                        <p><strong>{t.productMethod}:</strong> {instruction.method}</p>
                        <div className="stepProductLinks">
                          {stepProducts.map((product) => (
                            <a href={product.href} target="_blank" rel="noreferrer" key={`${itemId}-${product.href}`}>
                              {lang === "en" ? product.en : product.zh}
                            </a>
                          ))}
                        </div>
                      </>
                    ) : (
                      <p><strong>{t.noSpecificProduct}:</strong> {instruction.method}</p>
                    )}
                  </div>
                );
              })()}
              <p><strong>{t.amount}:</strong> {step.amount}</p>
              <p><strong>{t.order}:</strong> {step.detail}</p>
              <p><strong>{t.waitTime}:</strong> {step.wait}</p>
            </div>
            <button type="button" onClick={() => toggleDiaryItem(itemId)}>
              {done ? "✓" : "○"} {t.markDone}
            </button>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="routineProtocolBox">
      <p className="kicker">{t.routineProtocol}</p>
      <div className="protocolIntensityNote">
        <strong>{t.routineIntensity}:</strong> {routineIntensityText(lang, result?.routineLevel)}
      </div>

      <div className="protocolColumns">
        <section>
          <h4>{t.morningProtocol}</h4>
          {renderSteps(protocol.morning, "morning")}
        </section>

        <section>
          <h4>{t.eveningProtocol}</h4>
          {renderSteps(protocol.evening, "evening")}
        </section>
      </div>

      <div className="weeklyProtocolBox">
        <h4>{t.weeklyProtocol}</h4>
        <ul>
          {protocol.weekly.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>

      <div className="expectedResultsBox">
        <h4>{t.expectedResults}</h4>
        <ul>
          {protocol.expected.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>

      <div className="diaryNoteBox">
        <strong>{t.diary}</strong>
        <p>{t.localDiaryNote}</p>
        <p>{t.loginNote}</p>
      </div>
    </div>
  );
}


function metricLabelFromKey(t, key) {
  const map = {
    acne: t.metrics.acne,
    dryness: t.metrics.dryness,
    redness: t.metrics.redness,
    shine: t.metrics.shine,
    texture: t.metrics.texture,
    pores: t.metrics.pores,
    pigmentation: t.metrics.pigmentation,
  };
  return map[key] || key;
}

function routineIntensityText(lang, level) {
  const zh = lang === "zh";
  return {
    repair: zh ? "Level 1 — 修护优先，暂不叠加强活性" : "Level 1 — barrier-first; avoid stacking strong actives",
    maintenance: zh ? "Level 1 — 稳定维持，基础护理为主" : "Level 1 — maintenance; keep the routine simple",
    balanced: zh ? "Level 2 — 谨慎加入活性，观察耐受" : "Level 2 — cautious actives; monitor tolerance",
    active: zh ? "Level 3 — 屏障稳定时可加强功效" : "Level 3 — stronger active pathway if barrier is stable",
  }[level || "maintenance"];
}

function RegionEvidencePanel({ result, t, lang }) {
  const evidence = result?.regionEvidence || [];
  if (!evidence.length) return null;

  return (
    <div className="regionEvidenceBox">
      <p className="kicker">{t.regionEvidence}</p>
      <p>{t.regionEvidenceIntro}</p>
      <div className="regionEvidenceGrid">
        {evidence.map((item) => (
          <div className="regionEvidenceCard" key={`${item.id}-${item.dominant}`}>
            {item.zoomImage && <img src={item.zoomImage} alt={lang === "en" ? item.en : item.zh} />}
            <div>
              <h4>{lang === "en" ? item.en : item.zh}</h4>
              <span>{metricLabelFromKey(t, item.dominant)}</span>
              <strong>{item.score}/100</strong>
              {item.skinRatio !== undefined && <em>{lang === "en" ? "skin area" : "皮肤区域"} {item.skinRatio}%</em>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportPanel({ title, result, report, t, lang, selfConcerns = [], isDiaryItemDone, toggleDiaryItem, compact = false }) {
  if (!result || !report) return null;
  const recommendedProducts = report.productIds.map(getProductById);
  const affiliateItems = buildScoreBasedProductPlan(result, report, selfConcerns);

  return (
    <div className={compact ? "compactReport" : "fullReport"}>
      <div className="reportHeader">
        <p className="kicker">{title}</p>
        <h3>{t.skinQualityScore}: {result.skinQuality ?? result.confidence}/100</h3>
        <p className="snapshotNote">{t.skinSnapshotNote}</p>
        <div className="routineIntensityBadge">
          <span>{t.routineIntensity}</span>
          <strong>{routineIntensityText(lang, result.routineLevel)}</strong>
        </div>
        {result.visualQuality < 55 && <span className="retakeBadge">{t.retakeAdvice}</span>}
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

      <RegionEvidencePanel result={result} t={t} lang={lang} />

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

      {!compact && (
        <RoutineProtocolPanel
          result={result}
          report={report}
          lang={lang}
          t={t}
          selfConcerns={selfConcerns}
          isDiaryItemDone={isDiaryItemDone}
          toggleDiaryItem={toggleDiaryItem}
        />
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
                {(item.reasonEn || item.reasonZh) && (
                  <em><b>{t.productReason}:</b> {lang === "en" ? item.reasonEn : item.reasonZh}</em>
                )}
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
  const setZoom = () => {};
  const [selectedZone, setSelectedZone] = useState("customCentre");
  const [analysisMode, setAnalysisMode] = useState("overview");
  const [selectedCaptureStep, setSelectedCaptureStep] = useState("front");
  const [selfConcerns, setSelfConcerns] = useState([]);
  const [photoSet, setPhotoSet] = useState({});
  const [photoSetAnalysis, setPhotoSetAnalysis] = useState(null);
  const [scanActive, setScanActive] = useState(false);
  const [scanStepIndex, setScanStepIndex] = useState(0);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanQuality, setScanQuality] = useState(null);
  const [scanFinished, setScanFinished] = useState(false);
  const [scanPhase, setScanPhase] = useState("idle");
  const [scanCountdown, setScanCountdown] = useState(0);
  const [scanFlash, setScanFlash] = useState(false);
  const [faceBox, setFaceBox] = useState(null);
  const [faceDetectStatus, setFaceDetectStatus] = useState("idle");
  const [faceEngineStatus, setFaceEngineStatus] = useState("idle");
  const [meshPoints, setMeshPoints] = useState([]);
  const [routineDiary, setRoutineDiary] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("glowSkinRoutineDiary") || "{}");
    } catch {
      return {};
    }
  });
  const [cameraInfo, setCameraInfo] = useState(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const canvasRef = useRef(null);
  const faceLandmarkerRef = useRef(null);
  const t = copy[lang];
  const currentCaptureStep = captureSteps.find((step) => step.id === selectedCaptureStep) || captureSteps[0];
  const currentScanStep = scanSteps[scanStepIndex] || scanSteps[0];

  const toggleSelfConcern = (concernId) => {
    setSelfConcerns((current) =>
      current.includes(concernId)
        ? current.filter((item) => item !== concernId)
        : [...current, concernId]
    );
  };

  const setCaptureStep = (stepId) => {
    setSelectedCaptureStep(stepId);
    setAnalysisMode("overview");
    setZoom(1);

    if (photoSet[stepId]) {
      setPhoto(photoSet[stepId].image);
    } else {
      setPhoto("");
    }
  };

  const sleep = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

  const waitForVideoReady = () =>
    new Promise((resolve) => {
      const video = videoRef.current;
      if (!video) {
        resolve();
        return;
      }
      if (video.readyState >= 2 && video.videoWidth) {
        resolve();
        return;
      }
      video.onloadedmetadata = () => resolve();
      window.setTimeout(resolve, 1200);
    });

  const ensureFaceLandmarker = async () => {
    if (faceLandmarkerRef.current) {
      setFaceEngineStatus("mesh");
      return faceLandmarkerRef.current;
    }

    setFaceEngineStatus("loading");

    try {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.22/wasm"
      );

      const faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task",
          delegate: "GPU",
        },
        runningMode: "IMAGE",
        numFaces: 1,
        outputFaceBlendshapes: false,
        outputFacialTransformationMatrixes: false,
      });

      faceLandmarkerRef.current = faceLandmarker;
      setFaceEngineStatus("mesh");
      return faceLandmarker;
    } catch (error) {
      console.warn("MediaPipe FaceMesh could not be loaded. Falling back to browser/skin-pixel detection.", error);
      setFaceEngineStatus("fallback");
      return null;
    }
  };

  const updateLiveFaceDetection = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || !video.videoWidth) return null;

    const ctx = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const faceLandmarker = await ensureFaceLandmarker();
    const detection = await detectFaceBoxFromCanvas(canvas, faceLandmarker);
    const detectedFaceBox = detection?.faceBox || null;
    setFaceBox(detectedFaceBox);
    setMeshPoints(detection?.meshPoints || []);
    setFaceEngineStatus(detection?.source === "mediapipe" ? "mesh" : "fallback");
    setFaceDetectStatus(detectedFaceBox ? "found" : "not-found");
    return detectedFaceBox;
  };

  const evaluateFrameQuality = (canvas) => {
    const ctx = canvas.getContext("2d");
    const sampleSize = 72;
    const smallCanvas = document.createElement("canvas");
    smallCanvas.width = sampleSize;
    smallCanvas.height = sampleSize;
    const smallCtx = smallCanvas.getContext("2d");
    smallCtx.drawImage(canvas, 0, 0, sampleSize, sampleSize);
    const data = smallCtx.getImageData(0, 0, sampleSize, sampleSize).data;

    let brightness = 0;
    let contrast = 0;
    const values = [];

    for (let i = 0; i < data.length; i += 4) {
      const value = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      values.push(value);
      brightness += value;
    }

    brightness /= values.length;
    values.forEach((value) => {
      contrast += Math.abs(value - brightness);
    });
    contrast /= values.length;

    const lightingGood = brightness > 72 && brightness < 220;
    const resolutionGood = canvas.width >= 960 && canvas.height >= 720;

    return {
      lighting: lightingGood ? t.scanGood : t.scanImproveLight,
      resolution: `${canvas.width} × ${canvas.height}`,
      stability: contrast > 8 ? t.scanGood : t.scanHoldStill,
      score: Math.round((lightingGood ? 40 : 22) + (resolutionGood ? 35 : 20) + Math.min(25, contrast)),
    };
  };

  const captureFrameForStep = async (stepId) => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return null;

    const videoWidth = video.videoWidth || 1920;
    const videoHeight = video.videoHeight || 2560;
    const ctx = canvas.getContext("2d");

    canvas.width = videoWidth;
    canvas.height = videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const faceLandmarker = await ensureFaceLandmarker();
    const detection = await detectFaceBoxFromCanvas(canvas, faceLandmarker);
    const detectedFaceBox = detection?.faceBox || null;
    setFaceBox(detectedFaceBox);
    setMeshPoints(detection?.meshPoints || []);
    setFaceEngineStatus(detection?.source === "mediapipe" ? "mesh" : "fallback");
    setFaceDetectStatus(detectedFaceBox ? "found" : "not-found");

    const quality = evaluateFrameQuality(canvas);
    setScanQuality(quality);

    return {
      image: canvas.toDataURL("image/png"),
      mode: "scan",
      zone: stepId,
      faceBox: detectedFaceBox,
      faceEngine: detection?.source || "fallback",
      meshPoints: detection?.meshPoints || [],
      quality,
      capturedAt: new Date().toISOString(),
    };
  };

  const analysePhotoEntries = (entries) => {
    if (!entries.length) {
      setCameraError(t.noPhoto);
      return;
    }

    let completed = 0;
    const results = [];
    const allRegionItems = [];

    entries.forEach(([stepId, item]) => {
      const image = new Image();
      image.onload = () => {
        const canvas = canvasRef.current;
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0);

        const regionItems = analyseFrameRegions(canvas, stepId, item.faceBox || null);
        const frameResult = combineRegionResults(regionItems);
        regionItems.forEach((regionItem) => allRegionItems.push({ ...regionItem, stepId }));

        results.push({
          stepId,
          result: frameResult,
          regionItems,
        });

        completed += 1;

        if (completed === entries.length) {
          const combined = combineRegionResults(allRegionItems);
          // Make frame-level visible extremes count, but do not let one noisy frame dominate everything.
          ["acne", "dryness", "redness", "shine", "texture", "pores", "pigmentation"].forEach((key) => {
            const frameMax = Math.max(...results.map((item) => item.result[key] || 0));
            combined[key] = Math.round(clamp(combined[key] * 0.72 + frameMax * 0.28, 0, 100));
          });
          combined.priorityScores = [
            { key: "acne", score: combined.acne },
            { key: "dryness", score: combined.dryness },
            { key: "redness", score: combined.redness },
            { key: "shine", score: combined.shine },
            { key: "pores", score: combined.pores },
            { key: "texture", score: combined.texture },
            { key: "pigmentation", score: combined.pigmentation },
          ].sort((a, b) => b.score - a.score);
          combined.routineLevel = determineRoutineLevel(combined);
          combined.confidence = combined.visualQuality;

          setPhotoSetAnalysis({
            combined,
            results,
            count: results.length,
            regionEvidence: combined.regionEvidence,
          });
          setOverallAnalysis(combined);
          setCameraError("");
          setScanFinished(true);
        }
      };
      image.src = item.image;
    });
  };


  const runScanCountdown = async (milliseconds, phaseLabel) => {
    setScanPhase(phaseLabel);
    const seconds = Math.max(1, Math.ceil(milliseconds / 1000));

    for (let remaining = seconds; remaining > 0; remaining -= 1) {
      setScanCountdown(remaining);
      await sleep(1000);
    }

    setScanCountdown(0);
  };

  const startGuidedScan = async () => {
    setCameraError("");
    setScanFinished(false);
    setScanActive(true);
    setScanProgress(0);
    setScanQuality(null);
    setScanPhase("idle");
    setScanCountdown(0);
    setScanFlash(false);
    setFaceBox(null);
    setMeshPoints([]);
    setFaceDetectStatus("idle");
    setPhoto("");
    setPhotoSet({});
    setOverallAnalysis(null);
    setLocalAnalysis(null);
    setZoneComparisons(null);
    setPhotoSetAnalysis(null);

    await startCamera();
    await waitForVideoReady();

    if (!streamRef.current) {
      setScanActive(false);
      return;
    }

    const captured = {};

    for (let i = 0; i < scanSteps.length; i += 1) {
      const step = scanSteps[i];
      setScanStepIndex(i);
      setSelectedCaptureStep(step.id);
      setScanProgress(Math.round((i / scanSteps.length) * 100));

      await updateLiveFaceDetection();
      await runScanCountdown(step.prepare || 3200, "prepare");

      setScanPhase("capturing");
      await updateLiveFaceDetection();
      await sleep(step.capture || 1200);

      const frame = await captureFrameForStep(step.id);
      if (frame) {
        captured[step.id] = frame;
        setPhotoSet({ ...captured });
        setScanFlash(true);
        window.setTimeout(() => setScanFlash(false), 260);
      }

      setScanPhase("next");
      await sleep(800);
    }

    setScanProgress(100);
    setScanPhase("complete");
    setScanCountdown(0);
    setScanActive(false);
    const capturedEntries = Object.entries(captured);
    const lastCaptured = capturedEntries[capturedEntries.length - 1]?.[1];
    if (lastCaptured?.image) {
      setPhoto(lastCaptured.image);
    }
    stopCamera();
    analysePhotoEntries(capturedEntries);
  };

  const stopGuidedScan = () => {
    setScanActive(false);
    setScanPhase("idle");
    setScanCountdown(0);
    setScanFlash(false);
    setFaceBox(null);
    setMeshPoints([]);
    setFaceDetectStatus("idle");
    stopCamera();
  };

  const toggleDiaryItem = (itemId) => {
    const today = new Date().toISOString().slice(0, 10);
    setRoutineDiary((current) => {
      const todayItems = current[today] || {};
      const next = {
        ...current,
        [today]: {
          ...todayItems,
          [itemId]: !todayItems[itemId],
        },
      };
      localStorage.setItem("glowSkinRoutineDiary", JSON.stringify(next));
      return next;
    });
  };

  const isDiaryItemDone = (itemId) => {
    const today = new Date().toISOString().slice(0, 10);
    return Boolean(routineDiary[today]?.[itemId]);
  };

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
          width: { ideal: 1920 },
          height: { ideal: 2560 },
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

  const handleShootButton = async () => {
    if (!streamRef.current) {
      await startCamera();
      return;
    }
    takePhoto();
    stopCamera();
  };

  const handleRetakeButton = async () => {
    setPhoto("");
    setPhotoSet((current) => {
      const next = { ...current };
      delete next[selectedCaptureStep];
      return next;
    });
    setOverallAnalysis(null);
    setLocalAnalysis(null);
    setZoneComparisons(null);
    setPhotoSetAnalysis(null);
    await startCamera();
  };

  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const videoWidth = video.videoWidth || 1920;
    const videoHeight = video.videoHeight || 2560;
    const ctx = canvas.getContext("2d");

    canvas.width = videoWidth;
    canvas.height = videoHeight;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const capturedDataUrl = canvas.toDataURL("image/png");

    setPhoto(capturedDataUrl);
    setPhotoSet((current) => ({
      ...current,
      [selectedCaptureStep]: {
        image: capturedDataUrl,
        mode: "overview",
        zone: selectedCaptureStep,
        capturedAt: new Date().toISOString(),
      },
    }));
    setOverallAnalysis(null);
    setLocalAnalysis(null);
    setZoneComparisons(null);
    setPhotoSetAnalysis(null);
    setScanFinished(false);
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

  const analysePhotoSet = () => {
    analysePhotoEntries(Object.entries(photoSet));
  };

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

          <div className="visiaProtocol">
            <div className="visiaProtocolIntro">
              <p className="kicker">{t.visiaKicker}</p>
              <h3>{t.visiaTitle}</h3>
              <p>{t.visiaIntro}</p>
              <p className="visiaDisclaimer">{t.visiaDisclaimer}</p>
            </div>

            <div className="scanIntroBox">
              <p className="kicker">{t.scanKicker}</p>
              <h3>{t.scanTitle}</h3>
              <p>{t.scanIntro}</p>
              <p className="scanManualNote">{t.scanInsteadManual}</p>
              <p className="scanFaceNote">{t.autoFaceCropNote}</p>

              <div className="scanStepFlow">
                {scanSteps.map((step, index) => (
                  <div
                    className={`scanFlowStep ${scanStepIndex === index && scanActive ? "active" : ""} ${Object.keys(photoSet).includes(step.id) ? "done" : ""}`}
                    key={step.id}
                  >
                    <span>{index + 1}</span>
                    <strong>{lang === "en" ? step.en : step.zh}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="selfConcernBox">
              <p className="kicker">{t.userCalibration}</p>
              <p>{t.selectConcerns}</p>
              <div className="selfConcernGrid">
                {selfConcernOptions.map((option) => (
                  <button
                    type="button"
                    key={option.id}
                    className={selfConcerns.includes(option.id) ? "active" : ""}
                    onClick={() => toggleSelfConcern(option.id)}
                  >
                    {lang === "en" ? option.en : option.zh}
                  </button>
                ))}
              </div>
            </div>

            <div className="scanStatusBox">
              <div className="scanStatusHeader">
                <div>
                  <p className="kicker">{t.scanProgress}</p>
                  <h3>{scanFinished ? t.scanComplete : scanActive ? (lang === "en" ? currentScanStep.en : currentScanStep.zh) : t.scanReady}</h3>
                  <p>{scanActive ? (lang === "en" ? currentScanStep.enInstruction : currentScanStep.zhInstruction) : t.cameraUpgradeTip}</p>
                  {scanActive && <p className="scanSlowTip">{t.scanSlowTip}</p>}
                </div>
                <div className="scanRightStatus">
                  <div className="scanPercent">{scanProgress}%</div>
                  {scanActive && (
                    <div className={`scanCountdown ${scanPhase}`}>
                      <strong>
                        {scanPhase === "prepare"
                          ? t.scanPrepare
                          : scanPhase === "capturing"
                            ? t.scanCapturing
                            : t.scanNext}
                      </strong>
                      {scanCountdown > 0 && <span>{scanCountdown} {t.scanCountdown}</span>}
                    </div>
                  )}
                </div>
              </div>

              <div className="scanProgressTrack">
                <span style={{ width: `${scanProgress}%` }} />
              </div>

              {scanActive && <div className="scanMeshHint">{t.meshNote}</div>}

              <div className="scanQualityGrid">
                <div>
                  <strong>{t.scanLighting}</strong>
                  <span>{scanQuality?.lighting || "—"}</span>
                </div>
                <div>
                  <strong>{t.scanResolution}</strong>
                  <span>{scanQuality?.resolution || (cameraInfo?.width ? `${cameraInfo.width} × ${cameraInfo.height}` : "—")}</span>
                </div>
                <div>
                  <strong>{t.scanStability}</strong>
                  <span>{scanQuality?.stability || "—"}</span>
                </div>
                <div>
                  <strong>{t.faceDetectStatus}</strong>
                  <span>
                    {faceDetectStatus === "found"
                      ? t.faceDetected
                      : faceDetectStatus === "not-found"
                        ? t.faceNotDetected
                        : "—"}
                  </span>
                </div>
                <div>
                  <strong>{t.faceEngineStatus}</strong>
                  <span>
                    {faceEngineStatus === "loading"
                      ? t.faceEngineLoading
                      : faceEngineStatus === "mesh"
                        ? t.faceEngineMesh
                        : faceEngineStatus === "fallback"
                          ? t.faceEngineFallback
                          : "—"}
                  </span>
                </div>
              </div>

              {Object.keys(photoSet).length > 0 && (
                <div className="scanFrameTray">
                  <p className="kicker">{t.scanAutoCaptured}</p>
                  <div>
                    {scanSteps.map((step) => {
                      const item = photoSet[step.id];
                      if (!item) return null;
                      return (
                        <button type="button" key={`scan-${step.id}`} onClick={() => setPhoto(item.image)}>
                          <img src={item.image} alt={lang === "en" ? step.en : step.zh} />
                          <span>{lang === "en" ? step.en : step.zh}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
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

              <div className="cameraFrame">
                {scanActive ? (
                  <video ref={videoRef} autoPlay playsInline muted className="cameraVideo" />
                ) : photo ? (
                  <img
                    className="capturedPreview"
                    src={photo}
                    alt={lang === "en" ? "Captured skin visual analysis" : "已拍摄的皮肤视觉分析照片"}
                  />
                ) : (
                  <video ref={videoRef} autoPlay playsInline muted className="cameraVideo" />
                )}

                <div className="cameraOverlayGuide compact">
                  <div className="cameraOverlayEyebrow">
                    {lang === "en" ? "Photo guide" : "拍摄提示"}
                  </div>
                  <h3 className="cameraOverlayTitle">
                    {scanActive
                      ? (lang === "en" ? currentScanStep.en : currentScanStep.zh)
                      : (lang === "en" ? currentCaptureStep.en : currentCaptureStep.zh)}
                  </h3>
                  <p className="cameraOverlayDesc">
                    {scanActive
                      ? (lang === "en" ? currentScanStep.enInstruction : currentScanStep.zhInstruction)
                      : (lang === "en" ? currentCaptureStep.enInstruction : currentCaptureStep.zhInstruction)}
                  </p>
                  {scanActive && scanCountdown > 0 && (
                    <div className="cameraOverlayCountdown">
                      {scanPhase === "prepare" ? scanCountdown : "✓"}
                    </div>
                  )}
                </div>

                
                {scanActive && faceBox && (
                  <div
                    className="faceDetectBox"
                    aria-hidden="true"
                    style={{
                      left: `${faceBox.x * 100}%`,
                      top: `${faceBox.y * 100}%`,
                      width: `${faceBox.w * 100}%`,
                      height: `${faceBox.h * 100}%`,
                    }}
                  />
                )}

                {scanActive && meshPoints.length > 0 && (
                  <div className="mediaPipeMeshPoints" aria-hidden="true">
                    {meshPoints.map((point, index) => (
                      <span
                        key={`mesh-${index}`}
                        style={{
                          left: `${point.x * 100}%`,
                          top: `${point.y * 100}%`,
                        }}
                      />
                    ))}
                  </div>
                )}

                {scanFlash && <div className="scanCaptureFlash" aria-hidden="true" />}

                {scanActive && (
                  <div className="faceMeshOverlay" aria-hidden="true">
                    <svg viewBox="0 0 320 420" preserveAspectRatio="xMidYMid meet">
                      <ellipse className="meshOutline" cx="160" cy="208" rx="104" ry="140" />
                      <polyline points="74,144 118,104 160,88 202,104 246,144 250,236 216,320 160,358 104,320 70,236 74,144" />
                      <polyline points="118,104 122,176 160,210 198,176 202,104" />
                      <polyline points="70,236 122,176 160,210 198,176 250,236" />
                      <polyline points="104,320 138,262 160,210 182,262 216,320" />
                      <polyline points="118,104 104,320 216,320 202,104" />
                      <polyline points="74,144 160,88 246,144" />
                      <polyline points="70,236 160,358 250,236" />
                      <line x1="160" y1="88" x2="160" y2="358" />
                      <line x1="74" y1="144" x2="246" y2="144" />
                      <line x1="70" y1="236" x2="250" y2="236" />
                      <line x1="104" y1="320" x2="216" y2="320" />
                      <circle cx="122" cy="176" r="5" />
                      <circle cx="198" cy="176" r="5" />
                      <circle cx="160" cy="210" r="5" />
                      <circle cx="138" cy="262" r="4" />
                      <circle cx="182" cy="262" r="4" />
                      <circle cx="160" cy="306" r="4" />
                    </svg>
                  </div>
                )}

                <canvas ref={canvasRef} className="hiddenCanvas" />
              </div>

              <div className="cameraButtons simpleCameraButtons scanButtons">
                <button className="button dark primaryShootButton" type="button" onClick={startGuidedScan} disabled={scanActive}>
                  {t.startScan}
                </button>
                {scanActive && (
                  <button className="button light primaryShootButton" type="button" onClick={stopGuidedScan}>
                    {t.stopScan}
                  </button>
                )}
                {!scanActive && Object.keys(photoSet).length > 0 && (
                  <button className="button light primaryShootButton" type="button" onClick={analysePhotoSet}>
                    {t.analysePhotoSet}
                  </button>
                )}
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
                  <h3>{lang === "en" ? "Start a guided skin scan." : "开始引导式肤况扫描。"}</h3>
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
                      selfConcerns={selfConcerns}
                      isDiaryItemDone={isDiaryItemDone}
                      toggleDiaryItem={toggleDiaryItem}
                    />
                  )}

                  {localAnalysis && (
                    <ReportPanel
                      title={`${t.localReport}: ${t[localAnalysis.zone]}`}
                      result={localAnalysis.result}
                      report={localReport}
                      t={t}
                      lang={lang}
                      selfConcerns={selfConcerns}
                      isDiaryItemDone={isDiaryItemDone}
                      toggleDiaryItem={toggleDiaryItem}
                      compact
                    />
                  )}

                  {overallAnalysis && (
                    <div className="visiaReportBox">
                      <p className="kicker">{t.evidenceReport}</p>
                      {photoSetAnalysis && (
                        <div className="photoSetSummary">
                          <strong>{t.analysePhotoSet}</strong>
                          <span>{photoSetAnalysis.count} {lang === "en" ? "photos combined" : "张照片已综合分析"}</span>
                        </div>
                      )}

                      <div className="qualityGate">
                        <strong>{t.photoQualityGate}</strong>
                        <span>{t.confidence}: {overallAnalysis.confidence}/100</span>
                        <span>{t.metrics.blur}: {overallAnalysis.blur}/100</span>
                        <span>{t.retakeGuide}: {getRetakeAdvice(lang, overallAnalysis, selfConcerns)}</span>
                      </div>

                      <div className="visiaMetricTable">
                        {buildVisiaRows(lang, overallAnalysis, selfConcerns, t).map((row, index) => (
                          <div className="visiaMetricRow" key={`${row.label}-${index}`}>
                            <div>
                              <strong>{row.label}</strong>
                              <p>{row.help}</p>
                              {row.selfNoted && (
                                <em>{lang === "en" ? "Included because you selected this concern." : "已根据你的自述关注点纳入优先级。"}</em>
                              )}
                            </div>
                            <span className={`statusPill status-${row.status === t.visible ? "visible" : row.status === t.possible ? "possible" : row.status === t.notReliable ? "notReliable" : "low"}`}>
                              {row.status}
                            </span>
                            <small>{row.score}/100</small>
                          </div>
                        ))}
                      </div>

                      <div className="priorityBox">
                        <p className="kicker">{t.combinedPriority}</p>
                        {buildVisiaRows(lang, overallAnalysis, selfConcerns, t)
                          .filter((row) => row.status === t.visible || row.status === t.possible || row.selfNoted)
                          .slice(0, 4)
                          .map((row, index) => (
                            <div key={`priority-${row.label}`}>
                              <strong>Priority {index + 1}</strong>
                              <span>{row.label}</span>
                            </div>
                          ))}
                      </div>
                    </div>
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

        
        <section id="brand-video" className="section brandVideoSection">
          <div className="sectionIntro videoIntro">
            <p className="kicker">{t.videoKicker}</p>
            <h2>{t.videoTitle}</h2>
            <p>{t.videoText}</p>
          </div>

          <div className="promoVideoShell">
            <video
              className="promoVideo"
              src={promoVideo}
              controls
              playsInline
              preload="metadata"
            >
              {lang === "en"
                ? "Your browser does not support the video tag."
                : "你的浏览器不支持视频播放。"}
            </video>
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
