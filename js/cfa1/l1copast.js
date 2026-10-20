// CFA Level I · Equity Investments · Learning module 5: Company Analysis: Past and Present.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1copast = `
<p class="syl">CFA Level I · Equity Investments · Learning module 5 of 8 · Company Analysis: Past and Present</p>
<p>Before forecasting a company, an analyst needs to understand how it makes money today. This lesson sets out what goes into a company research report, how to describe a business model, how to break revenue into drivers, and how to analyze costs, operating leverage, working capital, capital investment and capital structure. The ratios here are the inputs to the forecasting and valuation lessons that follow.</p>

<h3>1. The company research report</h3>
<p>A typical report includes:</p>
<ul>
  <li><b>Key data</b>: price, market cap, valuation multiples, recommendation and target price.</li>
  <li><b>Investment thesis (summary)</b>: why the analyst thinks the shares are mispriced, and what will make the market recognize it (catalysts).</li>
  <li><b>Business description and industry overview</b>: products, segments, customers, competitive position.</li>
  <li><b>Financial analysis and forecasts</b>, <b>valuation</b>, and <b>risks</b> (including what would make the thesis wrong), plus ESG considerations.</li>
</ul>
<p>A good report is timely, clearly written, objective, and separates facts from opinions.</p>

<h3>2. The business model <span class="hot">Highly tested</span></h3>
<p>A business model describes <b>who the customers are, what the company sells them (its value proposition), how it reaches them (channels), how it prices, and how it makes a profit</b>.</p>
<table>
  <tr><th>Model</th><th>How it works</th></tr>
  <tr><td><b>Subscription</b></td><td>Customers pay a recurring fee (software, streaming); revenue is predictable and customer retention is key</td></tr>
  <tr><td><b>Freemium</b></td><td>A basic version is free; profit comes from customers who upgrade to paid features</td></tr>
  <tr><td><b>Razors and blades</b></td><td>The main product is sold cheaply; profits come from repeat sales of consumables (printers and ink)</td></tr>
  <tr><td><b>Bundling</b></td><td>Products are sold together at a combined price</td></tr>
  <tr><td><b>Platform / network effects</b></td><td>Value to each user rises as more users join (marketplaces, payment networks); can create winner-takes-most outcomes</td></tr>
  <tr><td><b>Licensing / franchising</b></td><td>The company earns royalties or fees from letting others use its brand, technology or format; low capital needs</td></tr>
  <tr><td><b>Value-added reseller</b></td><td>Buys products and resells them with services added (installation, support)</td></tr>
</table>
<p><b>Pricing power</b> is the ability to raise prices (or pass on cost increases) without losing much volume. It comes from differentiation, brands, switching costs, network effects or a concentrated industry, and supports higher, more stable margins.</p>

<h3>3. Revenue drivers <span class="hot">Highly tested</span></h3>
<div class="formula">Revenue = volume × average price<br>Revenue growth ≈ volume growth + price growth (exactly: (1 + g<sub>vol</sub>)(1 + g<sub>price</sub>) − 1)</div>
<ul>
  <li>Break revenue down by <b>segment</b> (product, geography, customer type) because segments grow at different rates and earn different margins.</li>
  <li>Other drivers: number of stores × sales per store (with <b>same-store sales growth</b>), subscribers × average revenue per user (ARPU), customer retention (churn).</li>
</ul>
<div class="ex"><b>Example:</b> a company sells 2.0 million units at $50 ($100 million revenue). Next year volume grows 6% and price 2%. Revenue = 2.12 million × $51 = <b>$108.12 million</b>, growth of 8.12% (approximately 6% + 2%).</div>

<h3>4. Operating costs and operating leverage <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Gross margin</b> = gross profit / revenue: reflects pricing power and production costs.</li>
  <li><b>Operating (EBIT) margin</b> = EBIT / revenue: also reflects selling, general and admin costs and R&amp;D.</li>
  <li>Costs are <b>variable</b> (rise with volume: materials, commissions) or <b>fixed</b> (rent, salaried staff, depreciation).</li>
  <li><b>Contribution margin</b> per unit = price − variable cost per unit.</li>
