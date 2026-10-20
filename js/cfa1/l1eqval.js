// CFA Level I · Equity Investments · Learning module 8: Equity Valuation: Concepts and Basic Tools.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1eqval = `
<p class="syl">CFA Level I · Equity Investments · Learning module 8 of 8 · Equity Valuation: Concepts and Basic Tools</p>
<p>This is the most calculation-heavy Equity lesson and one of the most tested. It covers comparing intrinsic value with price, the three families of valuation models, dividends and their timeline, the dividend discount model (including the Gordon growth and multistage versions), free cash flow to equity, price and enterprise value multiples, asset-based valuation, and how to choose a model.</p>

<h3>1. Intrinsic value vs market price</h3>
<ul>
  <li>If estimated intrinsic value &gt; market price → <b>undervalued</b> (buy); if &lt; → <b>overvalued</b> (sell or avoid); if about equal → <b>fairly valued</b>.</li>
  <li>Before acting, consider how confident you are in the model and inputs, and whether the market may know something you don't. Small differences are often within the margin of error.</li>
</ul>
<table>
  <tr><th>Model family</th><th>Idea</th><th>Examples</th></tr>
  <tr><td><b>Present value</b> (discounted cash flow)</td><td>Value = present value of expected future cash flows to shareholders</td><td>Dividend discount model (DDM), free cash flow to equity (FCFE)</td></tr>
  <tr><td><b>Multiplier</b> (market multiple)</td><td>Value based on a ratio of price (or enterprise value) to a fundamental</td><td>P/E, P/B, P/S, P/CF, EV/EBITDA</td></tr>
  <tr><td><b>Asset-based</b></td><td>Value = market value of assets − market value of liabilities</td><td>Adjusted book value, liquidation value</td></tr>
</table>

<h3>2. Dividends and corporate actions <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Cash dividends</b>: regular, special (extra, one-off) and liquidating (a return of capital).</li>
  <li><b>Stock dividend</b>: new shares instead of cash (e.g. 10%). <b>Stock split</b>: each share becomes several (e.g. 2-for-1). <b>Reverse split</b>: fewer, higher-priced shares. None of these changes the company's total value or a shareholder's proportional ownership; the share price adjusts.</li>
  <li><b>Share repurchase (buyback)</b>: an alternative to cash dividends. Fewer shares can raise EPS: EPS rises if the earnings yield (E/P) on the shares bought exceeds the after-tax cost of the funds used, and falls if it's lower.</li>
</ul>
<div class="ex"><b>Example:</b> you own 1,000 shares at $60. After a 3-for-2 split you own 1,500 shares at about $40 (still $60,000). After a 10% stock dividend on 1,000 shares at $55, you'd own 1,100 shares at about $50.<br>A company borrows at an after-tax 6% to buy back shares trading at a P/E of 20 (earnings yield 5%): EPS <b>falls</b>, because the interest cost exceeds the earnings given up.</div>
<h4>Dividend timeline</h4>
<table>
  <tr><th>Date</th><th>What happens</th></tr>
  <tr><td><b>Declaration date</b></td><td>The board announces the dividend, amount and dates</td></tr>
  <tr><td><b>Ex-dividend date</b></td><td>First day the share trades <b>without</b> the dividend; buyers on or after this date don't get it, and the price typically drops by about the dividend. Set before the record date based on the settlement cycle (one business day before under T+1 settlement)</td></tr>
  <tr><td><b>Holder-of-record date</b></td><td>Shareholders on the company's records on this date receive the dividend</td></tr>
  <tr><td><b>Payment date</b></td><td>The dividend is paid</td></tr>
</table>

