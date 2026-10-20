// CFA Level I · Financial Statement Analysis · Learning module 8: Topics in Long-Term Liabilities and Equity.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1ltl = `
<p class="syl">CFA Level I · Financial Statement Analysis · Learning module 8 of 12 · Topics in Long-Term Liabilities and Equity</p>
<p>This lesson covers four topics that change a company's reported leverage and expenses: <b>bonds</b> (the effective interest method), <b>leases</b> (IFRS 16 and US GAAP), <b>pensions</b> (defined contribution vs defined benefit) and <b>share-based compensation</b>. Bond accounting and leases are the most tested; expect calculations of interest expense and carrying amounts.</p>

<h3>1. Bonds payable <span class="hot">Highly tested</span></h3>
<p>A bond is initially recorded at its <b>issue price</b> (the present value of its cash flows at the market rate on issue date). Afterwards it's carried at <b>amortized cost</b> using the <b>effective interest method</b>:</p>
<div class="formula">Interest expense = market rate at issue × opening carrying amount · Closing carrying amount = opening + interest expense − coupon paid</div>
<ul>
  <li><b>Discount bond</b> (coupon rate &lt; market rate): issued below par. Interest expense &gt; coupon; the discount is amortized, so the carrying amount <b>rises</b> toward par.</li>
  <li><b>Premium bond</b> (coupon rate &gt; market rate): issued above par. Interest expense &lt; coupon; the carrying amount <b>falls</b> toward par.</li>
  <li><b>Zero-coupon bond</b>: all interest expense is amortization of the discount; no cash interest until maturity.</li>
</ul>
<div class="ex"><b>Example (discount):</b> 5-year bond, par $1,000, 5% annual coupon, market rate 6% at issue → issue price = $957.88.
<br>Year 1: interest expense = 6% × 957.88 = $57.47; coupon paid $50; discount amortized $7.47; closing carrying amount = $965.35.
<br><b>Example (premium):</b> same bond with a 7% coupon → issue price $1,042.12; year 1 interest expense $62.53 &lt; coupon $70; carrying amount falls to $1,034.65.</div>
<ul>
  <li><b>Cash flow statement</b>: issue proceeds are a financing inflow; repaying principal is a financing outflow. Under US GAAP the coupon paid is an operating outflow (IFRS: operating or financing). For a discount bond, the cash coupon is below interest expense, so CFO looks better than the expense suggests (and for a zero-coupon bond, no interest ever hits CFO; the repayment is all financing).</li>
  <li>The <b>straight-line</b> method (equal amortization each period) is allowed under US GAAP only if not materially different; IFRS requires the effective interest method.</li>
  <li><b>Fair value option</b>: companies may elect to carry debt at fair value; under IFRS and US GAAP, changes due to the company's own credit risk go to OCI.</li>
  <li><b>Derecognition</b>: when debt is repaid early, the gain or loss = carrying amount − amount paid, reported in the income statement.</li>
  <li><b>Covenants</b>: affirmative (must do, e.g. maintain insurance, provide statements) and negative (must not, e.g. exceed a leverage ratio, sell key assets, pay large dividends). Breaches can trigger default; analysts check how close the company is to its covenant limits (disclosed in the notes, with debt maturities and rates).</li>
</ul>

<h3>2. Leases <span class="hot">Highly tested</span></h3>
<p>A lease gives the lessee the right to use an asset for a period in exchange for payments. Leasing can be cheaper and more flexible than buying and conserves cash.</p>
<h4>Lessee accounting</h4>
<table>
  <tr><th></th><th>IFRS 16 (single model)</th><th>US GAAP finance lease</th><th>US GAAP operating lease</th></tr>
  <tr><td>Balance sheet</td><td colspan="3"><b>Right-of-use (ROU) asset</b> and <b>lease liability</b> = PV of lease payments (all three)</td></tr>
  <tr><td>Income statement</td><td>Depreciation of ROU asset + interest on liability (front-loaded total expense)</td><td>Depreciation + interest (front-loaded)</td><td><b>Single straight-line lease expense</b></td></tr>
  <tr><td>Cash flow statement</td><td>Principal: financing; interest: operating or financing</td><td>Principal: financing; interest: operating</td><td><b>Whole payment: operating</b></td></tr>
