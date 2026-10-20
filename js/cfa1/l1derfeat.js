// CFA Level I · Derivatives · Learning module 1: Derivative Instrument and Derivative Market Features.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1derfeat = `
<p class="syl">CFA Level I · Derivatives (5–8%) · Learning module 1 of 10 · Derivative Instrument and Derivative Market Features</p>
<p>A derivative is a contract whose value comes from something else. This first lesson sets up the vocabulary: what defines a derivative, the types of underlying, the two broad families (forward commitments and contingent claims), and how exchange-traded and over-the-counter markets differ, including the role of central clearing.</p>

<h3>1. What a derivative is</h3>
<p>A <b>derivative</b> is a financial contract whose value depends on (is derived from) the value of an <b>underlying</b>: an asset, a rate, an index or an event. The contract specifies:</p>
<ul>
  <li>The <b>underlying</b> and the <b>contract size</b> (notional amount).</li>
  <li>The <b>maturity</b> (expiration) date.</li>
  <li>The <b>settlement</b> method: <b>physical delivery</b> of the underlying, or <b>cash settlement</b> of the gain or loss.</li>
  <li>The two counterparties: the <b>long</b> (buyer, benefits if the underlying rises in most contracts) and the <b>short</b> (seller).</li>
</ul>
<p>Derivatives usually require little or no money up front, so they offer <b>leverage</b>: a small investment controls a large exposure. They let users transfer risks (price, rate, currency, credit) to those willing to bear them.</p>

<h3>2. Types of underlying</h3>
<table>
  <tr><th>Underlying</th><th>Examples</th></tr>
  <tr><td>Equities</td><td>Individual shares, equity indexes</td></tr>
  <tr><td>Fixed income and interest rates</td><td>Bonds, reference rates such as SOFR</td></tr>
  <tr><td>Currencies</td><td>Exchange rates</td></tr>
  <tr><td>Commodities</td><td><b>Hard</b> (energy, metals) and <b>soft</b> (agricultural products, livestock)</td></tr>
  <tr><td>Credit</td><td>The default risk of a borrower or index of borrowers (credit default swaps)</td></tr>
  <tr><td>Other</td><td>Weather, longevity, inflation, cryptocurrencies</td></tr>
</table>

<h3>3. Forward commitments vs contingent claims <span class="hot">Highly tested</span></h3>
<table>
  <tr><th></th><th>Forward commitments</th><th>Contingent claims</th></tr>
  <tr><td>Examples</td><td><b>Forwards, futures, swaps</b></td><td><b>Options</b>, credit default swaps</td></tr>
  <tr><td>Obligation</td><td>Both parties <b>must</b> perform</td><td>The buyer has the <b>right, not the obligation</b>; payment depends on an event (e.g. the price passing a level, or a default)</td></tr>
  <tr><td>Payoff</td><td><b>Symmetric (linear)</b>: gains and losses mirror each other</td><td><b>Asymmetric</b>: the buyer's loss is limited to the premium paid</td></tr>
  <tr><td>Up-front payment</td><td>Usually none (value zero at initiation)</td><td>The buyer pays a <b>premium</b></td></tr>
</table>

<h3>4. Exchange-traded vs over-the-counter markets <span class="hot">Highly tested</span></h3>
<table>
  <tr><th></th><th>Exchange-traded (ETD)</th><th>Over-the-counter (OTC)</th></tr>
  <tr><td>Terms</td><td><b>Standardized</b> (size, dates, settlement)</td><td><b>Customized</b> to the parties' needs</td></tr>
  <tr><td>Counterparty risk</td><td>Very low: a <b>clearing house</b> guarantees performance, backed by margin and daily settlement</td><td>Higher: each party relies on the other (reduced by collateral and, for many swaps, central clearing)</td></tr>
  <tr><td>Transparency and liquidity</td><td>Prices and volumes public; usually liquid</td><td>Less transparent; can be less liquid</td></tr>
  <tr><td>Regulation</td><td>Heavily regulated exchanges</td><td>Traditionally lighter; much stricter since 2008</td></tr>
  <tr><td>Examples</td><td>Futures, listed options</td><td>Forwards, most swaps, many options</td></tr>
</table>
<h4>Central clearing</h4>
<ul>
  <li>A <b>central counterparty (CCP)</b> steps between the two original parties (<b>novation</b>): it becomes the buyer to every seller and the seller to every buyer. This greatly reduces <b>counterparty credit risk</b> and allows netting of positions.</li>
  <li>After the 2008 crisis, regulators required many standardized OTC derivatives (especially interest rate swaps) to be <b>centrally cleared</b>, reported to trade repositories, and margined (with margin rules for uncleared trades too).</li>
  <li>Downside: risk becomes concentrated in a few CCPs, so their own safety is critical.</li>
