// In-depth lessons, CIRE Element 7: securities, managed products, mutual funds and other investments.
// Each outcome: explanation, a worked example (.ex), how the exam asks it (.how), then the official-answer box (.key).
window.NOTES = window.NOTES || {};

window.NOTES.fixed = `
<p class="syl">CIRE Element 7 · Securities, managed products, mutual funds and other investments (fixed income) · outcomes 7.1, 7.4, 7.5 · Element 7 is the biggest section: about 21 of 110 questions</p>

<h3>7.1 The asset classes a dealer sells</h3>
<p>Every investment fits into a few broad asset classes, and the exam expects you to know how they differ in <b>risk, return and liquidity</b>:</p>
<table>
  <tr><th>Asset class</th><th>What it is</th><th>Risk / return</th></tr>
  <tr><td><b>Cash and cash equivalents</b></td><td>Cash, T-bills, money market funds, high-interest savings</td><td>Lowest risk, most liquid, lowest return. Main risk: inflation eats the return</td></tr>
  <tr><td><b>Fixed income</b></td><td>Bonds, debentures, GICs, strips: you lend money and get interest</td><td>Moderate. Income is predictable; prices move with interest rates and credit</td></tr>
  <tr><td><b>Equity</b></td><td>Common and preferred shares: you own part of a company</td><td>Higher risk, highest long-term expected return</td></tr>
  <tr><td><b>Commodities</b></td><td>Oil, gold, grain, metals</td><td>Volatile. Most investors use futures, ETFs or producers' shares rather than the physical goods</td></tr>
  <tr><td><b>Derivatives</b></td><td>Options, futures, forwards, swaps: value comes from an underlying asset</td><td>Can hedge risk or add leverage</td></tr>
</table>

<h3>7.4 Fixed income products</h3>
<p>A bond is a loan. The <b>issuer</b> borrows money, pays <b>interest (the coupon)</b> at set intervals, usually twice a year, and repays the <b>face value (par, usually $1,000 or quoted as $100)</b> at <b>maturity</b>. The investor's main worries are: will I be paid back (credit risk), and what happens to the price if interest rates change (interest rate risk)?</p>

<h4>Government bonds</h4>
<p>Government of Canada bonds have the <b>lowest credit risk</b> in Canada because the federal government can tax and print money. Provincial and municipal bonds pay a little more. They are the benchmark that other bonds are priced against.</p>

<h4>Corporate bonds</h4>
<p>Companies pay a higher yield than governments because there's a chance they <b>default</b>: miss interest payments or fail to repay principal. That extra yield is the <b>credit spread</b>. A <b>secured</b> bond is backed by specific assets (e.g. a mortgage bond); a <b>debenture</b> is backed only by the company's general credit.</p>
<div class="ex"><b>Example:</b> A Government of Canada 5-year bond yields 3.0%. A BBB-rated company's 5-year bond yields 4.6%. The 1.6% difference is the credit spread: what investors demand for the risk the company can't pay.</div>

<h4>Strip bonds</h4>
<p>A strip (zero-coupon) bond is created by separating a bond's coupons from its principal. Each piece is sold at a <b>deep discount</b> and pays its face value at maturity, with <b>no payments in between</b>. Two consequences matter:</p>
<ul>
  <li><b>Tax</b>: in a non-registered account, the interest that accrues each year is <b>taxable every year</b> even though no cash is received ("phantom income"). That's why strips usually belong in RRSPs, TFSAs or RRIFs.</li>
  <li><b>Volatility</b>: with all the value at the end, strips are <b>more sensitive to interest rate changes</b> than coupon bonds of the same maturity.</li>
</ul>
<p>Strips are good for someone who needs an exact amount on a known future date (e.g. a child's tuition in 8 years), since there is no reinvestment risk.</p>

<h4>Treasury bills and commercial paper</h4>
<p><b>T-bills</b> are short-term federal government debt (terms up to one year). They pay <b>no coupon</b>: you buy at a <b>discount</b> and receive the full face value at maturity. The difference is your interest.</p>
<div class="ex"><b>Example:</b> Buy a 1-year T-bill for $97.50 per $100. At maturity you get $100. Your return is $2.50 ÷ $97.50 = 2.56%.</div>
<p><b>Commercial paper</b> is the corporate equivalent: short-term, <b>unsecured</b> promissory notes issued by large, creditworthy companies, also usually sold at a discount.</p>
<div class="how"><b>How the exam asks it:</b> "How does a T-bill provide a return?" (discount to face value) · "What is the tax problem with strips in a cash account?" (accrued interest taxed yearly) · "Which risk does a corporate bond add over a government bond?" (default).</div>

<h3>7.5 What a bondholder needs to consider</h3>

<h4>Market access</h4>
<p>Unlike stocks, most bonds <b>don't trade on an exchange</b>. They trade <b>over the counter (OTC)</b>: dealers quote prices and buy and sell from their own inventory (acting as principal). A retail client buys a bond by calling their investment dealer, who sells it from inventory or finds it from another dealer. Bond funds and ETFs are the other way in.</p>

<h4>Information sources</h4>
<ul>
  <li><b>Bank of Canada website</b>: official data on government bond yields and auctions, the most reliable source for government debt.</li>
  <li><b>Credit rating agencies</b> (Morningstar DBRS, S&amp;P, Moody's): ratings of issuers' creditworthiness.</li>
  <li>Dealers' quotes and research; the issuer's offering documents.</li>
</ul>

<h4>Coupon vs yield</h4>
<p>The <b>coupon rate</b> is fixed when the bond is issued: a 4% coupon pays $40 a year per $1,000, forever, whatever happens to rates. The <b>yield</b> is the return an investor gets based on the <b>price they pay today</b>. If rates rise after issue, nobody will pay $1,000 for a 4% bond when new bonds pay 5%, so its <b>price falls</b> until its yield matches the market. That's why <b>prices and yields move in opposite directions</b>.</p>
<table>
  <tr><th>Bond trades at…</th><th>Yield vs coupon</th></tr>
  <tr><td>Par ($100)</td><td>Yield = coupon</td></tr>
  <tr><td>Discount (below $100)</td><td>Yield <b>above</b> coupon</td></tr>
  <tr><td>Premium (above $100)</td><td>Yield <b>below</b> coupon</td></tr>
</table>
<div class="formula">Current yield = Annual coupon ÷ Market price. e.g. $50 ÷ $1,040 = 4.81%</div>
<div class="ex"><b>Example:</b> A 5% bond trades at $1,040. Its current yield is 4.81%, below the 5% coupon, because the buyer pays a premium that will be lost by maturity (the bond only repays $1,000).</div>

<h4>How coupons are paid and taxed</h4>
<p>Coupons are usually paid semi-annually. Interest is <b>fully taxable as income</b> at the investor's marginal rate in the year it's earned, with no special treatment (unlike dividends or capital gains). When you buy a bond <b>between coupon dates</b>, you pay the seller the <b>accrued interest</b> they've earned so far; you then receive the full next coupon.</p>

<h4>The three components of bond risk</h4>
<ol>
  <li><b>Term</b>: the longer until maturity, the more the price moves when rates change.</li>
  <li><b>Credit rating</b>: AAA is highest. <b>BBB (low) / BBB−</b> is the lowest <b>investment grade</b> rating; below it is "high yield" or "junk".</li>
  <li><b>Duration</b>: a single number for interest rate sensitivity. Longer term and <b>lower coupon</b> both raise duration.</li>
</ol>
<div class="formula">Approximate price change ≈ − Duration × Change in yield. e.g. duration 6, yields +0.5% → price ≈ −3%</div>
<div class="ex"><b>Which bond falls most when rates rise 1%?</b> A 25-year bond with a 2% coupon. It's long (more years of below-market coupons) and has a low coupon (more of its value is far in the future). A 3-year, 6% bond would barely move.</div>

<h4>What makes bond yields go up or down</h4>
<table>
  <tr><th>Yields rise when…</th><th>Yields fall when…</th></tr>
  <tr><td>The central bank <b>raises its policy rate</b></td><td>The central bank cuts rates</td></tr>
  <tr><td>Inflation expectations rise</td><td>Inflation expectations fall</td></tr>
  <tr><td>Governments issue more bonds (more supply)</td><td>Investors rush to safe bonds in a downturn (more demand)</td></tr>
  <tr><td>The issuer's credit weakens</td><td>The issuer's credit improves</td></tr>
</table>
<p>Features matter too. A <b>callable</b> bond (issuer can repay early, usually after rates fall) must offer a <b>higher</b> yield, because it hurts the investor. A <b>retractable</b> bond (holder can sell it back at par) or a <b>convertible</b> bond (holder can convert into shares) benefits the investor, so it yields <b>less</b>. In recessions, <b>credit spreads widen</b> as investors fear defaults. An <b>inverted yield curve</b> (short yields above long) is often seen as a recession warning.</p>

<h4>Passive vs active bond management</h4>
<table>
  <tr><th>Passive</th><th>Active</th></tr>
  <tr><td><b>Indexing</b> (replicate a bond index such as the FTSE Canada Universe), buy-and-hold, <b>laddering</b> (equal amounts maturing each year)</td><td><b>Interest rate anticipation</b> (lengthen duration if rates are expected to fall), credit analysis (buy bonds expected to be upgraded), yield curve trades</td></tr>
  <tr><td>Low cost, follows a benchmark, predictable</td><td>Higher cost, tries to beat the benchmark</td></tr>
</table>

<h4>Pros and cons of owning bonds</h4>
<ul>
  <li><b>Advantages</b>: predictable income, return of principal at maturity (if the issuer doesn't default), priority over shareholders in bankruptcy, diversification against stocks.</li>
  <li><b>Disadvantages</b>: interest rate risk, credit risk, inflation risk (fixed payments lose purchasing power), reinvestment risk, and individual bonds often need large amounts to diversify.</li>
</ul>
<div class="how"><b>How the exam asks it:</b> "How are bonds traded in Canada?" (OTC) · "Where to find government bond data?" (Bank of Canada) · "Which factor raises bond yields?" (central bank rate increase) · "Client wants low cost, follows a benchmark?" (passive index replication).</div>

<div class="key"><b>CIRO's practice exam answers</b>
<ul>
  <li>Extra risk of corporate bonds: the issuer may <b>default</b>.</li>
  <li>Debt market access in Canada: bonds trade <b>over the counter</b>.</li>
  <li>Reliable source on government bonds: the <b>Bank of Canada website</b>.</li>
  <li>Low-cost, benchmark-following bond strategy: <b>passive</b> index replication.</li>
  <li>Yields rise with an <b>increase in the central bank rate</b>.</li>
</ul></div>
<div class="trap"><b>Exam trap:</b> a bond's <b>coupon never changes</b>. When rates move, the <b>price</b> changes, and that changes the <b>yield</b>.</div>
`;

