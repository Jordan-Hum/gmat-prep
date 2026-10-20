// CFA Level I · Alternative Investments · Learning module 2: Alternative Investment Performance and Returns.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1altperf = `
<p class="syl">CFA Level I · Alternative Investments (7–10%) · Learning module 2 of 7 · Alternative Investment Performance and Returns</p>
<p>Measuring how well an alternative investment has done is harder than for listed securities: cash flows are irregular, prices are estimated, fees are complex and leverage is common. This lesson covers the private fund life cycle and the J-curve, IRR vs multiple of invested capital, fee calculations (management fees, incentive fees, hurdles and high-water marks), the effect of leverage, and the biases in reported returns.</p>

<h3>1. The fund life cycle and the J-curve</h3>
<ul>
  <li><b>Commitment</b>: LPs commit capital. <b>Deployment</b>: the GP calls capital over several years as it invests. <b>Distribution</b>: the GP sells (exits) investments and returns cash.</li>
  <li><b>J-curve</b>: returns are negative in the early years (fees and costs come first, and investments are held at cost or written down) and turn positive as investments mature and are exited.</li>
</ul>

<h3>2. Measuring returns <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Internal rate of return (IRR)</b>: the money-weighted return that sets the PV of all cash flows (capital calls negative, distributions and the ending value positive) to zero. Preferred for private funds because the GP controls the timing of cash flows.</li>
  <li><b>Multiple of invested capital (MOIC)</b> = (distributions + remaining value) / paid-in capital. Simple, but ignores <b>timing</b>.</li>
</ul>
<div class="ex"><b>Example:</b> an LP pays in 50 at time 0 and 30 at year 1, receives 20 at year 3 and 120 at year 5.<br>MOIC = (20 + 120) / 80 = <b>1.75×</b>. IRR (CF0 = −50, C01 = −30, C02 = 0, C03 = 20, C04 = 0, C05 = 120) = <b>13.8%</b>.<br>If all 80 had been invested at time 0 and 140 received at year 5, MOIC would still be 1.75×, but IRR would be only 11.8%: the timing matters.<br>Another fund: paid-in 50, distributions 40, remaining NAV 45 → MOIC = 85/50 = <b>1.7×</b>.</div>
<h4>Risk measures</h4>
<ul>
  <li>Returns of alternatives are often <b>not normally distributed</b> (skewed, fat-tailed), so the Sharpe ratio can mislead.</li>
  <li>Alternatives: <b>Sortino ratio</b> (uses downside deviation), <b>maximum drawdown</b> (largest peak-to-trough fall: from 150 to 105 = 30%), and the <b>Calmar ratio</b> (return / maximum drawdown).</li>
</ul>

<h3>3. Fee calculations <span class="hot">Highly tested</span></h3>
<p>Check the fee terms carefully: management fee on beginning or ending assets (or committed capital), and incentive fee calculated net of or gross of the management fee, with or without a hurdle and high-water mark.</p>
<div class="ex"><b>Example 1:</b> a hedge fund starts at $200m and ends at $230m before fees. Management fee 1.5% of beginning assets; incentive fee 15% of gains net of the management fee.<br>Management fee = 1.5% × 200 = $3.0m.<br>Incentive fee = 15% × (230 − 200 − 3) = $4.05m.<br>Ending value to investors = 230 − 3 − 4.05 = 222.95 → net return = <b>11.5%</b> (vs 15% gross).<br><b>Example 2 (hurdles):</b> a $100m fund earns 15%; hurdle 8%; incentive 20%. Hard hurdle: 20% × 7% × 100 = <b>$1.4m</b>. Soft hurdle: 20% × 15% × 100 = <b>$3.0m</b>.<br><b>Example 3 (high-water mark):</b> the fund's high-water mark is $250m. It ends a year at $240m: no incentive fee. The next year it ends at $270m: incentive fee = 20% × (270 − 250) = <b>$4.0m</b>, not on the full gain from 240.</div>
<div class="trap"><b>Trap:</b> net-of-fees returns can be far below gross returns. Read whether the fee base is beginning or ending value, and whether the incentive fee is net of the management fee.</div>

