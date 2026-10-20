// CFA Level I · Derivatives · Learning module 9: Option Replication Using Put–Call Parity.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1pcp = `
<p class="syl">CFA Level I · Derivatives (5–8%) · Learning module 9 of 10 · Option Replication Using Put–Call Parity</p>
<p>Put–call parity links the prices of a European call, a European put, the underlying and a risk-free bond. It lets you price one from the others, build synthetic positions, spot arbitrage, and see a company's equity and debt as options on its assets.</p>

<h3>1. Put–call parity <span class="hot">Highly tested</span></h3>
<p>Two portfolios have the same payoff at expiry, so they must cost the same today:</p>
<ul>
  <li><b>Fiduciary call</b>: long call + risk-free bond paying X at expiry. Payoff = max(S<sub>T</sub>, X).</li>
  <li><b>Protective put</b>: long stock + long put. Payoff = max(S<sub>T</sub>, X).</li>
</ul>
<table>
  <tr><th>At expiry</th><th>S<sub>T</sub> &lt; X</th><th>S<sub>T</sub> ≥ X</th></tr>
  <tr><td>Call + bond</td><td>0 + X = X</td><td>(S<sub>T</sub> − X) + X = S<sub>T</sub></td></tr>
  <tr><td>Stock + put</td><td>S<sub>T</sub> + (X − S<sub>T</sub>) = X</td><td>S<sub>T</sub> + 0 = S<sub>T</sub></td></tr>
</table>
<div class="formula">c + X/(1 + r)<sup>T</sup> = p + S<sub>0</sub><br>c = p + S₀ − PV(X) · p = c − S₀ + PV(X) · S₀ = c − p + PV(X) · PV(X) = p + S₀ − c</div>
<div class="ex"><b>Example 1:</b> S₀ = 60, X = 55, T = 0.5, r = 4%, call = 8.40. PV(X) = 55 / 1.04<sup>0.5</sup> = 53.93.<br>Put = 8.40 − 60 + 53.93 = <b>2.33</b>.<br><b>Example 2:</b> S₀ = 40, X = 40, T = 1, r = 5%, put = 3.20. Call = 3.20 + 40 − 40/1.05 = <b>5.10</b>.</div>

<h3>2. Synthetic positions</h3>
<table>
  <tr><th>Position</th><th>Replicated by</th></tr>
  <tr><td>Long call</td><td>Long put + long stock + <b>borrow</b> PV(X) (short bond)</td></tr>
  <tr><td>Long put</td><td>Long call + short stock + <b>lend</b> PV(X)</td></tr>
  <tr><td>Long stock</td><td>Long call + short put + lend PV(X)</td></tr>
  <tr><td>Risk-free bond (lend)</td><td>Long stock + long put + short call</td></tr>
</table>
<p>To reverse a position, flip every sign: a short call = short put + short stock + lend PV(X).</p>
<h4>Arbitrage when parity fails</h4>
<p>If the market call is <b>above</b> its parity value, <b>sell the call</b> and buy the synthetic call (buy the put, buy the stock, borrow PV(X)) to lock in the difference. If it's below, do the reverse.</p>
<div class="ex"><b>Example:</b> with the inputs from Example 1, parity gives a call of 8.40, but the market call is 9.50. Sell the call at 9.50 and create a synthetic call for 8.40 (buy the put at 2.33, buy the stock at 60, borrow 53.93): riskless profit = <b>1.10</b> today.</div>

<h3>3. Put–call–forward parity</h3>
<p>A forward contract (plus a bond paying F₀) can replace the stock in the protective put:</p>
<div class="formula">F<sub>0</sub>/(1 + r)<sup>T</sup> + p = c + X/(1 + r)<sup>T</sup> → c − p = (F<sub>0</sub> − X)/(1 + r)<sup>T</sup></div>
<div class="ex"><b>Example:</b> F₀ = 62, X = 55, T = 0.5, r = 4%: c − p = 7 / 1.04<sup>0.5</sup> = <b>6.86</b>.</div>

