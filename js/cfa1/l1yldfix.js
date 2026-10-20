// CFA Level I · Fixed Income · Learning module 7: Yield and Yield Spread Measures for Fixed-Rate Bonds.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1yldfix = `
<p class="syl">CFA Level I · Fixed Income (11–14%) · Learning module 7 of 19 · Yield and Yield Spread Measures for Fixed-Rate Bonds</p>
<p>Yields are quoted in different ways, so you need to convert them to compare bonds. This lesson covers converting yields between compounding frequencies, the main yield measures (current yield, simple yield, YTM, yield to call, yield to worst), and the spreads used to compare a bond's yield with a benchmark (G-spread, I-spread, Z-spread and OAS).</p>

<h3>1. Periodicity and converting yields <span class="hot">Highly tested</span></h3>
<p>A yield quoted as an annual rate with a given number of compounding periods per year (its <b>periodicity</b>) must be converted before comparing it with yields of a different periodicity.</p>
<div class="formula">(1 + APR<sub>m</sub>/m)<sup>m</sup> = (1 + APR<sub>n</sub>/n)<sup>n</sup><br>Effective annual rate = (1 + APR/m)<sup>m</sup> − 1</div>
<div class="ex"><b>Example 1:</b> a 6% yield on a semiannual bond basis (3% per half-year).<br>Annual-pay equivalent: 1.03² − 1 = <b>6.09%</b>.<br>Quarterly equivalent: 4 × (1.03<sup>1/2</sup> − 1) = <b>5.96%</b>.<br>Monthly equivalent: 12 × (1.03<sup>1/6</sup> − 1) = 5.93%.<br><b>Example 2:</b> a mortgage yields 4.8% with monthly compounding (0.4% a month). Semiannual bond basis: 2 × (1.004⁶ − 1) = <b>4.85%</b>.</div>
<div class="trap"><b>Trap:</b> more frequent compounding → a <b>lower</b> quoted rate for the same effective return. Converting to a less frequent periodicity raises the quoted rate.</div>
<ul>
  <li><b>Street convention</b> yield assumes payments on scheduled dates; the <b>true yield</b> uses actual payment dates (weekends and holidays), so it's slightly lower.</li>
  <li><b>Government equivalent yield</b> restates a corporate (30/360) yield on an actual/actual basis.</li>
</ul>

<h3>2. Yield measures <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Measure</th><th>Formula / idea</th></tr>
  <tr><td><b>Current yield</b></td><td>Annual coupon / flat price. Ignores price gains or losses and reinvestment</td></tr>
  <tr><td><b>Simple yield</b></td><td>(Annual coupon + straight-line amortized gain, or − amortized loss) / flat price (used in Japan)</td></tr>
  <tr><td><b>Yield to maturity</b></td><td>IRR of all cash flows to maturity</td></tr>
  <tr><td><b>Yield to call (YTC)</b></td><td>IRR assuming the bond is called on a given call date at the call price</td></tr>
  <tr><td><b>Yield to worst</b></td><td>The <b>lowest</b> of the YTM and all the yields to call: the most conservative measure for a callable bond</td></tr>
  <tr><td><b>Option-adjusted yield</b></td><td>The yield after removing the value of the embedded option (for a callable bond, the yield if it were option-free; lower than the YTM)</td></tr>
</table>
<div class="ex"><b>Example 1:</b> a 5-year bond with a 6% coupon trades at 104.<br>Current yield = 6 / 104 = <b>5.77%</b>.<br>Simple yield: the 4-point premium is lost over 5 years (0.80 a year): (6 − 0.80) / 104 = <b>5.00%</b>.<br><b>Example 2:</b> a 5-year 7% annual-coupon bond trades at 105. It's callable in 2 years at 102 or in 3 years at 101.<br>YTM: N = 5, PV = −105, PMT = 7, FV = 100 → 5.82%.<br>YTC (2 years): N = 2, PV = −105, PMT = 7, FV = 102 → 5.27%.<br>YTC (3 years): N = 3, PV = −105, PMT = 7, FV = 101 → 5.46%.<br>Yield to worst = <b>5.27%</b>.</div>

