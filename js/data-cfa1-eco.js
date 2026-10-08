// CFA Level I · Economics: study notes, practice questions and flashcards.
window.NOTES = window.NOTES || {};
window.QB_HARD = window.QB_HARD || {};
window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1eco = `
<p class="syl">CFA Level I · Economics · 6–9% of the exam · Learning modules: Firms and Market Structures · Understanding Business Cycles · Fiscal Policy · Monetary Policy · Introduction to Geopolitics · International Trade · Capital Flows and the FX Market · Exchange Rate Calculations</p>

<h3>1. Firms and market structures</h3>
<h4>Profit maximization and breakeven</h4>
<p>Every firm maximizes profit where <b>marginal revenue (MR) = marginal cost (MC)</b>. Economic profit counts opportunity costs, so zero economic profit still means a normal return on capital.</p>
<table>
  <tr><th>Condition</th><th>Short run</th><th>Long run</th></tr>
  <tr><td>P ≥ ATC</td><td>Operate (profit or breakeven)</td><td>Stay in</td></tr>
  <tr><td>AVC ≤ P &lt; ATC</td><td><b>Keep operating</b> (covers variable costs and some fixed)</td><td>Exit</td></tr>
  <tr><td>P &lt; AVC</td><td><b>Shut down</b></td><td>Exit</td></tr>
</table>
<p>Economies of scale lower long-run average cost as output grows (specialization, bargaining power); diseconomies raise it. <b>Minimum efficient scale</b> is the lowest output at which long-run ATC is minimized.</p>

<h4>The four market structures</h4>
<table>
  <tr><th></th><th>Perfect competition</th><th>Monopolistic competition</th><th>Oligopoly</th><th>Monopoly</th></tr>
  <tr><td>Sellers</td><td>Many</td><td>Many</td><td>Few</td><td>One</td></tr>
  <tr><td>Product</td><td>Identical</td><td><b>Differentiated</b> (advertising, quality)</td><td>Identical or differentiated</td><td>Unique, no close substitutes</td></tr>
  <tr><td>Barriers to entry</td><td>Very low</td><td>Low</td><td>High</td><td>Very high</td></tr>
  <tr><td>Pricing power</td><td>None (price taker, P = MR)</td><td>Some</td><td>Some/considerable (interdependent)</td><td>Considerable (price searcher)</td></tr>
  <tr><td>Long-run economic profit</td><td>Zero; P = MC = min ATC</td><td>Zero, but excess capacity and P &gt; MC</td><td>Can persist</td><td>Can persist</td></tr>
</table>
<h4>Oligopoly models</h4>
<ul>
  <li><b>Kinked demand curve</b>: rivals match price <b>cuts</b> but not <b>increases</b>, so prices are sticky.</li>
  <li><b>Cournot</b>: firms choose quantities <b>simultaneously</b>; equilibrium output between monopoly and perfect competition.</li>
  <li><b>Stackelberg</b> (dominant firm / first mover): the leader sets output first; followers react.</li>
  <li><b>Nash equilibrium</b>: no firm can improve by changing its strategy alone (prisoner's dilemma explains why collusion breaks down).</li>
  <li><b>Dominant firm</b>: one large low-cost firm sets the price; smaller firms are price takers.</li>
</ul>
<h4>Monopoly</h4>
<p>MR &lt; price, so a monopolist produces less and charges more than a competitive market. Because MR must be positive where MR = MC, it always operates on the <b>elastic</b> part of demand. Price discrimination (charging different prices to groups with different elasticities) increases output and profit. Natural monopolies (utilities) are often regulated at average-cost or marginal-cost pricing.</p>
<h4>Measuring concentration</h4>
<div class="formula">N-firm concentration ratio = sum of the N largest firms' market shares · HHI = sum of squared market shares</div>
<div class="ex"><b>Example:</b> Shares of 40%, 30%, 20%, 10% → HHI = 1,600 + 900 + 400 + 100 = 3,000 (0.30). A merger of the top two firms leaves the 4-firm ratio at 100% but raises the HHI, which is why the HHI is preferred. Neither measure captures potential entry or demand elasticity.</div>
<p>Elasticity reminders: total revenue is maximized where price elasticity = −1; demand is more elastic with more substitutes, a larger budget share and more time to adjust.</p>

<h3>2. Understanding business cycles</h3>
<p>Phases: <b>recovery → expansion → slowdown → contraction</b> (output below potential in contraction and early recovery). Credit cycles (expansion and contraction of credit availability) amplify business cycles; housing and construction are especially credit-sensitive.</p>
<ul>
  <li><b>Inventory cycle</b>: early in a slowdown, sales fall unexpectedly, the <b>inventory-to-sales ratio rises</b>, and firms cut production; in recovery the ratio falls and firms restock.</li>
  <li><b>Capital spending</b> is cyclical: firms first cut new orders, then rebound late in recovery; consumer durables are the most cyclical consumption.</li>
  <li><b>Labour</b>: firms first adjust hours and overtime, then headcount. Unemployment is <b>frictional</b> (job search), <b>structural</b> (skills/location mismatch), or <b>cyclical</b>. Discouraged workers leave the labour force, so the unemployment rate can <b>understate</b> weakness; it's a lagging indicator.</li>
  <li><b>Inflation</b>: measured by CPI/PCE (consumer) and PPI (producer); <b>core</b> excludes food and energy. Cost-push vs demand-pull; disinflation (slower inflation) vs deflation (falling prices) vs hyperinflation; <b>stagflation</b> = high inflation with high unemployment.</li>
</ul>
<table>
  <tr><th>Leading</th><th>Coincident</th><th>Lagging</th></tr>
  <tr><td>Average weekly hours in manufacturing; <b>initial unemployment claims</b>; new orders (consumer goods, non-defence capital goods); ISM new orders; building permits; stock prices; leading credit index; interest rate spread (10y − policy rate); consumer expectations</td><td>Employees on non-farm payrolls; personal income less transfers; industrial production; manufacturing and trade sales</td><td>Average duration of unemployment; <b>inventory-to-sales ratio</b>; change in unit labour costs; average prime rate; commercial and industrial loans; consumer credit to income; change in CPI for services</td></tr>
</table>

<h3>3. Fiscal policy</h3>
<p>Fiscal policy uses <b>government spending</b> (transfer payments, current spending, capital spending) and <b>taxes</b> (direct: income, wealth; indirect: sales, VAT, excise) to influence aggregate demand, redistribute income and provide public goods. Desirable tax attributes: simplicity, efficiency, fairness (horizontal and vertical equity), revenue sufficiency.</p>
<div class="formula">Fiscal multiplier = 1 ÷ [1 − MPC(1 − t)] · e.g. MPC 0.8, t 25% → 1 ÷ 0.40 = 2.5</div>
<ul>
  <li><b>Balanced-budget multiplier</b> is positive: equal increases in spending and taxes still raise aggregate demand (spending enters fully; part of a tax increase comes out of saving).</li>
  <li><b>Automatic stabilizers</b> (progressive taxes, unemployment benefits) work without new legislation; <b>discretionary</b> policy requires decisions.</li>
  <li><b>Lags</b>: recognition (realizing the problem), action (legislating), impact (effect on the economy).</li>
  <li><b>Structural (cyclically adjusted) deficit</b> isolates policy from the cycle. A deficit alone doesn't show the stance.</li>
  <li><b>Arguments about debt</b>: concerns: higher future taxes, crowding out private investment (higher rates), default risk. Less concern: debt owed to residents, Ricardian equivalence (households save for future taxes, so debt-financed tax cuts have little effect), debt may finance productive investment.</li>
</ul>

<h3>4. Monetary policy</h3>
<p>Central bank roles: monopoly supplier of currency, banker to the government and to banks, <b>lender of last resort</b>, regulator/supervisor of payments and banks, manager of FX reserves, and conductor of monetary policy. Most target <b>price stability</b> (often 2% inflation), independently and transparently.</p>
<ul>
  <li><b>Tools</b>: the <b>policy rate</b> (main tool), reserve requirements, <b>open market operations</b> (buying bonds adds reserves and lowers rates), and quantitative easing at the zero bound.</li>
  <li><b>Money creation</b>: money multiplier = 1 ÷ reserve requirement (10% → 10).</li>
  <li><b>Quantity theory</b>: MV = PY. With V and Y stable, money growth drives inflation (money neutrality in the long run).</li>
  <li><b>Fisher effect</b>: nominal rate ≈ real rate + expected inflation (+ risk premium for uncertainty).</li>
  <li><b>Transmission</b>: policy rate → market rates, asset prices, expectations and the exchange rate → spending → inflation.</li>
  <li><b>Neutral rate</b> = trend real growth + inflation target. A policy rate below it is <b>expansionary</b>; above it, contractionary.</li>
  <li><b>Limits</b>: liquidity traps (people hoard cash near zero rates), "bond market vigilantes", deflation, banks unwilling to lend; long-term rates and expectations don't always follow the policy rate.</li>
</ul>
<table>
  <tr><th>Fiscal / Monetary</th><th>Easy monetary</th><th>Tight monetary</th></tr>
  <tr><td><b>Easy fiscal</b></td><td>Highly expansionary; rising aggregate demand</td><td>Higher interest rates, larger public sector share of GDP</td></tr>
  <tr><td><b>Tight fiscal</b></td><td>Lower rates, growing private sector share</td><td>Highly contractionary; falling demand</td></tr>
</table>

<h3>5. Introduction to geopolitics</h3>
<p>Geopolitics studies how geography, politics and economics shape relations between countries. Actors are <b>state</b> (governments) and <b>non-state</b> (NGOs, multinationals, influential individuals). Countries are <b>cooperative</b> or <b>non-cooperative</b>, and lean toward <b>globalization</b> or <b>nationalism</b> (anti-globalization).</p>
<table>
  <tr><th></th><th>Nationalism</th><th>Globalization</th></tr>
  <tr><td><b>Cooperation</b></td><td><b>Bilateralism</b> (deals country by country)</td><td><b>Multilateralism</b> (many partners, shared rules)</td></tr>
  <tr><td><b>Non-cooperation</b></td><td><b>Autarky</b> (self-sufficiency, state control)</td><td><b>Hegemony</b> (a dominant power sets the rules)</td></tr>
</table>
<ul>
  <li><b>Tools</b>: national security (alliances, espionage, armed conflict), economic (trade agreements, tariffs, quotas, nationalization), financial (currency reserve status, access to financial markets, <b>sanctions</b> and investment restrictions).</li>
  <li><b>Institutions</b>: <b>IMF</b> (global monetary cooperation, financial stability, balance-of-payments lending), <b>World Bank</b> (development and poverty reduction), <b>WTO</b> (trade rules and disputes).</li>
  <li><b>Risk types</b>: <b>event risk</b> (known dates, e.g. elections), <b>exogenous risk</b> (sudden, unanticipated, e.g. a coup), <b>thematic risk</b> (known risks that evolve over time, e.g. climate, cyber, great-power rivalry). Assess <b>likelihood</b>, <b>velocity</b> (how fast it hits) and <b>size of impact</b>.</li>
</ul>

<h3>6. International trade</h3>
<ul>
  <li><b>Absolute advantage</b>: produce a good with fewer resources. <b>Comparative advantage</b>: produce it at a <b>lower opportunity cost</b>. Trade based on comparative advantage benefits both countries.</li>
  <li><b>Ricardian model</b>: comparative advantage from differences in <b>labour productivity</b> (technology). <b>Heckscher–Ohlin</b>: from differences in <b>factor endowments</b>; a capital-abundant country exports capital-intensive goods, and trade raises the return to the abundant factor.</li>
  <li><b>Trade restrictions</b>: tariffs (government gets revenue; deadweight loss), <b>quotas</b> (quota rents go to license holders, possibly foreign), export subsidies, voluntary export restraints. For a <b>small country</b>, a tariff causes a net welfare loss; a large country may gain via better terms of trade.</li>
  <li><b>Trading blocs</b> (increasing integration): free trade area (no internal barriers) → <b>customs union</b> (+ common external trade policy) → common market (+ free movement of labour and capital) → economic union (+ common institutions and economic policy) → monetary union (+ common currency).</li>
</ul>
<div class="formula">Current account balance = (Private saving − Investment) + (Tax revenue − Government spending)</div>
<p>A country whose private saving equals investment but runs a fiscal deficit will run a <b>current account deficit</b>. The balance of payments has three parts: current account (goods, services, income, transfers), capital account (capital transfers, non-produced assets) and financial account (investment flows).</p>

<h3>7. Capital flows and the FX market</h3>
<ul>
  <li><b>Participants</b>: sell side (dealer banks) and buy side (corporations, real money and leveraged investors, retail, governments, central banks, sovereign wealth funds).</li>
  <li><b>Instruments</b>: spot, forwards, FX swaps (spot + offsetting forward), futures, options.</li>
  <li><b>Real exchange rate</b> (domestic per foreign) = nominal rate × (foreign price level ÷ domestic price level). If foreign prices rise faster with the nominal rate unchanged, the foreign currency <b>appreciates in real terms</b>.</li>
</ul>
<table>
  <tr><th>Regime (most to least rigid)</th><th>Key feature</th></tr>
  <tr><td>No separate legal tender (dollarization), monetary union</td><td>Uses another currency; no independent monetary policy</td></tr>
  <tr><td><b>Currency board</b></td><td>Domestic currency fully backed by foreign reserves at a fixed rate</td></tr>
  <tr><td>Fixed parity</td><td>Peg within ±1%; discretion to defend it</td></tr>
  <tr><td>Target zone</td><td>Fixed parity with a wider band</td></tr>
  <tr><td>Crawling peg / crawling band</td><td>Peg adjusted periodically (e.g. for inflation)</td></tr>
  <tr><td>Managed float</td><td>Intervention without a target</td></tr>
  <tr><td>Independent float</td><td>Market-determined</td></tr>
</table>
<ul>
  <li><b>Marshall–Lerner condition</b>: a depreciation improves the trade balance only if export and import demand are elastic enough: ωX εX + ωM(εM − 1) &gt; 0. The <b>J-curve</b>: the trade balance first worsens (prices adjust faster than volumes), then improves.</li>
  <li><b>Absorption approach</b>: trade balance = income − domestic absorption (spending); a depreciation helps only if income rises relative to spending.</li>
</ul>

<h3>8. Exchange rate calculations</h3>
<p>A quote "A/B" or "USD/EUR = 1.10" means <b>1.10 units of the price currency (USD) per one unit of the base currency (EUR)</b>.</p>
<ul>
  <li><b>Percentage change</b> of the base currency = S1/S0 − 1. The price currency changes by S0/S1 − 1 (not the same magnitude).</li>
  <li><b>Cross rates</b>: chain the quotes so the common currency cancels: JPY/EUR = JPY/USD × USD/EUR.</li>
  <li><b>Forward points</b> = (F − S) × 10,000 for most pairs. Positive points → base currency at a forward <b>premium</b>.</li>
</ul>
<div class="formula">Covered interest parity: F(P/B) = S(P/B) × (1 + i_P × τ) ÷ (1 + i_B × τ)</div>
<div class="ex"><b>Example:</b> S = 1.1000 USD/EUR, i(USD) = 5%, i(EUR) = 3%, one year: F = 1.10 × 1.05 ÷ 1.03 = 1.1214. The higher-yielding currency (USD) trades at a forward discount; the EUR at a premium.</div>
<div class="ex"><b>Example:</b> USD/EUR rises from 1.10 to 1.21. The euro appreciated 10% (1.21/1.10 − 1); the dollar depreciated 9.09% (1.10/1.21 − 1).</div>
<div class="how"><b>How it's tested:</b> identify the market structure from its features; shutdown and pricing rules; HHI; indicator classification; multiplier and neutral-rate calculations; policy mix outcomes; geopolitical archetypes; trading blocs; cross rates, % changes and forward rates.</div>
<div class="key"><b>Carry forward to Level III</b>: the business cycle, policy mix and neutral rate feed capital market expectations; FX forward pricing and interest parity feed currency management.</div>
<div class="trap"><b>Trap:</b> in "USD/EUR = 1.10" the EUR is the <b>base</b> currency. An increase means the euro strengthened.</div>
`;

