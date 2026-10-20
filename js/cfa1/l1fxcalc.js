// CFA Level I · Economics · Learning module 8: Exchange Rate Calculations.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1fxcalc = `
<p class="syl">CFA Level I · Economics · Learning module 8 of 8 · Exchange Rate Calculations</p>
<p>A short but very calculation-heavy module. Almost every error comes from mixing up which currency is which in a quote, so the first section is the most important. Then: percentage appreciation and depreciation, cross rates, real exchange rates, and forward rates from interest rates.</p>

<h3>1. Reading an exchange rate quote <span class="hot">Highly tested</span></h3>
<p>The CFA convention is <b>A/B</b> = the number of units of <b>A (the price currency)</b> needed to buy <b>one unit of B (the base currency)</b>.</p>
<ul>
  <li>USD/EUR = 1.0850 means €1 costs $1.0850. The EUR is the base currency, the USD the price currency.</li>
  <li>The inverse, EUR/USD = 1/1.0850 = 0.9217, means $1 costs €0.9217.</li>
  <li>If the USD/EUR rate <b>rises</b>, it takes more dollars to buy a euro: the <b>base currency (EUR) appreciates</b> and the price currency (USD) depreciates.</li>
  <li>A <b>direct quote</b> expresses the price of foreign currency in domestic currency (for a US investor, USD/EUR); an <b>indirect quote</b> is the reverse.</li>
  <li>Dealers quote a <b>bid</b> (price at which they buy the base currency) and a higher <b>offer</b> (price at which they sell it).</li>
</ul>
<div class="trap"><b>Trap:</b> market jargon such as "EUR/USD" often means the opposite (dollars per euro). On the exam, always follow the definition in the question; in CFA notation the currency in the denominator is the one being priced.</div>

<h3>2. Percentage appreciation and depreciation <span class="hot">Highly tested</span></h3>
<div class="formula">Change in the base currency = S₁/S₀ − 1 · Change in the price currency = S₀/S₁ − 1</div>
<div class="ex"><b>Example:</b> USD/EUR rises from 1.10 to 1.21. The EUR (base) appreciates by 1.21/1.10 − 1 = <b>+10.0%</b>. The USD (price) depreciates by 1.10/1.21 − 1 = <b>−9.09%</b>. The two percentages are not equal and opposite.</div>
<p>Similarly, if JPY/USD goes from 148 to 155, the USD appreciates 4.73% and the JPY depreciates 148/155 − 1 = −4.52%.</p>

<h3>3. Cross rates <span class="hot">Highly tested</span></h3>
<p>A cross rate is an exchange rate between two currencies computed through a third. Arrange the quotes so the common currency cancels:</p>
<div class="formula">A/B × B/C = A/C (the B in the numerator of one cancels the B in the denominator of the other)</div>
<div class="ex"><b>Examples:</b>
<br>USD/EUR = 1.0800 and JPY/USD = 150.00 → JPY/EUR = 150.00 × 1.0800 = 162.00 (¥162 per €1).
<br>CAD/USD = 1.3600 and USD/EUR = 1.0800 → CAD/EUR = 1.3600 × 1.0800 = 1.4688.
<br>USD/GBP = 1.2600 and USD/EUR = 1.0800 → EUR/GBP = (USD/GBP) ÷ (USD/EUR) = 1.2600/1.0800 = 1.1667 (invert one quote so the USD cancels).</div>
<p>If a dealer's cross quote differs from the implied cross rate (beyond the bid–offer spread), <b>triangular arbitrage</b> is possible.</p>

<h3>4. Real exchange rates</h3>
<p>The <b>real exchange rate</b> adjusts the nominal rate for relative price levels, so it measures the relative purchasing power (competitiveness) of two currencies.</p>
<div class="formula">Real exchange rate (price/base) = S_price/base × (P_base / P_price) · %Δ real ≈ %Δ nominal + inflation_base − inflation_price</div>
<div class="ex"><b>Example:</b> USD/EUR stays at 1.10 for a year. Eurozone inflation is 3% and US inflation 1%. Real USD/EUR rises to 1.10 × 1.03/1.01 = 1.1218 (+1.98%): the euro has <b>appreciated in real terms</b> (eurozone goods became relatively more expensive) even though the nominal rate didn't move.</div>
<p>A real appreciation makes a country's exports less competitive; a real depreciation makes them more competitive.</p>

