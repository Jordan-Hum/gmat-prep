// CFA Level I · Financial Statement Analysis · Learning module 12: Introduction to Financial Statement Modeling.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1model = `
<p class="syl">CFA Level I · Financial Statement Analysis · Learning module 12 of 12 · Introduction to Financial Statement Modeling</p>
<p>Analysts forecast a company's future financial statements to value it. This lesson walks through how a model is built (revenue, costs, non-operating items, balance sheet and cash flow), how competition, inflation and technology affect forecasts, how to choose the forecast horizon, and the behavioural biases that distort forecasts. It ties together everything in FSA and leads straight into Equity valuation.</p>

<h3>1. Forecasting revenue <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Approach</th><th>How it works</th><th>Examples</th></tr>
  <tr><td><b>Top-down</b></td><td>Start from the economy or industry and work down to the company</td><td><b>Growth relative to GDP</b> (company grows at GDP growth ± a premium); <b>market growth and market share</b> (forecast industry sales × expected share)</td></tr>
  <tr><td><b>Bottom-up</b></td><td>Start from company-level drivers and build up</td><td><b>Volume × average price</b>; <b>number of stores × sales per store</b> (with new openings and same-store growth); capacity-based (production capacity × utilization); return on capital invested</td></tr>
  <tr><td><b>Hybrid</b></td><td>Combine elements of both</td><td>Market size from industry data, volume and price from company data</td></tr>
</table>
<p>Example: industry sales of $50 billion growing 4%, and the company's share rising from 10% to 11% → next year's revenue = 50 × 1.04 × 11% = $5.72 billion.</p>

<h3>2. Forecasting costs and profits</h3>
<ul>
  <li><b>COGS</b>: usually forecast as a percentage of revenue (via gross margin), adjusted for expected input prices, product mix and hedging. Large cost items may be modelled separately.</li>
  <li><b>SG&amp;A</b>: split into fixed parts (head office, rent: grow with inflation) and variable parts (sales commissions, distribution: grow with revenue). Fixed costs create <b>operating leverage</b> and economies of scale.</li>
  <li><b>Non-operating items</b>: interest expense = debt × interest rate (consider refinancing and rate changes); interest income on cash; <b>income taxes</b> via an effective tax rate (consider statutory vs effective vs cash tax rates and geographic mix); share count (buybacks, issuance, dilution).</li>
</ul>

<h3>3. Balance sheet and cash flow forecasts</h3>
<ul>
  <li><b>Working capital</b>: forecast receivables, inventory and payables using efficiency ratios (DSO, DOH, days of payables) applied to forecast revenue and COGS.</li>
  <li><b>PP&amp;E</b>: opening balance + capital expenditure − depreciation. Capex has a maintenance part (roughly linked to depreciation, adjusted for inflation) and a growth part (linked to expected revenue growth and capacity needs).</li>
  <li>Debt and equity follow the company's financing plans and target capital structure. The cash flow statement is derived from the income statement and changes in the balance sheet, and the model must balance (cash ties out).</li>
</ul>