window.QB_HARD.l1eco = [
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
  ["Which of the following is a leading economic indicator?",
    ["Initial claims for unemployment insurance", "Average duration of unemployment in weeks", "Industrial production"],
    "Initial claims lead the cycle. Average duration of unemployment is lagging; industrial production is coincident.", "r"],
  ["Which of the following is a lagging economic indicator?",
    ["The ratio of inventories to sales", "Building permits for new houses", "Employees on non-farm payrolls"],
    "The inventory-to-sales ratio lags. Building permits lead; payroll employment is coincident.", "r"],
  ["Early in a contraction, as sales fall unexpectedly, the inventory-to-sales ratio typically:",
    ["Rises, prompting firms to cut production", "Falls, prompting firms to increase orders", "Stays constant, as firms adjust instantly"],
    "Unsold goods pile up, raising the ratio; firms then cut production to reduce inventories, deepening the slowdown.", "r"],
  ["When discouraged workers stop looking for jobs during a recession, the measured unemployment rate:",
    ["Understates the weakness of the labour market", "Overstates the weakness of the labour market", "Is unaffected, because they remain in the labour force"],
    "Discouraged workers leave the labour force, so they aren't counted as unemployed, lowering the measured rate.", "r"],
  ["If the marginal propensity to consume is 0.8 and the tax rate is 25%, the fiscal multiplier is closest to:",
    ["2.5", "5.0", "1.25"],
    "Multiplier = 1 ÷ [1 − MPC(1 − t)] = 1 ÷ [1 − 0.8 × 0.75] = 1 ÷ 0.40 = 2.5. (5.0 ignores taxes.)", "c"],
  ["A government raises spending and taxes by the same amount. The effect on aggregate demand is most likely:",
    ["Positive, because spending has a larger multiplier than taxes", "Zero, because the two changes exactly offset", "Negative, because higher taxes reduce consumption by more than spending adds"],
    "Spending enters aggregate demand in full, while part of a tax increase comes out of saving rather than consumption, so the balanced-budget multiplier is positive.", "r"],
  ["Ricardian equivalence implies that a debt-financed tax cut will:",
    ["Barely change spending, as households save for future taxes", "Strongly increase consumption and aggregate demand", "Lower interest rates by reducing the amount the government must borrow"],
    "If households expect higher future taxes to repay the debt, they save the tax cut, so aggregate demand barely changes.", "r"],
  ["The time it takes a government to realize that the economy has slowed is the:",
    ["Recognition lag", "Action lag", "Impact lag"],
    "Recognition lag: identifying the problem. Action lag: enacting policy. Impact lag: time for the policy to affect the economy.", "r"],
  ["An economy's trend real growth rate is 2% and the central bank's inflation target is 2%. If the policy rate is 3%, monetary policy is most likely:",
    ["Expansionary", "Contractionary", "Neutral"],
    "Neutral rate = trend growth + inflation target = 4%. A policy rate of 3% is below neutral, so policy is expansionary.", "c"],
  ["With a reserve requirement of 10%, the money multiplier is:",
    ["10", "9", "0.1"],
    "Money multiplier = 1 ÷ reserve requirement = 1 ÷ 0.10 = 10. A new $1,000 deposit can support up to $10,000 of deposits.", "c"],
  ["According to the quantity theory of money, if velocity and real output are constant, a 5% increase in the money supply leads to:",
    ["A 5% increase in the price level", "A 5% increase in real output", "No change in the price level"],
    "MV = PY. With V and Y fixed, P rises in proportion to M.", "r"],
  ["Monetary policy is likely to be least effective when:",
    ["Rates are near zero and households hoard cash", "Inflation is above the central bank's target", "The central bank is independent and credible"],
    "In a liquidity trap, more money doesn't lower rates further or raise spending, because people simply hold the extra cash.", "r"],
  ["Expansionary fiscal policy combined with restrictive monetary policy is most likely to produce:",
    ["Higher real interest rates and a larger public sector share of GDP", "Lower interest rates and a smaller public sector share", "Lower real interest rates and a growing private sector share of GDP"],
    "Government borrowing rises while money is tight, pushing up real rates and crowding out private activity.", "r"],
  ["A country cooperates with other nations but pursues nationalist, inward-looking economic policies. Which geopolitical archetype does it fit?",
    ["Bilateralism", "Multilateralism", "Hegemony"],
    "Cooperation + nationalism = bilateralism. Cooperation + globalization = multilateralism. Non-cooperation + globalization = hegemony; non-cooperation + nationalism = autarky.", "r"],
  ["Restricting a rival country's access to international payment systems and capital markets is an example of a geopolitical:",
    ["Financial tool", "National security tool", "Economic tool"],
    "Financial tools include currency reserve status, access to financial markets and sanctions. Economic tools include tariffs, quotas and trade agreements.", "r"],
  ["A geopolitical risk that is known and evolves gradually over time, such as growing cyber threats, is best classified as:",
    ["Thematic risk", "Event risk", "Exogenous risk"],
    "Event risks have known dates (elections); exogenous risks are sudden and unanticipated; thematic risks are known and expand over time.", "r"],
  ["Country A needs 1 hour to make a unit of cloth and 2 hours for a unit of wine. Country B needs 3 hours and 4 hours. Which statement is correct?",
    ["Country B has a comparative advantage in wine", "Country A has a comparative advantage in both goods", "Country B should specialize in cloth"],
    "Opportunity cost of wine: A = 2 cloth; B = 4/3 cloth. B gives up less, so it has the comparative advantage in wine (A has absolute advantage in both, comparative advantage in cloth).", "c"],
  ["According to the Heckscher–Ohlin model, a capital-abundant country will tend to export:",
    ["Capital-intensive goods", "Labour-intensive goods", "Goods in which its labour productivity is highest"],
    "Heckscher–Ohlin bases comparative advantage on factor endowments. Labour productivity differences are the Ricardian model.", "r"],
  ["For a small country, imposing a tariff on imports most likely results in:",
    ["A deadweight loss and a net welfare loss for the country", "A net welfare gain from improved terms of trade with partners", "Lower domestic prices for the imported good"],
    "A small country can't affect world prices, so the tariff raises domestic prices, creates deadweight losses and reduces national welfare. Large countries may gain via terms of trade.", "r"],
  ["A key difference between an import quota and a tariff is that, with a quota:",
    ["Quota rents may go to license holders, not the government", "The domestic price falls below the world price for the good", "The government always collects the revenue"],
    "A tariff generates government revenue; under a quota the price premium (quota rent) goes to whoever holds the import licenses, unless they're auctioned.", "r"],
  ["A customs union differs from a free trade area because its members also:",
    ["Adopt a common trade policy toward non-members", "Allow free movement of labour and capital", "Share a common currency"],
    "Free trade area → customs union (common external policy) → common market (factor mobility) → economic union → monetary union.", "r"],
  ["A country's private saving equals its private investment, and the government runs a large budget deficit. The country will most likely have:",
    ["A current account deficit", "A current account surplus", "A balanced current account"],
    "CA = (S − I) + (T − G). With S = I and T − G negative, the current account is in deficit.", "c"],
  ["Under a currency board arrangement, the monetary authority:",
    ["Issues currency only if backed by reserves at a fixed rate", "Lets the exchange rate float freely, without any intervention", "Uses another country's currency as its legal tender"],
    "A currency board commits by law to exchange domestic currency at a fixed rate, fully backed by reserves. Using another country's currency is dollarization.", "r"],
  ["A currency depreciation will improve a country's trade balance only if:",
    ["Export and import demand are sufficiently price-elastic", "Export and import demand are both perfectly price-inelastic", "The government runs a fiscal surplus"],
    "This is the Marshall–Lerner condition: ωX εX + ωM(εM − 1) > 0. Initially the balance may worsen (J-curve).", "r"],
  ["The nominal rate stays at 1.10 USD per EUR. Over the year, eurozone inflation is 3% and US inflation is 1%. From a US perspective, the euro has:",
    ["Appreciated in real terms", "Depreciated in real terms", "Not changed in real terms"],
    "Real rate (USD per EUR) = nominal × (P_EUR ÷ P_USD). Eurozone prices rose faster, so the real value of the euro rose about 2%.", "c"],
  ["Given 1.0800 USD per EUR and 150.00 JPY per USD, the JPY/EUR cross rate is closest to:",
    ["162.00", "138.89", "151.08"],
    "JPY/EUR = JPY/USD × USD/EUR = 150.00 × 1.0800 = 162.00 yen per euro.", "c"],
  ["The USD/EUR rate (USD per EUR) rises from 1.10 to 1.21. The US dollar has:",
    ["Depreciated 9.09% against the euro", "Depreciated 10.00% against the euro", "Appreciated 10.00% against the euro"],
    "The euro (base) rose 1.21/1.10 − 1 = 10%. The dollar (price currency) changed by 1.10/1.21 − 1 = −9.09%.", "c"],
  ["Spot is 1.1000 USD per EUR. One-year interest rates are 5% in USD and 3% in EUR. The no-arbitrage one-year forward rate (USD per EUR) is closest to:",
    ["1.1214", "1.0790", "1.1220"],
    "Covered interest parity: F = S × (1 + i_USD) ÷ (1 + i_EUR) = 1.10 × 1.05 ÷ 1.03 = 1.1214. 1.1220 is the linear approximation; 1.0790 inverts the rates.", "c"],
  ["If the base currency trades at a forward premium, the forward points are:",
    ["Positive", "Negative", "Zero"],
    "Forward points = F − S (scaled). A forward premium on the base currency means F > S, so points are positive.", "r"]
];

