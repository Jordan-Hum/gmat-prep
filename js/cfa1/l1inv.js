// CFA Level I · Financial Statement Analysis · Learning module 6: Analysis of Inventories.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1inv = `
<p class="syl">CFA Level I · Financial Statement Analysis · Learning module 6 of 12 · Analysis of Inventories</p>
<p>For manufacturers and retailers, inventory is often the largest current asset and cost of goods sold the largest expense. The choice of cost flow method (FIFO, LIFO, weighted average) changes reported profit, taxes, asset values and ratios when prices change, so analysts must be able to compare companies using different methods. This lesson covers what goes into inventory cost, the cost flow methods and their effects, converting LIFO to FIFO with the LIFO reserve, LIFO liquidations, write-downs under IFRS and US GAAP, and inventory ratios.</p>

<h3>1. What goes into inventory cost</h3>
<table>
  <tr><th>Included (capitalized in inventory)</th><th>Excluded (expensed as incurred)</th></tr>
  <tr><td>Purchase cost (net of discounts), import duties, transport in<br>Conversion costs: direct labour and allocated production overheads<br>Other costs to bring inventory to its present location and condition</td><td><b>Abnormal</b> waste (materials, labour, overheads)<br><b>Storage</b> costs (unless needed between production stages)<br><b>Administrative</b> overheads<br><b>Selling</b> costs</td></tr>
</table>
<p>Capitalizing a cost delays its effect on profit until the goods are sold; expensing it reduces profit now.</p>

<h3>2. Cost flow methods <span class="hot">Highly tested</span></h3>
<p>The basic identity: <b>beginning inventory + purchases = cost of goods available = COGS + ending inventory</b>. The method decides how cost of goods available is split between COGS and ending inventory.</p>
<table>
  <tr><th>Method</th><th>COGS uses</th><th>Ending inventory uses</th><th>Allowed</th></tr>
  <tr><td><b>Specific identification</b></td><td>Actual cost of the items sold</td><td>Actual cost of items left</td><td>IFRS and US GAAP (for unique, non-interchangeable items)</td></tr>
  <tr><td><b>FIFO</b> (first in, first out)</td><td><b>Oldest</b> costs</td><td><b>Most recent</b> costs</td><td>IFRS and US GAAP</td></tr>
  <tr><td><b>Weighted average cost</b></td><td>Average cost of goods available</td><td>Average cost</td><td>IFRS and US GAAP</td></tr>
  <tr><td><b>LIFO</b> (last in, first out)</td><td><b>Most recent</b> costs</td><td><b>Oldest</b> costs</td><td><b>US GAAP only</b> (prohibited under IFRS)</td></tr>
</table>
<div class="ex"><b>Worked example:</b> Beginning inventory 100 units at $10; purchases 200 units at $12, then 100 units at $15. 300 units sold at $25 (revenue $7,500). Goods available: 400 units costing $4,900.
<table>
  <tr><th></th><th>COGS</th><th>Ending inventory (100 units)</th><th>Gross profit</th></tr>
  <tr><td>FIFO</td><td>100 × 10 + 200 × 12 = 3,400</td><td>100 × 15 = 1,500</td><td>4,100</td></tr>
  <tr><td>LIFO (periodic)</td><td>100 × 15 + 200 × 12 = 3,900</td><td>100 × 10 = 1,000</td><td>3,600</td></tr>
  <tr><td>Weighted average</td><td>300 × 12.25 = 3,675</td><td>1,225</td><td>3,825</td></tr>
</table></div>
<ul>
  <li><b>Periodic</b> systems assign costs at period-end; <b>perpetual</b> systems update with each sale. FIFO gives the same answer under both; LIFO and weighted average can differ.</li>
</ul>
<h4>Effects when prices are rising (and quantities stable or growing)</h4>
<table>
  <tr><th></th><th>LIFO</th><th>FIFO</th></tr>
  <tr><td>COGS</td><td>Higher (current costs)</td><td>Lower</td></tr>
  <tr><td>Gross profit, net income</td><td>Lower</td><td>Higher</td></tr>
  <tr><td>Income taxes</td><td>Lower</td><td>Higher</td></tr>
  <tr><td>Operating cash flow</td><td><b>Higher</b> (lower taxes)</td><td>Lower</td></tr>
  <tr><td>Ending inventory</td><td>Lower (old costs; understates current value)</td><td>Higher (close to current cost)</td></tr>
  <tr><td>Working capital, current ratio</td><td>Lower</td><td>Higher</td></tr>
  <tr><td>Inventory turnover</td><td>Higher</td><td>Lower</td></tr>