<h3>5. Forward exchange rates <span class="hot">Highly tested</span></h3>
<p>A forward rate is set by <b>covered interest rate parity</b> (no-arbitrage): investing in either currency and hedging with a forward must give the same result.</p>
<div class="formula">F_price/base = S_price/base × (1 + i_price × days/360) / (1 + i_base × days/360)</div>
<ul>
  <li>The currency with the <b>higher interest rate</b> trades at a <b>forward discount</b>; the lower-rate currency at a <b>forward premium</b>.</li>
  <li><b>Forward points</b> = (F − S) × 10,000 for most pairs (× 100 for JPY quotes). Positive points: the base currency is at a forward premium. Forward = spot + points/10,000.</li>
  <li>The forward rate is <b>not</b> a forecast of the future spot rate; it's set by interest rates.</li>
</ul>
<div class="ex"><b>Example 1:</b> Spot USD/EUR = 1.0850; 90-day rates: USD 4.8%, EUR 3.2%. F = 1.0850 × (1 + 0.048 × 90/360)/(1 + 0.032 × 90/360) = 1.0850 × 1.012/1.008 = 1.0893. Forward points = +43.1: the EUR (lower rate) trades at a premium.</div>
<div class="ex"><b>Example 2:</b> Spot USD/GBP = 1.2600; 180-day rates: USD 4.5%, GBP 5.0%. F = 1.2600 × 1.0225/1.0250 = 1.2569; points = −30.7: the GBP (higher rate) trades at a discount.</div>
<div class="ex"><b>Example 3:</b> Spot 1.3000 with forward points of −25 → forward = 1.3000 − 0.0025 = 1.2975.</div>

<div class="how"><b>How it's tested:</b> percentage changes in each currency, cross rates (including when a quote must be inverted), real exchange rate direction, forward rates from interest rates (with day counts), forward points and premium/discount.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Identify the price and base currency in a quote and invert quotes correctly.</li>
  <li>Calculate percentage appreciation/depreciation of each currency.</li>
  <li>Calculate cross rates.</li>
  <li>Calculate and interpret real exchange rate changes.</li>
  <li>Calculate forward rates and forward points, and identify the currency at a premium or discount.</li>
