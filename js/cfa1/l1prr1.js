// CFA Level I · Portfolio Management · Learning module 1: Portfolio Risk and Return: Part I.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1prr1 = `
<p class="syl">CFA Level I · Portfolio Management (8–12%) · Learning module 1 of 6 · Portfolio Risk and Return: Part I</p>
<p>This lesson builds modern portfolio theory step by step: the historical risk and return of asset classes, risk aversion and utility, how combining assets reduces risk (covariance and correlation), the minimum-variance and efficient frontiers, and how adding a risk-free asset creates the capital allocation line and lets each investor choose an optimal portfolio.</p>

<h3>1. Risk and return of asset classes</h3>
<ul>
  <li>Over long periods, higher-risk assets have earned higher returns: small-cap stocks &gt; large-cap stocks &gt; long-term government bonds &gt; Treasury bills, in both average return and volatility.</li>
  <li>Returns aren't normally distributed: many assets show <b>negative skewness</b> and <b>excess kurtosis</b> (fat tails), so standard deviation understates the risk of large losses.</li>
  <li>Other risks: liquidity (cost and time to trade), especially for small caps, emerging markets and alternatives.</li>
</ul>

<h3>2. Risk aversion and utility <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Risk-averse</b> investors prefer less risk for the same expected return (they need compensation to take risk); <b>risk-neutral</b> investors care only about expected return; <b>risk-seeking</b> investors prefer more risk.</li>
</ul>
<div class="formula">Utility U = E(R) − ½ × A × σ² (A = risk-aversion coefficient; use decimals)<br>A &gt; 0 risk-averse · A = 0 risk-neutral · A &lt; 0 risk-seeking</div>
<div class="ex"><b>Example:</b> E(R) = 10%, σ = 18%, A = 4: U = 0.10 − 0.5 × 4 × 0.18² = 0.10 − 0.0648 = <b>3.52%</b>. The investor would be indifferent between this portfolio and a risk-free return of 3.52%.</div>
<ul>
  <li><b>Indifference curves</b> join portfolios with equal utility. They slope upward (more risk needs more return) and are <b>steeper for more risk-averse</b> investors. Curves higher and to the left give more utility.</li>
</ul>

<h3>3. Portfolio risk: covariance and correlation <span class="hot">Highly tested</span></h3>
<div class="formula">E(R<sub>p</sub>) = w₁E(R₁) + w₂E(R₂)<br>σ<sub>p</sub>² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂Cov₁,₂, where Cov₁,₂ = ρ₁,₂σ₁σ₂</div>
<div class="ex"><b>Example:</b> 60% in Asset 1 (E = 8%, σ = 12%) and 40% in Asset 2 (E = 14%, σ = 25%), ρ = 0.3.<br>E(R<sub>p</sub>) = 0.6 × 8 + 0.4 × 14 = <b>10.4%</b>. Cov = 0.3 × 0.12 × 0.25 = 0.009.<br>σ<sub>p</sub>² = 0.36 × 0.0144 + 0.16 × 0.0625 + 2 × 0.6 × 0.4 × 0.009 = 0.019504 → σ<sub>p</sub> = <b>13.97%</b>.<br>With ρ = 1: σ<sub>p</sub> = 17.2% (the weighted average, no diversification). ρ = 0: 12.3%. ρ = −1: 2.8%.</div>
<ul>
  <li>Expected return is a weighted average, but portfolio risk is <b>less</b> than the weighted average of risks whenever ρ &lt; 1: that's the <b>diversification benefit</b>, larger the lower the correlation. With ρ = −1, risk can be eliminated entirely.</li>
  <li>For an equally weighted portfolio of n assets: σ<sub>p</sub>² = (average variance)/n + [(n − 1)/n] × (average covariance). As n grows, portfolio variance falls toward the <b>average covariance</b>: diversification can remove the asset-specific part but not the common (covariance) part. E.g. average variance 0.09, average covariance 0.02, n = 20: σ<sub>p</sub>² = 0.0045 + 0.019 = 0.0235 (σ = 15.3%); with very many assets, σ → √0.02 = 14.1%.</li>
</ul>

<h3>4. The efficient frontier</h3>
<ul>
  <li>The <b>minimum-variance frontier</b> shows the lowest-risk portfolio for each level of expected return.</li>
  <li>The <b>global minimum-variance portfolio</b> is the point with the lowest risk of all.</li>
  <li>The <b>efficient frontier</b> is the part of the frontier above the global minimum-variance portfolio: the highest return for each level of risk. Portfolios below it are inefficient.</li>
</ul>

<h3>5. Adding a risk-free asset: the capital allocation line <span class="hot">Highly tested</span></h3>
<div class="formula">Capital allocation line (CAL): E(R<sub>p</sub>) = R<sub>f</sub> + [(E(R<sub>i</sub>) − R<sub>f</sub>) / σ<sub>i</sub>] × σ<sub>p</sub><br>Optimal weight in the risky portfolio: y* = [E(R<sub>i</sub>) − R<sub>f</sub>] / (A × σ<sub>i</sub>²)</div>
<ul>
  <li>Combining the risk-free asset with a risky portfolio gives a straight line. The best CAL is the one <b>tangent</b> to the efficient frontier; the tangency point is the <b>optimal risky portfolio</b>.</li>
  <li><b>Two-fund separation</b>: all investors (with the same expectations) hold the same optimal risky portfolio and the risk-free asset; they differ only in <b>how much</b> they put in each, based on their risk aversion.</li>
  <li>Each investor's <b>optimal portfolio</b> is where the CAL is tangent to their highest indifference curve.</li>
