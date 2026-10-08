// CFA Level I · Portfolio Management: study notes, practice questions and flashcards.
window.NOTES = window.NOTES || {};
window.QB_HARD = window.QB_HARD || {};
window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1pm = `
<p class="syl">CFA Level I · Portfolio Management · 8–12% of the exam · Learning modules: Portfolio Management: An Overview · Portfolio Risk and Return: Part I · Portfolio Risk and Return: Part II · Basics of Portfolio Planning and Construction · The Behavioral Biases of Individuals · Introduction to Risk Management</p>

<h3>1. Portfolio management: an overview</h3>
<ul>
  <li><b>Portfolio approach</b>: evaluate investments by their contribution to the whole portfolio. Diversification reduces risk without necessarily reducing return, but correlations rise in crises.</li>
  <li><b>Process</b>: <b>planning</b> (understand the client, write the IPS) → <b>execution</b> (asset allocation, security analysis, portfolio construction) → <b>feedback</b> (monitoring and rebalancing, performance measurement and reporting).</li>
</ul>
<table>
  <tr><th>Investor</th><th>Horizon</th><th>Liquidity needs</th><th>Notes</th></tr>
  <tr><td>Individuals</td><td>Varies</td><td>Varies</td><td>Goals-based; taxes matter</td></tr>
  <tr><td><b>Defined benefit pension</b></td><td>Long</td><td>Low (depends on age of workforce)</td><td>Sponsor bears investment risk</td></tr>
  <tr><td><b>Endowments and foundations</b></td><td>Very long (perpetual)</td><td>Low</td><td>Spending rule; high risk tolerance</td></tr>
  <tr><td>Banks</td><td>Short</td><td>High</td><td>Match liabilities (deposits)</td></tr>
  <tr><td>Insurers (P&amp;C / life)</td><td>Short / long</td><td>High / moderate</td><td>Conservative, liability-driven</td></tr>
  <tr><td>Sovereign wealth funds</td><td>Long</td><td>Low</td><td>Varies by purpose</td></tr>
</table>
<p><b>DB plans</b>: the employer promises a benefit and bears the risk. <b>DC plans</b>: the employer contributes; the <b>employee</b> bears investment risk. Pooled vehicles: mutual funds (open-end, closed-end), ETFs, separately managed accounts, hedge funds, private equity funds. The industry spans active vs passive, traditional vs alternative, with growing use of fintech.</p>

<h3>2. Portfolio risk and return: Part I</h3>
<ul>
  <li><b>Risk aversion</b>: a risk-averse investor needs a higher expected return to accept more risk; risk-neutral investors ignore risk; risk seekers prefer it.</li>
  <li><b>Utility</b> captures the trade-off:</li>
</ul>
<div class="formula">U = E(r) − ½ × A × σ² (A = risk-aversion coefficient; use decimals)</div>
<div class="ex"><b>Example:</b> A = 3. X: 8%, σ 10% → 0.08 − 1.5 × 0.01 = 6.5%. Y: 12%, σ 20% → 0.12 − 1.5 × 0.04 = 6.0%. X gives the higher utility.</div>
<ul>
  <li><b>Indifference curves</b>: combinations of risk and return with equal utility. More risk-averse investors have <b>steeper</b> curves.</li>
  <li><b>Two-asset portfolio</b>: σp² = w1²σ1² + w2²σ2² + 2w1w2ρσ1σ2. Diversification benefits rise as correlation falls; at ρ = −1 a riskless combination is possible.</li>
  <li><b>Minimum-variance frontier</b>: lowest risk for each return. Its leftmost point is the <b>global minimum-variance portfolio</b>; the part above it is the <b>efficient frontier</b>, the part below is inefficient.</li>
  <li><b>Capital allocation line (CAL)</b>: combinations of the risk-free asset and a risky portfolio. The best CAL touches the efficient frontier at the <b>optimal risky portfolio</b>. <b>Two-fund separation</b>: everyone holds the same risky portfolio and differs only in how much they put in the risk-free asset.</li>
  <li>The investor's <b>optimal portfolio</b> is where the highest indifference curve is <b>tangent</b> to the CAL.</li>
</ul>

<h3>3. Portfolio risk and return: Part II</h3>
<p>With homogeneous expectations, the optimal risky portfolio is the <b>market portfolio</b>, and the CAL becomes the <b>capital market line (CML)</b>:</p>
<div class="formula">CML: E(Rp) = Rf + [(E(Rm) − Rf) ÷ σm] × σp</div>
<p>Portfolios left of M combine lending at Rf; right of M involve <b>borrowing</b> at Rf to invest more than 100% in M.</p>
<ul>
  <li><b>Total risk = systematic + unsystematic</b>. Unsystematic (company-specific) risk is diversified away, so the market rewards only <b>systematic</b> risk.</li>
  <li><b>Beta</b> = Cov(Ri, Rm) ÷ σm² = ρ(i,m) × σi ÷ σm.</li>
  <li>Return-generating models: single-index (market) model; multifactor models (Fama–French: market, size, value; plus momentum).</li>
</ul>
<div class="formula">CAPM / SML: E(Ri) = Rf + βi [E(Rm) − Rf]</div>
<p>CAPM assumptions: risk-averse utility maximizers, frictionless markets, a single holding period, homogeneous expectations, divisible and liquid assets, price-takers. A security whose forecast return is <b>above</b> its CAPM required return plots <b>above the SML</b> and is <b>undervalued</b>.</p>
<table>
  <tr><th>Measure</th><th>Formula</th><th>Risk used</th></tr>
  <tr><td><b>Sharpe ratio</b></td><td>(Rp − Rf) ÷ σp</td><td>Total</td></tr>
  <tr><td><b>Treynor ratio</b></td><td>(Rp − Rf) ÷ βp</td><td>Systematic</td></tr>
  <tr><td><b>M²</b></td><td>(Rp − Rf) × σm/σp + Rf (M² alpha = M² − Rm)</td><td>Total, in % terms</td></tr>
  <tr><td><b>Jensen's alpha</b></td><td>Rp − [Rf + βp(Rm − Rf)]</td><td>Systematic</td></tr>
</table>
<p>Use total-risk measures (Sharpe, M²) for a portfolio that is the investor's whole wealth; systematic-risk measures (Treynor, alpha) for a well-diversified portfolio that is one of many.</p>
<div class="ex"><b>Examples:</b> Rf 3%, β 1.2, E(Rm) 8% → CAPM 9.0%. Portfolio Rp 10%, Rf 2%, σ 16%, β 1.25, Rm 8%, σm 14%: Sharpe 0.50; Treynor 6.4%; Jensen's alpha 10% − (2% + 1.25 × 6%) = 0.5%; M² = 8% × 14/16 + 2% = 9.0% (M² alpha 1.0%).</div>

<h3>4. Basics of portfolio planning and construction</h3>
<h4>The investment policy statement (IPS)</h4>
<p>Typical sections: introduction, statement of purpose, duties and responsibilities, procedures (updating the IPS), <b>investment objectives</b>, <b>investment constraints</b>, investment guidelines, evaluation and review, appendices (strategic asset allocation, rebalancing policy).</p>
<ul>
  <li><b>Risk objectives</b>: absolute or relative (e.g. tracking error). Risk tolerance = <b>ability</b> (horizon, wealth, income, liabilities) and <b>willingness</b> (attitude). If they conflict, generally follow the lower and educate the client.</li>
  <li><b>Return objectives</b>: consistent with risk; absolute or relative to a benchmark.</li>
  <li><b>Constraints</b>: <b>liquidity</b>, <b>time horizon</b>, <b>tax</b>, <b>legal and regulatory</b>, <b>unique circumstances</b> (e.g. ESG exclusions).</li>
</ul>
<h4>Constructing the portfolio</h4>
<ul>
  <li><b>Strategic asset allocation</b>: the long-term target mix of asset classes (asset classes should be internally homogeneous and have low correlation with each other). <b>Tactical asset allocation</b>: short-term deviations to exploit expected opportunities. <b>Security selection</b> within classes.</li>
  <li><b>Risk budgeting</b>: allocating the total risk the portfolio can take among asset classes or managers.</li>
  <li><b>Core-satellite</b>: a passive or low-tracking-error core plus active satellite portfolios.</li>
  <li><b>ESG approaches</b>: <b>negative screening</b> (exclude sectors), <b>positive / best-in-class screening</b>, ESG integration (into analysis), thematic investing, impact investing, engagement and active ownership.</li>
</ul>

<h3>5. Behavioral biases of individuals</h3>
<table>
  <tr><th>Cognitive: belief perseverance</th><th>Cognitive: processing errors</th><th>Emotional</th></tr>
  <tr><td><b>Conservatism</b> (slow to update), <b>confirmation</b> (seek supporting evidence), <b>representativeness</b> (stereotypes, base-rate neglect), <b>illusion of control</b>, <b>hindsight</b></td><td><b>Anchoring and adjustment</b> (stick to an initial value), <b>mental accounting</b> (treat money differently by source or purpose), <b>framing</b> (answer depends on how a question is posed), <b>availability</b> (judge by what comes to mind easily)</td><td><b>Loss aversion</b> (losses hurt more than gains please), <b>overconfidence</b>, <b>self-control</b> (short-term over long-term), <b>status quo</b>, <b>endowment</b> (value what you own more), <b>regret aversion</b></td></tr>
</table>
<p>Cognitive errors are easier to <b>correct</b> with information and education; emotional biases are harder to change and are often <b>accommodated</b>. Biases help explain anomalies such as momentum, bubbles and the value premium.</p>

<h3>6. Introduction to risk management</h3>
<ul>
  <li><b>Risk management framework</b>: risk <b>governance</b> (board and senior management set risk tolerance and oversight), risk identification and measurement, infrastructure, policies and processes, monitoring/mitigation/management, communication, strategic analysis and integration.</li>
  <li><b>Risk tolerance</b> (how much risk the organization will accept) and <b>risk budgeting</b> (allocating it).</li>
  <li><b>Financial risks</b>: market, credit, liquidity. <b>Non-financial</b>: settlement, legal, compliance/regulatory, <b>model</b>, tail, <b>operational</b> (including cyber), solvency, accounting, tax, political. Risks interact (e.g. market losses → margin calls → liquidity risk).</li>
  <li><b>Measures</b>: standard deviation, beta, duration, delta/gamma/vega, <b>VaR</b> (minimum loss expected with a given probability over a period: a 5% one-day VaR of $1M means a 5% chance of losing at least $1M in a day), conditional VaR (expected loss given VaR is exceeded), scenario analysis and stress tests.</li>
  <li><b>Modifying risk</b>: prevention and avoidance; <b>acceptance</b> (self-insurance, diversification); <b>transfer</b> (insurance); <b>shifting</b> (derivatives that change the risk distribution).</li>
</ul>
<div class="how"><b>How it's tested:</b> utility and indifference curves, efficient frontier vocabulary, CML vs SML, beta and CAPM calculations, the four performance measures, IPS objectives vs constraints, bias classification, and risk framework terms.</div>
<div class="key"><b>Carry forward to Level III</b>: the IPS, ability vs willingness, behavioural finance (much deeper at Level III), CAPM/SML, Sharpe/Treynor/M² and risk budgeting are core Level III tools.</div>
<div class="trap"><b>Trap:</b> the <b>CML</b> uses total risk (σ) and applies only to efficient portfolios; the <b>SML</b> uses beta and applies to every security and portfolio.</div>
`;

