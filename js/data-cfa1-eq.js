// CFA Level I · Equity Investments: study notes, practice questions and flashcards.
window.NOTES = window.NOTES || {};
window.QB_HARD = window.QB_HARD || {};
window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1eq = `
<p class="syl">CFA Level I · Equity Investments · 11–14% of the exam · Learning modules: Market Organization and Structure · Security Market Indexes · Market Efficiency · Overview of Equity Securities · Company Analysis: Past and Present · Industry and Competitive Analysis · Company Analysis: Forecasting · Equity Valuation: Concepts and Basic Tools</p>

<h3>1. Market organization and structure</h3>
<p>The financial system lets people save, borrow, raise equity, manage risk, exchange assets and use information. A well-functioning system has <b>operational efficiency</b> (low trading costs), <b>informational efficiency</b> (prices reflect information) and <b>allocational efficiency</b> (capital goes to its most productive uses).</p>
<ul>
  <li><b>Intermediaries</b>: brokers (agents), dealers (trade from inventory), exchanges and ATSs, securitizers, depository institutions, insurers, arbitrageurs, clearinghouses and custodians.</li>
  <li><b>Positions</b>: long; <b>short</b> (borrow and sell; pay any dividends to the lender; post collateral; unlimited loss potential); leveraged (margin).</li>
</ul>
<h4>Margin purchases</h4>
<div class="formula">Leverage ratio = 1 ÷ Initial margin · Margin call price (long) = P0 × (1 − Initial margin) ÷ (1 − Maintenance margin)</div>
<div class="ex"><b>Example:</b> Buy 1,000 shares at $40 with 50% initial margin ($20,000 equity, $20,000 loan). If the price rises to $48, equity gains $8,000 → 40% return on equity (ignoring interest and commissions) vs 20% on the stock. With 30% maintenance margin, a margin call comes at 40 × 0.5 ÷ 0.7 = $28.57.</div>
<h4>Orders</h4>
<ul>
  <li><b>Execution instructions</b>: market (immediate, price not guaranteed), limit (price limit; may not fill), all-or-nothing, hidden and iceberg orders.</li>
  <li><b>Validity instructions</b>: day, good-till-cancelled, immediate-or-cancel (fill-or-kill), good-on-close/open, <b>stop</b> orders (a stop-loss sell triggers when the price falls to the stop price, limiting losses).</li>
  <li><b>Clearing instructions</b>: how trades are settled; short sales must be marked.</li>
</ul>
<h4>Primary and secondary markets</h4>
<ul>
  <li><b>Primary</b>: IPOs and seasoned offerings (underwritten or best efforts), private placements (to qualified investors), <b>shelf registration</b> (register once, sell over time), dividend reinvestment plans, <b>rights offerings</b> (existing shareholders buy new shares at a discount).</li>
  <li><b>Secondary</b>: <b>call markets</b> (trade only at set times, orders batched; often used for openings and closings) vs <b>continuous</b> markets. Execution mechanisms: <b>quote-driven</b> (dealer) markets, <b>order-driven</b> markets (rules match orders), <b>brokered</b> markets (brokers find counterparties for unique assets).</li>
  <li><b>Order-matching precedence</b> in order-driven markets: <b>price priority</b> first, then display precedence (visible before hidden), then <b>time</b> precedence.</li>
</ul>
<p>Regulation aims to prevent fraud, insider trading and agency abuses, ensure common financial reporting standards and minimum capital, and keep markets fair and liquid.</p>

<h3>2. Security market indexes</h3>
<ul>
  <li><b>Price return</b> index: price changes only. <b>Total return</b> index: assumes dividends/interest are reinvested.</li>
  <li><b>Construction decisions</b>: target market, constituent selection, weighting, rebalancing (restoring weights) and reconstitution (changing constituents).</li>
</ul>
<table>
  <tr><th>Weighting</th><th>How</th><th>Features</th></tr>
  <tr><td><b>Price</b></td><td>Sum of prices ÷ divisor</td><td>High-priced stocks dominate; splits change the divisor; e.g. Dow Jones Industrial Average, Nikkei 225</td></tr>
  <tr><td><b>Equal</b></td><td>Same weight each</td><td>Small-cap tilt; needs <b>frequent rebalancing</b></td></tr>
  <tr><td><b>Market-cap</b> (float-adjusted)</td><td>Price × (floating) shares</td><td>Large and possibly overvalued stocks dominate (momentum tilt); self-rebalancing</td></tr>
  <tr><td><b>Fundamental</b></td><td>Weights by sales, earnings, book value, dividends</td><td><b>Value/contrarian</b> tilt</td></tr>
</table>
<div class="ex"><b>Example:</b> A at $50 (100 shares), B at $20 (200), C at $30 (500). If A rises to $60: price-weighted index rises from 33.33 to 36.67 (+10.0%); market-cap weighted from 24,000 to 25,000 (+4.2%); equal-weighted average of returns (20% + 0 + 0) ÷ 3 = +6.7%.</div>
<ul>
  <li><b>Uses</b>: gauges of market sentiment, proxies for market returns (beta, CAPM), performance benchmarks, model portfolios for index funds and ETFs.</li>
  <li><b>Equity indexes</b>: broad market, multi-market, sector, style (value/growth, size).</li>
  <li><b>Fixed income indexes</b> are hard to build: huge numbers of issues, mostly <b>OTC</b> trading with stale or dealer prices, and constant turnover as bonds mature and are issued.</li>
  <li><b>Alternatives</b>: commodity indexes (based on futures), real estate (appraisal, repeat-sales, REIT indexes), <b>hedge fund indexes</b> (voluntary reporting → <b>survivorship</b> and <b>backfill</b> biases that overstate returns).</li>
</ul>

<h3>3. Market efficiency</h3>
<table>
  <tr><th>Form</th><th>Prices reflect</th><th>Can't earn abnormal returns with</th></tr>
  <tr><td><b>Weak</b></td><td>All past market data (prices, volume)</td><td>Technical analysis</td></tr>
  <tr><td><b>Semi-strong</b></td><td>All <b>public</b> information</td><td>Technical and fundamental analysis of public information</td></tr>
  <tr><td><b>Strong</b></td><td>All public and <b>private</b> information</td><td>Anything, even insider information</td></tr>
</table>
<p>Evidence: developed markets are generally weak and semi-strong efficient, but <b>not strong-form</b> (insiders earn abnormal returns). Efficiency depends on the number of participants, availability of information, impediments to trading (e.g. short-selling limits) and transaction/information costs. Implications: passive management is attractive in efficient markets; active managers must find inefficiencies after costs.</p>
<ul>
  <li><b>Time-series anomalies</b>: January effect (small caps), day-of-week, momentum (short-term) and overreaction (long-term reversals).</li>
  <li><b>Cross-sectional anomalies</b>: size effect, value effect (low P/B, low P/E outperforming).</li>
  <li><b>Other</b>: closed-end fund discounts, <b>post-earnings announcement drift</b> (prices keep moving after earnings surprises), IPO underpricing and long-run underperformance, predictability from dividend yields.</li>
  <li>Many anomalies disappear after costs or are explained by risk or data mining.</li>
  <li><b>Behavioural finance</b>: loss aversion (disposition effect: selling winners too early, holding losers), herding, overconfidence, information cascades. These may explain anomalies but don't necessarily make markets exploitable.</li>
</ul>

<h3>4. Overview of equity securities</h3>
<ul>
  <li><b>Common shares</b>: residual claim, voting rights. <b>Statutory voting</b>: one vote per share per director seat. <b>Cumulative voting</b>: votes = shares × seats, can be concentrated (helps minorities).</li>
  <li><b>Preference shares</b>: fixed dividend, priority over common. <b>Cumulative</b> (unpaid dividends accrue), <b>participating</b> (extra dividends if profits exceed a level), <b>convertible</b>, <b>callable</b> (riskier for holders → higher yield), <b>putable</b> (less risky → lower yield).</li>
  <li><b>Risk ranking</b> (most to least risky): common, then preferred; within preferred, callable &gt; non-callable, non-putable &gt; putable.</li>
  <li><b>Private vs public equity</b>: private equity is less liquid, less transparent, has a long-term focus and potentially higher returns; public equity has liquidity and disclosure.</li>
  <li><b>Foreign equity</b>: direct investing, <b>depository receipts</b> (sponsored: foreign company involved, investors get voting rights; unsponsored: depository holds the votes), global DRs, ADRs (Level I OTC, Level II exchange-listed, Level III capital raising, Rule 144A private), basket of listed DRs and ETFs.</li>
  <li><b>Book value vs market value</b>: book = historical accounting equity; market value reflects future expectations. <b>ROE</b> = NI ÷ average book equity; the <b>cost of equity</b> is the minimum return investors require (a market concept). Value is created when ROE exceeds the cost of equity.</li>
</ul>

<h3>5. Company analysis: past and present</h3>
<p>A company research report covers the business model, revenue drivers (price × volume, mix), operating profitability (margins, operating leverage), working capital, capital investment, capital structure and segment performance. Analysts use history to understand drivers before forecasting, and compare results with peers.</p>

<h3>6. Industry and competitive analysis</h3>
<ul>
  <li><b>Classification</b>: by products/services (GICS has 11 sectors; ICB; RBICS), by business-cycle sensitivity (<b>cyclical</b>: autos, durable goods, technology, financials; <b>defensive/non-cyclical</b>: consumer staples, utilities, health care), or statistically (clustering returns).</li>
  <li><b>Peer group</b>: companies with similar business activities, demand drivers and cost structures.</li>
  <li><b>Industry life cycle</b>: <b>embryonic</b> (slow growth, high prices, high risk) → <b>growth</b> (rapid growth, improving profits, low competition) → <b>shakeout</b> (slowing growth, intense competition, excess capacity, weaker firms exit) → <b>mature</b> (little growth, consolidation, high barriers, stable prices) → <b>decline</b> (shrinking demand, price wars, excess capacity).</li>
  <li><b>Porter's five forces</b>: threat of new entrants, threat of substitutes, bargaining power of customers, bargaining power of suppliers, rivalry among existing competitors. Strong forces → lower industry profitability.</li>
  <li><b>Strategies</b>: cost leadership, <b>differentiation</b> (premium prices for unique features), focus (cost or differentiation in a niche).</li>
  <li><b>PESTLE</b> external factors: political, economic, social, technological, legal, environmental.</li>
</ul>

<h3>7. Company analysis: forecasting</h3>
<ul>
  <li><b>Approaches</b>: top-down (macro → industry → company), bottom-up (company-level drivers), hybrid.</li>
  <li><b>Revenue</b>: volume and price, market share, new products. <b>Operating costs</b>: fixed vs variable (economies of scale lower unit costs as output grows). Non-operating items: interest (from debt levels), taxes, non-controlling interest.</li>
  <li><b>Capital investment</b>: <b>maintenance capex</b> (sustain current operations) vs <b>growth capex</b> (expand capacity). Working capital from turnover ratios.</li>
  <li><b>Horizon</b>: explicit forecast period, then normalized/terminal assumptions. Use <b>scenario</b> and <b>sensitivity</b> analysis for key drivers.</li>
</ul>

<h3>8. Equity valuation: concepts and basic tools</h3>
<p>If <b>intrinsic value &gt; market price</b>, the stock is undervalued (and vice versa), allowing for model uncertainty. Model families: <b>present value</b> (dividends, free cash flow), <b>multiplier</b> (price or enterprise value multiples), <b>asset-based</b> (market value of assets − liabilities; suits firms with marketable tangible assets, holding companies, or liquidation).</p>
<h4>Dividend discount models</h4>
<div class="formula">Gordon growth: V0 = D1 ÷ (r − g) = D0(1 + g) ÷ (r − g) · Preferred stock: V0 = D ÷ r</div>
<div class="formula">Multistage: V0 = Σ PV(dividends in high-growth phase) + PV[Vn], where Vn = D(n+1) ÷ (r − g_L)</div>
<div class="ex"><b>Two-stage example:</b> D0 = $1.00, growth 20% for 2 years then 5%, r = 10%. D1 = 1.20, D2 = 1.44, D3 = 1.512. V2 = 1.512 ÷ 0.05 = 30.24. V0 = 1.20/1.10 + (1.44 + 30.24)/1.10² = 1.09 + 26.18 = $27.27.</div>
<p>Gordon works best for mature, dividend-paying firms with stable growth below r. <b>FCFE models</b> suit companies that don't pay dividends but have predictable free cash flow. g = b × ROE.</p>
<h4>Multiples</h4>
<div class="formula">Justified forward P/E = (D1/E1) ÷ (r − g) = payout ratio ÷ (r − g)</div>
<ul>
  <li><b>Method of comparables</b>: similar assets should sell at similar multiples (law of one price); compare to peer or historical averages. <b>Justified multiples</b> come from fundamentals (DDM).</li>
  <li>P/E, P/B (suits financial firms, asset-heavy firms), P/S (useful when earnings are negative), P/CF.</li>
  <li><b>Enterprise value</b> = market value of equity + market value of debt + preferred + non-controlling interest − cash and short-term investments. EV/EBITDA compares firms with different capital structures.</li>
</ul>
<div class="how"><b>How it's tested:</b> margin and margin-call math, order types, index return calculations under different weightings, EMH forms and anomalies, preferred share features, life cycle and five forces, DDM/two-stage/P-E and EV calculations.</div>
<div class="key"><b>Carry forward to Level III</b>: index construction and weighting (benchmarks, passive equity), market efficiency and behavioural finance (active vs passive decisions, client biases).</div>
<div class="trap"><b>Trap:</b> a price-weighted index is affected by <b>price</b>, not size: a 10% move in a high-priced small company moves it more than a 10% move in a low-priced giant.</div>
`;

