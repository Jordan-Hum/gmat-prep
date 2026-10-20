// CFA Level I · Derivatives · Learning module 10: Valuing a Derivative Using a One-Period Binomial Model.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1binom = `
<p class="syl">CFA Level I · Derivatives (5–8%) · Learning module 10 of 10 · Valuing a Derivative Using a One-Period Binomial Model</p>
<p>The binomial model values an option by assuming the underlying can move to just two prices over one period. You can value the option either by replicating it with the underlying and borrowing (the hedge ratio approach) or by discounting its expected payoff using risk-neutral probabilities. Both give the same answer.</p>

<h3>1. The setup</h3>
<ul>
  <li>Today's price S₀ can move <b>up</b> to S<sup>+</sup> = S₀ × u or <b>down</b> to S<sup>−</sup> = S₀ × d, where u = up factor and d = down factor (d &lt; 1 + r &lt; u, or there would be an arbitrage).</li>
  <li>The option's payoffs in each state: for a call, c<sup>+</sup> = max(0, S<sup>+</sup> − X) and c<sup>−</sup> = max(0, S<sup>−</sup> − X).</li>
</ul>

<h3>2. Risk-neutral valuation <span class="hot">Highly tested</span></h3>
<div class="formula">Risk-neutral probability of an up move: π = (1 + r − d) / (u − d)<br>Option value: c₀ = [π × c<sup>+</sup> + (1 − π) × c<sup>−</sup>] / (1 + r) (same for puts with put payoffs)</div>
<div class="ex"><b>Example:</b> S₀ = 50, u = 1.2, d = 0.9, r = 4% per period, X = 50.<br>S<sup>+</sup> = 60, S<sup>−</sup> = 45. Call payoffs: c<sup>+</sup> = 10, c<sup>−</sup> = 0. Put payoffs: p<sup>+</sup> = 0, p<sup>−</sup> = 5.<br>π = (1.04 − 0.9) / (1.2 − 0.9) = 0.14 / 0.30 = <b>0.4667</b>.<br>Call = (0.4667 × 10 + 0.5333 × 0) / 1.04 = <b>4.49</b>.<br>Put = (0.4667 × 0 + 0.5333 × 5) / 1.04 = <b>2.56</b>.<br>Check with put–call parity: c − p = 1.92 = S₀ − X/1.04 = 50 − 48.08 ✓.</div>
<div class="trap"><b>Traps:</b> π is <b>not</b> the real-world probability of an up move; investors' actual expectations and risk preferences don't enter the price. Always discount the expected payoff at the risk-free rate, and use 1 + r, not r, in the formula for π.</div>

<h3>3. Replication and the hedge ratio <span class="hot">Highly tested</span></h3>
<p>Buy h shares and borrow so that the portfolio pays exactly what the option pays in both states.</p>
<div class="formula">Hedge ratio h = (c<sup>+</sup> − c<sup>−</sup>) / (S<sup>+</sup> − S<sup>−</sup>)<br>Call value = h × S₀ − PV(amount borrowed), where amount borrowed today = (h × S<sup>−</sup> − c<sup>−</sup>) / (1 + r)</div>
<div class="ex"><b>Example (same inputs):</b> h = (10 − 0) / (60 − 45) = <b>0.667</b> shares per call.<br>Borrow (0.667 × 45 − 0) / 1.04 = 28.85.<br>Call = 0.667 × 50 − 28.85 = <b>4.49</b>, the same as the risk-neutral value.<br>A dealer who writes 1,000 calls hedges by buying about <b>667 shares</b>: the hedged position is riskless and earns the risk-free rate.</div>
<ul>
  <li>For a put, the hedge ratio is <b>negative</b>: h = (0 − 5) / (60 − 45) = −0.333, so replicating a long put means shorting shares and lending.</li>
  <li>If the market price differs from the model value, an arbitrage exists: e.g. if the call trades above 4.49, sell the call and buy the replicating portfolio (buy h shares, borrow).</li>
</ul>

<div class="how"><b>How it's tested:</b> calculating the risk-neutral probability, valuing calls and puts in a one-period tree, calculating the hedge ratio and the replicating portfolio, recognizing that real-world probabilities aren't used, and the arbitrage when a market price differs from the model.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe the one-period binomial model and calculate up and down prices.</li>
  <li>Calculate risk-neutral probabilities and value calls and puts.</li>
  <li>Calculate the hedge ratio and value an option by replication.</li>
  <li>Explain why risk-neutral pricing doesn't depend on real-world probabilities or risk preferences.</li>
