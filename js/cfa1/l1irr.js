// CFA Level I · Fixed Income · Learning module 10: Interest Rate Risk and Return.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1irr = `
<p class="syl">CFA Level I · Fixed Income (11–14%) · Learning module 10 of 19 · Interest Rate Risk and Return</p>
<p>A bond's yield at purchase isn't necessarily the return the investor earns. This lesson breaks the return into its sources, shows how a change in rates affects the realized (horizon) return through two offsetting risks (reinvestment risk and price risk), and introduces Macaulay duration as the horizon where they balance, and the duration gap.</p>

<h3>1. Sources of return on a bond</h3>
<ol>
  <li><b>Coupon payments</b> (and principal at maturity).</li>
  <li><b>Interest on reinvested coupons</b> ("interest on interest").</li>
  <li><b>Capital gain or loss</b> if the bond is sold before maturity.</li>
</ol>
<ul>
  <li>An investor who buys at the YTM, holds to maturity, receives every payment and reinvests every coupon at the YTM earns exactly the YTM.</li>
  <li>A capital gain or loss is measured against the bond's <b>carrying value</b> (its amortized value at the original yield), not the purchase price. The move from purchase price toward par along the constant-yield path is part of the interest return.</li>
</ul>
<div class="ex"><b>Example (carrying value):</b> a 5-year 4% annual bond is bought at 95.67 (yield 5%). A year later its carrying value at 5% with 4 years left is 96.45. If it's sold at 97.00, the capital gain is 97.00 − 96.45 = <b>0.55</b>; the rise from 95.67 to 96.45 is accreted interest.</div>

<h3>2. Horizon yield: how rate changes affect realized return <span class="hot">Highly tested</span></h3>
<p>The <b>horizon yield</b> (realized yield) is the annualized return actually earned over the investment horizon: (total value at horizon / price paid)<sup>1/years</sup> − 1.</p>
<table>
  <tr><th>Risk</th><th>If rates rise</th><th>If rates fall</th><th>Matters most for</th></tr>
  <tr><td><b>Reinvestment risk</b></td><td>Coupons reinvested at higher rates (good)</td><td>Coupons reinvested at lower rates (bad)</td><td><b>Long</b> horizons (hold to maturity)</td></tr>
  <tr><td><b>Market price risk</b></td><td>Lower sale price (bad)</td><td>Higher sale price (good)</td><td><b>Short</b> horizons (sell early)</td></tr>
</table>
<div class="ex"><b>Example:</b> buy a 5-year 6% annual bond at 100 (YTM 6%). Right after purchase, yields rise to 7% and stay there.<br><b>Hold to maturity (5 years):</b> coupons reinvested at 7% grow to 6 × FV annuity factor (7%, 5) = 34.50; total = 134.50. Horizon yield = (134.50/100)<sup>1/5</sup> − 1 = <b>6.11%</b>, above the 6% YTM: reinvestment gains win.<br><b>Sell after 3 years:</b> reinvested coupons = 19.29; sale price (2 years left at 7%) = 98.19; total = 117.48. Horizon yield = <b>5.52%</b>.<br><b>Sell after 1 year:</b> 6 + 96.61 = 102.61 → <b>2.61%</b>: price loss dominates.</div>

<h3>3. Macaulay duration and the duration gap <span class="hot">Highly tested</span></h3>
<p><b>Macaulay duration</b> is the weighted-average time to receive a bond's cash flows (weights = PV of each cash flow / price). It's also the investment horizon at which reinvestment risk and price risk <b>offset</b> each other for a one-time parallel change in yields. (Calculation details are in the next lesson.) The 5-year 6% bond above has a Macaulay duration of 4.47 years.</p>
<div class="formula">Duration gap = Macaulay duration − investment horizon</div>
<table>
  <tr><th>Duration gap</th><th>Dominant risk</th><th>Investor is hurt by</th></tr>
  <tr><td><b>Positive</b> (duration &gt; horizon)</td><td>Market price risk</td><td><b>Rising</b> rates</td></tr>
  <tr><td><b>Negative</b> (duration &lt; horizon)</td><td>Reinvestment risk</td><td><b>Falling</b> rates</td></tr>
  <tr><td>Zero (duration = horizon)</td><td>The two offset</td><td>Neither (immunized, for a one-time parallel shift)</td></tr>
</table>
<div class="ex"><b>Example:</b> an investor with a 3-year horizon holds the bond above (duration 4.47). Gap = 4.47 − 3 = <b>+1.47</b>: exposed to rising rates, which is why the 3-year horizon yield fell to 5.52% when rates rose.</div>
<div class="trap"><b>Trap:</b> a long-horizon investor holding to maturity benefits from rising rates (better reinvestment); a short-horizon investor is hurt by them. "Interest rate risk" depends on the horizon.</div>

