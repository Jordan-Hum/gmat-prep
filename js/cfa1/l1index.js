// CFA Level I · Equity Investments · Learning module 2: Security Market Indexes.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1index = `
<p class="syl">CFA Level I · Equity Investments · Learning module 2 of 8 · Security Market Indexes</p>
<p>A security market index represents the performance of a market or market segment. This lesson covers how indexes are used, price vs total return, the decisions in building an index (especially the <b>weighting method</b>, which is heavily tested with calculations), rebalancing and reconstitution, and the special problems of bond, commodity, real estate and hedge fund indexes.</p>

<h3>1. Uses of indexes</h3>
<ul>
  <li>Gauges of market sentiment; proxies for measuring and modelling returns, systematic risk and risk-adjusted performance (e.g. the "market" in CAPM).</li>
  <li><b>Benchmarks</b> for actively managed portfolios; model portfolios for index funds and ETFs; the basis for derivatives and other index products.</li>
</ul>

<h3>2. Price return vs total return <span class="hot">Highly tested</span></h3>
<div class="formula">Price return = (V₁ − V₀) / V₀ · Total return = (V₁ − V₀ + income) / V₀</div>
<p>A <b>price return index</b> reflects only price changes; a <b>total return index</b> also reinvests dividends and interest. Over time the total return index grows much faster, especially in high-dividend markets. Multi-period returns compound: (1 + R₁)(1 + R₂)… − 1.</p>

<h3>3. Building an index</h3>
<ol>
  <li><b>Target market</b>: which market or segment (country, asset class, sector, style)?</li>
  <li><b>Constituent selection</b>: which securities (all, a representative sample, by rules such as size and liquidity)?</li>
  <li><b>Weighting</b>: how much of each?</li>
  <li><b>Rebalancing</b>: how often are weights reset?</li>
  <li><b>Reconstitution</b>: how often is the list of constituents reviewed?</li>
</ol>

<h3>4. Weighting methods <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Method</th><th>Weight of each security</th><th>Key features and biases</th></tr>
  <tr><td><b>Price-weighted</b></td><td>Price / sum of prices. Index = sum of prices / divisor</td><td>Simple; equivalent to holding one share of each. Higher-priced stocks dominate regardless of company size. A <b>stock split</b> reduces that stock's weight, so the divisor is adjusted to keep the index level unchanged</td></tr>
  <tr><td><b>Equal-weighted</b></td><td>1/N</td><td>Simple; gives small companies the same weight as large ones (<b>small-cap bias</b>); weights drift as prices change, so frequent <b>rebalancing</b> is needed (higher costs); small stocks may be illiquid</td></tr>
  <tr><td><b>Market-capitalization-weighted</b> (usually <b>float-adjusted</b>)</td><td>Market cap / total market cap (float-adjusted counts only shares available to the public)</td><td>Reflects the actual market; self-rebalancing; but overweights large and possibly <b>overvalued</b> stocks (a momentum tilt)</td></tr>
  <tr><td><b>Fundamental weighting</b></td><td>Based on sales, earnings, cash flow, book value or dividends</td><td>Avoids overweighting overvalued stocks; has a <b>value tilt</b> and a contrarian effect (rebalances away from stocks that have risen)</td></tr>
</table>
<div class="ex"><b>Worked example:</b> Three stocks:
<table>
  <tr><th>Stock</th><th>Start price</th><th>End price</th><th>Shares</th><th>Return</th></tr>
  <tr><td>A</td><td>40</td><td>44</td><td>1,000</td><td>+10%</td></tr>
  <tr><td>B</td><td>20</td><td>19</td><td>5,000</td><td>−5%</td></tr>
  <tr><td>C</td><td>80</td><td>88</td><td>500</td><td>+10%</td></tr>
</table>
<b>Price-weighted</b>: (44 + 19 + 88)/(40 + 20 + 80) − 1 = 151/140 − 1 = <b>7.86%</b> (C, the highest-priced stock, carries 57% of the weight). With a divisor of 3 the index moves from 46.67 to 50.33.
<br><b>Market-cap-weighted</b>: start values 40,000 + 100,000 + 40,000 = 180,000; end values 44,000 + 95,000 + 44,000 = 183,000 → <b>1.67%</b> (B, the largest company, weighs 56%).
<br><b>Equal-weighted</b>: (10% − 5% + 10%)/3 = <b>5.00%</b>.
<br><b>Total return</b> (market cap) if B also paid a $0.50 dividend: (183,000 + 2,500)/180,000 − 1 = 3.06%.</div>
<div class="ex"><b>Divisor adjustment for a split:</b> if C (at $80) splits 2-for-1, the sum of prices falls from 140 to 100. To keep the index at 46.67, the new divisor = 100/46.67 = 2.143.</div>

