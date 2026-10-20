// CFA Level I · Fixed Income · Learning module 2: Fixed-Income Cash Flows and Types.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1ficf = `
<p class="syl">CFA Level I · Fixed Income (11–14%) · Learning module 2 of 19 · Fixed-Income Cash Flows and Types</p>
<p>Not all bonds pay a fixed coupon and repay everything at maturity. This lesson covers how principal can be repaid (bullet, amortizing, sinking funds), the different coupon structures (floating, step-up, payment-in-kind, deferred, inflation-linked), and the embedded options (call, put, conversion) that change a bond's cash flows, risk and yield.</p>

<h3>1. Principal repayment structures <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Structure</th><th>How principal is repaid</th><th>Credit risk</th></tr>
  <tr><td><b>Bullet</b></td><td>All principal at maturity; only coupons before then</td><td>Highest (all principal at the end)</td></tr>
  <tr><td><b>Partially amortizing</b></td><td>Some principal repaid with each payment, with a <b>balloon payment</b> at maturity</td><td>In between</td></tr>
  <tr><td><b>Fully amortizing</b></td><td>Equal (level) payments covering interest and principal, so the balance reaches zero at maturity (like a mortgage)</td><td>Lowest</td></tr>
</table>
<div class="ex"><b>Example (fully amortizing):</b> $100,000 borrowed at 5% for 5 years with annual payments.<br>Payment: N = 5, I/Y = 5, PV = −100,000, FV = 0, CPT PMT = <b>$23,097.48</b>.<br>Year 1: interest = 100,000 × 5% = $5,000; principal = 23,097.48 − 5,000 = <b>$18,097.48</b>; balance = $81,902.52.<br>Year 2: interest = $4,095.13; principal = $19,002.35. The interest share falls and the principal share rises over time.</div>
<ul>
  <li><b>Sinking fund</b>: the issuer must retire a set portion of the issue each year, either by buying bonds in the market or by calling them (often at par) by lottery. It <b>reduces credit risk</b>, but investors face <b>reinvestment risk</b>: if rates have fallen, bonds are called at par just when reinvesting is least attractive.</li>
</ul>

<h3>2. Coupon structures <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Structure</th><th>How it works</th></tr>
  <tr><td><b>Floating-rate note (FRN)</b></td><td>Coupon = market reference rate (MRR, e.g. SOFR) + fixed <b>quoted margin</b>, reset each period and paid in arrears. A <b>cap</b> limits the maximum coupon (benefits the issuer); a <b>floor</b> sets a minimum (benefits the investor). An <b>inverse floater</b>'s coupon moves opposite to the reference rate (e.g. 10% − MRR)</td></tr>
  <tr><td><b>Step-up coupon</b></td><td>Coupon rises on set dates. Often combined with a call: if the issuer doesn't call, investors are rewarded with a higher coupon</td></tr>
  <tr><td><b>Credit-linked coupon</b></td><td>Coupon rises if the issuer's credit rating falls (and falls if it improves)</td></tr>
  <tr><td><b>Payment-in-kind (PIK)</b></td><td>Issuer can pay interest with more bonds instead of cash; used by highly leveraged issuers, so investors demand a higher yield</td></tr>
  <tr><td><b>Deferred coupon</b> (split coupon)</td><td>No coupons for the first few years, then higher coupons; suits issuers expecting cash flow later (e.g. start-ups, project finance)</td></tr>
  <tr><td><b>Index-linked</b></td><td>Payments tied to an index, usually inflation (CPI); also equity-linked notes</td></tr>
</table>
<h4>Inflation-linked bonds</h4>
<ul>
  <li><b>Capital-indexed</b> (e.g. US TIPS): the <b>principal</b> is adjusted for inflation and a fixed <b>real</b> coupon rate is applied to the adjusted principal. Most common.</li>
  <li><b>Interest-indexed</b>: principal is fixed; the coupon rate is adjusted for inflation.</li>
  <li><b>Zero-coupon indexed</b>: only the principal at maturity is adjusted. <b>Indexed-annuity</b>: fully amortizing payments adjusted for inflation.</li>
