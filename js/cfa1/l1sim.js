// CFA Level I · Quantitative Methods · Learning module 6: Simulation Methods.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1sim = `
<p class="syl">CFA Level I · Quantitative Methods · Learning module 6 of 11 · Simulation Methods</p>
<p>Many investment questions can't be answered with a single formula: "What's the chance my retirement fund runs out?" or "What is this complex derivative worth?" Simulation answers them by generating thousands of possible futures. This lesson reviews the normal distribution, explains why asset <b>prices</b> are modelled as lognormal while <b>continuously compounded returns</b> are modelled as normal, and covers the two main simulation approaches: <b>Monte Carlo</b> and <b>bootstrap resampling</b>.</p>

<h3>1. The normal distribution (foundation)</h3>
<ul>
  <li>Bell-shaped and symmetric (skewness 0, kurtosis 3); fully described by its mean μ and standard deviation σ; mean = median = mode.</li>
  <li>A linear combination of normal variables (e.g. a portfolio of normally distributed returns) is also normal.</li>
  <li><b>Standardizing</b>: z = (X − μ)/σ converts any normal variable to the standard normal (mean 0, σ 1), whose probabilities are tabulated as N(z).</li>
</ul>
<table>
  <tr><th>Interval</th><th>Approximate probability</th></tr>
  <tr><td>μ ± 1σ</td><td>68%</td></tr>
  <tr><td>μ ± 1.65σ</td><td>90%</td></tr>
  <tr><td>μ ± 1.96σ</td><td>95%</td></tr>
  <tr><td>μ ± 2.58σ</td><td>99%</td></tr>
  <tr><td>μ ± 3σ</td><td>99.7%</td></tr>
</table>
<div class="ex"><b>Example:</b> Annual returns are normal with μ = 8% and σ = 12%. P(R &lt; −4%): z = (−4 − 8)/12 = −1, so N(−1) = 15.9%. A 95% interval is 8% ± 1.96 × 12% = −15.5% to 31.5%. P(R &lt; 0) = N(−0.67) ≈ 25%.</div>

<h3>2. Lognormal distribution and continuously compounded returns <span class="hot">Highly tested</span></h3>
<p>If ln(X) is normally distributed, X is <b>lognormally</b> distributed.</p>
<ul>
  <li>A lognormal variable is <b>bounded below by zero</b> and <b>positively (right) skewed</b>.</li>
  <li>That suits asset <b>prices</b>: a share price can't fall below zero (limited liability), but it can rise without limit. A normal distribution would allow negative prices.</li>
  <li>The link: if <b>continuously compounded returns are normally distributed</b>, then future prices are lognormal, because P_T = P₀ × e^(r₀,T).</li>
</ul>
<div class="formula">r₀,T = ln(P_T/P₀) = r₁ + r₂ + … + r_T (continuously compounded returns add up over time)</div>
<p>If the one-period continuously compounded returns are <b>independent and identically distributed (i.i.d.)</b> with mean μ and variance σ²:</p>
<div class="formula">Mean of r₀,T = μT · Variance = σ²T · Standard deviation = σ√T</div>
<ul>
  <li>Volatility scales with the <b>square root of time</b>. Weekly σ of 2.5% → annual σ ≈ 2.5% × √52 = 18.0%. Daily σ of 1.2% with 250 trading days → 1.2% × √250 = 19.0% a year.</li>
  <li>Example: a share at $50 with a continuously compounded return of 15% ends at 50 × e^0.15 = $58.09.</li>
  <li>Returns of +5%, −3% and +8% (HPRs) have continuously compounded equivalents that sum to ln(1.05) + ln(0.97) + ln(1.08) = 9.53% = ln(1.05 × 0.97 × 1.08).</li>
</ul>
<div class="trap"><b>Trap:</b> it's the <b>price</b> that's lognormal and the <b>continuously compounded return</b> that's normal, not the other way round. And σ√T requires returns to be independent over time.</div>

