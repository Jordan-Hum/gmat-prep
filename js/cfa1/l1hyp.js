// CFA Level I · Quantitative Methods · Learning modules 8–9: Hypothesis Testing; Parametric and Non-Parametric Tests of Independence.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1hyp = `
<p class="syl">CFA Level I · Quantitative Methods · Learning modules 8 and 9 of 11 · Hypothesis Testing · Parametric and Non-Parametric Tests of Independence</p>
<p>Hypothesis testing asks whether the evidence in a sample is strong enough to reject a claim about a population: "Is this fund's alpha really different from zero?", "Are these two return series correlated?", "Is ESG rating independent of industry?" This lesson gives the general six-step process, the errors you can make, p-values, and the specific tests the exam uses (with which statistic and degrees of freedom), then tests of correlation and independence. Expect several questions; most are about <b>choosing the right test</b> and <b>reaching the right conclusion</b>.</p>

<h3>1. The hypothesis testing process <span class="hot">Highly tested</span></h3>
<ol>
  <li><b>State the hypotheses.</b> The <b>null hypothesis H₀</b> is the claim being tested (it always contains the equality: =, ≤ or ≥). The <b>alternative H_a</b> is what you conclude if you reject H₀; it's usually what the researcher hopes to show.</li>
  <li><b>Identify the test statistic</b> and its distribution (z, t, χ², F).</li>
  <li><b>Specify the significance level α</b> (e.g. 5%).</li>
  <li><b>State the decision rule</b>: the critical value(s) that define the rejection region.</li>
  <li><b>Collect data and calculate</b> the test statistic.</li>
  <li><b>Make the decision</b>: reject H₀ or fail to reject H₀ (never "accept" H₀), then draw the economic conclusion.</li>
</ol>
<h4>One-tailed vs two-tailed tests</h4>
<table>
  <tr><th>Hypotheses</th><th>Type</th><th>Reject H₀ if (5% level, large sample)</th></tr>
  <tr><td>H₀: μ = μ₀ vs H_a: μ ≠ μ₀</td><td>Two-tailed</td><td>|test statistic| &gt; 1.96 (2.5% in each tail)</td></tr>
  <tr><td>H₀: μ ≤ μ₀ vs H_a: μ &gt; μ₀</td><td>One-tailed (upper)</td><td>test statistic &gt; 1.645</td></tr>
  <tr><td>H₀: μ ≥ μ₀ vs H_a: μ &lt; μ₀</td><td>One-tailed (lower)</td><td>test statistic &lt; −1.645</td></tr>
</table>
<div class="formula">General test statistic = (sample statistic − hypothesized value) / standard error of the statistic</div>

<h3>2. Errors, power and p-values <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Decision</th><th>H₀ true</th><th>H₀ false</th></tr>
  <tr><td>Fail to reject H₀</td><td>Correct</td><td><b>Type II error</b> (probability β)</td></tr>
  <tr><td>Reject H₀</td><td><b>Type I error</b> (probability α = significance level)</td><td>Correct (probability = <b>power</b> = 1 − β)</td></tr>
</table>
<ul>
  <li>Type I = rejecting a true null ("false positive"). Type II = failing to reject a false null ("false negative").</li>
  <li>For a given sample size, lowering α (fewer Type I errors) raises β (more Type II errors). The only way to reduce both is a <b>larger sample</b>.</li>
  <li>The <b>p-value</b> is the smallest significance level at which H₀ can be rejected (the probability, if H₀ is true, of a test statistic at least as extreme as the one observed). <b>Reject H₀ if p-value &lt; α.</b></li>
  <li><b>Statistical vs economic significance</b>: a result can be statistically significant but too small to be profitable after transaction costs, taxes and risk.</li>
</ul>
<div class="ex"><b>Example:</b> A test of whether a fund's mean alpha differs from zero gives p = 0.03. Reject H₀ at 5% (0.03 &lt; 0.05) but not at 1%.</div>
<h4>Multiple testing and the false discovery rate</h4>
<p>Running many tests inflates false positives: with 20 independent tests at α = 5% on true nulls, you expect one "significant" result by chance. The <b>Benjamini–Hochberg</b> approach controls the <b>false discovery rate</b>: rank the m p-values from smallest to largest; the k-th is significant if p₍ₖ₎ ≤ (k/m) × α (using the largest k that satisfies this).</p>
<div class="ex"><b>Example:</b> 10 strategies, α = 5%, sorted p-values 0.001, 0.008, 0.039, 0.041, 0.042, … Thresholds (k/10)(0.05): 0.005, 0.010, 0.015, 0.020, 0.025, … Only the first two pass, though five have p &lt; 0.05.</div>