</table>
<p>So LIFO gives the better measure of <b>current profit</b> (COGS at recent costs), while FIFO gives the better measure of <b>balance sheet inventory</b>. Weighted average falls in between. When prices fall, the effects reverse.</p>

<h3>3. Converting LIFO to FIFO: the LIFO reserve <span class="hot">Highly tested</span></h3>
<p>US companies using LIFO must disclose the <b>LIFO reserve</b>: the difference between inventory at FIFO (or current cost) and at LIFO. Analysts use it to restate LIFO companies onto a FIFO basis for comparison.</p>
<div class="formula">Inventory_FIFO = Inventory_LIFO + LIFO reserve · COGS_FIFO = COGS_LIFO − Δ LIFO reserve</div>
<div class="formula">Net income_FIFO = Net income_LIFO + Δ LIFO reserve × (1 − t) · Retained earnings (equity) up by LIFO reserve × (1 − t); the rest (reserve × t) is a deferred tax liability (or lower cash)</div>
<div class="ex"><b>Examples:</b> LIFO COGS 1,200; LIFO reserve rose from 80 to 100 → FIFO COGS = 1,200 − 20 = 1,180.
<br>LIFO net income 800, reserve up from 300 to 380, tax rate 30% → FIFO net income = 800 + 80 × 0.70 = 856.
<br>LIFO inventory 2,000 with a reserve of 600, tax 25% → FIFO inventory 2,600; equity higher by 450; deferred tax liability (or lower cash) of 150.</div>
<p>A rising LIFO reserve signals rising prices; a falling reserve may signal falling prices or a LIFO liquidation.</p>
<h4>LIFO liquidation</h4>
<p>When a LIFO company's inventory <b>quantities fall</b> (it sells more than it buys), old, low-cost layers flow into COGS. With rising prices this <b>lowers COGS and inflates gross margin and net income</b>, but the boost is temporary and not repeatable, and it also triggers higher taxes. Liquidations can be deliberate (to manage earnings) or due to supply problems. Watch for a falling LIFO reserve and disclosures of liquidation profits.</p>

<h3>4. Measuring inventory: write-downs <span class="hot">Highly tested</span></h3>
<table>
  <tr><th></th><th>IFRS</th><th>US GAAP</th></tr>
  <tr><td>Rule</td><td><b>Lower of cost and net realizable value (NRV)</b></td><td>FIFO or weighted average: lower of cost and NRV. <b>LIFO or retail method: lower of cost or market</b></td></tr>
  <tr><td>Definition</td><td>NRV = estimated selling price − costs to complete − costs to sell</td><td>Market = <b>replacement cost</b>, but no higher than NRV (ceiling) and no lower than NRV − normal profit margin (floor)</td></tr>
  <tr><td>Reversal of write-downs</td><td><b>Allowed</b> (up to the original write-down), recognized in profit</td><td><b>Not allowed</b></td></tr>
</table>
<div class="ex"><b>Examples:</b> IFRS: cost 500, expected selling price 520, costs to complete and sell 60 → NRV 460 → write down 40 (expense, usually in COGS). Next year NRV recovers to 490 → reverse 30, carrying amount 490 (never above cost).
<br>US GAAP (LIFO): cost 50, replacement cost 42, NRV 45, normal profit margin 5 → floor 40, ceiling 45; market = 42 (inside the range) → write down to 42.</div>
<p>Exception: producers of agricultural and forest products and commodity broker-traders may measure inventory at fair value less costs to sell (or NRV), with changes in profit.</p>
<p>A write-down reduces inventory, total assets, equity and current profit; afterwards, COGS on those goods is lower and margins higher. Frequent write-downs can signal obsolete inventory or poor management.</p>

<h3>5. Inventory ratios and analysis</h3>
<div class="formula">Inventory turnover = COGS / average inventory · Days of inventory on hand (DOH) = 365 / inventory turnover · Gross margin = gross profit / revenue</div>
<ul>
  <li>High turnover (low DOH) suggests efficient inventory management, but turnover that's too high with falling sales may signal stock-outs. Low turnover may signal slow-moving or obsolete inventory.</li>
  <li>Method matters: in the example, LIFO turnover = 3,900/1,000 = 3.9× vs FIFO 3,400/1,500 = 2.3× (using ending balances). Restate LIFO companies to FIFO before comparing with IFRS peers.</li>
  <li>Compare growth rates: inventory growing faster than sales can be a warning sign. Look at the mix of raw materials, work in progress and finished goods: rising finished goods with falling sales suggests weakening demand; rising raw materials may signal expected growth.</li>