<h3>3. The dividend discount model <span class="hot">Highly tested</span></h3>
<div class="formula">General DDM: V<sub>0</sub> = Σ D<sub>t</sub> / (1 + r)<sup>t</sup><br>Preferred share (perpetual, fixed dividend): V<sub>0</sub> = D / r<br>Gordon (constant) growth: V<sub>0</sub> = D<sub>1</sub> / (r − g) = D<sub>0</sub>(1 + g) / (r − g), valid only if r &gt; g<br>Implied required return: r = D<sub>1</sub> / P<sub>0</sub> + g<br>Sustainable growth rate: g = b × ROE, where b = retention rate = 1 − payout ratio</div>
<div class="ex"><b>Example 1:</b> D<sub>0</sub> = $1.50, g = 4%, r = 9%. D<sub>1</sub> = 1.56; V<sub>0</sub> = 1.56 / 0.05 = <b>$31.20</b>.<br><b>Example 2:</b> ROE 15%, payout 40% → g = 0.60 × 15% = <b>9%</b>.<br><b>Example 3:</b> price $50, D<sub>1</sub> = $2.50, g = 5% → implied r = 5% + 5% = <b>10%</b>.</div>
<h4>Multistage DDM</h4>
<p>When growth isn't constant: forecast each dividend in the high-growth period, find the price at the end of it with the Gordon model, then discount everything back.</p>
<div class="ex"><b>Example 4:</b> D<sub>1</sub> = $2.00, D<sub>2</sub> = $2.40, then growth of 4% forever; r = 11%.<br>P<sub>2</sub> = 2.40 × 1.04 / (0.11 − 0.04) = $35.66.<br>V<sub>0</sub> = 2.00 / 1.11 + (2.40 + 35.66) / 1.11² = 1.80 + 30.89 = <b>$32.69</b>.</div>
<div class="calc"><b>BA II Plus:</b> [CF] [2nd][CLR WORK] · CF0 = 0 · C01 = 2 [↓] F01 = 1 · C02 = 38.0571 · [NPV] I = 11 [↓] [CPT] → 32.69</div>
<div class="trap"><b>Traps:</b> the Gordon model uses <b>next year's</b> dividend D<sub>1</sub>; the terminal price at time N uses D<sub>N+1</sub> and must still be discounted N years; the model blows up when g is close to r. It suits mature companies with stable dividend growth and payout.</div>

<h3>4. Free cash flow to equity</h3>
<div class="formula">FCFE = cash flow from operations − fixed capital investment + net borrowing<br>Value of equity = present value of FCFE discounted at the cost of equity (Gordon form: FCFE<sub>1</sub> / (r − g))</div>
<div class="ex"><b>Example:</b> CFO $150 million, capex $60 million, net new borrowing $20 million → FCFE = 150 − 60 + 20 = <b>$110 million</b>.</div>
<p>Use FCFE for companies that don't pay dividends, pay dividends far below what they could afford, or when taking a <b>control</b> perspective (an acquirer can change the payout).</p>

<h3>5. Multiples <span class="hot">Highly tested</span></h3>
<div class="formula">Trailing P/E = price / last 12 months' EPS · Forward (leading) P/E = price / next 12 months' expected EPS<br>Justified forward P/E = (D<sub>1</sub>/E<sub>1</sub>) / (r − g) = payout ratio / (r − g)<br>Enterprise value (EV) = market value of equity + market value of debt + preferred shares + minority interest − cash and short-term investments</div>
<div class="ex"><b>Example:</b> price $45, last year's EPS $3.00, next year's expected EPS $3.60 → trailing P/E 15.0, forward P/E 12.5.<br>Payout 40%, r = 10%, g = 6% → justified forward P/E = 0.40 / 0.04 = <b>10.0</b>.</div>
<table>
  <tr><th>Multiple</th><th>Useful when</th><th>Drawbacks</th></tr>
  <tr><td>P/E</td><td>Earnings drive value; widely used</td><td>Meaningless with negative earnings; affected by accounting choices and one-off items</td></tr>
  <tr><td>P/B</td><td>Banks and financial firms with marketable assets; book value is stable and usually positive</td><td>Ignores intangibles not on the balance sheet; affected by inflation and accounting</td></tr>
  <tr><td>P/S</td><td>Start-ups or cyclical firms with negative or volatile earnings</td><td>Ignores costs and margins</td></tr>
  <tr><td>P/CF</td><td>Cash flow is harder to manipulate than earnings</td><td>Cash flow definitions vary</td></tr>
  <tr><td>EV/EBITDA</td><td>Comparing companies with <b>different capital structures</b> (EBITDA is before interest), capital-intensive firms</td><td>Ignores capex and working capital needs</td></tr>
</table>
<p><b>Method of comparables</b>: value a company by applying the average multiple of similar companies (law of one price). A lower P/E than peers suggests undervaluation <b>only if</b> the company has similar growth and risk; and if the whole peer group is overvalued, the comparison won't reveal it.</p>

<h3>6. Asset-based valuation and choosing a model</h3>
<ul>
  <li><b>Asset-based</b>: adjust balance sheet items to market (fair) values. Works best for companies with mostly <b>tangible, marketable</b> assets (natural resources, financial firms, real estate holding companies) or that are being liquidated. Poor for firms whose value comes from intangibles, human capital or growth.</li>
  <li>Choosing a model: DDM for steady dividend payers with payouts tied to earnings; FCFE for non-payers or a control view; multiples for relative value against peers; asset-based for asset-heavy or liquidating firms. Analysts often use several models and compare results.</li>
