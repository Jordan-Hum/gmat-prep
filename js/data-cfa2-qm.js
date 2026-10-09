// CFA Level II · Quantitative Methods: study notes, item sets and flashcards.
window.NOTES = window.NOTES || {};
window.QB_SETS = window.QB_SETS || {};
window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l2qm = `
<p class="syl">CFA Level II · Quantitative Methods · 5–10% of the exam · Learning modules: Basics of Multiple Regression and Underlying Assumptions · Evaluating Regression Model Fit and Interpreting Model Results · Model Misspecification · Extensions of Multiple Regression · Time-Series Analysis · Machine Learning · Big Data Projects</p>

<h3>1. Multiple regression: the model and its assumptions</h3>
<div class="formula">Y_i = b0 + b1 X1i + b2 X2i + … + bk Xki + ε_i</div>
<p>Each slope coefficient is a <b>partial</b> slope: the expected change in Y for a one-unit change in that X, <b>holding the other independent variables constant</b>. The intercept is the value of Y when every X is zero.</p>
<p><b>Assumptions</b> (needed for valid inference):</p>
<ol>
  <li><b>Linearity</b>: the relationship between Y and the Xs is linear.</li>
  <li><b>Homoskedasticity</b>: the variance of the residuals is the same for all observations.</li>
  <li><b>Independence of errors</b>: residuals are uncorrelated with each other (no serial correlation).</li>
  <li><b>Normality</b>: residuals are normally distributed.</li>
  <li><b>Independence of the independent variables</b>: Xs are not random and there's no exact linear relation between them (no perfect multicollinearity).</li>
</ol>
<p>Diagnostics: plot residuals against predicted values and against each X (patterns signal non-linearity or heteroskedasticity); a <b>normal Q-Q plot</b> checks normality (fat tails show as points off the line at the ends).</p>

<h3>2. Evaluating fit and testing coefficients</h3>
<table>
  <tr><th>ANOVA</th><th>df</th><th>Sum of squares</th><th>Mean square</th></tr>
  <tr><td>Regression</td><td>k</td><td>RSS (explained)</td><td>MSR = RSS / k</td></tr>
  <tr><td>Residual (error)</td><td>n − k − 1</td><td>SSE (unexplained)</td><td>MSE = SSE / (n − k − 1)</td></tr>
  <tr><td>Total</td><td>n − 1</td><td>SST = RSS + SSE</td><td></td></tr>
</table>
<div class="formula">R² = RSS / SST · Adjusted R² = 1 − [(n − 1)/(n − k − 1)] (1 − R²) · SEE = √MSE</div>
<ul>
  <li><b>R²</b> never falls when a variable is added, so it rewards over-fitting. <b>Adjusted R²</b> rises only if the new variable's |t| &gt; 1; it can be negative and isn't a "percentage explained".</li>
  <li><b>AIC</b> = n ln(SSE/n) + 2(k + 1): preferred for <b>prediction</b>. <b>BIC</b> = n ln(SSE/n) + ln(n)(k + 1): penalizes extra variables more heavily, preferred for <b>goodness of fit</b>. Lower is better for both.</li>
  <li><b>t-test</b> of a coefficient: t = (b̂_j − B_j) / s(b̂_j), df = n − k − 1.</li>
  <li><b>F-test</b> of overall significance (H0: all slopes = 0): F = MSR / MSE, df (k, n − k − 1); one-tailed.</li>
  <li><b>Joint F-test</b> (nested models, q excluded variables): F = [(SSE_R − SSE_U)/q] / [SSE_U/(n − k − 1)], where k is the number of slopes in the unrestricted model.</li>
  <li><b>Forecasts</b>: plug the forecast Xs into the estimated equation. Forecast uncertainty comes from the model error and from sampling error in the coefficients, so the interval is wider than ± t × SEE.</li>
</ul>
<div class="ex"><b>Example:</b> n = 60, k = 3, SST = 0.0480, SSE = 0.0300. RSS = 0.0180; R² = 0.375; adjusted R² = 1 − (59/56)(0.625) = 0.342; F = (0.018/3)/(0.030/56) = 11.2.</div>

<h3>3. Model misspecification</h3>
<p><b>Functional-form errors</b>: <b>omitted variables</b> (if the omitted variable is correlated with an included one, the included coefficients are biased and inconsistent); inappropriate form (e.g. needs a log or squared term); inappropriate scaling; inappropriate pooling of data from different regimes.</p>
<table>
  <tr><th>Problem</th><th>Effect</th><th>Detect</th><th>Correct</th></tr>
  <tr><td><b>Conditional heteroskedasticity</b> (residual variance related to the Xs)</td><td>Coefficients still consistent, but standard errors usually <b>too small</b> → t-stats too big → <b>Type I errors</b>; F-test unreliable</td><td><b>Breusch–Pagan</b>: regress squared residuals on the Xs; BP = n × R²_resid ~ χ² with k df (one-tailed)</td><td><b>Robust (White-corrected)</b> standard errors; generalized least squares</td></tr>
  <tr><td><b>Serial correlation</b> (autocorrelated residuals)</td><td>Positive serial correlation: standard errors too small → Type I errors. If a <b>lagged dependent variable</b> is an X, coefficients are also <b>inconsistent</b></td><td><b>Breusch–Godfrey</b> (tests up to p lags; F-test); Durbin–Watson for first order (DW ≈ 2(1 − r); well below 2 → positive correlation)</td><td><b>Newey–West</b> (serial-correlation and heteroskedasticity consistent) standard errors; or model the dynamics</td></tr>
  <tr><td><b>Multicollinearity</b> (Xs highly correlated)</td><td>Coefficients unreliable, standard errors <b>inflated</b> → t-stats too small → <b>Type II errors</b>. Classic sign: high R² and significant F but insignificant t-stats</td><td><b>VIF_j = 1/(1 − R²_j)</b>, where R²_j comes from regressing X_j on the other Xs; VIF &gt; 5 warrants investigation, &gt; 10 is serious</td><td>Drop a variable, use a different proxy, increase sample size</td></tr>
</table>
<p><b>Unconditional heteroskedasticity</b> (variance changes but not with the Xs) causes no major problems.</p>

<h3>4. Extensions of multiple regression</h3>
<ul>
  <li><b>Influential observations</b>: a <b>high-leverage point</b> has an extreme X value; leverage h_ii &gt; 3(k + 1)/n flags it. An <b>outlier</b> has an extreme Y (large residual); a <b>studentized deleted residual</b> beyond the critical t (n − k − 2 df) flags it. <b>Cook's distance</b> combines both: D_i &gt; 0.5 may be influential, &gt; 1 likely influential, or D_i &gt; 2√(k/n).</li>
  <li><b>Dummy variables</b>: to represent n categories, use <b>n − 1 dummies</b> (using n creates perfect multicollinearity). An <b>intercept dummy</b> shifts the line; a <b>slope dummy</b> (D × X, an interaction term) changes the slope for the group.</li>
  <li><b>Logistic regression</b> (qualitative dependent variable, e.g. default/no default): ln[p/(1 − p)] = b0 + b1X1 + … Coefficients are changes in the <b>log odds</b>; e^(b_j) is the multiplicative change in the odds. p = 1/(1 + e^−(b0 + b1X1 + …)). Estimated by <b>maximum likelihood</b>; overall fit tested with the <b>likelihood ratio test</b> LR = −2(ln L_restricted − ln L_unrestricted) ~ χ²; a pseudo-R² compares models on the same data.</li>
</ul>
<div class="ex"><b>Example:</b> ln odds = −1.5 + 2.0 × Payout + 0.6 × D_cyclical. For a cyclical company with payout 0.9: ln odds = 0.9; odds = e^0.9 = 2.46; p = 2.46/3.46 = 71%.</div>

<h3>5. Time-series analysis</h3>
<ul>
  <li><b>Trend models</b>: linear (y_t = b0 + b1 t) for constant amounts of growth; <b>log-linear</b> (ln y_t = b0 + b1 t) for constant <b>rates</b> of growth. If residuals are serially correlated, a trend model is inappropriate; use an autoregressive model.</li>
  <li><b>Covariance stationarity</b> (needed for AR models): constant and finite mean, variance, and covariance with leads and lags.</li>
  <li><b>AR(p)</b>: x_t = b0 + b1 x_{t−1} + … + b_p x_{t−p} + ε_t. Check that the residual autocorrelations are insignificant: t = ρ_k / (1/√T). Significant autocorrelations → add lags.</li>
  <li><b>Mean reversion</b>: an AR(1) reverts to x = b0/(1 − b1) (requires |b1| &lt; 1). Above it, the model predicts a fall; below it, a rise.</li>
  <li><b>Multi-period forecasts</b> use the <b>chain rule</b>: forecast x_{t+1}, then use it to forecast x_{t+2}. Uncertainty grows with the horizon.</li>
  <li>Compare models' forecasting accuracy <b>out of sample</b> with <b>RMSE</b> (lower is better). Coefficients can be unstable over time (regime changes), so sample-period choice matters.</li>
  <li><b>Random walk</b>: x_t = x_{t−1} + ε_t (b1 = 1, a <b>unit root</b>): no finite mean-reverting level, not covariance stationary. Fix by <b>first-differencing</b>: y_t = x_t − x_{t−1}.</li>
  <li><b>Dickey–Fuller test</b>: regress x_t − x_{t−1} = b0 + g1 x_{t−1} + ε, where g1 = b1 − 1. H0: g1 = 0 (unit root). Uses its own (more negative) critical values.</li>
  <li><b>Seasonality</b>: a significant autocorrelation at the seasonal lag (lag 4 for quarterly, lag 12 for monthly data) → add that lag as a variable.</li>
  <li><b>ARCH(1)</b>: regress squared residuals on their lag: ε²_t = a0 + a1 ε²_{t−1} + u_t. Significant a1 → ARCH: standard errors are unreliable; use GLS. Predicted variance: σ²_{t+1} = a0 + a1 ε²_t.</li>
  <li><b>Two time series</b> in one regression: both stationary → fine; only one has a unit root → unreliable; both have unit roots → valid only if <b>cointegrated</b> (Engle–Granger: Dickey–Fuller test on the residuals, with its own critical values).</li>
</ul>
<div class="ex"><b>Example:</b> x_t = 0.0012 + 0.62 x_{t−1}. Mean-reverting level = 0.0012/0.38 = 0.32%. From x_t = 0.50%: x_{t+1} = 0.0012 + 0.62(0.005) = 0.43%; x_{t+2} = 0.0012 + 0.62(0.0043) = 0.39%.</div>

<h3>6. Machine learning</h3>
<ul>
  <li><b>Supervised</b> learning uses <b>labeled</b> data (regression for continuous targets, classification for categories). <b>Unsupervised</b> learning has no labels (dimension reduction, clustering). <b>Deep learning</b> and <b>reinforcement learning</b> use neural networks; reinforcement learning learns by trial and error to maximize a reward.</li>
  <li><b>Overfitting</b>: the model learns noise, so in-sample accuracy is high but out-of-sample accuracy is poor (high <b>variance error</b>). <b>Underfitting</b> = high <b>bias error</b>. Total error = bias + variance + base (irreducible) error. Data are split into training, validation and test samples; <b>k-fold cross-validation</b> reduces holdout-sample bias. Remedies for overfitting: simpler models, regularization, cross-validation.</li>
</ul>
<table>
  <tr><th>Algorithm</th><th>Type</th><th>Key point</th></tr>
  <tr><td>Penalized regression (<b>LASSO</b>)</td><td>Supervised</td><td>Adds a penalty λ × Σ|b|; shrinks some coefficients to zero (feature selection)</td></tr>
  <tr><td>Support vector machine (SVM)</td><td>Supervised</td><td>Finds the boundary (hyperplane) with the widest margin between classes</td></tr>
  <tr><td>K-nearest neighbour (KNN)</td><td>Supervised</td><td>Classifies by the majority of the k closest observations; choice of k and distance metric matter</td></tr>
  <tr><td>Classification and regression tree (<b>CART</b>)</td><td>Supervised</td><td>Binary splits; prone to overfitting (prune or limit depth)</td></tr>
  <tr><td>Ensemble, <b>random forest</b></td><td>Supervised</td><td>Many trees on bootstrapped samples and random feature subsets; vote reduces overfitting</td></tr>
  <tr><td>Principal components analysis (<b>PCA</b>)</td><td>Unsupervised</td><td>Dimension reduction into uncorrelated components (eigenvectors); eigenvalues give variance explained; scree plot</td></tr>
  <tr><td><b>K-means</b> clustering</td><td>Unsupervised</td><td>Number of clusters k must be <b>chosen in advance</b></td></tr>
  <tr><td><b>Hierarchical</b> clustering</td><td>Unsupervised</td><td>No preset number of clusters; agglomerative (bottom-up) or divisive (top-down); dendrogram</td></tr>
  <tr><td>Neural networks / deep learning</td><td>Either</td><td>Input, hidden and output layers; activation functions; learning rate; backpropagation</td></tr>
</table>

<h3>7. Big data projects</h3>
<p>Steps: <b>conceptualization</b> → <b>data collection</b> → <b>data preparation and wrangling</b> (cleansing: incompleteness, invalidity, inaccuracy, inconsistency, non-uniformity, duplication; preprocessing: extraction, aggregation, filtration, selection, conversion; outliers by <b>trimming</b> or <b>winsorization</b>; scaling by <b>normalization</b> (X − X_min)/(X_max − X_min) or <b>standardization</b> (X − μ)/σ) → <b>data exploration</b> (feature selection and <b>feature engineering</b>) → <b>model training</b>.</p>
<p><b>Text data</b>: tokenization; remove punctuation, numbers, <b>stop words</b>; lowercase; <b>stemming</b> (crude root: "connected" → "connect") vs <b>lemmatization</b> (dictionary root, e.g. "ran" → "run"); <b>bag-of-words</b> (BOW); <b>n-grams</b> keep word sequences; <b>document term matrix</b>. Feature selection uses term frequency, document frequency, <b>chi-square</b> and <b>mutual information</b>; TF-IDF weights words that are frequent in a document but rare across documents.</p>
<div class="formula">Precision = TP/(TP + FP) · Recall (sensitivity) = TP/(TP + FN) · Accuracy = (TP + TN)/N · F1 = 2PR/(P + R) · FPR = FP/(FP + TN)</div>
<ul>
  <li>Use <b>precision</b> when false positives are costly (e.g. wrongly flagging a good borrower); <b>recall</b> when false negatives are costly (e.g. missing a fraud). F1 balances both, useful with unequal class sizes.</li>
  <li><b>ROC curve</b> plots TPR against FPR across thresholds; higher <b>AUC</b> is better (0.5 = random guessing). <b>RMSE</b> evaluates continuous predictions.</li>
</ul>
<div class="ex"><b>Example:</b> TP 180, FP 45, FN 60, TN 715. Precision = 0.80, recall = 0.75, F1 = 2(0.80)(0.75)/1.55 = 0.77, accuracy = 0.895.</div>
<div class="how"><b>How it's tested:</b> Level II item sets give regression output (ANOVA table, coefficients, diagnostics) and ask you to compute R², adjusted R², F, t-stats or forecasts; to diagnose heteroskedasticity, serial correlation or multicollinearity and choose the fix; to compute mean-reverting levels and chain-rule forecasts; and to evaluate ML models with confusion-matrix metrics.</div>
<div class="key"><b>Carry forward to Level III</b>: Level III uses these tools in asset allocation, capital market expectations (e.g. mean reversion, regime changes) and in judging backtests and model risk; you won't run regressions there, but you must judge their output.</div>
<div class="trap"><b>Traps:</b> heteroskedasticity and positive serial correlation make t-stats too <b>big</b> (Type I), while multicollinearity makes them too <b>small</b> (Type II). Adding a variable always raises R², not necessarily adjusted R². A unit root means b1 = 1, so the "mean-reverting level" b0/(1 − b1) is undefined.</div>
`;