</ul>

<div class="how"><b>How it's tested:</b> computing COGS and ending inventory under FIFO, LIFO and weighted average; the direction of effects on profit, taxes, CFO, ratios; LIFO-to-FIFO conversions with the LIFO reserve; LIFO liquidation effects; NRV and LCM write-downs and reversals; which costs are capitalized.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Identify costs included in and excluded from inventory.</li>
  <li>Calculate COGS and ending inventory under each cost flow method and explain their effects when prices change.</li>
  <li>Convert LIFO financial statements to FIFO using the LIFO reserve, and explain LIFO liquidations.</li>
  <li>Apply IFRS lower of cost and NRV and US GAAP lower of cost or market, including reversals.</li>
  <li>Calculate and interpret inventory turnover, DOH and gross margin.</li>
</ul></div>
`;

window.QB_HARD.l1inv = [
  ["Which cost should be included in the cost of inventory?",
    ["Freight-in to bring goods to the warehouse", "Abnormal waste from a production fault", "Selling and distribution costs"],
    "Inventory cost includes costs to bring goods to their present location and condition. Abnormal waste, most storage, admin overhead and selling costs are expensed.", "r"],
  ["When prices are rising and inventory quantities are stable, compared with FIFO a LIFO company reports:",
    ["Higher COGS, lower taxes and lower ending inventory", "Lower COGS, higher taxes and higher ending inventory", "Higher net income and higher ending inventory"],
    "LIFO expenses the newest (highest) costs, raising COGS and lowering profit and taxes; older, cheaper costs remain in inventory.", "r"],
  ["A LIFO company reports COGS of 1,200. Its LIFO reserve rose from 80 to 100 during the year. Under FIFO, its COGS would be closest to:",
    ["1,180", "1,220", "1,100"],
    "FIFO COGS = LIFO COGS − increase in LIFO reserve = 1,200 − 20 = 1,180.", "c"],
  ["A LIFO company reduces its inventory quantities during a period of rising prices. Its gross margin will most likely be:",
    ["Temporarily inflated by older, cheaper costs in COGS", "Reduced as higher current costs flow into COGS", "Unaffected, since LIFO always charges current costs to COGS"],
    "A LIFO liquidation releases old, low-cost layers into COGS, boosting margins in a way that isn't sustainable.", "r"],
  ["Under IFRS, inventory is measured at the lower of cost and net realizable value. Previous write-downs:",
    ["Can be reversed, up to the original write-down", "Can never be reversed once recognized", "Can be reversed, but only by companies that use the LIFO method"],
    "IFRS allows reversals (limited to the original write-down). US GAAP prohibits reversals. LIFO isn't permitted under IFRS.", "r"],
  ["Which cost is expensed as incurred rather than included in the cost of inventory?",
    ["Storage of finished goods awaiting sale", "Freight paid to bring raw materials to the factory", "Allocated factory overhead"],
    "Storage costs (unless required in the production process), abnormal waste, admin overheads and selling costs are expensed.", "r"],
  ["Beginning inventory is 100 units at $10; purchases are 200 units at $12 and then 100 units at $15. If 300 units are sold, COGS under FIFO is closest to:",
    ["$3,400", "$3,900", "$3,675"],
    "FIFO sells the oldest units first: 100 × 10 + 200 × 12 = $3,400. LIFO gives $3,900 and weighted average $3,675.", "c"],
  ["Using the same data (100 at $10, 200 at $12, 100 at $15; 300 units sold), ending inventory under periodic LIFO is closest to:",
    ["$1,000", "$1,500", "$1,225"],
    "LIFO leaves the oldest costs in inventory: 100 × $10 = $1,000.", "c"],
  ["Using the same data, ending inventory under the weighted average cost method is closest to:",
    ["$1,225", "$1,000", "$1,500"],
    "Average cost = 4,900/400 = $12.25; ending inventory = 100 × 12.25 = $1,225.", "c"],
  ["Which inventory method is prohibited under IFRS?",
    ["LIFO", "FIFO", "Weighted average cost"],
    "IFRS doesn't allow LIFO; US GAAP does.", "r"],
  ["In a period of rising prices, compared with a FIFO company, an otherwise identical LIFO company will most likely report:",
    ["Higher operating cash flow", "Higher net income", "Higher ending inventory"],
    "LIFO's higher COGS lowers taxable income and taxes paid, so CFO is higher, while net income and inventory are lower.", "r"],
  ["During inflation, the inventory method that gives the most current measure of inventory on the balance sheet is:",
    ["FIFO", "LIFO", "Weighted average cost"],
    "FIFO ending inventory reflects the most recent purchase costs.", "r"],
  ["A LIFO company's inventory is $2,000 and its LIFO reserve is $600. Its inventory on a FIFO basis is:",
    ["$2,600", "$1,400", "$2,450"],
    "FIFO inventory = LIFO inventory + LIFO reserve = $2,600.", "c"],
  ["A LIFO company reports net income of $800. Its LIFO reserve rose from $300 to $380 and its tax rate is 30%. Net income on a FIFO basis is closest to:",
    ["$856", "$880", "$824"],
    "FIFO NI = LIFO NI + ΔLIFO reserve × (1 − t) = 800 + 80 × 0.7 = $856. Adding the full $80 ignores taxes.", "c"],
  ["A LIFO company with a LIFO reserve of $600 and a 25% tax rate is restated to FIFO. Its shareholders' equity increases by:",
    ["$450", "$600", "$150"],
    "Equity rises by the reserve × (1 − t) = $450; the other $150 is a deferred tax liability (or reduced cash).", "c"],
  ["A falling LIFO reserve during a period of rising prices most likely indicates:",
    ["A LIFO liquidation", "Higher inventory quantities", "A switch to FIFO"],
    "If prices are rising, the reserve should grow; a decline suggests old, cheap layers were sold as quantities fell.", "s"],
  ["Under IFRS, inventory with a cost of 500, an expected selling price of 520 and costs to complete and sell of 60 should be carried at:",
    ["460", "500", "520"],
    "Lower of cost (500) and NRV (520 − 60 = 460) = 460; a write-down of 40.", "c"],
  ["The year after an IFRS company wrote inventory down from a cost of 500 to 460, its NRV recovers to 490. The company should:",
    ["Reverse 30 of the write-down", "Reverse the full 40 write-down", "Make no adjustment"],
    "IFRS allows reversal up to the original write-down, but carrying amount = lower of cost (500) and NRV (490) = 490: a reversal of 30.", "c"],
  ["Under US GAAP, a LIFO company's inventory has a cost of 50, replacement cost of 42, NRV of 45 and a normal profit margin of 5. It should be reported at:",
    ["42", "45", "40"],
    "Market = replacement cost (42), bounded by ceiling NRV (45) and floor NRV − margin (40). Lower of cost (50) or market (42) = 42.", "c"],
  ["Under US GAAP, a previously recognized inventory write-down can be:",
    ["Never reversed", "Reversed up to original cost", "Reversed only for LIFO inventory"],
    "US GAAP prohibits reversing inventory write-downs; IFRS permits it.", "r"],
  ["A company's COGS is 3,400 and its average inventory is 1,500. Its days of inventory on hand is closest to:",
    ["161 days", "2.3 days", "107 days"],
    "Turnover = 3,400/1,500 = 2.27; DOH = 365/2.27 = 161 days.", "c"],
  ["During inflation, compared with FIFO, LIFO most likely results in a:",
    ["Higher inventory turnover ratio", "Higher current ratio overall", "Higher gross profit margin"],
    "LIFO's higher COGS and lower inventory raise turnover; lower inventory reduces the current ratio; higher COGS lowers gross margin.", "r"],
];

window.GLOSSARY.push(
  ["LIFO reserve","FIFO inventory − LIFO inventory. FIFO COGS = LIFO COGS − ΔLIFO reserve.","l1inv"],
  ["Inventory measurement","IFRS: lower of cost and NRV, reversals allowed. US GAAP: LIFO/retail use lower of cost or market; no reversals.","l1inv"],
  ["Costs excluded from inventory", "Abnormal waste, storage (unless needed in production), admin overheads, selling costs.", "l1inv"],
  ["FIFO vs LIFO in inflation", "LIFO: higher COGS, lower NI and taxes, higher CFO, lower inventory. FIFO: the reverse.", "l1inv"],
  ["LIFO liquidation", "Falling quantities push old low costs into COGS, inflating margins temporarily.", "l1inv"],
  ["LIFO to FIFO", "Inventory + reserve; COGS − Δreserve; NI + Δreserve(1 − t); equity + reserve(1 − t).", "l1inv"],
  ["US GAAP lower of cost or market", "LIFO/retail: market = replacement cost between NRV − normal margin and NRV; no reversals.", "l1inv"],
  ["Inventory turnover and DOH", "COGS/average inventory; DOH = 365/turnover.", "l1inv"]
);
