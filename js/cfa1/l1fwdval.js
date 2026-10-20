// CFA Level I · Derivatives · Learning module 5: Pricing and Valuation of Forward Contracts and for an Underlying with Varying Maturities.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1fwdval = `
<p class="syl">CFA Level I · Derivatives (5–8%) · Learning module 5 of 10 · Pricing and Valuation of Forward Contracts and for an Underlying with Varying Maturities</p>
<p>A forward's <b>price</b> is set at the start so that the contract is worth nothing; its <b>value</b> then changes as the underlying moves. This lesson shows how to value a forward during its life and at expiry, and then applies forward pricing to interest rates: implied forward rates and forward rate agreements (FRAs).</p>

<h3>1. Price vs value <span class="hot">Highly tested</span></h3>
<ul>
  <li>The <b>forward price</b> F₀ is fixed at initiation so that the contract's <b>value is zero</b> to both parties: neither pays anything to enter.</li>
  <li>As the underlying price changes, the contract gains <b>value</b> for one side and loses it for the other.</li>
</ul>
<div class="formula">Value of a long forward at time t: V<sub>t</sub> = S<sub>t</sub> − F<sub>0</sub> / (1 + r)<sup>T − t</sup><br>With income and costs: V<sub>t</sub> = S<sub>t</sub> − PV<sub>t</sub>(income) + PV<sub>t</sub>(costs) − F<sub>0</sub> / (1 + r)<sup>T − t</sup><br>At expiry: V<sub>T</sub> = S<sub>T</sub> − F<sub>0</sub> · Short forward value = −(long value)<br>Equivalent: V<sub>t</sub> = PV of (F<sub>t</sub> − F<sub>0</sub>), the discounted difference between today's forward price and the original one</div>
<div class="ex"><b>Example:</b> a six-month forward on a non-dividend stock was entered at F₀ = 81.98 (S₀ = 80, r = 5%). Two months later the stock is 84.<br>V = 84 − 81.98 / 1.05<sup>4/12</sup> = 84 − 80.65 = <b>3.35</b> for the long (−3.35 for the short).<br>If the stock is 79 at expiry: long value = 79 − 81.98 = <b>−2.98</b>.</div>
<div class="trap"><b>Trap:</b> discount F₀ over the <b>remaining</b> time (T − t), not the original term. Don't confuse the forward price (fixed) with the forward value (changes).</div>

<h3>2. Implied forward rates</h3>
<p>Interest rates for different maturities imply forward rates (covered in the term structure lesson). With spot rates of 3% (1 year) and 3.5% (2 years), the 1y1y implied forward rate = 1.035² / 1.03 − 1 = <b>4.00%</b>. A borrower can lock in a future rate today by combining borrowing and lending at different maturities, or more simply with an FRA.</p>

<h3>3. Forward rate agreements (FRAs) <span class="hot">Highly tested</span></h3>
<ul>
  <li>An FRA is a forward contract on an interest rate. A "3×9" FRA covers a 6-month rate starting in 3 months.</li>
  <li>The <b>long</b> FRA effectively pays the fixed FRA rate and receives the market reference rate (MRR): it <b>gains when rates rise</b>. It hedges a future <b>borrower</b>. The short FRA hedges a future lender.</li>
  <li>No principal is exchanged; only the net interest difference is settled, usually at the <b>start</b> of the loan period, so it's discounted.</li>
</ul>
<div class="formula">FRA payment to the long (at the end of the period) = notional × (MRR − FRA rate) × (days / 360)<br>Settled at the start of the period: divide by (1 + MRR × days / 360)<br>FRA rate (no arbitrage, simple rates) = [(1 + r<sub>long</sub> × t<sub>long</sub>) / (1 + r<sub>short</sub> × t<sub>short</sub>) − 1] / (t<sub>long</sub> − t<sub>short</sub>)</div>
<div class="ex"><b>Example 1 (pricing):</b> 3-month rate 3.8%, 9-month rate 4.2% (simple, 360-day). 3×9 FRA rate = [(1 + 0.042 × 0.75) / (1 + 0.038 × 0.25) − 1] / 0.5 = <b>4.36%</b>.<br><b>Example 2 (settlement):</b> long a $10 million 6-month FRA at 4.0%. At settlement MRR is 4.6%.<br>Interest difference = 10,000,000 × 0.6% × 0.5 = $30,000 (paid at the end of the period).<br>Paid at the start of the period: 30,000 / (1 + 0.046 × 0.5) = <b>$29,326</b> to the long.</div>

