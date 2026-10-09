// CFA Level II · Economics: study notes, item sets and flashcards.
window.NOTES = window.NOTES || {};
window.QB_SETS = window.QB_SETS || {};
window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l2eco = `
<p class="syl">CFA Level II · Economics · 5–10% of the exam · Learning modules: Currency Exchange Rates: Understanding Equilibrium Value · Economic Growth · Economics of Regulation</p>

<h3>1. Foreign exchange: quotes, forwards and arbitrage</h3>
<ul>
  <li><b>Quote convention</b>: P/B = units of the <b>price</b> currency per one unit of the <b>base</b> currency. USD/EUR = 1.0850 means EUR 1 costs USD 1.0850. A rise in USD/EUR means the EUR (base) appreciates.</li>
  <li><b>Bid–offer</b>: dealers buy the base currency at the bid and sell it at the offer. The spread widens with lower liquidity, higher volatility, larger trades and less-traded currency pairs, and for the interbank vs client markets.</li>
  <li><b>Cross rates</b>: chain quotes so the intermediate currency cancels: (USD/EUR) × (JPY/USD) = JPY/EUR. With bid–offer quotes, check that a dealer's cross quote isn't outside the implied cross bid–offer, or <b>triangular arbitrage</b> is possible.</li>
  <li><b>Forward points</b> = (F − S) × 10,000 for most pairs. Positive points: the base currency trades at a forward <b>premium</b>.</li>
</ul>
<div class="formula">Covered interest rate parity: F_P/B = S_P/B × (1 + i_P × τ) / (1 + i_B × τ), with τ = days/360</div>
<p>The currency with the <b>higher</b> interest rate trades at a forward <b>discount</b>. CIP holds by arbitrage (in practice, deviations are small).</p>
<p><b>Marking a forward to market</b>: close the position with an offsetting forward to the same date, then discount the gain or loss at the price-currency rate for the remaining time:</p>
<div class="formula">Value to the long base-currency position = (F_t − F_0) × notional / (1 + i_P × days/360)</div>
<div class="ex"><b>Example:</b> A company sold EUR 10 million forward at USD/EUR 1.0950. Three months later the 9-month forward is 1.1100 and the 9-month USD rate is 4.0%. Value to the company (short EUR) = (1.0950 − 1.1100) × 10,000,000 / (1 + 0.04 × 270/360) = −USD 145,631.</div>

<h3>2. International parity conditions</h3>
<table>
  <tr><th>Condition</th><th>Statement</th><th>Holds?</th></tr>
  <tr><td><b>Covered interest parity</b></td><td>Forward premium/discount = interest differential</td><td>Yes (arbitrage)</td></tr>
  <tr><td><b>Uncovered interest parity</b></td><td>Expected %ΔS_P/B ≈ i_P − i_B: the higher-yield currency is expected to depreciate by the differential</td><td>Not in the short run (basis of the carry trade)</td></tr>
  <tr><td><b>Forward rate parity</b></td><td>F = E(S_T): the forward is an unbiased predictor (if CIP and UIP hold)</td><td>Not reliably</td></tr>
  <tr><td><b>Relative PPP</b></td><td>%ΔS_P/B ≈ π_P − π_B</td><td>Long run, roughly</td></tr>
  <tr><td><b>Ex ante PPP</b></td><td>Expected %ΔS ≈ expected inflation differential</td><td>Long run</td></tr>
  <tr><td><b>International Fisher effect</b></td><td>i_P − i_B ≈ π^e_P − π^e_B (real interest rate parity)</td><td>Not reliably</td></tr>
</table>
<p>If all of them hold, the expected change in the spot rate = the forward premium = the interest differential = the expected inflation differential, and real exchange rates stay constant.</p>
<p><b>FX carry trade</b>: borrow in a low-yield (funding) currency and invest in a high-yield currency. Profits when UIP fails (high-yield currencies on average don't depreciate by the full differential). Return ≈ i_invest − i_fund + % change in the investment currency. Returns are <b>negatively skewed</b> with crash risk: in risk-off episodes, funding currencies (e.g. JPY, CHF) appreciate sharply.</p>

<h3>3. Exchange rate determination</h3>
<ul>
  <li><b>Balance of payments</b>: persistent current account deficits put long-run downward pressure on the currency (flow supply, portfolio balance, debt sustainability). In the short run, <b>capital flows</b> dominate.</li>
  <li><b>Mundell–Fleming</b> (short run, fiscal and monetary policy mix):</li>
</ul>
<table>
  <tr><th>Policy mix</th><th>High capital mobility</th><th>Low capital mobility</th></tr>
  <tr><td>Expansionary monetary + expansionary fiscal</td><td>Ambiguous</td><td><b>Depreciates</b></td></tr>
  <tr><td>Restrictive monetary + expansionary fiscal</td><td><b>Appreciates</b> (higher rates attract capital)</td><td>Ambiguous</td></tr>
  <tr><td>Expansionary monetary + restrictive fiscal</td><td><b>Depreciates</b></td><td>Ambiguous</td></tr>
  <tr><td>Restrictive monetary + restrictive fiscal</td><td>Ambiguous</td><td><b>Appreciates</b> (trade balance improves)</td></tr>
</table>
<ul>
  <li><b>Monetary approach</b>: a rise in the money supply raises prices proportionally and the currency depreciates (via PPP). <b>Dornbusch overshooting</b>: prices are sticky in the short run, so after a monetary expansion the currency depreciates <b>more</b> than PPP implies, then partly recovers.</li>
  <li><b>Portfolio balance</b> (long run): sustained fiscal deficits increase the supply of government debt; investors eventually need a higher return or a cheaper currency, so the currency depreciates unless the deficit is reversed.</li>
  <li><b>Capital flows</b>: surges into emerging markets can cause appreciation, asset bubbles and later sudden stops. Tools: FX intervention (mixed effectiveness for large markets) and <b>capital controls</b> (now accepted as a legitimate tool in some circumstances).</li>
  <li><b>Currency crisis warning signs</b>: preceding capital market liberalization and large short-term capital inflows; banking crises; fixed or managed exchange rates; <b>declining FX reserves</b>; a real exchange rate <b>above its historical mean</b> (overvalued); deteriorating terms of trade; rapid money growth (high M2/reserves); higher inflation.</li>
</ul>

<h3>4. Economic growth</h3>
<p><b>Preconditions</b>: saving and investment, developed financial markets, political stability and property rights, education and health, sound tax and regulation, free trade and capital flows.</p>
<div class="formula">Cobb–Douglas: Y = A K^α L^(1−α) · Growth accounting: g_Y = g_A + α g_K + (1 − α) g_L · Labor productivity growth = g_A + α (g_K − g_L)</div>
<ul>
  <li><b>α</b> = capital's share of income; <b>A</b> = total factor productivity (TFP), the "Solow residual". Potential GDP growth = labor input growth + labor productivity growth.</li>
  <li><b>Capital deepening</b> (rising K/L) has <b>diminishing marginal returns</b>, so it raises the level of output per worker but can't sustain growth. Sustained per-capita growth needs <b>TFP growth</b> (technology).</li>
  <li>Other factors: natural resources (risk of <b>Dutch disease</b>), labor supply (population, participation, hours, migration), human capital, ICT investment, public infrastructure.</li>
</ul>
<table>
  <tr><th>Theory</th><th>Key prediction</th></tr>
  <tr><td><b>Classical (Malthusian)</b></td><td>Population growth absorbs productivity gains; per-capita income returns to subsistence</td></tr>
  <tr><td><b>Neoclassical (Solow)</b></td><td>Diminishing returns to capital; steady-state growth of output per worker = θ/(1 − α), total output = θ/(1 − α) + n (θ = TFP growth, n = labor growth). A higher saving rate raises the <b>level</b>, not the steady-state growth rate. Predicts <b>convergence</b></td></tr>
  <tr><td><b>Endogenous growth</b></td><td>Investment in knowledge and R&amp;D creates externalities, so returns to capital don't diminish economy-wide. Higher saving can <b>permanently</b> raise growth; no steady state; convergence not assured</td></tr>
</table>
<p><b>Convergence</b>: <b>absolute</b> (all countries converge in per-capita output; weak evidence), <b>conditional</b> (countries with the same saving rate, population growth and production function converge), <b>club</b> (only countries with suitable institutions converge). Openness to trade and capital speeds convergence.</p>
<p><b>Growth and equity markets</b>: in the long run, aggregate earnings can't grow faster than GDP, so V = GDP × (E/GDP) × (P/E), and the last two ratios can't trend forever; long-run equity returns are tied to potential GDP growth.</p>
<div class="ex"><b>Example:</b> g_Y = 3.6%, g_K = 5.0%, g_L = 1.0%, α = 0.35. TFP growth = 3.6 − 0.35(5.0) − 0.65(1.0) = 1.2%. Labor productivity growth = 3.6 − 1.0 = 2.6% = 1.2 + 0.35(4.0). Neoclassical steady state: output per worker grows 1.2/0.65 = 1.85%; total output 2.85%.</div>

<h3>5. Economics of regulation</h3>
<ul>
  <li><b>Rationale</b>: market failures from <b>informational frictions</b> (asymmetric information → adverse selection, moral hazard) and <b>externalities</b> (e.g. pollution, financial-system contagion).</li>
  <li><b>Sources of law</b>: <b>statutes</b> (passed by legislatures), <b>administrative regulations</b> (rules issued by government agencies), <b>judicial law</b> (court decisions).</li>
  <li><b>Regulators</b>: government agencies, independent regulators and <b>self-regulatory organizations (SROs)</b>, which set and enforce rules for members, sometimes with government recognition.</li>
  <li><b>Tools</b>: price mechanisms (taxes, subsidies), restricting or requiring activities, provision of public goods, public financing of private projects; disclosure requirements in securities markets.</li>
  <li><b>Regulatory capture</b>: the regulator ends up serving the regulated industry. <b>Regulatory competition</b>: jurisdictions compete with lighter rules to attract business. <b>Regulatory arbitrage</b>: using differences between substance and regulatory treatment, or between jurisdictions, to avoid rules.</li>
  <li><b>Cost–benefit analysis</b>: include direct (compliance) and indirect costs (unintended consequences); assess after implementation. <b>Sunset clauses</b> require review before a rule is renewed.</li>
  <li><b>Antitrust/competition</b>: merger review (e.g. HHI concentration), abuse of dominance. <b>Financial regulation</b>: prudential supervision and capital requirements to protect the system; securities regulation to protect investors and ensure fair markets.</li>
  <li><b>Impact on investments</b>: compliance costs, barriers to entry (which can favour incumbents), restrictions on pricing or products; analysts should consider regulation as a source of risk and opportunity for sectors.</li>
</ul>
<div class="how"><b>How it's tested:</b> calculations of forwards, forward points, marked-to-market values and carry trade returns; identifying which parity condition is being assumed; Mundell–Fleming policy-mix outcomes; growth accounting (TFP, labor productivity) and steady-state growth; and classifying regulatory concepts.</div>
<div class="key"><b>Carry forward to Level III</b>: parity conditions and growth accounting underpin <b>capital market expectations</b> (forecasting equity returns from GDP growth, exchange rate forecasting) and currency management (carry trades, forward rate bias).</div>
<div class="trap"><b>Traps:</b> the <b>higher</b>-yield currency trades at a forward <b>discount</b>. In Solow, a higher saving rate doesn't raise the long-run growth rate. Always check which currency is the base in P/B quotes before deciding who gains.</div>
`;

