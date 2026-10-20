// CFA Level I · Portfolio Management · Learning module 6: Introduction to Risk Management.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1riskmgmt = `
<p class="syl">CFA Level I · Portfolio Management (8–12%) · Learning module 6 of 6 · Introduction to Risk Management</p>
<p>Risk management isn't about avoiding risk: it's about taking the right risks, in the right amounts, knowingly. This lesson covers the risk management framework, risk governance and risk tolerance, risk budgeting, the main financial and non-financial risks, how risks are measured (including VaR), and the four ways to modify risk.</p>

<h3>1. What risk management is</h3>
<p><b>Risk management</b> is the process of <b>defining risk tolerance</b>, <b>identifying and measuring</b> the risks an organization faces, and <b>modifying and monitoring</b> them so that the risks taken match the tolerance. The goal is to maximize value within acceptable risk, not to minimize risk.</p>
<h4>The risk management framework</h4>
<ul>
  <li><b>Risk governance</b>: top-down oversight by the board and senior management.</li>
  <li><b>Risk identification and measurement</b>.</li>
  <li><b>Risk infrastructure</b>: people, systems and data to track risk.</li>
  <li><b>Policies and processes</b>, <b>monitoring, mitigation and management</b>, <b>communication</b>, and <b>strategic analysis</b> integrating risk into decisions.</li>
</ul>

<h3>2. Risk governance, tolerance and budgeting <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Risk governance</b>: the <b>board</b> (and senior management) sets the overall <b>risk tolerance</b> and oversees risk management; often through a risk committee and a chief risk officer. <b>Enterprise risk management</b> looks at all risks across the organization together.</li>
  <li><b>Risk tolerance</b>: how much risk the organization is willing and able to take, considering its goals, financial strength, competitive position and the downside it can survive. It's set before problems arise.</li>
  <li><b>Risk budgeting</b>: allocating the total risk tolerance across activities, asset classes or managers (e.g. VaR limits, tracking error budgets, factor exposures) to get the best return per unit of risk.</li>
</ul>

