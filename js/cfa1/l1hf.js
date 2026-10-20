// CFA Level I · Alternative Investments · Learning module 6: Hedge Funds.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1hf = `
<p class="syl">CFA Level I · Alternative Investments (7–10%) · Learning module 6 of 7 · Hedge Funds</p>
<p>Hedge funds are lightly regulated pooled funds that can short sell, use leverage and derivatives, and aim for returns that don't depend on the market's direction. This lesson covers their features and liquidity terms, the main strategy groups (equity, event-driven, relative value, opportunistic, specialist, multi-manager), how to invest (funds, funds of funds, separately managed accounts), and their risks.</p>

<h3>1. Features and liquidity terms</h3>
<ul>
  <li>Flexible mandates: <b>short selling</b>, <b>leverage</b>, derivatives, concentrated positions. Many aim for <b>absolute returns</b> (positive in any market).</li>
  <li>High fees (historically "2 and 20"; now often lower), high minimum investments, limited to accredited or institutional investors, limited transparency.</li>
</ul>
<table>
  <tr><th>Term</th><th>Meaning</th></tr>
  <tr><td><b>Lockup period</b></td><td>Initial period when investors can't redeem (hard lockup) or can only redeem with a penalty (soft lockup)</td></tr>
  <tr><td><b>Notice period</b></td><td>How far in advance investors must request a redemption</td></tr>
  <tr><td><b>Redemption frequency</b></td><td>How often redemptions are allowed (monthly, quarterly…)</td></tr>
  <tr><td><b>Gate</b></td><td>Lets the manager limit redemptions in a period (e.g. to 10% of the fund) to avoid fire sales</td></tr>
  <tr><td><b>Side pocket</b></td><td>Illiquid investments held separately; investors can't redeem that part until the assets are sold</td></tr>
</table>

<h3>2. Hedge fund strategies <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Group</th><th>Strategy</th><th>How it works</th></tr>
  <tr><td rowspan="3"><b>Equity</b></td><td>Long/short equity</td><td>Buy undervalued and short overvalued stocks; usually <b>net long</b></td></tr>
  <tr><td>Equity market neutral</td><td>Long and short positions matched so that market exposure (beta) is about <b>zero</b>; e.g. pairs trading</td></tr>
  <tr><td>Short-biased</td><td>Mostly short positions, net short</td></tr>
  <tr><td rowspan="3"><b>Event-driven</b></td><td><b>Merger arbitrage</b></td><td>Cash deal: buy the target. Stock deal: buy the target and <b>short the acquirer</b>. Profit if the deal closes; main risk is <b>deal failure</b></td></tr>
  <tr><td>Distressed / restructuring</td><td>Buy debt or equity of troubled companies, often at deep discounts</td></tr>
  <tr><td>Activist</td><td>Buy stakes and push management for changes (strategy, payouts, board seats)</td></tr>
  <tr><td rowspan="2"><b>Relative value</b></td><td>Fixed income arbitrage</td><td>Exploit small pricing differences between related bonds, usually with leverage</td></tr>
  <tr><td><b>Convertible arbitrage</b></td><td>Buy undervalued convertible bonds and <b>short the issuer's stock</b> to hedge equity risk</td></tr>
  <tr><td rowspan="2"><b>Opportunistic</b></td><td><b>Global macro</b></td><td>Top-down bets on interest rates, currencies, commodities and equity markets based on economic views</td></tr>
  <tr><td>Managed futures</td><td>Trade futures, often with systematic trend-following rules (CTAs)</td></tr>
  <tr><td><b>Specialist</b></td><td>Volatility trading, reinsurance</td><td>Niche risks with unusual return patterns</td></tr>
  <tr><td><b>Multi-manager</b></td><td>Multi-strategy, fund of funds</td><td>Combine many strategies or managers</td></tr>
</table>
<div class="ex"><b>Merger arbitrage examples:</b> cash offer of $50 for a target trading at $46: buy the target; gain $4 (8.7%) if the deal closes.<br>Stock offer of 0.5 acquirer shares (acquirer at $90 → $45 implied) for a target at $42: buy the target and short 0.5 acquirer shares per target share; lock in the $3 spread (7.1%) if the deal closes.</div>

<h3>3. Ways to invest</h3>
<table>
  <tr><th>Vehicle</th><th>Pros</th><th>Cons</th></tr>
  <tr><td>Single hedge fund</td><td>Direct access to a manager</td><td>Concentrated manager risk; liquidity terms</td></tr>
  <tr><td><b>Fund of funds</b></td><td>Diversification across managers, due diligence and access done for you, smaller minimums</td><td><b>Two layers of fees</b>; less transparency</td></tr>
  <tr><td><b>Multi-strategy fund</b></td><td>One manager allocates across strategies quickly; one layer of fees</td><td>Operational risk concentrated in one firm</td></tr>
  <tr><td><b>Separately managed account (SMA)</b></td><td>Investor owns the assets: full transparency, control, customization, better liquidity</td><td>Higher minimums and costs; the manager may not offer its full strategy</td></tr>
  <tr><td>Liquid alternatives (UCITS, mutual fund format)</td><td>Daily liquidity, regulation</td><td>Limits on leverage and illiquid assets may reduce returns</td></tr>
</table>
<div class="ex"><b>Fund-of-funds fees:</b> an underlying fund (2% / 20% net of the management fee) earns 20% gross on $100: 100 + 20 − 2 − 0.20 × 18 = <b>114.40</b>. The fund of funds charges 1% / 10%: 114.40 − 1 − 0.10 × 13.40 = <b>112.06</b>. Net return = 12.06%, versus 20% gross.</div>

