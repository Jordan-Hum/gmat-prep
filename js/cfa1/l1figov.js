// CFA Level I · Fixed Income · Learning module 5: Fixed-Income Markets for Government Issuers.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1figov = `
<p class="syl">CFA Level I · Fixed Income (11–14%) · Learning module 5 of 19 · Fixed-Income Markets for Government Issuers</p>
<p>Government bonds are the largest part of the bond market and the benchmark for pricing everything else. This lesson covers why and how national governments borrow, how government bond auctions work, on-the-run vs off-the-run bonds, and debt issued by local governments, agencies and supranational organizations.</p>

<h3>1. Sovereign (national government) debt</h3>
<ul>
  <li>Governments borrow to fund deficits (spending above tax revenue), to refinance maturing debt and to manage cash flow timing.</li>
  <li>Sovereign debt in the government's <b>own currency</b> is backed by its power to tax and, ultimately, to create money, so it's usually seen as the lowest-risk debt in that currency. Debt in a <b>foreign currency</b> is riskier because the government must earn or buy that currency.</li>
  <li>Types: <b>bills</b> (one year or less, issued at a discount with no coupon), <b>notes and bonds</b> (coupon-paying, longer maturities), <b>inflation-linked</b> bonds (e.g. TIPS, index-linked gilts) and some <b>floating-rate</b> bonds.</li>
</ul>

<h3>2. How government bonds are issued: auctions <span class="hot">Highly tested</span></h3>
<p>Most governments sell bonds through regular, pre-announced auctions. <b>Primary dealers</b> (banks and dealers approved by the government) are required to bid at auctions and help distribute the bonds.</p>
<ul>
  <li><b>Competitive bids</b> state the yield (or price) the bidder wants and the amount; they're filled from the lowest yield up until the issue is sold.</li>
  <li><b>Non-competitive bids</b> (usually smaller, often retail) state only the amount; they're filled in full first and receive the yield set by the auction.</li>
  <li>The highest accepted yield is the <b>stop-out yield</b> (clearing yield). Bids at exactly that yield may be filled only partly.</li>
</ul>
<table>
  <tr><th>Auction type</th><th>What winners pay</th></tr>
  <tr><td><b>Single-price</b> (uniform, Dutch)</td><td>Everyone gets the <b>same yield: the stop-out yield</b> (used for US Treasuries)</td></tr>
  <tr><td><b>Multiple-price</b> (discriminatory)</td><td>Each winner pays <b>its own bid</b></td></tr>
</table>
<div class="ex"><b>Example:</b> the government offers $1 billion. Non-competitive bids total $100 million, leaving $900 million for competitive bids:<br>2.10%: $300m · 2.12%: $400m · 2.15%: $500m · 2.18%: $600m.<br>Cumulative: 300, 700, 1,200 → the $900 million is reached at <b>2.15%</b>, the stop-out yield. Bids at 2.10% and 2.12% are filled in full; bids at 2.15% get the remaining $200m of $500m = <b>40%</b>; bids at 2.18% get nothing.<br>In a single-price auction, all winners (and non-competitive bidders) receive 2.15%.</div>
<ul>
  <li><b>Tap issuance (reopening)</b>: selling more of an existing bond rather than creating a new one, to build liquidity in it.</li>
</ul>

<h3>3. On-the-run and off-the-run bonds</h3>
<ul>
  <li><b>On-the-run</b>: the most recently issued bond of each maturity. It's the most liquid and is used as the <b>benchmark</b> for yield spreads.</li>
  <li><b>Off-the-run</b>: older issues of similar maturity. They're less liquid, so they usually trade at slightly <b>higher yields</b>.</li>
</ul>

<h3>4. Non-sovereign, agency and supranational debt</h3>
<table>
  <tr><th>Issuer</th><th>Key features</th></tr>
  <tr><td><b>Non-sovereign (local) governments</b>: provinces, states, cities</td><td><b>General obligation (GO) bonds</b> are backed by the issuer's taxing power. <b>Revenue bonds</b> are repaid only from a specific project's revenue (toll road, airport, utility), so they're riskier than GO bonds of the same issuer. In the US, interest on most municipal bonds is exempt from federal income tax</td></tr>
  <tr><td><b>Quasi-government (agency)</b></td><td>Entities created or sponsored by a government for public purposes (e.g. housing agencies, development banks). May have an explicit or implied government guarantee, so they yield slightly more than sovereign bonds</td></tr>
  <tr><td><b>Supranational</b></td><td>Organizations formed by several countries, such as the World Bank, IMF and regional development banks. Usually very highly rated; issue in many currencies</td></tr>
</table>

<div class="how"><b>How it's tested:</b> finding the stop-out yield and partial fill in an auction, single-price vs multiple-price auctions, competitive vs non-competitive bids, primary dealers, tap issuance, on-the-run vs off-the-run, GO vs revenue bonds, and agency and supranational issuers.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe why governments borrow and the types of sovereign debt.</li>
  <li>Describe government bond auctions, including competitive and non-competitive bids, single-price and multiple-price formats, and primary dealers.</li>
  <li>Distinguish on-the-run and off-the-run bonds.</li>
  <li>Describe non-sovereign, agency and supranational debt, including GO and revenue bonds.</li>
