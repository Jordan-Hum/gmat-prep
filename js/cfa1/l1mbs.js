// CFA Level I · Fixed Income · Learning module 19: Mortgage-Backed Security (MBS) Instrument and Market Features.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1mbs = `
<p class="syl">CFA Level I · Fixed Income (11–14%) · Learning module 19 of 19 · Mortgage-Backed Security (MBS) Instrument and Market Features</p>
<p>Mortgage-backed securities are the largest part of the securitized market. The key risk is <b>prepayment</b>: homeowners can repay early, usually when rates fall. This lesson covers residential mortgage features, agency and non-agency RMBS, pass-through securities and prepayment measures (SMM, CPR, PSA), how CMOs reallocate prepayment risk, and commercial MBS.</p>

<h3>1. Residential mortgage loans</h3>
<table>
  <tr><th>Feature</th><th>Options</th></tr>
  <tr><td>Interest rate</td><td><b>Fixed rate</b>; <b>adjustable (ARM)</b>, reset to a reference rate plus a margin; <b>hybrid</b> (fixed for a few years, then adjustable); convertible (can switch between fixed and adjustable)</td></tr>
  <tr><td>Amortization</td><td>Fully amortizing (level payments), partially amortizing (balloon), interest-only for a period</td></tr>
  <tr><td>Prepayment</td><td>Most allow early repayment; some charge a <b>prepayment penalty</b></td></tr>
  <tr><td>Foreclosure rights</td><td><b>Recourse</b> loans: the lender can claim the borrower's other assets if the sale of the house doesn't cover the debt. <b>Non-recourse</b>: only the property; borrowers may "strategically default" if the house is worth less than the loan</td></tr>
</table>
<div class="ex"><b>Example:</b> a $300,000 30-year fixed-rate mortgage at 6% (0.5% a month). Payment: N = 360, I/Y = 0.5, PV = 300,000, CPT PMT = <b>$1,798.65</b>. Month 1 interest = $1,500; scheduled principal = <b>$298.65</b>.<br><b>Loan-to-value (LTV)</b> = loan / property value; a $400,000 loan on a $500,000 house has an LTV of <b>80%</b>. Lower LTV means more borrower equity and lower credit risk.</div>
<ul>
  <li><b>Agency RMBS</b> (US): guaranteed by Ginnie Mae (full faith and credit of the US government) or by government-sponsored enterprises Fannie Mae and Freddie Mac. Loans must be <b>conforming</b> (meet size and credit standards). Credit risk is minimal; the main risk is prepayment.</li>
  <li><b>Non-agency RMBS</b>: issued by private entities, often with non-conforming loans; need <b>credit enhancement</b>, usually a senior/subordinated structure (with a "shifting interest" mechanism that directs prepayments to senior tranches early on, so the subordinate cushion grows).</li>
</ul>

<h3>2. Mortgage pass-through securities <span class="hot">Highly tested</span></h3>
<ul>
  <li>Investors receive a pro rata share of the pool's cash flows (interest, scheduled principal, prepayments), less servicing and guarantee fees. So the <b>pass-through rate is below the mortgage rate</b>.</li>
  <li>Pool characteristics: <b>weighted average coupon (WAC)</b> and <b>weighted average maturity (WAM)</b>. <b>Weighted average life (WAL)</b> = average time until principal is received; faster prepayments shorten it.</li>
</ul>
<h4>Prepayment risk</h4>
<table>
  <tr><th>Risk</th><th>When</th><th>Effect on investors</th></tr>
  <tr><td><b>Contraction risk</b></td><td>Rates <b>fall</b>: homeowners refinance, prepayments speed up</td><td>Principal returned early, reinvested at lower rates; price gains are limited (<b>negative convexity</b>, like a callable bond)</td></tr>
  <tr><td><b>Extension risk</b></td><td>Rates <b>rise</b>: prepayments slow down</td><td>Investors are stuck with below-market coupons for longer; WAL lengthens and prices fall</td></tr>
</table>
<p>Prepayments also depend on housing turnover (people moving), the economy, and <b>burnout</b> (pools that already passed up chances to refinance prepay more slowly).</p>
<h4>Measuring prepayment speed</h4>
<div class="formula">Single monthly mortality (SMM) = prepayment in month / (beginning balance − scheduled principal)<br>Conditional prepayment rate (CPR) = 1 − (1 − SMM)<sup>12</sup><br>PSA benchmark (100 PSA): CPR starts at 0.2% in month 1, rises 0.2% a month to 6% at month 30, then stays at 6%. x PSA = x/100 × that path</div>
<div class="ex"><b>Example:</b> SMM 0.8% → CPR = 1 − 0.992¹² = <b>9.19%</b>. CPR 6% → SMM = 1 − 0.94<sup>1/12</sup> = 0.514%.<br>150 PSA in month 10: 1.5 × (0.2% × 10) = <b>3% CPR</b>; after month 30: 1.5 × 6% = <b>9% CPR</b>.<br>A pool with a $100 million balance, $0.3 million scheduled principal and an SMM of 0.5% prepays 0.005 × 99.7 = <b>$0.4985 million</b> that month.</div>

