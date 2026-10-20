// CFA Level I · Fixed Income · Learning module 11: Yield-Based Bond Duration Measures and Properties.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1dur = `
<p class="syl">CFA Level I · Fixed Income (11–14%) · Learning module 11 of 19 · Yield-Based Bond Duration Measures and Properties</p>
<p>Duration is the most important measure of a bond's interest rate risk and one of the most tested topics at Level I. This lesson calculates Macaulay and modified duration, approximates modified duration from prices, converts duration into money terms (money duration and PVBP), and explains how maturity, coupon and yield affect duration.</p>

<h3>1. Macaulay duration <span class="hot">Highly tested</span></h3>
<p><b>Macaulay duration</b> is the weighted-average time until the bond's cash flows are received, using each cash flow's share of the bond's price as the weight.</p>
<div class="formula">MacDur = Σ t × [PV(CF<sub>t</sub>) / Price]</div>
<div class="ex"><b>Example:</b> 3-year bond, 5% annual coupon, yield 4%. Price = 102.775.
<table>
  <tr><th>t</th><th>Cash flow</th><th>PV at 4%</th><th>Weight</th><th>t × weight</th></tr>
  <tr><td>1</td><td>5</td><td>4.808</td><td>0.0468</td><td>0.0468</td></tr>
  <tr><td>2</td><td>5</td><td>4.623</td><td>0.0450</td><td>0.0900</td></tr>
  <tr><td>3</td><td>105</td><td>93.345</td><td>0.9082</td><td>2.7247</td></tr>
  <tr><td colspan="4"><b>Macaulay duration</b></td><td><b>2.861</b></td></tr>
</table></div>

<h3>2. Modified duration and estimating price changes <span class="hot">Highly tested</span></h3>
<div class="formula">ModDur = MacDur / (1 + r), where r = yield per period<br>(for semiannual bonds: annual ModDur = MacDur in years / (1 + YTM/2))<br>%ΔPrice ≈ −ModDur × ΔYield</div>
<div class="ex"><b>Example:</b> the bond above: ModDur = 2.861 / 1.04 = <b>2.751</b>. If the yield rises 50 bp, the price falls about 2.751 × 0.005 = <b>1.38%</b> (the actual fall is 1.36%; the gap is convexity).<br>Semiannual example: MacDur of 9.0 periods (4.5 years) with a yield of 6% (3% per period): annual ModDur = 4.5 / 1.03 = <b>4.37</b>.</div>
<h4>Approximate modified duration (from prices)</h4>
<div class="formula">ApproxModDur = (PV<sub>−</sub> − PV<sub>+</sub>) / (2 × ΔYield × PV<sub>0</sub>)</div>
<div class="ex"><b>Example:</b> the bond above priced at 4% (102.775), 3.9% (103.058) and 4.1% (102.493): (103.058 − 102.493) / (2 × 0.001 × 102.775) = <b>2.75</b>, matching the formula.</div>
<p><b>Effective duration</b> uses the same formula but with prices from a model that shifts the benchmark curve; it's required for bonds with embedded options, whose cash flows change with rates (see the curve-based risk lesson).</p>

<h3>3. Money duration and PVBP</h3>
<div class="formula">Money duration = ModDur × full price (× position size)<br>Price value of a basis point (PVBP) = (PV<sub>−</sub> − PV<sub>+</sub>) / 2, with yields ±1 bp ≈ money duration × 0.0001</div>
<div class="ex"><b>Example:</b> a $10 million par position, full price 102.50 (value $10.25 million), ModDur 6.2. Money duration = 6.2 × 10,250,000 = <b>$63.55 million</b>; a 1 bp change in yield changes its value by about 63,550,000 × 0.0001 = <b>$6,355</b>.</div>
<p>Money duration and PVBP express interest rate risk in currency, so they can be added across positions and used for hedging.</p>

<h3>4. Properties of duration <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Factor</th><th>Effect on duration</th></tr>
  <tr><td>Longer maturity</td><td>Higher (generally; very long deep-discount bonds can be an exception)</td></tr>
  <tr><td>Lower coupon</td><td>Higher (more of the value comes at the end)</td></tr>
  <tr><td>Lower yield</td><td>Higher (distant cash flows are discounted less, so they weigh more)</td></tr>
  <tr><td>Zero-coupon bond</td><td>Macaulay duration = maturity</td></tr>
  <tr><td>Perpetual bond</td><td>Macaulay duration = (1 + r) / r (e.g. 21 years at 5%)</td></tr>
  <tr><td>Call or put option</td><td>Lowers effective duration (the bond may end early)</td></tr>
</table>
<div class="ex"><b>Comparison (10-year bonds at 4% unless stated):</b> 3% coupon → MacDur 8.72; 6% coupon → 7.98; 3% coupon at a 6% yield → 8.59; 20-year 3% coupon → 14.91.</div>
<ul>
  <li>Between coupon dates, Macaulay duration falls as time passes, then jumps up just after each coupon is paid (a "sawtooth" pattern).</li>
  <li>Duration measures the effect of a <b>parallel</b> shift in yields and works best for small changes; convexity improves the estimate for larger changes.</li>
</ul>

<div class="how"><b>How it's tested:</b> calculating Macaulay and modified duration, estimating a price change from modified duration, approximate modified duration from given prices, money duration and PVBP, and ranking bonds by duration using maturity, coupon and yield.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Calculate and interpret Macaulay duration and modified duration.</li>
  <li>Estimate percentage price changes with modified duration.</li>
  <li>Calculate approximate modified duration from prices and explain effective duration.</li>
  <li>Calculate money duration and PVBP.</li>
  <li>Describe how maturity, coupon, yield and embedded options affect duration.</li>
