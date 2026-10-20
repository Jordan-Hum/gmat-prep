// CFA Level I · Quantitative Methods · Learning module 3: Statistical Measures of Asset Returns.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1stats = `
<p class="syl">CFA Level I · Quantitative Methods · Learning module 3 of 11 · Statistical Measures of Asset Returns</p>
<p>Investment returns are summarized with a handful of statistics: where the returns are centred, how spread out they are, whether the distribution is lopsided or has fat tails, and how two return series move together. This lesson defines each measure, shows how to calculate it by hand, and explains how to interpret it. These measures reappear in portfolio math, hypothesis testing, regression and risk management.</p>
<p>Running example (six annual returns, %): <b>12, −4, 7, 3, 15, −1</b>. Sorted: −4, −1, 3, 7, 12, 15.</p>

<h3>1. Measures of central tendency</h3>
<ul>
  <li><b>Arithmetic mean</b> = sum / n = 32/6 = <b>5.33%</b>. Uses every observation, so it's sensitive to <b>outliers</b>. Sample mean X̄; population mean μ.</li>
  <li><b>Median</b>: the middle value of the sorted data. With an even n, average the two middle values: (3 + 7)/2 = <b>5.0%</b>. Not affected by extreme values, so it's preferred for skewed data.</li>
  <li><b>Mode</b>: the most frequent value (a distribution can have none, one or several). Mainly useful for grouped data.</li>
  <li>Trimmed and winsorized means (see Rates and Returns) also limit outlier effects.</li>
</ul>

<h3>2. Quantiles: quartiles, quintiles, deciles, percentiles <span class="hot">Highly tested</span></h3>
<p>A <b>quantile</b> is a value at or below which a stated fraction of the data lies. Quartiles split the data into 4 parts (Q1 = 25th percentile, Q2 = median, Q3 = 75th), quintiles into 5, deciles into 10, percentiles into 100.</p>
<div class="formula">Position of the y-th percentile in data sorted from smallest to largest: L_y = (n + 1) × y / 100</div>
<p>If L isn't a whole number, interpolate between the neighbouring observations.</p>
<div class="ex"><b>Example:</b> 11 sorted returns: 1.2, 2.5, 3.1, 4.0, 4.4, 5.6, 6.3, 7.0, 7.7, 8.1, 9.0. The 30th percentile is at L = 12 × 0.30 = 3.6, i.e. 60% of the way from the 3rd value (3.1) to the 4th (4.0): 3.1 + 0.6 × 0.9 = 3.64. For n = 20, the 25th percentile is at position 5.25.</div>
<ul>
  <li><b>Interquartile range (IQR)</b> = Q3 − Q1: the spread of the middle 50%.</li>
  <li>A <b>box-and-whisker plot</b> shows the median (line in the box), Q1 and Q3 (box edges) and whiskers to the extremes (or to 1.5 × IQR, with points beyond shown as outliers).</li>
  <li>Quantiles are used to rank (e.g. "top-quartile fund"), to set risk limits and to group stocks into portfolios by a characteristic.</li>
</ul>

<h3>3. Measures of dispersion <span class="hot">Highly tested</span></h3>
<p>Dispersion = variability around the centre, which in investing means <b>risk</b>.</p>
<ul>
  <li><b>Range</b> = max − min = 15 − (−4) = 19%. Simple but uses only two observations.</li>
  <li><b>Mean absolute deviation (MAD)</b> = Σ|Xᵢ − X̄| / n. For the example: (6.67 + 9.33 + 1.67 + 2.33 + 9.67 + 6.33)/6 = <b>6.0%</b>. Uses all observations, but absolute values are awkward mathematically.</li>
  <li><b>Sample variance</b> s² = Σ(Xᵢ − X̄)² / (n − 1). For the example: 273.33/5 = <b>54.67</b> (%²). <b>Sample standard deviation</b> s = √54.67 = <b>7.39%</b>, in the same units as the data.</li>
