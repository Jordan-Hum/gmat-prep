// CFA Level I · Financial Statement Analysis · Learning module 9: Analysis of Income Taxes.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1tax = `
<p class="syl">CFA Level I · Financial Statement Analysis · Learning module 9 of 12 · Analysis of Income Taxes</p>
<p>Companies keep two sets of rules: financial reporting standards for their published statements and tax law for their tax return. Differences between the two create <b>deferred tax liabilities and assets</b>. This lesson defines the key terms, shows how deferred taxes arise from temporary differences (with a step-by-step example), distinguishes permanent differences, covers tax rate changes and valuation allowances, and explains how analysts use the effective tax rate and treat deferred taxes.</p>

<h3>1. Key terms <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Financial reporting (books)</th><th>Tax reporting (tax return)</th></tr>
  <tr><td><b>Accounting profit</b> (pre-tax income)</td><td><b>Taxable income</b></td></tr>
  <tr><td><b>Income tax expense</b> (in the income statement)</td><td><b>Taxes payable</b> (current tax owed for the period)</td></tr>
  <tr><td><b>Carrying amount</b> of an asset or liability</td><td><b>Tax base</b> of the asset or liability</td></tr>
</table>
<div class="formula">Income tax expense = taxes payable (current tax) + Δ DTL − Δ DTA</div>
<ul>
  <li>A <b>deferred tax liability (DTL)</b> arises when taxable income is <b>lower</b> than accounting profit now, so more tax will be payable later. Typical cause: <b>accelerated depreciation for tax</b> and straight-line for books. For assets: carrying amount &gt; tax base → DTL.</li>
  <li>A <b>deferred tax asset (DTA)</b> arises when taxable income is <b>higher</b> than accounting profit now, so less tax will be payable later. Typical causes: <b>warranty or bad-debt expenses</b> recognized in the books before they're tax-deductible, revenue taxed before it's earned, and <b>tax loss carryforwards</b>. For liabilities: carrying amount &gt; tax base → DTA (for assets: carrying amount &lt; tax base → DTA).</li>
</ul>

<h3>2. Temporary differences: worked example <span class="hot">Highly tested</span></h3>
<div class="ex"><b>Example:</b> A machine costs $600 with a 3-year life and no residual value. Books use straight-line ($200 a year); tax uses accelerated depreciation ($300, $200, $100). Tax rate 30%. Pre-tax accounting profit is $1,000 each year (after book depreciation).
<table>
  <tr><th>Year</th><th>Carrying amount</th><th>Tax base</th><th>Temporary difference</th><th>DTL (30%)</th><th>Taxable income</th><th>Taxes payable</th><th>Tax expense</th></tr>
  <tr><td>1</td><td>400</td><td>300</td><td>100</td><td>30</td><td>1,000 − 100 = 900</td><td>270</td><td>270 + 30 = 300</td></tr>
  <tr><td>2</td><td>200</td><td>100</td><td>100</td><td>30</td><td>1,000</td><td>300</td><td>300 + 0 = 300</td></tr>
  <tr><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1,000 + 100 = 1,100</td><td>330</td><td>330 − 30 = 300</td></tr>
</table>
Tax expense is a steady 30% of book profit; taxes payable are lower early and higher later. The DTL builds up then <b>reverses</b>.</div>
<div class="ex"><b>Example (DTA):</b> A company accrues $50 of warranty expense in its books, but tax law allows a deduction only when repairs are paid next year. Taxable income is $50 higher than book income this year → DTA = 50 × 30% = $15.</div>
<div class="ex"><b>Example (combining):</b> Taxes payable 300; DTL increased by 40; DTA increased by 10. Income tax expense = 300 + 40 − 10 = 330.</div>

<h3>3. Permanent differences and the effective tax rate</h3>
<ul>
  <li><b>Permanent differences</b> never reverse: tax-exempt income (e.g. some municipal bond interest), non-deductible expenses (fines and penalties), tax credits. They create <b>no deferred taxes</b> but make the <b>effective tax rate</b> differ from the statutory rate.</li>
  <li><b>Effective tax rate</b> = income tax expense / pre-tax income. <b>Cash tax rate</b> = taxes paid / pre-tax income.</li>
  <li>Companies disclose a <b>reconciliation</b> between the statutory and effective rates (permanent differences, foreign tax rates, tax credits, rate changes, valuation allowances). Analysts use it to judge whether the current effective rate is sustainable for forecasting; e.g. a low rate driven by a one-off credit won't persist.</li>
</ul>