<h3>3. Yield spreads <span class="hot">Highly tested</span></h3>
<p>A bond's yield = <b>benchmark yield</b> (reflects macro factors: expected inflation, real rates; usually government bonds) + <b>spread</b> (reflects issuer-specific factors: credit risk, liquidity, taxes).</p>
<table>
  <tr><th>Spread</th><th>Measured over…</th></tr>
  <tr><td><b>G-spread</b></td><td>The yield of an actual or interpolated <b>government bond</b> with the same maturity</td></tr>
  <tr><td><b>I-spread</b> (interpolated spread)</td><td>The <b>swap rate</b> of the same maturity</td></tr>
  <tr><td><b>Z-spread</b> (zero-volatility spread)</td><td>A <b>constant spread added to each government spot rate</b> so that the PV of the bond's cash flows equals its price. More accurate than the G-spread when the curve isn't flat</td></tr>
  <tr><td><b>Option-adjusted spread (OAS)</b></td><td>The Z-spread with the option's value removed: <b>OAS = Z-spread − option value (in bp)</b>. For a callable bond, OAS &lt; Z-spread; for a putable bond, OAS &gt; Z-spread</td></tr>
</table>
<div class="ex"><b>Example:</b> a 5-year corporate bond yields 5.40%. Government bonds: 4-year 3.80%, 6-year 4.20%, so the interpolated 5-year yield = <b>4.00%</b>. G-spread = 5.40 − 4.00 = <b>140 bp</b>. If the 5-year swap rate is 4.30%, the I-spread = <b>110 bp</b>.<br>Z-spread check: a 3-year 5% annual bond with spot rates of 3%, 3.5% and 4% and a Z-spread of 120 bp is priced at 5/1.042 + 5/1.047² + 105/1.052³ = <b>99.55</b>.</div>

<div class="how"><b>How it's tested:</b> converting yields between periodicities, current and simple yield, YTC and yield to worst for callable bonds, G-spread with interpolation, I-spread, Z-spread definition and OAS vs Z-spread for callable and putable bonds.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Convert yields between compounding periodicities and to an effective annual rate.</li>
  <li>Calculate current yield, simple yield, YTM, yield to call and yield to worst.</li>
  <li>Calculate and interpret the G-spread and I-spread.</li>
  <li>Describe the Z-spread and OAS and how they differ for bonds with embedded options.</li>
