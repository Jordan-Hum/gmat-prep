// CFA Level I · Derivatives · Learning module 2: Forward Commitment and Contingent Claim Features and Instruments.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1derinst = `
<p class="syl">CFA Level I · Derivatives (5–8%) · Learning module 2 of 10 · Forward Commitment and Contingent Claim Features and Instruments</p>
<p>This lesson describes each main derivative and its payoff: forwards, futures and swaps (forward commitments), then options and credit default swaps (contingent claims). Option payoff and profit calculations are tested often, so practise them until they're automatic.</p>

<h3>1. Forward contracts</h3>
<ul>
  <li>An OTC agreement to buy (long) or sell (short) an underlying at a set <b>forward price F<sub>0</sub></b> on a future date. Customized; no money changes hands at the start; each side bears the other's credit risk.</li>
  <li>Payoff at maturity: <b>long = S<sub>T</sub> − F<sub>0</sub></b>; <b>short = F<sub>0</sub> − S<sub>T</sub></b>. Settled by delivery or in cash.</li>
</ul>
<div class="ex"><b>Example:</b> a long forward on 100 units at F₀ = 1,250. At maturity S<sub>T</sub> = 1,310. Long gains (1,310 − 1,250) × 100 = <b>6,000</b>; the short loses 6,000.</div>

<h3>2. Futures contracts</h3>
<ul>
  <li>Standardized forward contracts traded on an exchange, with a <b>clearing house</b> as counterparty to every trade.</li>
  <li><b>Marked to market daily</b>: gains and losses are settled each day against the <b>settlement price</b>.</li>
  <li><b>Initial margin</b> must be posted to open a position; if the account falls below the <b>maintenance margin</b>, the trader gets a <b>margin call</b> and must deposit <b>variation margin</b> to bring it back to the <b>initial</b> margin. (Margin calculations are in the futures pricing lesson.)</li>
  <li>Some contracts have <b>price limits</b> (maximum daily moves). <b>Open interest</b> = number of contracts outstanding.</li>
</ul>
<table>
  <tr><th></th><th>Forwards</th><th>Futures</th></tr>
  <tr><td>Trading</td><td>OTC, private</td><td>Exchange, public</td></tr>
  <tr><td>Terms</td><td>Customized</td><td>Standardized</td></tr>
  <tr><td>Settlement</td><td>At maturity</td><td>Daily (mark to market)</td></tr>
  <tr><td>Credit risk</td><td>Bilateral</td><td>Very low (clearing house, margin)</td></tr>
  <tr><td>Regulation</td><td>Lighter</td><td>Regulated</td></tr>
</table>

<h3>3. Swaps</h3>
<ul>
  <li>An agreement to exchange a series of cash flows; equivalent to a <b>series of forward contracts</b>.</li>
  <li><b>Plain vanilla interest rate swap</b>: one party pays a fixed rate, the other pays a floating rate (e.g. SOFR) on the same <b>notional</b> amount, which isn't exchanged. Payments on the same date are <b>netted</b>.</li>
  <li><b>Currency swaps</b> exchange payments in two currencies and usually exchange the notional amounts at the start and end. <b>Equity swaps</b> exchange the return on a stock or index for a fixed or floating rate.</li>
</ul>
<div class="ex"><b>Example:</b> notional $50 million, semiannual payments; Party A pays fixed 4.0% and receives SOFR, which is 4.6% for the period. Net payment to A = 50,000,000 × (4.6% − 4.0%) × 0.5 = <b>$150,000</b>.</div>

<h3>4. Options <span class="hot">Highly tested</span></h3>
<ul>
  <li>A <b>call</b> gives the buyer the right to <b>buy</b> the underlying at the exercise (strike) price X; a <b>put</b> gives the right to <b>sell</b> at X. The buyer pays a <b>premium</b> to the seller (writer), who must perform if the buyer exercises.</li>
  <li><b>European</b> options can be exercised only at expiry; <b>American</b> options at any time up to expiry.</li>
