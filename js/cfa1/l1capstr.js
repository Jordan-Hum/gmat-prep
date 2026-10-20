// CFA Level I · Corporate Issuers · Learning module 6: Capital Structure.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1capstr = `
<p class="syl">CFA Level I · Corporate Issuers · Learning module 6 of 7 · Capital Structure</p>
<p><b>Capital structure</b> is the mix of debt and equity a company uses to finance its assets. Does the mix affect the company's value? This lesson builds the answer step by step: the weighted average cost of capital (WACC), the Modigliani–Miller propositions without and with taxes, then costs of financial distress (static trade-off theory), agency costs and signalling (pecking order theory), and the practical factors that shape a company's choices at each stage of its life cycle.</p>

<h3>1. Weighted average cost of capital <span class="hot">Highly tested</span></h3>
<div class="formula">WACC = w_d × r_d × (1 − t) + w_p × r_p + w_e × r_e</div>
<ul>
  <li>w = <b>target</b> (market-value) weights of debt, preferred and common equity; r = their required returns; t = marginal tax rate.</li>
  <li>Debt is multiplied by (1 − t) because interest is tax-deductible.</li>
  <li>WACC is the hurdle rate for projects with the same risk as the company as a whole.</li>
</ul>
<div class="ex"><b>Example:</b> 30% debt at a 6% pre-tax cost, 70% equity at 11%, tax rate 25%. WACC = 0.30 × 6% × 0.75 + 0.70 × 11% = 1.35% + 7.70% = 9.05%.</div>

<h3>2. Modigliani–Miller (MM) propositions <span class="hot">Highly tested</span></h3>
<p>MM's starting point is a perfect market: no taxes, no transaction or bankruptcy costs, symmetric information, and investors can borrow at the same rate as companies.</p>
<table>
  <tr><th></th><th>No taxes</th><th>With corporate taxes</th></tr>
  <tr><td><b>Proposition I</b> (value)</td><td>V_L = V_U: capital structure is <b>irrelevant</b> to value</td><td>V_L = V_U + t × D: value rises with debt because of the <b>interest tax shield</b></td></tr>
  <tr><td><b>Proposition II</b> (cost of equity)</td><td>r_e = r₀ + (r₀ − r_d)(D/E): the cost of equity rises linearly with leverage, exactly offsetting cheaper debt, so <b>WACC is constant</b></td><td>r_e = r₀ + (r₀ − r_d)(1 − t)(D/E): the cost of equity rises more slowly, so <b>WACC falls</b> as leverage rises</td></tr>
  <tr><td>Optimal structure</td><td>None (any mix is as good)</td><td>100% debt (in theory)</td></tr>
</table>
<p>r₀ = cost of capital of an all-equity (unlevered) company; r_d = cost of debt.</p>
<div class="ex"><b>Examples:</b> r₀ = 10%, r_d = 6%, D/E = 0.5. Without taxes: r_e = 10% + 4% × 0.5 = 12%. With a 25% tax rate: r_e = 10% + 4% × 0.75 × 0.5 = 11.5%.
<br>An unlevered company worth $100 million issues $40 million of debt to buy back shares, with a 25% tax rate: V_L = 100 + 0.25 × 40 = $110 million.</div>

<h3>3. Beyond MM: why companies don't use 100% debt <span class="hot">Highly tested</span></h3>
<ul>
  <li><b>Costs of financial distress</b>: <b>direct</b> costs (legal and administrative costs of bankruptcy) and <b>indirect</b> costs (lost customers and suppliers, key employees leaving, forgone investment opportunities, higher borrowing costs). Expected distress costs rise with leverage and are higher for companies with intangible, specialized assets.</li>
  <li><b>Static trade-off theory</b>: V_L = V_U + t × D − PV(costs of financial distress). The <b>optimal capital structure</b> is where the marginal benefit of the tax shield equals the marginal expected cost of distress; there WACC is at its minimum and company value at its maximum.</li>
  <li><b>Agency costs</b>: costs from conflicts between managers and owners (monitoring, bonding, residual losses). Debt can <b>reduce</b> agency costs of equity by committing managers to pay out cash (less free cash flow to waste), but creates <b>agency costs of debt</b> (conflicts with creditors).</li>
  <li><b>Asymmetric information</b>: managers know more than investors. Investors read financing choices as <b>signals</b>: issuing equity suggests managers think shares are overvalued (negative signal); issuing debt signals confidence.</li>
  <li><b>Pecking order theory</b>: managers prefer financing with the least information cost: <b>internal funds first</b> (retained earnings), then <b>debt</b>, and <b>new equity last</b>. Capital structure is then a by-product of past profitability and financing needs rather than a target.</li>
</ul>

