/* FINAL app.js — Conversation flow including the 12-month financial model trigger
   IDs required in HTML: chatArea, messageInput, sendBtn, typing, hero
   Features: deterministic canned replies, profile matcher (age+city+budget),
             hero auto-hide on first message, typing animation, safe HTML replies.
   Replace your existing app.js with this file.
*/

/* ---------------------- CANNED / MESSAGES ---------------------- */
/* We use template literals for multi-line HTML replies. */
const CANNED_SIMPLE = [
  // Greeting for "Hi"
  {
    triggers: ["hi", "hii", "hello", "hey"],
    reply: `Hello founder, I’m <b>CREYEX — your AI Co-Founder</b>. How may I help you?`
  },

  // Profile confirmation / idea selection (profile matcher handles specific profile)
  {
    triggers: ["herbal business idea", "start an herbal business", "i want to start an herbal business"],
    reply: `<b>Herbal Ayurvedic Skincare & Personal-Care Product</b> is Best Business Idea in India 2025 in the Herbal Sector.`
  },

  // "Ok give complete detail" -> long playbook
  {
    triggers: ["ok give complete detail", "ok give complete detail on it", "give complete detail", "complete detail on it", "give complete detail on herbal"],
    reply: `<!--LONG_PLAYBOOK-->
<b>Herbal Ayurvedic Skincare & Personal-Care Brand — A → Z launch playbook (complete, practical, India-focused)</b><br/><br/>
Amazing choice — herbal/ayurvedic skincare is one of the fastest-growing segments in India and globally. Below I’ve put together an end-to-end, line-by-line plan you can use to start, run, and scale a profitable herbal personal-care brand (soaps, shampoos/oils, face serums/masks, body lotions, plus optional ingestible tonics). I include regulatory musts, suppliers, costing buckets, product formulas (non-proprietary templates), packaging & label checklists, marketing playbook, financials, risk points and scaling/export steps. I cite authoritative sources for the most important facts. If anything below should be adapted to a different country or a different product mix, tell me and I’ll tailor it.<br/><br/>

<b>1) Why this idea — market opportunity (short)</b><br/>
India herbal/ayurvedic medicine & personal care is growing fast: estimates show the India herbal medicine market was ~USD 5.9B in 2024 and has high projected growth (strong CAGR forecast). Global herbal medicinal/beauty markets are also expanding. <br/>
Sources: Grand View Research.<br/><br/>

<b>2) Decide your exact product line (pick a focused MVP)</b><br/>
Start with 3 SKUs — keeps costs low, simplifies operations, speeds time-to-market. Example MVP (best balance of margin, demand, and regulatory ease):<br/>
• Herbal cold-processed soap — 3 variants (turmeric + neem; sandal + saffron; charcoal + tea tree)<br/>
• Ayurvedic hair oil (100 ml)<br/>
• Face serum / night oil (rosehip + brahmi + manjistha)<br/>
(Option later) Add shampoo bar, herbal scrub, Ayurvedic oral care, or ingestible tonic — ingestibles require extra regulatory steps (AYUSH/FSSAI).<br/><br/>

<b>3) Legal & regulatory (must-do, India)</b><br/>
A. Company & tax: Register an entity (Proprietorship/LLP/Private Ltd). Many D2C founders start proprietary and move to Pvt Ltd for investment. GST registration is mandatory when thresholds or interstate operations apply.<br/><br/>
B. Manufacturing & product licenses:<br/>
• AYUSH license — required if producing Ayurvedic/herbal medicines; approvals include facility checks & GMP norms. Many herbal companies follow AYUSH for classical/proprietary Ayurvedic medicines.<br/>
• FSSAI — required if any product is edible (tonics, ingestibles). Topical cosmetics do not need FSSAI; they follow Cosmetic Rules.<br/>
• Cosmetic Rules & Drugs & Cosmetics Act — topical products must avoid medicinal claims; use allowed cosmetic-type claims like “cleanses” or “moisturizes”.<br/>
• GMP & facility — Good Manufacturing Practices for AYUSH/cosmetics are required for manufacturing. Contract manufacturers often have GMP already.<br/><br/>
C. Trademark & IP: File trademark for brand name & logo early in India (IP India). Protect formulations via trade secret practices where applicable.<br/><br/>
D. Permits: Local trade license, factory license if large scale, pollution/effluent permissions if applicable; AYUSH inspections require specific infrastructure.<br/><br/>

<b>4) Build vs. outsource manufacturing</b><br/>
• Contract Manufacturer (recommended for MVP): low CAPEX, fast launch, GMP/AYUSH ready, many CMOs offer white-label or custom formulations — search TradeIndia / IndiaMART.<br/>
• In-house manufacturing: more control, higher margin but requires CAPEX (equipment, staff, QC lab) and regulatory compliance.<br/><br/>

<b>5) Sourcing raw materials & suppliers</b><br/>
Raw herbs, essential oils, carrier oils, extracts (turmeric, manjistha, brahmi), packaging (bottles, jars, labels). Use verified suppliers (Raw Herbs India, R.R. Sales, TradeIndia entries). Always request COA, heavy metal & pesticide tests, and botanical identification.<br/>
Quality checklist: botanical name, origin, COA, pesticide residues, heavy metal test, microbiological test, organic certification (if claimed), storage & shelf-life.<br/><br/>

<b>6) Formulation basics & non-proprietary example recipes (templates)</b><br/>
A. Herbal hair oil (100 ml): Sesame oil 80 ml, Coconut oil 10 ml, Herbal decoction (amla/fenugreek/brahmi) 8 ml, Essential oils 2 ml. Infuse herbs at low heat 4–6 hours, filter, add essential oils.<br/>
B. Face serum (30 ml): Carrier (jojoba/safflower) 20 ml, Active botanicals 5 ml (rosehip, manjistha), Vitamin E 0.5 ml. (No preservative if 100% oil).<br/>
C. Cold-process soap: Coconut 30%, Olive 40%, Castor 5%, Shea 5% + additives (turmeric/neem/charcoal). Lye calculations by manufacturer; cure 4–6 weeks.<br/><br/>

<b>7) Testing & quality control</b><br/>
Stability testing (3-month accelerated, 6–12 month real-time), microbiology & preservative efficacy for water-based products, heavy metals & pesticide residues for botanicals, dermatological patch testing recommended. Keep batch records & COAs for raw materials and finished goods.<br/><br/>

<b>8) Labeling & claims</b><br/>
Label must include: Brand & product name, net quantity, ingredient list (INCI/botanical names), batch no., Mfg & Exp dates, MRP, manufacturer details, directions, storage, cautionary statements. Avoid medicinal claims; use traditional phrasing carefully.<br/><br/>

<b>9) Packaging & design</b><br/>
Prefer amber glass for oils/serums, kraft boxes for soaps, tamper seals, sustainable materials. Packaging cost typically 10–25% of product cost for premium feel. Use earthy, clean Ayurvedic design language and ingredient storytelling.<br/><br/>

<b>10) Pricing & margins</b><br/>
Suggested pricing ranges (flexible): Hair Oil 100 ml ₹399–799; Face Serum 30 ml ₹599–1499; Soap 100 g ₹149–399. Target gross margin (D2C) 50–70%. Wholesale/marketplace margins will be lower.<br/><br/>

<b>11) Sales channels & GTM</b><br/>
D2C website (best margin), Marketplaces (Nykaa, Amazon — fees), salons & spas, subscription models, WhatsApp commerce, micro-influencer sales. Nykaa is a key marketplace for beauty distribution.<br/><br/>

<b>12) Marketing & growth</b><br/>
First 90 days: finalize brand story, product photography, website, micro-influencer seeding (10–20 micro influencers), marketplace listings, small ad campaigns, email capture with discount.<br/>
12-month: creator campaigns, YouTube Shorts/IG reels, SEO content, loyalty programs, salon partnerships, PR & packaging upgrades.<br/><br/>

<b>13) Team & operations</b><br/>
Minimum team: Founder, Ops/fulfillment (or 3PL), Marketing manager/agency, Customer support, QC/compliance consultant (PT). In-house production requires production supervisor & lab techs.<br/><br/>

<b>14) Financials & funding (high level)</b><br/>
Low-capex (contract manufacturing, D2C): ₹2–8 Lakh. Medium (small in-house): ₹8–35 Lakh. High (factory): ₹35 Lakh+. Track CAC, AOV, repurchase rate; aim payback within 12–18 months for D2C.<br/><br/>

<b>15) Risks & mitigations</b><br/>
Regulatory non-compliance — hire compliance consultant; Raw material variability — multiple suppliers & tests; False claims — avoid therapeutic claims; Quality failures — full testing & COA retention.<br/><br/>

<b>16) Scale & export</b><br/>
For export: ensure heavy-metal & microbial tests, COAs, GMP certificates and meet destination country rules (labeling, documentation). Target Middle East / SE Asia as early export markets.<br/><br/>

<b>17) Helpful links & sources</b><br/>
Grand View Research (market), TradeIndia/IndiaMART (suppliers), FSSAI (food licensing), AYUSH guidance (regulatory).<br/><br/>

<b>18) First 30-day action checklist</b><br/>
Trademark search → entity registration → select 3 SKUs → shortlist 3 CMOs (GMP/AYUSH) → order samples & COAs → finalize formulations & stability plan → design packaging & labels → build landing page/marketplace accounts → plan influencer seeding → test a sample batch before launch.<br/><br/>

<b>19) Templates & samples</b><br/>
Provided in plan: sample label text, sample manufacturer inquiry email, directions for use, storage & cautions.<br/><br/>

<b>20) Next steps you can ask me to produce now</b><br/>
a) Full 12-month financial model (P&L, cashflow, break-even).<br/>
b) Ingredient & supplier shortlist for 3 MVP SKUs.<br/>
c) Launch marketing assets: product page copy + 12 IG posts + 5 short video scripts.<br/>
d) Regulatory application pack with sample AYUSH/FSSAI drafts and label compliance review.<br/>
e) 1-page investor/loan pitch deck.<br/><br/>

Type the letter (a–e) for me to create the item immediately.`
  },

  // New: direct financial model trigger (user requested block)
  {
    triggers: [
      "provide full 12 months financial model",
      "full 12 months financial model",
      "12 months financial model",
      "12 month financial model",
      "provide full 12 months financial model in detail",
      "full 12 month financial model"
    ],
    reply: `
<b>Here you go — a complete 12-month financial model for a new Herbal Skincare & Personal-Care Brand (India-focused) using contract manufacturing.</b><br/>
This is structured exactly like an investor-ready model: assumptions → COGS → CAC/LTV → P&L → cash flow → breakeven → inventory → marketing → monthly projections.<br/><br/>

✅ <b>HERBAL BRAND — 12-MONTH FINANCIAL MODEL (FULL, DETAILED)</b><br/><br/>

<b>Brand Type:</b> Herbal skincare/personal-care<br/>
<b>SKUs:</b><br/>• Herbal Hair Oil (100 ml)<br/>• Face Serum (30 ml)<br/>• Herbal Soap (100 g)<br/>
<b>Sales Channels:</b> D2C Website + Amazon/Nykaa + Retail (small %)<br/>
<b>Model Type:</b> Contract manufacturing (low CAPEX → High cash efficiency)<br/><br/>

<b>1) CORE ASSUMPTIONS (REALISTIC FOR INDIA 2025)</b><br/>
A. <b>Product Pricing (MRP)</b><br/>
Product — MRP — Expected Selling Price After Offers<br/>
Hair Oil 100 ml — ₹499 — ₹399<br/>
Face Serum 30 ml — ₹799 — ₹599<br/>
Soap 100g — ₹199 — ₹149<br/><br/>

B. <b>Cost of Goods (COGS) — Per Unit</b><br/>
Includes raw materials + packaging + manufacturing + testing.<br/>
Product — Total COGS<br/>
Hair Oil — ₹95<br/>
Face Serum — ₹170<br/>
Soap — ₹50<br/><br/>

C. <b>Gross Margin Per Unit</b><br/>
Product — Selling Price — COGS — Gross Profit/Unit<br/>
Hair Oil — 399 — 95 — ₹304<br/>
Face Serum — 599 — 170 — ₹429<br/>
Soap — 149 — 50 — ₹99<br/><br/>

D. <b>Monthly Volume Assumptions (Realistic Ramp-up)</b><br/>
Month — Hair Oil — Serum — Soap<br/>
1 — 100 — 50 — 200<br/>
2 — 150 — 70 — 250<br/>
3 — 200 — 100 — 300<br/>
4 — 300 — 150 — 350<br/>
5 — 400 — 200 — 400<br/>
6 — 500 — 250 — 500<br/>
7 — 600 — 300 — 600<br/>
8 — 700 — 350 — 650<br/>
9 — 800 — 400 — 700<br/>
10 — 900 — 450 — 800<br/>
11 — 1000 — 500 — 850<br/>
12 — 1200 — 600 — 1000<br/><br/>

E. <b>Customer Acquisition Cost (CAC)</b><br/>
Month 1–3: ₹280 — Month 4–6: ₹240 — Month 7–12: ₹190 — Average annual CAC: ₹220 per new customer.<br/><br/>

F. <b>Returning Customer Rate</b><br/>
Month 1: 0% — Month 3: 10% — Month 6 onward: 25% repeat customers — LTV per customer in 12 months: ₹1,200–1,800.<br/><br/>

G. <b>Operating Expenses (Monthly)</b><br/>
Office + Storage Rent: ₹20,000 — Team Salary (2): ₹45,000 — Marketing Agency: ₹20,000 — Software: ₹5,000 — CA/Compliance/Misc: ₹10,000 — Shipping/Logistics (avg): ₹45 per order.<br/><br/>

H. <b>Initial Inventory Investment</b><br/>
Buy in bulk: Hair Oil — 1,000 units; Serum — 600 units; Soap — 2,000 units.<br/>
Total Inventory Cost = (1,000×95) + (600×170) + (2,000×50) = ₹95,000 + ₹1,02,000 + ₹1,00,000 = ₹2,97,000 (~₹3,00,000).<br/><br/>

<b>2) 12-MONTH REVENUE MODEL</b><br/>
Revenue = Units × Selling Price — sample monthly totals:<br/>
Month 1 Total Revenue: ₹99,650<br/>
Month 2: ₹139,030<br/>
Month 3: ₹184,400<br/>
Month 4: ₹261,700<br/>
Month 5: ₹338,900<br/>
Month 6: ₹423,750<br/>
Month 7: ₹508,500<br/>
Month 8: ₹585,800<br/>
Month 9: ₹663,100<br/>
Month 10: ₹747,850<br/>
Month 11: ₹825,150<br/>
Month 12: ₹987,200<br/>
<b>TOTAL YEARLY REVENUE:</b> ₹52,64,030 (~₹52.6 lakh).<br/><br/>

<b>3) 12-MONTH COGS MODEL</b><br/>
Sample monthly COGS (sum of unit COGS × units sold). Example month 1 total COGS: ₹28,000 — month 12 total COGS: ₹2,66,000.<br/>
<b>TOTAL YEARLY COGS:</b> ₹14,61,150 (~₹14.6 lakh).<br/><br/>

<b>4) GROSS PROFIT MODEL</b><br/>
Gross Profit = Revenue – COGS → Yearly Gross Profit = ₹52,64,030 – ₹14,61,150 = ₹38,02,880 (~₹38 lakh).<br/>
Gross Margin ≈ 72.2% (strong for D2C).<br/><br/>

<b>5) OPERATING EXPENSES (OPEX)</b><br/>
Monthly fixed OPEX ≈ ₹1,00,000. Shipping/logistics avg monthly ≈ ₹25,000. Total OPEX/month ≈ ₹1,25,000. Yearly OPEX ≈ ₹15,00,000.<br/><br/>

<b>6) MARKETING SPEND + CAC MODEL</b><br/>
Estimate new customers = total units / 1.5 (avg units per order). Example Month1 marketing cost ≈ ₹65,240. Yearly marketing spend estimate ≈ ₹9.5L–₹12L. Use ₹11,00,000 as baseline.<br/><br/>

<b>7) NET PROFIT MODEL (P&L)</b><br/>
Revenue: ₹52,64,030 — COGS: –₹14,61,150 => Gross: ₹38,02,880<br/>
Less OPEX: –₹15,00,000 — Marketing: –₹11,00,000 — Logistics: –₹3,00,000 => Net Profit Before Tax = ₹9,02,880<br/>
Net Profit Margin ≈ 17.1%.<br/><br/>

<b>8) CASH FLOW MODEL</b><br/>
Initial capital needed: Inventory ₹3,00,000 + Packaging ₹80,000 + Website/branding ₹60,000 + First 2 months marketing ₹2,00,000 + Working capital buffer ₹1,00,000 = ₹6,40,000.<br/>
Cash flow: Month1–2 negative → Month3 near breakeven → Month4 positive → Year-end surplus ≈ ₹7–9 lakh.<br/><br/>

<b>9) BREAK-EVEN ANALYSIS</b><br/>
Avg gross profit/unit ≈ ₹277 → Break-even units/month = Fixed Costs (₹125,000) / 277 ≈ 451 units/month. Projection reaches this in Month 3–4.<br/><br/>

<b>10) INVENTORY PLANNING (12-MONTH)</b><br/>
Year need approx: Hair Oil 7,850; Serum 4,000; Soap 6,800. Recommend 10–15% safety stock. Working capital refresh ≈ ₹2.5–3 lakh every 2–3 months.<br/><br/>

<b>11) VALUATION FOR INVESTORS</b><br/>
D2C valuations ~2×–5× revenue. With projected revenue ₹52.6L → valuation ≈ ₹1.2–2.5 Cr (subject to growth & metrics).<br/><br/>

<b>12) SUMMARY (quick)</b><br/>
• Revenue: ₹52.6 lakh<br/>
• Gross Profit: ₹38 lakh<br/>
• Net Profit: ₹9 lakh<br/>
• Net Margin: 17%<br/>
• Break-even: Month 3–4<br/>
• Year-end Cash: ₹7–9 lakh surplus<br/>
• Required Capital: ₹6.4 lakh<br/><br/>

If you require any further assistance, just let me know — I’m here as your trusted partner.`
  },

  // Fallback catch-all
  {
    triggers: ["default"],
    reply:
      "I didn't catch that. Try typing exactly: <i>Hi</i>, then your profile like <i>I am 19 years old, in Ranchi, with ₹10,000 budget, and I want to start an herbal business</i>, then <i>Ok give complete detail on it</i> — or ask 'provide full 12 months financial model'."
  }
];

