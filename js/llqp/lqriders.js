// LLQP · Life Insurance module · Chapter 5: Riders and Supplementary Benefits.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.lqriders = `
<p class="syl">LLQP · Life Insurance module · Chapter 5 of 12 · Riders and Supplementary Benefits</p>
<p>Riders are optional benefits added to a base policy, usually for an extra premium, to tailor coverage to a client's needs. This chapter covers the riders you'll meet most often (waiver of premium, payor benefit, accidental death, guaranteed insurability, child and spousal term, critical illness and return of premium) and the accelerated death benefit, with the details exam questions focus on.</p>

<h3>1. Premium-protection riders <span class="hot">Highly tested</span></h3>
<table>
  <tr><th>Rider</th><th>What it does</th><th>Key details</th></tr>
  <tr><td><b>Waiver of premium (WP)</b></td><td>Waives the premiums if the life insured (or owner) becomes <b>totally disabled</b></td><td>A waiting period applies (often 4–6 months), after which premiums are waived, usually with a refund of premiums paid during the waiting period; coverage typically ends at 60 or 65; the policy stays fully in force</td></tr>
  <tr><td><b>Payor benefit (payor waiver)</b></td><td>On a policy on a child's life, waives premiums if the <b>payor</b> (usually a parent) dies or becomes disabled</td><td>Premiums are waived until the child reaches a set age (e.g. 21 or 25)</td></tr>
</table>

<h3>2. Additional death benefit riders</h3>
<ul>
  <li><b>Accidental death benefit (ADB)</b>: pays an extra amount (often equal to the face amount, "double indemnity") if death results from an <b>accident</b>, usually within a set period after it (e.g. 90 or 365 days). <b>Accidental death and dismemberment (AD&amp;D)</b> also pays a schedule of amounts for losing limbs, sight or hearing.</li>
  <li>Typical exclusions: suicide or self-inflicted injury, war, illness, drug overdose, impaired driving, and aviation other than as a fare-paying passenger.</li>
  <li><b>Term rider</b>: extra term coverage on the life insured, cheaper than a separate policy.</li>
  <li><b>Spousal (family) term rider</b>: term coverage on the spouse under the same policy.</li>
  <li><b>Child term rider</b>: a small amount of term coverage on all the life insured's children (including future children) for one premium, usually convertible to a permanent policy later without evidence.</li>
</ul>
<div class="ex"><b>Example:</b> Omar has a $200,000 policy with an ADB rider of $200,000. If he dies of a heart attack, his beneficiary receives <b>$200,000</b>. If he dies in a car accident (covered), the beneficiary receives <b>$400,000</b>.</div>

<h3>3. Guaranteed insurability option (GIO) <span class="hot">Highly tested</span></h3>
<ul>
  <li>Lets the owner <b>buy additional coverage without evidence of insurability</b> on specified option dates (e.g. certain birthdays) or life events (marriage, birth or adoption of a child), up to set amounts and a maximum age (often 40–45).</li>
  <li>New coverage is priced at the life insured's age at the time, at standard rates for the original risk class.</li>
  <li>Valuable for young clients whose need for coverage will grow, especially if their health later deteriorates.</li>
</ul>

<h3>4. Living benefits</h3>
<ul>
  <li><b>Accelerated (living) death benefit</b>: if the life insured is <b>terminally ill</b> (e.g. life expectancy under 12 or 24 months), part of the death benefit can be paid in advance, typically capped as a percentage (e.g. 50%) and a dollar maximum. The advance (plus any interest or charges) is deducted from the death benefit later. Often included at no charge.</li>
  <li><b>Critical illness rider</b>: pays a lump sum if the life insured is diagnosed with a covered illness (see the Accident and Sickness module).</li>
  <li>Some policies offer <b>disability income</b> or <b>long-term care</b> riders.</li>
</ul>
<div class="ex"><b>Example:</b> a $300,000 policy allows an accelerated benefit of up to 50%, to a maximum of $100,000. A terminally ill client can receive <b>$100,000</b> now (the cap, since 50% would be $150,000); the beneficiary later receives the death benefit minus the $100,000 advance and any charges.</div>

<h3>5. Other riders</h3>
<ul>
  <li><b>Return of premium (ROP)</b>: refunds the premiums paid if the life insured survives the term (or on cancellation after a set period). It adds a significant cost.</li>
  <li><b>Cost of living (inflation) rider</b>: increases the coverage with inflation (e.g. the CPI), usually for an extra premium on each increase, without evidence.</li>
</ul>

<div class="how"><b>How it's tested:</b> matching a client's concern to the right rider (WP for disability, payor benefit for a juvenile policy, GIO for future needs, child term for children), calculating total payouts with an ADB rider, ADB exclusions, and how the accelerated death benefit works.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Explain waiver of premium and payor benefit riders.</li>
  <li>Calculate benefits with accidental death riders and know common exclusions.</li>
  <li>Explain the guaranteed insurability option.</li>
  <li>Describe child, spousal and term riders.</li>
  <li>Describe the accelerated death benefit and other living benefits and riders.</li>
