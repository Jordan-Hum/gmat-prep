// CFA Level I · Alternative Investments · Learning module 5: Natural Resources.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1natres = `
<p class="syl">CFA Level I · Alternative Investments (7–10%) · Learning module 5 of 7 · Natural Resources</p>
<p>Natural resources include commodities (energy, metals, agricultural products) and the land that produces them (farmland and timberland). This lesson covers how to invest in them, the three sources of return on commodity futures (spot, roll and collateral), contango and backwardation and the theories behind them, the economics of farmland and timberland, and their role in a portfolio.</p>

<h3>1. Types and ways to invest</h3>
<ul>
  <li><b>Commodities</b>: energy (oil, gas), metals (precious: gold, silver; industrial/base: copper, aluminium), agriculture (grains, softs such as coffee and sugar, livestock).</li>
  <li><b>Land</b>: <b>farmland</b> (row crops and permanent crops such as orchards) and <b>timberland</b> (forests grown for timber).</li>
</ul>
<table>
  <tr><th>Method</th><th>Notes</th></tr>
  <tr><td>Physical ownership</td><td>Practical mainly for precious metals; storage and insurance costs</td></tr>
  <tr><td><b>Derivatives</b> (futures, forwards, swaps)</td><td>Most common way to get commodity exposure; requires rolling contracts</td></tr>
  <tr><td>Commodity ETFs / ETNs and index funds</td><td>Easy access; returns depend on futures roll and fees</td></tr>
  <tr><td>Shares of commodity producers</td><td>Indirect exposure; also carry equity market and company-specific risk, so they're more correlated with stocks</td></tr>
  <tr><td>Managed futures funds</td><td>Active trading of futures by commodity trading advisors</td></tr>
  <tr><td>Direct land ownership or funds</td><td>Farmland and timberland, often through private funds or listed REITs</td></tr>
</table>

<h3>2. Sources of return on commodity futures <span class="hot">Highly tested</span></h3>
<div class="formula">Total return = spot price return + roll return + collateral return<br>Roll return ≈ (price of expiring contract − price of new contract) / price of expiring contract</div>
<ul>
  <li><b>Spot price return</b>: change in the commodity's spot price.</li>
  <li><b>Roll return</b>: gain or loss from selling the expiring contract and buying the next one.
    <ul>
      <li><b>Backwardation</b> (futures prices <b>below</b> spot; curve slopes down): the long rolls into cheaper contracts → <b>positive</b> roll return.</li>
      <li><b>Contango</b> (futures prices <b>above</b> spot; curve slopes up): the long rolls into dearer contracts → <b>negative</b> roll return.</li>
    </ul>
  </li>
  <li><b>Collateral return</b>: interest earned on the cash or Treasury bills held as collateral (a futures position needs only margin, so the rest of the money earns interest).</li>
</ul>
<div class="ex"><b>Example 1:</b> spot price rises 4%, roll return +2% (backwardation), collateral earns 3%: total = <b>9%</b>.<br><b>Example 2:</b> an investor rolls from an expiring contract at 60 into the next at 62 (contango): roll return = (60 − 62) / 60 = <b>−3.33%</b>. With spot +5% and collateral 4%, total ≈ 5% − 3.33% + 4% = <b>5.67%</b>.</div>

<h3>3. Why curves are in contango or backwardation</h3>
<table>
  <tr><th>Theory</th><th>Idea</th></tr>
  <tr><td><b>Insurance theory</b> (Keynes)</td><td>Producers hedge by selling futures and pay speculators a premium to take the risk, so futures prices are below expected spot prices: <b>backwardation</b> is normal</td></tr>
  <tr><td><b>Hedging pressure hypothesis</b></td><td>Both producers (sell futures) and consumers (buy futures) hedge; which side dominates determines backwardation or contango</td></tr>
  <tr><td><b>Theory of storage</b></td><td>Futures prices reflect storage costs and the <b>convenience yield</b> of holding inventory. Low inventories → high convenience yield → backwardation; ample inventories → contango</td></tr>
</table>
<p>Recall the cost-of-carry model: F = S × e<sup>(r + storage − convenience yield)T</sup>.</p>

<h3>4. Farmland and timberland</h3>
<table>
  <tr><th></th><th>Farmland</th><th>Timberland</th></tr>
  <tr><td>Return sources</td><td>Crop sales (harvest income) and land value appreciation</td><td>Timber sales (trees grow each year) and land value</td></tr>
  <tr><td>Flexibility</td><td>Row crops must be harvested when ripe</td><td><b>Harvest can be delayed</b> to wait for better prices while trees keep growing</td></tr>
  <tr><td>Risks</td><td>Weather, crop prices, water, regulation</td><td>Fire, pests, timber prices, environmental rules</td></tr>
</table>
<p>Both offer inflation protection, low correlation with financial assets, and growing ESG appeal (e.g. carbon sequestration for forests), but are illiquid and valued by appraisal.</p>

