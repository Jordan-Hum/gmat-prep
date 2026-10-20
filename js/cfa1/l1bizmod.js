// CFA Level I · Corporate Issuers · Learning module 7: Business Models.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1bizmod = `
<p class="syl">CFA Level I · Corporate Issuers · Learning module 7 of 7 · Business Models</p>
<p>A <b>business model</b> describes how a company creates value for customers and captures some of it as profit: who it serves, what it offers, how it delivers it, how it charges for it, and what that implies for costs, margins and risk. Analysts start every company analysis by understanding the business model. This lesson covers the elements, pricing strategies, common modern models (platforms, subscriptions, freemium), and the financial consequences, especially operating leverage and unit economics.</p>

<h3>1. Elements of a business model</h3>
<ul>
  <li><b>Customers and markets</b>: who the customers are (consumers: B2C; businesses: B2B; government), which segments and geographies.</li>
  <li><b>Value proposition</b>: the product or service offered and why customers choose it over alternatives (price, quality, convenience, brand, features).</li>
  <li><b>Value chain / delivery</b>: the activities, assets, suppliers and partners the company uses to produce and deliver, and which activities it does in-house versus outsources.</li>
  <li><b>Channel strategy</b>: <b>direct</b> (own stores, sales force, website), <b>indirect</b> (wholesalers, distributors, retailers, agents), or <b>omnichannel</b> (combining physical and digital).</li>
  <li><b>Pricing and revenue model</b>: how it charges and earns money (below).</li>
  <li><b>Cost structure and profitability</b>: fixed vs variable costs, margins, scale economies.</li>
</ul>

<h3>2. Pricing strategies and revenue models <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Strategy</th><th>Description</th></tr>
  <tr><td><b>Value-based pricing</b></td><td>Price set by the value customers perceive; possible with differentiated products and pricing power</td></tr>
  <tr><td><b>Cost-based (cost-plus) pricing</b></td><td>Price = cost + markup; common for commodity-like products with little pricing power</td></tr>
  <tr><td><b>Price discrimination</b></td><td>Different prices for different customers or situations: <b>tiered pricing</b> (volume discounts), <b>dynamic pricing</b> (peak vs off-peak, e.g. airlines, ride-hailing), auction pricing</td></tr>
  <tr><td><b>Penetration pricing</b></td><td>Low initial prices to win market share quickly (often for network businesses), raising prices later</td></tr>
  <tr><td><b>Bundling</b></td><td>Selling products together at a combined price</td></tr>
  <tr><td><b>Razors-and-blades</b></td><td>Sell the base product cheaply and profit from consumables (printers and ink, consoles and games)</td></tr>
  <tr><td><b>Freemium</b></td><td>Basic version free; revenue from users who upgrade to premium features</td></tr>
  <tr><td><b>Subscription</b></td><td>Recurring fees for ongoing access (software, streaming); predictable revenue</td></tr>
  <tr><td><b>Licensing / franchising</b></td><td>Others use the company's intellectual property or brand in exchange for fees and royalties; asset-light</td></tr>
  <tr><td><b>Advertising-supported</b></td><td>Free to users, paid for by advertisers (many media and social platforms)</td></tr>
</table>

<h3>3. Business model types</h3>
<ul>
  <li><b>Platform (marketplace) businesses</b> connect two or more groups (buyers and sellers, riders and drivers) and earn fees on transactions. They benefit from <b>network effects</b>: each user's value rises as more users join, which can lead to winner-take-most markets. They often need heavy early investment to reach critical mass.</li>
  <li><b>Asset-light</b> models outsource capital-intensive activities (manufacturing, logistics), lowering fixed investment but relying on partners.</li>
  <li><b>Crowdsourcing</b> uses contributions from users (content, reviews, ideas, funding).</li>
  <li><b>E-commerce and omnichannel</b> retail; <b>hybrid</b> models combining products and services.</li>
  <li>Vertical integration (owning more of the value chain) vs specialization and outsourcing.</li>
</ul>

<h3>4. Financial implications <span class="hot">Highly tested</span></h3>
<h4>Operating leverage</h4>
<p>A business with mostly <b>fixed costs</b> (software, telecoms, airlines) has high <b>operating leverage</b>: once fixed costs are covered, extra sales add a lot of profit; but a fall in sales cuts profit sharply.</p>
<div class="formula">Degree of operating leverage (DOL) = %Δ EBIT / %Δ sales = contribution margin / EBIT, where contribution margin = sales − variable costs</div>
<div class="ex"><b>Example:</b> Sales $1,000, variable costs $600, fixed costs $300. Contribution margin = $400; EBIT = $100. DOL = 400/100 = 4: a 10% rise in sales raises EBIT by about 40% (and a 10% fall cuts it by 40%).</div>
<h4>Unit economics and scalability</h4>
<ul>
  <li><b>Unit economics</b>: revenue and cost per unit or per customer. For subscription and platform businesses, compare a customer's <b>lifetime value</b> (contribution per period × expected periods retained) with the <b>customer acquisition cost</b>. Example: $20 a month at a 75% margin for an average 30 months = $450 lifetime contribution vs a $150 acquisition cost.</li>
  <li><b>Scalability</b>: models with low marginal costs (software, platforms) can grow revenue much faster than costs.</li>
  <li>Profitability measures: gross margin (pricing power and production costs), operating margin (scale and overheads).</li>