window.QB_HARD.l1eq = [
  ["An investor buys 1,000 shares at $40 using 50% initial margin. The price rises to $48. Ignoring interest and commissions, the return on her equity is closest to:",
    ["40%", "20%", "16%"],
    "Equity invested = $20,000. Gain = 1,000 × $8 = $8,000. Return = 8,000 ÷ 20,000 = 40%, double the 20% stock return because of 2× leverage.", "c"],
  ["An investor buys shares at $40 with 50% initial margin. The maintenance margin is 30%. The price below which she receives a margin call is closest to:",
    ["$28.57", "$20.00", "$34.29"],
    "Margin call price = P0 × (1 − initial margin) ÷ (1 − maintenance margin) = 40 × 0.50 ÷ 0.70 = $28.57.", "c"],
  ["If the initial margin requirement is 40%, the maximum leverage ratio is:",
    ["2.5", "1.67", "0.4"],
    "Leverage ratio = 1 ÷ initial margin = 1 ÷ 0.40 = 2.5.", "c"],
  ["A short seller of a dividend-paying stock must:",
    ["Pay the dividends to the lender of the shares", "Receive the dividends paid by the company", "Ignore dividends, since the shares are borrowed"],
    "The lender is entitled to the dividends, so the short seller pays an amount equal to them (along with fees on the borrowed shares).", "r"],
  ["An investor who owns shares trading at $52 wants to limit her loss if the price falls below $45. She should place a:",
    ["Stop-loss sell order at $45", "Limit sell order at $45", "Limit buy order at $45"],
    "A stop-loss sell order becomes a market sell order if the price falls to $45. A limit sell at $45 would execute immediately at the current $52.", "r"],
  ["In an order-driven market, which rule ranks first in determining which orders are executed?",
    ["Price priority", "Display precedence", "Time precedence"],
    "Orders are ranked first by price, then by display (visible before hidden), then by time of arrival.", "r"],
  ["A market where dealers post bid and ask prices and trade from their own inventory is a:",
    ["Quote-driven market", "Order-driven market", "Brokered market"],
    "In quote-driven (dealer) markets, customers trade at dealers' quotes. Order-driven markets match public orders by rules; brokered markets use brokers to find counterparties.", "r"],
  ["In a call market, trades occur:",
    ["Only at set times, when orders are batched", "Continuously throughout the trading session", "Only between dealers, never with orders from the public"],
    "Call markets batch orders and set a single clearing price at specific times; many exchanges use them for opening and closing auctions.", "r"],
  ["In a shelf registration, an issuer:",
    ["Registers securities once and sells them over time as needed", "Sells new shares only to its existing shareholders", "Sells securities privately to a small group of qualified investors"],
    "Shelf registration lets an issuer sell registered securities gradually over a period. Selling to existing holders is a rights offering; selling to a few investors is a private placement.", "r"],
  ["A market in which prices quickly reflect all available information is described as:",
    ["Informationally efficient", "Operationally efficient", "Allocationally efficient"],
    "Informational efficiency relates to prices reflecting information. Operational efficiency = low trading costs; allocational efficiency = capital directed to its best uses.", "r"],
  ["An index contains Stock A at $50 (100 shares), B at $20 (200 shares) and C at $30 (500 shares). If A rises to $60 and the others are unchanged, the price-weighted index return is closest to:",
    ["10.0%", "4.2%", "6.7%"],
    "Price-weighted index: (50 + 20 + 30) ÷ 3 = 33.33 → (60 + 20 + 30) ÷ 3 = 36.67, a 10.0% rise. (4.2% is market-cap weighted; 6.7% equal-weighted.)", "c"],
  ["Using the same three stocks (A $50 × 100 shares, B $20 × 200, C $30 × 500), if A rises to $60, the market-capitalization-weighted index return is closest to:",
    ["4.2%", "10.0%", "6.7%"],
    "Market value rises from 5,000 + 4,000 + 15,000 = 24,000 to 25,000: a 4.2% increase. Stock A is only about 21% of the index by value.", "c"],
  ["A total return index differs from a price return index because it:",
    ["Assumes all income is reinvested", "Excludes capital gains and losses", "Gives each constituent an equal weight"],
    "A total return index includes price changes plus reinvested dividends or interest; a price return index captures price changes only.", "r"],
  ["A disadvantage of an equal-weighted index is that it:",
    ["Requires frequent rebalancing", "Is dominated by the largest companies", "Has very little exposure to small-cap stocks"],
    "Price changes push weights away from equal, so the index must be rebalanced often. It overweights small companies relative to their market value.", "r"],
  ["An index that weights constituents by their sales, earnings or book value tends to have a tilt toward:",
    ["Value stocks", "Growth stocks", "Momentum stocks"],
    "Fundamental weighting gives more weight to companies that are cheap relative to fundamentals, creating a value (contrarian) tilt. Cap weighting tilts toward momentum.", "r"],
  ["Hedge fund indexes built from voluntarily reported data tend to overstate returns mainly because of:",
    ["Survivorship and backfill biases", "High costs of rebalancing", "Equal weighting of constituent funds"],
    "Failed funds stop reporting (survivorship bias) and new funds add their good early track records (backfill bias).", "r"],
  ["Constructing fixed income indexes is challenging mainly because:",
    ["Bonds trade OTC with limited pricing and constant turnover", "Bond prices are always visible on organized exchanges", "Relatively few bonds are outstanding at any time"],
    "The bond universe is huge and changes constantly, and most bonds trade over the counter, making prices hard to observe.", "r"],
  ["If markets are semi-strong form efficient:",
    ["Analysis of public information can't consistently beat the market", "Insiders can't profit from trading on material nonpublic information", "Technical analysis can still earn abnormal returns"],
    "Semi-strong efficiency means prices reflect all public information (including past prices), so neither technical nor fundamental analysis of public data beats the market after risk.", "r"],
  ["Evidence that corporate insiders earn abnormal returns on their trades is inconsistent with:",
    ["Strong-form efficiency", "Semi-strong-form efficiency", "Weak-form efficiency"],
    "Strong-form efficiency implies even private information is reflected in prices, so insiders couldn't profit. Most markets are not strong-form efficient.", "r"],
  ["The tendency of share prices to keep moving in the direction of an earnings surprise for weeks after the announcement is known as:",
    ["Post-earnings announcement drift", "The January (turn-of-the-year) effect", "The small-firm (size) effect"],
    "Gradual adjustment to earnings news is an anomaly that challenges semi-strong efficiency.", "r"],
  ["Which behavioural bias best explains investors' tendency to hold losing stocks too long and sell winners too early?",
    ["Loss aversion", "Overconfidence", "Herding"],
    "Loss aversion (losses hurt more than equal gains please) leads to the disposition effect: avoiding realizing losses.", "r"],
  ["Participating preference shares entitle holders to:",
    ["Extra dividends when profits exceed a set level", "Convert their shares into common shares at a set conversion ratio", "Sell their shares back to the issuer at a set price"],
    "Participating preferred shares receive the fixed dividend plus an additional dividend if profits exceed a threshold. The others describe convertible and putable features.", "r"],
  ["Compared with otherwise identical non-putable preference shares, putable preference shares have:",
    ["Lower risk, so investors accept a lower dividend yield", "Higher risk, so investors demand a higher dividend yield", "The same risk and the same required dividend yield"],
    "The put lets holders sell back at a set price, limiting downside. Callable shares are riskier for investors and require higher yields.", "r"],
  ["A shareholder owns 100 shares in a company electing four directors. Under statutory voting she can cast:",
    ["Up to 100 votes for each of the four seats", "400 votes, all for one candidate if she wishes", "100 votes in total, shared across all candidates"],
    "Statutory voting: one vote per share per seat. Cumulative voting would give her 400 votes to allocate freely, e.g. all to one candidate.", "r"],
  ["A sponsored depository receipt differs from an unsponsored one in that, for a sponsored receipt:",
    ["The issuer is involved and investors get voting rights", "The depository bank keeps the voting rights itself", "It can trade only over the counter and never on a stock exchange"],
    "With sponsored DRs, the issuer works with the depository and investors get voting rights; with unsponsored DRs, the depository bank retains voting rights.", "r"],
  ["Compared with public equity, private equity investments typically have:",
    ["Less liquidity and disclosure, and a longer-term focus", "More liquidity and stricter disclosure requirements", "Lower required returns because of lower risk"],
    "Private equity lacks a public market and has fewer reporting requirements, but owners can focus on the long term without quarterly earnings pressure.", "r"],
  ["A company's cost of equity is best described as:",
    ["The minimum return equity investors require", "Its accounting return on average book equity", "Its current dividend yield"],
    "The cost of equity is the expected (required) return on the shares, a market-based measure. ROE is an accounting measure; value is created when ROE exceeds the cost of equity.", "r"],
  ["In an industry where a few suppliers provide a critical, specialized input, which of Porter's five forces is most likely to be strong?",
    ["Bargaining power of suppliers", "Threat of substitute products", "Bargaining power of customers"],
    "Concentrated suppliers of an important, differentiated input can raise prices and capture more of the industry's profits.", "r"],
  ["Which stage of the industry life cycle is marked by slowing growth, intense price competition, excess capacity and weaker firms exiting?",
    ["Shakeout", "Growth", "Mature"],
    "In the shakeout stage, demand growth slows below capacity growth, competition intensifies and marginal firms fail or consolidate.", "r"],
  ["Which industry is most likely to be classified as defensive (non-cyclical)?",
    ["Consumer staples", "Automobiles", "Semiconductors"],
    "Demand for food and household staples is stable through the business cycle. Autos and semiconductors are cyclical.", "r"],
  ["A company that competes by offering unique product features that command premium prices is following a:",
    ["Differentiation strategy", "Cost leadership strategy", "Focused low-cost strategy"],
    "Differentiation creates products customers see as unique, allowing premium pricing. Cost leadership aims to be the lowest-cost producer.", "r"],
  ["In a PESTLE analysis, new data privacy rules that limit how a company uses customer data are best classified as:",
    ["Legal", "Social", "Technological"],
    "PESTLE covers political, economic, social, technological, legal and environmental factors. Laws and regulations on data use are legal factors.", "r"],
  ["Maintenance capital expenditure is best described as spending needed to:",
    ["Sustain the company's current operations", "Expand the company's capacity for future growth", "Acquire other businesses"],
    "Maintenance capex replaces worn-out assets to keep current operations going; growth capex adds capacity.", "r"],
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
    ["A free cash flow to equity model", "A dividend discount model", "An asset-based valuation model"],
    "Without dividends a DDM requires guessing future payout policy; FCFE captures the cash available to shareholders.", "r"],
  ["The method of comparables is based on the principle that:",
    ["Similar assets should sell at similar multiples", "A firm's value equals the present value of its dividends", "Markets price every peer group correctly"],
    "Relative valuation applies the law of one price: comparable companies should trade at similar multiples. It shows relative, not absolute, value.", "r"],
  ["Asset-based valuation is most appropriate for:",
    ["A firm whose assets are mostly tangible and marketable", "A fast-growing technology company", "A company with large intangible assets not recorded on its balance sheet"],
    "Asset-based models work when assets have observable market values (e.g. natural resource or holding companies, or liquidation). They miss intangibles and growth.", "r"]
];

