// CFA Level I · Fixed Income · Learning module 17: Fixed-Income Securitization.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1securit = `
<p class="syl">CFA Level I · Fixed Income (11–14%) · Learning module 17 of 19 · Fixed-Income Securitization</p>
<p>Securitization pools loans (mortgages, car loans, credit card balances) and sells securities backed by their cash flows. This lesson explains why it's done, who the parties are, how a special purpose entity and tranching work, the internal and external credit enhancements that protect investors, and how covered bonds differ.</p>

<h3>1. Why securitize?</h3>
<ul>
  <li><b>For the originator (e.g. a bank)</b>: moves loans off its balance sheet, frees capital to make new loans, can lower funding costs, and earns servicing fees.</li>
  <li><b>For investors</b>: direct access to pools of assets that used to be held only by banks, with a choice of risk and maturity (via tranches), and more liquid than whole loans.</li>
  <li><b>For the economy</b>: cuts the role of intermediaries, increases credit availability and market liquidity, and spreads risk more widely.</li>
  <li><b>Risks</b>: complexity and opacity, and weaker lending standards if originators no longer keep the risk ("originate to distribute"), a factor in the 2008 crisis. Rules now often require originators to keep some of the risk.</li>
</ul>

<h3>2. Parties and structure <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Party</th><th>Role</th></tr>
  <tr><td><b>Originator / seller</b></td><td>Makes the loans and sells the pool to the SPE</td></tr>
  <tr><td><b>Special purpose entity (SPE)</b>, or special purpose vehicle / trust</td><td>Buys the pool and issues the asset-backed securities (ABS). It's <b>bankruptcy remote</b>: a "true sale" means the originator's creditors can't claim the assets if the originator fails</td></tr>
  <tr><td><b>Servicer</b></td><td>Collects loan payments, handles delinquencies and passes cash to the trust (often the originator)</td></tr>
  <tr><td><b>Trustee</b></td><td>Protects investors' interests and oversees the payments</td></tr>
</table>
<p>Because the SPE is separated from the originator, the ABS can receive a <b>higher credit rating than the originator</b> itself, and the originator's cost of funding through the SPE can be lower.</p>
<h4>Tranching and the waterfall</h4>
<ul>
  <li><b>Credit tranching</b> (subordination): <b>senior</b>, <b>mezzanine</b> and <b>subordinated (equity, first-loss)</b> tranches. Losses hit the most junior tranche first; cash is paid to the most senior first (the <b>waterfall</b>). Senior tranches get the highest ratings and lowest yields.</li>
  <li><b>Time tranching</b>: tranches receive principal in sequence, which redistributes prepayment risk (see the MBS lesson).</li>
</ul>
<div class="ex"><b>Example:</b> a $500 million pool funds a senior tranche of $350m, a mezzanine tranche of $100m and an equity tranche of $50m.<br>Losses of <b>$80m</b>: equity loses all $50m; mezzanine loses $30m (30%); senior loses nothing.<br>Losses of <b>$180m</b>: equity $50m, mezzanine $100m (wiped out), senior $30m (8.6%).</div>

<h3>3. Credit enhancements <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Internal (built into the structure)</th><th>External (from a third party)</th></tr>
  <tr><td>
    <ul>
      <li><b>Subordination</b>: junior tranches absorb losses first</li>
      <li><b>Overcollateralization</b>: the pool is worth more than the securities issued (e.g. $520m of loans backing $500m of bonds)</li>
      <li><b>Excess spread</b>: interest on the pool exceeds interest paid to investors plus fees (e.g. 7% − 5% − 0.5% = 1.5%), and the surplus covers losses or builds reserves</li>
      <li><b>Reserve accounts</b>: cash set aside to cover losses</li>
    </ul>
  </td><td>
    <ul>
      <li><b>Guarantees</b> from a bank or insurer (surety bonds)</li>
      <li><b>Letters of credit</b></li>
      <li>Risk: the protection is only as good as the third party's credit (third-party or "downgrade" risk)</li>
    </ul>
  </td></tr>
</table>

<h3>4. Covered bonds <span class="hot">Highly tested</span></h3>
<table>
  <tr><th></th><th>Covered bond</th><th>Typical ABS</th></tr>
  <tr><td>Assets</td><td>Stay on the issuer's (bank's) balance sheet in a segregated <b>cover pool</b></td><td>Sold to a bankruptcy-remote SPE</td></tr>
  <tr><td>Recourse</td><td><b>Dual recourse</b>: to the issuer and to the cover pool</td><td>Only to the asset pool</td></tr>
  <tr><td>Pool</td><td><b>Dynamic</b>: the issuer must replace non-performing or prepaid assets</td><td>Usually static</td></tr>
  <tr><td>Tranches</td><td>Usually one</td><td>Several</td></tr>
  <tr><td>Risk and yield</td><td>Lower risk, lower yield</td><td>Higher</td></tr>
