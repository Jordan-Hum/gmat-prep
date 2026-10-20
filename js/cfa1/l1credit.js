// CFA Level I · Fixed Income · Learning module 14: Credit Risk.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1credit = `
<p class="syl">CFA Level I · Fixed Income (11–14%) · Learning module 14 of 19 · Credit Risk</p>
<p>Credit risk is the risk of losing money because a borrower doesn't pay in full and on time. This lesson breaks credit risk into probability of default and loss severity, shows how they link to expected loss and credit spreads, introduces the "Cs" of credit analysis, explains credit ratings and their limitations, and shows how changes in spreads affect bond prices.</p>

<h3>1. Components of credit risk <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Probability of default (POD)</b>: the chance the issuer fails to make a payment in full and on time over a period.</li>
  <li><b>Loss given default (LGD)</b>, or loss severity: the share of the exposure lost if default happens. <b>LGD = 1 − recovery rate</b>.</li>
  <li><b>Exposure at default (EAD)</b>: the amount owed at the time of default.</li>
</ul>
<div class="formula">Expected loss = POD × LGD (× EAD in currency)<br>Credit spread ≈ POD × LGD (the compensation for expected loss; actual spreads also include liquidity and other premiums)</div>
<div class="ex"><b>Example:</b> annual POD 1.5%, recovery rate 35% → LGD = 65%. Expected loss = 1.5% × 65% = <b>0.975%</b> a year; on a $10 million position, <b>$97,500</b>.<br>Working backwards: a bond with a 2.4% credit spread and a 40% expected recovery implies a POD of about 2.4% / 60% = <b>4%</b>.</div>
<ul>
  <li>Recovery rates depend on <b>seniority</b> (senior secured debt recovers the most, subordinated the least), the industry, and the stage of the credit cycle (recoveries are lower in recessions).</li>
</ul>

<h3>2. The Cs of credit analysis</h3>
<table>
  <tr><th>C</th><th>Question</th></tr>
  <tr><td><b>Capacity</b></td><td>Can the borrower generate enough cash flow to pay? (industry, competitive position, operating and financial ratios). The most important C</td></tr>
  <tr><td><b>Capital</b></td><td>What other resources does it have (equity cushion, assets, ability to raise funds)?</td></tr>
  <tr><td><b>Collateral</b></td><td>What assets back the debt, and what are they worth in a default?</td></tr>
  <tr><td><b>Covenants</b></td><td>What terms protect lenders and limit risky actions?</td></tr>
  <tr><td><b>Character</b></td><td>Is management competent and honest, with sound strategy and accounting? (often added as a fifth C)</td></tr>
</table>

<h3>3. Credit ratings <span class="hot">Highly tested</span></h3>
<table>
  <tr><th></th><th>S&amp;P / Fitch</th><th>Moody's</th></tr>
  <tr><td>Investment grade</td><td>AAA, AA, A, BBB (with + / −)</td><td>Aaa, Aa, A, Baa (with 1, 2, 3)</td></tr>
  <tr><td>High yield (speculative)</td><td>BB, B, CCC, CC, C</td><td>Ba, B, Caa, Ca, C</td></tr>
  <tr><td>Default</td><td>D</td><td>—</td></tr>
</table>
<ul>
  <li><b>Issuer ratings</b> reflect overall creditworthiness (usually for senior unsecured debt); <b>issue ratings</b> apply to specific bonds and are adjusted up or down from the issuer rating for seniority and collateral (<b>notching</b>).</li>
  <li>Agencies publish <b>outlooks</b> (positive, negative, stable) and put ratings on <b>watch</b> when a change is likely soon.</li>
  <li>Ratings help investors who can't do their own analysis and are used in regulation and investment mandates.</li>
</ul>
<h4>Limitations of ratings</h4>
<ul>
  <li>Ratings change only occasionally, so they often <b>lag</b> market prices and spreads.</li>
  <li>Agencies make mistakes (e.g. structured products before the 2008 crisis).</li>
  <li>Some risks are hard to capture: <b>event risk</b> such as leveraged buyouts, lawsuits, natural disasters or fraud.</li>
  <li>A rating reflects default risk, not the bond's price or expected return; bonds with the same rating can trade at different spreads.</li>
</ul>

<h3>4. Spread risk and price changes <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Credit migration (downgrade) risk</b>: a lower rating widens the spread and lowers the price, even without default.</li>
  <li><b>Market liquidity risk</b>: the cost of trading (bid-ask spread) is higher for smaller, less frequently traded and lower-rated issues, and rises in stressed markets.</li>
  <li>Spreads widen in recessions and market stress (higher expected defaults and lower recoveries, investors move to safety) and narrow in expansions. Heavy new issuance can also widen spreads.</li>
</ul>
<div class="formula">%ΔPrice ≈ −ModDur × ΔSpread + ½ × Convexity × (ΔSpread)²</div>
<div class="ex"><b>Example:</b> a bond with modified duration 5.5 and convexity 40. Its spread widens 80 bp: −5.5 × 0.008 + ½ × 40 × 0.008² = −4.40% + 0.13% = <b>−4.27%</b>.</div>

