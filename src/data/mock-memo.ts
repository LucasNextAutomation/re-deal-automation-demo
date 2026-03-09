/* ─── Execution History ─── */
export const EXECUTION_HISTORY = [
  { id: 67, name: "Crowne Plaza SFO", type: "Hotel", date: "Feb 11, 2026", status: "complete" as const, agents: 3 },
  { id: 66, name: "Park Newhall 36-Unit", type: "Multifamily", date: "Feb 11, 2026", status: "complete" as const, agents: 3 },
  { id: 65, name: "Meridian Tower", type: "Office", date: "Feb 10, 2026", status: "complete" as const, agents: 3 },
  { id: 64, name: "Gateway Commerce Center", type: "Flex / Office", date: "Feb 9, 2026", status: "complete" as const, agents: 3 },
];

/* ─── Deal Summary Sections (from n8n execution #67 — Crowne Plaza SFO) ─── */
export const MOCK_MEMO_SECTIONS = [
  {
    id: "opportunity",
    title: "Opportunity Overview",
    customizable: true,
    html: `
      <p>Acquire a <strong>309-key full-service Crowne Plaza</strong> adjacent to SFO (3 miles) on a 4.97-acre site with substantial meeting inventory (11,994 SF), strong highway visibility (US-101, ~250,000 vpd) and an unencumbered management/franchise position enabling an immediate reposition/rebrand and value-add plan. <span class="cite-im">[IM p.2]</span> <span class="cite-im">[IM p.4]</span> <span class="cite-im">[IM p.9]</span></p>

      <table>
        <tr><th>Parameter</th><th>Detail</th></tr>
        <tr><td>Asset</td><td>Crowne Plaza SFO Airport — 309 keys (incl. 11 suites, 1 presidential)</td></tr>
        <tr><td>Location</td><td>1177 Airport Blvd, Burlingame, CA 94010</td></tr>
        <tr><td>Site</td><td>4.97 acres, 10-story tower + two single-story wings</td></tr>
        <tr><td>Year Built / Converted</td><td>1973 / Crowne Plaza conversion 2002</td></tr>
        <tr><td>Meeting Space</td><td>11,994 SF across 17 rooms (Plaza Ballroom 5,040 SF)</td></tr>
        <tr><td>Parking</td><td>337 spaces (277 surface, 60 subterranean)</td></tr>
        <tr><td>Management</td><td>Offered free of any management encumbrances</td></tr>
        <tr><td>Franchise</td><td>Crowne Plaza (IHG) — expires July 2017; termination = 36 months fees</td></tr>
        <tr><td>Asking Price</td><td>NOT PROVIDED <span class="cite-gap">[DATA GAP]</span></td></tr>
      </table>

      <blockquote>The SFO airport submarket ranks 4th in U.S. RevPAR, with +21.0% YTD growth — the strongest of any top-25 market. The property is positioned for an immediate value-add play through renovation, rebranding, and meeting-space monetization.</blockquote>
    `,
  },
  {
    id: "market-analysis",
    title: "Market & Location Analysis",
    customizable: true,
    html: `
      <h3>Market Tier & Connectivity</h3>
      <p>The SFO Airport full-service hotel submarket is a <strong>Top-Tier gateway airport market</strong>, ranking 4th in U.S. RevPAR behind NYC, Honolulu, and Miami. <span class="cite-im">[IM p.5]</span> Occupancy reached 78.3% YTD 2011 and peaked at ~79% in October 2023. <span class="cite-im">[IM p.23]</span> <span class="cite-web">[STR 2023]</span></p>
      <ul>
        <li><strong>Road:</strong> Direct frontage on US-101 (~250,000 vehicles/day) <span class="cite-im">[IM p.5]</span></li>
        <li><strong>Air:</strong> 3 miles to SFO serving ~39.4M passengers (2010); direct BART link <span class="cite-im">[IM p.8]</span></li>
        <li><strong>Rail:</strong> Burlingame Caltrain station ~1 mile (Peninsula service to SF/Silicon Valley) <span class="cite-web">[MARKET]</span></li>
        <li><strong>Walk Score:</strong> 70 (Burlingame citywide) <span class="cite-web">[walkscore.com]</span></li>
      </ul>

      <h3>Supply & Demand Dynamics</h3>
      <table>
        <tr><th>Metric</th><th>2009</th><th>2010</th><th>YTD 2011</th><th>2023</th></tr>
        <tr><td>Submarket Occupancy</td><td>70.8%</td><td>74.6%</td><td>78.3%</td><td>~79%</td></tr>
        <tr><td>ADR</td><td>$99.30</td><td>$99.57</td><td>$103.24</td><td>$151.13</td></tr>
        <tr><td>RevPAR Growth (YoY)</td><td>—</td><td>+5.4%</td><td>+14.6%</td><td>+0.3%</td></tr>
      </table>
      <p><span class="cite-im">[IM p.23]</span> <span class="cite-web">[STR / sftravel.com 2023]</span></p>

      <h3>Barriers to Entry</h3>
      <ul>
        <li>FAA Part 77 height restrictions around SFO <span class="cite-web">[MARKET]</span></li>
        <li>Extremely limited developable land in Burlingame — no material new full-service hotel pipeline <span class="cite-web">[asianhospitality.com]</span></li>
        <li>High entitlement costs and CEQA environmental review requirements <span class="cite-web">[MARKET]</span></li>
      </ul>

      <h3>Demographics</h3>
      <table>
        <tr><th>Metric</th><th>Value</th></tr>
        <tr><td>Population (Burlingame)</td><td>~30,500</td></tr>
        <tr><td>Median Household Income</td><td>$168,832</td></tr>
        <tr><td>Unemployment (San Mateo Co.)</td><td>3.4%</td></tr>
        <tr><td>Major Employers</td><td>SFO, United Airlines, Genentech, Meta, Oracle, Visa, LinkedIn</td></tr>
      </table>
      <p><span class="cite-web">[Census / BLS 2023]</span></p>
    `,
  },
  {
    id: "asset-assessment",
    title: "Asset Assessment",
    customizable: true,
    html: `
      <h3>Building Metrics</h3>
      <p>The Crowne Plaza consists of a <strong>10-story interior corridor tower</strong> with two single-story wings above one level of subterranean parking. Built in 1973 and converted to Crowne Plaza in 2002, with guest bath refresh in 2007-08. <span class="cite-im">[IM p.7]</span> <span class="cite-im">[IM p.9]</span></p>

      <h3>Room Mix</h3>
      <table>
        <tr><th>Room Type</th><th>Count</th></tr>
        <tr><td>King</td><td>119</td></tr>
        <tr><td>Double/Double</td><td>133</td></tr>
        <tr><td>Queen</td><td>46</td></tr>
        <tr><td>Suite</td><td>10</td></tr>
        <tr><td>Presidential Suite</td><td>1</td></tr>
        <tr><td><strong>Total</strong></td><td><strong>309</strong></td></tr>
      </table>
      <p><span class="cite-im">[IM p.11]</span></p>

      <h3>Amenities & F&B</h3>
      <ul>
        <li>West Bay Café & Lounge — full-service restaurant/bar, 24-hour room service <span class="cite-im">[IM p.5]</span></li>
        <li>Indoor swimming pool & whirlpool, fitness center, business center <span class="cite-im">[IM p.7]</span></li>
        <li>Gift shop (leased to Amerika International), barber shop (Michael's Barber Shop) <span class="cite-im">[IM p.10]</span></li>
        <li>Complimentary airport shuttle, wireless internet <span class="cite-im">[IM p.7]</span></li>
      </ul>

      <h3>Competitive Set</h3>
      <table>
        <tr><th>Hotel</th><th>Location</th></tr>
        <tr><td>Hilton SF Airport</td><td>600 Airport Blvd</td></tr>
        <tr><td>Doubletree SF Airport</td><td>835 Airport Blvd</td></tr>
        <tr><td>Hilton Garden Inn SF Airport</td><td>765 Airport Blvd</td></tr>
        <tr><td>Clarion SF Airport</td><td>401 E. Millbrae Ave</td></tr>
        <tr><td>Radisson SF Bay Front</td><td>5000 Sierra Point Pkwy</td></tr>
      </table>
      <p>Crowne Plaza's ADR index fell from 115% to 99% of comp set by July 2011, signaling value-add upside via renovation/brand repositioning. <span class="cite-im">[IM p.24]</span></p>

      <h3>Labor & Franchise</h3>
      <ul>
        <li><strong>Union labor:</strong> Local 39 (Engineers), Local 856 (Front Desk, Bell Stand, Accounting), Local 2 Unite Here (Restaurant, Banquets) <span class="cite-im">[IM p.7]</span></li>
        <li><strong>Franchise fees:</strong> 5% royalty + 3% marketing + $11.34/room technology fee <span class="cite-im">[IM p.4]</span></li>
      </ul>
    `,
  },
  {
    id: "financial-analysis",
    title: "Financial Analysis",
    customizable: true,
    html: `
      <h3>Historical Operating Performance</h3>
      <table>
        <tr><th>Metric</th><th>2008</th><th>2009</th><th>2010</th><th>2011F</th></tr>
        <tr><td>Total Revenue</td><td>$12.04M</td><td>$10.34M</td><td>$10.46M</td><td>$11.78M</td></tr>
        <tr><td>GOP Margin</td><td>15.1%</td><td>9.2%</td><td>—</td><td>9.2%</td></tr>
        <tr><td>NOI</td><td>$0.15M</td><td>($1.24M)</td><td>—</td><td>$0.25M</td></tr>
        <tr><td>NOI Margin</td><td>1.3%</td><td>(12.0%)</td><td>—</td><td>2.1%</td></tr>
      </table>
      <p><span class="cite-im">[IM p.26]</span></p>

      <h3>Modeled Stabilized Performance (Year 4-5)</h3>
      <table>
        <tr><th>Line Item</th><th>Modeled</th><th>Source</th></tr>
        <tr><td>Rooms Revenue</td><td>$12.5M</td><td><span class="cite-model">[MODELED]</span></td></tr>
        <tr><td>F&B Revenue</td><td>$3.1M</td><td><span class="cite-model">[MODELED]</span></td></tr>
        <tr><td>Other Revenue</td><td>$82K</td><td><span class="cite-model">[MODELED]</span></td></tr>
        <tr><td>ADR (Stabilized)</td><td>$136.75</td><td><span class="cite-im">[IM p.30]</span></td></tr>
        <tr><td>Occupancy (Stabilized)</td><td>81%</td><td><span class="cite-im">[IM p.30]</span></td></tr>
        <tr><td>NOI (Stabilized)</td><td>~$3.0M</td><td><span class="cite-im">[IM p.31]</span></td></tr>
        <tr><td>NOI Margin</td><td>17.8%</td><td><span class="cite-im">[IM p.31]</span></td></tr>
      </table>

      <h3>Return & Debt Analysis</h3>
      <table>
        <tr><th>Metric</th><th>Value</th><th>Source</th></tr>
        <tr><td>Asking Price</td><td>NOT PROVIDED</td><td><span class="cite-gap">[DATA GAP]</span></td></tr>
        <tr><td>Going-in Cap Rate</td><td>CANNOT CALCULATE</td><td><span class="cite-gap">[DATA GAP]</span></td></tr>
        <tr><td>Target Gross IRR</td><td>12%</td><td><span class="cite-model">[MODELED]</span></td></tr>
        <tr><td>Assumed LTV</td><td>60-65%</td><td><span class="cite-web">[MARKET]</span></td></tr>
        <tr><td>Assumed Rate</td><td>~4.5-5.0% fixed</td><td><span class="cite-web">[MARKET]</span></td></tr>
        <tr><td>Year 1 DSCR</td><td>&lt;1.0x (negative CF)</td><td><span class="cite-model">[MODELED]</span></td></tr>
        <tr><td>Market Cap Rate Range</td><td>6.0%-7.0%</td><td><span class="cite-web">[MARKET]</span></td></tr>
        <tr><td>FF&E Reserve</td><td>4% of revenue</td><td><span class="cite-im">[IM p.26]</span></td></tr>
      </table>

      <h3>Exit Sensitivity</h3>
      <table>
        <tr><th>Stabilized NOI</th><th>Exit Cap 7.0%</th><th>Exit Cap 6.5%</th><th>Exit Cap 6.0%</th></tr>
        <tr><td>$3.0M</td><td>$42.9M</td><td>$46.2M</td><td>$50.0M</td></tr>
        <tr><td>$3.2M (broker model)</td><td>$45.7M</td><td>$49.2M</td><td>$53.3M</td></tr>
        <tr><td>$10M (aggressive est.)</td><td>$142.9M</td><td>$153.8M</td><td>$166.7M</td></tr>
      </table>
      <p><span class="cite-model">[MODELED]</span> <span class="cite-web">[MARKET]</span></p>
    `,
  },
  {
    id: "value-creation",
    title: "Value Creation Plan",
    customizable: true,
    html: `
      <ul>
        <li><strong>Renovation & ADR Uplift:</strong> Soft-goods/guestroom refresh estimated $5K-$7K/room (total $1.5M-$2.2M) plus public-space upgrades and technology packages. Target ADR ramp from $83.60 (2010) → $95.00 (Year 1) → $136.75 (stabilized Year 4). <span class="cite-im">[IM p.30]</span> <span class="cite-model">[ESTIMATED]</span></li>
        <li><strong>Revenue Management:</strong> Reprice and capture higher transient, corporate, and group rates. Optimize 11,994 SF of meeting space across 17 rooms for group/MICE revenue. Current ADR index at 99% of comp set vs. historical peak of 115% — significant recapture opportunity. <span class="cite-im">[IM p.24]</span></li>
        <li><strong>Rebranding Optionality:</strong> Property offered free of management. Crowne Plaza franchise expires July 2017 — flexibility to rebrand to higher-tier flag (Hilton, Marriott) or soft brand. <span class="cite-im">[IM p.5]</span> <span class="cite-im">[IM p.4]</span></li>
        <li><strong>Ancillary Development:</strong> 4,600 SF retail pad already identified and marketed — opportunity for lease or JV to drive ancillary income. <span class="cite-im">[IM p.6]</span></li>
        <li><strong>Operational Improvements:</strong> Tighten departmental expense ratios, improve F&B margins (currently high-cost), and optimize contracted business rates that presently lag comps. <span class="cite-im">[IM p.30]</span></li>
      </ul>
    `,
  },
  {
    id: "risk-assessment",
    title: "Risk Assessment",
    customizable: true,
    html: `
      <ul>
        <li><strong>Missing Price / TTM NOI:</strong> <span class="cite-gap">[CRITICAL]</span> Asking price and trailing-twelve-month financials are not provided. Cannot calculate going-in cap rate, leverage returns, or finalize underwriting. The package is rated <strong>INCOMPLETE</strong> for commitment. <span class="cite-im">[IM]</span></li>
        <li><strong>Execution & CapEx Risk:</strong> Substantial FF&E and public-space investment required in Year 1-2 to deliver ADR targets. Renovation downtime and cost-overrun risk. ADR ramp expectations (21% Year 1→2, 13% Year 2→3) exceed submarket historical ADR growth of 5-7%. <span class="cite-im">[IM p.23]</span> <span class="cite-model">[ESTIMATED]</span></li>
        <li><strong>Franchise / Exit Cost:</strong> Franchise expiration (July 2017) may impose liquidated-damages exit cost (~36 months of fees: 5% royalty, 3% service, $11.34/room tech fee). Complicates future rebrand or buyer sale timeline. <span class="cite-im">[IM p.4]</span></li>
        <li><strong>Revenue Concentration & Cyclicality:</strong> Heavy reliance on airport/contract business (&gt;60% of room nights). Sensitivity to airline traffic patterns and economic cycles. Historic NOI volatility: +$0.15M (2008) → -$1.24M (2009). <span class="cite-im">[IM p.26]</span></li>
        <li><strong>Interest Rate / Cap Rate Sensitivity:</strong> Market full-service cap rates ~6.0-7.0%. Exit valuation is sensitive to prevailing rates — rising rates could compress valuation and refinance options. <span class="cite-web">[MARKET]</span></li>
        <li><strong>Union Labor:</strong> Three unions (Local 39, 856, 2 Unite Here) — elevated labor cost risk and operational inflexibility during renovation. <span class="cite-im">[IM p.7]</span></li>
      </ul>

      <h3>Data Discrepancies Flagged</h3>
      <ul>
        <li>Historical NOI margins show negative or low NOI through 2011F (NOI margin -2.7%) while modeled projections show steady ramp to ~18% by Year 4-5 — underscores execution risk and dependence on successful repositioning. <span class="cite-im">[IM p.26]</span> <span class="cite-im">[IM p.28]</span></li>
        <li>Modeled stabilized NOI (~$10M) vs. broker model NOI ($3.0-3.2M in Year 4-5) — significant discrepancy requires reconciliation. <span class="cite-model">[MODELED]</span></li>
      </ul>
    `,
  },
  {
    id: "recommendation",
    title: "Recommendation",
    customizable: true,
    html: `
      <blockquote><strong>Conditional Proceed to Indicative Bid → NOT YET:</strong> Data Insufficient for firm bid. The asset has a compelling location, tangible value-add levers, and modeled stabilized NOI that could support institutional pricing — but the absence of asking price and TTM NOI prevents completion of underwriting.</blockquote>

      <h3>Required Next Steps (before IC approval)</h3>
      <ol style="padding-left:20px;margin:12px 0">
        <li style="margin-bottom:8px">Obtain the seller's <strong>Asking Price</strong> and complete financial package (TTM P&L, NOI bridge, detailed departmental revenues and expenses) — critical gating items</li>
        <li style="margin-bottom:8px">Secure <strong>lender term sheets</strong> or debt assumption confirmation (65% LTC / ~4.5%) to test leverage sensitivity</li>
        <li style="margin-bottom:8px">Commission an updated <strong>capital needs assessment</strong> (line-item FF&E and building systems scope and cost) to replace estimated $5K-7K/room with contractor-cost-backed numbers</li>
        <li style="margin-bottom:8px">Run <strong>three price scenarios</strong> (best / base / downside) mapping purchase price → stabilized NOI → exit cap to modeled IRR and cash-on-cash, stressing higher interest rates and slower ADR ramp</li>
        <li style="margin-bottom:8px">Confirm <strong>franchise/transfer cost</strong> exposure and legal implications of franchise expiry</li>
        <li style="margin-bottom:8px">Conduct focused <strong>market follow-up</strong> on recent comparable SFO-area full-service hotel trades to validate 6.0-7.0% cap rate benchmark</li>
      </ol>

      <p>If seller price and TTM NOI allow a pro forma that (a) supports an acquisition cap rate in-line with modeled sensitivities (preferably ≥6.5% on stabilized NOI) and (b) produces ≥12% gross IRR under conservative financing assumptions, proceed to submit an indicative offer and begin detailed due diligence. If not, pass or consider a structured offer with price contingent on verified TTM NOI and capital cost adjustments.</p>
      <p><em>Prepared by: AI Investment Committee — synthesizing Market, Asset & Investment analyst inputs.</em> <span class="cite-im">[IM]</span> <span class="cite-web">[MARKET]</span> <span class="cite-model">[MODELED]</span></p>
    `,
  },
];

/* ─── Processing Pipeline Steps ─── */
export const MOCK_PROCESSING_STEPS = [
  { id: "upload", label: "Uploading document" },
  { id: "ocr", label: "Extracting text & tables (Gemini OCR)" },
  { id: "extract", label: "Identifying deal parameters" },
  { id: "segment", label: "Segmenting into analysis categories" },
  { id: "agents", label: "Running parallel analysis agents (Market · Asset · Investment)" },
  { id: "memo", label: "Generating deal summary" },
];

export const STEP_DELAYS = [800, 1400, 1200, 1600, 2200, 1600];

/* ─── Extracted Fields (from n8n execution #67) ─── */
export const MOCK_EXTRACTED_FIELDS = {
  assetName: "Crowne Plaza SFO Airport",
  location: "1177 Airport Blvd, Burlingame, CA",
  assetType: "Full-Service Hotel",
  askingPrice: "Not Disclosed",
  rooms: "309 (incl. 11 suites)",
  occupancy: "~78% (submarket)",
  revparGrowth: "+21.0% YTD",
  meetingSpace: "11,994 SF (17 rooms)",
  yearBuilt: "1973 / Converted 2002",
  pages: 32,
};