<h3>4. Tax rate changes and valuation allowances <span class="hot">Highly tested</span></h3>
<ul>
  <li>Deferred tax balances are measured at the tax rates <b>expected to apply when they reverse</b> (enacted or substantively enacted rates). When the rate changes, they're <b>remeasured</b> and the change goes through <b>income tax expense</b> in the period of enactment.</li>
  <li>A <b>rate cut</b> reduces DTLs (lowering tax expense: a gain) and reduces DTAs (raising tax expense). A rate increase does the opposite. Example: DTL $500 at 25%; the rate is cut to 20% → DTL becomes $400 → tax expense falls by $100.</li>
  <li><b>US GAAP</b>: DTAs are recognized in full, then reduced by a <b>valuation allowance</b> if it's <b>more likely than not</b> (&gt; 50%) that some won't be realized (e.g. the company may not earn enough future taxable income). Increasing the allowance raises tax expense; releasing it lowers expense. Changes in the allowance can be used to manage earnings, so analysts scrutinize them.</li>
  <li><b>IFRS</b>: a DTA is recognized only to the extent it's <b>probable</b> that taxable profit will be available to use it (no separate allowance account, same economic effect).</li>
  <li>Both standards classify deferred taxes as non-current on the balance sheet.</li>
</ul>

<h3>5. How analysts treat deferred taxes</h3>
<ul>
  <li>If a DTL is <b>expected to reverse</b> (taxes will actually be paid), treat it as a <b>liability</b>.</li>
  <li>If it's <b>not expected to reverse</b> (e.g. a growing company keeps buying assets so accelerated tax depreciation keeps exceeding book depreciation), treat it as <b>equity</b>; this lowers debt-to-equity.</li>
  <li>If the timing and amount are uncertain, the analyst may exclude it from both liabilities and equity.</li>
  <li>Large or growing DTAs from loss carryforwards depend on future profitability; check the valuation allowance and history of losses.</li>
</ul>

<div class="how"><b>How it's tested:</b> whether a difference creates a DTL or DTA, computing tax expense from taxes payable and changes in DTL/DTA, multi-year depreciation examples, permanent vs temporary differences, effects of tax rate changes, valuation allowances (US GAAP) vs "probable" recognition (IFRS), effective tax rate, and treating DTLs as debt or equity.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Define accounting profit, taxable income, taxes payable, income tax expense, carrying amount and tax base.</li>
  <li>Explain how temporary differences create DTLs and DTAs and compute them.</li>
  <li>Distinguish permanent from temporary differences and explain the effective tax rate reconciliation.</li>
  <li>Explain the effects of tax rate changes and valuation allowances.</li>
  <li>Decide whether a DTL should be treated as a liability or equity in analysis.</li>