window.GLOSSARY.push(
  ["Margin call price (long)", "P0 × (1 − initial margin) ÷ (1 − maintenance margin). Leverage ratio = 1 ÷ initial margin.", "l1eq"],
  ["Order precedence", "Order-driven markets rank by price priority, then display precedence (visible first), then time.", "l1eq"],
  ["Market types", "Quote-driven (dealer), order-driven (rules match orders), brokered (brokers find counterparties). Call vs continuous trading.", "l1eq"],
  ["Index weighting", "Price-weighted (high prices dominate), equal (small-cap tilt, frequent rebalancing), market-cap (large dominate), fundamental (value tilt).", "l1eq"],
  ["Price vs total return index", "Price return: price changes only. Total return: also reinvests dividends/interest.", "l1eq"],
  ["Forms of market efficiency", "Weak: past prices. Semi-strong: all public information. Strong: all public and private information.", "l1eq"],
  ["Market anomalies", "Time-series (January, momentum, overreaction), cross-sectional (size, value), other (closed-end fund discount, post-earnings drift, IPOs).", "l1eq"],
  ["Preference share features", "Cumulative, participating, convertible, callable (riskier → higher yield), putable (safer → lower yield).", "l1eq"],
  ["Statutory vs cumulative voting", "Statutory: one vote per share per seat. Cumulative: shares × seats, can be concentrated (helps minorities).", "l1eq"],
  ["Industry life cycle", "Embryonic → growth → shakeout → mature → decline.", "l1eq"],
  ["Porter's five forces", "Threat of entrants, threat of substitutes, buyer power, supplier power, rivalry.", "l1eq"],
  ["Gordon growth model", "V0 = D1 ÷ (r − g), with r > g. Preferred stock: V0 = D ÷ r.", "l1eq"],
  ["Justified forward P/E", "(D1/E1) ÷ (r − g) = payout ratio ÷ (r − g).", "l1eq"],
  ["Enterprise value", "Market value of equity + debt + preferred (+ NCI) − cash and short-term investments.", "l1eq"]
);
