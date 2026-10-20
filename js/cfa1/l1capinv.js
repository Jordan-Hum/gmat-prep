// CFA Level I · Corporate Issuers · Learning module 5: Capital Investments and Capital Allocation.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1capinv = `
<p class="syl">CFA Level I · Corporate Issuers · Learning module 5 of 7 · Capital Investments and Capital Allocation</p>
<p>Capital allocation (capital budgeting) is how a company decides which long-term projects to invest in. The tools are <b>NPV</b> and <b>IRR</b>, built on the time value of money. This is the most calculation-heavy lesson in Corporate Issuers and one of the most tested: know the cash flow rules, how to compute and compare NPV and IRR, why they can disagree, how ROIC relates to value creation, the behavioural pitfalls, and real options.</p>

<h3>1. Types of capital investment and the process</h3>
<ul>
  <li><b>Business maintenance</b> (going concern) projects: replace worn-out assets to keep the business running; often need little analysis.</li>
  <li><b>Regulatory / compliance</b> projects: required by law (e.g. safety or environmental rules); may have negative NPV but must be done.</li>
  <li><b>Expansion</b> of the existing business: more capacity; needs careful forecasting.</li>
  <li><b>New lines of business</b> and other projects: more uncertain; may involve R&amp;D or acquisitions.</li>
</ul>
<p><b>Capital allocation process</b>: (1) idea generation, (2) investment analysis (forecast cash flows, evaluate), (3) planning and prioritization (fit with strategy, timing, resources), (4) monitoring and <b>post-audit</b> (compare actual with forecast results to improve future decisions).</p>

<h3>2. Principles for estimating project cash flows <span class="hot">Highly tested</span></h3>
<ul>
  <li>Decisions are based on <b>incremental after-tax cash flows</b>, not accounting income.</li>
  <li><b>Timing</b> matters: cash flows are discounted when they occur.</li>
  <li>Include <b>opportunity costs</b> (e.g. the market value of land the company already owns that the project would use).</li>
  <li>Ignore <b>sunk costs</b> (already spent and unrecoverable, e.g. a feasibility study done last year).</li>
  <li>Include <b>externalities</b>: effects on other parts of the business, such as <b>cannibalization</b> of existing sales (negative) or boosts to other products (positive).</li>
  <li><b>Financing costs</b> (interest, dividends) are <b>not</b> subtracted from cash flows; they're reflected in the discount rate (the cost of capital).</li>
</ul>

<h3>3. Net present value (NPV) <span class="hot">Highly tested</span></h3>
<div class="formula">NPV = Σ CFₜ/(1 + r)ᵗ − initial outlay, where r = the project's required return (cost of capital)</div>
<p><b>Decision rule</b>: accept if NPV &gt; 0. NPV is the expected change in shareholder wealth from the project, so a positive NPV adds value.</p>
<div class="ex"><b>Example:</b> Initial outlay $1,000; cash flows of $300, $400, $500 and $200 in years 1–4; cost of capital 9%. NPV = 300/1.09 + 400/1.09² + 500/1.09³ + 200/1.09⁴ − 1,000 = 275.23 + 336.67 + 386.09 + 141.69 − 1,000 = <b>$139.68</b>. Accept.</div>
<div class="calc"><b>BA II Plus:</b> [CF] CF0 = −1,000, C01 = 300, C02 = 400, C03 = 500, C04 = 200 (each F = 1), then [NPV] I = 9 [ENTER] [↓] [CPT] → 139.68; [IRR] [CPT] → 15.32.</div>

<h3>4. Internal rate of return (IRR) <span class="hot">Highly tested</span></h3>
<p>The IRR is the discount rate at which NPV = 0. <b>Decision rule</b>: accept if IRR &gt; cost of capital. For the example, IRR = 15.32% &gt; 9% → accept.</p>
<ul>
  <li>For a single, independent, conventional project (one outflow followed by inflows), NPV and IRR give the same accept/reject decision.</li>
  <li><b>Reinvestment assumption</b>: NPV implicitly assumes interim cash flows are reinvested at the <b>cost of capital</b>; IRR assumes reinvestment at the <b>IRR</b>, which may be unrealistic for high-IRR projects.</li>
  <li><b>Multiple IRRs or no IRR</b>: projects with unconventional cash flows (sign changes more than once) can have several IRRs. Example: −100, +230, −132 has IRRs of 10% and 20%. NPV still works.</li>
