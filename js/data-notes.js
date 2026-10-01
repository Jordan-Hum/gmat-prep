// Study notes per topic (HTML). The CIRE topics' in-depth lessons live in js/data-lessons-*.js, organized by
// the learning outcomes in CIRO's CIRE syllabus (January 2025). This file holds the RSE-only topic.
window.NOTES = window.NOTES || {};
window.NOTES.port = `
<h3>Return</h3>
<div class="formula">Holding period return = (End value − Start value + Income) ÷ Start value</div>
<div class="formula">Real return ≈ Nominal return − Inflation</div>
<div class="formula">Rule of 72: Years to double ≈ 72 ÷ Rate</div>

<h3>Risk</h3>
<ul>
  <li><b>Standard deviation</b> = total risk (volatility).</li>
  <li><b>Systematic (market) risk</b>: can't be diversified away, measured by <b>beta</b>. <b>Unsystematic (specific) risk</b>: reduced by diversification.</li>
  <li><b>Correlation</b> ranges from −1 to +1. The lower the correlation, the greater the diversification benefit (−1 = maximum).</li>
  <li>Other risks: inflation, interest rate, liquidity, currency (foreign exchange), default/credit, political, business.</li>
</ul>
<div class="formula">CAPM: Required return = Rf + β × (Rm − Rf)</div>
<div class="formula">Sharpe ratio = (Rp − Rf) ÷ Standard deviation</div>

<h3>The portfolio management process</h3>
<ol>
  <li>Determine <b>objectives</b> (safety, income, growth) and <b>constraints</b> (time horizon, liquidity, tax, legal, unique circumstances).</li>
  <li>Write the <b>Investment Policy Statement (IPS)</b>.</li>
  <li>Set the <b>asset allocation</b>: <b>strategic</b> (long-term target) vs. <b>tactical</b> (short-term tilts).</li>
  <li>Select securities, then <b>monitor and rebalance</b> back to targets.</li>
  <li>Evaluate performance against a <b>benchmark</b>.</li>
</ol>

<h3>Construction tools</h3>
<ul>
  <li><b>Bond ladder</b> (equal amounts across maturities), <b>barbell</b> (short + long only), <b>bullet</b> (concentrated around one date).</li>
  <li><b>Dollar-cost averaging</b>: fixed amount regularly, so average cost falls below average price.</li>
  <li><b>Rebalancing</b>: sell what's overweight and buy what's underweight to return to target.</li>
  <li><b>Alpha</b> = actual return − CAPM-required return.</li>
  <li><b>Time-weighted return</b> evaluates the manager; <b>money-weighted</b> reflects the client's experience (used in CRM2 reports).</li>
  <li>Avoid <b>home bias</b>: the Canadian market is concentrated in financials, energy and materials.</li>
</ul>

<h3>Management styles</h3>
<ul>
  <li><b>Active</b> (try to beat the index) vs. <b>passive</b> (track the index at low cost).</li>
  <li>Equity: <b>value</b> (low P/E, P/B), <b>growth</b> (high earnings growth), <b>sector rotation</b>, <b>market timing</b>, <b>top-down / bottom-up</b>.</li>
  <li>Longer time horizon and higher risk tolerance → more equities.</li>
</ul>
`;