</ul>
<h4>Risks</h4>
<ul>
  <li><b>Macro risk</b> (economic cycle, rates, currencies), <b>business / industry risk</b> (competition, technology, regulation, customer concentration), and <b>company-specific risk</b> (execution, key people, operating leverage). <b>Financial risk</b> comes on top from leverage.</li>
  <li>New or unproven business models carry more uncertainty about future profitability.</li>
</ul>

<div class="how"><b>How it's tested:</b> naming the pricing approach or business model described (razors-and-blades, freemium, penetration, tiered or dynamic pricing, platform with network effects), channel strategy, operating leverage effects, and unit economics reasoning.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe the elements of a business model, including value proposition and channel strategy.</li>
  <li>Identify pricing strategies and revenue models.</li>
  <li>Explain platform businesses and network effects, and asset-light models.</li>
  <li>Analyze operating leverage, unit economics and business model risks.</li>
</ul></div>
`;

window.QB_HARD.l1bizmod = [
  ["A company sells printers at close to cost and earns most of its profit from replacement ink cartridges. This pricing approach is:",
    ["Razors-and-blades", "Freemium", "Value-based pricing"],
    "Razors-and-blades pricing sells the base product cheaply and profits from repeat purchases of consumables.", "r"],
  ["A platform business whose value to each user increases as more users join benefits from:",
    ["Network effects", "Economies of scope", "Operating leverage"],
    "Network effects make a product more valuable with each additional user, often leading to winner-take-most markets.", "r"],
  ["A company with a high proportion of fixed costs in its cost structure most likely has:",
    ["High operating leverage, so EBIT is very sensitive to sales", "Low business risk, because its costs are largely predictable", "Low operating leverage and stable operating income"],
    "Fixed costs magnify the effect of sales changes on operating income (DOL = %ΔEBIT ÷ %ΔSales), increasing business risk.", "r"],
  ["An airline charges much higher fares for flights on public holidays than for midweek flights. This is an example of:",
    ["Dynamic pricing", "Cost-plus pricing", "Bundling"],
    "Dynamic pricing (a form of price discrimination) varies prices with demand at different times.", "r"],
  ["A software company offers a basic version of its product free of charge and charges for advanced features. This revenue model is:",
    ["Freemium", "Razors-and-blades", "Penetration pricing"],
    "Freemium: free basic tier, paid premium tier.", "r"],
  ["A new ride-sharing platform charges very low prices to attract riders and drivers quickly, planning to raise prices later. This is:",
    ["Penetration pricing", "Value-based pricing", "Tiered pricing"],
    "Penetration pricing sacrifices short-term margins to gain share quickly, common for businesses that need network effects.", "r"],
  ["A company that sets prices by adding a fixed markup to its production cost is using:",
    ["Cost-plus pricing", "Value-based pricing", "Dynamic pricing"],
    "Cost-based (cost-plus) pricing is typical where products are similar and pricing power is limited.", "r"],
  ["A manufacturer that sells mainly through wholesalers and retailers, rather than its own stores or website, uses:",
    ["An indirect channel strategy", "A direct channel strategy", "An omnichannel strategy"],
    "Selling through intermediaries is an indirect channel; omnichannel combines physical and digital channels.", "r"],
  ["A restaurant chain lets independent operators use its brand and systems in exchange for fees and royalties. This model is:",
    ["Franchising", "Crowdsourcing", "Vertical integration"],
    "Franchising is an asset-light way to expand using others' capital, with fees and royalties as revenue.", "r"],
  ["A company has sales of $1,000, variable costs of $600 and fixed costs of $300. If sales rise 10%, its operating income will rise by approximately:",
    ["40%", "10%", "25%"],
    "Contribution margin = 400; EBIT = 100; DOL = 4. A 10% sales increase raises EBIT by about 4 × 10% = 40% (to $140).", "c"],
  ["A subscription business earns $20 a month per customer at a 75% contribution margin, and customers stay an average of 30 months. If it costs $150 to acquire a customer, the business:",
    ["Earns $450 per $150 of acquisition cost", "Loses money on each new customer", "Breaks even only after the full 30 months"],
    "Lifetime contribution = 20 × 0.75 × 30 = $450, three times the $150 acquisition cost; the cost is recovered in 10 months.", "c"],
  ["Which type of business is most likely to have high operating leverage?",
    ["A software firm with mostly fixed costs", "A distributor with mostly variable costs", "A consulting firm paying staff per project"],
    "High fixed costs relative to variable costs mean profits swing strongly with sales.", "r"],
];

window.GLOSSARY.push(
  ["Value proposition", "The offering and why target customers choose it over alternatives.", "l1bizmod"],
  ["Penetration pricing", "Low initial prices to build share quickly, raised later.", "l1bizmod"],
  ["Freemium", "Free basic version; revenue from paid upgrades.", "l1bizmod"],
  ["Degree of operating leverage", "%ΔEBIT/%Δsales = contribution margin/EBIT.", "l1bizmod"],
  ["Unit economics", "Revenue and cost per unit or customer; e.g. lifetime value vs acquisition cost.", "l1bizmod"]
);
