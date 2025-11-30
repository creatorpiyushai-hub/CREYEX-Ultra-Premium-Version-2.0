/* app.js — FINAL (merged, polished)
   Topic: Herbal Ayurvedic Skincare & Personal-Care Brand — A→Z launch playbook (India-focused)
   Works with HTML IDs: chatArea, messageInput, sendBtn, typing, hero
   Features: canned replies, context tracking, hero auto-hide, downloadable one-pager and CSV
*/

/* --------------------------- CANNED KNOWLEDGE BASE --------------------------- */
/* Triggers are checked with case-insensitive `includes`. Keep triggers short & natural. */
const CANNED = [
  // Greeting (user requested exact text)
  {
    triggers: ["hii", "hi", "hello", "hey", "hello founder", "hi creyex", "hi bro", "hello bro"],
    reply:
      "Hello founder, I’m <b>CREYEX — your AI Co-Founder</b>. Tell me what stage you’re at and can you please share your background then I will more clearly explain you everything."
  },

  // NEW: Best business idea in herbal sector (user-provided)
  {
    triggers: [
      "best business idea in herbal",
      "best idea in herbal",
      "herbal sector idea",
      "herbal business idea",
      "business idea on herbal",
      "best business idea on herbal",
      "herbal idea",
      "idea in herbal sector"
    ],
    reply:
      "<b>Best Business Idea in India (2025 — Herbal Sector)</b><br/>" +
      "The strongest and most profitable opportunity is a <b>Herbal Ayurvedic Skincare & Personal-Care Brand</b>. <br/><br/>" +
      "I will provide you the complete <b>A → Z launch playbook</b> — practical, tested, and India-focused — covering formulation, packaging, branding, legal, sourcing, marketing, and financial modeling."
  },

  // General / help
  {
    triggers: ["help", "commands", "menu"],
    reply:
      "<b>CREYEX — Herbal Brand A→Z</b><br/>Commands you can try:<br/>" +
      "<i>business opportunity</i>, <i>start with</i>, <i>formulations</i>, <i>sourcing</i>, <i>testing</i>, <i>labeling</i>, <i>packaging</i>, " +
      "<i>pricing</i>, <i>channels</i>, <i>90 days</i>, <i>12 month plan</i>, <i>financials</i>, <i>export finance</i>, <i>onepager</i>, <i>create pitch</i>."
  },

  // Market opportunity
  {
    triggers: ["business opportunity", "why herbal", "why ayurvedic", "opportunity in india"],
    reply:
      "<b>Why Herbal / Ayurvedic is a strong opportunity in India</b><br/>" +
      "Rapid consumer shift to natural/wellness products, price-aware but quality-seeking customers, strong cultural acceptance, and growing marketplace demand (D2C + marketplaces + salons). Focus on trust (testing & storytelling) and you win."
  },

  // Product selection
  {
    triggers: ["start with", "product line", "which product to start"],
    reply:
      "<b>Recommended MVP product line (3–4 SKUs)</b><br/>" +
      "1) Herbal Cold-Process Soap (100g)<br/>2) Ayurvedic Hair Oil (100ml)<br/>3) Face Serum / Night Oil (30ml)<br/>(Optional later: shampoo bar, face scrub, herbal tonics)."
  },

  // Legal & regulatory
  {
    triggers: ["legal requirements", "regulatory", "ayush", "fssai", "gst", "cosmetic rules"],
    reply:
      "<b>Regulatory checklist (India)</b><br/>" +
      "• Business registration (Proprietor/LLP/Pvt Ltd)<br/>• GST (if thresholds met)<br/>• AYUSH (if making ayurvedic medicines)<br/>• Cosmetic Rules compliance for skincare/haircare<br/>• FSSAI if edible<br/>• GMP manufacturing (own/contract)<br/>• Trademark registration. Always avoid medical cure claims."
  },

  // Manufacturing options
  {
    triggers: ["manufacturing options", "contract manufacturing", "in-house"],
    reply:
      "<b>Manufacturing options</b><br/>" +
      "<b>Contract Manufacturing</b> — recommended initially: low CAPEX, faster launch, GMP-ready.<br/>" +
      "<b>In-house</b> — higher CAPEX, more control, requires equipment, QC and approvals."
  },

  // Sourcing
  {
    triggers: ["sourcing", "raw materials", "where source", "suppliers"],
    reply:
      "<b>Where to source raw materials</b><br/>" +
      "Use verified B2B suppliers & herb specialists. Example sources: TradeIndia/IndiaMART for leads, specialized essential oil & extract suppliers, local herb aggregators. Always request COA, purity tests, heavy-metal & pesticide reports."
  },

  // Formulations
  {
    triggers: ["formulations", "recipes", "sample formulations", "soap formula", "hair oil formula", "serum formula"],
    reply:
      "<b>Starter formulations (templates to refine with manufacturer)</b><br/>" +
      "<b>Hair Oil:</b> Sesame/coconut base + amla, fenugreek, brahmi + essential oils.<br/>" +
      "<b>Face Serum:</b> Jojoba/sweet almond + rosehip + manjistha extract + Vit E.<br/>" +
      "<b>Cold-process Soap:</b> Coconut, olive, castor, shea + turmeric/neem/charcoal. (Manufacturer will give % breakdown & stability.)"
  },

  // Testing / QC
  {
    triggers: ["testing", "quality control", "qc", "stability", "heavy metal", "microbiology"],
    reply:
      "<b>Testing & Quality Control</b><br/>" +
      "Essential: stability testing, microbiology, preservative efficacy (water-based), heavy metals, pesticide residues, patch testing, COA for each raw material. Maintain BMRs (batch manufacturing records)."
  },

  // Labeling
  {
    triggers: ["labeling", "label requirements", "labelling", "label copy"],
    reply:
      "<b>Label requirements</b><br/>" +
      "Include: Brand & product name, ingredient list (descending), net quantity, batch no., Mfg & Exp dates, MRP, manufacturer details, directions & cautions, license no. Avoid medicinal claims."
  },

  // Packaging
  {
    triggers: ["packaging", "recommended packaging", "packaging recommendation"],
    reply:
      "<b>Packaging recommendations</b><br/>" +
      "Amber glass for oils/serums, kraft boxes for soaps, recyclable materials, tamper seals, clear ingredient & Ayurvedic storytelling. Packaging ~10–25% of product cost."
  },

  // Pricing
  {
    triggers: ["pricing", "price", "mrp ranges", "price ranges"],
    reply:
      "<b>Suggested pricing (MRP / sell)</b><br/>" +
      "Hair Oil (100ml): MRP ₹499 — sell ₹399<br/>Face Serum (30ml): MRP ₹799 — sell ₹599<br/>Soap (100g): MRP ₹199 — sell ₹149<br/>Target gross margin (D2C): 50–70%."
  },

  // Channels
  {
    triggers: ["sales channels", "channels", "where sell"],
    reply:
      "<b>Sales channels</b><br/>" +
      "D2C website (best margin), Marketplaces (Amazon, Flipkart, Nykaa) for scale, Salons/Spas & modern trade later, WhatsApp business, micro-influencer commerce."
  },

  // 90-day GTM
  {
    triggers: ["90 days", "first 90 days", "marketing 90 days"],
    reply:
      "<b>90-day GTM</b><br/>" +
      "Week 1–2: brand identity, packaging mockups, sample approvals.<br/>Week 3–4: product photography + website skeleton.<br/>Month 2: influencer seeding + marketplace onboarding.<br/>Month 3: paid gamma campaigns + collect reviews + scale."
  },

  // 12-month growth
  {
    triggers: ["12 month", "year plan", "12 months marketing"],
    reply:
      "<b>12-month growth plan</b><br/>" +
      "Creator-driven campaigns, YouTube Shorts + Instagram reels, SEO content on herbs, loyalty program, salon tie-ups, PR & packaging premiumization."
  },

  // Team
  {
    triggers: ["team", "staff", "team needed"],
    reply:
      "<b>Core team year 1</b><br/>Founder, Ops/fulfillment, Marketing (or agency), Customer support, QC/compliance consultant (PT). In-house mfg adds production & lab staff."
  },

  // Startup cost
  {
    triggers: ["startup costs", "initial cost", "capex", "costs"],
    reply:
      "<b>Startup cost estimates</b><br/>Contract Mfg model: ₹2–8 Lakh (branding, first batch, packaging, website, testing).<br/>Small in-house: ₹8–35 Lakh. Factory scale: ₹35 Lakh+."
  },

  // Risks
  {
    triggers: ["risks", "key risks", "avoid risks"],
    reply:
      "<b>Key risks & mitigations</b><br/>" +
      "Risks: regulatory issues, poor raw-material quality, false claims, stability failures.<br/>Mitigation: GMP vendors, lab testing, COAs, compliance review, conservative claims, excellent CX."
  },

  // Scaling / international
  {
    triggers: ["scale", "scaling", "international", "export"],
    reply:
      "<b>Scaling & exports</b><br/>" +
      "Add SKUs, list on Nykaa/Amazon Intl, get export certifications (if required), maintain heavy-metal/microbial checks, premium packaging & retail partnerships."
  },

  // 30-day checklist
  {
    triggers: ["30 days", "first 30 days", "30-day"],
    reply:
      "<b>First 30-day checklist</b><br/>Finalize brand & trademark search, register entity, choose 3 SKUs, shortlist 3 contract manufacturers, order samples, finalize formulations, design labels, test samples, build website, plan influencer seeding."
  },

  // Label template
  {
    triggers: ["label template", "label copy", "product label"],
    reply:
      "<b>Label template (front/back)</b><br/>Front: Brand, product, star ingredient highlights.<br/>Back: Full ingredients, directions, MRP, Batch no., Mfg/Exp, Manufacturer contact, Storage, 'For external use only'."
  },

  // Manufacturer email
  {
    triggers: ["manufacturer email", "sample email", "contract manufacturer email"],
    reply:
      "<b>Sample email (to manufacturer)</b><br/>Subject: Inquiry for Custom Herbal Product Manufacturing<br/>" +
      "Hello, we are launching Ayurvedic hair oil & serum. Please share MOQ, GMP/AYUSH certificates, pricing for 500/1000/3000 units, packaging options, lead time, COA policy and sample procedure. Thanks, [Name]"
  },

  // Financial model overview
  {
    triggers: ["financial model", "12 month model", "12-month model", "financials"],
    reply:
      "<b>12-month financial snapshot</b><br/>Total revenue (year): ₹52,64,030 — Gross profit ≈ ₹38,02,880 — Net profit ≈ ₹9,02,880 (before tax). Initial cash needed ≈ ₹6,40,000. Type 'export finance' to download CSV."
  },

  // Product list
  {
    triggers: ["products in plan", "what products included"],
    reply:
      "<b>Included products</b><br/>Herbal Hair Oil (100ml), Face Serum (30ml), Herbal Soap (100g)."
  },

  // MRPs & COGS
  {
    triggers: ["mrp list", "selling prices", "pricing list"],
    reply:
      "<b>MRP & sell prices</b><br/>Hair Oil: MRP ₹499 (sell ₹399) — COGS ₹95<br/>Serum: MRP ₹799 (sell ₹599) — COGS ₹170<br/>Soap: MRP ₹199 (sell ₹149) — COGS ₹50"
  },

  // Monthly sales assumptions
  {
    triggers: ["monthly sales", "sales volume", "assumptions"],
    reply:
      "<b>Monthly sales assumptions</b><br/>Month1: HairOil 100 / Serum 50 / Soap 200 — scales to Month12: HairOil 1200 / Serum 600 / Soap 1000. Type 'show month X' (e.g., 'show month 6') to view specific month."
  },

  // CAC / retention / opex / inventory / break-even / valuation / summary
  {
    triggers: ["cac", "customer acquisition cost"],
    reply:
      "<b>CAC assumptions</b><br/>Mo1-3: ₹280 / Mo4-6: ₹240 / Mo7-12: ₹190 — avg ~₹220."
  },

  {
    triggers: ["retention", "repeat rate"],
    reply:
      "<b>Retention & LTV</b><br/>Repeat buyers ramp 0% → ~25% by Month6. Average LTV ₹1,200–1,800."
  },

  {
    triggers: ["opex", "operating expenses"],
    reply:
      "<b>Monthly OPEX (sample)</b><br/>Fixed OPEX ~₹1,00,000 (rent, salaries, agency) + shipping ~₹25,000."
  },

  {
    triggers: ["initial inventory", "inventory cost"],
    reply:
      "<b>Initial inventory</b><br/>Estimated first batch cost ~₹3,00,000 (1,000 Hair Oils, 600 Serums, 2,000 Soaps)."
  },

  {
    triggers: ["revenue", "monthly revenue", "q31"],
    reply:
      "<b>Revenue snapshot</b><br/>Month1 ₹99,650 → Month12 ₹9,87,200 — Year total ≈ ₹52.64 Lakh."
  },

  {
    triggers: ["yearly cogs", "q32"],
    reply:
      "<b>Yearly COGS</b><br/>Total yearly COGS ≈ ₹14,61,150."
  },

  {
    triggers: ["gross profit", "q33"],
    reply:
      "<b>Yearly gross profit</b><br/>≈ ₹38,02,880 (~72% gross margin)."
  },

  {
    triggers: ["net profit", "q36"],
    reply:
      "<b>Net profit (12 months, before tax)</b><br/>≈ ₹9,02,880 (~17.1% margin)."
  },

  {
    triggers: ["cash required", "startup capital", "q37"],
    reply:
      "<b>Cash requirement</b><br/>≈ ₹6,40,000 to start (inventory, packaging, website, initial marketing, working capital)."
  },

  {
    triggers: ["break even", "breakeven"],
    reply:
      "<b>Break-even</b><br/>~451 units / month. Projection shows break-even around Month 3–4."
  },

  {
    triggers: ["inventory requirement", "12 month inventory"],
    reply:
      "<b>12-month inventory need</b><br/>Hair Oil ≈ 7,850; Serum ≈ 4,000; Soap ≈ 6,800 (include 10–15% safety stock)."
  },

  {
    triggers: ["valuation", "q41"],
    reply:
      "<b>Valuation guidance</b><br/>Typical D2C ranges 2–5× annual revenue. With ₹52.6L revenue → ~₹1.2–2.5 Cr, subject to growth & metrics."
  },

  {
    triggers: ["summary", "model summary", "q42"],
    reply:
      "<b>Financial summary</b><br/>Revenue ₹52.6 L — Gross Profit ≈ ₹38 L — Net Profit ≈ ₹9 L — Initial capital ≈ ₹6.4 L — Break-even: M3–M4."
  },

  // Actionable commands for downloads & generation
  {
    triggers: ["onepager", "one page", "one-page", "one page summary"],
    reply:
      "Generate Onepager: Type 'onepager create' to create and download a one-page executive summary (you will be prompted to confirm brand name & 1-line). For demo: type 'onepager create demo'."
  },

  {
    triggers: ["export finance", "export finances", "download finance", "export finance csv"],
    reply:
      "Generate finance CSV: Type 'export finance' to download a simple CSV summarizing monthly revenue assumptions and totals (client-side CSV download)."
  },

  {
    triggers: ["create pitch", "investor pitch", "one pager", "create investor pitch"],
    reply:
      "Create investor pitch: Type 'create pitch' to generate a 1-page pitch text for download (editable)."
  },

  // Fallback catch-all
  {
    triggers: ["default"],
    reply:
      "I didn't catch that. Try: 'menu', 'start with', 'formulations', 'sourcing', 'testing', 'pricing', 'export finance', 'onepager create' or ask a specific question like 'Where to source herbs?'."
  }
];

