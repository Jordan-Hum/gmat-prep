// Study notes per topic (HTML), organized by the learning outcomes in CIRO's CIRE syllabus (January 2025).
// "syl" = which outcomes the page covers; "key" boxes = answers confirmed by CIRO's official practice exam;
// "trap" callouts = common exam mistakes.
window.NOTES = {
reg: `
<p class="syl">CIRE Element 1 · Overview of the Canadian securities regulatory framework · outcomes 1.1–1.11 · about 11 of 110 exam questions</p>

<h3>1.1 CSA and the provincial regulators</h3>
<ul>
  <li>Canada has <b>no federal securities regulator</b>. Each province and territory has its own regulator (OSC, AMF, BCSC, ASC…).</li>
  <li>The <b>CSA</b> is their umbrella group. Its mandate: <b>protect investors</b> from unfair, improper or fraudulent practices, foster <b>fair, efficient and transparent markets</b>, and reduce <b>systemic risk</b>.</li>
  <li>The CSA <b>harmonizes</b> rules; it is not itself a regulator with its own act.</li>
</ul>
<table>
  <tr><th>Document</th><th>What it is</th></tr>
  <tr><td>Securities act</td><td>Statute passed by a provincial legislature</td></tr>
  <tr><td><b>National Instrument (NI)</b></td><td>Rule adopted in <b>every</b> jurisdiction (force of law). e.g. NI 31-103 registration, NI 45-106 prospectus exemptions, NI 81-102 funds</td></tr>
  <tr><td><b>Multilateral Instrument (MI)</b></td><td>Rule adopted by <b>some</b> jurisdictions only</td></tr>
  <tr><td>National Policy</td><td>Guidance on how regulators will act; not binding law</td></tr>
  <tr><td><b>Companion Policy (CP)</b></td><td>Explains how regulators <b>interpret</b> a related instrument</td></tr>
  <tr><td>Staff Notice</td><td>Staff views and guidance; creates no new obligations</td></tr>
</table>
<ul>
  <li><b>Prospectuses</b>: the regulator issues a <b>receipt</b> when the prospectus meets disclosure rules. A receipt is <b>not an endorsement</b> of the investment and not a guarantee.</li>
  <li><b>Enforcement powers</b>: cease trade orders, administrative penalties, reprimands, denying exemptions, banning people from the markets, and quasi-criminal prosecution under the securities act. Criminal Code charges are laid by police and the Crown.</li>
</ul>

<h3>1.2 CIRO</h3>
<ul>
  <li>Formed <b>June 1, 2023</b> by merging <b>IIROC and the MFDA</b>. It's a <b>self-regulatory organization (SRO)</b> recognized and overseen by the CSA members.</li>
  <li><b>Jurisdiction</b>: investment dealers, mutual fund dealers, their Approved Persons, and <b>trading on Canadian debt and equity marketplaces</b>.</li>
  <li><b>Rules</b> bind members (IDPC Rules = Investment Dealer and Partially Consolidated Rules; MFD Rules). <b>Guidance notes</b> explain how CIRO expects rules to be met. <b>Forms</b> are required filings.</li>
  <li><b>UMIR</b> (Universal Market Integrity Rules): CIRO sets and enforces trading rules for <b>fair and transparent trading</b> on all marketplaces.</li>
  <li><b>Enforcement</b>: reprimand, fines (up to <b>$5 million per contravention</b> or 3× the benefit), suspension, permanent bar, expulsion of a firm, disgorgement. CIRO <b>cannot jail anyone</b> and generally <b>doesn't award compensation</b>.</li>
</ul>

<h3>1.3 Registration and approval</h3>
<ul>
  <li>Firms register with the provincial regulator(s) in each jurisdiction where they do business. An <b>investment dealer must also be a CIRO member</b>.</li>
  <li>Individuals (e.g. dealing representatives) must be registered; for investment dealers, <b>CIRO approves individuals</b> and handles their registration on behalf of the provincial regulators.</li>
  <li>Registration tests: <b>proficiency</b> (e.g. the CIRE), <b>integrity</b> and <b>solvency</b>. Passing the exam alone isn't registration.</li>
</ul>

<h3>1.4 Marketplaces</h3>
<table>
  <tr><th>Marketplace</th><th>Key features</th></tr>
  <tr><td><b>Exchange</b> (TSX, TSXV, CSE, Montréal Exchange)</td><td><b>Lists</b> issuers, sets listing requirements, can regulate members</td></tr>
  <tr><td><b>ATS</b> (alternative trading system)</td><td>Trading only. <b>Cannot list</b> issuers or regulate subscribers. Registered as a dealer and a CIRO member</td></tr>
  <tr><td><b>CTP</b> (crypto-asset trading platform)</td><td>Must <b>register</b> with securities regulators and meet investor protection terms: custody, disclosure, product limits, <b>purchase limits</b> for non-eligible investors, appropriateness checks, <b>transparent pricing</b>. An ATS offering crypto may need <b>separate approval</b> for crypto trading</td></tr>
  <tr><td><b>FORM</b> (foreign organized regulated market)</td><td>An exchange <b>outside Canada</b> regulated by a recognized foreign regulator. UMIR allows some trades there</td></tr>
</table>
<ul><li>Secondary markets give <b>liquidity</b>, which makes investors willing to buy new issues in the primary market.</li></ul>

<h3>1.5 Clearing agencies</h3>
<ul>
  <li><b>CDS</b> (Canadian Depository for Securities): Canada's <b>central depository</b>. <b>Clears and settles</b> equity and debt trades by <b>book entry</b>.</li>
  <li><b>CDCC</b> (Canadian Derivatives Clearing Corporation): clears <b>exchange-traded derivatives</b> (Montréal Exchange). It's the counterparty to both sides, so it <b>guarantees performance</b>.</li>
</ul>

<h3>1.6 CIPF</h3>
<ul>
  <li><b>Objective</b>: protect clients' property (cash and securities) when a <b>member firm becomes insolvent</b>.</li>
  <li>Up to <b>$1 million per account category</b>: general accounts (cash, margin, etc.) combined; registered retirement accounts (RRSP, RRIF…) combined; and so on.</li>
  <li><b>Not covered</b>: market losses, unsuitable advice, issuer defaults. <b>Not eligible</b>: anyone who caused or materially contributed to the insolvency.</li>
  <li><b>Pooling</b>: under BIA Part XII, client property forms a <b>customer pool fund</b> shared <b>pro rata by net equity</b>, ahead of general creditors. CIPF covers eligible shortfalls. Securities in the <b>client's own name</b> are returned to the client.</li>
  <li><b>Funding</b>: <b>assessments on member firms</b>. Separately, CIRO requires dealers to keep <b>adequate capital</b> (with an early warning system).</li>
</ul>

<h3>1.7 Other regulators and agencies</h3>
<table>
  <tr><th>Body</th><th>Role</th></tr>
  <tr><td><b>FSRA</b> (Ontario)</td><td>Non-securities sectors in Ontario: <b>insurance, pensions</b>, credit unions, mortgage brokers, loan and trust companies, financial planner titles</td></tr>
  <tr><td><b>Bank of Canada</b></td><td><b>Monetary policy</b>, bank notes, financial system stability, government funds management</td></tr>
  <tr><td><b>RCMP IMET</b></td><td><b>Criminal</b> investigations of serious capital markets fraud</td></tr>
  <tr><td><b>FINTRAC</b></td><td>Financial intelligence unit: receives reports, supervises AML compliance, issues penalties (doesn't prosecute)</td></tr>
  <tr><td><b>OSFI</b></td><td>Prudential regulator of <b>federally regulated</b> banks, insurers, trust and loan companies, and pension plans</td></tr>
  <tr><td><b>Privacy commissioners</b></td><td>Federal commissioner oversees <b>PIPEDA</b>; Alberta, B.C. and Québec have their own</td></tr>
  <tr><td><b>OBSI</b></td><td>Free, independent ombudsman for unresolved complaints; recommends up to <b>$350,000</b></td></tr>
  <tr><td><b>US regulators</b></td><td><b>SEC</b> (securities), <b>FINRA</b> (broker-dealer SRO), <b>CFTC</b> (futures and swaps), NFA. Dealing with US residents requires US registration or an exemption</td></tr>
</table>

<h3>1.8–1.9 Bank Act, BIA Part XII, Criminal Code</h3>
<ul>
  <li><b>Bank Act</b> (federal): regulates banks' <b>operation and stability</b>. Since 1987 banks may own investment dealers, which stay under securities regulation.</li>
  <li><b>BIA Part XII</b>: special rules for the bankruptcy of a securities firm (customer pool fund, see 1.6).</li>
  <li><b>Criminal Code</b>: insider trading and tipping, market manipulation, <b>fraud affecting the public market</b> (up to 14 years), money laundering, terrorist financing. Heavier penalties than securities acts.</li>
</ul>

<h3>1.10 Anti-money laundering (PCMLTFA)</h3>
<ul>
  <li><b>Stages</b>: <b>placement</b> (getting cash in, e.g. small deposits / structuring) → <b>layering</b> (moving it through transactions to hide the source, e.g. wires between countries) → <b>integration</b> (back into the economy, e.g. buying property).</li>
  <li><b>Compliance program</b>: appointed compliance officer, written up-to-date policies, <b>risk assessment</b> (clients, products, channels, geography), ongoing <b>training</b> for staff who deal with clients, and an <b>effectiveness review every 2 years</b>.</li>
  <li><b>Client ID</b>: valid government photo ID, credit file, or dual-process. Make a <b>third-party determination</b> when someone else is behind the account.</li>
  <li><b>Entities</b>: identify <b>beneficial owners (25%+)</b> within <b>30 days</b> of opening the account.</li>
  <li><b>PEPs</b>: foreign PEPs are always high risk (<b>enhanced due diligence</b>, source of funds, senior management approval) and stay PEPs for life. If an <b>existing client becomes a PEP</b>, apply <b>enhanced ongoing monitoring</b>. Family members and close associates count.</li>
</ul>
<table>
  <tr><th>Report to FINTRAC</th><th>When</th></tr>
  <tr><td>Suspicious transaction (STR)</td><td><b>As soon as practicable</b>, no minimum amount, includes attempts. <b>Never tip off</b> the client</td></tr>
  <tr><td>Large cash transaction</td><td><b>$10,000+</b> cash (one or several within 24 h), within 15 days</td></tr>
  <tr><td>Terrorist property</td><td><b>Immediately</b>; freeze it and also tell the RCMP and CSIS</td></tr>
</table>
<ul><li>Suspicious activity spotted by an advisor is <b>escalated internally</b> to the AML compliance officer.</li></ul>

<h3>1.11 Other laws</h3>
<ul>
  <li><b>PIPEDA</b>: the principal privacy law for keeping client data safe. Consent to collect, use and disclose, and new consent for a new purpose. Report breaches with a <b>real risk of significant harm</b>.</li>
  <li><b>CASL</b> (anti-spam): commercial emails need <b>consent, sender identification and an unsubscribe</b> option.</li>
  <li><b>Confidentiality agreements</b> bind people who receive corporate, client or third-party information to protect it.</li>
  <li><b>Company disclosure and shareholder rights</b>: see Company Analysis (5.7).</li>
</ul>

<div class="key"><b>CIRO's practice exam answers</b>
<ul>
  <li>CIPF's function: protection during <b>dealer insolvencies</b>.</li>
  <li>FSRA: regulates <b>pension funds and insurance</b>.</li>
  <li>Bank Act purpose: regulate banks' <b>operation and stability</b>.</li>
  <li>CIRO's role for UMIR: establish and enforce rules for <b>fair and transparent trading</b>.</li>
  <li>Existing client becomes a PEP: <b>enhanced ongoing due diligence</b> (not termination or freezing).</li>
  <li>AML record keeping: keep records at least <b>7 years from when created</b>.</li>
  <li>CTP with inconsistent pricing: ensure <b>pricing transparency</b> and show prices follow its stated policies.</li>
  <li>Clearing and settlement agency: <b>CDS</b>. Client data protection law: <b>PIPEDA</b>.</li>
</ul></div>
<div class="trap"><b>Exam trap:</b> CIPF ≠ CDIC. CIPF covers <b>missing</b> property at an <b>insolvent dealer</b>, never market losses or bad advice.</div>
`,

onboard: `
<p class="syl">CIRE Element 2 · Prospective client relationships · outcomes 2.1–2.11 · about 11 of 110 exam questions</p>

<h3>2.1 The client relationship model</h3>
<p>Four pillars:</p>
<ol>
  <li><b>Relationship disclosure</b>: what the client can expect (see Element 3, 3.4).</li>
  <li><b>Conflicts of interest</b>: identified, addressed in the client's best interest, disclosed.</li>
  <li><b>Suitability assessment</b>: every investment action must be suitable and put the client's interest first.</li>
  <li><b>Account reporting</b>: statements, an annual <b>charges and compensation report</b> (from 2026 it also shows ongoing <b>fund expenses</b> in dollars), and an annual <b>performance report</b> (money-weighted returns over 1, 3, 5, 10 years and since inception).</li>
</ol>
<ul><li><b>Time-weighted</b> return removes the effect of client deposits and withdrawals, so it's used to judge a <b>manager</b>. <b>Money-weighted</b> return reflects the <b>client's</b> own experience, so client reports use it.</li></ul>

<h3>2.2–2.3 Retail vs institutional clients</h3>
<ul>
  <li><b>Retail client</b> = any client that is <b>not</b> an institutional client.</li>
  <li><b>Institutional clients</b> (CIRO):
    <ul>
      <li>an accepted counterparty or accepted institution;</li>
      <li>a <b>regulated entity</b>;</li>
      <li>a registrant under securities law (<b>other than an individual</b>);</li>
      <li>a <b>non-individual</b> with over <b>$10 million</b> of securities and precious-metals bullion under administration or management;</li>
      <li>an <b>individual</b> over $10 million <b>who requests and consents</b>;</li>
      <li>a <b>hedger</b> who requests and consents (for its hedging accounts).</li>
    </ul></li>
  <li>Institutional clients get fewer protections: <b>no relationship disclosure required</b>, and a non-individual can <b>waive suitability in writing</b> if the dealer reasonably concludes it can evaluate recommendations on its own. AML rules still apply to everyone.</li>
</ul>

<h3>2.4 NI 45-106 exemptions: accredited investors</h3>
<ul>
  <li>Accredited investors can buy securities <b>without a prospectus</b>: they're presumed able to assess risk and absorb losses.</li>
  <li>Individuals: financial assets over <b>$1 million</b> (net of related debt); net income over <b>$200,000</b> (or <b>$300,000</b> with a spouse) in each of the last 2 years; or net assets of <b>$5 million</b>. Non-individuals: net assets of $5 million.</li>
  <li>Individuals relying on the income or $1 million test sign a <b>risk acknowledgement form</b>.</li>
  <li>NI 45-106 covers the <b>exemptions from preparing and filing a prospectus</b>.</li>
</ul>

<h3>2.5 The onboarding process</h3>
<ul>
  <li>Collect KYC and provide relationship disclosure <b>before</b> trading or advising. A designated supervisor approves new accounts.</li>
  <li><b>Institutional exceptions</b>: reduced KYC and disclosure; suitability can be waived (non-individuals).</li>
  <li><b>Permitted client</b> (NI 31-103): e.g. an individual with financial assets over $5 million or a non-individual with net assets of $25 million. A permitted client that isn't an individual can <b>waive suitability in writing</b>. <b>Individual retail clients</b> and <b>managed accounts</b> can't waive suitability.</li>
  <li>For corporations, partnerships and trusts, get <b>beneficial owners within 30 days</b> of opening the account; for a trust, review the <b>trust deed</b>.</li>
</ul>

<h3>2.6 Retail client information to collect</h3>
<table>
  <tr><th>Item</th><th>Examples</th></tr>
  <tr><td>Personal circumstances</td><td>Age, marital status, dependants, employment</td></tr>
  <tr><td>Financial circumstances</td><td>Income, net worth, liquidity needs</td></tr>
  <tr><td>Investment knowledge</td><td>Understanding of products and risks</td></tr>
  <tr><td><b>Risk profile</b></td><td><b>Risk tolerance</b> (willingness) + <b>risk capacity</b> (ability to absorb losses). If they differ, the lower generally governs</td></tr>
  <tr><td>Investment needs and objectives</td><td>Safety, income, growth</td></tr>
  <tr><td>Time horizon</td><td>Time until a significant part of the money is needed</td></tr>
</table>

<h3>2.7 Third parties in the client's life</h3>
<ul>
  <li><b>Power of attorney</b>: lets the attorney act for the client. Review it, keep a copy, confirm it covers the account. A <b>continuing</b> POA survives loss of capacity. A POA <b>ends at death</b> (then the executor acts).</li>
  <li><b>Trusted contact person (TCP)</b>: an individual <b>the client names</b>, whom the dealer may contact <b>with the client's written consent</b> about suspected exploitation, diminished capacity, contact details or legal representatives. Ask for one at opening and at KYC updates (the client may decline). A TCP <b>can't give instructions</b>.</li>
  <li><b>Temporary hold</b> (suspected exploitation or diminished capacity): notify the client with reasons and review at least every <b>30 days</b>.</li>
  <li><b>Lawyers, accountants, insurance agents</b>: share information only with the client's authorization, and document who they are and what they may do.</li>
</ul>

<h3>2.8–2.9 Cost, fees, turnover and taxes</h3>
<ul>
  <li>Cost <b>must be considered</b> in product selection, but the cheapest product isn't always required.</li>
  <li><b>Fees reduce the client's returns</b>, and the effect compounds over time.</li>
  <li>High <b>turnover</b> means more trading costs (TER) and more taxable gains distributed. <b>Taxes</b>: income in a TFSA/RRSP isn't taxed yearly; non-registered interest is taxed every year.</li>
</ul>
<div class="formula">Net profit = (Sell price − Buy price) × Shares − all fees. e.g. 500 shares bought at $40, sold at $50, $20 per trade → $5,000 − $40 = $4,960</div>
<div class="formula">Return after fees = (Proceeds − sell fee − (Cost + buy fee)) ÷ (Cost + buy fee)</div>

<h3>2.10 Account agreement and welcome package</h3>
<ul><li>Fee schedule; <b>CIRO account opening brochure</b> (CIRO's role and investor protections); conflict of interest disclosures; <b>complaint handling procedures and brochures</b>; relationship disclosure; account agreements (margin, etc.).</li></ul>

<h3>2.11 Client records</h3>
<ul><li>Documented, accurate, current and available to regulators promptly. CIRO's retention standard is <b>7 years</b>.</li></ul>

<div class="key"><b>CIRO's practice exam answers</b>
<ul>
  <li>A non-individual with over $10 million → <b>institutional client</b>. "A regulated entity" → institutional.</li>
  <li>Range of KYC info: <b>personal and financial circumstances, investment knowledge, needs, objectives and risk profile</b>.</li>
  <li>Beneficial owners of corporations, partnerships and trusts: within <b>30 days</b> of opening.</li>
  <li>TCP: an individual <b>identified by the client</b> whom the dealer may contact under the client's <b>written consent</b>.</li>
  <li>Impact of institutional status: <b>can waive suitability in writing</b>. Relationship disclosure for institutional clients: <b>not required</b>.</li>
  <li>Cost disclosure violation: <b>restricting disclosure of embedded fees</b>. Fees: <b>reduce</b> overall returns.</li>
  <li>Net profit calculation: subtract <b>both</b> transaction fees.</li>
</ul></div>
<div class="trap"><b>Exam trap:</b> an <b>individual</b> with over $10 million is <b>not</b> automatically institutional. They must request and consent.</div>
`,

kyc: `
<p class="syl">CIRE Element 3 · Scope of client relationships (part 1: roles, KYC, suitability) · outcomes 3.1–3.4, 3.7, 3.10–3.13 · Element 3 is the second-largest section, about 17 of 110 questions</p>

<h3>3.1–3.2 Registered Representative vs Investment Representative</h3>
<table>
  <tr><th>Registered Representative (RR)</th><th>Investment Representative (IR)</th></tr>
  <tr><td>Gives <b>recommendations</b>, manages portfolios (if approved), collects KYC, applies suitability</td><td>Answers enquiries, gives <b>quotes</b>, takes and enters orders, reports trades, corrects errors</td></tr>
  <tr><td>Retail or institutional</td><td>Retail or institutional. <b>Can't make recommendations</b>: refers the client to an RR</td></tr>
</table>
<ul>
  <li>Before entering an order, confirm: account, security, buy or sell, quantity, order type and price, duration.</li>
  <li><b>Errors</b> go through the firm's error procedures; the client must not bear the cost and nobody may profit from them.</li>
</ul>

<h3>3.3 Trust, agency and fiduciary duty</h3>
<ul>
  <li><b>Agent</b>: the dealer executes a client's order on a marketplace (earns a commission). <b>Principal</b>: the dealer trades from its own inventory (earns a markup).</li>
  <li><b>Trust</b>: a <b>relationship</b> (not a separate legal entity) in which property is transferred to a <b>trustee</b> to hold for <b>beneficiaries</b>.</li>
  <li><b>Fiduciary duty</b>: arises with <b>discretion</b>, client <b>reliance</b>, trust and vulnerability. A discretionary Portfolio Manager must put the <b>client's best interest above all other matters</b>.</li>
</ul>

<h3>3.4 Relationship disclosure information (RDI)</h3>
<ul>
  <li>Given <b>before</b> the first trade or advice, in <b>plain language</b>.</li>
  <li>Content: products, services and account types (fee-based, margin, leverage); their limitations (e.g. proprietary products only); account operation; charges and compensation; <b>how suitability is assessed</b> (account, household and portfolio level); the reports the client will get; complaint handling; and <b>how benchmarks are used</b> to assess performance.</li>
  <li>Significant changes must be communicated to clients.</li>
</ul>

<h3>3.7 & 3.10 Account appropriateness vs suitability</h3>
<table>
  <tr><th>Account appropriateness</th><th>Suitability determination</th></tr>
  <tr><td>Is the <b>type of account</b> right for the client? (advisory, managed, OEO, fee-based, margin). The dealer <b>explains the features and costs of the account types</b>.</td><td>Is each <b>investment action</b> (trade, recommendation, transfer in) right for the client?</td></tr>
  <tr><td>e.g. a buy-and-hold client in a 1.5% fee-based account = inappropriate ("reverse churning")</td><td>e.g. 60% in one small-cap stock = concentration problem</td></tr>
</table>

<h3>3.11 Suitability for retail clients</h3>
<ul>
  <li>Fundamental requirement: the action <b>puts the client's interest first</b>.</li>
  <li>Consider KYC, KYP, impact on the account (<b>concentration, liquidity</b>), <b>costs</b>, and a <b>reasonable range of alternatives</b>.</li>
  <li><b>Triggers</b>: recommendation or accepted order; securities <b>transferred or deposited</b> in; <b>change of RR</b>; <b>significant KYC change</b>.</li>
  <li>Client insists on an unsuitable trade: explain why, recommend an alternative, proceed only on the client's instruction, and <b>document</b> it.</li>
  <li>KYC updates: at least every <b>12 months</b> (managed) or <b>36 months</b> (others), and on any significant change (job loss, inheritance, risk tolerance change).</li>
  <li><b>Household-level</b> suitability is optional and supplements account-level; it never replaces it.</li>
</ul>

<h3>3.12–3.13 Exemptions from suitability</h3>
<table>
  <tr><th>Based on</th><th>Example</th></tr>
  <tr><td>Type of account</td><td><b>Order-execution-only</b> (no recommendations); direct electronic access (DEA) accounts</td></tr>
  <tr><td>Type of service</td><td>Client-directed trades with no recommendation</td></tr>
  <tr><td>Type of client</td><td><b>Non-individual institutional client</b> that waives in writing, after the dealer assesses its sophistication</td></tr>
</table>
<ul><li>KYC exemption: a dealer doesn't need to collect <b>investment needs and objectives</b> for a <b>DEA account</b>.</li></ul>

<div class="key"><b>CIRO's practice exam answers</b>
<ul>
  <li>Dealer arranging execution of a client's order acts as <b>agent</b>.</li>
  <li>RDI must be in <b>plain language</b>, titled as relationship disclosure, and must explain <b>how benchmarks are used</b>.</li>
  <li>RR recommends and waits for the client's OK → <b>advisory account</b>.</li>
  <li>Account appropriateness = <b>explain the features and costs of different account types</b>.</li>
  <li>Suitability fundamental: <b>put the client's interest first</b>. Risk tolerance changes → <b>update KYC</b> and reassess.</li>
  <li>KYC update trigger: a <b>significant change in financial situation</b> (not a 5% withdrawal).</li>
  <li>Trust = the <b>relationship</b> created when property goes to a trustee for beneficiaries.</li>
  <li>Discretionary PM: fiduciary duty = <b>client's best interest above all other matters</b>.</li>
  <li>Exempt from collecting needs and objectives: <b>direct electronic access account</b>.</li>
</ul></div>
<div class="trap"><b>Exam trap:</b> an Investment Representative can <b>never</b> recommend, even if the client asks directly.</div>
`,

recs: `
<p class="syl">CIRE Element 3 · Scope of client relationships (part 2: services, KYP, escalation, styles, benchmarks) · outcomes 3.5, 3.6, 3.8, 3.9, 3.14–3.17</p>

<h3>3.5 Retail services</h3>
<table>
  <tr><th>Service</th><th>Who decides</th><th>Notes</th></tr>
  <tr><td><b>Order execution only (OEO)</b></td><td>Client</td><td>No advice, no suitability. Cheapest. No trailers since 2022</td></tr>
  <tr><td><b>Advisory</b></td><td>Client, after the RR's recommendation</td><td>Trading without approval = unauthorized trading</td></tr>
  <tr><td><b>Managed</b></td><td>Portfolio Manager</td><td>Managed account agreement; no approval needed per trade</td></tr>
  <tr><td><b>Discretionary</b></td><td>Approved RR</td><td>Client's <b>written</b> authorization and firm approval</td></tr>
</table>
<ul><li>Individual retail investors are mostly offered <b>investment advice</b> services.</li></ul>

<h3>3.6 Institutional services</h3>
<ul>
  <li><b>Trading</b> (sales and trading desks), <b>research</b>, <b>underwriting</b> (raising capital for issuers), <b>M&A</b> advisory (acquisitions, takeover defence).</li>
  <li><b>Prime brokerage</b>: custody, financing, securities lending and clearing for hedge funds.</li>
  <li><b>Securities lending</b>: lending securities (often to short sellers) against collateral, for a fee.</li>
</ul>

<h3>3.8–3.9 Product due diligence and know-your-product</h3>
<ul>
  <li><b>Dealer (product due diligence)</b>: before offering a product, <b>assess its risks, structure and costs</b> and approve it; then <b>monitor</b> for significant changes.</li>
  <li><b>Approved Person (KYP)</b>: understand the <b>structure, features, risks, initial and ongoing costs and their impact</b> of each security bought, sold or recommended, and how it compares with others on the dealer's shelf.</li>
</ul>

<h3>3.14 Internal escalation</h3>
<ul>
  <li>Escalate to subject-matter experts for <b>derivatives</b> (RR must be options/futures approved; otherwise <b>refer to a qualified colleague</b>), complex products, cross-border tax and estates, vulnerable clients and possible exploitation, and suspicious activity (AML officer).</li>
</ul>

<h3>3.15 Active vs passive styles</h3>
<table>
  <tr><th></th><th>Active</th><th>Passive</th></tr>
  <tr><td>Equity</td><td>Value (low P/E, P/B), growth, sector rotation, market timing, top-down / bottom-up</td><td>Indexing, buy-and-hold</td></tr>
  <tr><td>Bonds</td><td>Interest rate anticipation (change duration), credit analysis, yield curve trades</td><td><b>Indexing</b>, buy-and-hold, <b>laddering</b></td></tr>
  <tr><td>Fees</td><td><b>Higher</b></td><td>Lower; tracks a benchmark</td></tr>
</table>

<h3>3.16 Benchmarks</h3>
<ul><li>Must match the portfolio's asset mix and risk, e.g. 60/40 portfolio → 60% S&amp;P/TSX Composite + 40% FTSE Canada Universe Bond Index. The RDI explains how benchmarks are used.</li></ul>

<h3>3.17 US and foreign clients</h3>
<ul><li>Dealing with a client living abroad brings in that country's law: the dealer must be <b>registered there or use an exemption</b>. Confirm <b>tax residency</b> (FATCA/CRS self-certification).</li></ul>

<div class="key"><b>CIRO's practice exam answers</b>
<ul>
  <li>Service most likely for an individual retail investor: <b>investment advice</b> (not prime brokerage or securities lending).</li>
  <li>Active strategy management fees: <b>higher</b> than passive.</li>
  <li>Product due diligence: <b>assess the securities' risks, structure and costs</b>.</li>
  <li>IR asked to trade options without approval: <b>refer to an IR approved for derivatives</b>.</li>
  <li>Low-cost bond approach that follows a benchmark: <b>passive</b>, replicating a bond index.</li>
  <li>Borrowing against a portfolio: <b>margin account</b>.</li>
</ul></div>
`,

complaints: `
<p class="syl">CIRE Element 4 · Client complaint handling and reporting · outcomes 4.1–4.7 · about 6 of 110 exam questions</p>

<h3>4.1 Who does what</h3>
<ul>
  <li><b>CIRO</b> sets complaint-handling rules, receives complaint reports, investigates and disciplines. It generally <b>doesn't award compensation</b>.</li>
  <li><b>Provincial regulators</b> oversee CIRO and enforce securities law.</li>
</ul>

<h3>4.2 Recourse for a dissatisfied client</h3>
<table>
  <tr><th>Route</th><th>Key facts</th></tr>
  <tr><td><b>OBSI</b></td><td>Free, independent. Steps in when the firm and client <b>can't resolve it themselves</b>: after <b>90 days</b> without a response, or within <b>180 days</b> of the firm's response. Recommends up to <b>$350,000</b>; <b>not binding</b></td></tr>
  <tr><td><b>CIRO arbitration</b></td><td><b>Binding</b> decision, suited to <b>more complex disputes</b>; cheaper and faster than court (claims up to $500,000)</td></tr>
  <tr><td><b>Litigation</b></td><td>Courts; no cap, binding, but slow and expensive</td></tr>
</table>

<h3>4.3 Issues that can lead to liability</h3>
<ul>
  <li><b>Unsuitable</b> recommendations (e.g. a loss on a risky product when the client's <b>risk appetite was low</b>), unauthorized trading, failing to follow instructions, misrepresentation, negligence, breach of contract or fiduciary duty.</li>
  <li>Consequences: civil damages, CIRO discipline, firm sanctions, reputational harm.</li>
</ul>

<h3>4.4 Reporting complaints</h3>
<ul>
  <li><b>Reportable</b> to CIRO: serious allegations (theft, fraud, misappropriation, forgery, money laundering, manipulation, insider trading, unauthorized trading, misrepresentation).</li>
  <li><b>Service complaints</b> (rudeness, delays, slow call-backs) are handled and recorded internally but are <b>not reportable</b>.</li>
  <li>Failing to report can bring <b>CIRO discipline</b>. A breach of market rules (e.g. not recording order details) can be disciplined <b>even with no client complaint</b>.</li>
</ul>

<h3>4.5 Sources of a dealer's obligations</h3>
<ul><li><b>Legislative</b> (securities acts, Criminal Code, PIPEDA, PCMLTFA), <b>contractual</b> (the account agreement) and <b>organizational</b> (CIRO rules, firm policies).</li></ul>

<h3>4.6 Policies, procedures and records</h3>
<ul>
  <li>Complaints can be <b>verbal or written</b>. Give complaint information at <b>account opening</b>.</li>
  <li><b>Acknowledge</b> within <b>5 business days</b>. <b>Substantive response</b> within <b>90 days</b>; if late, tell the client why and about OBSI.</li>
  <li>Designated complaints officer and supervision. Analyze complaints for <b>patterns</b>.</li>
  <li>Keep complaint records <b>7 years</b>.</li>
  <li><b>Institutional clients</b>: rules apply too, but the <b>process differs</b> from the retail one.</li>
</ul>

<h3>4.7 Settlement agreements</h3>
<ul>
  <li>Approved Persons <b>can't settle privately</b> or repay losses from personal funds: settlements go through and need the <b>dealer's approval</b>.</li>
  <li>A settlement <b>can't stop the client</b> from reporting to or cooperating with regulators.</li>
</ul>

<div class="key"><b>CIRO's practice exam answers</b>
<ul>
  <li>Rude employee on the phone: <b>no, a non-reportable service complaint</b>.</li>
  <li>Institutional vs retail complaints: <b>rules apply to both but the process differs</b>.</li>
  <li>Failing to record order details, no complaints: regulator can act for a <b>breach of market rules</b>.</li>
  <li>OBSI gets involved when the <b>firm and client can't solve it on their own</b>.</li>
  <li>Supports an unsuitability claim: the client's <b>risk appetite was low</b>.</li>
  <li>CIRO arbitration suits <b>more complex disputes</b>.</li>
  <li>Complaint records: at least <b>7 years</b> from receipt. Substantive response: <b>90 days</b>.</li>
</ul></div>
`,

econ: `
<p class="syl">CIRE Element 5 · Market and company analysis (part 1: economics) · outcomes 5.1–5.5 · Element 5 is about 9 of 110 questions</p>

<h3>5.1 Basic economic theories</h3>
<table>
  <tr><th>Theory</th><th>Main idea</th></tr>
  <tr><td><b>Keynesian</b></td><td>Government should manage <b>demand</b>: spend more in recessions (fiscal policy)</td></tr>
  <tr><td><b>Monetarist</b></td><td>Inflation comes from <b>money supply</b> growth; keep it steady</td></tr>
  <tr><td><b>Supply-side</b></td><td>Lower taxes and regulation raise incentives to work, save and invest</td></tr>
</table>
<ul>
  <li><b>Fiscal + monetary together</b>: more public spending <b>and</b> lower rates → <b>more demand and growth</b>. If they pull opposite ways, they offset. Heavy government borrowing can push up rates and <b>crowd out</b> private investment.</li>
  <li><b>Interest rates</b> are set by supply and demand for credit, inflation expectations, risk and central bank policy. Higher rates slow demand and inflation.</li>
  <li><b>Market equilibrium</b>: where supply = demand. Price above it → surplus; below → shortage.</li>
  <li><b>Business cycle</b>: expansion → peak → contraction → trough.</li>
  <li><b>Long-term growth</b>: labour force growth and <b>productivity</b> (capital investment, technology, education).</li>
  <li><b>International trade</b>: the <b>current account</b> records exports and imports of goods and services; the financial account records investment flows. A stronger dollar hurts <b>exporters</b> and helps importers.</li>
</ul>

<h3>5.2 Monetary and fiscal policy</h3>
<ul>
  <li><b>Bank of Canada</b> (monetary policy): sets the <b>target for the overnight rate</b> to keep inflation at <b>2%</b> (1–3% range). Higher rates → stronger dollar, slower demand.</li>
  <li><b>Government</b> (fiscal policy): <b>public spending and taxation</b> to stabilize the economy. Automatic stabilizers: EI, progressive taxes.</li>
</ul>

<h3>5.3 Economic indicators and sources</h3>
<table>
  <tr><th>Type</th><th>Examples</th></tr>
  <tr><td>Leading</td><td>Housing starts, stock prices, money supply, new orders</td></tr>
  <tr><td>Coincident</td><td>GDP, industrial production, retail sales</td></tr>
  <tr><td>Lagging</td><td><b>Unemployment rate</b>, unit labour costs, business investment</td></tr>
</table>
<ul>
  <li><b>Labour market</b> (Labour Force Survey): unemployment types are <b>frictional, structural, cyclical, seasonal</b>. Participation rate = share of working-age people working or looking for work.</li>
  <li><b>Inflation</b>: the <b>Consumer Price Index (CPI)</b> tracks a fixed basket of consumer goods. Real return ≈ nominal − inflation.</li>
  <li>Bank of Canada <b>Monetary Policy Report</b>: outlook and inflation projections.</li>
</ul>

<h3>5.4 Macro factors and financial markets</h3>
<ul>
  <li>Prices reflect <b>expected</b> future cash flows, so changes in expectations move prices.</li>
  <li><b>Bond yields rise</b> when inflation expectations rise or the central bank <b>raises its rate</b>. They fall when demand for safe bonds rises in a downturn.</li>
  <li>Valuation models: dividend discount, P/E multiples.</li>
</ul>

<h3>5.5 Industry analysis</h3>
<ul>
  <li><b>GICS</b> classifies companies into sectors and industries. An industry's market value is often compared with its earnings using the <b>P/E ratio</b>.</li>
  <li><b>Cyclical sectors</b> (technology, consumer discretionary, industrials, financials) do best in <b>expansions</b>. Late cycle: energy and materials.</li>
  <li><b>Defensive sectors</b> (consumer staples, utilities, health care) hold up in <b>recessions</b>.</li>
</ul>

<div class="key"><b>CIRO's practice exam answers</b>
<ul>
  <li>Spending on infrastructure + lower rates → <b>increased demand and economic growth</b>.</li>
  <li>Main goal of fiscal policy: <b>manage public spending and taxation</b> to stabilize the economy.</li>
  <li>Report used to track inflation: <b>Consumer Price Index</b>.</li>
  <li>Industry market cap vs earnings: <b>P/E ratio</b>. Sector that does well in an expansion: <b>technology</b>.</li>
  <li>Government bond yields rise when the <b>central bank raises its rate</b>.</li>
</ul></div>
`,

fin: `
<p class="syl">CIRE Element 5 · Market and company analysis (part 2: company analysis, company rules, market theories) · outcomes 5.6–5.9</p>

<h3>5.6 Company analysis tools</h3>
<table>
  <tr><th>Statement</th><th>Shows</th></tr>
  <tr><td>Financial position (balance sheet)</td><td>Assets = liabilities + equity, at a point in time</td></tr>
  <tr><td>Comprehensive income</td><td>Revenue, expenses, net income over a period</td></tr>
  <tr><td>Changes in equity</td><td>Movements in shareholders' equity</td></tr>
  <tr><td>Cash flows</td><td>Operating, investing and <b>financing</b> (issuing debt or shares, dividends)</td></tr>
</table>
<ul>
  <li><b>Notes</b>: accounting policies, debt terms, contingencies. <b>Auditor's report</b>: unmodified (clean), qualified (except for one issue), adverse, disclaimer.</li>
  <li><b>Continuous disclosure</b>: annual audited statements within 90 days (120 for venture issuers); interim within 45 days (60).</li>
</ul>
<div class="formula">ROE (profitability) = Net income ÷ Shareholders' equity</div>
<div class="formula">Current ratio (liquidity) = Current assets ÷ Current liabilities</div>
<div class="formula">Debt-to-equity (leverage) = Total debt ÷ Equity &nbsp;·&nbsp; Interest coverage = EBIT ÷ Interest</div>
<div class="formula">EPS = (Net income − Preferred dividends) ÷ Common shares &nbsp;·&nbsp; P/E = Price ÷ EPS</div>
<div class="formula">Dividend yield = Dividend ÷ Price &nbsp;·&nbsp; Payout ratio = Dividend ÷ EPS</div>
<div class="formula">Dividend discount model: Value = D1 ÷ (r − g)</div>

<h3>5.7 Rules relating to companies</h3>
<ul>
  <li><b>Take-over bid</b>: an offer that would take the buyer to <b>20%+</b> of a class. Made to all holders on equal terms, open at least <b>105 days</b> (can be cut to 35). Purpose: <b>protect shareholders</b>, treat them equally, give time and information.</li>
  <li><b>Early warning</b>: at <b>10%</b>, news release and report.</li>
  <li><b>Issuer bid</b>: a company buys back its own shares (normal course issuer bids are exempt within limits). <b>Insider bid</b>: needs an <b>independent valuation</b>.</li>
  <li><b>Timely disclosure</b>: material change → news release immediately, material change report within 10 days. <b>Insiders</b> report within 10 days of becoming one, then within 5 days of each trade (SEDI).</li>
  <li><b>Statutory rights</b>: withdraw within <b>2 business days</b> of receiving a prospectus; <b>rescission or damages</b> for a misrepresentation. Shareholders vote (e.g. elect directors).</li>
</ul>

<h3>5.8–5.9 Market theories and technical tools</h3>
<table>
  <tr><th>Approach</th><th>Uses</th></tr>
  <tr><td><b>Fundamental</b></td><td>Economy, industry, company financials → intrinsic value</td></tr>
  <tr><td><b>Quantitative</b></td><td>Statistics: <b>standard deviation</b> (volatility), beta, correlation</td></tr>
  <tr><td><b>Technical</b></td><td>Price and volume patterns: <b>moving averages</b> (smooth price data to show trends), support and resistance, RSI (over 70 overbought, under 30 oversold), advance-decline line (breadth)</td></tr>
</table>
<ul><li>Beta 1.4 → a 10% market rise means about 14% for the stock. A 50-day average crossing above the 200-day is bullish.</li></ul>

<div class="key"><b>CIRO's practice exam answers</b>
<ul>
  <li>Takeover legislation's purpose: <b>legal protection for shareholders</b> and preventing unfair takeovers.</li>
  <li>Most common profitability ratio: <b>return on equity</b>.</li>
  <li>Volatility measure in quantitative analysis: <b>standard deviation</b>.</li>
  <li>Moving average purpose: <b>smooth out price data to identify trends</b>.</li>
</ul></div>
`,

trade: `
<p class="syl">CIRE Element 6 · Market integrity, trade execution and settlement (part 2: orders, accounts, margin, settlement) · outcomes 6.4–6.12</p>

<h3>6.4 Investment banking, research, corporate finance</h3>
<ul><li><b>Investment banking / corporate finance</b>: raising capital (underwriting) and advising on transactions. <b>Research</b>: analyze securities and give clients <b>accurate information for decision-making</b>. Separated from sales by information barriers.</li></ul>

<h3>6.5 Entering orders and settlement</h3>
<ul>
  <li>Front office (sales, trading) → <b>middle office</b> (risk management, compliance) → <b>back office</b> (settlement, custody, records).</li>
  <li><b>Trading desks</b>: retail order desk, institutional sales trading (large orders, managing market impact), program/portfolio trading (baskets), fixed income, derivatives, electronic/algorithmic.</li>
  <li><b>Algorithmic orders</b> are treated the <b>same as manual orders</b>; the dealer is responsible and needs controls.</li>
  <li><b>Best execution in volatile markets</b>: use available desks and algorithms to optimize price and speed.</li>
</ul>
<table>
  <tr><th>Security</th><th>Settlement</th></tr>
  <tr><td>Equities, most bonds, options</td><td><b>T+1</b> (since May 2024)</td></tr>
  <tr><td>T-bills, money market</td><td>Same day</td></tr>
</table>
<ul><li>Under T+1 the <b>ex-dividend date = record date</b>: buy the day before to get the dividend.</li></ul>

<h3>6.6 Order types</h3>
<table>
  <tr><th>Order</th><th>Feature</th></tr>
  <tr><td><b>Market</b></td><td>Fills right away at the best price available; price not guaranteed</td></tr>
  <tr><td><b>Limit</b></td><td><b>Maximum price to buy / minimum price to sell</b>; may never fill (buy limit at $50 with stock at $52 stays unfilled)</td></tr>
  <tr><td><b>Immediate or cancel (IOC)</b></td><td>Fill what you can now, cancel the rest</td></tr>
  <tr><td><b>Fill or kill (FOK)</b></td><td>Fill all of it now or cancel all of it</td></tr>
  <tr><td><b>On-stop</b> (stop-loss)</td><td>Activates when the price hits the trigger (sell stop below market to limit losses). Stop-limit may not fill</td></tr>
  <tr><td><b>Iceberg</b></td><td>Shows only part of the size</td></tr>
  <tr><td><b>Short sale</b></td><td>Selling borrowed shares; must be <b>marked short</b>. Unlimited loss potential</td></tr>
</table>
<ul><li>Orders are <b>day orders</b> unless stated otherwise.</li></ul>

<h3>6.7 Variations, cancellations, corrections</h3>
<ul><li>Unfilled orders can be changed or cancelled. An <b>executed</b> trade can be varied or cancelled only through the <b>marketplace</b>, with the <b>Market Regulator's</b> (CIRO's) involvement, e.g. for a clear error.</li></ul>

<h3>6.8 Confirmations</h3>
<ul><li>Sent <b>promptly</b> (next business day): security, quantity, price, <b>commission and other fees</b>, settlement date, <b>principal or agent</b>, representative. Debt trades: <b>yield</b> and the dealer's <b>total compensation</b>.</li></ul>

<h3>6.9 Account types</h3>
<table>
  <tr><th>Account</th><th>Key point</th></tr>
  <tr><td>Advisory</td><td>RR recommends; client approves each trade</td></tr>
  <tr><td>Order execution only</td><td>No advice</td></tr>
  <tr><td>Managed / discretionary</td><td>Dealer or PM makes decisions <b>without prior client approval</b></td></tr>
  <tr><td>Cash</td><td>Pay in full by settlement</td></tr>
  <tr><td>Margin</td><td>Borrow from the dealer using the portfolio as collateral</td></tr>
</table>

<h3>6.10 Margin</h3>
<ul>
  <li>Purpose: <b>leverage</b> for the client and <b>protection</b> against losses on borrowed positions.</li>
  <li>Long: e.g. 50% margin on 1,000 × $30 → deposit $15,000. Short: e.g. 150% of market value in total, proceeds count toward it.</li>
  <li>Below margin → <b>margin call</b>; positions may be sold.</li>
</ul>

<h3>6.11–6.12 Derivatives agreements and reporting</h3>
<ul>
  <li>Derivatives accounts need a <b>specialized trading agreement</b> outlining risks and responsibilities (not a general agreement).</li>
  <li>Dealers report <b>short positions to CIRO twice a month</b>, notify CIRO if capital falls below early-warning levels, and report gatekeeping concerns.</li>
</ul>

<div class="key"><b>CIRO's practice exam answers</b>
<ul>
  <li>Limit order: <b>maximum price to buy, minimum price to sell</b>; a limit buy below market <b>may remain unfilled</b>.</li>
  <li>Managed account: dealer makes decisions <b>without prior client approval</b>.</li>
  <li>Price error from a system fault: request a correction from the <b>exchange after notice from the market regulator</b>.</li>
  <li>Futures account: offer a <b>specialized trading agreement</b> outlining risks and responsibilities.</li>
  <li>Large short position: disclose to CIRO in the <b>next reporting cycle</b>.</li>
  <li>Volatile market best execution: use <b>trading desks and algorithms</b>.</li>
  <li>Algorithmic orders are treated <b>equally to manual orders</b>.</li>
  <li>Research's purpose: <b>detailed, accurate information for decisions</b>.</li>
</ul></div>
`,

umir: `
<p class="syl">CIRE Element 6 · Market integrity (part 1: UMIR and gatekeeping) · outcomes 6.1–6.3 · Element 6 is about 13 of 110 questions</p>

<h3>6.1 Key UMIR requirements</h3>
<table>
  <tr><th>Rule</th><th>What it means</th></tr>
  <tr><td><b>Best execution</b></td><td>Diligently seek the most advantageous terms: price, speed, certainty, overall cost</td></tr>
  <tr><td><b>Client priority</b></td><td>Client orders go ahead of the firm's own orders at the same price</td></tr>
  <tr><td><b>Front running</b></td><td>Trading ahead of a client's order (including in options) using knowledge of it. e.g. IR buys 1,000 shares before a client's 10,000-share order</td></tr>
  <tr><td><b>Manipulative and deceptive practices</b></td><td>Wash trades / multiple orders with <b>no change in beneficial ownership</b>, spoofing, marking the close, creating an artificial price</td></tr>
  <tr><td><b>DEA and routing</b></td><td>The Participant stays responsible for clients' orders and needs pre-trade controls</td></tr>
  <tr><td><b>Principal trading</b></td><td>Trading against a client creates a conflict over price</td></tr>
  <tr><td><b>Order protection</b></td><td>No trade-throughs of better-priced visible orders</td></tr>
</table>

<h3>6.2–6.3 Gatekeeping</h3>
<ul>
  <li><b>Purpose</b>: <b>prevent and identify suspicious transactions and market abuse</b>.</li>
  <li>Participants must report to CIRO when they have <b>reasonable grounds</b> to believe a violation (manipulation, front running, insider trading) occurred, and must refuse or question improper orders.</li>
  <li>Know the client's <b>typical activity and patterns</b> so unusual trades stand out. Escalate to compliance.</li>
  <li>Possible <b>insider trading</b>: e.g. an employee buying short-dated calls just before news.</li>
  <li><b>Whistleblowers</b>: regulator programs (e.g. OSC) protect identity, ban reprisals and may pay awards. Contracts can't stop employees from reporting.</li>
</ul>

<div class="key"><b>CIRO's practice exam answers</b>
<ul>
  <li>Manipulative or deceptive: <b>multiple orders with no change in beneficial ownership</b>.</li>
  <li>Gatekeeping purpose: <b>prevent and identify suspicious transactions and market abuses</b>.</li>
  <li>Buying for yourself before a client's large order: <b>front running</b>.</li>
</ul></div>
`,

fixed: `
<p class="syl">CIRE Element 7 · Securities and managed products (fixed income) · outcomes 7.1, 7.4, 7.5 · Element 7 is the largest section, about 21 of 110 questions</p>

<h3>7.1 Asset classes</h3>
<ul><li>Cash and equivalents (most liquid, lowest risk) · fixed income · equity · commodities (via futures, ETFs, producers) · derivatives.</li></ul>

<h3>7.4 Fixed income products</h3>
<table>
  <tr><th>Product</th><th>Features</th></tr>
  <tr><td>Government bonds</td><td>Lowest credit risk. Info: <b>Bank of Canada website</b></td></tr>
  <tr><td>Corporate bonds</td><td>Higher yield for <b>default risk</b> (loss of interest and principal)</td></tr>
  <tr><td><b>Strip bonds</b></td><td>No coupons, deep discount; accrued interest <b>taxed yearly</b>; very rate-sensitive</td></tr>
  <tr><td><b>T-bills</b></td><td>Bought at a <b>discount</b>, mature at face value</td></tr>
  <tr><td>Commercial paper</td><td>Short-term <b>unsecured</b> corporate debt</td></tr>
</table>

<h3>7.5 Considerations for bondholders</h3>
<ul>
  <li><b>Market access</b>: bonds trade <b>over the counter (OTC)</b> through dealers, not mainly on exchanges.</li>
  <li><b>Information</b>: Bank of Canada, credit rating agencies (Morningstar DBRS, S&amp;P), dealer quotes.</li>
  <li><b>Passive</b> (index replication, buy-and-hold, ladder; low cost) vs <b>active</b> (interest rate anticipation, credit selection).</li>
  <li><b>Pros</b>: predictable income, priority over shareholders. <b>Cons</b>: interest rate, credit, inflation and reinvestment risk; large minimums.</li>
  <li><b>Coupons</b>: interest is <b>fully taxable</b> each year. Buyers between coupon dates pay <b>accrued interest</b>.</li>
  <li><b>Coupon vs yield</b>: the coupon is fixed; yield depends on price. Price below par → yield above coupon. Prices and yields move <b>inversely</b>.</li>
  <li><b>Bond risk</b>: <b>term</b> (longer = more rate risk), <b>credit rating</b> (investment grade = BBB(low) and up), <b>duration</b> (price change ≈ −duration × yield change; long, low-coupon bonds are most sensitive).</li>
  <li><b>Yields rise</b> with inflation expectations, central bank hikes, weaker credit, more supply. Callable bonds yield more; retractable yield less. Recessions widen credit spreads.</li>
</ul>
<div class="formula">Current yield = Annual coupon ÷ Price</div>

<div class="key"><b>CIRO's practice exam answers</b>
<ul>
  <li>Extra risk of corporate bonds: the issuer may <b>default</b>.</li>
  <li>Debt market access in Canada: bonds trade <b>over the counter</b>.</li>
  <li>Reliable source on government bonds: the <b>Bank of Canada website</b>.</li>
  <li>Low-cost, benchmark-following bond strategy: <b>passive</b> index replication.</li>
  <li>Yields rise with an <b>increase in the central bank rate</b>.</li>
</ul></div>
`,

equity: `
<p class="syl">CIRE Element 7 · Securities (equities and indices) · outcomes 7.2, 7.3, 7.6</p>

<h3>7.2 Common and preferred shares</h3>
<table>
  <tr><th></th><th>Common</th><th>Preferred</th></tr>
  <tr><td>Voting</td><td><b>Yes</b></td><td>Usually no</td></tr>
  <tr><td>Dividend</td><td>Variable, not guaranteed</td><td>Fixed (cumulative: missed dividends paid before common)</td></tr>
  <tr><td>Liquidation</td><td>Last</td><td>After creditors, before common</td></tr>
  <tr><td>Return</td><td><b>Capital appreciation</b> potential</td><td>Income; straight prefs fall when rates rise</td></tr>
</table>
<ul>
  <li>Common share risks: price volatility, dividend cuts. <b>Limited liability</b>: losses are capped at the amount invested.</li>
  <li>Preferred features: cumulative, callable, retractable, convertible, <b>rate-reset</b> (dividend resets to a bond yield plus a spread).</li>
</ul>

<h3>7.3 Considerations for shareholders</h3>
<ul>
  <li><b>Access</b>: through an investment dealer on an exchange or ATS.</li>
  <li><b>Information</b>: SEDAR+ (company filings), SEDI (insider trades), research, company reports.</li>
  <li><b>Managed products vs individual shares</b>: managed products <b>diversify across many assets</b> with professional management; individual shares give control over what you own.</li>
  <li>Passive (index) vs active equity management; active costs more.</li>
  <li><b>Dividends</b>: declared by the board; record date decides who gets paid. <b>Canadian dividends</b> are taxed at a <b>lower rate thanks to the dividend tax credit</b> (eligible: 38% gross-up). Foreign dividends: fully taxable.</li>
  <li><b>Splits</b>: 3-for-1 → three times the shares at a third of the price, same value. <b>Consolidations</b> raise a low price.</li>
</ul>

<h3>7.6 Market indices</h3>
<ul>
  <li><b>Construction</b>: an index is set against a <b>base value</b>. An <b>index</b> usually weights by <b>market capitalization</b>; an <b>average</b> just sums prices.</li>
  <li><b>Market-value weighted</b> (S&amp;P/TSX Composite, float-adjusted): big companies matter most. <b>Price weighted</b> (Dow): high-priced stocks matter most.</li>
  <li><b>Price return</b> = price changes only. <b>Total return</b> = includes reinvested dividends.</li>
  <li>Types: asset class (FTSE Canada Universe Bond), sector, country, international (MSCI EAFE).</li>
  <li>Uses: <b>market summary</b>, <b>benchmarking performance</b>, basis for index funds and ETFs.</li>
</ul>

<div class="key"><b>CIRO's practice exam answers</b>
<ul>
  <li>Defining feature of common shares: <b>voting rights and capital appreciation potential</b>.</li>
  <li>Common shares: capital loss is <b>limited to the amount invested</b>.</li>
  <li>Canadian dividends: taxed at a lower rate due to the <b>dividend tax credit</b>.</li>
  <li>Equity index vs average: an index considers <b>market capitalization</b>; an average sums prices.</li>
  <li>Managed products vs individual equities: managed products <b>diversify across many assets</b>.</li>
</ul></div>
`,

funds: `
<p class="syl">CIRE Element 7 · Managed products, mutual funds and other investments · outcomes 7.7–7.12</p>

<h3>7.7–7.8 Pooled and managed products</h3>
<table>
  <tr><th>Product</th><th>Key features</th></tr>
  <tr><td><b>Mutual fund trust</b></td><td>Issues units; flows income through to unitholders (most common in Canada). Returns depend on the <b>assets it holds</b></td></tr>
  <tr><td>Mutual fund corporation</td><td>Issues shares; can offer several classes (corporate class)</td></tr>
  <tr><td><b>Closed-end fund</b></td><td><b>Fixed number of shares</b>, trades on an exchange, can trade at a discount or premium to NAV</td></tr>
  <tr><td><b>ETF</b></td><td>Exchange-traded; creation and redemption keep the price near NAV</td></tr>
  <tr><td><b>REIT</b></td><td>Owns income-producing property; pays out most income</td></tr>
  <tr><td><b>Income trust</b></td><td>Distributes most of its cash flow → <b>higher yields</b>; distributions can be cut</td></tr>
  <tr><td><b>Wrap account / fund</b></td><td>Portfolio of products with a <b>single fee</b></td></tr>
  <tr><td>Fund of funds</td><td>Invests in other funds</td></tr>
  <tr><td>Pooled fund</td><td>Sold under exemptions to larger investors; lower fees</td></tr>
</table>

<h3>7.9–7.10 Investing in managed products and mutual funds</h3>
<ul>
  <li><b>Access</b>: bought <b>through a mutual fund dealer or investment dealer</b>, or directly from the fund company. Priced at the day's closing <b>NAVPS</b> (forward pricing).</li>
  <li><b>Information</b>: <b>Fund Facts</b> (costs, performance, risk rating, holdings; delivered before purchase), simplified prospectus, management reports.</li>
  <li><b>Range of exposures</b>: asset classes, sectors, geography; diversification vs concentration.</li>
  <li><b>Styles</b>: active (top-down, bottom-up, value, growth) vs passive.</li>
  <li><b>Pros</b>: diversification, professional management, small minimums, liquidity. <b>Cons</b>: fees, no control over taxable distributions, priced once a day.</li>
  <li><b>Risk ranking</b>: CSA methodology using the <b>standard deviation of 10 years of returns</b>; five categories, low to high.</li>
  <li><b>Costs</b>: MER (management fee + operating costs + taxes), TER (trading costs), trailing commissions (none to OEO dealers since 2022), sales charges (DSC banned since 2022). Costs <b>reduce returns</b>.</li>
  <li><b>Taxes</b>: distributions are taxed by type (<b>interest, dividends, capital gains</b>); <b>return of capital</b> isn't taxed but lowers the ACB. Buying just before a year-end distribution means a tax bill.</li>
</ul>
<div class="formula">NAVPS = (Assets − Liabilities) ÷ Units outstanding</div>
<div class="formula">Average fund return = sum of each fund's return ÷ number of funds (each return = (End − Start) ÷ Start)</div>

<h3>7.11 ETFs</h3>
<ul>
  <li>Bought <b>through a dealer on an exchange</b>. <b>ETF Facts</b> delivered within 2 days after purchase.</li>
  <li><b>Market price vs NAV</b>: can trade at a small premium or discount.</li>
  <li>Styles: passive index, active, factor. <b>Leveraged/inverse</b> ETFs reset daily, so long-term results drift from the multiple.</li>
  <li>vs mutual funds: intraday trading, usually <b>lower MERs</b>; but commissions and bid-ask spreads.</li>
</ul>

<h3>7.12 Other investments</h3>
<table>
  <tr><th>Product</th><th>Key points</th></tr>
  <tr><td><b>Hedge funds</b></td><td>Leverage, short selling, performance fees (high-water mark). Disadvantages: <b>higher fees and limited liquidity</b>; usually for accredited investors</td></tr>
  <tr><td>Structured products</td><td>e.g. principal-protected notes: guarantee depends on the issuer; caps; limited liquidity before maturity</td></tr>
  <tr><td>Alternative mutual funds</td><td>Prospectus funds allowed more leverage and shorting</td></tr>
  <tr><td><b>Crypto assets</b></td><td>Most use <b>blockchain</b> to keep <b>decentralized records</b>. Very volatile; custody and hacking risks</td></tr>
  <tr><td>ESG products</td><td>Screening (negative/positive), integration, impact. Watch for <b>greenwashing</b>; names must match the strategy</td></tr>
</table>

<div class="key"><b>CIRO's practice exam answers</b>
<ul>
  <li>Income trusts: distribute most cash flow → <b>higher yields</b>.</li>
  <li>Wrap funds: a portfolio of products with a <b>single fee structure</b>.</li>
  <li>Mutual fund access: <b>directly from the fund company or via a dealer</b> (mutual fund or investment dealer).</li>
  <li>Key information source: <b>Fund Facts</b>.</li>
  <li>Managed products' tax: subject to tax on <b>capital gains, interest and dividends</b>.</li>
  <li>Return of a mutual fund trust depends most on the <b>type of assets held</b>.</li>
  <li>Hedge fund disadvantage: <b>higher fees and limited liquidity</b>.</li>
  <li>Crypto key feature: <b>blockchain, decentralized records</b>.</li>
  <li>Closed-end funds vs ETFs: closed-end funds have a <b>fixed number of shares</b>.</li>
</ul></div>
`,

tax: `
<p class="syl">CIRE Element 7 · How investment income is taxed (7.2, 7.5, 7.9) · registered plans are mainly for the RSE</p>

<h3>Investment income</h3>
<table>
  <tr><th>Income</th><th>Tax treatment</th></tr>
  <tr><td>Interest (bond coupons, GICs, strip accrual)</td><td>100% taxable every year at the marginal rate</td></tr>
  <tr><td>Eligible Canadian dividends</td><td>Grossed up <b>38%</b>, then the <b>dividend tax credit</b> → lower tax than interest</td></tr>
  <tr><td>Foreign dividends</td><td>Fully taxable; foreign tax credit for withholding</td></tr>
  <tr><td>Capital gains</td><td><b>50%</b> taxable</td></tr>
  <tr><td>Return of capital</td><td>Not taxed now; reduces the ACB</td></tr>
</table>
<ul>
  <li>Capital losses offset only capital gains: back 3 years or forward indefinitely.</li>
  <li><b>Superficial loss</b>: buying back within 30 days denies the loss (added to the new ACB).</li>
  <li>Fund distributions keep their type in the investor's hands.</li>
</ul>

<h3>Registered plans</h3>
<table>
  <tr><th>Plan</th><th>Key facts</th></tr>
  <tr><td><b>RRSP</b></td><td>Deductible contributions (18% of prior-year earned income up to an annual max). Withdrawals fully taxable. Must convert by end of the year you turn <b>71</b>. Over-contribution: $2,000 cushion, then <b>1%/month</b>. <b>HBP</b>: up to $60,000; <b>LLP</b>: $10K/yr, $20K total.</td></tr>
  <tr><td><b>Spousal RRSP</b></td><td>Contributor deducts. Withdrawals within the contribution year + 2 calendar years are taxed to the contributor.</td></tr>
  <tr><td><b>RRIF</b></td><td>Minimum withdrawal each year (starting the year after setup), no withholding on the minimum. All withdrawals taxable.</td></tr>
  <tr><td><b>TFSA</b></td><td>Age 18+. Not deductible; growth and withdrawals tax-free. <b>$7,000/yr</b> (2024–2026). Withdrawals re-added to room <b>next Jan 1</b>. Over-contribution: 1%/month.</td></tr>
  <tr><td><b>RESP</b></td><td>Not deductible. <b>$50,000 lifetime</b> per beneficiary. <b>CESG 20% on first $2,500/yr = $500</b>, lifetime max $7,200. EAPs taxed to the <b>student</b>; contributions returned tax-free.</td></tr>
  <tr><td><b>FHSA</b></td><td>Deductible, tax-free qualifying withdrawal for a first home. <b>$8,000/yr, $40,000 lifetime</b>.</td></tr>
  <tr><td><b>RDSP</b></td><td>For people with disabilities; government grants and bonds.</td></tr>
</table>

<h3>Retirement income (government)</h3>
<ul>
  <li><b>CPP/QPP</b>: contributory, based on earnings. <b>OAS</b>: based on residency, with a clawback at higher incomes. <b>GIS</b>: for low-income OAS recipients.</li>
</ul>
`,

deriv: `
<p class="syl">CIRE Element 8 · Derivatives · outcomes 8.1–8.8 · about 6 of 110 exam questions</p>

<h3>8.1 Options</h3>
<ul>
  <li><b>Call</b>: right to <b>buy</b> at the strike. <b>Put</b>: right to <b>sell</b>. Buyer pays the premium; the writer takes the obligation.</li>
  <li><b>American</b>: exercise <b>any time up to and including expiry</b>. <b>European</b>: <b>only at expiry</b>.</li>
</ul>

<h3>8.2 Other contracts</h3>
<table>
  <tr><th>Contract</th><th>Key points</th></tr>
  <tr><td><b>Futures</b></td><td>Standardized, exchange-traded, both sides obligated, marked to market daily, settled in <b>cash or by physical delivery</b></td></tr>
  <tr><td>Forwards</td><td>Customized OTC, counterparty risk, settled at maturity</td></tr>
  <tr><td>Swaps</td><td>Exchange cash flows (e.g. fixed for floating interest)</td></tr>
  <tr><td>CFDs</td><td>OTC contract on the price change of an asset; leveraged; no ownership</td></tr>
</table>

<h3>8.3 Uses</h3>
<ul><li><b>Hedging</b> (reduce risk you already have) · <b>speculation</b> (bet on price moves) · <b>arbitrage</b> (profit from price differences between markets, e.g. buy copper futures in London, sell in Chicago).</li></ul>

<h3>8.4 Transaction elements</h3>
<ul>
  <li><b>Premium</b> rises with underlying price (calls), time to expiry and <b>volatility</b>; falls as the strike rises (calls).</li>
  <li>Intrinsic value: call = price − strike; put = strike − price. Time value = premium − intrinsic.</li>
  <li><b>Margin</b> (futures): money deposited to <b>open and maintain</b> a position, covering potential losses. <b>Mark-to-market</b> settles gains and losses daily. Small margin = <b>leverage</b>.</li>
</ul>

<h3>8.5 Listed vs OTC</h3>
<table>
  <tr><th>Listed</th><th>OTC</th></tr>
  <tr><td>Standardized, cleared by CDCC, transparent, liquid</td><td>Customized, <b>higher liquidity risk</b> and counterparty risk</td></tr>
</table>

<h3>8.6 Strategies</h3>
<table>
  <tr><th>View</th><th>Strategies</th></tr>
  <tr><td>Bullish</td><td>Buy calls, write puts, bull call spread</td></tr>
  <tr><td>Bearish</td><td>Buy puts, write calls, bear spread</td></tr>
  <tr><td>Neutral</td><td>Short straddle / strangle</td></tr>
  <tr><td>Income</td><td><b>Covered call</b> (premium, capped upside)</td></tr>
  <tr><td>Spread</td><td>Buy and sell options of the same type at different strikes or expiries</td></tr>
  <tr><td>Volatility</td><td><b>Long straddle</b> (big move either way)</td></tr>
  <tr><td>Hedge</td><td><b>Protective put</b></td></tr>
</table>

<h3>8.7 Administrative requirements</h3>
<ul><li>Derivatives Account Application (approved by a qualified supervisor), Derivatives Trading Agreement, Letter of Undertaking, <b>Margin Agreement Form</b> (obligations for leveraged trading), Derivatives <b>Risk Disclosure Statement</b>, managed and discretionary account agreements, monthly statements, trade confirmations.</li></ul>

<h3>8.8 Prohibited practices</h3>
<ul><li>Trading while <b>under margin</b>; trading <b>beyond margin or credit limits</b>; letting <b>cumulative losses exceed risk limits</b>.</li></ul>

<div class="key"><b>CIRO's practice exam answers</b>
<ul>
  <li>American options: exercise <b>any time up to and including expiration</b>.</li>
  <li>Futures: can be settled <b>in cash or by physical delivery</b>.</li>
  <li>Buy in London, sell in Chicago on mispricing: <b>arbitrage</b>.</li>
  <li>Futures margin: money deposited to <b>open and maintain</b> a position.</li>
  <li>Listed vs OTC: <b>liquidity risk is higher for OTC</b>.</li>
  <li>Form for obligations when using margin: <b>Margin Agreement Form</b>.</li>
</ul></div>
`,

ethics: `
<p class="syl">CIRE Element 9 · Conflicts of interest and ethics · outcomes 9.1–9.12 · about 16 of 110 exam questions</p>

<h3>9.1–9.2 Managing conflicts of interest</h3>
<ol>
  <li><b>Identify</b> existing and reasonably foreseeable material conflicts (e.g. proprietary products, referral fees, sales incentives, personal holdings).</li>
  <li><b>Address</b> them in the client's best interest (controls, not just disclosure).</li>
  <li><b>Disclose</b> them clearly and in time.</li>
  <li>If a conflict <b>can't be addressed</b> in the client's best interest, it must be <b>avoided</b>.</li>
</ol>
<ul>
  <li>Proprietary funds: a conflict because <b>third-party products may suit the client better</b>.</li>
  <li><b>Referral fees</b>: written arrangement <b>approved by the dealer</b>, paid through the dealer, disclosed to the client.</li>
  <li>Personal holdings: if an advisor owns a stock they'd buy for a client, <b>disclose it and let the client decide</b>.</li>
</ul>

<h3>9.3–9.6 Ethics, rules and standards of conduct</h3>
<ul>
  <li><b>Ethics</b> are <b>general obligations</b> (principles); <b>legal</b> responsibilities are <b>more precise</b> (rules). Ethics apply <b>where rules fall short</b>.</li>
  <li>CIRO standards: <b>high standards of ethics and conduct</b>, act openly, fairly and in line with <b>just and equitable principles of trade</b>, no conduct unbecoming. Purpose: keep <b>investor confidence</b> in market integrity.</li>
  <li>Best prevention of manipulation: <b>promote high ethical standards in all employees</b>.</li>
  <li>Immediate ethical risk: <b>presenting opinions as facts</b>.</li>
  <li>Firm pushes a product you think is wrong for a client: <b>don't recommend it to that client, and explain to the firm why</b>.</li>
  <li>Limited preferential opportunities (e.g. hot IPOs): allocate <b>justly and equitably, by suitability</b>.</li>
  <li><b>Churning</b>: excessive trading to generate commissions. Unauthorized trading, selling away and guarantees are prohibited.</li>
  <li>MNPI received by accident: <b>escalate to compliance, don't act on it</b>.</li>
  <li>Error in a discretionary account: <b>notify the client and document</b> per firm policy.</li>
</ul>

<h3>9.7 Personal financial dealings</h3>
<table>
  <tr><th>Generally prohibited</th><th>Allowed</th></tr>
  <tr><td>Accepting consideration from anyone other than the dealer (e.g. cash from a client); paying a client's losses or settling privately; borrowing from or lending to clients; guarantees; sharing in client accounts; acting as POA, trustee or executor for an unrelated client</td><td>Acting on a <b>POA for a Related Person</b> (family), with dealer approval</td></tr>
</table>

<h3>9.8–9.9 Positions of influence and outside activities</h3>
<ul>
  <li><b>Position of influence</b> over potential clients (e.g. community, religious or care roles): a material conflict; report it, and restrictions on those clients may apply.</li>
  <li><b>Outside activities</b>: report and get <b>dealer approval</b> first. The dealer considers <b>client confusion</b> and conflicts, then supervises and keeps records.</li>
  <li>Representative not qualified for a product (e.g. options): <b>refer the client</b> to someone approved.</li>
</ul>

<h3>9.10–9.12 Confidentiality, information barriers, cybersecurity</h3>
<ul>
  <li>Client information is shared only on a <b>need-to-know</b> basis or with consent. <b>PIPEDA</b> is the main privacy law.</li>
  <li><b>Information barriers</b> separate departments holding MNPI (investment banking) from sales, trading and research.</li>
  <li><b>Grey (watch) list</b>: confidential, monitored by compliance. <b>Restricted list</b>: known to staff, limits trading, research or solicitation (e.g. during an underwriting).</li>
  <li><b>Cybersecurity</b>: staff training (phishing), multi-factor authentication, encryption, incident response. Report incidents to CIRO within <b>3 days</b>.</li>
</ul>

<div class="key"><b>CIRO's practice exam answers</b>
<ul>
  <li>Referral fee: ensure the activity is <b>approved by the Investment Dealer</b> first.</li>
  <li>Advisor owns shares a client would buy: <b>disclose and let the client decide</b>.</li>
  <li>Ethical vs legal: ethics are <b>general obligations</b>, legal ones <b>more precise</b>.</li>
  <li>Churning motive: <b>excessive commissions or fees</b>.</li>
  <li>Unresolvable conflict: must be <b>avoided</b>.</li>
  <li>Complies with personal dealing rules: <b>POA for a Related Person</b>.</li>
  <li>Why ethics matter: they apply <b>where rules fall short</b>. Purpose of standards: <b>investor confidence</b>.</li>
  <li>Proprietary fund conflict: <b>third-party products may suit better</b>.</li>
</ul></div>
`,

port: `
<h3>Return</h3>
<div class="formula">Holding period return = (End value − Start value + Income) ÷ Start value</div>
<div class="formula">Real return ≈ Nominal return − Inflation</div>
<div class="formula">Rule of 72: Years to double ≈ 72 ÷ Rate</div>

<h3>Risk</h3>
<ul>
  <li><b>Standard deviation</b> = total risk (volatility).</li>
  <li><b>Systematic (market) risk</b>: can't be diversified away, measured by <b>beta</b>. <b>Unsystematic (specific) risk</b>: reduced by diversification.</li>
  <li><b>Correlation</b> ranges from −1 to +1. The lower the correlation, the greater the diversification benefit (−1 = maximum).</li>
  <li>Other risks: inflation, interest rate, liquidity, currency (foreign exchange), default/credit, political, business.</li>
</ul>
<div class="formula">CAPM: Required return = Rf + β × (Rm − Rf)</div>
<div class="formula">Sharpe ratio = (Rp − Rf) ÷ Standard deviation</div>

<h3>The portfolio management process</h3>
<ol>
  <li>Determine <b>objectives</b> (safety, income, growth) and <b>constraints</b> (time horizon, liquidity, tax, legal, unique circumstances).</li>
  <li>Write the <b>Investment Policy Statement (IPS)</b>.</li>
  <li>Set the <b>asset allocation</b>: <b>strategic</b> (long-term target) vs. <b>tactical</b> (short-term tilts).</li>
  <li>Select securities, then <b>monitor and rebalance</b> back to targets.</li>
  <li>Evaluate performance against a <b>benchmark</b>.</li>
</ol>

<h3>Construction tools</h3>
<ul>
  <li><b>Bond ladder</b> (equal amounts across maturities), <b>barbell</b> (short + long only), <b>bullet</b> (concentrated around one date).</li>
  <li><b>Dollar-cost averaging</b>: fixed amount regularly, so average cost falls below average price.</li>
  <li><b>Rebalancing</b>: sell what's overweight and buy what's underweight to return to target.</li>
  <li><b>Alpha</b> = actual return − CAPM-required return.</li>
  <li><b>Time-weighted return</b> evaluates the manager; <b>money-weighted</b> reflects the client's experience (used in CRM2 reports).</li>
  <li>Avoid <b>home bias</b>: the Canadian market is concentrated in financials, energy and materials.</li>
</ul>

<h3>Management styles</h3>
<ul>
  <li><b>Active</b> (try to beat the index) vs. <b>passive</b> (track the index at low cost).</li>
  <li>Equity: <b>value</b> (low P/E, P/B), <b>growth</b> (high earnings growth), <b>sector rotation</b>, <b>market timing</b>, <b>top-down / bottom-up</b>.</li>
  <li>Longer time horizon and higher risk tolerance → more equities.</li>
</ul>
`
};
