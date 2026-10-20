// CFA Level I · Alternative Investments · Learning module 1: Alternative Investment Features, Methods, and Structures.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1altfeat = `
<p class="syl">CFA Level I · Alternative Investments (7–10%) · Learning module 1 of 7 · Alternative Investment Features, Methods, and Structures</p>
<p>Alternative investments are everything outside long-only stocks, bonds and cash: private equity and debt, real estate, infrastructure, natural resources, hedge funds and digital assets. This lesson covers what they have in common, why investors use them, the three ways to invest (funds, co-investment, direct), the limited partnership structure, and how managers are paid (fees, hurdles, catch-up, waterfalls, clawbacks).</p>

<h3>1. Features of alternative investments</h3>
<ul>
  <li><b>Illiquid</b> (long lockups, no public market), often with <b>large minimum investments</b>.</li>
  <li><b>Specialized managers</b>, less regulation and less transparency than public markets.</li>
  <li><b>Low correlation</b> with traditional assets, at least as measured (see the smoothing issue in the next lesson).</li>
  <li><b>Higher fees</b> (management plus performance fees), often use of <b>leverage</b>.</li>
  <li><b>Valuation difficulties</b> (appraisals or models rather than market prices) and limited, often biased, historical data.</li>
  <li>Complex legal and tax structures.</li>
</ul>
<p><b>Why invest?</b> The main reason is <b>diversification</b>: returns that aren't closely tied to stocks and bonds. Others: potentially higher returns (an <b>illiquidity premium</b>), inflation protection (real assets), and access to different sources of return.</p>

<h3>2. Investment methods <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Method</th><th>Advantages</th><th>Disadvantages</th></tr>
  <tr><td><b>Fund investing</b>: invest as a limited partner in a manager's fund</td><td>Needs the least expertise; diversified across deals; manager does the work</td><td>Highest fees; little control over deals; due diligence on the manager is essential</td></tr>
  <tr><td><b>Co-investing</b>: invest in a fund and also directly alongside it in specific deals</td><td>Lower or no fees on the co-investment; more control; learn from the manager</td><td>Needs more expertise; risk of <b>adverse selection</b> (being offered the less attractive deals)</td></tr>
  <tr><td><b>Direct investing</b>: buy assets directly, without a fund manager</td><td>Most control and flexibility; no external fees</td><td>Needs the most expertise and resources; less diversified</td></tr>
</table>
<p>Due diligence on a manager covers its organization and people, investment process and track record, operations and controls, and the legal terms of the fund.</p>

<h3>3. Structures</h3>
<ul>
  <li>Most private funds are <b>limited partnerships</b>. The <b>general partner (GP)</b> manages the fund and has unlimited liability (usually through a company). <b>Limited partners (LPs)</b> are passive investors with liability limited to their investment.</li>
  <li>LPs <b>commit</b> capital, which the GP <b>calls</b> (draws down) as deals are found. The <b>limited partnership agreement (LPA)</b> sets the terms; <b>side letters</b> give particular LPs special terms (e.g. lower fees, more reporting).</li>
  <li>Other structures: <b>separately managed accounts</b> (the investor owns the assets, more transparency and control), master-feeder funds (for different tax jurisdictions), and joint ventures.</li>
</ul>