window.QB_SETS.l2eco = [
  {
    title: "Altamira Imports: EUR/USD hedging",
    case: `<p>Altamira Imports, a US company, buys equipment from Germany. Its treasurer, Paulo Ferraz, gathers the market data in Exhibit 1.</p>
<p><b>Exhibit 1. Market data</b></p>
<table><tr><th>Item</th><th>Value</th></tr><tr><td>Spot USD/EUR</td><td>1.0850</td></tr><tr><td>1-year USD interest rate</td><td>4.20%</td></tr><tr><td>1-year EUR interest rate</td><td>2.60%</td></tr></table>
<p>Three months ago, Altamira sold EUR 10,000,000 forward for delivery in one year at a rate of USD/EUR 1.0950 to hedge a euro receivable from a German customer. Today, the all-in 9-month forward rate is USD/EUR 1.1100 and the 9-month USD interest rate is 4.00% (actual/360, 270 days).</p>
<p>A hedge fund manager tells Ferraz that she runs a carry trade, borrowing EUR and investing in USD deposits for one year.</p>`,
    qs: [
      ["The 1-year forward rate (USD/EUR) is closest to:",
        ["1.1019", "1.0683", "1.1024"],
        "F = 1.0850 × (1.042/1.026) = 1.1019. The EUR, with the lower interest rate, trades at a forward premium (+169 points).", "c"],
      ["The mark-to-market value of Altamira's existing forward contract is closest to:",
        ["−USD 145,631", "+USD 145,631", "−USD 150,000"],
        "Altamira is short EUR at 1.0950; the offsetting forward costs 1.1100. Value = (1.0950 − 1.1100) × 10,000,000 / (1 + 0.04 × 270/360) = −150,000/1.03 = −USD 145,631.", "c"],
      ["If uncovered interest rate parity holds, over the next year the EUR is expected to:",
        ["Appreciate against the USD by about 1.6%", "Depreciate against the USD by about 1.6%", "Appreciate against the USD by about 4.2%"],
        "Under UIP the higher-yield currency (USD) is expected to depreciate by the interest differential, 4.2% − 2.6% ≈ 1.6%, so the EUR is expected to appreciate by about 1.6%.", "c"],
      ["If the USD depreciates by 1% against the EUR over the year, the manager's carry trade return is closest to:",
        ["0.6%", "1.6%", "−1.0%"],
        "Return ≈ 4.2% − 2.6% − 1.0% = 0.6% (precisely 1.042 × 0.99 − 1.026 ≈ 0.56%). The trade profits because the USD fell by less than the interest differential, i.e. UIP didn't hold.", "c"]
    ]
  },
  {
    title: "Republic of Varonia: policy mix and the currency",
    case: `<p>Clara Duval, a currency strategist, is analyzing the Varonian krona (VRK). Varonia has a floating exchange rate and an open capital account with <b>high capital mobility</b>.</p>
<p>The new government has announced a large fiscal stimulus, and the central bank has responded by raising its policy rate sharply to contain inflation. Duval also notes:</p>
<ul><li>Government debt is projected to rise from 60% to 95% of GDP over five years, with no plan to reduce deficits.</li><li>Last year, the central bank unexpectedly doubled the money supply growth rate. The VRK fell 18% in the following three months, then recovered about 6%.</li></ul>
<p>Duval's colleague, Aaron Pike, follows Pellas, a neighbouring country with a <b>managed</b> exchange rate. He reports that Pellas has liberalized its capital account, received large short-term capital inflows, and seen foreign exchange reserves fall by 30% over the past year, while its real exchange rate is 20% above its 10-year average.</p>`,
    qs: [
      ["According to the Mundell–Fleming model, Varonia's current policy mix will most likely cause the VRK to:",
        ["Appreciate", "Depreciate", "Remain unchanged"],
        "With high capital mobility, expansionary fiscal plus restrictive monetary policy pushes interest rates up, attracts capital inflows and unambiguously appreciates the currency.", "s"],
      ["Under the portfolio balance approach, the projected path of Varonia's debt implies that over the long run the VRK will most likely:",
        ["Depreciate", "Appreciate", "Be unaffected by the deficits"],
        "Sustained deficits increase the supply of government debt; investors eventually require a cheaper currency (or higher returns) to hold it, so the currency depreciates unless the deficits are reversed.", "s"],
      ["The VRK's behaviour after the monetary expansion is best explained by:",
        ["The Dornbusch overshooting model", "Relative purchasing power parity", "Uncovered interest rate parity"],
        "Because goods prices adjust slowly, the currency initially depreciates more than its long-run PPP value, then partly recovers: overshooting.", "s"],
      ["Pike's observations most likely indicate that Pellas:",
        ["Faces an elevated risk of a currency crisis", "Has an undervalued currency in real terms", "Is shielded from a crisis by its managed exchange rate"],
        "Capital market liberalization, large short-term inflows, a managed (not freely floating) exchange rate, declining reserves and a real exchange rate well above its mean (overvalued) are all classic precursors of a currency crisis.", "s"]
    ]
  },
  {
    title: "Kestrel Asset Management: growth outlook",
    case: `<p>Kestrel's chief economist, Amara Diallo, is estimating long-run growth for two countries as an input to equity return forecasts.</p>
<p><b>Exhibit 1. Country A, average annual growth over the past decade</b></p>
<table><tr><th>Item</th><th>Growth</th></tr><tr><td>Real GDP</td><td>3.6%</td></tr><tr><td>Capital stock</td><td>5.0%</td></tr><tr><td>Labor input (hours)</td><td>1.0%</td></tr><tr><td>Capital's share of income (α)</td><td>0.35</td></tr></table>
<p>Country B is a lower-income economy with a high saving rate. Its government plans to raise the saving rate further to lift the long-run growth rate. Diallo notes that B has similar institutions, population growth and technology access to A, and is open to trade and foreign investment.</p>
<p>A junior analyst suggests that Country A's equity market can deliver earnings growth above nominal GDP growth indefinitely because of rising profit margins.</p>`,
    qs: [
      ["Country A's total factor productivity growth is closest to:",
        ["1.2%", "2.6%", "0.6%"],
        "TFP growth = 3.6% − 0.35(5.0%) − 0.65(1.0%) = 3.6 − 1.75 − 0.65 = 1.2%.", "c"],
      ["If TFP growth and labor growth stay at their past rates, the neoclassical steady-state growth rate of Country A's total output is closest to:",
        ["2.85%", "1.85%", "3.60%"],
        "Output per worker grows at θ/(1 − α) = 1.2/0.65 = 1.85%; total output grows at that rate plus labor growth: 1.85 + 1.0 = 2.85%.", "c"],
      ["Under the neoclassical model, raising Country B's saving rate will most likely:",
        ["Raise output per worker, not its long-run growth rate", "Raise the steady-state growth rate of output per worker", "Lower output because consumption falls"],
        "In Solow's model, higher saving raises capital per worker and the level of output, but diminishing returns mean steady-state growth depends only on TFP growth. A permanent effect on growth is an endogenous-growth result.", "s"],
      ["The junior analyst's view is most likely flawed because:",
        ["Earnings' share of GDP can't rise forever", "Equity prices aren't related to GDP at all", "Profit margins tend to rise with GDP growth"],
        "Aggregate earnings growth can't exceed GDP growth indefinitely: the earnings/GDP ratio is bounded, so long-run earnings growth converges to GDP growth.", "s"]
    ]
  },
  {
    title: "Ostrava Financial Regulators: a rule review",
    case: `<p>A national securities regulator is reviewing rules for retail investment platforms. Analyst Ruth Kellerman summarizes four observations:</p>
<ol><li>Several senior staff at the regulator recently came from the largest platforms, and the regulator has repeatedly delayed rules the industry opposed.</li><li>Some platforms moved their legal domicile to a neighbouring country with lighter rules while continuing to serve local clients online.</li><li>The neighbouring country has cut its regulatory requirements to attract financial firms.</li><li>Retail investors can't easily judge the quality of the platforms' order execution, and platforms know more about their own execution quality than their clients do.</li></ol>
<p>The regulator plans a new disclosure rule and wants it reviewed automatically after five years, lapsing unless it is renewed. A national industry association, recognized by the government, will set and enforce detailed conduct rules for its members.</p>`,
    qs: [
      ["Observation 1 is best described as:",
        ["Regulatory capture", "Regulatory arbitrage", "Regulatory competition"],
        "Regulatory capture occurs when a regulator comes to act in the interest of the industry it regulates rather than the public.", "s"],
      ["Observations 2 and 3, respectively, are best described as:",
        ["Regulatory arbitrage and regulatory competition", "Regulatory competition and regulatory arbitrage", "Regulatory capture and regulatory arbitrage"],
        "Firms moving domicile to avoid rules while serving the same clients is regulatory arbitrage; jurisdictions lowering rules to attract business is regulatory competition.", "s"],
      ["The economic rationale for regulation in Observation 4 is:",
        ["Informational frictions", "Negative externalities", "Natural monopoly power"],
        "Clients can't observe execution quality and platforms know more: asymmetric information, an informational friction that can justify disclosure rules.", "s"],
      ["The automatic review provision and the industry association are, respectively:",
        ["A sunset clause and a self-regulatory organization", "A sunset clause and an independent regulator", "A cost–benefit test and a self-regulatory organization"],
        "A sunset clause makes a rule lapse unless it's reviewed and renewed. An industry body that sets and enforces rules for its members (with government recognition) is an SRO.", "r"]
    ]
  }
];

