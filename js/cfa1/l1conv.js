// CFA Level I · Fixed Income · Learning module 12: Yield-Based Bond Convexity and Portfolio Properties.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1conv = `
<p class="syl">CFA Level I · Fixed Income (11–14%) · Learning module 12 of 19 · Yield-Based Bond Convexity and Portfolio Properties</p>
<p>Duration treats the price-yield relationship as a straight line, but it's actually curved. Convexity measures that curvature and improves price estimates for larger yield changes. This lesson calculates convexity, combines it with duration, explains what affects convexity (including negative convexity in callable bonds), and shows how to find the duration and convexity of a portfolio.</p>

<h3>1. Convexity and the price estimate <span class="hot">Highly tested</span></h3>
<div class="formula">%ΔPrice ≈ (−ModDur × ΔYield) + (½ × Convexity × (ΔYield)²)<br>Approximate convexity = (PV<sub>−</sub> + PV<sub>+</sub> − 2 × PV<sub>0</sub>) / ((ΔYield)² × PV<sub>0</sub>)</div>
<div class="ex"><b>Example:</b> 10-year bond, 5% annual coupon, yield 4%: PV₀ = 108.111. At 3%: PV₋ = 117.060; at 5%: PV₊ = 100.000 (ΔYield = 1%).<br>ApproxModDur = (117.060 − 100.000) / (2 × 0.01 × 108.111) = <b>7.89</b>.<br>ApproxConvexity = (117.060 + 100.000 − 216.222) / (0.0001 × 108.111) = <b>77.57</b>.<br><b>Yield +100 bp:</b> duration alone: −7.89%; convexity adjustment: ½ × 77.57 × 0.01² = +0.39%; estimate = <b>−7.50%</b> (actual −7.50%).<br><b>Yield −100 bp:</b> +7.89% + 0.39% = <b>+8.28%</b>.</div>
<div class="trap"><b>Traps:</b> the convexity term is always <b>added</b> for an option-free bond (ΔYield² is positive whether yields rise or fall). Use decimals (0.01, not 1) for ΔYield, and keep convexity in the same units: some sources quote convexity divided by 100.</div>
<ul>
  <li><b>Money convexity</b> = convexity × full price (× position); the money version of the adjustment is ½ × money convexity × (ΔYield)².</li>
  <li>For a $1 million position in the bond above, a 100 bp move adds about ½ × 77.57 × 0.0001 × 1,000,000 ≈ <b>$3,878</b> from convexity.</li>
</ul>

<h3>2. Properties of convexity <span class="hot">Highly tested</span></h3>
<ul>
  <li>Option-free bonds have <b>positive convexity</b>: prices rise more when yields fall than they fall when yields rise. This benefits the holder, so investors pay for it (accept a lower yield).</li>
  <li>Convexity is higher for <b>longer maturity</b>, <b>lower coupon</b> and <b>lower yield</b> (same directions as duration).</li>
  <li>For the same duration, a bond or portfolio whose cash flows are more <b>spread out</b> over time (a barbell) has more convexity than one whose cash flows are concentrated around one date (a bullet).</li>
  <li><b>Callable bonds</b> show <b>negative convexity</b> at low yields: as yields fall toward the level where the bond is likely to be called, the price rise is capped near the call price ("price compression"). Their effective convexity is then negative.</li>
  <li><b>Putable bonds</b> have more positive convexity than option-free bonds when yields are high, because the put sets a floor on the price.</li>
</ul>
<table>
  <tr><th>Bond</th><th>When yields fall</th><th>When yields rise</th></tr>
  <tr><td>Option-free (positive convexity)</td><td>Price rises more than duration predicts</td><td>Price falls less than duration predicts</td></tr>
  <tr><td>Callable at low yields (negative convexity)</td><td>Price rises less than duration predicts</td><td>Price falls more than duration predicts</td></tr>
</table>

<h3>3. Portfolio duration and convexity</h3>
<div class="formula">Portfolio duration ≈ Σ w<sub>i</sub> × D<sub>i</sub> · Portfolio convexity ≈ Σ w<sub>i</sub> × C<sub>i</sub> (w<sub>i</sub> = share of portfolio market value)</div>
<div class="ex"><b>Example:</b> $4 million in a bond with duration 5.2 and convexity 40, and $6 million in a bond with duration 8.0 and convexity 90.<br>Portfolio duration = 0.4 × 5.2 + 0.6 × 8.0 = <b>6.88</b>. Portfolio convexity = 0.4 × 40 + 0.6 × 90 = <b>70</b>.</div>
<ul>
  <li>The weighted-average method is simple and works with bonds that have options (using effective durations), but it assumes all yields change by the same amount (a <b>parallel shift</b>).</li>
  <li>The alternative, using the portfolio's cash flow yield (its IRR), is more theoretically correct but can't handle embedded options and is rarely used.</li>
  <li>A portfolio's money duration is the sum of its positions' money durations, which is how managers hedge or target interest rate exposure.</li>
</ul>

<div class="how"><b>How it's tested:</b> approximate convexity from prices, estimating price changes with duration plus convexity (for rises and falls), properties of convexity, negative convexity of callable bonds, barbell vs bullet convexity, and portfolio duration and convexity as weighted averages.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Calculate approximate convexity and money convexity.</li>
  <li>Estimate a bond's percentage price change using duration and convexity.</li>
  <li>Describe the factors that affect convexity and explain negative convexity.</li>
  <li>Calculate portfolio duration and convexity and explain the limitations of the weighted-average method.</li>