<h3>3. Choosing the right test <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Hypothesis about</th><th>Test statistic</th><th>Degrees of freedom</th></tr>
  <tr><td><b>A single mean</b> (σ unknown)</td><td>t = (X̄ − μ₀)/(s/√n)</td><td>n − 1</td></tr>
  <tr><td>A single mean (σ known, or large n)</td><td>z = (X̄ − μ₀)/(σ/√n)</td><td>—</td></tr>
  <tr><td><b>Difference between two means</b>, independent samples, equal variances assumed</td><td>t = (X̄₁ − X̄₂)/√(s²ₚ/n₁ + s²ₚ/n₂), pooled s²ₚ = [(n₁ − 1)s₁² + (n₂ − 1)s₂²]/(n₁ + n₂ − 2)</td><td>n₁ + n₂ − 2</td></tr>
  <tr><td><b>Mean of differences</b>, paired (dependent) samples, e.g. two funds over the same months</td><td>t = d̄/(s_d/√n)</td><td>n − 1</td></tr>
  <tr><td><b>A single variance</b></td><td>χ² = (n − 1)s²/σ₀²</td><td>n − 1</td></tr>
  <tr><td><b>Equality of two variances</b></td><td>F = s₁²/s₂² (put the larger variance on top)</td><td>n₁ − 1, n₂ − 1</td></tr>
</table>
<ul>
  <li>All these parametric tests assume (approximately) normally distributed populations or large samples.</li>
  <li>The χ² and F distributions are <b>bounded below by zero</b> and right-skewed, so they're asymmetric (two-tailed χ² tests need separate lower and upper critical values).</li>
  <li><b>Paired vs independent</b>: if the two samples are related (same time periods, same companies before and after), use the paired-comparisons test; if not, use the difference-in-means test.</li>
</ul>
<div class="ex"><b>Example 1 (single mean, one-tailed):</b> Is a fund's mean monthly return above 0.5%? n = 36, X̄ = 0.9%, s = 3%. H₀: μ ≤ 0.5%; H_a: μ &gt; 0.5%. t = (0.9 − 0.5)/(3/6) = 0.80. Critical t(35, 5% one-tailed) = 1.69. 0.80 &lt; 1.69 → fail to reject H₀: no evidence the mean exceeds 0.5%.</div>
<div class="ex"><b>Example 2 (two-tailed):</b> n = 64, X̄ = 1.2%, s = 4%, H₀: μ = 0. t = 1.2/(4/8) = 2.40. Critical values ±2.00 (5%) and ±2.66 (1%). Reject at 5%, not at 1% (p ≈ 0.019).</div>
<div class="ex"><b>Example 3 (paired):</b> Two strategies over the same 25 months: mean difference 0.6%, standard deviation of differences 1.8%. t = 0.6/(1.8/5) = 1.67 &lt; 2.064 (t₂₄, 5% two-tailed) → fail to reject equal means.</div>
<div class="ex"><b>Example 4 (variance):</b> Has a fund's volatility changed from σ = 20%? n = 30, s = 25%. χ² = 29 × 0.0625/0.04 = 45.31. Two-tailed 5% critical values (29 df): 16.05 and 45.72 → fail to reject (just). If H_a were σ² &gt; 0.04 (one-tailed, critical 42.56), you would reject.</div>
<div class="ex"><b>Example 5 (two variances):</b> s₁ = 18% (n = 31), s₂ = 12% (n = 41). F = 0.0324/0.0144 = 2.25 with (30, 40) df; 5% two-tailed critical value ≈ 1.94 → reject equal variances.</div>