window.GLOSSARY.push(
  ["Covered interest rate parity", "F_P/B = S_P/B × (1 + i_P τ)/(1 + i_B τ); holds by arbitrage. Higher-yield currency at a forward discount.", "l2eco"],
  ["Uncovered interest rate parity", "Expected depreciation of the higher-yield currency equals the interest differential. Fails in the short run.", "l2eco"],
  ["Forward mark-to-market", "(F_t − F_0) × notional / (1 + i_P × days/360) for a long base-currency position.", "l2eco"],
  ["FX carry trade", "Borrow low-yield, invest high-yield currency; profits if UIP fails; negatively skewed, crash risk.", "l2eco"],
  ["International Fisher effect", "Nominal interest differential ≈ expected inflation differential (real interest rate parity).", "l2eco"],
  ["Mundell–Fleming", "High capital mobility: tight money + loose fiscal → appreciation. Low mobility: loose fiscal + loose money → depreciation.", "l2eco"],
  ["Dornbusch overshooting", "Sticky prices: after monetary expansion the currency depreciates beyond its PPP level, then partly recovers.", "l2eco"],
  ["Portfolio balance approach", "Sustained fiscal deficits eventually lead to currency depreciation.", "l2eco"],
  ["Growth accounting", "g_Y = g_A + α g_K + (1 − α) g_L; TFP is the residual.", "l2eco"],
  ["Neoclassical steady state", "Output per worker grows at θ/(1 − α); saving affects levels, not long-run growth.", "l2eco"],
  ["Endogenous growth theory", "Knowledge externalities stop diminishing returns; saving and R&D can raise growth permanently.", "l2eco"],
  ["Conditional convergence", "Countries with the same saving rate, population growth and technology converge in per-capita income.", "l2eco"],
  ["Regulatory capture", "Regulator serves the interests of the regulated industry.", "l2eco"],
  ["Regulatory arbitrage", "Exploiting differences in rules (between jurisdictions or substance vs form) to avoid regulation.", "l2eco"],
  ["Sunset clause", "A rule lapses unless reviewed and renewed.", "l2eco"]
);
