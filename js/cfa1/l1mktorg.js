// CFA Level I · Equity Investments · Learning module 1: Market Organization and Structure.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1mktorg = `
<p class="syl">CFA Level I · Equity Investments (11–14% of the exam) · Learning module 1 of 8 · Market Organization and Structure</p>
<p>Before valuing securities, you need to know how markets work: what the financial system does, how assets and markets are classified, who the intermediaries are, what it means to be long, short or leveraged (with margin calculations), the types of orders, and how primary and secondary markets are organized. Margin calculations and order types are the most tested parts.</p>

<h3>1. The financial system</h3>
<p>The financial system lets people and companies <b>save</b>, <b>borrow</b>, <b>raise equity</b>, <b>manage risk</b>, <b>exchange assets</b> (now or in the future) and <b>use information</b> (trade on it). In doing so it determines rates of return (where saving equals borrowing) and allocates capital to its most productive uses.</p>
<h4>Classifying assets and markets</h4>
<ul>
  <li><b>Financial assets</b> (securities, currencies, derivatives) vs <b>real assets</b> (real estate, equipment, commodities).</li>
  <li><b>Debt</b> (promise to repay) vs <b>equity</b> (ownership); <b>public</b> (exchange-traded, regulated) vs <b>private</b> securities.</li>
  <li><b>Money markets</b> (debt maturing in one year or less) vs <b>capital markets</b> (longer-term debt and equity).</li>
  <li><b>Primary markets</b> (issuers sell new securities to investors) vs <b>secondary markets</b> (investors trade existing securities).</li>
  <li><b>Spot markets</b> (immediate delivery) vs <b>derivative</b> contracts (forwards, futures, swaps, options).</li>
  <li><b>Traditional</b> investments (stocks, bonds) vs <b>alternative</b> investments (hedge funds, private equity, real estate, commodities).</li>
</ul>

<h3>2. Financial intermediaries</h3>
<table>
  <tr><th>Intermediary</th><th>Role</th></tr>
  <tr><td><b>Brokers</b></td><td>Act as agents, finding counterparties for clients' orders</td></tr>
  <tr><td><b>Exchanges</b></td><td>Provide venues where traders meet and set rules; <b>alternative trading systems</b> (including dark pools) do similar jobs without regulatory authority over members</td></tr>
  <tr><td><b>Dealers</b></td><td>Trade from their own inventory, providing liquidity (buy at the bid, sell at the ask)</td></tr>
  <tr><td><b>Securitizers</b></td><td>Pool assets (e.g. mortgages) and sell claims on the pool</td></tr>
  <tr><td><b>Depository institutions</b></td><td>Banks: take deposits and make loans</td></tr>
  <tr><td><b>Insurance companies</b></td><td>Pool and transfer risk</td></tr>
  <tr><td><b>Arbitrageurs</b></td><td>Buy and sell the same or equivalent assets in different markets to profit from price differences</td></tr>
  <tr><td><b>Clearinghouses and custodians</b></td><td>Clear and settle trades, guarantee performance (reducing counterparty risk); hold securities safely</td></tr>
</table>

<h3>3. Positions: long, short and leveraged <span class="hot">Highly tested</span></h3>
<ul>
  <li>A <b>long</b> position owns the asset (profits if it rises). A <b>short</b> position profits if it falls.</li>
  <li><b>Short selling</b>: borrow shares (via a broker) and sell them, planning to buy them back later at a lower price. The short seller must pay the lender any <b>dividends</b>, post <b>collateral</b> (the sale proceeds plus margin), may earn interest on the collateral (the short rebate) and faces potentially <b>unlimited losses</b>.</li>
  <li><b>Margin (leveraged) purchase</b>: the investor pays part of the price (the <b>initial margin</b>) and borrows the rest from the broker (call money), paying interest.</li>
</ul>
<div class="formula">Leverage ratio = position value / equity = 1 / initial margin · Margin call price (long) = P₀ × (1 − initial margin) / (1 − maintenance margin)</div>
<div class="ex"><b>Worked example:</b> Buy 500 shares at $60 with 40% initial margin (maintenance margin 25%). Loan interest 5%; dividend $1 a share; one year later the price is $66.
<br>Position $30,000; equity $12,000; loan $18,000. Leverage = 1/0.40 = 2.5.
<br>Return on equity = (ending value 33,000 − 30,000 + dividends 500 − interest 900) / 12,000 = 2,600/12,000 = <b>21.7%</b> (vs 11.7% unleveraged: 10% price gain + 1.7% dividend yield).
<br>Margin call price = 60 × (1 − 0.40)/(1 − 0.25) = 60 × 0.60/0.75 = <b>$48</b>. Below $48, equity falls under 25% of the position and the investor must add funds.</div>
<div class="trap"><b>Trap:</b> leverage magnifies losses too: a 10% price fall with 2.5× leverage is roughly a 25% loss on equity (before interest).</div>

