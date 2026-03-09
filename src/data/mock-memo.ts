export const MOCK_MEMO_SECTIONS = [
  {
    id: "exec-summary",
    title: "Executive Summary",
    html: `
      <p><strong>Carré Haussmann</strong> is a 4,850 sqm prime office asset located at 14 Boulevard Haussmann, Paris 9ème, offered at <strong>€45,000,000</strong> representing a going-in cap rate of 4.2%. <span class="cite-im">[p.3]</span></p>
      <p>The asset is 94% leased to three investment-grade tenants with a WAULT of 5.8 years. The building underwent a comprehensive HQE-certified renovation in 2021, bringing it to current environmental standards. <span class="cite-im">[p.4]</span> <span class="cite-im">[p.12]</span></p>
      <p>Our analysis identifies a <strong>16.2% IRR over a 7-year hold</strong> under the base case, driven by contractual rent escalation (indexation to ILAT), reversionary upside on below-market leases, and improving Paris CBD vacancy dynamics. <span class="cite-model">[modeled]</span></p>
      <blockquote>Recommendation: <strong>Proceed to LOI</strong> — the asset offers strong risk-adjusted returns with limited downside given tenant quality and location.</blockquote>
    `,
  },
  {
    id: "market-analysis",
    title: "Market Analysis",
    html: `
      <h3>Paris CBD Office Market Overview</h3>
      <p>The Paris CBD (Central Business District) office market remains one of Europe's most resilient, with prime rents reaching <strong>€930/sqm/year</strong> in Q4 2025, up 3.1% year-over-year. <span class="cite-web">[JLL Paris Q4 2025]</span></p>
      <p>Overall CBD vacancy stands at <strong>2.8%</strong>, near historic lows, driven by constrained new supply and sustained demand from financial services and technology tenants. <span class="cite-web">[BNP RE Q4 2025]</span></p>

      <table>
        <tr><th>Metric</th><th>2023</th><th>2024</th><th>2025</th></tr>
        <tr><td>Prime Rent (€/sqm/yr)</td><td>€880</td><td>€905</td><td>€930</td></tr>
        <tr><td>CBD Vacancy Rate</td><td>3.4%</td><td>3.0%</td><td>2.8%</td></tr>
        <tr><td>Take-up (sqm, CBD)</td><td>485,000</td><td>512,000</td><td>538,000</td></tr>
        <tr><td>Investment Volume (€bn)</td><td>€12.1</td><td>€14.3</td><td>€15.8</td></tr>
      </table>

      <h3>Submarket: Paris 9ème</h3>
      <p>The 9th arrondissement benefits from excellent transport connectivity (Métro lines 7, 8, 9, 12, 13 within 500m), proximity to Gare Saint-Lazare, and a growing cluster of tech and media companies. <span class="cite-im">[p.8]</span></p>
      <p>Grade A vacancy in the 9th is <strong>1.9%</strong>, below the CBD average, reflecting the submarket's desirability. Recent transactions include 22 Rue de Mogador (€12,200/sqm) and 8 Rue de la Chaussée d'Antin (€13,100/sqm). <span class="cite-web">[Cushman & Wakefield]</span></p>
    `,
  },
  {
    id: "asset-assessment",
    title: "Asset Assessment",
    html: `
      <h3>Property Description</h3>
      <p>Carré Haussmann is a classic Haussmannian building spanning <strong>7 floors</strong> with a total GLA of <strong>4,850 sqm</strong>, including 4,560 sqm of office space and 290 sqm of ground-floor retail. The asset features a landscaped interior courtyard and 12 underground parking spaces. <span class="cite-im">[p.5]</span> <span class="cite-im">[p.6]</span></p>

      <table>
        <tr><th>Characteristic</th><th>Detail</th></tr>
        <tr><td>Address</td><td>14 Boulevard Haussmann, 75009 Paris</td></tr>
        <tr><td>Year Built / Renovated</td><td>1892 / 2021</td></tr>
        <tr><td>Total GLA</td><td>4,850 sqm</td></tr>
        <tr><td>Floors</td><td>B2 to R+6</td></tr>
        <tr><td>Certification</td><td>HQE Excellent (2021)</td></tr>
        <tr><td>Parking</td><td>12 spaces (underground)</td></tr>
        <tr><td>EPC Rating</td><td>B</td></tr>
      </table>

      <h3>Tenant Schedule</h3>
      <p>The asset is <strong>94% occupied</strong> by three corporate tenants. All leases are 3/6/9 commercial leases indexed to ILAT. <span class="cite-im">[p.14]</span></p>

      <table>
        <tr><th>Tenant</th><th>Area (sqm)</th><th>Rent (€/sqm)</th><th>Expiry</th><th>Break</th></tr>
        <tr><td>Société Générale CIB</td><td>2,400</td><td>€780</td><td>2031</td><td>2028</td></tr>
        <tr><td>Capgemini Engineering</td><td>1,600</td><td>€820</td><td>2032</td><td>2029</td></tr>
        <tr><td>Publicis Groupe</td><td>560</td><td>€850</td><td>2030</td><td>2027</td></tr>
        <tr><td><em>Vacant</em></td><td>290</td><td>—</td><td>—</td><td>—</td></tr>
      </table>

      <h3>Condition & CapEx</h3>
      <p>The 2021 renovation (€3.2M invested by current owner) addressed MEP systems, common areas, and facade restoration. No significant CapEx is anticipated within the first 5 years. Remaining items are cosmetic tenant improvements estimated at <strong>€150/sqm</strong> upon lease turnover. <span class="cite-im">[p.18]</span> <span class="cite-model">[modeled]</span></p>
    `,
  },
  {
    id: "investment-thesis",
    title: "Investment Thesis",
    html: `
      <h3>Core-Plus Return Profile</h3>
      <p>The deal offers a <strong>core-plus return profile</strong> with multiple value creation levers: <span class="cite-model">[modeled]</span></p>
      <ul>
        <li><strong>Contractual Escalation:</strong> ILAT indexation provides 2.5-3.0% annual rental growth on in-place leases</li>
        <li><strong>Reversionary Upside:</strong> In-place rents average €800/sqm vs. ERV of €920/sqm — a 15% reversion potential upon lease expiry</li>
        <li><strong>Vacancy Fill:</strong> Ground-floor retail unit (290 sqm) can be leased at €950/sqm given prime boulevard frontage</li>
        <li><strong>Cap Rate Compression:</strong> Paris CBD prime yields have compressed from 3.8% to 3.4% over 2024-2025; further tightening expected</li>
      </ul>

      <h3>Financial Summary</h3>
      <table>
        <tr><th>Metric</th><th>Base Case</th><th>Downside</th><th>Upside</th></tr>
        <tr><td>Acquisition Price</td><td>€45.0M</td><td>€45.0M</td><td>€45.0M</td></tr>
        <tr><td>Going-in Cap Rate</td><td>4.2%</td><td>4.2%</td><td>4.2%</td></tr>
        <tr><td>Exit Cap Rate (Yr 7)</td><td>3.8%</td><td>4.5%</td><td>3.5%</td></tr>
        <tr><td>Levered IRR</td><td>16.2%</td><td>10.8%</td><td>19.7%</td></tr>
        <tr><td>Equity Multiple</td><td>2.1x</td><td>1.7x</td><td>2.4x</td></tr>
        <tr><td>Cash-on-Cash (Yr 1)</td><td>5.8%</td><td>5.8%</td><td>5.8%</td></tr>
      </table>
      <p><em>Assumes 55% LTV at 3.2% fixed rate, 7-year hold.</em> <span class="cite-model">[modeled]</span></p>
    `,
  },
  {
    id: "risk-factors",
    title: "Risk Factors",
    html: `
      <ul>
        <li><strong>Tenant Concentration:</strong> Société Générale represents 49% of GLA. A non-renewal at the 2028 break would require 12-18 months of downtime and TI spend. <em>Mitigant:</em> SG has invested in fit-out and the 9th arrondissement location aligns with their operational hub strategy. <span class="cite-im">[p.22]</span></li>
        <li><strong>Interest Rate Sensitivity:</strong> A 100bps increase in exit cap rate reduces levered IRR to 12.4%. <span class="cite-model">[modeled]</span></li>
        <li><strong>Regulatory Risk:</strong> French DPE regulations may require additional energy upgrades post-2030 for buildings rated below C. Current B rating provides a buffer but should be monitored. <span class="cite-web">[ADEME 2025]</span></li>
        <li><strong>Liquidity Risk:</strong> Lot size (€45M) is within the most liquid segment for Paris office transactions. No concerns on exit marketability. <span class="cite-web">[CBRE France 2025]</span></li>
      </ul>
    `,
  },
  {
    id: "recommendation",
    title: "Recommendation",
    html: `
      <p>We recommend <strong>proceeding to Letter of Intent</strong> at the asking price of €45,000,000, subject to:</p>
      <ul>
        <li>Confirmation of tenant financial covenants and lease guarantees</li>
        <li>Technical due diligence on MEP systems (post-renovation warranty review)</li>
        <li>Environmental Phase I assessment</li>
        <li>Notarial title review and urban planning compliance</li>
      </ul>
      <p>The asset's combination of prime location, investment-grade tenancy, recent renovation, and contractual income growth provides an attractive risk-adjusted entry point in what remains Europe's deepest office investment market. <span class="cite-im">[p.3]</span> <span class="cite-web">[Knight Frank Paris Outlook 2026]</span></p>
    `,
  },
];

export const MOCK_PROCESSING_STEPS = [
  { id: "upload", label: "Uploading document" },
  { id: "ocr", label: "Extracting text (Gemini OCR)" },
  { id: "segment", label: "Segmenting into categories" },
  { id: "agents", label: "Running analysis agents" },
  { id: "memo", label: "Generating IC memo" },
];

export const STEP_DELAYS = [800, 1600, 1800, 2200, 1600];
