// CFA Level I · Quantitative Methods · Learning module 1: Rates and Returns.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1rates = `
<p class="syl">CFA Level I · Quantitative Methods (6–9% of the exam) · Learning module 1 of 11 · Rates and Returns</p>
<p>This lesson sets up the vocabulary used in every later topic: what an interest rate really is, how to measure an investment's return over one or many periods, and how to compare returns that are measured differently. Nearly every calculation here is directly testable, and the same ideas come back in Fixed Income, Portfolio Management and GIPS.</p>

<h3>1. Three ways to read an interest rate</h3>
<p>An interest rate links money today with money in the future. The same number can be read three ways:</p>
<ul>
  <li><b>Required rate of return</b>: the minimum return an investor must expect to be willing to invest.</li>
  <li><b>Discount rate</b>: the rate used to convert a future cash flow into its value today (present value).</li>
  <li><b>Opportunity cost</b>: the return you give up by choosing one use of money over the next-best alternative (e.g. spending today instead of saving).</li>
</ul>
<h4>Building an interest rate from its parts <span class="hot">Highly tested</span></h4>
<div class="formula">Interest rate = real risk-free rate + inflation premium + default risk premium + liquidity premium + maturity premium</div>
<table>
  <tr><th>Component</th><th>Compensates for</th><th>Example</th></tr>
  <tr><td><b>Real risk-free rate</b></td><td>Deferring consumption, with no inflation and no risk</td><td>Theoretical; not directly observable</td></tr>
  <tr><td><b>Inflation premium</b></td><td>Expected loss of purchasing power over the life of the investment</td><td>Real risk-free + inflation premium ≈ <b>nominal risk-free rate</b> (e.g. a T-bill yield)</td></tr>
  <tr><td><b>Default risk premium</b></td><td>The possibility the borrower fails to pay in full and on time</td><td>Higher for a high-yield bond than an AAA bond</td></tr>
  <tr><td><b>Liquidity premium</b></td><td>Difficulty of selling quickly near fair value</td><td>A thinly traded corporate bond vs an actively traded Treasury</td></tr>
  <tr><td><b>Maturity premium</b></td><td>Greater price sensitivity of longer-dated debt to rate changes</td><td>A 30-year bond usually yields more than a 2-year bond from the same issuer</td></tr>
</table>
<p>Strictly, the nominal and real rates are linked multiplicatively: <b>(1 + nominal) = (1 + real) × (1 + inflation)</b>. The additive version (nominal ≈ real + inflation) is the usual approximation.</p>
<div class="ex"><b>Example:</b> A T-bill yields 6.5% and expected inflation is 2.5%. Exact real rate = 1.065/1.025 − 1 = 3.90% (the approximation gives 4.0%).</div>
<div class="trap"><b>Trap:</b> the maturity premium is about <b>time to maturity</b> (interest rate risk), the liquidity premium about <b>tradability</b>, and the default premium about <b>credit quality</b>. Exam questions describe a feature and ask which premium it explains.</div>

<h3>2. Holding period return <span class="hot">Highly tested</span></h3>
<p>The <b>holding period return (HPR)</b> is the total return over whatever period you held the asset: price change plus any income (dividends, coupons), divided by the starting price.</p>
<div class="formula">HPR = (P₁ − P₀ + D₁) / P₀ = (P₁ − P₀)/P₀ [capital gain yield] + D₁/P₀ [income yield]</div>
<div class="ex"><b>Example:</b> Buy at $50.00, receive a $1.20 dividend, sell at $52.50. HPR = (52.50 − 50.00 + 1.20)/50.00 = 7.4% (capital gain 5.0% + dividend yield 2.4%).</div>
<p>Returns over several periods <b>compound</b>; you don't add them:</p>
<div class="formula">HPR over n periods = (1 + R₁)(1 + R₂)…(1 + Rₙ) − 1</div>
<p>For example, +10% then −10% gives 1.10 × 0.90 − 1 = −1%, not 0%.</p>

