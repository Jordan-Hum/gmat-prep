// CFA Level II · Alternative Investments: study notes, item sets and flashcards.
window.NOTES = window.NOTES || {};
window.QB_SETS = window.QB_SETS || {};
window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l2alt = `
<p class="syl">CFA Level II · Alternative Investments · 5–10% of the exam · Learning modules: Introduction to Commodities and Commodity Derivatives · Overview of Types of Real Estate Investment · Investments in Real Estate through Publicly Traded Securities · Hedge Fund Strategies</p>

<h3>1. Commodities and commodity derivatives</h3>
<ul>
  <li><b>Sectors</b>: energy, grains, industrial metals, livestock, precious metals, softs. Physical traits (storability, perishability, seasonality, weather) drive supply, demand and price behaviour. Commodities have no cash flows, so they're valued from supply/demand and futures pricing, not discounted cash flows.</li>
  <li><b>Market participants</b>: hedgers (producers and consumers), speculators (provide liquidity, take risk), arbitrageurs (with physical storage), exchanges and regulators.</li>
</ul>
<div class="formula">Futures price ≈ spot × (1 + r) + storage costs − convenience yield · Contango: futures &gt; spot · Backwardation: futures &lt; spot</div>
<table>
  <tr><th>Theory</th><th>Explanation of the futures curve</th></tr>
  <tr><td><b>Insurance theory</b> (Keynes)</td><td>Producers hedge by <b>selling</b> futures and pay a premium to speculators, so futures are priced below expected spot: <b>normal backwardation</b></td></tr>
  <tr><td><b>Hedging pressure hypothesis</b></td><td>Both producers (sell) and consumers (buy) hedge; whichever dominates sets backwardation or contango</td></tr>
  <tr><td><b>Theory of storage</b></td><td>Curve shape depends on storage costs vs <b>convenience yield</b>: low inventories → high convenience yield → backwardation; ample inventories → contango</td></tr>
</table>
<h4>Return on a commodity futures position</h4>
<ul>
  <li><b>Price (spot) return</b>: change in the spot price.</li>
  <li><b>Roll return</b> (roll yield): from replacing expiring contracts with longer ones. <b>Positive in backwardation</b> (sell high, buy lower), <b>negative in contango</b>.</li>
  <li><b>Collateral return</b>: interest on the cash (e.g. T-bills) backing the futures.</li>
  <li>Index total return ≈ price + roll + collateral (+ rebalancing return).</li>
</ul>
<ul>
  <li><b>Commodity swaps</b>: <b>total return swap</b> (receive index total return), <b>excess return swap</b> (receive index excess over a fixed level), <b>basis swap</b> (two related prices), <b>variance/volatility swaps</b>.</li>
  <li><b>Indexes</b> differ by weighting and rolling: <b>S&amp;P GSCI</b> (world production weights, energy-heavy); <b>Bloomberg Commodity Index</b> (liquidity and production, with diversification caps); <b>Rogers International</b> (consumption weights); <b>TR/CoreCommodity CRB</b> (fixed tiered weights); <b>DBIQ Optimum Yield</b> (rolls into the contract with the best implied roll yield).</li>
</ul>

<h3>2. Real estate investment</h3>
<table>
  <tr><th></th><th>Equity</th><th>Debt</th></tr>
  <tr><td><b>Private</b></td><td>Direct ownership, private funds</td><td>Mortgages, private loans</td></tr>
  <tr><td><b>Public</b></td><td>REITs, real estate operating companies (REOCs)</td><td>Mortgage-backed securities (CMBS, RMBS)</td></tr>
</table>
<ul>
  <li><b>Features</b>: heterogeneity, high unit value, management intensity, high transaction costs, depreciation, use of leverage, illiquidity and infrequent pricing.</li>
  <li><b>Motivations</b>: current income, capital appreciation, inflation hedge, diversification, tax benefits.</li>
  <li><b>Strategies</b> by risk: <b>core</b> (stabilized, high-quality, low leverage) → core-plus → <b>value-add</b> (repositioning, renovation) → <b>opportunistic</b> (development, distressed).</li>
  <li><b>Property types and drivers</b>: office (office-using employment; leases often long; gross or net), industrial/logistics (trade, e-commerce), retail (consumer spending; <b>percentage rent</b> above a sales breakpoint), multifamily (population and household formation; short leases), hospitality (most cyclical, daily pricing).</li>
  <li><b>Lease types</b>: gross lease (owner pays operating expenses) vs net lease (tenant pays some or all expenses).</li>
</ul>
<h4>Valuation</h4>
<div class="formula">NOI = rental income at full occupancy + other income − vacancy and collection loss − operating expenses (excludes financing costs, depreciation and income taxes)</div>
<div class="formula">Direct capitalization: V = NOI₁ / cap rate · Cap rate ≈ discount rate − growth rate · DSCR = NOI / debt service · Equity dividend rate = first-year cash flow / equity</div>
<ul>
  <li><b>Income approach</b>: direct capitalization or DCF (PV of NOI over a holding period + terminal value = NOI_{n+1}/terminal cap rate, less selling costs). The terminal cap rate is usually above the going-in rate (older building, uncertainty).</li>
  <li><b>Sales comparison approach</b>: adjust prices of comparable recent sales for differences (size, age, location, condition).</li>
  <li><b>Cost approach</b>: land value + replacement cost − depreciation (physical, functional, external obsolescence).</li>
  <li><b>Indexes</b>: <b>appraisal-based</b> indexes lag and are <b>smoothed</b>, so they <b>understate volatility and correlation</b> with other assets; <b>transaction-based</b> indexes (repeat-sales, hedonic) reduce this.</li>
  <li>Due diligence: leases and tenant credit, operating expenses, environmental, title, physical inspection, zoning.</li>
</ul>
<div class="ex"><b>Example:</b> Gross potential rent 2,400,000; vacancy 8%; other income 60,000; operating expenses 700,000 (depreciation and interest excluded). NOI = 2,208,000 + 60,000 − 700,000 = 1,568,000. At a 7.5% cap rate, V = 20.9m. A 65% LTV interest-only loan at 6% has debt service 815,360 → DSCR = 1.92; equity dividend rate = 752,640/7,317,333 = 10.3%.</div>

<h3>3. Publicly traded real estate securities</h3>
<ul>
  <li><b>REITs</b>: largely tax-exempt at the entity level if they distribute most taxable income (e.g. ≥ 90% in the US) and meet asset/income tests. <b>REOCs</b>: ordinary taxable companies, can reinvest freely.</li>
  <li><b>Advantages</b>: liquidity, low minimum investment, diversification, professional management, transparency, no double taxation, high dividend yields. <b>Disadvantages</b>: limited growth from retained earnings, forced equity issuance, structural conflicts (e.g. UPREITs), higher price volatility than private real estate (they're priced daily), less control.</li>
</ul>
<div class="formula">FFO = net income + depreciation − gains (+ losses) on property sales (+ impairments of depreciable real estate) · AFFO = FFO − non-cash (straight-line) rent − recurring (maintenance) capex and leasing costs</div>
<div class="formula">NAV per share = (forward NOI / market cap rate + other assets − liabilities) / shares</div>
<ul>
  <li><b>AFFO</b> is closer to sustainable distributable cash; <b>P/FFO</b> and <b>P/AFFO</b> are the main relative-value multiples. Also DDM and DCF approaches.</li>
  <li>A REIT trading below NAV may be cheap, or the market may expect lower NOI or higher cap rates; premiums can reflect management quality or growth.</li>
</ul>
<div class="ex"><b>Example:</b> NI 120m, depreciation 90m, gain on sale 15m → FFO 195m (3.90/share on 50m shares). Straight-line rent 8m, recurring capex 25m → AFFO 162m (3.24/share). At $42: P/FFO 10.8×, P/AFFO 13.0×. Forward NOI 260m at a 6.5% cap rate = 4,000m; + 150m other assets − 1,900m liabilities → NAV 45.00/share.</div>

<h3>4. Hedge fund strategies</h3>
<table>
  <tr><th>Category</th><th>Strategies and key risks</th></tr>
  <tr><td><b>Equity-related</b></td><td><b>Long/short</b> (usually net long; stock selection); <b>dedicated short</b> and short-biased (negative beta, short squeezes); <b>equity market neutral</b> (pairs trading, stat arb; beta ≈ 0, often leveraged); fundamental growth/value</td></tr>
  <tr><td><b>Event-driven</b></td><td><b>Merger arbitrage</b>: long target; in stock deals also short the acquirer at the exchange ratio. Earns the deal spread; payoff resembles <b>selling a put</b> on deal completion (left-tail risk if the deal fails). <b>Distressed securities</b> (illiquidity, legal process), <b>activist</b>, special situations</td></tr>
  <tr><td><b>Relative value</b></td><td><b>Fixed income arbitrage</b> (curve, basis, swap spread; high leverage). <b>Convertible bond arbitrage</b>: long convertible, short shares (delta hedge); profits from cheap embedded options; risks: liquidity, credit, short-borrow availability. Volatility trading</td></tr>
  <tr><td><b>Opportunistic</b></td><td><b>Global macro</b> (top-down themes across rates, FX, equities, commodities); <b>managed futures / CTAs</b> (often trend following; tend to do well in sustained crises: right-tail, positive skew)</td></tr>
  <tr><td><b>Specialist</b></td><td>Volatility trading (long or short vol), reinsurance and life settlements</td></tr>
  <tr><td><b>Multi-manager</b></td><td><b>Fund of funds</b> (diversification, manager selection, but double fees and netting risk); <b>multi-strategy</b> funds (faster reallocation, shared infrastructure, but operational and concentration risk)</td></tr>
</table>
<ul>
  <li><b>Conditional factor models</b> estimate separate exposures for normal and crisis periods; many strategies' equity and credit betas, and short-volatility exposure, <b>rise in crises</b>.</li>
  <li>Evaluate a strategy's portfolio contribution with correlations, drawdowns, skewness and kurtosis, not just Sharpe ratios (which flatter strategies with left-tail risk).</li>
</ul>
<div class="how"><b>How it's tested:</b> futures pricing and roll return logic, matching curve shapes to theories, index characteristics; NOI, cap rate values, DSCR and cash-on-cash; FFO/AFFO/NAV per share and multiples; identifying hedge fund strategies, their positions and their risk profiles.</div>
<div class="key"><b>Carry forward to Level III</b>: alternatives appear in asset allocation (liquidity, smoothing adjustments, private markets pacing) and in manager selection; roll return and contango drive commodity overlay decisions.</div>
<div class="trap"><b>Traps:</b> roll return is <b>negative in contango</b>. NOI excludes interest and depreciation. FFO adds back depreciation but <b>subtracts</b> gains on property sales. Appraisal-based indexes <b>understate</b> volatility.</div>
`;

