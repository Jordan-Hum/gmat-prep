// CFA Level I · Quantitative Methods · Learning module 2: Time Value of Money in Finance.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1tvm = `
<p class="syl">CFA Level I · Quantitative Methods · Learning module 2 of 11 · Time Value of Money in Finance</p>
<p>Time value of money (TVM) is the single most-used tool on the Level I exam. A dollar today is worth more than a dollar later because it can be invested to earn a return. This lesson starts with the mechanics (future and present values, annuities, perpetuities, compounding), then applies them the way the curriculum does: pricing bonds and stocks, backing out implied returns and growth rates, and the <b>cash flow additivity</b> principle behind no-arbitrage pricing. You'll reuse all of it in Corporate Issuers (NPV/IRR), Equity (dividend discount models), Fixed Income (bond pricing) and Derivatives.</p>

<h3>1. Future value and present value of a single sum</h3>
<div class="formula">FV = PV × (1 + r)ᴺ · PV = FV / (1 + r)ᴺ</div>
<p>r is the interest rate per period and N the number of periods. Compounding means interest earns interest.</p>
<div class="ex"><b>Examples:</b> $1,000 invested for 5 years at 6% grows to 1,000 × 1.06⁵ = $1,338.23. $10,000 to be received in 8 years, discounted at 5%, is worth 10,000/1.05⁸ = $6,768.39 today.</div>
<ul>
  <li>Higher rate or longer time → higher FV and lower PV.</li>
  <li>Solving for N: N = ln(FV/PV)/ln(1 + r). $1,000 doubles at 8% in ln 2/ln 1.08 = 9.01 years (the "rule of 72" gives 72/8 = 9).</li>
  <li>Solving for r: r = (FV/PV)^(1/N) − 1. Paying $800 today for $1,000 in 5 years implies (1.25)^0.2 − 1 = 4.56% a year.</li>
</ul>
<div class="calc"><b>BA II Plus:</b> set [2nd][P/Y] = 1 and [2nd][CLR TVM] before each problem. Enter four of N, I/Y, PV, PMT, FV and [CPT] the fifth. Money paid out is negative, money received positive (e.g. PV = −1,000, FV comes out positive).</div>

<h3>2. Compounding frequency and the effective annual rate <span class="hot">Highly tested</span></h3>
<p>Rates are usually quoted as a <b>stated annual rate</b> (also called the nominal or quoted rate), r_s, with m compounding periods a year. The rate per period is r_s/m and there are m × N periods.</p>
<div class="formula">FV = PV × (1 + r_s/m)^(m×N) · Effective annual rate EAR = (1 + r_s/m)^m − 1 · Continuous: EAR = e^(r_s) − 1</div>
<ul>
  <li>12% compounded monthly: EAR = 1.01¹² − 1 = 12.68%. Quarterly 8%: 1.02⁴ − 1 = 8.24%. Continuous 8%: e^0.08 − 1 = 8.33%.</li>
  <li>More frequent compounding → higher EAR for the same stated rate; continuous compounding gives the maximum.</li>
  <li>To compare loans or deposits with different compounding, compare their EARs.</li>
</ul>
<div class="trap"><b>Trap:</b> with monthly payments, both N and I/Y must be monthly: a 30-year mortgage at 6% is N = 360, I/Y = 0.5.</div>

