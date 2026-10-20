// CFA Level I · Derivatives · Learning module 4: Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1carry = `
<p class="syl">CFA Level I · Derivatives (5–8%) · Learning module 4 of 10 · Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives</p>
<p>Derivatives are priced so that no one can make a riskless profit. This lesson explains arbitrage and replication, why derivatives are priced as if investors were risk-neutral, and the cost-of-carry model that sets forward prices once income from the underlying (dividends, coupons, convenience yield) and costs of holding it (storage, insurance) are included. It's the foundation for every pricing lesson that follows.</p>

<h3>1. Arbitrage and replication</h3>
<ul>
  <li><b>Arbitrage</b>: a riskless profit with no net investment, from prices that are out of line (the <b>law of one price</b>: assets with identical cash flows must have the same price). Arbitrageurs' trades quickly push prices back in line.</li>
  <li>Limits to arbitrage: transaction costs, restrictions on short selling, funding limits and differences in tax treatment.</li>
  <li><b>Replication</b>: combining instruments to reproduce another's cash flows. For example, <b>long underlying + short forward = risk-free bond</b> (the asset will be delivered at the fixed forward price, so the result is a certain amount). Rearranging: long forward = long underlying + borrowing.</li>
</ul>
<h4>Risk-neutral pricing</h4>
<p>Because a derivative can be combined with the underlying to create a riskless position, its price doesn't depend on investors' risk preferences or on the underlying's expected return. Derivatives are priced as if investors were <b>risk-neutral</b>: expected payoffs are discounted at the <b>risk-free rate</b>.</p>

<h3>2. The forward price with no income or costs <span class="hot">Highly tested</span></h3>
<div class="formula">F<sub>0</sub>(T) = S<sub>0</sub>(1 + r)<sup>T</sup> · continuous compounding: F<sub>0</sub>(T) = S<sub>0</sub>e<sup>rT</sup></div>
<div class="ex"><b>Example:</b> S₀ = 80, r = 5%, T = 0.5 year: F₀ = 80 × 1.05<sup>0.5</sup> = <b>81.98</b>.</div>
<table>
  <tr><th>If the market forward price is…</th><th>Arbitrage</th><th>Name</th></tr>
  <tr><td><b>Too high</b> (above S₀(1 + r)<sup>T</sup>)</td><td><b>Borrow</b>, <b>buy</b> the underlying, <b>sell</b> the forward; deliver the asset at maturity and repay the loan</td><td>Cash-and-carry</td></tr>
  <tr><td><b>Too low</b></td><td><b>Short</b> the underlying, <b>lend</b> the proceeds, <b>buy</b> the forward; take delivery to close the short</td><td>Reverse cash-and-carry</td></tr>
</table>
<div class="ex"><b>Example:</b> the forward above is quoted at 85 instead of 81.98. Borrow 80, buy the asset, sell the forward at 85. At maturity deliver the asset for 85 and repay 81.98: riskless profit = <b>3.02</b> per unit.</div>

