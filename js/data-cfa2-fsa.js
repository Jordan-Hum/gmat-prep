// CFA Level II · Financial Statement Analysis: study notes, item sets and flashcards.
window.NOTES = window.NOTES || {};
window.QB_SETS = window.QB_SETS || {};
window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l2fsa = `
<p class="syl">CFA Level II · Financial Statement Analysis · 10–15% of the exam · Learning modules: Intercorporate Investments · Employee Compensation: Post-Employment and Share-Based · Multinational Operations · Analysis of Financial Institutions · Evaluating Quality of Financial Reports · Integration of Financial Statement Analysis Techniques</p>

<h3>1. Intercorporate investments</h3>
<table>
  <tr><th>Influence (typical stake)</th><th>Classification</th><th>Accounting</th></tr>
  <tr><td>None (&lt; 20%)</td><td>Financial assets</td><td>IFRS 9: amortized cost, FVOCI or FVPL. US GAAP: debt HTM/AFS/trading; equity securities at FVPL</td></tr>
  <tr><td>Significant (20–50%)</td><td>Associate</td><td><b>Equity method</b></td></tr>
  <tr><td>Shared control</td><td>Joint venture</td><td><b>Equity method</b> (IFRS and US GAAP)</td></tr>
  <tr><td>Control (&gt; 50%)</td><td>Subsidiary</td><td><b>Acquisition method</b>, consolidation</td></tr>
</table>
<p><b>IFRS 9 financial assets</b>: debt held to collect contractual cash flows (solely payments of principal and interest) → <b>amortized cost</b>; held to collect and sell → <b>FVOCI</b> (recycled on sale); everything else → <b>FVPL</b>. Equity investments are FVPL, unless the holder makes an irrevocable election for FVOCI (gains never recycled; dividends in profit). Reclassification of debt is allowed only when the business model changes; impairment uses an <b>expected credit loss</b> model.</p>
<h4>Equity method</h4>
<ul>
  <li>Initial cost; then + share of the investee's net income − dividends received. Dividends reduce the investment (they aren't income).</li>
  <li><b>Excess purchase price</b> over the share of book value is allocated to identifiable assets at fair value (e.g. PP&amp;E, amortized over its life, reducing equity income); the remainder is <b>goodwill</b> (not amortized, part of the investment balance).</li>
  <li><b>Intercompany profits</b> (upstream or downstream) are deferred in proportion to ownership until the goods are sold to third parties.</li>
  <li>Impairment: IFRS: objective evidence of a loss event, write down to recoverable amount (reversals allowed). US GAAP: decline in fair value that is other than temporary (no reversals).</li>
  <li>US GAAP permits the fair value option for equity-method investments; IFRS only for venture capital, mutual funds and similar.</li>
</ul>
<div class="ex"><b>Example:</b> Buy 30% for 600; investee net assets book value 1,500; PP&amp;E fair value exceeds book by 200 (10-year life). Share of book value = 450; excess 150 = PP&amp;E 60 (30% × 200) + goodwill 90. Investee NI 250, dividends 100. Equity income = 75 − 6 (amortization) = 69. If the investor sold goods to the investee at a 20 profit and half are still unsold, defer 30% × 10 = 3 → equity income 66. Investment = 600 + 66 − 30 = 636.</div>
<h4>Acquisition method (business combinations)</h4>
<ul>
  <li>All identifiable assets and liabilities at <b>fair value</b> (including previously unrecognized intangibles); goodwill = consideration − fair value of identifiable net assets. A <b>bargain purchase</b> gain goes to profit.</li>
  <li><b>Noncontrolling interest (NCI)</b>: <b>full goodwill</b> (NCI at fair value; required by US GAAP, allowed by IFRS) or <b>partial goodwill</b> (NCI at its share of identifiable net assets; IFRS option). Partial goodwill gives lower assets and equity, so <b>higher ROA and ROE</b>; net income is the same.</li>
  <li>Goodwill impairment: IFRS: carrying amount of the cash-generating unit vs its recoverable amount. US GAAP: carrying amount of the reporting unit vs its fair value; loss = excess, limited to the goodwill.</li>
  <li>Compared with the equity method, consolidation shows higher revenue, assets and liabilities but the <b>same net income attributable to the parent</b>; net profit margin and ROA are usually lower; leverage is higher.</li>
  <li><b>Special-purpose and variable interest entities</b>: consolidated by the party with control (IFRS 10) or the <b>primary beneficiary</b> (US GAAP).</li>
</ul>

<h3>2. Post-employment and share-based compensation</h3>
<div class="formula">PBO_end = PBO_beg + current service cost + interest cost (r × PBO_beg) + past service cost + actuarial losses − benefits paid</div>
<div class="formula">Plan assets_end = assets_beg + actual return + employer contributions − benefits paid · Funded status = plan assets − PBO</div>
<table>
  <tr><th>Component</th><th>IFRS</th><th>US GAAP</th></tr>
  <tr><td>Service cost (current and past)</td><td>P&amp;L</td><td>Current in P&amp;L; past service cost to OCI, then amortized</td></tr>
  <tr><td>Interest</td><td><b>Net interest</b> = discount rate × net pension liability (asset), P&amp;L</td><td>Interest cost in P&amp;L</td></tr>
  <tr><td>Return on plan assets</td><td>Implicitly at the discount rate (in net interest)</td><td><b>Expected</b> return reduces P&amp;L expense</td></tr>
  <tr><td>Remeasurements / actuarial gains and losses</td><td>OCI, <b>never recycled</b></td><td>OCI, amortized to P&amp;L (corridor approach)</td></tr>
</table>
<p><b>Total periodic pension cost (TPPC)</b> = employer contributions − change in funded status = service cost + interest cost + actuarial losses + past service cost − actual return. It's the same under both standards; only the split between P&amp;L and OCI differs.</p>
<ul>
  <li><b>Assumptions</b>: higher discount rate → lower PBO and usually lower service cost (interest cost effect ambiguous); higher compensation growth → higher PBO and expense; higher expected return → lower P&amp;L expense (US GAAP only).</li>
  <li><b>Analyst adjustments</b>: treat the underfunded amount as debt; split expense: service cost is operating, interest cost is interest expense, the actual return is non-operating. If contributions exceed TPPC, the after-tax excess resembles a debt repayment: reclassify it from operating to financing cash flows (CFO rises).</li>
  <li><b>Share-based pay</b> is measured at <b>grant-date fair value</b> and expensed over the <b>service (vesting) period</b>. For options, higher volatility, longer expected life and a higher risk-free rate raise the value (and expense); a higher dividend yield lowers it. Cash-settled SARs are remeasured each period.</li>
</ul>

<h3>3. Multinational operations</h3>
<p>The <b>functional currency</b> is the currency of the primary economic environment. The <b>presentation currency</b> is the parent's reporting currency.</p>
<table>
  <tr><th></th><th>Current rate method (translation)</th><th>Temporal method (remeasurement)</th></tr>
  <tr><td>When</td><td>Sub's functional currency = its local currency (self-contained)</td><td>Sub's functional currency = parent's currency (integrated); or <b>highly inflationary</b> economy under US GAAP</td></tr>
  <tr><td>Assets/liabilities</td><td>All at <b>current</b> rate</td><td><b>Monetary</b> at current; <b>non-monetary</b> (inventory at cost, PP&amp;E, intangibles) at <b>historical</b></td></tr>
  <tr><td>Equity</td><td>Historical</td><td>Historical</td></tr>
  <tr><td>Revenue/expenses</td><td>Average rate</td><td>Average, but COGS and depreciation at historical rates</td></tr>
  <tr><td>FX gain/loss</td><td><b>Translation adjustment in OCI</b> (CTA)</td><td><b>Remeasurement gain/loss in net income</b></td></tr>
  <tr><td>Exposure</td><td><b>Net assets</b></td><td><b>Net monetary assets (or liabilities)</b></td></tr>
</table>
<ul>
  <li>Net asset exposure + foreign currency depreciating → negative CTA. Net monetary <b>liability</b> exposure + foreign currency depreciating → remeasurement <b>gain</b>.</li>
  <li>The current rate method keeps most balance sheet and income statement ratios unchanged; ratios mixing balance sheet and income items can change.</li>
  <li><b>Highly inflationary</b>: US GAAP: cumulative 3-year inflation ≥ 100% → temporal method. IFRS (IAS 29): restate for inflation, then translate at the current rate; purchasing power gains/losses go to net income.</li>
  <li>Analysis: separate <b>organic</b> sales growth from FX effects; FX can explain changes in the <b>effective tax rate</b> (different statutory rates by country); disclosures give sensitivity to currency moves.</li>
</ul>

<h3>4. Analysis of financial institutions</h3>
<ul>
  <li>Why different: systemic importance, heavy regulation, assets mostly financial (fair-valued), liabilities mostly deposits/borrowings.</li>
  <li><b>Basel III</b>: minimum <b>CET1 4.5%</b>, <b>Tier 1 6%</b>, <b>total capital 8%</b> of risk-weighted assets (plus a 2.5% conservation buffer and other buffers). <b>Liquidity coverage ratio</b> = high-quality liquid assets / 30-day net cash outflows ≥ 100%. <b>Net stable funding ratio</b> = available stable funding / required stable funding ≥ 100%.</li>
  <li><b>CAMELS</b>: <b>C</b>apital adequacy, <b>A</b>sset quality (loan quality, allowance for loan losses, concentrations), <b>M</b>anagement capabilities, <b>E</b>arnings (quality and sustainability; reliance on fees, trading), <b>L</b>iquidity, <b>S</b>ensitivity to market risk (rates, FX, equity, commodities).</li>
  <li><b>Other factors</b>: government support, mission (e.g. community banks), corporate culture, competitive environment, off-balance-sheet items, segment information, currency exposure, risk disclosures.</li>
  <li><b>Insurers</b>: P&amp;C combined ratio = loss and loss-adjustment ratio + underwriting expense ratio (&lt; 100% = underwriting profit); reserve development; investment returns; life insurers focus on investment performance, liquidity, and capital adequacy.</li>
</ul>

<h3>5. Quality of financial reports</h3>
<ul>
  <li><b>Spectrum</b>: GAAP-compliant, decision-useful and sustainable (high quality) → biased choices (conservative or aggressive) → within GAAP but earnings management → departures from GAAP → fictitious transactions.</li>
  <li><b>Warning signs</b>: revenue recognized early (bill-and-hold, channel stuffing, rising DSO); inventory buildup (falling turnover); capitalizing operating costs; long depreciation lives; NI persistently above CFO; aggressive acquisitions; large "non-recurring" items every year.</li>
  <li><b>Accruals ratio</b> (balance sheet) = (NOA_end − NOA_beg) / average NOA. Cash flow version = (NI − CFO − CFI) / average NOA. Higher accruals → lower earnings persistence and quality.</li>
  <li><b>Beneish M-score</b> (eight variables, e.g. DSRI, GMI, AQI, SGI, TATA): M &gt; −1.78 suggests a higher probability of manipulation. <b>Altman Z-score</b> assesses bankruptcy risk.</li>
  <li><b>Cash flow manipulation</b>: stretching payables, selling or securitizing receivables, and (under IFRS) classification choices for interest and dividends paid or received can inflate CFO.</li>
</ul>
<div class="ex"><b>Example:</b> NOA rises from 1,800 to 2,200 → balance sheet accruals ratio = 400 / 2,000 = 20%. NI 300, CFO 180, CFI −280 → cash flow accruals = 300 − 180 + 280 = 400 → also 20%.</div>

<h3>6. Integrating the techniques</h3>
<div class="formula">ROE = (NI/EBT) × (EBT/EBIT) × (EBIT/Revenue) × (Revenue/Assets) × (Assets/Equity) = tax burden × interest burden × EBIT margin × asset turnover × leverage</div>
<ul>
  <li>Isolate equity-method income (no assets or revenue in consolidated figures) before computing margins and turnover.</li>
  <li>Use <b>segment data</b> to see which businesses earn their cost of capital; use accruals analysis to judge earnings quality; adjust for off-balance-sheet obligations (e.g. pension deficits, guarantees).</li>
</ul>
<div class="how"><b>How it's tested:</b> Level II FSA sets are calculation-heavy: equity-method income and balances, goodwill and NCI, pension expense under IFRS vs US GAAP, translated balances and exposure under the two FX methods, Basel ratios, accruals ratios; then "which method gives the higher ratio" judgment questions.</div>
<div class="key"><b>Carry forward to Level III</b>: Level III won't test the accounting directly, but pension funded status (DB plan IPS), earnings quality and accounting choices feed into equity and credit analysis in portfolio management.</div>
<div class="trap"><b>Traps:</b> dividends from an associate are not income. Partial goodwill gives <b>higher</b> ROA and ROE. Temporal-method gains/losses go to <b>net income</b>; current-rate adjustments go to <b>OCI</b>. IFRS remeasurements are never recycled.</div>
`;