/* --------------------------- CONTEXT & STATE --------------------------- */
const ctx = {
  selectedIdea: null,
  lastUserMessage: null
};

/* --------------------------- DOM REFERENCES --------------------------- */
const chatArea = document.getElementById('chatArea');
const inputEl = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const typingEl = document.getElementById('typing');
const heroEl = document.getElementById('hero'); // per your HTML id
let heroHidden = false;

/* --------------------------- UTIL HELPERS --------------------------- */
function now() {
  const d = new Date();
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function scrollToBottom() {
  if (chatArea) chatArea.scrollTop = chatArea.scrollHeight;
}

function safeHTML(text) {
  return String(text);
}

/* --------------------------- CANNED FINDER --------------------------- */
function findCanned(text) {
  if (!text) return null;
  const t = text.toLowerCase().trim();

  // Exact numeric selection (if user types "1" or "2" or "3")
  if (/^\d+$/.test(t)) {
    const n = parseInt(t, 10);
    if (n === 1) {
      ctx.selectedIdea = "Herbal Cold-Process Soap";
      return "<b>Selected: Herbal Cold-Process Soap</b><br/>Type 'formulations' or 'label template' or 'pricing' to get details for this SKU.";
    }
    if (n === 2) {
      ctx.selectedIdea = "Ayurvedic Hair Oil";
      return "<b>Selected: Ayurvedic Hair Oil</b><br/>Type 'formulations' or 'label template' or 'pricing' to get details for this SKU.";
    }
    if (n === 3) {
      ctx.selectedIdea = "Face Serum";
      return "<b>Selected: Face Serum</b><br/>Type 'formulations' or 'label template' or 'pricing' to get details for this SKU.";
    }
  }

  // iterate canned triggers
  for (const item of CANNED) {
    for (const key of item.triggers) {
      if (!key) continue;
      const k = key.toLowerCase();
      if (t.includes(k)) return item.reply;
    }
  }

  return null;
}

/* --------------------------- TYPING & HERO --------------------------- */
function showTyping(ms = 700, cb = null) {
  if (!typingEl) {
    if (cb) cb();
    return;
  }
  typingEl.style.display = 'flex';
  setTimeout(() => {
    typingEl.style.display = 'none';
    if (cb) cb();
  }, ms);
}

function hideHeroSmooth() {
  if (!heroEl || heroHidden) return;
  heroHidden = true;
  heroEl.style.transition = 'opacity 220ms ease, height 220ms ease, margin 220ms ease, padding 220ms ease';
  heroEl.style.opacity = '0';
  heroEl.style.height = '0px';
  heroEl.style.margin = '0px';
  heroEl.style.padding = '0px';
  setTimeout(() => {
    if (heroEl && heroEl.parentNode) heroEl.parentNode.removeChild(heroEl);
  }, 260);
}

/* --------------------------- APPENDERS --------------------------- */
function appendUser(text) {
  const wrap = document.createElement('div');
  wrap.className = 'message user';
  const content = document.createElement('div');
  content.className = 'content';
  content.textContent = text + '  (' + now() + ')';
  wrap.appendChild(content);
  if (chatArea) chatArea.appendChild(wrap);
  scrollToBottom();
}

function appendAssistant(html) {
  const wrap = document.createElement('div');
  wrap.className = 'message assistant';
  const avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = 'CR';
  const content = document.createElement('div');
  content.className = 'content';
  content.innerHTML = safeHTML(html) + ' <small style="opacity:.6">(' + now() + ')</small>';
  wrap.appendChild(avatar);
  wrap.appendChild(content);
  if (chatArea) chatArea.appendChild(wrap);
  scrollToBottom();
}

/* --------------------------- DOWNLOAD HELPERS --------------------------- */
function downloadText(filename, text) {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function downloadCSV(filename, rows) {
  const csv = rows.map(r => r.map(cell => {
    if (typeof cell === 'string' && (cell.includes(',') || cell.includes('"') || cell.includes('\n'))) {
      return '"' + cell.replace(/"/g, '""') + '"';
    }
    return cell;
  }).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/* --------------------------- SPECIAL ACTIONS --------------------------- */
function handleSpecialCommands(userTextLower) {
  if (userTextLower.startsWith('onepager create')) {
    const brand = "CREYEX Herbal";
    const idea = ctx.selectedIdea || "Herbal Cold-Process Soap, Ayurvedic Hair Oil, Face Serum";
    const onepager = [
      brand,
      "",
      "One-line: " + brand + " — natural Ayurvedic personal-care products crafted for modern consumers.",
      "",
      "MVP SKUs: " + idea,
      "",
      "Market: Growing natural & wellness segment in India with D2C + marketplace demand.",
      "",
      "Go-to-market: Influencer seeding, marketplace listings (Nykaa, Amazon), D2C website, Instagram reels.",
      "",
      "Ask: ₹X to scale production, marketing and expand SKUs.",
      "",
      "Contact: [Founder Name] — [email / phone]"
    ].join('\n');

    appendAssistant("<b>One-page executive summary generated</b>. Download will start now.");
    downloadText("onepager_" + brand.replace(/\s+/g,'_') + ".txt", onepager);
    return true;
  }

  if (userTextLower.startsWith('create pitch')) {
    const title = "1-Page Pitch — CREYEX Herbal";
    const pitch = [
      "CREYEX — AI Co-Founder (Herbal Personal Care)",
      "",
      "Problem: Consumers want safe, natural, and effective herbal personal-care products with transparent testing.",
      "",
      "Solution: CREYEX-branded herbal hair oil, serum and cold-process soap — high-quality formulations, GMP manufactured, D2C + marketplaces.",
      "",
      "Traction: Demo-ready plan, validated pricing and 12-month financials (projection).",
      "",
      "Ask: ₹X for production scale & marketing",
      "",
      "Contact: [Founder Name] — [email]"
    ].join('\n');

    appendAssistant("<b>Investor pitch text generated</b>. Download will start now.");
    downloadText("pitch_CREYEX_Herbal.txt", pitch);
    return true;
  }

  if (userTextLower === 'export finance' || userTextLower === 'export finance csv' || userTextLower === 'download finance') {
    const rows = [
      ["Month","HairOil","Serum","Soap","TotalRevenue"],
      ["1",100,50,200,99650],
      ["2",150,70,250,139030],
      ["3",200,100,300,184400],
      ["4",300,150,350,261700],
      ["5",400,200,400,338900],
      ["6",500,250,500,423750],
      ["7",600,300,600,508500],
      ["8",700,350,650,585800],
      ["9",800,400,700,663100],
      ["10",900,450,800,747850],
      ["11",1000,500,850,825150],
      ["12",1200,600,1000,987200],
      ["TotalYear", "","", "",5264030]
    ];
    appendAssistant("<b>Finance CSV generated</b>. Download will start now.");
    downloadCSV("financials_CREYEX_12mo.csv", rows);
    return true;
  }

  return false;
}

/* --------------------------- MAIN HANDLER --------------------------- */
function handleSend() {
  const text = (inputEl.value || '').trim();
  if (!text) return;

  ctx.lastUserMessage = text;
  appendUser(text);

  if (!heroHidden) {
    hideHeroSmooth();
  }

  const userLower = text.toLowerCase().trim();
  if (handleSpecialCommands(userLower)) {
    inputEl.value = '';
    inputEl.focus();
    return;
  }

  const canned = findCanned(text);

  showTyping(650, () => {
    if (canned) {
      appendAssistant(canned);
    } else {
      appendAssistant("I didn't catch that. Try: 'menu', 'start with', 'formulations', 'sourcing', 'testing', 'pricing', 'export finance', 'onepager create' or ask a specific question like 'Where to source herbs?'");
    }
  });

  inputEl.value = '';
  inputEl.focus();
}

/* --------------------------- EVENTS --------------------------- */
if (sendBtn) sendBtn.addEventListener('click', handleSend);
if (inputEl) inputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    handleSend();
  }
});
window.addEventListener('DOMContentLoaded', () => {
  if (inputEl) inputEl.focus();
});