<h3>4. Orders <span class="hot">Highly tested</span></h3>
<h4>Execution instructions (how to trade)</h4>
<ul>
  <li><b>Market order</b>: trade immediately at the best available price. Fast, but price is uncertain (risk of a poor fill in illiquid markets).</li>
  <li><b>Limit order</b>: trade only at the limit price or better (buy at or below; sell at or above). Price is controlled, but it may not execute. A limit buy above the best ask (or a limit sell below the best bid) is <b>marketable</b> and executes immediately. Limit orders placed away from the market are <b>passive</b> ("behind the market").</li>
  <li><b>Hidden</b> and <b>iceberg</b> orders show only part (or none) of the size to the market.</li>
</ul>
<h4>Validity instructions (when the order is valid)</h4>
<ul>
  <li><b>Day order</b> (expires at the end of the day), <b>good-till-cancelled</b>, <b>immediate-or-cancel</b> (fill-or-kill), good-on-close / good-on-open.</li>
  <li><b>Stop orders</b>: become active only after the price trades at the stop price. A <b>stop-loss sell</b> is placed <b>below</b> the current price to limit losses on a long position; a <b>stop buy</b> is placed <b>above</b> the current price, e.g. to limit losses on a short position. A stop order becomes a market order when triggered, so in a fast market it can fill well beyond the stop.</li>
</ul>
<p><b>Clearing instructions</b> tell the broker how to clear and settle the trade (and whether a sale is long or short).</p>

<h3>5. Primary markets</h3>
<ul>
  <li><b>Underwritten offering</b>: an investment bank buys the issue and resells it, guaranteeing the proceeds (it bears the risk); <b>best efforts</b>: the bank sells as much as it can without a guarantee.</li>
  <li><b>Initial public offering (IPO)</b> vs <b>seasoned offering</b> (additional shares by an already-listed company).</li>
  <li><b>Private placement</b>: sold directly to qualified investors; cheaper, less disclosure, less liquid.</li>
  <li><b>Shelf registration</b>: the issuer registers securities once and then sells them over time as it chooses (lower costs, flexible timing).</li>
  <li><b>Dividend reinvestment plans</b> and <b>rights offerings</b> (existing shareholders get rights to buy new shares, often at a discount, to avoid dilution).</li>
</ul>

<h3>6. Secondary market structures <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Call market</b>: orders are gathered and trades happen at a single point in time at one price (e.g. opening auctions). <b>Continuous market</b>: trading at any time while open.</li>
  <li><b>Quote-driven (dealer) market</b>: dealers post bid and ask prices and trade from their own inventory (most bonds, currencies).</li>
  <li><b>Order-driven market</b>: orders from all participants are matched by rules. <b>Order precedence</b>: first <b>price priority</b> (best price first), then <b>display precedence</b> (displayed orders before hidden ones at the same price), then <b>time precedence</b> (earlier orders first). Pricing rules: <b>uniform</b> (one price for all trades, used in call markets), <b>discriminatory</b> (each trade at the limit price of the standing order), <b>derivative pricing</b> (price taken from another market, e.g. crossing networks).</li>
  <li><b>Brokered market</b>: brokers find counterparties for unique or illiquid assets (real estate, large blocks).</li>
</ul>
<h4>A well-functioning financial system</h4>
<ul>
  <li>Timely, accurate information; liquidity; low transaction costs; prices that quickly reflect information (<b>informational efficiency</b>) and capital flowing to its most productive uses (<b>allocational efficiency</b>).</li>
  <li><b>Regulation</b> aims to control fraud, agency problems, promote fairness, set standards (including financial reporting and minimum capital), prevent excessive risk-taking and protect investors.</li>
</ul>

<div class="how"><b>How it's tested:</b> margin return and margin call calculations, leverage ratios, short-selling obligations, choosing the right order type (stop-loss vs limit), order precedence rules, call vs continuous and quote- vs order-driven markets, and primary market terms (shelf registration, rights offering, underwriting).</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe the functions of the financial system and classify assets and markets.</li>
  <li>Describe the major financial intermediaries.</li>
  <li>Compute leverage ratios, returns on margin purchases and margin call prices; describe short selling.</li>
  <li>Compare execution, validity and clearing instructions, including stop orders.</li>
  <li>Describe primary and secondary markets, market structures and order precedence, and characteristics of a well-functioning system.</li>