<h3>3. Average returns: arithmetic, geometric, harmonic <span class="hot">Highly tested</span></h3>
<h4>Arithmetic mean</h4>
<div class="formula">R̄ = (R₁ + R₂ + … + Rₙ) / n</div>
<p>The simple average. It's the best estimate of the return in a <b>single</b> future period, but it overstates what you actually earned over several periods when returns vary.</p>
<h4>Geometric mean</h4>
<div class="formula">R_G = [(1 + R₁)(1 + R₂)…(1 + Rₙ)]^(1/n) − 1</div>
<p>The constant per-period return that would turn the starting value into the ending value: the <b>compound annual growth rate</b>. Use it to describe <b>past multi-period performance</b>.</p>
<ul>
  <li>Geometric ≤ arithmetic, always. They're equal only if every return is identical.</li>
  <li>The gap widens as volatility rises. A useful approximation: R_G ≈ R̄ − σ²/2.</li>
  <li>If any period return is −100%, the geometric mean is −100% (the money is gone).</li>
</ul>
<div class="ex"><b>Example:</b> Returns of +15%, −5%, +10% and +20%. Arithmetic mean = 40%/4 = 10.0%. Geometric mean = (1.15 × 0.95 × 1.10 × 1.20)^(1/4) − 1 = (1.44210)^(0.25) − 1 = 9.58%.</div>
<h4>Harmonic mean</h4>
<div class="formula">X_H = n / Σ(1/Xᵢ)</div>
<p>Used for <b>average cost per share when investing a fixed amount of money each period</b> (cost averaging). Because you buy more shares when the price is low, your average cost is the harmonic mean of the prices, which is below their arithmetic mean.</p>
<div class="ex"><b>Example:</b> €1,000 invested each month at prices €10.00, €12.50 and €8.00. Shares bought = 100 + 80 + 125 = 305 for €3,000, so average cost = €9.84 = 3/(1/10 + 1/12.5 + 1/8). The arithmetic average price is €10.17.</div>
<p><b>Ordering</b> (for positive, unequal values): <b>harmonic &lt; geometric &lt; arithmetic</b>.</p>
<h4>Trimmed and winsorized means</h4>
<p>Both deal with <b>outliers</b>. A <b>trimmed mean</b> drops a set percentage of the highest and lowest values before averaging. A <b>winsorized mean</b> keeps the same number of observations but replaces the extremes with the nearest remaining values.</p>
<div class="ex"><b>Example:</b> Eight returns: −12%, 2%, 4%, 5%, 6%, 7%, 8%, 30%. Arithmetic mean = 6.25%. Trimming one value from each end (12.5% each side): mean of 2% to 8% = 5.33%. Winsorizing: replace −12% with 2% and 30% with 8%: mean = 5.25%.</div>

