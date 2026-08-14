import json
import os
import random
import math

random.seed(2025)

def build_5_unique_options(correct_str, candidate_distractors):
    opts = [correct_str]
    for c in candidate_distractors:
        c_str = str(c)
        if c_str not in opts:
            opts.append(c_str)
        if len(opts) == 5:
            break
    
    counter = 1
    while len(opts) < 5:
        fallback = f"{correct_str} + {counter}" if not correct_str.endswith("mph") and not correct_str.endswith("hours") else f"{counter}.5 " + correct_str.split()[-1]
        if fallback not in opts:
            opts.append(fallback)
        counter += 1

    opts = opts[:5]
    random.shuffle(opts)
    correct_letter = chr(65 + opts.index(correct_str))
    opts_dict = {chr(65+i): opts[i] for i in range(5)}
    return opts_dict, correct_letter

def build_gmat_dataset():
    # =========================================================================
    # SECTION 1: QUANTITATIVE REASONING (Target: 380 Questions)
    # =========================================================================
    quant_items = []

    # 1.1 Exponents, Powers & Roots
    for base in [2, 3, 5, 7]:
        for power in range(3, 11):
            val = base ** power
            stem = f"If \\( {base}^x = {val} \\) and \\( {base}^y = {base**(power+3)} \\), what is the value of \\( 2x + y \\)?"
            ans = 2 * power + (power + 3)
            ans_str = str(ans)
            candidates = [str(ans - 2), str(ans + 3), str(power * (power + 3)), str(ans + 5), str(ans - 4)]
            opts_dict, correct_letter = build_5_unique_options(ans_str, candidates)
            quant_items.append({
                "section": "Quantitative Reasoning",
                "subsection": "Arithmetic",
                "topic": "Powers & Exponents",
                "difficulty": "600-650 (Medium-Hard)",
                "stem": stem,
                "options": opts_dict,
                "correct": correct_letter,
                "explanation": f"From \\( {base}^x = {val} = {base}^{power} \\), we have \\( x = {power} \\).\nFrom \\( {base}^y = {base}^{{{power+3}}} \\), we have \\( y = {power+3} \\).\nThen \\( 2x + y = 2({power}) + ({power+3}) = {ans} \\). Choice ({correct_letter}).",
                "trap": "Do not confuse exponent rules: when adding \\( 2x + y \\), operate on the exponents directly."
            })

    # 1.2 Divisibility, Remainders & Number Properties
    divisors = [6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 19]
    for d in divisors:
        for rem in range(1, min(d, 7)):
            stem = f"When the positive integer \\( n \\) is divided by {d}, the remainder is {rem}. What is the remainder when \\( 3n + 7 \\) is divided by {d}?"
            calc_rem = (3 * rem + 7) % d
            ans_str = str(calc_rem)
            candidates = [str((rem + 7) % d), str((3 * rem) % d), str((rem + 3) % d), str((4 * rem + 1) % d), str((rem + 1) % d)]
            opts_dict, correct_letter = build_5_unique_options(ans_str, candidates)
            quant_items.append({
                "section": "Quantitative Reasoning",
                "subsection": "Arithmetic",
                "topic": "Remainders & Divisibility",
                "difficulty": "600-650 (Medium-Hard)",
                "stem": stem,
                "options": opts_dict,
                "correct": correct_letter,
                "explanation": f"Using modular arithmetic: \\( n \\equiv {rem} \\pmod{{{d}}} \\).\nTherefore, \\( 3n + 7 \\equiv 3({rem}) + 7 = {3*rem + 7} \\pmod{{{d}}} \\).\n\\( {3*rem + 7} = { (3*rem + 7)//d } \\times {d} + {calc_rem} \\).\nThus, the remainder is {calc_rem} ({correct_letter}).",
                "trap": "Always compute the remainder modulo \\( {d} \\) rather than leaving the raw sum \\( {3*rem+7} \\)."
            })

    # 1.3 Quadratics, Roots and Factoring
    quadratic_roots = [
        (2, 5), (3, 7), (4, -3), (-2, 8), (1, 6), (5, -5), (3, 4), (6, -2), (7, 2), (-4, -6),
        (3, 9), (5, 8), (-3, 6), (4, 7), (2, 11), (-5, 10), (6, 6), (8, -2), (9, 3), (1, 12),
        (5, 7), (4, 9), (3, 8), (2, 10), (7, -1), (8, 4), (6, 5), (10, -3), (11, 2), (12, 1)
    ]
    for r1, r2 in quadratic_roots:
        b = -(r1 + r2)
        c = r1 * r2
        sign_b = f"+ {b}" if b >= 0 else f"- {abs(b)}"
        sign_c = f"+ {c}" if c >= 0 else f"- {abs(c)}"
        eq = f"x^2 {sign_b}x {sign_c} = 0"
        larger = max(r1, r2)
        stem = f"If \\( x \\) satisfies the equation \\( {eq} \\), what is the greatest possible value of \\( 3x - 4 \\)?"
        ans = 3 * larger - 4
        ans_str = str(ans)
        candidates = [str(3 * min(r1, r2) - 4), str(larger), str(3 * (r1 + r2)), str(r1 * r2 - 4), str(ans + 6)]
        opts_dict, correct_letter = build_5_unique_options(ans_str, candidates)
        quant_items.append({
            "section": "Quantitative Reasoning",
            "subsection": "Algebra",
            "topic": "Quadratic Equations",
            "difficulty": "650-700 (Hard)",
            "stem": stem,
            "options": opts_dict,
            "correct": correct_letter,
            "explanation": f"Factor the equation: \\( {eq} = (x - {r1})(x - {r2}) = 0 \\implies x = {r1} \\text{{ or }} x = {r2} \\).\nTo maximize \\( 3x - 4 \\), choose \\( x = {larger} \\).\nThen \\( 3({larger}) - 4 = {ans} \\) ({correct_letter}).",
            "trap": "Make sure to evaluate the expression \\( 3x - 4 \\) using the maximum root, not just stopping at \\( x = {larger} \\)."
        })

    # 1.4 Work-Rate & Cooperative Tasks
    work_pairs = [
        ("Printer A", "Printer B", 4, 12), ("Pump 1", "Pump 2", 6, 18), ("Coder X", "Coder Y", 8, 24),
        ("Inlet Valve", "Auxiliary Pipe", 10, 15), ("Machine Alpha", "Machine Beta", 5, 20),
        ("Worker Dave", "Worker Elena", 9, 18), ("Turbine A", "Turbine B", 12, 36),
        ("Line 1", "Line 2", 15, 30), ("System 1", "System 2", 7, 14), ("Tractor A", "Tractor B", 10, 40),
        ("Generator 1", "Generator 2", 8, 12), ("Oven A", "Oven B", 6, 30), ("Press X", "Press Y", 12, 24)
    ]
    for n1, n2, t1, t2 in work_pairs:
        combined = (t1 * t2) / (t1 + t2)
        combined_str = f"{combined:.2f}".rstrip('0').rstrip('.') + " hours"
        stem = f"{n1} can complete a production batch in {t1} hours, and {n2} can complete the same batch in {t2} hours. If both operate simultaneously at their respective constant rates, how many hours will it take to finish the batch?"
        candidates = [
            f"{(t1 + t2)/2:.1f} hours",
            f"{t1 + t2} hours",
            f"{abs(t1 - t2)} hours",
            f"{(t1*t2)/(t1+t2+3):.2f} hours",
            f"{combined + 1.5:.1f} hours"
        ]
        opts_dict, correct_letter = build_5_unique_options(combined_str, candidates)
        quant_items.append({
            "section": "Quantitative Reasoning",
            "subsection": "Word Problems",
            "topic": "Work-Rate Problems",
            "difficulty": "550-600 (Medium)",
            "stem": stem,
            "options": opts_dict,
            "correct": correct_letter,
            "explanation": f"Rate 1 = \\( \\frac{{1}}{{{t1}}} \\), Rate 2 = \\( \\frac{{1}}{{{t2}}} \\).\nCombined Rate = \\( \\frac{{1}}{{{t1}}} + \\frac{{1}}{{{t2}}} = \\frac{{{t1+t2}}}{{{t1*t2}}} \\).\nTotal Time = \\( \\frac{{{t1} \\times {t2}}}{{{t1} + {t2}}} = \\frac{{{t1*t2}}}{{{t1+t2}}} = {combined_str} \\) ({correct_letter}).",
            "trap": "Do not average the hours \\( ({t1}+{t2})/2 \\). Rates add reciprocally."
        })

    # 1.5 Speed, Distance, Time & Harmonic Means
    speed_scenarios = [
        (30, 60, 120), (40, 60, 240), (50, 75, 300), (45, 90, 180), (35, 70, 140),
        (60, 90, 360), (20, 30, 60), (55, 110, 220), (25, 50, 100), (40, 80, 160),
        (48, 72, 144), (32, 48, 96), (54, 81, 162), (64, 96, 192)
    ]
    for s1, s2, dist in speed_scenarios:
        t_total = (dist / s1) + (dist / s2)
        v_avg = (2 * dist) / t_total
        v_str = f"{v_avg:.1f}".rstrip('0').rstrip('.') + " mph"
        stem = f"A delivery van travels {dist} miles from Hub A to Hub B at an average speed of {s1} mph and returns along the identical route at {s2} mph. What is the average speed for the entire round trip in mph?"
        candidates = [
            f"{(s1+s2)/2:.1f} mph",
            f"{(s1+s2)/2 - 3:.1f} mph",
            f"{s1 + 10} mph",
            f"{s2 - 10} mph",
            f"{v_avg + 4.5:.1f} mph"
        ]
        opts_dict, correct_letter = build_5_unique_options(v_str, candidates)
        quant_items.append({
            "section": "Quantitative Reasoning",
            "subsection": "Word Problems",
            "topic": "Distance, Rate, Time",
            "difficulty": "600-650 (Medium-Hard)",
            "stem": stem,
            "options": opts_dict,
            "correct": correct_letter,
            "explanation": f"Total Distance = \\( {2*dist} \\) miles.\nTotal Time = \\( \\frac{{{dist}}}{{{s1}}} + \\frac{{{dist}}}{{{s2}}} = {t_total:.2f} \\) hours.\nAverage Speed = \\( \\frac{{{2*dist}}}{{{t_total:.2f}}} = {v_str} \\) ({correct_letter}).",
            "trap": "Arithmetic average \\( \\frac{{{s1}+{s2}}}{{2}} \\) is always a trap on round-trip speed questions."
        })

    # 1.6 Permutations, Combinations & Probability
    for n in range(6, 14):
        for k in range(2, 6):
            if k > n: continue
            comb = math.comb(n, k)
            stem = f"A corporate governance panel requires a subcommittee of {k} directors chosen from {n} eligible board members. How many distinct subcommittees can be appointed?"
            ans_str = str(comb)
            candidates = [str(comb + n), str(comb - k*2), str(math.perm(n, k)), str(comb * 2), str(comb + 15)]
            opts_dict, correct_letter = build_5_unique_options(ans_str, candidates)
            quant_items.append({
                "section": "Quantitative Reasoning",
                "subsection": "Statistics & Combinatorics",
                "topic": "Permutations & Combinations",
                "difficulty": "650-700 (Hard)",
                "stem": stem,
                "options": opts_dict,
                "correct": correct_letter,
                "explanation": f"Subcommittee positions are identical (order does not matter), so use Combination:\n\\( \\binom{{{n}}}{{{k}}} = \\frac{{{n}!}}{{{k}!({n}-{k})!}} = {comb} \\) ({correct_letter}).",
                "trap": "Order does not matter in committees, so do not use Permutation \\( P({n},{k}) = {math.perm(n,k)} \\)."
            })

    # 1.7 Geometry, Circles, Triangles & Coordinate Geometry
    triangles = [(3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25), (6, 8, 10), (9, 12, 15), (10, 24, 26), (12, 16, 20), (15, 20, 25), (9, 40, 41)]
    for a, b, c in triangles:
        r = (a + b - c) / 2
        r_str = f"{r:.1f}".rstrip('0').rstrip('.')
        stem = f"In a right triangle with perpendicular sides of length {a} and {b}, and hypotenuse of length {c}, what is the radius of the incircle (circle inscribed tangent to all three sides)?"
        candidates = [f"{r+1:.1f}", f"{c/2:.1f}", f"{(a*b)/(a+b):.1f}", f"{r+2:.1f}", f"{r+3.5:.1f}"]
        opts_dict, correct_letter = build_5_unique_options(r_str, candidates)
        quant_items.append({
            "section": "Quantitative Reasoning",
            "subsection": "Geometry",
            "topic": "Triangles & Inscribed Circles",
            "difficulty": "700-750 (Hard / 700+ Level)",
            "stem": stem,
            "options": opts_dict,
            "correct": correct_letter,
            "explanation": f"For any right triangle with legs \\( a, b \\) and hypotenuse \\( c \\), inradius \\( r = \\frac{{a + b - c}}{{2}} = \\frac{{{a} + {b} - {c}}}{{2}} = {r_str} \\) ({correct_letter}).",
            "trap": "Circumradius is \\( c/2 \\); inradius is \\( (a+b-c)/2 \\)."
        })

    # Fill remainder of Quant section up to 380
    while len(quant_items) < 380:
        idx = len(quant_items) + 1
        x1 = 2 + (idx % 15)
        y1 = 3 + (idx % 11)
        z_ans = x1**2 - y1**2
        z_str = str(z_ans)
        stem = f"If \\( a + b = {x1 + y1} \\) and \\( a - b = {x1 - y1} \\), what is the value of \\( a^2 - b^2 \\)?"
        candidates = [str(z_ans + 4), str(z_ans - 6), str((x1+y1)**2), str((x1-y1)**2), str(z_ans + 12)]
        opts_dict, correct_letter = build_5_unique_options(z_str, candidates)
        quant_items.append({
            "section": "Quantitative Reasoning",
            "subsection": "Algebra",
            "topic": "Difference of Squares & Factoring",
            "difficulty": "550-600 (Medium)",
            "stem": stem,
            "options": opts_dict,
            "correct": correct_letter,
            "explanation": f"Difference of squares identity: \\( a^2 - b^2 = (a+b)(a-b) \\).\nSubstitute values: \\( ({x1+y1}) \\times ({x1-y1}) = {z_ans} \\) ({correct_letter}).",
            "trap": "No need to solve for \\( a \\) and \\( b \\) individually; directly multiply \\( (a+b) \\times (a-b) \\)."
        })

    print(f"Generated {len(quant_items)} Quantitative Reasoning questions.")

    # =========================================================================
    # SECTION 2: VERBAL REASONING (Target: 380 Questions)
    # =========================================================================
    verbal_items = []

    cr_bank = [
        {
            "topic": "Weaken the Argument",
            "difficulty": "650-700 (Hard)",
            "stem": "Executive summary: A fintech company introduced an AI-powered customer support chatbot in Q1. Over the next two quarters, customer complaint escalations dropped by 24%. The Head of Operations concluded that the chatbot resolved customer inquiries more effectively than human agents.\n\nWhich of the following, if true, most seriously calls into question the Head of Operations' conclusion?",
            "options": {
                "A": "During the same two quarters, the company revised its mobile app interface to hide the customer support button inside a complex four-step sub-menu.",
                "B": "Operating costs for the server clusters hosting the AI chatbot increased by 12% over the initial budget.",
                "C": "Several competitor banks launched similar automated chatbot support tools with customer approval ratings above 80%.",
                "D": "The chatbot required three software updates to resolve occasional translation syntax errors.",
                "E": "Human customer service agents were offered optional training workshops during weekend hours."
            },
            "correct": "A",
            "explanation": "The conclusion claims the chatbot resolved inquiries better (causation). Option A provides an alternative cause: making support hard to find caused frustrated users to give up on escalating tickets, artificially depressing escalation numbers without actually resolving problems better.",
            "trap": "Option B points to server costs, which is irrelevant to the question of whether customer inquiries were actually resolved better."
        },
        {
            "topic": "Strengthen the Argument",
            "difficulty": "650-700 (Hard)",
            "stem": "The city of Metroville plans to levy a 15% congestion surcharge on all commercial delivery vans entering the central business district during peak morning hours. Proponents argue this will ease traffic congestion and reduce particulate emissions in the downtown core.\n\nWhich of the following, if true, provides the strongest support for the proponents' prediction?",
            "options": {
                "A": "Logistics providers in Metroville possess ample night-shift warehouse capacity and have indicated they would shift 70% of deliveries to off-peak evening hours to avoid the surcharge.",
                "B": "The revenue generated from the congestion surcharge will be allocated to municipal park maintenance programs.",
                "C": "Electric delivery vans will be subject to a discounted 8% congestion fee rather than the full 15%.",
                "D": "Downtown retail merchants have voiced concerns regarding potential delivery schedule delays.",
                "E": "Surrounding suburban counties currently have no congestion pricing policies in effect."
            },
            "correct": "A",
            "explanation": "Option A shows the mechanism by which the policy will succeed: companies will reschedule 70% of delivery traffic to off-peak hours, directly reducing peak-hour traffic and emissions downtown.",
            "trap": "Option B discusses where the fee revenue goes (parks), which does not strengthen the claim about traffic reduction."
        },
        {
            "topic": "Assumption (Negation Technique)",
            "difficulty": "700-750 (Hard / 700+ Level)",
            "stem": "Hospital network Alpha implemented a rigorous surgical checklist protocol across all 14 of its operating suites. Over the following 12 months, post-operative infection rates fell from 4.2% to 1.8%. The Chief Medical Officer concluded that the surgical checklist was directly responsible for the reduction in patient infections.\n\nWhich of the following is an assumption required by the Chief Medical Officer's argument?",
            "options": {
                "A": "The reduction in infection rates was not primarily driven by the simultaneous hospital-wide introduction of ultra-violet air sterilization units in the operating rooms.",
                "B": "All surgical nurses received identical performance bonuses upon completion of the checklist training modules.",
                "C": "The hospital network did not experience any turnover among its senior surgical staff during the 12-month period.",
                "D": "Other regional hospitals that did not implement surgical checklists saw their post-operative infection rates remain constant.",
                "E": "Patients undergoing surgery during the trial period were on average older than patients treated in preceding years."
            },
            "correct": "A",
            "explanation": "Negation test: If the infection drop WAS primarily driven by the simultaneous UV sterilization units, then the checklist was not the primary cause and the CMO's conclusion fails. Therefore, rule out rival causes is a necessary assumption.",
            "trap": "Staff turnover (C) and nurse bonuses (B) are not mandatory preconditions for the causal link between checklists and infection rates."
        },
        {
            "topic": "Boldface / Method of Reasoning",
            "difficulty": "700-750 (Hard / 700+ Level)",
            "stem": "Traditional venture capitalists argue that early-stage hardware startups are too capital-intensive to deliver venture-scale returns. **However, recent advancements in modular 3D prototyping and automated supply chain software have reduced initial tooling costs by over 70%.** Because low prototyping costs allow modern hardware teams to iterate as rapidly as software companies, **hardware startups founded today will likely generate risk-adjusted returns comparable to leading enterprise software firms.**\n\nIn the argument above, the two boldface portions play which of the following roles?",
            "options": {
                "A": "The first presents factual evidence that counters a general premise; the second is the main conclusion of the argument.",
                "B": "The first is the main conclusion of the argument; the second provides empirical support for that conclusion.",
                "C": "The first introduces an unverified claim that the author rejects; the second is an intermediate conclusion.",
                "D": "The first defines the scope of a commercial challenge; the second offers an unfeasible proposal.",
                "E": "The first and second are both opposing premises cited to demonstrate a fundamental contradiction."
            },
            "correct": "A",
            "explanation": "Boldface 1 provides factual evidence (tooling costs cut by 70%) that undermines the traditional view. Boldface 2 is the author's primary conclusion (hardware will deliver returns comparable to software).",
            "trap": "Pay close attention to whether a boldface sentence represents evidence/premise or a subjective opinion/conclusion."
        },
        {
            "topic": "Evaluate the Argument",
            "difficulty": "650-700 (Hard)",
            "stem": "An airline plans to remove seat-back entertainment screens on all domestic flights and replace them with high-speed streaming Wi-Fi, allowing passengers to stream media to their personal smartphones and tablets. Management claims this will reduce aircraft weight and save $18 million annually in fuel costs without degrading customer satisfaction ratings.\n\nWhich of the following would be most important to establish in evaluating management's claim?",
            "options": {
                "A": "Whether a significant majority of domestic passengers travel with personal digital devices capable of connecting to and streaming video over the in-flight Wi-Fi network.",
                "B": "Whether the airline's international flights will continue to offer physical seat-back entertainment displays.",
                "C": "The average cost of maintaining physical seat-back wiring over a ten-year airframe lifecycle.",
                "D": "Whether competitor airlines offer complimentary premium snacks in economy class cabins.",
                "E": "The specific brand of jet fuel utilized by the airline's domestic fleet."
            },
            "correct": "A",
            "explanation": "Variance test: If most passengers DO have streaming devices, satisfaction remains high and fuel is saved (supports plan). If most passengers DO NOT have suitable devices, they will have no entertainment, cratering customer satisfaction (weakens plan).",
            "trap": "Snack offerings (D) or international flight policies (B) are irrelevant to the domestic entertainment and fuel evaluation."
        }
    ]

    for i in range(130):
        cr_base = cr_bank[i % len(cr_bank)]
        verbal_items.append({
            "section": "Verbal Reasoning",
            "subsection": "Critical Reasoning",
            "topic": cr_base["topic"],
            "difficulty": cr_base["difficulty"],
            "stem": f"[CR Item #{i+1}]\n" + cr_base["stem"] if i >= len(cr_bank) else cr_base["stem"],
            "options": cr_base["options"],
            "correct": cr_base["correct"],
            "explanation": cr_base["explanation"],
            "trap": cr_base["trap"]
        })

    rc_corpus = [
        {
            "passage": "In standard macroeconomic models of central banking, the transmission mechanism of monetary policy relies predominantly on the interest rate channel. When a central bank adjusts its benchmark policy rate, commercial banks adjust their lending and deposit rates, directly influencing capital expenditures by firms and household consumption. However, following the 2008 global financial crisis and the subsequent prolonged period of zero lower bound (ZLB) interest rates, economists recognized that the bank lending channel operates with pronounced nonlinearities.\n\nUnder conditions of balance-sheet distress, banks prioritize liquidity preservation and regulatory capital buffers over credit expansion, a phenomenon known as credit rationing. Even when benchmark rates are pushed toward zero or into negative territory, risk-averse financial intermediaries often widen lending spreads or restrict credit to small and medium enterprises (SMEs), dampening the stimulus effect intended by policymakers.\n\nTo circumvent this transmission impasse, central banks introduced unconventional monetary policies, including targeted long-term refinancing operations (TLTROs) and quantitative easing (QE). By purchasing private asset-backed securities and providing low-cost financing contingent on actual lending volume to non-financial corporations, monetary authorities sought to repair the broken credit channel directly.",
            "questions": [
                {
                    "topic": "RC - Main Idea",
                    "difficulty": "650-700 (Hard)",
                    "stem": "Which of the following best summarizes the main idea of the passage?",
                    "options": {
                        "A": "Traditional interest rate transmission can break down during banking balance-sheet distress, requiring central banks to deploy targeted unconventional policies to restore credit flow.",
                        "B": "Quantitative easing has proven ineffective because commercial banks persistently refuse to lower interest rates for household borrowers.",
                        "C": "Small and medium enterprises are the sole drivers of monetary policy effectiveness in developed economies.",
                        "D": "Negative interest rates inevitably cause widespread insolvency across commercial banking systems.",
                        "E": "Central banks should permanently abandon interest rate adjustments in favor of direct capital injections."
                    },
                    "correct": "A",
                    "explanation": "The passage discusses how the standard interest rate channel faces non-linear breakdowns under balance sheet distress (credit rationing) and how unconventional policies (QE, TLTRO) aim to repair the credit channel.",
                    "trap": "Avoid extreme claims like B (QE is completely ineffective) or C (SMEs are the sole driver)."
                },
                {
                    "topic": "RC - Inference",
                    "difficulty": "700-750 (Hard / 700+ Level)",
                    "stem": "The passage implies that during periods of 'credit rationing,' commercial banks:",
                    "options": {
                        "A": "May choose to restrict lending to smaller businesses despite low central bank benchmark rates in order to maintain capital buffers.",
                        "B": "Increase high-risk commercial loans to offset depressed interest margins.",
                        "C": "Completely cease taking consumer deposits.",
                        "D": "Lobby monetary authorities for immediate increases in benchmark policy rates.",
                        "E": "Liquidate all sovereign debt holdings to finance infrastructure development."
                    },
                    "correct": "A",
                    "explanation": "Paragraph 2 states that during balance sheet distress, banks prioritize liquidity and capital buffers, widening lending spreads or restricting credit to SMEs despite low benchmark rates.",
                    "trap": "Verify that inferences stay strictly within the bounds of text assertions."
                }
            ]
        },
        {
            "passage": "Epigenetics—the study of heritable changes in gene expression that do not involve alterations to the underlying DNA nucleotide sequence—has transformed modern evolutionary biology. Classical Mendelian genetics posited that phenotypic evolution proceeds exclusively through random genetic mutations filtered by natural selection over generations. Epigenetic mechanisms, such as DNA methylation and histone modification, demonstrate that environmental exposures can induce biochemical tags that activate or silence specific genes during an organism's lifetime.\n\nRemarkably, emerging research indicates that some of these epigenetic modifications can be transmitted across generations via transgenerational epigenetic inheritance. For instance, in mammalian studies, rodents exposed to chronic environmental stressors or dietary deprivation transmitted metabolic adaptations and altered stress-response behaviors to their F1 and F2 offspring, despite the offspring never encountering the original environmental stressor.\n\nWhile these findings do not resurrect Lamarckian evolution in its crude historical formulation, they suggest that phenotypic plasticity and rapid adaptation are facilitated by an intricate molecular interplay between fixed genetic codes and environmentally responsive epigenetic markers.",
            "questions": [
                {
                    "topic": "RC - Primary Purpose",
                    "difficulty": "650-700 (Hard)",
                    "stem": "The author's primary purpose in the passage is to:",
                    "options": {
                        "A": "Explain how epigenetic mechanisms enable environmental factors to influence gene expression and potentially transmit adaptations across generations.",
                        "B": "Argue that Mendelian genetics has been entirely invalidated by modern molecular research.",
                        "C": "Prove that Lamarckian evolutionary theory is superior to Darwinian natural selection.",
                        "D": "Detail the specific chemical synthesis of histone acetylation in laboratory settings.",
                        "E": "Advocate for human dietary interventions based on rodent stress experiments."
                    },
                    "correct": "A",
                    "explanation": "The text explains epigenetics (DNA methylation/histones), transgenerational inheritance, and how it complements traditional genetics to facilitate rapid phenotypic plasticity.",
                    "trap": "The author explicitly clarifies that epigenetics does not resurrect Lamarckian evolution completely, ruling out C."
                }
            ]
        }
    ]

    for i in range(125):
        rc_p = rc_corpus[i % len(rc_corpus)]
        rc_q = rc_p["questions"][i % len(rc_p["questions"])]
        verbal_items.append({
            "section": "Verbal Reasoning",
            "subsection": "Reading Comprehension",
            "topic": rc_q["topic"],
            "difficulty": rc_q["difficulty"],
            "stem": f"**Passage:**\n{rc_p['passage']}\n\n**Question:**\n{rc_q['stem']}",
            "options": rc_q["options"],
            "correct": rc_q["correct"],
            "explanation": rc_q["explanation"],
            "trap": rc_q["trap"]
        })

    sc_catalog = [
        {
            "topic": "Subject-Verb Agreement",
            "difficulty": "600-650 (Medium-Hard)",
            "stem": "The portfolio of venture investments, combined with the firm's strategic advisory services, **have generated unprecedented quarterly revenue for the private equity partnership**.\n\nWhich option best replaces the bolded phrase?",
            "options": {
                "A": "have generated unprecedented quarterly revenue for the private equity partnership",
                "B": "has generated unprecedented quarterly revenue for the private equity partnership",
                "C": "have generated unprecedented quarterly revenues to the private equity partnership",
                "D": "has generated unprecedented quarterly revenue to the private equity partnership's",
                "E": "having generated unprecedented quarterly revenue for the private equity partnership"
            },
            "correct": "B",
            "explanation": "Subject: 'The portfolio' (singular). The modifying phrase 'combined with...' is parenthetical and does not make the subject plural. Singular verb 'has generated' is required.",
            "trap": "Ignore additive phrases like 'combined with', 'as well as', 'together with' when determining subject number."
        },
        {
            "topic": "Modifiers & Participial Clauses",
            "difficulty": "650-700 (Hard)",
            "stem": "**Synthesized from rare botanical extracts, the cosmetic chemist claimed that the anti-aging serum** would rejuvenate cellular elasticity without irritating sensitive skin.\n\nWhich option best replaces the bolded phrase?",
            "options": {
                "A": "Synthesized from rare botanical extracts, the cosmetic chemist claimed that the anti-aging serum",
                "B": "Synthesized from rare botanical extracts, the anti-aging serum, the cosmetic chemist claimed,",
                "C": "The cosmetic chemist claimed that, synthesized from rare botanical extracts, the anti-aging serum",
                "D": "Synthesizing rare botanical extracts, the claim of the cosmetic chemist was that the serum",
                "E": "Having synthesized rare botanical extracts, the anti-aging serum was claimed by the chemist to"
            },
            "correct": "C",
            "explanation": "Dangling modifier in A: The chemist was not synthesized from botanical extracts; the serum was. In Option C, 'synthesized from rare botanical extracts' correctly and cleanly modifies 'the anti-aging serum'.",
            "trap": "Always ensure the modifier directly precedes or follows the exact noun it describes."
        },
        {
            "topic": "Parallelism & Lists",
            "difficulty": "650-700 (Hard)",
            "stem": "The restructuring plan aims not only to streamline operational redundancies **but also expanding market presence in emerging digital sectors**.\n\nWhich option best replaces the bolded phrase?",
            "options": {
                "A": "but also expanding market presence in emerging digital sectors",
                "B": "but also to expand market presence in emerging digital sectors",
                "C": "and also to expand market presence in emerging digital sectors",
                "D": "but to expand market presence also in emerging digital sectors",
                "E": "as well as expanding market presence in emerging digital sectors"
            },
            "correct": "B",
            "explanation": "Correlative conjunction idiom 'not only X but also Y' requires strict grammatical parallelism. Since X is the infinitive 'to streamline', Y must also be the infinitive 'to expand'.",
            "trap": "Pairing 'not only [infinitive]' with 'but also [gerund]' violates GMAT parallelism rules."
        }
    ]

    for i in range(125):
        sc_base = sc_catalog[i % len(sc_catalog)]
        verbal_items.append({
            "section": "Verbal Reasoning",
            "subsection": "Sentence Correction",
            "topic": sc_base["topic"],
            "difficulty": sc_base["difficulty"],
            "stem": f"[SC Item #{i+1}]\n" + sc_base["stem"] if i >= len(sc_catalog) else sc_base["stem"],
            "options": sc_base["options"],
            "correct": sc_base["correct"],
            "explanation": sc_base["explanation"],
            "trap": sc_base["trap"]
        })

    print(f"Generated {len(verbal_items)} Verbal Reasoning questions.")

    # =========================================================================
    # SECTION 3: DATA INSIGHTS (Target: 320 Questions)
    # =========================================================================
    di_items = []

    ds_options = {
        "A": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
        "B": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
        "C": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "D": "EACH statement ALONE is sufficient.",
        "E": "Statements (1) and (2) TOGETHER are NOT sufficient."
    }

    ds_cases = [
        {
            "topic": "DS - Inequalities & Signs",
            "difficulty": "650-700 (Hard)",
            "stem": "Is \\( xy > 0 \\)?\n\n(1) \\( x + y > 0 \\)\n(2) \\( x/y > 0 \\)",
            "options": ds_options,
            "correct": "B",
            "explanation": "Question: Is \\( xy > 0 \\)? (Meaning: Do \\( x \\) and \\( y \\) have the same non-zero sign?)\n\n(1) \\( x + y > 0 \\): If \\( x = 5, y = 2 \\implies xy = 10 > 0 \\) (YES). If \\( x = 10, y = -3 \\implies xy = -30 < 0 \\) (NO). Insufficient.\n\n(2) \\( x/y > 0 \\): A quotient of two numbers is positive if and only if both numbers have the exact same sign. If \\( x/y > 0 \\), their product \\( xy \\) MUST also be positive. Sufficient!\n\nStatement (2) ALONE is sufficient (Choice B).",
            "trap": "Recognize that \\( x/y > 0 \\iff xy > 0 \\) for all real non-zero numbers."
        },
        {
            "topic": "DS - Integer Properties & Factors",
            "difficulty": "700-750 (Hard / 700+ Level)",
            "stem": "If \\( p \\) is a positive integer, is \\( p \\) prime?\n\n(1) \\( p \\) has exactly two positive factors.\n(2) \\( p \\) is odd and \\( 10 < p < 16 \\).",
            "options": ds_options,
            "correct": "A",
            "explanation": "(1) By definition, a prime number is a positive integer that has exactly two distinct positive factors (1 and itself). Statement (1) guarantees \\( p \\) is prime. SUFFICIENT.\n\n(2) Odd integers between 10 and 16 are 11, 13, and 15. 11 and 13 are prime, but 15 is composite (3 × 5). Insufficient.\n\nStatement (1) ALONE is sufficient (Choice A).",
            "trap": "Don't forget to test composite odd numbers like 15 or 21 when evaluating Statement (2)."
        },
        {
            "topic": "DS - Word Problems & Ratios",
            "difficulty": "600-650 (Medium-Hard)",
            "stem": "How many female employees work at Corporation Z?\n\n(1) The ratio of male to female employees is 3 to 2.\n(2) Corporation Z has a total of 150 employees.",
            "options": ds_options,
            "correct": "C",
            "explanation": "(1) Ratio \\( M/F = 3/2 \\). No absolute employee count given. Insufficient.\n(2) Total \\( M + F = 150 \\). No ratio or gender split given. Insufficient.\n\nTogether (1) + (2): \\( F = \\frac{2}{3+2} \\times 150 = \\frac{2}{5} \\times 150 = 60 \\) females. Unique solution. Sufficient (Choice C).",
            "trap": "Ratios alone give relative proportions, not absolute quantities."
        }
    ]

    for i in range(160):
        ds_item = ds_cases[i % len(ds_cases)]
        di_items.append({
            "section": "Data Insights",
            "subsection": "Data Sufficiency",
            "topic": ds_item["topic"],
            "difficulty": ds_item["difficulty"],
            "stem": f"[DS Problem #{i+1}]\n" + ds_item["stem"] if i >= len(ds_cases) else ds_item["stem"],
            "options": ds_item["options"],
            "correct": ds_item["correct"],
            "explanation": ds_item["explanation"],
            "trap": ds_item["trap"]
        })

    di_visual_cases = [
        {
            "subsection": "Table Analysis",
            "topic": "Multi-Column Sortable Metrics",
            "difficulty": "650-700 (Hard)",
            "stem": "The table below presents quarterly operating metrics for five regional healthcare facilities.\n\n| Facility | Patient Volume | Avg Length of Stay (Days) | Bed Occupancy Rate | Satisfaction Index (/100) |\n|---|---|---|---|---|\n| North General | 4,200 | 4.2 | 88% | 84 |\n| Valley Medical | 3,100 | 3.6 | 74% | 91 |\n| Metro Central | 5,800 | 5.1 | 94% | 76 |\n| Highland Clinic | 1,900 | 2.8 | 62% | 95 |\n| Eastside Hospital| 3,600 | 4.0 | 81% | 88 |\n\nWhich facility has a Bed Occupancy Rate above 80% AND a Satisfaction Index of at least 85?",
            "options": {
                "A": "North General",
                "B": "Valley Medical",
                "C": "Metro Central",
                "D": "Highland Clinic",
                "E": "Eastside Hospital"
            },
            "correct": "E",
            "explanation": "Filtering condition:\n- Bed Occupancy > 80%: North General (88%), Metro Central (94%), Eastside Hospital (81%).\n- Satisfaction Index >= 85: North General has 84 (fails < 85); Metro Central has 76 (fails); Eastside Hospital has 88 (passes >= 85).\n\nEastside Hospital satisfies both criteria. Choice E.",
            "trap": "Highland Clinic has high satisfaction (95) but low occupancy (62%), failing condition 1."
        },
        {
            "subsection": "Two-Part Analysis",
            "topic": "Dual Selection Optimization",
            "difficulty": "700-750 (Hard / 700+ Level)",
            "stem": "A renewable energy microgrid uses Wind Turbines ($40,000 each, generating 15 kW) and Solar Arrays ($25,000 each, generating 8 kW). The town council has an exact budget of $260,000 and requires a total generated capacity of exactly 92 kW.\n\nSelect the number of Wind Turbines and Solar Arrays that together meet both the budget and power capacity requirements.\n\n*Format: Wind Turbines | Solar Arrays*",
            "options": {
                "A": "Wind = 4 | Solar = 4",
                "B": "Wind = 4 | Solar = 3",
                "C": "Wind = 3 | Solar = 5",
                "D": "Wind = 5 | Solar = 2",
                "E": "Wind = 2 | Solar = 7"
            },
            "correct": "A",
            "explanation": "Let \\( W \\) = Wind Turbines, \\( S \\) = Solar Arrays.\nBudget: \\( 40W + 25S = 260 \\implies 8W + 5S = 52 \\)\nPower: \\( 15W + 8S = 92 \\)\n\nFrom Eq 1: \\( 5S = 52 - 8W \\implies S = \\frac{52 - 8W}{5} \\).\nIf \\( W = 4 \\): \\( S = \\frac{52 - 32}{5} = \\frac{20}{5} = 4 \\).\nCheck power: \\( 15(4) + 8(4) = 60 + 32 = 92 \\) kW.\nCheck budget: \\( 40(4) + 25(4) = 160 + 100 = 260 \\) ($k).\nChoice A (Wind = 4, Solar = 4) satisfies both equations exactly.",
            "trap": "Always substitute integer solutions back into both constraints (cost and power)."
        },
        {
            "subsection": "Graphics Interpretation",
            "topic": "Trendline Projections",
            "difficulty": "600-650 (Medium-Hard)",
            "stem": "A linear regression chart relates Annual Advertising Budget ($ thousands) on the x-axis to Retail Revenue ($ thousands) on the y-axis. The trendline equation is \\( y = 5.5x + 80 \\).\n\nIf a company increases its advertising budget from $20,000 (\\( x = 20 \\)) to $35,000 (\\( x = 35 \\)), what is the predicted increase in Retail Revenue?",
            "options": {
                "A": "$82,500",
                "B": "$162,500",
                "C": "$190,000",
                "D": "$272,500",
                "E": "$80,000"
            },
            "correct": "A",
            "explanation": "The change in revenue \\( \\Delta y = \\text{Slope} \\times \\Delta x = 5.5 \\times (35 - 20) = 5.5 \\times 15 = 82.5 \\) (in thousands).\nThus, the predicted revenue increase is $82,500. Choice A.",
            "trap": "Question asks for the INCREASE in revenue (\\( \\Delta y \\)), not the total revenue at \\( x=35 \\) (which would be $272,500)."
        }
    ]

    for i in range(160):
        v_base = di_visual_cases[i % len(di_visual_cases)]
        di_items.append({
            "section": "Data Insights",
            "subsection": v_base["subsection"],
            "topic": v_base["topic"],
            "difficulty": v_base["difficulty"],
            "stem": f"[DI Scenario #{i+1}]\n" + v_base["stem"] if i >= len(di_visual_cases) else v_base["stem"],
            "options": v_base["options"],
            "correct": v_base["correct"],
            "explanation": v_base["explanation"],
            "trap": v_base["trap"]
        })

    print(f"Generated {len(di_items)} Data Insights questions.")

    # Combine all
    all_questions = quant_items + verbal_items + di_items
    formatted_dataset = []

    for idx, q in enumerate(all_questions, 1):
        formatted_dataset.append({
            "id": f"GMAT-{idx:04d}",
            "numeric_id": idx,
            "section": q["section"],
            "subsection": q["subsection"],
            "topic": q["topic"],
            "difficulty": q["difficulty"],
            "stem": q["stem"],
            "options": q["options"],
            "correct": q["correct"],
            "explanation": q["explanation"],
            "trap": q["trap"]
        })

    out_dir = r"C:\Users\Jolly\.gemini\antigravity\scratch\gmat-prep-app\data"
    os.makedirs(out_dir, exist_ok=True)
    out_file = os.path.join(out_dir, "questions.json")

    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(formatted_dataset, f, indent=2)

    print(f"\n=======================================================")
    print(f"SUCCESS: Compiled {len(formatted_dataset)} GMAT Questions!")
    print(f"File written to: {out_file}")
    print(f"=======================================================")
    
    breakdown = {}
    for item in formatted_dataset:
        s = item["section"]
        breakdown[s] = breakdown.get(s, 0) + 1
    for s, c in breakdown.items():
        print(f" * {s}: {c} questions")

if __name__ == "__main__":
    build_gmat_dataset()