<div class="how"><b>How it's tested:</b> expected loss and LGD calculations, the link between spreads, POD and LGD, the Cs of credit analysis, investment grade vs high yield, issuer vs issue ratings and notching, limitations of ratings, and price changes from spread changes (duration and convexity).</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Define POD, LGD, recovery rate and expected loss, and calculate expected loss.</li>
  <li>Describe the Cs of credit analysis.</li>
  <li>Describe credit ratings, notching and the limitations of ratings.</li>
  <li>Explain credit migration and liquidity risk, what drives spreads, and calculate price changes from spread changes.</li>
</ul></div>
`;

window.QB_HARD.l1credit = [
  ["A bond's annual probability of default is 2% and its expected recovery rate is 40%. The expected loss as a percentage of the exposure is closest to:",
    ["1.2%", "0.8%", "2.0%"],
    "Expected loss = POD × LGD = 2% × (1 − 0.40) = 1.2%.", "c"],
  ["A corporate bond has a modified duration of 6. If its credit spread widens by 50 basis points and benchmark yields don't change, its price will change by approximately:",
    ["−3.0%", "−0.3%", "−6.0%"],
    "%ΔP ≈ −ModDur × ΔSpread = −6 × 0.005 = −3.0%.", "c"],
  ["A limitation of relying on credit ratings is that:",
    ["Ratings tend to lag changes in market credit spreads", "Ratings never change once they are assigned", "Ratings include an equity valuation of the issuer"],
    "Ratings are updated infrequently, so market spreads often move first. Agencies can also make mistakes and struggle to anticipate event risks.", "r"],
  ["A bond's annual probability of default is 1.5% and its expected recovery rate is 35%. Its expected loss is closest to:",
    ["0.98%", "0.53%", "1.50%"],
    "LGD = 65%; 1.5% × 65% = 0.975%. 0.53% uses the recovery rate instead of LGD.", "c"],
  ["A bond trades at a credit spread of 2.4%, and investors expect a 40% recovery rate in default. The implied annual probability of default is closest to:",
    ["4.0%", "6.0%", "1.0%"],
    "Spread ≈ POD × LGD → POD ≈ 2.4% / 60% = 4.0%. 6.0% divides by the recovery rate.", "c"],
  ["Loss given default equals:",
    ["One minus the recovery rate", "Probability of default × exposure", "The bond's credit spread"],
    "LGD (loss severity) is the share of exposure lost; recovery is the share recovered.", "r"],
  ["Which of the Cs of credit analysis focuses on whether the borrower can generate enough cash flow to service its debt?",
    ["Capacity", "Collateral", "Character"],
    "Capacity is the ability to pay from operations; it's usually the most important C.", "r"],
  ["Which rating is the lowest investment grade rating from Moody's?",
    ["Baa3", "Ba1", "Baa1"],
    "Baa3 (equivalent to BBB−) is the lowest investment grade rating; Ba1 is the highest high-yield rating.", "r"],
  ["A bond's issue rating differs from its issuer rating mainly because of the bond's:",
    ["Seniority and collateral", "Coupon frequency", "Currency of payment only"],
    "Agencies notch issue ratings up for secured or senior debt and down for subordinated debt.", "r"],
  ["A sudden leveraged buyout that sharply increases a company's debt is an example of a risk that credit ratings may not capture in advance, known as:",
    ["Event risk", "Liquidity risk", "Spread risk"],
    "Event risk (buyouts, lawsuits, disasters) can change credit quality suddenly, before agencies react.", "r"],
  ["A bond is downgraded from A to BBB, and its spread widens even though the issuer hasn't defaulted. This illustrates:",
    ["Credit migration risk", "Default risk", "Market liquidity risk"],
    "Downgrade (migration) risk causes losses through wider spreads without a default.", "s"],
  ["A bond has a modified duration of 5.5 and convexity of 40. If its credit spread widens by 80 bp, its price will change by approximately:",
    ["−4.27%", "−4.40%", "−4.53%"],
    "−5.5 × 0.008 + ½ × 40 × 0.008² = −4.40% + 0.13% = −4.27%. −4.40% ignores convexity.", "c"],
  ["Credit spreads on corporate bonds generally widen when:",
    ["The economy moves into recession", "Corporate earnings grow strongly", "Market liquidity improves"],
    "Recessions raise expected defaults and lower recoveries; investors also move to safer assets.", "r"],
  ["Compared with senior secured debt of the same issuer, subordinated debt typically has:",
    ["Lower recovery rates in default", "Higher recovery rates in default", "The same recovery rate"],
    "Subordinated debt is paid after senior claims, so less is recovered.", "r"],
];

window.GLOSSARY.push(
  ["Expected credit loss","POD × LGD, where LGD = exposure × (1 − recovery rate).","l1credit"],
  ["Loss given default (LGD)", "Share of exposure lost in default = 1 − recovery rate.", "l1credit"],
  ["Cs of credit analysis", "Capacity, capital, collateral, covenants (and character).", "l1credit"],
  ["Notching", "Rating a specific issue above or below the issuer rating based on seniority.", "l1credit"],
  ["Credit migration risk", "Risk that a downgrade widens the spread and lowers the price.", "l1credit"]
);
