// CFA Level I · Alternative Investments: study notes, practice questions and flashcards.
window.NOTES = window.NOTES || {};
window.QB_HARD = window.QB_HARD || {};
window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1alt = `
<p class="syl">CFA Level I · Alternative Investments · 7–10% of the exam · Learning modules: Alternative Investment Features, Methods, and Structures · Alternative Investment Performance and Returns · Investments in Private Capital: Equity and Debt · Real Estate and Infrastructure · Natural Resources · Hedge Funds · Introduction to Digital Assets</p>

<h3>1. Features, methods and structures</h3>
<p>Alternatives include <b>private capital</b> (private equity and private debt), <b>real assets</b> (real estate, infrastructure, natural resources), <b>hedge funds</b> and <b>digital assets</b>. Typical features:</p>
<ul>
  <li><b>Illiquidity</b> and long holding periods; specialized expertise needed; <b>low correlation</b> with traditional assets (diversification).</li>
  <li><b>High fees</b>, limited transparency, less regulation, frequent use of leverage.</li>
  <li><b>Non-normal returns</b> (skew, fat tails); limited and biased historical data; appraisal-based values.</li>
</ul>
<h4>Investment methods</h4>
<table>
  <tr><th>Method</th><th>Pros</th><th>Cons</th></tr>
  <tr><td><b>Fund investing</b> (LP in a fund)</td><td>Manager expertise, diversification, small minimum relative to direct</td><td>Highest fees, little control, blind pool</td></tr>
  <tr><td><b>Co-investing</b> (alongside a fund in a deal)</td><td>Lower fees, more control and learning</td><td>Adverse selection risk, needs some expertise</td></tr>
  <tr><td><b>Direct investing</b></td><td>Full control, no external fees</td><td>Needs large capital and in-house expertise; concentrated</td></tr>
</table>
<h4>Structure and compensation</h4>
<ul>
  <li>Most funds are <b>limited partnerships</b>: the <b>general partner</b> (GP) manages; <b>limited partners</b> (LPs) commit capital. Terms in the <b>limited partnership agreement</b>, with <b>side letters</b> for special terms. Hedge funds often use <b>master-feeder</b> structures (onshore and offshore feeders into one master fund).</li>
  <li><b>Management fee</b>: % of committed capital (private equity) or AUM (hedge funds). <b>Incentive fee / carried interest</b>: share of profits (e.g. 20%).</li>
  <li><b>Hurdle rate</b>: minimum return before incentive fees. <b>Hard hurdle</b>: fee only on returns <b>above</b> the hurdle. <b>Soft hurdle</b>: once exceeded, fee on all profits. <b>Catch-up</b>: GP gets a larger share of profits above the hurdle until it has caught up to its full carry share.</li>
  <li><b>High-water mark</b>: incentive fee only on gains above the fund's previous peak value (after losses, no fee until recovered).</li>
  <li><b>Waterfall</b>: <b>European (whole-of-fund)</b>: carry only after LPs get back all contributed capital plus the preferred return (LP-friendly). <b>American (deal-by-deal)</b>: carry on each deal as it exits (GP-friendly). <b>Clawback</b>: GP must return carry if later losses mean it was overpaid.</li>
</ul>

<h3>2. Performance and returns</h3>
<ul>
  <li><b>IRR</b> (money-weighted) is standard for private capital because the GP controls the timing of cash flows. <b>MOIC</b> (multiple of invested capital) = (realized + unrealized value) ÷ invested capital: simple but ignores timing.</li>
  <li><b>J-curve</b>: early returns are negative (fees, setup costs, early write-downs) before investments mature and are exited.</li>
  <li><b>Appraisal-based valuations</b> are infrequent and smoothed: they <b>understate volatility and correlation</b> with public markets.</li>
  <li>Index and database <b>biases</b>: survivorship and backfill (self-reported hedge fund data overstate returns).</li>
  <li>Fees, leverage and redemption terms all change what investors actually earn.</li>
</ul>
<div class="ex"><b>Fee example:</b> A fund starts the year at $100M and ends at $120M before fees. Management fee 2% of beginning assets ($2M); incentive fee 20% of gains net of the management fee: 20% × ($20M − $2M) = $3.6M. Total fees $5.6M → net return 14.4%.</div>
<div class="ex"><b>High-water mark example:</b> The fund fell from $100M to $90M last year, then rose to $108M. With a $100M high-water mark, the 20% incentive fee applies only to the $8M above it: $1.6M.</div>
<div class="ex"><b>MOIC example:</b> $20M invested; $10M distributed and $30M remaining value → MOIC = (10 + 30) ÷ 20 = 2.0×.</div>

<h3>3. Private capital: equity and debt</h3>
<h4>Private equity</h4>
<ul>
  <li><b>Leveraged buyouts (LBOs)</b>: buy a company using substantial debt; add value through operational improvements, governance and financial engineering. <b>Management buyout (MBO)</b>: existing managers buy; <b>management buy-in (MBI)</b>: outside managers come in.</li>
  <li><b>Venture capital</b>: <b>pre-seed/angel</b> (idea), <b>seed</b> (product development, market research), <b>early stage / Series A</b> (start operations and commercial production), <b>later stage</b> (expansion), mezzanine/pre-IPO. Higher risk at earlier stages.</li>
  <li><b>Growth equity</b>: minority stakes in established, growing companies needing capital to expand.</li>
  <li><b>Exit routes</b>: trade sale (to a strategic buyer), <b>IPO</b> (often the highest valuation in strong markets, but costly and less flexible), secondary sale (to another PE fund), recapitalization, write-off/liquidation.</li>
</ul>
<h4>Private debt</h4>
<ul>
  <li><b>Direct lending</b>: non-bank lenders making senior, usually secured loans to private companies, often with covenants. <b>Unitranche</b>: one loan combining senior and subordinated tranches.</li>
  <li><b>Mezzanine debt</b>: subordinated debt with higher yields, often with warrants or equity kickers.</li>
  <li><b>Venture debt</b>: loans to VC-backed start-ups. <b>Distressed debt</b>: buying debt of troubled companies, often to influence restructuring.</li>
</ul>
<p><b>Risk/return</b>: private equity offers higher expected returns and risk than private debt; senior private debt is lowest risk within private capital. Both add diversification and an illiquidity premium.</p>

<h3>4. Real estate and infrastructure</h3>
<ul>
  <li><b>Forms</b>: direct ownership vs indirect (REITs, real estate funds); equity vs debt (mortgages, CMBS); public vs private. Property types: residential, office, retail, industrial/warehouse, hospitality, multifamily.</li>
  <li><b>Characteristics</b>: heterogeneous, high unit value, illiquid, high transaction costs, appraisal-based pricing, inflation hedge (in part), income plus appreciation.</li>
  <li><b>Valuation</b>: comparable sales; <b>income approach</b> (direct capitalization: value = NOI ÷ cap rate; or DCF); cost approach (replacement cost).</li>
  <li><b>REITs</b>: liquid, small minimum, professional management, tax pass-through (must distribute most income), but more correlated with equities than direct property.</li>
  <li><b>Infrastructure</b>: <b>economic</b> (transport, utilities, communications) vs <b>social</b> (schools, hospitals, prisons); <b>brownfield</b> (existing assets with operating history: lower risk) vs <b>greenfield</b> (to be built: construction risk). Often via public-private partnerships; social infrastructure is often paid by <b>availability payments</b> from government. Long-lived, stable cash flows, high barriers to entry, regulatory and political risk.</li>
</ul>
<div class="ex"><b>Example:</b> A building with NOI of $1.2M and a market cap rate of 6% is worth 1.2 ÷ 0.06 = $20M.</div>

<h3>5. Natural resources</h3>
<ul>
  <li><b>Commodities</b>: usually accessed through <b>futures</b>. Total return = spot price return + <b>roll return</b> + <b>collateral return</b> (interest on the cash backing the futures). <b>Backwardation</b> (futures below spot): positive roll return for long positions; <b>contango</b>: negative.</li>
  <li><b>Timberland</b>: income from harvesting plus biological growth; the owner can <b>delay harvest</b> when prices are low (trees keep growing). <b>Farmland</b>: row crops (annual, less flexible timing) and permanent crops; income from leasing or operating.</li>
  <li>Natural resources offer inflation hedging and diversification; risks include weather, commodity prices, regulation and ESG factors (water, land use, emissions).</li>
</ul>

<h3>6. Hedge funds</h3>
<table>
  <tr><th>Category</th><th>Examples</th></tr>
  <tr><td><b>Equity</b></td><td>Long/short, market neutral, short bias</td></tr>
  <tr><td><b>Event-driven</b></td><td><b>Merger arbitrage</b>, distressed/restructuring, activist, special situations</td></tr>
  <tr><td><b>Relative value</b></td><td>Fixed income arbitrage, <b>convertible arbitrage</b></td></tr>
  <tr><td><b>Opportunistic</b></td><td><b>Global macro</b>, managed futures (CTAs, trend following)</td></tr>
  <tr><td>Specialist</td><td>Volatility trading, reinsurance</td></tr>
  <tr><td>Multi-manager</td><td>Multi-strategy funds, funds of hedge funds (extra layer of fees)</td></tr>
</table>
<ul>
  <li><b>Liquidity terms</b>: <b>lockup period</b> (no redemptions for an initial period), notice periods, redemption frequency, redemption fees, <b>gates</b> (limits on withdrawals in a period), side pockets for illiquid assets.</li>
  <li>Due diligence focuses on strategy, risk management, operations and fees; leverage and short positions can magnify losses.</li>
</ul>

<h3>7. Introduction to digital assets</h3>
<ul>
  <li><b>Distributed ledger technology (DLT)</b>: a shared database across many nodes; a <b>blockchain</b> is a DLT with blocks of transactions linked cryptographically.</li>
  <li><b>Consensus</b>: <b>proof of work</b> (miners solve puzzles using computing power; energy-intensive) vs <b>proof of stake</b> (validators chosen according to the tokens they stake).</li>
  <li><b>Permissionless</b> (anyone can participate, e.g. Bitcoin) vs <b>permissioned</b> networks (restricted access/validation).</li>
  <li><b>Types</b>: cryptocurrencies, <b>stablecoins</b> (pegged to fiat or assets), tokens (security, utility, governance), NFTs, central bank digital currencies. <b>Smart contracts</b> execute automatically when conditions are met; <b>DeFi</b> applications run on them.</li>
  <li><b>Investment routes</b>: direct holdings, crypto funds and ETFs, futures, shares of related companies. Risks: extreme volatility, regulation, custody/hacks, no intrinsic cash flows.</li>
</ul>
<div class="how"><b>How it's tested:</b> fee waterfalls (hurdles, catch-up, high-water mark, clawback), net return calculations, investment methods, PE stages and exits, cap rates, brownfield vs greenfield, roll return sign, hedge fund strategy classification and liquidity terms, DLT concepts.</div>
<div class="key"><b>Carry forward to Level III</b>: alternatives in asset allocation (liquidity budgeting, private markets pacing), fee structures and the private markets pathway.</div>
<div class="trap"><b>Trap:</b> with a <b>soft</b> hurdle, once the hurdle is cleared the incentive fee applies to <b>all</b> profits; with a <b>hard</b> hurdle, only to profits above it.</div>
`;

