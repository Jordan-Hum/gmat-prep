// CFA Level II · Fixed Income: study notes, item sets and flashcards.
window.NOTES = window.NOTES || {};
window.QB_SETS = window.QB_SETS || {};
window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l2fi = `
<p class="syl">CFA Level II · Fixed Income · 10–15% of the exam · Learning modules: The Term Structure and Interest Rate Dynamics · The Arbitrage-Free Valuation Framework · Valuation and Analysis of Bonds with Embedded Options · Credit Analysis Models · Credit Default Swaps</p>

<h3>1. Spot, forward and par rates</h3>
<div class="formula">Discount factor P_T = 1/(1 + S_T)^T · (1 + S_{A+B})^{A+B} = (1 + S_A)^A × (1 + f(A, B))^B · Forward pricing model: P_{A+B} = P_A × F_{(A,B)}</div>
<ul>
  <li>An upward-sloping spot curve means forward rates lie above spot rates. A bond's YTM is a weighted average of the spot rates used to value it.</li>
  <li><b>Par rate</b>: the coupon that makes a bond's price equal to par given the spot curve; spot rates are bootstrapped from par rates.</li>
  <li><b>Arbitrage-free value</b>: discount each cash flow at its own spot rate (otherwise dealers strip or reconstitute).</li>
  <li><b>Riding the yield curve</b>: with an upward-sloping curve that's expected to stay stable, buying bonds longer than the horizon and selling them as they "roll down" earns more than buying horizon-matched bonds. More generally, if you expect future spot rates to be <b>below</b> today's forward rates, longer bonds are undervalued.</li>
</ul>
<div class="ex"><b>Example:</b> S1 = 3.00%, S2 = 3.50%, S3 = 3.80%. f(1,1) = 1.035²/1.03 − 1 = 4.00%; f(2,1) = 1.038³/1.035² − 1 = 4.40%. A 3-year 5% annual-pay bond = 5/1.03 + 5/1.035² + 105/1.038³ = 103.41.</div>
<h4>Swap curve and spreads</h4>
<ul>
  <li>Swap rates are widely used benchmarks (liquid, many maturities, reflect bank-sector credit, few supply distortions).</li>
  <li><b>Swap spread</b> = swap rate − government yield of the same maturity. <b>I-spread</b> = bond yield − swap rate of the same maturity. <b>Z-spread</b> = constant spread over the government <b>spot</b> curve that equates PV with price. SOFR–OIS and similar spreads signal funding stress.</li>
</ul>
<h4>Term structure theories</h4>
<table>
  <tr><th>Theory</th><th>Forward rates…</th></tr>
  <tr><td><b>Unbiased (pure) expectations</b></td><td>= expected future spot rates; all maturities have the same expected return over a period</td></tr>
  <tr><td><b>Local expectations</b></td><td>Short-holding-period returns on all bonds equal the risk-free rate (allows risk premiums for longer horizons)</td></tr>
  <tr><td><b>Liquidity preference</b></td><td>= expected spot + <b>liquidity premium</b> (rising with maturity); forward rates are upward-biased forecasts</td></tr>
  <tr><td><b>Segmented markets</b></td><td>Each maturity segment's yield is set by its own supply and demand</td></tr>
  <tr><td><b>Preferred habitat</b></td><td>Investors prefer certain maturities but will move if compensated with a premium</td></tr>
</table>
<ul>
  <li><b>Yield curve factors</b>: <b>level</b> (parallel shift, explains most variation), <b>steepness</b> (slope), <b>curvature</b> (butterfly).</li>
  <li><b>Key rate durations</b>: %ΔP ≈ −Σ KRD_i × Δr_i; they measure exposure to non-parallel shifts.</li>
  <li>Macro drivers: monetary policy (short end), inflation expectations and fiscal supply (long end), a bond risk premium. Flight to quality pulls government yields down.</li>
</ul>

<h3>2. Arbitrage-free valuation with trees</h3>
<ul>
  <li><b>Binomial interest rate tree</b> (lognormal): adjacent rates at a date differ by e^{2σ}: r_H = r_L × e^{2σ}. The tree is <b>calibrated</b> so it prices benchmark bonds correctly.</li>
  <li><b>Backward induction</b>: V = ½[(V_H + C) + (V_L + C)]/(1 + r) at each node.</li>
  <li><b>Pathwise valuation</b>: average the PV across all 2^(n−1) paths; <b>Monte Carlo</b> simulation for path-dependent securities (e.g. MBS), with a drift adjustment so benchmarks are priced correctly.</li>
  <li><b>Term structure models</b>: equilibrium: <b>CIR</b> (mean-reverting; volatility rises with the level of rates; rates can't go negative) and <b>Vasicek</b> (mean-reverting, constant volatility, negative rates possible). Arbitrage-free: <b>Ho–Lee</b> (normal, time-dependent drift) and <b>Kalotay–Williams–Fabozzi</b> (lognormal).</li>
</ul>

<h3>3. Bonds with embedded options</h3>
<div class="formula">Callable = straight − call · Putable = straight + put · Option-adjusted spread: OAS = Z-spread − option cost</div>
<ul>
  <li>At each node of the tree, a callable bond's value is the <b>lower</b> of the continuation value and the call price (when callable); a putable's is the <b>higher</b> of continuation value and the put price.</li>
  <li><b>Higher volatility</b> raises both option values: callable bond value falls, putable bond value rises. A flatter or inverted curve raises call value and lowers put value.</li>
  <li><b>OAS</b>: the constant spread added to all tree rates that makes model value = price. A callable bond's OAS is below its Z-spread; if the assumed volatility is too <b>high</b>, the computed OAS for a callable is too <b>low</b> (the bond looks rich).</li>
  <li><b>Effective duration</b> = (PV₋ − PV₊)/(2 × ΔCurve × PV₀); <b>effective convexity</b> = (PV₋ + PV₊ − 2PV₀)/(ΔCurve² × PV₀). Callable bonds show <b>negative convexity</b> when rates are low (price compression near the call price). Callable and putable effective durations are ≤ the straight bond's. One-sided durations: a callable is more sensitive to rising than falling rates; a putable, the reverse.</li>
  <li><b>Floaters</b>: capped floater = straight floater − cap (benefits issuer); floored floater = straight floater + floor (benefits investor).</li>
</ul>
<h4>Convertible bonds</h4>
<ul>
  <li><b>Conversion price</b> = par/conversion ratio; <b>conversion value</b> = share price × conversion ratio; minimum value = max(straight value, conversion value).</li>
  <li><b>Market conversion price</b> = convertible price/conversion ratio; <b>market conversion premium per share</b> = market conversion price − share price; <b>premium ratio</b> = that premium/share price. Premium over straight value = convertible price/straight value − 1.</li>
  <li>Low share price: a <b>busted convertible</b> behaves like a straight bond; high share price: behaves like equity; in between, hybrid. Value = straight value + call on shares (− issuer call + investor put, if any).</li>
</ul>
<div class="ex"><b>Example:</b> Conversion ratio 25, share price 34 → conversion value 850. Convertible price 1,020, straight value 940. Market conversion price = 40.80; premium per share = 6.80; premium ratio = 20%; premium over straight value = 8.5%; minimum value = 940.</div>

<h3>4. Credit analysis models</h3>
<div class="formula">Expected loss = POD × LGD; LGD = exposure × (1 − recovery rate) · CVA = Σ PV(expected loss_t) · Fair value = risk-free value − CVA · Credit spread ≈ POD × LGD</div>
<ul>
  <li><b>Hazard rate</b>: probability of default in a period given no earlier default. POD_t = hazard × probability of survival to t − 1; POS falls each period.</li>
  <li><b>Exposure</b> at each date = value of the remaining cash flows at that date (for a zero-coupon bond, PV of face value at that date).</li>
  <li><b>Credit ratings and transition matrices</b>: expected spread change from migration probabilities; %ΔP ≈ −modified duration × Δspread.</li>
  <li><b>Structural models</b>: equity is a <b>call option on the company's assets</b> with strike = face value of debt; risky debt = riskless debt − put on assets. Insightful but need unobservable asset values and volatility.</li>
  <li><b>Reduced-form models</b>: default is an exogenous random event with a hazard rate linked to observable variables; good fit to market data, but don't explain why default occurs.</li>
  <li>Risky bonds in a <b>binomial tree</b>: at each node, value = expected cash flows (with POD and recovery) discounted at the risk-free rate.</li>
  <li><b>Term structure of credit spreads</b>: investment-grade curves usually upward sloping; high-yield curves can be flat or inverted. Spreads widen in downturns.</li>
  <li><b>Securitized debt</b>: analyze the collateral pool (granularity, homogeneity), servicer, and credit enhancements (subordination, overcollateralization, excess spread).</li>
</ul>
<div class="ex"><b>Example:</b> 3-year zero, face 100, risk-free 3% flat, hazard rate 2%, recovery 40%. PODs: 2.00%, 1.96%, 1.92%. Exposures: 94.26, 97.09, 100. PV of expected losses = 1.098 + 1.076 + 1.055 → CVA = 3.23. Fair value = 91.51 − 3.23 = 88.29; YTM = 4.24%; credit spread ≈ 1.24%.</div>

<h3>5. Credit default swaps</h3>
<ul>
  <li>The <b>protection buyer</b> pays a periodic premium and receives a payment after a <b>credit event</b> (bankruptcy, failure to pay, restructuring in some markets): economically <b>short</b> credit risk. The protection seller is long credit risk.</li>
  <li>Standard contracts pay a fixed coupon (e.g. 1% investment grade, 5% high yield); the difference from the market spread is settled <b>upfront</b>.</li>
  <li>Settlement: <b>physical</b> (deliver the bond for par) or <b>cash</b> (pay par − recovery, with recovery set by auction). The cheapest-to-deliver obligation sets the payout.</li>
  <li><b>Index CDS</b> (e.g. CDX, iTraxx): equally weighted names; a default removes that name and reduces the notional.</li>
</ul>
<div class="formula">Upfront (% of notional) ≈ (CDS spread − fixed coupon) × duration · Price per 100 = 100 − upfront % · Change in value ≈ Δspread × duration × notional</div>
<ul>
  <li>Uses: hedge or take a view on credit (naked CDS); <b>long/short trade</b> (buy protection on one name, sell on another); <b>curve trade</b> (expect steepening → buy long-dated protection, sell short-dated); <b>basis trade</b> (CDS spread vs bond spread mismatch); index vs constituents.</li>
</ul>
<div class="how"><b>How it's tested:</b> forward rates and bond prices from spot curves; backward induction in a 2–3 period tree (often with a call or put); option values, OAS logic and effective duration/convexity; convertible metrics; CVA tables; CDS upfront payments and value changes; matching statements to term structure theories or models.</div>
<div class="key"><b>Carry forward to Level III</b>: yield curve strategies (riding the curve, barbells/bullets, key rate positioning), credit strategies (spread duration, CDS), and liability-driven investing all build on these tools.</div>
<div class="trap"><b>Traps:</b> in trees, apply the call (min) or put (max) <b>at each node</b> where exercisable. Higher volatility <b>lowers</b> a callable bond's value. The CDS protection <b>buyer</b> gains when spreads <b>widen</b>.</div>
`;