</ul>

<h3>5. Who uses derivatives</h3>
<ul>
  <li><b>Hedgers</b> reduce existing risks (a farmer locking in a crop price, a company hedging currency receipts).</li>
  <li><b>Speculators</b> take on risk to profit from expected price moves, adding liquidity.</li>
  <li><b>Arbitrageurs</b> exploit price differences between related instruments, keeping prices in line.</li>
  <li><b>Dealers</b> (market makers) quote prices and manage the resulting risk.</li>
</ul>

<div class="how"><b>How it's tested:</b> classifying instruments as forward commitments or contingent claims, symmetric vs asymmetric payoffs, cash vs physical settlement, ETD vs OTC features, the role of clearing houses and CCPs (novation, counterparty risk), and identifying hedgers, speculators and arbitrageurs.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Define a derivative and its key contract features.</li>
  <li>Describe the main types of underlying.</li>
  <li>Distinguish forward commitments from contingent claims.</li>
  <li>Compare exchange-traded and OTC derivatives and explain central clearing.</li>
</ul></div>
`;

window.QB_HARD.l1derfeat = [
  ["Compared with OTC derivatives, exchange-traded derivatives:",
    ["Are standardized and centrally cleared", "Can be fully tailored to each user's particular needs", "Have higher counterparty credit risk"],
    "ETDs have standardized terms, margin and a clearinghouse. OTC contracts can be customized but carry more counterparty risk (unless centrally cleared).", "r"],
  ["Which of the following is a contingent claim?",
    ["An option", "A forward contract", "An interest rate swap"],
    "Contingent claims (options, CDS) pay off only if an event occurs or a party chooses to exercise. Forwards, futures and swaps are firm commitments.", "r"],
  ["Which of the following is a forward commitment?",
    ["An interest rate swap", "A call option", "A credit default swap"],
    "Forwards, futures and swaps are forward commitments; options and CDS are contingent claims.", "r"],
  ["A derivative whose losses for the buyer are limited to the premium paid is most likely:",
    ["An option", "A futures contract", "A forward contract"],
    "Options are contingent claims with asymmetric payoffs; forward commitments have symmetric payoffs.", "r"],
  ["At expiry, the short pays the long the difference between the underlying's price and the contract price instead of delivering the asset. This is:",
    ["Cash settlement", "Physical delivery", "Novation"],
    "Cash settlement pays the gain or loss in money; physical delivery exchanges the underlying.", "r"],
  ["Derivatives provide leverage mainly because:",
    ["Little money is needed up front", "They always pay fixed returns", "They have no counterparty risk"],
    "A small (or zero) initial outlay controls a large exposure to the underlying.", "r"],
  ["Crude oil and copper are examples of which type of commodity underlying?",
    ["Hard commodities", "Soft commodities", "Financial underlyings"],
    "Hard commodities are energy and metals; soft commodities are agricultural products.", "r"],
  ["Compared with exchange-traded derivatives, OTC derivatives are more likely to be:",
    ["Customized to the parties' needs", "Guaranteed by an exchange", "Fully public in their pricing"],
    "OTC contracts are privately negotiated and tailored; exchange contracts are standardized.", "r"],
  ["When a central counterparty becomes the buyer to every seller and the seller to every buyer, this process is called:",
    ["Novation", "Netting", "Marking to market"],
    "Novation replaces the original bilateral contract with two contracts with the CCP.", "r"],
  ["The main benefit of central clearing for OTC derivatives is that it:",
    ["Reduces counterparty credit risk", "Removes all market risk", "Makes contracts fully customized"],
    "The CCP guarantees performance and collects margin; market risk remains.", "r"],
  ["A drawback of requiring central clearing is that it:",
    ["Concentrates risk in a few CCPs", "Increases bilateral credit exposure", "Prevents any netting of positions"],
    "If a major CCP failed, the effects would be widespread, so CCPs must be closely regulated.", "r"],
  ["A trader buys a stock index future because she expects the market to rise and has no existing position to protect. She is acting as a:",
    ["Speculator", "Hedger", "Arbitrageur"],
    "Speculators take on risk to profit from expected moves; hedgers offset existing risk.", "s"],
];

window.GLOSSARY.push(
  ["Firm commitments vs contingent claims","Forwards, futures and swaps oblige both parties. Options and credit derivatives pay only if an event occurs or a holder exercises.","l1derfeat"],
  ["Derivative", "Contract whose value depends on an underlying asset, rate, index or event.", "l1derfeat"],
  ["ETD vs OTC derivatives", "Standardized, cleared, transparent vs customized, bilateral, less transparent.", "l1derfeat"],
  ["Central counterparty (CCP)", "Clearing entity that becomes counterparty to both sides (novation), reducing credit risk.", "l1derfeat"]
);