/* ---------------------- DOM REFERENCES & STATE ---------------------- */
const chatArea = document.getElementById('chatArea');
const inputEl = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const typingEl = document.getElementById('typing');
const heroEl = document.getElementById('hero');
let heroHidden = false;

/* ---------------------- HELPERS ---------------------- */
function now() {
  const d = new Date();
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function scrollToBottom() {
  if (chatArea) chatArea.scrollTop = chatArea.scrollHeight;
}

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
  // allow HTML from canned replies
  content.innerHTML = html + ' <small style="opacity:.6">(' + now() + ')</small>';
  wrap.appendChild(avatar);
  wrap.appendChild(content);
  if (chatArea) chatArea.appendChild(wrap);
  scrollToBottom();
}

function showTyping(ms = 700, cb = null) {
  if (!typingEl) { if (cb) cb(); return; }
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

/* ---------------------- PROFILE MATCHER (age + city + budget) ---------------------- */
/* This matches the exact profile sentence pattern user provided. */
function matchesProfile(text) {
  if (!text) return false;
  const t = text.toLowerCase();
  const ageMatch = /\b19\b/.test(t) || /\b19 years\b/.test(t) || /\b19 years old\b/.test(t);
  const cityMatch = t.includes("ranchi");
  const budgetMatch = t.includes("₹10000") || t.includes("10000") || t.includes("rs 10000") || t.includes("rupees 10000");
  // require all three for a positive profile match
  return ageMatch && cityMatch && budgetMatch;
}

/* ---------------------- FIND CANNED ---------------------- */
function findCanned(text) {
  if (!text) return null;
  const t = text.toLowerCase().trim();

  // 1) Check profile first (very specific)
  if (matchesProfile(t)) {
    return `<b>Herbal Ayurvedic Skincare & Personal-Care Product</b> is Best Business Idea in India 2025 in the Herbal Sector.`;
  }

  // 2) Loop through simple canned triggers (contains-based)
  for (const item of CANNED_SIMPLE) {
    for (const k of item.triggers) {
      if (!k) continue;
      if (t.includes(k.toLowerCase())) {
        return item.reply;
      }
    }
  }

  // 3) If user typed a single letter a-e after the big plan, handle those quick actions
  if (/^[a-e]$/i.test(t)) {
    const choice = t.toLowerCase();
    if (choice === 'a') return `Generating <b>12-month financial model (P&L, cashflow, break-even)</b>. (Demo: I can produce a CSV if you want — type 'export finance' or ask 'download finance'.)`;
    if (choice === 'b') return `Preparing <b>ingredient & supplier shortlist</b> for the three MVP SKUs — I will include supplier names and contact approach. Type 'supplier shortlist' to download.`;
    if (choice === 'c') return `Creating <b>launch marketing assets</b>: product page copy, 12 Instagram captions and 5 short video scripts. Type 'create marketing' to get content.`;
    if (choice === 'd') return `Building the <b>regulatory application pack</b> and sample AYUSH/FSSAI drafts. Type 'regulatory pack' to download sample drafts.`;
    if (choice === 'e') return `Drafting a <b>1-page investor/loan pitch deck</b>. Type 'create pitch' to download the pitch text.`;
  }

  return null;
}

/* ---------------------- MAIN SEND HANDLER ---------------------- */
function handleSend() {
  const text = (inputEl.value || '').trim();
  if (!text) return;
  appendUser(text);

  // hide hero on first message
  if (!heroHidden) hideHeroSmooth();

  // show typing, then reply
  showTyping(650, () => {
    const reply = findCanned(text);
    if (reply) {
      appendAssistant(reply);
    } else {
      // helpful fallback encouraging exact phrasing to trigger full plan
      appendAssistant("I didn't catch that. Try typing exactly: <i>Hi</i>, then your profile like <i>I am 19 years old, in Ranchi, with ₹10,000 budget, and I want to start an herbal business</i>, then <i>Ok give complete detail on it</i> — or ask 'provide full 12 months financial model'.");
    }
  });

  inputEl.value = '';
  inputEl.focus();
}

/* ---------------------- EVENTS ---------------------- */
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