<h3>3. The cost-of-carry model <span class="hot">Highly tested</span></h3>
<p>Holding the underlying until the forward matures may bring <b>benefits</b> (dividends, coupons, foreign interest, the <b>convenience yield</b> of having a physical commodity on hand) and <b>costs</b> (storage, insurance). Benefits <b>lower</b> the forward price (the forward holder doesn't receive them); costs <b>raise</b> it (the forward holder avoids them).</p>
<div class="formula">F<sub>0</sub>(T) = [S<sub>0</sub> − PV(income) + PV(costs)] × (1 + r)<sup>T</sup><br>Continuous: F<sub>0</sub>(T) = S<sub>0</sub>e<sup>(r + c − i)T</sup>, where c = cost rate and i = income/yield rate (dividend yield, convenience yield, foreign interest rate)</div>
<div class="ex"><b>Example 1 (dividend):</b> S₀ = 80, r = 5%, T = 0.5, a dividend of 1.50 in three months: PV = 1.50 / 1.05<sup>0.25</sup> = 1.48. F₀ = (80 − 1.48) × 1.05<sup>0.5</sup> = <b>80.46</b>.<br><b>Example 2 (storage):</b> same, but storage costs with a PV of 2 instead of the dividend: F₀ = (80 + 2) × 1.05<sup>0.5</sup> = <b>84.02</b>.<br><b>Example 3 (continuous, commodity):</b> gold at 1,800, r = 4%, storage 0.5%, one year: F₀ = 1,800 × e<sup>0.045</sup> = <b>1,882.85</b>.<br><b>Example 4 (equity index):</b> index 4,000, r = 4%, dividend yield 2%, T = 0.75: F₀ = 4,000 × e<sup>(0.04 − 0.02)×0.75</sup> = <b>4,060.45</b>.</div>
<h4>Currency forwards</h4>
<p>For currencies, the foreign interest rate is the "income" on holding the foreign currency:</p>
<div class="formula">F<sub>f/d</sub> = S<sub>f/d</sub> × (1 + r<sub>f</sub>)<sup>T</sup> / (1 + r<sub>d</sub>)<sup>T</sup> (price currency rate in the numerator)</div>
<div class="ex"><b>Example:</b> spot USD/EUR = 1.10 (dollars per euro), US rate 4%, euro rate 2.5%, one year: F = 1.10 × 1.04 / 1.025 = <b>1.1161</b>. The currency with the higher interest rate (USD) trades at a forward discount.</div>

<div class="how"><b>How it's tested:</b> forward prices with and without income or costs (discrete and continuous), the direction of the effect of dividends, storage and convenience yield, identifying and calculating cash-and-carry and reverse cash-and-carry arbitrage, replication, risk-neutral pricing, and currency forwards.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Explain arbitrage, the law of one price and the limits to arbitrage.</li>
  <li>Describe replication and why derivatives are priced with risk-neutral (risk-free) discounting.</li>
  <li>Calculate forward prices with income and costs of carry, in discrete and continuous form.</li>
  <li>Describe and calculate cash-and-carry and reverse cash-and-carry arbitrage.</li>
</ul></div>
`;

window.QB_HARD.l1carry = [
  ["A stock trades at 100 and will pay dividends with a present value of 2 over the next year. If the risk-free rate is 5%, the no-arbitrage one-year forward price is closest to:",
    ["102.90", "105.00", "103.00"],
    "F0 = (S0 − PV of dividends)(1 + r)^T = (100 − 2) × 1.05 = 102.90. Benefits of holding the asset lower the forward price.", "c"],
  ["A commodity trades at 50. The continuously compounded risk-free rate is 4%, storage costs are 1% and the convenience yield is 2%. The one-year forward price is closest to:",
    ["51.52", "52.55", "50.50"],
    "F0 = S0 e^((r + c − i)T) = 50 × e^(0.04 + 0.01 − 0.02) = 50 × e^0.03 = 51.52.", "c"],
  ["For an asset with no income or costs, the forward price trades above S0(1 + r)^T. An arbitrageur would:",
    ["Borrow, buy the asset and sell the forward", "Short the asset, lend the proceeds and buy the forward", "Buy the forward and simply hold cash"],
    "When the forward is overpriced, a cash-and-carry trade locks in a riskless profit: buy the underlying with borrowed money and deliver it at the high forward price.", "r"],
  ["Compared with the forward price implied by the risk-free rate and storage costs alone, a commodity's convenience yield makes its forward price:",
    ["Lower", "Higher", "Unchanged"],
    "The convenience yield is a non-monetary benefit of holding the physical commodity; like dividends, it reduces the forward price.", "r"],
  ["A stock with no dividends trades at 80. The risk-free rate is 5%. The no-arbitrage six-month forward price is closest to:",
    ["81.98", "84.00", "82.03"],
    "80 × 1.05^0.5 = 81.98. 84.00 uses a full year; 82.03 uses continuous compounding at 5%.", "c"],
  ["A six-month forward on a stock trading at 80 is quoted at 85, while the no-arbitrage price is 81.98. The riskless arbitrage profit per share at maturity is closest to:",
    ["3.02", "5.00", "0.00"],
    "Borrow 80, buy the stock, sell forward at 85: receive 85, repay 81.98 → 3.02.", "c"],
  ["A stock trades at 80 and will pay a dividend of 1.50 in three months. With r = 5%, the six-month forward price is closest to:",
    ["80.46", "81.98", "80.44"],
    "PV(dividend) = 1.50/1.05^0.25 = 1.48; (80 − 1.48) × 1.05^0.5 = 80.46. 80.44 subtracts the dividend without discounting it.", "c"],
  ["An asset trades at 80 and has storage costs with a present value of 2 over the next six months. With r = 5%, the six-month forward price is closest to:",
    ["84.02", "81.98", "79.93"],
    "(80 + 2) × 1.05^0.5 = 84.02. Costs of carry increase the forward price.", "c"],
  ["Gold trades at 1,800. The continuously compounded risk-free rate is 4% and storage costs are 0.5% a year. The one-year forward price is closest to:",
    ["1,882.85", "1,873.46", "1,881.00"],
    "1,800 × e^(0.04 + 0.005) = 1,882.85. 1,873.46 ignores storage.", "c"],
  ["An equity index is at 4,000 with a continuous dividend yield of 2%. The continuously compounded risk-free rate is 4%. The nine-month futures price is closest to:",
    ["4,060.45", "4,121.82", "4,080.81"],
    "4,000 × e^((0.04 − 0.02) × 0.75) = 4,060.45. 4,121.82 ignores dividends.", "c"],
  ["Spot USD/EUR is 1.10 (US dollars per euro). The one-year US rate is 4% and the euro rate is 2.5%. The one-year forward rate is closest to:",
    ["1.1161", "1.0841", "1.1000"],
    "1.10 × 1.04 / 1.025 = 1.1161. 1.0841 inverts the interest rate ratio.", "c"],
  ["A forward price is below S0(1 + r)^T for an asset with no income or costs. An arbitrageur would:",
    ["Short the asset, lend, buy the forward", "Borrow, buy the asset, sell the forward", "Buy both the asset and the forward"],
    "Reverse cash-and-carry: short the asset, invest the proceeds and buy the cheap forward to cover the short.", "r"],
  ["A long position in the underlying combined with a short forward on it replicates:",
    ["A risk-free bond", "A long call option", "A long forward contract"],
    "The asset is delivered at the fixed forward price, so the combined position has a certain payoff.", "r"],
  ["Derivatives can be priced using the risk-free rate rather than the underlying's expected return because:",
    ["They can be hedged to a riskless position", "Investors are always risk-neutral", "Underlying assets have no risk premium"],
    "A hedged position is riskless, so it must earn the risk-free rate regardless of risk preferences.", "r"],
  ["Which of the following lowers a forward price, all else equal?",
    ["A higher dividend yield on the underlying", "Higher storage costs for the underlying", "A higher risk-free interest rate"],
    "Income from the underlying (dividends, coupons, convenience yield) lowers the forward price; costs and higher rates raise it.", "r"],
];

window.GLOSSARY.push(
  ["Forward price with carry","F0 = [S0 − PV(benefits) + PV(costs)](1 + r)^T. Continuous: S0 e^((r + c − i)T).","l1carry"],
  ["Arbitrage", "Riskless profit with no net investment from mispriced but equivalent assets.", "l1carry"],
  ["Cash-and-carry arbitrage", "When the forward is too high: borrow, buy the asset, sell the forward (reverse it when too low).", "l1carry"],
  ["Risk-neutral pricing", "Discounting expected derivative payoffs at the risk-free rate.", "l1carry"],
  ["Convenience yield", "Non-cash benefit of holding a physical commodity; lowers the forward price.", "l1carry"]
);