window.NOTES.equity = `
<p class="syl">CIRE Element 7 · Securities (equities and market indices) · outcomes 7.2, 7.3, 7.6</p>

<h3>7.2 Common and preferred shares</h3>
<p>A share is a piece of ownership in a company. There are two main kinds, and the exam tests the differences constantly.</p>

<h4>Common shares</h4>
<p>Common shareholders are the true owners. They <b>vote</b> at shareholder meetings (electing directors, approving major changes) and share in growth through <b>capital appreciation</b> and <b>dividends</b>, but dividends are <b>never guaranteed</b>: the board decides each time. In a bankruptcy, common shareholders are paid <b>last</b>, after creditors and preferred shareholders, so they often get nothing.</p>
<p>Their one big protection is <b>limited liability</b>: the most a shareholder can lose is <b>what they invested</b>. They're never responsible for the company's debts.</p>

<h4>Preferred shares</h4>
<p>Preferred shares are a hybrid between bonds and common shares. They usually pay a <b>fixed dividend</b>, rank <b>ahead of common shares</b> (but behind creditors) for dividends and in liquidation, and usually have <b>no vote</b>. Because their income is fixed, straight preferreds behave like long bonds: when <b>interest rates rise, their price falls</b>.</p>
<table>
  <tr><th>Feature</th><th>What it does</th><th>Good for</th></tr>
  <tr><td><b>Cumulative</b></td><td>Missed dividends pile up and must be paid before any common dividend</td><td>Investor</td></tr>
  <tr><td>Callable / redeemable</td><td>Company can buy them back at a set price</td><td>Issuer</td></tr>
  <tr><td>Retractable</td><td>Holder can sell them back to the company</td><td>Investor</td></tr>
  <tr><td>Convertible</td><td>Holder can switch into common shares</td><td>Investor</td></tr>
  <tr><td><b>Rate-reset</b></td><td>Dividend resets every few years (often 5) to a government bond yield plus a fixed spread</td><td>Reduces rate risk</td></tr>
  <tr><td>Floating rate</td><td>Dividend moves with a benchmark rate</td><td>Rising-rate periods</td></tr>
</table>
<div class="ex"><b>Example:</b> XYZ has cumulative preferreds paying $1.50 a year and skips two years. Before it can pay common shareholders anything, it must pay preferred holders the $3.00 in arrears plus the current $1.50.</div>

<h3>7.3 What a shareholder needs to consider</h3>

<h4>Market access and information</h4>
<p>Listed shares are bought and sold <b>through an investment dealer</b>, which routes orders to exchanges (TSX, TSXV, CSE) or ATSs. Key information sources:</p>
<ul>
  <li><b>SEDAR+</b>: company filings (financial statements, MD&amp;A, prospectuses, material change reports).</li>
  <li><b>SEDI</b>: trades reported by company insiders.</li>
  <li>Dealer research, company websites and investor presentations, financial media.</li>
</ul>

<h4>Managed products or individual shares?</h4>
<p>With individual shares the investor picks exactly what to own and when to sell (useful for tax planning). With <b>managed products</b> (mutual funds, ETFs), the money is <b>spread across many holdings</b> and managed professionally, giving instant diversification for a small amount. Managed products don't guarantee anything and aren't run by the investor; the key difference is <b>diversification across many assets vs ownership of specific companies</b>.</p>
<div class="ex"><b>Example:</b> With $25,000, buying 200 stocks directly would be impractical and expensive. One broad index ETF gives exposure to all 200 for a small fee.</div>

<h4>Passive vs active equity management</h4>
<p><b>Passive</b> investors buy the index (e.g. an S&amp;P/TSX Composite ETF) and accept the market return at low cost. <b>Active</b> managers try to beat it with styles such as <b>value</b> (cheap stocks: low P/E, low price-to-book), <b>growth</b> (fast-growing earnings), <b>sector rotation</b> (moving between sectors through the business cycle) and market timing. Active management costs more, and many active managers fail to beat the index after fees.</p>

<h4>How dividends are declared, received and taxed</h4>
<ol>
  <li><b>Declaration date</b>: the board announces the dividend.</li>
  <li><b>Ex-dividend date</b>: buyers on or after this date don't get it. Under <b>T+1</b> settlement, the ex-dividend date is the <b>same day as the record date</b>.</li>
  <li><b>Record date</b>: owners on the company's books get the dividend.</li>
  <li><b>Payment date</b>: the money is paid.</li>
</ol>
<p><b>Tax</b>: Canadian dividends get the <b>dividend tax credit</b>, because the company has already paid tax on those profits. Eligible dividends are "grossed up" by 38% and then a credit is applied, so the investor pays <b>less tax than on the same amount of interest</b>. Foreign (e.g. US) dividends get no credit: they're fully taxable, with a credit for foreign tax withheld.</p>
<div class="formula">Taxable amount of eligible dividends = Dividend × 1.38. e.g. $1,000 → $1,380 (then the dividend tax credit reduces the tax)</div>

<h4>Stock splits and consolidations</h4>
<p>A <b>split</b> gives more shares at a lower price; the total value doesn't change. A <b>consolidation</b> (reverse split) does the opposite, often to lift a low share price to meet listing rules.</p>
<div class="ex"><b>Example:</b> 300 shares at $90 ($27,000). A 3-for-1 split gives 900 shares at about $30, still $27,000.</div>

<h4>Advantages and disadvantages of owning shares</h4>
<ul>
  <li><b>Advantages</b>: growth potential, dividends (tax-advantaged in Canada), voting rights, liquidity, limited liability.</li>
  <li><b>Disadvantages</b>: price volatility, dividends can be cut, last in line in bankruptcy, company-specific risk.</li>
</ul>

<h3>7.6 Market indices</h3>
<p>An index measures how a group of securities performs. It's expressed as a number relative to a <b>base value</b> set at a start date (e.g. 1,000), so you can compare performance over time.</p>

<h4>Index vs average</h4>
<p>A simple <b>average</b> just adds the prices and divides by the number of stocks. A typical <b>index</b> weights each company by its <b>market capitalization</b> (share price × shares outstanding), so larger companies count for more.</p>

<h4>Weighting methods</h4>
<table>
  <tr><th>Method</th><th>Biggest influence</th><th>Example</th></tr>
  <tr><td><b>Market-value (cap) weighted</b></td><td>Largest companies by market value</td><td>S&amp;P/TSX Composite (float-adjusted)</td></tr>
  <tr><td><b>Price weighted</b></td><td>Highest-priced stocks, regardless of size</td><td>Dow Jones Industrial Average</td></tr>
  <tr><td>Equal weighted</td><td>Every stock the same</td><td>Equal-weight index ETFs</td></tr>
</table>
<div class="ex"><b>Price-weighted example:</b> Stocks at $20, $50 and $80, divisor 3: average $50. If the $80 stock rises 10% to $88, the average becomes $52.67, up 5.3%. The same 10% rise in the $20 stock would move it only 1.3%.</div>

<h4>Price return vs total return</h4>
<p>A <b>price return</b> index tracks only price changes. A <b>total return</b> index assumes all dividends are <b>reinvested</b>, so it shows the full return an investor would have earned. Over long periods the gap is large.</p>

<h4>Types and uses</h4>
<ul>
  <li><b>Types</b>: asset class (FTSE Canada Universe Bond Index), sector (S&amp;P/TSX Capped Financials), country (S&amp;P 500), international (MSCI EAFE for developed markets outside North America; MSCI World).</li>
  <li><b>Uses</b>: a <b>market summary</b> ("the TSX fell 1% today"), <b>benchmarking</b> a portfolio's performance, and the basis for index funds, ETFs and index derivatives.</li>
</ul>
<div class="how"><b>How the exam asks it:</b> "Main difference between an index and an average?" (index considers market capitalization) · "Defining feature of common shares?" (votes and capital appreciation) · "How are Canadian dividends taxed?" (lower rate via the dividend tax credit).</div>

<div class="key"><b>CIRO's practice exam answers</b>
<ul>
  <li>Defining feature of common shares: <b>voting rights and capital appreciation potential</b>.</li>
  <li>Common shares: capital loss is <b>limited to the amount invested</b>.</li>
  <li>Canadian dividends: taxed at a lower rate due to the <b>dividend tax credit</b>.</li>
  <li>Equity index vs average: an index considers <b>market capitalization</b>; an average sums prices.</li>
  <li>Managed products vs individual equities: managed products <b>diversify across many assets</b>.</li>
</ul></div>
<div class="trap"><b>Exam trap:</b> preferred shares rank ahead of common shares but <b>behind all creditors</b>, including bondholders.</div>
`;

