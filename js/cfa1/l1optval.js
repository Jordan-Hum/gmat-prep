// CFA Level I · Derivatives · Learning module 8: Pricing and Valuation of Options.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1optval = `
<p class="syl">CFA Level I · Derivatives (5–8%) · Learning module 8 of 10 · Pricing and Valuation of Options</p>
<p>An option's price has two parts: what it would be worth if exercised now (exercise value) and the extra value from the chance of a better outcome before expiry (time value). This lesson covers moneyness, the upper and lower bounds on option prices, how each input (price, strike, time, rates, volatility, income) affects call and put values, and American vs European options.</p>

<h3>1. Moneyness, exercise value and time value <span class="hot">Highly tested</span></h3>
<table>
  <tr><th></th><th>Call</th><th>Put</th></tr>
  <tr><td><b>In the money</b></td><td>S &gt; X</td><td>S &lt; X</td></tr>
  <tr><td><b>At the money</b></td><td>S = X</td><td>S = X</td></tr>
  <tr><td><b>Out of the money</b></td><td>S &lt; X</td><td>S &gt; X</td></tr>
</table>
<div class="formula">Option value = exercise (intrinsic) value + time value<br>Exercise value: call = max(0, S − X); put = max(0, X − S)</div>
<ul>
  <li><b>Time value</b> is never negative for American options and shrinks to zero at expiry (time decay). Out-of-the-money options consist entirely of time value.</li>
</ul>
<div class="ex"><b>Example:</b> S = 48, a call with X = 45 costs 5.20. It's in the money by 3 (exercise value), so its time value = 5.20 − 3 = <b>2.20</b>. A put with X = 45 is out of the money: exercise value 0, all of its price is time value.</div>