<h3>4. Factors that shape forecasts</h3>
<ul>
  <li><b>Competition (Porter's five forces)</b>: threat of new entrants, threat of substitutes, bargaining power of customers, bargaining power of suppliers, rivalry among competitors. Strong forces mean lower and less durable margins; weak forces support pricing power.</li>
  <li><b>Inflation and deflation</b>: a company's ability to pass on cost increases depends on its pricing power and the price elasticity of demand. Revenue may rise with prices while volumes fall; costs may rise at different rates (e.g. commodities vs wages).</li>
  <li><b>Technological change</b>: can create substitutes, cannibalize existing products or lower costs; scenario analysis helps.</li>
  <li><b>Forecast horizon</b>: depends on the investment strategy (e.g. a holding period), the company's business cycle (forecast at least a full cycle for cyclical companies, using normalized results) and how long it takes for expected changes (e.g. an acquisition or restructuring) to play out. Beyond the explicit horizon, analysts use a <b>terminal value</b> based on a long-run growth rate or a multiple.</li>
</ul>

<h3>5. Behavioural biases in forecasting <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Bias</th><th>Description</th><th>Remedy</th></tr>
  <tr><td><b>Overconfidence</b></td><td>Overestimating forecast accuracy; ranges that are too narrow</td><td>Record and review past forecast errors; use scenarios and wider ranges</td></tr>
  <tr><td><b>Illusion of control</b></td><td>Believing you can control or influence outcomes you can't; adding detail that doesn't improve accuracy</td><td>Simpler models; focus on the few variables that matter</td></tr>
  <tr><td><b>Conservatism</b></td><td>Holding on to prior views and <b>under-reacting to new information</b></td><td>Assess new information on its merits; be willing to update</td></tr>
  <tr><td><b>Representativeness</b></td><td>Judging by similarity to a stereotype (e.g. "it's a growth company, so it'll keep growing"), ignoring base rates</td><td>Consider base rates (how often companies like this actually achieve such growth)</td></tr>
  <tr><td><b>Confirmation bias</b></td><td>Seeking information that supports existing views and ignoring contrary evidence</td><td>Actively seek disconfirming evidence and opposing views</td></tr>
</table>

<div class="how"><b>How it's tested:</b> identifying top-down vs bottom-up revenue approaches, forecasting with market share or store data, forecasting costs and working capital, Porter's forces and inflation effects, choosing the forecast horizon, and naming the behavioural bias in a description.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe top-down, bottom-up and hybrid approaches to forecasting revenue.</li>
  <li>Forecast costs, non-operating items, working capital, PP&amp;E and cash flows.</li>
  <li>Explain how competition, inflation and technology affect forecasts, and how to choose the forecast horizon.</li>
  <li>Identify overconfidence, illusion of control, conservatism, representativeness and confirmation bias in forecasting.</li>
</ul></div>
`;

window.QB_HARD.l1model = [
  ["An analyst forecasts a retailer's revenue by multiplying the expected number of stores by the average sales per store. This is:",
    ["A bottom-up approach", "A top-down approach", "A growth-relative-to-GDP approach"],
    "Bottom-up forecasts build from company-level drivers (stores, volumes, prices). Top-down starts from the economy or market (GDP growth, market size × share).", "r"],
  ["An analyst updates her revenue forecast only slightly despite strong new evidence that demand has fallen. This is most likely:",
    ["Conservatism bias", "Representativeness bias", "Availability bias"],
    "Conservatism bias is the failure to update beliefs enough when new information arrives.", "r"],
  ["An analyst forecasts a company's revenue by projecting industry sales and multiplying by the company's expected market share. This approach is:",
    ["Top-down", "Bottom-up", "Capacity-based"],
    "Starting from the industry (or economy) and working down to the company is top-down.", "r"],
  ["Industry sales are $50 billion and expected to grow 4%; the company's market share is expected to rise from 10% to 11%. Next year's revenue forecast is closest to:",
    ["$5.72 billion", "$5.20 billion", "$5.50 billion"],
    "50 × 1.04 × 11% = $5.72 billion. Keeping a 10% share gives $5.20 billion.", "c"],
  ["Which cost is most likely to be forecast as growing with inflation rather than with revenue?",
    ["Head office rent", "Sales commissions", "Raw material costs"],
    "Fixed costs like rent grow roughly with inflation; variable costs such as commissions and materials scale with sales volume.", "r"],
  ["An analyst forecasts receivables by applying the company's historical days sales outstanding to forecast revenue. This is an example of forecasting:",
    ["Working capital using efficiency ratios", "Capital expenditure from depreciation", "Revenue with a top-down approach"],
    "Working capital items are commonly projected with DSO, DOH and days of payables.", "r"],
  ["Ending PP&E in a forecast balance sheet equals:",
    ["Beginning PP&E plus capex minus depreciation", "Beginning PP&E plus depreciation minus capex", "Revenue times the fixed asset turnover"],
    "Net PP&E rolls forward: opening balance + capital expenditure − depreciation (and disposals).", "r"],
  ["According to Porter's framework, strong bargaining power of customers most likely leads a company to have:",
    ["Lower profit margins", "Higher pricing power", "Higher barriers to entry"],
    "Powerful buyers can push prices down and demand more, compressing margins.", "r"],
  ["For a highly cyclical company, the forecast horizon should most likely:",
    ["Cover at least one full cycle", "Be limited to the next quarter", "Exclude any recession years"],
    "Forecasting over a full cycle (with normalized earnings) avoids extrapolating a peak or trough.", "r"],
  ["An analyst gives a forecast range of EPS that turns out to be far too narrow, believing her model to be more accurate than it is. This reflects:",
    ["Overconfidence bias", "Conservatism bias", "Confirmation bias"],
    "Overconfidence leads to excessively narrow ranges and overestimation of forecast accuracy.", "s"],
  ["An analyst assumes a company will keep growing at 25% because it resembles other successful tech firms, ignoring how rarely companies sustain such growth. This is:",
    ["Representativeness bias", "Illusion of control", "Overconfidence bias"],
    "Judging by similarity to a stereotype while neglecting base rates is representativeness.", "s"],
];

window.GLOSSARY.push(
  ["Top-down vs bottom-up forecasting", "Economy/industry down to the company vs company drivers (volume × price, stores) up.", "l1model"],
  ["Forecasting PP&E", "Opening PP&E + capex (maintenance + growth) − depreciation.", "l1model"],
  ["Porter's five forces", "New entrants, substitutes, buyer power, supplier power, rivalry.", "l1model"],
  ["Forecasting biases", "Overconfidence, illusion of control, conservatism, representativeness, confirmation.", "l1model"]
);
