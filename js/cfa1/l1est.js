// CFA Level I · Quantitative Methods · Learning module 7: Estimation and Inference.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1est = `
<p class="syl">CFA Level I · Quantitative Methods · Learning module 7 of 11 · Estimation and Inference</p>
<p>We almost never observe a whole population (every possible return of a stock, every bond in a market), so we draw a <b>sample</b> and use it to estimate population values. This lesson covers how to sample, why the <b>central limit theorem</b> lets us make probability statements about the sample mean, how to build <b>confidence intervals</b>, and how resampling (bootstrap and jackknife) estimates the precision of a statistic. It's the bridge to hypothesis testing in the next lesson.</p>

<h3>1. Populations, samples and sampling error</h3>
<ul>
  <li>A <b>parameter</b> describes a population (μ, σ); a <b>statistic</b> describes a sample (X̄, s) and is used to estimate the parameter.</li>
  <li><b>Sampling error</b> = the difference between a sample statistic and the population parameter (e.g. X̄ − μ). It arises simply because a sample isn't the whole population.</li>
  <li>The <b>sampling distribution</b> of a statistic is the distribution of values it would take across all possible samples of the same size.</li>
</ul>

<h3>2. Sampling methods <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Method</th><th>How it works</th><th>Use / note</th></tr>
  <tr><td colspan="3"><b>Probability sampling</b> (every member has a known chance of selection; supports statistical inference)</td></tr>
  <tr><td><b>Simple random sampling</b></td><td>Every member has an equal chance of selection</td><td>The baseline. <b>Systematic sampling</b> (every k-th member) approximates it.</td></tr>
  <tr><td><b>Stratified random sampling</b></td><td>Divide the population into subgroups (strata) by a characteristic (e.g. rating, maturity), then draw a random sample from each in proportion to its size</td><td>Ensures every subgroup is represented; gives more precise estimates than simple random sampling. Used in <b>bond index fund</b> construction.</td></tr>
  <tr><td><b>Cluster sampling</b></td><td>Divide the population into clusters (each a mini-population, e.g. by city), randomly select whole clusters. <b>One-stage</b>: use every member of the chosen clusters; <b>two-stage</b>: randomly sample within the chosen clusters</td><td>Cheaper and faster, but usually less precise than stratified sampling, since clusters may not be representative</td></tr>
  <tr><td colspan="3"><b>Non-probability sampling</b> (relies on judgment or convenience; risk of bias)</td></tr>
  <tr><td><b>Convenience sampling</b></td><td>Use data that are easy to obtain</td><td>Quick and cheap (e.g. a pilot study), but may not be representative</td></tr>
  <tr><td><b>Judgmental sampling</b></td><td>An expert hand-picks observations</td><td>Can use expertise (e.g. an auditor selecting suspicious transactions) but subject to the expert's bias</td></tr>
</table>
<div class="trap"><b>Trap:</b> stratified sampling divides by a <b>characteristic</b> and samples <b>within every stratum</b>; cluster sampling picks <b>some clusters</b> and ignores the rest. Strata differ from each other; each cluster should resemble the population.</div>
<h4>Sample biases to recognize</h4>
<ul>
  <li><b>Data snooping</b>: finding patterns by testing many models on the same data; results don't hold out of sample.</li>
  <li><b>Sample selection bias</b>: some data are systematically excluded. <b>Survivorship bias</b> (e.g. a fund database that drops closed funds, overstating average performance) is the most common form. <b>Implicit selection bias</b>: a filter is applied (e.g. only exchange-listed stocks).</li>
  <li><b>Look-ahead bias</b>: using information that wasn't available at the time (e.g. year-end book values on 1 January).</li>
  <li><b>Time-period bias</b>: results depend on the particular period chosen (too short or one unusual regime).</li>
</ul>

<h3>3. The central limit theorem <span class="hot">Highly tested</span></h3>
<p>The <b>central limit theorem (CLT)</b>: for a population with mean μ and finite variance σ², the sampling distribution of the sample mean X̄ from random samples of size n is <b>approximately normal</b> when n is large (n ≥ 30 is the usual rule), <b>whatever the shape of the population distribution</b>. Its mean is μ and its variance is σ²/n.</p>
<div class="formula">Standard error of the sample mean: σ_X̄ = σ/√n (or s/√n when σ is unknown)</div>
<ul>
  <li>The standard error measures how much the sample mean varies from sample to sample, i.e. its precision.</li>
  <li>It shrinks as n grows: to <b>halve</b> the standard error you need <b>four times</b> as many observations.</li>
  <li>Why it matters: it lets us use normal (or t) probabilities to build confidence intervals and test hypotheses about μ, even if returns aren't normal.</li>
