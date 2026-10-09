// CFA Level I · Fixed Income: study notes, practice questions and flashcards.
window.NOTES = window.NOTES || {};
window.QB_HARD = window.QB_HARD || {};
window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1fi = `
<p class="syl">CFA Level I · Fixed Income · 11–14% of the exam · 19 learning modules: instrument features; cash flows and types; issuance and trading; corporate and government markets; valuation (prices and yields); yield and spread measures (fixed and floating); term structure; interest rate risk and return; duration; convexity; curve-based and empirical risk measures; credit risk; credit analysis (government and corporate); securitization; ABS; MBS</p>

<h3>1. Instrument features</h3>
<ul>
  <li><b>Basic features</b>: issuer, maturity (tenor), par (principal), coupon rate and frequency, currency, <b>seniority</b> (secured vs unsecured, senior vs subordinated) and contingency provisions.</li>
  <li><b>Indenture</b> (bond contract) and <b>covenants</b>: <b>affirmative</b> (what the issuer must do: pay on time, maintain assets, comply with laws) and <b>negative</b> (what it can't do: take on extra debt, <b>negative pledge</b>, sell assets, pay large distributions).</li>
  <li><b>Legal and tax</b>: domestic, foreign (issued in another country's market and currency), <b>Eurobonds</b> (outside any single jurisdiction, usually bearer), global bonds. Original issue discount may be taxed as interest.</li>
  <li><b>Credit enhancements</b>: <b>internal</b> (subordination/tranching, <b>overcollateralization</b>, reserve accounts, excess spread) and <b>external</b> (surety bonds, bank guarantees, <b>letters of credit</b>; expose investors to third-party risk).</li>
</ul>

<h3>2. Cash flows and types</h3>
<ul>
  <li><b>Principal repayment</b>: bullet, fully amortizing, partially amortizing (balloon). <b>Sinking funds</b> retire part of the issue over time: less credit risk, but reinvestment risk for investors if bonds are called at par when rates fall.</li>
  <li><b>Coupon structures</b>: fixed; <b>floating-rate notes</b> (MRR + quoted margin, possibly with caps/floors); step-up; credit-linked; payment-in-kind (PIK: interest paid in more bonds); deferred coupon; zero-coupon (issued at a discount).</li>
  <li><b>Inflation-linked bonds</b>: interest-indexed (coupon adjusts) or <b>capital-indexed</b> (principal adjusts for inflation, fixed coupon rate applied to adjusted principal, e.g. TIPS).</li>
  <li><b>Contingency provisions</b>: <b>callable</b> (issuer's option → higher yield; call protection period; make-whole calls), <b>putable</b> (investor's option → lower yield), <b>convertible</b> (into shares: conversion price = par ÷ conversion ratio; conversion value = ratio × share price), <b>contingent convertibles</b> (CoCos convert to equity when bank capital falls below a trigger), warrants.</li>
</ul>
<div class="ex"><b>Example:</b> A $1,000 convertible with a conversion ratio of 25 has a conversion price of $40. If the stock trades at $45, conversion value = 25 × 45 = $1,125.</div>

<h3>3. Issuance and trading</h3>
<ul>
  <li><b>Primary markets</b>: public offerings (underwritten or best efforts), <b>auctions</b> (common for governments), shelf registration, private placements.</li>
  <li><b>Secondary markets</b>: mostly <b>OTC dealer markets</b>; liquidity measured by bid-ask spread. Settlement typically T+1 to T+3 (government bills may settle same day).</li>
  <li><b>Classification</b>: by issuer (government, corporate, securitized), credit (investment grade = <b>BBB−/Baa3 and above</b>; high yield below), maturity (money market ≤ 1 year vs capital market), currency, geography, indexes.</li>
</ul>

<h3>4. Corporate issuers' markets</h3>
<ul>
  <li><b>Short-term funding</b>: bank loans (bilateral, <b>syndicated</b>), <b>commercial paper</b> (unsecured, short-term; issuers keep <b>backup lines of credit</b> for <b>rollover risk</b>; US CP mostly under 270 days to avoid SEC registration), and for banks: deposits, interbank and central bank funding.</li>
  <li><b>Repurchase agreements (repos)</b>: sell a security and agree to buy it back at a higher price; effectively a collateralized loan. The <b>repo rate</b> is the interest; the <b>haircut</b> (repo margin) = collateral value − loan amount. Repo rates are lower for higher-quality collateral, shorter terms, delivery to the lender, and collateral in high demand ("specials"); higher when other money market rates are higher.</li>
  <li><b>Long-term</b>: corporate bonds (secured or unsecured), medium-term notes (MTNs, sold continuously across maturities).</li>
</ul>

<h3>5. Government issuers' markets</h3>
<ul>
  <li><b>Sovereign</b> bills, notes and bonds, usually sold by auction. <b>Single-price (Dutch) auction</b>: all winning bidders get the <b>same (highest accepted) yield</b>; multiple-price: winners pay what they bid.</li>
  <li><b>On-the-run</b>: the most recently issued (most liquid) security at each maturity; older ones are off-the-run.</li>
  <li><b>Non-sovereign</b> (state/provincial, local): <b>general obligation</b> bonds (backed by taxing power) vs <b>revenue bonds</b> (backed by the specific project's revenue). Agencies (quasi-government) and supranationals (World Bank).</li>
</ul>

<h3>6. Bond valuation: prices and yields</h3>
<div class="formula">Price = Σ PMT ÷ (1 + r)^t + FV ÷ (1 + r)^N (r per period)</div>
<ul>
  <li>Price and yield move <b>inversely</b>; coupon &gt; yield → premium, coupon &lt; yield → discount.</li>
  <li><b>Convexity effect</b>: for the same yield change, the price rise when yields fall exceeds the fall when yields rise.</li>
  <li>Longer maturity and lower coupon → more price sensitivity (generally).</li>
  <li><b>Accrued interest</b> = (t ÷ T) × coupon. <b>Full (dirty) price</b> = flat (clean, quoted) price + accrued interest = PV at the settlement date. Day counts: actual/actual (government), 30/360 (corporate).</li>
  <li><b>Matrix pricing</b>: price illiquid bonds using yields of comparable bonds (interpolating for maturity, adjusting for credit).</li>
  <li><b>Spot rates</b>: discount each cash flow at its own zero rate. This is arbitrage-free pricing.</li>
</ul>
<div class="ex"><b>Example:</b> 3-year, 5% annual coupon, YTM 6%: 5/1.06 + 5/1.06² + 105/1.06³ = 97.33. Accrued interest example: 6% semiannual coupon (3.00 per period), 60 of 180 days elapsed: AI = 1.00; flat price 98.50 → full price 99.50.</div>

<h3>7. Yield and spread measures for fixed-rate bonds</h3>
<ul>
  <li><b>Yield to maturity</b> (IRR): assumes the bond is held to maturity, no default, and coupons reinvested at the YTM.</li>
  <li><b>Periodicity conversion</b>: (1 + APR_m/m)^m = (1 + APR_n/n)^n. Street convention vs true yield (actual payment dates).</li>
  <li><b>Current yield</b> = annual coupon ÷ flat price. <b>Yield-to-call</b>, <b>yield-to-worst</b> (lowest of YTM and yields to each call date).</li>
</ul>
<table>
  <tr><th>Spread</th><th>Over</th></tr>
  <tr><td><b>G-spread</b></td><td>Government bond yield of the same maturity (actual or interpolated)</td></tr>
  <tr><td><b>I-spread</b></td><td>Swap rate of the same maturity</td></tr>
  <tr><td><b>Z-spread</b> (zero-volatility)</td><td>Constant spread added to every point on the government <b>spot curve</b> that equates PV to price</td></tr>
  <tr><td><b>OAS</b></td><td>Z-spread minus the value of embedded options. Callable: OAS &lt; Z-spread; putable: OAS &gt; Z-spread</td></tr>
</table>
<div class="formula">Semiannual 6% (bond basis) → annual equivalent: 1.03² − 1 = 6.09%</div>

<h3>8. Yields for floating-rate notes and money market instruments</h3>
<ul>
  <li><b>FRN</b> coupon = market reference rate (MRR, e.g. SOFR) + <b>quoted margin</b>. The <b>discount margin</b> (required margin) is the spread that prices the FRN. Quoted margin &gt; required margin → FRN at a <b>premium</b>; less → discount; equal → par on reset dates.</li>
  <li>Money market yields: <b>discount rate basis</b> (T-bills, commercial paper in the US): PV = FV × (1 − Days/Year × DR); <b>add-on basis</b> (CDs, repos, MRR): PV = FV ÷ (1 + Days/Year × AOR). Convert to a common basis (e.g. bond-equivalent yield, 365-day add-on) to compare.</li>
</ul>
<div class="ex"><b>Example:</b> 180-day bill, 4% discount rate, 360-day year: PV = 100 × (1 − 180/360 × 0.04) = 98.00.</div>

<h3>9. The term structure: spot, par and forward curves</h3>
<ul>
  <li><b>Spot curve</b>: zero-coupon yields by maturity. <b>Par curve</b>: coupon rates that would price each bond at par (derived from spot rates). <b>Forward curve</b>: implied future one-period rates.</li>
  <li>Forward rates from spot rates (no-arbitrage): (1 + z2)² = (1 + z1)(1 + 1y1y). When the spot curve slopes upward, forward rates lie above spot rates.</li>
  <li>Yield curve shapes: normal (upward), flat, inverted, humped.</li>
</ul>
<div class="ex"><b>Example:</b> 1-year spot 3%, 2-year spot 4%: 1y1y = 1.04² ÷ 1.03 − 1 = 5.01%. A 2-year 5% annual bond is worth 5/1.03 + 105/1.04² = 101.93.</div>

<h3>10. Interest rate risk and return</h3>
<p>Return sources: <b>coupon interest</b>, <b>reinvestment income</b> on coupons, and <b>capital gain/loss</b> on sale. If rates rise: reinvestment income rises (good for long horizons) but the sale price falls (bad for short horizons).</p>
<ul>
  <li>When the <b>investment horizon = Macaulay duration</b>, the two effects offset for a one-time parallel shift (immunization).</li>
  <li><b>Duration gap</b> = Macaulay duration − investment horizon. <b>Positive gap</b> → price (market) risk dominates; investor is hurt by rising rates. <b>Negative gap</b> → reinvestment risk dominates; hurt by falling rates.</li>
  <li>A bond's yield also reflects credit and liquidity components (spreads), which can move separately from benchmark rates.</li>
</ul>

<h3>11. Yield-based duration</h3>
<table>
  <tr><th>Measure</th><th>Definition / formula</th></tr>
  <tr><td><b>Macaulay duration</b></td><td>Weighted-average time to receive cash flows (weights = PV share). Zero-coupon: = maturity. Perpetuity: (1 + r)/r</td></tr>
  <tr><td><b>Modified duration</b></td><td>MacDur ÷ (1 + r per period). %ΔPrice ≈ −ModDur × ΔYield</td></tr>
  <tr><td><b>Approximate ModDur</b></td><td>(PV− − PV+) ÷ (2 × ΔYield × PV0)</td></tr>
  <tr><td><b>Money duration</b></td><td>ModDur × full price (currency change per 100% yield change)</td></tr>
  <tr><td><b>PVBP / BPV</b></td><td>Price change per 1 bp = (PV− − PV+) ÷ 2, or money duration × 0.0001</td></tr>
</table>
<p><b>Properties</b>: duration rises with maturity (usually), falls with a higher coupon and with a higher yield. Portfolio duration ≈ market-value-weighted average of the bonds' durations (assumes parallel shifts).</p>
<div class="ex"><b>Example:</b> PV0 = 100, PV− = 104.20 and PV+ = 96.00 for ±50 bp: ApproxModDur = (104.20 − 96.00) ÷ (2 × 0.005 × 100) = 8.2. MacDur 7.2 at 6% annual yield → ModDur = 7.2 ÷ 1.06 = 6.79.</div>

<h3>12. Yield-based convexity and portfolio properties</h3>
<div class="formula">%ΔPrice ≈ −AnnModDur × ΔYield + ½ × AnnConvexity × (ΔYield)²</div>
<div class="formula">Approx convexity = (PV− + PV+ − 2 × PV0) ÷ [(ΔYield)² × PV0]</div>
<div class="ex"><b>Example:</b> ModDur 6.5, convexity 60, yields +100 bp: −6.5% + ½ × 60 × 0.0001 = −6.20%. With the PV figures above: (104.20 + 96.00 − 200) ÷ (0.005² × 100) = 80.</div>
<p>Positive convexity is valuable: it raises gains and cushions losses. Convexity rises with maturity, lower coupons and lower yields, and with greater dispersion of cash flows.</p>

<h3>13. Curve-based and empirical risk measures</h3>
<ul>
  <li><b>Effective duration</b> = (PV− − PV+) ÷ (2 × ΔCurve × PV0), shifting the benchmark curve. Needed for bonds with <b>embedded options</b> and MBS, whose cash flows change with rates.</li>
  <li><b>Callable bonds</b>: when yields fall and the call is in the money, price compresses toward the call price: lower effective duration and <b>negative convexity</b>. <b>Putable</b> bonds: lower duration when yields rise; more positive convexity.</li>
  <li><b>Key rate durations</b>: sensitivity to shifts at specific maturities (non-parallel moves). Their sum = effective duration.</li>
  <li><b>Empirical duration</b>: estimated from historical price data. For high-yield bonds it's often <b>lower</b> than analytical duration, because credit spreads tend to <b>narrow</b> when government yields rise (and widen in flights to quality).</li>
</ul>

<h3>14. Credit risk</h3>
<div class="formula">Expected loss = Probability of default (POD) × Loss given default (LGD) · LGD = Exposure × (1 − Recovery rate)</div>
<ul>
  <li>Risks: <b>default risk</b>, <b>credit spread risk</b> (spreads widen), <b>downgrade risk</b>, market <b>liquidity risk</b>.</li>
  <li><b>Ratings</b>: AAA/Aaa down to D; investment grade BBB−/Baa3 and above. <b>Notching</b>: lower ratings for subordinated issues. Risks of relying on ratings: they're dynamic, agencies make mistakes, event risk (e.g. LBOs) is hard to capture, and ratings <b>lag market spreads</b>.</li>
  <li><b>Spread change price impact</b>: %ΔPrice ≈ −ModDur × ΔSpread + ½ Convexity × ΔSpread².</li>
  <li><b>Priority of claims</b>: first lien/senior secured → second lien → senior unsecured → senior subordinated → subordinated → junior subordinated. Same rank = <b>pari passu</b>. The absolute priority rule is often not followed exactly in practice (negotiated outcomes).</li>
  <li>Assessing ability and willingness to pay: capacity, capital, collateral, covenants and character.</li>
</ul>
<div class="ex"><b>Example:</b> POD 2%, recovery 40% → expected loss = 2% × 60% = 1.2% of exposure. ModDur 6 and spread +50 bp → price ≈ −3.0%.</div>

<h3>15. Credit analysis for government issuers</h3>
<ul>
  <li><b>Sovereign</b> factors: institutional (effectiveness, rule of law, willingness to pay), economic (growth, income per capita), <b>external</b> (reserve currency status, external debt, current account), fiscal (debt/GDP, deficits), monetary flexibility (independent central bank, exchange rate regime).</li>
  <li><b>Local currency</b> debt usually rates higher than foreign currency debt, because a sovereign can tax and print its own currency.</li>
  <li><b>Non-sovereign</b>: GO bonds depend on the tax base and economy; <b>revenue bonds</b> on the project's revenue (debt service coverage ratio).</li>
</ul>

<h3>16. Credit analysis for corporate issuers</h3>
<ul>
  <li><b>Qualitative</b>: business model, industry structure and competitive position, management and governance, ESG risks.</li>
  <li><b>Quantitative</b>: profitability (EBITDA margin), <b>leverage</b> (debt/EBITDA, FFO/debt, debt/capital), <b>coverage</b> (EBITDA/interest, EBIT/interest), liquidity. Lower leverage and higher coverage → stronger credit.</li>
  <li><b>Structural subordination</b>: holding company debt ranks behind creditors of the operating subsidiaries, which are paid from subsidiary cash flows first.</li>
</ul>

<h3>17. Fixed-income securitization</h3>
<ul>
  <li><b>Benefits</b>: lower funding costs, more liquidity, frees banks' capital to make more loans, transfers risk, creates investable assets matching investors' needs.</li>
  <li><b>Parties</b>: originator/seller (depositor), <b>special purpose entity (SPE/SPV)</b>, which buys the assets in a "true sale" and is <b>bankruptcy-remote</b> from the originator; servicer; trustee; investors.</li>
  <li><b>Tranching</b>: <b>credit tranching</b> (senior, mezzanine, subordinated/equity; losses hit the lowest first) and <b>time tranching</b> (sequential-pay, PAC/support), with a cash flow <b>waterfall</b>.</li>
  <li><b>Covered bonds</b>: issued by banks, backed by a segregated cover pool that stays <b>on the bank's balance sheet</b>; investors have <b>dual recourse</b> (to the pool and the bank); the pool is <b>dynamic</b> (non-performing assets must be replaced).</li>
</ul>

<h3>18. ABS features</h3>
<ul>
  <li><b>Auto loan ABS</b>: amortizing loans, prepayments; credit enhancements such as overcollateralization and reserve accounts.</li>
  <li><b>Credit card ABS</b>: non-amortizing receivables. During the <b>lockout (revolving) period</b>, principal collections buy new receivables rather than being paid to investors; <b>early amortization</b> triggers end it if performance deteriorates.</li>
  <li><b>CDOs / CLOs</b>: tranches backed by a pool of debt (leveraged loans for CLOs), managed by a collateral manager who aims to earn more on the collateral than the tranches cost.</li>
  <li>Other: student loans, equipment, solar, esoteric ABS.</li>
</ul>

<h3>19. MBS features</h3>
<ul>
  <li><b>Residential mortgages</b>: fixed or adjustable rate, interest-only, balloon; recourse vs non-recourse; LTV and debt-to-income ratios.</li>
  <li><b>Prepayment risk</b>: <b>contraction risk</b> (rates fall → faster prepayments, reinvest at lower rates) and <b>extension risk</b> (rates rise → slower prepayments, longer life).</li>
  <li><b>Measures</b>: single monthly mortality (SMM), conditional prepayment rate <b>CPR = 1 − (1 − SMM)^12</b>; the <b>PSA</b> benchmark: 100 PSA = CPR rising 0.2% a month to <b>6%</b> at month 30, then constant. Weighted average life summarizes timing.</li>
  <li><b>Agency</b> RMBS (guaranteed by GSEs/government) vs <b>non-agency</b> (need credit enhancement). Pass-through rate &lt; mortgage rate (servicing and guarantee fees).</li>
  <li><b>CMOs</b> redistribute prepayment risk: <b>sequential-pay</b> (first tranche gets all principal until retired: shortest life), <b>PAC</b> tranches (stable schedule within a prepayment band) with <b>support tranches</b> absorbing the variability (more contraction and extension risk), floaters and inverse floaters.</li>
  <li><b>CMBS</b>: non-recourse commercial loans; key ratios <b>DSCR</b> (NOI ÷ debt service) and <b>LTV</b>. <b>Call protection</b>: at the <b>loan level</b> (prepayment lockouts, defeasance, prepayment penalty points, yield maintenance) and structure level (sequential tranching). <b>Balloon risk</b> (can't refinance at maturity) creates <b>extension risk</b>.</li>
</ul>
<div class="ex"><b>Example:</b> SMM 0.5% → CPR = 1 − 0.995^12 = 5.84%.</div>
<div class="how"><b>How it's tested:</b> pricing (YTM, spot rates, full vs flat price, money market), forward rates, duration/convexity calculations and properties, duration gap, spread definitions, expected loss, priority of claims, securitization structures and MBS prepayment risks.</div>
<div class="key"><b>Carry forward to Level III</b>: duration gap and immunization (liability-driven investing), key rate durations (yield curve strategies), spreads and expected loss (credit strategies), MBS convexity.</div>
<div class="trap"><b>Trap:</b> for a callable bond, OAS is <b>below</b> the Z-spread: part of the extra yield is just compensation for the call option the investor sold.</div>
`;