<h3>5. Rebalancing and reconstitution</h3>
<ul>
  <li><b>Rebalancing</b>: adjusting weights back to the method's targets (essential for equal-weighted indexes, whose weights drift as prices move; a market-cap index rebalances itself). Typically quarterly.</li>
  <li><b>Reconstitution</b>: adding and removing constituents (e.g. annually) as companies no longer meet the criteria. Additions can see price rises as index funds buy.</li>
</ul>

<h3>6. Types of indexes</h3>
<ul>
  <li><b>Equity</b>: broad market, multi-market (regional, global), <b>sector</b> (useful for analyzing business cycle effects), <b>style</b> (value/growth, large/small cap; constituents migrate between styles, causing turnover).</li>
  <li><b>Fixed income</b> indexes are harder to build and replicate: the universe is huge and constantly changing (bonds mature and are issued), many bonds trade rarely in dealer markets, so prices are often <b>estimated</b> (matrix pricing); turnover is high.</li>
  <li><b>Commodity</b> indexes are based on <b>futures contracts</b>, so their returns include roll returns and collateral returns and can differ greatly from spot price changes; weighting schemes vary widely.</li>
  <li><b>Real estate</b> indexes: appraisal-based (smoothed), repeat-sales (transaction-based) and REIT indexes.</li>
  <li><b>Hedge fund</b> indexes rely on <b>voluntary reporting</b>: poorly performing funds stop reporting (<b>survivorship bias</b>) and funds often add strong past results when they start reporting (<b>backfill bias</b>), so these indexes <b>overstate</b> returns.</li>
</ul>

<div class="how"><b>How it's tested:</b> computing price-weighted, market-cap-weighted, equal-weighted and total returns; divisor adjustments; identifying the bias of each weighting method (price, small-cap, momentum/large-cap, value tilt); rebalancing vs reconstitution; problems with bond and hedge fund indexes.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe the uses of security market indexes.</li>
  <li>Calculate price return and total return of an index.</li>
  <li>Calculate index values and returns under price, equal, market-cap and fundamental weighting, and explain their advantages and biases.</li>
  <li>Distinguish rebalancing from reconstitution.</li>
  <li>Describe equity, fixed income, commodity, real estate and hedge fund indexes and their challenges.</li>