</ul></div>
`;

window.QB_HARD.l1binom = [
  ["A stock trades at 100 and will move to either 120 or 80 in one period. The risk-free rate per period is 5%. The risk-neutral probability of the up move is:",
    ["0.625", "0.500", "0.375"],
    "π = (1 + r − d) ÷ (u − d) = (1.05 − 0.80) ÷ (1.20 − 0.80) = 0.25 ÷ 0.40 = 0.625.", "c"],
  ["Using the same stock (100, moving to 120 or 80; r = 5%), the value of a one-period European call with an exercise price of 100 is closest to:",
    ["11.90", "12.50", "10.00"],
    "c_up = 20, c_down = 0. c0 = (0.625 × 20 + 0.375 × 0) ÷ 1.05 = 12.50 ÷ 1.05 = 11.90.", "c"],
  ["Using the same stock (100, moving to 120 or 80), the hedge ratio for the call with an exercise price of 100 is:",
    ["0.50", "0.625", "1.00"],
    "h = (c_up − c_down) ÷ (S_up − S_down) = (20 − 0) ÷ (120 − 80) = 0.50 shares per call.", "c"],
  ["A stock at 50 will move up by a factor of 1.2 or down by 0.9 in one period. The risk-free rate is 4% per period. The risk-neutral probability of an up move is closest to:",
    ["0.467", "0.533", "0.500"],
    "π = (1.04 − 0.9)/(1.2 − 0.9) = 0.467. 0.533 is the down probability.", "c"],
  ["For the same stock (50; up to 60 or down to 45; r = 4%), a one-period European call with an exercise price of 50 is worth closest to:",
    ["4.49", "4.67", "4.81"],
    "(0.467 × 10 + 0.533 × 0)/1.04 = 4.49. 4.67 doesn't discount; 4.81 uses a 50% probability.", "c"],
  ["For the same stock and an exercise price of 50, a one-period European put is worth closest to:",
    ["2.56", "2.67", "2.24"],
    "Put payoffs are 0 (up) and 5 (down): 0.533 × 5 / 1.04 = 2.56. 2.67 doesn't discount; 2.24 wrongly uses the up probability.", "c"],
  ["For the same stock (up to 60, down to 45) and a call with an exercise price of 50, the hedge ratio is closest to:",
    ["0.667", "0.467", "1.000"],
    "h = (10 − 0)/(60 − 45) = 0.667 shares per call.", "c"],
  ["A dealer writes 1,000 of those calls (hedge ratio 0.667). To hedge, she should:",
    ["Buy about 667 shares", "Sell about 667 shares", "Buy 1,000 shares"],
    "Writing calls loses when the stock rises, so she buys h × 1,000 shares.", "s"],
  ["The hedge ratio for a put in a one-period binomial model is:",
    ["Negative", "Positive", "Always equal to one"],
    "Put payoffs fall as the stock rises, so h = (p⁺ − p⁻)/(S⁺ − S⁻) < 0.", "r"],
  ["In the binomial model, the probability of an up move that investors actually expect:",
    ["Doesn't affect the option's value", "Is used to discount the payoffs", "Must equal the risk-neutral probability"],
    "Because the option can be replicated, its value depends only on prices and the risk-free rate.", "r"],
  ["The binomial model values a call at 4.49, but it trades at 5.00. An arbitrageur would:",
    ["Sell the call and buy h shares, borrowing", "Buy the call and short h shares, lending", "Buy the call and buy h shares"],
    "Sell the overpriced call and create it synthetically (buy shares with borrowed money) to lock in 0.51.", "r"],
];

window.GLOSSARY.push(
  ["Binomial risk-neutral probability","π = (1 + r − d) ÷ (u − d). Value = [πV_u + (1 − π)V_d] ÷ (1 + r).","l1binom"],
  ["Hedge ratio (binomial)","h = (c_u − c_d) ÷ (S_u − S_d) shares per option written.","l1binom"],
  ["Risk-neutral probability (binomial)", "π = (1 + r − d)/(u − d).", "l1binom"],
  ["Hedge ratio", "(c⁺ − c⁻)/(S⁺ − S⁻): shares per option needed to replicate or hedge it.", "l1binom"]
);