window.QB_SETS.l2fi = [
  {
    title: "Seaview Pension: spot and forward rates",
    case: `<p>Fixed-income analyst Carla Brandt is reviewing government bond prices for Seaview Pension.</p>
<p><b>Exhibit 1. Annual-compounding government spot rates</b></p>
<table><tr><th>Maturity</th><th>Spot rate</th></tr><tr><td>1 year</td><td>3.00%</td></tr><tr><td>2 years</td><td>3.50%</td></tr><tr><td>3 years</td><td>3.80%</td></tr></table>
<p>Brandt is considering a 3-year, 5% annual-coupon government bond (par 100).</p>
<p>Her colleague Hugo Lenz believes the pure expectations theory holds. Brandt instead believes investors demand a premium for holding longer maturities.</p>`,
    qs: [
      ["The 1-year forward rate two years from now, f(2,1), is closest to:",
        ["4.40%", "4.00%", "4.20%"],
        "f(2,1) = 1.038³/1.035² − 1 = 1.118387/1.071225 − 1 = 4.40%. (4.00% is f(1,1); 4.20% is f(1,2).)", "c"],
      ["The arbitrage-free price of the 5% bond is closest to:",
        ["103.41", "103.36", "100.00"],
        "5/1.03 + 5/1.035² + 105/1.038³ = 4.854 + 4.668 + 93.885 = 103.41.", "c"],
      ["Under Lenz's view, the expected 1-year rate one year from now is closest to:",
        ["4.00%", "3.50%", "3.00%"],
        "Under the pure expectations theory, forward rates equal expected future spot rates: f(1,1) = 1.035²/1.03 − 1 = 4.00%.", "c"],
      ["Under Brandt's view, the expected 1-year rate one year from now is most likely:",
        ["Below 4.00%", "Equal to 4.00%", "Above 4.00%"],
        "Brandt holds the liquidity preference theory: forward rates include a liquidity premium, so they're upward-biased estimates of expected spot rates.", "s"]
    ]
  },
  {
    title: "Ridgeway Capital: valuing a callable bond",
    case: `<p>Ridgeway Capital's analyst Omar Farouk values a 3-year, 4% annual-coupon bond (par 100) issued by a government agency, using the interest rate tree in Exhibit 1 (interest rate volatility 12%). Each branch has a 50% probability.</p>
<p><b>Exhibit 1. One-year forward rates</b></p>
<table><tr><th>Year 0</th><th>Year 1</th><th>Year 2</th></tr><tr><td>2.5000%</td><td>3.8138% (up)</td><td>4.8482% (up-up)</td></tr><tr><td></td><td>3.0000% (down)</td><td>3.8138% (up-down)</td></tr><tr><td></td><td></td><td>3.0000% (down-down)</td></tr></table>
<p>Farouk values the bond both as option-free and as callable at par (100) at the end of years 1 and 2.</p>`,
    qs: [
      ["The value of the option-free bond is closest to:",
        ["102.15", "101.36", "103.06"],
        "Year 2 values: 104/1.048482 = 99.19; 104/1.038138 = 100.18; 104/1.03 = 100.97. Year 1: up = (½(103.19) + ½(104.18))/1.038138 = 99.88; down = (½(104.18) + ½(104.97))/1.03 = 101.53. Year 0: (½(103.88) + ½(105.53))/1.025 = 102.15.", "c"],
      ["The value of the callable bond is closest to:",
        ["101.36", "102.15", "100.00"],
        "Cap node values at 100: year 2: 99.19, 100, 100. Year 1 up: (½(103.19) + ½(104))/1.038138 = 99.79; down: 104/1.03 = 100.97 → called, 100. Year 0: (½(103.79) + ½(104))/1.025 = 101.36.", "c"],
      ["The value of the embedded call option is closest to:",
        ["0.79", "1.36", "2.15"],
        "Call value = straight − callable = 102.15 − 101.36 = 0.79.", "c"],
      ["If interest rate volatility rises above 12%, the callable bond's value will most likely:",
        ["Fall", "Rise", "Stay unchanged"],
        "Higher volatility increases the value of the call option held by the issuer, so the callable bond (straight − call) is worth less.", "s"]
    ]
  },
  {
    title: "Dunmore Fund: interest rate risk and a convertible",
    case: `<p>Portfolio manager Ines Kovacs reviews two holdings.</p>
<p><b>Bond A</b> is a callable corporate bond priced at 101.25. Using a calibrated tree and the bond's OAS, her analyst estimates its value at 102.75 if the benchmark curve shifts down 25 bp and 99.70 if it shifts up 25 bp.</p>
<p><b>Bond B</b> is a convertible bond.</p>
<p><b>Exhibit 1. Bond B</b></p>
<table><tr><th>Item</th><th>Value</th></tr><tr><td>Par value</td><td>1,000</td></tr><tr><td>Conversion ratio</td><td>25 shares</td></tr><tr><td>Convertible bond price</td><td>1,020</td></tr><tr><td>Straight value (as a non-convertible bond)</td><td>940</td></tr><tr><td>Current share price</td><td>34.00</td></tr></table>`,
    qs: [
      ["Bond A's effective duration is closest to:",
        ["6.0", "12.0", "3.0"],
        "(102.75 − 99.70)/(2 × 0.0025 × 101.25) = 3.05/0.50625 = 6.02.", "c"],
      ["Bond A's effective convexity is negative. This most likely means that:",
        ["Gains from falling rates are smaller than losses from rising rates", "The bond's price rises more when rates fall than it falls when they rise", "The call option is worthless at current rates"],
        "Effective convexity = (102.75 + 99.70 − 2 × 101.25)/(0.0025² × 101.25) ≈ −79: negative convexity from the call, so upside is compressed relative to downside.", "c"],
      ["Bond B's market conversion premium ratio is closest to:",
        ["20.0%", "8.5%", "17.6%"],
        "Market conversion price = 1,020/25 = 40.80; premium per share = 40.80 − 34.00 = 6.80; ratio = 6.80/34.00 = 20.0%. (8.5% is the premium over straight value.)", "c"],
      ["The minimum value of Bond B is closest to:",
        ["940, its straight value", "850, its conversion value", "1,000, its par value"],
        "Minimum value = max(straight value, conversion value) = max(940, 25 × 34 = 850) = 940.", "c"]
    ]
  },
  {
    title: "Arbor Credit Partners: credit valuation adjustment",
    case: `<p>Credit analyst Sven Holm values a 3-year zero-coupon corporate bond (face value 100). The government yield curve is flat at 3.00% (annual compounding). Holm assumes a constant annual hazard rate of 2.00% and a recovery rate of 40%, with defaults occurring only at year-end.</p>
<p><b>Exhibit 1. Partial CVA table</b></p>
<table><tr><th>Year</th><th>Exposure</th><th>POD</th><th>Expected loss</th><th>Discount factor</th><th>PV of expected loss</th></tr><tr><td>1</td><td>94.2596</td><td>2.0000%</td><td>1.1311</td><td>0.970874</td><td>1.0982</td></tr><tr><td>2</td><td>97.0874</td><td>1.9600%</td><td>1.1417</td><td>0.942596</td><td>1.0762</td></tr><tr><td>3</td><td>100.0000</td><td>?</td><td>?</td><td>0.915142</td><td>?</td></tr></table>
<p>Holm's colleague Rita Nunes prefers a model that treats the company's equity as a call option on its assets.</p>`,
    qs: [
      ["The bond's credit valuation adjustment is closest to:",
        ["3.23", "2.17", "3.60"],
        "Year 3 POD = 0.98 × 0.98 × 2% = 1.9208%; expected loss = 100 × 60% × 1.9208% = 1.1525; PV = 1.0547. CVA = 1.0982 + 1.0762 + 1.0547 = 3.23.", "c"],
      ["The bond's fair value is closest to:",
        ["88.29", "91.51", "94.74"],
        "Risk-free value = 100/1.03³ = 91.51. Fair value = 91.51 − 3.23 = 88.29.", "c"],
      ["The bond's credit spread over the government curve is closest to:",
        ["1.24%", "2.00%", "0.80%"],
        "YTM = (100/88.29)^(1/3) − 1 = 4.24%; spread = 4.24% − 3.00% = 1.24%, close to POD × LGD = 2% × 60% = 1.2%.", "c"],
      ["Compared with Holm's approach, Nunes's model most likely:",
        ["Requires unobservable asset values and volatility", "Uses only observable market variables as its inputs", "Treats default as an exogenous random event"],
        "Nunes describes a structural model. Its weakness is that the company's asset value and volatility aren't directly observable. Reduced-form models (like Holm's hazard rate approach) use observable variables and treat default as exogenous.", "s"]
    ]
  },
  {
    title: "Talbot Advisers: CDS positions",
    case: `<p>Talbot Advisers' credit manager, Maya Lindgren, buys 5-year protection on Orion Corp. with a notional of $20 million. The standard fixed coupon is 1.00%, and the current CDS spread is 2.50%. The CDS's effective duration is 4.3.</p>
<p>Some weeks later, Orion's CDS spread narrows to 2.00% (duration unchanged).</p>
<p>Lindgren also analyzes what would happen if Orion suffered a credit event, with an expected recovery rate of 35%.</p>
<p>For another issuer, Vega Ltd., Lindgren expects the CDS curve to steepen sharply as near-term risks fade but long-term risks rise.</p>`,
    qs: [
      ["At inception of the Orion contract, the upfront payment is closest to:",
        ["$1.29 million, paid by Lindgren", "$1.29 million, received by Lindgren", "$0.86 million, paid by Lindgren"],
        "Upfront ≈ (2.50% − 1.00%) × 4.3 = 6.45% of notional = $1.29 million. Because the spread exceeds the coupon, the protection buyer pays.", "c"],
      ["After the spread narrows, Lindgren's position has most likely:",
        ["Lost about $430,000", "Gained about $430,000", "Lost about $860,000"],
        "Change ≈ Δspread × duration × notional = −0.50% × 4.3 × 20m = −$430,000. A protection buyer loses when spreads narrow.", "c"],
      ["If Orion has a credit event, Lindgren's payout is closest to:",
        ["$13.0 million", "$7.0 million", "$20.0 million"],
        "Payout = notional × (1 − recovery) = 20m × 0.65 = $13.0 million.", "c"],
      ["To profit from her view on Vega's CDS curve, Lindgren should:",
        ["Buy long-dated and sell short-dated protection", "Sell long-dated and buy short-dated protection", "Buy protection at both maturities"],
        "Steepening means long-dated spreads rise relative to short-dated ones. Buying long-dated protection gains when its spread widens; selling short-dated protection gains as that spread narrows.", "s"]
    ]
  },
  {
    title: "Blackfriars Bond Fund: curve and model choices",
    case: `<p>Analyst Theo Marsh is reviewing positioning for the Blackfriars Bond Fund.</p>
<p><b>Exhibit 1. Five-year rates</b></p>
<table><tr><th>Instrument</th><th>Yield</th></tr><tr><td>5-year government bond</td><td>3.60%</td></tr><tr><td>5-year swap rate</td><td>3.85%</td></tr><tr><td>5-year corporate bond (Fund holding)</td><td>5.10%</td></tr></table>
<p><b>Exhibit 2. Portfolio key rate durations</b></p>
<table><tr><th>Key rate</th><th>2-year</th><th>5-year</th><th>10-year</th></tr><tr><td>KRD</td><td>0.8</td><td>2.1</td><td>3.3</td></tr></table>
<p>Marsh notes that life insurers dominate demand for long bonds but will buy intermediate maturities when long yields fall far enough below them.</p>
<p>He is choosing an equilibrium interest rate model and wants one in which rates can't become negative and volatility rises with the level of rates.</p>`,
    qs: [
      ["The corporate bond's I-spread is closest to:",
        ["125 bp", "150 bp", "25 bp"],
        "I-spread = bond yield − swap rate of the same maturity = 5.10% − 3.85% = 125 bp. (150 bp is the spread over government; 25 bp is the swap spread.)", "c"],
      ["If only the 10-year rate rises by 20 bp, the portfolio's value will change by approximately:",
        ["−0.66%", "−1.24%", "−0.20%"],
        "%ΔP ≈ −KRD_10 × Δr = −3.3 × 0.20% = −0.66%. The other key rates don't move.", "c"],
      ["Marsh's note about life insurers is most consistent with:",
        ["The preferred habitat theory", "The segmented markets theory", "The local expectations theory"],
        "Investors prefer a maturity (long bonds) but will move to other maturities if compensated: preferred habitat. Under pure segmentation they wouldn't move at all.", "s"],
      ["The model that meets Marsh's requirements is:",
        ["The Cox–Ingersoll–Ross model", "The Vasicek mean-reverting model", "The Ho–Lee arbitrage-free model"],
        "CIR's volatility term is σ√r, so volatility rises with rates and rates can't go negative. Vasicek has constant volatility and allows negative rates; Ho–Lee is an arbitrage-free (not equilibrium) model.", "r"]
    ]
  }
];