</ul></div>
`;

window.QB_HARD.l1index = [
  ["An index contains Stock A at $50 (100 shares), B at $20 (200 shares) and C at $30 (500 shares). If A rises to $60 and the others are unchanged, the price-weighted index return is closest to:",
    ["10.0%", "4.2%", "6.7%"],
    "Price-weighted index: (50 + 20 + 30) ÷ 3 = 33.33 → (60 + 20 + 30) ÷ 3 = 36.67, a 10.0% rise. (4.2% is market-cap weighted; 6.7% equal-weighted.)", "c"],
  ["Using the same three stocks (A $50 × 100 shares, B $20 × 200, C $30 × 500), if A rises to $60, the market-capitalization-weighted index return is closest to:",
    ["4.2%", "10.0%", "6.7%"],
    "Market value rises from 5,000 + 4,000 + 15,000 = 24,000 to 25,000: a 4.2% increase. Stock A is only about 21% of the index by value.", "c"],
  ["A total return index differs from a price return index because it:",
    ["Assumes all income is reinvested", "Excludes capital gains and losses", "Gives each constituent an equal weight"],
    "A total return index includes price changes plus reinvested dividends or interest; a price return index captures price changes only.", "r"],
  ["A disadvantage of an equal-weighted index is that it:",
    ["Requires frequent rebalancing", "Is dominated by the largest companies", "Has very little exposure to small-cap stocks"],
    "Price changes push weights away from equal, so the index must be rebalanced often. It overweights small companies relative to their market value.", "r"],
  ["An index that weights constituents by their sales, earnings or book value tends to have a tilt toward:",
    ["Value stocks", "Growth stocks", "Momentum stocks"],
    "Fundamental weighting gives more weight to companies that are cheap relative to fundamentals, creating a value (contrarian) tilt. Cap weighting tilts toward momentum.", "r"],
  ["Hedge fund indexes built from voluntarily reported data tend to overstate returns mainly because of:",
    ["Survivorship and backfill biases", "High costs of rebalancing", "Equal weighting of constituent funds"],
    "Failed funds stop reporting (survivorship bias) and new funds add their good early track records (backfill bias).", "r"],
  ["Constructing fixed income indexes is challenging mainly because:",
    ["Bonds trade OTC with limited pricing and constant turnover", "Bond prices are always visible on organized exchanges", "Relatively few bonds are outstanding at any time"],
    "The bond universe is huge and changes constantly, and most bonds trade over the counter, making prices hard to observe.", "r"],
  ["A price-weighted index contains stocks priced at $40, $20 and $80. If they move to $44, $19 and $88, the index return is closest to:",
    ["7.9%", "5.0%", "1.7%"],
    "(44 + 19 + 88)/(40 + 20 + 80) − 1 = 151/140 − 1 = 7.86%. Equal-weighted gives 5.0%.", "c"],
  ["The same stocks have 1,000, 5,000 and 500 shares outstanding ($40, $20, $80, moving to $44, $19, $88). The market-cap-weighted index return is closest to:",
    ["1.7%", "7.9%", "5.0%"],
    "Market value goes from 180,000 to 183,000: +1.67%. Stock B (−5%) is the largest company.", "c"],
  ["Using the same three stocks (returns of +10%, −5% and +10%), the equal-weighted index return is:",
    ["5.0%", "1.7%", "7.9%"],
    "Simple average of the returns: (10 − 5 + 10)/3 = 5.0%.", "c"],
  ["A price-weighted index of three stocks priced $40, $20 and $80 has a divisor of 3. If the $80 stock splits 2-for-1, the new divisor is closest to:",
    ["2.14", "3.00", "1.50"],
    "Index before = 140/3 = 46.67. After the split the sum of prices is 100, so the divisor becomes 100/46.67 = 2.14.", "c"],
  ["In a price-weighted index, a 2-for-1 stock split by one constituent will:",
    ["Reduce that stock's weight", "Increase that stock's index weight", "Leave all weights unchanged"],
    "Weights depend on price; halving the price halves the stock's weight (the divisor keeps the index level unchanged).", "r"],
  ["A float-adjusted market-capitalization-weighted index weights each stock by:",
    ["Market value of its publicly available shares", "Its total number of shares outstanding", "Its share price alone"],
    "Float adjustment excludes shares held by insiders, governments and other strategic holders not available for trading.", "r"],
  ["A market-cap-weighted index will most likely overweight:",
    ["Stocks that may be overvalued", "Small, illiquid companies", "Stocks with high book-to-market ratios"],
    "Weights rise with price, so stocks that have risen (possibly beyond fair value) get bigger weights; this is a momentum tilt.", "r"],
  ["An index that resets each constituent's weight to 1/N every quarter requires frequent:",
    ["Rebalancing", "Reconstitution", "Divisor adjustment"],
    "Rebalancing restores target weights; reconstitution changes which securities are in the index.", "r"],
  ["Removing companies that no longer meet an index's size criteria and adding new ones is called:",
    ["Reconstitution", "Rebalancing", "Float adjustment"],
    "Reconstitution reviews and changes the list of constituents.", "r"],
  ["Returns on a commodity index can differ substantially from changes in commodity spot prices mainly because the index is based on:",
    ["Futures contracts", "Physical commodities in storage", "Shares of commodity producers"],
    "Commodity indexes hold futures, so returns include roll and collateral returns as well as price changes.", "r"],
  ["A sector index is most useful for:",
    ["Analyzing an industry's cyclical behaviour", "Measuring total market returns across all assets", "Tracking hedge fund performance over time"],
    "Sector indexes isolate industry performance, helping analyze cyclical sensitivity and sector allocation.", "r"],
];

window.GLOSSARY.push(
  ["Index weighting","Price-weighted (high prices dominate), equal (small-cap tilt, frequent rebalancing), market-cap (large dominate), fundamental (value tilt).","l1index"],
  ["Price vs total return index","Price return: price changes only. Total return: also reinvests dividends/interest.","l1index"],
  ["Index construction steps", "Target market, constituent selection, weighting, rebalancing, reconstitution.", "l1index"],
  ["Price-weighted index", "Sum of prices / divisor; high-priced stocks dominate; divisor adjusts for splits.", "l1index"],
  ["Float-adjusted market-cap weighting", "Weights by market value of freely tradable shares; overweights possibly overvalued large stocks.", "l1index"],
  ["Fundamental weighting", "Weights by sales, earnings, book value or dividends; value tilt.", "l1index"],
  ["Rebalancing vs reconstitution", "Resetting weights vs changing constituents.", "l1index"],
  ["Hedge fund index biases", "Survivorship and backfill bias from voluntary reporting overstate returns.", "l1index"]
);
