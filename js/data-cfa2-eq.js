// CFA Level II · Equity Valuation: study notes, item sets and flashcards.
window.NOTES = window.NOTES || {};
window.QB_SETS = window.QB_SETS || {};
window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l2eq = `
<p class="syl">CFA Level II · Equity Valuation · 10–15% of the exam · Learning modules: Equity Valuation: Applications and Processes · Discounted Dividend Valuation · Free Cash Flow Valuation · Market-Based Valuation: Price and Enterprise Value Multiples · Residual Income Valuation · Private Company Valuation</p>

<h3>1. Valuation process and return concepts</h3>
<ul>
  <li><b>Intrinsic value</b> vs market price: perceived mispricing = estimated value − price. Value assumes a <b>going concern</b> unless liquidation is likely. Standards of value: fair market value, fair value (financial reporting), investment value (to a particular buyer), intrinsic value.</li>
  <li><b>Process</b>: understand the business (industry, competitive position, accounting quality) → forecast performance → choose the model (absolute vs relative; sum-of-the-parts, where a <b>conglomerate discount</b> may apply) → convert forecasts to value → act.</li>
  <li><b>Return concepts</b>: holding period return; <b>required return</b> (minimum to compensate for risk; the discount rate); <b>expected return</b> (IRR that equates the price with expected cash flows). Expected − required = expected <b>alpha</b>. If price converges to value: expected return ≈ required return + (V − P)/P.</li>
  <li><b>Required return models</b>: CAPM; Fama–French (market, size SMB, value HML); Pástor–Stambaugh (adds liquidity); macroeconomic (e.g. BIRR); <b>build-up</b>; bond yield plus risk premium. International: add a country spread to the ERP.</li>
</ul>

<h3>2. Discounted dividend valuation</h3>
<p>DDMs suit dividend-paying, profitable companies whose dividends relate to earnings, valued from a minority shareholder's view.</p>
<div class="formula">Gordon growth: V0 = D0(1 + g)/(r − g) = D1/(r − g) · Implied growth: g = r − D1/P0 · Sustainable growth: g = b × ROE</div>
<div class="formula">PVGO: V0 = E1/r + PVGO · Justified leading P/E = (1 − b)/(r − g) · Justified trailing P/E = (1 − b)(1 + g)/(r − g)</div>
<ul>
  <li><b>Two-stage</b>: discount high-growth dividends year by year, then a Gordon terminal value at the end of stage 1 (using D_{n+1}).</li>
  <li><b>H-model</b>: growth declines <b>linearly</b> from g_S to g_L over 2H years: V0 = D0(1 + g_L)/(r − g_L) + D0 × H × (g_S − g_L)/(r − g_L).</li>
  <li><b>Three-stage</b> and spreadsheet models handle growth, transition and maturity phases.</li>
  <li><b>ROE DuPont</b>: ROE = margin × turnover × leverage feeds sustainable growth.</li>
</ul>
<div class="ex"><b>Example:</b> D0 = 1.20, growth falls linearly from 12% to 4% over 8 years (H = 4), r = 9%. V0 = 1.20(1.04)/0.05 + 1.20(4)(0.08)/0.05 = 24.96 + 7.68 = 32.64.</div>

<h3>3. Free cash flow valuation</h3>
<div class="formula">FCFF = NI + NCC + Int(1 − t) − FCInv − WCInv = CFO + Int(1 − t) − FCInv = EBIT(1 − t) + Dep − FCInv − WCInv = EBITDA(1 − t) + Dep × t − FCInv − WCInv</div>
<div class="formula">FCFE = FCFF − Int(1 − t) + net borrowing = NI + NCC − FCInv − WCInv + net borrowing = CFO − FCInv + net borrowing</div>
<ul>
  <li><b>Non-cash charges</b>: add depreciation, amortization, impairments, non-cash restructuring charges, deferred tax increases (if not expected to reverse); subtract non-cash gains.</li>
  <li><b>WCInv</b> excludes cash and short-term debt (notes payable).</li>
  <li><b>Dividends, share repurchases and share issues don't affect FCFF or FCFE</b>; they're uses of FCFE. Changes in leverage affect FCFE (via net borrowing) but not FCFF.</li>
  <li>Firm value = FCFF discounted at <b>WACC</b>; equity = firm value − market value of debt (+ non-operating assets). Equity value = FCFE discounted at r_e.</li>
  <li>Use FCFF when the company is levered with negative FCFE or a changing capital structure; FCFE when capital structure is stable.</li>
  <li>Forecasting with a target debt ratio DR: FCFE = NI − (1 − DR)(FCInv − Dep) − (1 − DR)WCInv.</li>
</ul>
<div class="ex"><b>Example:</b> EBIT 600, t 25%, Dep 150, FCInv 250, WCInv 50, interest 80, net borrowing 40. FCFF = 450 + 150 − 250 − 50 = 300. FCFE = 300 − 60 + 40 = 280 (check: NI 390 + 150 − 300 + 40 = 280).</div>

<h3>4. Market-based valuation: multiples</h3>
<table>
  <tr><th>Multiple</th><th>Justified (fundamentals)</th><th>Notes</th></tr>
  <tr><td>P/E</td><td>(1 − b)/(r − g), leading</td><td>Use <b>underlying</b> (recurring) earnings; <b>normalize</b> cyclical EPS by historical average EPS or <b>average ROE × current BVPS</b> (better, reflects size changes)</td></tr>
  <tr><td>P/B</td><td><b>(ROE − g)/(r − g)</b></td><td>Good for financials and asset-heavy companies; adjust book value (e.g. goodwill, off-balance sheet)</td></tr>
  <tr><td>P/S</td><td>PM × (1 − b)(1 + g)/(r − g)</td><td>Works with negative earnings; ignores costs and leverage</td></tr>
  <tr><td>P/CF</td><td>—</td><td>Less affected by accounting choices</td></tr>
  <tr><td>EV/EBITDA</td><td>—</td><td>Compares companies with <b>different leverage</b>; EV = equity + debt + preferred + NCI − cash and investments</td></tr>
  <tr><td>Dividend yield</td><td>—</td><td>Income component only</td></tr>
</table>
<ul>
  <li><b>PEG</b> = P/E ÷ growth (in %): lower suggests cheaper, but assumes a linear relationship and ignores risk and duration of growth.</li>
  <li>Averaging multiples: the <b>harmonic mean</b> reduces the effect of large outliers (it's the inverse of the average earnings yield); the median is also robust.</li>
  <li><b>Inverse price ratios</b> (E/P, B/P) handle negative values and allow ranking.</li>
  <li>Market-level: <b>Fed model</b> (index E/P vs 10-year Treasury yield), <b>Yardeni</b> (adds credit and growth), <b>CAPE</b> (price / 10-year average real earnings).</li>
  <li><b>Momentum indicators</b>: earnings surprise, standardized unexpected earnings SUE = (actual − expected EPS)/σ of surprises, relative strength.</li>
</ul>

<h3>5. Residual income valuation</h3>
<div class="formula">RI_t = E_t − r × B_{t−1} = (ROE_t − r) × B_{t−1} · V0 = B0 + Σ RI_t/(1 + r)^t</div>
<div class="formula">Single-stage: V0 = B0 + (ROE − r) B0/(r − g) · Justified P/B = 1 + (ROE − r)/(r − g)</div>
<div class="formula">With persistence ω: V0 = B0 + Σ_{t=1}^{T−1} RI_t/(1 + r)^t + RI_T / [(1 + r − ω)(1 + r)^{T−1}]</div>
<ul>
  <li>RI recognizes the cost of equity capital; much of the value is in <b>current book value</b>, so less depends on the terminal value.</li>
  <li>Best for companies that don't pay dividends, have negative FCF, or whose terminal value is very uncertain; weaker if accounting is poor or clean surplus is violated.</li>
  <li><b>Clean surplus relation</b>: B_t = B_{t−1} + E_t − D_t. Items that bypass income (OCI: FX translation, pension remeasurements, some fair value changes) violate it; adjust if they're expected to recur.</li>
  <li><b>Persistence factor ω</b> (0 to 1): ω = 1 means RI persists forever; ω = 0 means RI disappears after the horizon. Lower ω: high ROE in competitive industries, extreme accounting accruals, high payout; higher ω: strong competitive position, low payout, persistent industry RI.</li>
  <li>EVA = NOPAT − WACC × invested capital (a firm-level RI); market value added = market value − invested capital.</li>
</ul>
<div class="ex"><b>Example:</b> B0 = 20, ROE 15%, r 10%, g 5%: V0 = 20 + 0.05 × 20/0.05 = 40. With RI1 = 1.00, RI2 = 1.10 and ω = 0.6 from year 2: V0 = 20 + 1.00/1.10 + 1.10/[(1.10 − 0.6)(1.10)] = 20 + 0.91 + 2.00 = 22.91.</div>

<h3>6. Private company valuation</h3>
<ul>
  <li><b>Differences</b> from public companies: company-specific (earlier life cycle, smaller size, owner-managers, weaker reporting) and stock-specific (lack of liquidity, restrictions, concentrated control).</li>
  <li><b>Normalized earnings</b>: adjust owner compensation to market levels, remove non-recurring and non-arm's-length items, personal expenses, and non-operating assets. Strategic buyers may include synergies (investment value); financial buyers don't.</li>
  <li><b>Income approach</b>: FCF method; <b>capitalized cash flow method</b> V = FCF1/(r − g) for stable growth; <b>excess earnings method</b> values intangibles by capitalizing earnings above the required return on working capital and fixed assets.</li>
  <li><b>Market approach</b>: <b>guideline public company</b> method (adjust for control with a premium if valuing control), <b>guideline transactions</b> method (deal multiples include control), <b>prior transaction</b> method.</li>
  <li><b>Asset-based approach</b>: for holding companies, early-stage or liquidating businesses.</li>
  <li><b>Required return</b>: <b>build-up</b> = r_f + ERP + size premium + company-specific risk (± industry); or expanded CAPM. Private companies often face higher costs of debt.</li>
</ul>
<div class="formula">DLOC = 1 − 1/(1 + control premium) · Combined discount = 1 − (1 − DLOC)(1 − DLOM)</div>
<div class="ex"><b>Example:</b> Control premium 25% → DLOC = 20%. DLOM 25%. Combined = 1 − 0.80 × 0.75 = 40%. A 15% stake in a $20m (control, marketable) company = 0.15 × 20 × 0.60 = $1.8m.</div>
<div class="how"><b>How it's tested:</b> Level II equity sets are long multi-step calculations: required return, Gordon/H-model/two-stage values, PVGO, FCFF/FCFE from statements, justified multiples, harmonic means, RI with persistence, DLOC/DLOM, plus "which model is most appropriate" judgments.</div>
<div class="key"><b>Carry forward to Level III</b>: Level III uses Gordon-growth and Grinold–Kroner style return forecasts for equity markets, and judges active equity strategies (value vs growth, style analysis) built on these valuation tools.</div>
<div class="trap"><b>Traps:</b> use D1 (not D0) in the numerator. Discount FCFF at WACC and FCFE at r_e. Dividends and buybacks don't change FCFF or FCFE. The harmonic mean is always ≤ the arithmetic mean.</div>
`;

