// CFA Level I · Derivatives · Learning module 6: Pricing and Valuation of Futures Contracts.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1futval = `
<p class="syl">CFA Level I · Derivatives (5–8%) · Learning module 6 of 10 · Pricing and Valuation of Futures Contracts</p>
<p>Futures are priced with the same cost-of-carry model as forwards, but daily settlement changes how their value behaves and can make futures prices differ slightly from forward prices. This lesson works through margin accounts, explains why a futures contract's value resets to zero each day, compares futures and forward prices, and covers interest rate futures.</p>

<h3>1. Daily settlement and margin <span class="hot">Highly tested</span></h3>
<ul>
  <li>Each day the exchange sets a <b>settlement price</b>, and each position's gain or loss is added to or taken from its margin account (<b>marking to market</b>).</li>
  <li><b>Initial margin</b>: deposited to open the position. <b>Maintenance margin</b>: the minimum balance. If the account falls <b>below</b> maintenance, the trader must deposit <b>variation margin</b> to bring it back up to the <b>initial</b> margin. Amounts above the initial margin can be withdrawn.</li>
</ul>
<div class="ex"><b>Example:</b> long 2 gold futures (100 oz each) at 1,900. Initial margin 8,000 per contract (16,000 total); maintenance 6,000 per contract (12,000 total).
<table>
  <tr><th>Day</th><th>Settlement</th><th>Gain/loss</th><th>Balance</th><th>Action</th></tr>
  <tr><td>0</td><td>1,900</td><td>—</td><td>16,000</td><td>Deposit initial margin</td></tr>
  <tr><td>1</td><td>1,885</td><td>−3,000</td><td>13,000</td><td>Above 12,000: no call</td></tr>
  <tr><td>2</td><td>1,868</td><td>−3,400</td><td>9,600</td><td>Below 12,000: deposit <b>6,400</b> → 16,000</td></tr>
  <tr><td>3</td><td>1,890</td><td>+4,400</td><td>20,400</td><td>Can withdraw 4,400</td></tr>
</table></div>
<div class="trap"><b>Trap:</b> the variation margin restores the <b>initial</b> margin, not the maintenance margin. Gain/loss = price change × contract size × number of contracts.</div>

<h3>2. Price and value of a futures contract</h3>
<ul>
  <li>The <b>futures price</b> is set by the cost-of-carry model, just like a forward: F₀ = [S₀ − PV(income) + PV(costs)](1 + r)<sup>T</sup>.</li>
  <li>The <b>value</b> of a futures position is the gain or loss since the last settlement. Because gains and losses are settled every day, the value <b>resets to zero</b> after each daily settlement.</li>
</ul>

<h3>3. Futures prices vs forward prices <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Relationship between futures prices and interest rates</th><th>Result</th></tr>
  <tr><td>Interest rates constant or uncorrelated with futures prices</td><td>Futures price = forward price</td></tr>
  <tr><td><b>Positive</b> correlation</td><td>Futures price <b>&gt;</b> forward price: daily gains come when rates are high (reinvested at high rates) and losses when rates are low (financed cheaply), so the long prefers futures</td></tr>
  <tr><td><b>Negative</b> correlation</td><td>Futures price <b>&lt;</b> forward price</td></tr>
</table>
<p>Futures also have lower counterparty risk and more liquidity, but daily settlement creates <b>liquidity needs</b> (cash for margin calls) that forwards don't.</p>

<h3>4. Interest rate futures</h3>
<ul>
  <li>Short-term interest rate futures (e.g. 3-month SOFR futures) are quoted as <b>100 − annualized rate</b>. A price of 95.80 implies a rate of 4.20%.</li>
  <li>A <b>long</b> position gains when the price rises, i.e. when <b>rates fall</b>. So a long interest rate future is like a long FRA's mirror image: a lender (or bond investor) uses it to lock in a rate; a borrower hedges by <b>selling</b> futures.</li>
  <li>The <b>basis point value</b> of a contract = notional × 0.0001 × period length. For a $1 million 3-month contract: 1,000,000 × 0.0001 × 0.25 = <b>$25</b> per bp.</li>
  <li>Because interest rate futures prices are negatively correlated with rates, the rate implied by a futures contract is slightly higher than the equivalent FRA rate (a <b>convexity bias</b>).</li>
</ul>
<div class="ex"><b>Example:</b> a trader buys a 3-month SOFR future at 95.80 (4.20%). Rates fall and the price rises to 96.00 (4.00%). Gain = 20 bp × $25 = <b>$500</b> per contract.</div>