<h3>4. Tests of correlation <span class="hot">Highly tested</span></h3>
<h4>Parametric: Pearson correlation</h4>
<div class="formula">H₀: ρ = 0 · t = r√(n − 2) / √(1 − r²), with n − 2 degrees of freedom</div>
<div class="ex"><b>Example:</b> r = 0.35 over n = 32 months: t = 0.35 × √30 / √(1 − 0.1225) = 2.05 &gt; 2.04 (t₃₀, 5% two-tailed) → reject H₀: the correlation is significant (barely). With r = 0.20 and n = 50, t = 1.41 → not significant.</div>
<p>The t-statistic grows with the sample size, so even a small correlation becomes significant with enough data.</p>
<h4>Non-parametric: Spearman rank correlation</h4>
<p>Rank each variable, then compute r_S = 1 − 6Σdᵢ²/[n(n² − 1)], where dᵢ is the difference in ranks. Test it like Pearson's for n &gt; 30. Use it when the data aren't normal, contain <b>outliers</b>, or are ranks.</p>
<h4>When to use non-parametric tests</h4>
<ul>
  <li>The data don't meet the distribution assumptions (e.g. not normal and small samples).</li>
  <li>There are significant outliers.</li>
  <li>The data are ranks or ordinal (e.g. analyst ratings).</li>
  <li>The hypothesis isn't about a parameter (e.g. independence, randomness).</li>
</ul>

<h3>5. Test of independence with a contingency table <span class="hot">Highly tested</span></h3>
<p>To test whether two categorical variables are independent (e.g. ESG rating and industry), arrange counts in an r × c contingency table and compare observed counts with the counts expected under independence.</p>
<div class="formula">Expected count Eᵢⱼ = (row i total × column j total) / grand total · χ² = Σ (Oᵢⱼ − Eᵢⱼ)² / Eᵢⱼ · df = (r − 1)(c − 1)</div>
<div class="ex"><b>Example:</b> 130 companies by ESG rating and sector:
<table>
  <tr><th></th><th>Tech</th><th>Financials</th><th>Energy</th><th>Total</th></tr>
  <tr><td>High ESG</td><td>30</td><td>20</td><td>10</td><td>60</td></tr>
  <tr><td>Low ESG</td><td>20</td><td>20</td><td>30</td><td>70</td></tr>
  <tr><td>Total</td><td>50</td><td>40</td><td>40</td><td>130</td></tr>
</table>
Expected (High, Tech) = 60 × 50/130 = 23.08, and so on. χ² = 11.30 with (2 − 1)(3 − 1) = 2 df; 5% critical value = 5.99 → reject independence: ESG rating is related to sector.</div>
<p>This is a one-tailed (upper tail) test: large χ² means observed counts are far from what independence predicts.</p>

<div class="how"><b>How it's tested:</b> stating H₀ and H_a, identifying Type I vs Type II errors, interpreting p-values and power, choosing the test and degrees of freedom from a description, computing t, χ², F or correlation t-statistics and comparing them with critical values, expected counts and df in contingency tables, and when non-parametric methods apply.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Follow the six steps and set up one- and two-tailed hypotheses correctly.</li>
  <li>Define Type I and II errors, significance level, power and p-value, and explain the multiple-testing problem.</li>
  <li>Choose and compute the test for a mean, difference in means, paired differences, a variance and two variances.</li>
  <li>Test a correlation (Pearson t with n − 2 df; Spearman for ranks or outliers).</li>
  <li>Run a χ² test of independence with expected counts and (r − 1)(c − 1) df.</li>
