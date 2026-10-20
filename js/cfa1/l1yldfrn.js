// CFA Level I · Fixed Income · Learning module 8: Yield and Yield Spread Measures for Floating-Rate Instruments.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1yldfrn = `
<p class="syl">CFA Level I · Fixed Income (11–14%) · Learning module 8 of 19 · Yield and Yield Spread Measures for Floating-Rate Instruments</p>
<p>Floating-rate notes and money market instruments use their own yield conventions. This lesson covers the quoted margin and discount margin on FRNs and how they determine whether an FRN trades at par, a premium or a discount, and then the discount-rate and add-on-rate conventions used for money market instruments, with conversions so you can compare them.</p>

<h3>1. Floating-rate notes: quoted margin vs discount margin <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Quoted margin (QM)</b>: the fixed spread over the market reference rate (MRR) set in the bond's terms. Coupon = MRR + QM.</li>
  <li><b>Discount margin (DM)</b> (required margin): the spread over MRR that investors currently <b>require</b> for the issuer's credit risk. It changes as the issuer's credit quality and market conditions change.</li>
</ul>
<table>
  <tr><th>Relationship</th><th>Price on a reset date</th></tr>
  <tr><td>DM = QM</td><td>At par</td></tr>
  <tr><td>DM &gt; QM (credit has worsened)</td><td><b>Discount</b>: the coupon doesn't pay enough for the risk</td></tr>
  <tr><td>DM &lt; QM (credit has improved)</td><td><b>Premium</b></td></tr>
</table>
<div class="formula">FRN price = Σ [(MRR + QM) × FV / m] / [1 + (MRR + DM)/m]<sup>t</sup> + FV / [1 + (MRR + DM)/m]<sup>N</sup><br>(assuming MRR stays at its current level)</div>
<div class="ex"><b>Example:</b> 2-year FRN paying quarterly, MRR 3.0%, QM 100 bp, DM 120 bp.<br>Coupon per quarter = (3.0% + 1.0%) / 4 × 100 = 1.00. Discount rate per quarter = (3.0% + 1.2%) / 4 = 1.05%.<br>N = 8, I/Y = 1.05, PMT = 1.00, FV = 100 → PV = <b>99.62</b> (discount, since DM &gt; QM). If DM were 80 bp, the price would be 100.38.</div>
<p>Because the coupon resets to market rates, FRNs have very little interest rate risk; their price moves mainly with changes in the required credit spread (DM).</p>

<h3>2. Money market yield conventions <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Convention</th><th>Used for</th><th>Formulas</th></tr>
  <tr><td><b>Discount rate (DR)</b></td><td>T-bills, commercial paper, bankers' acceptances</td><td>PV = FV × (1 − Days/Year × DR)<br>DR = (Year/Days) × (FV − PV) / FV</td></tr>
  <tr><td><b>Add-on rate (AOR)</b></td><td>CDs, repos, bank deposits, reference rates</td><td>PV = FV / (1 + Days/Year × AOR)<br>AOR = (Year/Days) × (FV − PV) / PV</td></tr>
</table>
<ul>
  <li>The discount rate is calculated on <b>face value</b>, so it <b>understates</b> the investor's return (which should be based on the amount invested, PV).</li>
  <li>"Year" may be 360 or 365 days depending on the market. The <b>bond equivalent yield</b> is an add-on rate on a 365-day basis, used to compare money market instruments.</li>
  <li>Money market rates are usually simple (not compounded); to compare with bond yields, convert to the same periodicity.</li>
</ul>
<div class="ex"><b>Example 1 (discount rate):</b> a 180-day T-bill with face 100 is quoted at a 3.6% discount rate (360-day year).<br>PV = 100 × (1 − 180/360 × 0.036) = <b>98.20</b>.<br>Bond equivalent yield (365-day add-on) = 365/180 × (100 − 98.20) / 98.20 = <b>3.72%</b>.<br><b>Example 2:</b> 120-day CP is priced at 98.50 per 100 face. Discount rate (360) = 360/120 × 1.50 / 100 = <b>4.50%</b>.<br><b>Example 3 (add-on):</b> $1 million placed in a 180-day CD at a 4% add-on rate (360-day year) pays 1,000,000 × (1 + 0.04 × 180/360) = <b>$1,020,000</b> at maturity.</div>
<div class="ex"><b>Example 4 (comparing):</b> which 90-day investment pays the most?<br>(a) T-bill at a 4.00% discount rate (360): PV = 99.00; 365-day add-on = 365/90 × 1/99 = 4.097%.<br>(b) CD at a 4.05% add-on rate (360): 365-day equivalent = 4.05% × 365/360 = <b>4.106%</b>.<br>(c) Deposit at a 4.10% add-on rate (365): 4.100%.<br>The CD (b) pays the most once all three are on the same basis.</div>
<div class="trap"><b>Trap:</b> always convert to the same basis (add-on, same day count) before comparing. Converting a 360-day rate to 365 days multiplies it by 365/360.</div>

