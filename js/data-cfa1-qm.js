// CFA Level I · Quantitative Methods: study notes, practice questions and flashcards.
// Questions: [question, [correct, wrong, wrong], explanation, kind]. Options are shuffled on screen.
window.NOTES = window.NOTES || {};
window.QB_HARD = window.QB_HARD || {};
window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1qm = `
<p class="syl">CFA Level I · Quantitative Methods · 6–9% of the exam · Learning modules: Rates and Returns · Time Value of Money in Finance · Statistical Measures of Asset Returns · Probability Trees and Conditional Expectations · Portfolio Mathematics · Simulation Methods · Estimation and Inference · Hypothesis Testing · Parametric and Non-Parametric Tests of Independence · Simple Linear Regression · Introduction to Big Data Techniques</p>

<h3>1. Rates and returns</h3>
<h4>What an interest rate is made of</h4>
<p>An interest rate can be read three ways: a <b>required rate of return</b>, a <b>discount rate</b>, or an <b>opportunity cost</b>. It's built up from:</p>
<div class="formula">r = Real risk-free rate + Inflation premium + Default risk premium + Liquidity premium + Maturity premium</div>
<p>The nominal risk-free rate (e.g. a T-bill) is approximately real risk-free + inflation premium. Default, liquidity and maturity premiums compensate for credit risk, the cost of selling quickly, and the greater price sensitivity of long-term debt.</p>

<h4>Return measures</h4>
<table>
  <tr><th>Measure</th><th>Formula</th><th>Use</th></tr>
  <tr><td>Holding period return</td><td>(P1 − P0 + D1) ÷ P0</td><td>Return over any single period</td></tr>
  <tr><td>Arithmetic mean</td><td>ΣRi ÷ n</td><td>Best estimate of a <b>single-period</b> expected return</td></tr>
  <tr><td>Geometric mean</td><td>[(1+R1)(1+R2)…(1+Rn)]^(1/n) − 1</td><td>Compound growth rate over <b>multiple periods</b>; always ≤ arithmetic mean (gap grows with volatility)</td></tr>
  <tr><td>Harmonic mean</td><td>n ÷ Σ(1/Xi)</td><td>Average cost per share with <b>cost averaging</b> (equal amounts invested periodically). Harmonic ≤ geometric ≤ arithmetic</td></tr>
  <tr><td>Trimmed / winsorized mean</td><td>Drop / replace extreme values</td><td>Reduce the effect of outliers</td></tr>
</table>
<div class="ex"><b>Example:</b> Returns of +20%, −10% and +15%. Arithmetic mean = 8.33%. Geometric mean = (1.20 × 0.90 × 1.15)^(1/3) − 1 = 1.242^(1/3) − 1 = 7.49%.</div>

<h4>Money-weighted vs time-weighted returns</h4>
<p>The <b>money-weighted return (MWR)</b> is the <b>IRR</b> of all cash flows: initial value, deposits, withdrawals and ending value. It's affected by the <b>size and timing of client cash flows</b>: deposits before good performance raise it. The <b>time-weighted return (TWR)</b> links the returns of sub-periods between cash flows geometrically, removing the effect of flows the manager doesn't control. TWR is the standard for evaluating managers (and required by GIPS); MWR reflects the investor's own experience.</p>
<div class="formula">TWR = [(1 + HPR1)(1 + HPR2)…(1 + HPRn)]^(1/years) − 1</div>

<h4>Annualizing and compounding</h4>
<div class="formula">Annualized return = (1 + R_period)^(periods per year) − 1 · e.g. weekly 0.2% → 1.002^52 − 1 = 10.95%</div>
<div class="formula">Continuously compounded return = ln(P1 ÷ P0) = ln(1 + HPR). Continuously compounded returns are <b>additive</b> across periods</div>
<h4>Other return types</h4>
<ul>
  <li><b>Gross vs net</b>: gross is before management fees (but after trading costs); net is after fees.</li>
  <li><b>Real return</b>: (1 + nominal) = (1 + real)(1 + inflation). Approximation: real ≈ nominal − inflation.</li>
  <li><b>After-tax</b> returns; <b>excess return</b> = return − benchmark (or risk-free).</li>
  <li><b>Leveraged return</b> (portfolio partly financed by borrowing at rD):</li>
</ul>
<div class="formula">R_L = R + (V_B ÷ V_E)(R − r_D) · e.g. R = 8%, rD = 4%, debt/equity = 40/60 → 8% + 0.667 × 4% = 10.67%</div>

<h3>2. Time value of money</h3>
<div class="formula">FV = PV(1 + r)^N · PV = FV ÷ (1 + r)^N · EAR = (1 + r/m)^m − 1 · Continuous: EAR = e^r − 1</div>
<ul>
  <li><b>Ordinary annuity</b>: payments at the end of each period. <b>Annuity due</b>: payments at the start, so its value is higher by a factor of (1 + r).</li>
  <li><b>Perpetuity</b>: PV = A ÷ r. <b>Growing perpetuity</b> (first payment one period from now): PV = A1 ÷ (r − g), with r > g. This is the Gordon growth model for stocks.</li>
  <li><b>Cash flow additivity</b>: present values of separate cash flows can be added. This is the basis of no-arbitrage pricing, e.g. a bond = a portfolio of zero-coupon bonds; implied forward rates: (1 + z2)² = (1 + z1)(1 + f1,1).</li>
  <li><b>Implied returns</b>: solve for r given price and cash flows (a bond's YTM; a stock's implied return r = D1/P0 + g).</li>
</ul>
<div class="ex"><b>Example:</b> A stock will pay $2.10 next year, growing 4% a year forever. Required return 9%. Value = 2.10 ÷ (0.09 − 0.04) = $42.00.</div>

<h3>3. Statistical measures of asset returns</h3>
<ul>
  <li><b>Central tendency</b>: mean, median (middle value; robust to outliers), mode. <b>Quantiles</b>: quartiles, quintiles, deciles, percentiles; interquartile range = Q3 − Q1. Box-and-whisker plots.</li>
  <li><b>Dispersion</b>: range; mean absolute deviation; <b>sample variance</b> s² = Σ(Xi − X̄)² ÷ (n − 1); sample standard deviation s.</li>
  <li><b>Target downside deviation (semideviation)</b>: risk of falling below a target B, using only observations below B but dividing by the total n − 1.</li>
</ul>
<div class="formula">Target semideviation = √[ Σ(Xi − B)² for all Xi ≤ B ÷ (n − 1) ]</div>
<div class="formula">Coefficient of variation (CV) = s ÷ X̄ (risk per unit of return; lower is better)</div>
<h4>Shape of the distribution</h4>
<table>
  <tr><th></th><th>Positive (right) skew</th><th>Negative (left) skew</th></tr>
  <tr><td>Tail</td><td>Long right tail: occasional large gains</td><td>Long left tail: occasional large losses</td></tr>
  <tr><td>Order</td><td>Mode &lt; median &lt; mean</td><td>Mean &lt; median &lt; mode</td></tr>
</table>
<p><b>Kurtosis</b> measures tail weight. A normal distribution has kurtosis 3 (<b>excess kurtosis</b> 0). <b>Leptokurtic</b> (excess &gt; 0) = fat tails, more extreme outcomes, typical of asset returns; platykurtic (excess &lt; 0) = thin tails. Investors generally prefer positive skew and dislike fat tails.</p>
<p><b>Correlation</b> = Cov(X,Y) ÷ (sX sY), between −1 and +1; it measures only <b>linear</b> association, is sensitive to outliers, and can be <b>spurious</b> (chance, mixing variables, or a third common variable).</p>

<h3>4. Probability trees and conditional expectations</h3>
<ul>
  <li><b>Expected value</b>: E(X) = Σ P(Si) × Xi. <b>Variance</b>: σ² = Σ P(Si)[Xi − E(X)]².</li>
  <li><b>Total probability rule</b>: P(A) = Σ P(A | Si) P(Si). Conditional expected values (e.g. EPS given expansion) combine into the unconditional expectation.</li>
  <li><b>Bayes' formula</b> updates a prior probability with new information:</li>
</ul>
<div class="formula">P(Event | Info) = P(Info | Event) × P(Event) ÷ P(Info)</div>
<div class="ex"><b>Example:</b> P(beat earnings) = 40%. P(dividend increase | beat) = 70%; P(dividend increase | miss) = 20%. P(increase) = 0.4 × 0.7 + 0.6 × 0.2 = 0.40. P(beat | increase) = 0.28 ÷ 0.40 = 70%.</div>

<h3>5. Portfolio mathematics</h3>
<div class="formula">E(Rp) = Σ wi E(Ri) · Cov(Ri,Rj) = ρij σi σj</div>
<div class="formula">Two assets: σp² = w1²σ1² + w2²σ2² + 2 w1 w2 ρ12 σ1 σ2</div>
<p>As long as ρ &lt; 1, portfolio standard deviation is <b>less than the weighted average</b> of the standard deviations: that's diversification. With joint probabilities, covariance = Σ P(Si)[RA,i − E(RA)][RB,i − E(RB)].</p>
<div class="ex"><b>Example:</b> 60/40 in assets with σ = 20% and 10%, ρ = 0.25: σp² = 0.36(0.04) + 0.16(0.01) + 2(0.6)(0.4)(0.25)(0.2)(0.1) = 0.0184 → σp = 13.56% (vs 16% weighted average).</div>
<h4>Safety-first</h4>
<div class="formula">Roy's safety-first ratio = [E(Rp) − RL] ÷ σp. Choose the portfolio with the <b>highest</b> ratio to minimize P(Rp &lt; RL)</div>
<p>If returns are normal, shortfall probability = N(−SFRatio). The Sharpe ratio is the special case where RL = risk-free rate.</p>

<h3>6. Simulation methods</h3>
<ul>
  <li><b>Lognormal distribution</b>: if ln(X) is normal, X is lognormal. Bounded below by zero and right-skewed, so it suits <b>asset prices</b>. Continuously compounded returns are normally distributed if prices are lognormal.</li>
  <li><b>Monte Carlo simulation</b>: specify distributions for risk factors, generate thousands of random scenarios, value the asset in each; used for path-dependent options, pension liabilities, VaR. Weakness: only as good as the assumed distributions (garbage in, garbage out).</li>
  <li><b>Historical simulation</b>: draws from actual past changes (assumes the past repeats).</li>
  <li><b>Bootstrapping</b>: resamples <b>with replacement</b> from the observed sample to estimate the sampling distribution of a statistic (e.g. its standard error), without assuming a population distribution.</li>
</ul>

<h3>7. Estimation and inference</h3>
<ul>
  <li><b>Probability sampling</b>: simple random; <b>stratified random</b> (divide into strata, sample each in proportion, as in bond index replication); cluster (sample whole groups; less accurate). <b>Non-probability</b>: convenience, judgmental (expert picks). </li>
  <li><b>Sampling error</b> = sample statistic − population parameter.</li>
  <li><b>Central limit theorem</b>: for samples of n ≥ 30, the distribution of the sample mean is approximately normal with mean μ and variance σ²/n, whatever the population's shape.</li>
  <li><b>Standard error</b> of the sample mean = σ ÷ √n (use s ÷ √n when σ is unknown). Larger samples → smaller standard error.</li>
  <li><b>Resampling</b> to estimate standard errors: <b>bootstrap</b> (random draws with replacement) and <b>jackknife</b> (leave one observation out each time).</li>
</ul>

<h3>8. Hypothesis testing</h3>
<ol>
  <li>State the hypotheses: H0 (contains "=", "≤" or "≥") and Ha. Two-tailed (≠) or one-tailed.</li>
  <li>Identify the test statistic and its distribution; specify the significance level α.</li>
  <li>State the decision rule, collect data, compute the statistic, decide.</li>
</ol>
<table>
  <tr><th></th><th>H0 true</th><th>H0 false</th></tr>
  <tr><td>Reject H0</td><td><b>Type I error</b> (probability α)</td><td>Correct (power = 1 − β)</td></tr>
  <tr><td>Fail to reject</td><td>Correct</td><td><b>Type II error</b> (probability β)</td></tr>
</table>
<p>Lowering α reduces Type I errors but raises Type II errors (for a given sample size). The <b>p-value</b> is the smallest α at which H0 can be rejected: reject if p-value &lt; α.</p>
<table>
  <tr><th>Test of…</th><th>Statistic</th><th>df</th></tr>
  <tr><td>A single mean (σ unknown)</td><td>t = (X̄ − μ0) ÷ (s/√n)</td><td>n − 1</td></tr>
  <tr><td>Difference in means (independent samples)</td><td>t-test, pooled or unequal variances</td><td>—</td></tr>
  <tr><td>Mean of differences (<b>paired</b>, dependent samples)</td><td>t = d̄ ÷ (sd/√n)</td><td>n − 1</td></tr>
  <tr><td>A single variance</td><td>χ² = (n − 1)s² ÷ σ0²</td><td>n − 1</td></tr>
  <tr><td>Equality of two variances</td><td>F = s1² ÷ s2² (larger on top)</td><td>n1 − 1, n2 − 1</td></tr>
</table>
<p>Multiple testing problem: running many tests means some "significant" results occur by chance; adjust (e.g. Benjamini–Hochberg) to control the false discovery rate.</p>

<h3>9. Parametric and non-parametric tests of independence</h3>
<ul>
  <li><b>Pearson correlation</b> (parametric):</li>
</ul>
<div class="formula">t = r √(n − 2) ÷ √(1 − r²), df = n − 2</div>
<ul>
  <li><b>Spearman rank correlation</b> (non-parametric): correlation of ranks; use when data are non-normal, have outliers, or are ordinal.</li>
  <li><b>Contingency table (chi-square test of independence)</b> for categorical data: expected frequency = (row total × column total) ÷ grand total; χ² = Σ (O − E)² ÷ E with df = (rows − 1)(columns − 1).</li>
  <li>Non-parametric tests are used when distributional assumptions fail, data are ranks, or the hypothesis isn't about a parameter.</li>
</ul>
<div class="ex"><b>Example:</b> r = 0.30, n = 50 → t = 0.30 × √48 ÷ √0.91 = 2.18 > 2.01 (5%, two-tailed, df 48), so the correlation is significant.</div>

<h3>10. Simple linear regression</h3>
<div class="formula">Yi = b0 + b1 Xi + εi · b1 = Cov(X,Y) ÷ Var(X) · b0 = Ȳ − b1 X̄</div>
<p><b>Assumptions</b>: (1) linear relationship; (2) <b>homoskedasticity</b> (constant residual variance); (3) independence of observations/residuals; (4) residuals normally distributed.</p>
<table>
  <tr><th>Measure</th><th>Formula</th></tr>
  <tr><td>SST = SSR + SSE</td><td>Total = explained (regression) + unexplained (error) variation</td></tr>
  <tr><td>R²</td><td>SSR ÷ SST (in simple regression = r²)</td></tr>
  <tr><td>MSR, MSE</td><td>SSR ÷ 1 ; SSE ÷ (n − 2)</td></tr>
  <tr><td>Standard error of estimate (SEE)</td><td>√MSE</td></tr>
  <tr><td>F-statistic</td><td>MSR ÷ MSE, df (1, n − 2); in simple regression F = t² of the slope</td></tr>
  <tr><td>t-test of slope</td><td>t = (b̂1 − B1) ÷ s(b̂1), df n − 2</td></tr>
</table>
<ul>
  <li><b>Prediction</b>: Ŷ = b0 + b1Xf; the prediction interval widens the further Xf is from X̄.</li>
  <li><b>Functional forms</b>: log-lin (ln Y = b0 + b1X: b1 = relative change in Y per unit of X), lin-log (Y = b0 + b1 ln X: absolute change in Y per relative change in X), log-log (b1 = <b>elasticity</b>).</li>
</ul>
<div class="ex"><b>Example:</b> SST = 0.050, SSE = 0.020, n = 32 → R² = 0.60; MSE = 0.020/30 = 0.000667; SEE = 2.58%; F = 0.030 ÷ 0.000667 = 45.</div>

<h3>11. Introduction to big data techniques</h3>
<ul>
  <li><b>Big data's 4 Vs</b>: volume, <b>velocity</b> (speed of creation), <b>variety</b> (structured, semi-structured, unstructured: text, images), <b>veracity</b> (reliability of sources). Alternative data: individual-generated (social media), business process (transactions), sensor (satellite, IoT).</li>
  <li><b>Machine learning</b>: <b>supervised</b> (labeled data → regression/classification), <b>unsupervised</b> (no labels → clustering, dimension reduction), <b>deep learning</b> (multi-layer neural networks). <b>Overfitting</b> = learns noise, great in-sample, poor out-of-sample; underfitting = misses the pattern.</li>
  <li><b>Natural language processing</b>: text analysis of filings, news, call transcripts (e.g. sentiment). Applications: risk analysis, algorithmic trading, robo-advice, fraud detection.</li>
</ul>
<div class="how"><b>How it's tested:</b> calculations (geometric mean, EAR, portfolio σ, safety-first, Bayes, regression R²/F) and "which test/measure is appropriate?" questions. Know which mean to use, MWR vs TWR, Type I vs II, and the df for each test.</div>
<div class="key"><b>Carry forward to Level III</b>: TWR vs MWR (performance evaluation), safety-first and shortfall risk (asset allocation for individuals), and lognormal/Monte Carlo ideas (retirement planning, liability-driven investing).</div>
<div class="trap"><b>Trap:</b> the sample variance divides by <b>n − 1</b>; the target semideviation also uses n − 1 (total sample size), even though only observations below target are squared.</div>
`;