<h3>4. Factors affecting capital structure in practice</h3>
<table>
  <tr><th>Internal factors</th><th>External factors</th></tr>
  <tr><td>Business model and stage of life cycle; stability and predictability of cash flows; type of assets (tangible assets support more debt); existing leverage and credit rating; corporate tax rate; management preferences and ownership</td><td>Market conditions (interest rates, credit spreads, investor appetite); industry norms; regulatory constraints (e.g. banks, utilities); access to capital markets</td></tr>
</table>
<h4>Capital structure over the company life cycle</h4>
<table>
  <tr><th>Stage</th><th>Typical financing</th><th>Why</th></tr>
  <tr><td><b>Start-up</b></td><td>Mostly <b>equity</b> (founders, venture capital)</td><td>Negative, volatile cash flows; few tangible assets to pledge</td></tr>
  <tr><td><b>Growth</b></td><td>Mainly equity; debt rises as cash flows become positive (secured or convertible debt)</td><td>Cash flows improving but still uncertain</td></tr>
  <tr><td><b>Mature</b></td><td><b>Higher debt</b>, often unsecured; may return cash through dividends and buybacks</td><td>Stable, predictable cash flows and tangible assets; access to bond markets</td></tr>
</table>
<ul>
  <li><b>Target capital structure</b>: managers often aim for a range rather than an exact mix and let it drift (due to share price moves, issue timing). Analysts estimate it from the current market-value mix, the company's stated targets, or industry averages.</li>
  <li><b>Market value vs book value</b>: use market values for WACC weights; book values of equity can be very different (and even negative after large buybacks).</li>
  <li>Stakeholder interests differ: shareholders may favour more debt (tax shield, leverage of returns); creditors prefer less; managers may prefer low debt to protect their jobs.</li>
</ul>

<div class="how"><b>How it's tested:</b> WACC calculations, MM propositions with and without taxes (cost of equity, levered value), the static trade-off theory's optimum, pecking order and signalling, and choosing the likely financing for a company at a given life cycle stage.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Calculate WACC with target market-value weights.</li>
  <li>Explain and apply MM Propositions I and II with and without taxes.</li>
  <li>Describe costs of financial distress, the static trade-off theory, agency costs, signalling and pecking order theory.</li>
  <li>Explain internal and external factors and how capital structure changes over the life cycle.</li>
