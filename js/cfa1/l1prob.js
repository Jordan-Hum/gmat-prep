// CFA Level I · Quantitative Methods · Learning module 4: Probability Trees and Conditional Expectations.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1prob = `
<p class="syl">CFA Level I · Quantitative Methods · Learning module 4 of 11 · Probability Trees and Conditional Expectations</p>
<p>Analysts rarely know the future; they assign probabilities to scenarios and compute what to expect. This lesson covers the probability rules you need, expected value and variance of a random outcome, probability trees for multi-stage scenarios, and <b>Bayes' formula</b> for updating a probability when new information arrives.</p>

<h3>1. Probability basics</h3>
<ul>
  <li>A <b>random variable</b> is a quantity whose outcome is uncertain (e.g. next year's EPS). An <b>event</b> is a specified set of outcomes.</li>
  <li>Probabilities are between 0 and 1. The probabilities of a set of <b>mutually exclusive</b> (can't happen together) and <b>exhaustive</b> (cover every possibility) events sum to 1.</li>
  <li><b>Empirical</b> probability comes from historical frequencies; <b>a priori</b> from logical reasoning (e.g. a fair die); <b>subjective</b> from personal judgment.</li>
  <li><b>Odds for</b> an event E = P(E)/[1 − P(E)]. A probability of 0.20 = odds of 1 to 4 for (0.25). Odds of "a to b" for → P = a/(a + b).</li>
</ul>
<h4>Unconditional, conditional and joint probability</h4>
<ul>
  <li><b>Unconditional</b> (marginal) probability P(A): the chance of A regardless of anything else.</li>
  <li><b>Conditional</b> probability P(A | B): the chance of A <b>given</b> that B has occurred.</li>
  <li><b>Joint</b> probability P(AB): the chance that both A and B occur.</li>
</ul>
<div class="formula">Multiplication rule: P(AB) = P(A | B) × P(B) · Conditional: P(A | B) = P(AB) / P(B)</div>
<div class="formula">Addition rule: P(A or B) = P(A) + P(B) − P(AB) (subtract the overlap so it isn't counted twice)</div>
<ul>
  <li><b>Independent</b> events: knowing B tells you nothing about A, so P(A | B) = P(A) and P(AB) = P(A) × P(B). Test independence by checking whether P(AB) = P(A)P(B).</li>
  <li>For independent events, P(at least one occurs) = 1 − P(none occurs). Two independent bonds each with a 5% default probability: P(at least one default) = 1 − 0.95² = 9.75%.</li>
</ul>
<div class="ex"><b>Example:</b> P(A) = 0.40, P(B) = 0.30, P(AB) = 0.15. P(A or B) = 0.40 + 0.30 − 0.15 = 0.55. A and B aren't independent, since P(A)P(B) = 0.12 ≠ 0.15. P(A | B) = 0.15/0.30 = 0.50.</div>
<h4>Total probability rule <span class="hot">Highly tested</span></h4>
<p>An unconditional probability is the probability-weighted average of the conditional probabilities across a set of mutually exclusive and exhaustive scenarios:</p>
<div class="formula">P(A) = P(A | S₁)P(S₁) + P(A | S₂)P(S₂) + … + P(A | Sₙ)P(Sₙ)</div>
<div class="ex"><b>Example:</b> A central bank cuts rates with probability 0.40. If it cuts, the stock market rises with probability 0.70; if not, 0.30. P(market rises) = 0.70 × 0.40 + 0.30 × 0.60 = 0.46.</div>

<h3>2. Expected value and variance of a random variable <span class="hot">Highly tested</span></h3>
<div class="formula">E(X) = Σ P(xᵢ) xᵢ · σ²(X) = Σ P(xᵢ) [xᵢ − E(X)]² · σ = √σ²</div>
<p>Unlike the sample statistics of the previous lesson, these use <b>probabilities</b> as weights (forward-looking scenarios), not historical data, and there's no n − 1 adjustment.</p>
<div class="ex"><b>Example:</b> A portfolio returns 20% in a boom (probability 0.25), 8% in a normal year (0.50) and −10% in a recession (0.25). E(R) = 0.25(20) + 0.50(8) + 0.25(−10) = 6.5%. Variance = 0.25(13.5)² + 0.50(1.5)² + 0.25(−16.5)² = 45.5625 + 1.125 + 68.0625 = 114.75 (%²), so σ = 10.71%.</div>
<h4>Conditional expected values</h4>
<p>A <b>conditional expected value</b> is the expected value given a scenario, E(X | S). The <b>total probability rule for expected value</b> combines them:</p>
<div class="formula">E(X) = E(X | S₁)P(S₁) + E(X | S₂)P(S₂) + …</div>
<p>Example: expected EPS is $10 in an expansion (probability 0.7) and $4 in a recession (0.3), so unconditional E(EPS) = 0.7(10) + 0.3(4) = $8.20.</p>

<h3>3. Probability trees <span class="hot">Highly tested</span></h3>
<p>A probability tree lays out scenarios stage by stage. Each branch carries a conditional probability; the probability of reaching an end node is the product of the probabilities along its path (multiplication rule), and the end-node probabilities sum to 1.</p>
<table>
  <tr><th>Economy (stage 1)</th><th>Company outcome (stage 2)</th><th>EPS</th><th>Path probability</th></tr>
  <tr><td rowspan="2">Expansion, 0.60</td><td>Strong, 0.70</td><td>$3.00</td><td>0.60 × 0.70 = 0.42</td></tr>
  <tr><td>Weak, 0.30</td><td>$2.50</td><td>0.18</td></tr>
  <tr><td rowspan="2">Recession, 0.40</td><td>Resilient, 0.50</td><td>$1.50</td><td>0.20</td></tr>
  <tr><td>Hit hard, 0.50</td><td>$1.00</td><td>0.20</td></tr>
</table>
<div class="ex"><b>Using the tree:</b> E(EPS | expansion) = 0.7(3.00) + 0.3(2.50) = $2.85; E(EPS | recession) = 0.5(1.50) + 0.5(1.00) = $1.25. E(EPS) = 0.6(2.85) + 0.4(1.25) = $2.21 (equivalently 0.42 × 3 + 0.18 × 2.5 + 0.20 × 1.5 + 0.20 × 1.0). Variance = 0.42(0.79)² + 0.18(0.29)² + 0.20(−0.71)² + 0.20(−1.21)² = 0.6709; σ = $0.82.</div>

<h3>4. Bayes' formula <span class="hot">Highly tested</span></h3>
<p>Bayes' formula updates a <b>prior</b> probability of an event into a <b>posterior</b> (updated) probability after observing new information:</p>
<div class="formula">P(Event | Information) = [P(Information | Event) / P(Information)] × P(Event)</div>
<p>The denominator P(Information) usually has to be built with the total probability rule. A tree or a 2 × 2 table of joint probabilities makes this mechanical.</p>
<div class="ex"><b>Example:</b> 30% of funds outperform (prior). An analyst's rating model gives a "buy" signal to 80% of funds that go on to outperform and 40% of those that don't.
<br>Joint probabilities: P(buy and outperform) = 0.30 × 0.80 = 0.24; P(buy and underperform) = 0.70 × 0.40 = 0.28. P(buy) = 0.24 + 0.28 = 0.52.
<br>Posterior: P(outperform | buy) = 0.24/0.52 = <b>46.2%</b>. The signal raises the probability from 30% to 46%, but most "buy" funds still don't outperform.</div>
<div class="trap"><b>Trap:</b> don't confuse P(Information | Event) (80% here) with P(Event | Information) (46%). Bayes' formula exists precisely because they differ.</div>

<div class="how"><b>How it's tested:</b> joint and conditional probabilities from a short description, the addition rule, total probability, expected value and standard deviation from scenario tables, two-stage trees (often EPS or default scenarios) and Bayes' formula for an updated probability.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Distinguish unconditional, conditional and joint probabilities and apply the multiplication, addition and total probability rules.</li>
  <li>Test for independence and compute "at least one" probabilities.</li>
  <li>Compute expected value, variance and standard deviation from probabilities, including conditional expectations.</li>
  <li>Build and use a probability tree, and apply Bayes' formula to update a prior probability.</li>
</ul></div>
`;

window.QB_HARD.l1prob = [
  ["The probability that a company beats earnings forecasts is 40%. If it beats, the probability of a dividend increase is 70%; if it misses, 20%. Given that a dividend increase is announced, the probability that the company beat earnings is closest to:",
    ["70%", "40%", "28%"],
    "P(increase) = 0.4 × 0.7 + 0.6 × 0.2 = 0.40. Bayes: P(beat | increase) = 0.28 ÷ 0.40 = 70%.", "c"],
  ["An analyst expects EPS of $2.50 in an expansion (probability 60%) and $1.50 in a recession (probability 40%). The variance of EPS is closest to:",
    ["0.24", "0.49", "0.12"],
    "E(EPS) = 0.6(2.50) + 0.4(1.50) = 2.10. Variance = 0.6(0.40)² + 0.4(−0.60)² = 0.096 + 0.144 = 0.24. (0.49 is the standard deviation.)", "c"],
  ["The probability that interest rates rise is 0.40, and given a rate rise, the probability that a bank's margin widens is 0.75. The joint probability that rates rise and the margin widens is closest to:",
    ["0.30", "0.75", "0.35"],
    "Multiplication rule: P(AB) = P(A | B)P(B) = 0.75 × 0.40 = 0.30.", "c"],
  ["P(A) = 0.40, P(B) = 0.30 and P(A and B) = 0.15. The probability that A or B occurs is closest to:",
    ["0.55", "0.70", "0.12"],
    "Addition rule: 0.40 + 0.30 − 0.15 = 0.55. Adding without subtracting the overlap (0.70) double-counts it.", "c"],
  ["Using the same data (P(A) = 0.40, P(B) = 0.30, P(A and B) = 0.15), events A and B are:",
    ["Not independent, since P(A and B) ≠ P(A)P(B)", "Independent, since both probabilities are below 0.5", "Mutually exclusive, since their joint probability is low"],
    "Independence requires P(AB) = P(A)P(B) = 0.12; here P(AB) = 0.15. They aren't mutually exclusive either, since P(AB) > 0.", "c"],
  ["Two bonds default independently, each with a 5% probability. The probability that at least one defaults is closest to:",
    ["9.75%", "10.00%", "0.25%"],
    "P(at least one) = 1 − P(neither) = 1 − 0.95² = 9.75%. 10% double-counts the joint default (0.25%).", "c"],
  ["The probability of a recession is 0.30. A company's expected EPS is $4 in a recession and $10 otherwise. Its unconditional expected EPS is closest to:",
    ["$8.20", "$7.00", "$5.80"],
    "E(EPS) = 0.30 × 4 + 0.70 × 10 = 1.20 + 7.00 = $8.20 (total probability rule for expected value).", "c"],
  ["A portfolio returns 20% with probability 0.25, 8% with probability 0.50 and −10% with probability 0.25. Its standard deviation is closest to:",
    ["10.7%", "11.5%", "6.5%"],
    "E(R) = 6.5%. Variance = 0.25(13.5²) + 0.50(1.5²) + 0.25(−16.5²) = 114.75; σ = 10.71%. (6.5% is the expected return.)", "c"],
  ["A central bank cuts rates with probability 0.40. If it cuts, stocks rise with probability 0.70; if it doesn't, with probability 0.30. The unconditional probability that stocks rise is closest to:",
    ["0.46", "0.50", "0.28"],
    "Total probability rule: 0.70 × 0.40 + 0.30 × 0.60 = 0.28 + 0.18 = 0.46.", "c"],
  ["Unconditional probabilities of mutually exclusive and exhaustive events must:",
    ["Sum to 1", "Each equal 1 divided by the number of events", "Be independent of each other"],
    "Exhaustive means one of them must occur; mutually exclusive means only one can. So their probabilities add to exactly 1.", "r"],
  ["An analyst estimates a 20% probability that a takeover bid succeeds. Stated as odds for success, this is:",
    ["1 to 4", "1 to 5", "4 to 1"],
    "Odds for = P/(1 − P) = 0.20/0.80 = 0.25, i.e. 1 to 4.", "c"],
  ["In a probability tree, the probability of an end node equals the:",
    ["Product of the branch probabilities along its path", "Sum of the branch probabilities along its path", "Average of the conditional probabilities at that stage"],
    "Each branch is conditional on the previous stage, so the multiplication rule gives the joint probability of the whole path.", "r"],
  ["Ten percent of bonds in a portfolio default. A model flags 70% of the bonds that later default and 20% of those that don't. Given that a bond is flagged, the probability it defaults is closest to:",
    ["28%", "70%", "10%"],
    "P(flag) = 0.10 × 0.70 + 0.90 × 0.20 = 0.07 + 0.18 = 0.25. P(default | flag) = 0.07/0.25 = 28%.", "c"],
  ["Bayes' formula is used to:",
    ["Update a prior probability using new information", "Combine independent probabilities into a joint probability", "Convert a probability into odds"],
    "Bayes' formula revises a prior probability into a posterior probability after observing information: P(E | I) = P(I | E)P(E)/P(I).", "r"],
  ["In a two-stage tree, the economy expands with probability 0.6. In an expansion, EPS is $3.00 with probability 0.7 and $2.50 with probability 0.3. In a recession, EPS is $1.50 or $1.00 with equal probability. Expected EPS is closest to:",
    ["$2.21", "$2.00", "$2.85"],
    "E(EPS | expansion) = 2.85; E(EPS | recession) = 1.25. E(EPS) = 0.6 × 2.85 + 0.4 × 1.25 = $2.21. ($2.85 is the conditional expectation for an expansion only.)", "c"],
  ["If event A is independent of event B, then:",
    ["P(A | B) = P(A)", "P(A | B) = P(B)", "P(A and B) = 0"],
    "Independence means B gives no information about A, so the conditional probability equals the unconditional one. P(AB) = 0 describes mutually exclusive events.", "r"],
];

window.GLOSSARY.push(
  ["Bayes' formula","P(Event | Info) = P(Info | Event) × P(Event) ÷ P(Info). Updates a prior probability for new information.","l1prob"],
  ["Multiplication rule", "P(AB) = P(A | B) × P(B); for independent events P(A)P(B).", "l1prob"],
  ["Addition rule", "P(A or B) = P(A) + P(B) − P(AB).", "l1prob"],
  ["Total probability rule", "P(A) = Σ P(A | Sᵢ)P(Sᵢ) over mutually exclusive, exhaustive scenarios; same for expected values.", "l1prob"],
  ["Odds for an event", "P/(1 − P); odds of a to b for → P = a/(a + b).", "l1prob"],
  ["Expected value and variance", "E(X) = Σ p x; σ² = Σ p (x − E(X))².", "l1prob"]
);