</table>
<ul>
  <li>Exemptions: short-term leases (12 months or less) and, under IFRS, low-value assets can be expensed straight-line with nothing on the balance sheet.</li>
  <li>Under US GAAP, a lease is a <b>finance lease</b> if it effectively transfers ownership: ownership transfers at the end, a purchase option the lessee is reasonably certain to exercise, the term is the major part of the asset's life, the PV of payments is substantially all of its fair value, or the asset is so specialized only the lessee can use it. Otherwise it's an operating lease.</li>
</ul>
<div class="ex"><b>Example:</b> 5-year lease, $10,000 paid at the end of each year, discount rate 6%. Lease liability and ROU asset = PV = $42,123.64.
<br>IFRS (or US GAAP finance lease), year 1: interest = 6% × 42,123.64 = $2,527.42; depreciation = 42,123.64/5 = $8,424.73; total expense $10,952.15 (more than the $10,000 payment; expense falls in later years). Liability at year-end = 42,123.64 + 2,527.42 − 10,000 = $34,651.06. CFO falls by $2,527 (interest), CFF by $7,473 (principal).
<br>US GAAP operating lease: lease expense $10,000 each year; CFO falls by $10,000.</div>
<p>Analysis: compared with an otherwise identical US GAAP operating lease, an IFRS 16 lessee reports <b>higher EBITDA and operating income</b> (interest isn't an operating expense), <b>higher CFO</b> and the same total cash flow. Both put the liability on the balance sheet, raising debt ratios relative to the old off-balance-sheet treatment.</p>
<h4>Lessor accounting</h4>
<ul>
  <li><b>Finance lease</b> (sales-type or direct financing under US GAAP): the lessor derecognizes the asset and records a lease receivable (net investment); earns interest income (sales-type may also recognize selling profit at the start).</li>
  <li><b>Operating lease</b>: the lessor keeps the asset on its balance sheet, depreciates it and recognizes lease income (usually straight-line).</li>
</ul>

<h3>3. Pensions and other post-employment benefits</h3>
<table>
  <tr><th></th><th>Defined contribution (DC)</th><th>Defined benefit (DB)</th></tr>
  <tr><td>Promise</td><td>The employer contributes a set amount; the benefit depends on investment returns</td><td>The employer promises a specified benefit (e.g. based on salary and years of service)</td></tr>
  <tr><td>Who bears investment risk</td><td>Employee</td><td><b>Employer</b></td></tr>
  <tr><td>Accounting</td><td>Pension expense = contribution; no ongoing liability beyond unpaid contributions</td><td>Report <b>net pension liability (asset)</b> = pension obligation − fair value of plan assets (the <b>funded status</b>)</td></tr>
</table>
<ul>
  <li>The <b>pension obligation</b> is the PV of benefits earned to date (projected benefit obligation under US GAAP; defined benefit obligation under IFRS), which depends on assumptions (discount rate, salary growth, mortality). A higher discount rate lowers the obligation.</li>
  <li>Example: obligation $500, plan assets $420 → underfunded by $80 → net pension liability of $80.</li>
  <li><b>Pension expense</b>: IFRS puts <b>service cost</b> and <b>net interest</b> (discount rate × net liability) in profit or loss and <b>remeasurements</b> (actuarial gains/losses, return on assets above the discount rate) in OCI, never recycled. US GAAP puts service cost, interest cost and <b>expected</b> return on plan assets in profit or loss, with actuarial gains and losses and past service cost in OCI and amortized into profit over time.</li>
  <li>Other post-employment benefits (e.g. retiree health care) are accounted for like DB plans but are usually unfunded.</li>
</ul>

<h3>4. Share-based compensation</h3>
<ul>
  <li>Forms: <b>stock grants</b> (outright shares, <b>restricted stock</b> that vests over time, <b>performance shares</b> tied to targets), <b>stock options</b>, and cash-settled <b>stock appreciation rights</b> (SARs).</li>
  <li>Expense is measured at <b>fair value on the grant date</b> and recognized over the <b>service (vesting) period</b>. For options, fair value comes from an option pricing model (Black–Scholes or binomial), whose inputs (volatility, expected life, dividend yield, risk-free rate) involve judgment; higher volatility or longer expected life raises the expense.</li>
  <li>Example: 100,000 options with a grant-date fair value of $6 each, vesting over 4 years → compensation expense of $150,000 a year.</li>
  <li>Aligns employees with shareholders and conserves cash, but <b>dilutes</b> existing shareholders (see diluted EPS). Cash-settled SARs are remeasured to fair value each period and create a liability.</li>
</ul>

<div class="how"><b>How it's tested:</b> issue price and effective-interest calculations (interest expense, amortization, carrying amount), cash flow classification of bond and lease payments, IFRS 16 vs US GAAP operating lease effects on expenses, EBITDA, CFO and leverage, finance lease criteria, DB vs DC plans and funded status, and the measurement and timing of share-based compensation expense.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Apply the effective interest method to discount, premium and zero-coupon bonds, and describe derecognition and covenants.</li>
  <li>Account for leases as a lessee under IFRS 16 and US GAAP (finance vs operating), and describe lessor accounting.</li>
  <li>Compare DC and DB pension plans, calculate funded status and describe pension expense components.</li>
  <li>Describe the types of share-based compensation and how their expense is measured and recognized.</li>
</ul></div>
`;

window.QB_HARD.l1ltl = [
  ["For a bond issued at a discount, under the effective interest method, interest expense each period is:",
    ["Greater than the coupon paid, and the carrying amount rises", "Less than the coupon paid, and the carrying amount falls", "Equal to the coupon paid each period"],
    "Interest expense = carrying amount × market rate at issue, which exceeds the coupon; the difference (discount amortization) increases the carrying amount toward par.", "r"],
  ["A 5% annual-coupon bond with a par value of 1,000 is issued for 950 when the market rate is 6%. Its carrying amount at the end of year 1 is closest to:",
    ["957", "950", "943"],
    "Interest expense = 950 × 6% = 57; coupon paid = 50; carrying amount = 950 + (57 − 50) = 957.", "c"],
  ["Under IFRS 16, a lessee with a five-year equipment lease that is neither short-term nor low-value recognizes:",
    ["A right-of-use asset and a lease liability", "Only a straight-line rent expense", "Nothing on the balance sheet, just a note disclosure"],
    "IFRS 16 has a single lessee model: ROU asset and lease liability, with depreciation and interest expense.", "r"],
  ["Under US GAAP, a lessee with an operating lease reports:",
    ["A single straight-line lease cost, with the lease on balance sheet", "Separate depreciation and interest expense, as for a finance lease", "Rent expense, with nothing on its balance sheet"],
    "ASC 842 puts an ROU asset and lease liability on the balance sheet for operating leases too, but the income statement shows one straight-line lease cost.", "r"],
  ["A company's defined benefit plan has a projected benefit obligation of 500 and plan assets of 420. Its balance sheet will show:",
    ["A net pension liability of 80", "A net pension asset of 80", "A liability of 500 and an asset of 420 separately"],
    "The funded status (plan assets − PBO = −80) is reported as a net liability.", "c"],
  ["Compensation expense for employee stock options is measured at:",
    ["Grant-date fair value, expensed over the vesting period", "Intrinsic value on the exercise date", "Fair value at the exercise date, expensed immediately in full"],
    "Share-based compensation is measured at grant-date fair value and recognized over the service (vesting) period.", "r"],
  ["A 5-year bond with a par value of $1,000 and a 5% annual coupon is issued when the market rate is 6%. Its issue price is closest to:",
    ["$957.88", "$1,000.00", "$1,042.12"],
    "PV of 5 × $50 and $1,000 at 6% = $957.88; a discount because the coupon is below the market rate.", "c"],
  ["For the bond issued at $957.88 (5% coupon, 6% market rate), interest expense in year 1 under the effective interest method is closest to:",
    ["$57.47", "$50.00", "$60.00"],
    "Interest expense = 6% × 957.88 = $57.47; the $7.47 above the coupon is discount amortization.", "c"],
  ["For a bond issued at a premium, over time the bond's carrying amount:",
    ["Decreases toward par", "Increases toward par", "Stays at the issue price"],
    "Interest expense is below the coupon, and the difference amortizes the premium, reducing the carrying amount to par at maturity.", "r"],
  ["A company issues a zero-coupon bond. Over the life of the bond, its reported cash flow from operations is most likely:",
    ["Not reduced by any interest payment", "Reduced each year by the interest expense", "Reduced at maturity by the total interest"],
    "No cash interest is ever paid; the whole repayment at maturity (including accreted interest) is a financing outflow, which flatters CFO.", "r"],
  ["A company repurchases bonds with a carrying amount of $980 for $1,010. It reports:",
    ["A $30 loss on extinguishment", "A $30 gain on extinguishment", "No gain or loss"],
    "Paying more than the carrying amount gives a loss of 1,010 − 980 = $30 in the income statement.", "c"],
  ["A covenant requiring a borrower to keep its debt-to-EBITDA ratio below 3.0× is a(n):",
    ["Negative covenant", "Affirmative covenant", "Collateral provision"],
    "Negative covenants restrict actions or ratios (what the borrower must not do or exceed).", "r"],
  ["Under IFRS 16, a lessee with a 5-year equipment lease (not short-term or low-value) reports, at the start of the lease:",
    ["A right-of-use asset and a lease liability", "Only a lease expense as payments are made", "An asset but no liability"],
    "IFRS 16 puts virtually all leases on the balance sheet at the PV of lease payments.", "r"],
  ["A 5-year lease requires $10,000 at the end of each year; the discount rate is 6%. Under IFRS 16, the lease liability at the end of year 1 is closest to:",
    ["$34,651", "$32,123", "$40,000"],
    "Initial liability = PV = 42,124. Interest 2,527; payment 10,000; principal reduction 7,473 → 34,651.", "c"],
  ["Using the same lease ($10,000 a year for 5 years at 6%), total year-1 expense under IFRS 16 is closest to:",
    ["$10,952", "$10,000", "$8,425"],
    "Depreciation 42,124/5 = 8,425 + interest 2,527 = $10,952: front-loaded compared with the payment.", "c"],
  ["Compared with a US GAAP operating lease, the same lease accounted for under IFRS 16 most likely results in:",
    ["Higher EBITDA", "Lower cash flow from operations", "Lower total assets"],
    "Under IFRS 16 the cost is depreciation and interest (both below EBITDA) and principal repayment is financing, so EBITDA and CFO are higher. Both show the ROU asset and liability.", "r"],
  ["Under US GAAP, the cash payments on an operating lease are classified as:",
    ["Operating cash outflows", "Financing cash outflows", "Investing cash outflows"],
    "For an operating lease, the whole payment is an operating outflow; for a finance lease, principal is financing.", "r"],
  ["Under US GAAP, a lessee classifies a lease as a finance lease if, among other criteria:",
    ["The term covers most of the asset's life", "The lease term is less than 12 months long", "Payments are fixed and paid monthly"],
    "Finance lease criteria: ownership transfer, a purchase option reasonably certain to be exercised, term is the major part of economic life, PV ≈ substantially all of fair value, or specialized asset.", "r"],
  ["In a defined benefit pension plan, investment risk is borne by the:",
    ["Employer", "Employee", "Plan's actuary"],
    "The employer must fund the promised benefit regardless of how plan assets perform.", "r"],
  ["Holding other assumptions constant, an increase in the discount rate used for a defined benefit plan will most likely:",
    ["Decrease the pension obligation", "Increase the pension obligation", "Have no effect on the obligation"],
    "The obligation is a present value; a higher discount rate lowers it.", "r"],
  ["A company grants 100,000 options with a grant-date fair value of $6 each, vesting evenly over 4 years. Annual compensation expense is:",
    ["$150,000", "$600,000", "$24,000"],
    "Total fair value $600,000 recognized over the 4-year service period = $150,000 a year.", "c"],
  ["Compensation expense for stock options is based on the options' fair value:",
    ["At the grant date", "At the exercise date", "At each year-end"],
    "Equity-settled awards are measured once, at grant date; cash-settled SARs are remeasured each period.", "r"],
];

window.GLOSSARY.push(
  ["Effective interest method","Interest expense = carrying amount × market rate at issue. Discount bond: expense > coupon, carrying amount rises.","l1ltl"],
  ["Leases (lessee)","IFRS 16: ROU asset + liability, depreciation + interest. US GAAP operating lease: on balance sheet, single straight-line cost.","l1ltl"],
  ["Discount vs premium bond", "Discount: carrying amount rises to par (interest expense > coupon). Premium: falls to par.", "l1ltl"],
  ["Gain/loss on debt extinguishment", "Carrying amount − amount paid to retire the debt.", "l1ltl"],
  ["US GAAP operating lease", "ROU asset and liability; single straight-line expense; payments all operating cash flows.", "l1ltl"],
  ["Finance lease criteria (US GAAP)", "Ownership transfer, purchase option, major part of life, PV ≈ fair value, specialized asset.", "l1ltl"],
  ["DB vs DC pension", "DB: employer bears risk, net liability = obligation − plan assets. DC: expense = contribution.", "l1ltl"],
  ["Share-based compensation expense", "Grant-date fair value spread over the vesting period.", "l1ltl"]
);
