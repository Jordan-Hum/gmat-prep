// Study notes per topic (HTML). Keep "trap" callouts short: they flag common exam mistakes.
window.NOTES = {
reg: `
<h3>Who regulates what</h3>
<ul>
  <li><b>Provinces/territories</b> regulate securities (e.g., OSC in Ontario, AMF in Québec, BCSC in B.C.).</li>
  <li><b>CSA</b> (Canadian Securities Administrators) is the umbrella group that harmonizes rules through <b>National Instruments</b> (e.g., NI 31-103 registration, NI 81-102 investment funds).</li>
  <li><b>CIRO</b> (Canadian Investment Regulatory Organization) is the national <b>self-regulatory organization (SRO)</b> for investment dealers and mutual fund dealers. It was formed <b>June 1, 2023</b> from <b>IIROC + MFDA</b>, and also runs market surveillance of trading on Canadian marketplaces.</li>
  <li><b>CIPF</b> (Canadian Investor Protection Fund) covers client property if a CIRO member becomes <b>insolvent</b>: up to <b>$1 million per category of account</b>. It does <u>not</u> cover market losses or bad advice.</li>
  <li><b>CDIC</b> insures eligible deposits (savings, GICs) up to <b>$100,000 per insured category</b> per member institution. Stocks, bonds and mutual funds are not covered.</li>
  <li><b>OBSI</b>: free, independent ombudsman for unresolved complaints. Can recommend compensation up to <b>$350,000</b>.</li>
  <li><b>FINTRAC</b>: Canada's financial intelligence unit (anti-money-laundering).</li>
  <li><b>Bank of Canada</b>: monetary policy. <b>OSFI</b>: regulates federally chartered banks, trust and insurance companies.</li>
</ul>

<h3>Markets and participants</h3>
<ul>
  <li><b>Primary market</b>: new issues, and the issuer receives the money. <b>Secondary market</b>: investors trade among themselves.</li>
  <li><b>Exchanges</b>: TSX (senior issuers), TSX Venture (junior issuers), Canadian Securities Exchange, <b>Montréal Exchange</b> (derivatives, cleared by <b>CDCC</b>).</li>
  <li><b>Dealer types</b>: full-service vs. <b>order-execution-only</b> (discount, no advice). Integrated firms (bank-owned) vs. boutiques.</li>
  <li>The "four pillars" (banks, trust companies, insurers, investment dealers) were historically separate; banks now own most large dealers.</li>
</ul>

<h3>Issuing securities</h3>
<ul>
  <li><b>Bought deal</b> (firm commitment): the underwriter buys the whole issue and takes the risk. <b>Best efforts</b>: the dealer acts as agent and unsold securities go back to the issuer.</li>
  <li><b>Preliminary prospectus = "red herring"</b>. During the <b>waiting period</b> dealers can take <i>expressions of interest</i> but <b>cannot accept orders</b>.</li>
  <li><b>Short-form prospectus</b>: for seasoned issuers. <b>Shelf prospectus</b>: sell over about 25 months using supplements.</li>
  <li>Buyer's rights: <b>withdrawal within 2 business days</b> of receiving the prospectus; <b>rescission or damages</b> for a misrepresentation.</li>
  <li><b>Exemptions</b>: accredited investors, private placements, offering memorandum.</li>
</ul>

<h3>Continuous disclosure and insiders</h3>
<ul>
  <li>Reporting issuers file annual and quarterly financial statements, MD&amp;A and an AIF, and issue a press release <b>immediately</b> on a material change.</li>
  <li><b>Insiders</b> (directors, senior officers, 10%+ holders) report trades on <b>SEDI within 5 calendar days</b>.</li>
  <li><b>Early warning: 10%</b> ownership triggers a press release and report. <b>Take-over bid: 20%+</b>.</li>
</ul>
<div class="trap"><b>Exam trap:</b> CIPF ≠ CDIC. CIPF = dealer insolvency, $1M per account category. CDIC = deposits, $100K. Neither covers market losses.</div>
`,

econ: `
<h3>Measuring the economy</h3>
<ul>
  <li><b>GDP</b> (expenditure approach) = <b>C + I + G + (X − M)</b>. Real GDP adjusts for inflation (real ≈ nominal − inflation).</li>
  <li><b>Recession</b> (rule of thumb): two consecutive quarters of declining real GDP.</li>
  <li><b>Business cycle</b>: expansion → peak → contraction → trough → recovery.</li>
  <li><b>Unemployment types</b>: <b>frictional</b> (between jobs), <b>structural</b> (skills mismatch), <b>cyclical</b> (recession), <b>seasonal</b>.</li>
</ul>

<h3>Economic indicators</h3>
<table>
  <tr><th>Leading (move first)</th><th>Coincident (move with)</th><th>Lagging (move after)</th></tr>
  <tr><td>Housing starts, S&amp;P/TSX index, money supply, new orders for durable goods, average workweek</td><td>GDP, industrial production, personal income, retail sales</td><td>Unemployment rate, unit labour costs, inventory-to-sales ratio, business investment</td></tr>
</table>

<h3>Inflation</h3>
<ul>
  <li>Measured by <b>CPI</b>. <b>Demand-pull</b> = too much money chasing too few goods. <b>Cost-push</b> = higher wages or input costs.</li>
  <li><b>Disinflation</b> = inflation slowing (prices still rising). <b>Deflation</b> = prices falling. <b>Stagflation</b> = high inflation + weak growth.</li>
  <li>Unexpected inflation hurts <b>lenders</b> and fixed-income holders and helps borrowers.</li>
</ul>

<h3>Monetary vs. fiscal policy</h3>
<ul>
  <li><b>Monetary policy (Bank of Canada)</b>: targets <b>2% inflation</b> (midpoint of 1–3%). Main tool = <b>target for the overnight rate</b>. Also quantitative easing and tightening.
    <br>Inflation too high → <b>raise rates</b> (tighten). Economy weak → <b>cut rates</b> (ease).</li>
  <li><b>Fiscal policy (government)</b>: taxes and spending. Deficits stimulate; surpluses restrain.</li>
</ul>

<h3>Interest rates, currency and yield curve</h3>
<ul>
  <li>Higher Canadian rates relative to other countries → capital inflows → <b>C$ appreciates</b>.</li>
  <li>Normal yield curve slopes upward. An <b>inverted</b> curve (short &gt; long) often signals a <b>recession</b>.</li>
  <li><b>Balance of payments</b> = current account (trade, investment income) + capital/financial account.</li>
</ul>
<div class="trap"><b>Exam trap:</b> The unemployment rate is a <b>lagging</b> indicator, and the stock market is a <b>leading</b> one.</div>
`,

fixed: `
<h3>Bond basics</h3>
<ul>
  <li>Bond = loan to the issuer. Face (par) value, usually $1,000; <b>coupon</b> paid semi-annually; <b>maturity</b> date.</li>
  <li><b>Prices move opposite to yields.</b> Coupon &gt; market yield → <b>premium</b>; coupon &lt; yield → <b>discount</b>; equal → par.</li>
  <li><b>Price sensitivity is greatest for long-term, low-coupon bonds</b> (strip bonds are the most sensitive). Measured by <b>duration</b>.</li>
  <li>Buyer pays the seller <b>price + accrued interest</b>.</li>
</ul>

<h3>Yield calculations</h3>
<div class="formula">Current yield = Annual coupon ÷ Market price</div>
<div class="formula">Approx. YTM = [Coupon + (Face − Price) ÷ Years] ÷ [(Face + Price) ÷ 2]</div>

<h3>Types of bonds</h3>
<ul>
  <li><b>Government of Canada</b> bonds and <b>T-bills</b> (sold at a discount, no coupon, mature at par). Provincial and municipal bonds; municipalities often issue <b>serial</b> bonds.</li>
  <li><b>Mortgage bond</b> (secured by real property), <b>collateral trust bond</b> (secured by securities), <b>equipment trust certificate</b> (secured by equipment), <b>debenture</b> (<u>unsecured</u>), subordinated debenture (ranks below other debt).</li>
  <li><b>Strip (zero-coupon)</b>: deep discount, no coupons; in non-registered accounts the accrued interest is taxed yearly, so they fit best in an RRSP or TFSA.</li>
  <li><b>Real Return Bonds</b>: principal and interest indexed to CPI.</li>
  <li><b>Floating-rate</b>: coupon resets with rates. <b>Commercial paper</b>: short-term corporate IOUs.</li>
</ul>

<h3>Special features</h3>
<table>
  <tr><th>Feature</th><th>Who benefits</th><th>When used</th></tr>
  <tr><td>Callable (redeemable)</td><td>Issuer</td><td>Rates fall → issuer refinances</td></tr>
  <tr><td>Retractable</td><td>Holder</td><td>Rates rise → holder redeems early</td></tr>
  <tr><td>Extendible</td><td>Holder</td><td>Rates fall → holder extends</td></tr>
  <tr><td>Convertible</td><td>Holder</td><td>Stock rises → convert into shares</td></tr>
  <tr><td>Sinking fund</td><td>Holder (safety)</td><td>Mandatory scheduled redemptions</td></tr>
  <tr><td>Purchase fund</td><td>Holder</td><td>Buy back only if price ≤ set level</td></tr>
</table>

<h3>Credit and the yield curve</h3>
<ul>
  <li>Rating agencies: DBRS Morningstar, S&amp;P, Moody's. <b>BBB and above = investment grade</b>; BB and below = high yield ("junk").</li>
  <li>Yield curve theories: <b>expectations</b> (long rates = expected future short rates), <b>liquidity preference</b> (premium for longer terms), <b>market segmentation</b> (supply and demand per maturity).</li>
</ul>
<div class="trap"><b>Exam trap:</b> <b>Callable</b> helps the <b>issuer</b>; <b>retractable/extendible</b> help the <b>holder</b>.</div>
`,

equity: `
<h3>Common shares</h3>
<ul>
  <li>Ownership, voting rights, residual claim (paid <b>last</b> in liquidation), potential dividends and capital growth.</li>
  <li><b>Restricted shares</b>: non-voting, subordinate voting, restricted voting.</li>
  <li><b>Stock split</b>: more shares at a lower price, with no change in value. <b>Stock dividend</b>: extra shares instead of cash. <b>DRIP</b>: reinvests cash dividends (still taxable).</li>
</ul>

<h3>Preferred shares</h3>
<ul>
  <li>Fixed dividend, priority over common for dividends and in liquidation (but behind debt). Usually <b>no vote</b> unless dividends are in arrears.</li>
  <li><b>Cumulative</b>: missed dividends accumulate. <b>Callable</b>: issuer can redeem. <b>Retractable</b>: holder can sell back. <b>Convertible</b>: into common. <b>Participating</b>: share extra profits. <b>Fixed-reset / floating-rate</b>: dividend resets with rates.</li>
</ul>
<div class="formula">Conversion ratio = Par value ÷ Conversion price</div>

<h3>Dividend dates (with T+1 settlement)</h3>
<ol>
  <li><b>Declaration date</b>: board announces the dividend.</li>
  <li><b>Ex-dividend date = record date</b> (since May 2024). Buy <b>before</b> the ex-date to get the dividend.</li>
  <li><b>Record date</b>: shareholders on the books receive it.</li>
  <li><b>Payment date</b>.</li>
</ol>
<p>The share price usually drops by about the dividend amount on the ex-date.</p>

<h3>Rights and warrants</h3>
<ul>
  <li><b>Rights</b>: short-term (weeks), issued to <b>existing shareholders</b>, let them buy new shares at a <b>discount</b>, which avoids dilution (pre-emptive right).</li>
  <li><b>Warrants</b>: long-term (years), often attached to new bonds or preferreds as a <b>sweetener</b>.</li>
</ul>
<div class="formula">Right value (cum rights) = (Market price − Subscription price) ÷ (N + 1)</div>
<div class="formula">Right value (ex rights) = (Market price − Subscription price) ÷ N</div>

<h3>Valuation</h3>
<div class="formula">P/E = Price ÷ EPS &nbsp;·&nbsp; Dividend yield = Annual dividend ÷ Price</div>
<div class="formula">Dividend discount model: Price = D₁ ÷ (r − g)</div>
<ul>
  <li><b>Growth</b> stocks: high P/E, low dividends. <b>Value</b>: low P/E and P/B. <b>Defensive</b>: stable earnings (utilities, staples). <b>Cyclical</b>: follow the economy. <b>Speculative</b>: high risk.</li>
</ul>
`,

deriv: `
<h3>Options: the key grid</h3>
<table>
  <tr><th></th><th>Buyer (long): pays premium, has the <b>right</b></th><th>Writer (short): receives premium, has the <b>obligation</b></th></tr>
  <tr><td><b>Call</b></td><td>Right to <b>buy</b> at strike. Bullish.</td><td>Must <b>sell</b> if assigned. Bearish/neutral.</td></tr>
  <tr><td><b>Put</b></td><td>Right to <b>sell</b> at strike. Bearish.</td><td>Must <b>buy</b> if assigned. Bullish/neutral.</td></tr>
</table>
<ul>
  <li><b>Intrinsic value</b>: call = stock − strike; put = strike − stock (never below 0).</li>
  <li><b>Time value</b> = premium − intrinsic value. Highest at-the-money with long time left; decays toward expiry.</li>
  <li><b>In-the-money</b>: call when stock &gt; strike; put when stock &lt; strike.</li>
  <li><b>Break-even</b>: call buyer = strike + premium; put buyer = strike − premium.</li>
  <li>Buyer's max loss = <b>premium</b>. <b>Naked call writer = unlimited loss</b>.</li>
  <li>One contract = <b>100 shares</b>. <b>American</b> = exercise anytime; <b>European</b> = only at expiry.</li>
</ul>

<h3>Common strategies</h3>
<ul>
  <li><b>Covered call</b>: own stock + write call → extra income, caps upside.</li>
  <li><b>Protective put</b>: own stock + buy put → insurance, floor on losses.</li>
</ul>

<h3>Futures and forwards</h3>
<ul>
  <li><b>Both parties obligated.</b> Futures are <b>standardized, exchange-traded, marked to market daily</b>, with margin as a good-faith deposit and a clearing house guarantee.</li>
  <li><b>Forwards</b>: customized, OTC, with <b>counterparty risk</b>.</li>
  <li><b>Short hedge</b>: a producer (e.g., a farmer) sells futures to lock in a selling price. <b>Long hedge</b>: a user (e.g., a baker) buys futures.</li>
  <li><b>Swaps</b>: exchange cash flows (e.g., fixed vs. floating interest). Notional principal is not exchanged in an interest rate swap.</li>
</ul>
<ul>
  <li>Users: <b>hedgers</b> (reduce risk), <b>speculators</b> (take risk), <b>arbitrageurs</b> (exploit mispricing).</li>
  <li>Canadian exchange: <b>Montréal Exchange</b>. Clearing: <b>CDCC</b>.</li>
</ul>
<div class="trap"><b>Exam trap:</b> Options = buyer has a <i>right</i>. Futures = <i>both</i> sides have an <i>obligation</i>.</div>
`,

fin: `
<h3>The financial statements</h3>
<ul>
  <li><b>Balance sheet</b> (a point in time): <b>Assets = Liabilities + Shareholders' equity</b>.</li>
  <li><b>Income statement</b> (a period): revenue − expenses = net income.</li>
  <li><b>Cash flow statement</b>: <b>operating</b> (day-to-day), <b>investing</b> (buying and selling long-term assets), <b>financing</b> (debt, shares, dividends).</li>
  <li><b>Statement of changes in equity</b>, notes, and the <b>auditor's report</b> (an opinion on fair presentation under IFRS).</li>
</ul>

<h3>Key ratios</h3>
<table>
  <tr><th>Type</th><th>Ratio</th><th>Formula</th></tr>
  <tr><td>Liquidity</td><td>Current ratio</td><td>Current assets ÷ Current liabilities</td></tr>
  <tr><td>Liquidity</td><td>Quick ratio</td><td>(Current assets − Inventory) ÷ Current liabilities</td></tr>
  <tr><td>Risk</td><td>Debt-to-equity</td><td>Total debt ÷ Shareholders' equity</td></tr>
  <tr><td>Risk</td><td>Interest coverage</td><td>EBIT ÷ Interest expense</td></tr>
  <tr><td>Operating</td><td>Gross margin</td><td>(Sales − COGS) ÷ Sales</td></tr>
  <tr><td>Operating</td><td>Net margin</td><td>Net income ÷ Sales</td></tr>
  <tr><td>Operating</td><td>ROE</td><td>Net income ÷ Equity</td></tr>
  <tr><td>Operating</td><td>Inventory turnover</td><td>COGS ÷ Average inventory</td></tr>
  <tr><td>Value</td><td>EPS</td><td>(Net income − Pref. dividends) ÷ Common shares</td></tr>
  <tr><td>Value</td><td>P/E</td><td>Price ÷ EPS</td></tr>
  <tr><td>Value</td><td>Dividend yield</td><td>Annual dividend ÷ Price</td></tr>
  <tr><td>Value</td><td>Payout ratio</td><td>Dividend per share ÷ EPS</td></tr>
  <tr><td>Value</td><td>Price-to-book</td><td>Price ÷ Book value per share</td></tr>
</table>

<h3>Analysis approaches</h3>
<ul>
  <li><b>Fundamental</b>: financial statements, industry and economy → intrinsic value. <b>Top-down</b> (economy → industry → company) vs. <b>bottom-up</b>.</li>
  <li><b>Technical</b>: charts, volume, moving averages, support/resistance, head-and-shoulders.</li>
  <li><b>Efficient market hypothesis</b>: <b>weak</b> (past prices), <b>semi-strong</b> (all public info), <b>strong</b> (all info including insider).</li>
</ul>
<div class="trap"><b>Exam trap:</b> Don't forget to subtract <b>preferred dividends</b> when calculating EPS.</div>
`,

port: `
<h3>Return</h3>
<div class="formula">Holding period return = (End value − Start value + Income) ÷ Start value</div>
<div class="formula">Real return ≈ Nominal return − Inflation</div>
<div class="formula">Rule of 72: Years to double ≈ 72 ÷ Rate</div>

<h3>Risk</h3>
<ul>
  <li><b>Standard deviation</b> = total risk (volatility).</li>
  <li><b>Systematic (market) risk</b>: can't be diversified away, measured by <b>beta</b>. <b>Unsystematic (specific) risk</b>: reduced by diversification.</li>
  <li><b>Correlation</b> ranges from −1 to +1. The lower the correlation, the greater the diversification benefit (−1 = maximum).</li>
  <li>Other risks: inflation, interest rate, liquidity, currency (foreign exchange), default/credit, political, business.</li>
</ul>
<div class="formula">CAPM: Required return = Rf + β × (Rm − Rf)</div>
<div class="formula">Sharpe ratio = (Rp − Rf) ÷ Standard deviation</div>

<h3>The portfolio management process</h3>
<ol>
  <li>Determine <b>objectives</b> (safety, income, growth) and <b>constraints</b> (time horizon, liquidity, tax, legal, unique circumstances).</li>
  <li>Write the <b>Investment Policy Statement (IPS)</b>.</li>
  <li>Set the <b>asset allocation</b>: <b>strategic</b> (long-term target) vs. <b>tactical</b> (short-term tilts).</li>
  <li>Select securities, then <b>monitor and rebalance</b> back to targets.</li>
  <li>Evaluate performance against a <b>benchmark</b>.</li>
</ol>

<h3>Construction tools</h3>
<ul>
  <li><b>Bond ladder</b> (equal amounts across maturities), <b>barbell</b> (short + long only), <b>bullet</b> (concentrated around one date).</li>
  <li><b>Dollar-cost averaging</b>: fixed amount regularly, so average cost falls below average price.</li>
  <li><b>Rebalancing</b>: sell what's overweight and buy what's underweight to return to target.</li>
  <li><b>Alpha</b> = actual return − CAPM-required return.</li>
  <li><b>Time-weighted return</b> evaluates the manager; <b>money-weighted</b> reflects the client's experience (used in CRM2 reports).</li>
  <li>Avoid <b>home bias</b>: the Canadian market is concentrated in financials, energy and materials.</li>
</ul>

<h3>Management styles</h3>
<ul>
  <li><b>Active</b> (try to beat the index) vs. <b>passive</b> (track the index at low cost).</li>
  <li>Equity: <b>value</b> (low P/E, P/B), <b>growth</b> (high earnings growth), <b>sector rotation</b>, <b>market timing</b>, <b>top-down / bottom-up</b>.</li>
  <li>Longer time horizon and higher risk tolerance → more equities.</li>
</ul>
`,

funds: `
<h3>Mutual fund basics</h3>
<div class="formula">NAVPS = (Total assets − Liabilities) ÷ Units outstanding</div>
<div class="formula">Offering price (front-end load) = NAVPS ÷ (1 − Sales charge %)</div>
<ul>
  <li><b>Forward pricing</b>: orders get the <b>next</b> calculated NAVPS.</li>
  <li><b>Open-end</b>: units continuously issued and redeemed at NAVPS. <b>Closed-end</b>: fixed units trade on an exchange at a discount or premium to NAV.</li>
  <li>Advantages: diversification, professional management, liquidity, small minimums, convenience. Disadvantages: fees, taxable distributions, no control over timing.</li>
</ul>

<h3>Fees</h3>
<ul>
  <li><b>MER</b> = management fee + operating expenses (+ taxes), as a % of average assets. Excludes trading costs (shown as <b>TER</b>) and sales charges.</li>
  <li><b>Front-end load</b>: paid at purchase (negotiable). <b>No-load</b>. <b>DSC (back-end)</b>: <b>banned for new purchases since June 2022</b>.</li>
  <li><b>Trailing commission</b>: ongoing, paid from the management fee to the dealer. <b>Banned for order-execution-only dealers</b> (June 2022).</li>
</ul>

<h3>Disclosure and investor rights</h3>
<ul>
  <li><b>Fund Facts</b> (and <b>ETF Facts</b>): 2-page plain-language summary. Also the simplified prospectus, AIF, financial statements and MRFP.</li>
  <li><b>Withdraw within 2 business days</b> of receiving the trade confirmation.</li>
</ul>

<h3>Types of funds (roughly lowest to highest risk)</h3>
<p>Money market → mortgage → bond → balanced → dividend → equity (Canadian, U.S., global) → sector/specialty → emerging markets.<br>
Also: index funds, target-date funds, funds of funds, ESG funds.</p>

<h3>Other managed products</h3>
<ul>
  <li><b>ETFs</b>: trade intraday on exchanges, usually lower MERs, can be bought on margin or sold short, commissions may apply.</li>
  <li><b>Segregated funds</b> (insurance contracts): guarantee <b>at least 75%</b> of deposits at <b>maturity (min. 10 years)</b> or <b>death</b>; resets; may offer <b>creditor protection</b>; a named beneficiary <b>bypasses probate</b>. Higher fees.</li>
  <li><b>Hedge funds</b>: leverage, short selling, derivatives, <b>performance fees with a high-water mark</b>; often limited to accredited investors. Liquid alternative funds are the retail version.</li>
  <li><b>Principal-protected notes</b>: principal guaranteed only <b>at maturity</b>; limited liquidity.</li>
  <li><b>Wrap / fee-based accounts</b>: one asset-based fee. <b>Separately managed accounts</b>.</li>
</ul>

<h3>Taxation of funds (non-registered)</h3>
<ul>
  <li>Distributions (interest, dividends, capital gains) are taxable even if <b>reinvested</b>; reinvestments <b>increase ACB</b>.</li>
  <li>Switches between funds = <b>taxable disposition</b>.</li>
  <li>Buying just before a year-end distribution = paying tax on gains you didn't earn ("buying a distribution").</li>
</ul>
`,

trade: `
<h3>Settlement and orders</h3>
<ul>
  <li><b>Canadian equities settle T+1</b> (since May 2024).</li>
  <li><b>Market</b>: fill now at the best price. <b>Limit</b>: a set price or better (buy limit at or below; sell limit at or above).</li>
  <li><b>Stop-loss</b>: when triggered becomes a <b>market</b> order. <b>Stop-limit</b>: becomes a <b>limit</b> order (may not fill).</li>
  <li><b>Sell stop</b> sits <b>below</b> the market (protects a long position). <b>Buy stop</b> sits <b>above</b> (protects a short position).</li>
  <li><b>Day</b> vs. <b>GTC</b>. <b>Fill or kill</b>: all immediately or cancel. <b>All or none</b>: all at once, no time limit.</li>
  <li><b>Bid</b> = highest price a buyer will pay; <b>ask</b> = lowest price a seller will accept.</li>
  <li><b>Board lots</b>: 100 shares (≥ $1.00), 500 shares ($0.10–$0.995), 1,000 shares (&lt; $0.10).</li>
</ul>

<h3>Accounts</h3>
<ul>
  <li><b>Cash account</b>: pay in full by settlement.</li>
  <li><b>Margin account</b>: borrow from the dealer. Leverage magnifies gains <u>and</u> losses. A <b>margin call</b> comes when equity falls below requirements.</li>
  <li><b>Discretionary / managed</b>: written authorization + firm approval; suitability still applies.</li>
  <li><b>Fee-based / wrap</b>; <b>order-execution-only</b>.</li>
  <li><b>Joint with right of survivorship</b> passes to the survivor outside the estate. <b>Tenants in common</b>: the deceased's share goes to their estate.</li>
</ul>

<h3>Margin math</h3>
<div class="formula">Long: Deposit = Margin % × Market value; Loan = Market value − Deposit</div>
<ul>
  <li>Example: 1,000 sh × $20 = $20,000 at 30% margin → deposit $6,000, loan $14,000.</li>
  <li><b>Short sale</b> (stock ≥ $2.00): account must hold <b>150%</b> of market value (the sale proceeds + 50%).</li>
  <li>Short sellers owe the lender any dividends, and risk is unlimited.</li>
</ul>
`,

tax: `
<h3>Investment income</h3>
<table>
  <tr><th>Income</th><th>Tax treatment</th></tr>
  <tr><td>Interest</td><td>100% taxable at the marginal rate (the highest).</td></tr>
  <tr><td>Eligible Canadian dividends</td><td>Grossed up <b>38%</b>, then the <b>dividend tax credit</b> applies.</td></tr>
  <tr><td>Foreign dividends</td><td>Fully taxable, no DTC (a foreign tax credit may apply).</td></tr>
  <tr><td>Capital gains</td><td><b>50% inclusion rate</b>.</td></tr>
</table>
<ul>
  <li><b>Capital losses</b> offset only capital gains; carry <b>back 3 years</b> or <b>forward indefinitely</b>.</li>
  <li><b>Superficial loss</b>: the loss is denied if the same security is bought within <b>30 days before or after</b> the sale (the loss is added to the new ACB).</li>
  <li><b>ACB</b> is averaged across all purchases (including reinvested distributions).</li>
  <li>Interest on money borrowed to invest (non-registered) is <b>deductible</b>; for an RRSP or TFSA it is not.</li>
  <li><b>Attribution</b>: spouse → income <u>and</u> capital gains attributed. Minor child → interest and dividends attributed, <b>capital gains are not</b>.</li>
</ul>

<h3>Registered plans</h3>
<table>
  <tr><th>Plan</th><th>Key facts</th></tr>
  <tr><td><b>RRSP</b></td><td>Deductible contributions (18% of prior-year earned income up to an annual max). Withdrawals fully taxable. Must convert by end of the year you turn <b>71</b>. Over-contribution: $2,000 cushion, then <b>1%/month</b>. <b>HBP</b>: up to $60,000; <b>LLP</b>: $10K/yr, $20K total.</td></tr>
  <tr><td><b>Spousal RRSP</b></td><td>Contributor deducts. Withdrawals within the contribution year + 2 calendar years are taxed to the contributor.</td></tr>
  <tr><td><b>RRIF</b></td><td>Minimum withdrawal each year (starting the year after setup), no withholding on the minimum. All withdrawals taxable.</td></tr>
  <tr><td><b>TFSA</b></td><td>Age 18+. Not deductible; growth and withdrawals tax-free. <b>$7,000/yr</b> (2024–2026). Withdrawals re-added to room <b>next Jan 1</b>. Over-contribution: 1%/month.</td></tr>
  <tr><td><b>RESP</b></td><td>Not deductible. <b>$50,000 lifetime</b> per beneficiary. <b>CESG 20% on first $2,500/yr = $500</b>, lifetime max $7,200. EAPs taxed to the <b>student</b>; contributions returned tax-free.</td></tr>
  <tr><td><b>FHSA</b></td><td>Deductible, tax-free qualifying withdrawal for a first home. <b>$8,000/yr, $40,000 lifetime</b>.</td></tr>
  <tr><td><b>RDSP</b></td><td>For people with disabilities; government grants and bonds.</td></tr>
</table>

<h3>Retirement income (government)</h3>
<ul>
  <li><b>CPP/QPP</b>: contributory, based on earnings. <b>OAS</b>: based on residency, with a clawback at higher incomes. <b>GIS</b>: for low-income OAS recipients.</li>
</ul>
`,

onboard: `
<h3>Opening an account</h3>
<ul>
  <li>The <b>new account application</b> collects KYC information. A <b>designated supervisor</b> approves new accounts.</li>
  <li><b>Relationship disclosure information</b> is given before or at account opening: account types, products and services, costs, conflicts, how suitability works, and how to complain. It never includes return guarantees.</li>
  <li><b>Trusted contact person (TCP)</b>: take reasonable steps to obtain one. If the client refuses, document it; the account can still be opened. A TCP <b>cannot give instructions</b>. That requires a <b>power of attorney</b>, which the firm must obtain a copy of, verify, and act within.</li>
  <li><b>Third parties</b>: if someone else funds or directs the account, make a <b>third-party determination</b> and record their details. Trading authority must be in writing.</li>
  <li><b>Minors</b> can't generally contract, so use an "in trust for" account or a guardian.</li>
  <li><b>Leverage</b>: recommending borrowing to invest is subject to suitability, and the client must receive a <b>leverage risk disclosure</b>.</li>
  <li><b>No KYC means no advice.</b> If a client won't give financial information, you can't make suitability determinations (an order-execution-only account may be an alternative).</li>
  <li><b>Order-execution-only</b>: no suitability obligation, but identity verification and AML rules still apply.</li>
</ul>

<h3>Anti-money laundering (FINTRAC)</h3>
<ul>
  <li><b>Identity verification</b> methods: government-issued photo ID, credit file, or <b>dual-process</b> (two different reliable sources).</li>
  <li><b>Entities</b>: identify <b>beneficial owners with 25% or more</b> ownership or control.</li>
  <li>Stages: <b>placement → layering → integration</b>.</li>
  <li><b>Large Cash Transaction Report</b>: <b>$10,000+</b> in cash, including multiple amounts within <b>24 hours</b> (e.g., $6,000 + $5,000 the same day).</li>
  <li><b>Suspicious Transaction Report</b>: as soon as practicable, <b>no minimum</b>. Structuring deposits just under $10,000 is a red flag. <b>Never tip off</b> the client.</li>
  <li><b>Terrorist property report</b>: immediately. <b>PEPs</b>: enhanced due diligence (source of funds). Keep records for <b>5 years</b>.</li>
</ul>
<div class="trap"><b>Exam trap:</b> A trusted contact person is <b>not</b> a power of attorney, and can never place trades.</div>
`,

kyc: `
<h3>Know Your Client</h3>
<ul>
  <li>Collect: identity, personal and financial circumstances, investment needs and objectives, investment knowledge, <b>risk profile</b>, time horizon.</li>
  <li><b>Risk profile = risk tolerance</b> (willingness) <b>+ risk capacity</b> (financial ability to absorb losses). When they conflict, the <b>lower one</b> generally governs.</li>
  <li>Take reasonable steps to have the client <b>confirm</b> the KYC information is accurate.</li>
  <li>Update at least every <b>36 months</b> (non-managed) or <b>12 months</b> (managed), and whenever there's a <b>significant change</b> (job loss, inheritance, marriage/divorce, retirement).</li>
</ul>

<h3>Know Your Product</h3>
<ul>
  <li><b>Firm</b>: assess, approve and monitor products before offering them. <b>Individual</b>: understand the structure, features, risks and costs of what they recommend.</li>
</ul>

<h3>Suitability: putting the client's interest first</h3>
<ul>
  <li><b>Triggers</b>: account opening, securities transferred in, KYC change, change of representative, account reviews, and every recommendation or accepted instruction.</li>
  <li><b>Consider</b>: KYC, KYP, impact on the account (<b>concentration, liquidity</b>), <b>costs</b>, and a <b>reasonable range of alternatives</b>. Never the advisor's commission.</li>
  <li><b>Client insists on an unsuitable trade</b>: advise against it; you may proceed only if the client still instructs you to, and you <b>record</b> it.</li>
  <li>Short horizon or liquidity need → capital preservation (HISA, T-bills, short GICs). Low capacity or near retirement → avoid leverage and speculation.</li>
</ul>

<h3>Vulnerable clients</h3>
<ul>
  <li>Signs of <b>financial exploitation</b> or <b>diminished mental capacity</b>: escalate internally, contact the <b>trusted contact person</b>, and consider a <b>temporary hold</b>. The client must be notified with reasons, and the hold reviewed regularly.</li>
</ul>
<div class="trap"><b>Exam trap:</b> "Low risk" does not mean suitable. A 5-year non-redeemable GIC is unsuitable for money needed in 6 months.</div>
`,

complaints: `
<h3>Complaint handling</h3>
<ul>
  <li>A complaint can be <b>written or verbal</b>. Any expression of dissatisfaction alleging harm, misconduct or a rule breach counts.</li>
  <li>Give complaint procedures to clients <b>at account opening</b>.</li>
  <li><b>Acknowledge within 5 business days</b>; <b>substantive (final) response within 90 days</b>. If it runs late, tell the client why and that they can go to OBSI.</li>
  <li>Handled by the firm's designated complaint process, with supervision. The advisor involved can't be the only one handling it.</li>
  <li>Advisors <b>can't settle privately</b> (e.g., paying out of pocket). Settlement agreements <b>can't stop clients from reporting to regulators</b>.</li>
  <li>Trade errors and unauthorized trades must be <b>escalated and corrected by the firm</b>, never hidden.</li>
</ul>

<h3>Where clients can go</h3>
<ul>
  <li><b>OBSI</b>: free, up to <b>$350,000</b>. Available after 90 days without a final response, or within <b>180 days</b> of the firm's final response.</li>
  <li><b>CIRO</b> disciplines firms and individuals but generally <b>doesn't award compensation</b>. Other routes: arbitration, the courts.</li>
</ul>

<h3>Client reporting (CRM2)</h3>
<ul>
  <li><b>Trade confirmations</b>: security, quantity, price, commission, trade and settlement dates, principal or agent.</li>
  <li><b>Statements</b>: <b>monthly</b> if there was activity, at least <b>quarterly</b> otherwise, with <b>position cost</b> (book cost) and market value.</li>
  <li><b>Annual charges and compensation report</b>: operating and transaction charges, plus trailers received by the dealer.</li>
  <li><b>Annual performance report</b>: <b>money-weighted</b> % returns for 1, 3, 5, 10 years and since inception.</li>
</ul>
`,

umir: `
<h3>Market integrity rules (UMIR)</h3>
<ul>
  <li><b>UMIR</b> = Universal Market Integrity Rules, administered by <b>CIRO</b>, covering trading on Canadian equity marketplaces (exchanges and ATSs).</li>
  <li><b>Client priority</b>: client orders go before employee or firm orders at the same price.</li>
  <li><b>Best execution</b>: the most advantageous terms reasonably available (price, speed, certainty, cost).</li>
  <li><b>Order protection</b>: no <b>trade-throughs</b>, i.e., don't fill at a worse price while a better visible order is on another marketplace.</li>
  <li><b>Order marking</b>: short sales marked "short"; insider, significant shareholder and principal orders marked as such.</li>
  <li><b>Trading halts</b>: no trading on any Canadian marketplace until the halt is lifted.</li>
  <li><b>Principal</b> = the firm trades from its own inventory. <b>Agent</b> = the firm acts as broker.</li>
  <li><b>Failed delivery</b> → the buying dealer can initiate a <b>buy-in</b>.</li>
</ul>

<h3>Manipulative and deceptive trading (prohibited)</h3>
<table>
  <tr><th>Practice</th><th>What it looks like</th></tr>
  <tr><td>Wash trading</td><td>Buying and selling between accounts with the same owner (no change in beneficial ownership)</td></tr>
  <tr><td>Spoofing / layering</td><td>Orders you never intend to fill, placed to move the price</td></tr>
  <tr><td>High closing</td><td>Buying at the close to lift the closing price (e.g., quarter-end)</td></tr>
  <tr><td>Pump and dump</td><td>Hype a stock with false information, then sell</td></tr>
  <tr><td>Front running</td><td>Trading the stock <i>or its options</i> ahead of a known client order</td></tr>
  <tr><td>Insider trading / tipping</td><td>Trading on, or passing on, material non-public information, however you heard it</td></tr>
</table>

<h3>Gatekeeping</h3>
<ul>
  <li>Advisors are <b>gatekeepers</b>: refuse orders that look manipulative and escalate to compliance.</li>
  <li>Firms use <b>information barriers</b> and <b>watch/restricted lists</b> to contain inside information.</li>
</ul>
`,

ethics: `
<h3>Ethics</h3>
<ul>
  <li>Deal <b>fairly, honestly and in good faith</b>. Ethics goes <b>beyond the minimum rules</b>: ask what's fair to the client.</li>
  <li>Client information is <b>confidential</b>. Don't share it with family members without authorization.</li>
</ul>

<h3>Conflicts of interest (Client Focused Reforms)</h3>
<ul>
  <li>Identify material conflicts, then <b>address them in the client's best interest</b>, or <b>avoid</b> them. <b>Disclosure alone is not enough.</b></li>
  <li>Common conflicts: <b>proprietary products</b> and higher payouts, <b>sales contests</b>, family ties to issuers, <b>gifts</b>, outside activities, referral fees.</li>
</ul>

<h3>Prohibited or restricted conduct</h3>
<ul>
  <li><b>Churning</b>; <b>off-book</b> selling ("selling away"); <b>unauthorized discretionary trading</b> (discretion needs written authority).</li>
  <li><b>Guaranteeing clients against loss</b>; misleading communications, including social media hype and misleading titles.</li>
  <li><b>Borrowing from or lending to clients</b>; acting as <b>POA, executor or beneficiary</b> for non-family clients; accepting large gifts.</li>
  <li><b>Outside activities</b> need disclosure and firm approval. <b>Referral fees</b> go only through a written, disclosed firm arrangement.</li>
  <li><b>Trade errors</b> are reported and fixed at the firm's cost, never moved to another client's account.</li>
</ul>
`,

recs: `
<h3>Matching needs to solutions</h3>
<table>
  <tr><th>Client situation</th><th>Typical recommendation</th></tr>
  <tr><td>Saving for a child's education</td><td><b>RESP</b> (CESG: 20% on $2,500/yr)</td></tr>
  <tr><td>First home in a few years</td><td><b>FHSA</b> (deductible + tax-free withdrawal); HBP from an RRSP</td></tr>
  <tr><td>High income now, lower in retirement</td><td><b>RRSP</b></td></tr>
  <tr><td>Low income or needs flexibility</td><td><b>TFSA</b></td></tr>
  <tr><td>Income-splitting couple</td><td><b>Spousal RRSP</b></td></tr>
  <tr><td>Need money within ~1–2 years</td><td>HISA, T-bills, short or cashable GICs</td></tr>
  <tr><td>Retiree needing predictable income</td><td><b>Ladder</b> of GICs or high-quality bonds</td></tr>
  <tr><td>Worried about inflation</td><td><b>Real Return Bonds</b></td></tr>
  <tr><td>U.S. exposure without currency risk</td><td><b>Currency-hedged ETF</b></td></tr>
  <tr><td>Income in a flat market</td><td><b>Covered calls</b></td></tr>
  <tr><td>Protect gains without selling</td><td><b>Protective puts</b></td></tr>
  <tr><td>Principal guarantee + some upside</td><td>Market-linked GIC / PPN (hold to maturity)</td></tr>
  <tr><td>Avoid probate, wants guarantees</td><td><b>Segregated fund</b> with a named beneficiary</td></tr>
  <tr><td>Nervous about lump-sum timing</td><td><b>Dollar-cost averaging</b></td></tr>
  <tr><td>Concentrated in one stock</td><td><b>Diversify</b></td></tr>
  <tr><td>High-interest debt, no emergency fund</td><td>Pay down debt first</td></tr>
  <tr><td>Turning 71</td><td>Convert RRSP → <b>RRIF</b> or annuity</td></tr>
</table>

<h3>Tax-smart placement (asset location)</h3>
<ul>
  <li>Hold <b>interest-paying</b> investments in registered plans (interest is the most heavily taxed).</li>
  <li>Hold <b>Canadian dividend</b> and capital-gain assets in non-registered accounts (dividend tax credit; 50% inclusion).</li>
  <li>Hold <b>U.S. dividend</b> stocks in an <b>RRSP</b> (no U.S. withholding tax under the treaty; a TFSA doesn't get this).</li>
  <li><b>Document the rationale</b> for every recommendation.</li>
</ul>
`
};
