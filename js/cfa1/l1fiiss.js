// CFA Level I · Fixed Income · Learning module 3: Fixed-Income Issuance and Trading.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1fiiss = `
<p class="syl">CFA Level I · Fixed Income (11–14%) · Learning module 3 of 19 · Fixed-Income Issuance and Trading</p>
<p>This lesson describes how the bond market is organized: how bonds are classified, who invests in them, how new bonds are sold in the primary market, and how existing bonds trade in the secondary market.</p>

<h3>1. Classifying fixed-income markets</h3>
<table>
  <tr><th>By…</th><th>Categories</th></tr>
  <tr><td><b>Issuer</b></td><td>Governments (sovereign, local, agencies, supranationals), companies (financial and non-financial), securitized products</td></tr>
  <tr><td><b>Credit quality</b></td><td><b>Investment grade</b>: rated BBB− (S&amp;P and Fitch) / Baa3 (Moody's) or higher. <b>High yield</b> (speculative, "junk"): below that. Many institutions may only hold investment grade bonds</td></tr>
  <tr><td><b>Maturity</b></td><td>Money market (original maturity ≤ 1 year) vs capital market (&gt; 1 year)</td></tr>
  <tr><td><b>Currency and geography</b></td><td>Domestic vs international; developed vs emerging markets (emerging-market bonds usually carry higher yields for higher risk)</td></tr>
  <tr><td><b>Other</b></td><td>Inflation-linked, floating-rate, and sustainability bonds: <b>green bonds</b> fund environmental projects; social and sustainability-linked bonds tie proceeds or coupons to social or ESG targets</td></tr>
</table>
<p><b>Bond indexes</b> track segments of the market (e.g. by issuer, rating, maturity, currency) and serve as benchmarks for active and passive managers. They hold thousands of issues and change often as bonds mature and new ones are issued, so they're harder to replicate than equity indexes.</p>

<h3>2. Who invests in bonds</h3>
<ul>
  <li><b>Central banks</b>: buy and sell government bonds in open market operations to carry out monetary policy, and hold foreign bonds as currency reserves.</li>
  <li><b>Institutional investors</b>: pension funds and insurers (match long-term liabilities), banks (liquidity and income), sovereign wealth funds, mutual funds and ETFs, hedge funds.</li>
  <li><b>Retail investors</b>: usually indirectly through funds; some buy government or municipal bonds directly.</li>
</ul>

<h3>3. The primary market: issuing new bonds <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Method</th><th>How it works</th></tr>
  <tr><td><b>Underwritten offering</b> (firm commitment)</td><td>Investment bank(s) buy the whole issue at an agreed price and resell it, so the <b>underwriter bears the risk</b> of not selling it. The underwriter's fee is the difference between the price paid to the issuer and the offering price</td></tr>
  <tr><td><b>Best-efforts offering</b></td><td>The bank acts only as a broker and sells what it can; the <b>issuer bears the risk</b></td></tr>
  <tr><td><b>Auction</b></td><td>Used mainly for government bonds; bids determine the price/yield (see the government markets lesson)</td></tr>
  <tr><td><b>Shelf registration</b></td><td>The issuer files one registration and then issues bonds in tranches over a period as needed. Suits large, established issuers with good disclosure</td></tr>
  <tr><td><b>Private placement</b></td><td>Sold directly to a small group of qualified (institutional) investors without public registration. Terms can be customized and may include more covenants; the bonds are <b>less liquid</b>, so they usually pay a higher yield</td></tr>
</table>
<h4>The underwriting process</h4>
<ol>
  <li>The issuer and underwriter set the size, timing and terms.</li>
  <li><b>Book building</b>: the underwriter collects orders from investors to judge demand and set the price.</li>
  <li><b>Grey market</b>: forward trading in the bonds before they're issued ("when issued"), which helps with pricing.</li>
  <li>Pricing day: the coupon and price are fixed; then the bonds are delivered and paid for on the settlement date.</li>
</ol>
<div class="ex"><b>Example:</b> a company issues $500 million par at a price of 99.50 to investors, and the underwriter's fee is 0.75% of par. Gross proceeds = $497.5 million; fee = $3.75 million; net proceeds to the issuer = <b>$493.75 million</b>.</div>

<h3>4. The secondary market: trading existing bonds</h3>
<ul>
  <li>Most bonds trade <b>over the counter (OTC)</b> through dealers rather than on exchanges, increasingly on electronic platforms. Dealers quote a <b>bid</b> (price they'll pay) and an <b>ask/offer</b> (price they'll sell at).</li>
  <li>The <b>bid-ask spread</b> measures liquidity: narrow for newly issued (on-the-run) government bonds, wider for small, old or lower-rated corporate issues. Many corporate bonds trade rarely.</li>
  <li><b>Settlement</b> is usually one to two business days after the trade (government bonds often next day); money market trades often settle the same day.</li>
</ul>
<div class="ex"><b>Example:</b> a dealer quotes a corporate bond at 98.50 bid / 98.75 ask. An investor buying $1 million par pays 98.75% × 1,000,000 = <b>$987,500</b> (plus accrued interest). Selling the bond back immediately would bring $985,000, a round-trip cost of $2,500.</div>

<div class="how"><b>How it's tested:</b> investment grade vs high yield threshold, underwritten vs best-efforts (who bears the risk), shelf registration, private placement characteristics, book building and grey market, OTC dealer markets and bid-ask spreads, net proceeds and trade cost calculations, and the role of central banks and other investors.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Classify bond markets by issuer, credit quality, maturity, currency, geography and other features.</li>
  <li>Describe bond indexes and the main types of bond investors.</li>
  <li>Describe primary market methods: underwritten, best-efforts, auction, shelf registration and private placement.</li>
  <li>Describe secondary market trading, liquidity and settlement.</li>
</ul></div>
`;

window.QB_HARD.l1fiiss = [
  ["The lowest rating that is still considered investment grade by S&P and Fitch is:",
    ["BBB−", "BB+", "A−"],
    "BBB− (Baa3 at Moody's) is the lowest investment grade rating; BB+ and below is high yield.", "r"],
  ["In an underwritten (firm commitment) bond offering, the risk that the bonds can't be sold at the offering price is borne by the:",
    ["Underwriter", "Issuer", "Bond trustee"],
    "The underwriter buys the whole issue and resells it. In a best-efforts offering, the issuer bears the risk.", "r"],
  ["In a best-efforts bond offering, the investment bank:",
    ["Acts as a broker, selling what it can", "Buys the whole issue from the issuer up front", "Guarantees a minimum issue price"],
    "The bank doesn't commit to buy the bonds, so the issuer bears the risk of an unsold issue.", "r"],
  ["Shelf registration allows an issuer to:",
    ["Issue bonds in tranches over time", "Avoid all disclosure requirements", "Sell bonds only to retail investors"],
    "One registration covers several issues over a period; it suits large, established issuers.", "r"],
  ["Compared with publicly issued bonds, privately placed bonds are most likely:",
    ["Less liquid, with customized terms", "More liquid, with standard terms", "Free of any covenants or restrictions"],
    "Private placements go to a few qualified investors and often have tailored terms and more covenants.", "r"],
  ["Trading in a new bond issue on a forward basis before it is issued takes place in the:",
    ["Grey market", "Repo market", "Secondary market"],
    "Grey market (when-issued) trading helps underwriters price the issue.", "r"],
  ["The process in which an underwriter collects investors' orders to judge demand and set the price of a new issue is called:",
    ["Book building", "Shelf registration", "A Dutch auction"],
    "Book building gauges demand before pricing day.", "r"],
  ["Most corporate bonds trade in the secondary market:",
    ["Over the counter through dealers", "On stock exchanges through brokers", "Only at government auctions"],
    "Bond trading is mainly an OTC dealer market, increasingly electronic.", "r"],
  ["A company issues $500 million par of bonds at a price of 99.50, and the underwriter's fee is 0.75% of par. The issuer's net proceeds are closest to:",
    ["$493.75 million", "$497.50 million", "$496.25 million"],
    "500 × 0.995 = 497.5 gross, minus 3.75 fee = $493.75 million. $497.50 million ignores the fee.", "c"],
  ["A dealer quotes a bond at 98.50 bid / 98.75 ask. An investor who buys $1 million par pays, before accrued interest:",
    ["$987,500", "$985,000", "$986,250"],
    "Buyers pay the ask: 98.75% × 1,000,000 = $987,500. The bid is what the dealer pays when buying.", "c"],
  ["Which bond is most likely to have the narrowest bid-ask spread?",
    ["A newly issued government bond", "An old, small corporate issue", "A high-yield bond that trades rarely"],
    "On-the-run government bonds are the most liquid; small, old and lower-rated issues are less liquid.", "r"],
  ["Central banks most commonly trade government bonds in order to:",
    ["Carry out monetary policy", "Earn the highest possible yield", "Raise capital for the government"],
    "Open market operations buy or sell bonds to manage interest rates and liquidity.", "r"],
  ["A bond whose proceeds must be used to fund renewable energy projects is a:",
    ["Green bond", "Covered bond", "High-yield bond"],
    "Green bonds fund environmental projects; covered bonds are backed by a segregated asset pool.", "r"],
  ["Compared with equity indexes, bond indexes are generally harder to replicate because they:",
    ["Contain many issues that change often", "Contain only a handful of large issues", "Are weighted only by price"],
    "Bonds mature and new issues appear constantly, and many issues are illiquid.", "r"],
];

window.GLOSSARY.push(
  ["Investment grade vs high yield", "Rated BBB−/Baa3 or above vs below that.", "l1fiiss"],
  ["Underwritten vs best-efforts offering", "Bank buys the issue and bears the risk vs bank sells what it can; issuer bears the risk.", "l1fiiss"],
  ["Shelf registration", "One registration, then issuance in tranches over time.", "l1fiiss"],
  ["Private placement", "Bonds sold directly to a few qualified investors; less liquid, customized terms.", "l1fiiss"],
  ["Grey market", "Forward (when-issued) trading of a new issue before it settles.", "l1fiiss"]
);