window.NOTES.funds = `
<p class="syl">CIRE Element 7 · Managed products, mutual funds, ETFs and other investments · outcomes 7.7–7.12</p>

<h3>7.7 Types of pooled products</h3>
<p>A pooled product combines many investors' money into one portfolio run by a professional manager. Each investor owns a slice (units or shares). The structures differ in <b>how you buy and sell</b> and <b>how the price is set</b>.</p>
<table>
  <tr><th>Product</th><th>How you buy/sell</th><th>Price</th></tr>
  <tr><td><b>Mutual fund</b> (open-end)</td><td>From the fund company or a dealer; the fund issues and redeems units continuously</td><td>NAV per unit, calculated once a day at close</td></tr>
  <tr><td><b>Closed-end fund</b></td><td>On an exchange; a <b>fixed number of shares</b> (no continuous issuing or redeeming)</td><td>Market price, which can be at a <b>discount or premium</b> to NAV</td></tr>
  <tr><td><b>ETF</b></td><td>On an exchange, all day</td><td>Market price, kept close to NAV by creation and redemption of units</td></tr>
  <tr><td><b>REIT</b></td><td>On an exchange</td><td>Market price; owns income-producing property and pays out most of its income</td></tr>
</table>

<h3>7.8 Features, risks and returns of managed products</h3>
<h4>Mutual fund trusts vs mutual fund corporations</h4>
<p>Most Canadian funds are <b>mutual fund trusts</b>: they issue <b>units</b> and <b>flow their income through</b> to unitholders each year, so the fund itself pays no tax. A <b>mutual fund corporation</b> issues <b>shares</b> and can house several funds as different share classes ("corporate class"), but it can only pay out Canadian dividends and capital gains dividends.</p>
<p>What drives a fund's return? Mainly the <b>type of assets it holds</b> (stocks vs bonds, which sectors, which countries) and how they perform, minus fees.</p>

<h4>Income trusts</h4>
<p>An income trust holds an operating business and <b>distributes most of its cash flow</b> to unitholders, which gives <b>higher yields</b> than most common shares. The risk: if the business weakens, distributions can be <b>cut</b> and the unit price usually falls with them. Nothing is guaranteed.</p>

<h4>Wrap accounts and wrap funds, funds of funds, pooled funds</h4>
<ul>
  <li><b>Wrap</b>: a portfolio of investment products (funds or securities) managed for the client for <b>one all-in fee</b> based on assets, covering advice, management and trading.</li>
  <li><b>Fund of funds</b>: a fund that invests in other funds, e.g. a "balanced portfolio" holding a bond fund and three equity funds.</li>
  <li><b>Pooled funds</b>: offered to institutions and wealthy investors <b>without a prospectus</b> (under exemptions), with high minimums and usually <b>lower fees</b>.</li>
</ul>

<h3>7.9 What an investor in managed products needs to consider</h3>
<ul>
  <li><b>Access</b>: through a mutual fund dealer or investment dealer, or directly from the fund company.</li>
  <li><b>Information</b>: Fund Facts / ETF Facts, prospectus, management reports of fund performance, fund websites.</li>
  <li><b>Range of exposures</b>: managed products open up <b>asset classes</b> (e.g. emerging-market bonds), <b>sectors</b> (technology, banks) and <b>geography</b> (Asia, Europe) that would be hard to buy directly.</li>
  <li><b>Diversification vs concentration</b>: a broad fund spreads risk; a sector fund (e.g. only Canadian banks) is <b>concentrated</b> and riskier.</li>
  <li><b>Fees, turnover and taxes</b> all reduce what the investor keeps (see 7.10).</li>
</ul>

<h3>7.10 Mutual funds in detail</h3>
<h4>Buying and pricing</h4>
<p>Funds use <b>forward pricing</b>: an order placed during the day gets that day's <b>closing NAVPS</b>, not the last price you saw.</p>
<div class="formula">NAVPS = (Total assets − Liabilities) ÷ Units outstanding. e.g. ($250M − $5M) ÷ 10M = $24.50</div>

<h4>Fund Facts</h4>
<p>A short, plain-language document (about 2 pages) showing what the fund invests in, top holdings, past performance, the <b>risk rating</b>, <b>costs</b> (MER, sales charges, trailing commission) and who it's suitable for. It must generally be delivered <b>before</b> a purchase. It's the <b>key information source</b> for evaluating a fund.</p>

<h4>Risk ranking</h4>
<p>Funds use the CSA's standard method: risk is based on the <b>standard deviation of the fund's last 10 years of returns</b> (or a similar index if the fund is newer). The result is one of <b>five categories</b>: low, low to medium, medium, medium to high, high. It measures <b>volatility</b>, not the chance of losing everything.</p>

<h4>Management styles</h4>
<p>Active managers may work <b>top-down</b> (start with the economy, then sectors, then companies) or <b>bottom-up</b> (start with individual companies), and favour value or growth. Passive (index) funds track a benchmark at low cost.</p>

<h4>Costs and their impact</h4>
<table>
  <tr><th>Cost</th><th>What it is</th></tr>
  <tr><td><b>MER</b></td><td>Management fee + operating expenses + taxes, as a % of assets, deducted inside the fund</td></tr>
  <tr><td>TER</td><td>Trading costs of buying and selling the fund's holdings (separate from the MER)</td></tr>
  <tr><td><b>Trailing commission</b></td><td>Paid by the fund company to the dealer out of the management fee for as long as the client holds the fund. <b>Banned for order-execution-only dealers</b> since June 2022</td></tr>
  <tr><td>Sales charges</td><td>Front-end (paid on purchase). <b>Deferred sales charges (DSC) banned</b> since June 2022</td></tr>
</table>
<div class="ex"><b>Fee impact example:</b> $50,000 for 20 years at 6% gross. With a 2% MER (4% net) it grows to about $109,600. With a 0.5% MER (5.5% net) it grows to about $145,900. The fee difference costs about $36,000.</div>
<div class="formula">Average return of several funds = add each fund's return, divide by the number of funds. Each return = (End − Start) ÷ Start</div>
<div class="ex"><b>Example:</b> Fund A $540M → $590M (+9.26%), Fund B $2,400M → $2,250M (−6.25%), Fund C $920M → $935M (+1.63%). Simple average = (9.26 − 6.25 + 1.63) ÷ 3 = 1.55%.</div>

<h4>Advantages and disadvantages</h4>
<ul>
  <li><b>Advantages</b>: professional management, diversification, small minimums, pre-authorized contributions, easy redemption, record keeping.</li>
  <li><b>Disadvantages</b>: fees (MER), priced only once a day, no control over <b>taxable distributions</b>, possible cash drag.</li>
</ul>

<h4>Taxes</h4>
<p>In a non-registered account, distributions keep their type in the investor's hands: <b>interest</b> (fully taxed), <b>Canadian dividends</b> (dividend tax credit), <b>capital gains</b> (half taxed) and foreign income. <b>Return of capital</b> isn't taxed when received but <b>reduces the adjusted cost base</b>, which increases the gain when units are sold. Selling units at a profit also creates a capital gain.</p>
<div class="ex"><b>Trap example:</b> A client buys a fund in early December just before its annual distribution. The NAV drops by the amount distributed, but she's taxed on the distribution. She has "bought a tax bill" for gains earned before she owned the fund.</div>

<h3>7.11 ETFs</h3>
<ul>
  <li><b>Access</b>: bought and sold <b>through a dealer on an exchange</b>, like shares, with a commission and a bid-ask spread.</li>
  <li><b>ETF Facts</b>: like Fund Facts, delivered <b>within two days after</b> the purchase.</li>
  <li><b>Market price vs NAV</b>: the price is set by trading and can be slightly above (premium) or below (discount) NAV. Authorized participants create or redeem units when gaps appear, which keeps them close.</li>
  <li><b>Styles</b>: most are passive (index), but there are active ETFs and factor ("smart beta") ETFs.</li>
  <li><b>Leverage</b>: leveraged (2×) and inverse ETFs reset <b>daily</b>, so over weeks or months the result can be very different from 2× the index. They're for short-term trading, not buy-and-hold.</li>
</ul>
<table>
  <tr><th>ETFs vs mutual funds</th><th></th></tr>
  <tr><td>ETF advantages</td><td>Trade all day, usually <b>lower MERs</b>, holdings disclosed often, can use limit orders</td></tr>
  <tr><td>ETF disadvantages</td><td>Commissions and spreads on every trade (bad for small monthly purchases), possible premium/discount to NAV</td></tr>
</table>

<h3>7.12 Other investments</h3>
<h4>Hedge funds</h4>
<p>Private funds with flexible strategies: <b>leverage, short selling, derivatives</b>, aiming for absolute returns. They're usually sold to <b>accredited investors</b> under exemptions. Disadvantages: <b>high fees</b> (e.g. 2% management + 20% performance fee), <b>limited liquidity</b> (lock-ups, infrequent redemptions), less transparency and regulation. A <b>high-water mark</b> means performance fees are paid only on gains above the fund's previous peak.</p>
<h4>Alternative mutual funds ("liquid alts")</h4>
<p>Prospectus-qualified funds available to retail investors that may use more leverage, short selling and concentration than regular mutual funds. A regulated middle ground between mutual funds and hedge funds.</p>
<h4>Structured products</h4>
<p>E.g. <b>principal-protected notes</b>: the bank guarantees the principal <b>at maturity</b> and pays a return linked to an index, often with a <b>cap</b> or partial participation. Risks: the guarantee depends on the issuer's credit; selling before maturity can mean a loss; returns can be limited.</p>
<div class="ex"><b>Example:</b> A note pays 70% of the index gain, capped at 30%. The index rises 50%. 70% × 50% = 35%, but the cap limits the payout to 30%.</div>
<h4>Crypto assets</h4>
<p>Most use <b>blockchain</b>: a shared, <b>decentralized ledger</b> that records transactions without a central authority. They aren't backed by governments and don't guarantee returns. Risks: extreme volatility, hacking, custody and platform failures. In Canada, investors can also get exposure through <b>crypto ETFs</b> listed on Canadian exchanges.</p>
<h4>ESG products</h4>
<p>Funds that consider <b>environmental, social and governance</b> factors. Strategies: <b>negative screening</b> (exclude tobacco, weapons), positive screening (pick ESG leaders), ESG integration, thematic, <b>impact investing</b>, shareholder engagement. The main risk is <b>greenwashing</b> (overstating ESG credentials). CSA guidance says a fund's name, objectives and disclosure must match what it actually does.</p>
<div class="how"><b>How the exam asks it:</b> "Key advantage of income trusts?" (high distributions) · "How are wrap funds described?" (single fee) · "Most common way to buy mutual funds?" (through a dealer or the fund company) · "Key source for evaluating funds?" (Fund Facts) · "Hedge fund disadvantage?" (high fees, limited liquidity) · "Closed-end vs ETF?" (fixed number of shares).</div>

<div class="key"><b>CIRO's practice exam answers</b>
<ul>
  <li>Income trusts: distribute most cash flow → <b>higher yields</b>.</li>
  <li>Wrap funds: a portfolio of products with a <b>single fee structure</b>.</li>
  <li>Mutual fund access: <b>directly from the fund company or via a dealer</b> (mutual fund or investment dealer).</li>
  <li>Key information source: <b>Fund Facts</b>.</li>
  <li>Managed products' tax: subject to tax on <b>capital gains, interest and dividends</b>.</li>
  <li>Return of a mutual fund trust depends most on the <b>type of assets held</b>.</li>
  <li>Hedge fund disadvantage: <b>higher fees and limited liquidity</b>.</li>
  <li>Crypto key feature: <b>blockchain, decentralized records</b>.</li>
  <li>Closed-end funds vs ETFs: closed-end funds have a <b>fixed number of shares</b>.</li>
</ul></div>
<div class="trap"><b>Exam trap:</b> mutual funds are <b>not</b> bought on a stock exchange (ETFs and closed-end funds are).</div>
`;

