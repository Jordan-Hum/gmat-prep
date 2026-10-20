// CFA Level I · Quantitative Methods · Learning module 10: Simple Linear Regression.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1reg = `
<p class="syl">CFA Level I · Quantitative Methods · Learning module 10 of 11 · Simple Linear Regression</p>
<p>Regression explains one variable using another: a stock's return using the market's, a company's sales using GDP growth. Simple linear regression fits the best straight line through the data. You need to estimate and interpret the slope and intercept, know the four assumptions, read an ANOVA table (R², standard error of estimate, F), test whether the slope is significant, make a prediction with an interval, and interpret log transformations. Level II extends all of this to multiple regression.</p>

<h3>1. The model and how the line is fitted <span class="hot">Highly tested</span></h3>
<div class="formula">Yᵢ = b₀ + b₁Xᵢ + εᵢ</div>
<ul>
  <li><b>Y</b> = dependent (explained) variable; <b>X</b> = independent (explanatory) variable; <b>ε</b> = error term (what X doesn't explain).</li>
  <li><b>b₀</b> (intercept) = predicted Y when X = 0. <b>b₁</b> (slope) = change in Y for a one-unit change in X.</li>
  <li><b>Ordinary least squares (OLS)</b> chooses b₀ and b₁ to minimize the <b>sum of squared errors</b> (SSE) between actual and fitted Y values.</li>
</ul>
<div class="formula">b̂₁ = Cov(X, Y) / Var(X) · b̂₀ = Ȳ − b̂₁X̄ (the fitted line passes through the point of means)</div>
<div class="ex"><b>Example:</b> A stock's excess returns (Y) regressed on the market's (X): Cov(X, Y) = 18, Var(X) = 12 (in %²), X̄ = 6%, Ȳ = 11%. b̂₁ = 18/12 = 1.5 (the stock's beta); b̂₀ = 11 − 1.5 × 6 = 2.0%. Interpretation: when the market's excess return rises by 1 percentage point, the stock's is expected to rise by 1.5 points; with a zero market excess return, the stock's predicted excess return is 2%.</div>
<p>The slope has the same sign as the correlation: b̂₁ = r × (s_Y/s_X).</p>

<h3>2. Assumptions of the model <span class="hot">Highly tested</span></h3>
<ol>
  <li><b>Linearity</b>: the relationship between X and Y is linear (in the parameters).</li>
  <li><b>Homoskedasticity</b>: the variance of the residuals is the same for all observations. (If it changes with X, the residuals are <b>heteroskedastic</b>.)</li>
  <li><b>Independence</b>: the residuals are uncorrelated with each other (no serial correlation) and observations are independent.</li>
  <li><b>Normality</b>: the residuals are normally distributed.</li>
</ol>
<p>Check them with <b>residual plots</b>: residuals scattered randomly around zero support the assumptions; a curve suggests non-linearity, a funnel shape suggests heteroskedasticity, and patterns over time suggest dependence. Outliers can distort the fitted line.</p>

<h3>3. Measuring fit: the ANOVA table <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Source</th><th>Sum of squares</th><th>df</th><th>Mean square</th></tr>
  <tr><td>Regression (explained)</td><td>SSR = Σ(Ŷᵢ − Ȳ)²</td><td>1 (number of slopes, k)</td><td>MSR = SSR/1</td></tr>
  <tr><td>Error (unexplained)</td><td>SSE = Σ(Yᵢ − Ŷᵢ)²</td><td>n − 2</td><td>MSE = SSE/(n − 2)</td></tr>
  <tr><td>Total</td><td>SST = Σ(Yᵢ − Ȳ)²</td><td>n − 1</td><td></td></tr>
</table>
<div class="formula">SST = SSR + SSE · R² = SSR/SST = 1 − SSE/SST · SEE = √MSE · F = MSR/MSE</div>
<ul>
  <li><b>Coefficient of determination R²</b>: the share of the variation in Y explained by X. In simple regression, R² = r² (the squared correlation).</li>
  <li><b>Standard error of the estimate (SEE)</b>: the standard deviation of the residuals; smaller = better fit.</li>
  <li><b>F-statistic</b> tests whether the slope is zero (H₀: b₁ = 0), with 1 and n − 2 df (one-tailed). In simple regression F = t² of the slope, so it gives the same conclusion as the slope t-test.</li>
</ul>
<div class="ex"><b>Example:</b> n = 50, SST = 400, SSR = 300. SSE = 100. R² = 0.75 (correlation = √0.75 = 0.87). MSE = 100/48 = 2.083; SEE = 1.44. MSR = 300; F = 300/2.083 = 144, far above the 5% critical F(1, 48) ≈ 4.04.</div>

<h3>4. Hypothesis tests on the coefficients <span class="hot">Highly tested</span></h3>
<div class="formula">t = (b̂₁ − B₁) / s_b̂₁, with n − 2 degrees of freedom</div>
<ul>
  <li>To test significance, H₀: b₁ = 0. Any hypothesized value can be tested (e.g. H₀: b₁ = 1 to test whether beta differs from one).</li>
  <li>The intercept is tested the same way using its own standard error.</li>
  <li>Testing H₀: b₁ = 0 is equivalent to testing H₀: ρ = 0 in simple regression.</li>
</ul>
<div class="ex"><b>Example:</b> b̂₁ = 1.5 with s_b̂₁ = 0.25, n = 50 (critical t₄₈ = 2.01 at 5%, two-tailed).
<br>H₀: b₁ = 0 → t = 6.0 → reject: the slope is significant.
<br>H₀: b₁ = 1 → t = (1.5 − 1)/0.25 = 2.0 → fail to reject (2.0 &lt; 2.01): no evidence beta differs from 1.</div>
<p>A confidence interval for the slope: b̂₁ ± t_c × s_b̂₁ = 1.5 ± 2.01 × 0.25 = 1.0 to 2.0. If the interval excludes the hypothesized value, reject H₀.</p>

<h3>5. Prediction</h3>
<div class="formula">Ŷ = b̂₀ + b̂₁X · Prediction interval: Ŷ ± t_c × s_f, where s_f² = SEE² × [1 + 1/n + (X − X̄)² / ((n − 1)s_X²)]</div>
<ul>
  <li>Example: forecast X = 8% → Ŷ = 2 + 1.5 × 8 = 14%. If s_f = 1.6%, the 95% interval is 14 ± 2.01 × 1.6 = 10.8% to 17.2%.</li>
  <li>The interval is <b>narrowest at X = X̄</b> and widens as the forecast X moves away from the mean, as SEE grows, or as n shrinks.</li>
</ul>

<h3>6. Functional forms (log transformations)</h3>
<table>
  <tr><th>Model</th><th>Form</th><th>Slope b₁ means</th><th>Use when</th></tr>
  <tr><td>Log-lin</td><td>ln Y = b₀ + b₁X</td><td><b>Relative</b> (%) change in Y for a one-unit change in X</td><td>Y grows at a constant rate (e.g. sales over time)</td></tr>
  <tr><td>Lin-log</td><td>Y = b₀ + b₁ ln X</td><td>Absolute change in Y for a relative change in X</td><td>Y responds to proportional changes in X</td></tr>
  <tr><td>Log-log</td><td>ln Y = b₀ + b₁ ln X</td><td><b>Elasticity</b>: % change in Y for a 1% change in X</td><td>Constant elasticity (e.g. demand and price)</td></tr>
</table>
<p>Choose the form whose residual plot looks most random and whose R² and SEE are best. Note: R² can't be compared across models with different dependent variables (Y vs ln Y).</p>

<div class="how"><b>How it's tested:</b> computing slope and intercept from covariance/variance and means, filling in or reading an ANOVA table (R², SEE, F), testing the slope (including against a value other than zero), making a prediction, identifying assumption violations from residual descriptions, and interpreting log-transformed slopes.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Estimate and interpret b₀ and b₁ and state the four assumptions.</li>
  <li>Compute SST, SSR, SSE, R², SEE, MSR, MSE and F from an ANOVA table.</li>
  <li>Test hypotheses about the slope and intercept with n − 2 df, and build a slope confidence interval.</li>
  <li>Compute a predicted value and describe what widens the prediction interval.</li>
  <li>Interpret log-lin, lin-log and log-log models.</li>
</ul></div>
`;

window.QB_HARD.l1reg = [
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
  ["In a regression of a stock's excess returns on the market's, Cov(X, Y) = 18 and Var(X) = 12 (both in %²); the mean X is 6% and the mean Y is 11%. The intercept is closest to:",
    ["2.0%", "1.5%", "5.0%"],
    "b₁ = 18/12 = 1.5; b₀ = Ȳ − b₁X̄ = 11 − 1.5 × 6 = 2.0%. (1.5 is the slope.)", "c"],
  ["Ordinary least squares chooses the regression coefficients to minimize the:",
    ["Sum of squared residuals", "Sum of absolute residuals", "Total sum of squares"],
    "OLS minimizes SSE = Σ(Y − Ŷ)². The total sum of squares doesn't depend on the fitted line.", "r"],
  ["A regression's residuals become more spread out as the independent variable increases. This violates the assumption of:",
    ["Homoskedasticity", "Independence of residuals", "Linearity"],
    "Constant residual variance is homoskedasticity; a funnel shape indicates heteroskedasticity.", "s"],
  ["A regression with 50 observations has SST = 400 and SSR = 300. Its R² and standard error of estimate are closest to:",
    ["0.75 and 1.44", "0.75 and 2.08", "0.33 and 1.44"],
    "R² = 300/400 = 0.75. SSE = 100; MSE = 100/48 = 2.083; SEE = √2.083 = 1.44. (2.08 is MSE, not SEE.)", "c"],
  ["A simple regression with 40 observations has SST = 0.08 and SSE = 0.03. Its F-statistic is closest to:",
    ["63.3", "1.67", "26.7"],
    "SSR = 0.05; MSR = 0.05/1; MSE = 0.03/38 = 0.000789. F = 0.05/0.000789 = 63.3.", "c"],
  ["In a simple linear regression, R² equals:",
    ["The squared correlation between X and Y", "The square of the estimated slope coefficient", "The F-statistic divided by n"],
    "With one independent variable, R² = r².", "r"],
  ["A slope estimate of 0.80 has a standard error of 0.30 in a regression with 27 observations (critical t = 2.06 at 5%, two-tailed). The slope is:",
    ["Significant, since t = 2.67", "Not significant, since t = 0.38", "Significant only if R² exceeds 0.5"],
    "t = 0.80/0.30 = 2.67 > 2.06 with n − 2 = 25 df.", "c"],
  ["A stock's estimated beta is 1.5 with a standard error of 0.25 (n = 50, critical t = 2.01). Testing H₀: β = 1 at 5%, the analyst should:",
    ["Fail to reject H₀, since t = 2.0", "Reject H₀, since t = 6.0", "Reject H₀, since 1.5 is above 1"],
    "t = (1.5 − 1)/0.25 = 2.0 < 2.01. The t of 6.0 tests β = 0, not β = 1.", "c"],
  ["The degrees of freedom for a t-test of the slope in a simple regression with n observations are:",
    ["n − 2", "n − 1", "n"],
    "Two parameters (b₀, b₁) are estimated, leaving n − 2 degrees of freedom.", "r"],
  ["A regression predicts Ŷ = 2% + 1.5X. If X is forecast at 8%, the predicted Y is closest to:",
    ["14%", "12%", "17%"],
    "Ŷ = 2 + 1.5 × 8 = 14%.", "c"],
  ["The prediction interval for Y is narrowest when the forecast value of X is:",
    ["Equal to the sample mean of X", "Equal to zero", "As far from the mean of X as possible"],
    "The (X − X̄)² term in the forecast variance is zero at X = X̄; it grows as X moves away.", "r"],
  ["In the model ln(Sales) = b₀ + b₁ × Time, a slope of 0.06 means sales grow by about:",
    ["6% per period", "$0.06 per period", "0.06% per period"],
    "In a log-lin model the slope is the relative (percentage) change in Y per unit change in X: about 6% (precisely e^0.06 − 1 = 6.2%).", "r"],
  ["In the model ln(Q) = b₀ + b₁ ln(P), the slope b₁ is best interpreted as the:",
    ["Elasticity of Q with respect to P", "Absolute change in Q per $1 change in P", "Relative change in Q per $1 change in P"],
    "In a log-log model the slope is the % change in Y for a 1% change in X: an elasticity.", "r"],
];

window.GLOSSARY.push(
  ["Regression slope and intercept","b1 = Cov(X,Y) ÷ Var(X); b0 = Ȳ − b1X̄.","l1reg"],
  ["R² and SEE (simple regression)","R² = SSR ÷ SST. SEE = √[SSE ÷ (n − 2)]. F = MSR ÷ MSE with df (1, n − 2).","l1reg"],
  ["OLS slope and intercept", "b₁ = Cov(X, Y)/Var(X); b₀ = Ȳ − b₁X̄.", "l1reg"],
  ["Regression assumptions", "Linearity, homoskedasticity, independence of residuals, normality of residuals.", "l1reg"],
  ["ANOVA identities", "SST = SSR + SSE; R² = SSR/SST; MSE = SSE/(n − 2); SEE = √MSE; F = MSR/MSE.", "l1reg"],
  ["Slope t-test", "t = (b̂₁ − B₁)/s_b̂₁ with n − 2 df.", "l1reg"],
  ["Log-lin / lin-log / log-log", "Slope = % change in Y per unit X / change in Y per % X / elasticity.", "l1reg"]
);
