// CFA Level I · Fixed Income · Learning module 1: Fixed-Income Instrument Features.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1fifeat = `
<p class="syl">CFA Level I · Fixed Income (11–14%) · Learning module 1 of 19 · Fixed-Income Instrument Features</p>
<p>A bond is a promise to pay. This first lesson sets up the vocabulary used in every other Fixed Income lesson: who issues bonds, the basic features (maturity, par value, coupon, seniority, currency), the legal contract (indenture) and its covenants, collateral, and how bonds are classified by legal and tax treatment.</p>

<h3>1. Basic features of a bond <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Feature</th><th>What it means</th></tr>
  <tr><td><b>Issuer</b></td><td>Supranational organizations (World Bank, IMF), sovereign (national) governments, non-sovereign governments (provinces, states, cities), quasi-government agencies, and companies (financial and non-financial)</td></tr>
  <tr><td><b>Maturity</b></td><td>The date the principal is repaid; <b>tenor</b> is the time remaining. Original maturity of one year or less = <b>money market</b> security; over one year = <b>capital market</b> security. <b>Perpetual</b> bonds never mature</td></tr>
  <tr><td><b>Par value</b></td><td>Principal (face) amount repaid at maturity. Prices are quoted as a % of par: above 100 = <b>premium</b>, below 100 = <b>discount</b>, 100 = <b>par</b></td></tr>
  <tr><td><b>Coupon rate and frequency</b></td><td>Annual interest as a % of par, paid annually, semiannually, quarterly or monthly. Fixed-rate, floating-rate (reference rate + spread) or <b>zero-coupon</b> (no coupons; bought at a discount)</td></tr>
  <tr><td><b>Seniority</b></td><td><b>Senior</b> debt is paid before <b>subordinated (junior)</b> debt in default; <b>secured</b> debt is backed by specific collateral, <b>unsecured</b> debt by the issuer's general credit</td></tr>
  <tr><td><b>Contingency provisions</b></td><td>Embedded options such as call, put and conversion features (covered in the next lesson)</td></tr>
  <tr><td><b>Currency</b></td><td>Bonds can pay in any currency. A <b>dual-currency bond</b> pays coupons in one currency and principal in another; a <b>currency option bond</b> lets the holder choose the currency of each payment</td></tr>
</table>
<div class="ex"><b>Example:</b> a $1,000 par bond with a 5% coupon paid semiannually pays $1,000 × 5% / 2 = <b>$25</b> every six months and $1,000 at maturity.<br>If market yields on similar bonds are 6%, investors will only buy this 5% bond at a <b>discount</b> to par; if yields are 4%, it trades at a <b>premium</b>.</div>
<div class="trap"><b>Trap:</b> coupon rate &gt; market yield → premium; coupon rate &lt; market yield → discount; coupon = yield → par. The coupon is fixed by the contract, while the yield moves with the market.</div>

<h3>2. The bond indenture and covenants <span class="hot">Highly tested</span></h3>
<p>The <b>indenture</b> (trust deed) is the legal contract setting out the issuer's obligations and bondholders' rights. A <b>trustee</b> (usually a bank) acts for bondholders: it monitors that the issuer complies with the terms and takes action on their behalf if it doesn't.</p>
<table>
  <tr><th>Affirmative covenants (things the issuer must do)</th><th>Negative covenants (things the issuer must not do)</th></tr>
  <tr><td>
    <ul>
      <li>Pay interest and principal on time</li>
      <li>Maintain insurance on assets and keep them in good condition</li>
      <li>Comply with laws and pay taxes</li>
      <li>Provide regular financial statements</li>
      <li>Cross-default clause: a default on another debt counts as a default on this bond</li>
      <li>Pari passu clause: this debt ranks equally with similar debt</li>
    </ul>
  </td><td>
    <ul>
      <li>Limits on additional debt (e.g. a maximum debt/EBITDA)</li>
      <li><b>Negative pledge</b>: no new debt ranking ahead of these bonds, e.g. by pledging the same assets</li>
      <li>Limits on dividends and share buybacks (restricted payments)</li>
      <li>Limits on selling assets, on investments, and on mergers</li>
    </ul>
  </td></tr>