</ul></div>
`;

window.QB_HARD.l1capstr = [
  ["Under the Modigliani–Miller propositions without taxes, increasing a company's financial leverage:",
    ["Raises the cost of equity; WACC is unchanged", "Lowers WACC and raises firm value", "Leaves the cost of equity unchanged as debt rises"],
    "Cheaper debt is exactly offset by a higher cost of equity (MM II), so WACC and firm value are unchanged (MM I).", "r"],
  ["A company's unlevered cost of capital is 10%, its cost of debt is 6%, its debt-to-equity ratio is 0.5 and its tax rate is 25%. Under MM with taxes, its cost of equity is closest to:",
    ["11.5%", "12.0%", "10.0%"],
    "re = r0 + (r0 − rd)(1 − t)(D/E) = 10% + 4% × 0.75 × 0.5 = 11.5%. Without taxes it would be 12.0%.", "c"],
  ["An unlevered company is worth $100 million. It issues $40 million of debt to buy back shares, with a 25% tax rate. Under MM with corporate taxes, the levered company is worth:",
    ["$110 million", "$100 million", "$140 million"],
    "V_L = V_U + tD = 100 + 0.25 × 40 = $110 million. The tax shield on interest adds value.", "c"],
  ["According to the static trade-off theory, a company's optimal capital structure is where:",
    ["The marginal tax shield equals the marginal distress cost", "The company is financed entirely with debt", "The cost of equity equals the after-tax cost of debt financing"],
    "Debt adds value through the tax shield until the expected costs of financial distress rise enough to offset it.", "r"],
  ["Pecking order theory predicts that managers prefer to finance new investment with:",
    ["Internal funds first, then debt, then new equity", "New equity first, then debt, then internal funds", "Debt first, then internal funds, then new equity"],
    "Because of asymmetric information, managers favour sources that reveal the least about the company: retained earnings, then debt, with equity as a last resort.", "r"],
  ["Under asymmetric information, an announcement that a company will issue new shares is most likely interpreted as:",
    ["A negative signal that the shares are overvalued", "A positive signal that strong future cash flows are coming", "A neutral event that carries no information"],
    "Managers know more than investors and tend to issue equity when they think it's overpriced, so share prices often fall on equity issue announcements.", "r"],
  ["A start-up with negative, volatile cash flows and few tangible assets is most likely to be financed with:",
    ["Equity", "Secured bank loans", "Long-term public bonds"],
    "Without stable cash flows or collateral, a start-up can't support much debt, so it relies on equity (often venture capital).", "r"],
  ["A company's target weights are 30% debt and 70% equity. Its pre-tax cost of debt is 6%, its cost of equity is 11% and its tax rate is 25%. Its WACC is closest to:",
    ["9.05%", "9.50%", "8.50%"],
    "WACC = 0.30 × 6% × (1 − 0.25) + 0.70 × 11% = 1.35% + 7.70% = 9.05%. 9.50% forgets the tax deduction on interest.", "c"],
  ["A company targets 40% debt and 60% equity. Its pre-tax cost of debt is 5%, its cost of equity is 12% and its tax rate is 21%. Its WACC is closest to:",
    ["8.78%", "9.20%", "7.80%"],
    "WACC = 0.40 × 5% × 0.79 + 0.60 × 12% = 1.58% + 7.20% = 8.78%. Ignoring the tax shield gives 9.20%.", "c"],
  ["In WACC calculations, the weights should be based on:",
    ["The target capital structure at market values", "Historical book values of debt and equity", "The current year's financing only"],
    "WACC is a forward-looking hurdle rate, so it uses the target (market-value) mix the company will finance with.", "r"],
  ["According to MM Proposition I with corporate taxes, the value of a levered company equals:",
    ["The unlevered value plus t × D", "The unlevered value, regardless of debt", "The unlevered value minus expected distress costs"],
    "V_L = V_U + tD: the interest tax shield adds value. Subtracting distress costs is the static trade-off view.", "r"],
  ["An all-equity company worth $500 million issues $200 million of debt to repurchase shares. With a 21% tax rate and MM's assumptions with taxes, its value becomes closest to:",
    ["$542 million", "$500 million", "$700 million"],
    "V_L = 500 + 0.21 × 200 = $542 million.", "c"],
  ["With corporate taxes, a company's unlevered cost of capital is 12%, its cost of debt is 7%, its debt-to-equity ratio is 1.0 and its tax rate is 30%. Its cost of equity is closest to:",
    ["15.5%", "17.0%", "12.0%"],
    "r_e = r₀ + (r₀ − r_d)(1 − t)(D/E) = 12% + 5% × 0.7 × 1.0 = 15.5%. Without taxes it would be 17%.", "c"],
  ["Under MM with corporate taxes but no costs of financial distress, as a company adds debt its WACC:",
    ["Falls", "Rises", "Stays constant"],
    "The cost of equity rises more slowly than in the no-tax case, and debt is cheaper after tax, so WACC falls with leverage.", "r"],
  ["Which of the following is an indirect cost of financial distress?",
    ["Customers leaving over service fears", "Legal fees paid in bankruptcy proceedings", "Interest expense on existing debt"],
    "Indirect costs include lost sales, supplier and employee departures and forgone investments; legal and administrative fees are direct costs.", "r"],
  ["Companies with mostly intangible, specialized assets most likely have:",
    ["Higher expected costs of financial distress", "Lower expected costs of financial distress", "No ability to issue debt"],
    "Such assets lose much of their value in distress (low recovery), raising expected distress costs and reducing optimal leverage.", "r"],
  ["Using more debt can reduce the agency costs of equity mainly because debt:",
    ["Limits free cash flow managers could waste", "Increases managers' job security and pay", "Gives creditors voting control"],
    "Committed interest and principal payments discipline managers by limiting free cash flow available for value-destroying projects.", "r"],
  ["A mature company with stable, predictable cash flows and many tangible assets is most likely financed with:",
    ["A relatively high proportion of debt", "Mainly venture capital and angel equity", "Only retained earnings"],
    "Stable cash flows and collateral support debt capacity; mature companies often use substantial unsecured debt.", "r"],
];

window.GLOSSARY.push(
  ["WACC","wd rd(1 − t) + wp rp + we re, using target market-value weights.","l1capstr"],
  ["MM Proposition II","No taxes: re = r0 + (r0 − rd)(D/E). With taxes: re = r0 + (r0 − rd)(1 − t)(D/E).","l1capstr"],
  ["MM with taxes","V_L = V_U + tD: the interest tax shield adds value, so WACC falls as leverage rises.","l1capstr"],
  ["Static trade-off theory","Optimal capital structure where the marginal tax benefit of debt = marginal expected cost of financial distress.","l1capstr"],
  ["Pecking order theory","Asymmetric information: internal funds → debt → equity. Equity issues signal overvaluation.","l1capstr"],
  ["MM Proposition I (no taxes)", "V_L = V_U; capital structure irrelevant.", "l1capstr"],
  ["Costs of financial distress", "Direct (legal, administrative) and indirect (lost customers, suppliers, staff, investments).", "l1capstr"],
  ["Agency costs of debt and equity", "Equity: managers misusing cash (debt helps). Debt: shareholder–creditor conflicts.", "l1capstr"],
  ["Capital structure over the life cycle", "Start-up: equity. Growth: mostly equity, some debt. Mature: more debt.", "l1capstr"]
);