<div class="how"><b>How it's tested:</b> whether an FRN trades at par, premium or discount from QM vs DM, pricing an FRN, T-bill and CP prices from discount rates, CD payoffs from add-on rates, converting to bond equivalent yield, and ranking money market instruments on a common basis.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Distinguish quoted margin from discount margin and relate them to an FRN's price.</li>
  <li>Calculate the price of an FRN given MRR, QM and DM.</li>
  <li>Calculate money market prices and yields with discount and add-on conventions.</li>
  <li>Convert money market rates to a common basis (365-day add-on) and compare them.</li>
</ul></div>
`;

window.QB_HARD.l1yldfrn = [
  ["A 180-day T-bill has a face value of 100 and is quoted at a 4% discount rate (360-day year). Its price is closest to:",
    ["98.00", "98.04", "96.00"],
    "Discount basis: PV = FV × (1 − Days/Year × DR) = 100 × (1 − 0.5 × 0.04) = 98.00.", "c"],
  ["An FRN has a quoted margin of 1.25% over the reference rate. If the required (discount) margin for its credit risk is now 1.00%, the FRN will trade:",
    ["At a premium to par", "At a discount to par", "At par"],
    "The FRN pays a higher spread than investors now require, so its price rises above par.", "r"],
  ["An FRN's issuer has been downgraded since issue, so investors now require a margin above the note's quoted margin. On its next reset date the FRN will most likely trade:",
    ["Below par", "Above par", "At par"],
    "When the discount (required) margin exceeds the quoted margin, the coupon underpays for the risk, so the price is below par.", "s"],
  ["A 2-year FRN pays quarterly with MRR at 3.0%, a quoted margin of 100 bp and a discount margin of 120 bp. Assuming MRR is unchanged, its price per 100 of par is closest to:",
    ["99.62", "100.00", "100.38"],
    "Coupon 1.00 per quarter, discount rate 1.05% per quarter, N = 8 → 99.62. 100.38 would apply if DM were 80 bp.", "c"],
  ["The price of a floating-rate note changes mainly because of changes in:",
    ["The required credit spread", "The level of interest rates", "The quoted margin"],
    "The coupon resets with market rates, so FRN prices move mainly with the discount margin (credit spread). The quoted margin is fixed.", "r"],
  ["A 180-day T-bill with a face value of 100 is quoted at a 3.6% discount rate (360-day year). Its price is:",
    ["98.20", "96.40", "98.23"],
    "100 × (1 − 0.036 × 180/360) = 98.20. 96.40 uses the full-year discount.", "c"],
  ["The same T-bill priced at 98.20 for 180 days has a bond equivalent yield (365-day add-on basis) closest to:",
    ["3.72%", "3.60%", "3.67%"],
    "365/180 × 1.80 / 98.20 = 3.72%. The discount rate understates the return because it's based on face value.", "c"],
  ["120-day commercial paper is priced at 98.50 per 100 of face value. Its discount rate (360-day year) is:",
    ["4.50%", "4.57%", "4.44%"],
    "360/120 × (100 − 98.50) / 100 = 4.50%. Dividing by price (98.50) gives the add-on rate of 4.57%.", "c"],
  ["$1 million is placed in a 180-day CD at a 4% add-on rate (360-day year). The amount received at maturity is:",
    ["$1,020,000", "$1,040,000", "$1,019,726"],
    "1,000,000 × (1 + 0.04 × 180/360) = $1,020,000. $1,019,726 uses a 365-day year.", "c"],
  ["A money market rate quoted on a discount basis, compared with an add-on rate for the same instrument, is:",
    ["Lower, because it's based on face value", "Higher, because it's based on face value", "Identical in every case"],
    "Discount rates divide by face value rather than the amount invested, so they understate the return.", "r"],
  ["Which 90-day investment offers the highest return? (A) T-bill at a 4.00% discount rate (360); (B) CD at a 4.05% add-on rate (360); (C) deposit at a 4.10% add-on rate (365).",
    ["B", "A", "C"],
    "On a 365-day add-on basis: A = 4.097%, B = 4.05 × 365/360 = 4.106%, C = 4.100%.", "c"],
  ["Which money market instrument is most likely quoted on a discount-rate basis?",
    ["Commercial paper", "A certificate of deposit", "A repurchase agreement"],
    "T-bills, CP and bankers' acceptances use discount rates; CDs, repos and deposits use add-on rates.", "r"],
  ["Compared with a fixed-rate bond of the same maturity, a floating-rate note has:",
    ["Much less interest rate risk", "Much more interest rate risk", "The same interest rate risk"],
    "Coupons reset to market rates, so the price stays close to par when rates change (if credit is unchanged).", "r"],
];

window.GLOSSARY.push(
  ["FRN pricing","Quoted margin > discount (required) margin → premium; < → discount; = → par on reset dates.","l1yldfrn"],
  ["Money market pricing","Discount basis: PV = FV(1 − Days/Year × DR). Add-on basis: PV = FV ÷ (1 + Days/Year × AOR).","l1yldfrn"],
  ["Quoted vs discount margin", "Fixed spread in the FRN's terms vs spread investors currently require.", "l1yldfrn"],
  ["Discount rate (money market)", "DR = (Year/Days) × (FV − PV) / FV; based on face value.", "l1yldfrn"],
  ["Add-on rate", "AOR = (Year/Days) × (FV − PV) / PV; based on the amount invested.", "l1yldfrn"],
  ["Bond equivalent yield", "Money market add-on rate on a 365-day basis.", "l1yldfrn"]
);