<h3>3. Identifying risks <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Financial risks</th><th>Non-financial risks</th></tr>
  <tr><td>
    <ul>
      <li><b>Market risk</b>: interest rates, exchange rates, equity and commodity prices</li>
      <li><b>Credit risk</b>: a counterparty or borrower fails to pay</li>
      <li><b>Liquidity risk</b>: having to sell at a big discount (or being unable to sell) to raise cash</li>
    </ul>
  </td><td>
    <ul>
      <li><b>Settlement</b> risk (one side pays, the other doesn't deliver)</li>
      <li><b>Legal</b> risk; <b>compliance / regulatory</b> risk</li>
      <li><b>Accounting</b> risk; <b>tax</b> risk</li>
      <li><b>Model</b> risk (a wrong or misused model); <b>tail</b> risk (extreme events more likely than assumed)</li>
      <li><b>Operational</b> risk: people, processes, systems, external events (including cyber attacks)</li>
      <li><b>Solvency</b> risk: running out of cash to continue</li>
    </ul>
  </td></tr>
</table>
<p>Risks for individuals also include <b>mortality</b> (dying early, leaving dependants short), <b>longevity</b> (outliving savings), health (morbidity) and property and casualty risks. Risks interact: in a crisis, market, credit and liquidity risks tend to strike together.</p>

<h3>4. Measuring risk <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Standard deviation</b> (volatility); <b>beta</b> (equity market sensitivity); <b>duration and convexity</b> (interest rate sensitivity); option sensitivities ("Greeks": delta = price, gamma = change in delta, vega = volatility, rho = interest rate).</li>
  <li><b>Value at risk (VaR)</b>: the <b>minimum</b> loss expected with a given probability over a given period. "One-day 5% VaR of $1 million" means a 5% chance of losing <b>at least</b> $1 million in a day (equivalently, 95% confidence the loss won't exceed $1 million). It doesn't say how large losses beyond VaR can be.</li>
  <li><b>Conditional VaR (expected shortfall)</b>: the <b>average</b> loss when the loss exceeds VaR; always ≥ VaR.</li>
  <li><b>Scenario analysis</b> and <b>stress testing</b>: estimate losses in specific or extreme events (e.g. a repeat of 2008), which helps with tail risk that statistical measures miss.</li>
  <li>Credit risk: probability of default, loss given default, exposure. Non-financial risks are harder to measure and rely more on judgment.</li>
</ul>
<div class="ex"><b>Example:</b> a $50 million portfolio has a daily standard deviation of 1%. Assuming normal returns with zero mean, the one-day 5% VaR ≈ 1.65 × 1% × 50,000,000 = <b>$825,000</b>. On 1 day in 20, losses are expected to be at least that large.</div>

<h3>5. Modifying risk <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Method</th><th>Description</th><th>Example</th></tr>
  <tr><td><b>Prevention and avoidance</b></td><td>Don't take on the risk, or take steps so it can't happen</td><td>Not entering a risky market; strong security systems</td></tr>
  <tr><td><b>Acceptance</b></td><td>Keep the risk, often by <b>self-insuring</b> (setting aside reserves) or <b>diversifying</b></td><td>Holding a reserve fund for small losses</td></tr>
  <tr><td><b>Transfer</b></td><td>Pay a third party to bear the risk; mainly <b>insurance</b></td><td>Insuring factories against fire</td></tr>
  <tr><td><b>Shifting</b></td><td>Change the distribution of outcomes using <b>derivatives</b></td><td>Hedging with futures, forwards, swaps or buying options</td></tr>
</table>
<p>The choice depends on costs and benefits: the method that gives the desired risk profile at the lowest cost. Some risks are worth keeping because the organization has an advantage in bearing them.</p>

<div class="how"><b>How it's tested:</b> the definition and goal of risk management, who sets risk tolerance, risk budgeting, classifying risks as financial or non-financial (and naming them), interpreting VaR and CVaR, scenario analysis and stress testing, and choosing among prevention, acceptance, transfer and shifting.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Define risk management and describe the risk management framework.</li>
  <li>Describe risk governance, risk tolerance and risk budgeting.</li>
  <li>Identify financial and non-financial risks and how they interact.</li>
  <li>Describe risk measures, including VaR, CVaR, scenario analysis and stress tests.</li>
  <li>Describe methods of modifying risk.</li>
</ul></div>
`;

window.QB_HARD.l1riskmgmt = [
  ["Setting an organization's overall risk tolerance is primarily the responsibility of:",
    ["The board and senior management", "The individual traders and portfolio managers", "The external auditor"],
    "Risk governance is the top-down process by which the board sets risk tolerance and oversees the risk management framework.", "r"],
  ["Which of the following is a non-financial risk?",
    ["Model risk", "Credit risk", "Liquidity risk"],
    "Financial risks are market, credit and liquidity risk. Model, operational, legal, compliance, settlement and tax risks are non-financial.", "r"],
  ["A company buys an insurance policy to cover damage to its factories. This is an example of risk:",
    ["Transfer", "Shifting", "Acceptance"],
    "Insurance transfers risk to another party. Shifting uses derivatives to change the risk distribution; acceptance includes self-insurance and diversification.", "r"],
  ["A portfolio's one-day 5% value at risk (VaR) is $1 million. This means:",
    ["There's a 5% chance of losing at least $1 million in a day", "The portfolio can't lose more than $1 million in a day", "The expected daily loss of the portfolio is $1 million"],
    "VaR is a minimum loss at a given probability, not a maximum. Losses beyond VaR can be much larger (conditional VaR measures them).", "r"],
  ["The main goal of risk management is to:",
    ["Match risks taken to risk tolerance", "Eliminate risk from the organization", "Minimize risk regardless of the cost"],
    "Risk management ensures the risks taken are deliberate and within tolerance, to maximize value.", "r"],
  ["Allocating a portfolio's total tracking error limit among several active managers is an example of:",
    ["Risk budgeting", "Risk transfer", "Risk avoidance"],
    "Risk budgeting divides the total risk tolerance among activities or managers.", "r"],
  ["A pension fund's investments suffer losses because a trading system fails and orders are executed incorrectly. This is:",
    ["Operational risk", "Market risk", "Counterparty credit risk"],
    "Losses from failed people, processes, systems or external events are operational (non-financial) risk.", "s"],
  ["A firm pays for securities but the counterparty fails to deliver them. This is:",
    ["Settlement risk", "Model risk", "Market liquidity risk"],
    "Settlement risk arises when one side of a trade performs and the other doesn't.", "r"],
  ["A retiree is concerned about running out of money because she may live longer than expected. This is:",
    ["Longevity risk", "Mortality risk", "Morbidity risk"],
    "Longevity risk is outliving one's assets; mortality risk is dying early.", "r"],
  ["A portfolio has a one-day 1% VaR of $2 million. Its conditional VaR (expected shortfall) is most likely:",
    ["More than $2 million", "Less than $2 million", "Exactly $2 million"],
    "CVaR is the average loss in the worst 1% of days, so it's at least as large as VaR.", "r"],
  ["A $50 million portfolio has a daily standard deviation of 1%. Assuming normal returns with zero mean, its one-day 5% VaR is closest to:",
    ["$825,000", "$500,000", "$1,165,000"],
    "1.65 × 1% × 50,000,000 = $825,000. $1,165,000 uses the 1% z-value (2.33).", "c"],
  ["Estimating how a portfolio would perform if the 2008 financial crisis happened again is an example of:",
    ["A stress test", "Parametric value at risk", "Risk budgeting"],
    "Scenario analysis and stress tests examine losses in specific, often extreme, events.", "r"],
  ["A company enters an interest rate swap to change its exposure to rising rates. This method of modifying risk is:",
    ["Risk shifting", "Risk transfer", "Risk acceptance"],
    "Derivatives change the distribution of outcomes (shifting); insurance is transfer.", "r"],
  ["A company holds a reserve fund to cover small, frequent losses instead of buying insurance. This is:",
    ["Risk acceptance", "Risk transfer", "Risk shifting"],
    "Keeping the risk and setting money aside is acceptance through self-insurance.", "r"],
];

window.GLOSSARY.push(
  ["Financial vs non-financial risk","Financial: market, credit, liquidity. Non-financial: operational, model, legal, compliance, settlement, tax, solvency, etc.","l1riskmgmt"],
  ["Risk modification","Prevention/avoidance, acceptance (self-insure, diversify), transfer (insurance), shifting (derivatives).","l1riskmgmt"],
  ["Value at risk (VaR)","Minimum loss expected with a given probability over a period, e.g. 5% chance of losing at least $X in a day. Not a maximum.","l1riskmgmt"],
  ["Risk governance and tolerance", "Board sets the overall risk tolerance and oversees risk management.", "l1riskmgmt"],
  ["Conditional VaR (expected shortfall)", "Average loss when losses exceed VaR.", "l1riskmgmt"],
  ["Risk transfer vs shifting", "Insurance passes risk to a third party vs derivatives change the distribution of outcomes.", "l1riskmgmt"]
);