<h3>4. Money-weighted vs time-weighted return <span class="hot">Highly tested</span></h3>
<p>When an investor adds or withdraws money during the measurement period, there are two ways to measure performance.</p>
<h4>Money-weighted return (MWR)</h4>
<p>The MWR is the <b>internal rate of return (IRR)</b> of the investor's own cash flows: the discount rate that makes the present value of money put in equal the present value of money taken out (including the ending value). It's affected by the <b>timing and size</b> of contributions and withdrawals.</p>
<div class="formula">Σ CFₜ / (1 + MWR)ᵗ = 0 (contributions negative, withdrawals and ending value positive)</div>
<h4>Time-weighted return (TWR)</h4>
<p>The TWR removes the effect of cash flows. Split the period into sub-periods at each external cash flow, compute each sub-period's HPR, then link them geometrically (and annualize if the period exceeds one year).</p>
<div class="formula">TWR = (1 + r₁)(1 + r₂)…(1 + rₙ) − 1 ; annualized: (1 + TWR)^(1/years) − 1</div>
<div class="ex"><b>Worked example:</b> At t = 0 an investor buys one share at $100. At t = 1 the price is $120 and she buys a second share. At t = 2 the price is $130 and she sells both (no dividends).
<br><b>TWR</b>: year 1 = 120/100 − 1 = 20.0%; year 2 = 130/120 − 1 = 8.33%. Annualized TWR = (1.20 × 1.0833)^(1/2) − 1 = 14.02%.
<br><b>MWR</b>: solve −100 − 120/(1 + r) + 260/(1 + r)² = 0 → r = 12.05%.
<br>The MWR is lower because more money was invested during the weaker second year.</div>
<div class="calc"><b>BA II Plus (MWR as IRR):</b> [CF] [2nd][CE|C] · CF0 = −100 [ENTER] [↓] C01 = −120 [ENTER] [↓] F01 = 1 [↓] C02 = 260 [ENTER] · [IRR] [CPT] → 12.05</div>
<table>
  <tr><th></th><th>Money-weighted</th><th>Time-weighted</th></tr>
  <tr><td>Affected by timing/size of client cash flows?</td><td><b>Yes</b></td><td><b>No</b></td></tr>
  <tr><td>Best for</td><td>The investor's own experience; managers who <b>control</b> the cash flows (e.g. private equity)</td><td><b>Evaluating a manager</b> who doesn't control flows; required by GIPS for most portfolios</td></tr>
  <tr><td>Data needed</td><td>Cash flows and ending value</td><td>Portfolio value at every external cash flow</td></tr>
</table>
<div class="trap"><b>Trap:</b> if the client adds money just before a strong period, MWR &gt; TWR; just before a weak period, MWR &lt; TWR. The manager's skill is the same in both cases, which is why TWR is the standard for manager evaluation.</div>

<h3>5. Annualizing returns</h3>
<p>To compare returns measured over different horizons, convert them to annual rates by compounding:</p>
<div class="formula">R_annual = (1 + R_period)^c − 1, where c = number of periods in a year (e.g. 4 for quarterly, 52 for weekly, 365/days for a period in days)</div>
<ul>
  <li>Quarterly return 2.1% → (1.021)⁴ − 1 = 8.67%.</li>
  <li>Weekly return 0.2% → (1.002)⁵² − 1 = 10.95%.</li>
  <li>An 18-month HPR of 12% → (1.12)^(1/1.5) − 1 = 7.85% a year. For periods longer than a year, c is less than 1.</li>
  <li>A 100-day return of 1.5% → (1.015)^(365/100) − 1 = 5.58%.</li>
</ul>
<div class="trap"><b>Trap:</b> annualizing assumes the return can be repeated at the same rate, which is unrealistic for very short periods. Never annualize by simple multiplication on the exam unless told to (that gives a non-compounded rate).</div>

<h3>6. Continuously compounded returns <span class="hot">Highly tested</span></h3>
<p>If compounding happens continuously, the return is the natural log of the price relative:</p>
<div class="formula">r_cc = ln(P₁/P₀) = ln(1 + HPR) · HPR = e^(r_cc) − 1</div>
<ul>
  <li>A price rise from $50 to $56: r_cc = ln(1.12) = 11.33% (HPR 12%). The continuously compounded return is always <b>lower</b> than the HPR it corresponds to (for positive returns).</li>
  <li>Key property: continuously compounded returns are <b>additive over time</b>. A 3-year continuously compounded return is the sum of the three annual ones. That's why they're used in statistical models (and why prices are modelled as lognormal, see Simulation Methods).</li>
  <li>A stated rate of 9% compounded continuously = an effective annual rate of e^0.09 − 1 = 9.42%.</li>
</ul>

