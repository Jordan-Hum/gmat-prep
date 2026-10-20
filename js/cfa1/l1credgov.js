// CFA Level I · Fixed Income · Learning module 15: Credit Analysis for Government Issuers.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1credgov = `
<p class="syl">CFA Level I · Fixed Income (11–14%) · Learning module 15 of 19 · Credit Analysis for Government Issuers</p>
<p>Governments default less often than companies, but they do default, and they can't be forced into bankruptcy. This lesson covers the qualitative and quantitative factors used to assess sovereign credit, why local-currency and foreign-currency debt are rated differently, and how to analyze local government general obligation and revenue bonds.</p>

<h3>1. Sovereign credit: ability and willingness to pay</h3>
<ul>
  <li>Sovereign analysis looks at both the government's <b>ability</b> to pay (economy, finances, external position) and its <b>willingness</b> to pay. Because of sovereign immunity, creditors can't easily force a government to pay, so willingness matters more than for companies.</li>
  <li>Debt in the government's <b>own currency</b> is usually rated <b>higher</b> than its foreign-currency debt: it can raise taxes or create money to pay local-currency debt, but must earn or buy foreign currency (e.g. through exports or reserves) to pay foreign debt.</li>
</ul>

<h3>2. Qualitative factors <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Factor</th><th>What analysts look at</th></tr>
  <tr><td><b>Institutional</b></td><td>Effective, stable policymaking; rule of law and property rights; low corruption; checks and balances; history of honouring debts (willingness to pay)</td></tr>
  <tr><td><b>Economic</b></td><td>Income per capita (a wide tax base), growth prospects, diversification (not dependent on one industry or commodity)</td></tr>
  <tr><td><b>External</b></td><td>Whether its currency is a <b>reserve currency</b> (USD, EUR, JPY, GBP…), exchange rate flexibility, the current account balance, foreign exchange reserves and external debt</td></tr>
  <tr><td><b>Fiscal</b></td><td>Debt burden and trend, deficits, interest costs relative to revenue, ability to raise taxes or cut spending</td></tr>
  <tr><td><b>Monetary</b></td><td>Central bank independence and credibility, inflation record, an effective monetary policy framework</td></tr>
</table>
<p>Reserve-currency status gives a government much more flexibility: global investors want to hold its debt, so it can borrow more at lower rates.</p>

<h3>3. Quantitative factors</h3>
<table>
  <tr><th>Measure</th><th>Higher means</th></tr>
  <tr><td>Government debt / GDP</td><td>Weaker</td></tr>
  <tr><td>Budget deficit / GDP; primary deficit (excluding interest) / GDP</td><td>Weaker</td></tr>
  <tr><td>Interest expense / government revenue</td><td>Weaker (debt affordability)</td></tr>
  <tr><td>Current account deficit / GDP; external debt / current account receipts</td><td>Weaker (external vulnerability)</td></tr>
  <tr><td>FX reserves / short-term external debt</td><td>Stronger (liquidity)</td></tr>
  <tr><td>GDP growth, GDP per capita</td><td>Stronger</td></tr>
</table>
<div class="ex"><b>Example:</b> government debt $1.2 trillion, GDP $1.6 trillion → debt/GDP = <b>75%</b>. Interest $45 billion, revenue $400 billion → interest/revenue = <b>11.25%</b>. FX reserves $90 billion, short-term external debt $60 billion → <b>1.5×</b> coverage. A total deficit of 3% of GDP with interest of 2.5% of GDP means a primary deficit of <b>0.5%</b> of GDP.</div>

<h3>4. Non-sovereign (local) government debt <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Type</th><th>Repaid from</th><th>Analysis</th></tr>
  <tr><td><b>General obligation (GO) bonds</b></td><td>The issuer's general taxing power</td><td>Similar to sovereign analysis, but local governments <b>can't create money</b> and often must balance their operating budgets. Look at the tax base and economy, debt per capita, debt / personal income, budget balance, reserves, and unfunded pension and other post-employment liabilities</td></tr>
  <tr><td><b>Revenue bonds</b></td><td>Revenue from a specific project (toll road, airport, water utility, hospital)</td><td>Analyzed like a project or company: demand, pricing, costs and the <b>debt service coverage ratio</b>. Riskier than the same issuer's GO bonds</td></tr>
</table>
<div class="formula">Debt service coverage ratio (DSCR) = net revenue available for debt service / debt service (interest + principal)</div>
<div class="ex"><b>Example:</b> a toll road earns revenue of $120 million with operating costs of $70 million; annual debt service is $40 million. DSCR = (120 − 70) / 40 = <b>1.25×</b>. A rate covenant might require tolls high enough to keep DSCR above a minimum, and an additional bonds test limits new debt unless coverage stays above a set level.</div>
<ul>
  <li>Agency (quasi-government) bonds are analyzed on their own finances plus the likelihood of government support; supranational bonds on the strength and support of member countries.</li>