<h3>2. Bounds on option prices <span class="hot">Highly tested</span></h3>
<table>
  <tr><th></th><th>Lower bound (European)</th><th>Upper bound</th></tr>
  <tr><td>Call</td><td>max[0, S₀ − X/(1 + r)<sup>T</sup>]</td><td>S₀ (a call can't be worth more than the stock)</td></tr>
  <tr><td>Put</td><td>max[0, X/(1 + r)<sup>T</sup> − S₀]</td><td>European: X/(1 + r)<sup>T</sup>; American: X</td></tr>
</table>
<div class="ex"><b>Example:</b> S₀ = 105, X = 100, r = 4%, T = 0.5. PV(X) = 100 / 1.04<sup>0.5</sup> = 98.06.<br>European call lower bound = 105 − 98.06 = <b>6.94</b> (above the exercise value of 5).<br>If S₀ = 92, European put lower bound = 98.06 − 92 = <b>6.06</b>; its upper bound is <b>98.06</b>.</div>
<div class="trap"><b>Trap:</b> for a European put, the lower bound uses PV(X), so it can be <b>below</b> the exercise value (X − S). An American put is worth at least X − S because it can be exercised immediately.</div>

<h3>3. What drives option values <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Increase in…</th><th>Call value</th><th>Put value</th><th>Why</th></tr>
  <tr><td>Underlying price S</td><td>↑</td><td>↓</td><td>Calls profit from higher prices, puts from lower</td></tr>
  <tr><td>Exercise price X</td><td>↓</td><td>↑</td><td>Higher price to buy (call) or sell (put) at</td></tr>
  <tr><td>Time to expiry</td><td>↑</td><td>↑ (usually; a deep in-the-money European put can fall)</td><td>More time for favourable moves</td></tr>
  <tr><td>Risk-free rate</td><td>↑</td><td>↓</td><td>Lower PV of X: paying X later is cheaper for a call holder; receiving X later is worse for a put holder</td></tr>
  <tr><td>Volatility</td><td>↑</td><td>↑</td><td>Losses are limited to the premium, so more upside potential adds value</td></tr>
  <tr><td>Income from underlying (dividends)</td><td>↓</td><td>↑</td><td>Dividends lower the stock price; the option holder doesn't receive them</td></tr>
  <tr><td>Carrying costs of underlying</td><td>↑</td><td>↓</td><td>The call holder avoids the costs of owning the asset</td></tr>
</table>

<h3>4. American vs European options</h3>
<ul>
  <li>An American option is worth <b>at least as much</b> as an otherwise identical European option, since it has the extra right to exercise early.</li>
  <li>An American <b>call on a non-dividend-paying stock</b> should never be exercised early (selling it is worth more than exercising, since its value exceeds S − PV(X) &gt; S − X), so it's worth the same as a European call.</li>
  <li>Early exercise can make sense for an American <b>put</b> that is deep in the money (receive X now and earn interest), and for an American call just before a large dividend.</li>
</ul>

<div class="how"><b>How it's tested:</b> identifying moneyness, splitting option prices into exercise and time value, lower and upper bound calculations, the direction each factor moves call and put values, and when early exercise of American options makes sense.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Identify whether an option is in, at or out of the money and calculate exercise and time value.</li>
  <li>Calculate lower and upper bounds for European calls and puts.</li>
  <li>Explain how the underlying price, exercise price, time, risk-free rate, volatility, income and carrying costs affect option values.</li>
  <li>Compare American and European options and explain when early exercise may be optimal.</li>
</ul></div>
`;

window.QB_HARD.l1optval = [
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
  ["A stock trades at 48. A call with an exercise price of 45 costs 5.20. The call's time value is:",
    ["2.20", "3.00", "5.20"],
    "Exercise value = 48 − 45 = 3; time value = 5.20 − 3 = 2.20.", "c"],
  ["A stock trades at 48. A put with an exercise price of 45 is:",
    ["Out of the money", "In the money", "At the money"],
    "A put is in the money only when S < X.", "r"],
  ["At expiry, an option's time value is:",
    ["Zero", "At its maximum", "Equal to its exercise value"],
    "Time value decays to zero; at expiry the option is worth only its exercise value.", "r"],
  ["A stock trades at 105. A six-month European call has an exercise price of 100, and r = 4%. The call's lower bound is closest to:",
    ["6.94", "5.00", "8.85"],
    "105 − 100/1.04^0.5 = 105 − 98.06 = 6.94. 5.00 is the exercise value; 8.85 discounts X for a full year.", "c"],
  ["A stock trades at 92. A six-month European put has an exercise price of 100, and r = 4%. The put's lower bound is closest to:",
    ["6.06", "8.00", "0.00"],
    "100/1.04^0.5 − 92 = 98.06 − 92 = 6.06. 8.00 is the exercise value, which a European put can trade below.", "c"],
  ["The maximum value of a six-month European put with an exercise price of 100, when r = 4%, is closest to:",
    ["98.06", "100.00", "104.00"],
    "A European put can pay at most X at expiry, so its value is at most PV(X) = 98.06. An American put's upper bound is X.", "c"],
  ["An increase in the volatility of the underlying will:",
    ["Increase both call and put values", "Increase calls and decrease puts", "Decrease both call and put values"],
    "Option holders benefit from larger moves while their losses are limited to the premium.", "r"],
  ["All else equal, a higher exercise price will:",
    ["Lower call values and raise put values", "Raise call values and lower put values", "Raise both call and put values"],
    "A higher strike makes buying at X less attractive and selling at X more attractive.", "r"],
  ["An American call on a stock that pays no dividends is worth:",
    ["The same as the European call", "More than the European call", "Less than the European call"],
    "Early exercise is never optimal, so the early exercise right has no value.", "r"],
  ["Early exercise of an American put is most likely to be optimal when the put is:",
    ["Deep in the money", "Out of the money", "At the money with long to expiry"],
    "Exercising a deep in-the-money put lets the holder receive X now and earn interest on it.", "r"],
];

window.GLOSSARY.push(
  ["Option value drivers","↑S: call↑ put↓. ↑X: call↓ put↑. ↑r: call↑ put↓. ↑volatility: both↑. ↑dividends: call↓ put↑.","l1optval"],
  ["Option lower bounds","Call ≥ max(0, S0 − X/(1 + r)^T). Put ≥ max(0, X/(1 + r)^T − S0).","l1optval"],
  ["Moneyness", "In the money: call S > X, put S < X; out of the money is the reverse.", "l1optval"],
  ["Time value", "Option price − exercise value; decays to zero at expiry.", "l1optval"],
  ["American vs European value", "American ≥ European; equal for calls on non-dividend stocks.", "l1optval"]
);