</ul>
<div class="ex"><b>Example:</b> 64 monthly returns with s = 16%: standard error = 16%/√64 = 2.0%. With 36 observations and s = 12%: 12%/6 = 2.0%.</div>

<h3>4. Point estimates, estimator properties and confidence intervals</h3>
<p>A <b>point estimate</b> is a single number (e.g. X̄ = 9%). Good estimators are:</p>
<ul>
  <li><b>Unbiased</b>: the expected value of the estimator equals the parameter (e.g. X̄ for μ; s² with n − 1 for σ²).</li>
  <li><b>Efficient</b>: the smallest variance among unbiased estimators.</li>
  <li><b>Consistent</b>: more accurate as the sample size grows (sampling error → 0).</li>
</ul>
<p>A <b>confidence interval</b> gives a range that contains the parameter with a stated probability (1 − α):</p>
<div class="formula">Point estimate ± reliability factor × standard error, e.g. X̄ ± z_α/2 × σ/√n or X̄ ± t_α/2 × s/√n</div>
<table>
  <tr><th>Situation</th><th>Reliability factor</th></tr>
  <tr><td>Normal population, <b>σ known</b> (any n)</td><td>z</td></tr>
  <tr><td><b>σ unknown</b> (the usual case), large or small n with a roughly normal population</td><td><b>t</b> with n − 1 degrees of freedom (z is an acceptable approximation for large n)</td></tr>
  <tr><td>Non-normal population, small n</td><td>No reliable method</td></tr>
</table>
<p>Common z values: 1.645 (90%), 1.96 (95%), 2.58 (99%). The <b>t-distribution</b> is symmetric but has fatter tails than the normal, so its reliability factors are larger (more uncertainty); it approaches the normal as degrees of freedom increase.</p>
<div class="ex"><b>Example:</b> n = 36, X̄ = 9%, s = 12% (σ unknown). Standard error = 2%. With t(35) = 2.030: 95% interval = 9% ± 4.06% = 4.94% to 13.06%. Using z = 1.96 gives 5.08% to 12.92%.</div>
<p>Interpretation: if we repeated the sampling many times, 95% of such intervals would contain μ. A wider interval comes from higher confidence, a smaller sample or more variable data.</p>

<h3>5. Resampling: bootstrap and jackknife</h3>
<p>When there's no formula for a statistic's standard error (e.g. the median or a ratio), resampling estimates it from the data:</p>
<ul>
  <li><b>Bootstrap</b>: draw many samples of size n <b>with replacement</b> from the original sample, compute the statistic each time, and use the standard deviation of those values as the standard error. It mimics drawing new samples from the population.</li>
  <li><b>Jackknife</b>: create n samples by <b>leaving out one observation at a time</b> (without replacement), compute the statistic for each, and use their variation. It gives the same answer every time it's run and is used to reduce bias; the bootstrap needs more computing but works for more statistics.</li>
</ul>

<div class="how"><b>How it's tested:</b> identifying sampling methods from a description (stratified vs cluster vs convenience vs judgmental), applying the CLT, computing a standard error or confidence interval, choosing z vs t, naming the bias in a described study, and contrasting bootstrap with jackknife.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Compare probability and non-probability sampling methods and recognize common sample biases.</li>
  <li>State the central limit theorem and compute the standard error of the mean.</li>
  <li>Describe unbiased, efficient and consistent estimators.</li>
  <li>Build confidence intervals with z or t and interpret them.</li>
  <li>Explain how bootstrap and jackknife resampling estimate standard errors.</li>