window.GLOSSARY.push(
  ["Forward rate from spots", "(1 + S_{A+B})^{A+B} = (1 + S_A)^A (1 + f(A,B))^B.", "l2fi"],
  ["Riding the yield curve", "Buy bonds longer than the horizon on an upward-sloping, stable curve; gain as they roll down.", "l2fi"],
  ["I-spread / Z-spread / swap spread", "I: yield − swap rate. Z: constant spread over government spot curve. Swap spread: swap rate − government yield.", "l2fi"],
  ["Liquidity preference theory", "Forward rates = expected spot rates + liquidity premium (upward-biased forecasts).", "l2fi"],
  ["Preferred habitat theory", "Investors prefer certain maturities but shift for a sufficient premium.", "l2fi"],
  ["Lognormal binomial tree", "Adjacent rates differ by e^{2σ}; calibrated to benchmark prices; value by backward induction.", "l2fi"],
  ["CIR vs Vasicek", "Both mean-reverting equilibrium models. CIR: vol ∝ √r, no negative rates. Vasicek: constant vol, negative rates possible.", "l2fi"],
  ["Option-adjusted spread", "Constant spread over the tree that equates value and price; OAS = Z-spread − option cost.", "l2fi"],
  ["Effective duration / convexity", "(PV₋ − PV₊)/(2ΔCurve PV₀); (PV₋ + PV₊ − 2PV₀)/(ΔCurve² PV₀).", "l2fi"],
  ["Market conversion premium ratio", "(Convertible price/conversion ratio − share price)/share price.", "l2fi"],
  ["Credit valuation adjustment (CVA)", "Sum of PVs of expected losses; fair value = risk-free value − CVA.", "l2fi"],
  ["Structural credit model", "Equity = call on assets; debt = riskless debt − put. Needs unobservable asset value and volatility.", "l2fi"],
  ["Reduced-form credit model", "Default as exogenous hazard process linked to observables; doesn't explain why default occurs.", "l2fi"],
  ["CDS upfront payment", "≈ (CDS spread − fixed coupon) × duration × notional; paid by the buyer if spread > coupon.", "l2fi"],
  ["CDS curve trade", "Expect steepening: buy long-dated protection, sell short-dated.", "l2fi"]
);