<h3>7. Other return measures</h3>
<ul>
  <li><b>Gross return</b>: before management fees and other expenses (but after trading costs); reflects the manager's investment skill. <b>Net return</b>: after fees, what the investor actually receives.</li>
  <li><b>Pre-tax vs after-tax</b>: after-tax nominal return = pre-tax return × (1 − tax rate) when all return is taxed at one rate. Dividends, interest and realized gains may be taxed differently; unrealized gains often aren't taxed until sold.</li>
  <li><b>Real return</b>: strips out inflation: (1 + nominal)/(1 + inflation) − 1. It's what matters for purchasing power. After-tax real return: first take the tax off the nominal return, then remove inflation.</li>
  <li><b>Leveraged return</b>: borrowing magnifies the return on the investor's own equity (both up and down):</li>
</ul>
<div class="formula">R_L = r + (V_B/V_E) × (r − r_D), where r = return on the total portfolio, r_D = borrowing cost, V_B = borrowed amount, V_E = equity</div>
<div class="ex"><b>Example:</b> A $100 portfolio financed with $60 equity and $40 borrowed at 5% earns 9%. R_L = 9% + (40/60)(9% − 5%) = 11.67%. Check: portfolio gain $9, interest $2, so $7 on $60 equity = 11.67%. If the portfolio earned only 3%, R_L = 3% + (2/3)(3% − 5%) = 1.67%.</div>
<div class="ex"><b>Example (after-tax real):</b> Nominal return 8%, tax rate 30%, inflation 2%. After-tax nominal = 8% × 0.70 = 5.6%. After-tax real = 1.056/1.02 − 1 = 3.53%.</div>

<div class="how"><b>How it's tested:</b> computing HPR, arithmetic and geometric means, harmonic average cost, MWR/TWR from a cash flow table, annualized and continuously compounded returns, leveraged and real returns; choosing the right measure (geometric for past compound growth, arithmetic for a single-period forecast, TWR for evaluating managers, harmonic for cost averaging); identifying which premium explains a yield difference.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Explain an interest rate as a required return, discount rate and opportunity cost, and name its five components.</li>
  <li>Calculate HPR (one and several periods) and arithmetic, geometric, harmonic, trimmed and winsorized means, and know when each is appropriate.</li>
  <li>Calculate and compare MWR and TWR, and explain why TWR is used to evaluate managers.</li>
  <li>Annualize returns and convert between HPR and continuously compounded returns.</li>
  <li>Calculate gross/net, after-tax, real and leveraged returns.</li>