<h3>3. Collateralized mortgage obligations (CMOs) <span class="hot">Highly tested</span></h3>
<p>CMOs split pass-through cash flows into tranches with different exposures to prepayment risk. They <b>redistribute</b> prepayment risk; they don't eliminate it.</p>
<table>
  <tr><th>Structure</th><th>How it works</th></tr>
  <tr><td><b>Sequential-pay</b></td><td>All tranches get interest, but principal (scheduled and prepaid) goes to tranche A until it's retired, then B, and so on. Early tranches have less extension risk but absorb more contraction risk; later tranches are protected from contraction but have more extension risk</td></tr>
  <tr><td><b>PAC and support (companion)</b></td><td>The <b>planned amortization class (PAC)</b> gets a set principal schedule as long as prepayments stay within a band (e.g. 100–300 PSA). The <b>support</b> tranche absorbs the variation: it gets extra principal when prepayments are fast and less when slow, so it carries most of the contraction and extension risk</td></tr>
  <tr><td><b>Floaters and inverse floaters</b></td><td>A fixed-rate tranche split into a floating-rate tranche and an inverse floater</td></tr>
</table>

<h3>4. Commercial mortgage-backed securities (CMBS)</h3>
<ul>
  <li>Backed by loans on <b>income-producing</b> property (offices, malls, apartments, hotels). Loans are usually <b>non-recourse</b>, so credit analysis focuses on the property:</li>