window.QB_HARD.l1fi = [
  ["A 3-year bond pays a 5% annual coupon. If its yield to maturity is 6%, its price per 100 of par is closest to:",
    ["97.33", "102.78", "100.00"],
    "PV = 5/1.06 + 5/1.06² + 105/1.06³ = 4.717 + 4.450 + 88.160 = 97.33. Coupon below yield means a discount price.", "c"],
  ["A bond pays a 6% annual coupon semiannually (3.00 per 100 every six months). Using 30/360, 60 days have passed in the 180-day coupon period, and the flat price is 98.50. The full price is closest to:",
    ["99.50", "98.50", "101.50"],
    "Accrued interest = 60/180 × 3.00 = 1.00. Full price = flat price + accrued interest = 98.50 + 1.00 = 99.50.", "c"],
  ["A bond with a 5% annual coupon trades at a flat price of 95. Its current yield is closest to:",
    ["5.26%", "5.00%", "4.75%"],
    "Current yield = annual coupon ÷ flat price = 5 ÷ 95 = 5.26%.", "c"],
  ["A bond has a yield to maturity of 6.00% quoted on a semiannual bond basis. The equivalent annual-pay yield is closest to:",
    ["6.09%", "6.00%", "5.91%"],
    "(1 + 0.06/2)² − 1 = 1.0609 − 1 = 6.09%.", "c"],
  ["The 1-year spot rate is 3% and the 2-year spot rate is 4%. The implied one-year forward rate one year from now (1y1y) is closest to:",
    ["5.01%", "4.00%", "3.50%"],
    "(1.04)² = (1.03)(1 + f) → f = 1.0816 ÷ 1.03 − 1 = 5.01%. With an upward-sloping spot curve, forwards exceed spot rates.", "c"],
  ["Using spot rates of 3% (1 year) and 4% (2 years), the arbitrage-free price of a 2-year bond with a 5% annual coupon is closest to:",
    ["101.93", "101.89", "100.00"],
    "Discount each cash flow at its own spot rate: 5/1.03 + 105/1.04² = 4.854 + 97.078 = 101.93.", "c"],
  ["A 180-day T-bill has a face value of 100 and is quoted at a 4% discount rate (360-day year). Its price is closest to:",
    ["98.00", "98.04", "96.00"],
    "Discount basis: PV = FV × (1 − Days/Year × DR) = 100 × (1 − 0.5 × 0.04) = 98.00.", "c"],
  ["An FRN has a quoted margin of 1.25% over the reference rate. If the required (discount) margin for its credit risk is now 1.00%, the FRN will trade:",
    ["At a premium to par", "At a discount to par", "At par"],
    "The FRN pays a higher spread than investors now require, so its price rises above par.", "r"],
  ["A zero-coupon bond matures in 5 years. Its Macaulay duration is:",
    ["5 years", "Less than 5 years", "More than 5 years"],
    "All of a zero's value comes at maturity, so its Macaulay duration equals its maturity.", "r"],
  ["A bond has a Macaulay duration of 7.2 and an annual yield to maturity of 6%. Its modified duration is closest to:",
    ["6.79", "7.20", "7.63"],
    "ModDur = MacDur ÷ (1 + r) = 7.2 ÷ 1.06 = 6.79.", "c"],
  ["A bond's price is 100.00. If its yield falls 50 bp the price becomes 104.20; if it rises 50 bp the price becomes 96.00. Its approximate modified duration is closest to:",
    ["8.20", "4.10", "16.40"],
    "ApproxModDur = (PV− − PV+) ÷ (2 × ΔYield × PV0) = (104.20 − 96.00) ÷ (2 × 0.005 × 100) = 8.20.", "c"],
  ["Using the same prices (PV0 = 100.00, PV− = 104.20, PV+ = 96.00 for ±50 bp), the approximate convexity is closest to:",
    ["80", "40", "8"],
    "Approx convexity = (PV− + PV+ − 2PV0) ÷ [(ΔYield)² × PV0] = (104.20 + 96.00 − 200) ÷ (0.000025 × 100) = 0.20 ÷ 0.0025 = 80.", "c"],
  ["A bond has an annual modified duration of 6.5 and annual convexity of 60. If its yield rises 100 bp, the estimated percentage price change is closest to:",
    ["−6.20%", "−6.50%", "−6.80%"],
    "%ΔP ≈ −6.5 × 0.01 + ½ × 60 × 0.01² = −6.50% + 0.30% = −6.20%. Convexity cushions the loss.", "c"],
  ["A bond has a full price of 102 per 100 par and a modified duration of 5. Its price value of a basis point (per 100 par) is closest to:",
    ["0.051", "0.510", "0.005"],
    "PVBP = ModDur × full price × 0.0001 = 5 × 102 × 0.0001 = 0.051.", "c"],
  ["All else equal, which bond has the highest Macaulay duration?",
    ["20-year maturity, 2% coupon", "20-year maturity, 8% coupon", "10-year maturity, 2% coupon"],
    "Duration rises with maturity and falls as the coupon rises (more value arrives earlier). The long, low-coupon bond has the highest duration.", "r"],
  ["An investor with a 4-year horizon holds a bond with a Macaulay duration of 6 years. If yields rise right after purchase and stay higher, she is mainly exposed to:",
    ["Price risk, which outweighs the extra reinvestment income", "Reinvestment risk, which outweighs the decline in the bond's price", "Neither risk, because her duration gap is negative"],
    "Duration gap = 6 − 4 = +2 (positive): the capital loss on selling before maturity dominates the extra reinvestment income.", "r"],
  ["As yields fall and its call option moves into the money, a callable bond's effective duration:",
    ["Falls, and the bond shows negative convexity", "Rises, and the bond shows more positive convexity", "Stays equal to that of a comparable straight bond"],
    "Price compression near the call price limits upside, so effective duration falls and convexity turns negative.", "r"],
  ["The sum of a bond portfolio's key rate durations equals its:",
    ["Effective duration", "Macaulay duration", "Effective convexity"],
    "Key rate durations break down effective duration by maturity; their sum equals the effective duration for a parallel shift.", "r"],
  ["For high-yield corporate bonds, empirical duration is often lower than analytical duration because:",
    ["Credit spreads tend to narrow when government yields rise", "High-yield bonds usually have longer maturities", "Their coupons stay fixed over the whole life of the bond"],
    "Rising benchmark yields often coincide with stronger economies and narrower credit spreads, partly offsetting the effect on high-yield bond yields.", "r"],
  ["A portfolio is 60% in a bond with duration 4 and 40% in a bond with duration 9. The portfolio's duration is closest to:",
    ["6.0", "6.5", "5.0"],
    "Portfolio duration ≈ market-value-weighted average = 0.6 × 4 + 0.4 × 9 = 2.4 + 3.6 = 6.0 (assuming parallel shifts).", "c"],
  ["A bond's annual probability of default is 2% and its expected recovery rate is 40%. The expected loss as a percentage of the exposure is closest to:",
    ["1.2%", "0.8%", "2.0%"],
    "Expected loss = POD × LGD = 2% × (1 − 0.40) = 1.2%.", "c"],
  ["A corporate bond has a modified duration of 6. If its credit spread widens by 50 basis points and benchmark yields don't change, its price will change by approximately:",
    ["−3.0%", "−0.3%", "−6.0%"],
    "%ΔP ≈ −ModDur × ΔSpread = −6 × 0.005 = −3.0%.", "c"],
  ["Rating agencies typically rate an issuer's subordinated debt below its issuer rating. This practice is called:",
    ["Notching", "Pari passu ranking", "Credit enhancement"],
    "Notching adjusts issue ratings up or down from the issuer rating to reflect priority of claims and expected recovery.", "r"],
  ["Which of the following ranks highest in the priority of claims in a bankruptcy?",
    ["First lien senior secured debt", "Senior unsecured debentures", "Junior subordinated debt"],
    "Order: first lien/senior secured → second lien → senior unsecured → senior subordinated → subordinated → junior subordinated.", "r"],
  ["A limitation of relying on credit ratings is that:",
    ["Ratings tend to lag changes in market credit spreads", "Ratings never change once they are assigned", "Ratings include an equity valuation of the issuer"],
    "Ratings are updated infrequently, so market spreads often move first. Agencies can also make mistakes and struggle to anticipate event risks.", "r"],
  ["The spread of a corporate bond's yield over the actual or interpolated yield of a government bond with the same maturity is the:",
    ["G-spread", "I-spread", "Z-spread"],
    "G-spread uses government bond yields; I-spread uses swap rates; the Z-spread is a constant spread over the entire spot curve.", "r"],
  ["For a callable bond, the option-adjusted spread (OAS) is:",
    ["Lower than its Z-spread", "Higher than its Z-spread", "Equal to its Z-spread"],
    "OAS = Z-spread − option cost. For a callable bond the investor is short the call, so part of the Z-spread compensates for the option and the OAS is smaller.", "r"],
  ["Sovereign bonds issued in the government's own currency usually have higher credit ratings than its foreign-currency bonds because:",
    ["The government can tax and print its own currency", "Foreign-currency bonds have shorter maturities", "Domestic investors never sell their bonds"],
    "A sovereign controls its own currency (and can raise taxes), so local-currency default is less likely than foreign-currency default.", "r"],
  ["A municipal revenue bond is repaid primarily from:",
    ["The revenues of the project it financed", "The general taxing power of the issuer", "Transfers from the federal government"],
    "Revenue bonds rely on the project's cash flows (e.g. tolls), typically assessed with a debt service coverage ratio. General obligation bonds rely on taxes.", "r"],
  ["Which change would most likely improve a corporate issuer's credit profile?",
    ["A higher EBITDA-to-interest ratio", "A higher debt-to-EBITDA ratio", "A lower FFO-to-debt ratio"],
    "Higher coverage and lower leverage indicate stronger credit. Higher debt/EBITDA and lower FFO/debt are weaker.", "r"],
  ["Bonds issued by a holding company are structurally subordinated because:",
    ["Subsidiaries' creditors are paid from subsidiary cash flows first", "Holding company bonds are always secured by subsidiary assets", "Holding company bonds have shorter maturities than subsidiary debt"],
    "The holding company relies on dividends from subsidiaries, which are paid only after the subsidiaries' own debt is serviced.", "r"],
  ["A covenant that prohibits an issuer from pledging assets already used as collateral to secure other borrowing is:",
    ["A negative covenant", "An affirmative covenant", "An external credit enhancement"],
    "This is a negative pledge clause, a negative covenant restricting what the issuer may do. Affirmative covenants require actions (pay on time, maintain assets).", "r"],
  ["Which of the following is an internal credit enhancement?",
    ["Overcollateralization", "A bank letter of credit", "A surety bond"],
    "Internal enhancements are built into the structure (subordination, overcollateralization, reserve accounts, excess spread). Letters of credit and surety bonds are external.", "r"],
  ["Compared with an otherwise identical option-free bond, a putable bond has:",
    ["A lower yield, since the put benefits the investor", "A higher yield, since the put benefits the issuer", "The same yield, since the put is rarely exercised"],
    "The investor owns the put (right to sell back at a set price), so the bond is worth more and yields less.", "r"],
  ["A $1,000 par convertible bond has a conversion ratio of 25. If the issuer's shares trade at $45, the bond's conversion value is closest to:",
    ["$1,125", "$1,000", "$1,800"],
    "Conversion value = conversion ratio × share price = 25 × $45 = $1,125. The conversion price is $1,000 ÷ 25 = $40.", "c"],
  ["In a capital-indexed inflation-linked bond such as US TIPS, inflation adjusts:",
    ["The principal, with a fixed real coupon rate applied", "Only the coupon rate, while the principal stays fixed", "Nothing until the bond reaches maturity"],
    "Capital-indexed bonds adjust principal for inflation; the fixed real coupon rate is applied to the inflation-adjusted principal.", "r"],
  ["A sinking fund provision mainly reduces:",
    ["Credit risk, by retiring the issue gradually", "Reinvestment risk for bondholders", "The issuer's flexibility to refinance when rates fall"],
    "Gradual repayment reduces credit risk. It can add reinvestment risk for investors whose bonds are retired at par when rates are low.", "r"],
  ["In a repurchase agreement, the haircut (repo margin) is:",
    ["The collateral's value minus the amount lent", "The interest rate paid on the repo loan", "The fee paid to the custodian that holds the collateral"],
    "The lender advances less than the collateral's market value; the difference is the haircut, which protects against a fall in the collateral's value.", "r"],
  ["Commercial paper issuers typically maintain backup lines of credit mainly to manage:",
    ["Rollover risk", "Interest rate risk", "Currency risk"],
    "If the issuer can't sell new paper to repay maturing paper (e.g. in a market disruption), the backup line provides liquidity.", "r"],
  ["In a single-price (Dutch) auction for government bonds, all winning bidders:",
    ["Get the same yield: the highest accepted yield", "Pay the specific prices that each of them bid", "Receive the lowest yield that was bid"],
    "In a single-price auction, every winning bidder is allotted securities at the highest accepted yield. In a multiple-price auction, winners pay their own bids.", "r"],
  ["The most recently issued government bond of a given maturity is called:",
    ["On-the-run", "Off-the-run", "A benchmark spread"],
    "On-the-run issues are the newest and most liquid; they're used as benchmarks. Earlier issues are off-the-run.", "r"],
  ["The special purpose entity in a securitization is structured to be:",
    ["Bankruptcy-remote from the originator", "Consolidated with the originator's creditors", "Owned directly by the originator's shareholders"],
    "The SPE buys the assets in a true sale; if the originator fails, its creditors have no claim on the SPE's assets.", "r"],
  ["Unlike a typical asset-backed security, a covered bond:",
    ["Gives investors recourse to both the cover pool and the bank", "Removes the assets from the issuing bank's balance sheet", "Has a static pool whose assets can't be replaced"],
    "Covered bonds keep the assets on the bank's balance sheet with dual recourse, and the cover pool is dynamic (non-performing assets are replaced).", "r"],
  ["When interest rates fall sharply, holders of mortgage-backed securities face:",
    ["Contraction risk", "Extension risk", "Balloon risk"],
    "Lower rates prompt refinancing, so prepayments speed up and principal returns early, to be reinvested at lower rates.", "r"],
  ["A mortgage pool's single monthly mortality rate is 0.5%. Its conditional prepayment rate (CPR) is closest to:",
    ["5.84%", "6.00%", "0.50%"],
    "CPR = 1 − (1 − SMM)^12 = 1 − 0.995^12 = 5.84%.", "c"],
  ["Under the PSA benchmark, at 100 PSA the conditional prepayment rate from month 30 onward is:",
    ["6%", "0.2%", "12%"],
    "100 PSA: CPR starts at 0.2% and rises 0.2% per month until reaching 6% in month 30, then stays at 6%. 200 PSA would be 12%.", "r"],
  ["In a sequential-pay CMO, the first tranche:",
    ["Receives all principal payments until retired", "Receives principal pro rata alongside the other tranches", "Has the most extension risk in the structure"],
    "Sequential-pay tranches receive principal in order; the first tranche is paid off first, giving it the shortest expected life.", "r"],
  ["In a CMO with planned amortization class (PAC) and support tranches, the support tranche:",
    ["Absorbs prepayment variability, so it has more risk", "Has the most predictable cash flows of any tranche in the deal", "Is protected from all prepayment risk by the PAC"],
    "Support tranches take excess or deficient principal so the PAC can follow its schedule within its prepayment band.", "r"],
  ["Which provides call (prepayment) protection at the individual loan level in CMBS?",
    ["Prepayment lockouts and defeasance", "Sequential-pay tranching", "Overcollateralization of the pool"],
    "Loan-level protection includes lockouts, defeasance, prepayment penalty points and yield maintenance. Sequential tranching gives structural protection.", "r"],
  ["During the lockout (revolving) period of a credit card receivable ABS:",
    ["Principal collected buys new receivables", "Investors receive all principal collections immediately", "Investors receive no interest payments"],
    "Credit card receivables are non-amortizing: during the revolving period, principal repayments are reinvested in new receivables; investors receive interest only.", "r"],
  ["The risk that a commercial mortgage borrower can't refinance a balloon payment at maturity creates:",
    ["Extension risk for CMBS investors", "Contraction risk for CMBS investors", "Faster prepayments for CMBS investors"],
    "If the borrower can't refinance, the loan is extended (or defaults), lengthening the investors' cash flows: balloon risk is a form of extension risk.", "r"]
];