window.QB_HARD.l1qm = [
  ["An analyst decomposes the yield on a thinly traded corporate bond. Which component compensates investors for the cost of selling the bond quickly at a fair price?",
    ["Liquidity premium", "Default risk premium", "Maturity premium"],
    "The liquidity premium compensates for the risk of loss relative to fair value if the investment must be converted to cash quickly. Default premium covers credit risk; maturity premium covers greater price sensitivity of long maturities.", "r"],
  ["A fund returned +20%, −10% and +15% in three consecutive years. Its geometric mean annual return is closest to:",
    ["7.49%", "8.33%", "7.88%"],
    "Geometric mean = (1.20 × 0.90 × 1.15)^(1/3) − 1 = 1.242^(1/3) − 1 = 7.49%. 8.33% is the arithmetic mean.", "c"],
  ["An investor puts €1,000 into a fund at the start of each of three months, at unit prices of €10.00, €12.50 and €8.00. The average cost per unit is closest to:",
    ["€9.84", "€10.17", "€10.00"],
    "With equal amounts invested, the average cost is the harmonic mean: 3 ÷ (1/10 + 1/12.5 + 1/8) = 3 ÷ 0.305 = €9.84. €10.17 is the arithmetic mean of the prices.", "c"],
  ["A client makes a large deposit into her account just before a period of strong returns. Compared with the account's time-weighted return, its money-weighted return is most likely:",
    ["Higher", "Lower", "The same"],
    "The money-weighted return (IRR) gives more weight to periods when more money is invested. A large deposit before strong returns raises the MWR above the TWR, which ignores the timing of flows.", "r"],
  ["A stock's price rises from $50 to $56 with no dividends. The continuously compounded return is closest to:",
    ["11.33%", "12.00%", "10.71%"],
    "Continuously compounded return = ln(56/50) = ln(1.12) = 11.33%. The holding period return is 12%.", "c"],
  ["An investment earns a nominal return of 7.0% while inflation is 2.5%. The real return is closest to:",
    ["4.39%", "4.50%", "4.68%"],
    "(1 + nominal) = (1 + real)(1 + inflation), so real = 1.07 ÷ 1.025 − 1 = 4.39%. 4.50% is only the approximation.", "c"],
  ["A portfolio earns 8% and is financed 60% with equity and 40% with debt borrowed at 4%. The return on the equity is closest to:",
    ["10.67%", "13.33%", "9.60%"],
    "Leveraged return = R + (VB/VE)(R − rD) = 8% + (40/60)(8% − 4%) = 8% + 2.67% = 10.67%.", "c"],
  ["A bank quotes a stated annual rate of 8% compounded quarterly. The effective annual rate is closest to:",
    ["8.24%", "8.00%", "8.33%"],
    "EAR = (1 + 0.08/4)^4 − 1 = 1.02^4 − 1 = 8.24%. 8.33% would be continuous compounding (e^0.08 − 1).", "c"],
  ["Compared with an otherwise identical ordinary annuity, the present value of an annuity due is:",
    ["Higher by a factor of (1 + r)", "Lower by a factor of (1 + r)", "The same, since the payments are identical"],
    "Each annuity-due payment arrives one period earlier, so every cash flow is discounted one period less: PV(due) = PV(ordinary) × (1 + r).", "r"],
  ["A stock is expected to pay a dividend of $2.10 next year, growing at 4% a year indefinitely. If the required return is 9%, its value is closest to:",
    ["$42.00", "$43.68", "$23.33"],
    "Growing perpetuity: PV = D1 ÷ (r − g) = 2.10 ÷ (0.09 − 0.04) = $42.00. $43.68 wrongly grows the $2.10 again.", "c"],
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
  ["The probability that a company beats earnings forecasts is 40%. If it beats, the probability of a dividend increase is 70%; if it misses, 20%. Given that a dividend increase is announced, the probability that the company beat earnings is closest to:",
    ["70%", "40%", "28%"],
    "P(increase) = 0.4 × 0.7 + 0.6 × 0.2 = 0.40. Bayes: P(beat | increase) = 0.28 ÷ 0.40 = 70%.", "c"],
  ["An analyst expects EPS of $2.50 in an expansion (probability 60%) and $1.50 in a recession (probability 40%). The variance of EPS is closest to:",
    ["0.24", "0.49", "0.12"],
    "E(EPS) = 0.6(2.50) + 0.4(1.50) = 2.10. Variance = 0.6(0.40)² + 0.4(−0.60)² = 0.096 + 0.144 = 0.24. (0.49 is the standard deviation.)", "c"],
  ["A portfolio is 60% in Asset A (σ = 20%) and 40% in Asset B (σ = 10%), with a correlation of 0.25. The portfolio standard deviation is closest to:",
    ["13.56%", "16.00%", "12.65%"],
    "σp² = 0.36(0.04) + 0.16(0.01) + 2(0.6)(0.4)(0.25)(0.20)(0.10) = 0.0144 + 0.0016 + 0.0024 = 0.0184; σp = 13.56%. 16% is the weighted average (ρ = 1).", "c"],
  ["A client's minimum acceptable return is 3%. Portfolio A: E(R) 8%, σ 10%. Portfolio B: E(R) 11%, σ 15%. Portfolio C: E(R) 6%, σ 5%. Using Roy's safety-first criterion, the client should choose:",
    ["Portfolio C", "Portfolio B", "Portfolio A"],
    "SFRatio = (E(R) − RL)/σ: A = 0.50, B = 0.53, C = 0.60. The highest ratio minimizes the probability of returning less than 3%.", "c"],
  ["The lognormal distribution is often used to model asset prices mainly because it:",
    ["Is bounded below by zero and skewed to the right", "Is symmetric, matching observed price behaviour", "Allows prices to become negative in a crash"],
    "Prices can't fall below zero and have a long right tail. If continuously compounded returns are normal, prices are lognormal.", "r"],
  ["Bootstrap resampling differs from Monte Carlo simulation mainly because bootstrapping:",
    ["Draws repeatedly, with replacement, from the observed sample", "Generates scenarios from an assumed parametric distribution", "Requires the population distribution to be known in advance"],
    "Monte Carlo draws from distributions the analyst specifies; the bootstrap treats the sample as the population and resamples it with replacement.", "r"],
  ["A sample of 64 monthly returns has a standard deviation of 16%. The standard error of the sample mean is closest to:",
    ["2.0%", "0.25%", "4.0%"],
    "Standard error = s ÷ √n = 16% ÷ √64 = 16% ÷ 8 = 2.0%.", "c"],
  ["To build a bond index fund, an analyst divides the index into groups by credit rating and maturity, then randomly selects bonds from each group in proportion to its weight. This is:",
    ["Stratified random sampling", "Cluster sampling", "Simple random sampling"],
    "Stratified sampling divides the population into subgroups (strata) and samples each in proportion, so the sample matches the population's key characteristics.", "r"],
  ["According to the central limit theorem, for a sample of 36 observations from a population with an unknown, non-normal distribution, the sampling distribution of the sample mean is:",
    ["Approximately normal, with variance σ²/36", "Non-normal, with the same shape as the population", "Approximately normal, with variance σ²"],
    "With n ≥ 30, the sample mean is approximately normal with mean μ and variance σ²/n, whatever the population's shape.", "r"],
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
  ["In a simple regression, Cov(X,Y) = 0.0024, Var(X) = 0.0016, mean of Y = 0.10 and mean of X = 0.04. The estimated intercept is closest to:",
    ["0.04", "0.06", "1.50"],
    "Slope b1 = 0.0024 ÷ 0.0016 = 1.5. Intercept b0 = Ȳ − b1X̄ = 0.10 − 1.5(0.04) = 0.04.", "c"],
  ["A simple regression with 32 observations has a total sum of squares of 0.050 and a sum of squared errors of 0.020. The F-statistic is closest to:",
    ["45.0", "1.5", "30.0"],
    "SSR = 0.050 − 0.020 = 0.030. MSR = 0.030/1; MSE = 0.020/(32 − 2) = 0.000667. F = 0.030 ÷ 0.000667 = 45.0. (R² = 0.60.)", "c"],
  ["In the regression ln(Y) = b0 + b1X, the slope coefficient b1 is best interpreted as the:",
    ["Relative change in Y for a one-unit change in X", "Absolute change in Y for a one-unit change in X", "Absolute change in Y for a 1% change in X"],
    "In a log-lin model, a one-unit change in X changes ln(Y) by b1, i.e. Y changes by approximately b1 × 100 percent.", "r"],
  ["Which of the following is an assumption of the simple linear regression model?",
    ["The variance of the residuals is constant across observations", "The independent variable is normally distributed", "The residuals are correlated with the independent variable"],
    "Assumptions: linearity, homoskedasticity (constant residual variance), independence of observations, and normally distributed residuals. Normality applies to the residuals, not to X.", "r"],
  ["Which characteristic of big data refers to the reliability and credibility of the data sources?",
    ["Veracity", "Velocity", "Variety"],
    "Volume = quantity; velocity = speed of creation; variety = range of formats; veracity = trustworthiness of the data.", "r"],
  ["A model is trained on historical loan data labeled 'default' or 'no default' so it can classify new applicants. This is an example of:",
    ["Supervised learning", "Unsupervised learning", "Reinforcement learning"],
    "Supervised learning uses labeled inputs and outputs to learn a prediction or classification rule. Unsupervised learning finds structure in unlabeled data.", "r"],
  ["A machine learning model fits its training data almost perfectly but forecasts poorly on new data. The model most likely suffers from:",
    ["Overfitting", "Underfitting", "Too little variance error"],
    "Overfitting means the model has learned noise in the training sample (high variance), so it doesn't generalize out-of-sample.", "r"],
  ["A portfolio earns 0.2% per week. Its annualized return, assuming 52 weeks, is closest to:",
    ["10.95%", "10.40%", "11.20%"],
    "Annualized return = (1.002)^52 − 1 = 10.95%. Simply multiplying by 52 (10.40%) ignores compounding.", "c"]
];

