// CFA Level I · Alternative Investments · Learning module 4: Real Estate and Infrastructure.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1reinfra = `
<p class="syl">CFA Level I · Alternative Investments (7–10%) · Learning module 4 of 7 · Real Estate and Infrastructure</p>
<p>Real estate and infrastructure are real assets that produce long-term, often inflation-linked income. This lesson covers the forms of real estate investment, property types and strategies, how property is valued (direct capitalization, DCF, cost and comparables), how REITs are valued (FFO, AFFO, NAV), and the types, revenue models and risks of infrastructure investments.</p>

<h3>1. Real estate: features and forms</h3>
<ul>
  <li>Characteristics: each property is unique (heterogeneous), fixed in location, indivisible, illiquid, expensive to trade, often financed with debt, and valued by appraisal.</li>
  <li>Why invest: stable income, capital appreciation, inflation hedge, diversification.</li>
</ul>
<table>
  <tr><th></th><th>Equity</th><th>Debt</th></tr>
  <tr><td><b>Private</b></td><td>Direct ownership; private real estate funds</td><td>Mortgages, private real estate loans</td></tr>
  <tr><td><b>Public</b></td><td>REITs, real estate operating companies, listed funds</td><td>MBS and CMBS</td></tr>
</table>
<ul>
  <li><b>REITs</b> (real estate investment trusts) own income-producing property, distribute most of their income and usually pay no corporate tax. Compared with direct ownership: more <b>liquidity</b>, lower minimum investment, professional management and diversification, but less control and more correlation with stocks.</li>
  <li><b>Property types</b>: residential (single-family, multifamily), office, retail, industrial and logistics, hospitality; plus specialized types (data centres, self-storage, healthcare).</li>
  <li><b>Leases</b>: in a <b>net lease</b> the tenant pays operating expenses (taxes, insurance, maintenance); in a <b>gross lease</b> the owner pays them.</li>
</ul>
<h4>Strategies by risk (lowest to highest)</h4>
<table>
  <tr><th>Strategy</th><th>Description</th></tr>
  <tr><td><b>Core</b></td><td>High-quality, fully leased properties in major markets; low leverage; return mostly from income</td></tr>
  <tr><td><b>Core-plus</b></td><td>Similar, with some upgrades or leasing needed</td></tr>
  <tr><td><b>Value-add</b></td><td>Renovate, reposition or re-lease properties to raise income</td></tr>
  <tr><td><b>Opportunistic</b></td><td>Development, distressed assets, high leverage; return mostly from price gains</td></tr>
</table>

<h3>2. Valuing property <span class="hot">Highly tested</span></h3>
<div class="formula">NOI = rental income (after vacancy and collection losses) + other income − operating expenses (excludes interest, depreciation and income taxes)<br>Direct capitalization: Value = NOI / cap rate · cap rate = NOI / value (from comparable sales)<br>Growing income: Value = NOI<sub>1</sub> / (r − g), so cap rate ≈ r − g</div>
<div class="ex"><b>Example:</b> gross potential rent $2.0m, 5% vacancy, operating expenses $0.6m → NOI = 1.9 − 0.6 = <b>$1.3m</b>. With a 6.5% cap rate, value = 1.3 / 0.065 = <b>$20m</b>.<br>A similar property with NOI of $0.9m recently sold for $12m → cap rate = <b>7.5%</b>.<br>Next year's NOI $1.0m, required return 8%, growth 2% → value = 1.0 / 0.06 = <b>$16.7m</b>.</div>
<table>
  <tr><th>Approach</th><th>Idea</th></tr>
  <tr><td><b>Income</b></td><td>Direct capitalization or discounted cash flow of NOI and resale value</td></tr>
  <tr><td><b>Cost</b></td><td>Land value + replacement cost of the building − depreciation (useful for new or unusual properties)</td></tr>
  <tr><td><b>Sales comparison</b></td><td>Prices of comparable properties, adjusted for differences</td></tr>
</table>
<div class="trap"><b>Trap:</b> a <b>higher</b> cap rate means a <b>lower</b> value for the same NOI. Don't deduct interest or depreciation when calculating NOI.</div>