</ul></div>
`;

window.QB_HARD.l1tax = [
  ["A company uses accelerated depreciation for tax purposes and straight-line depreciation for financial reporting. This most likely creates a:",
    ["Deferred tax liability", "Deferred tax asset", "Permanent difference"],
    "Taxable income is lower than pretax income early on, so the company pays less tax now and will pay more later: a DTL (carrying amount of the asset exceeds its tax base).", "r"],
  ["A company's taxes payable are 300. Its deferred tax liability increased by 40 and its deferred tax asset increased by 10. Income tax expense is closest to:",
    ["330", "350", "270"],
    "Income tax expense = taxes payable + ΔDTL − ΔDTA = 300 + 40 − 10 = 330.", "c"],
  ["Warranty expense is accrued for financial reporting when products are sold, but is tax-deductible only when repairs are paid. This creates a:",
    ["Deferred tax asset", "Deferred tax liability", "Permanent difference with no deferred tax"],
    "The company pays more tax now than its tax expense, and will get the deduction later: a deferred tax asset.", "r"],
  ["Under US GAAP, a valuation allowance reduces a deferred tax asset when:",
    ["It's more likely than not that part won't be realized", "The statutory tax rate is expected to rise", "Deferred tax liabilities exceed deferred tax assets in total"],
    "If future taxable income may be insufficient to use the DTA, a valuation allowance reduces it, increasing tax expense.", "r"],
  ["A company has a large deferred tax liability. If the statutory tax rate is cut, the company will most likely report:",
    ["A smaller DTL and lower income tax expense", "A larger DTL and higher income tax expense", "No change until the differences reverse"],
    "Deferred taxes are remeasured at the new rate immediately; a lower rate reduces the DTL, and the change lowers tax expense.", "r"],
  ["The amount of income tax owed to tax authorities for the current period, based on the tax return, is called:",
    ["Taxes payable", "Income tax expense", "The deferred tax liability"],
    "Taxes payable is the current tax from the return; income tax expense = taxes payable + ΔDTL − ΔDTA.", "r"],
  ["An asset has a carrying amount of 400 and a tax base of 300. With a 30% tax rate, the company reports:",
    ["A deferred tax liability of 30", "A deferred tax asset of 30", "A deferred tax liability of 100"],
    "Carrying amount > tax base for an asset → DTL = (400 − 300) × 30% = 30.", "c"],
  ["A company accrues $50 of warranty expense that is tax-deductible only when paid next year. With a 30% tax rate, this creates:",
    ["A deferred tax asset of $15", "A deferred tax liability of $15", "A permanent difference of $50"],
    "Book expense comes before the tax deduction, so taxable income is higher now; the future deduction is a DTA of 50 × 30% = $15.", "c"],
  ["A machine costing $600 is depreciated straight-line over 3 years for reporting and by $300, $200 and $100 for tax. With a 30% tax rate, the deferred tax liability at the end of year 2 is:",
    ["$30", "$60", "$0"],
    "Year 2 carrying amount 200, tax base 100; difference 100 × 30% = $30.", "c"],
  ["A company's tax loss carryforwards that can reduce taxes on future profits are recorded as a:",
    ["Deferred tax asset", "Deferred tax liability", "Reduction in taxes payable this year"],
    "Loss carryforwards reduce future taxes, so they're DTAs (subject to a valuation allowance or 'probable' test).", "r"],
  ["Interest income that is permanently exempt from tax will most likely cause the company's:",
    ["Effective tax rate to fall below the statutory rate", "Deferred tax liability to rise each year", "Deferred tax asset to build up over time"],
    "Permanent differences don't create deferred taxes; tax-exempt income lowers the effective rate.", "r"],
  ["Pre-tax income is $1,200 and income tax expense is $330. The effective tax rate is closest to:",
    ["27.5%", "30.0%", "36.4%"],
    "Effective tax rate = 330/1,200 = 27.5%.", "c"],
  ["A company has a deferred tax liability of $500 measured at a 25% tax rate. If the rate is cut to 20%, the company will:",
    ["Reduce the DTL by $100 and income tax expense by $100", "Reduce the DTL by $100 and increase tax expense by $100", "Leave the DTL unchanged until it reverses"],
    "The DTL is remeasured: 500 × 20/25 = 400. The $100 reduction lowers income tax expense in the period the cut is enacted.", "c"],
  ["A tax rate increase will most likely:",
    ["Increase income tax expense for a company with net DTLs", "Decrease income tax expense for a company with net DTLs", "Have no effect on deferred tax balances"],
    "Higher rates raise the value of DTLs; the increase is charged to tax expense. DTAs would rise in value, lowering expense.", "r"],
  ["Under IFRS, a deferred tax asset is recognized:",
    ["Only if future taxable profit is probable", "In full, with a separate valuation allowance", "Only once the related tax has been paid"],
    "IFRS uses a 'probable' recognition threshold; US GAAP recognizes the full DTA and then a valuation allowance if realization isn't more likely than not.", "r"],
  ["A company releases part of its valuation allowance because it now expects to earn enough taxable profit. This will:",
    ["Reduce income tax expense", "Increase income tax expense", "Increase taxes payable"],
    "Reducing the allowance increases the net DTA, with the offset lowering tax expense (boosting net income).", "r"],
  ["A growing company keeps investing in new equipment, so its deferred tax liability from accelerated tax depreciation has risen every year and isn't expected to reverse. An analyst would most likely treat the DTL as:",
    ["Equity", "A liability", "A current asset"],
    "A DTL that's not expected to reverse in the foreseeable future is economically more like equity than debt.", "s"],
];

window.GLOSSARY.push(
  ["Deferred tax liability / asset","DTL: pay less tax now (e.g. accelerated tax depreciation). DTA: pay more now (e.g. warranty accruals, loss carryforwards).","l1tax"],
  ["Carrying amount vs tax base", "Book vs tax value; for assets, carrying > base → DTL; carrying < base → DTA.", "l1tax"],
  ["Permanent differences", "Never reverse (tax-exempt income, fines); no deferred tax; change the effective rate.", "l1tax"],
  ["Effective tax rate", "Income tax expense / pre-tax income.", "l1tax"],
  ["DTA recognition: IFRS vs US GAAP", "IFRS: only if probable. US GAAP: full DTA less valuation allowance (> 50% unrealizable).", "l1tax"],
  ["Analyst treatment of DTL", "Liability if expected to reverse; equity if not; exclude if uncertain.", "l1tax"]
);
