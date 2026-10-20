// CFA Level I · Economics · Learning module 1: Firms and Market Structures.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1mkt = `
<p class="syl">CFA Level I · Economics (6–9% of the exam) · Learning module 1 of 8 · Firms and Market Structures</p>
<p>How much pricing power a company has depends on the structure of its market. This lesson covers how firms decide how much to produce (profit maximization, breakeven and shutdown), the four market structures and how prices and profits behave in each, the main oligopoly models, and how analysts measure concentration. Equity analysts use exactly these ideas when judging whether a company's profits are sustainable.</p>

<h3>1. Costs, revenue and profit</h3>
<ul>
  <li><b>Total revenue</b> TR = P × Q; <b>average revenue</b> AR = TR/Q = P; <b>marginal revenue</b> MR = change in TR from selling one more unit.</li>
  <li><b>Total cost</b> TC = fixed cost (TFC, doesn't vary with output) + variable cost (TVC). Average total cost ATC = TC/Q; average variable cost AVC = TVC/Q; <b>marginal cost</b> MC = change in TC from one more unit (MC eventually rises because of diminishing marginal returns).</li>
  <li><b>Accounting profit</b> = revenue − explicit costs. <b>Economic profit</b> = accounting profit − implicit opportunity costs (including a normal return on the owners' capital). <b>Normal profit</b> = the level at which economic profit is zero: owners earn exactly their opportunity cost.</li>
</ul>
<h4>Profit maximization, breakeven and shutdown <span class="hot">Highly tested</span></h4>
<ul>
  <li>Every firm maximizes profit where <b>MR = MC</b> (and MC is rising).</li>
  <li><b>Breakeven</b>: TR = TC, i.e. P = ATC. Breakeven quantity = fixed costs/(P − AVC). Example: fixed costs $1,000, price $25, AVC $15 → Q_BE = 1,000/10 = 100 units.</li>
</ul>
<table>
  <tr><th>Price relative to costs</th><th>Short run</th><th>Long run</th></tr>
  <tr><td>P ≥ ATC</td><td>Operate (economic profit ≥ 0)</td><td>Stay in the market</td></tr>
  <tr><td>AVC ≤ P &lt; ATC</td><td><b>Keep operating</b>: revenue covers variable costs and part of fixed costs, so losses are smaller than if it shut down</td><td><b>Exit</b></td></tr>
  <tr><td>P &lt; AVC</td><td><b>Shut down</b> (loss limited to fixed costs)</td><td>Exit</td></tr>
</table>
<h4>Economies of scale</h4>
<p>In the long run all inputs are variable. The <b>long-run average total cost (LRATC)</b> curve falls with <b>economies of scale</b> (specialization, bulk purchasing, spreading fixed costs) and rises with <b>diseconomies of scale</b> (bureaucracy, coordination problems). The output at which LRATC first reaches its minimum is the <b>minimum efficient scale</b>; firms that can't reach it are at a cost disadvantage.</p>

<h3>2. The four market structures <span class="hot">Highly tested</span></h3>
<table>
  <tr><th></th><th>Perfect competition</th><th>Monopolistic competition</th><th>Oligopoly</th><th>Monopoly</th></tr>
  <tr><td>Number of sellers</td><td>Many</td><td>Many</td><td>Few</td><td>One</td></tr>
  <tr><td>Product</td><td>Identical (homogeneous)</td><td>Differentiated</td><td>Identical or differentiated</td><td>Unique, no close substitutes</td></tr>
  <tr><td>Barriers to entry</td><td>Very low</td><td>Low</td><td>High</td><td>Very high</td></tr>
  <tr><td>Pricing power</td><td>None (price taker)</td><td>Some</td><td>Some or considerable (interdependent)</td><td>Considerable (price searcher)</td></tr>
  <tr><td>Non-price competition</td><td>None</td><td>Advertising, branding, quality</td><td>Advertising, product differentiation</td><td>Advertising (to protect position)</td></tr>
  <tr><td>Examples</td><td>Agricultural commodities</td><td>Restaurants, clothing brands</td><td>Airlines, mobile networks</td><td>Utilities, patented drugs</td></tr>
</table>

<h3>3. Perfect competition and monopolistic competition</h3>
<ul>
  <li><b>Perfect competition</b>: each firm faces a <b>perfectly elastic</b> (horizontal) demand curve at the market price, so P = AR = MR. It produces where P = MC. Short-run economic profits attract entry, which pushes the price down until, in <b>long-run equilibrium, P = MC = minimum ATC</b> and economic profit is zero. The outcome is efficient.</li>
  <li><b>Monopolistic competition</b>: each firm faces a <b>downward-sloping</b> demand curve because its product is differentiated. It produces where MR = MC and charges a price above MC. Short-run profits attract entry, so in the long run <b>economic profit is zero</b> (P = ATC), but the firm produces below minimum ATC (excess capacity) and P &gt; MC.</li>
</ul>
<h4>Elasticity and marginal revenue</h4>
<div class="formula">MR = P × (1 − 1/|E|), where E = price elasticity of demand</div>
<ul>
  <li>If demand is elastic (|E| &gt; 1), MR &gt; 0: lowering the price raises total revenue. If inelastic (|E| &lt; 1), MR &lt; 0.</li>
  <li>Because MC is positive and the firm sets MR = MC, a firm with pricing power always operates on the <b>elastic</b> part of its demand curve.</li>
  <li>Example: P = $20 and |E| = 2 → MR = 20 × (1 − 0.5) = $10.</li>
</ul>

<h3>4. Oligopoly <span class="hot">Highly tested</span></h3>
<p>With few sellers, each firm's best decision depends on what its rivals do (interdependence). The models:</p>
<table>
  <tr><th>Model</th><th>Key assumption</th><th>Result</th></tr>
  <tr><td><b>Kinked demand curve</b> (Sweezy)</td><td>Rivals <b>match price cuts but ignore price increases</b></td><td>Demand is elastic above the current price and inelastic below it; a gap in MR makes prices sticky. Weakness: doesn't explain how the price was set.</td></tr>
  <tr><td><b>Cournot</b></td><td>Firms choose <b>quantities simultaneously</b>, each taking the other's output as given</td><td>Output and price between monopoly and perfect competition; with more firms, the result approaches perfect competition</td></tr>
  <tr><td><b>Nash equilibrium</b> (game theory)</td><td>Each firm chooses its best strategy given the others' strategies</td><td>Firms may end up worse off than if they cooperated (prisoner's dilemma), which is why collusion is tempting but unstable</td></tr>
  <tr><td><b>Stackelberg</b></td><td>A leader chooses output <b>first</b>; followers then react</td><td>First-mover advantage: the leader produces more and earns more</td></tr>
  <tr><td><b>Dominant firm</b></td><td>One firm with a large share (often lower costs) sets the price; small "fringe" firms are price takers</td><td>The dominant firm maximizes profit on the demand left over after fringe supply</td></tr>
</table>
<p><b>Cartels</b> (collusion to restrict output and raise prices, like a monopoly) tend to be unstable: each member gains by secretly producing more. Collusion is more likely with few firms, similar costs, similar products, high barriers to entry and weak competition enforcement.</p>

<h3>5. Monopoly</h3>
<ul>
  <li>Sources of monopoly power: control of a key resource, patents and licences, government franchises, network effects, and <b>economies of scale</b> (a <b>natural monopoly</b>, where one firm can supply the whole market at a lower cost than several).</li>
  <li>The monopolist produces where MR = MC and charges the price on the demand curve for that quantity: <b>P &gt; MC</b>, lower output than under competition, and a <b>deadweight loss</b> to society.</li>
  <li><b>Price discrimination</b> (charging different prices to different groups for the same product) requires pricing power, groups with different elasticities, and the ability to prevent resale. It raises the monopolist's profit and output.</li>
  <li><b>Regulating a natural monopoly</b>: <b>marginal cost pricing</b> (P = MC; efficient but the firm makes a loss and needs a subsidy) or <b>average cost pricing</b> (P = ATC; the firm earns a normal profit).</li>
</ul>
<div class="ex"><b>Example:</b> Demand P = 100 − 2Q, so MR = 100 − 4Q; MC = $20. Monopoly: 100 − 4Q = 20 → Q = 20, P = $60. Under perfect competition, P = MC = 20 → Q = 40. Deadweight loss = ½ × (60 − 20) × (40 − 20) = 400.</div>

<h3>6. Identifying the market structure: concentration measures <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>N-firm concentration ratio</b>: the sum of the market shares of the N largest firms (e.g. the top 4).</li>
  <li><b>Herfindahl–Hirschman Index (HHI)</b>: the sum of the <b>squared</b> market shares of all firms (in decimals, between 0 and 1; or ×10,000). Higher = more concentrated.</li>
</ul>
<div class="ex"><b>Example:</b> Shares of 30%, 25%, 20%, 15% and 10%. Four-firm ratio = 90%. HHI = 0.30² + 0.25² + 0.20² + 0.15² + 0.10² = 0.225 (2,250). If the two largest firms merge, the four-firm ratio rises to 100% but the HHI jumps to 0.375; if the two smallest merge, the HHI rises to 0.255.</div>
<ul>
  <li>The HHI is more sensitive than the concentration ratio to mergers among the largest firms (squaring weights big firms heavily); the concentration ratio may not change at all when two top firms merge.</li>
  <li>An HHI equal to 1/N for N equal-sized firms: e.g. 0.20 for five equal firms.</li>
  <li>Limitations of both: they ignore the threat of new entry (contestability) and the elasticity of demand, and depend on how the market is defined.</li>
</ul>

<div class="how"><b>How it's tested:</b> identifying a market structure from its features, the shutdown/exit rules, long-run outcomes under each structure, the oligopoly model described in a question (kinked demand, Cournot, Stackelberg, Nash, dominant firm), MR from elasticity, monopoly output and price, and HHI and concentration ratio calculations.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Apply MR = MC, find breakeven quantity and state the short-run shutdown and long-run exit rules.</li>
  <li>Describe economies of scale and minimum efficient scale.</li>
  <li>Compare the four market structures on sellers, products, barriers, pricing power and long-run profit.</li>
  <li>Explain the kinked demand, Cournot, Nash, Stackelberg and dominant firm models.</li>
  <li>Calculate the concentration ratio and HHI and explain their limitations.</li>
</ul></div>
`;

window.QB_HARD.l1mkt = [
  ["In long-run equilibrium under perfect competition, firms:",
    ["Earn zero economic profit, with price equal to minimum ATC", "Earn positive economic profit that barriers to entry protect over time", "Produce where price exceeds marginal cost"],
    "Free entry and exit drive economic profit to zero: P = MR = MC = minimum average total cost.", "r"],
  ["Which market structure has many firms, differentiated products and low barriers to entry?",
    ["Monopolistic competition", "Oligopoly", "Perfect competition"],
    "Monopolistic competition combines many sellers and easy entry with product differentiation (brands, advertising), giving each firm a downward-sloping demand curve.", "r"],
  ["In an oligopoly model where one firm sets its output first and the other firms then react to it, the model is the:",
    ["Stackelberg model", "Cournot model", "Kinked demand curve model"],
    "Stackelberg is a sequential (leader–follower) game. In Cournot, firms choose quantities simultaneously.", "r"],
  ["The kinked demand curve model of oligopoly assumes that rivals will:",
    ["Match price cuts but not price increases", "Match price increases but not price cuts", "Ignore both price increases and price cuts"],
    "Above the kink demand is elastic (rivals don't follow increases); below it demand is inelastic (rivals match cuts), so prices tend to be sticky.", "r"],
  ["In the short run, a firm should shut down when the market price falls below its:",
    ["Average variable cost", "Average total cost", "Marginal revenue"],
    "If P < AVC, the firm doesn't even cover variable costs, so producing loses more than shutting down. Between AVC and ATC it keeps operating in the short run.", "r"],
  ["Four firms have market shares of 40%, 30%, 20% and 10%. The Herfindahl–Hirschman Index is closest to:",
    ["3,000", "10,000", "2,500"],
    "HHI = 40² + 30² + 20² + 10² = 1,600 + 900 + 400 + 100 = 3,000.", "c"],
  ["An advantage of the HHI over the N-firm concentration ratio is that the HHI:",
    ["Reflects a merger between two of the largest firms", "Captures the threat of potential new entrants", "Measures the price elasticity of market demand"],
    "A merger within the top N firms doesn't change the N-firm ratio but does raise the HHI. Neither measure captures barriers to entry or elasticity.", "r"],
  ["A profit-maximizing monopolist always operates on the portion of the demand curve where demand is:",
    ["Elastic", "Inelastic", "Unit elastic"],
    "It produces where MR = MC. Since MC is positive, MR must be positive, which occurs only where demand is elastic.", "r"],
  ["A business owner earns accounting profit of $120,000 but could earn $90,000 working elsewhere and $40,000 a year by investing her capital elsewhere. Her economic profit is closest to:",
    ["−$10,000", "$120,000", "$30,000"],
    "Economic profit = accounting profit − implicit opportunity costs = 120,000 − 90,000 − 40,000 = −$10,000.", "c"],
  ["A firm has fixed costs of $1,000, average variable cost of $15 and sells at $25 per unit. Its breakeven quantity is closest to:",
    ["100 units", "67 units", "40 units"],
    "Q_BE = fixed costs/(P − AVC) = 1,000/(25 − 15) = 100 units.", "c"],
  ["A firm's price is above its average variable cost but below its average total cost. In the long run, the firm should:",
    ["Exit the market", "Keep operating indefinitely", "Shut down immediately"],
    "It should keep operating in the short run (it covers variable costs and part of fixed costs) but exit in the long run unless the price rises to at least ATC.", "r"],
  ["The level of output at which a firm's long-run average cost curve first reaches its minimum is called:",
    ["Minimum efficient scale", "The breakeven point", "The shutdown point"],
    "Minimum efficient scale marks where economies of scale are exhausted.", "r"],
  ["A firm in a perfectly competitive market faces a demand curve that is:",
    ["Horizontal (perfectly elastic)", "Downward sloping and elastic", "Vertical (perfectly inelastic)"],
    "A price taker can sell any quantity at the market price, so its demand curve is horizontal and P = MR.", "r"],
  ["In long-run equilibrium under monopolistic competition, firms most likely:",
    ["Earn zero economic profit but have excess capacity", "Earn positive economic profit because of brand loyalty", "Produce at minimum average total cost"],
    "Entry eliminates economic profit (P = ATC), but because demand slopes down, firms produce below the output that minimizes ATC.", "r"],
  ["A firm faces a price elasticity of demand of −1.25 at a price of $50. Its marginal revenue is closest to:",
    ["$10.00", "$40.00", "−$12.50"],
    "MR = P(1 − 1/|E|) = 50(1 − 1/1.25) = 50 × 0.2 = $10.00.", "c"],
  ["A monopolist faces demand P = 120 − 3Q and constant marginal cost of $30. Its profit-maximizing price is closest to:",
    ["$75", "$30", "$90"],
    "MR = 120 − 6Q. Set MR = MC: 120 − 6Q = 30 → Q = 15. P = 120 − 3(15) = $75.", "c"],
  ["In the Cournot model of a two-firm oligopoly, firms:",
    ["Set output simultaneously", "Match price cuts but not price increases", "Follow a price leader that moves first"],
    "Cournot competitors set output simultaneously; the equilibrium lies between monopoly and perfect competition.", "r"],
  ["Two firms would both earn more by restricting output, but each has an incentive to cheat, so both produce more and earn less. This outcome is best described as:",
    ["A Nash equilibrium of a prisoner's dilemma", "A Stackelberg equilibrium", "A kinked demand curve outcome with sticky prices"],
    "Each firm's best response given the other's choice leads to a worse joint outcome: a Nash equilibrium in a prisoner's dilemma, explaining why cartels are unstable.", "s"],
  ["In the dominant firm model of oligopoly, the smaller firms in the industry:",
    ["Take the dominant firm's price as given", "Set prices first and the dominant firm follows", "Collude to set the industry price"],
    "The dominant firm sets the price; fringe competitors take it as given.", "r"],
  ["Five firms have market shares of 30%, 25%, 20%, 15% and 10%. The Herfindahl–Hirschman Index is closest to:",
    ["0.225", "0.900", "0.200"],
    "HHI = 0.09 + 0.0625 + 0.04 + 0.0225 + 0.01 = 0.225. (0.90 is the four-firm concentration ratio; 0.20 would be five equal firms.)", "c"],
  ["Price discrimination is possible only if the seller has some pricing power, can separate buyers into groups with different price elasticities, and:",
    ["Can prevent resale between groups", "Faces perfectly elastic demand", "Has lower fixed costs than rivals"],
    "If low-price buyers could resell to high-price buyers, the price differences would collapse.", "r"],
  ["A regulator sets a natural monopoly's price equal to its average total cost. As a result, the monopoly most likely:",
    ["Earns a normal profit", "Makes a loss and needs a subsidy", "Earns a large economic profit"],
    "Average cost pricing lets the firm cover all costs including a normal return. Marginal cost pricing would cause losses for a natural monopoly with falling average costs.", "r"],
  ["Collusion among oligopolists is most likely when:",
    ["Few firms with similar costs and products", "Many firms with very different costs", "Entry barriers are low and demand is volatile"],
    "Few, similar firms behind high barriers find it easier to agree on and monitor output and prices.", "r"],
];

window.GLOSSARY.push(
  ["Shutdown and exit rules","Short run: shut down if P < AVC. Long run: exit if P < ATC. Breakeven at P = ATC.","l1mkt"],
  ["Herfindahl–Hirschman Index (HHI)","Sum of squared market shares. Unlike the N-firm concentration ratio, it rises when large firms merge.","l1mkt"],
  ["Kinked demand curve","Oligopoly model: rivals match price cuts but not increases, so prices are sticky.","l1mkt"],
  ["Economic vs accounting profit", "Economic profit subtracts implicit opportunity costs (incl. normal return on capital).", "l1mkt"],
  ["Breakeven quantity", "Fixed costs/(P − AVC); breakeven where P = ATC.", "l1mkt"],
  ["Minimum efficient scale", "Lowest output at which long-run average cost is minimized.", "l1mkt"],
  ["MR and elasticity", "MR = P(1 − 1/|E|); firms with pricing power operate where demand is elastic.", "l1mkt"],
  ["Cournot model", "Firms choose quantities simultaneously; outcome between monopoly and competition.", "l1mkt"],
  ["Stackelberg model", "Leader sets output first, followers react; first-mover advantage.", "l1mkt"],
  ["Dominant firm model", "One large firm sets the price; fringe firms are price takers.", "l1mkt"],
  ["Natural monopoly regulation", "Marginal cost pricing (efficient, needs subsidy) or average cost pricing (normal profit).", "l1mkt"]
);