</ul></div>
`;

window.QB_HARD.l1yldfix = [
  ["A bond with a 5% annual coupon trades at a flat price of 95. Its current yield is closest to:",
    ["5.26%", "5.00%", "4.75%"],
    "Current yield = annual coupon ÷ flat price = 5 ÷ 95 = 5.26%.", "c"],
  ["A bond has a yield to maturity of 6.00% quoted on a semiannual bond basis. The equivalent annual-pay yield is closest to:",
    ["6.09%", "6.00%", "5.91%"],
    "(1 + 0.06/2)² − 1 = 1.0609 − 1 = 6.09%.", "c"],
  ["The spread of a corporate bond's yield over the actual or interpolated yield of a government bond with the same maturity is the:",
    ["G-spread", "I-spread", "Z-spread"],
    "G-spread uses government bond yields; I-spread uses swap rates; the Z-spread is a constant spread over the entire spot curve.", "r"],
  ["For a callable bond, the option-adjusted spread (OAS) is:",
    ["Lower than its Z-spread", "Higher than its Z-spread", "Equal to its Z-spread"],
    "OAS = Z-spread − option cost. For a callable bond the investor is short the call, so part of the Z-spread compensates for the option and the OAS is smaller.", "r"],
  ["A bond yields 6% on a semiannual bond basis. The equivalent yield with quarterly compounding is closest to:",
    ["5.96%", "6.09%", "6.05%"],
    "4 × (1.03^0.5 − 1) = 5.96%. 6.09% is the annual-pay equivalent.", "c"],
  ["A mortgage yields 4.8% compounded monthly. Its equivalent yield on a semiannual bond basis is closest to:",
    ["4.85%", "4.80%", "4.91%"],
    "2 × (1.004⁶ − 1) = 4.85%. 4.91% is the effective annual rate.", "c"],
  ["Holding the effective annual return constant, more frequent compounding means the quoted annual rate is:",
    ["Lower", "Higher", "Unchanged"],
    "More compounding periods earn interest on interest, so a lower stated rate gives the same effective return.", "r"],
  ["A 5-year bond with a 6% annual coupon trades at 104. Its simple yield is closest to:",
    ["5.00%", "5.77%", "6.54%"],
    "(6 − 4/5) / 104 = 5.00%. 5.77% is the current yield; 6.54% adds the amortized premium instead of subtracting it.", "c"],
  ["A 5-year 7% annual-coupon bond trades at 105 and is callable in 2 years at 102. Its yield to call is closest to:",
    ["5.27%", "5.82%", "6.67%"],
    "N = 2, PV = −105, PMT = 7, FV = 102 → 5.27%. 5.82% is the YTM; 6.67% is the current yield.", "c"],
  ["The bond above has a YTM of 5.82%, a yield to first call of 5.27% and a yield to second call of 5.46%. Its yield to worst is:",
    ["5.27%", "5.46%", "5.82%"],
    "Yield to worst is the lowest of the YTM and the yields to call.", "c"],
  ["A 5-year corporate bond yields 5.40%. Government bonds maturing in 4 and 6 years yield 3.80% and 4.20%. The G-spread is:",
    ["140 bp", "160 bp", "120 bp"],
    "Interpolated 5-year government yield = 4.00%; 5.40 − 4.00 = 140 bp.", "c"],
  ["The yield spread of a bond over the swap rate of the same maturity is the:",
    ["I-spread", "G-spread", "Z-spread"],
    "The G-spread uses government yields; the Z-spread is added to the spot curve.", "r"],
  ["The Z-spread is best described as the:",
    ["Constant spread over each spot rate", "Spread over the swap rate of the same maturity", "Spread after removing the value of any options"],
    "The Z-spread is added to every point on the government spot curve; the OAS removes the option value.", "r"],
  ["For a putable bond, the option-adjusted spread is most likely:",
    ["Greater than its Z-spread", "Less than its Z-spread", "Equal to its Z-spread"],
    "The investor owns the put, which lowers the bond's yield and Z-spread; removing the option value raises the spread: OAS > Z-spread.", "r"],
  ["In a bond's yield, the benchmark (government) component mainly reflects:",
    ["Expected inflation and real rates", "The issuer's own credit risk", "The bond's trading liquidity"],
    "Macro factors drive the benchmark; issuer-specific credit and liquidity risk drive the spread.", "r"],
];

window.GLOSSARY.push(
  ["Yield measures","YTM (held to maturity, reinvest at YTM), current yield (coupon ÷ flat price), yield-to-call, yield-to-worst.","l1yldfix"],
  ["Spreads","G-spread: over government yield. I-spread: over swap rate. Z-spread: over the spot curve. OAS = Z-spread − option value.","l1yldfix"],
  ["Periodicity conversion", "(1 + APRm/m)^m = (1 + APRn/n)^n.", "l1yldfix"],
  ["Simple yield", "(Coupon ± straight-line amortized discount or premium) / flat price.", "l1yldfix"],
  ["Yield to worst", "Lowest of the YTM and all yields to call.", "l1yldfix"],
  ["G-spread / I-spread", "Spread over interpolated government yield / over the swap rate.", "l1yldfix"],
  ["Z-spread vs OAS", "Constant spread over spot curve vs Z-spread minus option value.", "l1yldfix"]
);
