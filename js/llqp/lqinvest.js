// LLQP · Segregated Funds and Annuities module · Chapter 1: Investment and Savings.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.lqinvest = `
<p class="syl">LLQP · Segregated Funds and Annuities module · Chapter 1 of 8 · Investment and Savings</p>
<p>Before recommending segregated funds or annuities, an agent needs the basics of investing: how money grows, the risks investors face, the main asset classes, how investment funds work and cost, and how investment income is taxed. This chapter builds that foundation.</p>

<h3>1. How money grows</h3>
<ul>
  <li><b>Compound interest</b>: interest is earned on earlier interest. Future value = present value × (1 + r)<sup>n</sup>.</li>
  <li><b>Rule of 72</b>: years to double ≈ 72 ÷ annual return (%). At 6%, money doubles in about 12 years.</li>
  <li><b>Inflation</b> reduces purchasing power. <b>Real return ≈ nominal return − inflation</b> (5% nominal with 2% inflation ≈ 3% real).</li>
  <li><b>Dollar-cost averaging</b>: investing a fixed amount regularly buys more units when prices are low, so the average cost per unit is lower than the average price.</li>
</ul>
<div class="ex"><b>Example:</b> $10,000 invested at 5% compounded yearly for 10 years grows to 10,000 × 1.05<sup>10</sup> = <b>$16,288.95</b>.</div>
<div class="calc"><b>BA II Plus:</b> 10 N, 5 I/Y, 10000 +/− PV, 0 PMT, CPT FV → 16,288.95</div>
<div class="ex"><b>Example (dollar-cost averaging):</b> $300 a month at prices of $10, $12 and $8 buys 30 + 25 + 37.5 = 92.5 units for $900, an average cost of <b>$9.73</b> per unit, below the $10 average price.</div>

<h3>2. Risk and return <span class="hot">Highly tested</span></h3>
<p>Higher expected returns come with higher risk (more volatility and a greater chance of loss). Main types of risk:</p>
<table>
  <tr><th>Risk</th><th>Meaning</th></tr>
  <tr><td><b>Market (systematic)</b></td><td>The whole market falls; can't be diversified away</td></tr>
  <tr><td><b>Interest rate</b></td><td>When rates rise, <b>bond prices fall</b> (and vice versa); longer-term bonds are affected more</td></tr>
  <tr><td><b>Inflation (purchasing power)</b></td><td>Returns don't keep up with rising prices; a big risk for "safe" cash and GICs</td></tr>
  <tr><td><b>Credit (default)</b></td><td>The issuer can't pay interest or repay principal</td></tr>
  <tr><td><b>Liquidity</b></td><td>The investment can't be sold quickly at a fair price</td></tr>
  <tr><td><b>Currency (foreign exchange)</b></td><td>Foreign investments lose value when the Canadian dollar rises</td></tr>
  <tr><td><b>Business / concentration</b></td><td>Problems at one company or sector; reduced by <b>diversification</b></td></tr>
</table>

<h3>3. Asset classes</h3>
<table>
  <tr><th>Asset class</th><th>Examples</th><th>Return source</th><th>Risk</th></tr>
  <tr><td><b>Cash and equivalents</b></td><td>Savings accounts, T-bills, money market funds, short GICs</td><td>Interest</td><td>Lowest (but inflation risk)</td></tr>
  <tr><td><b>Fixed income</b></td><td>Government and corporate bonds, GICs</td><td>Interest, possible capital gains or losses</td><td>Low to moderate</td></tr>
  <tr><td><b>Equities</b></td><td>Common and preferred shares</td><td>Dividends and capital gains</td><td>Highest (over the short term)</td></tr>
</table>
<ul>
  <li><b>GICs</b> issued by banks and trust companies are protected by the <b>Canada Deposit Insurance Corporation (CDIC)</b> up to <b>$100,000</b> per insured category per member institution (eligible terms; insurer-issued GICs fall under Assuris instead).</li>
  <li><b>Asset allocation</b> (the mix of cash, bonds and stocks) is the biggest driver of a portfolio's risk and return; <b>diversification</b> across and within asset classes reduces risk.</li>