<h3>3. Monte Carlo simulation <span class="hot">Highly tested</span></h3>
<p>Monte Carlo simulation generates a large number of random scenarios from <b>assumed probability distributions</b> for the risk factors, computes the outcome in each, and studies the resulting distribution of outcomes.</p>
<h4>Steps</h4>
<ol>
  <li>Specify the quantity of interest (e.g. the value of an option, a portfolio's value at retirement) in terms of underlying risk factors.</li>
  <li>Specify a time grid (number of periods and their length).</li>
  <li>Specify the probability distributions (and their parameters, e.g. mean, volatility, correlations) of the risk factors.</li>
  <li>Use a random number generator to draw values for each risk factor in each period.</li>
  <li>Convert the draws into values of the risk factors, then compute the quantity of interest for that trial.</li>
  <li>Repeat many times (thousands of trials).</li>
  <li>Compute statistics of the outcomes: mean (the estimated value) and variability (e.g. standard deviation, percentiles, probability of shortfall).</li>
</ol>
<h4>Uses</h4>
<ul>
  <li>Valuing complex securities with no closed-form formula (e.g. path-dependent options, mortgage-backed securities with prepayment).</li>
  <li>Risk management: value at risk, the distribution of losses, stress scenarios.</li>
  <li>Planning: probability that a retirement portfolio lasts, or that a pension plan becomes underfunded.</li>
  <li>Testing statistical methods by simulating data with known properties.</li>
</ul>
<table>
  <tr><th>Strengths</th><th>Limitations</th></tr>
  <tr><td>Handles complex, non-linear and path-dependent problems; can model any assumed distribution (fat tails, skew); gives a full distribution of outcomes, not just a point estimate</td><td>Only as good as its assumptions ("garbage in, garbage out"); a statistical estimate, not an exact answer; doesn't explain cause and effect; can be computationally intensive</td></tr>
</table>

<h3>4. Bootstrap resampling</h3>
<p><b>Bootstrapping</b> builds simulated samples by <b>drawing repeatedly, with replacement, from the observed data</b> itself, rather than from an assumed theoretical distribution.</p>
<ul>
  <li>Process: take the original sample of n observations; draw n observations from it at random with replacement to create a resample; compute the statistic of interest (e.g. the mean); repeat many times; use the distribution of the resampled statistics (e.g. its standard deviation as the standard error).</li>
  <li><b>Advantage</b>: no need to assume a distribution, so it works when the true distribution is unknown or complicated, and for statistics with no simple standard-error formula.</li>
  <li><b>Limitation</b>: it can only reproduce what's in the sample; if the sample is small or unrepresentative, so are the results. Rare events missing from history never appear.</li>
</ul>
<table>
  <tr><th></th><th>Monte Carlo simulation</th><th>Bootstrap resampling</th><th>Historical simulation</th></tr>
  <tr><td>Source of scenarios</td><td>Random draws from an <b>assumed distribution</b></td><td>Random draws <b>with replacement from the sample</b></td><td>The actual historical sequence</td></tr>
  <tr><td>Can produce outcomes never observed?</td><td>Yes</td><td>Only recombinations of observed values</td><td>No</td></tr>
</table>

<div class="how"><b>How it's tested:</b> why prices are lognormal and continuously compounded returns normal; scaling volatility with √T; summing continuously compounded returns; normal-distribution probabilities with z-scores; the steps, uses and limitations of Monte Carlo simulation; how bootstrapping differs from Monte Carlo.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Use z-scores and the 68/90/95/99% intervals of the normal distribution.</li>
  <li>Explain why the lognormal distribution suits asset prices and relate it to normally distributed continuously compounded returns.</li>
  <li>Scale mean and volatility over time (μT, σ√T) under the i.i.d. assumption.</li>
  <li>Describe the steps, uses and limitations of Monte Carlo simulation, and contrast it with bootstrap resampling.</li>
</ul></div>
`;

window.QB_HARD.l1sim = [
  ["The lognormal distribution is often used to model asset prices mainly because it:",
    ["Is bounded below by zero and skewed to the right", "Is symmetric, matching observed price behaviour", "Allows prices to become negative in a crash"],
    "Prices can't fall below zero and have a long right tail. If continuously compounded returns are normal, prices are lognormal.", "r"],
  ["Bootstrap resampling differs from Monte Carlo simulation mainly because bootstrapping:",
    ["Draws repeatedly, with replacement, from the observed sample", "Generates scenarios from an assumed parametric distribution", "Requires the population distribution to be known in advance"],
    "Monte Carlo draws from distributions the analyst specifies; the bootstrap treats the sample as the population and resamples it with replacement.", "r"],
  ["Annual returns are normally distributed with a mean of 10% and a standard deviation of 15%. The probability of a return below −20% is closest to:",
    ["2.3%", "5.0%", "16.0%"],
    "z = (−20 − 10)/15 = −2.0; N(−2) = 2.3%. (16% would be one standard deviation below the mean.)", "c"],
  ["Annual returns are normal with a mean of 6% and a standard deviation of 10%. A 90% confidence interval for next year's return is closest to:",
    ["−10.5% to 22.5%", "−13.6% to 25.6%", "−4.0% to 16.0%"],
    "6% ± 1.645 × 10% = −10.45% to 22.45%. (±1.96σ gives the 95% interval; ±1σ the 68% interval.)", "c"],
  ["If an asset's continuously compounded returns are normally distributed, its price is:",
    ["Lognormally distributed", "Normally distributed", "Uniformly distributed"],
    "P_T = P₀e^r. If r is normal, P_T is lognormal: bounded below by zero and right-skewed.", "r"],
  ["A lognormal distribution is:",
    ["Bounded at zero and right-skewed", "Symmetric with fat tails", "Bounded below by zero and skewed to the left"],
    "Lognormal variables can't be negative and have a long right tail.", "r"],
  ["A stock's weekly continuously compounded returns are i.i.d. with a standard deviation of 2.5%. Its annualized standard deviation (52 weeks) is closest to:",
    ["18.0%", "130.0%", "4.8%"],
    "σ_annual = σ_weekly × √52 = 2.5% × 7.21 = 18.0%. Multiplying by 52 (130%) wrongly scales volatility linearly.", "c"],
  ["A share's continuously compounded returns over three consecutive months are 2%, −1% and 3%. The 3-month continuously compounded return is:",
    ["4.0%", "4.1%", "1.3%"],
    "Continuously compounded returns are additive: 2 − 1 + 3 = 4.0%.", "c"],
  ["A share priced at $50 has a continuously compounded return of 15% over a year. Its price at year-end is closest to:",
    ["$58.09", "$57.50", "$43.04"],
    "P = 50 × e^0.15 = $58.09. 50 × 1.15 = $57.50 treats 15% as a simple return.", "c"],
  ["Which step comes first in a Monte Carlo simulation?",
    ["Define the quantity of interest and its risk factors", "Draw random numbers for each risk factor", "Compute the mean and standard deviation of the trials"],
    "First define what is being estimated and how it depends on the risk factors; then the time grid and distributions; then draw random values, compute outcomes, repeat and summarize.", "r"],
  ["Monte Carlo simulation is least suited to:",
    ["Explaining the causes of an outcome", "Valuing path-dependent options", "Estimating the probability of a retirement shortfall"],
    "Simulation estimates distributions of outcomes but doesn't reveal cause and effect; it's widely used for complex valuation and shortfall analysis.", "r"],
  ["A key limitation of Monte Carlo simulation is that:",
    ["Results depend on the assumed inputs", "It can only be used for normally distributed variables", "It can't produce a distribution of outcomes"],
    "Simulation can use any distribution and produces full distributions, but bad assumptions give bad results.", "r"],
  ["To estimate the standard error of a fund's median return without assuming any distribution, an analyst repeatedly draws samples with replacement from the fund's 120 monthly returns. This technique is:",
    ["Bootstrap resampling", "Monte Carlo simulation", "Stratified random sampling"],
    "Drawing with replacement from the observed sample is bootstrapping; Monte Carlo draws from an assumed theoretical distribution.", "s"],
];

window.GLOSSARY.push(
  ["Normal distribution intervals", "68% within ±1σ, 90% ±1.65σ, 95% ±1.96σ, 99% ±2.58σ.", "l1sim"],
  ["Lognormal distribution", "Bounded below by 0, right-skewed; prices are lognormal if continuously compounded returns are normal.", "l1sim"],
  ["Square-root-of-time rule", "With i.i.d. returns, σ over T periods = σ√T; mean = μT.", "l1sim"],
  ["Monte Carlo simulation", "Many random trials from assumed distributions to estimate the distribution of an outcome.", "l1sim"],
  ["Bootstrap resampling", "Repeated draws with replacement from the observed sample; no distribution assumption.", "l1sim"]
);