<h3>4. Leverage</h3>
<div class="formula">Return on equity with leverage = r + (D/E) × (r − r<sub>D</sub>), where r = return on total assets and r<sub>D</sub> = borrowing cost</div>
<div class="ex"><b>Example:</b> assets earn 8%, borrowing costs 5%, and half the position is borrowed (D/E = 1): return on equity = 8% + 1 × (8% − 5%) = <b>11%</b>. If assets earned only 2%, the levered return would be −1%: leverage magnifies losses too.</div>

<h3>5. Biases and valuation issues <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Appraisal smoothing</b>: real estate and private equity values based on appraisals or models change slowly, so reported returns <b>understate volatility and correlation</b> with other assets, making the asset look safer and more diversifying than it is.</li>
  <li><b>Survivorship bias</b>: hedge fund indexes drop funds that close (usually after poor results), so index returns are <b>overstated</b>.</li>
  <li><b>Backfill bias</b>: funds that join an index add their (usually good) past returns, again <b>overstating</b> performance.</li>
  <li>Redemption terms (lockups, notice periods, gates) mean investors may not be able to get out at reported values.</li>
</ul>

<div class="how"><b>How it's tested:</b> the J-curve, MOIC and IRR calculations and their differences, net return after management and incentive fees, hard vs soft hurdles, high-water marks, levered returns, and the effects of appraisal smoothing, survivorship bias and backfill bias.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe the private fund life cycle and the J-curve.</li>
  <li>Calculate and interpret IRR and MOIC.</li>
  <li>Calculate fees and net returns with hurdles and high-water marks.</li>
  <li>Calculate the effect of leverage on returns.</li>
  <li>Explain biases in reported returns of alternative investments.</li>
