<!-- .slide: class="title-slide" -->
# Group Project #1 : Financial Risk Management
<div class="subtitle">Group 2: Cook, Katie. Khan, Mohammad. Riofrio Lara, Andres. Wen, Xinyu. & Zhou, An | <em>October 15th, 2025</em></div>
</section>

---

## BLUF
- **Acquire** London office for **GBP 600m**.
- **Finance:** **GBP 400m debt** + **GBP 200m equity**.
- **Debt mix:** **GBP 300m foreign (CHF)** + **GBP 100m local (GBP)**.
- **Hedge:** **Payer-fixed CHF swap** on the GBP 300m foreign tranche; **tenant hedge** fixes **20%** of rent (**10% GBP + 10% CHF**).
- **Deal economics:** **3.6% yield**, **2% cap appreciation**, **2% rent growth**.
- **Result:** Lowest expected cost (≈ **GBP 3.57m/yr** savings vs float) with **DSCR ≥ 1.0×** across key stresses and **Equity > GBP 100m**.

---

## Context
- **Window:** **2004-07-03 → 2014-07-03** (daily FX/rates); **snapshot:** **2014-07-03**.
- **FX daily log returns:** mean **GBP/CHF −0.0149%**, **GBP/JPY −0.0050%**; vol **0.64%** (CHF), **0.83%** (JPY).
- **1Y LIBOR means:** **CHF 1.16%**, **JPY 0.60%**, **GBP 3.18%** → foreign floating cheaper than GBP.
- **Spreads vs GBP:** **GBP–CHF ~87 bps**, **GBP–JPY ~73 bps** (below memo **125/110 bps**).
- **Structural context:** **SNB EUR/CHF floor (1.20)** in 2011–2014; **tenant CHF linkage**.

---

## Problem
- **Objective:** Pick **currency mix + hedge** to **minimize funding cost** without breaking covenants.
- **Covenants:** **DSCR ≥ 1.0×**; **Equity = Property − Loan − Swap NPV ≥ 0**.
- **Risks:** SNB floor/peg risk, potential CHF appreciation, rent/property shocks; align debt with **tenant CHF exposure**.

--

- Currency and Interest Rate Risk: The proposed financing structure relies heavily on foreign-currency debt (CHF/JPY), exposing the firm to potential exchange-rate fluctuations and interest-rate differentials that could significantly affect debt-service costs and equity value.
Uncertain Effectiveness of Hedges: While the interest-rate swap and tenant hedge aim to stabilize cash flows, their partial coverage and long-term fixed terms may leave residual exposure, especially if market conditions shift (e.g., CHF peg break or rising LIBOR rates).
- Covenant and Default Risk: The collateral requirement tied to negative equity introduces the risk of forced asset sales or liquidity strain under adverse market scenarios (FX appreciation, rent decline, or property devaluation).
- Data and Model Limitations: Quantifying these risks requires careful use of pre-2014 historical data (LIBOR, FX, rental yields) while recognizing distortions from the 2008 crisis and structural breaks like the SNB’s 1.20 CHF/EUR floor, which complicate historical simulation and VaR analysis.


---

## Methods
- **Data & prep:** Bloomberg / Capital IQ / Bank of London; daily FX → **log returns**; **rolling volatilities**.
- **Peg treatment:** Enforce **EUR/CHF = 1.20** during **2011–2014**.
- **Hedge designs (snapshot; fixed legs = LIBOR + 50 bps):**
  - **Foreign-only fixed:** CHF or JPY (GBP leg floating).
  - **Both-legs-fixed:** GBP+CHF or GBP+JPY.
  - **Tenant hedge:** fix **20%** of rent (**10% GBP + 10% CHF**).
- **Risk metrics:** **Hist-sim VaR/ES** on **savings = FLOAT − FIXED**; **DV01** to parallel shifts.
- **Stresses:** **Rent −20%**, **Property −20%**, **CHF +10%**, **combined**, **CHF peg-break +30%**, **EUR/CHF −20% (2012–2014)**.


--
## Key Figures

--

**Cost & savings by hedge (pick CHF-only)**
<div class="center-xy">
  <img src="./images/graph11.png" alt="Annual Fixed vs Unhedged Floating Cost — True Annual Savings">
</div>

--

**Covenant protection — DSCR paths (swap vs float)**
<div class="center-xy">
  <img src="./images/graph14.png" alt="Debt Service Coverage Ratio — FLOAT vs SWAP (Covenant 1.0×)">
</div>

--

**Risk check — SNB peg stress on total cost**
<div class="center-xy">
  <img src="./images/graph10.png" alt="Normalized Total Funding Cost — CHF Peg vs Peg-Break Stress">
</div>

---

## Recommendation
- **Choose:** **Payer-fixed CHF swap** on **GBP 300m foreign**; **retain tenant hedge**.
- **Fixed annual costs (snapshot):** **GBP 6.72m (CHF-only)** vs float benchmarks **GBP 10.29m (CHF)** / **GBP 10.37m (JPY)**.
- **Savings vs float:** **≈ GBP 3.57m/yr (CHF-only)**; **GBP 3.22m/yr (JPY-only)**; **GBP 2.32m/yr (GBP+CHF)**; **GBP 1.97m/yr (GBP+JPY)**.
- **Resilience:** Base **DSCR ~2.7–2.8×**; swap stays **≥ 1.46–1.69×** under combined/peg stresses; **Equity ~GBP 406m** (no collateral).