</ul></div>
`;

window.QB_HARD.l1fxcalc = [
  ["The nominal rate stays at 1.10 USD per EUR. Over the year, eurozone inflation is 3% and US inflation is 1%. From a US perspective, the euro has:",
    ["Appreciated in real terms", "Depreciated in real terms", "Not changed in real terms"],
    "Real rate (USD per EUR) = nominal × (P_EUR ÷ P_USD). Eurozone prices rose faster, so the real value of the euro rose about 2%.", "c"],
  ["Given 1.0800 USD per EUR and 150.00 JPY per USD, the JPY/EUR cross rate is closest to:",
    ["162.00", "138.89", "151.08"],
    "JPY/EUR = JPY/USD × USD/EUR = 150.00 × 1.0800 = 162.00 yen per euro.", "c"],
  ["The USD/EUR rate (USD per EUR) rises from 1.10 to 1.21. The US dollar has:",
    ["Depreciated 9.09% against the euro", "Depreciated 10.00% against the euro", "Appreciated 10.00% against the euro"],
    "The euro (base) rose 1.21/1.10 − 1 = 10%. The dollar (price currency) changed by 1.10/1.21 − 1 = −9.09%.", "c"],
  ["Spot is 1.1000 USD per EUR. One-year interest rates are 5% in USD and 3% in EUR. The no-arbitrage one-year forward rate (USD per EUR) is closest to:",
    ["1.1214", "1.0790", "1.1220"],
    "Covered interest parity: F = S × (1 + i_USD) ÷ (1 + i_EUR) = 1.10 × 1.05 ÷ 1.03 = 1.1214. 1.1220 is the linear approximation; 1.0790 inverts the rates.", "c"],
  ["If the base currency trades at a forward premium, the forward points are:",
    ["Positive", "Negative", "Zero"],
    "Forward points = F − S (scaled). A forward premium on the base currency means F > S, so points are positive.", "r"],
  ["The exchange rate is quoted as USD/EUR = 1.0850. This means:",
    ["€1 costs $1.0850", "$1 costs €1.0850", "€1.0850 buys $1"],
    "In A/B notation, the quote is the price of one unit of the base currency B (EUR) in the price currency A (USD).", "r"],
  ["If the JPY/USD rate rises from 148.00 to 155.00, the Japanese yen has:",
    ["Depreciated by about 4.5%", "Appreciated by about 4.7%", "Depreciated by about 4.7%"],
    "The yen is the price currency: its change = S₀/S₁ − 1 = 148/155 − 1 = −4.52%. The USD appreciated 155/148 − 1 = +4.73%.", "c"],
  ["Given CAD/USD = 1.3600 and USD/EUR = 1.0800, the CAD/EUR cross rate is closest to:",
    ["1.4688", "1.2593", "0.7930"],
    "CAD/USD × USD/EUR = CAD/EUR = 1.3600 × 1.0800 = 1.4688. (1.2593 divides instead of multiplying.)", "c"],
  ["Given USD/GBP = 1.2600 and USD/EUR = 1.0800, the EUR/GBP cross rate is closest to:",
    ["1.1667", "1.3608", "0.8571"],
    "EUR/GBP = USD/GBP ÷ USD/EUR = 1.2600/1.0800 = 1.1667 (the USD cancels). 0.8571 is GBP/EUR.", "c"],
  ["Given MXN/USD = 17.20 and USD/EUR = 1.09, the MXN/EUR cross rate is closest to:",
    ["18.75", "15.78", "0.0533"],
    "MXN/USD × USD/EUR = 17.20 × 1.09 = 18.75 pesos per euro. 0.0533 is EUR/MXN.", "c"],
  ["The CHF/USD rate falls from 0.90 to 0.88 over a year in which US inflation is 3% and Swiss inflation is 1%. In real terms, the US dollar has most likely:",
    ["Depreciated slightly", "Appreciated by about 2%", "Depreciated by about 4%"],
    "Real CHF/USD = 0.88 × 1.03/1.01 = 0.8974 vs 0.90: about −0.3%. The nominal fall (−2.2%) is mostly offset by higher US inflation.", "c"],
  ["Spot USD/EUR is 1.0850. The 90-day USD interest rate is 4.8% and the EUR rate is 3.2% (actual/360). The 90-day forward rate is closest to:",
    ["1.0893", "1.0807", "1.1018"],
    "F = 1.0850 × (1 + 0.048 × 0.25)/(1 + 0.032 × 0.25) = 1.0850 × 1.012/1.008 = 1.0893. (1.1018 uses annual rates without the 90/360 adjustment.)", "c"],
  ["Spot USD/GBP is 1.2600. The 180-day rates are 4.5% for USD and 5.0% for GBP (actual/360). The 180-day forward points are closest to:",
    ["−30.7", "+30.7", "−63.0"],
    "F = 1.2600 × 1.0225/1.0250 = 1.25693; points = (1.25693 − 1.2600) × 10,000 = −30.7. The higher-yielding GBP trades at a forward discount.", "c"],
  ["A spot rate of 1.3000 has forward points of −25. The forward rate is:",
    ["1.2975", "1.3025", "1.2750"],
    "Forward = spot + points/10,000 = 1.3000 − 0.0025 = 1.2975.", "c"],
  ["According to covered interest rate parity, the currency with the higher interest rate trades at a:",
    ["Forward discount", "Forward premium", "Forward rate equal to spot"],
    "The forward rate offsets the interest differential, so the high-rate currency buys less in the forward market than in the spot market.", "r"],
];

window.GLOSSARY.push(
  ["Covered interest parity","F(P/B) = S(P/B) × (1 + i_P τ) ÷ (1 + i_B τ). The higher-yield currency trades at a forward discount.","l1fxcalc"],
  ["Exchange rate quote","USD/EUR = 1.10 means 1.10 USD (price currency) per 1 EUR (base currency). Base change = S1/S0 − 1.","l1fxcalc"],
  ["Base vs price currency", "In A/B, B is the base (one unit priced), A is the price currency.", "l1fxcalc"],
  ["Percentage change in a currency", "Base: S₁/S₀ − 1. Price: S₀/S₁ − 1.", "l1fxcalc"],
  ["Cross rate", "A/B × B/C = A/C (common currency cancels).", "l1fxcalc"],
  ["Real exchange rate", "S × (P_base/P_price); %Δ ≈ %Δnominal + inflation_base − inflation_price.", "l1fxcalc"],
  ["Forward rate (money market)", "F = S × (1 + i_price × d/360)/(1 + i_base × d/360).", "l1fxcalc"]
);