</ul>
<div class="formula">Degree of operating leverage (DOL) = % change in EBIT / % change in revenue = total contribution margin / EBIT<br>Breakeven units = fixed costs / contribution margin per unit</div>
<div class="ex"><b>Example:</b> price $20, variable cost $12, 100,000 units, fixed costs $500,000.<br>Contribution = $8 × 100,000 = $800,000; EBIT = $300,000; DOL = 800,000 / 300,000 = <b>2.67</b>.<br>A 10% rise in sales raises EBIT by about 26.7%; a 10% fall cuts it by 26.7% (to $220,000).<br>Breakeven = 500,000 / 8 = <b>62,500 units</b>.</div>
<ul>
  <li>High fixed costs → high operating leverage → profits swing more with sales (more business risk), but margins expand quickly as volume grows (<b>economies of scale</b>).</li>
  <li><b>Unit economics</b>: the profit earned on each unit or customer (e.g. the lifetime value of a customer compared with the cost to acquire one).</li>
</ul>

<h3>5. Working capital, capital investment and capital structure</h3>
<div class="formula">Cash conversion cycle = days sales outstanding + days of inventory on hand − days payables outstanding<br>ROIC = NOPAT / invested capital, where NOPAT = EBIT × (1 − tax rate) and invested capital = debt + equity (or net operating assets)<br>Net debt / EBITDA = (debt − cash) / EBITDA</div>
<ul>
  <li><b>Working capital</b>: a shorter cash conversion cycle means less cash tied up. Some business models (e.g. retailers paid in cash who pay suppliers later) have a negative cycle.</li>
  <li><b>Capital investment</b>: compare capital expenditure with depreciation; capex well above depreciation suggests growth investment. <b>ROIC</b> above the cost of capital means the company creates value.</li>
  <li><b>Capital structure</b>: leverage (debt/EBITDA, net debt/EBITDA, debt/capital) and coverage (EBIT/interest) show financial risk and how much room the company has to borrow.</li>
</ul>
<div class="ex"><b>Example:</b> EBIT $50 million, tax rate 25%, invested capital $300 million → NOPAT $37.5 million, ROIC = <b>12.5%</b>. With a 9% cost of capital, the company earns more than its capital costs.<br>Debt $400 million, cash $100 million, EBITDA $150 million → net debt/EBITDA = <b>2.0×</b>.<br>DSO 45, DOH 60, DPO 40 → cash conversion cycle = <b>65 days</b>.</div>

<div class="how"><b>How it's tested:</b> identifying business models (subscription, freemium, razors and blades, network effects), sources of pricing power, revenue = volume × price, DOL and breakeven calculations, fixed vs variable costs, cash conversion cycle, ROIC vs cost of capital, and net debt/EBITDA.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe the elements of a company research report.</li>
  <li>Describe a company's business model, including its pricing power and value proposition.</li>
  <li>Analyze revenue by drivers and segments.</li>
  <li>Analyze operating profitability, including contribution margin, operating leverage and breakeven.</li>
  <li>Evaluate working capital, capital investment (ROIC) and capital structure.</li>