window.QB_HARD.l1alt = [
  ["A hedge fund starts the year at $100M and ends at $120M before fees. It charges a 2% management fee on beginning assets and a 20% incentive fee on gains net of the management fee. The investor's net return is closest to:",
    ["14.4%", "14.0%", "16.0%"],
    "Management fee = $2M. Incentive fee = 20% × ($20M − $2M) = $3.6M. Net = (120 − 2 − 3.6 − 100) ÷ 100 = 14.4%. 14.0% computes the incentive fee on gross gains.", "c"],
  ["A fund with a $100M high-water mark fell to $90M last year and rose to $108M this year. Ignoring the management fee, a 20% incentive fee this year is closest to:",
    ["$1.6M", "$3.6M", "$0"],
    "The incentive fee applies only to gains above the high-water mark: 20% × ($108M − $100M) = $1.6M.", "c"],
  ["A fund has a hard hurdle rate of 8% and earns 15% for the year. The incentive fee applies to:",
    ["Only the 7% return above the hurdle", "The full 15% return earned for the year", "None of the return"],
    "A hard hurdle means fees are charged only on returns above the hurdle. With a soft hurdle, once 8% is exceeded the fee applies to the whole 15%.", "c"],
  ["A catch-up clause in a private equity fund allows the general partner to:",
    ["Take extra profit above the hurdle until its carry is fully paid", "Recover management fees it waived in earlier years", "Call additional capital from LPs after the investment period has ended"],
    "After LPs receive the preferred return, the catch-up gives the GP a disproportionate share until its overall carry reaches the agreed percentage.", "r"],
  ["A clawback provision requires the general partner to:",
    ["Return carry it was overpaid, once later losses count", "Reinvest all of its carried interest back into the fund", "Pay LPs a guaranteed minimum return"],
    "If early profitable exits generate carry but later deals lose money, the clawback makes the GP give back excess carry.", "r"],
  ["Under a European (whole-of-fund) distribution waterfall, the general partner receives carried interest:",
    ["Only after LPs get all capital back plus the hurdle", "On each deal as soon as that deal is exited at a profit", "Before LPs receive any of their capital back"],
    "European waterfalls are LP-friendly: carry is paid only after LPs recover all contributions and the hurdle across the whole fund. American (deal-by-deal) waterfalls favour the GP.", "r"],
  ["Compared with fund investing, co-investing allows a limited partner to:",
    ["Invest beside the fund in a deal, usually at lower fees", "Avoid doing any of its own due diligence on the deals it backs", "Take control of how the GP manages the fund"],
    "Co-investors invest directly in a portfolio company next to the fund, typically with reduced or no fees, but face adverse selection risk.", "r"],
  ["Which characteristic is typical of alternative investments?",
    ["Illiquidity and limited transparency", "Low fees and daily liquidity for investors", "Normally distributed returns"],
    "Alternatives tend to be illiquid, less transparent and less regulated, with high fees and non-normal return distributions.", "r"],
  ["Using appraisal-based values to measure real estate returns tends to:",
    ["Understate volatility and correlation with other assets", "Overstate volatility and correlation with other assets", "Produce unbiased estimates of risk"],
    "Appraisals are infrequent and anchored to prior values, smoothing returns and making the asset look less risky and less correlated than it is.", "r"],
  ["A private equity investor contributed $20M. The fund has distributed $10M and the remaining investments are valued at $30M. The multiple of invested capital (MOIC) is closest to:",
    ["2.0×", "1.5×", "0.5×"],
    "MOIC = (realized + unrealized value) ÷ invested capital = (10 + 30) ÷ 20 = 2.0×. It ignores the timing of cash flows.", "c"],
  ["In private equity, the J-curve effect describes:",
    ["Early negative returns, then gains as deals mature", "Steadily rising returns starting from the first year of the fund", "Returns that fall sharply when the fund is liquidated"],
    "Fees, setup costs and early write-downs make early IRRs negative; value creation and exits later push returns up.", "r"],
  ["A buyout in which the company's existing management team acquires the business, mostly with borrowed money, is a:",
    ["Management buyout (MBO)", "Management buy-in (MBI)", "Growth equity investment"],
    "In an MBO the current managers buy the firm. In an MBI, an outside management team buys in and replaces the existing managers.", "r"],
  ["Venture capital that funds product development and market research, before commercial production, is:",
    ["Seed-stage financing", "Later-stage financing", "Mezzanine financing"],
    "Pre-seed/angel funds the idea; seed funds product development and market research; early stage (Series A) funds the start of operations; later stage funds expansion.", "r"],
  ["When equity markets are favourable, which private equity exit route typically achieves the highest valuation?",
    ["An initial public offering", "A secondary sale to another PE fund", "A write-off and liquidation"],
    "IPOs often achieve the highest valuations in strong markets, though they're costly, time-consuming and less flexible than trade or secondary sales.", "r"],
  ["Mezzanine debt is typically:",
    ["Subordinated debt, often with warrants or equity kickers", "Senior secured debt with the lowest yields available", "Equity issued as part of an initial public offering"],
    "Mezzanine financing sits between senior debt and equity, offering higher yields plus equity participation to compensate for subordination.", "r"],
  ["Direct lending in private debt refers to:",
    ["Non-bank lenders making senior loans to private companies", "Banks underwriting bonds sold to the public", "Investors buying shares directly from a private company"],
    "Direct lending funds provide (usually senior, secured) loans to private, often PE-backed, companies outside the bank and public bond markets.", "r"],
  ["A property is expected to generate net operating income of $1.2 million. If the market capitalization rate is 6%, its estimated value is closest to:",
    ["$20.0 million", "$7.2 million", "$12.0 million"],
    "Direct capitalization: value = NOI ÷ cap rate = 1.2 ÷ 0.06 = $20.0 million.", "c"],
  ["Compared with direct real estate ownership, REITs offer:",
    ["Greater liquidity and a lower minimum investment", "More control over property-level decisions", "Lower correlation with stock market returns"],
    "REITs trade on exchanges and can be bought in small amounts, but they behave more like equities in the short run than direct property.", "r"],
  ["Investing in an existing toll road with several years of operating history is an example of:",
    ["Brownfield infrastructure", "Greenfield infrastructure", "Social infrastructure"],
    "Brownfield assets already exist and operate (lower risk); greenfield assets are still to be built. A toll road is economic, not social, infrastructure.", "r"],
  ["A new hospital built under a public-private partnership is most likely to be paid for through:",
    ["Availability payments from the government", "Tolls charged to individual users", "Sales of commodities produced on site"],
    "Social infrastructure is often funded by availability payments: the government pays as long as the asset is available and meets standards.", "r"],
  ["When a commodity futures curve is in backwardation, the roll return on a long futures position is:",
    ["Positive", "Negative", "Zero"],
    "In backwardation, longer-dated futures trade below near-dated ones; rolling into a cheaper contract that converges up toward spot produces a positive roll return.", "r"],
  ["A key advantage of timberland over row-crop farmland as an investment is that:",
    ["Harvests can wait for better prices as trees keep growing", "Crops must be harvested every year, which gives a steadier income", "It produces income every quarter regardless of prices"],
    "Timber's biological growth gives flexibility to wait for better prices; row crops must be harvested when ready.", "r"],
  ["A hedge fund strategy that buys the target's shares and shorts the acquirer's shares after a stock-for-stock merger announcement is classified as:",
    ["Event-driven", "Relative value", "Opportunistic"],
    "Merger arbitrage is an event-driven strategy. Convertible and fixed income arbitrage are relative value; global macro and managed futures are opportunistic.", "r"],
  ["A lockup period in a hedge fund:",
    ["Bars redemptions for a set time after investing", "Limits the amount of leverage the manager is allowed to use", "Requires 30 days' notice before each redemption"],
    "A lockup prohibits redemptions for an initial period (often a year). Notice periods and gates are separate liquidity terms.", "r"],
  ["A redemption gate allows a hedge fund manager to:",
    ["Limit withdrawals by investors in a given period", "Charge a performance fee above a hurdle rate", "Hold illiquid assets separately through a side pocket"],
    "Gates cap withdrawals (e.g. 10% of the fund per quarter) to avoid forced selling.", "r"],
  ["In a proof-of-stake blockchain, the participants who validate transactions are chosen based on:",
    ["The amount of tokens they stake", "The computing power they contribute", "Approval from a central authority"],
    "Proof of stake selects validators by their staked holdings; proof of work relies on computing power (mining).", "r"],
  ["A permissioned blockchain differs from a permissionless one in that it:",
    ["Restricts who can join or validate transactions", "Lets anyone join and validate transactions", "Has no way to reach consensus among nodes"],
    "Permissionless networks (e.g. Bitcoin) are open to all; permissioned networks restrict participation to approved parties.", "r"],
  ["A stablecoin is designed to:",
    ["Hold a stable value, often pegged to a currency", "Track a basket of technology stocks", "Pay a guaranteed rate of interest to its holders"],
    "Stablecoins aim to maintain a stable value by pegging to a currency, commodity or other asset, often backed by reserves.", "r"],
  ["Smart contracts are best described as:",
    ["Blockchain programs that run when conditions are met", "Legal agreements that both parties sign electronically", "Contracts guaranteed by a central bank"],
    "Smart contracts are computer code stored on a blockchain that automatically executes terms once predefined conditions are satisfied.", "r"],
  ["Which is the most important reason investors add alternative investments to a portfolio of stocks and bonds?",
    ["Diversification from low correlation with stocks and bonds", "Lower fees than traditional investments", "Greater liquidity than traditional stocks and bonds offer"],
    "Alternatives' main appeal is diversification (and potentially higher returns), not fees or liquidity, which are usually worse.", "r"]
];