window.QB_SETS.l2alt = [
  {
    title: "Ironbridge Commodity Fund: futures and returns",
    case: `<p>Commodity analyst Leah Brooks reviews crude oil and index positions for the Ironbridge Commodity Fund.</p>
<p><b>Crude oil.</b> Spot crude is $70.00 per barrel. The 1-year risk-free rate is 4%. Annual storage costs are 2% of the spot price and the convenience yield is 3% of the spot price. Inventories are at record highs and the futures curve is upward sloping.</p>
<p><b>Index.</b> Over the past year, Ironbridge's long-only commodity index position had a spot price return of +6.0%, a roll return of −3.0% and a collateral return of 4.0%.</p>
<p>Brooks's manager wants a benchmark index whose weights reflect the value of world production of each commodity.</p>`,
    qs: [
      ["The approximate no-arbitrage 1-year crude oil futures price is closest to:",
        ["$72.10", "$74.20", "$70.70"],
        "F ≈ S × (1 + r + storage − convenience yield) = 70 × (1 + 0.04 + 0.02 − 0.03) = 70 × 1.03 = $72.10. The market is in contango.", "c"],
      ["The index position's total return for the year is closest to:",
        ["7.0%", "13.0%", "10.0%"],
        "Total return ≈ spot return + roll return + collateral return = 6.0% − 3.0% + 4.0% = 7.0%.", "c"],
      ["The upward-sloping crude futures curve with record inventories is best explained by:",
        ["The theory of storage", "The insurance theory", "Normal backwardation"],
        "Ample inventories mean a low convenience yield relative to storage costs, producing contango: the theory of storage. Insurance theory predicts backwardation.", "s"],
      ["The index that best meets the manager's request is the:",
        ["S&P GSCI", "Bloomberg Commodity Index", "TR/CoreCommodity CRB Index"],
        "The S&P GSCI weights commodities by the value of world production. BCOM uses liquidity and production with caps; the CRB uses fixed tiered weights.", "r"]
    ]
  },
  {
    title: "Harrow Real Estate Partners: office acquisition",
    case: `<p>Acquisitions analyst Kofi Mensah is valuing a multi-tenant office building for Harrow Real Estate Partners.</p>
<p><b>Exhibit 1. Next year's projected operations</b></p>
<table><tr><th>Item</th><th>Amount ($)</th></tr><tr><td>Gross potential rent</td><td>2,400,000</td></tr><tr><td>Vacancy and collection loss</td><td>8% of gross potential rent</td></tr><tr><td>Parking and other income</td><td>60,000</td></tr><tr><td>Operating expenses (taxes, insurance, maintenance, management)</td><td>700,000</td></tr><tr><td>Depreciation</td><td>200,000</td></tr><tr><td>Interest on proposed loan</td><td>815,360</td></tr></table>
<p>Mensah estimates a discount rate of 9.5% and long-term NOI growth of 2.0%, implying a 7.5% cap rate. Harrow would finance 65% of the value with an interest-only loan at 6%.</p>
<p>Harrow's investment committee compares the property's expected volatility with an appraisal-based index of similar properties.</p>`,
    qs: [
      ["The property's net operating income is closest to:",
        ["$1,568,000", "$1,368,000", "$1,760,000"],
        "NOI = 2,400,000 × 0.92 + 60,000 − 700,000 = $1,568,000. Depreciation and interest are excluded (deducting depreciation gives 1,368,000).", "c"],
      ["Using direct capitalization, the property's value is closest to:",
        ["$20.9 million", "$16.5 million", "$23.5 million"],
        "V = NOI/cap rate = 1,568,000/0.075 = $20.9 million. (Using the 9.5% discount rate gives 16.5m.)", "c"],
      ["The debt service coverage ratio on the proposed loan is closest to:",
        ["1.92", "1.68", "2.94"],
        "Loan = 0.65 × 20,906,667 = 13,589,333; debt service = 6% × 13,589,333 = 815,360. DSCR = 1,568,000/815,360 = 1.92.", "c"],
      ["Compared with the property's true volatility, the appraisal-based index most likely:",
        ["Understates volatility", "Overstates volatility", "Measures it accurately"],
        "Appraisals lag and smooth market values, so appraisal-based indexes understate volatility and correlation with other asset classes.", "s"]
    ]
  },
  {
    title: "Crestline REIT: valuation",
    case: `<p>Equity analyst Sofia Marchetti is valuing Crestline REIT, which owns shopping centres. Crestline has 50 million shares outstanding and trades at $42.00.</p>
<p><b>Exhibit 1. Selected data ($ millions)</b></p>
<table><tr><th>Item</th><th>Amount</th></tr><tr><td>Net income</td><td>120</td></tr><tr><td>Depreciation of real estate</td><td>90</td></tr><tr><td>Gain on sale of properties</td><td>15</td></tr><tr><td>Straight-line rent adjustment (non-cash)</td><td>8</td></tr><tr><td>Recurring capital expenditures</td><td>25</td></tr><tr><td>Forward-year NOI</td><td>260</td></tr><tr><td>Cash and other tangible assets</td><td>150</td></tr><tr><td>Total liabilities</td><td>1,900</td></tr></table>
<p>Marchetti estimates a market cap rate of 6.5% for Crestline's properties.</p>`,
    qs: [
      ["Crestline's FFO per share is closest to:",
        ["$3.90", "$4.50", "$3.24"],
        "FFO = 120 + 90 − 15 = 195; per share 195/50 = $3.90. (Adding back the gain gives 4.50; 3.24 is AFFO.)", "c"],
      ["Crestline's AFFO per share is closest to:",
        ["$3.24", "$3.40", "$3.74"],
        "AFFO = FFO 195 − straight-line rent 8 − recurring capex 25 = 162; per share $3.24.", "c"],
      ["Crestline's NAV per share is closest to:",
        ["$45.00", "$80.00", "$42.00"],
        "Property value = 260/0.065 = 4,000. NAV = 4,000 + 150 − 1,900 = 2,250; per share 2,250/50 = $45.00, so the shares trade at a discount of about 7%.", "c"],
      ["Crestline's price-to-AFFO multiple is closest to:",
        ["13.0×", "10.8×", "9.3×"],
        "P/AFFO = 42.00/3.24 = 13.0×. (10.8× is P/FFO.)", "c"]
    ]
  },
  {
    title: "Wolcott Endowment: hedge fund due diligence",
    case: `<p>Wolcott Endowment's investment officer, Grace Holt, is reviewing three hedge funds.</p>
<p><b>Fund X</b> trades announced takeovers. Its largest position: Tarn Corp. has agreed to acquire Lyle Inc. for 0.5 Tarn shares per Lyle share. Tarn trades at $80.00 and Lyle at $36.00. Fund X is long Lyle and short Tarn in the 0.5 ratio.</p>
<p><b>Fund Y</b> buys convertible bonds it believes are cheap and sells short the issuers' shares to hedge equity exposure.</p>
<p><b>Fund Z</b> claims to be equity market neutral. Holt's regression shows an equity beta of 0.2 in normal months but 0.7 in months when equities fell more than 5%.</p>`,
    qs: [
      ["If the Tarn–Lyle deal closes on its current terms, Fund X's gross return on the Lyle position, ignoring dividends and costs, is closest to:",
        ["11.1%", "10.0%", "4.0%"],
        "Deal value per Lyle share = 0.5 × 80 = 40. Spread = (40 − 36)/36 = 11.1%. The short Tarn position locks in this spread whatever Tarn's price.", "c"],
      ["Fund X's strategy has a return profile most similar to:",
        ["Selling a put option", "Buying a call option", "Buying a straddle"],
        "Merger arbitrage earns a small, steady spread if deals close but suffers large losses if they fail: like writing a put (negative skew, left-tail risk).", "s"],
      ["Fund Y is following a:",
        ["Convertible bond arbitrage strategy", "Distressed securities strategy", "Fixed income arbitrage strategy"],
        "Long convertible bonds with a delta-hedging short stock position is convertible bond arbitrage.", "r"],
      ["Holt's analysis of Fund Z is an example of using:",
        ["A conditional factor model", "A Monte Carlo simulation", "Mean–variance optimization"],
        "Estimating separate exposures for normal and crisis periods is a conditional factor model; it reveals that Fund Z's equity risk rises in downturns.", "r"]
    ]
  }
];