</ul></div>
`;

window.QB_HARD.l1rates = [
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
  ["A portfolio earns 0.2% per week. Its annualized return, assuming 52 weeks, is closest to:",
    ["10.95%", "10.40%", "11.20%"],
    "Annualized return = (1.002)^52 − 1 = 10.95%. Simply multiplying by 52 (10.40%) ignores compounding.", "c"],
  ["The yield difference between a 2-year and a 20-year bond issued by the same highly rated, actively traded government is best explained by the:",
    ["Maturity premium", "Liquidity premium", "Default risk premium"],
    "Same issuer (same default risk) and both actively traded (similar liquidity): the difference reflects the greater interest rate sensitivity of the longer bond, the maturity premium.", "r"],
  ["Which of the following is the best interpretation of the rate an individual earns by saving instead of spending today?",
    ["An opportunity cost of current consumption", "The default risk premium on the savings", "A real risk-free rate plus a liquidity premium"],
    "The return given up by spending rather than saving (or vice versa) is an opportunity cost. Interest rates can be read as required returns, discount rates or opportunity costs.", "r"],
  ["A Treasury bill yields 5.0% and expected inflation is 2.0%. Using the exact relationship, the real risk-free rate is closest to:",
    ["2.94%", "3.00%", "7.10%"],
    "(1 + nominal) = (1 + real)(1 + inflation) → real = 1.05/1.02 − 1 = 2.94%. The additive approximation gives 3.00%.", "c"],
  ["An investor buys a share for $40.00, receives dividends of $0.80 and sells it for $38.50. The holding period return is closest to:",
    ["−1.75%", "−3.75%", "2.00%"],
    "HPR = (38.50 − 40.00 + 0.80)/40.00 = −0.70/40.00 = −1.75%. The price loss (−3.75%) is partly offset by the 2.00% dividend yield.", "c"],
  ["A fund returns +12% in year 1, −8% in year 2 and +6% in year 3. The 3-year holding period return is closest to:",
    ["9.22%", "10.00%", "3.33%"],
    "Compound the returns: 1.12 × 0.92 × 1.06 − 1 = 9.22%. Adding them (10%) ignores compounding; 3.33% is the arithmetic mean.", "c"],
  ["Which statement about the arithmetic and geometric mean returns of a volatile fund is most accurate?",
    ["The geometric mean is lower and better reflects compound growth", "The arithmetic mean is lower, because it ignores compounding", "Both are equal unless the fund has negative returns"],
    "The geometric mean is always ≤ the arithmetic mean (equal only if all returns are the same) and measures compound growth. The gap grows with volatility (R_G ≈ R̄ − σ²/2).", "r"],
  ["An investor invests a fixed $500 each quarter in a stock. Her average cost per share equals the:",
    ["Harmonic mean of the purchase prices", "Arithmetic mean of the purchase prices", "Geometric mean of the purchase prices"],
    "With a fixed amount invested each period, more shares are bought at low prices, so average cost per share is the harmonic mean of the prices.", "r"],
  ["Seven annual returns are −20%, 3%, 5%, 6%, 8%, 9% and 25%. A winsorized mean that replaces the single highest and lowest values with their nearest neighbours is closest to:",
    ["6.14%", "5.14%", "6.20%"],
    "Replace −20% with 3% and 25% with 9%: (3 + 3 + 5 + 6 + 8 + 9 + 9)/7 = 43/7 = 6.14%. The plain arithmetic mean is 5.14%; trimming the two extremes instead gives 31/5 = 6.20%.", "c"],
  ["An investor buys 100 shares at $20 at the start of year 1 and another 100 shares at $25 at the start of year 2. At the end of year 2 the price is $24 and she sells all 200 shares. No dividends are paid. Her money-weighted return is closest to:",
    ["4.55%", "9.54%", "−4.00%"],
    "Cash flows: t0 −2,000; t1 −2,500; t2 +4,800. Solving −2,000 − 2,500/(1 + r) + 4,800/(1 + r)² = 0 gives r ≈ 4.55%. It is below the TWR because more money was invested in the losing second year. (TWR: (25/20 × 24/25)^0.5 − 1 = 9.54%.)", "c"],
  ["Using the data in the previous question (shares bought at $20, then more at $25, all sold at $24 after two years), the annualized time-weighted return is closest to:",
    ["9.54%", "4.55%", "20.00%"],
    "Sub-period returns: 25/20 − 1 = 25% and 24/25 − 1 = −4%. TWR = (1.25 × 0.96)^(1/2) − 1 = (1.20)^0.5 − 1 = 9.54%.", "c"],
  ["A portfolio manager has no control over when clients add or withdraw money. To evaluate the manager's performance, the most appropriate measure is the:",
    ["Time-weighted return", "Money-weighted return", "Arithmetic mean of client returns"],
    "TWR removes the effect of external cash flows, so it isolates the manager's decisions. MWR rewards or penalizes the manager for client timing.", "r"],
  ["A client deposits a large sum just before a period of poor market returns. Compared with the account's time-weighted return, its money-weighted return will most likely be:",
    ["Lower", "Higher", "The same"],
    "More money is invested during the weak period, so the dollar-weighted IRR is pulled down below the time-weighted return.", "s"],
  ["An investment returned 1.8% over 3 months. Its annualized return is closest to:",
    ["7.40%", "7.20%", "5.40%"],
    "(1.018)⁴ − 1 = 7.40%. Multiplying by 4 (7.20%) ignores compounding.", "c"],
  ["A private equity investment returned 45% over 30 months. Its annualized return is closest to:",
    ["16.03%", "18.00%", "15.00%"],
    "Years = 2.5. (1.45)^(1/2.5) − 1 = 1.45^0.4 − 1 = 16.03%. Dividing 45% by 2.5 (18%) ignores compounding.", "c"],
  ["A stock's continuously compounded returns over three consecutive years are 6%, −2% and 9%. The stock's 3-year holding period return is closest to:",
    ["13.88%", "13.00%", "13.31%"],
    "Continuously compounded returns are additive: 6 − 2 + 9 = 13%. HPR = e^0.13 − 1 = 13.88%.", "c"],
  ["A bond fund's return before management fees is called its:",
    ["Gross return", "Net return", "Real return"],
    "Gross return is before management fees and other expenses (but after trading costs) and reflects investment skill; net return is after fees.", "r"],
  ["An investor in a 25% tax bracket earns a nominal return of 10% (all taxable) when inflation is 3%. Her after-tax real return is closest to:",
    ["4.37%", "6.80%", "5.10%"],
    "After-tax nominal = 10% × 0.75 = 7.5%. After-tax real = 1.075/1.03 − 1 = 4.37%. (6.80% is the pre-tax real return; 5.10% wrongly applies the tax to the real return.)", "c"],
  ["An investor buys a $200,000 portfolio using $120,000 of her own money and $80,000 borrowed at 6%. The portfolio returns 4%. Her leveraged return on equity is closest to:",
    ["2.67%", "4.00%", "5.33%"],
    "R_L = 4% + (80/120)(4% − 6%) = 4% − 1.33% = 2.67%. Check: gain 8,000 − interest 4,800 = 3,200 on 120,000 = 2.67%. Leverage hurts when the return is below the borrowing cost.", "c"],
];

window.GLOSSARY.push(
  ["Geometric mean return","[(1 + R1)(1 + R2)…(1 + Rn)]^(1/n) − 1. Compound growth rate over several periods; always ≤ the arithmetic mean.","l1rates"],
  ["Harmonic mean","n ÷ Σ(1/Xi). Average cost per share when equal amounts are invested periodically (cost averaging).","l1rates"],
  ["Money-weighted return (MWR)","The IRR of all portfolio cash flows. Affected by the size and timing of client deposits and withdrawals.","l1rates"],
  ["Time-weighted return (TWR)","Geometrically linked sub-period returns between cash flows. Removes the effect of client flows; used to evaluate managers and required by GIPS.","l1rates"],
  ["Leveraged return","R_L = R + (V_B ÷ V_E)(R − r_D): return on equity when part of the portfolio is financed with borrowing at r_D.","l1rates"],
  ["Effective annual rate (EAR)","(1 + stated rate/m)^m − 1. With continuous compounding: e^r − 1.","l1rates"],
  ["Interest rate components", "Real risk-free rate + inflation premium + default risk premium + liquidity premium + maturity premium.", "l1rates"],
  ["Holding period return (HPR)", "(P₁ − P₀ + D₁)/P₀; multi-period HPRs compound: Π(1 + Rₜ) − 1.", "l1rates"],
  ["Trimmed vs winsorized mean", "Trimmed drops the extremes; winsorized replaces them with the nearest remaining values.", "l1rates"],
  ["Annualized return", "(1 + R_period)^c − 1, c = periods per year (c < 1 for periods over a year).", "l1rates"],
  ["Continuously compounded return", "ln(1 + HPR) = ln(P₁/P₀); additive over time; HPR = e^r − 1.", "l1rates"],
  ["Gross vs net return", "Gross: before fees (after trading costs). Net: after fees.", "l1rates"],
  ["Real return", "(1 + nominal)/(1 + inflation) − 1.", "l1rates"]
);
