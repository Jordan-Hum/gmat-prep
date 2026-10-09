// CFA Level II · Derivatives: study notes, item sets and flashcards.
window.NOTES = window.NOTES || {};
window.QB_SETS = window.QB_SETS || {};
window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l2der = `
<p class="syl">CFA Level II · Derivatives · 5–10% of the exam · Learning modules: Pricing and Valuation of Forward Commitments · Valuation of Contingent Claims</p>

<h3>1. Pricing vs valuation</h3>
<p>The <b>price</b> of a forward commitment is the fixed rate or price set at inception so that the contract's <b>value</b> is zero. After inception, the value changes as the underlying and rates move. Pricing uses <b>carry arbitrage</b>: if the forward price is too high, sell the forward, borrow and buy the underlying (cash-and-carry); if too low, do the reverse (reverse cash-and-carry).</p>

<h3>2. Equity and currency forwards</h3>
<div class="formula">F0(T) = [S0 − PV(dividends)] × (1 + r)^T · Continuous dividend yield: F0(T) = S0 e^{(r_c − δ)T}</div>
<div class="formula">Value of a long forward at t: V_t = [S_t − PV_t(remaining dividends)] − F0(T)/(1 + r)^{T−t}</div>
<div class="formula">Currency forward: F_{P/B} = S_{P/B} × (1 + r_P)^T/(1 + r_B)^T (or with simple interest for money-market periods; e^{(r_P − r_B)T} continuous)</div>
<p>Currency forward value at t: V_t = (F_t − F_0) × notional / (1 + r_P)^{T−t}, from the long base-currency side.</p>
<div class="ex"><b>Example:</b> S0 = 50, r = 4%, 1-year forward, dividend 1.00 in 6 months. PV(D) = 1/1.04^0.5 = 0.981. F0 = (50 − 0.981)(1.04) = 50.98. After 9 months (dividend paid), S = 54: V = 54 − 50.98/1.04^0.25 = 54 − 50.48 = 3.52.</div>

<h3>3. Interest rate forwards and futures</h3>
<ul>
  <li><b>FRA</b> (e.g. 3×6): fixed rate on a 3-month MRR loan starting in 3 months. The <b>FRA rate is the implied forward rate</b>: [(1 + L_long × days_long/360)/(1 + L_short × days_short/360) − 1] × 360/days_FRA.</li>
  <li>Settlement at FRA expiration (advanced set, advanced settled): payment = notional × (MRR − FRA rate) × (days/360) / (1 + MRR × days/360). The long (pay-fixed side) gains if MRR exceeds the FRA rate.</li>
  <li>FRA value before expiration: (new FRA rate − old FRA rate) × days/360 × notional, discounted to today.</li>
  <li><b>Bond futures</b>: quoted futures price Q0 = [(S0 + AI0)(1 + r)^T − AI_T − FVCI]/CF, where CF is the <b>conversion factor</b>; the short delivers the <b>cheapest-to-deliver</b> bond.</li>
</ul>
<div class="ex"><b>Example:</b> 90-day MRR 3.00%, 180-day MRR 3.40%. 3×6 FRA rate = [(1 + 0.034 × 0.5)/(1 + 0.03 × 0.25) − 1] × 4 = 3.77%.</div>

<h3>4. Swaps</h3>
<div class="formula">Swap fixed rate = (1 − PV_N)/Σ PV_i (discount factors for each payment date)</div>
<div class="formula">Value to the pay-fixed side at t = (current swap rate for the remaining term − original fixed rate) × Σ remaining discount factors × notional</div>
<ul>
  <li>A pay-fixed (receive-floating) swap gains when rates rise. The swap rate is a weighted average of forward rates.</li>
  <li><b>Currency swaps</b>: each fixed rate is found from that currency's discount factors; notionals are exchanged at inception and maturity; value = PV of the leg received − PV of the leg paid, converted at the current spot rate.</li>
  <li><b>Equity swaps</b>: one leg pays the equity return (can be negative); the fixed rate is set like an interest rate swap; value = PV of the fixed leg vs the equity leg's current value.</li>
</ul>
<div class="ex"><b>Example:</b> Discount factors 0.9709, 0.9426, 0.9151: 3-year swap rate = (1 − 0.9151)/2.8286 = 3.00%. One year later, factors for the 2 remaining years are 0.9662 and 0.9300: new rate = 0.07/1.8962 = 3.69%. Value to the payer on $50m = (3.69% − 3.00%) × 1.8962 × 50m ≈ $654,000.</div>

<h3>5. Binomial option valuation</h3>
<div class="formula">Risk-neutral probability π = (1 + r − d)/(u − d) · c = [π c⁺ + (1 − π) c⁻]/(1 + r) · Hedge ratio h = (c⁺ − c⁻)/(S⁺ − S⁻)</div>
<ul>
  <li>Value doesn't depend on investors' risk preferences or the actual probability of up moves; it relies on replication: a call = h shares financed partly by borrowing.</li>
  <li><b>Two-period</b>: c = [π² c⁺⁺ + 2π(1 − π) c⁺⁻ + (1 − π)² c⁻⁻]/(1 + r)² for European options.</li>
  <li><b>American options</b>: at each node, value = max(exercise value, continuation value). Early exercise can be optimal for <b>puts</b> (deep in the money) and for calls on <b>dividend-paying</b> stocks just before the dividend.</li>
  <li><b>Interest rate options</b> are valued on interest rate trees; payoffs are usually paid in arrears (discount accordingly).</li>
</ul>
<div class="ex"><b>Example:</b> S = 60, u = 1.20, d = 0.85, r = 3% per period, X = 62. π = 0.18/0.35 = 0.514. Two-period European call: only S⁺⁺ = 86.40 pays 24.40 → c = 0.514² × 24.40/1.03² = 6.08.</div>

<h3>6. Black–Scholes–Merton and Black models</h3>
<div class="formula">c = S e^{−δT} N(d1) − X e^{−rT} N(d2) · p = X e^{−rT} N(−d2) − S e^{−δT} N(−d1)</div>
<div class="formula">d1 = [ln(S/X) + (r − δ + σ²/2)T]/(σ√T) · d2 = d1 − σ√T</div>
<ul>
  <li><b>Assumptions</b>: lognormal prices (geometric Brownian motion), constant r and σ, frictionless continuous trading, no arbitrage, European exercise, known dividend yield.</li>
  <li>Interpretation: a call = long N(d1) shares + borrowing X e^{−rT} N(d2). <b>N(d2)</b> = risk-neutral probability the call finishes in the money.</li>
  <li><b>Black model</b> (options on futures/forwards): c = e^{−rT}[F N(d1) − X N(d2)].</li>
  <li><b>Interest rate options</b>: a <b>cap</b> is a portfolio of caplets (calls on rates); a <b>floor</b> a portfolio of floorlets (puts on rates). A <b>payer swaption</b> (right to pay fixed) gains when rates rise; a <b>receiver swaption</b> gains when rates fall. Payer − receiver swaption = forward pay-fixed swap.</li>
</ul>
<h4>The Greeks</h4>
<table>
  <tr><th>Greek</th><th>Measures sensitivity to</th><th>Key points</th></tr>
  <tr><td><b>Delta</b></td><td>Underlying price</td><td>Call: e^{−δT} N(d1), 0 to 1; put: call delta − e^{−δT}, −1 to 0</td></tr>
  <tr><td><b>Gamma</b></td><td>Change in delta</td><td>Same for calls and puts; highest for <b>at-the-money options near expiration</b></td></tr>
  <tr><td><b>Vega</b></td><td>Volatility</td><td>Positive for long calls and puts; highest at the money</td></tr>
  <tr><td><b>Theta</b></td><td>Passage of time</td><td>Usually negative (time decay) for long options</td></tr>
  <tr><td><b>Rho</b></td><td>Interest rate</td><td>Positive for calls, negative for puts</td></tr>
</table>
<ul>
  <li><b>Delta hedging</b>: number of hedging units = − portfolio delta / delta of the hedge instrument. E.g. hedge 10,000 shares with calls of delta 0.58 → <b>sell</b> 10,000/0.58 ≈ 17,245 calls.</li>
  <li>Delta-only hedges drift as the underlying moves (gamma risk), so they need rebalancing; gamma can only be hedged with options (not with the underlying or forwards).</li>
  <li>Approximation: Δc ≈ delta × ΔS + ½ gamma × ΔS².</li>
  <li><b>Implied volatility</b>: the σ that makes the model price equal the market price. Equity options show a <b>skew</b> (higher implied volatility for low strikes/OTM puts); the <b>volatility surface</b> plots implied volatility by strike and maturity.</li>
</ul>
<div class="how"><b>How it's tested:</b> computing forward prices and values (equity, currency, FRA), swap rates and swap values, one- and two-period binomial values (including American early exercise), BSM values from given N(d) values, delta-hedge quantities, and interpreting Greeks, swaptions and caps.</div>
<div class="key"><b>Carry forward to Level III</b>: Level III applies these instruments to manage portfolio risk: equity overlays with futures and collars, duration management with swaps and futures, currency hedging with forwards, and options strategies (covered calls, protective puts, straddles).</div>
<div class="trap"><b>Traps:</b> use the price currency's rate to discount currency forward values. A pay-fixed swap gains when rates rise. Gamma is the same for a call and put with the same terms. In two-period American puts, check early exercise at <b>every</b> node.</div>
`;

