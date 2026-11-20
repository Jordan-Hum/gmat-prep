// LLQP · Segregated Funds and Annuities module · Chapter 6: Segregated Fund Contracts.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.lqsegcontract = `
<p class="syl">LLQP · Segregated Funds and Annuities module · Chapter 6 of 8 · Segregated Fund Contracts</p>
<p>This chapter covers the working parts of a segregated fund contract: completing the application and naming beneficiaries and successors, registered vs non-registered contracts, how deposits and maturity dates work, withdrawals and fees, the insurer's obligations when funds change, and what happens at maturity and at death.</p>

<h3>1. The application and designations <span class="hot">Highly tested</span></h3>
<ul>
  <li>The application names the <b>contract holder</b>, the <b>annuitant</b> and the <b>beneficiary</b>(ies), and records the client's investor profile and fund choices.</li>
  <li>Beneficiaries can be <b>revocable</b> (changeable by the owner) or <b>irrevocable</b> (their consent is needed for changes), with <b>contingent</b> beneficiaries as backup. With no living beneficiary, the death benefit goes to the <b>estate</b> (losing probate bypass).</li>
  <li><b>Successor annuitant</b>: someone (usually a spouse) who becomes the annuitant when the annuitant dies, so the contract <b>continues</b> instead of paying out the death benefit.</li>
  <li><b>Successor owner</b>: takes over the contract if the contract holder dies while the annuitant is still alive.</li>
  <li>The death benefit is paid only on the death of the <b>annuitant</b>. If the contract holder (not the annuitant) dies, the contract continues and passes to the successor owner or the holder's estate.</li>
</ul>
<div class="ex"><b>Example:</b> Lise owns a non-registered contract on her husband Ben's life (Ben is the annuitant), and their son is the beneficiary. If Lise dies first, no death benefit is paid: the contract passes to her successor owner or estate. If Ben dies first, the son receives the death benefit.</div>

<h3>2. Registered and non-registered contracts</h3>
<ul>
  <li>Seg fund contracts can be held as RRSPs, RRIFs, TFSAs, FHSAs, LIRAs and LIFs, or non-registered.</li>
  <li>In a registered contract, the <b>owner and annuitant must be the same person</b>.</li>
  <li>At death in an RRSP or RRIF contract, the value is taxable on the deceased's final return, unless it passes to a <b>spouse</b> (tax-free rollover) or a financially dependent child or grandchild.</li>
  <li>Withdrawals: registered plans issue T4RSP or T4RIF slips; non-registered contracts issue <b>T3</b> slips for income allocations.</li>
</ul>

<h3>3. Deposits and maturity dates</h3>
<table>
  <tr><th>Approach</th><th>How it works</th></tr>
  <tr><td><b>Deposit-based maturity</b></td><td>Each deposit has its own maturity date, 10 years after that deposit</td></tr>
  <tr><td><b>Contract-based (policy) maturity</b></td><td>All deposits share one maturity date; deposits made close to maturity may get a lower guarantee or not be guaranteed</td></tr>
</table>
<div class="ex"><b>Example:</b> deposit-based guarantees at 75%: a $50,000 deposit in 2020 is guaranteed $37,500 at its 2030 maturity, and a $30,000 deposit in 2024 is guaranteed $22,500 at its 2034 maturity.</div>
<ul>
  <li>Deposits can be lump sums, <b>pre-authorized contributions</b>, or transfers from other plans. Contracts set maximum issue ages (often 80 to 90), and deposits may not be allowed after a certain age.</li>
</ul>

<h3>4. Withdrawals, switches and fees</h3>
<ul>
  <li>Partial withdrawals and systematic withdrawal plans reduce guarantees <b>proportionately</b>.</li>
  <li>Fees can include the MER (management fee plus insurance fee), <b>short-term trading fees</b> (e.g. 2% on amounts withdrawn or switched within 90 days of deposit) and fees for excess switches. Example: withdrawing $20,000 within 90 days at a 2% fee costs <b>$400</b>.</li>
  <li>Unit values are calculated on each <b>valuation day</b> (usually daily); transactions are processed at the next calculated value.</li>
</ul>