</ul>
<h4>When NPV and IRR rank projects differently</h4>
<p>For <b>mutually exclusive</b> projects (only one can be chosen), the rankings can conflict because of differences in <b>scale</b> (size of investment) or <b>timing</b> of cash flows. <b>Always choose the higher NPV</b>, since it adds the most value.</p>
<div class="ex"><b>Example:</b> Both cost $100; cost of capital 10%. Project A pays $130 in one year: NPV $18.18, IRR 30%. Project B pays $170 in three years: NPV $27.72, IRR 19.3%. IRR prefers A, NPV prefers B → choose <b>B</b>. The <b>crossover rate</b> (where the NPV profiles cross) is about 14.4%; below it, B has the higher NPV.</div>
<p>The <b>NPV profile</b> plots NPV against the discount rate: it cuts the horizontal axis at the IRR. Projects with cash flows further in the future have steeper profiles (more sensitive to the discount rate).</p>
<h4>Other measures</h4>
<ul>
  <li><b>Payback period</b>: years to recover the initial outlay (ignores the time value of money and cash flows after payback). In the example, payback = 2 + 300/500 = 2.6 years.</li>
  <li><b>Profitability index (PI)</b> = PV of future cash flows / initial outlay = 1,139.68/1,000 = 1.14; accept if PI &gt; 1 (same decision as NPV &gt; 0).</li>
</ul>

<h3>5. Return on invested capital and value creation</h3>
<div class="formula">ROIC = after-tax operating profit (NOPAT) / average invested capital (debt + equity)</div>
<p>A company creates value when <b>ROIC &gt; cost of capital</b> and destroys value when it invests at an ROIC below its cost of capital, even if it's growing and profitable in accounting terms. Market value tends to rise with the spread (ROIC − cost of capital).</p>

<h3>6. Capital allocation pitfalls</h3>
<ul>
  <li><b>Inertia</b>: setting this year's budget mechanically from last year's.</li>
  <li><b>Source-of-capital bias</b>: treating internally generated cash as "free" (it has an opportunity cost).</li>
  <li>Failing to consider <b>alternatives</b> or investment timing.</li>
  <li><b>Pet projects</b> of senior managers getting less scrutiny.</li>
  <li>Basing decisions on <b>EPS, net income or ROE</b> effects instead of NPV (a project can boost short-term EPS and still destroy value).</li>
  <li>Internal forecasting errors: overly optimistic cash flows; ignoring cannibalization; using the company-wide cost of capital for projects with different risk.</li>
</ul>

<h3>7. Real options <span class="hot">Highly tested</span></h3>
<p><b>Real options</b> are rights (not obligations) to make future decisions about a project once more information is available. They add value that a static NPV ignores.</p>
<table>
  <tr><th>Option</th><th>Example</th></tr>
  <tr><td><b>Timing</b> option</td><td>Delay investment until uncertainty resolves</td></tr>
  <tr><td><b>Sizing</b> options</td><td><b>Expansion</b> (add capacity if demand is strong); <b>abandonment</b> (exit and sell assets if results are poor)</td></tr>
  <tr><td><b>Flexibility</b> options</td><td><b>Price-setting</b> (raise prices if demand spikes); <b>production-flexibility</b> (switch inputs, add shifts)</td></tr>
  <tr><td><b>Fundamental</b> options</td><td>Project payoffs depend on an underlying price (e.g. develop a mine only if the metal price is high)</td></tr>
</table>
<div class="formula">Project NPV with option = NPV without option − cost of the option + value of the option</div>
<p>Example: a project with a static NPV of −$5 million and an expansion option worth $8 million has an overall NPV of +$3 million: accept.</p>

