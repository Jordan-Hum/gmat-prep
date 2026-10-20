// CFA Level I · Fixed Income · Learning module 6: Fixed-Income Bond Valuation: Prices and Yields.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1bondval = `
<p class="syl">CFA Level I · Fixed Income (11–14%) · Learning module 6 of 19 · Bond Valuation: Prices and Yields</p>
<p>This is the core calculation lesson for Fixed Income. You'll price a bond from its yield, find the yield from its price, understand why prices and yields move in opposite directions, price bonds with spot rates, separate the full price into flat price and accrued interest, and estimate prices for bonds that rarely trade (matrix pricing).</p>

<h3>1. A bond's price is the present value of its cash flows <span class="hot">Highly tested</span></h3>
<div class="formula">PV = PMT/(1 + r)¹ + PMT/(1 + r)² + … + (PMT + FV)/(1 + r)<sup>N</sup><br>r = market discount rate (yield) per period · N = number of periods · PMT = coupon per period · FV = par</div>
<div class="ex"><b>Example 1:</b> 5-year bond, 6% annual coupon, market yield 5%.<br>N = 5, I/Y = 5, PMT = 6, FV = 100, CPT PV = <b>104.33</b> (premium, since coupon &gt; yield).<br><b>Example 2:</b> 10-year bond, 4% coupon paid semiannually, yield 5% (2.5% per half-year).<br>N = 20, I/Y = 2.5, PMT = 2, FV = 100, CPT PV = <b>92.21</b> (discount).<br><b>Example 3:</b> 10-year zero-coupon bond at a 4% annual yield: 100 / 1.04¹⁰ = <b>67.56</b>.<br><b>Example 4:</b> perpetual bond paying 5 a year at a 6.25% yield: 5 / 0.0625 = <b>80</b>.</div>
<div class="calc"><b>BA II Plus:</b> [2nd][FV] (CLR TVM) · enter N, I/Y, PMT, FV · [CPT][PV]. For semiannual bonds, double N and halve the coupon and the yield.</div>

<h3>2. Yield to maturity <span class="hot">Highly tested</span></h3>
<p>The <b>yield to maturity (YTM)</b> is the single discount rate that makes the PV of a bond's cash flows equal its price (its internal rate of return). It's the investor's return <b>only if</b> the bond is held to maturity, all payments are made in full and on time, and all coupons are reinvested at the YTM.</p>
<div class="ex"><b>Example:</b> a 4-year bond with a 5% annual coupon trades at 96.50.<br>N = 4, PV = −96.50, PMT = 5, FV = 100, CPT I/Y = <b>6.01%</b>.</div>

<h3>3. How bond prices behave <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Inverse relationship</b>: when yields rise, prices fall, and vice versa.</li>
  <li><b>Convexity effect</b>: for the same change in yield, the price rise when yields fall is larger than the price fall when yields rise. A 5-year 6% bond priced at 100 rises to 104.33 if yields fall 1% but falls only to 95.90 if they rise 1%.</li>
  <li><b>Coupon effect</b>: lower-coupon bonds are more sensitive to yield changes than higher-coupon bonds of the same maturity (zeros are most sensitive).</li>
  <li><b>Maturity effect</b>: longer-maturity bonds are generally more sensitive than shorter ones. A 1% rise in yield cuts a 6% 20-year bond by about 10.6 points but a 6% 5-year bond by about 4.1 points.</li>
  <li><b>Constant-yield price trajectory ("pull to par")</b>: if yields don't change, a premium bond's price falls toward par and a discount bond's price rises toward par as maturity approaches. The 5-year 6% bond at 104.33 would be worth 103.55 a year later at the same 5% yield.</li>
</ul>

<h3>4. Pricing with spot rates</h3>
<p>Instead of one yield, each cash flow can be discounted at the <b>spot rate</b> (zero-coupon yield) for its own maturity. This gives the <b>arbitrage-free</b> price.</p>
<div class="ex"><b>Example:</b> 3-year bond, 4% annual coupon; spot rates 2% (1-year), 3% (2-year), 4% (3-year).<br>PV = 4/1.02 + 4/1.03² + 104/1.04³ = 3.92 + 3.77 + 92.46 = <b>100.15</b>.<br>Its YTM (solving N = 3, PV = −100.15, PMT = 4, FV = 100) is about 3.95%: a weighted blend of the spot rates, closest to the 3-year rate because most of the value comes at the end.</div>