<h3>4. A company's equity and debt as options <span class="hot">Highly tested</span></h3>
<p>Suppose a company's assets are worth V and it has zero-coupon debt with face value D due at T. At T, shareholders pay off the debt if V &gt; D and keep the rest; otherwise they walk away (limited liability).</p>
<ul>
  <li><b>Equity = a call option on the firm's assets</b> with exercise price D: payoff max(0, V<sub>T</sub> − D).</li>
  <li><b>Risky debt = a risk-free bond paying D minus a put on the firm's assets</b> with exercise price D: payoff min(V<sub>T</sub>, D). Equivalently, debt = assets − the call held by shareholders.</li>
  <li>Higher asset <b>volatility</b> raises the call value (shareholders gain) and the put value (lenders lose). This is why shareholders may favour riskier projects than lenders would like.</li>
</ul>
<div class="ex"><b>Example:</b> debt face value 100. If assets end at 130: equity gets 30, debt gets 100. If assets end at 80: equity gets 0, debt gets 80 (the risk-free 100 minus the put payoff of 20).</div>

<div class="how"><b>How it's tested:</b> pricing a put or call with put–call parity, identifying synthetic positions, spotting and exploiting parity violations, put–call–forward parity, and interpreting equity as a call and debt as a bond minus a put on the firm's assets.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Explain put–call parity using fiduciary calls and protective puts.</li>
  <li>Calculate a call or put price from parity and build synthetic positions.</li>
  <li>Describe arbitrage when parity is violated, and apply put–call–forward parity.</li>
  <li>Describe a firm's equity and debt in option terms.</li>
</ul></div>
`;

window.QB_HARD.l1pcp = [
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
  ["A stock trades at 60. A six-month European call with an exercise price of 55 costs 8.40, and r = 4%. By put–call parity, the put is worth closest to:",
    ["2.33", "3.40", "13.40"],
    "PV(X) = 55/1.04^0.5 = 53.93; p = 8.40 − 60 + 53.93 = 2.33. 3.40 ignores discounting.", "c"],
  ["A stock trades at 40. A one-year European put with an exercise price of 40 costs 3.20, and r = 5%. The matching call is worth closest to:",
    ["5.10", "3.20", "1.30"],
    "c = p + S − PV(X) = 3.20 + 40 − 38.10 = 5.10.", "c"],
  ["A fiduciary call consists of:",
    ["A long call and a bond paying X", "A long stock and a long put", "A long call and a short put"],
    "Fiduciary call = call + risk-free bond; protective put = stock + put. Both pay max(S_T, X).", "r"],
  ["A synthetic long put can be created by:",
    ["Buying a call, shorting the stock, lending PV(X)", "Buying a call, buying the stock, borrowing PV(X)", "Selling a call and buying the stock"],
    "p = c − S + PV(X).", "r"],
  ["Which combination replicates a risk-free bond?",
    ["Long stock, long put, short call", "Long stock, short put, long call", "Short stock, long put, long call"],
    "PV(X) = S + p − c: the payoff is X whatever happens.", "r"],
  ["By put–call parity a call should cost 8.40, but it trades at 9.50. An arbitrageur would:",
    ["Sell the call and buy a synthetic call", "Buy the call and sell a synthetic call", "Buy the call and buy the stock"],
    "Sell the overpriced call, buy the put and stock and borrow PV(X), locking in 1.10.", "r"],
  ["The forward price is 62, the exercise price 55, T = 0.5 and r = 4%. By put–call–forward parity, the call price minus the put price is closest to:",
    ["6.86", "7.00", "−6.86"],
    "(F0 − X)/(1 + r)^T = 7/1.04^0.5 = 6.86.", "c"],
  ["In the option view of a company, an increase in the volatility of the firm's assets will most likely:",
    ["Benefit shareholders at lenders' expense", "Benefit lenders at shareholders' expense", "Leave both claims unchanged"],
    "Equity is a call on assets (gains from volatility); debt is short a put (loses from volatility).", "r"],
  ["A firm's zero-coupon debt has a face value of 100. At maturity its assets are worth 80. Shareholders receive:",
    ["0", "20", "80"],
    "With limited liability, equity = max(0, 80 − 100) = 0; lenders get 80.", "c"],
];

window.GLOSSARY.push(
  ["Put–call parity","S0 + p0 = c0 + X/(1 + r)^T (protective put = fiduciary call).","l1pcp"],
  ["Firm value and options","Equity = call on assets struck at debt face value. Risky debt = risk-free bond − put on assets.","l1pcp"],
  ["Fiduciary call vs protective put", "Call + bond paying X vs stock + put; both pay max(S_T, X).", "l1pcp"],
  ["Put–call–forward parity", "c − p = (F0 − X)/(1 + r)^T.", "l1pcp"]
);
