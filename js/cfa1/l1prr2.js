// CFA Level I · Portfolio Management · Learning module 2: Portfolio Risk and Return: Part II.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1prr2 = `
<p class="syl">CFA Level I · Portfolio Management (8–12%) · Learning module 2 of 6 · Portfolio Risk and Return: Part II</p>
<p>This lesson moves from portfolio theory to asset pricing. If everyone holds the market portfolio, the capital market line describes efficient portfolios; only systematic risk is rewarded; beta measures that risk; and the CAPM and security market line give each asset's required return. It ends with the four main risk-adjusted performance measures, which are tested in almost every exam.</p>

<h3>1. The capital market line (CML) <span class="hot">Highly tested</span></h3>
<ul>
  <li>If investors have the same expectations (homogeneous expectations), they all hold the same optimal risky portfolio: the <b>market portfolio</b> of all risky assets. The CAL through the market portfolio is the <b>CML</b>.</li>
</ul>
<div class="formula">CML: E(R<sub>p</sub>) = R<sub>f</sub> + [(E(R<sub>m</sub>) − R<sub>f</sub>) / σ<sub>m</sub>] × σ<sub>p</sub></div>
<ul>
  <li>Portfolios to the <b>left</b> of the market portfolio are <b>lending</b> portfolios (part in the risk-free asset); to the <b>right</b> are <b>borrowing</b> (leveraged) portfolios. If investors borrow at a higher rate than they lend, the CML has a kink at M and is flatter to the right.</li>
</ul>
<div class="ex"><b>Example:</b> R<sub>f</sub> = 3%, E(R<sub>m</sub>) = 9%, σ<sub>m</sub> = 15%; slope = 0.40. A CML portfolio with σ = 20% has E(R) = 3% + 0.40 × 20% = <b>11%</b>, achieved by borrowing to invest 133% in the market.</div>

<h3>2. Systematic and nonsystematic risk <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Total risk = systematic risk + nonsystematic risk</b> (in variance terms).</li>
  <li><b>Systematic</b> (market, non-diversifiable) risk comes from economy-wide factors; <b>nonsystematic</b> (unique, diversifiable) risk is specific to a company and can be eliminated by diversification.</li>
  <li>Because diversification is free, investors are rewarded only for <b>systematic risk</b>.</li>
</ul>
<div class="formula">Market model: R<sub>i</sub> = α<sub>i</sub> + β<sub>i</sub>R<sub>m</sub> + e<sub>i</sub><br>Total variance σ<sub>i</sub>² = β<sub>i</sub>²σ<sub>m</sub>² (systematic) + σ<sub>e</sub>² (nonsystematic)</div>
<div class="ex"><b>Example:</b> β = 1.1, σ<sub>m</sub> = 16%, σ<sub>i</sub> = 28%. Systematic variance = (1.1 × 0.16)² = 0.0310; total variance = 0.0784 → about <b>40%</b> of the stock's variance is systematic and the rest (0.0474) could be diversified away.</div>

<h3>3. Beta <span class="hot">Highly tested</span></h3>
<div class="formula">β<sub>i</sub> = Cov(R<sub>i</sub>, R<sub>m</sub>) / σ<sub>m</sub>² = ρ<sub>i,m</sub> × σ<sub>i</sub> / σ<sub>m</sub><br>Portfolio beta = weighted average of the assets' betas</div>
<div class="ex"><b>Example:</b> ρ = 0.7, σ<sub>i</sub> = 25%, σ<sub>m</sub> = 18%: β = 0.7 × 25/18 = <b>0.97</b>. Covariance 0.0216 with market variance 0.0324: β = <b>0.67</b>.<br>Portfolio: 50% in β = 1.2, 30% in β = 0.8, 20% in T-bills (β = 0): β<sub>p</sub> = 0.60 + 0.24 + 0 = <b>0.84</b>.</div>
<p>The market's beta is 1; the risk-free asset's beta is 0. Beta is usually estimated by regressing the asset's returns on market returns.</p>