</table>
<p>Covenants protect bondholders but limit the issuer's flexibility. Bonds with stronger covenants usually pay lower yields; high-yield bonds tend to have more covenants than investment-grade bonds.</p>

<h3>3. Collateral and credit backing</h3>
<ul>
  <li><b>Secured bonds</b>: backed by specific assets. <b>Collateral trust bonds</b> are secured by securities (shares, bonds); <b>equipment trust certificates</b> by specific equipment (aircraft, railcars); mortgage bonds by real estate.</li>
  <li><b>Unsecured bonds</b> (called <b>debentures</b> in the US) rely on the issuer's general credit.</li>
  <li><b>Covered bonds</b>: backed by a segregated pool of assets that stays on the issuer's balance sheet, with recourse to the issuer too (dual recourse). See the securitization lessons.</li>
  <li>Other credit backing: guarantees from a parent company or government, letters of credit, and the credit enhancements used in securitizations.</li>
</ul>

<h3>4. Legal, regulatory and tax classification</h3>
<table>
  <tr><th>Type</th><th>Description</th></tr>
  <tr><td><b>Domestic bond</b></td><td>Issued by a local issuer in the local market and currency</td></tr>
  <tr><td><b>Foreign bond</b></td><td>Issued by a foreign issuer in another country's market, in that country's currency, under its rules (e.g. a German company's US-dollar bond sold in the US: a "Yankee" bond; others include Samurai in Japan, Panda in China, Bulldog in the UK, Maple in Canada)</td></tr>
  <tr><td><b>Eurobond</b></td><td>Issued outside the jurisdiction of any one country, usually in a currency other than that of the countries where it's sold (e.g. a US-dollar bond sold in Europe and Asia, a "Eurodollar" bond). Less regulated, historically in bearer form</td></tr>
  <tr><td><b>Global bond</b></td><td>Issued at the same time in the Eurobond market and at least one domestic market</td></tr>
</table>
<ul>
  <li><b>Bearer bonds</b>: whoever holds the certificate owns it. <b>Registered bonds</b>: ownership is recorded by name (now standard).</li>
  <li><b>Taxes</b>: coupon income is usually taxed as income; price gains and losses as capital gains or losses. Interest on some government bonds (e.g. many US municipal bonds) is <b>tax-exempt</b>. For bonds issued at a deep discount (including zeros), some countries tax the <b>original issue discount</b> as it accrues, even though no cash is received.</li>
</ul>

<div class="how"><b>How it's tested:</b> premium vs discount from coupon vs yield, coupon cash flow calculations, money vs capital market, affirmative vs negative covenants (and the trustee's role), secured vs unsecured and types of collateral, and domestic vs foreign vs Eurobond vs global bond.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe the features of a bond: issuer, maturity, par value, coupon, seniority, contingency provisions and currency.</li>
  <li>Describe the indenture, the trustee's role, and affirmative vs negative covenants.</li>
  <li>Describe secured and unsecured debt and types of collateral.</li>
  <li>Distinguish domestic, foreign, Eurobonds and global bonds, and describe tax considerations.</li>
