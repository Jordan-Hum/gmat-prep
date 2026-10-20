// CFA Level I · Equity Investments · Learning module 7: Company Analysis: Forecasting.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1cofcst = `
<p class="syl">CFA Level I · Equity Investments · Learning module 7 of 8 · Company Analysis: Forecasting</p>
<p>Valuation needs forecasts of revenue, costs, investment and financing. This lesson explains the choices an analyst makes when forecasting (what to forecast, which approach, over what horizon), then works through forecasting revenue, operating costs, non-operating items, working capital, capital investment and capital structure, and finishes with scenario and sensitivity analysis. It builds on the FSA lesson on financial statement modeling.</p>

<h3>1. Forecasting choices</h3>
<ul>
  <li><b>What to forecast</b>: either line items directly (e.g. revenue growth of 5%) or their <b>drivers</b> (volume × price, stores × sales per store). Forecasting drivers ties the model to how the business actually works and makes assumptions easier to check.</li>
  <li><b>Forecast horizon</b>: long enough to cover a full business cycle for cyclical companies, the investment holding period, and the time for expected changes (a restructuring, an acquisition, a new product) to play out. After the explicit horizon, a <b>terminal value</b> captures the rest.</li>
  <li><b>Period</b>: annual forecasts are most common; quarterly forecasts suit seasonal businesses and short-term views.</li>