<h3>4. Risks and performance</h3>
<ul>
  <li>Leverage, short-selling risk (unlimited losses, short squeezes), liquidity mismatch, operational and fraud risk, model risk, and crowding (many funds in the same trades).</li>
  <li>Returns are often non-normal (negative skew, fat tails): e.g. merger arbitrage earns small gains most of the time and occasional large losses.</li>
  <li>Hedge fund index returns are overstated by <b>survivorship</b> and <b>backfill</b> bias; illiquid holdings can smooth reported returns.</li>
</ul>

<div class="how"><b>How it's tested:</b> matching a description to its strategy (long/short, market neutral, merger arbitrage, convertible arbitrage, global macro, distressed), the positions taken in merger and convertible arbitrage, lockups, gates and side pockets, and the pros and cons of funds of funds, multi-strategy funds and SMAs.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe hedge fund features, including lockups, notice periods, gates and side pockets.</li>
  <li>Describe equity, event-driven, relative value, opportunistic, specialist and multi-manager strategies.</li>
  <li>Compare investing through single funds, funds of funds, multi-strategy funds and SMAs, including fee effects.</li>
  <li>Describe the risks and performance issues of hedge funds.</li>
</ul></div>
`;

window.QB_HARD.l1hf = [
  ["A hedge fund strategy that buys the target's shares and shorts the acquirer's shares after a stock-for-stock merger announcement is classified as:",
    ["Event-driven", "Relative value", "Opportunistic"],
    "Merger arbitrage is an event-driven strategy. Convertible and fixed income arbitrage are relative value; global macro and managed futures are opportunistic.", "r"],
  ["A lockup period in a hedge fund:",
    ["Bars redemptions for a set time after investing", "Limits the amount of leverage the manager is allowed to use", "Requires 30 days' notice before each redemption"],
    "A lockup prohibits redemptions for an initial period (often a year). Notice periods and gates are separate liquidity terms.", "r"],
  ["A redemption gate allows a hedge fund manager to:",
    ["Limit withdrawals by investors in a given period", "Charge a performance fee above a hurdle rate", "Hold illiquid assets separately through a side pocket"],
    "Gates cap withdrawals (e.g. 10% of the fund per quarter) to avoid forced selling.", "r"],
  ["A hedge fund holds long and short positions designed so that its exposure to the overall market (beta) is close to zero. Its strategy is:",
    ["Equity market neutral", "Long/short equity", "Global macro"],
    "Market-neutral funds aim for zero beta; long/short equity funds are usually net long.", "r"],
  ["A target company trades at $46 after a $50 cash takeover offer. A merger arbitrage fund buys the target. If the deal closes, its return is closest to:",
    ["8.7%", "8.0%", "4.0%"],
    "(50 − 46) / 46 = 8.7%. 8.0% divides by the offer price.", "c"],
  ["The main risk in a merger arbitrage strategy is that:",
    ["The deal fails to complete", "Interest rates fall sharply", "The acquirer pays a dividend"],
    "If the deal breaks, the target's price usually falls sharply.", "r"],
  ["A convertible arbitrage fund typically:",
    ["Buys convertibles and shorts the stock", "Shorts convertibles and buys the stock", "Buys both the convertible and the stock"],
    "It buys undervalued convertible bonds and hedges the equity risk by shorting the issuer's stock.", "r"],
  ["A hedge fund that takes positions in currencies, interest rates and commodities based on its view of the world economy follows a:",
    ["Global macro strategy", "Distressed securities strategy", "Fixed income arbitrage strategy"],
    "Global macro funds make top-down bets across asset classes.", "r"],
  ["A hedge fund holds some illiquid private investments separately, and investors can't redeem that portion until the assets are sold. This arrangement is a:",
    ["Side pocket", "Redemption gate", "Hard lockup"],
    "A gate limits total redemptions; a lockup prevents redemptions for an initial period.", "r"],
  ["Compared with investing in several hedge funds directly, a fund of funds most likely:",
    ["Charges an extra layer of fees", "Offers full position transparency", "Has a single layer of fees"],
    "Investors pay the FoF's fees on top of the underlying funds' fees.", "r"],
  ["An investor wants full transparency into positions and the ability to customize restrictions with a hedge fund manager. The most suitable vehicle is:",
    ["A separately managed account", "A fund of funds", "A commingled master fund"],
    "In an SMA the investor owns the assets and can see and tailor them, at higher cost.", "r"],
  ["An underlying hedge fund (2% management, 20% incentive net of the management fee) earns 20% gross. A fund of funds charges 1% and 10% net of its management fee. The investor's net return is closest to:",
    ["12.1%", "14.4%", "17.0%"],
    "Underlying: 120 − 2 − 3.6 = 114.4. FoF: 114.4 − 1 − 0.10 × 13.4 = 112.06 → 12.1%. 14.4% ignores the FoF's fees.", "c"],
];

window.GLOSSARY.push(
  ["Hedge fund strategy groups","Equity, event-driven (merger arb, distressed, activist), relative value (convertible, fixed income arb), opportunistic (macro, CTAs), specialist, multi-manager.","l1hf"],
  ["Lockup, gate, side pocket", "No redemptions for an initial period; limit on redemptions; illiquid assets held separately.", "l1hf"],
  ["Merger arbitrage", "Buy the target (and short the acquirer in stock deals); risk is deal failure.", "l1hf"],
  ["Separately managed account (SMA)", "Investor owns the assets; transparency, control and customization at higher cost.", "l1hf"]
);