</ul></div>
`;

window.QB_HARD.l1conv = [
  ["Using the same prices (PV0 = 100.00, PV− = 104.20, PV+ = 96.00 for ±50 bp), the approximate convexity is closest to:",
    ["80", "40", "8"],
    "Approx convexity = (PV− + PV+ − 2PV0) ÷ [(ΔYield)² × PV0] = (104.20 + 96.00 − 200) ÷ (0.000025 × 100) = 0.20 ÷ 0.0025 = 80.", "c"],
  ["A bond has an annual modified duration of 6.5 and annual convexity of 60. If its yield rises 100 bp, the estimated percentage price change is closest to:",
    ["−6.20%", "−6.50%", "−6.80%"],
    "%ΔP ≈ −6.5 × 0.01 + ½ × 60 × 0.01² = −6.50% + 0.30% = −6.20%. Convexity cushions the loss.", "c"],
  ["A portfolio is 60% in a bond with duration 4 and 40% in a bond with duration 9. The portfolio's duration is closest to:",
    ["6.0", "6.5", "5.0"],
    "Portfolio duration ≈ market-value-weighted average = 0.6 × 4 + 0.4 × 9 = 2.4 + 3.6 = 6.0 (assuming parallel shifts).", "c"],
  ["A bond is priced at 108.111. If its yield falls 100 bp the price is 117.060; if it rises 100 bp the price is 100.000. Its approximate convexity is closest to:",
    ["77.6", "7.9", "155.1"],
    "(117.060 + 100.000 − 216.222) / (0.0001 × 108.111) = 77.6. 7.9 is the modified duration; 155.1 doubles the convexity.", "c"],
  ["A bond has a modified duration of 7.89 and convexity of 77.57. If its yield rises 100 bp, the estimated percentage price change is closest to:",
    ["−7.50%", "−8.28%", "−7.89%"],
    "−7.89 × 0.01 + ½ × 77.57 × 0.0001 = −7.89% + 0.39% = −7.50%. −7.89% ignores convexity.", "c"],
  ["Using the same bond (ModDur 7.89, convexity 77.57), if its yield falls 100 bp, the estimated price change is closest to:",
    ["+8.28%", "+7.50%", "+7.89%"],
    "+7.89% + 0.39% = +8.28%. The convexity adjustment is added whether yields rise or fall.", "c"],
  ["For an option-free bond, positive convexity means that for equal rises and falls in yield:",
    ["Price gains exceed price losses", "Price losses exceed price gains", "Price gains equal price losses"],
    "The curved price-yield relationship makes gains from falling yields larger than losses from rising yields.", "r"],
  ["Which bond characteristics lead to higher convexity?",
    ["Longer maturity and lower coupon", "Shorter maturity and higher coupon", "Higher yield and higher coupon"],
    "Convexity rises with maturity and falls with coupon and yield.", "r"],
  ["Two portfolios have the same duration. Portfolio A holds short and long bonds (a barbell); Portfolio B holds bonds near one maturity (a bullet). Portfolio A most likely has:",
    ["Higher convexity", "Lower convexity", "The same convexity"],
    "More dispersed cash flows give more convexity for the same duration.", "r"],
  ["When yields fall close to the level at which a callable bond is likely to be called, the bond:",
    ["Shows negative convexity", "Shows more positive convexity", "Has a rising effective duration"],
    "The price rise is capped near the call price (price compression), so effective convexity turns negative.", "r"],
  ["A portfolio holds $4 million of a bond with duration 5.2 and $6 million of a bond with duration 8.0. The portfolio's duration is closest to:",
    ["6.88", "6.60", "13.20"],
    "0.4 × 5.2 + 0.6 × 8.0 = 6.88. 6.60 is a simple average; 13.20 adds the durations.", "c"],
  ["Using the same weights (40% and 60%), if the bonds' convexities are 40 and 90, the portfolio's convexity is:",
    ["70", "65", "130"],
    "0.4 × 40 + 0.6 × 90 = 70.", "c"],
  ["A key limitation of calculating portfolio duration as a weighted average of individual durations is that it assumes:",
    ["All yields change by the same amount", "No bonds have embedded options", "All bonds have the same maturity"],
    "The weighted-average approach assumes a parallel shift in yields. It can include bonds with options by using effective durations.", "r"],
  ["Investors are generally willing to accept a lower yield on a bond with more convexity because convexity:",
    ["Improves price outcomes as yields move", "Removes all credit risk from the bond", "Guarantees the bond's return"],
    "Higher convexity means bigger gains and smaller losses when yields change.", "r"],
];

window.GLOSSARY.push(
  ["Approximate duration and convexity","ApproxModDur = (PV− − PV+) ÷ (2ΔyPV0). ApproxCon = (PV− + PV+ − 2PV0) ÷ (Δy²PV0).","l1conv"],
  ["Duration + convexity","%ΔP ≈ −ModDur × Δy + ½ × Convexity × (Δy)².","l1conv"],
  ["Convexity adjustment", "½ × convexity × (Δyield)², added to the duration estimate.", "l1conv"],
  ["Negative convexity", "Callable bonds at low yields: price rises less than it falls for equal yield moves.", "l1conv"],
  ["Portfolio duration", "Market-value-weighted average of bond durations; assumes parallel shifts.", "l1conv"]
);
