// CFA Level II · Portfolio Management: study notes, item sets and flashcards.
window.NOTES = window.NOTES || {};
window.QB_SETS = window.QB_SETS || {};
window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l2pm = `
<p class="syl">CFA Level II · Portfolio Management · 10–15% of the exam · Learning modules: Economics and Investment Markets · Analysis of Active Portfolio Management · Exchange-Traded Funds: Mechanics and Applications · Using Multifactor Models · Measuring and Managing Market Risk · Backtesting and Simulation</p>

<h3>1. Economics and investment markets</h3>
<ul>
  <li><b>Present value model</b>: an asset's price is its expected cash flows discounted at the real risk-free rate + expected inflation + a risk premium.</li>
  <li><b>Intertemporal rate of substitution (IMRS)</b>, m = marginal utility of consumption tomorrow / marginal utility today (discounted). In bad times consumption is low and marginal utility is high, so m is high. The price of a default-free real zero-coupon bond = E(m); the real rate rises with expected economic growth (people borrow against higher future income).</li>
  <li><b>Risk premiums</b>: assets that pay off poorly in bad times (<b>negative covariance with m</b>), such as equities, need a <b>positive risk premium</b>. Assets that pay off well in bad times are hedges and have low or negative premiums.</li>
  <li><b>Short-term rates</b> follow the cycle and central bank policy (e.g. Taylor rule: neutral rate + inflation + ½ inflation gap + ½ output gap).</li>
  <li><b>Yield curve</b>: usually upward sloping (term premium). Steep at the trough/early recovery when policy rates are low; flattens as the central bank tightens late in the cycle; an <b>inverted</b> curve has historically preceded recessions.</li>
  <li><b>Break-even inflation</b> = nominal yield − real (inflation-linked) yield = expected inflation + an <b>inflation risk premium</b>.</li>
  <li><b>Credit spreads</b> widen in downturns, most for lower-rated issuers; they include default, liquidity and risk premiums.</li>
  <li><b>Equities</b>: the ERP compensates for poor payoffs in bad times; cyclical companies carry more risk than defensive ones. <b>Commercial real estate</b> has bond-like (lease income) and equity-like (residual value) features, so its risk premium sits between bonds and equities, plus an illiquidity premium.</li>
</ul>

<h3>2. Analysis of active portfolio management</h3>
<div class="formula">Active return R_A = R_P − R_B = Σ Δw_i R_i · Information ratio IR = R_A/σ_A · Sharpe: SR = (R_P − R_F)/σ_P</div>
<div class="formula">Best combination of active and benchmark: SR_P² = SR_B² + IR² · Optimal active risk σ_A* = (IR/SR_B) × σ_B</div>
<div class="formula">Fundamental law: E(R_A) = TC × IC × √BR × σ_A · IR ≈ TC × IC × √BR</div>
<ul>
  <li><b>IC</b> (information coefficient): correlation between forecast and actual active returns (skill). <b>BR</b> (breadth): number of <b>independent</b> decisions per year. <b>TC</b> (transfer coefficient): correlation between optimal and actual active weights; constraints (e.g. long-only) lower TC; unconstrained TC = 1.</li>
  <li>The IR is unaffected by scaling active risk (mixing the active portfolio with the benchmark), but the Sharpe ratio is maximized only at the optimal active risk. With constraints (TC &lt; 1), SR_P² = SR_B² + (TC × IR*)².</li>
  <li>Market timing: IC = 2 × (proportion correct) − 1. Breadth counts independent bets only; correlated decisions overstate BR.</li>
</ul>
<div class="ex"><b>Example:</b> Benchmark SR 0.35, σ_B 16%; manager IR 0.40. σ_A* = (0.40/0.35)(16%) = 18.3%; SR_P = √(0.35² + 0.40²) = 0.53. With TC 0.6, IC 0.08, BR 100: IR = 0.6 × 0.08 × 10 = 0.48; at 5% active risk, expected active return = 2.4%.</div>

<h3>3. Exchange-traded funds</h3>
<ul>
  <li><b>Creation/redemption</b>: <b>authorized participants (APs)</b> deliver the creation basket to the sponsor in exchange for ETF shares (creation) or the reverse (redemption), usually <b>in kind</b>. If the ETF trades at a <b>premium</b> to NAV, APs buy the basket, create shares and sell them; at a <b>discount</b>, they buy ETF shares and redeem them. This keeps prices near NAV.</li>
  <li><b>Premiums/discounts</b> widen when underlying prices are stale (foreign markets closed, illiquid bonds) or in stress; then the ETF price is often the better estimate of value (price discovery).</li>
  <li><b>Tracking difference</b> = ETF return − index return (often ≈ −expense ratio); <b>tracking error</b> = standard deviation of those differences. Sources: fees, sampling/optimization, index changes, cash drag, securities lending (adds), taxes/withholding.</li>
  <li><b>Total cost of ownership</b> = management fee × holding period + round-trip trading cost (commissions both ways + bid–offer spread). Fees dominate for long holding periods; trading costs for short ones.</li>
  <li><b>Tax efficiency</b>: in-kind redemptions let the fund remove low-basis shares, reducing capital gains distributions (in the US).</li>
  <li><b>Risks</b>: counterparty risk (ETNs, swap-based ETFs), fund closures, settlement, and <b>leveraged/inverse ETFs</b>, which reset daily so long-period returns can differ greatly from the multiple of the index.</li>
  <li><b>Uses</b>: cash equitization, rebalancing, liquidity management, transition management, core and tactical asset class exposure, factor (smart beta) and thematic exposure.</li>
</ul>
<div class="ex"><b>Example:</b> Fee 0.20% a year, commission 0.02% each way, bid–offer spread 0.10%. One-year cost = 0.20 + 0.04 + 0.10 = 0.34%.</div>

<h3>4. Multifactor models</h3>
<div class="formula">APT: E(R_P) = R_F + λ1 β_P,1 + λ2 β_P,2 + … (λ = factor risk premium)</div>
<ul>
  <li><b>APT</b> assumes returns follow a factor model, many assets allow diversification of specific risk, and there's no arbitrage. If a portfolio's expected return differs from the APT value, buy the cheap one and short a replicating portfolio with the same factor sensitivities.</li>
  <li><b>Macroeconomic factor models</b>: R_i = E(R_i) + b_i1 F1 + b_i2 F2 + … + ε_i, where the F's are <b>surprises</b> (actual − expected).</li>
  <li><b>Fundamental factor models</b>: factors are attributes (size, value, momentum, industry); sensitivities are standardized attributes; factor returns are estimated cross-sectionally each period.</li>
  <li><b>Statistical models</b> (e.g. principal components): fit well but are hard to interpret.</li>
  <li><b>Attribution</b>: active return = factor return (active factor exposures × factor returns) + security selection. <b>Active risk² = active factor risk² + active specific risk²</b>.</li>
  <li><b>Factor portfolio</b>: sensitivity 1 to one factor and 0 to others (to bet on or hedge a factor). <b>Tracking portfolio</b>: same factor exposures as a benchmark.</li>
  <li>Carhart model: market, size (SMB), value (HML), momentum (WML).</li>
</ul>
<div class="ex"><b>Example:</b> R_F 3%, λ1 3.0%, λ2 1.5%, β 1.2 and 0.8: E(R) = 3 + 3.6 + 1.2 = 7.8%. Active factor risk 3.2%, active specific risk 2.4% → active risk = √(10.24 + 5.76) = 4.0%; 64% of active variance comes from factors.</div>

<h3>5. Measuring and managing market risk</h3>
<div class="formula">Parametric VaR = (z × σ − μ) × portfolio value (5%: z = 1.65; 1%: z = 2.33) · Daily from annual: μ/250, σ/√250</div>
<table>
  <tr><th>Method</th><th>Strengths</th><th>Weaknesses</th></tr>
  <tr><td><b>Parametric</b> (variance–covariance)</td><td>Simple, fast</td><td>Assumes normality (understates fat tails); poor for options (non-linear)</td></tr>
  <tr><td><b>Historical simulation</b></td><td>No distribution assumption; handles options by repricing</td><td>Depends entirely on the chosen period; past may not repeat</td></tr>
  <tr><td><b>Monte Carlo</b></td><td>Flexible distributions, non-linear positions</td><td>Computationally intensive; model risk</td></tr>
</table>
<ul>
  <li><b>VaR limitations</b>: subjective choices, underestimates frequency of extreme events, ignores liquidity, sensitive to correlation shifts, not a worst case, ignores the right tail.</li>
  <li><b>Conditional VaR</b> (expected shortfall): average loss <b>given</b> that the loss exceeds VaR. <b>Incremental VaR</b>: change in VaR from a specified change in a position. <b>Marginal VaR</b>: change in VaR from a small change in a position (a position's contribution). <b>Ex ante tracking error</b>: relative VaR vs a benchmark.</li>
  <li><b>Sensitivity measures</b>: beta, duration and convexity, Greeks. <b>Scenario analysis</b>: historical scenarios and hypothetical ones; <b>stress tests</b>, including <b>reverse stress testing</b> (what scenario would cause a given loss).</li>
  <li><b>Risk limits and budgets</b>: position, scenario, stop-loss, liquidity and leverage limits; risk budgets allocate total risk across managers and positions.</li>
  <li>Users differ: banks (liquidity, leverage, economic capital), asset managers (tracking error, drawdown), pension funds (surplus at risk), insurers (asset–liability mismatch, catastrophe risk).</li>
</ul>
<div class="ex"><b>Example:</b> $50m, μ = 8%, σ = 18% a year. Annual 5% VaR = (1.645 × 0.18 − 0.08) × 50m = $10.8m. Daily: (1.645 × 0.18/√250 − 0.08/250) × 50m ≈ $0.92m.</div>

<h3>6. Backtesting and simulation</h3>
<ul>
  <li><b>Backtesting</b> steps: strategy design → historical investment simulation (usually a <b>rolling window</b>: estimate in sample, test out of sample, roll forward) → output analysis (return, Sharpe, Sortino, drawdown, VaR/CVaR, skew and kurtosis).</li>
  <li><b>Survivorship bias</b>: using only companies that exist today (excludes failures) inflates results. <b>Look-ahead bias</b>: using information not available at the time (restated data, unlagged reports) → use <b>point-in-time</b> data with reporting lags. <b>Data snooping</b>: testing many variations and keeping the best → use cross-validation, out-of-sample tests, and higher significance hurdles (e.g. t &gt; 3.0).</li>
  <li><b>Scenario analysis</b>: test across regimes (e.g. recessions vs expansions, high vs low volatility) to detect structural breaks.</li>
  <li><b>Historical simulation</b>: random draws (with replacement) from past returns; keeps actual joint behaviour but limited to history. <b>Monte Carlo simulation</b>: draws from assumed distributions (can add fat tails and changing correlations) to explore outcomes not seen in history. <b>Sensitivity analysis</b>: change the assumptions (e.g. distribution) to see how results respond.</li>
</ul>
<div class="how"><b>How it's tested:</b> computing active returns, optimal active risk, combined Sharpe ratios, fundamental-law IRs, APT expected returns and arbitrage trades, macro-model returns, active risk decomposition, ETF costs and creation logic, VaR at different horizons, and identifying backtesting biases.</div>
<div class="key"><b>Carry forward to Level III</b>: Level III builds directly on these: capital market expectations (the IMRS framework and yield curve), active management and the fundamental law, risk budgeting and VaR in risk management, ETFs in portfolio implementation, and backtesting in strategy evaluation.</div>
<div class="trap"><b>Traps:</b> scale VaR's σ by √T but μ by T. Breadth counts only <b>independent</b> decisions. Factor surprises, not factor levels, drive macro factor model returns. An ETF at a premium is fixed by <b>creations</b>, at a discount by <b>redemptions</b>.</div>
`;