<h3>4. The CAPM and the security market line <span class="hot">Highly tested</span></h3>
<div class="formula">CAPM / SML: E(R<sub>i</sub>) = R<sub>f</sub> + β<sub>i</sub> × [E(R<sub>m</sub>) − R<sub>f</sub>]</div>
<ul>
  <li>Key assumptions: investors are risk-averse, utility-maximizing and use mean-variance analysis; homogeneous expectations; markets are frictionless (no taxes or costs, unlimited borrowing and lending at R<sub>f</sub>); assets are infinitely divisible; investors are price-takers; a single holding period.</li>
  <li>Uses: estimating the cost of equity, setting required returns, and judging valuation: a stock whose <b>expected return is above</b> its required return plots <b>above the SML</b> and is <b>undervalued</b>; below the SML → overvalued.</li>
</ul>
<div class="ex"><b>Example:</b> R<sub>f</sub> = 2.5%, E(R<sub>m</sub>) = 8%, β = 0.8: required return = 2.5% + 0.8 × 5.5% = <b>6.9%</b>. If an analyst expects 8%, the stock plots above the SML: undervalued.</div>
<table>
  <tr><th></th><th>CML</th><th>SML</th></tr>
  <tr><td>Risk measure</td><td>Total risk (σ)</td><td>Systematic risk (β)</td></tr>
  <tr><td>Applies to</td><td>Efficient portfolios only</td><td>Any asset or portfolio</td></tr>
  <tr><td>Use</td><td>Capital allocation</td><td>Pricing and required returns</td></tr>
</table>
<p>Beyond the CAPM, <b>multifactor models</b> (e.g. adding size, value and momentum factors, or macroeconomic factors) can explain returns better.</p>

<h3>5. Performance measures <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Measure</th><th>Formula</th><th>Risk used</th><th>Best for</th></tr>
  <tr><td><b>Sharpe ratio</b></td><td>(R<sub>p</sub> − R<sub>f</sub>) / σ<sub>p</sub></td><td>Total</td><td>A portfolio that is the investor's whole (or main) holding</td></tr>
  <tr><td><b>M²</b></td><td>Return of the portfolio scaled to the market's σ: R<sub>f</sub> + Sharpe × σ<sub>m</sub> (often reported minus R<sub>m</sub>)</td><td>Total</td><td>Same ranking as Sharpe, but in percentage terms comparable with the market</td></tr>
  <tr><td><b>Treynor ratio</b></td><td>(R<sub>p</sub> − R<sub>f</sub>) / β<sub>p</sub></td><td>Systematic</td><td>Well-diversified portfolios that are part of a larger fund</td></tr>
  <tr><td><b>Jensen's alpha</b></td><td>R<sub>p</sub> − [R<sub>f</sub> + β<sub>p</sub>(R<sub>m</sub> − R<sub>f</sub>)]</td><td>Systematic</td><td>Same; positive alpha = beat the SML</td></tr>
</table>
<div class="ex"><b>Example:</b> R<sub>p</sub> = 12%, σ<sub>p</sub> = 18%, β<sub>p</sub> = 1.1; R<sub>f</sub> = 3%; R<sub>m</sub> = 10%, σ<sub>m</sub> = 15%.<br>Sharpe = 9 / 18 = <b>0.50</b> (market: 7 / 15 = 0.47).<br>Treynor = 9% / 1.1 = <b>8.18%</b> (market: 7%).<br>Jensen's alpha = 12% − (3% + 1.1 × 7%) = <b>1.3%</b>.<br>M² risk-adjusted return = 3% + 0.50 × 15% = <b>10.5%</b>, which is 0.5% above the market's 10%.</div>

<div class="how"><b>How it's tested:</b> CML calculations and lending vs borrowing portfolios, systematic vs nonsystematic risk and variance decomposition, calculating beta (from correlation or covariance) and portfolio beta, CAPM required returns and SML valuation, CML vs SML, and calculating and choosing among Sharpe, Treynor, M² and Jensen's alpha.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe the CML, the market portfolio and lending vs borrowing portfolios.</li>
  <li>Distinguish systematic and nonsystematic risk and explain why only systematic risk is priced.</li>
  <li>Calculate beta and portfolio beta.</li>
  <li>State the CAPM assumptions, calculate required returns and use the SML to identify mispricing.</li>
  <li>Calculate and interpret the Sharpe ratio, Treynor ratio, M² and Jensen's alpha.</li>