</table>
<p>Redemption regimes if the issuer defaults: <b>hard bullet</b> (missing the scheduled payment is a default), <b>soft bullet</b> (maturity can be extended, often by up to a year), <b>conditional pass-through</b> (becomes a pass-through security paying as the cover pool's cash comes in).</p>

<div class="how"><b>How it's tested:</b> benefits of securitization, roles of the originator, SPE, servicer and trustee, bankruptcy remoteness and why ABS can be rated above the originator, allocating losses through tranches, internal vs external credit enhancements, and covered bonds vs ABS.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Explain the benefits and risks of securitization for originators, investors and the economy.</li>
  <li>Describe the parties to a securitization and the role of the SPE.</li>
  <li>Allocate losses through senior, mezzanine and equity tranches.</li>
  <li>Distinguish internal and external credit enhancements.</li>
  <li>Compare covered bonds with ABS.</li>
</ul></div>
`;

window.QB_HARD.l1securit = [
  ["The special purpose entity in a securitization is structured to be:",
    ["Bankruptcy-remote from the originator", "Consolidated with the originator's creditors", "Owned directly by the originator's shareholders"],
    "The SPE buys the assets in a true sale; if the originator fails, its creditors have no claim on the SPE's assets.", "r"],
  ["Unlike a typical asset-backed security, a covered bond:",
    ["Gives investors recourse to both the cover pool and the bank", "Removes the assets from the issuing bank's balance sheet", "Has a static pool whose assets can't be replaced"],
    "Covered bonds keep the assets on the bank's balance sheet with dual recourse, and the cover pool is dynamic (non-performing assets are replaced).", "r"],
  ["A key benefit of securitization for a bank that originates loans is that it:",
    ["Frees capital to make new loans", "Keeps all credit risk on its books", "Raises its cost of funding"],
    "Selling loans to an SPE moves them off the balance sheet and frees capital for new lending.", "r"],
  ["In a securitization, the party that collects payments from borrowers and handles delinquencies is the:",
    ["Servicer", "Trustee", "Special purpose entity"],
    "The servicer collects payments (often the originator); the trustee protects investors; the SPE issues the securities.", "r"],
  ["Asset-backed securities can receive a higher credit rating than the originating company mainly because:",
    ["The assets are held in a separate SPE", "The originator guarantees every payment", "ABS are backed by government guarantees"],
    "A true sale to a bankruptcy-remote SPE means the originator's creditors can't claim the assets.", "r"],
  ["A $500 million pool funds a $350 million senior tranche, a $100 million mezzanine tranche and a $50 million equity tranche. If the pool loses $80 million, the mezzanine tranche loses:",
    ["$30 million", "$80 million", "$0"],
    "The equity tranche absorbs the first $50 million; the remaining $30 million falls on the mezzanine tranche.", "c"],
  ["With the same structure ($350m senior, $100m mezzanine, $50m equity), losses of $180 million cause the senior tranche to lose about:",
    ["8.6%", "0%", "36.0%"],
    "Equity ($50m) and mezzanine ($100m) absorb $150m; the senior tranche loses $30m of $350m = 8.6%.", "c"],
  ["A securitization has $520 million of loans backing $500 million of bonds. This credit enhancement is called:",
    ["Overcollateralization", "Excess spread", "A bank letter of credit"],
    "The extra $20 million of collateral absorbs losses before bondholders are affected.", "r"],
  ["A loan pool yields 7%, the securities pay a weighted average of 5% and fees are 0.5%. The 1.5% left over is called:",
    ["Excess spread", "Overcollateralization", "Subordination"],
    "Excess spread is the interest surplus available to absorb losses or build reserves.", "c"],
  ["Which of the following is an external credit enhancement?",
    ["A bank letter of credit", "A subordinated junior tranche", "A cash reserve account"],
    "External enhancements come from third parties; subordination and reserve accounts are internal.", "r"],
  ["Compared with a typical ABS, a covered bond:",
    ["Gives recourse to issuer and pool", "Has several tranches with different ratings", "Uses a static pool that is never replaced"],
    "Covered bonds have dual recourse, usually one tranche, and a dynamic cover pool.", "r"],
  ["A covered bond's maturity can be extended (often by up to a year) if the issuer defaults. Its redemption regime is:",
    ["Soft bullet", "Hard bullet", "Conditional pass-through"],
    "Hard bullet: missing payment is a default. Conditional pass-through: pays as cover pool cash flows arrive.", "r"],
  ["A risk of securitization that contributed to the 2008 crisis is that originators who sell all their loans may:",
    ["Lower their lending standards", "Hold too much of the credit risk", "Stop earning servicing fees"],
    "If originators don't keep any risk, they have less incentive to lend carefully.", "r"],
];

window.GLOSSARY.push(
  ["Covered bond","Bank bond backed by an on-balance-sheet, dynamic cover pool; dual recourse to the pool and the bank.","l1securit"],
  ["Special purpose entity (SPE)", "Bankruptcy-remote vehicle that buys the asset pool and issues ABS.", "l1securit"],
  ["Waterfall", "Order in which cash flows go to tranches (senior first) and losses hit them (junior first).", "l1securit"],
  ["Internal vs external credit enhancement", "Subordination, overcollateralization, excess spread, reserves vs third-party guarantees and letters of credit.", "l1securit"]
);