</ul>

<h3>4. Investment funds and their costs</h3>
<ul>
  <li><b>Mutual funds</b> pool investors' money under professional management. Each unit is worth the <b>net asset value per unit (NAVPS)</b> = (assets − liabilities) ÷ units outstanding, calculated daily.</li>
  <li><b>Management expense ratio (MER)</b>: the yearly cost of running the fund (management fee, operating costs, taxes) as a % of assets, deducted before returns are reported. A fund earning 8% before costs with a 2.5% MER returns about <b>5.5%</b> to investors.</li>
  <li><b>Sales charges</b>: front-end load (paid at purchase), no load, and low load (a short redemption schedule). Deferred sales charge (DSC) options have been <b>banned for new sales</b> of mutual funds (since 2022) and segregated funds (since June 1, 2023).</li>
  <li><b>Trailing commissions</b> paid from the MER compensate the advisor for ongoing service.</li>
  <li><b>Exchange-traded funds (ETFs)</b> trade on stock exchanges, usually track an index and have low MERs.</li>
  <li><b>Active</b> management tries to beat a benchmark; <b>passive</b> management tracks it at lower cost. Styles include growth (fast-growing companies) and value (undervalued companies).</li>
</ul>

<h3>5. Taxation of investment income (non-registered) <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Income</th><th>Tax treatment</th></tr>
  <tr><td><b>Interest</b></td><td>Fully taxable at the investor's marginal rate, every year (even if not paid out, e.g. a compound GIC)</td></tr>
  <tr><td><b>Canadian dividends</b></td><td>Grossed up and then reduced by the <b>dividend tax credit</b>, so taxed less than interest</td></tr>
  <tr><td><b>Capital gains</b></td><td><b>50%</b> of the gain is taxable, only when the investment is sold (realized)</td></tr>
  <tr><td><b>Capital losses</b></td><td>50% is deductible <b>only against taxable capital gains</b>; unused losses carry back 3 years or forward indefinitely</td></tr>
</table>
<ul>
  <li>Capital gain = proceeds of sale − <b>adjusted cost base (ACB)</b> − selling costs.</li>
</ul>
<div class="ex"><b>Example:</b> units bought for $10,000 are sold for $15,000. Capital gain = $5,000; taxable gain = 50% = $2,500; at a 40% marginal rate the tax is <b>$1,000</b>. By contrast, $1,000 of interest at 40% leaves only $600 after tax.</div>

<div class="how"><b>How it's tested:</b> future value and Rule of 72 calculations, real return, dollar-cost averaging, matching a risk to a situation (rising rates and bonds, inflation and GICs), asset class features, CDIC limits, NAVPS and MER, the DSC ban, and the tax treatment of interest, dividends and capital gains.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Calculate compound growth, doubling time and real returns.</li>
  <li>Describe the main investment risks and how diversification helps.</li>
  <li>Compare cash, fixed income and equities.</li>
  <li>Explain how investment funds are priced and what they cost.</li>
  <li>Calculate the tax on interest, dividends and capital gains.</li>