window.QB_HARD.l1pm = [
  ["An investor with a risk-aversion coefficient of 4 considers a portfolio with an expected return of 10% and a standard deviation of 20%. Her utility from the portfolio is closest to:",
    ["2.0%", "6.0%", "8.0%"],
    "U = E(r) − ½Aσ² = 0.10 − 0.5 × 4 × 0.04 = 0.10 − 0.08 = 0.02 = 2.0%.", "c"],
  ["An investor has a risk-aversion coefficient of 3. Portfolio X: E(R) 8%, σ 10%. Portfolio Y: E(R) 12%, σ 20%. Portfolio Z: E(R) 6%, σ 5%. Which portfolio gives her the highest utility?",
    ["Portfolio X", "Portfolio Y", "Portfolio Z"],
    "U(X) = 0.08 − 1.5 × 0.01 = 6.5%; U(Y) = 0.12 − 1.5 × 0.04 = 6.0%; U(Z) = 0.06 − 1.5 × 0.0025 = 5.6%.", "c"],
  ["Compared with a less risk-averse investor, a more risk-averse investor's indifference curves are:",
    ["Steeper", "Flatter", "Horizontal"],
    "A more risk-averse investor needs a larger increase in expected return for each extra unit of risk, so the curves are steeper.", "r"],
  ["An investor's optimal portfolio lies where:",
    ["Her highest indifference curve touches the CAL", "The efficient frontier crosses the risk-free rate on the chart", "Her portfolio standard deviation is lowest"],
    "The optimal portfolio is the tangency point between the CAL and the highest attainable indifference curve.", "r"],
  ["The benefits of diversification in a two-asset portfolio are greatest when the correlation between the assets is:",
    ["−1", "0", "+1"],
    "Lower correlation gives more risk reduction; at −1, a combination with zero risk is possible.", "r"],
  ["The portfolio with the lowest standard deviation of all portfolios on the minimum-variance frontier is the:",
    ["Global minimum-variance portfolio", "Market portfolio", "Optimal risky (tangency) portfolio"],
    "The global minimum-variance portfolio is the leftmost point of the frontier; the efficient frontier lies above it.", "r"],
  ["Portfolios on the minimum-variance frontier that lie below the global minimum-variance portfolio are:",
    ["Inefficient", "Efficient", "Optimal for the most risk-averse investors"],
    "For the same risk, a portfolio on the upper part of the frontier offers a higher return, so the lower part is dominated (inefficient).", "r"],
  ["With a risk-free asset available, two-fund separation implies that investors differ only in:",
    ["How they split money between risky and risk-free assets", "Which risky assets they choose to hold", "The expected returns they each forecast for every risky asset"],
    "All investors hold the same optimal risky portfolio; risk preferences only determine the mix with the risk-free asset.", "r"],
  ["The risk-free rate is 3%, the market's expected return is 9% and its standard deviation is 15%. A portfolio on the capital market line with a standard deviation of 10% has an expected return closest to:",
    ["7.0%", "9.0%", "6.0%"],
    "CML: E(Rp) = 3% + [(9% − 3%) ÷ 15%] × 10% = 3% + 4% = 7.0%.", "c"],
  ["A portfolio on the capital market line to the right of the market portfolio involves:",
    ["Borrowing at Rf to invest over 100% in the market", "Lending part of the portfolio's money at the risk-free rate", "Holding only the risk-free asset"],
    "Points beyond M have more risk than the market, achieved by leveraging: borrowing at Rf and investing more than 100% in M.", "r"],
  ["A stock has a standard deviation of 30%, the market's standard deviation is 20% and their correlation is 0.6. The stock's beta is closest to:",
    ["0.90", "0.40", "1.50"],
    "β = ρ × σi ÷ σm = 0.6 × 0.30 ÷ 0.20 = 0.90.", "c"],
  ["The risk-free rate is 3%, the expected market return is 8% and a stock's beta is 1.2. Its CAPM required return is closest to:",
    ["9.0%", "12.6%", "6.0%"],
    "E(R) = 3% + 1.2 × (8% − 3%) = 3% + 6% = 9.0%.", "c"],
  ["A stock's CAPM required return is 9%, but an analyst forecasts a return of 11%. The stock is most likely:",
    ["Undervalued, plotting above the SML", "Overvalued, plotting below the SML", "Fairly valued, plotting on the SML"],
    "A forecast return above the required return means the price is too low relative to its risk: the stock plots above the SML.", "c"],
  ["According to the CAPM, investors are compensated with higher expected returns only for bearing:",
    ["Systematic risk", "Total risk", "Unsystematic risk"],
    "Unsystematic risk can be diversified away at no cost, so the market rewards only systematic (beta) risk.", "r"],
  ["A portfolio returned 10% with a standard deviation of 16% when the risk-free rate was 2%. Its Sharpe ratio is closest to:",
    ["0.50", "0.63", "8.0"],
    "Sharpe = (Rp − Rf) ÷ σp = (10% − 2%) ÷ 16% = 0.50.", "c"],
  ["A portfolio returned 10% with a beta of 1.25 when the risk-free rate was 2%. Its Treynor ratio is closest to:",
    ["6.4%", "8.0%", "12.5%"],
    "Treynor = (Rp − Rf) ÷ βp = 8% ÷ 1.25 = 6.4%.", "c"],
  ["A portfolio with a beta of 1.25 returned 10%. The risk-free rate was 2% and the market returned 8%. Jensen's alpha is closest to:",
    ["0.5%", "2.0%", "−0.5%"],
    "CAPM return = 2% + 1.25 × (8% − 2%) = 9.5%. Alpha = 10% − 9.5% = 0.5%.", "c"],
  ["A portfolio returned 10% with σ = 16%. The market returned 8% with σ = 14%, and the risk-free rate was 2%. The portfolio's M² is closest to:",
    ["9.0%", "10.0%", "8.0%"],
    "M² = (Rp − Rf) × σm/σp + Rf = 8% × (14/16) + 2% = 9.0%, i.e. 1.0% above the market's 8%.", "c"],
  ["To evaluate a well-diversified portfolio that is only one of many held by a large fund, the most appropriate performance measure uses:",
    ["Systematic risk, such as the Treynor ratio", "Total risk, such as the Sharpe ratio", "Unsystematic risk, such as tracking error"],
    "When the portfolio is part of a larger diversified whole, only its systematic risk matters, so Treynor or Jensen's alpha is appropriate.", "r"],
  ["In an investment policy statement, liquidity needs, time horizon, taxes, legal and regulatory factors, and unique circumstances are:",
    ["Constraints", "Return objectives", "Risk objectives"],
    "These five are the IPS constraints; risk and return are the objectives.", "r"],
  ["A 30-year-old professional with high income, substantial savings and no dependants says she couldn't bear to see her portfolio fall in value. Her risk profile is best described as:",
    ["High ability but low willingness to take risk", "Low ability but high willingness to take risk", "High ability and high willingness to take risk"],
    "Her finances and horizon give high ability; her stated attitude shows low willingness. Advisors generally follow the lower and educate the client.", "r"],
  ["The long-term target mix of asset classes set out in the IPS is the:",
    ["Strategic asset allocation", "Tactical asset allocation", "Security selection policy"],
    "Strategic asset allocation is the policy mix; tactical allocation is a short-term deviation from it to exploit opportunities.", "r"],
  ["A core-satellite approach to portfolio construction combines:",
    ["A passive core with actively managed satellite portfolios", "Only actively managed funds across all asset classes", "A single concentrated stock with a cash reserve"],
    "The core (often indexed) controls cost and tracking error; satellites seek alpha.", "r"],
  ["Risk budgeting is best described as:",
    ["Allocating total portfolio risk among assets or managers", "Minimizing the fees charged by each manager", "Setting the return objective for the portfolio in the IPS"],
    "A risk budget decides how much of the total acceptable risk each component may use, aiming to maximize return per unit of risk.", "r"],
  ["A fund excludes all companies involved in tobacco and controversial weapons. This ESG approach is:",
    ["Negative screening", "Positive screening", "Thematic investing"],
    "Negative (exclusionary) screening removes companies or sectors. Positive screening favours ESG leaders; thematic investing targets themes such as clean energy.", "r"],
  ["In a defined contribution pension plan, investment risk is borne by:",
    ["The employee", "The employer", "The plan sponsor's shareholders"],
    "The employer's obligation ends with its contributions; the employee's retirement income depends on investment results. In DB plans, the sponsor bears the risk.", "r"],
  ["Which type of investor typically has the longest time horizon and the lowest liquidity needs?",
    ["A university endowment", "A commercial bank", "A property and casualty insurer"],
    "Endowments are intended to last in perpetuity and spend only a small percentage each year; banks and P&C insurers have short horizons and high liquidity needs.", "r"],
  ["An investor estimates a stock's value by starting from its 52-week high and adjusting downward only slightly. This bias is:",
    ["Anchoring and adjustment", "The availability heuristic", "Hindsight bias"],
    "Anchoring is relying too heavily on an initial reference point and adjusting insufficiently from it.", "r"],
  ["An investor takes much more risk with gains from a lucky trade ('house money') than with his salary savings. This bias is:",
    ["Mental accounting", "Framing", "Status quo bias"],
    "Mental accounting treats money differently depending on its source or intended use rather than viewing wealth as a whole.", "r"],
  ["Which of the following biases is classified as emotional rather than cognitive?",
    ["Overconfidence", "Confirmation bias", "Anchoring"],
    "Emotional biases: loss aversion, overconfidence, self-control, status quo, endowment, regret aversion. Confirmation and anchoring are cognitive.", "r"],
  ["An investor refuses to sell inherited shares at a fair price because she values them more than she would pay to buy them. This is most likely:",
    ["Endowment bias", "Representativeness", "Conservatism"],
    "The endowment effect is placing a higher value on something simply because you own it.", "r"],
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
    "VaR is a minimum loss at a given probability, not a maximum. Losses beyond VaR can be much larger (conditional VaR measures them).", "r"]
];