</ul>
<div class="formula">Call payoff = max(0, S<sub>T</sub> − X) · Put payoff = max(0, X − S<sub>T</sub>)<br>Buyer's profit = payoff − premium · Writer's profit = premium − payoff<br>Breakeven: call = X + premium; put = X − premium</div>
<table>
  <tr><th>Position</th><th>Maximum gain</th><th>Maximum loss</th></tr>
  <tr><td>Long call</td><td>Unlimited</td><td>Premium</td></tr>
  <tr><td>Short call</td><td>Premium</td><td>Unlimited</td></tr>
  <tr><td>Long put</td><td>X − premium (if S<sub>T</sub> = 0)</td><td>Premium</td></tr>
  <tr><td>Short put</td><td>Premium</td><td>X − premium</td></tr>
</table>
<div class="ex"><b>Example 1:</b> buy a put with X = 60 for 4. At expiry S<sub>T</sub> = 52: payoff = 8; profit = 8 − 4 = <b>4</b>. Breakeven = 60 − 4 = <b>56</b>.<br><b>Example 2:</b> write a call with X = 100 for 5. At expiry S<sub>T</sub> = 112: the writer pays 12; profit = 5 − 12 = <b>−7</b>.</div>
<div class="trap"><b>Trap:</b> payoff ignores the premium; profit includes it. The buyer and writer's profits always sum to zero (a zero-sum game).</div>

<h3>5. Credit default swaps (CDS)</h3>
<ul>
  <li>The <b>protection buyer</b> pays a periodic premium (the CDS spread) to the <b>protection seller</b>. If a <b>credit event</b> (bankruptcy, failure to pay, sometimes restructuring) affects the <b>reference entity</b>, the seller compensates the buyer for the loss.</li>
  <li>Payout ≈ notional × (1 − recovery rate). The buyer doesn't need to own the reference entity's bonds.</li>
  <li>A CDS is a contingent claim: the payout depends on whether a credit event occurs.</li>
</ul>
<div class="ex"><b>Example:</b> CDS notional $10 million, reference entity defaults, recovery 35%: payout = 10,000,000 × 65% = <b>$6.5 million</b>.</div>

<div class="how"><b>How it's tested:</b> forward payoffs, futures vs forwards, swap net payments, option payoff, profit and breakeven calculations for long and short calls and puts, maximum gains and losses, and how a CDS works (who pays whom and when).</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe forwards, futures and swaps and calculate their payoffs or net payments.</li>
  <li>Compare forwards and futures.</li>
  <li>Calculate payoffs, profits and breakevens for calls and puts, long and short.</li>
  <li>Describe credit default swaps and calculate a CDS payout.</li>
