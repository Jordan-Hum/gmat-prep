// CFA Level I · Derivatives · Learning module 3: Derivative Benefits, Risks, and Issuer and Investor Uses.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1deruse = `
<p class="syl">CFA Level I · Derivatives (5–8%) · Learning module 3 of 10 · Derivative Benefits, Risks, and Issuer and Investor Uses</p>
<p>Why do derivatives exist, and what can go wrong? This lesson covers the benefits of derivatives (risk transfer, price discovery, lower costs), their risks (leverage, basis risk, liquidity and counterparty risk, systemic risk), how companies use them for hedging (cash flow, fair value and net investment hedges), and how investors use them to change exposures, protect portfolios and earn income.</p>

<h3>1. Benefits of derivatives</h3>
<ul>
  <li><b>Risk allocation and transfer</b>: risks can be separated and moved to those best able or most willing to bear them, cheaply.</li>
  <li><b>Information (price) discovery</b>: futures prices reveal expectations about future spot prices; option prices reveal expected volatility (implied volatility).</li>
  <li><b>Operational advantages</b>: lower transaction costs than trading the underlying, high liquidity, easy short positions, and leverage (little capital needed).</li>
  <li><b>Market efficiency</b>: arbitrage between derivatives and underlyings keeps prices in line.</li>
</ul>

<h3>2. Risks of derivatives <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Risk</th><th>Description</th></tr>
  <tr><td><b>Implicit leverage</b></td><td>Small price moves cause large gains or losses relative to the money put up</td></tr>
  <tr><td><b>Complexity and lack of transparency</b></td><td>Users may not fully understand the risks (especially in complex OTC products)</td></tr>
  <tr><td><b>Basis risk</b></td><td>The hedge doesn't move exactly with the exposure: a different asset, maturity or location (e.g. hedging jet fuel with crude oil futures)</td></tr>
  <tr><td><b>Liquidity risk</b></td><td>Cash may be needed for margin or settlement before the hedged item produces cash (a timing mismatch), or positions may be hard to close</td></tr>
  <tr><td><b>Counterparty credit risk</b></td><td>The other party may fail to pay (mainly OTC)</td></tr>
  <tr><td><b>Destabilization and systemic risk</b></td><td>Excessive speculation and interconnected exposures can spread losses across the financial system (as in 2008)</td></tr>
</table>

<h3>3. How issuers (companies) use derivatives <span class="hot">Highly tested</span></h3>
<p>Companies hedge to reduce the volatility of cash flows and earnings. Under IFRS and US GAAP, <b>hedge accounting</b> lets the hedge's gains and losses be recognized in a way that matches the hedged item:</p>
<table>
  <tr><th>Hedge type</th><th>What it hedges</th><th>Example</th><th>Accounting for the derivative</th></tr>
  <tr><td><b>Cash flow hedge</b></td><td>Variability of <b>future cash flows</b></td><td>Floating-rate debt hedged with a pay-fixed swap; a forecast purchase of raw materials hedged with futures</td><td>Effective gains/losses go to <b>OCI</b> until the hedged cash flow affects earnings</td></tr>
  <tr><td><b>Fair value hedge</b></td><td>Changes in the <b>fair value</b> of an existing asset or liability</td><td>Fixed-rate debt hedged with a receive-fixed (pay-floating) swap; inventory hedged with futures</td><td>Gains/losses go to <b>profit or loss</b>, offsetting the change in the hedged item's value</td></tr>
  <tr><td><b>Net investment hedge</b></td><td>Currency risk on a <b>foreign subsidiary</b></td><td>A currency forward or swap, or foreign-currency debt</td><td>Gains/losses go to <b>OCI</b> (with the translation adjustment)</td></tr>
</table>
<div class="ex"><b>Example:</b> a US exporter will receive €10 million in six months. It sells €10 million forward at $1.10/€, locking in <b>$11 million</b> whatever happens to the exchange rate. Its forecast foreign-currency receipt makes this a cash flow hedge.</div>

<h3>4. How investors use derivatives</h3>
<ul>
  <li><b>Change exposures cheaply</b>: buy or sell equity index futures to raise or lower market exposure (beta); use interest rate futures or swaps to change portfolio duration.</li>
  <li><b>Create synthetic positions</b> (e.g. a long forward = long call + short put; see put–call parity).</li>
  <li><b>Protect a position</b>: a <b>protective put</b> (own the stock and buy a put) sets a floor on losses.</li>
  <li><b>Generate income</b>: a <b>covered call</b> (own the stock and write a call) earns the premium but caps the upside.</li>
  <li>Express views on volatility or relative value, and access markets that are hard to trade directly.</li>
</ul>
<div class="ex"><b>Covered call:</b> own a stock bought at 50 and write a call with X = 55 for 2. Maximum profit = (55 − 50) + 2 = <b>7</b>; breakeven = 50 − 2 = <b>48</b>.<br><b>Protective put:</b> own a stock bought at 50 and buy a put with X = 45 for 1.50. Maximum loss = (50 − 45) + 1.50 = <b>6.50</b>; breakeven = 50 + 1.50 = <b>51.50</b>.</div>

