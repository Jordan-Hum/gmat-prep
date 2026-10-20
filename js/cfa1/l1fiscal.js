// CFA Level I · Economics · Learning module 3: Fiscal Policy.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1fiscal = `
<p class="syl">CFA Level I · Economics · Learning module 3 of 8 · Fiscal Policy</p>
<p><b>Fiscal policy</b> is the government's use of spending and taxation to influence the economy. This lesson covers its objectives and tools, how strongly it affects output (the fiscal multiplier), the arguments about deficits and debt, how to judge whether policy is expansionary or contractionary, and why fiscal policy is hard to time well. Monetary policy and the policy mix are in the next lesson.</p>

<h3>1. Objectives and tools</h3>
<p>Fiscal policy aims to stabilize aggregate demand over the cycle, redistribute income and wealth, and allocate resources (e.g. to infrastructure, education, defence).</p>
<table>
  <tr><th>Spending tools</th><th>Revenue tools</th></tr>
  <tr><td><b>Transfer payments</b> (pensions, unemployment benefits; redistribute income, don't directly buy output)<br><b>Current spending</b> (goods and services: wages of public employees, supplies)<br><b>Capital spending</b> (infrastructure: roads, hospitals; raises future productive capacity)</td><td><b>Direct taxes</b> on income and wealth (personal and corporate income tax, inheritance tax)<br><b>Indirect taxes</b> on spending (sales tax, VAT, excise duties on alcohol, tobacco, fuel)</td></tr>
</table>
<ul>
  <li>Desirable tax attributes: <b>simplicity</b>, <b>efficiency</b> (minimal distortion of incentives), <b>fairness</b> (horizontal equity: similar people pay similar taxes; vertical equity: people with more pay more) and <b>revenue sufficiency</b>.</li>
  <li>Indirect taxes can be changed quickly and are hard to avoid; direct taxes and new spending projects take longer to change.</li>
</ul>

<h3>2. How fiscal policy affects output: the multiplier <span class="hot">Highly tested</span></h3>
<p>An increase in government spending raises income, part of which is spent again (the <b>marginal propensity to consume</b>, MPC = c), and so on. Taxes leak some of each round.</p>
<div class="formula">Fiscal multiplier = 1 / [1 − c(1 − t)], where c = MPC and t = tax rate</div>
<div class="ex"><b>Example:</b> MPC = 0.9, tax rate = 20%: multiplier = 1/(1 − 0.9 × 0.8) = 1/0.28 = 3.57. A $10 billion increase in spending raises GDP by up to $35.7 billion. With MPC = 0.8 and t = 25%: 1/(1 − 0.6) = 2.5.</div>
<ul>
  <li>A higher MPC or a lower tax rate → larger multiplier.</li>
  <li><b>Balanced budget multiplier</b>: if spending and taxes rise by the same amount, aggregate demand still <b>rises</b>, because the spending is fully spent while part of the tax would have been saved anyway (the balanced budget multiplier is positive, equal to 1 in the simple model).</li>
  <li><b>Crowding out</b>: government borrowing can raise interest rates and reduce private investment, shrinking the effective multiplier.</li>
  <li><b>Ricardian equivalence</b>: if consumers expect a debt-financed tax cut to be paid for by higher future taxes, they save the whole tax cut, so it has <b>no effect</b> on spending. In practice it holds only partly (people may be liquidity constrained or not look that far ahead).</li>
</ul>

<h3>3. Discretionary policy, automatic stabilizers and the budget</h3>
<ul>
  <li><b>Automatic stabilizers</b> work without new legislation: progressive income taxes and unemployment benefits. In a recession, tax revenue falls and benefits rise, cushioning demand; in a boom, the reverse.</li>
  <li><b>Discretionary fiscal policy</b>: deliberate changes in spending or tax rates.</li>
  <li><b>Structural (cyclically adjusted) budget balance</b>: the balance that would occur at full employment. It's the best indicator of the fiscal <b>stance</b>, because the actual balance moves automatically with the cycle (a recession creates a deficit even with unchanged policy).</li>
  <li>An increase in the structural deficit = expansionary; a decrease = contractionary.</li>
</ul>
<h4>Fiscal policy lags</h4>
<ol>
  <li><b>Recognition lag</b>: time to realize the economy needs help (data arrive late and are revised).</li>
  <li><b>Action lag</b>: time to decide and legislate.</li>
  <li><b>Impact lag</b>: time for the measures to affect the economy.</li>
</ol>
<p>Other difficulties: uncertainty about where the economy is relative to potential, macro forecasts that may be wrong, misreading a supply-side problem as a demand problem, political pressures, and limited room when debt is already high.</p>

<h3>4. Deficits and government debt</h3>
<table>
  <tr><th>Reasons for concern about large deficits and debt</th><th>Reasons for less concern</th></tr>
  <tr><td>Higher future taxes reduce incentives to work and invest<br>Risk of monetization (financing by printing money → inflation)<br>Crowding out of private investment<br>Loss of investor confidence, higher borrowing costs, possible default</td><td>Debt owed to domestic citizens is partly a transfer between them<br>Borrowing may finance productive capital investment<br>Ricardian equivalence: private saving rises to offset<br>Deficits can help an economy with high unemployment<br>Debt-financed tax cuts can improve incentives</td></tr>
</table>
<p>The <b>debt-to-GDP ratio</b> rises if the real interest rate on the debt exceeds real GDP growth, unless the government runs a big enough primary surplus.</p>

<div class="how"><b>How it's tested:</b> computing the fiscal multiplier, classifying tools (direct vs indirect taxes, transfer vs capital spending), the balanced budget multiplier, Ricardian equivalence, automatic stabilizers vs discretionary policy, the structural balance as the measure of stance, and the order and meaning of the three lags.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe fiscal policy objectives, spending and revenue tools, and desirable tax attributes.</li>
  <li>Compute and interpret the fiscal multiplier and the balanced budget effect.</li>
  <li>Explain Ricardian equivalence, crowding out and automatic stabilizers.</li>
  <li>Use the structural budget balance to judge the fiscal stance and describe the lags and limits of fiscal policy.</li>
  <li>Summarize arguments for and against concern over deficits and debt.</li>
</ul></div>
`;

window.QB_HARD.l1fiscal = [
  ["If the marginal propensity to consume is 0.8 and the tax rate is 25%, the fiscal multiplier is closest to:",
    ["2.5", "5.0", "1.25"],
    "Multiplier = 1 ÷ [1 − MPC(1 − t)] = 1 ÷ [1 − 0.8 × 0.75] = 1 ÷ 0.40 = 2.5. (5.0 ignores taxes.)", "c"],
  ["A government raises spending and taxes by the same amount. The effect on aggregate demand is most likely:",
    ["Positive, because spending has a larger multiplier than taxes", "Zero, because the two changes exactly offset", "Negative, because higher taxes reduce consumption by more than spending adds"],
    "Spending enters aggregate demand in full, while part of a tax increase comes out of saving rather than consumption, so the balanced-budget multiplier is positive.", "r"],
  ["Ricardian equivalence implies that a debt-financed tax cut will:",
    ["Barely change spending, as households save for future taxes", "Strongly increase consumption and aggregate demand", "Lower interest rates by reducing the amount the government must borrow"],
    "If households expect higher future taxes to repay the debt, they save the tax cut, so aggregate demand barely changes.", "r"],
  ["The time it takes a government to realize that the economy has slowed is the:",
    ["Recognition lag", "Action lag", "Impact lag"],
    "Recognition lag: identifying the problem. Action lag: enacting policy. Impact lag: time for the policy to affect the economy.", "r"],
  ["With a marginal propensity to consume of 0.9 and a tax rate of 20%, the fiscal multiplier is closest to:",
    ["3.57", "10.00", "5.00"],
    "1/[1 − 0.9 × (1 − 0.2)] = 1/0.28 = 3.57. Ignoring taxes gives 1/(1 − 0.9) = 10.", "c"],
  ["A government increases spending by $10 billion. If the fiscal multiplier is 2.5, the maximum increase in GDP is closest to:",
    ["$25 billion", "$10 billion", "$4 billion"],
    "ΔGDP = multiplier × ΔG = 2.5 × 10 = $25 billion (before any crowding out).", "c"],
  ["Which of the following is an indirect tax?",
    ["A value-added tax", "A corporate income tax", "An inheritance tax"],
    "Indirect taxes are levied on spending (VAT, sales tax, excise duties); income and wealth taxes are direct.", "r"],
  ["Unemployment benefits are an example of:",
    ["Transfer payments", "Capital spending", "Current spending on goods and services"],
    "Transfers redistribute income without the government buying output directly.", "r"],
  ["A tax system in which people with higher incomes pay a larger share of their income in tax satisfies the principle of:",
    ["Vertical equity", "Horizontal equity", "Revenue neutrality"],
    "Vertical equity: those with greater ability pay more. Horizontal equity: people in similar situations pay similar taxes.", "r"],
  ["Progressive income taxes help stabilize the economy because during a recession they:",
    ["Take a smaller share of falling incomes", "Require new legislation to cut rates", "Raise tax revenue to reduce the deficit"],
    "They are automatic stabilizers: as incomes fall, people move into lower brackets and tax revenue falls automatically, cushioning spending.", "r"],
  ["The best indicator of whether a government's fiscal policy stance is expansionary or contractionary is the change in the:",
    ["Cyclically adjusted budget balance", "Actual (headline) budget balance", "Level of government debt to GDP"],
    "The actual balance moves with the cycle automatically; the structural balance isolates discretionary policy.", "r"],
  ["Government borrowing that pushes up interest rates and reduces private investment is called:",
    ["Crowding out", "Ricardian equivalence", "The balanced budget effect"],
    "Crowding out reduces the net stimulus from deficit spending.", "r"],
  ["The time between the government deciding on a stimulus package and the package being passed into law is the:",
    ["Action lag", "Recognition lag", "Impact lag"],
    "Recognition (realizing action is needed) → action (deciding and legislating) → impact (effect on the economy).", "r"],
  ["Which of the following is an argument for being less concerned about a large government debt?",
    ["The borrowing finances productive infrastructure", "Future tax increases will reduce work incentives", "The central bank may be forced to monetize the debt"],
    "Debt that funds productive capital can raise future output and tax revenue; the other two are reasons for concern.", "r"],
  ["A country's debt-to-GDP ratio is most likely to rise, with no change in the primary balance, when:",
    ["Real interest rates exceed real GDP growth", "Real GDP growth exceeds real interest rates", "Inflation rises unexpectedly"],
    "If interest on the debt compounds faster than the economy grows, the ratio rises unless offset by primary surpluses. Unexpected inflation tends to lower real debt.", "r"],
];

window.GLOSSARY.push(
  ["Fiscal multiplier","1 ÷ [1 − MPC(1 − t)]. The balanced-budget multiplier is positive.","l1fiscal"],
  ["Direct vs indirect taxes", "Direct: on income and wealth. Indirect: on spending (VAT, sales tax, excise).", "l1fiscal"],
  ["Balanced budget multiplier", "Equal rises in spending and taxes still raise aggregate demand (multiplier of 1 in the simple model).", "l1fiscal"],
  ["Automatic stabilizers", "Progressive taxes and benefits that cushion the cycle without new laws.", "l1fiscal"],
  ["Structural budget balance", "Balance at full employment; best measure of the fiscal stance.", "l1fiscal"],
  ["Fiscal policy lags", "Recognition → action → impact.", "l1fiscal"],
  ["Crowding out", "Government borrowing raises rates and displaces private investment.", "l1fiscal"]
);
