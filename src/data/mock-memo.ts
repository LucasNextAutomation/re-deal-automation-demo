export const MOCK_MEMO_SECTIONS = [
  {
    id: "exec-summary",
    title: "Executive Summary",
    html: `
      <p><strong>Meridian Tower</strong> is a 186,400 SF Class A office and retail asset located at 350 Park Avenue, Midtown Manhattan, NY, offered at <strong>$142,000,000</strong> representing a going-in cap rate of 4.85%. <span class="cite-im">[p.3]</span></p>
      <p>The property is 91.3% leased to a diversified mix of investment-grade and creditworthy tenants across 14 leases, anchored by Deloitte LLP (38% of NRA) and Morgan Stanley Wealth Management (22% of NRA). The WAULT stands at 6.4 years. <span class="cite-im">[p.4]</span> <span class="cite-im">[p.14]</span></p>
      <p>Stabilized NOI of <strong>$6,887,000</strong> supports a Debt Service Coverage Ratio (DSCR) of <strong>1.42x</strong> and a debt yield of <strong>8.1%</strong> at 60% LTV. Our analysis identifies a <strong>14.8% levered IRR over a 7-year hold</strong> under the base case, driven by contractual rent escalation, reversionary upside on below-market leases, and improving Midtown East vacancy dynamics. <span class="cite-model">[modeled]</span></p>
      <blockquote>Recommendation: <strong>Proceed to LOI</strong> — the asset offers strong risk-adjusted returns with solid debt coverage metrics and limited downside given tenant credit quality and location.</blockquote>
    `,
  },
  {
    id: "market-analysis",
    title: "Market Analysis",
    html: `
      <h3>Midtown Manhattan Office Market Overview</h3>
      <p>The Midtown Manhattan office market continues to recover, with Class A asking rents reaching <strong>$82.50/SF</strong> in Q4 2025, up 2.8% year-over-year. Overall Midtown vacancy has declined to <strong>12.4%</strong>, down from 14.1% a year ago, as return-to-office mandates and flight-to-quality trends strengthen demand for premium assets. <span class="cite-web">[CBRE Midtown Manhattan Q4 2025]</span></p>
      <p>Net absorption in Midtown totaled <strong>4.2M SF</strong> in 2025, the strongest annual figure since 2019, driven primarily by financial services, legal, and technology sectors. <span class="cite-web">[JLL NYC Office Market Outlook 2026]</span></p>

      <table>
        <tr><th>Metric</th><th>2023</th><th>2024</th><th>2025</th></tr>
        <tr><td>Class A Asking Rent ($/SF)</td><td>$78.20</td><td>$80.25</td><td>$82.50</td></tr>
        <tr><td>Midtown Vacancy Rate</td><td>15.2%</td><td>14.1%</td><td>12.4%</td></tr>
        <tr><td>Net Absorption (M SF)</td><td>1.8</td><td>3.1</td><td>4.2</td></tr>
        <tr><td>Investment Sales Volume ($B)</td><td>$8.6</td><td>$11.2</td><td>$14.7</td></tr>
      </table>

      <h3>Submarket: Park Avenue Corridor (46th-57th St)</h3>
      <p>The Park Avenue corridor between 46th and 57th Streets remains Manhattan's premier office submarket, home to major financial institutions, law firms, and consulting companies. Class A vacancy in this micro-market is <strong>8.7%</strong>, well below the broader Midtown average. <span class="cite-im">[p.8]</span></p>
      <p>Recent comparable transactions include 375 Park Avenue ($1,050/SF, 4.2% cap), 280 Park Avenue ($925/SF, 4.6% cap), and 425 Park Avenue ($1,180/SF, 3.9% cap). The subject's basis of <strong>$762/SF</strong> represents a compelling entry relative to corridor comps. <span class="cite-web">[Real Capital Analytics]</span></p>
    `,
  },
  {
    id: "asset-assessment",
    title: "Asset Assessment",
    html: `
      <h3>Property Description</h3>
      <p>Meridian Tower is a <strong>32-story</strong> Class A office tower with ground-floor retail, totaling <strong>186,400 SF</strong> (170,200 SF office / 16,200 SF retail). Originally constructed in 1963, the property underwent a comprehensive $18M capital improvement program completed in 2023, including full lobby renovation, elevator modernization, MEP upgrades, and new curtain wall glazing. <span class="cite-im">[p.5]</span> <span class="cite-im">[p.6]</span></p>

      <table>
        <tr><th>Characteristic</th><th>Detail</th></tr>
        <tr><td>Address</td><td>350 Park Avenue, New York, NY 10022</td></tr>
        <tr><td>Year Built / Renovated</td><td>1963 / 2023</td></tr>
        <tr><td>Total GLA</td><td>186,400 SF (Office: 170,200 / Retail: 16,200)</td></tr>
        <tr><td>Floors</td><td>32 above grade, 2 below</td></tr>
        <tr><td>Zoning</td><td>C5-3 (as-of-right commercial)</td></tr>
        <tr><td>ENERGY STAR Score</td><td>82 / 100</td></tr>
        <tr><td>Parking</td><td>None (3 garage facilities within 1 block)</td></tr>
        <tr><td>Tax Lot</td><td>Block 1305, Lot 6</td></tr>
      </table>

      <h3>Tenant Schedule</h3>
      <p>The property is <strong>91.3%</strong> occupied across 14 leases. Major tenants include two investment-grade anchors representing 60% of NRA. All leases contain annual escalations of 2.5-3.0%. <span class="cite-im">[p.14]</span></p>

      <table>
        <tr><th>Tenant</th><th>SF</th><th>% NRA</th><th>Rent ($/SF)</th><th>Expiry</th><th>Credit</th></tr>
        <tr><td>Deloitte LLP</td><td>70,832</td><td>38.0%</td><td>$76.00</td><td>2032</td><td>Inv. Grade</td></tr>
        <tr><td>Morgan Stanley WM</td><td>41,008</td><td>22.0%</td><td>$82.00</td><td>2031</td><td>Inv. Grade</td></tr>
        <tr><td>Kirkland & Ellis</td><td>18,640</td><td>10.0%</td><td>$85.00</td><td>2030</td><td>Strong</td></tr>
        <tr><td>Citadel Securities</td><td>14,912</td><td>8.0%</td><td>$88.00</td><td>2033</td><td>Strong</td></tr>
        <tr><td>Retail (3 tenants)</td><td>14,580</td><td>7.8%</td><td>$125.00</td><td>Various</td><td>Varies</td></tr>
        <tr><td>Other Office (4)</td><td>10,228</td><td>5.5%</td><td>$74.00</td><td>2028-30</td><td>Moderate</td></tr>
        <tr><td><em>Vacant</em></td><td>16,200</td><td>8.7%</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td></tr>
      </table>

      <h3>Condition & CapEx</h3>
      <p>The 2023 renovation ($18M / $97/SF invested by current owner) addressed all major building systems. The Property Condition Assessment (PCA) estimates <strong>$1.2M</strong> in deferred maintenance over the first 5 years, primarily elevator cab finishes and roofing membrane. Tenant improvement allowances for upcoming rollovers are budgeted at <strong>$65/SF</strong>. <span class="cite-im">[p.18]</span> <span class="cite-model">[modeled]</span></p>
    `,
  },
  {
    id: "underwriting",
    title: "Underwriting & Debt Analysis",
    html: `
      <h3>Income & Expense Summary</h3>
      <table>
        <tr><th>Line Item</th><th>Year 1 ($)</th><th>$/SF</th><th>% EGI</th></tr>
        <tr><td>Gross Potential Rent</td><td>$14,892,000</td><td>$79.89</td><td>&mdash;</td></tr>
        <tr><td>Vacancy & Credit Loss (8.7%)</td><td>($1,295,600)</td><td>($6.95)</td><td>&mdash;</td></tr>
        <tr><td>Effective Gross Income</td><td>$13,596,400</td><td>$72.94</td><td>100%</td></tr>
        <tr><td>Operating Expenses</td><td>($5,374,400)</td><td>($28.83)</td><td>39.5%</td></tr>
        <tr><td>Real Estate Taxes</td><td>($1,335,000)</td><td>($7.16)</td><td>9.8%</td></tr>
        <tr><td><strong>Net Operating Income</strong></td><td><strong>$6,887,000</strong></td><td><strong>$36.95</strong></td><td><strong>50.7%</strong></td></tr>
      </table>

      <h3>Debt Service Coverage Analysis</h3>
      <p>Based on the proposed financing structure, the property demonstrates strong debt coverage metrics across all scenarios: <span class="cite-model">[modeled]</span></p>
      <table>
        <tr><th>Metric</th><th>Proposed</th><th>Lender Min.</th><th>Status</th></tr>
        <tr><td>Loan Amount</td><td>$85,200,000</td><td>&mdash;</td><td>&mdash;</td></tr>
        <tr><td>Loan-to-Value (LTV)</td><td>60.0%</td><td>&le; 65%</td><td>Pass</td></tr>
        <tr><td>Debt Service Coverage (DSCR)</td><td>1.42x</td><td>&ge; 1.25x</td><td>Pass</td></tr>
        <tr><td>Debt Yield</td><td>8.1%</td><td>&ge; 7.5%</td><td>Pass</td></tr>
        <tr><td>Interest Rate</td><td>5.25% Fixed</td><td>&mdash;</td><td>&mdash;</td></tr>
        <tr><td>Amortization</td><td>30 years</td><td>&mdash;</td><td>&mdash;</td></tr>
        <tr><td>Annual Debt Service</td><td>$4,848,000</td><td>&mdash;</td><td>&mdash;</td></tr>
        <tr><td>After-Debt Cash Flow</td><td>$2,039,000</td><td>&mdash;</td><td>&mdash;</td></tr>
      </table>

      <h3>Stress Test — DSCR Sensitivity</h3>
      <p>The property maintains adequate debt coverage even under adverse scenarios: <span class="cite-model">[modeled]</span></p>
      <table>
        <tr><th>Scenario</th><th>NOI</th><th>DSCR</th></tr>
        <tr><td>Base Case</td><td>$6,887,000</td><td>1.42x</td></tr>
        <tr><td>Deloitte Non-Renewal</td><td>$5,248,000</td><td>1.08x</td></tr>
        <tr><td>15% Rent Decline</td><td>$5,854,000</td><td>1.21x</td></tr>
        <tr><td>20% Vacancy</td><td>$5,510,000</td><td>1.14x</td></tr>
      </table>
      <p><em>Note: Deloitte non-renewal scenario assumes 12-month downtime + $65/SF TI cost. Breakeven occupancy is 70.4%.</em></p>
    `,
  },
  {
    id: "investment-thesis",
    title: "Investment Thesis",
    html: `
      <h3>Core-Plus Return Profile</h3>
      <p>The acquisition offers a <strong>core-plus return profile</strong> with multiple value creation levers: <span class="cite-model">[modeled]</span></p>
      <ul>
        <li><strong>Contractual Escalation:</strong> 2.5-3.0% annual rent bumps embedded in all major leases provide organic NOI growth</li>
        <li><strong>Reversionary Upside:</strong> In-place office rents average $79.89/SF vs. market of $82.50/SF — 3.3% mark-to-market opportunity on rollover</li>
        <li><strong>Vacancy Fill:</strong> 16,200 SF of vacant space can be leased at market rates ($82-85/SF office, $130/SF retail), adding ~$1.4M to NOI</li>
        <li><strong>Basis Advantage:</strong> $762/SF acquisition basis vs. $925-1,180/SF corridor comps provides downside protection</li>
      </ul>

      <h3>Return Summary</h3>
      <table>
        <tr><th>Metric</th><th>Base Case</th><th>Downside</th><th>Upside</th></tr>
        <tr><td>Acquisition Price</td><td>$142.0M</td><td>$142.0M</td><td>$142.0M</td></tr>
        <tr><td>Going-in Cap Rate</td><td>4.85%</td><td>4.85%</td><td>4.85%</td></tr>
        <tr><td>Exit Cap Rate (Yr 7)</td><td>4.50%</td><td>5.25%</td><td>4.00%</td></tr>
        <tr><td>Levered IRR</td><td>14.8%</td><td>9.4%</td><td>18.6%</td></tr>
        <tr><td>Equity Multiple</td><td>2.0x</td><td>1.6x</td><td>2.3x</td></tr>
        <tr><td>Cash-on-Cash (Yr 1)</td><td>3.6%</td><td>3.6%</td><td>3.6%</td></tr>
        <tr><td>DSCR (Yr 1)</td><td>1.42x</td><td>1.42x</td><td>1.42x</td></tr>
      </table>
      <p><em>Assumes 60% LTV at 5.25% fixed rate, 30-yr amortization, 7-year hold.</em> <span class="cite-model">[modeled]</span></p>
    `,
  },
  {
    id: "risk-factors",
    title: "Risk Factors",
    html: `
      <ul>
        <li><strong>Tenant Concentration:</strong> Deloitte represents 38% of NRA and 37% of rental income. A non-renewal at 2032 expiry would require significant re-leasing effort. <em>Mitigant:</em> Deloitte invested $12M in buildout (2021) and the location serves their Northeast advisory practice — relocation unlikely. <span class="cite-im">[p.22]</span></li>
        <li><strong>Interest Rate Sensitivity:</strong> A 100bps increase in the exit cap rate reduces levered IRR from 14.8% to 10.2%. Refinancing risk is moderate given current rate environment. <span class="cite-model">[modeled]</span></li>
        <li><strong>Near-Term Rollover:</strong> 15.5% of NRA (other office tenants) rolls in 2028-2030. Downtime and TI costs budgeted at $65/SF. <span class="cite-im">[p.14]</span></li>
        <li><strong>NYC Tax Escalation:</strong> Property tax assessments have increased 4.2% annually over the past 3 years. Budgeted at 3.5% growth. <span class="cite-web">[NYC DOF Property Tax Records]</span></li>
        <li><strong>Remote Work Impact:</strong> Midtown Class A has proven more resilient (8.7% sub-vacancy vs. 15%+ Class B/C), but structural shifts in office demand remain a macro risk. <span class="cite-web">[Cushman & Wakefield Plaza District]</span></li>
      </ul>
    `,
  },
  {
    id: "recommendation",
    title: "Recommendation",
    html: `
      <p>We recommend <strong>proceeding to Letter of Intent</strong> at the asking price of $142,000,000, subject to:</p>
      <ul>
        <li>Estoppel certificates and tenant financial statements for all leases &gt;5,000 SF</li>
        <li>Phase I Environmental Site Assessment (ESA)</li>
        <li>Property Condition Assessment (PCA) with CapEx reserve validation</li>
        <li>Title and survey review, including air rights and zoning compliance</li>
        <li>Rent roll audit and operating expense reconciliation (trailing 3 years)</li>
        <li>Appraisal (MAI-certified) confirming value supports 60% LTV</li>
      </ul>
      <p>The asset's combination of Park Avenue location, investment-grade tenancy, recently renovated condition, and strong debt coverage metrics (1.42x DSCR, 8.1% debt yield) provides an attractive risk-adjusted entry point for a core-plus strategy in Manhattan's premier office corridor. <span class="cite-im">[p.3]</span> <span class="cite-web">[CBRE Midtown Manhattan Q4 2025]</span></p>
    `,
  },
];

export const MOCK_PROCESSING_STEPS = [
  { id: "upload", label: "Uploading document" },
  { id: "ocr", label: "Extracting text & tables (Gemini OCR)" },
  { id: "extract", label: "Identifying deal parameters" },
  { id: "segment", label: "Segmenting into analysis categories" },
  { id: "agents", label: "Running parallel analysis agents" },
  { id: "memo", label: "Generating IC memo" },
];

export const STEP_DELAYS = [800, 1400, 1200, 1600, 2200, 1600];

export const MOCK_EXTRACTED_FIELDS = {
  assetName: "Meridian Tower",
  location: "350 Park Avenue, Midtown Manhattan, NY",
  assetType: "Class A Office + Retail",
  askingPrice: "$142,000,000",
  gla: "186,400 SF",
  occupancy: "91.3%",
  capRate: "4.85%",
  wault: "6.4 years",
  yearBuilt: "1963 / Renovated 2023",
  pages: 10,
};
