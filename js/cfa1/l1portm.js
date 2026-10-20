// CFA Level I · Quantitative Methods · Learning module 5: Portfolio Mathematics.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1portm = `
<p class="syl">CFA Level I · Quantitative Methods · Learning module 5 of 11 · Portfolio Mathematics</p>
<p>A portfolio's expected return is just a weighted average, but its risk is not: it depends on how the assets move together. This lesson shows how to compute portfolio expected return, variance and standard deviation, how to get covariance and correlation from a joint probability table, why diversification works, and how to choose between portfolios using Roy's <b>safety-first</b> criterion. Portfolio Management (Part I of Portfolio Risk and Return) builds directly on this.</p>

<h3>1. Portfolio expected return</h3>
<div class="formula">E(R_P) = w₁E(R₁) + w₂E(R₂) + … + wₙE(Rₙ), where the weights sum to 1</div>
<p>Example: 50% in an asset expected to return 11% and 50% in one expected to return 7% → E(R_P) = 9%. Correlation has no effect on expected return.</p>

<h3>2. Covariance and correlation of returns <span class="hot">Highly tested</span></h3>
<p><b>Covariance</b> measures how two returns move together: positive if they tend to be above (or below) their means at the same time, negative if one tends to be above when the other is below.</p>
<div class="formula">Cov(R_A, R_B) = Σ P(sᵢ) [R_A,ᵢ − E(R_A)] [R_B,ᵢ − E(R_B)] (from a joint probability table) · ρ_AB = Cov(R_A, R_B) / (σ_A σ_B) · Cov = ρ σ_A σ_B</div>
<p>Historical (sample) covariance uses the same idea with equal weights and n − 1 in the denominator (see Statistical Measures).</p>
<div class="ex"><b>Example (joint probability table):</b>
<table>
  <tr><th>State</th><th>Probability</th><th>R_A</th><th>R_B</th><th>(R_A − 9.5)(R_B − 7.6)</th></tr>
  <tr><td>Boom</td><td>0.3</td><td>25%</td><td>6%</td><td>15.5 × −1.6 = −24.8</td></tr>
  <tr><td>Normal</td><td>0.5</td><td>10%</td><td>10%</td><td>0.5 × 2.4 = 1.2</td></tr>
  <tr><td>Bust</td><td>0.2</td><td>−15%</td><td>4%</td><td>−24.5 × −3.6 = 88.2</td></tr>
</table>
E(R_A) = 0.3(25) + 0.5(10) + 0.2(−15) = 9.5%; E(R_B) = 7.6%. Cov = 0.3(−24.8) + 0.5(1.2) + 0.2(88.2) = <b>10.8</b> (%²). σ_A = √192.25 = 13.87%, σ_B = √6.24 = 2.50%, so ρ = 10.8/(13.87 × 2.50) = 0.31.</div>
<div class="trap"><b>Trap:</b> keep units consistent. In percent, covariance is in %² (10.8); in decimals it's 0.00108. Correlation has no units.</div>

<h3>3. Portfolio variance and standard deviation <span class="hot">Highly tested</span></h3>
<div class="formula">Two assets: σ²_P = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ Cov₁,₂ = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρ₁,₂σ₁σ₂</div>
<p>With three assets there are three variance terms and three covariance terms (each pair counted twice): σ²_P = Σ wᵢ²σᵢ² + 2w₁w₂Cov₁,₂ + 2w₁w₃Cov₁,₃ + 2w₂w₃Cov₂,₃. In general an n-asset portfolio has n variances and n(n − 1)/2 distinct covariances, which is why covariances dominate the risk of large portfolios.</p>
<div class="ex"><b>Example:</b> 50% in Asset A (σ = 18%), 50% in Asset B (σ = 12%), ρ = 0.30.
<br>σ²_P = 0.25(0.0324) + 0.25(0.0144) + 2(0.5)(0.5)(0.30)(0.18)(0.12) = 0.0081 + 0.0036 + 0.00324 = 0.01494.
<br>σ_P = 12.22%, below the 15% weighted average of the two standard deviations.</div>
<div class="calc"><b>Calculator tip:</b> work in decimals (σ = 0.18, not 18) and take the square root at the end. A common error is forgetting the "2" in the covariance term.</div>
<h4>How correlation drives diversification</h4>
<table>
  <tr><th>ρ</th><th>σ_P for the 50/50 example</th><th>Meaning</th></tr>
  <tr><td>+1.0</td><td>15.0% (weighted average)</td><td>No diversification benefit</td></tr>
  <tr><td>+0.3</td><td>12.2%</td><td>Some benefit</td></tr>
  <tr><td>0.0</td><td>10.8%</td><td>More benefit</td></tr>
  <tr><td>−1.0</td><td>3.0%</td><td>Maximum benefit; risk can be eliminated with the right weights</td></tr>
