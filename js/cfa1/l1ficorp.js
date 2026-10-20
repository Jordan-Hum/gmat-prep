// CFA Level I · Fixed Income · Learning module 4: Fixed-Income Markets for Corporate Issuers.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1ficorp = `
<p class="syl">CFA Level I · Fixed Income (11–14%) · Learning module 4 of 19 · Fixed-Income Markets for Corporate Issuers</p>
<p>Companies borrow short term to fund working capital and long term to fund investment. This lesson covers short-term funding for non-financial companies (bank loans, credit lines, factoring, commercial paper), short-term funding for banks (deposits, interbank funds, certificates of deposit, repos), and long-term corporate debt.</p>

<h3>1. Short-term funding for non-financial companies</h3>
<table>
  <tr><th>Source</th><th>Key features</th></tr>
  <tr><td><b>Uncommitted line of credit</b></td><td>The bank may lend up to a limit but can refuse; cheapest but least reliable</td></tr>
  <tr><td><b>Committed (regular) line of credit</b></td><td>The bank must lend up to the limit for a set period (often a year); the borrower pays a <b>commitment fee</b> on the unused amount</td></tr>
  <tr><td><b>Revolving credit agreement (revolver)</b></td><td>A committed line for several years; can be drawn, repaid and redrawn</td></tr>
  <tr><td><b>Secured (asset-based) loans</b></td><td>Backed by receivables or inventory; used by weaker borrowers</td></tr>
  <tr><td><b>Factoring</b></td><td>The company <b>sells its receivables</b> to a factor at a discount; the factor collects them (and may take the credit risk)</td></tr>
  <tr><td><b>Bilateral vs syndicated loans</b></td><td>One bank vs a group of banks sharing a large loan</td></tr>
  <tr><td><b>Commercial paper (CP)</b></td><td>Short-term, <b>unsecured</b> promissory notes issued by companies with strong credit, usually at a discount. US CP matures in up to 270 days (to avoid registration); Eurocommercial paper (ECP) up to 364 days. Used for working capital and as bridge financing</td></tr>
</table>
<div class="ex"><b>Example 1:</b> a $50 million committed line has a 0.25% annual fee on unused amounts. If the company draws $20 million all year, the fee = 0.25% × $30 million = <b>$75,000</b> (plus interest on the $20 million).<br><b>Example 2:</b> 90-day CP with $1 million face value is sold at a 5% discount rate (360-day year): price = 1,000,000 × (1 − 0.05 × 90/360) = <b>$987,500</b>.</div>
<p>CP issuers usually repay maturing paper by issuing new paper. The risk that they can't do so (e.g. in a market crisis) is <b>rollover risk</b>, so issuers keep <b>backup lines of credit</b> and rating agencies expect them.</p>

<h3>2. Short-term funding for banks and other financial institutions</h3>
<ul>
  <li><b>Retail deposits</b>: demand (checking) deposits, savings accounts, and time deposits. Retail deposits are a stable, cheap source of funding.</li>
  <li><b>Central bank funds</b>: banks lend excess reserves to each other overnight (or for short terms) at the central bank funds rate (e.g. the US fed funds rate).</li>
  <li><b>Interbank deposits</b>: unsecured lending between banks for terms from overnight to a year.</li>
  <li><b>Certificates of deposit (CDs)</b>: time deposits with a fixed maturity and rate. <b>Negotiable</b> CDs (usually large denominations) can be sold in the secondary market; <b>non-negotiable</b> CDs can only be cashed early with a penalty.</li>
</ul>