<div class="how"><b>How it's tested:</b> benefits vs risks of derivatives, identifying basis risk, liquidity risk and counterparty risk, classifying hedges as cash flow, fair value or net investment (and where gains go), and the payoffs of covered calls and protective puts.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe the benefits of derivatives to markets and users.</li>
  <li>Describe the risks of derivatives, including basis, liquidity, counterparty and systemic risk.</li>
  <li>Distinguish cash flow, fair value and net investment hedges.</li>
  <li>Describe how investors use derivatives, including covered calls and protective puts.</li>
</ul></div>
`;

window.QB_HARD.l1deruse = [
  ["Which of the following is a benefit of derivatives markets?",
    ["Price discovery and cheaper risk transfer", "Elimination of systemic financial risk", "Removal of all leverage from investing"],
    "Derivatives improve price discovery, let risk be transferred at low cost and add liquidity. They can add, not remove, leverage and systemic risk.", "r"],
  ["Basis risk in a hedge arises when:",
    ["The hedge doesn't track the hedged item exactly", "The counterparty to the hedge defaults", "The derivative used for the hedge trades on an exchange"],
    "Basis risk is the imperfect correlation between the hedging instrument and the exposure (different asset, maturity or location).", "r"],
  ["A company uses a derivative to hedge the variability of cash flows on a forecast purchase of raw materials. Under hedge accounting, this is a:",
    ["Cash flow hedge", "Fair value hedge", "Net investment hedge"],
    "Cash flow hedges cover variability in future cash flows (forecast transactions, floating-rate debt). Fair value hedges cover changes in the value of existing fixed items.", "r"],
  ["Futures prices that reveal the market's expectations about future spot prices are an example of which benefit of derivatives?",
    ["Price discovery", "Risk elimination", "Lower margin requirements"],
    "Derivative prices reveal information about expected prices and volatility.", "r"],
  ["An airline hedges its jet fuel costs with crude oil futures. The risk that jet fuel and crude prices don't move together is:",
    ["Basis risk", "Counterparty risk", "Systemic risk"],
    "Basis risk arises when the hedging instrument differs from the hedged exposure.", "s"],
  ["A company with a futures hedge must post large margin payments before the hedged item produces any cash. This is an example of:",
    ["Liquidity risk", "Basis risk", "Credit risk"],
    "A timing mismatch between margin calls and the hedged cash flows creates liquidity risk.", "r"],
  ["A company with fixed-rate debt enters a swap to receive fixed and pay floating so that the debt's fair value changes are offset. Under hedge accounting this is a:",
    ["Fair value hedge", "Cash flow hedge", "Net investment hedge"],
    "Hedging changes in the value of an existing fixed-rate liability is a fair value hedge.", "s"],
  ["A company with floating-rate debt enters a pay-fixed, receive-floating swap to lock in its interest payments. This is a:",
    ["Cash flow hedge", "Fair value hedge", "Net investment hedge"],
    "It hedges the variability of future interest cash flows.", "s"],
  ["Under hedge accounting, the effective portion of gains and losses on a cash flow hedge is initially recognized in:",
    ["Other comprehensive income", "Profit or loss immediately", "Retained earnings directly"],
    "Cash flow hedge gains and losses go to OCI until the hedged cash flow affects earnings.", "r"],
  ["A company hedges the currency risk of its investment in a foreign subsidiary. This is a:",
    ["Net investment hedge", "Fair value hedge", "Cash flow hedge"],
    "Hedging the net assets of a foreign operation is a net investment hedge.", "r"],
  ["A US exporter will receive €10 million in six months and sells euros forward at $1.10/€. The dollar amount it locks in is:",
    ["$11.0 million", "$9.1 million", "$10.0 million"],
    "10,000,000 × 1.10 = $11 million, regardless of the future spot rate.", "c"],
  ["An investor owns a stock bought at 50 and writes a call with an exercise price of 55 for a premium of 2. Her maximum profit is:",
    ["7", "5", "2"],
    "(55 − 50) + 2 = 7. The call caps gains above 55.", "c"],
  ["An investor owns a stock bought at 50 and buys a put with an exercise price of 45 for 1.50. His maximum loss is:",
    ["6.50", "5.00", "1.50"],
    "(50 − 45) + 1.50 = 6.50. The put sets a floor at 45.", "c"],
  ["A portfolio manager wants to reduce her equity exposure quickly and cheaply without selling shares. She would most likely:",
    ["Sell equity index futures", "Buy equity index futures", "Buy call options on the index"],
    "Selling index futures lowers market exposure (beta) at low cost.", "s"],
];

window.GLOSSARY.push(
  ["Basis risk", "Risk that a hedge doesn't move exactly with the hedged exposure.", "l1deruse"],
  ["Cash flow vs fair value hedge", "Hedges variable future cash flows (gains to OCI) vs value of existing items (gains to P&L).", "l1deruse"],
  ["Covered call / protective put", "Long stock + short call (income, capped upside) / long stock + long put (floor on losses).", "l1deruse"]
);