window.GLOSSARY.push(
  ["Utility", "U = E(r) − ½Aσ². Higher A = more risk-averse; steeper indifference curves.", "l1pm"],
  ["Efficient frontier", "Portfolios with the highest return for each level of risk: the minimum-variance frontier above the global minimum-variance portfolio.", "l1pm"],
  ["Two-fund separation", "All investors hold the same optimal risky portfolio and the risk-free asset; only the mix differs.", "l1pm"],
  ["Capital market line (CML)", "E(Rp) = Rf + [(E(Rm) − Rf)/σm]σp. Uses total risk; efficient portfolios only.", "l1pm"],
  ["Beta", "Cov(Ri, Rm) ÷ σm² = ρ σi ÷ σm.", "l1pm"],
  ["CAPM / SML", "E(Ri) = Rf + βi[E(Rm) − Rf]. Above the SML = undervalued.", "l1pm"],
  ["Sharpe and Treynor ratios", "Sharpe = (Rp − Rf) ÷ σp (total risk). Treynor = (Rp − Rf) ÷ βp (systematic risk).", "l1pm"],
  ["M² and Jensen's alpha", "M² = (Rp − Rf)σm/σp + Rf. Alpha = Rp − [Rf + βp(Rm − Rf)].", "l1pm"],
  ["IPS objectives and constraints", "Objectives: risk and return. Constraints: liquidity, time horizon, tax, legal/regulatory, unique circumstances.", "l1pm"],
  ["Ability vs willingness to take risk", "Ability: financial capacity (horizon, wealth, income). Willingness: attitude. If they conflict, generally use the lower.", "l1pm"],
  ["Cognitive vs emotional biases", "Cognitive (correct with education): conservatism, confirmation, representativeness, illusion of control, hindsight, anchoring, mental accounting, framing, availability. Emotional (accommodate): loss aversion, overconfidence, self-control, status quo, endowment, regret aversion.", "l1pm"],
  ["Financial vs non-financial risk", "Financial: market, credit, liquidity. Non-financial: operational, model, legal, compliance, settlement, tax, solvency, etc.", "l1pm"],
  ["Risk modification", "Prevention/avoidance, acceptance (self-insure, diversify), transfer (insurance), shifting (derivatives).", "l1pm"],
  ["Value at risk (VaR)", "Minimum loss expected with a given probability over a period, e.g. 5% chance of losing at least $X in a day. Not a maximum.", "l1pm"]
);