</ul></div>
`;

window.QB_HARD.lqriders = [
  ["A client worries about being unable to pay her life insurance premiums if an illness keeps her from working. Which rider addresses this?",
    ["Waiver of premium", "Accidental death benefit", "Guaranteed insurability", "Return of premium"],
    "Waiver of premium waives premiums during total disability, after a waiting period, keeping the policy in force.", "s"],
  ["A father buys a policy on his 5-year-old daughter's life. Which rider would waive the premiums if he died or became disabled?",
    ["Payor benefit", "Child term rider", "Spousal term rider", "Accelerated death benefit"],
    "The payor benefit waives premiums on a juvenile policy if the payor dies or is disabled, until the child reaches a set age.", "s"],
  ["Omar has a $200,000 policy with a $200,000 accidental death benefit rider. He dies in a covered car accident. His beneficiary receives:",
    ["$400,000", "$200,000", "$300,000", "$600,000"],
    "Base death benefit plus the ADB amount: 200,000 + 200,000 = $400,000.", "c"],
  ["Using Omar's policy ($200,000 base, $200,000 ADB), if he instead dies of cancer, his beneficiary receives:",
    ["$200,000", "$400,000", "$100,000", "Nothing"],
    "The ADB pays only for accidental death; illness pays the base face amount.", "c"],
  ["Which death would most likely be excluded under an accidental death benefit rider?",
    ["A drug overdose", "A highway collision", "A fall from a ladder", "Drowning on vacation"],
    "Overdoses, suicide, war, illness and impaired driving are typical exclusions.", "r"],
  ["A 28-year-old expects to marry and have children and wants to be able to add coverage later even if his health changes. Which rider fits best?",
    ["Guaranteed insurability", "Waiver of premium rider", "Return of premium rider", "Accidental death benefit"],
    "A GIO lets him buy more coverage on option dates or life events without evidence of insurability.", "s"],
  ["Coverage bought under a guaranteed insurability option is priced at the life insured's:",
    ["Age when the option is used", "Age when the policy was issued", "Current health rating", "Age 65 rate"],
    "No new medical evidence is needed, but the premium reflects the attained age at the time.", "r"],
  ["A parent wants inexpensive coverage on all of her current and future children through her own policy, convertible later. The suitable rider is:",
    ["Child term rider", "Payor benefit rider", "Spousal term rider", "Paid-up additions"],
    "A child term rider covers all children for one premium and is usually convertible without evidence.", "s"],
  ["A $300,000 policy allows an accelerated death benefit of up to 50%, to a maximum of $100,000. A terminally ill client can receive up to:",
    ["$100,000", "$150,000", "$300,000", "$50,000"],
    "50% would be $150,000, but the $100,000 cap applies.", "c"],
  ["How does an accelerated death benefit payment affect the eventual death benefit?",
    ["It falls by the advance and charges", "It increases by the amount advanced", "It isn't affected at all", "It's paid twice, to two beneficiaries"],
    "The accelerated amount is an advance on the death benefit, so it's deducted (with any interest or charges) at death.", "r"],
  ["Under a waiver of premium rider, premiums paid during the waiting period are usually:",
    ["Refunded once the claim is approved", "Lost permanently by the client", "Added to the policy's death benefit", "Paid out as a policy dividend"],
    "Most WP riders waive premiums retroactively to the start of disability once the waiting period is met.", "r"],
  ["A return of premium rider on a term policy:",
    ["Refunds premiums if she outlives it", "Lowers the base policy premium", "Adds coverage without evidence", "Waives premiums during a disability"],
    "ROP refunds premiums paid if the life insured survives the term, at a significant extra cost.", "r"],
  ["A client wants her coverage to rise automatically with inflation without new medical evidence. Which rider fits?",
    ["Cost of living rider", "Child term rider", "Accidental death rider", "Payor benefit rider"],
    "A cost of living rider increases the coverage in line with an inflation index.", "s"],
  ["Which rider gives extra term coverage on the life insured's spouse under the same policy?",
    ["Spousal term rider", "Payor benefit", "Child term rider", "Guaranteed insurability"],
    "A spousal (family) term rider insures the spouse; the payor benefit waives premiums on a child's policy.", "r"],
];

window.GLOSSARY.push(
  ["Waiver of premium", "Rider waiving premiums during total disability after a waiting period.", "lqriders"],
  ["Payor benefit", "Rider waiving premiums on a child's policy if the payor dies or is disabled.", "lqriders"],
  ["Guaranteed insurability option (GIO)", "Right to buy more coverage on set dates or events without evidence of insurability.", "lqriders"],
  ["Accelerated death benefit", "Advance of part of the death benefit to a terminally ill life insured.", "lqriders"],
  ["Accidental death benefit (ADB)", "Extra amount paid if death results from a covered accident.", "lqriders"]
);