window.QB_SETS.l2qm = [
  {
    title: "Brightwater Capital: factor regression",
    case: `<p>Mei-Lin Okafor, an analyst at Brightwater Capital, regresses 60 months of excess returns on a small-cap equity fund on three factors: the market excess return (MKT), a size factor (SMB) and a value factor (HML). Her output is in Exhibits 1 and 2.</p>
<p><b>Exhibit 1. ANOVA</b></p>
<table><tr><th>Source</th><th>df</th><th>Sum of squares</th></tr><tr><td>Regression</td><td>3</td><td>0.0180</td></tr><tr><td>Residual</td><td>56</td><td>0.0300</td></tr><tr><td>Total</td><td>59</td><td>0.0480</td></tr></table>
<p><b>Exhibit 2. Coefficients</b></p>
<table><tr><th>Variable</th><th>Coefficient</th><th>Standard error</th></tr><tr><td>Intercept</td><td>0.0021</td><td>0.0015</td></tr><tr><td>MKT</td><td>0.85</td><td>0.21</td></tr><tr><td>SMB</td><td>0.32</td><td>0.20</td></tr><tr><td>HML</td><td>−0.12</td><td>0.15</td></tr></table>
<p>The two-tailed 5% critical t-value for 56 degrees of freedom is 2.003. The 5% critical F-value for (3, 56) df is 2.77, and the 5% critical χ² value with 3 df is 7.815.</p>
<p>To check for conditional heteroskedasticity, Okafor regresses the squared residuals on the three factors and obtains an R² of 0.12.</p>`,
    qs: [
      ["The model's adjusted R² is closest to:",
        ["0.34", "0.38", "0.63"],
        "R² = 0.018/0.048 = 0.375. Adjusted R² = 1 − (59/56)(1 − 0.375) = 1 − 1.0536 × 0.625 = 0.342. 0.63 is the unexplained share (1 − R²) rounded.", "c"],
      ["Which slope coefficients are significantly different from zero at the 5% level?",
        ["MKT only", "MKT and SMB", "All three slope coefficients"],
        "t(MKT) = 0.85/0.21 = 4.05; t(SMB) = 0.32/0.20 = 1.60; t(HML) = −0.12/0.15 = −0.80. Only |4.05| exceeds 2.003.", "c"],
      ["The F-statistic for the test that all slope coefficients equal zero is closest to:",
        ["11.2, so the slopes are jointly significant at 5%", "0.6, so the slopes aren't jointly significant", "3.7, which can't be compared without the t-values"],
        "F = MSR/MSE = (0.018/3)/(0.030/56) = 0.0060/0.000536 = 11.2 > 2.77, so reject H0 that all slopes are zero.", "c"],
      ["Based on the Breusch–Pagan test, Okafor should conclude that:",
        ["There's no evidence of conditional heteroskedasticity", "Conditional heteroskedasticity is present, so she needs robust standard errors", "The residuals are serially correlated"],
        "BP = n × R² = 60 × 0.12 = 7.2, below the χ² critical value of 7.815 (3 df), so she fails to reject the null of no conditional heteroskedasticity. The BP test says nothing about serial correlation.", "c"]
    ]
  },
  {
    title: "Halvorsen Retail: diagnosing a sales model",
    case: `<p>Ingrid Halvorsen models quarterly same-store sales growth for a retailer using 48 quarters of data. Her independent variables are a consumer confidence index (CCI), the unemployment rate (UNEMP) and disposable income growth (DIG).</p>
<p><b>Exhibit 1. Results</b></p>
<table><tr><th>Statistic</th><th>Value</th></tr><tr><td>R²</td><td>0.82</td></tr><tr><td>F-statistic (p-value)</td><td>66.8 (&lt;0.001)</td></tr><tr><td>t-stat: CCI / UNEMP / DIG</td><td>1.41 / −1.22 / 1.65</td></tr><tr><td>VIF: CCI / UNEMP / DIG</td><td>12.5 / 11.8 / 3.1</td></tr><tr><td>Breusch–Godfrey test (4 lags), p-value</td><td>0.003</td></tr></table>
<p>Her colleague Tomas Rey suggests that she drop UNEMP. He also notes that she omitted a variable for promotional spending, which is positively correlated with CCI and has a strong positive effect on sales.</p>`,
    qs: [
      ["The pattern of results in Exhibit 1 most likely indicates:",
        ["Multicollinearity", "Conditional heteroskedasticity", "A unit root in sales growth"],
        "A high R² and a highly significant F-statistic with no individually significant t-stats, plus VIFs above 10 for CCI and UNEMP, are classic signs of multicollinearity.", "s"],
      ["The VIF for CCI implies that the R² from regressing CCI on the other independent variables is closest to:",
        ["0.92", "0.08", "0.82"],
        "VIF = 1/(1 − R²_j) → 12.5 = 1/(1 − R²_j) → R²_j = 1 − 1/12.5 = 0.92.", "c"],
      ["Given the Breusch–Godfrey result, the most appropriate adjustment is to:",
        ["Use Newey–West (serial-correlation-consistent) standard errors", "Use White-corrected standard errors only", "Add more independent variables until the R² rises noticeably"],
        "The BG test rejects no serial correlation (p = 0.003). Newey–West standard errors correct for serial correlation (and heteroskedasticity); White-corrected errors address heteroskedasticity only.", "s"],
      ["Omitting the promotional-spending variable most likely makes the CCI coefficient:",
        ["Biased and inconsistent", "Unbiased but less precise", "Unaffected, since R² is already high"],
        "An omitted variable that is correlated with an included variable biases that variable's coefficient (here CCI picks up some of the promotion effect) and the bias doesn't shrink with more data.", "s"]
    ]
  },
  {
    title: "Castellan Credit: dividend-cut model",
    case: `<p>Rafael Castellan builds a model to predict whether a company will cut its dividend in the next year (Y = 1 if it cuts, 0 otherwise) using a sample of 40 companies. His explanatory variables are the payout ratio (PAYOUT, as a decimal) and a dummy variable equal to 1 for cyclical companies (CYC).</p>
<p><b>Exhibit 1. Logistic regression</b></p>
<table><tr><th>Variable</th><th>Coefficient</th></tr><tr><td>Intercept</td><td>−1.50</td></tr><tr><td>PAYOUT</td><td>2.00</td></tr><tr><td>CYC</td><td>0.60</td></tr></table>
<p>Castellan also runs a linear regression with the same two variables to look for influential observations. Exhibit 2 shows the three observations with the highest leverage.</p>
<p><b>Exhibit 2. Influence diagnostics</b></p>
<table><tr><th>Company</th><th>Leverage (h_ii)</th><th>Cook's D</th></tr><tr><td>A</td><td>0.31</td><td>0.72</td></tr><tr><td>B</td><td>0.18</td><td>0.09</td></tr><tr><td>C</td><td>0.12</td><td>0.05</td></tr></table>
<p>He plans to extend the model to four sectors (energy, financials, industrials, technology) using sector dummy variables.</p>`,
    qs: [
      ["For a cyclical company with a payout ratio of 0.90, the estimated probability of a dividend cut is closest to:",
        ["71%", "90%", "59%"],
        "ln odds = −1.50 + 2.00(0.90) + 0.60 = 0.90. Odds = e^0.90 = 2.46. p = 2.46/(1 + 2.46) = 0.71.", "c"],
      ["The PAYOUT coefficient of 2.00 means that a one-unit increase in the payout ratio:",
        ["Raises the log odds of a dividend cut by 2.00", "Raises the probability of a cut by 2.00", "Doubles the probability of a dividend cut"],
        "Logit coefficients measure the change in log odds; equivalently, the odds are multiplied by e^2.00 ≈ 7.4. The effect on the probability isn't constant.", "r"],
      ["Using the leverage rule of thumb, which observations are potentially influential?",
        ["Company A only", "Companies A and B", "None of them"],
        "Threshold = 3(k + 1)/n = 3(3)/40 = 0.225. Only Company A (0.31) exceeds it; its Cook's D of 0.72 (> 0.5) also flags it as possibly influential.", "c"],
      ["To represent the four sectors, Castellan should add:",
        ["Three dummy variables", "Four dummy variables", "One variable coded 1 to 4"],
        "With an intercept, n categories need n − 1 dummies; using four would create perfect multicollinearity (the dummy variable trap). A single 1-to-4 code imposes a false ordering.", "s"]
    ]
  },
  {
    title: "Northgate Economics: inflation forecasting",
    case: `<p>Northgate's economist, Sana Bhatt, models monthly inflation (x_t, as a decimal) using 120 months of data. Her AR(1) model is:</p>
<p style="text-align:center">x_t = 0.0012 + 0.62 x_{t−1}</p>
<p>The most recent monthly inflation reading is 0.50%.</p>
<p><b>Exhibit 1. Residual autocorrelations of the AR(1) model</b></p>
<table><tr><th>Lag</th><th>Autocorrelation</th></tr><tr><td>1</td><td>0.05</td></tr><tr><td>2</td><td>−0.04</td></tr><tr><td>3</td><td>0.07</td></tr><tr><td>12</td><td>0.31</td></tr></table>
<p>Bhatt also wants to regress the log of a commodity price index on the log of a consumer price index. Dickey–Fuller tests fail to reject a unit root for both series, but a Dickey–Fuller (Engle–Granger) test on the residuals of the regression rejects a unit root.</p>`,
    qs: [
      ["The mean-reverting level of monthly inflation implied by the AR(1) model is closest to:",
        ["0.32%", "0.19%", "0.50%"],
        "Mean-reverting level = b0/(1 − b1) = 0.0012/(1 − 0.62) = 0.0012/0.38 = 0.32%.", "c"],
      ["The two-month-ahead forecast of monthly inflation is closest to:",
        ["0.39%", "0.43%", "0.31%"],
        "Chain rule: x_{t+1} = 0.0012 + 0.62(0.0050) = 0.0043; x_{t+2} = 0.0012 + 0.62(0.0043) = 0.00387 ≈ 0.39%.", "c"],
      ["Based on Exhibit 1, Bhatt should:",
        ["Add a 12-month lag term to capture seasonality", "Accept the AR(1) model as correctly specified", "First-difference the series to remove a unit root"],
        "The standard error of each autocorrelation is 1/√120 = 0.091. Lag 12: t = 0.31/0.091 = 3.4, significant; other lags aren't. A significant seasonal lag calls for adding x_{t−12}.", "c"],
      ["Given the unit-root and cointegration results, the regression of the commodity index on the CPI is:",
        ["Valid, since the two series are cointegrated", "Invalid, since both series have unit roots", "Valid only after both series are detrended"],
        "When both series have unit roots, a regression between them is valid if they are cointegrated (the residuals are stationary), as the Engle–Granger test shows here.", "s"]
    ]
  },
  {
    title: "Lumen Analytics: ESG controversy classifier",
    case: `<p>Lumen Analytics trains a supervised machine-learning model to flag news articles that describe an ESG controversy at a portfolio company. After text preprocessing, the team tests the model on 1,000 labeled articles.</p>
<p><b>Exhibit 1. Confusion matrix (test sample)</b></p>
<table><tr><th></th><th>Actual: controversy</th><th>Actual: none</th></tr><tr><td>Predicted: controversy</td><td>180</td><td>45</td></tr><tr><td>Predicted: none</td><td>60</td><td>715</td></tr></table>
<p>The portfolio manager, Jonas Weber, says that missing a genuine controversy is far more costly than reviewing a false alarm.</p>
<p>An earlier version of the model, a deep classification tree, had 99% accuracy on the training data but only 71% on the test data.</p>
<p>Separately, Weber asks the team to group the 400 companies in the investable universe by similarity of their ESG data, without specifying how many groups there should be.</p>`,
    qs: [
      ["The model's F1 score is closest to:",
        ["0.77", "0.80", "0.90"],
        "Precision = 180/(180 + 45) = 0.80; recall = 180/(180 + 60) = 0.75; F1 = 2(0.80)(0.75)/(0.80 + 0.75) = 0.774. Accuracy is (180 + 715)/1,000 = 0.895.", "c"],
      ["Given Weber's view on errors, the most important metric to maximize is:",
        ["Recall", "Precision", "Accuracy"],
        "Missing a real controversy is a false negative. Recall = TP/(TP + FN) is the metric that penalizes false negatives.", "s"],
      ["The earlier tree model most likely suffered from:",
        ["High variance error (overfitting)", "High bias error (underfitting)", "High base error from noisy labels"],
        "Very high in-sample accuracy with much lower out-of-sample accuracy is the signature of overfitting (variance error). Pruning, limiting depth, cross-validation or a random forest would help.", "s"],
      ["The most appropriate technique for Weber's grouping request is:",
        ["Hierarchical clustering", "K-means clustering", "Penalized (LASSO) regression"],
        "Clustering is unsupervised. K-means needs the number of clusters chosen in advance; hierarchical clustering doesn't. LASSO is a supervised method.", "s"]
    ]
  }
];

