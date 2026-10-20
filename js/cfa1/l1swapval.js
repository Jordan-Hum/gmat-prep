// CFA Level I · Derivatives · Learning module 7: Pricing and Valuation of Interest Rate Swaps.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1swapval = `
<p class="syl">CFA Level I · Derivatives (5–8%) · Learning module 7 of 10 · Pricing and Valuation of Interest Rate Swaps</p>
<p>An interest rate swap exchanges fixed for floating interest payments. This lesson shows how a swap can be replicated with bonds or with a series of forward contracts, how the fixed swap rate is set so the swap starts with zero value, and how the swap's value changes once rates move.</p>

<h3>1. What a swap is equivalent to <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Series of forwards</b>: each payment date is like an FRA at the same fixed rate. (Individual FRAs would have different rates; the swap uses one rate, so some "forwards" start with positive value and others negative, summing to zero.)</li>
  <li><b>Bond replication</b>: a <b>pay-fixed, receive-floating</b> swap = <b>issue a fixed-rate bond and buy a floating-rate note</b> with the same notional. A receive-fixed swap = buy a fixed-rate bond and issue an FRN.</li>
  <li>Who uses them: a company with floating-rate debt that wants fixed payments enters a <b>pay-fixed</b> swap; an investor holding floating-rate assets who wants fixed income enters a <b>receive-fixed</b> swap.</li>
</ul>

<h3>2. Pricing: the swap rate <span class="hot">Highly tested</span></h3>
<p>The fixed <b>swap rate</b> is set so that the PV of the fixed payments equals the PV of the floating payments, making the swap's value <b>zero at initiation</b>. Since a floating-rate note is worth par at a reset date, the swap rate is the coupon that makes a fixed-rate bond worth par: the <b>par rate</b>.</p>
<div class="formula">Swap rate (per period) = (1 − DF<sub>N</sub>) / (DF<sub>1</sub> + DF<sub>2</sub> + … + DF<sub>N</sub>)<br>(annualize by multiplying by the number of payments per year)</div>
<div class="ex"><b>Example 1 (annual):</b> spot rates 3%, 3.5%, 4% → DF₁ = 0.97087, DF₂ = 0.93351, DF₃ = 0.88900 (sum 2.79338).<br>3-year swap rate = (1 − 0.88900) / 2.79338 = <b>3.97%</b>. The 2-year swap rate = (1 − 0.93351) / 1.90438 = 3.49%.<br><b>Example 2 (semiannual):</b> DFs 0.985, 0.970, 0.954, 0.938 for 2 years: periodic rate = (1 − 0.938) / 3.847 = 1.612%; annual swap rate = <b>3.22%</b>.</div>

<h3>3. Valuing a swap after initiation <span class="hot">Highly tested</span></h3>
<p>After the swap starts, market swap rates change. The swap's value is the PV of the difference between the current market swap rate and the original fixed rate over the remaining payments.</p>
<div class="formula">Value to the <b>pay-fixed</b> party = (current swap rate − original fixed rate) × Σ DF (remaining periods) × notional (× period length)<br>Value to the receive-fixed party = the negative of that</div>
<div class="ex"><b>Example:</b> a $100 million annual swap was entered paying fixed 3.0%. Two years remain, and the current 2-year swap rate is 3.6%; DFs are 0.965 and 0.930.<br>Value to the pay-fixed party = (0.036 − 0.030) × (0.965 + 0.930) × 100,000,000 = <b>+$1,137,000</b>. The receive-fixed party's value is −$1,137,000.</div>
<ul>
  <li>The <b>pay-fixed</b> party gains when rates <b>rise</b> (it locked in a lower fixed rate); the receive-fixed party gains when rates fall.</li>
  <li>A receive-fixed swap behaves like a long fixed-rate bond (positive duration); a pay-fixed swap like a short bond (negative duration).</li>
  <li>Netting: on each payment date only the difference between fixed and floating payments changes hands.</li>
</ul>

<div class="how"><b>How it's tested:</b> replicating a swap with bonds or forwards, the value of a swap at initiation (zero), calculating the swap rate from discount factors, valuing a swap after rates change, and which side gains when rates rise or fall.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe a swap as a series of forwards and as a combination of bonds.</li>
  <li>Calculate the fixed swap rate from spot rates or discount factors.</li>
  <li>Calculate the value of a swap after initiation for either party.</li>
  <li>Explain how swap values change with interest rates.</li>