</ul>
<div class="ex"><b>Example:</b> R<sub>f</sub> = 3%; the risky portfolio has E(R) = 11%, σ = 20%. CAL slope = 8/20 = 0.40.<br>70% in the risky portfolio: E(R<sub>p</sub>) = 3% + 0.7 × 8% = <b>8.6%</b>; σ<sub>p</sub> = 0.7 × 20% = <b>14%</b>.<br>An investor with A = 4: y* = 0.08 / (4 × 0.04) = <b>0.50</b>, so 50% risky and 50% risk-free.</div>

<div class="how"><b>How it's tested:</b> calculating utility and choosing between portfolios, indifference curve shapes, two-asset portfolio return, covariance and standard deviation, the effect of correlation, the limit of diversification, efficient frontier vocabulary, CAL calculations, optimal allocation, and two-fund separation.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe the historical risk and return of major asset classes.</li>
  <li>Explain risk aversion, calculate utility and interpret indifference curves.</li>
  <li>Calculate portfolio expected return, covariance and standard deviation, and explain diversification.</li>
  <li>Describe the minimum-variance and efficient frontiers.</li>
  <li>Use the CAL, find an optimal allocation and explain two-fund separation.</li>
</ul></div>
`;

window.QB_HARD.l1prr1 = [
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
  ["A portfolio has an expected return of 10% and a standard deviation of 18%. For an investor with a risk-aversion coefficient of 4, its utility is closest to:",
    ["3.52%", "6.76%", "−2.96%"],
    "0.10 − 0.5 × 4 × 0.18² = 3.52%. 6.76% would need the ½ applied twice; −2.96% forgets the ½.", "c"],
  ["An investor with a risk-aversion coefficient of zero is:",
    ["Risk-neutral", "Risk-averse", "Risk-seeking"],
    "With A = 0, utility equals expected return; risk doesn't matter.", "r"],
  ["A portfolio is 60% in Asset 1 (σ = 12%) and 40% in Asset 2 (σ = 25%), with a correlation of 0.3. The portfolio's standard deviation is closest to:",
    ["13.97%", "17.20%", "12.32%"],
    "σ² = 0.36(0.0144) + 0.16(0.0625) + 2(0.6)(0.4)(0.3)(0.12)(0.25) = 0.019504 → 13.97%. 17.2% assumes ρ = 1; 12.32% assumes ρ = 0.", "c"],
  ["Two assets have standard deviations of 12% and 25% and a correlation of 0.3. Their covariance is:",
    ["0.009", "0.030", "0.003"],
    "Cov = ρσ₁σ₂ = 0.3 × 0.12 × 0.25 = 0.009.", "c"],
  ["As more assets are added to an equally weighted portfolio, its variance approaches:",
    ["The average covariance", "Zero", "The average variance"],
    "The asset-specific part shrinks (variance / n), but the common covariance remains.", "r"],
  ["The risk-free rate is 3% and a risky portfolio has an expected return of 11% and a standard deviation of 20%. A portfolio with 70% in the risky portfolio has an expected return and standard deviation of:",
    ["8.6% and 14%", "7.7% and 14%", "8.6% and 20%"],
    "E = 3% + 0.7 × 8% = 8.6%; σ = 0.7 × 20% = 14%.", "c"],
  ["Using the same portfolios (Rf = 3%, risky E = 11%, σ = 20%), an investor with a risk-aversion coefficient of 4 should put what share in the risky portfolio?",
    ["50%", "100%", "25%"],
    "y* = (0.11 − 0.03)/(4 × 0.20²) = 0.08/0.16 = 0.50.", "c"],
  ["The point at which the capital allocation line is tangent to the efficient frontier is the:",
    ["Optimal risky portfolio", "Global minimum-variance portfolio", "Investor's optimal portfolio"],
    "The tangency portfolio gives the steepest CAL; each investor then combines it with the risk-free asset.", "r"],
  ["Historically, which asset class has had the highest average return and the highest volatility?",
    ["Small-cap stocks", "Large-cap stocks", "Long-term government bonds"],
    "Over long periods, small caps have shown the highest return and risk among these asset classes.", "r"],
];

window.GLOSSARY.push(
  ["Utility","U = E(r) − ½Aσ². Higher A = more risk-averse; steeper indifference curves.","l1prr1"],
  ["Efficient frontier","Portfolios with the highest return for each level of risk: the minimum-variance frontier above the global minimum-variance portfolio.","l1prr1"],
  ["Two-fund separation","All investors hold the same optimal risky portfolio and the risk-free asset; only the mix differs.","l1prr1"],
  ["Covariance and correlation", "Cov = ρσ₁σ₂; lower correlation means more diversification benefit.", "l1prr1"],
  ["Capital allocation line (CAL)", "Combinations of the risk-free asset and a risky portfolio; slope = (E(R) − Rf)/σ.", "l1prr1"],
  ["Global minimum-variance portfolio", "Portfolio with the lowest risk on the minimum-variance frontier.", "l1prr1"]
);
