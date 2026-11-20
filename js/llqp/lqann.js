// LLQP · Segregated Funds and Annuities module · Chapter 3: Annuities.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.lqann = `
<p class="syl">LLQP · Segregated Funds and Annuities module · Chapter 3 of 8 · Annuities</p>
<p>An annuity turns a lump sum into a stream of guaranteed payments, for a fixed period or for life. It's the only product that can guarantee a person won't outlive their money. This chapter covers the types of annuities, what affects the payment amount, how annuity payments are taxed, and the protection available if an insurer fails.</p>

<h3>1. Annuity basics</h3>
<ul>
  <li>The <b>annuitant</b> receives the payments; the payments for a life annuity are based on the annuitant's life.</li>
  <li><b>Immediate annuity</b>: payments start within a year of purchase. <b>Deferred annuity</b>: money accumulates first (the accumulation phase) and payments start later.</li>
  <li>Annuities can be bought with <b>registered</b> money (RRSP, RRIF, LIRA funds) or <b>non-registered</b> money.</li>
  <li>Once payments start, a life annuity generally <b>can't be cashed in or changed</b>: the client gives up access to the capital in exchange for guaranteed income.</li>
</ul>

<h3>2. Types of annuities <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Type</th><th>Payments</th><th>If the annuitant dies</th></tr>
  <tr><td><b>Term-certain</b></td><td>For a fixed number of years (registered funds: to age 90 at most)</td><td>Remaining payments (or their commuted value) go to the beneficiary or estate</td></tr>
  <tr><td><b>Straight life</b></td><td>For life; the <b>highest</b> payment of the life options</td><td>Payments stop; nothing is left</td></tr>
  <tr><td><b>Life with guaranteed period</b> (e.g. 10 years)</td><td>For life, with payments guaranteed for the period</td><td>If death occurs within the period, payments continue to the beneficiary for the rest of it</td></tr>
  <tr><td><b>Joint and last survivor</b></td><td>While either spouse is alive; may <b>reduce</b> after the first death (e.g. to 60%), which raises the starting payment</td><td>Continues to the survivor; stops at the second death (unless guaranteed)</td></tr>
  <tr><td><b>Cash refund / instalment refund</b></td><td>For life</td><td>Any excess of the purchase price over payments received is refunded</td></tr>
  <tr><td><b>Indexed</b></td><td>Rise each year with inflation or a fixed %</td><td>Depends on the base type</td></tr>
  <tr><td><b>Impaired (enhanced)</b></td><td>Higher payments for people with health problems that shorten life expectancy</td><td>Depends on the base type</td></tr>
</table>
<div class="ex"><b>Example:</b> Paul buys a life annuity with a 10-year guarantee at 65 and dies at 69. His beneficiary receives the payments for the remaining 6 years. If he'd chosen a straight life annuity, payments would have stopped at his death, but he'd have received a larger payment while alive.</div>

<h3>3. What affects the payment <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Factor</th><th>Larger payment when…</th></tr>
  <tr><td>Interest rates</td><td>Rates are <b>higher</b> at purchase</td></tr>
  <tr><td>Age</td><td>The annuitant is <b>older</b> (fewer expected payments)</td></tr>
  <tr><td>Sex</td><td><b>Male</b> (shorter life expectancy than women)</td></tr>
  <tr><td>Health</td><td>Impaired health (an impaired annuity)</td></tr>
  <tr><td>Guarantee period</td><td><b>Shorter</b> or no guarantee</td></tr>
  <tr><td>Single vs joint</td><td><b>Single life</b> (joint and last survivor pays less)</td></tr>
  <tr><td>Indexing</td><td>Not indexed (indexed annuities start lower)</td></tr>
</table>
<div class="ex"><b>Example (term-certain):</b> $200,000 buys 20 annual payments at 4%: PMT = <b>$14,716.35</b> a year.</div>
<div class="calc"><b>BA II Plus:</b> 20 N, 4 I/Y, 200000 +/− PV, 0 FV, CPT PMT → 14,716.35</div>