</ul></div>
`;

window.QB_HARD.l1copast = [
  ["The section of a company research report that explains why the analyst believes the shares are mispriced is the:",
    ["Investment thesis", "Business description", "Industry overview"],
    "The investment thesis (summary) sets out the analyst's view and the catalysts; the other sections provide the supporting background.", "r"],
  ["A company sells printers at close to cost and earns most of its profit from ink cartridges. Its business model is best described as:",
    ["Razors and blades", "Freemium", "Value-added reseller"],
    "A cheap main product with profitable repeat sales of consumables is the razors-and-blades model.", "r"],
  ["An online marketplace becomes more valuable to buyers as more sellers join, and more valuable to sellers as more buyers join. This is an example of:",
    ["Network effects", "Economies of scope", "Bundling"],
    "Network effects mean each user's value rises with the number of users, which can lead to winner-takes-most markets.", "r"],
  ["A software firm offers a basic version of its product for free and charges for premium features. This is a:",
    ["Freemium model", "Subscription-only model", "Licensing model"],
    "Freemium attracts users with a free tier and earns revenue from those who upgrade.", "r"],
  ["A company with strong pricing power is most likely able to:",
    ["Raise prices without losing much volume", "Grow sales without any capital investment", "Avoid competition from substitutes entirely"],
    "Pricing power is the ability to raise prices without losing much demand, supporting stable margins.", "r"],
  ["A company sells 2.0 million units at $50. Next year it expects volume to grow 6% and the average price to rise 2%. Forecast revenue is closest to:",
    ["$108.1 million", "$108.0 million", "$106.0 million"],
    "2.12 million × $51 = $108.12 million. Adding growth rates (8%) gives $108.0 million; $106 million ignores the price increase.", "c"],
  ["A product sells for $20 with a variable cost of $12 per unit. The company sells 100,000 units and has fixed costs of $500,000. Its degree of operating leverage is closest to:",
    ["2.67", "1.60", "0.38"],
    "Contribution = $800,000; EBIT = $300,000; DOL = 800,000 / 300,000 = 2.67. 1.60 divides contribution by fixed costs.", "c"],
  ["Using the same company (price $20, variable cost $12, fixed costs $500,000), the breakeven volume is closest to:",
    ["62,500 units", "41,667 units", "25,000 units"],
    "Fixed costs / contribution margin per unit = 500,000 / 8 = 62,500. 41,667 uses variable cost; 25,000 uses price.", "c"],
  ["A company with a degree of operating leverage of 2.67 expects revenue to fall 10%. Its EBIT will most likely:",
    ["Fall by about 26.7%", "Fall by about 10%", "Fall by about 3.7%"],
    "% change in EBIT ≈ DOL × % change in revenue = 2.67 × −10% = −26.7%.", "c"],
  ["Compared with a company with mostly variable costs, a company with mostly fixed costs most likely has:",
    ["More volatile operating income", "Lower business and operating risk", "Lower operating leverage"],
    "High fixed costs mean high operating leverage: EBIT swings more with sales.", "r"],
  ["A company has EBIT of $50 million, a 25% tax rate and invested capital of $300 million. Its cost of capital is 9%. Its ROIC and conclusion are:",
    ["12.5%; it is creating value", "16.7%; it is creating value", "12.5%; it is destroying value"],
    "NOPAT = 50 × 0.75 = 37.5; ROIC = 37.5 / 300 = 12.5%, above the 9% cost of capital. 16.7% uses pre-tax EBIT.", "c"],
  ["A company has days sales outstanding of 45, days of inventory on hand of 60 and days payables outstanding of 40. Its cash conversion cycle is:",
    ["65 days", "145 days", "25 days"],
    "45 + 60 − 40 = 65 days. 145 adds payables; 25 subtracts inventory days.", "c"],
  ["A company has debt of $400 million, cash of $100 million and EBITDA of $150 million. Its net debt to EBITDA ratio is:",
    ["2.0×", "2.7×", "3.3×"],
    "(400 − 100) / 150 = 2.0×. 2.7× uses gross debt; 3.3× adds cash.", "c"],
  ["A company's capital expenditure has been several times its depreciation for the past three years. This most likely indicates that the company is:",
    ["Investing for growth", "Underinvesting in its assets", "Selling off its assets"],
    "Capex well above depreciation means the asset base is expanding; capex below depreciation can signal underinvestment.", "s"],
];

window.GLOSSARY.push(
  ["Business model", "Who the customers are, what is sold, how it reaches them, how it's priced and how profit is made.", "l1copast"],
  ["Pricing power", "Ability to raise prices without losing much volume.", "l1copast"],
  ["Degree of operating leverage (DOL)", "% change in EBIT / % change in sales = contribution margin / EBIT.", "l1copast"],
  ["Breakeven units", "Fixed costs / (price − variable cost per unit).", "l1copast"],
  ["ROIC", "NOPAT / invested capital; above the cost of capital means value creation.", "l1copast"],
  ["Network effects", "A product becomes more valuable to each user as more people use it.", "l1copast"]
);