<div class="how"><b>How it's tested:</b> the difference between forward price and value, valuing a long or short forward during its life (with and without income) and at expiry, who gains on an FRA when rates move, calculating FRA rates and settlement payments, and implied forward rates.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Explain why a forward has zero value at initiation and how its value changes.</li>
  <li>Calculate the value of a long or short forward during its life and at expiry.</li>
  <li>Calculate implied forward rates and FRA rates.</li>
  <li>Calculate FRA settlement payments and identify who gains when rates change.</li>
</ul></div>
`;

window.QB_HARD.l1fwdval = [
  ["A one-year forward was entered at a forward price of 105. Six months later the underlying trades at 108 and the risk-free rate is 5%. The value of the long forward is closest to:",
    ["5.53", "3.00", "−2.47"],
    "V = S_t − F0 ÷ (1 + r)^(T − t) = 108 − 105 ÷ 1.05^0.5 = 108 − 102.47 = 5.53.", "c"],
  ["A long position in a forward rate agreement gains value when, at settlement, the market reference rate is:",
    ["Above the FRA rate", "Below the FRA rate", "Equal to the FRA rate"],
    "The long FRA effectively locks in a borrowing rate; it receives the reference rate and pays the fixed FRA rate, so it gains when rates end higher.", "r"],
  ["At initiation, the value of a forward contract to the long is:",
    ["Zero", "The forward price", "The spot price"],
    "The forward price is set so that neither party pays to enter; value is zero at the start.", "r"],
  ["A six-month forward was entered at 81.98. Two months later the underlying (no income) trades at 84 and r = 5%. The value of the long forward is closest to:",
    ["3.35", "2.02", "4.00"],
    "84 − 81.98 / 1.05^(4/12) = 84 − 80.65 = 3.35. 2.02 ignores discounting; 4.00 discounts over the original six months.", "c"],
  ["Using the same forward (F0 = 81.98, two months in, S = 84, r = 5%), the value to the short is closest to:",
    ["−3.35", "+3.35", "0.00"],
    "The short's value is the negative of the long's value.", "c"],
  ["A forward was entered at 81.98. At expiry the underlying is 79. The value of the long position is:",
    ["−2.98", "+2.98", "0.00"],
    "At expiry the value is S_T − F0 = 79 − 81.98 = −2.98.", "c"],
  ["When valuing a forward during its life, the original forward price is discounted over:",
    ["The time remaining to expiry", "The original term of the contract", "The time already elapsed"],
    "V_t = S_t − F0 / (1 + r)^(T − t).", "r"],
  ["A company expects to borrow in three months for six months and fears rates will rise. To hedge, it should:",
    ["Go long a 3×9 FRA", "Go short a 3×9 FRA", "Go long a 6×9 FRA"],
    "A long FRA gains when rates rise, offsetting higher borrowing costs. A 3×9 FRA covers a 6-month period starting in 3 months.", "s"],
  ["The 3-month rate is 3.8% and the 9-month rate is 4.2% (simple interest, 360-day year). The no-arbitrage 3×9 FRA rate is closest to:",
    ["4.36%", "4.40%", "4.00%"],
    "[(1 + 0.042 × 0.75)/(1 + 0.038 × 0.25) − 1] / 0.5 = 4.36%. 4.40% is the simple approximation (3 × 4.2 − 3.8)/2.", "c"],
  ["An investor is long a $10 million 6-month FRA at 4.0%. At settlement MRR is 4.6%. The payment at the end of the 6-month period is:",
    ["$30,000 to the long", "$30,000 to the short", "$60,000 to the long"],
    "10,000,000 × (4.6% − 4.0%) × 0.5 = $30,000, paid to the long because rates rose. $60,000 ignores the half-year.", "c"],
  ["If that FRA ($30,000 owed at the end of the period, MRR 4.6%, 6 months) is settled at the start of the period, the payment is closest to:",
    ["$29,326", "$30,000", "$28,681"],
    "30,000 / (1 + 0.046 × 0.5) = $29,326. $28,681 discounts at a full year's rate.", "c"],
  ["Spot rates are 3% for one year and 3.5% for two years. The 1y1y implied forward rate is closest to:",
    ["4.00%", "3.50%", "3.25%"],
    "1.035² / 1.03 − 1 = 4.00%.", "c"],
];

window.GLOSSARY.push(
  ["Forward value (long)","V_t = S_t − F0 ÷ (1 + r)^(T − t), adjusted for any remaining carry.","l1fwdval"],
  ["Forward price vs forward value", "Price is fixed at initiation (value zero); value changes with the underlying.", "l1fwdval"],
  ["Forward rate agreement (FRA)", "Forward on an interest rate; the long gains when the reference rate exceeds the FRA rate.", "l1fwdval"]
);