<h3>5. Full price, flat price and accrued interest <span class="hot">Highly tested</span></h3>
<p>Between coupon dates, the buyer pays the seller the <b>accrued interest</b>: the seller's share of the next coupon.</p>
<div class="formula">Accrued interest (AI) = (t / T) × PMT, where t = days since the last coupon and T = days in the coupon period<br>Full (dirty, invoice) price = PV at last coupon date × (1 + r)<sup>t/T</sup><br>Flat (clean, quoted) price = full price − accrued interest</div>
<ul>
  <li>Prices are quoted <b>flat</b> so that the quote doesn't jump on coupon dates; buyers pay the <b>full</b> price.</li>
  <li>Day counts: <b>actual/actual</b> (usually government bonds) or <b>30/360</b> (usually corporate bonds: every month counts as 30 days).</li>
</ul>
<div class="ex"><b>Example:</b> 5% coupon paid semiannually (2.50 per period), yield 6% (3% per period), 3 years (6 periods) left at the last coupon date; 60 of 180 days have passed (30/360).<br>PV at last coupon: N = 6, I/Y = 3, PMT = 2.5, FV = 100 → 97.29.<br>Full price = 97.29 × 1.03<sup>60/180</sup> = <b>98.25</b>.<br>AI = 2.50 × 60/180 = <b>0.83</b>. Flat price = 98.25 − 0.83 = <b>97.42</b>.</div>

<h3>6. Matrix pricing</h3>
<p>For bonds that rarely trade (or a new issue), estimate the yield from <b>comparable bonds</b> (similar credit quality, coupon and maturity), interpolating by maturity, then price the bond at that yield.</p>
<div class="ex"><b>Example:</b> comparable 3-year and 5-year bonds yield 3.2% and 4.0%. The estimated 4-year yield = 3.2% + (4.0% − 3.2%) × (4 − 3)/(5 − 3) = <b>3.6%</b>.<br>A 4-year 4% annual-coupon bond is then priced at N = 4, I/Y = 3.6, PMT = 4, FV = 100 → <b>101.47</b>.</div>
<p>Matrix pricing is also used to set the yield on a new issue: take the benchmark government yield and add the credit spread of comparable bonds.</p>

<div class="how"><b>How it's tested:</b> pricing annual and semiannual bonds from a yield, solving for YTM, price-yield properties (inverse, convexity, coupon and maturity effects, pull to par), pricing with spot rates, full vs flat price and accrued interest, and matrix pricing with interpolation.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Calculate a bond's price given its yield, and its YTM given its price.</li>
  <li>Describe the relationships between price and yield, coupon and maturity, and the constant-yield price trajectory.</li>
  <li>Price a bond using spot rates.</li>
  <li>Calculate accrued interest, the full price and the flat price.</li>
  <li>Use matrix pricing to estimate the price or yield of a bond.</li>