window.QB_SETS.l2eq = [
  {
    title: "Kingsley Utilities: dividend discount model",
    case: `<p>Analyst Fiona Grant is valuing Kingsley Utilities using a Gordon growth model.</p>
<p><b>Exhibit 1. Inputs</b></p>
<table><tr><th>Input</th><th>Value</th></tr><tr><td>Most recent annual dividend (D0)</td><td>$1.80</td></tr><tr><td>Expected long-term dividend growth</td><td>5.0%</td></tr><tr><td>Expected payout ratio</td><td>60%</td></tr><tr><td>Beta</td><td>1.10</td></tr><tr><td>Risk-free rate</td><td>3.5%</td></tr><tr><td>Equity risk premium</td><td>5.5%</td></tr><tr><td>Current share price</td><td>$38.00</td></tr></table>`,
    qs: [
      ["Kingsley's required return on equity is closest to:",
        ["9.55%", "9.00%", "10.05%"],
        "CAPM: 3.5% + 1.10 × 5.5% = 3.5% + 6.05% = 9.55%.", "c"],
      ["Kingsley's intrinsic value per share is closest to:",
        ["$41.54", "$39.56", "$36.00"],
        "D1 = 1.80 × 1.05 = 1.89. V0 = 1.89/(0.0955 − 0.05) = 1.89/0.0455 = $41.54.", "c"],
      ["The present value of growth opportunities per share is closest to:",
        ["$8.55", "$3.54", "$22.75"],
        "E1 = D1/payout = 1.89/0.60 = 3.15. No-growth value = 3.15/0.0955 = 32.98. PVGO = 41.54 − 32.98 = $8.55.", "c"],
      ["The expected return implied by the current price, and the stock's status, are closest to:",
        ["9.97%, so the stock is undervalued", "9.55%, so the stock is fairly valued", "8.95%, so the stock is overvalued"],
        "Implied return = D1/P0 + g = 1.89/38 + 5% = 4.97% + 5% = 9.97%, above the 9.55% required return (and V0 > P0), so the stock is undervalued.", "c"]
    ]
  },
  {
    title: "Ardent Pharma: multistage growth",
    case: `<p>Portfolio manager Luis Ortega asks analyst Mira Shah to value two companies.</p>
<p><b>Ardent Pharma</b> just paid a dividend of $1.20. Its dividend growth rate is currently 12% and is expected to decline linearly over the next eight years to a long-term rate of 4%. The required return is 9%.</p>
<p><b>Bexley Software</b> just paid a dividend of $1.00. Dividends are expected to grow at 15% a year for three years and then at 5% a year forever. The required return is 10%.</p>
<p>Shah also notes that Bexley retains 60% of its earnings and has a sustainable ROE of 12%.</p>`,
    qs: [
      ["Using the H-model, Ardent's value per share is closest to:",
        ["$32.64", "$24.96", "$40.32"],
        "H = 8/2 = 4. V0 = 1.20(1.04)/(0.09 − 0.04) + 1.20 × 4 × (0.12 − 0.04)/(0.09 − 0.04) = 24.96 + 7.68 = $32.64.", "c"],
      ["The portion of Ardent's value attributable to above-normal growth is closest to:",
        ["$7.68", "$24.96", "$9.60"],
        "The second H-model term, D0 × H × (g_S − g_L)/(r − g_L) = 1.20 × 4 × 0.08/0.05 = $7.68, is the value of extraordinary growth.", "c"],
      ["Bexley's value per share is closest to:",
        ["$27.28", "$31.94", "$23.99"],
        "D1 = 1.15, D2 = 1.3225, D3 = 1.5209. Terminal value at year 3 = 1.5209 × 1.05/0.05 = 31.94. V0 = 1.15/1.10 + 1.3225/1.10² + (1.5209 + 31.94)/1.10³ = 1.045 + 1.093 + 25.138 = $27.28.", "c"],
      ["Bexley's sustainable growth rate is closest to:",
        ["7.2%", "4.8%", "12.0%"],
        "g = b × ROE = 0.60 × 12% = 7.2%. (4.8% would use the payout ratio instead of the retention ratio.)", "c"]
    ]
  },
  {
    title: "Stanmore Industrial: free cash flow",
    case: `<p>Analyst Ravi Menon is valuing Stanmore Industrial with free cash flow models. He expects all cash flows to grow at 3.5% a year forever.</p>
<p><b>Exhibit 1. Current-year data ($ millions)</b></p>
<table><tr><th>Item</th><th>Amount</th></tr><tr><td>EBIT</td><td>600</td></tr><tr><td>Interest expense</td><td>80</td></tr><tr><td>Depreciation</td><td>150</td></tr><tr><td>Capital expenditures</td><td>250</td></tr><tr><td>Increase in working capital (excluding cash and short-term debt)</td><td>50</td></tr><tr><td>Net borrowing</td><td>40</td></tr><tr><td>Dividends paid</td><td>120</td></tr><tr><td>Tax rate</td><td>25%</td></tr></table>
<p><b>Exhibit 2. Other data</b></p>
<table><tr><th>Item</th><th>Value</th></tr><tr><td>WACC</td><td>8.5%</td></tr><tr><td>Market value of debt</td><td>$1,500 million</td></tr><tr><td>Shares outstanding</td><td>100 million</td></tr></table>`,
    qs: [
      ["Stanmore's current FCFF is closest to:",
        ["$300 million", "$240 million", "$180 million"],
        "FCFF = EBIT(1 − t) + Dep − FCInv − WCInv = 450 + 150 − 250 − 50 = $300 million.", "c"],
      ["Stanmore's current FCFE is closest to:",
        ["$280 million", "$160 million", "$300 million"],
        "FCFE = FCFF − Int(1 − t) + net borrowing = 300 − 60 + 40 = $280 million. Dividends paid don't enter the calculation (that error gives 160).", "c"],
      ["Using the FCFF model, Stanmore's equity value per share is closest to:",
        ["$47.10", "$62.10", "$45.00"],
        "Firm value = 300 × 1.035/(0.085 − 0.035) = 310.5/0.05 = 6,210. Equity = 6,210 − 1,500 = 4,710; per share $47.10.", "c"],
      ["Which of the following would change Stanmore's FCFE but not its FCFF?",
        ["Higher net borrowing", "Higher dividend payments", "Higher capital spending"],
        "Net borrowing enters FCFE only. Dividends affect neither (they are a use of FCFE). Capital spending reduces both.", "r"]
    ]
  },
  {
    title: "Rowan Bancorp and peers: multiples",
    case: `<p>Analyst Nadia Haas is using multiples to value banks and industrial companies.</p>
<p>For <b>Rowan Bancorp</b>, she expects a sustainable ROE of 14%, long-term growth of 6% and a required return of 10%.</p>
<p><b>Exhibit 1. Peer group P/E ratios</b></p>
<table><tr><th>Peer</th><th>P/E</th></tr><tr><td>A</td><td>12</td></tr><tr><td>B</td><td>15</td></tr><tr><td>C</td><td>30</td></tr><tr><td>D</td><td>18</td></tr></table>
<p>Industrial company <b>Corwin</b> trades at a P/E of 18 with expected EPS growth of 12% a year; the peer median PEG is 1.8.</p>
<p>Cyclical company <b>Dalby Steel</b> has a current book value per share of $25. Its ROE over the last full cycle averaged 12%, and its EPS over the same cycle averaged $2.40.</p>`,
    qs: [
      ["Rowan's justified P/B is closest to:",
        ["2.0", "1.4", "3.5"],
        "Justified P/B = (ROE − g)/(r − g) = (0.14 − 0.06)/(0.10 − 0.06) = 2.0.", "c"],
      ["The harmonic mean P/E of the peer group is closest to:",
        ["16.7", "18.8", "16.5"],
        "Harmonic mean = 4/(1/12 + 1/15 + 1/30 + 1/18) = 4/0.2389 = 16.7. The arithmetic mean is 18.75; the median is 16.5. The harmonic mean reduces the effect of the outlier (30).", "c"],
      ["Based on its PEG ratio, Corwin appears:",
        ["Undervalued relative to peers (PEG 1.5)", "Overvalued relative to peers (PEG 2.2)", "Fairly valued (PEG 1.8)"],
        "PEG = P/E ÷ growth in percent = 18/12 = 1.5, below the peer median of 1.8.", "c"],
      ["Using the method of average ROE, Dalby's normalized EPS is closest to:",
        ["$3.00", "$2.40", "$2.88"],
        "Normalized EPS = average ROE × current BVPS = 12% × 25 = $3.00. The $2.40 historical average EPS ignores the company's growth in size.", "c"]
    ]
  },
  {
    title: "Wexford Insurance: residual income",
    case: `<p>Analyst Tomás Keane values Wexford Insurance using residual income models. Wexford's current book value per share is $20 and its required return on equity is 10%.</p>
<p><b>Model 1</b> (single-stage): ROE stays at 15% and residual income grows at 5% a year forever.</p>
<p><b>Model 2</b> (multistage with fading): Keane forecasts EPS of $3.00 next year and $3.30 the year after. Wexford will pay a dividend of $1.00 next year. After year 2, residual income is expected to fade with a persistence factor of 0.6.</p>
<p>Keane notes that Wexford reports large unrealized gains and losses on investments in other comprehensive income.</p>`,
    qs: [
      ["Wexford's residual income per share for next year is closest to:",
        ["$1.00", "$3.00", "$0.80"],
        "RI1 = EPS1 − r × B0 = 3.00 − 0.10 × 20 = $1.00.", "c"],
      ["Under Model 1, Wexford's value per share is closest to:",
        ["$40.00", "$30.00", "$20.00"],
        "V0 = B0 + (ROE − r)B0/(r − g) = 20 + (0.05 × 20)/0.05 = 20 + 20 = $40.00.", "c"],
      ["Under Model 2, Wexford's value per share is closest to:",
        ["$22.91", "$22.16", "$24.73"],
        "B1 = 20 + 3.00 − 1.00 = 22. RI2 = 3.30 − 0.10 × 22 = 1.10. V0 = 20 + 1.00/1.10 + 1.10/[(1 + 0.10 − 0.6)(1.10)] = 20 + 0.909 + 2.000 = $22.91.", "c"],
      ["Keane's note about OCI most likely means that:",
        ["Clean surplus is violated, so he may need to adjust", "Residual income models can't be used for insurers", "The persistence factor must be set to 1"],
        "Gains and losses that bypass net income violate the clean surplus relation; if they're expected to recur, the analyst should adjust earnings or book value.", "s"]
    ]
  },
  {
    title: "Harbour Marine Services: private company",
    case: `<p>Valuation specialist Erin Cole is valuing a 15% minority interest in Harbour Marine Services, a privately held company, for an estate settlement.</p>
<p><b>Exhibit 1. Inputs</b></p>
<table><tr><th>Input</th><th>Value</th></tr><tr><td>Risk-free rate</td><td>4.0%</td></tr><tr><td>Equity risk premium</td><td>5.5%</td></tr><tr><td>Size premium</td><td>3.0%</td></tr><tr><td>Company-specific risk premium</td><td>2.5%</td></tr><tr><td>Normalized FCFF next year</td><td>$2.4 million</td></tr><tr><td>Long-term FCFF growth</td><td>3.0%</td></tr><tr><td>WACC</td><td>13.0%</td></tr><tr><td>Debt (market value)</td><td>$4.0 million</td></tr><tr><td>Control premium (from comparable transactions)</td><td>25%</td></tr><tr><td>Discount for lack of marketability</td><td>25%</td></tr></table>
<p>Normalized FCFF reflects market-rate compensation for the owner, so the income approach gives a controlling, marketable value.</p>`,
    qs: [
      ["Using the build-up method, Harbour's cost of equity is closest to:",
        ["15.0%", "12.5%", "17.5%"],
        "4.0% + 5.5% + 3.0% + 2.5% = 15.0%.", "c"],
      ["Using the capitalized cash flow method, the value of Harbour's equity is closest to:",
        ["$20.0 million", "$24.0 million", "$18.5 million"],
        "Firm value = 2.4/(0.13 − 0.03) = $24.0 million. Equity = 24.0 − 4.0 = $20.0 million.", "c"],
      ["The combined discount for lack of control and lack of marketability is closest to:",
        ["40%", "50%", "45%"],
        "DLOC = 1 − 1/1.25 = 20%. Combined = 1 − (1 − 0.20)(1 − 0.25) = 1 − 0.60 = 40%. (Adding them, 45%, or using the premium itself, 50%, are errors.)", "c"],
      ["The value of the 15% minority interest is closest to:",
        ["$1.80 million", "$3.00 million", "$2.16 million"],
        "0.15 × 20.0 × (1 − 0.40) = $1.80 million.", "c"]
    ]
  }
];

