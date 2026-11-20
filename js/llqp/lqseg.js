// LLQP · Segregated Funds and Annuities module · Chapter 2: Segregated Funds.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.lqseg = `
<p class="syl">LLQP · Segregated Funds and Annuities module · Chapter 2 of 8 · Segregated Funds</p>
<p>A segregated fund is an investment fund sold as a life insurance contract. It looks like a mutual fund, but adds insurance features: maturity and death benefit guarantees, resets, a death benefit that bypasses the estate, and potential creditor protection. This is the most heavily tested chapter of the module.</p>

<h3>1. What a segregated fund contract is</h3>
<ul>
  <li>Legally it's an <b>individual variable insurance contract (IVIC)</b> issued by a life insurance company. The fund's assets are held <b>separately (segregated)</b> from the insurer's general assets.</li>
  <li>The contract holder owns the <b>contract</b>, not the fund's assets; the insurer owns the assets and tracks the holder's interest in <b>notional units</b>.</li>
  <li>Sold by life-licensed agents (no securities licence needed) and regulated by provincial insurance regulators.</li>
</ul>
<table>
  <tr><th>Party</th><th>Role</th></tr>
  <tr><td><b>Contract holder (owner)</b></td><td>Buys the contract, makes deposits and decisions, can name the beneficiary</td></tr>
  <tr><td><b>Annuitant</b></td><td>The person whose life the death benefit is based on (often the contract holder; must be for registered plans)</td></tr>
  <tr><td><b>Beneficiary</b></td><td>Receives the death benefit when the annuitant dies</td></tr>
  <tr><td><b>Insurer</b></td><td>Issues the contract, manages the funds and provides the guarantees</td></tr>
</table>

<h3>2. Maturity and death benefit guarantees <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Maturity guarantee</b>: on the maturity date, which must be <b>at least 10 years</b> after the deposit, the contract holder receives at least <b>75% of deposits</b> (less proportional withdrawals), or the market value if higher.</li>
  <li><b>Death benefit guarantee</b>: if the annuitant dies, the beneficiary receives at least <b>75%</b> of deposits (less withdrawals), or the market value if higher. Many contracts guarantee <b>100%</b> (typically 75/100 or 100/100 classes), at a higher cost.</li>
  <li>If the market value is below the guarantee, the insurer pays a <b>top-up</b>.</li>
</ul>
<div class="ex"><b>Example:</b> deposits $100,000 with a 75% maturity guarantee: guaranteed amount $75,000. At maturity the market value is $68,000, so the insurer tops up <b>$7,000</b>. If the market value were $90,000, the holder would simply receive $90,000.</div>
<h4>Withdrawals reduce the guarantee proportionately</h4>
<div class="formula">New guarantee = old guarantee × (1 − withdrawal ÷ market value before the withdrawal)</div>
<div class="ex"><b>Example:</b> a $100,000 deposit with a 100% guarantee is now worth $80,000. Withdrawing $20,000 is 25% of the market value, so the guarantee falls by 25% to <b>$75,000</b> (not to $80,000, as a dollar-for-dollar reduction would give).</div>

<h3>3. Resets <span class="hot">Highly tested</span></h3>
<ul>
  <li>A <b>reset</b> locks in market gains: the guaranteed amount rises to the current market value.</li>
  <li>A reset usually <b>restarts the 10-year maturity term</b> from the reset date. Contracts limit how often resets can be done (e.g. once or twice a year) and often stop them after a set age (e.g. 80), since the new maturity date must fall within the contract.</li>
  <li>Some contracts reset death benefit guarantees automatically (e.g. every year), which doesn't change the maturity date.</li>
</ul>
<div class="ex"><b>Example:</b> a $100,000 deposit with a 100% guarantee grows to $120,000 after 4 years. After a reset, the guarantee is <b>$120,000</b>, with a new maturity date 10 years after the reset.</div>

<h3>4. Estate and creditor benefits <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Probate bypass</b>: with a named beneficiary, the death benefit is paid directly to the beneficiary, outside the estate: <b>faster, private, and no probate fees</b> or executor costs on that amount.</li>
  <li><b>Creditor protection</b>: possible when the beneficiary is in the <b>family class</b> (spouse, child, grandchild or parent of the annuitant; rules vary slightly by province) or is named <b>irrevocably</b>. It doesn't apply if the contract was bought to defeat existing creditors (a fraudulent transfer), and isn't guaranteed.</li>
</ul>