window.GLOSSARY.push(
  ["Full vs flat price", "Full (dirty) price = flat (clean) price + accrued interest. Accrued interest = (t/T) × coupon.", "l1fi"],
  ["Yield measures", "YTM (held to maturity, reinvest at YTM), current yield (coupon ÷ flat price), yield-to-call, yield-to-worst.", "l1fi"],
  ["Spreads", "G-spread: over government yield. I-spread: over swap rate. Z-spread: over the spot curve. OAS = Z-spread − option value.", "l1fi"],
  ["FRN pricing", "Quoted margin > discount (required) margin → premium; < → discount; = → par on reset dates.", "l1fi"],
  ["Money market pricing", "Discount basis: PV = FV(1 − Days/Year × DR). Add-on basis: PV = FV ÷ (1 + Days/Year × AOR).", "l1fi"],
  ["Implied forward rate", "(1 + z2)² = (1 + z1)(1 + 1y1y). Upward-sloping spot curve → forwards above spots.", "l1fi"],
  ["Macaulay and modified duration", "MacDur = PV-weighted average time to cash flows. ModDur = MacDur ÷ (1 + r). %ΔP ≈ −ModDur × Δy.", "l1fi"],
  ["Approximate duration and convexity", "ApproxModDur = (PV− − PV+) ÷ (2ΔyPV0). ApproxCon = (PV− + PV+ − 2PV0) ÷ (Δy²PV0).", "l1fi"],
  ["Duration + convexity", "%ΔP ≈ −ModDur × Δy + ½ × Convexity × (Δy)².", "l1fi"],
  ["PVBP (basis point value)", "Price change for a 1 bp yield change = ModDur × full price × 0.0001.", "l1fi"],
  ["Duration gap", "MacDur − investment horizon. Positive → price risk dominates (hurt by rising rates); negative → reinvestment risk dominates.", "l1fi"],
  ["Effective duration", "(PV− − PV+) ÷ (2 × ΔCurve × PV0). Used for bonds with embedded options; callable bonds show negative convexity at low yields.", "l1fi"],
  ["Expected credit loss", "POD × LGD, where LGD = exposure × (1 − recovery rate).", "l1fi"],
  ["Priority of claims", "First lien → second lien → senior unsecured → senior subordinated → subordinated → junior subordinated.", "l1fi"],
  ["Covered bond", "Bank bond backed by an on-balance-sheet, dynamic cover pool; dual recourse to the pool and the bank.", "l1fi"],
  ["Prepayment risk", "Contraction risk (rates fall, prepayments speed up) and extension risk (rates rise, prepayments slow).", "l1fi"],
  ["CPR and PSA", "CPR = 1 − (1 − SMM)^12. 100 PSA: CPR rises 0.2%/month to 6% at month 30.", "l1fi"],
  ["CMO tranches", "Sequential-pay (principal in order), PAC (scheduled within a band) with support tranches absorbing variability.", "l1fi"]
);