<h3>4. Taxation of annuity payments <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Registered annuities</b> (bought with RRSP, RRIF or similar funds): every payment is <b>fully taxable</b> income.</li>
  <li><b>Non-registered annuities</b>: each payment is partly a tax-free <b>return of capital</b> and partly taxable <b>interest</b>.</li>
  <li><b>Prescribed annuity</b>: the taxable interest is spread <b>evenly</b> over all payments, so the taxable amount is the same every year. This <b>defers tax</b> compared with <b>accrual</b> (non-prescribed) taxation, where interest is highest in the early years.</li>
  <li>To qualify as prescribed, the annuity must be non-registered, owned by an individual who is also the annuitant (or certain trusts), with payments starting by the end of the year after purchase and set in amount (no variations).</li>
</ul>
<div class="ex"><b>Example (prescribed):</b> a $100,000 non-registered term-certain annuity pays $12,000 a year for 10 years. Return of capital = 100,000 / 10 = $10,000 a year, so <b>$2,000</b> of each payment is taxable interest, every year.</div>

<h3>5. Annuities vs RRIFs</h3>
<table>
  <tr><th></th><th>Life annuity</th><th>RRIF</th></tr>
  <tr><td>Income</td><td>Guaranteed for life</td><td>Depends on investment returns and withdrawals</td></tr>
  <tr><td>Longevity and market risk</td><td>Transferred to the insurer</td><td>Kept by the client</td></tr>
  <tr><td>Flexibility</td><td>None after purchase</td><td>Can withdraw more than the minimum, change investments</td></tr>
  <tr><td>Estate value</td><td>Little or none (unless guaranteed or refund features)</td><td>Remaining balance goes to the estate or beneficiary</td></tr>
</table>
<p>Many retirees combine them: an annuity covers essential expenses with guaranteed income, and a RRIF provides flexibility and growth.</p>

<h3>6. Protection</h3>
<ul>
  <li>If an insurer fails, <b>Assuris</b> protects annuity income up to the higher of <b>$2,000 a month or 90%</b> of the promised monthly income.</li>
  <li>Annuities issued by insurers may also be protected from creditors when a family-class or irrevocable beneficiary is named, as for life insurance.</li>
</ul>

<div class="how"><b>How it's tested:</b> matching annuity types to client goals, what happens at death under each type, the factors that raise or lower payments (age, sex, rates, guarantees, joint), term-certain payment calculations, registered vs non-registered taxation, prescribed vs accrual taxation, annuities vs RRIFs, and Assuris limits.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe immediate and deferred annuities and each main type of annuity.</li>
  <li>Explain the factors that affect annuity payments.</li>
  <li>Calculate a term-certain annuity payment.</li>
  <li>Explain the taxation of registered, prescribed and non-prescribed annuities.</li>
  <li>Compare annuities with RRIFs and describe Assuris protection.</li>