</ul></div>
`;

window.QB_HARD.l1swapval = [
  ["At initiation, a plain vanilla interest rate swap has a value to each party of:",
    ["Zero", "Its notional principal", "The PV of its fixed payments"],
    "The fixed swap rate is set so the PV of fixed payments equals the PV of expected floating payments; the swap is worth zero at inception.", "r"],
  ["A company enters a pay-fixed, receive-floating interest rate swap. Market interest rates then rise. The swap's value to the company:",
    ["Increases", "Decreases", "Doesn't change until the next reset"],
    "The company receives floating payments that are now higher while still paying the old fixed rate, so the swap gains value.", "r"],
  ["An interest rate swap can be replicated by:",
    ["A series of forward rate agreements", "A single option on a bond", "A long position in a floating-rate note only"],
    "Each swap settlement is like an (off-market) FRA, so a swap is a portfolio of forward contracts.", "r"],
  ["A pay-fixed, receive-floating interest rate swap can be replicated by:",
    ["Issuing a fixed bond and buying an FRN", "Buying a fixed bond and issuing an FRN", "Buying both a fixed bond and an FRN"],
    "Paying fixed is like owing on a fixed-rate bond; receiving floating is like holding an FRN.", "r"],
  ["Spot rates are 3% (1-year), 3.5% (2-year) and 4% (3-year). The 3-year annual-pay swap rate is closest to:",
    ["3.97%", "4.00%", "3.50%"],
    "DFs: 0.97087, 0.93351, 0.88900. (1 − 0.88900) / 2.79338 = 3.97%.", "c"],
  ["A 2-year semiannual swap has discount factors of 0.985, 0.970, 0.954 and 0.938. The annualized swap rate is closest to:",
    ["3.22%", "1.61%", "3.10%"],
    "Periodic rate = (1 − 0.938) / 3.847 = 1.612%; × 2 = 3.22%. 1.61% is the semiannual rate.", "c"],
  ["The fixed rate on a new interest rate swap is set so that:",
    ["The swap has zero value at the start", "The fixed payer earns a profit", "The floating rate never changes"],
    "PV of fixed payments = PV of floating payments, so neither party pays to enter.", "r"],
  ["A $100 million swap pays fixed at 3.0%. Two annual payments remain, the current 2-year swap rate is 3.6%, and the discount factors are 0.965 and 0.930. The value to the pay-fixed party is closest to:",
    ["+$1,137,000", "−$1,137,000", "+$1,200,000"],
    "(0.036 − 0.030) × (0.965 + 0.930) × 100,000,000 = +$1,137,000. $1,200,000 ignores discounting.", "c"],
  ["Interest rates fall after a company enters a receive-fixed, pay-floating swap. The swap's value to the company:",
    ["Increases", "Decreases", "Is unchanged"],
    "The company locked in a fixed rate above the new market rate, so its position gains, like a long bond.", "r"],
  ["A company has floating-rate debt and wants to fix its interest cost. It should enter a swap in which it:",
    ["Pays fixed and receives floating", "Receives fixed and pays floating", "Pays floating on both legs"],
    "Receiving floating offsets the floating debt payments, leaving a net fixed payment.", "s"],
  ["In terms of interest rate sensitivity, a receive-fixed swap position behaves most like:",
    ["A long fixed-rate bond", "A short fixed-rate bond", "A long floating-rate note"],
    "Receiving fixed gains when rates fall, like holding a fixed-rate bond (positive duration).", "r"],
  ["A swap can be viewed as a series of forward contracts. Because the swap uses one fixed rate for all dates, when the yield curve slopes upward the early forward contracts (for the pay-fixed party) have:",
    ["Negative value, offset by later ones", "Positive value, offset by later ones", "Zero value, like the later ones"],
    "With an upward curve, early forward rates are below the swap rate, so paying the swap rate on early dates has negative value; later dates have positive value, netting to zero.", "r"],
  ["A $20 million swap pays fixed 3.5% and receives floating, with annual payments. If the floating rate for the period is 3.1%, the fixed payer:",
    ["Pays a net $80,000", "Receives a net $80,000", "Pays a net $700,000"],
    "20,000,000 × (3.5% − 3.1%) = $80,000, paid by the fixed payer because fixed exceeds floating. $700,000 is the gross fixed payment.", "c"],
];

window.GLOSSARY.push(
  ["Swap value","Zero at inception (fixed rate = par swap rate). Pay-fixed swap gains when rates rise. A swap = a series of forwards.","l1swapval"],
  ["Swap rate", "Fixed rate that makes a swap's value zero at initiation; equals the par rate: (1 − DF_N)/ΣDF.", "l1swapval"],
  ["Swap value after initiation", "Pay-fixed value = (current swap rate − original rate) × ΣDF × notional.", "l1swapval"]
);