window.GLOSSARY.push(
  ["Geometric mean return", "[(1 + R1)(1 + R2)…(1 + Rn)]^(1/n) − 1. Compound growth rate over several periods; always ≤ the arithmetic mean.", "l1qm"],
  ["Harmonic mean", "n ÷ Σ(1/Xi). Average cost per share when equal amounts are invested periodically (cost averaging).", "l1qm"],
  ["Money-weighted return (MWR)", "The IRR of all portfolio cash flows. Affected by the size and timing of client deposits and withdrawals.", "l1qm"],
  ["Time-weighted return (TWR)", "Geometrically linked sub-period returns between cash flows. Removes the effect of client flows; used to evaluate managers and required by GIPS.", "l1qm"],
  ["Leveraged return", "R_L = R + (V_B ÷ V_E)(R − r_D): return on equity when part of the portfolio is financed with borrowing at r_D.", "l1qm"],
  ["Effective annual rate (EAR)", "(1 + stated rate/m)^m − 1. With continuous compounding: e^r − 1.", "l1qm"],
  ["Coefficient of variation", "Standard deviation ÷ mean: risk per unit of return. Lower is better.", "l1qm"],
  ["Target semideviation", "√[Σ(Xi − B)² for Xi ≤ B ÷ (n − 1)]. Measures downside risk below a target return B.", "l1qm"],
  ["Bayes' formula", "P(Event | Info) = P(Info | Event) × P(Event) ÷ P(Info). Updates a prior probability for new information.", "l1qm"],
  ["Roy's safety-first ratio", "[E(Rp) − RL] ÷ σp. Choose the portfolio with the highest ratio to minimize the probability of a return below RL.", "l1qm"],
  ["Central limit theorem", "For n ≥ 30, the sample mean is approximately normal with mean μ and standard error σ/√n, whatever the population's distribution.", "l1qm"],
  ["Type I vs Type II error", "Type I: reject a true null (probability α). Type II: fail to reject a false null (β). Power = 1 − β.", "l1qm"],
  ["t-test of a correlation", "t = r√(n − 2) ÷ √(1 − r²), with n − 2 degrees of freedom.", "l1qm"],
  ["Chi-square test of independence", "Contingency table: expected = row total × column total ÷ grand total; df = (rows − 1)(columns − 1).", "l1qm"],
  ["Regression slope and intercept", "b1 = Cov(X,Y) ÷ Var(X); b0 = Ȳ − b1X̄.", "l1qm"],
  ["R² and SEE (simple regression)", "R² = SSR ÷ SST. SEE = √[SSE ÷ (n − 2)]. F = MSR ÷ MSE with df (1, n − 2).", "l1qm"]
);