window.NOTES.tax = `
<p class="syl">CIRE Element 7 · How investment income is taxed (7.2, 7.5, 7.9) · registered plans are mainly for the RSE</p>

<h3>Why tax matters on the CIRE</h3>
<p>The CIRE doesn't test tax planning in depth, but it does expect you to know how each <b>type of investment income</b> is taxed, because that drives product choice ("the client wants income and is worried about tax in a non-registered account"). Tax applies only in <b>non-registered</b> accounts; inside an RRSP or TFSA, income isn't taxed year by year.</p>

<h3>The four types of investment income</h3>
<table>
  <tr><th>Income</th><th>Tax treatment</th><th>Example on $1,000</th></tr>
  <tr><td><b>Interest</b> (bond coupons, GICs, T-bill discount, strip accrual)</td><td>100% taxable at the marginal rate, every year</td><td>All $1,000 is taxable income</td></tr>
  <tr><td><b>Eligible Canadian dividends</b></td><td>Grossed up <b>38%</b>, then the <b>dividend tax credit</b> reduces tax</td><td>$1,380 is included, but the credit makes the tax lower than on interest</td></tr>
  <tr><td><b>Foreign dividends</b></td><td>Fully taxable like interest; credit for foreign tax withheld</td><td>All $1,000 taxable</td></tr>
  <tr><td><b>Capital gains</b></td><td><b>50%</b> included in income, only when <b>realized</b> (sold)</td><td>$500 taxable</td></tr>
</table>
<p>So, from most to least heavily taxed: <b>interest → foreign dividends → Canadian dividends / capital gains</b>.</p>

<h3>Other rules</h3>
<ul>
  <li><b>Return of capital</b>: not taxed when received, but lowers the <b>adjusted cost base (ACB)</b>, so the eventual capital gain is bigger.</li>
  <li><b>ACB</b> is averaged across all purchases of the same security, including reinvested distributions.</li>
  <li><b>Capital losses</b> can only offset capital gains: carried back 3 years or forward indefinitely.</li>
  <li><b>Superficial loss</b>: if you (or your spouse) buy the same security within 30 days before or after selling it at a loss, the loss is denied and added to the new shares' ACB.</li>
  <li><b>Fund distributions</b> keep their type: a fund's interest is taxed as interest, its dividends as dividends, its gains as gains.</li>
</ul>
<div class="ex"><b>Example:</b> A retired client in a high bracket wants income in a non-registered account. Dividend-paying Canadian shares or preferreds will usually leave her more after tax than the same yield from bonds, because of the dividend tax credit.</div>

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
`;