<h3>5. Risk, return and diversification</h3>
<ul>
  <li>Commodities have <b>low correlation</b> with stocks and bonds and tend to rise with <b>inflation</b> (especially unexpected inflation), so they diversify portfolios and hedge inflation.</li>
  <li>They're volatile, produce no income themselves (returns come from price changes, roll and collateral), and are affected by supply shocks, weather and geopolitics.</li>
  <li>Long-run commodity returns have often been modest; roll costs in persistent contango can erode returns.</li>
</ul>

<div class="how"><b>How it's tested:</b> components of commodity futures returns, the sign of roll return in contango vs backwardation, calculating total returns, the insurance, hedging pressure and storage theories, timberland vs farmland, ways to invest, and commodities' role as diversifiers and inflation hedges.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe types of natural resources and ways to invest in them.</li>
  <li>Calculate and explain spot, roll and collateral returns.</li>
  <li>Explain contango and backwardation and the theories behind them.</li>
  <li>Compare farmland and timberland and describe the portfolio role of natural resources.</li>
</ul></div>
`;

window.QB_HARD.l1natres = [
  ["When a commodity futures curve is in backwardation, the roll return on a long futures position is:",
    ["Positive", "Negative", "Zero"],
    "In backwardation, longer-dated futures trade below near-dated ones; rolling into a cheaper contract that converges up toward spot produces a positive roll return.", "r"],
  ["A key advantage of timberland over row-crop farmland as an investment is that:",
    ["Harvests can wait for better prices as trees keep growing", "Crops must be harvested every year, which gives a steadier income", "It produces income every quarter regardless of prices"],
    "Timber's biological growth gives flexibility to wait for better prices; row crops must be harvested when ready.", "r"],
  ["The return on a fully collateralized commodity futures position consists of:",
    ["Spot, roll and collateral returns", "Spot and dividend returns only", "Roll and convenience yield only"],
    "Total return = spot price return + roll return + interest on collateral.", "r"],
  ["A commodity's spot price rises 4%, roll return is +2% and collateral earns 3%. The total return is:",
    ["9%", "6%", "7%"],
    "4% + 2% + 3% = 9%.", "c"],
  ["An investor rolls a long position from an expiring contract at 60 into the next contract at 62. The roll return is closest to:",
    ["−3.3%", "+3.3%", "−3.2%"],
    "(60 − 62)/60 = −3.33%: rolling into a more expensive contract in contango.", "c"],
  ["A commodity futures curve in which futures prices are above the spot price is in:",
    ["Contango", "Backwardation", "Equilibrium"],
    "Contango = upward-sloping curve; it produces negative roll return for longs.", "r"],
  ["According to the theory of storage, a commodity with very low inventories is most likely to have:",
    ["High convenience yield, backwardation", "A low convenience yield and contango", "No convenience yield at all"],
    "Scarcity makes holding the physical commodity valuable, pushing spot above futures.", "r"],
  ["Keynes's insurance theory says futures prices tend to be below expected future spot prices because:",
    ["Producers pay speculators to take price risk", "Consumers hedge much more than producers do", "Storage costs exceed the convenience yield"],
    "Producers hedging by selling futures must offer speculators a risk premium, creating normal backwardation.", "r"],
  ["Compared with commodity futures, investing in shares of commodity producers:",
    ["Adds equity market risk", "Gives purer commodity exposure", "Avoids company-specific risk"],
    "Producer shares also reflect the stock market, management and costs, so they're more correlated with equities.", "r"],
  ["Commodities are often added to portfolios mainly because they:",
    ["Tend to rise with inflation", "Pay steady, predictable income", "Move closely with government bonds"],
    "Commodities have low correlation with stocks and bonds and tend to perform well when inflation rises.", "r"],
  ["In a fully collateralized commodity futures position, the collateral return comes from:",
    ["Interest on the cash held as collateral", "Dividends paid by commodity producers", "Storage fees paid by other traders"],
    "Only margin is needed for futures, so the rest of the money is held in cash or T-bills and earns interest.", "r"],
  ["If timber prices are low, a timberland owner who delays harvesting most likely finds that the trees:",
    ["Keep growing and can be sold later", "Must be written off as a loss", "Stop adding value to the investment"],
    "Biological growth continues, so timber can be stored on the stump until prices improve.", "r"],
];

window.GLOSSARY.push(
  ["Commodity futures return","Spot price return + roll return (positive in backwardation) + collateral return.","l1natres"],
  ["Contango vs backwardation", "Futures above spot (negative roll for longs) vs futures below spot (positive roll).", "l1natres"],
  ["Roll return", "Gain or loss from replacing an expiring futures contract with a later one.", "l1natres"],
  ["Theory of storage", "Futures prices reflect storage costs and convenience yield; low inventories mean backwardation.", "l1natres"]
);