<h3>4. How managers are paid <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Term</th><th>Meaning</th></tr>
  <tr><td><b>Management fee</b></td><td>Typically 1%–2% a year, on <b>committed</b> capital (private equity) or <b>assets under management</b> (hedge funds)</td></tr>
  <tr><td><b>Performance fee / carried interest</b></td><td>Typically 20% of profits</td></tr>
  <tr><td><b>Hurdle rate</b> (preferred return)</td><td>Minimum return LPs earn before the GP receives a performance fee. <b>Hard hurdle</b>: fee only on returns <b>above</b> the hurdle. <b>Soft hurdle</b>: once the hurdle is cleared, the fee applies to <b>all</b> profits</td></tr>
  <tr><td><b>Catch-up clause</b></td><td>After LPs receive the hurdle return, the GP gets a large share (often 100%) of the next profits until it has received its full share (e.g. 20%) of all profits</td></tr>
  <tr><td><b>High-water mark</b></td><td>Performance fees are paid only on gains above the fund's previous highest value, so investors don't pay twice for recovering losses</td></tr>
  <tr><td><b>Waterfall</b></td><td>Order in which distributions are split. <b>European (whole-of-fund)</b>: LPs get all their capital back plus the hurdle before the GP gets any carried interest (investor-friendly). <b>American (deal-by-deal)</b>: GP earns carry on each deal as it's exited (GP-friendly)</td></tr>
  <tr><td><b>Clawback</b></td><td>GP must return carried interest previously received if, at the end of the fund, it has been paid more than its agreed share</td></tr>
</table>
<div class="ex"><b>Example (waterfall with full catch-up):</b> a fund returns $30 million of profit on $100 million. LPs have an 8% preferred return; the GP gets 20% carry with a 100% catch-up.<br>1. LPs receive the 8% hurdle: <b>$8m</b>.<br>2. Catch-up: the GP takes 100% until it has 20% of profits distributed so far: x = 0.2 × (8 + x) → <b>$2m</b>.<br>3. The remaining $20m is split 80/20: LPs $16m, GP $4m.<br>Totals: LPs $24m, GP <b>$6m</b> = 20% of $30m.</div>

<div class="how"><b>How it's tested:</b> characteristics of alternatives, the main reason to add them (diversification), fund vs co-investing vs direct investing trade-offs, GP vs LP roles, hard vs soft hurdles, catch-up, high-water marks, European vs American waterfalls and clawbacks.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe the features of alternative investments and why investors use them.</li>
  <li>Compare fund investing, co-investing and direct investing.</li>
  <li>Describe limited partnership and other structures.</li>
  <li>Explain management fees, performance fees, hurdle rates, catch-up, high-water marks, waterfalls and clawbacks.</li>