<div class="how"><b>How it's tested:</b> margin account calculations and variation margin, why futures value resets to zero, futures vs forward prices under positive or negative correlation with interest rates, interest rate futures quotes, basis point value and who gains when rates move.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Calculate daily settlement gains and losses, margin balances and variation margin.</li>
  <li>Explain why a futures contract's value is zero after each daily settlement.</li>
  <li>Explain when futures prices exceed or fall below forward prices.</li>
  <li>Describe interest rate futures quotes and calculate gains using basis point value.</li>
</ul></div>
`;

window.QB_HARD.l1futval = [
  ["A futures position has an initial margin of 2,000 and a maintenance margin of 1,500. After losses, the margin account stands at 1,400. The variation margin required is:",
    ["600", "100", "500"],
    "Falling below maintenance triggers a call to restore the account to the initial margin: 2,000 − 1,400 = 600.", "c"],
  ["If futures prices are positively correlated with interest rates, futures prices will tend to be:",
    ["Higher than equivalent forward prices", "Lower than equivalent forward prices", "Equal to equivalent forward prices"],
    "Daily gains arrive when rates are high (reinvested at higher rates) and losses when rates are low (financed cheaply), making the futures more attractive, so its price is higher.", "r"],
  ["A trader is long 2 gold futures (100 oz each). The price falls from 1,900 to 1,885. The loss on the position is:",
    ["3,000", "1,500", "30"],
    "15 × 100 × 2 = 3,000. 1,500 covers one contract only.", "c"],
  ["A futures account has an initial margin of 16,000 and a maintenance margin of 12,000. After losses it stands at 9,600. The variation margin required is:",
    ["6,400", "2,400", "0"],
    "Below maintenance, so the account must be restored to the initial margin: 16,000 − 9,600 = 6,400. 2,400 only restores the maintenance level.", "c"],
  ["A futures account has an initial margin of 16,000 and a maintenance margin of 12,000. It stands at 13,000 after a loss. The trader must deposit:",
    ["0", "3,000", "1,000"],
    "Margin calls only occur when the balance falls below the maintenance margin.", "c"],
  ["Immediately after the daily settlement, the value of a futures position is:",
    ["Zero", "The futures price", "The initial margin"],
    "Gains and losses are paid into or out of the margin account each day, so the contract's value resets to zero.", "r"],
  ["If futures prices are negatively correlated with interest rates, futures prices will tend to be:",
    ["Lower than forward prices", "Higher than forward prices", "Equal to forward prices"],
    "Gains come when rates are low and losses when rates are high, which hurts the long, so futures prices are lower.", "r"],
  ["If interest rates are constant, the futures price compared with an otherwise identical forward price is:",
    ["The same", "Higher", "Lower in all cases"],
    "Without interest rate uncertainty, daily settlement doesn't create an advantage, so prices are equal.", "r"],
  ["A 3-month SOFR futures contract is quoted at 95.80. The implied interest rate is:",
    ["4.20%", "95.80%", "4.38%"],
    "Rate = 100 − price = 4.20%.", "c"],
  ["A trader buys a 3-month SOFR future at 95.80 ($25 per bp). The price rises to 96.00. The gain per contract is:",
    ["$500", "$200", "$5,000"],
    "The price rose 20 bp (rates fell 20 bp): 20 × $25 = $500.", "c"],
  ["A company that plans to borrow in three months and wants to hedge against rising rates using short-term interest rate futures should:",
    ["Sell the futures", "Buy the futures", "Buy call options on the futures"],
    "Futures prices fall when rates rise, so a short futures position gains, offsetting higher borrowing costs.", "s"],
  ["Compared with a forward, a disadvantage of using futures to hedge is that futures:",
    ["Require cash for daily margin calls", "Have higher counterparty credit risk", "Can't be closed out before expiry"],
    "Daily settlement can require cash before the hedged item produces it (liquidity risk).", "r"],
];

window.GLOSSARY.push(
  ["Futures margin","Initial margin, maintenance margin; below maintenance → variation margin back to the initial level. Daily mark-to-market.","l1futval"],
  ["Futures vs forward prices","Futures > forwards if futures prices are positively correlated with interest rates.","l1futval"],
  ["Variation margin", "Deposit that restores a futures account to the initial margin after it falls below maintenance.", "l1futval"],
  ["Interest rate futures quote", "100 − annualized rate; long gains when rates fall.", "l1futval"]
);