</ul></div>
`;

window.QB_HARD.lqann = [
  ["Which annuity pays the highest monthly income for a 65-year-old, all else being equal?",
    ["Straight life annuity", "Life annuity with a 15-year guarantee", "Joint and last survivor annuity", "Indexed life annuity"],
    "A straight life annuity has no guarantee, survivor or indexing cost, so it pays the most.", "r"],
  ["Paul, 65, buys a life annuity with a 10-year guaranteed period and dies at 69. What happens?",
    ["Payments continue to his beneficiary for 6 years", "Payments stop immediately at his death", "His beneficiary receives the full purchase price", "Payments continue to his beneficiary for life"],
    "With a guaranteed period, payments continue to the beneficiary until the period ends.", "s"],
  ["A married couple wants retirement income that continues as long as either of them is alive. Which annuity fits?",
    ["Joint and last survivor", "Term-certain to age 90", "Straight single life", "Cash refund single life"],
    "A joint and last survivor annuity pays until the second death.", "s"],
  ["Choosing a joint and last survivor annuity that reduces to 60% after the first death will:",
    ["Raise the initial payment", "Lower the initial payment", "Remove the survivor benefit", "Make it a term-certain annuity"],
    "Because the survivor receives less, the insurer can pay more while both are alive.", "r"],
  ["Two 65-year-olds, a man and a woman, each buy a straight life annuity for $200,000 on the same day. Who receives the higher monthly payment?",
    ["The man", "The woman", "Both receive the same", "Whoever pays more tax"],
    "Men have shorter life expectancies, so they receive higher payments for the same premium.", "s"],
  ["How do higher interest rates at the time of purchase affect annuity payments?",
    ["They increase payments", "They decrease payments", "They have no effect", "They affect only indexed plans"],
    "The insurer earns more on the premium, so it can pay more.", "r"],
  ["A 70-year-old with serious heart disease wants the highest guaranteed lifetime income. Which product should the agent consider?",
    ["An impaired annuity", "An indexed annuity", "A deferred annuity", "A joint annuity"],
    "Impaired (enhanced) annuities pay more to people whose health shortens their life expectancy.", "s"],
  ["$200,000 buys a term-certain annuity paying 20 annual payments at 4%. The annual payment is closest to:",
    ["$14,716", "$10,000", "$12,000", "$18,000"],
    "PMT with N = 20, I/Y = 4, PV = −200,000, FV = 0 gives $14,716.35.", "c"],
  ["A client buys an annuity with money from her RRSP. How are the payments taxed?",
    ["Fully taxable as income", "Partly tax-free capital", "Taxed as capital gains", "Completely tax-free"],
    "Payments from registered annuities are fully taxable when received.", "r"],
  ["A $100,000 non-registered prescribed annuity pays $12,000 a year for 10 years. The taxable amount each year is:",
    ["$2,000", "$12,000", "$10,000", "$1,200"],
    "Return of capital = 100,000 / 10 = 10,000; the taxable interest is 12,000 − 10,000 = $2,000 every year.", "c"],
  ["Compared with accrual taxation, the main advantage of prescribed annuity taxation is that it:",
    ["Defers tax by levelling the interest", "Makes all payments tax-free", "Taxes all the interest in year one", "Converts interest into dividends"],
    "Prescribed taxation spreads interest evenly, so less is taxed in the early years than under accrual.", "r"],
  ["Which statement about a life annuity compared with a RRIF is correct?",
    ["It removes longevity risk", "It offers more flexibility", "It leaves more to the estate", "It allows changing investments"],
    "A life annuity guarantees income for life, transferring longevity and market risk to the insurer.", "r"],
  ["If the insurer that issued a client's annuity fails, Assuris protects her monthly income up to:",
    ["The higher of $2,000 or 90%", "The lower of $2,000 or 85%", "$100,000 of total value", "100% of income, always"],
    "Assuris protects annuity income to the higher of $2,000 a month or 90% of the promised income.", "r"],
  ["A client wants income that rises each year to keep up with inflation. What is the trade-off of an indexed annuity?",
    ["A lower starting payment", "No income for 10 years", "Payments stop at age 80", "Fully taxable payments"],
    "Indexed annuities start lower than level annuities because future payments increase.", "s"],
];

window.GLOSSARY.push(
  ["Straight life annuity", "Payments for life, stopping at death; the highest payment of the life options.", "lqann"],
  ["Joint and last survivor annuity", "Payments continue until the second spouse dies.", "lqann"],
  ["Term-certain annuity", "Payments for a fixed period; remaining payments go to the beneficiary at death.", "lqann"],
  ["Prescribed annuity", "Non-registered annuity taxed with interest spread evenly over all payments.", "lqann"],
  ["Assuris (annuities)", "Protects annuity income to the higher of $2,000 a month or 90%.", "lqann"]
);