</ul>
<div class="formula">Debt service coverage ratio (DSCR) = net operating income / debt service · LTV = loan / appraised value</div>
<div class="ex"><b>Example:</b> NOI $1.8 million and annual debt service $1.5 million → DSCR = <b>1.2×</b>. Higher DSCR and lower LTV mean less credit risk.</div>
<ul>
  <li><b>Call (prepayment) protection</b> is much stronger than in RMBS.
    <ul>
      <li>At the <b>loan level</b>: prepayment lockouts, prepayment penalty points, <b>yield maintenance</b> charges (make the lender whole), and <b>defeasance</b> (the borrower buys government securities that replicate the loan's payments).</li>
      <li>At the <b>structure level</b>: sequential tranching by credit rating, so lower-rated tranches absorb losses and higher ones are repaid first.</li>
    </ul>
  </li>
  <li>Many commercial loans have <b>balloon payments</b>. If the borrower can't refinance the balloon, the loan is extended: <b>balloon risk</b>, a type of extension risk for investors.</li>
</ul>

<div class="how"><b>How it's tested:</b> mortgage features (recourse, ARM, LTV), agency vs non-agency, contraction vs extension risk, SMM ↔ CPR conversions and PSA speeds, prepayment amounts, sequential and PAC/support CMOs, and CMBS features (DSCR, LTV, call protection, balloon risk).</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe residential mortgage features and agency vs non-agency RMBS.</li>
  <li>Describe pass-through securities and contraction and extension risk.</li>
  <li>Calculate SMM, CPR and PSA-based prepayment rates and prepayment amounts.</li>
  <li>Explain how sequential-pay and PAC/support CMOs redistribute prepayment risk.</li>
  <li>Describe CMBS, including DSCR, LTV, call protection and balloon risk.</li>
</ul></div>
`;

window.QB_HARD.l1mbs = [
  ["When interest rates fall sharply, holders of mortgage-backed securities face:",
    ["Contraction risk", "Extension risk", "Balloon risk"],
    "Lower rates prompt refinancing, so prepayments speed up and principal returns early, to be reinvested at lower rates.", "r"],
  ["A mortgage pool's single monthly mortality rate is 0.5%. Its conditional prepayment rate (CPR) is closest to:",
    ["5.84%", "6.00%", "0.50%"],
    "CPR = 1 − (1 − SMM)^12 = 1 − 0.995^12 = 5.84%.", "c"],
  ["Under the PSA benchmark, at 100 PSA the conditional prepayment rate from month 30 onward is:",
    ["6%", "0.2%", "12%"],
    "100 PSA: CPR starts at 0.2% and rises 0.2% per month until reaching 6% in month 30, then stays at 6%. 200 PSA would be 12%.", "r"],
  ["In a sequential-pay CMO, the first tranche:",
    ["Receives all principal payments until retired", "Receives principal pro rata alongside the other tranches", "Has the most extension risk in the structure"],
    "Sequential-pay tranches receive principal in order; the first tranche is paid off first, giving it the shortest expected life.", "r"],
  ["In a CMO with planned amortization class (PAC) and support tranches, the support tranche:",
    ["Absorbs prepayment variability, so it has more risk", "Has the most predictable cash flows of any tranche in the deal", "Is protected from all prepayment risk by the PAC"],
    "Support tranches take excess or deficient principal so the PAC can follow its schedule within its prepayment band.", "r"],
  ["Which provides call (prepayment) protection at the individual loan level in CMBS?",
    ["Prepayment lockouts and defeasance", "Sequential-pay tranching", "Overcollateralization of the pool"],
    "Loan-level protection includes lockouts, defeasance, prepayment penalty points and yield maintenance. Sequential tranching gives structural protection.", "r"],
  ["The risk that a commercial mortgage borrower can't refinance a balloon payment at maturity creates:",
    ["Extension risk for CMBS investors", "Contraction risk for CMBS investors", "Faster prepayments for CMBS investors"],
    "If the borrower can't refinance, the loan is extended (or defaults), lengthening the investors' cash flows: balloon risk is a form of extension risk.", "r"],
  ["A homeowner borrows $300,000 for 30 years at a fixed 6% with monthly payments. The principal repaid in the first month is closest to:",
    ["$298.65", "$1,500.00", "$833.33"],
    "Payment = $1,798.65; interest = 300,000 × 0.5% = $1,500; principal = $298.65.", "c"],
  ["A mortgage of $400,000 is secured by a house worth $500,000. Its loan-to-value ratio is:",
    ["80%", "125%", "20%"],
    "400 / 500 = 80%. 20% is the borrower's equity share.", "c"],
  ["With a non-recourse mortgage, if the house is sold for less than the loan balance, the lender:",
    ["Can't claim the borrower's other assets", "Can claim the borrower's other assets", "Is repaid in full by the government"],
    "Non-recourse lenders can look only to the property, which can encourage strategic default.", "r"],
  ["The pass-through rate on a mortgage pass-through security is lower than the mortgage rate on the pool because of:",
    ["Servicing and guarantee fees", "Prepayment penalties paid", "Credit enhancement costs"],
    "Fees for servicing and guaranteeing the pool are deducted before cash is passed to investors.", "r"],
  ["A mortgage pool has a single monthly mortality rate of 0.8%. Its CPR is closest to:",
    ["9.19%", "9.60%", "0.07%"],
    "1 − 0.992¹² = 9.19%. 9.60% simply multiplies by 12.", "c"],
  ["At 150 PSA, the conditional prepayment rate in month 10 is:",
    ["3.0%", "2.0%", "9.0%"],
    "100 PSA in month 10 = 0.2% × 10 = 2%; 150 PSA = 1.5 × 2% = 3%. 9% applies from month 30.", "c"],
  ["A pool's beginning balance is $100 million, scheduled principal is $0.3 million, and the SMM is 0.5%. The prepayment for the month is closest to:",
    ["$0.4985 million", "$0.5000 million", "$0.5015 million"],
    "SMM applies to the balance after scheduled principal: 0.005 × 99.7 = $0.4985 million.", "c"],
  ["When interest rates rise, mortgage pass-through investors face:",
    ["Extension risk", "Contraction risk", "Balloon risk"],
    "Prepayments slow, so investors hold below-market coupons longer and the WAL lengthens.", "r"],
  ["Mortgage pass-through securities have negative convexity because:",
    ["Prepayments speed up when rates fall", "Their coupons reset when rates rise", "They have no credit enhancement"],
    "Faster prepayments when rates fall limit price gains, like a callable bond.", "r"],
  ["Collateralized mortgage obligations:",
    ["Reallocate prepayment risk", "Eliminate prepayment risk entirely", "Remove credit risk from non-agency pools"],
    "CMOs reshape who bears prepayment risk; the total risk of the pool is unchanged.", "r"],
  ["In a sequential-pay CMO, the last tranche to receive principal has the most:",
    ["Extension risk", "Contraction risk", "Credit risk"],
    "Later tranches wait longest for principal and lengthen most when prepayments slow.", "r"],
  ["A commercial property generates NOI of $1.8 million, and the loan's annual debt service is $1.5 million. The DSCR is:",
    ["1.20×", "0.83×", "1.50×"],
    "1.8 / 1.5 = 1.20×. 0.83× inverts the ratio.", "c"],
  ["In CMBS, a borrower who wants to prepay buys government securities that replicate the loan's remaining payments. This is called:",
    ["Defeasance", "Yield maintenance", "A prepayment lockout"],
    "Defeasance substitutes government securities for the loan; yield maintenance is a penalty payment.", "r"],
  ["Compared with agency RMBS, non-agency RMBS most likely require:",
    ["Credit enhancement for investors", "No credit analysis of the loans", "A full government guarantee"],
    "Without a government or GSE guarantee, non-agency deals use subordination and other enhancements.", "r"],
];

window.GLOSSARY.push(
  ["Prepayment risk","Contraction risk (rates fall, prepayments speed up) and extension risk (rates rise, prepayments slow).","l1mbs"],
  ["CPR and PSA","CPR = 1 − (1 − SMM)^12. 100 PSA: CPR rises 0.2%/month to 6% at month 30.","l1mbs"],
  ["CMO tranches","Sequential-pay (principal in order), PAC (scheduled within a band) with support tranches absorbing variability.","l1mbs"],
  ["Contraction vs extension risk", "Faster prepayments when rates fall vs slower prepayments when rates rise.", "l1mbs"],
  ["Loan-to-value (LTV)", "Loan amount / property value; lower means less credit risk.", "l1mbs"],
  ["PAC tranche", "Planned amortization class with a set principal schedule within a prepayment band; support tranches absorb variation.", "l1mbs"],
  ["Defeasance", "CMBS prepayment protection: borrower buys government securities replicating the loan's payments.", "l1mbs"]
);
