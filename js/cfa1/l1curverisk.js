// CFA Level I · Fixed Income · Learning module 13: Curve-Based and Empirical Fixed-Income Risk Measures.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1curverisk = `
<p class="syl">CFA Level I · Fixed Income (11–14%) · Learning module 13 of 19 · Curve-Based and Empirical Fixed-Income Risk Measures</p>
<p>Yield-based duration assumes a bond's cash flows don't change when rates change. That fails for bonds with embedded options and for mortgage-backed securities. This lesson covers effective duration and convexity (based on shifts in the benchmark curve), key rate durations for non-parallel curve shifts, and empirical duration estimated from market data.</p>

<h3>1. Effective duration and effective convexity <span class="hot">Highly tested</span></h3>
<p>For bonds whose cash flows depend on rates (callable, putable, MBS), a pricing model values the bond after shifting the <b>benchmark yield curve</b> up and down (rather than changing the bond's own YTM).</p>
<div class="formula">EffDur = (PV<sub>−</sub> − PV<sub>+</sub>) / (2 × ΔCurve × PV<sub>0</sub>)<br>EffCon = (PV<sub>−</sub> + PV<sub>+</sub> − 2 × PV<sub>0</sub>) / ((ΔCurve)² × PV<sub>0</sub>)</div>
<div class="ex"><b>Example:</b> a callable bond is worth 101.00. A model shows 102.80 if the benchmark curve falls 50 bp and 99.10 if it rises 50 bp.<br>EffDur = (102.80 − 99.10) / (2 × 0.005 × 101.00) = <b>3.66</b>.<br>EffCon = (102.80 + 99.10 − 202.00) / (0.005² × 101.00) = <b>−39.6</b>: negative, because the price gain is limited by the call.</div>
<ul>
  <li>Effective duration must be used when cash flows change with rates; it's also used for bonds without a well-defined yield.</li>
  <li><b>Callable bonds</b>: when rates fall, the call caps price gains, so effective duration is lower than for an option-free bond and effective convexity turns <b>negative</b> at low yields.</li>
  <li><b>Putable bonds</b>: when rates rise, the put limits price falls, so effective duration is lower and convexity is positive.</li>
  <li>Results depend on the model and assumptions (e.g. interest rate volatility, prepayment speeds).</li>
</ul>
<table>
  <tr><th>Measure</th><th>Rate change used</th><th>Suitable for</th></tr>
  <tr><td>Modified duration</td><td>Change in the bond's own YTM</td><td>Option-free bonds</td></tr>
  <tr><td>Effective duration</td><td>Parallel shift in the benchmark curve</td><td>Bonds with embedded options, MBS</td></tr>
  <tr><td>Key rate durations</td><td>Shift in one point on the benchmark curve</td><td>Non-parallel (shaping) risk</td></tr>
  <tr><td>Empirical duration</td><td>Historical relationship with benchmark yields</td><td>Bonds whose spreads move with rates (e.g. high yield)</td></tr>
</table>

<h3>2. Key rate durations <span class="hot">Highly tested</span></h3>
<p>Real yield curves don't always shift in parallel: they also steepen, flatten and change curvature. A <b>key rate duration</b> (partial duration) measures a bond's or portfolio's price sensitivity to a change in the benchmark yield at <b>one maturity</b>, holding the others constant.</p>
<ul>
  <li>The <b>sum of the key rate durations equals the effective duration</b>.</li>
  <li>%ΔPrice from a move at one key rate ≈ −KeyRateDur × ΔRate.</li>
  <li>Key rate durations show <b>shaping risk</b>: how the portfolio is affected by steepening, flattening or twisting.</li>
</ul>
<div class="ex"><b>Example:</b> a portfolio has key rate durations of 0.5 (2-year), 1.2 (5-year), 2.8 (10-year) and 1.5 (30-year). Effective duration = <b>6.0</b>. If only the 10-year rate rises 20 bp, the value changes by about −2.8 × 0.0020 = <b>−0.56%</b>. Since most of its sensitivity is at the 10-year point, the portfolio is hurt most if the curve shifts up around 10 years.</div>

<h3>3. Empirical duration</h3>
<ul>
  <li><b>Analytical duration</b> (modified, effective) comes from formulas or models. <b>Empirical duration</b> is estimated from historical data, for example by regressing a bond's returns on changes in benchmark government yields.</li>
  <li>For government bonds, analytical and empirical duration are similar.</li>
  <li>For <b>high-yield</b> corporate bonds, credit spreads often <b>narrow</b> when government yields rise (both reflect a stronger economy) and widen when they fall, partly offsetting the rate move. So empirical duration is usually <b>lower</b> than analytical duration.</li>
  <li>In a crisis, government yields often fall ("flight to quality") while spreads widen sharply, so high-yield bonds can lose value even as government bond prices rise.</li>
</ul>

<div class="how"><b>How it's tested:</b> calculating effective duration and convexity from model prices, why effective (not modified) duration is used for callable bonds and MBS, negative convexity, key rate durations (summing to effective duration and estimating price changes), and why empirical duration is lower than analytical duration for high-yield bonds.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Explain why effective duration and convexity are needed for bonds with embedded options.</li>
  <li>Calculate effective duration and effective convexity.</li>
  <li>Describe key rate durations and use them to estimate the effect of non-parallel curve changes.</li>
  <li>Compare empirical and analytical duration.</li>
</ul></div>
`;

window.QB_HARD.l1curverisk = [
  ["As yields fall and its call option moves into the money, a callable bond's effective duration:",
    ["Falls, and the bond shows negative convexity", "Rises, and the bond shows more positive convexity", "Stays equal to that of a comparable straight bond"],
    "Price compression near the call price limits upside, so effective duration falls and convexity turns negative.", "r"],
  ["The sum of a bond portfolio's key rate durations equals its:",
    ["Effective duration", "Macaulay duration", "Effective convexity"],
    "Key rate durations break down effective duration by maturity; their sum equals the effective duration for a parallel shift.", "r"],
  ["For high-yield corporate bonds, empirical duration is often lower than analytical duration because:",
    ["Credit spreads tend to narrow when government yields rise", "High-yield bonds usually have longer maturities", "Their coupons stay fixed over the whole life of the bond"],
    "Rising benchmark yields often coincide with stronger economies and narrower credit spreads, partly offsetting the effect on high-yield bond yields.", "r"],
  ["Modified duration is not appropriate for measuring the interest rate risk of a callable bond because:",
    ["Its cash flows change when rates change", "It has no yield to maturity that can be computed", "Its coupon is reset each period"],
    "Callable bonds may be redeemed early, so their cash flows depend on rates; effective duration captures this.", "r"],
  ["A callable bond is worth 101.00. A model values it at 102.80 if the benchmark curve falls 50 bp and 99.10 if it rises 50 bp. Its effective duration is closest to:",
    ["3.66", "7.33", "1.83"],
    "(102.80 − 99.10) / (2 × 0.005 × 101.00) = 3.66. 7.33 omits the 2 in the denominator.", "c"],
  ["Using the same prices (101.00, 102.80, 99.10 for ±50 bp), the callable bond's effective convexity is closest to:",
    ["−39.6", "+39.6", "−0.4"],
    "(102.80 + 99.10 − 202.00) / (0.000025 × 101.00) = −39.6. Negative convexity reflects the cap on price gains.", "c"],
  ["Effective duration measures price sensitivity to a parallel shift in:",
    ["The benchmark yield curve", "The bond's own yield to maturity", "The bond's credit spread only"],
    "Effective duration shifts the benchmark curve and reprices the bond with a model.", "r"],
  ["A portfolio's key rate durations are 0.5 (2-year), 1.2 (5-year), 2.8 (10-year) and 1.5 (30-year). Its effective duration is:",
    ["6.0", "1.5", "2.8"],
    "The key rate durations sum to the effective duration: 0.5 + 1.2 + 2.8 + 1.5 = 6.0.", "c"],
  ["For the same portfolio (10-year key rate duration of 2.8), if only the 10-year rate rises 20 bp, its value changes by approximately:",
    ["−0.56%", "−1.20%", "+0.56%"],
    "−2.8 × 0.0020 = −0.56%. −1.20% applies the full effective duration of 6.0.", "c"],
  ["Key rate durations are mainly used to measure a portfolio's exposure to:",
    ["Changes in the shape of the curve", "Changes in corporate credit spreads", "Changes in the issuer's rating"],
    "Key rate durations show sensitivity to non-parallel shifts (shaping risk).", "r"],
  ["Empirical duration is estimated by:",
    ["Using historical price and yield data", "Discounting cash flows at spot rates", "Weighting cash flows by time to receipt"],
    "Empirical duration comes from statistical analysis, such as regressing bond returns on benchmark yield changes.", "r"],
  ["During a financial crisis, government bond yields fall while high-yield credit spreads widen sharply. A high-yield bond's price is most likely to:",
    ["Fall despite lower government yields", "Rise as much as government bonds", "Stay roughly unchanged in price"],
    "Spread widening can outweigh the benefit of falling benchmark yields.", "s"],
  ["Compared with an option-free bond, a putable bond's effective duration when rates rise sharply is most likely:",
    ["Lower, because the put limits losses", "Higher, because the put adds risk", "Unaffected by the embedded put option"],
    "If rates rise, investors can sell the bond back, so its price falls less.", "r"],
];

window.GLOSSARY.push(
  ["Effective duration","(PV− − PV+) ÷ (2 × ΔCurve × PV0). Used for bonds with embedded options; callable bonds show negative convexity at low yields.","l1curverisk"],
  ["Effective convexity", "(PV− + PV+ − 2PV0) / (Δcurve² × PV0); negative for callable bonds at low yields.", "l1curverisk"],
  ["Key rate duration", "Sensitivity to a change in one maturity on the benchmark curve; they sum to effective duration.", "l1curverisk"],
  ["Empirical duration", "Duration estimated from historical data; lower than analytical for high-yield bonds.", "l1curverisk"]
);