</ul>

<div class="how"><b>How it's tested:</b> classifying a factor as institutional, economic, external, fiscal or monetary, interpreting sovereign ratios (debt/GDP, interest/revenue, reserves), local vs foreign currency ratings, reserve-currency status, GO vs revenue bonds, and calculating DSCR.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Explain ability and willingness to pay and why local-currency debt is rated higher.</li>
  <li>Describe the qualitative factors (institutional, economic, external, fiscal, monetary) in sovereign analysis.</li>
  <li>Calculate and interpret key sovereign ratios.</li>
  <li>Compare the analysis of GO bonds and revenue bonds and calculate a debt service coverage ratio.</li>
</ul></div>
`;

window.QB_HARD.l1credgov = [
  ["Sovereign bonds issued in the government's own currency usually have higher credit ratings than its foreign-currency bonds because:",
    ["The government can tax and print its own currency", "Foreign-currency bonds have shorter maturities", "Domestic investors never sell their government bonds"],
    "A sovereign controls its own currency (and can raise taxes), so local-currency default is less likely than foreign-currency default.", "r"],
  ["A municipal revenue bond is repaid primarily from:",
    ["The revenues of the project it financed", "The general taxing power of the issuer", "Transfers from the federal government"],
    "Revenue bonds rely on the project's cash flows (e.g. tolls), typically assessed with a debt service coverage ratio. General obligation bonds rely on taxes.", "r"],
  ["A country's government debt is $1.2 trillion and its GDP is $1.6 trillion. Its debt-to-GDP ratio is:",
    ["75%", "133%", "25%"],
    "1.2 / 1.6 = 75%. 133% inverts the ratio.", "c"],
  ["A government pays $45 billion of interest and collects $400 billion of revenue. Its interest-to-revenue ratio is closest to:",
    ["11.3%", "8.9%", "88.9%"],
    "45 / 400 = 11.25%. Higher values mean the debt is less affordable.", "c"],
  ["A government runs a total budget deficit of 3% of GDP, and its interest payments equal 2.5% of GDP. Its primary balance is:",
    ["A deficit of 0.5% of GDP", "A deficit of 5.5% of GDP", "A surplus of 0.5% of GDP"],
    "Primary balance excludes interest: −3% + 2.5% = −0.5% of GDP.", "c"],
  ["In sovereign credit analysis, central bank independence and a credible inflation record are part of the:",
    ["Monetary assessment", "Institutional assessment", "External assessment"],
    "Monetary flexibility and credibility support a sovereign's ability to manage its economy and debt.", "r"],
  ["A country's currency is widely held as a reserve currency by other central banks. For its sovereign credit, this is:",
    ["A strength, giving it more flexibility", "A weakness, adding to its currency risk", "Irrelevant to its credit quality"],
    "Reserve-currency status lets a government borrow more cheaply and with more flexibility.", "r"],
  ["Which ratio most directly measures a sovereign's ability to meet short-term foreign currency obligations?",
    ["Reserves to short-term foreign debt", "Government debt to nominal GDP", "Interest expense to tax revenue"],
    "Reserves relative to external debt due soon measure external liquidity.", "r"],
  ["Compared with a national government, a city's ability to service its general obligation debt is more limited mainly because the city:",
    ["Can't create money", "Can't raise taxes at all", "Can't issue revenue bonds"],
    "Local governments can tax but not create money, and many must balance operating budgets.", "r"],
  ["A toll road has revenue of $120 million, operating costs of $70 million and annual debt service of $40 million. Its debt service coverage ratio is:",
    ["1.25×", "3.00×", "1.75×"],
    "(120 − 70) / 40 = 1.25×. 3.00× uses gross revenue.", "c"],
  ["A sovereign with a long history of rule of law, stable politics and no past defaults would score well on the:",
    ["Institutional assessment", "Fiscal and debt assessment", "Economic assessment"],
    "Institutional factors include rule of law, stability and willingness to pay.", "r"],
  ["Compared with corporate credit analysis, sovereign analysis puts more weight on willingness to pay because:",
    ["Creditors can't easily force payment", "Sovereigns never default on their debt", "Sovereigns have no tax revenue"],
    "Sovereign immunity means bondholders have limited legal recourse.", "r"],
];

window.GLOSSARY.push(
  ["Sovereign assessment factors", "Institutional, economic, external, fiscal and monetary.", "l1credgov"],
  ["Local vs foreign currency rating", "Local-currency debt is rated higher: the government can tax and create its own currency.", "l1credgov"],
  ["Debt service coverage ratio", "Net revenue available for debt service / debt service.", "l1credgov"]
);