</ul></div>
`;

window.QB_HARD.lqinvest = [
  ["A client invests $10,000 at 5% compounded annually. What is it worth after 10 years?",
    ["$16,288.95", "$15,000.00", "$16,470.09", "$15,513.28"],
    "FV = 10,000 × 1.05^10 = $16,288.95; simple interest would give $15,000.", "c"],
  ["Using the Rule of 72, how long will it take money to double at 6% a year?",
    ["About 12 years", "About 6 years", "About 18 years", "About 7 years"],
    "72 ÷ 6 = 12 years.", "c"],
  ["A GIC pays 5% when inflation is 2%. Its approximate real return is:",
    ["3%", "7%", "2.5%", "10%"],
    "Real return ≈ nominal return − inflation = 5% − 2% = 3%.", "c"],
  ["A client invests $300 a month in a fund whose unit price is $10, $12 and $8 in three months. Her average cost per unit is closest to:",
    ["$9.73", "$10.00", "$10.27", "$9.50"],
    "Units = 30 + 25 + 37.5 = 92.5; cost = 900 / 92.5 = $9.73, lower than the $10 average price.", "c"],
  ["Interest rates rise sharply. What most likely happens to the prices of existing long-term bonds?",
    ["They fall", "They rise", "They don't change", "They double"],
    "Bond prices move opposite to interest rates, and long-term bonds are most sensitive.", "s"],
  ["A retiree keeps all her savings in GICs because she wants no risk. Which risk is she most exposed to?",
    ["Inflation risk", "Market risk", "Currency risk", "Liquidity of stocks"],
    "Low-yielding safe investments may not keep up with rising prices, eroding purchasing power.", "s"],
  ["Which type of risk can't be reduced by diversifying across many companies?",
    ["Market risk", "Business risk", "Concentration risk", "Company-specific risk"],
    "Market (systematic) risk affects all investments; diversification reduces company-specific risk only.", "r"],
  ["A client has a $90,000 GIC at a CDIC member bank. Which statement is correct?",
    ["It's protected up to $100,000", "It's protected by Assuris", "It isn't protected at all", "Only $60,000 is protected"],
    "CDIC protects eligible deposits up to $100,000 per insured category per member institution.", "s"],
  ["A fund earns 8% before expenses and has an MER of 2.5%. Investors' return is about:",
    ["5.5%", "8.0%", "10.5%", "6.0%"],
    "The MER is deducted from fund returns: 8% − 2.5% = 5.5%.", "c"],
  ["How is a fund's net asset value per unit (NAVPS) calculated?",
    ["(Assets − liabilities) ÷ units outstanding", "Total assets ÷ number of investors", "Market price set by a stock exchange", "Last year's return × units outstanding"],
    "NAVPS = net assets divided by the number of units outstanding, usually calculated daily.", "r"],
  ["Since June 1, 2023, which sales charge option can no longer be used for new segregated fund sales?",
    ["Deferred sales charge", "Front-end load", "No-load", "Trailing commission"],
    "Insurance regulators banned DSC options for new seg fund sales, following the mutual fund ban.", "r"],
  ["A client in a 40% tax bracket earns $1,000 of interest in a non-registered account. How much does she keep after tax?",
    ["$600", "$800", "$1,000", "$400"],
    "Interest is fully taxable: 1,000 × (1 − 0.40) = $600.", "c"],
  ["Units bought for $10,000 are sold for $15,000 in a non-registered account. At a 40% marginal rate, the tax owing is:",
    ["$1,000", "$2,000", "$2,500", "$500"],
    "Gain 5,000 × 50% inclusion = 2,500 taxable; 2,500 × 40% = $1,000.", "c"],
  ["A client has a $4,000 capital loss this year and no capital gains. He can:",
    ["Carry it back 3 years or forward", "Deduct it from his salary this year", "Use it only against interest income", "Never use it"],
    "Capital losses can only offset capital gains; unused losses carry back 3 years or forward indefinitely.", "s"],
  ["Compared with interest income, eligible Canadian dividends are taxed:",
    ["Less, due to the dividend tax credit", "More, because of the dividend gross-up", "At exactly the same rate", "Only when shares are sold"],
    "The gross-up and dividend tax credit make Canadian dividends more tax-efficient than interest.", "r"],
];

window.GLOSSARY.push(
  ["Rule of 72", "Years to double ≈ 72 ÷ annual return (%).", "lqinvest"],
  ["Real return", "Nominal return minus inflation (approximately).", "lqinvest"],
  ["Dollar-cost averaging", "Investing a fixed amount regularly so more units are bought when prices are low.", "lqinvest"],
  ["Management expense ratio (MER)", "Yearly cost of running a fund as a % of its assets, deducted from returns.", "lqinvest"],
  ["Capital gains inclusion rate", "50% of a realized capital gain is taxable.", "lqinvest"],
  ["CDIC", "Protects eligible bank and trust company deposits up to $100,000 per insured category.", "lqinvest"]
);