</ul></div>
`;

window.QB_HARD.l1figov = [
  ["In a single-price (Dutch) auction for government bonds, all winning bidders:",
    ["Get the same yield: the highest accepted yield", "Pay the specific prices that each of them bid", "Receive the lowest yield that was bid"],
    "In a single-price auction, every winning bidder is allotted securities at the highest accepted yield. In a multiple-price auction, winners pay their own bids.", "r"],
  ["The most recently issued government bond of a given maturity is called:",
    ["On-the-run", "Off-the-run", "A benchmark spread"],
    "On-the-run issues are the newest and most liquid; they're used as benchmarks. Earlier issues are off-the-run.", "r"],
  ["A government offers $900 million of bonds to competitive bidders. Bids are $300m at 2.10%, $400m at 2.12%, $500m at 2.15% and $600m at 2.18%. The stop-out yield is:",
    ["2.15%", "2.12%", "2.18%"],
    "Cumulative bids reach 300, 700, then 1,200 at 2.15%, which covers the $900 million. Bids at 2.18% are rejected.", "c"],
  ["In the same auction ($900 million offered; bids of $300m at 2.10%, $400m at 2.12%, $500m at 2.15%), bidders at the stop-out yield receive:",
    ["40% of the amount they bid", "100% of the amount they bid", "60% of the amount they bid"],
    "After 2.10% and 2.12% bids ($700m), $200m remains for $500m of bids at 2.15%: 200 / 500 = 40%.", "c"],
  ["A non-competitive bidder in a government bond auction:",
    ["Accepts the yield set by the auction", "States the lowest yield it will accept", "Pays its own bid in all auction types"],
    "Non-competitive bids specify only an amount; they're filled first at the auction's yield.", "r"],
  ["In a multiple-price (discriminatory) auction, winning bidders:",
    ["Pay the prices they each bid", "All receive the stop-out yield", "All receive the lowest yield bid"],
    "In a multiple-price auction each winner pays its own bid; in a single-price auction everyone receives the stop-out yield.", "r"],
  ["Primary dealers in government bond markets are:",
    ["Firms required to bid at auctions", "Central banks of other countries", "Retail investors bidding small amounts"],
    "Primary dealers are approved banks and dealers that must participate in auctions and help distribute bonds.", "r"],
  ["A government sells additional amounts of an existing 10-year bond instead of creating a new issue. This is called:",
    ["A tap issue", "A private placement", "A shelf registration"],
    "Reopening (tapping) an existing bond increases its size and liquidity.", "r"],
  ["Compared with an on-the-run government bond of similar maturity, an off-the-run bond most likely has:",
    ["A slightly higher yield", "A slightly lower yield", "Greater liquidity"],
    "Off-the-run issues are less liquid, so investors require a slightly higher yield.", "r"],
  ["Government Treasury bills are typically issued:",
    ["At a discount, with no coupon", "At par, with a fixed coupon", "At a premium, with a floating coupon"],
    "Bills pay no coupon; the return is the difference between the discounted price and face value.", "r"],
  ["A city issues bonds that will be repaid only from tolls collected on a new bridge. These are:",
    ["Revenue bonds", "General obligation bonds", "Agency bonds"],
    "Revenue bonds rely on a specific project's revenue; GO bonds are backed by the issuer's taxing power.", "s"],
  ["Compared with the same city's general obligation bonds, its revenue bonds are most likely:",
    ["Riskier, with higher yields", "Safer, with lower yields", "Exempt from all default risk"],
    "Revenue bonds depend on one project's cash flow rather than the city's taxing power.", "r"],
  ["Bonds issued by a government-sponsored housing agency with an implied government guarantee most likely yield:",
    ["Slightly more than sovereign bonds", "Slightly less than sovereign bonds", "The same as high-yield bonds"],
    "Agency bonds carry a little more risk than sovereigns (the guarantee may be only implied), so they yield slightly more.", "r"],
  ["A sovereign government's debt in its own currency is usually considered very low risk mainly because the government can:",
    ["Raise taxes and create money", "Borrow from supranationals", "Issue bonds in foreign currency"],
    "Taxing power and the ability to create its own currency support repayment of local-currency debt.", "r"],
];

window.GLOSSARY.push(
  ["Stop-out yield", "Highest yield accepted at a government bond auction.", "l1figov"],
  ["Single-price vs multiple-price auction", "All winners get the stop-out yield vs each winner pays its own bid.", "l1figov"],
  ["Non-competitive bid", "Bid for an amount only; filled first at the auction yield.", "l1figov"],
  ["On-the-run vs off-the-run", "Newest, most liquid issue (benchmark) vs older issues.", "l1figov"],
  ["GO vs revenue bond", "Backed by taxing power vs repaid from a specific project's revenue.", "l1figov"]
);
