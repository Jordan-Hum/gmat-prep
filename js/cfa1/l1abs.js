// CFA Level I · Fixed Income · Learning module 18: Asset-Backed Security (ABS) Instrument and Market Features.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1abs = `
<p class="syl">CFA Level I · Fixed Income (11–14%) · Learning module 18 of 19 · Asset-Backed Security (ABS) Instrument and Market Features</p>
<p>Non-mortgage asset-backed securities are backed by auto loans, credit card balances, student loans, equipment leases and corporate loans. This lesson contrasts amortizing and non-amortizing collateral, then looks at the main types: auto loan ABS, credit card ABS (with lockout and early amortization), and collateralized loan obligations (CLOs) with their coverage tests.</p>

<h3>1. Amortizing vs non-amortizing collateral <span class="hot">Highly tested</span></h3>
<table>
  <tr><th></th><th>Amortizing</th><th>Non-amortizing</th></tr>
  <tr><td>Examples</td><td>Auto loans, mortgages, student loans, equipment loans</td><td>Credit card receivables (revolving balances)</td></tr>
  <tr><td>Payments</td><td>Each payment includes interest and scheduled principal; borrowers may also prepay</td><td>Only a minimum payment is required; balances revolve</td></tr>
  <tr><td>Pool over time</td><td>Shrinks as principal is repaid</td><td>Stays the same size while new receivables replace repaid ones</td></tr>
</table>

<h3>2. Auto loan ABS</h3>
<ul>
  <li>Backed by car loans and leases. Cash flows = interest + scheduled principal + <b>prepayments</b> (from sales, trade-ins, refinancing, or insurance after an accident or theft).</li>
  <li>Usually structured with senior and subordinated tranches plus internal credit enhancement: <b>reserve accounts</b>, <b>overcollateralization</b> and <b>excess spread</b>.</li>
  <li>Credit quality depends on borrowers (prime vs subprime) and on used-car values (which determine recoveries on repossession).</li>
</ul>

