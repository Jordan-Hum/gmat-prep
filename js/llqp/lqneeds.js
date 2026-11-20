// LLQP · Life Insurance module · Chapter 10: Assessing the Client's Situation.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.lqneeds = `
<p class="syl">LLQP · Life Insurance module · Chapter 10 of 12 · Assessing the Client's Situation</p>
<p>Every recommendation starts with understanding the client. This chapter covers the fact-finding (know your client) process, the government benefits payable at death, and the three ways to calculate how much life insurance a client needs: rules of thumb, the human life value approach and capital needs analysis, including the time value of money calculations the exam uses.</p>

<h3>1. Know your client: fact-finding</h3>
<ul>
  <li><b>Personal</b>: age, health, marital status, dependants and their ages, occupation.</li>
  <li><b>Financial</b>: income (both spouses), expenses, assets (savings, RRSPs, TFSAs, home), debts (mortgage, loans, lines of credit), existing coverage (individual and <b>group</b>), employee benefits.</li>
  <li><b>Goals</b>: replace income for the family, pay off the mortgage, fund children's education, cover final expenses and taxes, leave a legacy.</li>
  <li><b>Attitudes and constraints</b>: budget for premiums, risk tolerance, preferences, and the client's own priorities.</li>
  <li>Document the facts, the needs identified and the reasons for the recommendation. The agent must recommend based on needs, not on what pays the most commission.</li>
</ul>

<h3>2. Government benefits at death</h3>
<ul>
  <li><b>CPP death benefit</b>: a one-time lump sum ($2,500) to the estate of an eligible contributor.</li>
  <li><b>CPP survivor's pension</b>: monthly pension to a surviving spouse or common-law partner, based on the deceased's contributions and the survivor's age.</li>
  <li><b>CPP children's benefit</b>: monthly benefit for dependent children of a deceased contributor (under 18, or 18–25 in full-time school).</li>
  <li>Workers' compensation benefits if the death was work-related.</li>
</ul>
<p>These benefits reduce, but rarely remove, the need for insurance.</p>

<h3>3. Three ways to estimate the amount <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Method</th><th>How it works</th><th>Pros and cons</th></tr>
  <tr><td><b>Rule of thumb</b></td><td>A multiple of income (e.g. 7–10× salary)</td><td>Quick but ignores the client's actual debts, assets and goals</td></tr>
  <tr><td><b>Human life value (HLV)</b></td><td>Present value of the earnings the person would have contributed to the family (income after taxes and personal consumption) until retirement</td><td>Measures economic value, but not actual needs</td></tr>
  <tr><td><b>Capital needs analysis (CNA)</b></td><td>Adds up the cash needed at death and the capital needed to provide ongoing income, then subtracts existing assets and insurance</td><td>Most thorough and personalized; the method the exam focuses on</td></tr>
</table>

<h3>4. Capital needs analysis step by step <span class="hot">Highly tested</span></h3>
<ol>
  <li><b>Immediate (lump-sum) needs</b> at death: final expenses and funeral, taxes at death, debts (mortgage, loans), an emergency fund, an education fund.</li>
  <li><b>Ongoing income needs</b>: the family's annual income need minus income still coming in (survivor's earnings, CPP survivor and children's benefits) = the <b>income gap</b>. Capitalize the gap: the lump sum needed to fund it for the required years.
    <ul>
      <li><b>Capital liquidation</b>: the capital is used up over the period (present value of an annuity).</li>
      <li><b>Capital retention</b>: the capital stays intact and only the investment income is used (gap ÷ rate of return): needs much more capital.</li>
    </ul>
  </li>
  <li><b>Total capital required</b> = immediate needs + capitalized income need.</li>
  <li><b>Subtract existing resources</b>: liquid savings and investments (consider tax on RRSPs), existing life insurance (including group coverage).</li>
  <li>The result is the <b>additional insurance needed</b>.</li>
</ol>
<div class="ex"><b>Case:</b> Sam, 35, has a spouse and two young children. If he died:<br>
<b>Immediate needs</b>: final expenses $20,000 + mortgage $300,000 + other debts $15,000 + emergency fund $20,000 + education fund $100,000 = <b>$455,000</b>.<br>
<b>Income gap</b>: the family needs $60,000 a year after tax; the spouse's after-tax income covers $25,000, leaving <b>$35,000 a year for 20 years</b>. At a 3% real return (end-of-year payments): N = 20, I/Y = 3, PMT = 35,000, FV = 0, CPT PV = <b>$520,712</b>.<br>
<b>Total required</b> = 455,000 + 520,712 = $975,712.<br>
<b>Existing resources</b>: savings $25,000 + RRSP $40,000 + group life $180,000 = $245,000.<br>
<b>Additional insurance needed</b> ≈ 975,712 − 245,000 = <b>$730,712</b> (about $750,000).<br>
With the <b>capital retention</b> approach, the income need would instead be 35,000 ÷ 0.03 = <b>$1,166,667</b>.</div>
<div class="calc"><b>BA II Plus:</b> [2nd][FV] (clear) · 20 [N] · 3 [I/Y] · 35000 [PMT] · 0 [FV] · [CPT][PV] → −520,711.62. For payments at the start of each year, set [2nd][PMT] BGN first: the answer becomes $536,333.</div>
<ul>
  <li><b>Inflation</b>: use a <b>real</b> rate of return: (1 + nominal) ÷ (1 + inflation) − 1. With 5% returns and 2% inflation: 1.05 ÷ 1.02 − 1 = <b>2.94%</b> (about 3%).</li>
  <li><b>Human life value example</b>: Sam earns $90,000; after taxes and his own consumption (35%), he contributes $58,500 a year for 30 more working years. At 4%: PV ≈ <b>$1,011,584</b>.</li>
