// CFA Level I · Derivatives: study notes, practice questions and flashcards.
window.NOTES = window.NOTES || {};
window.QB_HARD = window.QB_HARD || {};
window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1der = `
<p class="syl">CFA Level I · Derivatives · 5–8% of the exam · Learning modules: Derivative Instrument and Derivative Market Features · Forward Commitment and Contingent Claim Features and Instruments · Derivative Benefits, Risks, and Issuer and Investor Uses · Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives · Pricing and Valuation of Forward Contracts · Pricing and Valuation of Futures Contracts · Pricing and Valuation of Interest Rate and Other Swaps · Pricing and Valuation of Options · Option Replication Using Put–Call Parity · Valuing a Derivative Using a One-Period Binomial Model</p>

<h3>1. Derivative instruments and markets</h3>
<p>A derivative's value depends on an <b>underlying</b> (equity, rates, currency, commodity, credit). Two families: <b>firm commitments</b> (forwards, futures, swaps: both sides must perform) and <b>contingent claims</b> (options, credit derivatives: payoff depends on an event or choice).</p>
<table>
  <tr><th></th><th>Exchange-traded (ETD)</th><th>Over-the-counter (OTC)</th></tr>
  <tr><td>Terms</td><td>Standardized</td><td>Customized</td></tr>
  <tr><td>Counterparty risk</td><td>Low: <b>central counterparty (clearinghouse)</b>, margin, daily settlement</td><td>Bilateral; mitigated by collateral and, increasingly, central clearing</td></tr>
  <tr><td>Transparency and liquidity</td><td>High</td><td>Lower, more private</td></tr>
</table>

<h3>2. Forward commitments and contingent claims</h3>
<ul>
  <li><b>Forward</b>: agree today to buy/sell at F0(T) at time T. No cash changes hands at inception (value = 0). Long payoff = S_T − F0(T); short = F0(T) − S_T.</li>
  <li><b>Futures</b>: standardized, exchange-traded forwards with <b>daily settlement (mark-to-market)</b>. Initial margin, <b>maintenance margin</b>; if the account falls below maintenance, the trader must add <b>variation margin</b> to bring it back to the <b>initial</b> margin. Price limits may halt trading.</li>
  <li><b>Swaps</b>: exchange series of cash flows (e.g. fixed vs floating interest on a notional). Equivalent to a series of forwards.</li>
  <li><b>Options</b>: the buyer pays a premium for the right (not obligation). European: exercise only at expiry; American: any time.</li>
  <li><b>Credit derivatives</b>: e.g. a <b>credit default swap (CDS)</b>: the protection buyer pays periodic premiums; the seller compensates the buyer after a credit event.</li>
</ul>
<table>
  <tr><th>Position</th><th>Payoff at expiry</th><th>Profit</th><th>Breakeven</th></tr>
  <tr><td>Long call</td><td>max(0, S_T − X)</td><td>payoff − c0</td><td>X + c0</td></tr>
  <tr><td>Short call</td><td>−max(0, S_T − X)</td><td>c0 − payoff (unlimited loss)</td><td>X + c0</td></tr>
  <tr><td>Long put</td><td>max(0, X − S_T)</td><td>payoff − p0</td><td>X − p0</td></tr>
  <tr><td>Short put</td><td>−max(0, X − S_T)</td><td>p0 − payoff</td><td>X − p0</td></tr>
</table>
<p><b>Moneyness</b>: a call is in the money when S &gt; X; a put when S &lt; X.</p>
<div class="ex"><b>Example:</b> Long call, X = 50, premium 3, S_T = 58: payoff 8, profit 5. Short put, X = 40, premium 2, S_T = 35: profit = 2 − 5 = −3.</div>

<h3>3. Benefits, risks and uses</h3>
<ul>
  <li><b>Benefits</b>: risk allocation, transfer and management; <b>price discovery</b>; operational advantages (lower transaction costs, easier shorting, greater liquidity, leverage); market efficiency.</li>
  <li><b>Risks</b>: high implicit leverage, complexity, <b>basis risk</b> (hedge and hedged item don't move together), liquidity risk, counterparty credit risk, <b>systemic risk</b> (contagion, e.g. 2008).</li>
  <li><b>Issuer uses</b> and hedge accounting: <b>cash flow hedge</b> (variable future cash flows, e.g. floating-rate debt or a forecast purchase), <b>fair value hedge</b> (fixed-rate asset/liability value changes), <b>net investment hedge</b> (foreign subsidiary). <b>Investor uses</b>: modify exposures, implement views, replicate cash positions.</li>
</ul>

<h3>4. Arbitrage, replication and the cost of carry</h3>
<p><b>No-arbitrage pricing</b>: two assets with the same payoffs must have the same price. Derivatives are priced by <b>replication</b> with the underlying and risk-free borrowing/lending. Pricing doesn't depend on risk preferences or expected returns (<b>risk-neutral</b> valuation).</p>
<div class="formula">F0(T) = S0 (1 + r)^T (no carry) · With costs/benefits: F0(T) = [S0 − PV(benefits) + PV(costs)] (1 + r)^T · Continuous: F0(T) = S0 e^((r + c − i)T)</div>
<ul>
  <li>Benefits of holding the asset (dividends, coupons, <b>convenience yield</b>) <b>lower</b> the forward price; costs (storage, insurance) <b>raise</b> it.</li>
  <li>If F0 is too high: <b>cash-and-carry</b> arbitrage: borrow, buy the asset, sell the forward. If too low: reverse cash-and-carry: short the asset, lend, buy the forward.</li>
</ul>
<div class="ex"><b>Example:</b> S0 = 100, r = 5%, PV of dividends = 2 (1 year): F0 = (100 − 2) × 1.05 = 102.90. With continuous r = 4%, storage 1%, convenience yield 2%: F0 = 50 × e^0.03 = 51.52 for S0 = 50.</div>

<h3>5. Pricing and valuing forwards</h3>
<p><b>Price</b> = the fixed F0(T) set at inception. <b>Value</b> = zero at inception, then changes with the underlying:</p>
<div class="formula">Long forward value at t: V_t = S_t − F0(T) ÷ (1 + r)^(T − t) (adjust for PV of remaining carry)</div>
<div class="ex"><b>Example:</b> F0 = 105 for one year. Six months later S = 108, r = 5%: V = 108 − 105 ÷ 1.05^0.5 = 108 − 102.47 = 5.53 to the long.</div>
<p><b>Forward rate agreements (FRAs)</b>: lock in a future interest rate. A long FRA (like a future borrower) gains when the reference rate at settlement is <b>above</b> the FRA rate. Implied forward rates come from the spot curve: (1 + z_B)^B = (1 + z_A)^A (1 + IFR)^(B−A).</p>

<h3>6. Pricing and valuing futures</h3>
<ul>
  <li>Futures prices ≈ forward prices. Differences come from daily settlement: if futures prices are <b>positively correlated with interest rates</b>, gains are reinvested at higher rates, so futures prices are <b>higher</b> than forwards (and vice versa).</li>
  <li>Value of a futures contract is <b>reset to zero</b> after each daily settlement; between settlements it equals the price change since the last settlement.</li>
  <li>Interest rate futures quote: price = 100 − (100 × annualized rate).</li>
</ul>
<div class="ex"><b>Margin example:</b> initial margin 2,000, maintenance 1,500. After losses the account is 1,400 → variation margin call of 600 (back to 2,000, not just to 1,500).</div>

<h3>7. Pricing and valuing swaps</h3>
<ul>
  <li>A swap = a <b>series of forward contracts</b> (off-market FRAs whose average value is zero at inception).</li>
  <li>The fixed swap rate is set so the swap's <b>value is zero</b> at inception: it equals the par yield implied by the spot curve.</li>
  <li>Later, value changes with rates: a <b>pay-fixed, receive-floating</b> swap <b>gains</b> when rates rise. Value ≈ PV of the difference between the new market swap rate and the original fixed rate × notional.</li>
</ul>

<h3>8. Pricing and valuing options</h3>
<p>Option value = <b>intrinsic value</b> (exercise value) + <b>time value</b>. Time value falls toward zero at expiry.</p>
<div class="formula">European call ≥ max(0, S0 − X ÷ (1 + r)^T) · European put ≥ max(0, X ÷ (1 + r)^T − S0)</div>
<table>
  <tr><th>Increase in…</th><th>Call value</th><th>Put value</th></tr>
  <tr><td>Underlying price</td><td>↑</td><td>↓</td></tr>
  <tr><td>Exercise price</td><td>↓</td><td>↑</td></tr>
  <tr><td>Time to expiry</td><td>↑</td><td>↑ (usually; deep ITM European puts can fall)</td></tr>
  <tr><td>Risk-free rate</td><td>↑</td><td>↓</td></tr>
  <tr><td>Volatility</td><td>↑</td><td>↑</td></tr>
  <tr><td>Income on underlying (dividends)</td><td>↓</td><td>↑</td></tr>
  <tr><td>Carrying cost</td><td>↑</td><td>↓</td></tr>
</table>
<div class="ex"><b>Example:</b> S = 52, X = 50, r = 5%, T = 1: European call lower bound = 52 − 50/1.05 = 4.38.</div>

<h3>9. Put–call parity</h3>
<div class="formula">S0 + p0 = c0 + X ÷ (1 + r)^T (protective put = fiduciary call)</div>
<ul>
  <li>Rearrange to create <b>synthetic</b> positions: synthetic call = S0 + p0 − PV(X) (buy stock, buy put, <b>borrow</b> PV of X); synthetic put = c0 + PV(X) − S0.</li>
  <li><b>Put–call–forward parity</b>: F0(T) ÷ (1 + r)^T + p0 = c0 + X ÷ (1 + r)^T.</li>
  <li><b>Firm value view</b>: equity = call on the firm's assets (strike = face value of debt); risky debt = risk-free bond − put on the assets. The put is the credit risk.</li>
</ul>
<div class="ex"><b>Example:</b> S = 50, X = 50, r = 5%, T = 1, call = 6.00 → put = 6.00 + 47.62 − 50 = 3.62.</div>

<h3>10. One-period binomial model</h3>
<div class="formula">Risk-neutral probability π = (1 + r − d) ÷ (u − d) · Option value = [π × V_up + (1 − π) × V_down] ÷ (1 + r)</div>
<div class="formula">Hedge ratio h = (c_up − c_down) ÷ (S_up − S_down): buy h shares per call written for a riskless portfolio</div>
<div class="ex"><b>Example:</b> S0 = 100, u = 1.2, d = 0.8, r = 5%, call X = 100. π = (1.05 − 0.8) ÷ 0.4 = 0.625. c_up = 20, c_down = 0 → c0 = 0.625 × 20 ÷ 1.05 = 11.90. Hedge ratio = 20 ÷ 40 = 0.5.</div>
<p>The risk-neutral probability isn't the real probability; the result is consistent with no-arbitrage regardless of investors' risk preferences.</p>
<div class="how"><b>How it's tested:</b> payoff/profit and breakeven, forward pricing with carry, forward valuation, futures margin, factors affecting option values, lower bounds, put–call parity and synthetic positions, binomial valuation and hedge ratio.</div>
<div class="key"><b>Carry forward to Level III</b>: derivatives overlays for hedging equity, interest rate and currency exposure (futures, swaps, options strategies) and the binomial/parity logic behind them.</div>
<div class="trap"><b>Trap:</b> variation margin restores the account to the <b>initial</b> margin, not to the maintenance margin.</div>
`;