</ul>
<h4>Approaches <span class="hot">Highly tested</span></h4>
<table>
  <tr><th>Approach</th><th>Use</th></tr>
  <tr><td><b>Historical results</b></td><td>Assume the past continues (e.g. last year's margin); suitable for stable, mature companies</td></tr>
  <tr><td><b>Historical base rates and convergence</b></td><td>Assume unusual results move toward an industry or economy-wide average over time (<b>mean reversion</b>): high growth and high margins tend to fade as competition responds</td></tr>
  <tr><td><b>Management guidance</b></td><td>Use the company's own targets, adjusted for its record of meeting them</td></tr>
  <tr><td><b>Analyst discretion</b></td><td>The analyst's own judgment (e.g. after a change in strategy or industry structure), often combined with statistical methods such as regression</td></tr>
</table>

<h3>2. Forecasting revenue <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Top-down</b>: from the economy or industry down, e.g. industry sales × market share, or growth relative to GDP.</li>
  <li><b>Bottom-up</b>: from company drivers up, e.g. volume × price, number of stores × sales per store, capacity × utilization.</li>
  <li><b>Hybrid</b>: a mix (e.g. market size from industry data, share from company plans).</li>
</ul>
<div class="ex"><b>Example 1 (top-down):</b> industry sales of $80 billion grow 3%, and the company holds a 12.5% share: revenue = 80 × 1.03 × 12.5% = <b>$10.3 billion</b>.<br><b>Example 2 (bottom-up):</b> 200 existing stores average $2.5 million in sales, and same-store sales grow 3%. Twenty new stores open midway through the year, each earning $2.5 million a year. Revenue = 200 × 2.5 × 1.03 + 20 × 2.5 × 0.5 = 515 + 25 = <b>$540 million</b>.</div>
<p><b>Inflation</b>: revenue rises with price increases only if the company can pass them on. With 5% price increases and a 2% drop in volume, revenue grows (1.05)(0.98) − 1 = <b>2.9%</b>.</p>

<h3>3. Forecasting operating costs</h3>
<ul>
  <li><b>COGS</b>: usually via the gross margin (COGS = revenue × (1 − gross margin)), adjusted for input prices, product mix and hedging. Revenue of $500 million with a 38% gross margin gives COGS of <b>$310 million</b>.</li>
  <li><b>SG&amp;A and R&amp;D</b>: split fixed parts (grow with inflation) from variable parts (grow with revenue). Fixed costs create operating leverage, so margins expand as revenue grows.</li>
  <li>Watch for economies of scale and for competitive pressure that may push margins back toward industry norms.</li>
</ul>

<h3>4. Non-operating items</h3>
<ul>
  <li><b>Interest expense</b> = average debt × interest rate (consider refinancing at new rates). Debt rising from $400 million to $500 million at 6% → interest ≈ 450 × 6% = <b>$27 million</b>.</li>
  <li><b>Taxes</b>: use the <b>effective tax rate</b> (tax expense / pre-tax income) for net income and EPS forecasts; use the <b>cash tax rate</b> for cash flow forecasts. Both can differ from the statutory rate because of geographic mix, credits and deferred taxes.</li>
  <li><b>Share count</b>: buybacks reduce it, issuance and dilution increase it. Net income of $120 million with shares cut from 100 million to 95 million gives EPS of 120 / 95 = <b>$1.26</b> (vs $1.20).</li>
</ul>

<h3>5. Working capital, capital investment and capital structure</h3>
<ul>
  <li><b>Working capital</b>: apply days ratios to forecasts. Receivables = revenue × DSO / 365; inventory = COGS × DOH / 365; payables = COGS (or purchases) × DPO / 365. Revenue of $365 million with DSO of 40 days → receivables of <b>$40 million</b>.</li>
  <li><b>Capital expenditure</b>: <b>maintenance capex</b> keeps existing operations running (roughly linked to depreciation, adjusted for inflation); <b>growth capex</b> adds capacity and is linked to expected revenue growth and capacity needs. PP&amp;E = opening + capex − depreciation.</li>
  <li><b>Capital structure</b>: forecast debt, dividends and buybacks from the company's stated targets (e.g. a leverage target, payout ratio). The balance sheet must balance, with cash or a revolving credit line as the plug.</li>
</ul>

<h3>6. Terminal value and scenarios</h3>
<div class="formula">Terminal value at the end of year N (growing perpetuity) = CF<sub>N+1</sub> / (r − g) = CF<sub>N</sub> × (1 + g) / (r − g)</div>
<div class="ex"><b>Example:</b> final-year free cash flow is $10 million, long-run growth 3%, required return 9%: terminal value = 10 × 1.03 / 0.06 = <b>$171.7 million</b>.</div>
<ul>
  <li>The terminal growth rate should be sustainable (usually no higher than long-run nominal GDP growth), and the final year should be <b>normalized</b> (not a peak or a trough).</li>
  <li><b>Sensitivity analysis</b>: change one input at a time to see its effect on value.</li>
  <li><b>Scenario analysis</b>: change several related inputs together to reflect a consistent story (e.g. a recession case with lower volume, lower prices and lower margins). Gives a range of outcomes and helps check the investment thesis.</li>
</ul>

<div class="how"><b>How it's tested:</b> choosing a forecasting approach (historical, base rates and convergence, guidance, discretion), top-down vs bottom-up revenue calculations, COGS via gross margin, interest and tax forecasts, working capital via days ratios, maintenance vs growth capex, terminal value, and sensitivity vs scenario analysis.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Explain the choice of forecast object, horizon and approach.</li>
  <li>Forecast revenue with top-down, bottom-up and hybrid methods, including inflation effects.</li>
  <li>Forecast operating costs, interest, taxes and share count.</li>
  <li>Forecast working capital, maintenance and growth capex, and capital structure.</li>
  <li>Calculate a terminal value and distinguish sensitivity from scenario analysis.</li>
</ul></div>
`;

window.QB_HARD.l1cofcst = [
  ["Maintenance capital expenditure is best described as spending needed to:",
    ["Sustain the company's current operations", "Expand the company's capacity for future growth", "Acquire other businesses"],
    "Maintenance capex replaces worn-out assets to keep current operations going; growth capex adds capacity.", "r"],
  ["An analyst assumes a company's unusually high operating margin will move gradually toward the industry average over five years. This forecasting approach relies on:",
    ["Base rates and convergence", "Management's own guidance", "Last year's historical results"],
    "Mean reversion toward industry or economy-wide norms is the base rates and convergence approach.", "r"],
  ["Forecasting revenue as volume × price rather than as a single growth rate is most useful because it:",
    ["Ties the model to how the business works", "Removes the need for any other assumptions", "Guarantees a more accurate forecast"],
    "Driver-based forecasts make assumptions explicit and easier to check, though they don't guarantee accuracy.", "r"],
  ["A retailer has 200 stores averaging $2.5 million in sales, and same-store sales should grow 3%. Twenty new stores, each expected to earn $2.5 million a year, open midway through the year. Forecast revenue is closest to:",
    ["$540 million", "$515 million", "$567 million"],
    "200 × 2.5 × 1.03 = 515, plus 20 × 2.5 × 0.5 = 25, for $540 million. $567 million counts the new stores for a full year with growth.", "c"],
  ["Industry sales of $80 billion are expected to grow 3%, and a company is expected to keep a 12.5% market share. Its forecast revenue is closest to:",
    ["$10.3 billion", "$10.0 billion", "$12.9 billion"],
    "80 × 1.03 × 12.5% = $10.3 billion. $10.0 billion ignores industry growth.", "c"],
  ["A company raises prices by 5%, and volume falls by 2% as a result. Its revenue growth is closest to:",
    ["2.9%", "3.0%", "7.1%"],
    "(1.05)(0.98) − 1 = 2.9%. Simply subtracting gives 3.0%.", "c"],
  ["Forecast revenue is $500 million and the expected gross margin is 38%. Forecast cost of goods sold is closest to:",
    ["$310 million", "$190 million", "$362 million"],
    "COGS = 500 × (1 − 0.38) = $310 million; $190 million is gross profit.", "c"],
  ["A company's debt is expected to rise from $400 million to $500 million during the year at an interest rate of 6%. Forecast interest expense is closest to:",
    ["$27 million", "$24 million", "$30 million"],
    "Average debt × rate = 450 × 6% = $27 million. Using opening or closing debt gives $24 million or $30 million.", "c"],
  ["To forecast net income and EPS, an analyst would most appropriately apply the:",
    ["Effective tax rate", "Cash tax rate", "Highest marginal tax rate"],
    "The effective tax rate (tax expense / pre-tax income) gives reported net income; the cash tax rate is used for cash flow forecasts.", "r"],
  ["A company expects net income of $120 million. It plans to buy back 5 million of its 100 million shares at the start of the year. Forecast EPS is closest to:",
    ["$1.26", "$1.20", "$1.14"],
    "120 / 95 = $1.26. Ignoring the buyback gives $1.20.", "c"],
  ["Forecast revenue is $365 million and the company's days sales outstanding is 40. Forecast accounts receivable is closest to:",
    ["$40 million", "$9 million", "$146 million"],
    "Receivables = 365 × 40 / 365 = $40 million.", "c"],
  ["Growth capital expenditure is most appropriately forecast with reference to:",
    ["Expected revenue growth and capacity", "Current depreciation expense only", "The company's dividend payout ratio"],
    "Growth capex adds capacity to support higher sales; maintenance capex is linked to depreciation.", "r"],
  ["A company's final-year free cash flow is forecast at $10 million. With long-run growth of 3% and a required return of 9%, the terminal value is closest to:",
    ["$171.7 million", "$166.7 million", "$114.4 million"],
    "10 × 1.03 / (0.09 − 0.03) = $171.7 million. $166.7 million forgets to grow the cash flow one year.", "c"],
  ["An analyst models a recession case in which volume, prices and margins all fall together. This is an example of:",
    ["Scenario analysis", "Sensitivity analysis", "Regression analysis"],
    "Scenario analysis changes several related inputs together; sensitivity analysis changes one input at a time.", "r"],
  ["A company is midway through a restructuring that is expected to finish in three years. The explicit forecast horizon should most likely:",
    ["Extend beyond the restructuring", "End when the restructuring ends", "Cover only the next 12 months"],
    "The horizon should be long enough to capture normalized results after the expected change has played out.", "s"],
];

window.GLOSSARY.push(
  ["Base rates and convergence", "Forecasting that unusual growth or margins move toward industry norms (mean reversion).", "l1cofcst"],
  ["Maintenance vs growth capex", "Spending to sustain current operations vs spending to add capacity for growth.", "l1cofcst"],
  ["Effective vs cash tax rate", "Tax expense / pre-tax income (for EPS) vs taxes paid / pre-tax income (for cash flow).", "l1cofcst"],
  ["Sensitivity vs scenario analysis", "Changing one input at a time vs changing several related inputs together.", "l1cofcst"],
  ["Terminal value", "Value of cash flows beyond the explicit forecast horizon, e.g. CF × (1 + g) / (r − g).", "l1cofcst"]
);