<h3>5. Costs, disclosure and rescission</h3>
<ul>
  <li>MERs are higher than for comparable mutual funds because they include the <b>insurance (guarantee) cost</b>; 100% guarantees cost more than 75%.</li>
  <li>Sales charge options: front-end and no-load (the <b>DSC option was banned for new deposits from June 1, 2023</b>).</li>
  <li><b>Point-of-sale disclosure</b>: before or at the time of application, the client must receive the <b>Fund Facts</b> for each fund and the <b>information folder</b> (which describes the contract); the contract follows.</li>
  <li><b>Rescission</b>: the client can cancel a purchase within <b>2 business days</b> of receiving the confirmation (deemed received 5 business days after mailing), and gets back the lesser of the amount invested and its current value, plus any sales charges or fees paid.</li>
</ul>

<h3>6. Seg funds vs mutual funds</h3>
<table>
  <tr><th></th><th>Segregated fund</th><th>Mutual fund</th></tr>
  <tr><td>Legal form</td><td>Insurance contract</td><td>Security (trust units or shares)</td></tr>
  <tr><td>Guarantees</td><td>75% to 100% at maturity and death</td><td>None</td></tr>
  <tr><td>Probate bypass</td><td>Yes, with a named beneficiary</td><td>No (non-registered)</td></tr>
  <tr><td>Creditor protection</td><td>Potentially</td><td>No</td></tr>
  <tr><td>Licence and regulator</td><td>Life licence; insurance regulators</td><td>Securities licence; securities regulators</td></tr>
  <tr><td>Cost</td><td>Higher MER</td><td>Lower MER</td></tr>
  <tr><td>Protection if the issuer fails</td><td><b>Assuris</b>: the higher of <b>$100,000 or 90%</b> of the guaranteed amount</td><td>Investor protection funds for dealer insolvency only</td></tr>
</table>

<h3>7. Taxation (non-registered)</h3>
<ul>
  <li>A segregated fund is treated as a <b>trust</b> that allocates its income (interest, dividends, capital gains) to contract holders yearly on a <b>T3</b> slip. Unlike mutual funds, seg funds can also allocate <b>capital losses</b>.</li>
  <li>Allocations are based on how long units were held during the year, so a new investor doesn't receive a full year's income.</li>
  <li>Withdrawals or switches between funds are dispositions that can trigger capital gains or losses.</li>
  <li>A guarantee <b>top-up</b> is generally taxed as a <b>capital gain</b>, which is offset by the capital loss on the units' drop in value.</li>
</ul>

<div class="how"><b>How it's tested:</b> calculating maturity and death top-ups, proportional withdrawal reductions, effects of a reset, the 10-year maturity rule, probate and creditor protection conditions, Fund Facts and the 2-day rescission, DSC ban, Assuris limits, seg funds vs mutual funds, and capital loss allocations.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Identify the parties to a segregated fund contract.</li>
  <li>Calculate maturity and death benefit guarantees, top-ups and reductions for withdrawals.</li>
  <li>Explain resets and their effect on the maturity date.</li>
  <li>Explain probate bypass and when creditor protection may apply.</li>
  <li>Compare seg funds with mutual funds, including costs, disclosure, rescission, Assuris and taxation.</li>