window.GLOSSARY.push(
  ["Gordon growth model", "V0 = D1/(r − g); implied growth g = r − D1/P0.", "l2eq"],
  ["PVGO", "V0 − E1/r: value of future growth opportunities.", "l2eq"],
  ["H-model", "V0 = D0(1 + gL)/(r − gL) + D0 × H × (gS − gL)/(r − gL); growth declines linearly over 2H years.", "l2eq"],
  ["Sustainable growth rate", "g = b × ROE (b = retention ratio).", "l2eq"],
  ["FCFF", "EBIT(1 − t) + Dep − FCInv − WCInv = NI + NCC + Int(1 − t) − FCInv − WCInv; discount at WACC.", "l2eq"],
  ["FCFE", "FCFF − Int(1 − t) + net borrowing; discount at r_e.", "l2eq"],
  ["Justified P/B", "(ROE − g)/(r − g).", "l2eq"],
  ["Justified leading P/E", "(1 − b)/(r − g).", "l2eq"],
  ["Harmonic mean multiple", "n/Σ(1/x); reduces the impact of large outliers.", "l2eq"],
  ["PEG ratio", "P/E ÷ expected growth (in %); lower suggests cheaper.", "l2eq"],
  ["Normalized EPS (average ROE)", "Average ROE over the cycle × current BVPS.", "l2eq"],
  ["Residual income", "E_t − r × B_{t−1}; V0 = B0 + PV of RI.", "l2eq"],
  ["Persistence factor (ω)", "0 to 1; terminal RI_T/(1 + r − ω); low for high-ROE competitive firms.", "l2eq"],
  ["Clean surplus relation", "B_t = B_{t−1} + E_t − D_t; violated by OCI items.", "l2eq"],
  ["DLOC and DLOM", "DLOC = 1 − 1/(1 + control premium); combined = 1 − (1 − DLOC)(1 − DLOM).", "l2eq"]
);