</ul>

<div class="how"><b>How it's tested:</b> under/overvalued conclusions, effects of splits, stock dividends and buybacks, ex-dividend timing, Gordon growth and preferred share values, sustainable growth, implied required return, two-stage DDM, FCFE, trailing vs forward and justified P/E, EV calculation, and matching models and multiples to situations.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Compare intrinsic value with market price and describe the three families of models.</li>
  <li>Describe types of dividends, splits and buybacks, and the dividend timeline.</li>
  <li>Calculate values with the general, Gordon and multistage DDM, and preferred share values.</li>
  <li>Calculate FCFE, sustainable growth and implied required return.</li>
  <li>Calculate and interpret P/E (trailing, forward, justified), P/B, P/S, P/CF and EV multiples, and describe asset-based valuation.</li>
</ul></div>
`;

window.QB_HARD.l1eqval = [
  ["A company just paid a dividend of $2.00. Dividends are expected to grow at 5% a year indefinitely and the required return is 10%. The value of the stock is closest to:",
    ["$42.00", "$40.00", "$21.00"],
    "V0 = D0(1 + g) ÷ (r − g) = 2.10 ÷ 0.05 = $42.00. $40.00 forgets to grow the dividend one period.", "c"],
  ["A non-callable, non-convertible preferred share pays a $5.00 annual dividend. If investors require an 8% return, its value is closest to:",
    ["$62.50", "$40.00", "$67.50"],
    "Preferred stock as a perpetuity: V = D ÷ r = 5.00 ÷ 0.08 = $62.50.", "c"],
  ["A company just paid a $1.00 dividend. Dividends will grow 20% a year for two years and then 5% a year forever. With a 10% required return, the stock's value is closest to:",
    ["$27.27", "$30.24", "$25.00"],
    "D1 = 1.20, D2 = 1.44, D3 = 1.512. V2 = 1.512 ÷ 0.05 = 30.24. V0 = 1.20/1.10 + (1.44 + 30.24)/1.21 = 1.09 + 26.18 = $27.27.", "c"],
  ["A company pays out 40% of earnings. Its required return is 10% and its dividend growth rate is 6%. Its justified forward P/E is closest to:",
    ["10.0", "6.7", "4.0"],
    "Justified forward P/E = payout ÷ (r − g) = 0.40 ÷ (0.10 − 0.06) = 10.0.", "c"],
  ["A company has a market capitalization of 500, debt of 200, preferred stock of 50, and cash and short-term investments of 80. Its enterprise value is closest to:",
    ["670", "830", "750"],
    "EV = equity + debt + preferred − cash = 500 + 200 + 50 − 80 = 670.", "c"],
  ["For a company that pays no dividends but has positive, predictable free cash flow, the most appropriate present value model is:",
    ["An FCFE model", "A dividend discount model", "An asset-based valuation model"],
    "Without dividends a DDM requires guessing future payout policy; FCFE captures the cash available to shareholders.", "r"],
  ["The method of comparables is based on the principle that:",
    ["Similar assets should sell at similar multiples", "A firm's value equals the present value of its dividends", "Markets price every peer group correctly"],
    "Relative valuation applies the law of one price: comparable companies should trade at similar multiples. It shows relative, not absolute, value.", "r"],
  ["Asset-based valuation is most appropriate for:",
    ["A firm whose assets are mostly tangible and marketable", "A fast-growing technology company", "A company with large intangible assets not recorded on its balance sheet"],
    "Asset-based models work when assets have observable market values (e.g. natural resource or holding companies, or liquidation). They miss intangibles and growth.", "r"],
  ["An analyst estimates a share's intrinsic value at $42. It trades at $38. If the analyst is confident in the estimate, the share is:",
    ["Undervalued", "Overvalued", "Fairly valued"],
    "Intrinsic value above price means the shares are undervalued.", "r"],
  ["A company just paid a dividend of $1.50. Dividends will grow 4% a year forever, and the required return is 9%. The value of the share is closest to:",
    ["$31.20", "$30.00", "$17.33"],
    "D₁ = 1.50 × 1.04 = 1.56; 1.56 / (0.09 − 0.04) = $31.20. $30.00 uses D₀; $17.33 ignores growth in the denominator.", "c"],
  ["A company has an ROE of 15% and pays out 40% of its earnings. Its sustainable growth rate is:",
    ["9%", "6%", "15%"],
    "g = retention × ROE = 0.60 × 15% = 9%. Using the payout ratio gives 6%.", "c"],
  ["A share trades at $50. Next year's dividend is expected to be $2.50, and dividends grow at 5% a year. The implied required return is:",
    ["10%", "5%", "15%"],
    "r = D₁ / P₀ + g = 5% + 5% = 10%.", "c"],
  ["Next year's dividend is $2.00 and the following year's is $2.40. Dividends then grow at 4% forever. With an 11% required return, the share's value is closest to:",
    ["$32.69", "$35.66", "$30.89"],
    "P₂ = 2.40 × 1.04 / 0.07 = 35.66. V₀ = 2.00/1.11 + (2.40 + 35.66)/1.11² = $32.69. $35.66 is the undiscounted year-2 price.", "c"],
  ["An investor owns 1,000 shares priced at $60. After a 3-for-2 stock split, she most likely owns:",
    ["1,500 shares worth about $40 each", "1,500 shares worth about $60 each", "667 shares worth about $90 each"],
    "Splits increase the number of shares and reduce the price proportionally; total value stays about $60,000.", "c"],
  ["A company declares a dividend. An investor who buys the shares on the ex-dividend date:",
    ["Won't receive the dividend", "Will receive the dividend", "Receives half of the dividend"],
    "The ex-dividend date is the first day shares trade without the dividend.", "r"],
  ["A company borrows at an after-tax cost of 6% to buy back shares trading at a P/E of 20. Its EPS will most likely:",
    ["Fall", "Rise", "Stay the same"],
    "The earnings yield is 1/20 = 5%, below the 6% after-tax borrowing cost, so the earnings given up are smaller than the interest added.", "c"],
  ["A company has cash flow from operations of $150 million, capital expenditure of $60 million and net new borrowing of $20 million. Its FCFE is:",
    ["$110 million", "$70 million", "$90 million"],
    "FCFE = CFO − FCInv + net borrowing = 150 − 60 + 20 = $110 million.", "c"],
  ["A share trades at $45. Last year's EPS was $3.00 and next year's EPS is expected to be $3.60. Its trailing and forward P/E ratios are:",
    ["15.0 and 12.5", "12.5 and 15.0", "15.0 and 15.0"],
    "Trailing = 45 / 3.00 = 15.0; forward = 45 / 3.60 = 12.5.", "c"],
  ["EV/EBITDA is especially useful for comparing companies that have:",
    ["Different levels of debt", "Negative or volatile EBITDA", "Mostly financial assets"],
    "EBITDA is before interest and EV includes debt, so the ratio isn't distorted by leverage.", "r"],
  ["Which multiple is most suitable for valuing a young company with negative earnings?",
    ["Price-to-sales", "Price-to-earnings", "Dividend yield"],
    "P/E is meaningless with negative earnings; sales are positive even when earnings aren't.", "r"],
  ["A company's P/E is 14 while its peers average 18. The company is most likely undervalued relative to peers if:",
    ["It has similar growth and risk", "Its growth is far lower than peers'", "Its risk is far higher"],
    "A lower multiple only signals undervaluation if fundamentals are comparable; lower growth or higher risk justify a lower P/E.", "s"],
  ["The Gordon growth model is most appropriate for valuing:",
    ["A mature company with stable dividend growth", "A start-up that pays no dividends", "A firm whose growth exceeds its required return"],
    "The model assumes constant growth below the required return.", "r"],
];

window.GLOSSARY.push(
  ["Gordon growth model","V0 = D1 ÷ (r − g), with r > g. Preferred stock: V0 = D ÷ r.","l1eqval"],
  ["Justified forward P/E","(D1/E1) ÷ (r − g) = payout ratio ÷ (r − g).","l1eqval"],
  ["Enterprise value","Market value of equity + debt + preferred (+ NCI) − cash and short-term investments.","l1eqval"],
  ["Ex-dividend date", "First day a share trades without the right to the declared dividend.", "l1eqval"],
  ["Sustainable growth rate", "g = retention ratio × ROE.", "l1eqval"],
  ["FCFE", "Cash flow from operations − fixed capital investment + net borrowing.", "l1eqval"],
  ["Trailing vs forward P/E", "Price / last 12 months' EPS vs price / expected next 12 months' EPS.", "l1eqval"],
  ["Method of comparables", "Valuing a company using the multiples of similar companies.", "l1eqval"]
);