</ul>
<div class="formula">s² = Σ(Xᵢ − X̄)² / (n − 1) · s = √s² · Population variance σ² = Σ(Xᵢ − μ)² / N</div>
<p>Why divide by <b>n − 1</b>? Using the sample mean (instead of the unknown population mean) makes the squared deviations slightly too small; dividing by n − 1 (the <b>degrees of freedom</b>) corrects this so the sample variance is an <b>unbiased</b> estimator of the population variance.</p>
<div class="calc"><b>BA II Plus:</b> [2nd][DATA], [2nd][CLR WRK], enter X01 = 12 [ENTER] [↓][↓] X02 = −4 … then [2nd][STAT] (1-V): scroll for n, x̄ = 5.33, Sx = 7.39 (sample), σx = 6.75 (population).</div>
<h4>Downside risk: target downside deviation</h4>
<p>Investors usually worry about returns <b>below a target</b> B, not above it. The <b>target downside deviation</b> (target semideviation) uses only observations below the target:</p>
<div class="formula">s_target = √[ Σ over Xᵢ &lt; B of (Xᵢ − B)² / (n − 1) ]</div>
<div class="ex"><b>Example:</b> Target 2%. Only −4% and −1% are below it: (−6)² + (−3)² = 45. Divide by n − 1 = 5 (all observations count in n): 9. Target downside deviation = 3.0%.</div>
<div class="trap"><b>Trap:</b> the denominator is n − 1 using the <b>full</b> sample size, not just the number of observations below the target.</div>
<h4>Coefficient of variation</h4>
<div class="formula">CV = s / X̄ (risk per unit of mean return)</div>
<p>Use it to compare the relative risk of investments with different average returns: lower CV = less risk per unit of return. Example: CV = 7.39/5.33 = 1.39. Fund A (mean 10%, s 15%) has CV 1.5; Fund B (mean 5%, s 9%) has CV 1.8, so A is better on this measure. CV is meaningless if the mean is near zero or negative.</p>

<h3>4. Shape of the distribution: skewness and kurtosis <span class="hot">Highly tested</span></h3>
<h4>Skewness (asymmetry)</h4>
<table>
  <tr><th></th><th>Positive (right) skew</th><th>Negative (left) skew</th></tr>
  <tr><td>Tail</td><td>Long tail to the <b>right</b>: occasional large gains</td><td>Long tail to the <b>left</b>: occasional large losses</td></tr>
  <tr><td>Ordering</td><td><b>Mean &gt; median &gt; mode</b></td><td><b>Mean &lt; median &lt; mode</b></td></tr>
  <tr><td>Investor view</td><td>Preferred (frequent small losses, a few big gains)</td><td>Disliked (frequent small gains, a few big losses)</td></tr>
</table>
<p>A symmetric distribution (like the normal) has skewness 0 and mean = median = mode. Sample skewness is roughly (1/n) Σ(Xᵢ − X̄)³ / s³; cubing keeps the sign, so large deviations on one side dominate. Values beyond about ±0.5 are considered significant.</p>
<p>Memory trick: the mean is pulled toward the tail. For a right tail, the mean sits furthest right.</p>
<h4>Kurtosis (tail thickness)</h4>
<ul>
  <li>Kurtosis measures how much of the distribution is in the <b>tails</b> compared with a normal distribution, whose kurtosis is <b>3</b>.</li>
  <li><b>Excess kurtosis</b> = kurtosis − 3.</li>
  <li><b>Leptokurtic</b> (excess &gt; 0): <b>fat tails</b> (and a taller peak); extreme outcomes are more likely than the normal predicts. Most asset returns are leptokurtic, so normal-based risk models <b>understate</b> the chance of big losses.</li>
  <li><b>Mesokurtic</b>: excess = 0 (like the normal). <b>Platykurtic</b> (excess &lt; 0): thin tails.</li>
</ul>
<div class="trap"><b>Trap:</b> watch whether a question gives kurtosis or <b>excess</b> kurtosis. Kurtosis of 4.2 = excess of 1.2 = leptokurtic. Kurtosis of 2.5 = platykurtic.</div>

<h3>5. Correlation between two variables <span class="hot">Highly tested</span></h3>
<div class="formula">Sample covariance s_XY = Σ(Xᵢ − X̄)(Yᵢ − Ȳ) / (n − 1) · Correlation r_XY = s_XY / (s_X × s_Y)</div>
<ul>
  <li>Covariance shows the <b>direction</b> of co-movement but its size depends on units (%² here), so it's hard to interpret.</li>
  <li>Correlation standardizes covariance to the range <b>−1 to +1</b>: +1 perfect positive linear relationship, −1 perfect negative, 0 no <b>linear</b> relationship.</li>
  <li>A <b>scatter plot</b> shows the relationship visually; correlation summarizes how tightly the points fit a straight line.</li>
</ul>
<div class="ex"><b>Example:</b> Two assets with standard deviations of 15% and 20% have a covariance of 0.0045. Correlation = 0.0045/(0.15 × 0.20) = 0.15.</div>
<p><b>Limitations of correlation</b>:</p>
<ul>
  <li>It only measures <b>linear</b> relationships: two variables can be strongly related in a non-linear way (e.g. Y = X²) with correlation near zero.</li>
  <li><b>Outliers</b> can create or hide correlation.</li>
  <li><b>Spurious correlation</b>: a correlation that arises by chance, from a third variable driving both, or from mixing variables (e.g. both trending over time). Correlation does <b>not</b> imply causation.</li>