<h3>5. The insurer's obligations <span class="hot">Highly tested</span></h3>
<ul>
  <li>Provide the <b>information folder</b>, <b>Fund Facts</b>, the contract, and at least an <b>annual statement</b> showing transactions, values and guarantees. Audited financial statements of the funds are available on request.</li>
  <li><b>Fundamental changes</b> (e.g. an increase in the management fee or insurance fee, a change in the fund's fundamental investment objective, a decrease in how often units are valued) require written notice in advance (typically at least <b>60 days</b>). Contract holders then have the right to <b>switch</b> to a similar fund or <b>withdraw without charges</b>.</li>
  <li>Handle complaints through a fair internal process, with escalation to the <b>OmbudService for Life and Health Insurance (OLHI)</b>.</li>
</ul>

<h3>6. At maturity and at death</h3>
<ul>
  <li><b>Maturity options</b>: take the value in cash, <b>renew</b> for a new term (if the annuitant's age allows), buy an <b>annuity</b>, or (registered) transfer to a RRIF.</li>
  <li><b>Death claim</b>: the beneficiary provides proof of death and a claimant's statement. The death benefit is the greater of the market value (on the valuation day after the insurer receives notice of death) and the death benefit guarantee, and is paid directly to the beneficiary.</li>
  <li><b>Non-registered tax at death</b>: the contract is disposed of at the annuitant's death; gains (and any guarantee top-up) are capital gains on the contract holder's final return, unless a spouse becomes successor annuitant and the contract continues.</li>
</ul>

<div class="how"><b>How it's tested:</b> who receives what when the contract holder vs the annuitant dies, successor annuitant and owner, owner = annuitant for registered plans, spousal rollovers, deposit-based vs contract-based maturity, short-term trading fees, rights on fundamental changes, statements, maturity options, and death claim valuation.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Complete designations: beneficiaries, successor annuitants and successor owners.</li>
  <li>Explain how registered and non-registered contracts differ.</li>
  <li>Calculate guarantees under deposit-based maturities and apply fees.</li>
  <li>Describe the insurer's disclosure obligations and contract holders' rights on fundamental changes.</li>
  <li>Describe maturity options and the death claim process.</li>
</ul></div>
`;

window.QB_HARD.lqsegcontract = [
  ["Lise owns a seg fund contract on her husband Ben's life; their son is the beneficiary. Lise dies first. What happens?",
    ["It continues; no benefit is paid", "The son receives the death benefit", "Ben receives the death benefit", "The insurer cancels the contract"],
    "The death benefit is paid only on the annuitant's death; the contract passes to the successor owner or Lise's estate.", "s"],
  ["Lise names Ben as successor annuitant on a contract where she is the annuitant. When Lise dies:",
    ["Ben becomes the annuitant", "The death benefit is paid to Ben", "The contract matures at once", "The contract goes to probate"],
    "A successor annuitant keeps the contract going instead of triggering the death benefit.", "s"],
  ["A seg fund contract holder names his estate as beneficiary. What does this cost him?",
    ["Probate bypass", "The maturity guarantee", "The right to reset", "His Assuris protection"],
    "Proceeds payable to the estate go through probate; a named beneficiary avoids this.", "r"],
  ["In a registered seg fund contract such as an RRSP, which statement is correct?",
    ["The owner and annuitant must be the same", "The annuitant must be the owner's spouse", "The beneficiary must be the estate", "There can't be a death guarantee"],
    "For registered plans, the contract holder and annuitant must be the same person.", "r"],
  ["Ana dies with a seg fund RRIF that names her husband as beneficiary. How is the RRIF taxed?",
    ["It can roll over to him tax-free", "It's fully taxed to her estate", "It's taxed as a capital gain", "It's taxed to him at 50%"],
    "A registered plan can roll over tax-free to a surviving spouse.", "s"],
  ["Under deposit-based maturity with a 75% guarantee, a $50,000 deposit in 2020 and a $30,000 deposit in 2024 have guarantees of:",
    ["$37,500 in 2030 and $22,500 in 2034", "$60,000 in 2030 for both deposits", "$60,000 in 2034 for both deposits", "$50,000 in 2030 and $30,000 in 2034"],
    "Each deposit has its own 10-year maturity: 75% × 50,000 = 37,500 (2030) and 75% × 30,000 = 22,500 (2034).", "c"],
  ["A client withdraws $20,000 within 90 days of depositing it. The contract charges a 2% short-term trading fee. The fee is:",
    ["$400", "$200", "$2,000", "$40"],
    "2% × 20,000 = $400.", "c"],
  ["An insurer plans to raise a seg fund's management fee. Which right do contract holders have?",
    ["Switch or withdraw without charges", "Cancel and get all past fees back", "Vote on the fee change at a meeting", "No rights; the change is automatic"],
    "Fundamental changes require advance notice and give holders the right to switch to a similar fund or redeem without charge.", "r"],
  ["Which change is considered fundamental for a segregated fund?",
    ["An increase in the insurance fee", "A new portfolio manager trainee", "A change to the statement design", "A new customer service phone line"],
    "Fee increases, changes to fundamental investment objectives and less frequent valuation are fundamental changes.", "r"],
  ["How often must the insurer send a seg fund contract holder a statement?",
    ["At least once a year", "Only at maturity", "Only on request", "Every 5 years"],
    "Contract holders receive at least an annual statement showing transactions, values and guarantees.", "r"],
  ["A non-registered seg fund contract reaches maturity. Which option is generally available?",
    ["Renew it, if age allows", "Convert it into an RRSP", "Make it a TFSA with no limit", "Extend it without any age limits"],
    "At maturity, holders can take cash, renew (subject to age limits) or buy an annuity.", "r"],
  ["When the annuitant dies, the death benefit is based on the market value calculated:",
    ["After the insurer is notified", "On the annuitant's last birthday", "At the original deposit date", "On December 31 of that year"],
    "Market value is determined on the valuation day after the insurer receives notice of death, then compared with the guarantee.", "r"],
  ["A non-registered seg fund contract pays income allocations to the contract holder. Which tax slip does she receive?",
    ["T3", "T4RSP", "T4", "T5007"],
    "Seg funds are trusts and report allocated income on T3 slips.", "r"],
  ["Where can a seg fund client take an unresolved complaint after the insurer's internal process?",
    ["The OmbudService for Life and Health Insurance", "The Canada Deposit Insurance Corporation", "The Office of the Superintendent of Bankruptcy", "The Canadian Investor Protection Fund"],
    "OLHI handles life and health insurance complaints, including segregated funds.", "r"],
];

window.GLOSSARY.push(
  ["Successor annuitant", "Person who becomes the annuitant when the annuitant dies, so the contract continues.", "lqsegcontract"],
  ["Successor owner", "Person who takes over the contract if the contract holder dies before the annuitant.", "lqsegcontract"],
  ["Deposit-based maturity", "Each deposit has its own maturity date 10 years after it's made.", "lqsegcontract"],
  ["Fundamental change", "Change such as a fee increase that requires notice and gives a right to switch or redeem without charge.", "lqsegcontract"]
);