window.QB_HARD.l1der = [
  ["A stock trades at 100 and will pay dividends with a present value of 2 over the next year. If the risk-free rate is 5%, the no-arbitrage one-year forward price is closest to:",
    ["102.90", "105.00", "103.00"],
    "F0 = (S0 − PV of dividends)(1 + r)^T = (100 − 2) × 1.05 = 102.90. Benefits of holding the asset lower the forward price.", "c"],
  ["A one-year forward was entered at a forward price of 105. Six months later the underlying trades at 108 and the risk-free rate is 5%. The value of the long forward is closest to:",
    ["5.53", "3.00", "−2.47"],
    "V = S_t − F0 ÷ (1 + r)^(T − t) = 108 − 105 ÷ 1.05^0.5 = 108 − 102.47 = 5.53.", "c"],
  ["A commodity trades at 50. The continuously compounded risk-free rate is 4%, storage costs are 1% and the convenience yield is 2%. The one-year forward price is closest to:",
    ["51.52", "52.55", "50.50"],
    "F0 = S0 e^((r + c − i)T) = 50 × e^(0.04 + 0.01 − 0.02) = 50 × e^0.03 = 51.52.", "c"],
  ["A futures position has an initial margin of 2,000 and a maintenance margin of 1,500. After losses, the margin account stands at 1,400. The variation margin required is:",
    ["600", "100", "500"],
    "Falling below maintenance triggers a call to restore the account to the initial margin: 2,000 − 1,400 = 600.", "c"],
  ["A key difference between futures and forward contracts is that futures:",
    ["Are marked to market daily through a clearinghouse", "Are customized to meet each party's needs", "Carry more counterparty credit risk than forwards"],
    "Futures are standardized, exchange-traded and settled daily with a clearinghouse guaranteeing performance. Forwards are customized OTC contracts with bilateral credit risk.", "r"],
  ["If futures prices are positively correlated with interest rates, futures prices will tend to be:",
    ["Higher than equivalent forward prices", "Lower than equivalent forward prices", "Equal to equivalent forward prices"],
    "Daily gains arrive when rates are high (reinvested at higher rates) and losses when rates are low (financed cheaply), making the futures more attractive, so its price is higher.", "r"],
  ["An investor buys a call with an exercise price of 50 for a premium of 3. At expiry the underlying is 58. The investor's profit is:",
    ["5", "8", "11"],
    "Payoff = max(0, 58 − 50) = 8; profit = 8 − 3 = 5.", "c"],
  ["An investor sells a put with an exercise price of 40 for a premium of 2. At expiry the underlying is 35. The investor's profit is:",
    ["−3", "2", "−5"],
    "The put is exercised: the writer pays 40 − 35 = 5. Profit = premium − payoff = 2 − 5 = −3.", "c"],
  ["A put option has an exercise price of 40 and a premium of 2. The breakeven underlying price at expiry for the put buyer is:",
    ["38", "42", "40"],
    "Breakeven for a long put = X − premium = 40 − 2 = 38. (For a call it would be X + premium.)", "c"],
  ["A put option with an exercise price of 60 on an underlying trading at 55 is:",
    ["In the money", "Out of the money", "At the money"],
    "A put is in the money when the underlying price is below the exercise price: exercising lets the holder sell at 60 something worth 55.", "r"],
  ["All else equal, an increase in the risk-free interest rate will:",
    ["Increase call values and decrease put values", "Increase both call and put values", "Decrease call values and increase put values"],
    "A higher rate lowers the present value of the exercise price: good for call holders (who pay it), bad for put holders (who receive it).", "r"],
  ["If the underlying stock is expected to pay a larger dividend before expiry, the value of a European call will:",
    ["Decrease", "Increase", "Not change"],
    "Dividends reduce the share price on the ex-date and go to shareholders, not option holders, lowering call values and raising put values.", "r"],
  ["A stock trades at 52. A one-year European call has an exercise price of 50 and the risk-free rate is 5%. The call's lower bound is closest to:",
    ["4.38", "2.00", "0.00"],
    "Lower bound = max(0, S0 − X/(1 + r)^T) = 52 − 50/1.05 = 52 − 47.62 = 4.38.", "c"],
  ["A stock trades at 45. A one-year European put has an exercise price of 50 and the risk-free rate is 5%. The put's lower bound is closest to:",
    ["2.62", "5.00", "0.00"],
    "Lower bound = max(0, X/(1 + r)^T − S0) = 47.62 − 45 = 2.62.", "c"],
  ["A stock trades at 50. A one-year European call with an exercise price of 50 costs 6.00, and the risk-free rate is 5%. By put–call parity, the matching European put is worth closest to:",
    ["3.62", "6.00", "1.38"],
    "p0 = c0 + X/(1 + r)^T − S0 = 6.00 + 47.62 − 50.00 = 3.62.", "c"],
  ["Using put–call parity, a synthetic long European call can be created by:",
    ["Buying stock and a put, and borrowing PV(X)", "Short selling the stock and buying a put", "Buying a put and lending the present value of the strike price"],
    "c0 = S0 + p0 − X/(1 + r)^T: long stock, long put, and a short risk-free bond (borrowing).", "r"],
  ["A protective put (long stock plus long put) has the same payoff at expiry as:",
    ["A long call plus a bond paying the strike", "A long stock position plus a short call", "A long forward contract on the stock at the strike price"],
    "Put–call parity: S0 + p0 = c0 + X/(1 + r)^T. A long call plus a bond paying X is a fiduciary call.", "r"],
  ["In the option-based view of a company, its risky debt is equivalent to:",
    ["A risk-free bond minus a put on the firm's assets", "A call option on the firm's assets", "A risk-free bond plus a call on the firm's assets"],
    "Debtholders get the face value unless assets are worth less; that shortfall is a put sold to shareholders. Equity is a call on the assets.", "r"],
  ["A stock trades at 100 and will move to either 120 or 80 in one period. The risk-free rate per period is 5%. The risk-neutral probability of the up move is:",
    ["0.625", "0.500", "0.375"],
    "π = (1 + r − d) ÷ (u − d) = (1.05 − 0.80) ÷ (1.20 − 0.80) = 0.25 ÷ 0.40 = 0.625.", "c"],
  ["Using the same stock (100, moving to 120 or 80; r = 5%), the value of a one-period European call with an exercise price of 100 is closest to:",
    ["11.90", "12.50", "10.00"],
    "c_up = 20, c_down = 0. c0 = (0.625 × 20 + 0.375 × 0) ÷ 1.05 = 12.50 ÷ 1.05 = 11.90.", "c"],
  ["Using the same stock (100, moving to 120 or 80), the hedge ratio for the call with an exercise price of 100 is:",
    ["0.50", "0.625", "1.00"],
    "h = (c_up − c_down) ÷ (S_up − S_down) = (20 − 0) ÷ (120 − 80) = 0.50 shares per call.", "c"],
  ["For an asset with no income or costs, the forward price trades above S0(1 + r)^T. An arbitrageur would:",
    ["Borrow, buy the asset and sell the forward", "Short the asset, lend the proceeds and buy the forward", "Buy the forward and simply hold cash"],
    "When the forward is overpriced, a cash-and-carry trade locks in a riskless profit: buy the underlying with borrowed money and deliver it at the high forward price.", "r"],
  ["At initiation, a plain vanilla interest rate swap has a value to each party of:",
    ["Zero", "Its notional principal", "The PV of its fixed payments"],
    "The fixed swap rate is set so the PV of fixed payments equals the PV of expected floating payments; the swap is worth zero at inception.", "r"],
  ["A company enters a pay-fixed, receive-floating interest rate swap. Market interest rates then rise. The swap's value to the company:",
    ["Increases", "Decreases", "Doesn't change until the next reset"],
    "The company receives floating payments that are now higher while still paying the old fixed rate, so the swap gains value.", "r"],
  ["An interest rate swap can be replicated by:",
    ["A series of forward rate agreements", "A single option on a bond", "A long position in a floating-rate note only"],
    "Each swap settlement is like an (off-market) FRA, so a swap is a portfolio of forward contracts.", "r"],
  ["Compared with OTC derivatives, exchange-traded derivatives:",
    ["Are standardized and centrally cleared", "Can be fully tailored to each user's particular needs", "Have higher counterparty credit risk"],
    "ETDs have standardized terms, margin and a clearinghouse. OTC contracts can be customized but carry more counterparty risk (unless centrally cleared).", "r"],
  ["Which of the following is a contingent claim?",
    ["An option", "A forward contract", "An interest rate swap"],
    "Contingent claims (options, CDS) pay off only if an event occurs or a party chooses to exercise. Forwards, futures and swaps are firm commitments.", "r"],
  ["In a credit default swap, the protection buyer:",
    ["Pays premiums and is compensated if a credit event occurs", "Receives premiums and pays out if a credit event occurs", "Must own the reference entity's bonds"],
    "The buyer pays a periodic premium; the seller compensates the buyer after a credit event. Buyers don't need to own the reference bond.", "r"],
  ["Which of the following is a benefit of derivatives markets?",
    ["Price discovery and cheaper risk transfer", "Elimination of systemic financial risk", "Removal of all leverage from investing"],
    "Derivatives improve price discovery, let risk be transferred at low cost and add liquidity. They can add, not remove, leverage and systemic risk.", "r"],
  ["Basis risk in a hedge arises when:",
    ["The hedge doesn't track the hedged item exactly", "The counterparty to the hedge defaults", "The derivative used for the hedge trades on an exchange"],
    "Basis risk is the imperfect correlation between the hedging instrument and the exposure (different asset, maturity or location).", "r"],
  ["A company uses a derivative to hedge the variability of cash flows on a forecast purchase of raw materials. Under hedge accounting, this is a:",
    ["Cash flow hedge", "Fair value hedge", "Net investment hedge"],
    "Cash flow hedges cover variability in future cash flows (forecast transactions, floating-rate debt). Fair value hedges cover changes in the value of existing fixed items.", "r"],
  ["Compared with the forward price implied by the risk-free rate and storage costs alone, a commodity's convenience yield makes its forward price:",
    ["Lower", "Higher", "Unchanged"],
    "The convenience yield is a non-monetary benefit of holding the physical commodity; like dividends, it reduces the forward price.", "r"],
  ["A long position in a forward rate agreement gains value when, at settlement, the market reference rate is:",
    ["Above the FRA rate", "Below the FRA rate", "Equal to the FRA rate"],
    "The long FRA effectively locks in a borrowing rate; it receives the reference rate and pays the fixed FRA rate, so it gains when rates end higher.", "r"]
];