</ul></div>
`;

window.QB_HARD.l1est = [
  ["A sample of 64 monthly returns has a standard deviation of 16%. The standard error of the sample mean is closest to:",
    ["2.0%", "0.25%", "4.0%"],
    "Standard error = s ÷ √n = 16% ÷ √64 = 16% ÷ 8 = 2.0%.", "c"],
  ["To build a bond index fund, an analyst divides the index into groups by credit rating and maturity, then randomly selects bonds from each group in proportion to its weight. This is:",
    ["Stratified random sampling", "Cluster sampling", "Simple random sampling"],
    "Stratified sampling divides the population into subgroups (strata) and samples each in proportion, so the sample matches the population's key characteristics.", "r"],
  ["According to the central limit theorem, for a sample of 36 observations from a population with an unknown, non-normal distribution, the sampling distribution of the sample mean is:",
    ["Approximately normal, with variance σ²/36", "Non-normal, with the same shape as the population", "Approximately normal, with variance σ²"],
    "With n ≥ 30, the sample mean is approximately normal with mean μ and variance σ²/n, whatever the population's shape.", "r"],
  ["An analyst sorts all listed companies into ten industries and randomly selects companies from each industry in proportion to its size. This method is:",
    ["Stratified random sampling", "Cluster sampling", "Judgmental (expert) sampling"],
    "Dividing by a characteristic and sampling randomly within every subgroup is stratified random sampling.", "s"],
  ["A researcher randomly selects 5 of 40 regional branches of a bank and surveys every client of those 5 branches. This is:",
    ["One-stage cluster sampling", "Stratified random sampling", "Two-stage cluster sampling"],
    "Whole clusters are chosen at random and every member of each chosen cluster is used: one-stage cluster sampling. Two-stage would sample clients within the chosen branches.", "s"],
  ["Compared with stratified random sampling, cluster sampling is generally:",
    ["Cheaper but less precise", "More precise and more expensive", "Unable to produce random samples"],
    "Cluster sampling saves time and cost, but chosen clusters may not represent the population, so estimates are usually less precise.", "r"],
  ["An auditor uses her experience to pick the transactions most likely to contain errors. This is:",
    ["Judgmental sampling", "Convenience sampling", "Systematic sampling"],
    "Selection based on expert judgment is judgmental (non-probability) sampling.", "s"],
  ["A study of mutual fund performance uses a database that only contains funds still operating today. Its results most likely suffer from:",
    ["Survivorship bias", "Look-ahead bias", "Time-period bias"],
    "Funds that closed (usually poor performers) are missing, so average performance is overstated.", "s"],
  ["A backtest ranks stocks on 1 January each year using book values from annual reports published in March. This introduces:",
    ["Look-ahead bias", "Survivorship bias", "Data snooping bias"],
    "The strategy uses information that wasn't available at the decision date.", "s"],
  ["To halve the standard error of a sample mean, the sample size must be:",
    ["Multiplied by 4", "Doubled", "Multiplied by √2"],
    "Standard error = s/√n; halving it needs √n to double, i.e. n to quadruple.", "r"],
  ["A sample of 36 annual returns has a mean of 9% and a standard deviation of 12%; the population standard deviation is unknown. Using a t-value of 2.03, the 95% confidence interval for the population mean is closest to:",
    ["4.9% to 13.1%", "5.1% to 12.9%", "−15.4% to 33.4%"],
    "Standard error = 12/√36 = 2%. 9% ± 2.03 × 2% = 4.94% to 13.06%. Using z = 1.96 gives 5.1% to 12.9%; using s instead of the standard error gives the much wider range.", "c"],
  ["An analyst estimates a population mean from a sample of 25 returns drawn from a roughly normal population with unknown variance. The appropriate reliability factor comes from the:",
    ["t-distribution with 24 degrees of freedom", "Standard normal distribution", "t-distribution with 25 degrees of freedom"],
    "With σ unknown, use t with n − 1 = 24 degrees of freedom.", "r"],
  ["Compared with the standard normal distribution, the t-distribution:",
    ["Has fatter tails", "Has thinner tails", "Is skewed to the right"],
    "The t-distribution is symmetric with fatter tails (reflecting extra uncertainty from estimating σ); it approaches the normal as degrees of freedom rise.", "r"],
  ["An estimator whose expected value equals the population parameter is described as:",
    ["Unbiased", "Efficient", "Consistent"],
    "Unbiased: E(estimator) = parameter. Efficient: lowest variance among unbiased estimators. Consistent: accuracy improves as n grows.", "r"],
  ["The jackknife differs from the bootstrap mainly because the jackknife:",
    ["Omits one observation at a time, without replacement", "Draws from an assumed normal distribution", "Draws repeated samples with replacement from the data"],
    "Jackknife samples omit one observation each (n samples, no replacement) and give the same result every run; the bootstrap draws with replacement.", "r"],
];

window.GLOSSARY.push(
  ["Central limit theorem","For n ≥ 30, the sample mean is approximately normal with mean μ and standard error σ/√n, whatever the population's distribution.","l1est"],
  ["Stratified vs cluster sampling", "Stratified: sample within every subgroup. Cluster: randomly pick whole clusters (one- or two-stage).", "l1est"],
  ["Sampling error", "Difference between a sample statistic and the population parameter.", "l1est"],
  ["Standard error of the mean", "σ/√n (s/√n if σ unknown); shrinks as n grows.", "l1est"],
  ["Confidence interval", "Point estimate ± reliability factor × standard error; use t (n − 1 df) when σ is unknown.", "l1est"],
  ["Unbiased, efficient, consistent", "Expected value = parameter; lowest variance; improves with sample size.", "l1est"],
  ["Survivorship and look-ahead bias", "Missing failed members; using data not yet available at the time.", "l1est"],
  ["Jackknife", "Resampling that leaves out one observation at a time to estimate standard error.", "l1est"]
);