<h3>3. Repurchase agreements (repos) <span class="hot">Highly tested</span></h3>
<p>In a <b>repo</b>, one party sells a security and agrees to buy it back later at a higher price. Economically it's a <b>collateralized loan</b>: the seller borrows cash and the security is collateral. From the cash lender's side it's a <b>reverse repo</b>.</p>
<div class="formula">Repurchase price = amount borrowed × (1 + repo rate × days / 360)<br>Haircut (repo margin) = (collateral value − amount lent) / collateral value</div>
<div class="ex"><b>Example:</b> a dealer delivers bonds worth $10 million and borrows $9.8 million for 30 days at a 4% repo rate.<br>Haircut = (10 − 9.8) / 10 = <b>2%</b>.<br>Repurchase price = 9,800,000 × (1 + 0.04 × 30/360) = <b>$9,832,667</b> (interest of $32,667).</div>
<ul>
  <li><b>Overnight repo</b> = one day; <b>term repo</b> = longer. In a <b>tri-party repo</b>, a third party (custodian) handles collateral and settlement.</li>
  <li><b>The haircut protects the lender</b> if the collateral's value falls or the borrower defaults. Haircuts are larger for riskier, less liquid or longer-maturity collateral, and for weaker borrowers.</li>
  <li><b>The repo rate is lower</b> when collateral is high quality, when the term is short, when the collateral must be delivered to the lender (rather than held by the borrower), when interest rates in general are low, and when the specific collateral is in high demand ("special" collateral that lenders want to borrow).</li>
  <li>Risks: <b>default risk</b> of the counterparty, <b>collateral risk</b> (fall in value), and <b>margining risk</b> (collateral calls).</li>
</ul>

<h3>4. Long-term corporate debt</h3>
<ul>
  <li><b>Investment grade issuers</b> often issue unsecured bonds with few covenants, from a few years up to 30 years or more.</li>
  <li><b>High-yield issuers</b> pay higher coupons and more often issue secured bonds, with more covenants and call features (so they can refinance if their credit improves).</li>
  <li><b>Medium-term notes (MTNs)</b>: continuously offered by an issuer through agents, in a range of maturities (from about 9 months to 30 years or more) chosen to suit investors; often under a shelf registration.</li>
  <li>Companies stagger maturities to reduce refinancing (rollover) risk.</li>
</ul>

<div class="how"><b>How it's tested:</b> uncommitted vs committed lines and commitment fees, factoring, CP features and rollover risk, deposit and wholesale funding for banks, repo mechanics (repurchase price, haircut, reverse repo) and what lowers or raises repo rates, MTNs, and differences between investment grade and high-yield issuers.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe bank loans, credit lines, revolvers, secured loans, factoring and commercial paper.</li>
  <li>Describe retail deposits, central bank funds, interbank funds and CDs as bank funding.</li>
  <li>Describe repos and reverse repos, calculate the repurchase price and haircut, and explain repo rate drivers and risks.</li>
  <li>Describe long-term corporate debt, including MTNs.</li>