window.GLOSSARY.push(
  ["Firm commitments vs contingent claims", "Forwards, futures and swaps oblige both parties. Options and credit derivatives pay only if an event occurs or a holder exercises.", "l1der"],
  ["Futures margin", "Initial margin, maintenance margin; below maintenance → variation margin back to the initial level. Daily mark-to-market.", "l1der"],
  ["Forward price with carry", "F0 = [S0 − PV(benefits) + PV(costs)](1 + r)^T. Continuous: S0 e^((r + c − i)T).", "l1der"],
  ["Forward value (long)", "V_t = S_t − F0 ÷ (1 + r)^(T − t), adjusted for any remaining carry.", "l1der"],
  ["Futures vs forward prices", "Futures > forwards if futures prices are positively correlated with interest rates.", "l1der"],
  ["Option payoffs", "Long call max(0, S − X); long put max(0, X − S). Profit subtracts the premium. Call breakeven X + c; put X − p.", "l1der"],
  ["Option value drivers", "↑S: call↑ put↓. ↑X: call↓ put↑. ↑r: call↑ put↓. ↑volatility: both↑. ↑dividends: call↓ put↑.", "l1der"],
  ["Option lower bounds", "Call ≥ max(0, S0 − X/(1 + r)^T). Put ≥ max(0, X/(1 + r)^T − S0).", "l1der"],
  ["Put–call parity", "S0 + p0 = c0 + X/(1 + r)^T (protective put = fiduciary call).", "l1der"],
  ["Firm value and options", "Equity = call on assets struck at debt face value. Risky debt = risk-free bond − put on assets.", "l1der"],
  ["Binomial risk-neutral probability", "π = (1 + r − d) ÷ (u − d). Value = [πV_u + (1 − π)V_d] ÷ (1 + r).", "l1der"],
  ["Hedge ratio (binomial)", "h = (c_u − c_d) ÷ (S_u − S_d) shares per option written.", "l1der"],
  ["Swap value", "Zero at inception (fixed rate = par swap rate). Pay-fixed swap gains when rates rise. A swap = a series of forwards.", "l1der"]
);