window.GLOSSARY.push(
  ["Fund investing vs co-investing vs direct", "Fund: expertise and diversification, highest fees. Co-invest: alongside the fund, lower fees. Direct: full control, needs scale and expertise.", "l1alt"],
  ["Hurdle rates", "Hard hurdle: fee only on returns above it. Soft hurdle: once cleared, fee on all profits.", "l1alt"],
  ["Catch-up clause", "After the hurdle, the GP gets a larger share of profits until its carry reaches the agreed percentage.", "l1alt"],
  ["High-water mark", "Incentive fees only on gains above the fund's previous peak value.", "l1alt"],
  ["Waterfalls and clawback", "European (whole-of-fund): carry after LPs get capital + hurdle. American (deal-by-deal): carry per deal. Clawback returns excess carry.", "l1alt"],
  ["MOIC", "(Realized + unrealized value) ÷ invested capital. Ignores timing; IRR captures it.", "l1alt"],
  ["J-curve", "Early negative private equity returns (fees, costs), followed by gains as investments mature.", "l1alt"],
  ["Venture capital stages", "Pre-seed/angel → seed (product development) → early/Series A (start operations) → later stage (expansion) → mezzanine/pre-IPO.", "l1alt"],
  ["Direct capitalization", "Property value = NOI ÷ cap rate.", "l1alt"],
  ["Brownfield vs greenfield", "Brownfield: existing infrastructure with operating history. Greenfield: to be built (construction risk).", "l1alt"],
  ["Commodity futures return", "Spot price return + roll return (positive in backwardation) + collateral return.", "l1alt"],
  ["Hedge fund strategy groups", "Equity, event-driven (merger arb, distressed, activist), relative value (convertible, fixed income arb), opportunistic (macro, CTAs), specialist, multi-manager.", "l1alt"],
  ["Proof of work vs proof of stake", "PoW: miners compete with computing power. PoS: validators chosen by tokens staked.", "l1alt"]
);