<h3>3. Valuing REITs</h3>
<div class="formula">FFO (funds from operations) = net income + depreciation − gains on property sales (+ losses)<br>AFFO (adjusted FFO) = FFO − recurring (maintenance) capital expenditure (and straight-line rent adjustments)<br>NAV per share = (market value of properties + other assets − liabilities) / shares</div>
<div class="ex"><b>Example:</b> net income $50m, depreciation $30m, gains on sales $10m, recurring capex $15m, 20m shares, price $42.<br>FFO = 50 + 30 − 10 = <b>$70m</b> ($3.50 per share); AFFO = 70 − 15 = <b>$55m</b>.<br>P/FFO = 42 / 3.50 = <b>12×</b>.<br>NAV: NOI $70m at a 7% cap rate → properties $1,000m; + other assets $50m − debt $400m = $650m → <b>$32.50</b> per share.</div>

<h3>4. Infrastructure <span class="hot">Highly tested</span></h3>
<ul>
  <li>Long-lived real assets providing essential services, often with monopoly-like positions, stable and inflation-linked cash flows, and high upfront costs.</li>
  <li><b>Economic infrastructure</b>: transport (roads, airports, ports), utilities (power, water), communications (towers, cables). <b>Social infrastructure</b>: hospitals, schools, prisons.</li>
  <li><b>Brownfield</b>: existing assets with an operating history (lower risk, steadier income). <b>Greenfield</b>: assets still to be built (construction risk, higher expected return).</li>
</ul>
<table>
  <tr><th>Revenue model</th><th>Example</th><th>Risk</th></tr>
  <tr><td><b>User fees</b> (demand-based)</td><td>Toll roads, airports</td><td>Demand (traffic) risk</td></tr>
  <tr><td><b>Availability payments</b></td><td>Government pays as long as the asset is available (common in public-private partnerships for hospitals, schools)</td><td>Low demand risk; depends on the government's credit</td></tr>
  <tr><td><b>Regulated returns</b></td><td>Utilities allowed a set return on assets</td><td>Regulatory risk</td></tr>
</table>
<ul>
  <li>Ways to invest: directly, through unlisted funds, listed infrastructure companies or funds, and <b>public-private partnerships (PPPs)</b>.</li>
  <li>Risks: construction (greenfield), regulatory and political, operational, demand, leverage, and illiquidity.</li>
</ul>

<div class="how"><b>How it's tested:</b> calculating NOI and values with cap rates, the effect of cap rate changes, cost and comparables approaches, FFO, AFFO, P/FFO and NAV for REITs, REITs vs direct ownership, core to opportunistic strategies, brownfield vs greenfield, economic vs social infrastructure, and availability payments vs user fees.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe the forms, property types and strategies of real estate investment.</li>
  <li>Calculate NOI and value property with direct capitalization and growing income.</li>
  <li>Calculate FFO, AFFO and NAV per share for a REIT.</li>
  <li>Describe infrastructure types, revenue models, investment forms and risks.</li>
