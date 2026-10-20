// CFA Level I · Equity Investments · Learning module 4: Overview of Equity Securities.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1eqsec = `
<p class="syl">CFA Level I · Equity Investments · Learning module 4 of 8 · Overview of Equity Securities</p>
<p>This lesson covers what shareholders actually own: the rights attached to common and preference shares, how voting works, the differences between public and private equity, the ways to invest in foreign companies, the risk and return of different equity securities, and the link between book value, market value, ROE and the cost of equity.</p>

<h3>1. Common shares <span class="hot">Highly tested</span></h3>
<p>Common shareholders own the residual claim: they're paid after creditors and preference shareholders, and they share in profits through dividends (declared at the board's discretion) and price gains. They usually have voting rights and limited liability.</p>
<h4>Voting</h4>
<ul>
  <li><b>Statutory (straight) voting</b>: one vote per share for <b>each</b> director seat. A shareholder with 100 shares and 4 seats to fill casts 100 votes for each seat.</li>
  <li><b>Cumulative voting</b>: total votes = shares × seats, and the shareholder can put <b>all of them on one candidate</b>. This helps minority shareholders elect at least one director.</li>
</ul>
<div class="ex"><b>Example:</b> 1,000 shares, 5 seats. Statutory: up to 1,000 votes for each of the 5 candidates. Cumulative: 5,000 votes in total, which can all go to one candidate.</div>
<ul>
  <li><b>Multiple share classes</b> (dual-class shares): one class may have more votes per share (e.g. founders' shares with 10 votes), letting a small group keep control while raising equity. Classes can also differ in dividend rights or priority in liquidation.</li>
  <li><b>Callable common shares</b>: the company can buy them back at a set price (good for the issuer, so they're riskier for investors). <b>Putable common shares</b>: holders can sell them back at a set price (a floor that benefits investors).</li>
</ul>

<h3>2. Preference (preferred) shares <span class="hot">Highly tested</span></h3>
<p>Preference shares rank ahead of common shares for dividends and in liquidation, but behind all debt. They usually pay a fixed dividend and have no voting rights. Missing a preferred dividend is <b>not</b> a default.</p>
<table>
  <tr><th>Feature</th><th>Meaning</th></tr>
  <tr><td><b>Cumulative</b></td><td>Missed dividends build up as arrears and must be paid in full before any common dividend</td></tr>
  <tr><td><b>Non-cumulative</b></td><td>Missed dividends are lost for good</td></tr>
  <tr><td><b>Participating</b></td><td>Receive the fixed dividend plus an extra dividend if profits exceed a target; in liquidation may get more than par</td></tr>
  <tr><td><b>Non-participating</b></td><td>Only the fixed dividend and par value in liquidation (most preference shares)</td></tr>
  <tr><td><b>Convertible</b></td><td>Can be exchanged for a set number of common shares; lower dividend in return for upside</td></tr>
  <tr><td><b>Callable / putable</b></td><td>Issuer can redeem at a set price (riskier for investor, higher yield) / holder can sell back (less risky, lower yield)</td></tr>
</table>
<div class="ex"><b>Example (arrears):</b> a cumulative preference share pays $4 a year. The company skips dividends in years 1 and 2. In year 3 it must pay $4 × 3 = <b>$12</b> per preference share before paying any common dividend. If the shares were non-cumulative, only the current $4 would be due.</div>
<h4>Risk ranking for the investor (least to most risky)</h4>
<ul>
  <li>Putable preference shares (floor on price) &lt; non-putable preference &lt; callable preference (issuer redeems when it suits them).</li>
  <li>Cumulative &lt; non-cumulative (arrears give protection).</li>
  <li>Preference shares overall &lt; common shares (fixed income stream and higher priority).</li>
  <li>Putable common &lt; common &lt; callable common.</li>
</ul>

<h3>3. Private vs public equity</h3>
<table>
  <tr><th>Type</th><th>Description</th></tr>
  <tr><td><b>Venture capital</b></td><td>Funding for start-ups and early-stage companies (seed, early stage, later stage); investors expect a high return and exit via an IPO or a sale</td></tr>
  <tr><td><b>Leveraged buyout (LBO)</b></td><td>Investors buy a public company (or division) using a lot of debt and take it private; a <b>management buyout (MBO)</b> is one led by existing managers</td></tr>
  <tr><td><b>PIPE</b> (private investment in public equity)</td><td>A public company sells shares privately to a small group of investors, often at a discount, to raise capital quickly</td></tr>
</table>
<p>Compared with public equity, private equity is <b>less liquid</b>, has no market price, and has <b>less public disclosure</b>. Benefits: lower reporting costs, a longer-term focus for management (no quarterly pressure) and potentially higher returns once taken public again.</p>

<h3>4. Investing in foreign (non-domestic) equity</h3>
<ul>
  <li><b>Direct investing</b>: buy shares on the foreign exchange in the local currency. Issues: currency exposure, different regulations and reporting, possibly less liquidity.</li>
  <li><b>Depository receipts (DRs)</b>: a bank holds the foreign shares and issues receipts that trade on the investor's local exchange in the local currency. Dividends are converted for holders.
    <ul>
      <li><b>Sponsored</b>: the foreign company is involved; DR holders get <b>voting rights</b> and the company must meet more disclosure requirements.</li>
      <li><b>Unsponsored</b>: set up by the bank without the company; the <b>bank keeps the voting rights</b>.</li>
    </ul>
  </li>
  <li><b>Global depository receipt (GDR)</b>: issued outside the company's home country and outside the US (often in London), usually priced in US dollars.</li>
  <li><b>American depository receipt (ADR)</b>: US dollar receipts trading in the US. Levels: Level I (over the counter, no new capital), Level II (exchange listed, no new capital), Level III (exchange listed, can raise capital), Rule 144A (private placement to qualified buyers, raises capital).</li>
  <li><b>Global registered share (GRS)</b>: the same ordinary share trades on several exchanges in different currencies, without conversion.</li>
  <li><b>Basket of listed depository receipts (BLDR)</b>: an exchange-traded fund holding a portfolio of DRs.</li>
</ul>

<h3>5. Risk and return of equity <span class="hot">Highly tested</span></h3>
<div class="formula">Total return = (P<sub>1</sub> − P<sub>0</sub> + D<sub>1</sub>) / P<sub>0</sub><br>Domestic-currency return on a foreign share = (1 + local-currency return)(1 + change in foreign currency) − 1</div>
<div class="ex"><b>Example:</b> bought at $40, received a $1.20 dividend, price at year-end $43. Total return = (43 − 40 + 1.20) / 40 = <b>10.5%</b>.<br>A foreign share returns 8% in its own currency, and that currency rises 3% against yours: (1.08)(1.03) − 1 = <b>11.24%</b>.</div>
<p>Sources of return: price change, dividend income and, for foreign shares, currency gains or losses. Reinvesting dividends compounds returns over time.</p>

<h3>6. Book value, market value and the cost of equity <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Book value of equity</b> = total assets − total liabilities (shareholders' equity on the balance sheet). It grows with retained earnings and new share issues.</li>
  <li><b>Market value of equity</b> = share price × shares outstanding. It reflects investors' expectations of future cash flows, growth, intangibles and risk, so it usually differs from book value. <b>Price-to-book</b> = market price per share / book value per share.</li>
  <li><b>Return on equity (ROE)</b> = net income / <b>average</b> book value of equity (or beginning equity). It measures how well management uses shareholders' money. ROE can rise because of higher profits or because equity falls (buybacks, losses written off, more debt), so check why.</li>
  <li>The <b>cost of equity</b> is the minimum return the company must offer to attract equity investors; from the investors' side it's their <b>required rate of return</b>. It's estimated with models such as the dividend discount model or CAPM, because equity has no promised payments.</li>
</ul>
<div class="ex"><b>Example:</b> net income $12 million, equity $95 million at the start of the year and $105 million at the end. ROE = 12 / 100 = <b>12%</b>.</div>

<div class="how"><b>How it's tested:</b> statutory vs cumulative votes, features and relative risk of preference shares (cumulative, participating, convertible, callable, putable), dividends in arrears, VC vs LBO vs PIPE, sponsored vs unsponsored DRs and GDR/ADR/GRS, total return (including currency), ROE with average equity, and book vs market value.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe common shares, voting rights (statutory vs cumulative) and share classes.</li>
  <li>Describe types of preference shares and rank equity securities by risk.</li>
  <li>Compare public and private equity, including venture capital, LBOs and PIPEs.</li>
  <li>Describe methods of investing in non-domestic equity, including depository receipts.</li>
  <li>Calculate total return (with currency effects) and ROE, and distinguish book value from market value and the cost of equity from required return.</li>
</ul></div>
`;

window.QB_HARD.l1eqsec = [
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
  ["An investor owns 1,000 shares of a company that is electing five directors with cumulative voting. The maximum number of votes she can cast for a single candidate is:",
    ["5,000", "1,000", "200"],
    "Cumulative voting: shares × seats = 5,000 votes, which can all go to one candidate. Under statutory voting she could cast only 1,000 votes per seat.", "c"],
  ["A company's cumulative preference shares pay $4 a year. It skipped the dividends in years 1 and 2. Before paying a common dividend in year 3, it must pay each preference shareholder:",
    ["$12", "$8", "$4"],
    "Arrears of $8 for years 1–2 plus the current $4. If the shares were non-cumulative, only the current $4 would be due.", "c"],
  ["Compared with otherwise identical non-callable preference shares, callable preference shares most likely offer:",
    ["A higher dividend yield", "A lower required rate of return", "Greater voting rights"],
    "The call option benefits the issuer, so investors demand a higher yield as compensation.", "r"],
  ["A firm sells a block of new shares privately to a small group of institutional investors at a discount to raise capital quickly. This is:",
    ["A PIPE transaction", "A leveraged buyout", "A venture capital round"],
    "A private investment in public equity (PIPE) lets a listed company raise capital quickly from a few investors.", "s"],
  ["Which form of investing in foreign companies involves the same ordinary share trading on several exchanges in different currencies without conversion?",
    ["Global registered shares", "Unsponsored depository receipts", "Basket of listed depository receipts"],
    "A global registered share trades in different currencies on different exchanges; DRs are receipts issued by a bank.", "r"],
  ["A depository receipt issued outside the company's home market and outside the US, often traded in London, is a:",
    ["Global depository receipt", "Level I American depository receipt", "Global registered share"],
    "GDRs are issued outside both the home country and the US; ADRs trade in the US.", "r"],
  ["An investor buys a share for $40, receives a $1.20 dividend and sells it a year later for $43. Her total return is closest to:",
    ["10.5%", "7.5%", "3.0%"],
    "(43 − 40 + 1.20) / 40 = 10.5%. 7.5% ignores the dividend; 3.0% is the dividend yield.", "c"],
  ["A Canadian investor holds a European share that returns 8% in euros over the year, while the euro rises 3% against the Canadian dollar. Her return in Canadian dollars is closest to:",
    ["11.24%", "11.00%", "4.86%"],
    "(1.08)(1.03) − 1 = 11.24%. Simply adding gives 11%; 4.86% wrongly treats the euro as falling.", "c"],
  ["A company has net income of $12 million. Its equity was $95 million at the start of the year and $105 million at the end. ROE based on average equity is closest to:",
    ["12.0%", "11.4%", "12.6%"],
    "Average equity = 100, so ROE = 12 / 100 = 12.0%. Using ending equity gives 11.4%; beginning equity gives 12.6%.", "c"],
  ["A company's market value of equity is well above its book value. The most likely reason is that:",
    ["Investors expect strong future growth", "The company has recently issued debt", "The company's assets are overstated"],
    "Market value reflects expected future cash flows and intangibles not on the balance sheet; book value reflects historical accounting amounts.", "r"],
  ["A company's founders hold Class B shares with 10 votes each, while public investors hold Class A shares with one vote each. The main purpose of this structure is to:",
    ["Keep control with the founders", "Raise dividends for Class A holders", "Lower the company's cost of debt"],
    "Dual-class shares let a small group keep voting control while raising equity from outside investors.", "s"],
  ["Convertible preference shares usually pay a lower dividend than otherwise identical non-convertible shares because holders:",
    ["Can exchange them for common shares", "Rank ahead of the company's creditors", "Can demand redemption at par"],
    "The conversion option has value, so investors accept a lower dividend.", "r"],
];

window.GLOSSARY.push(
  ["Preference share features","Cumulative, participating, convertible, callable (riskier → higher yield), putable (safer → lower yield).","l1eqsec"],
  ["Statutory vs cumulative voting", "One vote per share per seat vs shares × seats, which can be concentrated on one candidate.", "l1eqsec"],
  ["Cumulative preference shares", "Missed dividends build up as arrears and must be paid before any common dividend.", "l1eqsec"],
  ["PIPE", "Private investment in public equity: a listed company sells shares privately to a few investors.", "l1eqsec"],
  ["Sponsored vs unsponsored DR", "Company involved, holders get votes vs set up by a bank alone, which keeps the votes.", "l1eqsec"],
  ["Return on equity (ROE)", "Net income / average book value of equity.", "l1eqsec"]
);