window.QB_SETS.l2der = [
  {
    title: "Elmwood Asset Management: equity and currency forwards",
    case: `<p>Derivatives analyst Paula Reyes reviews forward contracts for Elmwood Asset Management. All rates are annual and compound annually unless stated.</p>
<p><b>Equity forward.</b> Elmwood entered a 1-year long forward on Corvan Inc. shares when the share price was $50.00 and the risk-free rate was 4%. Corvan was expected to pay a $1.00 dividend in 6 months. Nine months later, the dividend has been paid, Corvan trades at $54.00, and the risk-free rate is still 4%.</p>
<p><b>Currency forward.</b> Reyes prices a 6-month USD/GBP forward. Spot is 1.2500 USD per GBP. The 6-month USD rate is 4.5% and the 6-month GBP rate is 4.0% (both quoted on an actual/360, simple-interest basis; use 180 days).</p>
<p>A dealer quotes a 1-year forward on Corvan (set on the same initial date) at $52.00.</p>`,
    qs: [
      ["The no-arbitrage price of the 1-year Corvan forward at inception is closest to:",
        ["$50.98", "$52.00", "$51.00"],
        "PV(D) = 1.00/1.04^0.5 = 0.9806. F0 = (50 − 0.9806) × 1.04 = $50.98. ($52.00 ignores the dividend; $51.00 subtracts the dividend without compounding it to maturity.)", "c"],
      ["Nine months after inception, the value of Elmwood's long forward is closest to:",
        ["$3.52", "$3.02", "$3.98"],
        "V = S_t − F0/(1.04)^0.25 = 54.00 − 50.98/1.00985 = 54.00 − 50.48 = $3.52 (no remaining dividends).", "c"],
      ["The 6-month USD/GBP forward rate is closest to:",
        ["1.2531", "1.2469", "1.2563"],
        "F = 1.2500 × (1 + 0.045 × 180/360)/(1 + 0.040 × 180/360) = 1.25 × 1.0225/1.0200 = 1.2531. The lower-yielding GBP trades at a forward premium.", "c"],
      ["Given the dealer's $52.00 quote, Reyes could earn an arbitrage profit by:",
        ["Selling the forward, borrowing and buying the shares", "Buying the forward and short selling the shares", "Buying the forward and the shares"],
        "The quote exceeds the no-arbitrage price of $50.98, so the forward is overpriced: sell it and carry the stock with borrowed money (cash-and-carry arbitrage).", "s"]
    ]
  },
  {
    title: "Marlow Treasury: FRA and interest rate swap",
    case: `<p>Treasurer Daniel Kerr of Marlow plc is hedging floating-rate debt.</p>
<p><b>FRA.</b> The current 90-day market reference rate (MRR) is 3.00% and the 180-day MRR is 3.40% (actual/360).</p>
<p><b>Swap.</b> Marlow enters a 3-year, annual-pay, pay-fixed interest rate swap with a notional of $50 million.</p>
<p><b>Exhibit 1. Discount factors at inception</b></p>
<table><tr><th>Year</th><th>1</th><th>2</th><th>3</th></tr><tr><td>Discount factor</td><td>0.9709</td><td>0.9426</td><td>0.9151</td></tr></table>
<p>One year later (just after the first payment), rates have risen.</p>
<p><b>Exhibit 2. Discount factors one year later</b></p>
<table><tr><th>Remaining years</th><th>1</th><th>2</th></tr><tr><td>Discount factor</td><td>0.9662</td><td>0.9300</td></tr></table>
<p>Kerr's CFO asks about a contract that would give Marlow the right, but not the obligation, to enter a pay-fixed swap in one year.</p>`,
    qs: [
      ["The fixed rate on a 3×6 FRA is closest to:",
        ["3.77%", "3.40%", "3.20%"],
        "FRA rate = [(1 + 0.034 × 180/360)/(1 + 0.030 × 90/360) − 1] × 360/90 = (1.0170/1.0075 − 1) × 4 = 3.77%.", "c"],
      ["The swap's fixed rate at inception is closest to:",
        ["3.00%", "2.83%", "3.80%"],
        "Fixed rate = (1 − 0.9151)/(0.9709 + 0.9426 + 0.9151) = 0.0849/2.8286 = 3.00%.", "c"],
      ["One year later, the value of the swap to Marlow is closest to:",
        ["+$654,000", "−$654,000", "+$345,000"],
        "New 2-year swap rate = (1 − 0.9300)/(0.9662 + 0.9300) = 3.69%. Value to the payer = (3.69% − 3.00%) × 1.8962 × 50m ≈ +$654,000. Marlow pays 3.00% when the market rate is 3.69%, so it gains.", "c"],
      ["The contract the CFO describes is:",
        ["A payer swaption", "A receiver swaption", "An interest rate floor"],
        "A payer swaption gives the right to enter a swap paying fixed; it gains when rates rise. A receiver swaption is the right to receive fixed.", "r"]
    ]
  },
  {
    title: "Fairhaven Options Desk: binomial valuation",
    case: `<p>Options trader Noor Aziz values options on Delta Mining shares with a two-period binomial model.</p>
<p><b>Exhibit 1. Model inputs</b></p>
<table><tr><th>Input</th><th>Value</th></tr><tr><td>Current share price</td><td>$60.00</td></tr><tr><td>Up factor (u)</td><td>1.20</td></tr><tr><td>Down factor (d)</td><td>0.85</td></tr><tr><td>Risk-free rate per period</td><td>3%</td></tr><tr><td>Exercise price</td><td>$62.00</td></tr></table>
<p>Delta Mining pays no dividends. Aziz values a European call and an American put, both with two periods to expiration.</p>`,
    qs: [
      ["The risk-neutral probability of an up move is closest to:",
        ["0.514", "0.486", "0.500"],
        "π = (1 + r − d)/(u − d) = (1.03 − 0.85)/(1.20 − 0.85) = 0.18/0.35 = 0.514.", "c"],
      ["The value of the European call is closest to:",
        ["$6.08", "$6.45", "$12.18"],
        "Terminal prices: 86.40, 61.20, 43.35; call payoffs 24.40, 0, 0. c = 0.514² × 24.40/1.03² = 6.454/1.0609 = $6.08.", "c"],
      ["The hedge ratio for the call at time 0 is closest to:",
        ["0.58", "0.51", "0.70"],
        "c⁺ = 0.514 × 24.40/1.03 = 12.18; c⁻ = 0. h = (12.18 − 0)/(72.00 − 51.00) = 0.58.", "c"],
      ["The value of the American put is closest to:",
        ["$5.38", "$4.52", "$2.00"],
        "At the down node (S = 51): continuation = (0.514 × 0.80 + 0.486 × 18.65)/1.03 = 9.19 < exercise value 11.00, so exercise early: 11.00. Up node: 0.486 × 0.80/1.03 = 0.38. Time 0: (0.514 × 0.38 + 0.486 × 11.00)/1.03 = 5.38 > 2.00. The European put is 4.52.", "c"]
    ]
  },
  {
    title: "Greystone Wealth: BSM and delta hedging",
    case: `<p>Risk manager Henrik Sorensen uses the Black–Scholes–Merton model for 6-month at-the-money options on Nordia Corp., which pays no dividends. A client holds 10,000 Nordia shares.</p>
<p><b>Exhibit 1. Inputs and model values</b></p>
<table><tr><th>Item</th><th>Value</th></tr><tr><td>Share price and exercise price</td><td>$100.00</td></tr><tr><td>Time to expiration</td><td>0.5 years</td></tr><tr><td>Continuously compounded risk-free rate</td><td>4.0%</td></tr><tr><td>Volatility</td><td>25%</td></tr><tr><td>d1 / d2</td><td>0.2015 / 0.0247</td></tr><tr><td>N(d1) / N(d2)</td><td>0.5799 / 0.5099</td></tr><tr><td>N(−d1) / N(−d2)</td><td>0.4201 / 0.4901</td></tr><tr><td>e^(−0.02)</td><td>0.9802</td></tr></table>`,
    qs: [
      ["The BSM value of the call is closest to:",
        ["$8.01", "$7.00", "$9.01"],
        "c = 100 × 0.5799 − 100 × 0.9802 × 0.5099 = 57.99 − 49.98 = $8.01.", "c"],
      ["The BSM value of the put is closest to:",
        ["$6.03", "$8.01", "$4.04"],
        "p = 100 × 0.9802 × 0.4901 − 100 × 0.4201 = 48.04 − 42.01 = $6.03 (consistent with put–call parity: 8.01 − 100 + 98.02).", "c"],
      ["To delta-hedge the client's shares using these calls, Sorensen should:",
        ["Sell about 17,245 calls", "Buy about 17,245 calls", "Sell about 5,799 calls"],
        "Call delta = N(d1) = 0.5799. Calls needed = 10,000/0.5799 ≈ 17,245, sold, since the shares have positive delta.", "c"],
      ["Sorensen's hedge will need the most frequent rebalancing if the options are:",
        ["At the money and close to expiration", "Deep in the money with a long life", "Far out of the money with a long life"],
        "Gamma (the rate of change of delta) is highest for at-the-money options near expiration, so their delta, and the hedge ratio, changes fastest.", "s"]
    ]
  }
];