<h3>3. Annuities and perpetuities <span class="hot">Highly tested</span></h3>
<p>An <b>annuity</b> is a series of equal cash flows at equal intervals. In an <b>ordinary annuity</b> the first payment is one period from now (end of each period); in an <b>annuity due</b> it's today (start of each period).</p>
<div class="formula">PV (ordinary) = A × [1 − (1 + r)^−N] / r · FV (ordinary) = A × [(1 + r)ᴺ − 1] / r · Annuity due = ordinary value × (1 + r)</div>
<div class="ex"><b>Examples:</b> $500 a year for 10 years at 7%: PV = $3,511.79 (ordinary) or 3,511.79 × 1.07 = $3,757.62 (due). Saving $2,000 at the end of each year for 20 years at 6% grows to $73,571.18.</div>
<div class="calc"><b>BA II Plus:</b> N = 10, I/Y = 7, PMT = −500, FV = 0, [CPT][PV] → 3,511.79. For an annuity due press [2nd][BGN][2nd][SET] (shows "BGN") first; switch back to END afterwards.</div>
<h4>Loan payments and amortization</h4>
<p>A fully amortizing loan is an ordinary annuity whose PV is the loan amount. Solve for PMT. Each payment covers that period's interest (rate × opening balance) and the rest repays principal, so the interest share falls over time.</p>
<div class="ex"><b>Example:</b> $250,000 mortgage, 30 years, 6% compounded monthly: N = 360, I/Y = 0.5, PV = 250,000 → PMT = $1,498.88 a month. A $10,000 three-year loan at 8% (annual payments): PMT = $3,880.34; year 1 interest = $800, principal repaid = $3,080.34.</div>
<h4>Deferred annuities</h4>
<p>If payments start later, value the annuity at the date one period before the first payment, then discount that value back to today.</p>
<div class="ex"><b>Example:</b> $1,000 a year received at the end of years 4 to 8 (5 payments), 7%: PV at t = 3 = $4,100.20; PV today = 4,100.20/1.07³ = $3,346.98.</div>
<h4>Perpetuities</h4>
<div class="formula">PV of a perpetuity = A / r · PV of a growing perpetuity = A₁ / (r − g), with r &gt; g</div>
<p>A perpetuity pays forever (e.g. a preferred share with a fixed dividend). A $5 annual preferred dividend at an 8% required return is worth 5/0.08 = $62.50.</p>
<h4>Uneven cash flows</h4>
<p>Discount each cash flow separately and add (or use the calculator's CF worksheet). $100, $200 and $300 at the end of years 1–3, at 10%: PV = 90.91 + 165.29 + 225.39 = $481.59.</p>

<h3>4. Pricing fixed-income instruments <span class="hot">Highly tested</span></h3>
<p>A bond's price is the present value of its promised cash flows, discounted at the market discount rate (its yield).</p>
<ul>
  <li><b>Discount (zero-coupon) bond</b>: one payment at maturity. PV = FV/(1 + r)ᴺ. A $1,000 zero due in 5 years at 4% = $821.93. It's priced below par; the return comes entirely from the price rising to par.</li>
  <li><b>Coupon bond</b>: periodic coupons plus par at maturity. PV = Σ PMT/(1 + r)ᵗ + FV/(1 + r)ᴺ.</li>
  <li><b>Perpetual bond</b>: coupons forever, PV = PMT/r.</li>
  <li><b>Amortizing bond/loan</b>: level payments that include principal (an annuity).</li>
</ul>
<div class="ex"><b>Example:</b> A 3-year, 5% annual-coupon bond with par $1,000 when the market rate is 6%: PV = 50/1.06 + 50/1.06² + 1,050/1.06³ = $973.27. Because the coupon rate (5%) is below the market rate (6%), it trades at a <b>discount</b>. With semiannual coupons, halve the rate and coupon and double the periods: a 5-year 6% semiannual bond at a 7% yield: N = 10, I/Y = 3.5, PMT = 30, FV = 1,000 → $958.42.</div>
<p><b>Price–yield rules</b>: coupon rate = yield → price = par; coupon &lt; yield → discount; coupon &gt; yield → premium. Price and yield move in opposite directions.</p>
<h4>Implied return: yield to maturity</h4>
<p>Given a bond's price and cash flows, the <b>yield to maturity (YTM)</b> is the single discount rate (IRR) that equates them. It's the investor's return if the bond is held to maturity, all payments are made on time, and coupons are reinvested at the YTM.</p>
<div class="ex"><b>Example:</b> A 4-year, 5% annual-coupon bond priced at $950: N = 4, PV = −950, PMT = 50, FV = 1,000 → I/Y = 6.46%.</div>

<h3>5. Pricing equity instruments <span class="hot">Highly tested</span></h3>
<p>A share's value is the present value of its expected future dividends, discounted at the required return on equity, r.</p>
<ul>
  <li><b>Preferred stock</b> (fixed dividend, no maturity): V = D/r. A $4 dividend at 6.5%: $61.54.</li>
  <li><b>Constant growth (Gordon growth) model</b>: dividends grow at g forever:</li>
</ul>
<div class="formula">V₀ = D₁ / (r − g) = D₀ (1 + g) / (r − g), requires r &gt; g</div>
<div class="ex"><b>Example:</b> Last dividend D₀ = $2.00, g = 4%, r = 9%. D₁ = 2.08; V₀ = 2.08/0.05 = $41.60.</div>
<ul>
  <li><b>Multistage (changing growth)</b>: forecast dividends during the high-growth stage, compute a Gordon <b>terminal value</b> at the start of stable growth, and discount everything.</li>
</ul>
<div class="ex"><b>Example:</b> D₀ = $1.00; growth 10% for two years, then 4% forever; r = 9%. D₁ = 1.10, D₂ = 1.21, D₃ = 1.2584. Terminal value at t = 2: 1.2584/(0.09 − 0.04) = 25.168. V₀ = 1.10/1.09 + (1.21 + 25.168)/1.09² = 1.009 + 22.201 = $23.21.</div>
<h4>Implied return and implied growth</h4>
<p>Rearranging the Gordon model lets you back out what the market price implies:</p>
<div class="formula">Implied required return r = D₁/P₀ + g (dividend yield + growth) · Implied growth g = r − D₁/P₀</div>
<div class="ex"><b>Examples:</b> P₀ = $42, D₀ = $2.00, g = 5%: r = 2.10/42 + 5% = 10%. P₀ = $50, D₁ = $2.00, r = 8%: implied g = 8% − 4% = 4%.</div>
<div class="trap"><b>Trap:</b> the numerator is <b>next year's</b> dividend D₁. If the question gives the dividend "just paid", multiply by (1 + g) first.</div>

<h3>6. Cash flow additivity and no-arbitrage <span class="hot">Highly tested</span></h3>
<p>The <b>cash flow additivity principle</b>: the PV of a stream of cash flows equals the sum of the PVs of its parts, so cash flows can be split up and recombined. If two sets of cash flows are identical, they must have the same price; otherwise there's an <b>arbitrage</b> (a riskless profit with no net investment). This <b>no-arbitrage condition</b> is used to price:</p>
<ul>
  <li><b>Forward interest rates</b>: investing for two years at the 2-year spot rate must give the same result as investing for one year and rolling into a 1-year forward rate: (1 + S₂)² = (1 + S₁)(1 + F₁,₁). With S₁ = 3% and S₂ = 4%: F₁,₁ = 1.04²/1.03 − 1 = 5.01%.</li>
  <li><b>Forward exchange rates</b>: converting at spot and investing abroad must equal investing at home and converting at the forward: F = S × (1 + r_price)/(1 + r_base), with the rates of the currencies in the quote. Spot USD/EUR 1.1000, 1-year USD rate 5%, EUR rate 3%: F = 1.10 × 1.05/1.03 = 1.1214.</li>
  <li><b>Option values</b>: an option can be replicated with the underlying and borrowing or lending, so it must cost the same as the replicating portfolio.</li>
</ul>
<div class="ex"><b>Example (replication):</b> A share at $100 will be worth $120 or $90 in one year; r = 5%. A call with exercise price $100 pays $20 or $0. Buy 20/30 = 0.667 shares (pays $80 or $60) and borrow the PV of $60 (= $57.14): this portfolio pays $20 or $0, exactly like the call. So the call is worth 66.67 − 57.14 = $9.52.</div>

<div class="how"><b>How it's tested:</b> straight calculations (FV, PV, EAR, annuity payments, deferred annuities, bond and share values, implied YTM, implied growth, forward rates) and short "which is higher" reasoning (annuity due vs ordinary, premium vs discount). Watch the units (monthly vs annual), the timing (BGN vs END) and whether a dividend is D₀ or D₁.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Compute FV and PV of single sums, ordinary annuities, annuities due, perpetuities and uneven cash flows, with any compounding frequency.</li>
  <li>Convert stated rates to effective annual rates (including continuous compounding).</li>
  <li>Price zero-coupon, coupon and perpetual bonds and solve for YTM.</li>
  <li>Value preferred stock and common stock with constant and multistage growth, and back out implied returns and growth rates.</li>
  <li>Use cash flow additivity to derive forward rates, forward exchange rates and a replicated option value.</li>
</ul></div>
`;

window.QB_HARD.l1tvm = [
  ["Compared with an otherwise identical ordinary annuity, the present value of an annuity due is:",
    ["Higher by a factor of (1 + r)", "Lower by a factor of (1 + r)", "The same, since the payments are identical"],
    "Each annuity-due payment arrives one period earlier, so every cash flow is discounted one period less: PV(due) = PV(ordinary) × (1 + r).", "r"],
  ["A stock is expected to pay a dividend of $2.10 next year, growing at 4% a year indefinitely. If the required return is 9%, its value is closest to:",
    ["$42.00", "$43.68", "$23.33"],
    "Growing perpetuity: PV = D1 ÷ (r − g) = 2.10 ÷ (0.09 − 0.04) = $42.00. $43.68 wrongly grows the $2.10 again.", "c"],
  ["An investor deposits $5,000 at 4.5% compounded annually. After 12 years the account will be worth closest to:",
    ["$8,479", "$7,700", "$8,567"],
    "FV = 5,000 × 1.045¹² = $8,479.41. Simple interest gives 5,000 × (1 + 0.045 × 12) = $7,700.", "c"],
  ["A bank offers 6% compounded monthly; another offers 6.1% compounded annually. Which statement is correct?",
    ["The monthly-compounded account has the higher effective rate", "The annually-compounded account has the higher effective rate", "Both have the same effective annual rate"],
    "EAR of 6% monthly = (1.005)¹² − 1 = 6.17%, higher than 6.10%.", "c"],
  ["A stated annual rate of 10% compounded continuously equals an effective annual rate closest to:",
    ["10.52%", "10.47%", "10.00%"],
    "EAR = e^0.10 − 1 = 10.52%. (10.47% is quarterly compounding.)", "c"],
  ["To accumulate $500,000 in 25 years at 6% a year, an investor must save at the end of each year an amount closest to:",
    ["$9,113", "$20,000", "$8,597"],
    "FV of an ordinary annuity: PMT = 500,000 / [(1.06²⁵ − 1)/0.06] = 500,000/54.865 = $9,113. Dividing 500,000 by 25 ignores interest; $8,597 would be the payment if saving at the start of each year (annuity due).", "c"],
  ["A $30,000 car loan is repaid monthly over 5 years at a stated annual rate of 6%. The monthly payment is closest to:",
    ["$580", "$500", "$7,122"],
    "N = 60, I/Y = 0.5, PV = 30,000, FV = 0 → PMT = $579.98. (7,122 is an annual payment at 6%.)", "c"],
  ["A retiree will receive $1,000 at the end of each of years 4 through 8. At a 7% discount rate, the present value of these payments is closest to:",
    ["$3,347", "$4,100", "$3,581"],
    "Value the 5-payment annuity at t = 3: $4,100.20. Discount 3 years: 4,100.20/1.07³ = $3,346.98.", "c"],
  ["Which of the following has the highest present value at a positive discount rate, given equal payment amounts and number of payments?",
    ["An annuity due", "An ordinary annuity", "A deferred annuity starting in year 3"],
    "Each annuity-due payment arrives one period earlier than in an ordinary annuity, so its PV is higher by a factor of (1 + r); a deferred annuity's payments arrive later still.", "r"],
  ["A preferred share pays a fixed annual dividend of $3.50 forever. If investors require 7%, its value is closest to:",
    ["$50.00", "$24.50", "$53.50"],
    "Perpetuity: V = D/r = 3.50/0.07 = $50.00.", "c"],
  ["A 4-year, 3% annual-coupon bond (par $1,000) is priced to yield 5%. Its price is closest to:",
    ["$929.08", "$1,000.00", "$1,072.60"],
    "N = 4, I/Y = 5, PMT = 30, FV = 1,000 → PV = $929.08. The coupon is below the yield, so it trades at a discount.", "c"],
  ["A bond whose coupon rate is above its yield to maturity trades:",
    ["At a premium to par", "At a discount to par", "At par"],
    "Investors pay more than par for coupons that exceed the market rate, so the price is above par.", "r"],
  ["A 5-year zero-coupon bond with a face value of $1,000 is priced at $800. Its implied annual return (yield to maturity) is closest to:",
    ["4.56%", "5.00%", "4.00%"],
    "(1,000/800)^(1/5) − 1 = 1.25^0.2 − 1 = 4.56%. Dividing the 25% total gain by 5 gives 5.00%.", "c"],
  ["A 4-year, 5% annual-coupon bond (par $1,000) trades at $950. Its yield to maturity is closest to:",
    ["6.46%", "5.26%", "5.00%"],
    "N = 4, PV = −950, PMT = 50, FV = 1,000 → CPT I/Y = 6.46%. (5.26% is the current yield, 50/950.)", "c"],
  ["A stock just paid a dividend of $2.00. Dividends are expected to grow at 5% a year forever and investors require 10%. Its value is closest to:",
    ["$42.00", "$40.00", "$20.00"],
    "D₁ = 2.00 × 1.05 = 2.10. V₀ = 2.10/(0.10 − 0.05) = $42.00. Using D₀ gives $40.00.", "c"],
  ["A stock trades at $60 and is expected to pay a dividend of $3.00 next year. If its required return is 10%, the dividend growth rate implied by the price is closest to:",
    ["5.0%", "4.5%", "15.0%"],
    "g = r − D₁/P₀ = 10% − 3/60 = 10% − 5% = 5.0%.", "c"],
  ["A stock trades at $42. It just paid a $2.00 dividend, which is expected to grow at 5% a year. The implied required return is closest to:",
    ["10.0%", "9.8%", "4.8%"],
    "r = D₁/P₀ + g = (2.00 × 1.05)/42 + 5% = 5.0% + 5.0% = 10.0%. Using D₀ gives 9.8%.", "c"],
  ["A company just paid a $1.00 dividend. Dividends will grow 10% a year for two years, then 4% forever. With a required return of 9%, the share's value is closest to:",
    ["$23.21", "$20.80", "$25.17"],
    "D₁ = 1.10, D₂ = 1.21, D₃ = 1.2584. TV₂ = 1.2584/0.05 = 25.168. V₀ = 1.10/1.09 + (1.21 + 25.168)/1.09² = $23.21. (25.17 is the undiscounted terminal value.)", "c"],
  ["The 1-year spot rate is 2.0% and the 3-year spot rate is 3.5% (annual compounding). The 2-year rate starting one year from now, F₁,₂, is closest to:",
    ["4.26%", "2.75%", "3.50%"],
    "(1.035)³ = (1.02)(1 + F)² → (1 + F)² = 1.108718/1.02 = 1.086978 → F = 4.26%. (2.75% is the average of the two spot rates; 3.50% is the 3-year spot rate.)", "c"],
  ["Spot USD/EUR is 1.1000 (USD per EUR). One-year interest rates are 5% in USD and 3% in EUR. The no-arbitrage 1-year forward rate (USD per EUR) is closest to:",
    ["1.1214", "1.0790", "1.1220"],
    "F = S × (1 + r_USD)/(1 + r_EUR) = 1.10 × 1.05/1.03 = 1.1214. The lower-yielding EUR trades at a forward premium.", "c"],
  ["A share worth $100 will be worth either $120 or $90 in one year, and the risk-free rate is 5%. Using replication, a 1-year call option with an exercise price of $100 is worth closest to:",
    ["$9.52", "$13.33", "$6.67"],
    "Hedge ratio = (20 − 0)/(120 − 90) = 0.667 shares. The shares pay $80 or $60, so borrow PV(60) = 57.14. Call = 66.67 − 57.14 = $9.52.", "c"],
  ["The cash flow additivity principle is most directly the basis for:",
    ["Pricing derivatives and forward rates by no-arbitrage", "Choosing between mutually exclusive capital projects", "Estimating dividend growth from ROE"],
    "Because cash flows can be split and recombined, identical cash flows must have identical prices; this no-arbitrage condition underlies forward rates, forward FX rates and option replication.", "r"],
];

window.GLOSSARY.push(
  ["Effective annual rate (from stated rate)", "(1 + r_s/m)^m − 1; continuous: e^(r_s) − 1.", "l1tvm"],
  ["Ordinary annuity vs annuity due", "Ordinary: payments at period end. Due: payments at the start; value = ordinary × (1 + r).", "l1tvm"],
  ["Perpetuity", "PV = A/r; growing perpetuity A₁/(r − g).", "l1tvm"],
  ["Gordon growth model", "V₀ = D₁/(r − g); implied r = D₁/P₀ + g; implied g = r − D₁/P₀.", "l1tvm"],
  ["Yield to maturity", "The IRR that equates a bond's price with its promised cash flows.", "l1tvm"],
  ["Cash flow additivity", "PV of a stream = sum of PVs of its parts; identical cash flows must have the same price (no arbitrage).", "l1tvm"],
  ["Implied forward rate", "(1 + S₂)² = (1 + S₁)(1 + F₁,₁).", "l1tvm"]
);