</table>
<p>As long as ρ &lt; +1, the portfolio's standard deviation is <b>less than the weighted average</b> of the assets' standard deviations: that's the diversification benefit. With ρ = −1, a zero-risk portfolio exists: w_A = σ_B/(σ_A + σ_B) = 0.12/0.30 = 40% in A.</p>

<h3>4. Safety-first ratio and shortfall risk <span class="hot">Highly tested</span></h3>
<p><b>Shortfall risk</b> is the probability that a portfolio's return falls below a minimum acceptable level R_L (e.g. the return needed to fund spending). Roy's safety-first criterion says: choose the portfolio that <b>minimizes</b> the probability that R_P &lt; R_L, which (assuming normal returns) means <b>maximizing</b> the safety-first ratio:</p>
<div class="formula">SFRatio = [E(R_P) − R_L] / σ_P · P(R_P &lt; R_L) = N(−SFRatio)</div>
<div class="ex"><b>Example:</b> R_L = 3%.
<br>Portfolio A: E(R) 8%, σ 10% → SFR = 0.50
<br>Portfolio B: E(R) 11%, σ 15% → SFR = 0.53 ← highest, choose B
<br>Portfolio C: E(R) 14%, σ 25% → SFR = 0.44
<br>Shortfall probability for B ≈ N(−0.53) ≈ 29.7% (vs 30.9% for A).</div>
<p>When R_L equals the risk-free rate, the SFRatio is the <b>Sharpe ratio</b>. The SFRatio says how many standard deviations the expected return sits above the threshold.</p>
<div class="trap"><b>Trap:</b> don't pick the portfolio with the highest return or lowest risk; pick the highest SFRatio (lowest shortfall probability).</div>

<div class="how"><b>How it's tested:</b> expected return and standard deviation of a two- or three-asset portfolio, covariance or correlation from a joint probability table, converting between covariance and correlation, the effect of correlation on diversification, and choosing a portfolio with the safety-first ratio.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Compute portfolio expected return, variance and standard deviation for two or three assets.</li>
  <li>Compute covariance and correlation from a joint probability table and convert between them.</li>
  <li>Explain why diversification lowers risk whenever correlation is below +1.</li>
  <li>Compute the safety-first ratio, choose the optimal portfolio and estimate shortfall probability.</li>
