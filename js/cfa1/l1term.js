// CFA Level I · Fixed Income · Learning module 9: The Term Structure of Interest Rates: Spot, Par, and Forward Curves.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1term = `
<p class="syl">CFA Level I · Fixed Income (11–14%) · Learning module 9 of 19 · The Term Structure of Interest Rates: Spot, Par, and Forward Curves</p>
<p>The term structure shows how interest rates vary with maturity. This lesson defines three related curves (spot, par and forward), shows how to move between them (bootstrapping spot rates from par rates, and calculating implied forward rates from spot rates), explains how their shapes relate to each other, and how forward rates are used to price bonds.</p>

<h3>1. Spot rates and discount factors</h3>
<ul>
  <li>A <b>spot rate</b> (zero rate) is the yield on a zero-coupon bond for a given maturity. The <b>spot curve</b> (zero curve) plots spot rates against maturity.</li>
  <li>The <b>discount factor</b> for year t is DF<sub>t</sub> = 1 / (1 + S<sub>t</sub>)<sup>t</sup>. Price of any bond = Σ cash flow × discount factor.</li>
  <li>A coupon bond's YTM is a weighted average of the spot rates for its cash flows, closest to the spot rate at its maturity.</li>
</ul>

<h3>2. The par curve and bootstrapping</h3>
<p>A <b>par rate</b> is the coupon rate at which a bond of a given maturity would be priced at par, given the spot curve.</p>
<div class="formula">Par rate for N years: PMT = (1 − DF<sub>N</sub>) / (DF<sub>1</sub> + DF<sub>2</sub> + … + DF<sub>N</sub>)</div>
<div class="ex"><b>Example:</b> spot rates 3% (1-year), 4% (2-year), 4.5% (3-year).<br>DF₁ = 0.97087, DF₂ = 0.92456, DF₃ = 0.87630.<br>2-year par rate = (1 − 0.92456) / (0.97087 + 0.92456) = <b>3.98%</b>. 3-year par rate = (1 − 0.87630) / 2.77173 = <b>4.46%</b>.</div>
<p><b>Bootstrapping</b> works the other way: start from par rates (from on-the-run government bonds, which trade near par) and solve for spot rates one maturity at a time.</p>
<div class="ex"><b>Example:</b> 1-year par rate 2% (so the 1-year spot rate is 2%), 2-year par rate 3%. A 2-year 3% bond priced at 100:<br>100 = 3/1.02 + 103/(1 + S₂)² → (1 + S₂)² = 103 / (100 − 2.941) → S₂ = <b>3.015%</b>.</div>

<h3>3. Forward rates <span class="hot">Highly tested</span></h3>
<p>A <b>forward rate</b> is an interest rate agreed today for a loan that starts in the future. "1y1y" means a 1-year rate starting in 1 year; "2y1y" a 1-year rate starting in 2 years; "1y2y" a 2-year rate starting in 1 year. <b>Implied forward rates</b> come from spot rates by no-arbitrage: investing for two years at the 2-year spot rate must give the same result as investing for one year and rolling over at the 1y1y forward rate.</p>
<div class="formula">(1 + S<sub>A+B</sub>)<sup>A+B</sup> = (1 + S<sub>A</sub>)<sup>A</sup> × (1 + IFR<sub>A,B</sub>)<sup>B</sup><br>Approximation: IFR ≈ [(A + B) × S<sub>A+B</sub> − A × S<sub>A</sub>] / B</div>
<div class="ex"><b>Example:</b> spot rates 3% (1-year), 4% (2-year), 4.5% (3-year).<br>1y1y = 1.04² / 1.03 − 1 = <b>5.01%</b> (approximation: 2 × 4 − 3 = 5%).<br>2y1y = 1.045³ / 1.04² − 1 = <b>5.51%</b>.<br>1y2y = (1.045³ / 1.03)<sup>1/2</sup> − 1 = <b>5.26%</b>.</div>
<ul>
  <li>Spot rates are geometric averages of the 1-year rate and the subsequent forward rates. A bond priced with forward rates (100 / (1.03 × 1.0501) = 92.46 for a 2-year zero) gets the same price as with spot rates (100 / 1.04² = 92.46).</li>
  <li>If future spot rates turn out equal to today's forward rates, all strategies over a horizon earn the same return. If an investor expects future rates to be <b>below</b> the forward rates, longer bonds are more attractive (and vice versa).</li>
  <li><b>Riding the yield curve</b>: with an upward-sloping curve that stays unchanged, buying a bond with a maturity longer than the horizon and selling it later (at a lower yield, higher price) earns more than buying a bond that matches the horizon.</li>
</ul>

<h3>4. How the curves relate <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Spot curve shape</th><th>Forward curve</th><th>Par curve</th></tr>
  <tr><td>Upward sloping</td><td><b>Above</b> the spot curve</td><td><b>Below</b> the spot curve</td></tr>
  <tr><td>Downward sloping (inverted)</td><td>Below the spot curve</td><td>Above the spot curve</td></tr>
  <tr><td>Flat</td><td>Same as spot</td><td>Same as spot</td></tr>
</table>
<p>Intuition: if the 2-year spot rate is above the 1-year rate, the forward rate for year 2 must be even higher to pull the 2-year average up. The par rate is a blend of spot rates (weighted toward the final one), so it sits below the spot rate in an upward-sloping curve.</p>
<h4>Why the curve slopes (background)</h4>
<ul>
  <li><b>Expectations</b>: an upward slope suggests markets expect short-term rates to rise.</li>
  <li><b>Liquidity (term) premium</b>: investors demand extra yield for holding longer, riskier bonds, so curves tend to slope upward even with flat expectations.</li>
  <li><b>Segmented markets / preferred habitat</b>: supply and demand from different investors at each maturity (e.g. pension funds at the long end) affect yields.</li>