</ul></div>
`;

window.QB_HARD.l1dur = [
  ["A zero-coupon bond matures in 5 years. Its Macaulay duration is:",
    ["5 years", "Less than 5 years", "More than 5 years"],
    "All of a zero's value comes at maturity, so its Macaulay duration equals its maturity.", "r"],
  ["A bond has a Macaulay duration of 7.2 and an annual yield to maturity of 6%. Its modified duration is closest to:",
    ["6.79", "7.20", "7.63"],
    "ModDur = MacDur ÷ (1 + r) = 7.2 ÷ 1.06 = 6.79.", "c"],
  ["A bond's price is 100.00. If its yield falls 50 bp the price becomes 104.20; if it rises 50 bp the price becomes 96.00. Its approximate modified duration is closest to:",
    ["8.20", "4.10", "16.40"],
    "ApproxModDur = (PV− − PV+) ÷ (2 × ΔYield × PV0) = (104.20 − 96.00) ÷ (2 × 0.005 × 100) = 8.20.", "c"],
  ["A bond has a full price of 102 per 100 par and a modified duration of 5. Its price value of a basis point (per 100 par) is closest to:",
    ["0.051", "0.510", "0.005"],
    "PVBP = ModDur × full price × 0.0001 = 5 × 102 × 0.0001 = 0.051.", "c"],
  ["All else equal, which bond has the highest Macaulay duration?",
    ["20-year maturity, 2% coupon", "20-year maturity, 8% coupon", "10-year maturity, 2% coupon"],
    "Duration rises with maturity and falls as the coupon rises (more value arrives earlier). The long, low-coupon bond has the highest duration.", "r"],
  ["A 3-year bond pays a 5% annual coupon and yields 4%. Its Macaulay duration is closest to:",
    ["2.86 years", "2.75 years", "3.00 years"],
    "Weights 0.0468, 0.0450 and 0.9082 on years 1–3 give 2.86. 2.75 is the modified duration; 3.00 is the maturity.", "c"],
  ["The same bond (Macaulay duration 2.861, annual yield 4%) has a modified duration closest to:",
    ["2.75", "2.86", "2.98"],
    "2.861 / 1.04 = 2.75. 2.98 multiplies instead of dividing.", "c"],
  ["A bond has a modified duration of 2.75. If its yield rises 50 bp, its price will change by approximately:",
    ["−1.38%", "+1.38%", "−2.75%"],
    "−2.75 × 0.005 = −1.38%. Prices fall when yields rise.", "c"],
  ["A semiannual-pay bond has a Macaulay duration of 4.5 years and a yield of 6%. Its annual modified duration is closest to:",
    ["4.37", "4.25", "4.50"],
    "4.5 / (1 + 0.06/2) = 4.37. 4.25 divides by 1.06.", "c"],
  ["A bond's price is 102.775. If its yield falls 10 bp the price is 103.058; if it rises 10 bp the price is 102.493. Its approximate modified duration is closest to:",
    ["2.75", "5.50", "0.28"],
    "(103.058 − 102.493) / (2 × 0.001 × 102.775) = 2.75. 5.50 forgets the 2 in the denominator.", "c"],
  ["A $10 million par position has a full price of 102.50 and a modified duration of 6.2. The change in value for a 1 bp change in yield is closest to:",
    ["$6,355", "$6,200", "$63,550"],
    "Money duration = 6.2 × 10.25 million = 63.55 million; × 0.0001 = $6,355. $6,200 uses par instead of full price.", "c"],
  ["Which bond most likely has the highest Macaulay duration? All are option-free and yield 4%.",
    ["10-year, 3% coupon", "10-year, 6% coupon", "5-year, 3% coupon"],
    "Longer maturity and lower coupon raise duration.", "r"],
  ["All else equal, a decrease in a bond's yield will:",
    ["Increase its duration", "Decrease its duration", "Leave its duration unchanged"],
    "At lower yields, distant cash flows are discounted less, so they carry more weight.", "r"],
  ["A perpetual bond yields 5%. Its Macaulay duration is:",
    ["21 years", "20 years", "Infinite"],
    "(1 + r) / r = 1.05 / 0.05 = 21. Even though it never matures, its duration is finite.", "c"],
  ["Compared with an otherwise identical option-free bond, a callable bond's effective duration is:",
    ["Lower", "Higher", "The same"],
    "The issuer may redeem early, shortening expected cash flows and reducing price sensitivity.", "r"],
  ["Between coupon dates, a bond's Macaulay duration:",
    ["Falls, then jumps after each coupon", "Rises steadily until the maturity date", "Stays constant until maturity"],
    "Time passing shortens duration; when a coupon is paid, the remaining cash flows are weighted more to the end, so duration jumps up.", "r"],
  ["Duration-based price estimates are most accurate for:",
    ["Small, parallel yield changes", "Large, non-parallel yield changes", "Bonds with embedded options"],
    "Duration is a linear approximation for parallel shifts; convexity matters more for large changes.", "r"],
];

window.GLOSSARY.push(
  ["Macaulay and modified duration","MacDur = PV-weighted average time to cash flows. ModDur = MacDur ÷ (1 + r). %ΔP ≈ −ModDur × Δy.","l1dur"],
  ["PVBP (basis point value)","Price change for a 1 bp yield change = ModDur × full price × 0.0001.","l1dur"],
  ["Money duration", "Modified duration × full price (× position); duration in currency terms.", "l1dur"],
  ["Duration properties", "Higher for longer maturity, lower coupon, lower yield; zero = maturity; perpetual = (1 + r)/r.", "l1dur"],
  ["Approximate modified duration", "(PV− − PV+) / (2 × Δyield × PV0).", "l1dur"]
);