<div class="how"><b>How it's tested:</b> NPV and IRR calculations (use the CF worksheet), which cash flows to include (sunk costs, opportunity costs, cannibalization, financing costs), choosing between mutually exclusive projects, the reinvestment assumption, multiple IRRs, ROIC vs cost of capital, naming the pitfall in a scenario and valuing a project with a real option.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Classify capital projects and describe the capital allocation process.</li>
  <li>Apply the cash flow principles (incremental, after-tax, opportunity costs, sunk costs, externalities, no financing costs).</li>
  <li>Calculate and interpret NPV and IRR, and resolve ranking conflicts with NPV.</li>
  <li>Relate ROIC to the cost of capital and value creation.</li>
  <li>Identify capital allocation pitfalls and types of real options.</li>
</ul></div>
`;

window.QB_HARD.l1capinv = [
  ["A project costs 1,000 and generates cash flows of 400, 500 and 300 at the end of years 1–3. At a 10% cost of capital, its NPV is closest to:",
    ["2.25", "200.00", "−48.47"],
    "PV = 400/1.1 + 500/1.1² + 300/1.1³ = 363.64 + 413.22 + 225.39 = 1,002.25. NPV = 2.25. (200 ignores discounting.)", "c"],
  ["For two mutually exclusive projects whose NPV and IRR rankings conflict, the company should choose the project with the:",
    ["Higher NPV", "Higher IRR", "Shorter payback period"],
    "NPV measures the value added at the cost of capital and assumes realistic reinvestment; IRR rankings can be distorted by scale and timing differences.", "r"],
  ["Compared with NPV, the IRR method implicitly assumes that interim cash flows are reinvested at:",
    ["The IRR", "The cost of capital", "The risk-free rate"],
    "IRR assumes reinvestment at the IRR itself; NPV assumes reinvestment at the cost of capital.", "r"],
  ["A company's return on invested capital is 8% and its cost of capital is 10%. The company is most likely:",
    ["Destroying value as it invests", "Creating value for its shareholders", "Earning a positive economic profit"],
    "Value is created only when ROIC exceeds the cost of capital. Here each dollar invested earns less than investors require.", "c"],
  ["A division manager sets each year's capital budget equal to last year's plus 5%, without new analysis. This capital allocation pitfall is:",
    ["Inertia", "Source-of-capital bias", "A pet project"],
    "Inertia is relying on the prior year's allocation rather than evaluating opportunities afresh.", "r"],
  ["A company builds a small plant with the right to add capacity later if demand proves strong. This right is best described as a:",
    ["Growth (expansion) option", "Abandonment (exit) option", "Timing option"],
    "The right to expand if conditions are favourable is a growth option, a type of sizing option.", "r"],
  ["A project has an NPV of −$5 million before considering an option to expand later, which is valued at $8 million. The company should:",
    ["Accept it, because NPV including the option is +$3 million", "Reject it, because its base-case NPV is negative", "Accept it only if the option will certainly be exercised"],
    "Project NPV = NPV without options + value of options = −5 + 8 = +$3 million, so the project adds value.", "c"],
  ["A company spent $200,000 on a market study last year. It's now deciding whether to launch the product. In the capital budgeting analysis, the study's cost should be:",
    ["Ignored, since it's a sunk cost", "Included as an initial outflow", "Spread over the project's life"],
    "Sunk costs can't be recovered whatever the decision, so they're irrelevant to it.", "r"],
  ["A new project would use land the company already owns, which could be sold for $1.5 million. In evaluating the project, the land should be:",
    ["Included at its $1.5 million market value", "Excluded, because the company already owns it", "Included at its original purchase price"],
    "Using the land means giving up its sale value, so that market value is an opportunity cost of the project.", "r"],
  ["A new model is expected to reduce sales of the company's existing models by $2 million a year. This effect is:",
    ["Cannibalization, a cost to the project", "A sunk cost, to be ignored", "A financing cost, reflected in the discount rate"],
    "Cannibalization is a negative externality; only the net incremental cash flows count.", "r"],
  ["In capital budgeting, interest payments on debt used to finance a project are:",
    ["Reflected only in the discount rate", "Subtracted from the project's cash flows", "Added back to the project's cash flows"],
    "Financing costs are captured in the cost of capital; subtracting them from cash flows as well would double count them.", "r"],
  ["A project costs $1,000 and returns $300, $400, $500 and $200 in years 1–4. At a 9% cost of capital, its NPV is closest to:",
    ["$139.68", "$400.00", "$15.32"],
    "Discounting: 275.23 + 336.67 + 386.09 + 141.69 − 1,000 = $139.68. ($400 ignores discounting; 15.32% is the IRR.)", "c"],
  ["A project costs $500 and returns $150 a year for five years. Its IRR is closest to:",
    ["15.2%", "8.0%", "30.0%"],
    "N = 5, PV = −500, PMT = 150 → I/Y = 15.24%.", "c"],
  ["Project A (cost $100) returns $130 in one year; Project B (cost $100) returns $170 in three years. The projects are mutually exclusive and the cost of capital is 10%. The company should choose:",
    ["Project B, because it has the higher NPV", "Project A, because it has the higher IRR", "Either, since both are acceptable"],
    "NPV(A) = $18.18 (IRR 30%); NPV(B) = $27.72 (IRR 19.3%). For mutually exclusive projects, pick the higher NPV.", "c"],
  ["A project's cash flows are −$100, +$230 and −$132 in years 0, 1 and 2. This project most likely has:",
    ["Two IRRs, at 10% and 20%", "A single IRR of about 15%", "No meaningful NPV at any rate"],
    "Two sign changes can produce two IRRs; here NPV = 0 at both 10% and 20%. NPV remains a valid criterion.", "c"],
  ["The payback period of a project costing $1,000 with cash flows of $300, $400, $500 and $200 is closest to:",
    ["2.6 years", "3.0 years", "2.3 years"],
    "After two years, $700 is recovered; the remaining $300 takes 300/500 = 0.6 of year 3: 2.6 years.", "c"],
  ["A major weakness of the payback period is that it:",
    ["Ignores cash flows after the payback date", "Requires an estimate of the cost of capital", "Always conflicts with NPV"],
    "Payback ignores the time value of money and any cash flows after payback, so it can reject valuable long-term projects.", "r"],
  ["A company's managers approve projects mainly because they raise next year's earnings per share. This capital allocation pitfall is:",
    ["Focusing on EPS instead of NPV", "Source-of-capital bias in budgeting", "Inertia in budgeting"],
    "A project can raise short-term EPS while having a negative NPV; NPV, not EPS, measures value creation.", "s"],
  ["A pharmaceutical company has the right to stop a drug development program and sell its patents if early trials fail. This is a(n):",
    ["Abandonment option", "Expansion option", "Timing option"],
    "The right to exit and recover some value if results are poor is an abandonment (sizing) option.", "r"],
];

window.GLOSSARY.push(
  ["NPV vs IRR","Choose higher NPV for mutually exclusive projects. IRR assumes reinvestment at the IRR; NPV at the cost of capital.","l1capinv"],
  ["Real options","Timing, sizing (abandonment, growth), flexibility (price-setting, production) and fundamental options. Project NPV = base NPV − option cost + option value.","l1capinv"],
  ["Incremental cash flow principles", "After-tax, incremental, include opportunity costs and externalities, ignore sunk costs and financing costs.", "l1capinv"],
  ["Cannibalization", "Sales a new project takes from existing products; reduces incremental cash flows.", "l1capinv"],
  ["Mutually exclusive projects", "Only one can be chosen; when NPV and IRR conflict, choose the higher NPV.", "l1capinv"],
  ["Payback period", "Years to recover the initial outlay; ignores time value and later cash flows.", "l1capinv"],
  ["ROIC", "NOPAT/invested capital; value created if ROIC > cost of capital.", "l1capinv"],
  ["Capital allocation pitfalls", "Inertia, source-of-capital bias, no alternatives, pet projects, EPS/ROE focus, forecast errors.", "l1capinv"]
);