window.QB_SETS.l2pm = [
  {
    title: "Northfield Equity Fund: active performance",
    case: `<p>Analyst Chen Wei evaluates the Northfield Equity Fund, which allocates across three sectors.</p>
<p><b>Exhibit 1. Last year</b></p>
<table><tr><th>Sector</th><th>Fund weight</th><th>Benchmark weight</th><th>Sector return</th></tr><tr><td>A</td><td>40%</td><td>30%</td><td>12%</td></tr><tr><td>B</td><td>35%</td><td>40%</td><td>8%</td></tr><tr><td>C</td><td>25%</td><td>30%</td><td>5%</td></tr></table>
<p>Wei estimates Northfield's information ratio at 0.40. The benchmark has a Sharpe ratio of 0.35 and volatility of 16%.</p>
<p>A rival manager, Ostrom, has a transfer coefficient of 0.6, an information coefficient of 0.08 and makes 100 independent active decisions a year. Ostrom targets 5% active risk.</p>`,
    qs: [
      ["Northfield's active return last year is closest to:",
        ["0.55%", "8.85%", "0.95%"],
        "Active return = Σ Δw × R = (+10%)(12%) + (−5%)(8%) + (−5%)(5%) = 1.20 − 0.40 − 0.25 = 0.55%. (Fund 8.85% − benchmark 8.30%.)", "c"],
      ["The level of active risk that maximizes the Sharpe ratio of a portfolio combining Northfield with the benchmark is closest to:",
        ["18.3%", "14.0%", "6.4%"],
        "σ_A* = (IR/SR_B) × σ_B = (0.40/0.35) × 16% = 18.3%.", "c"],
      ["At that optimal active risk, the portfolio's Sharpe ratio is closest to:",
        ["0.53", "0.75", "0.40"],
        "SR_P = √(SR_B² + IR²) = √(0.35² + 0.40²) = √0.2825 = 0.53.", "c"],
      ["Ostrom's expected active return is closest to:",
        ["2.4%", "4.0%", "0.24%"],
        "IR = TC × IC × √BR = 0.6 × 0.08 × 10 = 0.48. E(R_A) = IR × σ_A = 0.48 × 5% = 2.4%.", "c"]
    ]
  },
  {
    title: "Ashgrove Quant: multifactor models",
    case: `<p>Quantitative analyst Priya Raman uses factor models at Ashgrove.</p>
<p><b>APT.</b> The risk-free rate is 3.0%. Two factors have risk premiums of 3.0% (factor 1) and 1.5% (factor 2). Portfolio P has sensitivities of 1.2 to factor 1 and 0.8 to factor 2. A second well-diversified portfolio, Q, has the same sensitivities but an expected return of 9.0%.</p>
<p><b>Macro model.</b> For stock S: expected return 8.0%; sensitivity to GDP growth surprises 1.5; sensitivity to inflation surprises −2.0. Last year, GDP growth was 1.0 percentage point above expectations and inflation 0.5 points above, and the stock's firm-specific return was zero.</p>
<p><b>Risk decomposition.</b> Ashgrove's active portfolio has active factor risk of 3.2% and active specific risk of 2.4%.</p>`,
    qs: [
      ["Portfolio P's expected return under the APT is closest to:",
        ["7.8%", "9.0%", "4.8%"],
        "E(R) = 3.0% + 1.2 × 3.0% + 0.8 × 1.5% = 3.0 + 3.6 + 1.2 = 7.8%.", "c"],
      ["To exploit the mispricing between P and Q, Raman should:",
        ["Buy Q and short P", "Buy P and short Q", "Buy both portfolios"],
        "Q has the same factor risk as P but a higher expected return (9.0% vs 7.8%), so buy Q and short P to earn 1.2% with no factor exposure.", "s"],
      ["Stock S's return last year was closest to:",
        ["8.5%", "10.5%", "7.5%"],
        "R = 8.0% + 1.5 × 1.0% + (−2.0) × 0.5% = 8.0 + 1.5 − 1.0 = 8.5%.", "c"],
      ["Ashgrove's active risk is closest to:",
        ["4.0%", "5.6%", "2.8%"],
        "Active risk = √(3.2² + 2.4²) = √16.0 = 4.0%. Factor risk accounts for 10.24/16 = 64% of active variance.", "c"]
    ]
  },
  {
    title: "Kendal Pension: value at risk",
    case: `<p>Risk manager Marta Kowal monitors a $50 million equity portfolio for Kendal Pension. Its expected annual return is 8% and its annual standard deviation is 18%. Assume 250 trading days a year and normally distributed returns. The 5% one-tailed z-value is 1.645.</p>
<p>Kowal's colleague suggests switching to a historical simulation using the last 500 trading days. The portfolio recently added a large position in index put options.</p>
<p>The CIO asks for a measure of the average loss on the worst 5% of days, and for the change in VaR if the fund adds $5 million to a specific stock.</p>`,
    qs: [
      ["The portfolio's 5% annual VaR is closest to:",
        ["$10.8 million", "$14.8 million", "$4.0 million"],
        "VaR = (1.645 × 0.18 − 0.08) × 50m = (0.2961 − 0.08) × 50m = $10.8 million.", "c"],
      ["The portfolio's 5% daily VaR is closest to:",
        ["$0.92 million", "$0.94 million", "$0.68 million"],
        "Daily σ = 0.18/√250 = 1.138%; daily μ = 0.08/250 = 0.032%. VaR = (1.645 × 1.138% − 0.032%) × 50m ≈ $0.92 million.", "c"],
      ["The CIO's first request describes:",
        ["Conditional VaR", "Marginal VaR", "Incremental VaR"],
        "Conditional VaR (expected shortfall) is the average loss given that the loss exceeds VaR.", "r"],
      ["Given the new put options, the parametric method's main weakness is that it:",
        ["Handles non-linear payoffs poorly", "Requires 500 days of history", "Can't be calculated at a 5% confidence level"],
        "Parametric VaR assumes linear, normally distributed exposures; options have non-linear payoffs. Historical simulation or Monte Carlo can reprice the options in each scenario.", "s"]
    ]
  },
  {
    title: "Solent Advisers: using ETFs",
    case: `<p>Adviser Ruth Abara uses ETFs for Solent Advisers' clients.</p>
<p><b>ETF 1</b> tracks a broad equity index. Its expense ratio is 0.20% a year, commissions are 0.02% of value each way, and its bid–offer spread is 0.10%.</p>
<p><b>ETF 2</b> holds emerging market corporate bonds. During a period of market stress, it traded at a 4% discount to its reported NAV, while many of its bonds didn't trade at all.</p>
<p>Abara notes that ETF 1 sometimes trades at a small premium to NAV and asks how that premium is usually eliminated.</p>
<p>A client holding a 2× leveraged equity ETF is surprised that, over a volatile year in which the index ended flat, the ETF lost 9%.</p>`,
    qs: [
      ["For a one-year holding, ETF 1's total cost of ownership is closest to:",
        ["0.34%", "0.32%", "0.22%"],
        "0.20% fee + 2 × 0.02% commissions + 0.10% spread = 0.34%.", "c"],
      ["A premium on ETF 1 is most likely eliminated when authorized participants:",
        ["Buy the basket, create ETF shares and sell them", "Buy ETF shares and redeem them for the basket", "Sell short the underlying basket of securities"],
        "At a premium, APs buy the cheaper underlying securities, deliver them for new ETF shares (creation) and sell those shares, pushing the ETF price down toward NAV.", "s"],
      ["ETF 2's discount during the stress period most likely reflects:",
        ["Stale bond prices in the reported NAV", "A failure of the ETF's custody arrangements", "High tracking error from fees"],
        "When the underlying bonds don't trade, NAV uses stale prices; the ETF's market price reflects current information, so the discount partly reflects the NAV overstating value.", "s"],
      ["The leveraged ETF's result is best explained by:",
        ["Daily rebalancing in a volatile market", "Its high expense ratio alone", "Tracking error from securities lending"],
        "Leveraged ETFs reset their exposure daily; in volatile, trendless markets this compounding causes returns over longer periods to fall short of the multiple of the index return.", "s"]
    ]
  },
  {
    title: "Ferrand Strategic: economics and markets",
    case: `<p>Strategist Louise Ferrand is preparing a market outlook.</p>
<p><b>Exhibit 1. Government bond yields</b></p>
<table><tr><th>Bond</th><th>Yield</th></tr><tr><td>10-year nominal</td><td>4.30%</td></tr><tr><td>10-year inflation-linked (real)</td><td>1.90%</td></tr></table>
<p>The central bank has raised its policy rate five times over the past year, and the gap between 10-year and 2-year yields has fallen from 1.5% to −0.3%.</p>
<p>Ferrand wants to add an asset that tends to pay off well when consumption is low and the economy is in recession. She also expects corporate credit spreads to change as the cycle turns down.</p>`,
    qs: [
      ["The 10-year break-even inflation rate is closest to:",
        ["2.40%", "1.90%", "6.20%"],
        "BEI = nominal yield − real yield = 4.30% − 1.90% = 2.40%. Expected inflation is slightly below this, since BEI also includes an inflation risk premium.", "c"],
      ["The change in the yield curve most likely signals:",
        ["Late-cycle tightening and higher recession risk", "An early-cycle recovery with rising growth", "Falling inflation expectations at the trough"],
        "Rising policy rates and a curve moving from positive to inverted are typical of late-cycle tightening; inversions have historically preceded recessions.", "s"],
      ["The asset Ferrand wants to add will most likely offer:",
        ["A low or negative risk premium", "A high risk premium, like equities", "The same return as risky corporate bonds"],
        "An asset that pays off in bad times (when the IMRS is high) is a hedge; investors pay up for it, so its expected return carries a low or even negative risk premium.", "s"],
      ["As the economy moves into recession, credit spreads will most likely:",
        ["Widen, most for lower-rated issuers", "Narrow, as central banks cut rates", "Widen by the same amount for all ratings"],
        "Default risk and risk aversion rise in recessions, so spreads widen, and more for lower-quality issuers whose earnings are more cyclical.", "s"]
    ]
  },
  {
    title: "Brackwell Research: backtesting a value strategy",
    case: `<p>Quant researcher Ivan Petrov backtests a value strategy for Brackwell.</p>
<ol><li>His universe is the companies currently in a major stock index, with their price history over the past 20 years.</li><li>He ranks stocks each quarter-end using book values from a database that stores the latest restated figures, available from the quarter-end date.</li><li>He tested 200 variations of the strategy's rules and reports the one with the highest Sharpe ratio, which has a t-statistic of 2.1.</li><li>He estimates parameters on 5 years of data, tests on the next year, then rolls the window forward one year at a time.</li></ol>
<p>His manager wants to know how the strategy might behave in market conditions worse than any in the historical sample.</p>`,
    qs: [
      ["Step 1 most likely introduces:",
        ["Survivorship bias", "Look-ahead bias", "Data snooping"],
        "Using only companies that are in the index today excludes those that failed or were removed, which overstates historical performance.", "s"],
      ["The best fix for the problem in Step 2 is to:",
        ["Use point-in-time, lagged data", "Use a longer rolling estimation window", "Exclude financial companies"],
        "Restated data and data dated before it was actually reported create look-ahead bias; point-in-time data, lagged to the actual reporting dates, fixes it.", "s"],
      ["Petrov's Step 3 result should be viewed with caution because:",
        ["Testing many variations makes a t of 2.1 too low a hurdle", "A t-statistic of 2.1 always indicates survivorship bias", "Sharpe ratios can't be used to compare variations"],
        "Picking the best of 200 variations is data snooping; a higher hurdle (e.g. t > 3.0) and out-of-sample or cross-validation tests are needed.", "s"],
      ["To address the manager's question, the most appropriate tool is:",
        ["Monte Carlo simulation with fat tails", "Historical simulation from the same sample period", "A longer in-sample estimation window"],
        "Monte Carlo simulation can generate outcomes beyond those observed historically (e.g. fatter tails, correlation breakdowns); historical simulation only resamples past returns.", "s"]
    ]
  }
];