</ul></div>
`;

window.QB_HARD.l1derinst = [
  ["A key difference between futures and forward contracts is that futures:",
    ["Are marked to market daily through a clearinghouse", "Are customized to meet each party's needs", "Carry more counterparty credit risk than forwards"],
    "Futures are standardized, exchange-traded and settled daily with a clearinghouse guaranteeing performance. Forwards are customized OTC contracts with bilateral credit risk.", "r"],
  ["An investor buys a call with an exercise price of 50 for a premium of 3. At expiry the underlying is 58. The investor's profit is:",
    ["5", "8", "11"],
    "Payoff = max(0, 58 − 50) = 8; profit = 8 − 3 = 5.", "c"],
  ["An investor sells a put with an exercise price of 40 for a premium of 2. At expiry the underlying is 35. The investor's profit is:",
    ["−3", "2", "−5"],
    "The put is exercised: the writer pays 40 − 35 = 5. Profit = premium − payoff = 2 − 5 = −3.", "c"],
  ["A put option has an exercise price of 40 and a premium of 2. The breakeven underlying price at expiry for the put buyer is:",
    ["38", "42", "40"],
    "Breakeven for a long put = X − premium = 40 − 2 = 38. (For a call it would be X + premium.)", "c"],
  ["In a credit default swap, the protection buyer:",
    ["Pays premiums and is compensated if a credit event occurs", "Receives premiums and pays out if a credit event occurs", "Must own the reference entity's bonds"],
    "The buyer pays a periodic premium; the seller compensates the buyer after a credit event. Buyers don't need to own the reference bond.", "r"],
  ["An investor is long a forward on 100 units at a forward price of 1,250. At maturity the underlying is 1,310. Her payoff is:",
    ["+6,000", "−6,000", "+131,000"],
    "(1,310 − 1,250) × 100 = +6,000. The short loses the same amount.", "c"],
  ["In a plain vanilla interest rate swap, the notional principal is:",
    ["Not exchanged", "Exchanged at the start and end", "Exchanged only at the end"],
    "Only net interest payments are exchanged; currency swaps usually exchange notional amounts.", "r"],
  ["A party pays fixed 4.0% and receives SOFR on a $50 million notional, with semiannual payments. If SOFR is 4.6% for the period, the net payment is:",
    ["$150,000 received", "$150,000 paid", "$300,000 received"],
    "50,000,000 × (4.6% − 4.0%) × 0.5 = $150,000; the fixed payer receives it because floating exceeds fixed. $300,000 ignores the half-year.", "c"],
  ["A swap can be viewed as:",
    ["A series of forward contracts", "A single long option contract", "A portfolio of bonds only"],
    "Each swap payment date is like a forward contract at the swap rate.", "r"],
  ["An investor buys a put with an exercise price of 60 for a premium of 4. At expiry the underlying is 52. Her profit is:",
    ["4", "8", "−4"],
    "Payoff = 60 − 52 = 8; profit = 8 − 4 = 4.", "c"],
  ["An investor writes a call with an exercise price of 100 for a premium of 5. At expiry the underlying is 112. His profit is:",
    ["−7", "+5", "−12"],
    "He pays 112 − 100 = 12 and keeps the 5 premium: −7. −12 ignores the premium.", "c"],
  ["The breakeven price at expiry for the buyer of a call with an exercise price of 45 and a premium of 3 is:",
    ["48", "42", "45"],
    "Call breakeven = X + premium = 48. Put breakeven would be X − premium.", "c"],
  ["Which option position has unlimited potential loss?",
    ["Short call", "Long put", "Short put"],
    "A call writer must sell at X however high the price rises. A short put's loss is limited to X − premium.", "r"],
  ["An American option differs from a European option in that it:",
    ["Can be exercised before expiry", "Can be exercised only at expiry", "Is traded only on US exchanges"],
    "The terms refer to exercise style, not location.", "r"],
  ["A CDS has a notional of $10 million. The reference entity defaults and the recovery rate is 35%. The protection seller pays about:",
    ["$6.5 million", "$3.5 million", "$10.0 million"],
    "Payout ≈ notional × (1 − recovery) = 10 × 0.65 = $6.5 million.", "c"],
  ["When a futures account falls below the maintenance margin, the trader must deposit enough to bring it back to the:",
    ["Initial margin", "Maintenance margin", "Settlement price"],
    "Variation margin restores the account to the initial margin level.", "r"],
];

window.GLOSSARY.push(
  ["Option payoffs","Long call max(0, S − X); long put max(0, X − S). Profit subtracts the premium. Call breakeven X + c; put X − p.","l1derinst"],
  ["Forward payoff", "Long: S_T − F0; short: F0 − S_T.", "l1derinst"],
  ["Option breakeven", "Call: X + premium; put: X − premium.", "l1derinst"],
  ["Credit default swap (CDS)", "Protection buyer pays a spread; seller compensates for losses after a credit event.", "l1derinst"],
  ["European vs American option", "Exercisable only at expiry vs any time up to expiry.", "l1derinst"]
);