</ul></div>
`;

window.QB_HARD.l1portm = [
  ["A portfolio is 60% in Asset A (σ = 20%) and 40% in Asset B (σ = 10%), with a correlation of 0.25. The portfolio standard deviation is closest to:",
    ["13.56%", "16.00%", "12.65%"],
    "σp² = 0.36(0.04) + 0.16(0.01) + 2(0.6)(0.4)(0.25)(0.20)(0.10) = 0.0144 + 0.0016 + 0.0024 = 0.0184; σp = 13.56%. 16% is the weighted average (ρ = 1).", "c"],
  ["A client's minimum acceptable return is 3%. Portfolio A: E(R) 8%, σ 10%. Portfolio B: E(R) 11%, σ 15%. Portfolio C: E(R) 6%, σ 5%. Using Roy's safety-first criterion, the client should choose:",
    ["Portfolio C", "Portfolio B", "Portfolio A"],
    "SFRatio = (E(R) − RL)/σ: A = 0.50, B = 0.53, C = 0.60. The highest ratio minimizes the probability of returning less than 3%.", "c"],
  ["A portfolio is 70% in a stock fund expected to return 9% and 30% in a bond fund expected to return 4%. Its expected return is closest to:",
    ["7.5%", "6.5%", "13.0%"],
    "E(R_P) = 0.70 × 9% + 0.30 × 4% = 6.3% + 1.2% = 7.5%.", "c"],
  ["Two assets have a covariance of 0.0108 and standard deviations of 18% and 20%. Their correlation is closest to:",
    ["0.30", "0.03", "0.60"],
    "ρ = 0.0108/(0.18 × 0.20) = 0.0108/0.036 = 0.30.", "c"],
  ["A portfolio is 70% in Asset X (σ = 25%) and 30% in Asset Y (σ = 15%). Their covariance is 0.010. The portfolio's standard deviation is closest to:",
    ["19.2%", "22.0%", "15.8%"],
    "σ² = 0.49(0.0625) + 0.09(0.0225) + 2(0.7)(0.3)(0.010) = 0.030625 + 0.002025 + 0.0042 = 0.03685; σ = 19.2%. 22.0% is the weighted average of the standard deviations.", "c"],
  ["States: boom (p = 0.3), normal (0.5), bust (0.2). Asset A returns 25%, 10%, −15%; Asset B returns 6%, 10%, 4%. The covariance of A and B (in %²) is closest to:",
    ["10.8", "−24.8", "48.0"],
    "E(A) = 9.5, E(B) = 7.6. Cov = 0.3(15.5)(−1.6) + 0.5(0.5)(2.4) + 0.2(−24.5)(−3.6) = −7.44 + 0.6 + 17.64 = 10.8.", "c"],
  ["For a two-asset portfolio with positive weights, the portfolio standard deviation equals the weighted average of the two standard deviations only when the correlation is:",
    ["+1", "0", "−1"],
    "Only with perfect positive correlation is there no diversification benefit; for any ρ < 1, σ_P is below the weighted average.", "r"],
  ["Asset A has σ = 18% and Asset B has σ = 12%, with a correlation of −1. The weight in A that produces a zero-risk portfolio is closest to:",
    ["40%", "60%", "50%"],
    "w_A = σ_B/(σ_A + σ_B) = 12/30 = 40%. Then 0.4(18%) − 0.6(12%) = 0.", "c"],
  ["As the number of assets in an equally weighted portfolio grows, the portfolio's variance depends mostly on the:",
    ["Average covariance between the assets", "Average variance of the individual assets", "Number of assets with negative returns"],
    "The individual variance terms shrink with the square of the weights, while there are n(n − 1)/2 covariance terms, so covariances dominate.", "r"],
  ["A client needs at least 4% a year. Portfolio 1: E(R) 9%, σ 12%. Portfolio 2: E(R) 7%, σ 6%. Portfolio 3: E(R) 12%, σ 20%. Using Roy's safety-first criterion, the client should choose:",
    ["Portfolio 2", "Portfolio 1", "Portfolio 3"],
    "SFRatios: P1 = 5/12 = 0.42; P2 = 3/6 = 0.50; P3 = 8/20 = 0.40. The highest ratio, P2, minimizes the probability of a return below 4%.", "c"],
  ["Roy's safety-first criterion selects the portfolio that:",
    ["Minimizes the probability of a return below a threshold", "Maximizes expected return for a given level of risk", "Minimizes the portfolio's standard deviation"],
    "It minimizes shortfall risk, P(R_P < R_L); with normal returns that means maximizing [E(R_P) − R_L]/σ_P.", "r"],
  ["When the minimum acceptable return in the safety-first ratio equals the risk-free rate, the ratio is the same as the:",
    ["Sharpe ratio", "Coefficient of variation", "Treynor ratio"],
    "[E(R_P) − R_F]/σ_P is the Sharpe ratio.", "r"],
  ["Adding an asset with a correlation of 0.2 to a portfolio, with the same expected return and standard deviation as the portfolio, will most likely:",
    ["Lower the portfolio's standard deviation", "Raise the portfolio's standard deviation", "Leave risk unchanged, since return is unchanged"],
    "Combining two assets with equal risk and a correlation below 1 produces a standard deviation below that common level: a diversification benefit with no loss of return.", "s"],
];

window.GLOSSARY.push(
  ["Roy's safety-first ratio","[E(Rp) − RL] ÷ σp. Choose the portfolio with the highest ratio to minimize the probability of a return below RL.","l1portm"],
  ["Portfolio variance (two assets)", "w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂.", "l1portm"],
  ["Covariance from a joint probability table", "Σ p (R_A − E(R_A))(R_B − E(R_B)).", "l1portm"],
  ["Diversification benefit", "With ρ < +1, σ_P is below the weighted average of the assets' σ.", "l1portm"],
  ["Shortfall risk", "Probability the portfolio return falls below a minimum acceptable level; = N(−SFRatio) for normal returns.", "l1portm"]
);