</ul></div>
`;

window.QB_HARD.l1prr2 = [
  ["The risk-free rate is 3%, the market's expected return is 9% and its standard deviation is 15%. A portfolio on the capital market line with a standard deviation of 10% has an expected return closest to:",
    ["7.0%", "9.0%", "6.0%"],
    "CML: E(Rp) = 3% + [(9% − 3%) ÷ 15%] × 10% = 3% + 4% = 7.0%.", "c"],
  ["A portfolio on the capital market line to the right of the market portfolio involves:",
    ["Borrowing at Rf to invest over 100% in the market", "Lending part of the portfolio's money at the risk-free rate", "Holding only the risk-free asset"],
    "Points beyond M have more risk than the market, achieved by leveraging: borrowing at Rf and investing more than 100% in M.", "r"],
  ["A stock has a standard deviation of 30%, the market's standard deviation is 20% and their correlation is 0.6. The stock's beta is closest to:",
    ["0.90", "0.40", "1.50"],
    "β = ρ × σi ÷ σm = 0.6 × 0.30 ÷ 0.20 = 0.90.", "c"],
  ["The risk-free rate is 3%, the expected market return is 8% and a stock's beta is 1.2. Its CAPM required return is closest to:",
    ["9.0%", "12.6%", "6.0%"],
    "E(R) = 3% + 1.2 × (8% − 3%) = 3% + 6% = 9.0%.", "c"],
  ["A stock's CAPM required return is 9%, but an analyst forecasts a return of 11%. The stock is most likely:",
    ["Undervalued, plotting above the SML", "Overvalued, plotting below the SML", "Fairly valued, plotting on the SML"],
    "A forecast return above the required return means the price is too low relative to its risk: the stock plots above the SML.", "c"],
  ["According to the CAPM, investors are compensated with higher expected returns only for bearing:",
    ["Systematic risk", "Total risk", "Unsystematic risk"],
    "Unsystematic risk can be diversified away at no cost, so the market rewards only systematic (beta) risk.", "r"],
  ["A portfolio returned 10% with a standard deviation of 16% when the risk-free rate was 2%. Its Sharpe ratio is closest to:",
    ["0.50", "0.63", "8.0"],
    "Sharpe = (Rp − Rf) ÷ σp = (10% − 2%) ÷ 16% = 0.50.", "c"],
  ["A portfolio returned 10% with a beta of 1.25 when the risk-free rate was 2%. Its Treynor ratio is closest to:",
    ["6.4%", "8.0%", "12.5%"],
    "Treynor = (Rp − Rf) ÷ βp = 8% ÷ 1.25 = 6.4%.", "c"],
  ["A portfolio with a beta of 1.25 returned 10%. The risk-free rate was 2% and the market returned 8%. Jensen's alpha is closest to:",
    ["0.5%", "2.0%", "−0.5%"],
    "CAPM return = 2% + 1.25 × (8% − 2%) = 9.5%. Alpha = 10% − 9.5% = 0.5%.", "c"],
  ["A portfolio returned 10% with σ = 16%. The market returned 8% with σ = 14%, and the risk-free rate was 2%. The portfolio's M² is closest to:",
    ["9.0%", "10.0%", "8.0%"],
    "M² = (Rp − Rf) × σm/σp + Rf = 8% × (14/16) + 2% = 9.0%, i.e. 1.0% above the market's 8%.", "c"],
  ["To evaluate a well-diversified portfolio that is only one of many held by a large fund, the most appropriate performance measure uses:",
    ["Systematic risk, such as the Treynor ratio", "Total risk, such as the Sharpe ratio", "Unsystematic risk, such as tracking error"],
    "When the portfolio is part of a larger diversified whole, only its systematic risk matters, so Treynor or Jensen's alpha is appropriate.", "r"],
  ["The risk-free rate is 3%, the market's expected return is 9% and its standard deviation is 15%. A portfolio on the CML with a standard deviation of 20% has an expected return of:",
    ["11%", "12%", "9%"],
    "3% + (6%/15%) × 20% = 11%. 12% forgets to subtract the risk-free rate from the market return.", "c"],
  ["A portfolio on the capital market line with a standard deviation below the market's is:",
    ["A lending portfolio", "A borrowing portfolio", "Inefficient"],
    "Left of the market portfolio, part of the money is invested at the risk-free rate.", "r"],
  ["A stock has a correlation of 0.7 with the market, a standard deviation of 25%, and the market's standard deviation is 18%. Its beta is closest to:",
    ["0.97", "1.39", "0.50"],
    "β = 0.7 × 25/18 = 0.97. 1.39 ignores the correlation.", "c"],
  ["A portfolio is 50% in a stock with beta 1.2, 30% in a stock with beta 0.8 and 20% in T-bills. Its beta is:",
    ["0.84", "1.00", "1.05"],
    "0.5 × 1.2 + 0.3 × 0.8 + 0.2 × 0 = 0.84. 1.05 ignores the T-bills.", "c"],
  ["A stock has beta 1.1 and a standard deviation of 28%; the market's standard deviation is 16%. The share of its total variance that is systematic is closest to:",
    ["40%", "63%", "60%"],
    "(1.1 × 0.16)² / 0.28² = 0.0310 / 0.0784 = 40%. 63% compares standard deviations, not variances.", "c"],
  ["The risk-free rate is 2.5%, the expected market return is 8%, and a stock's beta is 0.8. Its CAPM required return is:",
    ["6.9%", "6.4%", "8.9%"],
    "2.5% + 0.8 × 5.5% = 6.9%. 6.4% multiplies beta by the market return.", "c"],
  ["Compared with the CML, the security market line:",
    ["Uses beta and applies to any asset", "Uses total risk and applies to any asset", "Uses beta and applies only to efficient portfolios"],
    "The SML measures risk by beta and prices all assets; the CML uses σ and applies only to efficient portfolios.", "r"],
  ["A portfolio returned 12% with a standard deviation of 18% and a beta of 1.1. The risk-free rate was 3% and the market returned 10%. Its Treynor ratio is closest to:",
    ["8.18%", "0.50", "10.91%"],
    "(12% − 3%) / 1.1 = 8.18%. 0.50 is the Sharpe ratio.", "c"],
  ["For the same portfolio (12% return, beta 1.1; Rf = 3%; market 10%), Jensen's alpha is:",
    ["+1.3%", "+2.0%", "−1.3%"],
    "12% − (3% + 1.1 × 7%) = 12% − 10.7% = +1.3%. 2.0% ignores beta.", "c"],
  ["Which assumption is part of the CAPM?",
    ["Unlimited borrowing and lending at Rf", "Investors have different expectations", "Markets have taxes and transaction costs"],
    "CAPM assumes homogeneous expectations, frictionless markets and unlimited borrowing and lending at Rf.", "r"],
];

window.GLOSSARY.push(
  ["Capital market line (CML)","E(Rp) = Rf + [(E(Rm) − Rf)/σm]σp. Uses total risk; efficient portfolios only.","l1prr2"],
  ["Beta","Cov(Ri, Rm) ÷ σm² = ρ σi ÷ σm.","l1prr2"],
  ["CAPM / SML","E(Ri) = Rf + βi[E(Rm) − Rf]. Above the SML = undervalued.","l1prr2"],
  ["Sharpe and Treynor ratios","Sharpe = (Rp − Rf) ÷ σp (total risk). Treynor = (Rp − Rf) ÷ βp (systematic risk).","l1prr2"],
  ["M² and Jensen's alpha","M² = (Rp − Rf)σm/σp + Rf. Alpha = Rp − [Rf + βp(Rm − Rf)].","l1prr2"],
  ["Systematic vs nonsystematic risk", "Market-wide risk that can't be diversified (priced) vs company-specific risk that can.", "l1prr2"],
  ["CML vs SML", "Efficient portfolios, risk = σ vs any asset, risk = β.", "l1prr2"],
  ["Market model", "R_i = α + βR_m + e; splits variance into systematic and nonsystematic parts.", "l1prr2"]
);