</ul></div>
`;

window.QB_HARD.l1altperf = [
  ["A hedge fund starts the year at $100M and ends at $120M before fees. It charges a 2% management fee on beginning assets and a 20% incentive fee on gains net of the management fee. The investor's net return is closest to:",
    ["14.4%", "14.0%", "16.0%"],
    "Management fee = $2M. Incentive fee = 20% × ($20M − $2M) = $3.6M. Net = (120 − 2 − 3.6 − 100) ÷ 100 = 14.4%. 14.0% computes the incentive fee on gross gains.", "c"],
  ["A fund with a $100M high-water mark fell to $90M last year and rose to $108M this year. Ignoring the management fee, a 20% incentive fee this year is closest to:",
    ["$1.6M", "$3.6M", "$0"],
    "The incentive fee applies only to gains above the high-water mark: 20% × ($108M − $100M) = $1.6M.", "c"],
  ["A fund has a hard hurdle rate of 8% and earns 15% for the year. The incentive fee applies to:",
    ["Only the 7% return above the hurdle", "The full 15% return earned for the year", "None of the return"],
    "A hard hurdle means fees are charged only on returns above the hurdle. With a soft hurdle, once 8% is exceeded the fee applies to the whole 15%.", "c"],
  ["Using appraisal-based values to measure real estate returns tends to:",
    ["Understate volatility and correlation with other assets", "Overstate volatility and correlation with other assets", "Produce unbiased estimates of risk"],
    "Appraisals are infrequent and anchored to prior values, smoothing returns and making the asset look less risky and less correlated than it is.", "r"],
  ["A private equity investor contributed $20M. The fund has distributed $10M and the remaining investments are valued at $30M. The multiple of invested capital (MOIC) is closest to:",
    ["2.0×", "1.5×", "0.5×"],
    "MOIC = (realized + unrealized value) ÷ invested capital = (10 + 30) ÷ 20 = 2.0×. It ignores the timing of cash flows.", "c"],
  ["In private equity, the J-curve effect describes:",
    ["Early negative returns, then gains as deals mature", "Steadily rising returns starting from the first year of the fund", "Returns that fall sharply when the fund is liquidated"],
    "Fees, setup costs and early write-downs make early IRRs negative; value creation and exits later push returns up.", "r"],
  ["An LP pays in 50 at time 0 and 30 at year 1 and receives 20 at year 3 and 120 at year 5. The fund's MOIC is:",
    ["1.75×", "2.80×", "1.40×"],
    "(20 + 120) / (50 + 30) = 1.75×. 2.80× divides by the first call only.", "c"],
  ["For the same cash flows (−50 at 0, −30 at 1, +20 at 3, +120 at 5), the IRR is closest to:",
    ["13.8%", "11.8%", "15.0%"],
    "Using the cash flow worksheet: IRR = 13.8%. 11.8% would apply if all 80 were invested at time 0.", "c"],
  ["Two funds have the same MOIC, but one returned its cash much sooner. The faster fund most likely has:",
    ["A higher IRR", "A lower IRR", "The same IRR"],
    "MOIC ignores timing; returning cash sooner raises IRR.", "r"],
  ["A hedge fund starts at $200 million and ends at $230 million before fees. It charges 1.5% of beginning assets and a 15% incentive fee on gains net of the management fee. The investor's net return is closest to:",
    ["11.5%", "12.75%", "15.0%"],
    "Management fee 3.0; incentive 15% × 27 = 4.05; (230 − 7.05)/200 − 1 = 11.5%. 12.75% ignores the management fee.", "c"],
  ["A $100 million fund earns 15% with an 8% soft hurdle and a 20% incentive fee (ignore the management fee). The incentive fee is:",
    ["$3.0 million", "$1.4 million", "$0"],
    "A soft hurdle, once met, applies the fee to all profits: 20% × 15 = $3.0m. A hard hurdle would give $1.4m.", "c"],
  ["A fund's high-water mark is $250 million. It ends the year at $270 million after starting at $240 million. With a 20% incentive fee, the fee is:",
    ["$4.0 million", "$6.0 million", "$0"],
    "The fee applies only above the high-water mark: 20% × (270 − 250) = $4.0m.", "c"],
  ["Assets earn 8%, borrowing costs 5%, and an investor funds half the position with debt (D/E = 1). The return on equity is:",
    ["11%", "8%", "13%"],
    "8% + 1 × (8% − 5%) = 11%.", "c"],
  ["Hedge fund index returns tend to be overstated because funds that close are removed from the index. This is:",
    ["Survivorship bias", "Backfill bias", "Appraisal smoothing"],
    "Dropping failed funds leaves mostly successful ones in the history.", "r"],
  ["A fund joining an index adds its strong prior returns to the index history. This creates:",
    ["Backfill bias", "Survivorship bias", "Look-ahead smoothing"],
    "Funds usually report to indexes after good results, overstating past index returns.", "r"],
  ["A fund's value peaked at 150 and later fell to 105 before recovering. Its maximum drawdown is:",
    ["30%", "43%", "45%"],
    "(150 − 105) / 150 = 30%. 43% divides by the trough.", "c"],
];

window.GLOSSARY.push(
  ["High-water mark","Incentive fees only on gains above the fund's previous peak value.","l1altperf"],
  ["MOIC","(Realized + unrealized value) ÷ invested capital. Ignores timing; IRR captures it.","l1altperf"],
  ["J-curve","Early negative private equity returns (fees, costs), followed by gains as investments mature.","l1altperf"],
  ["IRR vs MOIC", "Money-weighted return including timing vs total value / paid-in, ignoring timing.", "l1altperf"],
  ["Survivorship and backfill bias", "Dropping failed funds and adding good past returns both overstate index returns.", "l1altperf"],
  ["Maximum drawdown", "Largest peak-to-trough fall in value.", "l1altperf"]
);