</ul>

<div class="how"><b>How it's tested:</b> calculating implied forward rates (1y1y, 2y1y, 1y2y) from spot rates, bootstrapping a spot rate from par rates, calculating a par rate, the relative positions of the spot, par and forward curves, pricing with forwards, and riding the yield curve.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Define spot rates, par rates and forward rates, and calculate discount factors.</li>
  <li>Bootstrap spot rates from par rates and calculate par rates from spot rates.</li>
  <li>Calculate implied forward rates and price bonds with them.</li>
  <li>Describe the relationships between the spot, par and forward curves.</li>
  <li>Explain riding the yield curve and what forward rates imply about expected returns.</li>
</ul></div>
`;

window.QB_HARD.l1term = [
  ["The 1-year spot rate is 3% and the 2-year spot rate is 4%. The implied one-year forward rate one year from now (1y1y) is closest to:",
    ["5.01%", "4.00%", "3.50%"],
    "(1.04)² = (1.03)(1 + f) → f = 1.0816 ÷ 1.03 − 1 = 5.01%. With an upward-sloping spot curve, forwards exceed spot rates.", "c"],
  ["Spot rates are 3% for 1 year, 4% for 2 years and 4.5% for 3 years. The 2y1y implied forward rate is closest to:",
    ["5.51%", "5.01%", "5.26%"],
    "1.045³ / 1.04² − 1 = 5.51%. 5.01% is the 1y1y rate; 5.26% is the 1y2y rate.", "c"],
  ["Using the same spot rates (3%, 4%, 4.5%), the 1y2y implied forward rate is closest to:",
    ["5.26%", "5.51%", "4.75%"],
    "(1.045³ / 1.03)^0.5 − 1 = 5.26%.", "c"],
  ["With spot rates of 3% (1-year) and 4% (2-year), the 2-year par rate is closest to:",
    ["3.98%", "4.00%", "3.50%"],
    "DF₁ = 0.97087, DF₂ = 0.92456; par = (1 − 0.92456) / (0.97087 + 0.92456) = 3.98%.", "c"],
  ["The 1-year par rate is 2% and the 2-year par rate is 3% (annual coupons). The bootstrapped 2-year spot rate is closest to:",
    ["3.015%", "3.000%", "2.985%"],
    "100 = 3/1.02 + 103/(1 + S₂)² → S₂ = 3.015%. In an upward-sloping curve, spot rates exceed par rates.", "c"],
  ["When the spot curve is upward sloping, the forward curve lies:",
    ["Above the spot curve", "Below the spot curve", "On the spot curve"],
    "Forward rates must exceed spot rates to pull the longer-term average up.", "r"],
  ["When the spot curve is upward sloping, the par curve lies:",
    ["Below the spot curve", "Above the spot curve", "Above the forward curve"],
    "Par rates are blends of the spot rates up to that maturity, so they lie below the spot curve when it slopes up.", "r"],
  ["Using spot rates of 3% (1-year) and 4% (2-year), the price of a 2-year zero-coupon bond computed with the 1y1y forward rate is closest to:",
    ["92.46", "94.26", "96.15"],
    "1y1y = 5.01%; 100 / (1.03 × 1.0501) = 92.46, the same as 100 / 1.04². 94.26 discounts at 3% for both years; 96.15 discounts only one year.", "c"],
  ["An investor expects future 1-year rates to be lower than today's implied forward rates. She would most likely prefer:",
    ["Longer-maturity bonds", "Shorter-maturity bonds", "Floating-rate notes"],
    "If rates turn out below the forwards, longer bonds earn more than rolling over short ones.", "r"],
  ["An investor with a 3-year horizon buys a 5-year bond and plans to sell it after 3 years, expecting an upward-sloping curve to stay unchanged. This strategy is:",
    ["Riding the yield curve", "Bootstrapping the spot curve", "Duration matching"],
    "As the bond ages, its yield falls along the upward curve, so its price rises, adding to return.", "r"],
  ["A 3-year coupon bond's yield to maturity is best described as:",
    ["A blend of the spot rates", "The 3-year forward rate", "The highest spot rate on the curve"],
    "YTM blends the spot rates for each cash flow, weighted toward the final payment.", "r"],
  ["Which theory says an upward-sloping yield curve can occur even if short-term rates are expected to stay the same?",
    ["Liquidity preference", "Pure expectations theory", "Segmented markets"],
    "Investors demand a term premium for longer maturities, which adds an upward slope.", "r"],
];

window.GLOSSARY.push(
  ["Implied forward rate","(1 + z2)² = (1 + z1)(1 + 1y1y). Upward-sloping spot curve → forwards above spots.","l1term"],
  ["Spot rate", "Yield on a zero-coupon bond for a given maturity.", "l1term"],
  ["Par rate", "Coupon at which a bond of that maturity prices at par: (1 − DF_N) / ΣDF.", "l1term"],
  ["Bootstrapping", "Solving for spot rates one maturity at a time from par bond prices.", "l1term"],
  ["Riding the yield curve", "Buying bonds longer than the horizon to sell at lower yields if an upward curve is unchanged.", "l1term"]
);