<div class="how"><b>How it's tested:</b> identifying sources of return, calculating a horizon yield after a rate change for different holding periods, whether reinvestment or price risk dominates, calculating and interpreting the duration gap, and capital gains measured against carrying value.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe the sources of return on a bond and when the investor earns the YTM.</li>
  <li>Calculate a horizon yield when rates change after purchase.</li>
  <li>Explain how reinvestment risk and market price risk depend on the investment horizon.</li>
  <li>Calculate and interpret the duration gap.</li>
</ul></div>
`;

window.QB_HARD.l1irr = [
  ["An investor with a 4-year horizon holds a bond with a Macaulay duration of 6 years. If yields rise right after purchase and stay higher, she is mainly exposed to:",
    ["Price risk, which outweighs the extra reinvestment income", "Reinvestment risk, which outweighs the decline in the bond's price", "Neither risk, because her duration gap is negative"],
    "Duration gap = 6 − 4 = +2 (positive): the capital loss on selling before maturity dominates the extra reinvestment income.", "r"],
  ["An investor will earn exactly the YTM on a bond bought at that yield if she holds it to maturity, all payments are made, and:",
    ["Coupons are reinvested at the YTM", "Rates rise after she buys the bond", "The bond is bought at a discount"],
    "Reinvesting at a different rate makes the realized return differ from the YTM.", "r"],
  ["An investor buys a 5-year 6% annual-coupon bond at par. Yields immediately rise to 7% and stay there. If she holds the bond to maturity, her horizon yield is closest to:",
    ["6.11%", "6.00%", "5.52%"],
    "Coupons reinvested at 7% → total 134.50; (134.50/100)^(1/5) − 1 = 6.11%. 5.52% is the 3-year horizon result.", "c"],
  ["Using the same bond (5-year, 6% coupon, bought at par, yields rise to 7%), if she sells after 3 years her horizon yield is closest to:",
    ["5.52%", "6.11%", "2.61%"],
    "Reinvested coupons 19.29 + sale price 98.19 = 117.48; (1.1748)^(1/3) − 1 = 5.52%. 2.61% is the 1-year result.", "c"],
  ["For an investor with a short investment horizon, an increase in interest rates right after purchase mainly creates:",
    ["A price loss that outweighs reinvestment gains", "Reinvestment gains that more than offset price losses", "No effect, because coupons are fixed"],
    "Over short horizons, market price risk dominates.", "r"],
  ["An investor holds a bond to maturity. If interest rates fall right after purchase, her realized return will most likely be:",
    ["Below the original YTM", "Above the original YTM", "Equal to the original YTM"],
    "Coupons are reinvested at lower rates, and there's no sale to capture a price gain.", "r"],
  ["A bond has a Macaulay duration of 4.47 years, and the investor's horizon is 3 years. The duration gap and the risk she is exposed to are:",
    ["+1.47; rising rates", "+1.47; falling rates", "−1.47; rising rates"],
    "Gap = 4.47 − 3 = +1.47. Positive gap → price risk dominates → hurt by rising rates.", "c"],
  ["A negative duration gap means the investor is mainly exposed to:",
    ["Reinvestment risk from falling rates", "Price risk from a rise in rates", "Credit risk from rating downgrades"],
    "Horizon longer than duration: reinvestment risk dominates, so falling rates hurt.", "r"],
  ["Macaulay duration can be interpreted as the investment horizon at which:",
    ["Price and reinvestment effects offset", "All of the bond's coupons have been received", "The bond's price equals par"],
    "For a one-time parallel shift, price risk and reinvestment risk cancel at a horizon equal to Macaulay duration.", "r"],
  ["A 5-year 4% bond bought at 95.67 (yield 5%) has a carrying value of 96.45 one year later. If it's sold then at 97.00, the capital gain is:",
    ["0.55", "1.33", "0.78"],
    "Gain is measured against carrying value: 97.00 − 96.45 = 0.55. The 0.78 rise from 95.67 to 96.45 is accreted interest.", "c"],
  ["Which source of bond return becomes relatively more important the longer the investment horizon?",
    ["Reinvested coupon income", "Capital gains from selling", "The bond's call price"],
    "Over long horizons, interest on interest grows to be a large part of total return.", "r"],
  ["Interest rates rise sharply just after two investors buy the same 10-year bond. Which investor is most likely to benefit?",
    ["One holding the bond to maturity", "One planning to sell in a year", "Neither, since the coupon is fixed"],
    "Over a long horizon, reinvesting coupons at higher rates outweighs the price fall; a short-horizon seller takes the price loss.", "s"],
];

window.GLOSSARY.push(
  ["Duration gap","MacDur − investment horizon. Positive → price risk dominates (hurt by rising rates); negative → reinvestment risk dominates.","l1irr"],
  ["Horizon yield", "Annualized return actually realized over the investment horizon.", "l1irr"],
  ["Reinvestment risk vs price risk", "Risk from reinvesting coupons at lower rates vs risk of selling at a lower price after rates rise.", "l1irr"],
  ["Carrying value", "Bond's amortized value at its original yield; capital gains are measured against it.", "l1irr"]
);