</ul></div>
`;

window.QB_HARD.l1bondval = [
  ["A 3-year bond pays a 5% annual coupon. If its yield to maturity is 6%, its price per 100 of par is closest to:",
    ["97.33", "102.78", "100.00"],
    "PV = 5/1.06 + 5/1.06² + 105/1.06³ = 4.717 + 4.450 + 88.160 = 97.33. Coupon below yield means a discount price.", "c"],
  ["A bond pays a 6% annual coupon semiannually (3.00 per 100 every six months). Using 30/360, 60 days have passed in the 180-day coupon period, and the flat price is 98.50. The full price is closest to:",
    ["99.50", "98.50", "101.50"],
    "Accrued interest = 60/180 × 3.00 = 1.00. Full price = flat price + accrued interest = 98.50 + 1.00 = 99.50.", "c"],
  ["Using spot rates of 3% (1 year) and 4% (2 years), the arbitrage-free price of a 2-year bond with a 5% annual coupon is closest to:",
    ["101.93", "101.89", "100.00"],
    "Discount each cash flow at its own spot rate: 5/1.03 + 105/1.04² = 4.854 + 97.078 = 101.93.", "c"],
  ["A 5-year bond pays a 6% annual coupon. If the market yield is 5%, its price per 100 of par is closest to:",
    ["104.33", "95.79", "100.00"],
    "N = 5, I/Y = 5, PMT = 6, FV = 100 → PV = 104.33. A coupon above the yield means a premium.", "c"],
  ["A 10-year bond pays a 4% coupon semiannually. If its yield is 5%, its price per 100 of par is closest to:",
    ["92.21", "92.28", "107.79"],
    "N = 20, I/Y = 2.5, PMT = 2, FV = 100 → 92.21. 92.28 treats the bond as annual-pay.", "c"],
  ["A 10-year zero-coupon bond is priced to yield 4% (annual compounding). Its price per 100 of par is closest to:",
    ["67.56", "71.43", "96.15"],
    "100 / 1.04¹⁰ = 67.56. 71.43 uses simple interest (100 / 1.40); 96.15 discounts only one year.", "c"],
  ["A 4-year bond with a 5% annual coupon is priced at 96.50. Its yield to maturity is closest to:",
    ["6.01%", "5.18%", "5.88%"],
    "N = 4, PV = −96.50, PMT = 5, FV = 100 → I/Y = 6.01%. 5.18% is the current yield.", "c"],
  ["Yield to maturity equals the investor's realized return only if the bond is held to maturity, all payments are made, and:",
    ["Coupons are reinvested at the YTM", "Yields rise after the bond is bought", "The bond is bought at par"],
    "YTM assumes reinvestment of coupons at the same yield.", "r"],
  ["A 6% 5-year bond trades at par. If yields fall 1% its price rises to 104.33; if yields rise 1% it falls to 95.90. This asymmetry reflects:",
    ["Convexity", "The coupon effect", "Pull to par"],
    "Price gains from a fall in yield exceed losses from an equal rise because the price-yield curve is convex.", "r"],
  ["All else equal, which bond's price is most sensitive to a change in market yields?",
    ["A 20-year 2% coupon bond", "A 5-year 6% coupon bond", "A 20-year 6% coupon bond"],
    "Longer maturity and lower coupon both increase sensitivity.", "r"],
  ["A bond is bought at a premium. If its yield stays the same until maturity, its price will:",
    ["Fall gradually toward par", "Rise gradually above par", "Remain at today's price"],
    "Under a constant yield, premium bonds decline toward par and discount bonds rise toward par.", "r"],
  ["A 3-year bond has a 4% annual coupon. Spot rates are 2% (1-year), 3% (2-year) and 4% (3-year). Its arbitrage-free price is closest to:",
    ["100.15", "102.83", "100.00"],
    "4/1.02 + 4/1.03² + 104/1.04³ = 100.15. 102.83 discounts everything at 3%.", "c"],
  ["A bond with a 5% coupon paid semiannually (2.50 per period) has 60 days elapsed in a 180-day coupon period. Its accrued interest per 100 of par is closest to:",
    ["0.83", "1.67", "0.42"],
    "AI = 2.50 × 60/180 = 0.83. 1.67 uses the annual coupon.", "c"],
  ["For the same bond (yield 3% per period, PV of 97.29 at the last coupon date, 60 of 180 days elapsed), the full price is closest to:",
    ["98.25", "97.29", "97.42"],
    "Full = 97.29 × 1.03^(60/180) = 98.25. The flat price is 98.25 − 0.83 = 97.42.", "c"],
  ["Bond prices are usually quoted on a flat (clean) basis because:",
    ["Flat prices don't jump on coupon dates", "Accrued interest is never paid by buyers", "Full prices ignore the coupon"],
    "The flat price excludes accrued interest, so quotes don't drop each time a coupon is paid. Buyers still pay the full price.", "r"],
  ["Comparable 3-year and 5-year bonds yield 3.2% and 4.0%. Using linear interpolation, the estimated yield for a 4-year bond is:",
    ["3.6%", "3.4%", "4.0%"],
    "3.2% + (0.8% × 1/2) = 3.6%.", "c"],
  ["Matrix pricing is most likely used to:",
    ["Value bonds that rarely trade", "Calculate accrued interest", "Set government auction yields"],
    "It estimates yields for illiquid or new bonds from comparable bonds.", "r"],
  ["A perpetual bond pays an annual coupon of 5 per 100 of par. If the required yield is 6.25%, its price is:",
    ["80.00", "125.00", "93.75"],
    "PV of a perpetuity = 5 / 0.0625 = 80.00.", "c"],
];

window.GLOSSARY.push(
  ["Full vs flat price","Full (dirty) price = flat (clean) price + accrued interest. Accrued interest = (t/T) × coupon.","l1bondval"],
  ["Yield to maturity (YTM)", "Discount rate that equates a bond's cash flows to its price; assumes held to maturity and reinvestment at YTM.", "l1bondval"],
  ["Accrued interest", "(Days since last coupon / days in period) × coupon.", "l1bondval"],
  ["Constant-yield price trajectory", "Pull to par: premium bonds fall and discount bonds rise toward par if yields don't change.", "l1bondval"],
  ["Matrix pricing", "Estimating an illiquid bond's yield from comparable bonds, interpolating by maturity.", "l1bondval"],
  ["Arbitrage-free price", "Price found by discounting each cash flow at its own spot rate.", "l1bondval"]
);