</ul>

<div class="how"><b>How it's tested:</b> what information to gather, CPP death and survivor benefits, choosing between HLV, CNA and rules of thumb, calculating immediate needs, the income gap and its present value, capital retention vs liquidation, subtracting existing coverage (including group life), and using a real rate of return.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe the fact-finding process and what to document.</li>
  <li>Describe CPP benefits at death.</li>
  <li>Compare rules of thumb, human life value and capital needs analysis.</li>
  <li>Calculate a capital needs analysis, including capitalizing an income gap.</li>
  <li>Explain capital retention vs capital liquidation and the use of real rates of return.</li>
</ul></div>
`;

window.QB_HARD.lqneeds = [
  ["When gathering facts for a life insurance needs analysis, which item is most important to record about the client's existing coverage?",
    ["Group life through work", "The insurer's credit rating", "The agent who sold it", "Its policy number only"],
    "All existing coverage, including group life, reduces the additional insurance needed (though group coverage can end with the job).", "r"],
  ["Which method calculates the present value of the earnings a person would have contributed to the family until retirement?",
    ["Human life value", "Capital needs analysis", "Rule of thumb", "Capital retention"],
    "HLV measures the economic value of future contributions; CNA measures actual needs.", "r"],
  ["Which approach gives the most personalized estimate of how much life insurance a family needs?",
    ["Capital needs analysis", "Ten times annual salary", "Human life value", "Matching the mortgage balance"],
    "CNA adds up the family's actual lump-sum and income needs and subtracts existing resources.", "r"],
  ["Sam's family would need final expenses of $20,000, a $300,000 mortgage paid off, $15,000 of other debts, a $20,000 emergency fund and a $100,000 education fund. His immediate needs total:",
    ["$455,000", "$435,000", "$355,000", "$475,000"],
    "20,000 + 300,000 + 15,000 + 20,000 + 100,000 = $455,000.", "c"],
  ["A family needs $60,000 a year after tax, and the surviving spouse's after-tax income is $25,000. The income gap to be funded is:",
    ["$35,000 a year", "$60,000 a year", "$85,000 a year", "$25,000 a year"],
    "Income gap = need − income still received = 60,000 − 25,000 = $35,000.", "c"],
  ["An income gap of $35,000 a year must be funded for 20 years. Using a 3% real return and end-of-year payments, the capital needed is closest to:",
    ["$520,712", "$700,000", "$1,166,667", "$536,333"],
    "N = 20, I/Y = 3, PMT = 35,000, FV = 0 → PV ≈ $520,712. $536,333 assumes start-of-year payments; $700,000 ignores investment returns.", "c"],
  ["Using the capital retention approach, how much capital is needed to provide $35,000 a year at a 3% return?",
    ["$1,166,667", "$520,712", "$105,000", "$700,000"],
    "Capital retention keeps the capital intact: 35,000 ÷ 0.03 = $1,166,667.", "c"],
  ["Compared with capital liquidation, the capital retention approach:",
    ["Requires more capital", "Requires less capital", "Ignores investment returns", "Always uses nominal rates"],
    "Retention uses only investment income and never touches the capital, so it needs a much larger sum.", "r"],
  ["A client's total capital required is $975,712. He has $25,000 of savings, a $40,000 RRSP and $180,000 of group life. The additional insurance needed is closest to:",
    ["$730,712", "$795,712", "$910,712", "$975,712"],
    "Existing resources total $245,000; 975,712 − 245,000 = $730,712.", "c"],
  ["Investments are expected to earn 5% and inflation is expected to be 2%. The real rate of return used in a needs analysis is closest to:",
    ["2.94%", "3.00%", "7.10%", "2.50%"],
    "(1.05 ÷ 1.02) − 1 = 2.94%. Simple subtraction gives about 3%.", "c"],
  ["Which government benefit is a one-time lump sum paid on the death of an eligible CPP contributor?",
    ["CPP death benefit", "CPP survivor's pension", "CPP children's benefit", "Old Age Security"],
    "The CPP death benefit is a single lump sum; survivor's and children's benefits are monthly.", "r"],
  ["A main weakness of using a rule of thumb such as \"10 times salary\" is that it:",
    ["Ignores the client's actual needs", "Always overstates the need", "Requires complex calculations", "Can't include group coverage"],
    "A multiple of income doesn't consider debts, assets, dependants or goals.", "r"],
  ["When counting a client's RRSP as a resource available at death in a needs analysis, the agent should consider that:",
    ["It may be taxable at death", "It's always paid tax-free", "It can't be counted at all", "It doubles with a rollover"],
    "Unless rolled over to a spouse or dependent child, an RRSP is taxable at death, reducing what's available.", "r"],
  ["Sam earns $90,000; after taxes and his own consumption he contributes 65% to his family, for 30 more years. At 4%, his human life value is closest to:",
    ["$1,011,584", "$1,556,283", "$1,755,000", "$658,000"],
    "Contribution = 58,500 a year; PV of 30 payments at 4% ≈ $1,011,584. $1,556,283 uses his full salary.", "c"],
];

window.GLOSSARY.push(
  ["Capital needs analysis (CNA)", "Immediate needs + capitalized income gap − existing resources = insurance needed.", "lqneeds"],
  ["Human life value (HLV)", "Present value of the earnings a person would contribute to the family.", "lqneeds"],
  ["Capital retention vs liquidation", "Living off investment income only vs drawing the capital down over a set period.", "lqneeds"],
  ["Income gap", "Family's income need minus income still received after a death.", "lqneeds"]
);