---

## Q&A

---

## Additional Information

--

**Data & Background**
- The GBP/CHF series showed a slightly higher daily volatility (0.64%) and a more negative mean return (-0.015%) than GBP/JPY (-0.005%, 0.83%), indicating modest depreciation and greater stability of the Swiss franc relative to the yen.
- From 2004–2014, U.K. LIBOR rates averaged 3.18%—roughly triple those of Switzerland (1.16%) and Japan (0.60%)—highlighting the clear funding-cost advantage of issuing debt in CHF or JPY.
- Around the July 2014 deal date, actual LIBOR spreads were roughly 87 bps (GBP–CHF) and 73 bps (GBP–JPY), smaller than the memo’s assumed 125 bps and 110 bps, indicating its figures were likely based on earlier or rounded estimates.
- Data used from Bloomberg/Capital IQ (2004–2014) includes historical daily exchange rates for GBP/CHF, GBP/JPY, and EUR/CHF, along with corresponding 1-year LIBOR rates for CHF, JPY, and GBP to analyze borrowing cost differentials and currency-hedging risk.

--

**Interest Costs**


- Borrowing in CHF or JPY lowers average annual interest costs (~GBP 10.3m vs GBP 10.4m) relative to GBP-only debt (GBP 4.4m for GBP 100m), confirming clear cost savings from foreign funding.
- GBP-only benchmark: **GBP 4.4m per GBP 100m**.
- JPY debt shows slightly lower tail risk than CHF:
  - \( \mathrm{VaR}_{99}^{\text{JPY}} \approx \text{GBP }14.8\text{m} \)
  - \( \mathrm{VaR}_{99}^{\text{CHF}} \approx \text{GBP }18.1\text{m} \)
- CHF peg at **1.20 EUR/CHF** reduced volatility in normal periods.

--

- Even with the peg, CHF exposure carries **higher extreme-event risk** than JPY.
- Mean annual funding cost rises modestly:
  - \( \approx \text{GBP }10.29\text{m} \rightarrow \text{GBP }10.52\text{m} \)
- **Volatility and tail risk (VaR, ES)** remain virtually unchanged:
  - Short-term CHF rate stability and swap structure **cushion most impacts**.
- **Conclusion:** CHF depreciation modestly increases costs **without materially worsening extreme risk exposure**.


--

**Swap & Rate Sensitivity**

- Fixing rates via swaps raises total annual costs slightly (≈£7.97 m for GBP+CHF and £8.39 m for GBP+JPY) but locks in stability and removes exposure to floating-rate hikes.
- The CHF-only hedge provides the lowest fixed cost (£6.72 m) and highest savings (£3.57 m per year) relative to the unhedged case.
Overall, CHF funding with a fixed swap remains the most cost-efficient structure at the 2014 deal date.
- The rate-sensitivity chart shows that all hedged structures respond linearly to parallel rate shocks: a +100 bp increase in interest rates produces gains of roughly £3–4 million, while a −100 bp decline causes similar losses. 
- The GBP + JPY fixed hedge is slightly more rate-sensitive than the CHF structures, meaning its P&L changes more per basis-point move. Overall, both hedges effectively neutralize floating-rate exposure but remain exposed to moderate mark-to-market swings when rates shift sharply.
Note we use the last Libor in the data set as the Jan 2015 fixed cost (assumption).


--

**Natural Hedge and Covenants**

- The CHF swap converts the full **GBP 300m** foreign-currency loan from **floating (CHF LIBOR + 125 bp)** to a **fixed all-in ~1.94%**, lowering average annual financing costs to **≈ GBP 7.6m** vs **GBP 8.4m** floating.
- Tenant hedge locks **20% of total rent for 10 years** — half in **GBP** and half in **CHF**.
- Creates a natural offset between **CHF rental inflows** and **CHF debt payments**, **reducing net FX exposure** (but **does not** reduce the swap notional/size).

--

- **DSCR > 2.7×** throughout.
- **Equity growth:** **GBP 200m → GBP 406m**.
- **No collateral posting:** Equity value – loan value – swap **remains positive**; **DSCR ≥ 1** at all times.
- Under **rent**, **property**, or **CHF appreciation** shocks, the **swap-hedged** structure stays **covenant-safe**.
- The **unhedged float** case **breaches DSCR < 1** in rent-driven downturns.

--

**Recommendations**

- CHF-denominated financing provides a clear interest-rate advantage over GBP debt.  
- The fixed-rate swap + tenant’s CHF rental stream forms an effective, low-cost hedge against **rate and currency risk**.  
- Strong coverage and positive equity are maintained across the 10-year horizon, even under severe stress scenarios.
- **Policy watch:** Monitor Swiss National Bank stance; an abrupt change in the CHF–EUR floor or sustained CHF appreciation could tighten coverage margins.
- **Refinancing flexibility:** Keep options to rebalance or extend the swap at maturity, especially if refinancing occurs beyond year ten.

--

- **Liquidity buffer:** Set aside modest reserves (e.g., **1–2 years of debt service**) to reinforce covenant protection under extreme FX shocks.
- **Preserve natural hedge:** Maintain/expand the tenant hedge that aligns CHF revenues with CHF liabilities during lease renewals
- This structure **minimizes financing cost**, **stabilizes cash flow**, and **meets all covenant metrics**.  
- With prudent monitoring of CHF policy and refinancing risk, the investment’s **risk–return profile** supports a **Green Light** recommendation.