</ul></div>
`;

window.QB_HARD.l1ficorp = [
  ["In a repurchase agreement, the haircut (repo margin) is:",
    ["The collateral's value minus the amount lent", "The interest rate paid on the repo loan", "The fee paid to the custodian that holds the collateral"],
    "The lender advances less than the collateral's market value; the difference is the haircut, which protects against a fall in the collateral's value.", "r"],
  ["Commercial paper issuers typically maintain backup lines of credit mainly to manage:",
    ["Rollover risk", "Interest rate risk", "Currency risk"],
    "If the issuer can't sell new paper to repay maturing paper (e.g. in a market disruption), the backup line provides liquidity.", "r"],
  ["Compared with an uncommitted line of credit, a committed line of credit:",
    ["Obliges the bank to lend, for a fee", "Allows the bank to refuse to lend", "Has no cost until it is drawn"],
    "A committed line is a firm promise to lend up to the limit; the borrower pays a commitment fee on unused amounts.", "r"],
  ["A company has a $50 million committed line with a 0.25% annual fee on unused amounts. It draws $20 million for the whole year. The commitment fee is:",
    ["$75,000", "$125,000", "$50,000"],
    "Fee on unused $30 million = 0.25% × 30,000,000 = $75,000. $125,000 charges the fee on the full line.", "c"],
  ["A company sells its accounts receivable at a discount to a firm that will collect them. This is:",
    ["Factoring", "A revolving credit agreement", "Commercial paper issuance"],
    "In factoring, the company sells receivables to a factor; it's not a loan secured by them.", "r"],
  ["Commercial paper is best described as:",
    ["Short-term unsecured debt of strong issuers", "Long-term secured debt of weaker issuers", "Short-term deposits at a commercial bank"],
    "CP is unsecured, usually issued at a discount, by companies with high credit ratings.", "r"],
  ["90-day commercial paper with a face value of $1 million is issued at a 5% discount rate (360-day year). Its price is:",
    ["$987,500", "$950,000", "$987,654"],
    "1,000,000 × (1 − 0.05 × 90/360) = $987,500. $987,654 treats 5% as an add-on yield.", "c"],
  ["A dealer sells bonds worth $10 million under a repo and receives $9.8 million. The haircut is:",
    ["2.0%", "2.04%", "0.2%"],
    "(10 − 9.8) / 10 = 2.0% of collateral value. 2.04% divides by the amount lent.", "c"],
  ["A dealer borrows $9.8 million for 30 days in a repo at a 4% repo rate (360-day year). The repurchase price is closest to:",
    ["$9,832,667", "$10,032,667", "$9,800,000"],
    "9,800,000 × (1 + 0.04 × 30/360) = $9,832,667. $10,032,667 adds interest to the collateral value.", "c"],
  ["From the perspective of the party lending cash and receiving collateral, a repurchase agreement is called:",
    ["A reverse repo", "A term repo", "A tri-party repo"],
    "The cash lender's side of a repo is a reverse repo.", "r"],
  ["All else equal, the repo rate is most likely to be lower when:",
    ["The collateral is high quality", "The repo term is longer", "The collateral is in low demand"],
    "High-quality collateral, shorter terms and collateral in high demand (special) all lower the repo rate.", "r"],
  ["A repo haircut is most likely to be larger when the collateral is:",
    ["Less liquid and lower rated", "A short-term government bill", "Delivered to the lender"],
    "Riskier, less liquid collateral needs a bigger cushion against a fall in value.", "r"],
  ["Compared with wholesale funding, retail deposits are generally viewed as:",
    ["A more stable source of funds", "A more volatile source of funds", "More expensive for the bank"],
    "Retail depositors are numerous, often insured and less likely to withdraw suddenly.", "r"],
  ["Banks lending their excess reserves to other banks overnight are trading in the:",
    ["Central bank funds market", "Commercial paper market", "Medium-term note market"],
    "Central bank funds (e.g. fed funds) are short-term loans of reserves between banks.", "r"],
  ["A negotiable certificate of deposit differs from a non-negotiable one in that it:",
    ["Can be sold in the secondary market", "Pays a floating rate of interest", "Can be cashed early without penalty"],
    "Negotiable CDs can be traded before maturity; non-negotiable CDs carry an early withdrawal penalty.", "r"],
  ["Debt securities offered continuously by an issuer in a range of maturities chosen to suit investors are:",
    ["Medium-term notes", "Syndicated loans", "Interbank deposits"],
    "MTNs are offered continuously, often under a shelf registration, with flexible maturities.", "r"],
];

window.GLOSSARY.push(
  ["Committed vs uncommitted line", "Bank must lend (commitment fee on unused amount) vs bank may refuse.", "l1ficorp"],
  ["Factoring", "Selling receivables to a factor at a discount.", "l1ficorp"],
  ["Commercial paper", "Short-term unsecured discount notes of strong issuers; backed by credit lines to manage rollover risk.", "l1ficorp"],
  ["Repo / reverse repo", "Sell a security and buy it back later (collateralized borrowing) / the cash lender's side.", "l1ficorp"],
  ["Medium-term notes (MTNs)", "Continuously offered debt in a range of maturities.", "l1ficorp"]
);