</ul></div>
`;

window.QB_HARD.l1mktorg = [
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
  ["A market for debt securities with maturities of one year or less is a:",
    ["Money market", "Capital market", "Primary market"],
    "Money markets trade short-term debt; capital markets trade longer-term debt and equity.", "r"],
  ["A financial intermediary that buys and sells securities for its own account, providing liquidity to other traders, is a:",
    ["Dealer", "Broker", "Custodian"],
    "Dealers trade from inventory; brokers act as agents for clients; custodians hold securities.", "r"],
  ["An investor buys 500 shares at $60 using 40% initial margin and a loan at 5% interest. The shares pay a $1 dividend and rise to $66 after a year. The return on her equity is closest to:",
    ["21.7%", "25.0%", "11.7%"],
    "Equity 12,000; loan 18,000. Gain = 3,000 + 500 dividends − 900 interest = 2,600; 2,600/12,000 = 21.7%. Ignoring interest and dividends gives 25%; 11.7% is the unleveraged return.", "c"],
  ["An investor buys shares at $60 with 40% initial margin; the maintenance margin is 25%. She will receive a margin call if the price falls below:",
    ["$48.00", "$45.00", "$36.00"],
    "Margin call price = 60 × (1 − 0.40)/(1 − 0.25) = 36/0.75 = $48.00.", "c"],
  ["Which statement about short selling is most accurate?",
    ["Potential losses are unlimited", "The short seller receives the dividends", "No collateral is required"],
    "The price can rise without limit; the short seller pays dividends to the lender and must post collateral.", "r"],
  ["A trader who is short a stock at $30 wants to limit his loss if the price rises above $36. He should place a:",
    ["Stop buy order at $36", "Limit buy order at $36", "Stop-loss sell order at $36"],
    "A stop buy above the market triggers a purchase if the price rises to $36, closing the short position.", "s"],
  ["A buy limit order with a limit price above the current best ask price is:",
    ["Marketable and will execute immediately", "Passive and will wait in the order book", "Invalid and will be rejected"],
    "It can be filled at the best ask right away, so it's a marketable limit order.", "r"],
  ["An order that must be filled immediately or it is cancelled is a(n):",
    ["Immediate-or-cancel order", "Good-till-cancelled order", "Good-on-close order"],
    "Immediate-or-cancel (fill-or-kill) orders are valid only for an immediate execution.", "r"],
  ["An investment bank that guarantees the proceeds of a share issue by buying the shares and reselling them is acting in a(n):",
    ["Underwritten offering", "Best efforts offering", "Private placement"],
    "In an underwritten offering, the bank bears the risk of not selling the whole issue.", "r"],
  ["A company gives its existing shareholders the right to buy new shares at a discount in proportion to their holdings. This is a:",
    ["Rights offering", "Shelf registration", "Seasoned underwritten offering"],
    "Rights offerings let existing holders maintain their proportional ownership.", "r"],
  ["In an order-driven market, two limit orders to buy at the same price are on the book, one displayed and one hidden. Under standard order precedence rules:",
    ["The displayed order executes first", "The hidden order executes first", "The larger order executes first"],
    "After price priority comes display precedence (displayed before hidden), then time precedence.", "r"],
  ["A market in which all orders submitted over a period are matched at a single price at one point in time is a:",
    ["Call market", "Continuous market", "Brokered market"],
    "Call markets (e.g. opening auctions) gather orders and trade at one price; continuous markets trade throughout the session.", "r"],
  ["A financial system in which capital flows to the projects with the highest risk-adjusted returns is said to be:",
    ["Allocationally efficient", "Operationally efficient", "Fully regulated"],
    "Allocational efficiency means resources go to their most productive uses; it depends on informational efficiency.", "r"],
];

window.GLOSSARY.push(
  ["Margin call price (long)","P0 × (1 − initial margin) ÷ (1 − maintenance margin). Leverage ratio = 1 ÷ initial margin.","l1mktorg"],
  ["Order precedence","Order-driven markets rank by price priority, then display precedence (visible first), then time.","l1mktorg"],
  ["Market types","Quote-driven (dealer), order-driven (rules match orders), brokered (brokers find counterparties). Call vs continuous trading.","l1mktorg"],
  ["Primary vs secondary market", "New issues sold by issuers vs trading of existing securities among investors.", "l1mktorg"],
  ["Leverage ratio (margin)", "1/initial margin; e.g. 40% margin → 2.5×.", "l1mktorg"],
  ["Short selling", "Borrow and sell shares; pay dividends to the lender, post collateral, unlimited loss potential.", "l1mktorg"],
  ["Stop order", "Activates at the stop price: stop-loss sell below the market, stop buy above it.", "l1mktorg"],
  ["Marketable limit order", "Buy limit above the best ask (or sell limit below the best bid); executes immediately.", "l1mktorg"],
  ["Underwritten vs best efforts", "Bank guarantees proceeds vs sells what it can without a guarantee.", "l1mktorg"],
  ["Rights offering", "Existing shareholders may buy new shares pro rata, often at a discount.", "l1mktorg"]
);