window.QB_SETS.l2fsa = [
  {
    title: "Norland Industries: investment in Fjell",
    case: `<p>On 1 January, Norland Industries buys 30% of Fjell AS for €600 million and obtains significant influence. On that date, Fjell's identifiable net assets have a book value of €1,500 million. The fair value of Fjell's PP&amp;E exceeds its book value by €200 million; the PP&amp;E has a remaining useful life of 10 years (straight-line). All other assets and liabilities are at fair value.</p>
<p><b>Exhibit 1. Fjell, current year (€ millions)</b></p>
<table><tr><th>Item</th><th>Amount</th></tr><tr><td>Net income</td><td>250</td></tr><tr><td>Dividends paid</td><td>100</td></tr></table>
<p>During the year, Norland sold inventory to Fjell for €80 million, at a profit to Norland of €20 million. At year-end, half of this inventory remained unsold by Fjell.</p>
<p>Norland's CFO, Siri Dahl, is also considering buying a further 50% of Fjell next year, which would give Norland control.</p>`,
    qs: [
      ["The goodwill included in Norland's investment in Fjell is closest to:",
        ["€90 million", "€150 million", "€60 million"],
        "Share of book value = 30% × 1,500 = 450. Excess = 600 − 450 = 150. PP&E step-up = 30% × 200 = 60. Goodwill = 150 − 60 = €90 million.", "c"],
      ["Norland's equity income from Fjell for the year is closest to:",
        ["€66 million", "€69 million", "€75 million"],
        "30% × 250 = 75; less PP&E amortization 60/10 = 6; less the deferred share of unrealized downstream profit 30% × (20 × 50%) = 3. Equity income = 75 − 6 − 3 = €66 million.", "c"],
      ["The carrying amount of the investment in Fjell at year-end is closest to:",
        ["€636 million", "€666 million", "€606 million"],
        "600 + equity income 66 − dividends received (30% × 100 = 30) = €636 million.", "c"],
      ["If Norland gains control and consolidates Fjell, compared with the equity method, Norland's net profit margin will most likely be:",
        ["Lower, with the same NI attributable to the parent", "Higher, as Fjell's whole profit is then included", "The same, since net income is unchanged"],
        "Consolidation adds all of Fjell's revenue, while net income attributable to Norland's shareholders is the same as under the equity method, so the net profit margin usually falls.", "s"]
    ]
  },
  {
    title: "Arcadia Holdings: acquisition of Belmont",
    case: `<p>Arcadia Holdings acquires 80% of Belmont Corp. for $960 million in cash. At the acquisition date, the fair value of Belmont's identifiable net assets is $1,000 million, and the fair value of 100% of Belmont is estimated at $1,200 million.</p>
<p>Arcadia reports under IFRS, which allows it to measure the noncontrolling interest (NCI) either at fair value (full goodwill) or at its proportionate share of identifiable net assets (partial goodwill). Its analyst, Ben Okoye, wants to know how the choice affects ratios.</p>
<p>One year later, a peer of Arcadia that reports under US GAAP tests goodwill in a reporting unit. The unit's carrying amount, including goodwill of $200 million, is $1,350 million, and its fair value is $1,280 million.</p>`,
    qs: [
      ["Under the full goodwill method, goodwill is closest to:",
        ["$200 million", "$160 million", "$240 million"],
        "Full goodwill = fair value of the whole entity − fair value of identifiable net assets = 1,200 − 1,000 = $200 million.", "c"],
      ["Under the partial goodwill method, the NCI reported at acquisition is closest to:",
        ["$200 million", "$240 million", "$192 million"],
        "Partial goodwill measures NCI at its share of identifiable net assets: 20% × 1,000 = $200 million (vs 20% × 1,200 = $240 million under full goodwill). Goodwill is then 960 − 800 = $160 million.", "c"],
      ["Compared with the full goodwill method, the partial goodwill method will most likely result in:",
        ["Higher ROA and higher ROE", "Lower ROA and lower ROE", "The same ROA and ROE"],
        "Net income is the same, but partial goodwill reports lower goodwill (assets) and lower NCI (equity), so both ROA and ROE are higher.", "s"],
      ["The peer's goodwill impairment loss is closest to:",
        ["$70 million", "$200 million", "$0"],
        "Under US GAAP, impairment = carrying amount of the reporting unit − its fair value, limited to goodwill: 1,350 − 1,280 = $70 million.", "c"]
    ]
  },
  {
    title: "Halden Manufacturing: defined benefit plan",
    case: `<p>Rhea Lund is comparing pension accounting for Halden Manufacturing under IFRS and US GAAP. Halden's tax rate is 25%.</p>
<p><b>Exhibit 1. Defined benefit plan data (€ millions)</b></p>
<table><tr><th>Item</th><th>Amount</th></tr><tr><td>Projected benefit obligation, beginning</td><td>5,000</td></tr><tr><td>Plan assets, beginning</td><td>4,600</td></tr><tr><td>Current service cost</td><td>180</td></tr><tr><td>Discount rate</td><td>4.0%</td></tr><tr><td>Expected return on plan assets</td><td>6.0%</td></tr><tr><td>Actual return on plan assets</td><td>320</td></tr><tr><td>Actuarial loss (increase in PBO)</td><td>90</td></tr><tr><td>Benefits paid</td><td>250</td></tr><tr><td>Employer contributions</td><td>300</td></tr></table>
<p>There were no plan amendments and there are no amounts to amortize from prior years.</p>`,
    qs: [
      ["Under IFRS, the pension expense recognized in profit or loss is closest to:",
        ["€196 million", "€380 million", "€104 million"],
        "Service cost 180 + net interest expense 4% × (5,000 − 4,600) = 16 → €196 million. Remeasurements go to OCI.", "c"],
      ["Under US GAAP, the pension expense recognized in profit or loss is closest to:",
        ["€104 million", "€196 million", "€60 million"],
        "Service cost 180 + interest cost 4% × 5,000 = 200 − expected return 6% × 4,600 = 276 → €104 million.", "c"],
      ["Halden's total periodic pension cost is closest to:",
        ["€150 million", "€300 million", "€196 million"],
        "Funded status moves from −400 to −250 (PBO 5,220; assets 4,970). TPPC = contributions − change in funded status = 300 − 150 = €150 million (also 180 + 200 + 90 − 320).", "c"],
      ["If Lund treats the excess of contributions over total periodic pension cost as a debt repayment, Halden's adjusted operating cash flow will be:",
        ["Higher by €112.5 million", "Lower by €112.5 million", "Higher by €150 million"],
        "Excess contribution = 300 − 150 = 150; after tax 150 × (1 − 0.25) = 112.5. Reclassifying it from operating to financing outflows raises CFO by €112.5 million.", "c"]
    ]
  },
  {
    title: "Trent Corp.: foreign subsidiary",
    case: `<p>Trent Corp. (presentation currency USD) owns a subsidiary that keeps its books in local currency (LC). Analyst Dev Mistry has the subsidiary's year-end balance sheet and exchange rates.</p>
<p><b>Exhibit 1. Subsidiary balance sheet (LC millions)</b></p>
<table><tr><th>Assets</th><th></th><th>Liabilities and equity</th><th></th></tr><tr><td>Cash</td><td>100</td><td>Accounts payable</td><td>150</td></tr><tr><td>Receivables</td><td>200</td><td>Long-term debt</td><td>500</td></tr><tr><td>Inventory (at cost)</td><td>300</td><td>Common stock</td><td>400</td></tr><tr><td>PP&amp;E (net)</td><td>600</td><td>Retained earnings</td><td>150</td></tr><tr><td><b>Total</b></td><td><b>1,200</b></td><td><b>Total</b></td><td><b>1,200</b></td></tr></table>
<p><b>Exhibit 2. Exchange rates (USD per LC)</b></p>
<table><tr><th>Rate</th><th>USD/LC</th></tr><tr><td>When PP&amp;E acquired and stock issued</td><td>0.50</td></tr><tr><td>When inventory acquired</td><td>0.46</td></tr><tr><td>Average for the year</td><td>0.44</td></tr><tr><td>Current (year-end)</td><td>0.40</td></tr></table>`,
    qs: [
      ["If the subsidiary's functional currency is the LC, its total assets in Trent's statements are closest to:",
        ["$480 million", "$558 million", "$600 million"],
        "Current rate method: all assets at the current rate: 1,200 × 0.40 = $480 million.", "c"],
      ["If the subsidiary's functional currency is the USD, its total assets in Trent's statements are closest to:",
        ["$558 million", "$480 million", "$528 million"],
        "Temporal method: cash and receivables at current (300 × 0.40 = 120), inventory at historical (300 × 0.46 = 138), PP&E at historical (600 × 0.50 = 300). Total = $558 million.", "c"],
      ["Given that the LC depreciated during the year, under the temporal method Trent will most likely report:",
        ["A remeasurement gain in net income", "A remeasurement loss in net income", "A negative translation adjustment in OCI"],
        "Under the temporal method, exposure is net monetary assets: 300 − 650 = net monetary liability of 350. A depreciating LC reduces the USD value of those liabilities: a gain, reported in net income.", "s"],
      ["If the subsidiary's country has cumulative three-year inflation above 100%, under US GAAP Trent must use:",
        ["The temporal method", "The current rate method", "Inflation restatement, then the current rate"],
        "US GAAP requires the temporal method (the parent's currency as functional currency) for highly inflationary economies. Restating for inflation and then translating at the current rate is the IFRS (IAS 29) approach.", "r"]
    ]
  },
  {
    title: "Coastal Federal Bank: capital and liquidity",
    case: `<p>Credit analyst Laila Haddad is reviewing Coastal Federal Bank.</p>
<p><b>Exhibit 1. Selected data ($ billions)</b></p>
<table><tr><th>Item</th><th>Amount</th></tr><tr><td>Common equity Tier 1 capital</td><td>9.6</td></tr><tr><td>Additional Tier 1 capital</td><td>1.5</td></tr><tr><td>Tier 2 capital</td><td>2.4</td></tr><tr><td>Risk-weighted assets</td><td>120.0</td></tr><tr><td>High-quality liquid assets</td><td>30.0</td></tr><tr><td>Net cash outflows over 30 days (stress)</td><td>25.0</td></tr><tr><td>Available stable funding</td><td>210.0</td></tr><tr><td>Required stable funding</td><td>200.0</td></tr></table>
<p>Haddad notes that nonperforming loans have doubled over the past year while the allowance for loan losses has barely changed. She also notes that Coastal is a regional bank that the government has said is not systemically important.</p>`,
    qs: [
      ["Coastal's Tier 1 capital ratio is closest to:",
        ["9.25%", "8.00%", "11.25%"],
        "Tier 1 = CET1 + additional Tier 1 = 9.6 + 1.5 = 11.1; 11.1/120 = 9.25%. (CET1 ratio 8.0%, total capital ratio 11.25%.)", "c"],
      ["Coastal's liquidity coverage ratio and net stable funding ratio are, respectively:",
        ["120% and 105%", "83% and 95%", "105% and 120%"],
        "LCR = HQLA/net cash outflows = 30/25 = 120%. NSFR = available/required stable funding = 210/200 = 105%. Both meet the 100% minimum.", "c"],
      ["The trend in nonperforming loans relative to the allowance most directly signals a weakness in which CAMELS component?",
        ["Asset quality", "Sensitivity to market risk", "Management capabilities"],
        "Rising NPLs with an unchanged allowance means credit quality is worsening and reserves may be inadequate: asset quality.", "s"],
      ["The government's statement about Coastal relates to which factor that isn't part of CAMELS?",
        ["Government support", "Corporate culture", "Off-balance-sheet items"],
        "Whether the government would support a failing bank (e.g. systemic importance) is a non-CAMELS factor analysts consider; a non-systemic bank is less likely to receive support.", "s"]
    ]
  },
  {
    title: "Vantor Electronics: earnings quality review",
    case: `<p>Portfolio manager Grace Lim asks analyst Owen Pratt to assess the earnings quality of Vantor Electronics.</p>
<p><b>Exhibit 1. Selected data ($ millions)</b></p>
<table><tr><th>Item</th><th>Last year</th><th>This year</th></tr><tr><td>Net operating assets (year-end)</td><td>1,800</td><td>2,200</td></tr><tr><td>Revenue</td><td>2,400</td><td>3,000</td></tr><tr><td>Net income</td><td>260</td><td>300</td></tr><tr><td>Cash flow from operations</td><td>250</td><td>180</td></tr><tr><td>Cash flow from investing</td><td>−220</td><td>−280</td></tr><tr><td>Days sales outstanding</td><td>45</td><td>68</td></tr></table>
<p>Pratt also computes Vantor's Beneish M-score as −1.20. He learns that Vantor shipped large orders to distributors in the last week of the year with extended payment terms and rights of return. Vantor also lengthened the payment period to its suppliers from 45 to 75 days.</p>`,
    qs: [
      ["Vantor's balance-sheet-based accruals ratio for this year is closest to:",
        ["20%", "18%", "22%"],
        "(NOA_end − NOA_beg)/average NOA = (2,200 − 1,800)/2,000 = 20%. The cash flow version gives the same: (300 − 180 + 280)/2,000 = 20%.", "c"],
      ["Based on the M-score, Pratt should conclude that the probability of earnings manipulation is:",
        ["Elevated, since −1.20 is above the −1.78 cutoff", "Low, since −1.20 is below the −1.78 cutoff", "Impossible to judge without the Altman Z-score"],
        "An M-score above −1.78 (here −1.20, less negative) indicates a higher probability of manipulation.", "c"],
      ["The rise in DSO combined with the year-end shipments most likely indicates:",
        ["Channel stuffing to accelerate revenue", "Conservative revenue recognition", "Improved collection from customers"],
        "Pushing goods to distributors with extended terms and return rights near year-end, while DSO jumps from 45 to 68 days, suggests revenue is being pulled forward (channel stuffing).", "s"],
      ["The change in supplier payment terms most likely:",
        ["Boosts CFO temporarily, not sustainably", "Reduces CFO this year", "Reduces reported net income this year"],
        "Stretching payables raises operating cash flow in the period it happens, but it isn't sustainable and doesn't reflect better underlying performance; it doesn't affect net income.", "s"]
    ]
  }
];