<h3>3. Credit card receivable ABS <span class="hot">Highly tested</span></h3>
<ul>
  <li>Cash flows come from <b>finance charges</b> (interest on balances), fees (late, annual) and principal repayments.</li>
  <li><b>Lockout (revolving) period</b>: principal repaid by cardholders is <b>reinvested in new receivables</b>; investors receive only interest. The pool stays the same size.</li>
  <li><b>Amortization period</b>: after the lockout ends, principal is passed through to investors.</li>
  <li><b>Early (rapid) amortization</b> provisions: if certain events happen (e.g. excess spread falls below a set level, or the pool's losses rise), the lockout ends early and principal is paid to investors immediately, protecting them.</li>
  <li>Credit card ABS usually pay a <b>floating</b> rate, and prepayment risk is low during the lockout.</li>
</ul>

<h3>4. Collateralized loan obligations (CLOs) <span class="hot">Highly tested</span></h3>
<ul>
  <li>A CLO is backed by a pool of <b>leveraged (senior secured) loans</b> to below-investment-grade companies, typically 150–250 loans.</li>
  <li>It's <b>actively managed</b> by a <b>collateral manager</b> who buys and sells loans within limits, unlike the static pools in most ABS.</li>
  <li>Tranches: senior (AAA) down to mezzanine and an unrated <b>equity tranche</b> that receives what's left. Most CLO tranches pay floating rates, matching the floating-rate loans.</li>
  <li>Phases: ramp-up (assets bought), reinvestment period (manager trades and reinvests), then amortization (tranches repaid in order).</li>
</ul>
<h4>Coverage tests</h4>
<div class="formula">Overcollateralization (OC) test = par value of collateral / par value of a tranche and the tranches above it<br>Interest coverage (IC) test = interest from collateral / interest due on a tranche and the tranches above it</div>
<p>If a test fails, cash that would go to junior tranches is <b>diverted</b> to pay down senior tranches until the test passes again.</p>
<div class="ex"><b>Example:</b> collateral par $520 million, senior tranche $400 million, required senior OC ratio 125%. OC = 520 / 400 = <b>130%</b>: passes. If defaults reduce collateral par to $490 million, OC = 122.5%: <b>fails</b>, so cash is diverted to repay the senior tranche.<br>Interest from collateral of $32 million against $20 million due on the senior tranche gives an IC ratio of <b>1.6×</b>.</div>

<h3>5. Other ABS</h3>
<ul>
  <li><b>Student loan</b>, <b>equipment</b>, and newer asset types (e.g. solar loans, music royalties, aircraft leases) are also securitized.</li>
  <li><b>Pass-through</b> structures pass cash from the pool to investors (less fees); <b>pay-through</b> structures reshape cash flows into tranches with different terms.</li>
</ul>

<div class="how"><b>How it's tested:</b> amortizing vs non-amortizing collateral, sources of auto ABS cash flows and prepayments, the lockout period and early amortization in credit card ABS, CLO structure and active management, OC and IC test calculations and what happens when a test fails, and internal credit enhancements.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Distinguish amortizing from non-amortizing collateral.</li>
  <li>Describe the cash flows, prepayments and credit enhancement of auto loan ABS.</li>
  <li>Describe the lockout period, amortization and early amortization of credit card ABS.</li>
  <li>Describe CLOs, their tranches and managers, and calculate OC and IC tests.</li>
</ul></div>
`;

window.QB_HARD.l1abs = [
  ["Which of the following is an internal credit enhancement?",
    ["Overcollateralization", "A bank letter of credit", "A surety bond"],
    "Internal enhancements are built into the structure (subordination, overcollateralization, reserve accounts, excess spread). Letters of credit and surety bonds are external.", "r"],
  ["During the lockout (revolving) period of a credit card receivable ABS:",
    ["Principal collected buys new receivables", "Investors receive all principal collections immediately", "Investors receive no interest payments"],
    "Credit card receivables are non-amortizing: during the revolving period, principal repayments are reinvested in new receivables; investors receive interest only.", "r"],
  ["Which type of collateral is non-amortizing?",
    ["Credit card receivables", "Auto loans and leases", "Student loans"],
    "Credit card balances revolve, with no scheduled principal repayment; auto and student loans amortize.", "r"],
  ["In addition to scheduled payments, auto loan ABS investors receive prepayments that may come from:",
    ["Insurance payouts after accidents", "New receivables added to the pool", "Excess spread released early"],
    "Cars are sold, traded in or written off after accidents or theft, and the loans are repaid early.", "r"],
  ["During the lockout period of a credit card ABS, principal repaid by cardholders is:",
    ["Used to buy new receivables", "Paid to the senior tranche", "Paid to all tranches pro rata"],
    "During the lockout (revolving) period, investors receive only interest; principal is reinvested in new receivables.", "r"],
  ["An early (rapid) amortization provision in a credit card ABS is triggered when, for example:",
    ["Excess spread falls below a set level", "Market interest rates fall sharply", "The servicer is upgraded"],
    "Early amortization protects investors by paying principal immediately when performance deteriorates.", "r"],
  ["A collateralized loan obligation is backed by a pool of:",
    ["Leveraged corporate loans", "Residential mortgage loans", "Government bonds"],
    "CLOs hold senior secured loans to below-investment-grade companies.", "r"],
  ["Unlike most ABS, a CLO's collateral pool is:",
    ["Actively managed", "Static after issue", "Guaranteed by the originator"],
    "A collateral manager buys and sells loans during the reinvestment period.", "r"],
  ["A CLO has collateral with a par value of $520 million and a senior tranche of $400 million. The senior overcollateralization ratio is:",
    ["130%", "77%", "120%"],
    "520 / 400 = 130%. 77% inverts the ratio.", "c"],
  ["The senior OC test in the CLO above requires 125%. Defaults reduce collateral par to $490 million. The most likely result is that:",
    ["Cash is diverted to pay down senior notes", "The equity tranche receives extra cash", "The CLO is immediately liquidated"],
    "490 / 400 = 122.5% fails the test, so cash is redirected from junior tranches to pay down senior notes.", "s"],
  ["A CLO's collateral generates $32 million of interest, and $20 million is due on the senior tranche. The senior interest coverage ratio is:",
    ["1.6×", "0.6×", "1.2×"],
    "32 / 20 = 1.6×.", "c"],
  ["Which CLO tranche receives the residual cash flow after all other tranches are paid?",
    ["The equity tranche", "The AAA senior tranche", "The mezzanine tranche"],
    "The unrated equity tranche is last in the waterfall, with the highest risk and potential return.", "r"],
];

window.GLOSSARY.push(
  ["Lockout (revolving) period", "Credit card ABS phase when principal repayments buy new receivables; investors get interest only.", "l1abs"],
  ["Early amortization", "Trigger that ends the lockout and pays principal to investors when performance worsens.", "l1abs"],
  ["CLO", "Actively managed, tranched securitization of leveraged loans.", "l1abs"],
  ["OC and IC tests", "Collateral par / tranche par and collateral interest / interest due; failure diverts cash to senior tranches.", "l1abs"]
);