</ul></div>
`;

window.QB_HARD.l1altfeat = [
  ["A catch-up clause in a private equity fund allows the general partner to:",
    ["Take extra profit above the hurdle until its carry is fully paid", "Recover management fees it waived in earlier years", "Call additional capital from LPs after the investment period has ended"],
    "After LPs receive the preferred return, the catch-up gives the GP a disproportionate share until its overall carry reaches the agreed percentage.", "r"],
  ["A clawback provision requires the general partner to:",
    ["Return carry it was overpaid, once later losses count", "Reinvest all of its carried interest back into the fund", "Pay LPs a guaranteed minimum return"],
    "If early profitable exits generate carry but later deals lose money, the clawback makes the GP give back excess carry.", "r"],
  ["Under a European (whole-of-fund) distribution waterfall, the general partner receives carried interest:",
    ["Only after LPs get all capital back plus the hurdle", "On each deal as soon as that deal is exited at a profit", "Before LPs receive any of their capital back"],
    "European waterfalls are LP-friendly: carry is paid only after LPs recover all contributions and the hurdle across the whole fund. American (deal-by-deal) waterfalls favour the GP.", "r"],
  ["Compared with fund investing, co-investing allows a limited partner to:",
    ["Invest beside the fund in a deal, usually at lower fees", "Avoid doing any of its own due diligence on the deals it backs", "Take control of how the GP manages the fund"],
    "Co-investors invest directly in a portfolio company next to the fund, typically with reduced or no fees, but face adverse selection risk.", "r"],
  ["Which characteristic is typical of alternative investments?",
    ["Illiquidity and limited transparency", "Low fees and daily liquidity for investors", "Normally distributed returns"],
    "Alternatives tend to be illiquid, less transparent and less regulated, with high fees and non-normal return distributions.", "r"],
  ["Which is the most important reason investors add alternative investments to a portfolio of stocks and bonds?",
    ["Diversification from low correlation with stocks and bonds", "Lower fees than traditional investments", "Greater liquidity than traditional stocks and bonds offer"],
    "Alternatives' main appeal is diversification (and potentially higher returns), not fees or liquidity, which are usually worse.", "r"],
  ["Compared with traditional investments, alternative investments typically have:",
    ["Higher fees and less liquidity", "Lower fees and more liquidity", "More transparency and regulation"],
    "Alternatives usually charge management plus performance fees and are less liquid and less transparent.", "r"],
  ["Which investment method requires the most in-house expertise from an investor?",
    ["Direct investing", "Fund investing", "Co-investing"],
    "Direct investors source, evaluate and manage deals themselves.", "r"],
  ["A risk of co-investing alongside a private equity fund is:",
    ["Adverse selection of deals", "Paying the highest fees", "Having no say in any deal"],
    "The GP may offer co-investment mainly in less attractive deals.", "r"],
  ["In a limited partnership, the general partner:",
    ["Manages the fund", "Is a passive investor", "Has liability limited to its stake"],
    "The GP manages the fund and bears unlimited liability (usually via a company); LPs are passive with limited liability.", "r"],
  ["A fund agreement gives one large investor lower fees and extra reporting than the other limited partners. These terms are most likely set out in a:",
    ["Side letter", "Capital call notice", "Clawback provision"],
    "Side letters give specific LPs special terms alongside the LPA.", "r"],
  ["A fund earns 15% and has an 8% hurdle rate. Under a soft hurdle, the performance fee is charged on:",
    ["The full 15% return", "Only the 7% above the hurdle", "None of the return"],
    "With a soft hurdle, once the hurdle is cleared the fee applies to all profits; a hard hurdle charges only on the excess.", "r"],
  ["A fund with $100 million of capital earns $30 million of profit. LPs have an 8% preferred return, and the GP has 20% carried interest with a full catch-up. The GP's catch-up amount is:",
    ["$2 million", "$8 million", "$6 million"],
    "After LPs' $8m hurdle, the GP takes 100% until it has 20% of distributed profits: x = 0.2 × (8 + x) → $2m. Its total carry is $6m.", "c"],
  ["Which distribution waterfall is generally more favourable to the general partner?",
    ["American (deal-by-deal)", "European (whole-of-fund)", "Both are equally favourable"],
    "Deal-by-deal waterfalls pay carry as individual deals are exited, before LPs have recovered all their capital.", "r"],
  ["Private equity management fees are most commonly based on:",
    ["Committed capital", "The fund's realized profits", "The number of deals completed"],
    "PE funds usually charge 1%–2% on committed capital during the investment period; hedge funds charge on AUM.", "r"],
];

window.GLOSSARY.push(
  ["Fund investing vs co-investing vs direct","Fund: expertise and diversification, highest fees. Co-invest: alongside the fund, lower fees. Direct: full control, needs scale and expertise.","l1altfeat"],
  ["Hurdle rates","Hard hurdle: fee only on returns above it. Soft hurdle: once cleared, fee on all profits.","l1altfeat"],
  ["Catch-up clause","After the hurdle, the GP gets a larger share of profits until its carry reaches the agreed percentage.","l1altfeat"],
  ["Waterfalls and clawback","European (whole-of-fund): carry after LPs get capital + hurdle. American (deal-by-deal): carry per deal. Clawback returns excess carry.","l1altfeat"],
  ["General vs limited partner", "GP manages the fund (unlimited liability); LPs are passive investors with limited liability.", "l1altfeat"],
  ["Hard vs soft hurdle", "Fee only on returns above the hurdle vs on all returns once the hurdle is met.", "l1altfeat"],
  ["Side letter", "Agreement giving a specific LP special terms beyond the LPA.", "l1altfeat"]
);