</ul>
<div class="ex"><b>Example:</b> a capital-indexed bond with $1,000 par and a 1% real annual coupon. Inflation over the year is 3%: adjusted principal = $1,030; coupon = 1,030 × 1% = <b>$10.30</b>.<br>An FRN on $1 million pays SOFR + 150 bp quarterly. With SOFR at 4.20%, the quarterly coupon = 1,000,000 × 5.70% / 4 = <b>$14,250</b>.<br>An FRN pays MRR + 100 bp with a 6% cap. If MRR is 5.5%, the formula gives 6.5%, but the coupon is capped at <b>6%</b>.</div>

<h3>3. Embedded options (contingency provisions) <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Feature</th><th>Who owns the option</th><th>Effect vs an option-free bond</th></tr>
  <tr><td><b>Callable bond</b>: issuer can redeem early at the call price</td><td>Issuer</td><td><b>Lower price, higher yield</b>. Investors face reinvestment risk (bonds called when rates fall) and limited price upside</td></tr>
  <tr><td><b>Putable bond</b>: investor can sell back to the issuer at the put price</td><td>Investor</td><td><b>Higher price, lower yield</b>. Protects investors when rates rise or credit worsens</td></tr>
  <tr><td><b>Convertible bond</b>: investor can exchange it for a set number of shares</td><td>Investor</td><td><b>Lower coupon/yield</b> in exchange for equity upside</td></tr>
</table>
<h4>Call details</h4>
<ul>
  <li><b>Call protection period</b> (lockout): time after issue when the bond can't be called. A <b>call schedule</b> lists call prices, often starting at a premium to par and declining to par.</li>
  <li><b>Make-whole call</b>: call price = present value of remaining payments at a small spread over government yields, so it's expensive for the issuer and rarely used to refinance.</li>
  <li>Exercise styles: <b>American</b> (any time after protection ends), <b>European</b> (one date), <b>Bermudan</b> (set dates, e.g. coupon dates).</li>
</ul>
<h4>Convertible bond terms</h4>
<div class="formula">Conversion price = par value / conversion ratio<br>Conversion value = conversion ratio × current share price<br>Conversion premium = convertible bond price − conversion value</div>
<div class="ex"><b>Example:</b> $1,000 par, conversion ratio 25, share price $45, bond price $1,180.<br>Conversion price = 1,000 / 25 = $40; conversion value = 25 × 45 = <b>$1,125</b>; conversion premium = 1,180 − 1,125 = <b>$55</b> (4.9%).</div>
<ul>
  <li><b>Warrants</b>: separate options attached to a bond, giving the right to buy shares at a set price; they can often be detached and traded.</li>
  <li><b>Contingent convertible bonds (CoCos)</b>: issued mainly by banks; convert to equity automatically (or are written down) if a trigger is hit, such as capital falling below a regulatory level. The investor doesn't choose.</li>
</ul>

<div class="how"><b>How it's tested:</b> bullet vs amortizing vs balloon and their credit risk, amortization schedule splits, sinking fund pros and cons, FRN coupon calculations with caps and floors, PIK and step-up features, capital-indexed vs interest-indexed inflation bonds, who owns each embedded option and its effect on yield, and conversion value/price/premium.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe bullet, amortizing and partially amortizing bonds and sinking funds.</li>
  <li>Describe FRNs (caps, floors, inverse floaters), step-up, credit-linked, PIK, deferred and index-linked coupons.</li>
  <li>Calculate coupons on FRNs and inflation-linked bonds and payments on an amortizing loan.</li>
  <li>Describe callable, putable and convertible bonds, warrants and CoCos, and their effect on yield.</li>