window.GLOSSARY.push(
  ["Contango vs backwardation", "Contango: futures > spot (negative roll). Backwardation: futures < spot (positive roll).", "l2alt"],
  ["Insurance theory", "Producers sell futures to hedge, paying speculators a premium: normal backwardation.", "l2alt"],
  ["Theory of storage", "Curve shape set by storage costs vs convenience yield; low inventories → backwardation.", "l2alt"],
  ["Commodity futures total return", "Spot price return + roll return + collateral return.", "l2alt"],
  ["S&P GSCI", "Commodity index weighted by world production value; energy-heavy.", "l2alt"],
  ["NOI", "Rent + other income − vacancy − operating expenses; excludes interest, depreciation, taxes.", "l2alt"],
  ["Direct capitalization", "Value = NOI₁/cap rate; cap rate ≈ discount rate − growth.", "l2alt"],
  ["DSCR", "NOI/debt service.", "l2alt"],
  ["Appraisal smoothing", "Appraisal-based indexes lag and understate volatility and correlation.", "l2alt"],
  ["FFO", "NI + depreciation − gains on property sales (+ losses).", "l2alt"],
  ["AFFO", "FFO − straight-line rent − recurring capex and leasing costs.", "l2alt"],
  ["REIT NAV per share", "(Forward NOI/cap rate + other assets − liabilities)/shares.", "l2alt"],
  ["Merger arbitrage", "Long target, short acquirer (stock deals); payoff like a short put on deal completion.", "l2alt"],
  ["Convertible bond arbitrage", "Long convertible, short underlying shares; exploits cheap embedded options.", "l2alt"],
  ["Conditional factor model", "Separate factor exposures in normal vs crisis periods.", "l2alt"]
);