</ul></div>
`;

window.QB_HARD.l1hyp = [
  ["A Type I error occurs when an analyst:",
    ["Rejects a null hypothesis that is actually true", "Fails to reject a null hypothesis that is false", "Uses a test statistic with the wrong degrees of freedom"],
    "Type I = false rejection (probability = significance level α). Type II = failing to reject a false null (β). Power = 1 − β.", "r"],
  ["A test of whether a fund's mean monthly alpha differs from zero produces a p-value of 0.03. At the 5% significance level, the analyst should:",
    ["Reject the null hypothesis that alpha is zero", "Fail to reject the null hypothesis that alpha is zero", "Reject the null only at the 1% significance level"],
    "Reject H0 when the p-value is less than α: 0.03 < 0.05. It would not be rejected at 1%, since 0.03 > 0.01.", "r"],
  ["To test whether the variances of two independent, normally distributed populations are equal, the appropriate test statistic follows:",
    ["An F-distribution", "A chi-square distribution", "A t-distribution"],
    "F = s1²/s2² (larger variance on top), with n1 − 1 and n2 − 1 degrees of freedom. A chi-square test is for a single variance.", "r"],
  ["Two strategies' monthly returns are measured over the same 36 months and are correlated with each other. To test whether their mean returns differ, the most appropriate test is:",
    ["A paired comparisons t-test on the monthly differences", "A two-sample t-test assuming independent samples", "A chi-square test of the variance of the differences"],
    "Dependent (paired) samples call for a t-test on the mean of the differences: t = d̄ ÷ (sd/√n), df = n − 1.", "r"],
  ["The sample correlation between two return series over 50 months is 0.30. The t-statistic for testing whether the population correlation is zero is closest to:",
    ["2.18", "2.08", "1.53"],
    "t = r√(n − 2) ÷ √(1 − r²) = 0.30 × √48 ÷ √0.91 = 2.078 ÷ 0.954 = 2.18. With df 48 this exceeds the 5% critical value of about 2.01.", "c"],
  ["An analyst tests whether a company's industry and its ESG rating category are independent using a contingency table with 3 industries (rows) and 4 rating categories (columns). The degrees of freedom of the chi-square statistic are:",
    ["6", "12", "7"],
    "df = (rows − 1)(columns − 1) = (3 − 1)(4 − 1) = 6.", "c"],
  ["Which correlation measure is most appropriate when the data contain significant outliers and are not normally distributed?",
    ["Spearman rank correlation", "Pearson correlation", "The coefficient of determination"],
    "Spearman's rank correlation is non-parametric: it uses ranks, so it's robust to outliers and doesn't require normality.", "r"],
  ["An analyst wants to show that a fund's mean return exceeds 6%. The appropriate hypotheses are:",
    ["H₀: μ ≤ 6% vs Hₐ: μ > 6%", "H₀: μ > 6% vs Hₐ: μ ≤ 6%", "H₀: μ = 6% vs Hₐ: μ ≠ 6%"],
    "What the researcher wants to show goes in the alternative; the null contains the equality (≤).", "r"],
  ["Failing to reject a false null hypothesis is a:",
    ["Type II error", "Type I error", "Correct decision with probability equal to the power"],
    "Type II = false negative (probability β). Type I = rejecting a true null. Power = 1 − β is the probability of correctly rejecting a false null.", "r"],
  ["Holding the sample size constant, reducing the significance level from 5% to 1% will most likely:",
    ["Increase the probability of a Type II error", "Decrease the probability of a Type II error", "Increase the power of the test"],
    "A smaller α makes rejection harder, so false nulls are rejected less often: β rises and power falls. Only a bigger sample reduces both errors.", "r"],
  ["The power of a test is the probability of:",
    ["Correctly rejecting a false null hypothesis", "Rejecting a true null hypothesis", "Failing to reject a true null hypothesis"],
    "Power = 1 − P(Type II error).", "r"],
  ["A fund's mean monthly return over 36 months is 0.9% with a standard deviation of 3%. Testing H₀: μ ≤ 0.5% against Hₐ: μ > 0.5% at 5% (critical t = 1.69), the analyst should:",
    ["Fail to reject H₀, since t = 0.80", "Reject H₀, since t = 1.80", "Reject H₀, since the sample mean exceeds 0.5%"],
    "t = (0.9 − 0.5)/(3/√36) = 0.4/0.5 = 0.80 < 1.69. A sample mean above 0.5% isn't enough; it must be significantly above.", "c"],
  ["A test of H₀: μ = 0 using 64 monthly returns gives a sample mean of 1.2% and standard deviation of 4%. With critical values of ±2.00 at 5% and ±2.66 at 1%, the analyst should reject H₀:",
    ["At 5% but not at 1%", "At both 5% and 1%", "At neither level"],
    "t = 1.2/(4/8) = 2.40, beyond ±2.00 but inside ±2.66.", "c"],
  ["An analyst compares the mean monthly returns of two strategies measured over the same 60 months. The most appropriate test is a:",
    ["Paired comparisons t-test", "Difference-in-means t-test with pooled variance", "Chi-square test"],
    "Returns over the same months are dependent samples, so test the mean of the differences (paired comparisons).", "r"],
  ["Two independent samples of 30 funds each have mean returns of 1.1% and 0.6% and standard deviations of 4% and 3%. Assuming equal population variances, the t-statistic for the difference in means is closest to:",
    ["0.55", "1.37", "0.50"],
    "Pooled variance = (29 × 16 + 29 × 9)/58 = 12.5. Standard error = √(12.5/30 + 12.5/30) = 0.913. t = 0.5/0.913 = 0.55.", "c"],
  ["To test whether a fund's return variance equals 0.04, using a sample of 30 monthly returns, the appropriate test statistic follows a:",
    ["Chi-square distribution with 29 degrees of freedom", "t-distribution with 29 degrees of freedom", "F-distribution with 29 and 30 degrees of freedom"],
    "A test of a single variance uses χ² = (n − 1)s²/σ₀² with n − 1 df.", "r"],
  ["A sample of 30 returns has a standard deviation of 25%. The chi-square statistic for H₀: σ = 20% is closest to:",
    ["45.3", "36.3", "1.6"],
    "χ² = (n − 1)s²/σ₀² = 29 × 0.0625/0.04 = 45.31.", "c"],
  ["Fund A's sample standard deviation is 18% (31 observations) and Fund B's is 12% (41 observations). The F-statistic for testing equal variances is closest to:",
    ["2.25", "1.50", "0.44"],
    "F = larger variance/smaller variance = 0.0324/0.0144 = 2.25, with (30, 40) df. 1.50 is the ratio of standard deviations.", "c"],
  ["The chi-square and F distributions are:",
    ["Right-skewed and never negative", "Symmetric around zero", "Bounded below by zero but symmetric"],
    "Both are based on squared quantities, so they can't be negative and are skewed to the right.", "r"],
  ["The sample correlation between two return series over 50 months is 0.20. At 5% (critical t ≈ 2.01), the correlation is:",
    ["Not significant, since t ≈ 1.41", "Significant, since t ≈ 2.83", "Significant, since r > 0"],
    "t = 0.20 × √48/√(1 − 0.04) = 1.386/0.980 = 1.41 < 2.01.", "c"],
  ["An analyst wants to test whether two variables are related, but both contain several extreme outliers. The most appropriate measure is the:",
    ["Spearman rank correlation", "Pearson correlation", "F-test of equal variances"],
    "Rank-based (non-parametric) Spearman correlation is robust to outliers and doesn't require normality.", "r"],
  ["A 3 × 4 contingency table is used to test whether credit rating category and industry are independent. The degrees of freedom are:",
    ["6", "12", "11"],
    "df = (r − 1)(c − 1) = 2 × 3 = 6.", "c"],
  ["In a contingency table of 130 companies, a row total is 60 and a column total is 50. The expected count for that cell under independence is closest to:",
    ["23.1", "30.0", "55.0"],
    "Expected = row total × column total / grand total = 60 × 50/130 = 23.1.", "c"],
  ["An analyst tests 20 trading rules, none of which truly works, each at a 5% significance level. The expected number of rules that appear significant is closest to:",
    ["1", "0", "5"],
    "Each test has a 5% chance of a Type I error: 20 × 0.05 = 1 false positive expected. This is the multiple-testing problem.", "c"],
  ["A result that is statistically significant may still lack economic significance because:",
    ["Transaction costs and taxes may eliminate the profit", "Significance tests ignore sample size", "Statistical significance requires a p-value above α"],
    "A small but significant effect may not be exploitable after costs, taxes and risk.", "r"],
];

window.GLOSSARY.push(
  ["Type I vs Type II error","Type I: reject a true null (probability α). Type II: fail to reject a false null (β). Power = 1 − β.","l1hyp"],
  ["t-test of a correlation","t = r√(n − 2) ÷ √(1 − r²), with n − 2 degrees of freedom.","l1hyp"],
  ["Chi-square test of independence","Contingency table: expected = row total × column total ÷ grand total; df = (rows − 1)(columns − 1).","l1hyp"],
  ["Null vs alternative hypothesis", "H₀ holds the equality (=, ≤, ≥); Hₐ is what you conclude if H₀ is rejected.", "l1hyp"],
  ["Power of a test", "1 − β: probability of correctly rejecting a false null.", "l1hyp"],
  ["p-value", "Smallest α at which H₀ is rejected; reject if p < α.", "l1hyp"],
  ["Paired comparisons test", "t = d̄/(s_d/√n), n − 1 df; for dependent samples.", "l1hyp"],
  ["Test of a single variance", "χ² = (n − 1)s²/σ₀², n − 1 df.", "l1hyp"],
  ["F-test of two variances", "F = s₁²/s₂² (larger on top), df (n₁ − 1, n₂ − 1).", "l1hyp"],
  ["Spearman rank correlation", "1 − 6Σd²/[n(n² − 1)]; non-parametric, robust to outliers.", "l1hyp"],
  ["False discovery rate (Benjamini–Hochberg)", "k-th smallest p-value significant if ≤ (k/m)α.", "l1hyp"]
);