</ul>

<div class="how"><b>How it's tested:</b> compute a median, a percentile position, MAD, sample variance/standard deviation, target downside deviation, CV and correlation; interpret skewness (mean vs median), kurtosis (fat tails, excess kurtosis) and the limits of correlation.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Calculate and interpret mean, median, mode and quantiles (with the (n + 1)y/100 position rule).</li>
  <li>Calculate range, MAD, sample variance and standard deviation (n − 1), target downside deviation and CV.</li>
  <li>Interpret positive vs negative skewness and leptokurtic vs platykurtic distributions.</li>
  <li>Calculate covariance and correlation and explain correlation's limitations, including spurious correlation.</li>
</ul></div>
`;

window.QB_HARD.l1stats = [
  ["Fund X has a mean return of 9% and standard deviation of 12%; Fund Y has a mean of 6% and standard deviation of 9%. Which fund has less risk per unit of return?",
    ["Fund X, with a coefficient of variation of 1.33", "Fund Y, with a coefficient of variation of 1.50", "Fund Y, because its standard deviation is lower"],
    "CV = s ÷ mean: X = 12/9 = 1.33; Y = 9/6 = 1.50. Lower CV means less risk per unit of return, so Fund X.", "c"],
  ["A distribution of monthly returns has a mean greater than its median, which is greater than its mode. The distribution is most likely:",
    ["Positively skewed", "Negatively skewed", "Symmetric with fat tails"],
    "In a positively (right) skewed distribution, a few large positive outliers pull the mean above the median, and the median above the mode.", "r"],
  ["Compared with a normal distribution, a leptokurtic return distribution has:",
    ["Fatter tails, so more extreme outcomes", "Thinner tails, so fewer extreme outcomes", "Negative excess kurtosis"],
    "Leptokurtic distributions have excess kurtosis greater than zero: more probability in the tails (and the peak) than a normal distribution.", "r"],
  ["Five annual returns are 5%, −3%, 8%, −6% and 2%. Using a target return of 0%, the target semideviation is closest to:",
    ["3.35%", "4.74%", "3.00%"],
    "Only returns below the target count: (−3)² + (−6)² = 45. Divide by n − 1 = 4 (total sample size less one): 11.25. Square root = 3.35%.", "c"],
  ["Eight fund returns sorted from lowest to highest are −6%, −2%, 1%, 3%, 5%, 6%, 9% and 14%. The median return is closest to:",
    ["4.0%", "3.75%", "3.0%"],
    "With an even number of observations, average the two middle values: (3% + 5%)/2 = 4.0%. The mean is 30/8 = 3.75%.", "c"],
  ["A sorted sample has 20 observations. The position of the 25th percentile is closest to:",
    ["5.25", "5.00", "6.00"],
    "L = (n + 1) × y/100 = 21 × 0.25 = 5.25, i.e. a quarter of the way from the 5th to the 6th observation.", "c"],
  ["Eleven sorted returns are 1.2, 2.5, 3.1, 4.0, 4.4, 5.6, 6.3, 7.0, 7.7, 8.1 and 9.0 (%). The 30th percentile is closest to:",
    ["3.64%", "3.10%", "3.60%"],
    "L = 12 × 0.30 = 3.6: between the 3rd (3.1) and 4th (4.0) values, 60% of the way: 3.1 + 0.6 × 0.9 = 3.64%.", "c"],
  ["The interquartile range measures the:",
    ["Spread of the middle 50% of the data", "Difference between the maximum and minimum", "Average distance from the median"],
    "IQR = Q3 − Q1, the range covered by the middle half of the observations; it isn't affected by extreme values.", "r"],
  ["Returns of 10%, −5%, 8% and 3% have a sample standard deviation closest to:",
    ["6.68%", "5.79%", "44.67%"],
    "Mean = 4%. Squared deviations: 36 + 81 + 16 + 1 = 134. Sample variance = 134/3 = 44.67; s = 6.68%. Dividing by n = 4 gives the population figure, 5.79%.", "c"],
  ["The sample variance divides the sum of squared deviations by n − 1 rather than n mainly because:",
    ["It gives an unbiased estimate of population variance", "Sample data always contain one outlier to exclude", "It converts the variance into percentage units"],
    "Deviations from the sample mean are slightly smaller than from the true mean; dividing by the degrees of freedom (n − 1) corrects the bias.", "r"],
  ["Returns of 12%, −4%, 7%, 3%, 15% and −1% have a mean absolute deviation closest to:",
    ["6.0%", "5.3%", "7.4%"],
    "Mean = 5.33%. Absolute deviations: 6.67, 9.33, 1.67, 2.33, 9.67, 6.33; sum = 36; MAD = 36/6 = 6.0%. (7.4% is the sample standard deviation.)", "c"],
  ["Annual returns are 6%, −2%, 4%, −8% and 10%. Using a target of 0%, the target downside deviation is closest to:",
    ["4.12%", "5.83%", "7.07%"],
    "Below-target returns: −2 and −8. Sum of squares = 4 + 64 = 68; divide by n − 1 = 4 → 17; √17 = 4.12%. Dividing by the 2 below-target observations gives √34 = 5.83%; 7.07% is the ordinary sample standard deviation.", "c"],
  ["Fund A has a mean return of 10% and a standard deviation of 15%; Fund B has a mean of 5% and a standard deviation of 9%. Based on the coefficient of variation:",
    ["Fund A has less risk per unit of return", "Fund B has less risk per unit of return", "Both funds have the same relative risk"],
    "CV(A) = 15/10 = 1.5; CV(B) = 9/5 = 1.8. Lower CV = less risk per unit of mean return.", "c"],
  ["A return distribution with a long left tail most likely has:",
    ["A mean below its median", "A mean above its median", "Excess kurtosis below zero"],
    "Negative (left) skew: occasional large losses pull the mean below the median (mean < median < mode).", "r"],
  ["A return distribution has a kurtosis of 4.2. Compared with a normal distribution, it has:",
    ["Fatter tails (it's leptokurtic)", "Thinner tails (it's platykurtic)", "The same tail thickness"],
    "Excess kurtosis = 4.2 − 3 = 1.2 > 0, so the distribution is leptokurtic: extreme outcomes are more likely than under a normal distribution.", "c"],
  ["A risk manager assumes returns are normal, but actual returns are leptokurtic. Her model most likely:",
    ["Understates the probability of extreme losses", "Overstates the probability of extreme losses", "Correctly measures tail risk, since the mean is unchanged"],
    "Fat tails mean large moves happen more often than the normal distribution predicts, so a normal-based model understates tail risk.", "s"],
  ["Two assets have standard deviations of 15% and 20% and a covariance of 0.0045. Their correlation is closest to:",
    ["0.15", "0.03", "0.45"],
    "r = cov/(σ₁σ₂) = 0.0045/(0.15 × 0.20) = 0.0045/0.03 = 0.15.", "c"],
  ["Two variables have a correlation of zero. It is most accurate to conclude that:",
    ["They have no linear relationship", "They are completely unrelated", "One causes changes in the other"],
    "Correlation captures only linear association; the variables could still be related non-linearly.", "r"],
  ["Ice cream sales and sunburn cases are highly correlated because both rise in hot weather. This is an example of:",
    ["Spurious correlation driven by a third variable", "A causal relationship between the two series", "Negative correlation caused by outliers"],
    "The correlation arises because a third variable (temperature) drives both, not because one causes the other.", "s"],
  ["Which measure of central tendency is least affected by a few extreme returns?",
    ["The median", "The arithmetic mean", "The sample mean of squared returns"],
    "The median depends only on the middle value(s) of the sorted data, so outliers don't move it.", "r"],
];

window.GLOSSARY.push(
  ["Coefficient of variation","Standard deviation ÷ mean: risk per unit of return. Lower is better.","l1stats"],
  ["Target semideviation","√[Σ(Xi − B)² for Xi ≤ B ÷ (n − 1)]. Measures downside risk below a target return B.","l1stats"],
  ["Percentile position", "L_y = (n + 1) × y/100 in sorted data; interpolate if not a whole number.", "l1stats"],
  ["Interquartile range", "Q3 − Q1: spread of the middle 50%.", "l1stats"],
  ["Sample variance", "Σ(X − X̄)²/(n − 1); unbiased estimator of the population variance.", "l1stats"],
  ["Mean absolute deviation", "Σ|X − X̄|/n.", "l1stats"],
  ["Skewness and mean/median", "Positive skew: mean > median > mode. Negative skew: mean < median < mode.", "l1stats"],
  ["Excess kurtosis", "Kurtosis − 3. > 0 leptokurtic (fat tails); < 0 platykurtic.", "l1stats"],
  ["Correlation", "Cov/(s_X s_Y), from −1 to +1; measures linear association only.", "l1stats"],
  ["Spurious correlation", "Correlation from chance, a third variable or mixing variables; not causation.", "l1stats"]
);