</ul></div>
`;

window.QB_HARD.l1reinfra = [
  ["A property is expected to generate net operating income of $1.2 million. If the market capitalization rate is 6%, its estimated value is closest to:",
    ["$20.0 million", "$7.2 million", "$12.0 million"],
    "Direct capitalization: value = NOI ÷ cap rate = 1.2 ÷ 0.06 = $20.0 million.", "c"],
  ["Compared with direct real estate ownership, REITs offer:",
    ["Greater liquidity and a lower minimum investment", "More control over property-level decisions", "Lower correlation with stock market returns"],
    "REITs trade on exchanges and can be bought in small amounts, but they behave more like equities in the short run than direct property.", "r"],
  ["Investing in an existing toll road with several years of operating history is an example of:",
    ["Brownfield infrastructure", "Greenfield infrastructure", "Social infrastructure"],
    "Brownfield assets already exist and operate (lower risk); greenfield assets are still to be built. A toll road is economic, not social, infrastructure.", "r"],
  ["A new hospital built under a public-private partnership is most likely to be paid for through:",
    ["Availability payments from the government", "Tolls charged to individual users", "Sales of commodities produced on site"],
    "Social infrastructure is often funded by availability payments: the government pays as long as the asset is available and meets standards.", "r"],
  ["A property has gross potential rent of $2.0 million, 5% vacancy and operating expenses of $0.6 million. Its NOI is:",
    ["$1.3 million", "$1.4 million", "$1.9 million"],
    "2.0 × 0.95 − 0.6 = 1.3. $1.4 million ignores vacancy; $1.9 million ignores expenses.", "c"],
  ["A property's NOI is $1.3 million and the market cap rate is 6.5%. Its value is closest to:",
    ["$20.0 million", "$8.5 million", "$84.5 million"],
    "1.3 / 0.065 = $20.0 million.", "c"],
  ["A comparable property with NOI of $0.9 million recently sold for $12 million. The implied cap rate is:",
    ["7.5%", "13.3%", "10.8%"],
    "0.9 / 12 = 7.5%. 13.3% inverts the ratio.", "c"],
  ["If market cap rates rise while NOI is unchanged, property values will:",
    ["Fall", "Rise", "Stay the same"],
    "Value = NOI / cap rate, so a higher cap rate lowers value.", "r"],
  ["A REIT reports net income of $50 million, depreciation of $30 million and gains on property sales of $10 million. Its FFO is:",
    ["$70 million", "$90 million", "$80 million"],
    "FFO = 50 + 30 − 10 = $70m. Gains on sales are removed because they aren't recurring.", "c"],
  ["The same REIT (FFO $70 million) spends $15 million a year on recurring capital expenditure. Its AFFO is:",
    ["$55 million", "$85 million", "$70 million"],
    "AFFO = FFO − recurring capex = 70 − 15 = $55m.", "c"],
  ["A REIT's properties produce NOI of $70 million and are valued at a 7% cap rate. It has other assets of $50 million, debt of $400 million and 20 million shares. NAV per share is:",
    ["$32.50", "$52.50", "$50.00"],
    "Properties = 70 / 0.07 = 1,000; (1,000 + 50 − 400) / 20 = $32.50. $52.50 ignores the debt; $50.00 counts only the properties.", "c"],
  ["A real estate fund buys fully leased, high-quality office buildings in major cities, using little debt. Its strategy is best described as:",
    ["Core", "Value-add", "Opportunistic"],
    "Core strategies target stable income from high-quality properties with low leverage.", "r"],
  ["Under a net lease, property operating expenses such as taxes and insurance are mostly paid by:",
    ["The tenant", "The owner", "The lender"],
    "In a gross lease the owner pays them.", "r"],
  ["A new airport still to be built is an example of:",
    ["Greenfield infrastructure", "Brownfield infrastructure", "Social infrastructure"],
    "Greenfield assets are yet to be constructed and carry construction risk; airports are economic infrastructure.", "r"],
  ["A toll road's revenue depends on how many vehicles use it. Its main revenue risk is:",
    ["Demand risk", "Availability risk", "Construction risk"],
    "User-fee assets bear demand (traffic) risk; availability-payment assets largely don't.", "r"],
];

window.GLOSSARY.push(
  ["Direct capitalization","Property value = NOI ÷ cap rate.","l1reinfra"],
  ["Brownfield vs greenfield","Brownfield: existing infrastructure with operating history. Greenfield: to be built (construction risk).","l1reinfra"],
  ["Net operating income (NOI)", "Rental income after vacancy − operating expenses (before interest, depreciation, taxes).", "l1reinfra"],
  ["FFO and AFFO", "FFO = net income + depreciation − gains on sales; AFFO = FFO − recurring capex.", "l1reinfra"],
  ["Core to opportunistic", "Real estate strategies from stable income, low leverage to development and high leverage.", "l1reinfra"],
  ["Availability payments", "Government payments to an infrastructure owner as long as the asset is available for use.", "l1reinfra"]
);