</ul></div>
`;

window.QB_HARD.lqseg = [
  ["Who issues segregated fund contracts?",
    ["Life insurers", "Mutual fund companies", "Chartered banks", "Investment dealers"],
    "Seg funds are individual variable insurance contracts issued by life insurers.", "r"],
  ["Under a segregated fund contract, the death benefit is based on the life of the:",
    ["Annuitant", "Contract holder in all cases", "Beneficiary", "Agent"],
    "The annuitant is the measuring life; the annuitant is often, but not always, the contract holder.", "r"],
  ["The minimum maturity guarantee required for a segregated fund contract is:",
    ["75% of deposits after 10 years", "100% of all deposits after 5 years", "50% of deposits after 10 years", "75% of deposits after 5 years"],
    "Seg fund maturity guarantees are at least 75% of deposits, with a maturity date at least 10 years away.", "r"],
  ["Ana deposited $100,000 in a seg fund with a 75% maturity guarantee. At maturity it's worth $68,000. What does the insurer pay as a top-up?",
    ["$7,000", "$32,000", "$25,000", "$0"],
    "Guarantee = 75% × 100,000 = 75,000; top-up = 75,000 − 68,000 = $7,000.", "c"],
  ["A seg fund with a 75% death benefit guarantee had $200,000 of deposits and is worth $240,000 when the annuitant dies. The beneficiary receives:",
    ["$240,000", "$150,000", "$200,000", "$180,000"],
    "The death benefit is the greater of market value and the guaranteed amount (150,000), so $240,000.", "c"],
  ["A $100,000 deposit with a 100% guarantee is now worth $80,000. The client withdraws $20,000. If withdrawals reduce the guarantee proportionately, the new guarantee is:",
    ["$75,000", "$80,000", "$60,000", "$100,000"],
    "20,000 is 25% of the 80,000 market value, so the guarantee falls 25%: 100,000 × 0.75 = $75,000.", "c"],
  ["A client's seg fund deposit of $100,000 with a 100% guarantee has grown to $120,000. If she resets, what happens?",
    ["Guarantee rises to $120,000; maturity restarts", "Guarantee rises to $120,000; maturity is unchanged", "Guarantee stays at $100,000; maturity restarts", "She receives the $20,000 gain in cash"],
    "A reset locks in the market value as the new guarantee and usually restarts the 10-year maturity term.", "s"],
  ["Why do insurers often stop allowing maturity resets after a certain age, such as 80?",
    ["A reset restarts the 10-year term", "Older clients pay no MER on resets", "Resets reduce the death benefit", "Regulators ban seg funds after 80"],
    "Each reset sets a new maturity date 10 years out, which must fit within the contract.", "r"],
  ["Raj names his daughter as beneficiary of his non-registered seg fund contract. When he dies, the death benefit is:",
    ["Paid directly to her, bypassing probate", "Paid into his estate first", "Frozen until the will is probated", "Paid to the province for distribution"],
    "With a named beneficiary, the death benefit goes directly to the beneficiary outside the estate.", "s"],
  ["When might a seg fund contract be protected from the contract holder's creditors?",
    ["When a family-class beneficiary is named", "When the estate is named beneficiary", "In every case, regardless of beneficiary", "Only once the contract has matured"],
    "Protection may apply with a family-class (spouse, child, grandchild, parent) or irrevocable beneficiary, unless bought to defeat creditors.", "r"],
  ["A business owner is being sued by a supplier and moves all his savings into a seg fund naming his wife as beneficiary. Is the contract likely protected from that creditor?",
    ["No, it may be a fraudulent transfer", "Yes, creditor protection is absolute", "Yes, because she's his wife", "No, seg funds are never protected"],
    "Creditor protection doesn't apply to transfers made to defeat known creditors.", "s"],
  ["A client buys a segregated fund and receives her confirmation. She can rescind the purchase within:",
    ["2 business days of receiving it", "10 days of signing the application", "30 days of the deposit", "1 year of the deposit"],
    "Seg fund purchases can be rescinded within 2 business days of receiving the confirmation.", "r"],
  ["Which document must the client receive for each fund at or before the time of applying for a segregated fund?",
    ["Fund Facts", "The insurer's annual report", "A T3 slip", "A financial statement"],
    "Point-of-sale disclosure requires the Fund Facts and the information folder.", "r"],
  ["Why is the MER of a segregated fund usually higher than that of a similar mutual fund?",
    ["It includes the cost of the guarantees", "It includes the agent's licence fees", "Seg funds can't hold stocks", "It includes CDIC deposit premiums"],
    "The insurance fee for maturity and death guarantees is built into the MER.", "r"],
  ["If an insurer fails, Assuris protects a seg fund contract holder's guaranteed amount up to:",
    ["The higher of $100,000 or 90%", "$100,000 per category only", "The full market value always", "The lower of $60,000 or 85%"],
    "Assuris protects segregated fund guarantees to the higher of $100,000 or 90% of the guaranteed amount.", "r"],
  ["Which tax feature distinguishes non-registered segregated funds from mutual funds?",
    ["They can allocate capital losses", "Their income is never taxable at all", "They issue T5 slips only", "Gains are taxed at 100%"],
    "Seg fund trusts can flow capital losses through to contract holders; mutual fund trusts can't.", "r"],
];

window.GLOSSARY.push(
  ["Segregated fund", "Investment fund sold as an individual variable insurance contract by a life insurer, with maturity and death guarantees.", "lqseg"],
  ["Annuitant (seg fund)", "The person whose life the death benefit guarantee is based on.", "lqseg"],
  ["Maturity guarantee", "At least 75% of deposits returned at maturity, at least 10 years after deposit.", "lqseg"],
  ["Reset", "Locks in gains as a new guaranteed amount; usually restarts the 10-year maturity term.", "lqseg"],
  ["Rescission (seg funds)", "Right to cancel within 2 business days of receiving the purchase confirmation.", "lqseg"],
  ["Assuris (seg funds)", "Protects guaranteed amounts to the higher of $100,000 or 90% if an insurer fails.", "lqseg"]
);
