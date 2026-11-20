// LLQP · Life Insurance module · Chapter 4: Universal Life Insurance.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.lqul = `
<p class="syl">LLQP · Life Insurance module · Chapter 4 of 12 · Universal Life Insurance</p>
<p>Universal life (UL) is permanent insurance that separates the cost of insurance from a savings (investment) account, giving the owner flexibility over premiums, investments and the death benefit. This chapter explains how the account works, the two ways the cost of insurance is charged, the death benefit options, the tax-exempt limits, and the risks to explain to clients.</p>

<h3>1. How universal life works <span class="hot">Highly tested</span></h3>
<ul>
  <li>Each deposit goes into the policy's <b>accumulation (investment) account</b>, after any <b>premium tax</b> deduction (a provincial tax on premiums, typically 2%–4%).</li>
  <li>Each month the insurer deducts the <b>cost of insurance (COI)</b> and <b>administration fees</b> from the account. What's left earns returns based on the investment options chosen.</li>
  <li><b>Flexible premiums</b>: the owner can pay more or less (between a minimum needed to keep the policy in force and a maximum set by tax rules), skip payments if the account can cover the charges, or make lump-sum deposits.</li>
  <li><b>Investment options</b>: daily interest accounts, guaranteed fixed-term accounts (like GICs), and <b>index-linked accounts</b> that credit returns based on a market index or fund (the owner doesn't own the underlying securities). The <b>owner bears the investment risk</b>.</li>
  <li><b>Surrender charges</b> may apply if the policy is cancelled in its early years.</li>
</ul>
<div class="ex"><b>Example (one year, simplified):</b> account value $10,000; deposit $3,000 less 2% premium tax = $2,940 credited; COI $800 and fees $120 deducted; the account earns 4%.<br>End value = (10,000 + 2,940 − 800 − 120) × 1.04 = <b>$12,500.80</b>.</div>

<h3>2. Cost of insurance: YRT vs level <span class="hot">Highly tested</span></h3>
<table>
  <tr><th></th><th>Yearly renewable term (YRT) COI</th><th>Level COI</th></tr>
  <tr><td>Pattern</td><td>Low at first, rises every year with age</td><td>Level for life (or to 100)</td></tr>
  <tr><td>Early years</td><td>More of each deposit goes into the account</td><td>Higher charges, so less goes into the account</td></tr>
  <tr><td>Later years</td><td>Charges can become very high and drain the account</td><td>Cheaper over the long run</td></tr>
  <tr><td>Suits</td><td>Clients who want maximum early growth or may not keep the policy long term</td><td>Clients who want lifetime coverage at a predictable cost</td></tr>
</table>

<h3>3. Death benefit options <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Option</th><th>Death benefit</th><th>Notes</th></tr>
  <tr><td><b>Level</b> (face amount)</td><td>The face amount only</td><td>The account value is part of the face amount, so the <b>net amount at risk</b> (face − account value) shrinks as the account grows, lowering COI</td></tr>
  <tr><td><b>Level plus account value</b> (increasing)</td><td>Face amount + account value</td><td>The beneficiary receives the savings too; higher COI because the amount at risk stays at the face amount</td></tr>
  <tr><td><b>Level plus cumulative premiums</b></td><td>Face amount + total deposits made</td><td>Returns the premiums paid on death</td></tr>
</table>
<div class="ex"><b>Example:</b> face amount $300,000; account value $40,000. Level option: the beneficiary receives <b>$300,000</b> (net amount at risk $260,000). Level plus account value: <b>$340,000</b>.</div>

<h3>4. Tax treatment and limits</h3>
<ul>
  <li>Investment growth inside a policy that meets the Income Tax Act's <b>exempt test</b> isn't taxed each year, and the death benefit (including the account value) is paid tax-free.</li>
  <li>The exempt test caps how much savings the policy can hold relative to its insurance coverage. If deposits would push the policy over the limit, the insurer must act (e.g. increase the face amount, move the excess to a taxable side account, or refund it) to keep the policy exempt.</li>
  <li><b>Withdrawals</b> and <b>policy loans</b> from the account can create a taxable <b>policy gain</b> if they exceed the policy's adjusted cost base (see the taxation chapter).</li>
</ul>

<h3>5. Risks and suitability</h3>
<ul>
  <li><b>Risks</b>: poor investment returns, rising YRT charges, or low deposits can deplete the account; the owner must then deposit more or the policy lapses. Non-guaranteed elements (returns, sometimes COI rates) may not match the illustration.</li>
  <li><b>Suits</b>: clients who need permanent coverage and value flexibility; high-income clients who have used their RRSP and TFSA room and want tax-sheltered growth; estate planning; corporately owned policies.</li>
  <li><b>Compared with whole life</b>: UL is more flexible and transparent; whole life offers more guarantees (premiums, cash values) and, for par policies, the insurer manages the investments and smooths returns.</li>
</ul>

<div class="how"><b>How it's tested:</b> how deposits and charges flow through the account, YRT vs level COI, choosing a death benefit option (and what the beneficiary receives), net amount at risk, the exempt test, who bears investment risk, and when UL suits a client.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe how a UL policy's account, charges and investment options work.</li>
  <li>Compare YRT and level cost of insurance.</li>
  <li>Calculate the death benefit under each death benefit option.</li>
  <li>Explain the exempt test and the tax on withdrawals.</li>
  <li>Explain UL's risks and when it suits a client.</li>
</ul></div>
`;

window.QB_HARD.lqul = [
  ["In a universal life policy, which charges are deducted from the accumulation account each month?",
    ["Cost of insurance and admin fees", "Only the policy's surrender charges", "Income tax on the account's growth", "Dividends and premium reductions"],
    "UL deducts the cost of insurance and fees monthly; the remaining value earns returns.", "r"],
  ["A UL policy has an account value of $10,000. The owner deposits $3,000, a 2% premium tax applies, COI and fees total $920, and the account earns 4%. The year-end value is closest to:",
    ["$12,501", "$12,563", "$13,520", "$12,020"],
    "(10,000 + 2,940 − 920) × 1.04 = $12,500.80. $12,020 forgets the 4% return; $12,563 ignores the premium tax.", "c"],
  ["Compared with a level cost of insurance, a YRT cost of insurance in a UL policy is:",
    ["Lower at first, higher later", "Higher at first, lower later", "The same every year", "Guaranteed to decline"],
    "YRT charges rise each year with age; level COI is higher at first but cheaper over the long term.", "r"],
  ["A 40-year-old wants lifetime UL coverage at a predictable cost and plans to keep the policy until death. Which COI structure is usually more suitable?",
    ["Level cost of insurance", "Yearly renewable term cost", "Decreasing term cost", "A single-premium cost"],
    "Level COI avoids the steep increases of YRT later in life.", "s"],
  ["A UL policy has a face amount of $300,000 and an account value of $40,000, with the level death benefit option. The beneficiary receives:",
    ["$300,000", "$340,000", "$260,000", "$40,000"],
    "Under the level option, the account value is part of the face amount; the net amount at risk is $260,000.", "c"],
  ["Using the same policy ($300,000 face, $40,000 account), if the owner had chosen the level plus account value option, the beneficiary would receive:",
    ["$340,000", "$300,000", "$260,000", "$380,000"],
    "Face amount plus account value: 300,000 + 40,000 = $340,000.", "c"],
  ["Under the level death benefit option, as the account value grows, the net amount at risk:",
    ["Decreases, lowering COI", "Increases, raising COI", "Stays the same", "Becomes taxable each year"],
    "Net amount at risk = face − account value, so a growing account means less pure insurance to pay for.", "r"],
  ["Who bears the investment risk in a universal life policy?",
    ["The policyowner", "The insurer", "The beneficiary", "Assuris"],
    "The owner chooses the investment options and bears the risk of poor returns, which can deplete the account.", "r"],
  ["Growth inside a UL policy isn't taxed each year as long as the policy:",
    ["Meets the exempt test", "Has a level death benefit", "Is owned by the life insured", "Pays a policy dividend"],
    "Policies that pass the Income Tax Act exempt test shelter growth; the test limits savings relative to coverage.", "r"],
  ["A UL policyowner made low deposits for years with a YRT cost of insurance, and returns were poor. What is the main risk now?",
    ["The account empties and coverage lapses", "The death benefit doubles automatically", "The insurer refunds all premiums", "The policy converts to term-100"],
    "Rising YRT charges and weak returns can drain the account; the owner must then deposit more or lose coverage.", "s"],
  ["A high-income professional has maximized her RRSP and TFSA contributions and needs permanent coverage. Why might UL appeal to her?",
    ["Tax-sheltered growth", "Guaranteed premiums and dividends", "Coverage that ends at a set age", "No charges are ever deducted"],
    "UL combines permanent coverage with tax-sheltered growth inside an exempt policy.", "s"],
  ["Compared with a whole life policy, universal life generally offers:",
    ["More flexibility, fewer guarantees", "More guarantees, less flexibility", "Guaranteed annual dividends", "No investment choices at all"],
    "UL lets the owner vary deposits, investments and the death benefit, but with fewer guarantees than whole life.", "r"],
  ["An index-linked account in a UL policy:",
    ["Credits returns based on an index", "Buys the index's shares for the owner", "Guarantees the index's full return", "Is protected from all losses"],
    "Returns are credited by reference to an index or fund; the owner doesn't own the underlying securities.", "r"],
  ["A UL owner wants the beneficiary to receive the face amount plus all the deposits she has made. Which death benefit option does this?",
    ["Level plus cumulative premiums", "Level face amount option only", "Level plus account value", "Decreasing face amount option"],
    "This option adds total deposits to the face amount.", "s"],
];

window.GLOSSARY.push(
  ["Universal life (UL)", "Permanent insurance with flexible premiums and an investment account; owner bears investment risk.", "lqul"],
  ["YRT vs level cost of insurance", "Charges rising each year with age vs level charges for life.", "lqul"],
  ["Net amount at risk", "Death benefit minus account value: the pure insurance the insurer covers.", "lqul"],
  ["Exempt test", "Income Tax Act test limiting a policy's savings relative to its coverage so growth stays tax-sheltered.", "lqul"]
);