window.GLOSSARY.push(
  ["Shutdown and exit rules", "Short run: shut down if P < AVC. Long run: exit if P < ATC. Breakeven at P = ATC.", "l1eco"],
  ["Herfindahl–Hirschman Index (HHI)", "Sum of squared market shares. Unlike the N-firm concentration ratio, it rises when large firms merge.", "l1eco"],
  ["Kinked demand curve", "Oligopoly model: rivals match price cuts but not increases, so prices are sticky.", "l1eco"],
  ["Fiscal multiplier", "1 ÷ [1 − MPC(1 − t)]. The balanced-budget multiplier is positive.", "l1eco"],
  ["Ricardian equivalence", "Households save debt-financed tax cuts in anticipation of future taxes, so aggregate demand is unchanged.", "l1eco"],
  ["Neutral policy rate", "Trend real growth + inflation target. A policy rate below it is expansionary; above it, contractionary.", "l1eco"],
  ["Quantity theory of money", "MV = PY. With constant velocity and output, money growth drives inflation.", "l1eco"],
  ["Fisher effect", "Nominal rate ≈ real rate + expected inflation (+ an inflation risk premium).", "l1eco"],
  ["Geopolitical archetypes", "Cooperation + globalization = multilateralism; cooperation + nationalism = bilateralism; non-cooperation + globalization = hegemony; non-cooperation + nationalism = autarky.", "l1eco"],
  ["Comparative advantage", "Producing a good at a lower opportunity cost than another country. Ricardian: labour productivity; Heckscher–Ohlin: factor endowments.", "l1eco"],
  ["Trading blocs", "FTA → customs union (common external tariffs) → common market (free factor movement) → economic union → monetary union.", "l1eco"],
  ["Current account identity", "CA = (S − I) + (T − G): a current account deficit reflects saving below investment plus the fiscal deficit.", "l1eco"],
  ["Marshall–Lerner condition", "Depreciation improves the trade balance if ωX εX + ωM(εM − 1) > 0. The J-curve shows an initial worsening.", "l1eco"],
  ["Covered interest parity", "F(P/B) = S(P/B) × (1 + i_P τ) ÷ (1 + i_B τ). The higher-yield currency trades at a forward discount.", "l1eco"],
  ["Exchange rate quote", "USD/EUR = 1.10 means 1.10 USD (price currency) per 1 EUR (base currency). Base change = S1/S0 − 1.", "l1eco"]
);