window.GLOSSARY.push(
  ["Equity method", "Cost + share of NI − dividends; excess price allocated to fair value step-ups (amortized) and goodwill.", "l2fsa"],
  ["Intercompany profit (equity method)", "Defer the investor's % share of unrealized profit on goods not yet sold to third parties.", "l2fsa"],
  ["Acquisition method", "Consolidate at fair value; goodwill = consideration − FV of identifiable net assets; bargain purchase → gain.", "l2fsa"],
  ["Full vs partial goodwill", "Full: NCI at fair value (US GAAP required). Partial: NCI at share of net assets (IFRS option); higher ROA/ROE.", "l2fsa"],
  ["Goodwill impairment", "IFRS: CGU carrying amount vs recoverable amount. US GAAP: reporting unit carrying amount vs fair value, capped at goodwill.", "l2fsa"],
  ["IFRS pension expense (P&L)", "Service cost + net interest (discount rate × net liability). Remeasurements to OCI, never recycled.", "l2fsa"],
  ["US GAAP pension expense", "Service cost + interest cost − expected return ± amortization of OCI items.", "l2fsa"],
  ["Total periodic pension cost", "Contributions − change in funded status; same under IFRS and US GAAP.", "l2fsa"],
  ["Current rate method", "All assets/liabilities at current rate; CTA in OCI; net asset exposure.", "l2fsa"],
  ["Temporal method", "Monetary items at current rate, non-monetary at historical; gain/loss in NI; net monetary exposure.", "l2fsa"],
  ["Highly inflationary (US GAAP)", "Cumulative 3-year inflation ≥ 100% → temporal method. IFRS restates for inflation first.", "l2fsa"],
  ["Basel III minimums", "CET1 4.5%, Tier 1 6%, total 8% of RWA (+ buffers); LCR and NSFR ≥ 100%.", "l2fsa"],
  ["CAMELS", "Capital, Asset quality, Management, Earnings, Liquidity, Sensitivity to market risk.", "l2fsa"],
  ["Accruals ratio", "(NOA_end − NOA_beg)/average NOA; higher accruals → lower earnings quality.", "l2fsa"],
  ["Beneish M-score", "Probability of earnings manipulation; above −1.78 is a warning sign.", "l2fsa"]
);