</ul></div>
`;

window.QB_HARD.l1ficf = [
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
  ["Which bond structure exposes investors to the greatest credit risk, all else equal?",
    ["Bullet", "Fully amortizing", "Partially amortizing"],
    "A bullet bond repays all principal at maturity, so the most money is at risk for the longest time.", "r"],
  ["A $100,000 loan at 5% is repaid in five equal annual payments. The principal repaid in the first year is closest to:",
    ["$18,097", "$23,097", "$20,000"],
    "Payment = $23,097.48; interest = $5,000; principal = $18,097.48. $20,000 assumes equal principal each year.", "c"],
  ["A partially amortizing bond differs from a fully amortizing bond in that it has:",
    ["A balloon payment at maturity", "No principal repaid before maturity", "Payments that rise with inflation"],
    "Some principal is repaid along the way, with the rest due as a balloon at maturity.", "r"],
  ["An FRN pays the market reference rate plus 150 bp quarterly on $1 million par. If the reference rate is 4.20%, the next coupon payment is:",
    ["$14,250", "$57,000", "$10,500"],
    "1,000,000 × (4.20% + 1.50%) / 4 = $14,250. $57,000 is the annual amount; $10,500 omits the margin.", "c"],
  ["An FRN pays MRR + 100 bp with a cap of 6%. If MRR is 5.5%, the coupon rate for the period is:",
    ["6.0%", "6.5%", "5.5%"],
    "The formula gives 6.5%, but the cap limits the coupon to 6.0%.", "c"],
  ["A floor on a floating-rate bond benefits:",
    ["The investor", "The issuer", "Neither party"],
    "A floor guarantees a minimum coupon, protecting the investor when rates fall; a cap protects the issuer.", "r"],
  ["A capital-indexed inflation-linked bond has $1,000 par and a 1% real coupon paid annually. If inflation is 3% over the year, the coupon payment is closest to:",
    ["$10.30", "$10.00", "$40.00"],
    "Adjusted principal = 1,030; coupon = 1,030 × 1% = $10.30. $40 wrongly adds inflation to the coupon rate.", "c"],
  ["A highly leveraged issuer can pay interest with additional bonds instead of cash. This is a:",
    ["Payment-in-kind bond", "Deferred coupon bond", "Step-up coupon bond"],
    "PIK bonds let the issuer pay in more bonds; investors demand a higher yield for the extra credit risk.", "r"],
  ["A bond's coupon rises if the issuer's credit rating is downgraded. This is a:",
    ["Credit-linked coupon bond", "Step-up coupon bond", "Inverse floating-rate note"],
    "Credit-linked coupons adjust with the rating; step-up coupons rise on set dates regardless of rating.", "r"],
  ["Compared with an otherwise identical option-free bond, a callable bond most likely has:",
    ["A higher yield", "A higher price", "Less reinvestment risk"],
    "The issuer owns the call, so investors pay less (demand a higher yield) and face reinvestment risk if the bond is called when rates fall.", "r"],
  ["A make-whole call provision sets the call price equal to:",
    ["PV of remaining payments at a small spread", "Par value plus one full year of coupons", "The bond's original issue price"],
    "Make-whole calls are expensive for the issuer, so they're rarely used for refinancing.", "r"],
  ["A callable bond can be redeemed only on its coupon dates after the call protection period. Its call option is:",
    ["Bermudan style", "American style", "European style"],
    "Bermudan: specific dates. American: any time. European: a single date.", "r"],
  ["A $1,000 par convertible bond with a conversion ratio of 25 trades at $1,180 when the share price is $45. The conversion premium is:",
    ["$55", "$180", "$140"],
    "Conversion value = 25 × 45 = 1,125; premium = 1,180 − 1,125 = $55. $180 is the premium over par.", "c"],
  ["A bank bond converts automatically into equity if the bank's capital ratio falls below a set level. This is a:",
    ["Contingent convertible bond", "Traditional convertible bond", "Bond with attached warrants"],
    "CoCos convert (or are written down) at a trigger the investor doesn't control.", "r"],
];

window.GLOSSARY.push(
  ["Bullet vs amortizing bond", "All principal at maturity vs principal repaid over time (fully, or partly with a balloon).", "l1ficf"],
  ["Sinking fund", "Required gradual retirement of an issue; lowers credit risk, adds reinvestment risk.", "l1ficf"],
  ["Cap / floor (FRN)", "Maximum coupon (benefits issuer) / minimum coupon (benefits investor).", "l1ficf"],
  ["Payment-in-kind (PIK)", "Interest paid in additional bonds rather than cash.", "l1ficf"],
  ["Capital-indexed bond", "Principal adjusted for inflation; fixed real coupon rate applied to it (e.g. TIPS).", "l1ficf"],
  ["Conversion value / price", "Conversion ratio × share price / par ÷ conversion ratio.", "l1ficf"],
  ["Callable / putable bond", "Issuer can redeem early (higher yield) / investor can sell back (lower yield).", "l1ficf"]
);