window.GLOSSARY.push(
  ["Adjusted R²", "1 − [(n − 1)/(n − k − 1)](1 − R²); rises only if an added variable's |t| > 1.", "l2qm"],
  ["F-statistic (regression)", "MSR/MSE with (k, n − k − 1) df; tests whether all slope coefficients are jointly zero.", "l2qm"],
  ["Breusch–Pagan test", "n × R² from regressing squared residuals on the Xs; χ² with k df. Tests conditional heteroskedasticity.", "l2qm"],
  ["Breusch–Godfrey test", "Tests for serial correlation up to p lags. Fix with Newey–West standard errors.", "l2qm"],
  ["Variance inflation factor (VIF)", "1/(1 − R²_j). Above 5 investigate, above 10 serious multicollinearity.", "l2qm"],
  ["Cook's distance", "Measures an observation's influence. D > 0.5 may be, > 1 likely influential, or > 2√(k/n).", "l2qm"],
  ["Logistic regression", "Models log odds ln[p/(1 − p)]; coefficients change the log odds; estimated by maximum likelihood.", "l2qm"],
  ["Mean-reverting level (AR(1))", "b0/(1 − b1); undefined with a unit root (b1 = 1).", "l2qm"],
  ["Unit root / Dickey–Fuller", "b1 = 1 (random walk, nonstationary). DF tests g1 = b1 − 1 = 0. Fix by first-differencing.", "l2qm"],
  ["Cointegration", "Two unit-root series with a stationary linear combination; regression between them is valid.", "l2qm"],
  ["ARCH(1)", "Squared residuals depend on lagged squared residuals; variance forecast a0 + a1ε²_t.", "l2qm"],
  ["Overfitting", "Model fits noise: high in-sample, poor out-of-sample accuracy (variance error).", "l2qm"],
  ["Precision vs recall", "Precision TP/(TP + FP) penalizes false positives; recall TP/(TP + FN) penalizes false negatives.", "l2qm"],
  ["F1 score", "2PR/(P + R): harmonic mean of precision and recall.", "l2qm"],
  ["K-means vs hierarchical clustering", "K-means needs k set in advance; hierarchical builds a dendrogram with no preset k.", "l2qm"]
);