window.GLOSSARY.push(
  ["IMRS and risk premiums", "Assets paying off poorly in bad times (negative covariance with IMRS) need a positive risk premium.", "l2pm"],
  ["Break-even inflation", "Nominal yield − real yield = expected inflation + inflation risk premium.", "l2pm"],
  ["Optimal active risk", "σ_A* = (IR/SR_B) × σ_B; then SR_P² = SR_B² + IR².", "l2pm"],
  ["Fundamental law of active management", "E(R_A) = TC × IC × √BR × σ_A; IR = TC × IC × √BR.", "l2pm"],
  ["Transfer coefficient", "Correlation of optimal and actual active weights; constraints lower it.", "l2pm"],
  ["ETF creation/redemption", "Premium → APs create (deliver basket, sell ETF). Discount → APs buy ETF and redeem.", "l2pm"],
  ["ETF total cost of ownership", "Fee × holding period + round-trip commissions + bid–offer spread.", "l2pm"],
  ["Tracking difference vs tracking error", "Difference: ETF − index return. Error: standard deviation of the differences.", "l2pm"],
  ["APT", "E(R) = R_F + Σ β_k λ_k; mispricing → buy cheap, short replicating portfolio.", "l2pm"],
  ["Active risk decomposition", "Active risk² = active factor risk² + active specific risk².", "l2pm"],
  ["Parametric VaR", "(zσ − μ) × value; scale σ by √T, μ by T.", "l2pm"],
  ["Conditional VaR", "Average loss given the loss exceeds VaR (expected shortfall).", "l2pm"],
  ["Incremental vs marginal VaR", "Incremental: VaR change from a specified position change. Marginal: per small change.", "l2pm"],
  ["Backtesting biases", "Survivorship (only survivors), look-ahead (data not yet available), data snooping (many trials).", "l2pm"],
  ["Monte Carlo vs historical simulation", "Monte Carlo draws from assumed distributions (beyond history); historical resamples past returns.", "l2pm"]
);