</ul></div>
`;

window.QB_HARD.l1fifeat = [
  ["A covenant that prohibits an issuer from pledging assets already used as collateral to secure other borrowing is:",
    ["A negative covenant", "An affirmative covenant", "An external credit enhancement"],
    "This is a negative pledge clause, a negative covenant restricting what the issuer may do. Affirmative covenants require actions (pay on time, maintain assets).", "r"],
  ["A bond has a 4% annual coupon. Yields on comparable bonds are currently 5%. The bond most likely trades:",
    ["At a discount to par", "At a premium to par", "At exactly par value"],
    "When the coupon rate is below the market yield, investors pay less than par to earn the market yield.", "r"],
  ["A $1,000 par bond has a 6% coupon paid semiannually. Each coupon payment is:",
    ["$30", "$60", "$15"],
    "1,000 × 6% / 2 = $30 every six months. $60 is the annual total.", "c"],
  ["A debt security with an original maturity of nine months is classified as a:",
    ["Money market security", "Capital market security", "Perpetual security"],
    "Original maturity of one year or less is money market; over one year is capital market.", "r"],
  ["The main role of the trustee named in a bond indenture is to:",
    ["Monitor compliance for bondholders", "Guarantee repayment of principal", "Set the bond's coupon each year"],
    "The trustee acts for bondholders, checking that the issuer meets its obligations and acting if it doesn't. It doesn't guarantee payment.", "r"],
  ["A bond covenant requiring the issuer to keep its assets insured is best described as:",
    ["An affirmative covenant", "A negative covenant", "A negative pledge clause"],
    "Affirmative covenants are things the issuer must do; negative covenants restrict what it may do.", "r"],
  ["Which of the following is a negative covenant?",
    ["A limit on dividends paid to shareholders", "A requirement to provide audited statements", "A clause making other defaults a default here"],
    "Restricting dividends limits the issuer's actions. Providing statements and cross-default clauses are affirmative.", "r"],
  ["A German company issues US-dollar bonds in the United States, registered under US securities rules. This bond is a:",
    ["Foreign bond", "Eurobond", "Domestic bond"],
    "A foreign issuer selling bonds in another country's market and currency under its rules issues a foreign bond (a Yankee bond in the US).", "s"],
  ["A US-dollar bond issued by a Canadian company and sold to investors in Europe and Asia, outside any single country's jurisdiction, is a:",
    ["Eurobond", "Foreign bond", "Yankee bond"],
    "Eurobonds are issued outside the jurisdiction of any one country, often in a currency other than that of the investors' countries.", "s"],
  ["Bonds secured by specific aircraft or railcars are known as:",
    ["Equipment trust certificates", "Collateral trust certificates", "Debentures"],
    "Collateral trust bonds are secured by financial securities; debentures are unsecured in US usage.", "r"],
  ["Compared with a company's senior unsecured bonds, its subordinated bonds most likely have:",
    ["A higher yield", "A lower yield", "Priority in bankruptcy"],
    "Subordinated debt is paid after senior debt in default, so investors require a higher yield.", "r"],
  ["A bond pays its coupons in Swiss francs and its principal in US dollars. It is a:",
    ["Dual-currency bond", "Currency option bond", "Global bond"],
    "A currency option bond lets the holder choose the currency; a dual-currency bond fixes different currencies for coupons and principal.", "r"],
  ["An investor buys a zero-coupon bond. Her return comes from:",
    ["The rise in price toward par", "Coupons reinvested at the yield", "Coupons paid at maturity"],
    "Zeros pay no coupons; they're bought at a discount and accrete to par.", "r"],
  ["The World Bank is best classified as which type of bond issuer?",
    ["Supranational", "Sovereign", "Quasi-government"],
    "Supranational organizations are formed by several countries.", "r"],
];

window.GLOSSARY.push(
  ["Premium / discount / par", "Price above / below / equal to par: coupon above / below / equal to market yield.", "l1fifeat"],
  ["Indenture and trustee", "Legal contract for a bond issue; the trustee monitors compliance for bondholders.", "l1fifeat"],
  ["Affirmative vs negative covenant", "What the issuer must do (pay, insure, report) vs must not do (more debt, dividends, pledging assets).", "l1fifeat"],
  ["Foreign bond vs Eurobond", "Foreign issuer in a domestic market and currency vs issued outside any single jurisdiction.", "l1fifeat"],
  ["Money vs capital market", "Original maturity of one year or less vs more than one year.", "l1fifeat"]
);