window.GLOSSARY.push(
  ["Equity forward price", "F0 = [S0 − PV(dividends)](1 + r)^T; continuous yield S0 e^{(r − δ)T}.", "l2der"],
  ["Forward value (long)", "V_t = S_t − PV(remaining benefits) − F0/(1 + r)^{T−t}.", "l2der"],
  ["Cash-and-carry arbitrage", "Forward too expensive: sell forward, borrow, buy the underlying.", "l2der"],
  ["FRA rate", "Implied forward rate from the two MRRs; long (pay fixed) gains if MRR > FRA rate.", "l2der"],
  ["Swap fixed rate", "(1 − PV_N)/Σ PV_i.", "l2der"],
  ["Swap value (pay fixed)", "(Current swap rate − original rate) × Σ remaining discount factors × notional.", "l2der"],
  ["Risk-neutral probability", "π = (1 + r − d)/(u − d).", "l2der"],
  ["Hedge ratio (binomial)", "h = (c⁺ − c⁻)/(S⁺ − S⁻).", "l2der"],
  ["American put early exercise", "At each node take max(exercise value, continuation value).", "l2der"],
  ["BSM call", "S N(d1) − X e^{−rT} N(d2); N(d2) = risk-neutral probability of finishing in the money.", "l2der"],
  ["Black model", "Options on futures: c = e^{−rT}[F N(d1) − X N(d2)].", "l2der"],
  ["Payer swaption", "Right to enter a pay-fixed swap; gains when rates rise.", "l2der"],
  ["Delta hedge", "Hedge units = −portfolio delta / delta of hedging instrument.", "l2der"],
  ["Gamma", "Rate of change of delta; highest for at-the-money options near expiry; same for calls and puts.", "l2der"],
  ["Volatility skew", "Equity options: implied volatility higher for low strikes (OTM puts).", "l2der"]
);
