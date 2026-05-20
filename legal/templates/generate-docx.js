// Enterprise Service Agreement - DOCX Generator
// Generates a formatted .docx contract from this template.
//
// Usage:
//   npm install docx
//   node generate-docx.js
//
// Customize:
//   1. Replace [YOUR COMPANY NAME] with your legal entity name
//   2. Replace [YOUR ADDRESS] with your registered address
//   3. Replace [YOUR WEBSITE] with your company URL
//   4. Replace [YOUR PRODUCT] with your product name
//   5. Update the logo path below to point to your company logo (PNG)
//   6. Update product descriptions in the Preamble and Definitions

const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun,
  Header, Footer, AlignmentType, LevelFormat,
  HeadingLevel, BorderStyle, WidthType, ShadingType,
  PageNumber, PageBreak, TabStopType, TabStopPosition
} = require("docx");

// <!-- Customize: update this path to your company logo (PNG format) -->
const logo = fs.readFileSync(__dirname + "/../../brand/logo/sylph-icon.png");

const PAGE_WIDTH = 12240;
const MARGIN = 1440;
const CONTENT_WIDTH = PAGE_WIDTH - 2 * MARGIN;

const noBorder = { style: BorderStyle.NONE, size: 0 };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };
const thinBorder = { style: BorderStyle.SINGLE, size: 1, color: "999999" };
const borders = { top: thinBorder, bottom: thinBorder, left: thinBorder, right: thinBorder };

const headerShading = { fill: "F2F2F2", type: ShadingType.CLEAR };
const cellPad = { top: 60, bottom: 60, left: 100, right: 100 };

function p(text, opts = {}) {
  const runs = [];
  if (typeof text === "string") {
    runs.push(new TextRun({ text, bold: opts.bold, italics: opts.italics, size: opts.size || 22, font: "Arial" }));
  } else if (Array.isArray(text)) {
    text.forEach(t => {
      if (typeof t === "string") runs.push(new TextRun({ text: t, size: opts.size || 22, font: "Arial" }));
      else runs.push(new TextRun({ size: 22, font: "Arial", ...t }));
    });
  }
  return new Paragraph({
    children: runs,
    spacing: { after: opts.after !== undefined ? opts.after : 120, before: opts.before || 0, line: opts.line || 276 },
    alignment: opts.alignment,
    indent: opts.indent,
    ...(opts.heading ? { heading: opts.heading } : {}),
    ...(opts.numbering ? { numbering: opts.numbering } : {}),
    ...(opts.pageBreakBefore ? { pageBreakBefore: true } : {}),
  });
}

function heading1(text, pageBreak = false) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 26, font: "Arial" })],
    spacing: { before: 360, after: 200 },
    ...(pageBreak ? { pageBreakBefore: true } : {}),
  });
}

function heading2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    children: [new TextRun({ text, bold: true, size: 24, font: "Arial" })],
    spacing: { before: 240, after: 160 },
  });
}

function heading3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    children: [new TextRun({ text, bold: true, size: 22, font: "Arial" })],
    spacing: { before: 200, after: 120 },
  });
}

function bullet(text, ref = "bullets", level = 0) {
  const runs = typeof text === "string"
    ? [new TextRun({ text, size: 22, font: "Arial" })]
    : text.map(t => typeof t === "string" ? new TextRun({ text: t, size: 22, font: "Arial" }) : new TextRun({ size: 22, font: "Arial", ...t }));
  return new Paragraph({
    numbering: { reference: ref, level },
    children: runs,
    spacing: { after: 80, line: 276 },
  });
}

function defRow(term, definition, isHeader = false) {
  return new TableRow({
    children: [
      new TableCell({
        borders,
        width: { size: 2400, type: WidthType.DXA },
        margins: cellPad,
        shading: isHeader ? headerShading : undefined,
        children: [new Paragraph({ children: [new TextRun({ text: term, bold: true, size: 20, font: "Arial" })], spacing: { after: 0 } })],
      }),
      new TableCell({
        borders,
        width: { size: 6960, type: WidthType.DXA },
        margins: cellPad,
        shading: isHeader ? headerShading : undefined,
        children: [new Paragraph({ children: [new TextRun({ text: definition, bold: isHeader, size: 20, font: "Arial" })], spacing: { after: 0 } })],
      }),
    ],
  });
}

function threeColRow(c1, c2, c3, widths, isHeader = false) {
  return new TableRow({
    children: [c1, c2, c3].map((text, i) =>
      new TableCell({
        borders,
        width: { size: widths[i], type: WidthType.DXA },
        margins: cellPad,
        shading: isHeader ? headerShading : undefined,
        children: [new Paragraph({ children: [new TextRun({ text, bold: isHeader, size: 20, font: "Arial" })], spacing: { after: 0 } })],
      })
    ),
  });
}

function twoColRow(c1, c2, widths, isHeader = false) {
  return new TableRow({
    children: [c1, c2].map((text, i) =>
      new TableCell({
        borders,
        width: { size: widths[i], type: WidthType.DXA },
        margins: cellPad,
        shading: isHeader ? headerShading : undefined,
        children: [new Paragraph({ children: [new TextRun({ text, bold: isHeader, size: 20, font: "Arial" })], spacing: { after: 0 } })],
      })
    ),
  });
}

function emptyLine() {
  return new Paragraph({ children: [], spacing: { after: 0 } });
}

// <!-- Customize: replace all [YOUR COMPANY NAME], [YOUR PRODUCT], [YOUR ADDRESS], [YOUR WEBSITE] below -->

const doc = new Document({
  styles: {
    default: {
      document: { run: { font: "Arial", size: 22 } },
    },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Arial" },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial" },
        paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 22, bold: true, font: "Arial" },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 } },
    ],
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "bullets2", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "bullets3", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "bullets4", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "bullets5", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "bullets6", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1800, right: 1440, bottom: 1440, left: 1440 },
      },
    },
    headers: {
      default: new Header({
        children: [
          new Paragraph({
            children: [
              new ImageRun({
                type: "png",
                data: logo,
                transformation: { width: 80, height: 18 },
                altText: { title: "[YOUR PRODUCT]", description: "[YOUR PRODUCT] logo", name: "company-logo" },
              }),
            ],
            spacing: { after: 0 },
            border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000", space: 8 } },
          }),
        ],
      }),
    },
    footers: {
      default: new Footer({
        children: [
          new Paragraph({
            children: [
              new TextRun({ text: "[YOUR COMPANY NAME] - [YOUR ADDRESS] - [YOUR WEBSITE]", size: 14, font: "Arial", color: "999999" }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 40 },
            border: { top: { style: BorderStyle.SINGLE, size: 2, color: "CCCCCC", space: 8 } },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "CONFIDENTIAL", size: 14, font: "Arial", color: "999999" }),
              new TextRun({ text: "\t", size: 14 }),
              new TextRun({ text: "Page ", size: 14, font: "Arial", color: "999999" }),
              new TextRun({ children: [PageNumber.CURRENT], size: 14, font: "Arial", color: "999999" }),
            ],
            tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
            spacing: { before: 0, after: 0 },
          }),
        ],
      }),
    },
    children: [
      // ==================== TITLE ====================
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "ENTERPRISE LICENSE AND SERVICES AGREEMENT", bold: true, size: 32, font: "Arial" })],
        spacing: { after: 400 },
      }),

      // ==================== AGREEMENT TITLE ====================
      heading1("Enterprise License and Services Agreement"),

      p([
        { text: "This Enterprise License and Services Agreement, including its Annexes and any executed Order Form (the " },
        { text: "Agreement", bold: true },
        { text: "), is entered into as of the date of last signature below (the " },
        { text: "Effective Date", bold: true },
        { text: ") by and between:" },
      ]),

      // ==================== PARTIES ====================
      p([
        { text: "[YOUR COMPANY NAME]", bold: true },
        { text: ", a [jurisdiction and corporate form], with its principal place of business at [address], represented by [signatory name], [signatory title], duly authorized for the purposes hereof (" },
        { text: "Provider", bold: true },
        { text: " or " },
        { text: "Licensor", bold: true },
        { text: "); and" },
      ]),

      p([
        { text: "[CUSTOMER LEGAL NAME]", bold: true },
        { text: ", a [jurisdiction and corporate form], having its principal place of business at [address], represented by [name, title], duly authorized for the purposes hereof (" },
        { text: "Customer", bold: true },
        { text: ")." },
      ]),

      p([
        { text: "Provider and Customer are individually a " },
        { text: "Party", bold: true },
        { text: " and collectively the " },
        { text: "Parties", bold: true },
        { text: "." },
      ]),

      // ==================== PREAMBLE ====================
      heading1("Preamble"),

      p("Provider develops [YOUR PRODUCT], a [brief product description]. The platform includes [key platform components], enterprise authentication and permission features, and related services."),

      p("Customer wishes to deploy [YOUR PRODUCT] for its internal business purposes. Customer wishes to subscribe to the enterprise edition for internal use and to receive implementation services. Provider agrees to provide the enterprise software license and professional services under the terms of this Agreement and the applicable Order Form."),

      p("Customer acknowledges that [relevant disclaimers for your product category]. Provider does not guarantee absolute accuracy, business outcome, or replacement of Customer's internal controls."),

      // ==================== 1. DEFINITIONS ====================
      heading1("1. Definitions"),

      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [2400, 6960],
        rows: [
          defRow("Term", "Definition", true),
          defRow("Affiliate", "Any entity that directly or indirectly controls, is controlled by, or is under common control with a Party."),
          defRow("Agreement", "This Enterprise License and Services Agreement, its Annexes, and any Order Form or amendment signed by the Parties."),
          defRow("Business Days", "Monday through Friday, excluding US federal holidays."),
          defRow("Business Hours", "9:00 a.m. to 6:00 p.m. Eastern Time, Monday through Friday, excluding US federal holidays."),
          defRow("Customer Data", "Data, content, credentials, and other materials submitted to or processed through the Software by Customer or its Users."),
          defRow("Documentation", "Provider's user, technical, deployment, security, and administrator documentation for the Software, as updated from time to time."),
          defRow("Enterprise Software", "Provider's non-open-source enterprise features and components, including license-gated functionality."),
          defRow("Fees", "The amounts payable under the applicable Order Form."),
          defRow("Implementation Services", "Professional services described in an Order Form, including consulting, implementation support, and rollout support."),
          defRow("Open Source Software", "The open-source components of the Software made available under the applicable open-source license."),
          defRow("Order Form", "A signed order form, statement of work, or other ordering document that references this Agreement."),
          defRow("Output", "Results, reports, analyses, or other artifacts produced through use of the Software."),
          defRow("Provider Elements", "The Software, Enterprise Software, Documentation, know-how, methods, workflows, interfaces, APIs, templates, scripts, and other technology owned or controlled by Provider, excluding Customer Data."),
          defRow("Software", "The [YOUR PRODUCT] software made available to Customer, including Open Source Software and Enterprise Software, as applicable."),
          defRow("Users", "Customer employees, contractors, and representatives authorized by Customer to use the Software for Customer's internal business purposes."),
        ],
      }),

      // ==================== 2. CONTRACTUAL DOCUMENTS ====================
      heading1("2. Contractual Documents and Hierarchy"),

      p("The contractual documents consist of this Agreement, Annex 1 (Description of Services), Annex 2 (Financial Terms), Annex 3 (Order Form), Annex 4 (Technical Requirements), and any signed amendment."),

      p("In case of conflict, the following order of precedence applies: first, the applicable Order Form for commercial and project-specific terms; second, any signed amendment; third, the Annexes; fourth, the body of this Agreement. No Customer purchase order terms, procurement portal terms, or similar terms shall modify this Agreement unless expressly signed by both Parties."),

      // ==================== 3. SCOPE OF SERVICES ====================
      heading1("3. Scope of Services"),

      p("Provider shall make the Software and Enterprise Software available to Customer for self-hosted internal use during the term stated in the applicable Order Form. The initial scope is described in the Order Form."),

      p("The Enterprise Software includes the enterprise features expressly purchased by Customer. Unless otherwise agreed in an Order Form, Provider is not responsible for hosting Customer's production environment or maintaining Customer's internal infrastructure."),

      p("Implementation Services are advisory and enablement services. They may include initial setup, configuration review, deployment guidance, and rollout support, as further described in the Order Form."),

      // ==================== 4. LICENSE AND ACCESS RIGHTS ====================
      heading1("4. License and Access Rights"),

      p("Subject to payment of Fees and compliance with this Agreement, Provider grants Customer a limited, non-exclusive, non-transferable, non-sublicensable right during the applicable term to install, access, and use the Enterprise Software solely for Customer's internal business operations."),

      p("Customer may permit Users to use the Software, including unlimited internal seats where stated in the Order Form. Customer is responsible for all User activity and for ensuring Users comply with this Agreement."),

      p("Open Source Software remains governed by its applicable open-source license. This Agreement governs the Enterprise Software, Implementation Services, support, and any commercial rights not granted by the applicable open-source license."),

      p("Customer shall not, and shall not permit any third party to:"),
      bullet("copy, distribute, resell, sublicense, rent, lease, or provide the Enterprise Software as a managed service to third parties;", "bullets"),
      bullet("reverse engineer, decompile, or attempt to derive source code from non-open-source Enterprise Software, except to the extent prohibited by law;", "bullets"),
      bullet("remove proprietary notices, license checks, access controls, or usage restrictions;", "bullets"),
      bullet("use the Software to build, train, benchmark, or improve a competing product, except as expressly permitted by applicable open-source licenses for Open Source Software;", "bullets"),
      bullet("use the Software in violation of applicable law, Documentation, security requirements, or third-party rights.", "bullets"),

      // ==================== 5. CUSTOMER RESPONSIBILITIES ====================
      heading1("5. Customer Responsibilities"),

      p("Customer is responsible for its infrastructure, network configuration, secrets management, access controls, security policies, and backup processes. Customer shall provide timely access, information, technical contacts, and decisions reasonably required for Provider to perform the Implementation Services."),

      p("Customer is responsible for validating Outputs before operational use and for determining whether Outputs are appropriate for business decisions."),

      // ==================== 6. IMPLEMENTATION SERVICES AND ACCEPTANCE ====================
      heading1("6. Implementation Services and Acceptance"),

      p("Provider shall perform Implementation Services in a professional and workmanlike manner using reasonable skill and care. Unless otherwise stated in an Order Form, Implementation Services are performed remotely."),

      p("Deliverables, if any, are deemed accepted upon the earliest of: (a) Customer's written acceptance; (b) Customer's production use; or (c) ten (10) Business Days after delivery without written, specific, and reproducible rejection notice. Provider will reasonably correct rejected Deliverables that materially fail to conform to the applicable Order Form."),

      // ==================== 7. SUPPORT, MAINTENANCE, AND AVAILABILITY ====================
      heading1("7. Support, Maintenance, and Availability"),

      p("Provider will provide priority support during Business Hours, unless otherwise agreed."),

      p("Because the Software is self-hosted by Customer, Provider does not provide a hosted-service uptime SLA unless expressly stated in an Order Form. Provider is not responsible for downtime, performance degradation, or security incidents caused by Customer infrastructure, Customer configuration, or other systems outside Provider's control."),

      p("Provider shall use commercially reasonable efforts to meet the following support targets:"),

      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [1800, 4560, 3000],
        rows: [
          threeColRow("Severity", "Description", "Target Response", [1800, 4560, 3000], true),
          threeColRow("Critical", "Platform unusable, no workaround", "4 Business Hours", [1800, 4560, 3000]),
          threeColRow("High", "Major feature impacted, workaround exists", "1 Business Day", [1800, 4560, 3000]),
          threeColRow("Medium", "Minor feature impacted", "2 Business Days", [1800, 4560, 3000]),
          threeColRow("Low", "General questions, feature requests", "5 Business Days", [1800, 4560, 3000]),
        ],
      }),
      emptyLine(),

      p("Provider may provide updates, patches, and new enterprise features during the term. Customer is responsible for applying updates in its environment unless a separate managed service is agreed."),

      // ==================== 8. FEES, INVOICING, AND TAXES ====================
      heading1("8. Fees, Invoicing, and Taxes"),

      p("Customer shall pay the Fees set forth in the applicable Order Form. Unless otherwise stated in the Order Form, Fees are non-cancellable and non-refundable."),

      p("Unless otherwise stated in an Order Form, all Year 1 Fees (annual license and implementation services) are invoiced upon signature and payable within thirty (30) days of invoice date."),

      p("Fees are exclusive of taxes, duties, withholding, bank fees, and similar charges. Customer is responsible for all taxes other than taxes based on Provider's net income. Approved travel or out-of-pocket expenses, if any, shall be reimbursed at cost."),

      p("Late amounts may accrue interest at the lower of one and a half percent (1.5%) per month or the maximum rate permitted by law. Provider may suspend Enterprise Software license keys, support, or Implementation Services for amounts more than fifteen (15) days overdue after written notice."),

      p("All recurring Fees shall be automatically adjusted on each renewal anniversary by the greater of three percent (3%) or the percentage increase in the applicable Consumer Price Index over the preceding twelve (12) months. Provider shall notify Customer of the adjusted amount at least sixty (60) days before the renewal date."),

      // ==================== 9. TERM AND TERMINATION ====================
      heading1("9. Term and Termination"),

      p("This Agreement begins on the Effective Date and continues for the initial term stated in the applicable Order Form. Upon expiration of the initial term, the Agreement shall automatically renew for successive periods of twelve (12) months, unless either Party provides written notice of non-renewal at least sixty (60) days before the end of the then-current term."),

      p("Fees are non-cancellable and non-refundable. Neither Party may terminate this Agreement for convenience during the initial term or any renewal term."),

      heading2("9.1 Termination for Cause"),
      p("Either Party may terminate this Agreement or an Order Form for material breach if the breach is not cured within thirty (30) days after written notice. Provider may terminate immediately if Customer materially breaches license restrictions, confidentiality, security obligations, or payment obligations after suspension notice."),

      heading2("9.2 Effects of Termination"),
      p("Upon expiration or termination, Customer shall cease use of Enterprise Software and destroy or return Provider Confidential Information, except as required by law or archival policy."),
      p("Provider shall, upon request, provide transition assistance for a period not exceeding thirty (30) days. Transition assistance beyond two (2) hours shall be billed at Provider's then-current consulting rate."),
      p("Open Source Software remains available under the applicable open-source license. Customer retains all of its data."),
      p("Sections concerning fees owed, license restrictions, confidentiality, intellectual property, data protection, warranties, disclaimers, liability, indemnity, and governing law survive termination."),

      // ==================== 10. INTELLECTUAL PROPERTY ====================
      heading1("10. Intellectual Property"),

      p("Provider owns and retains all right, title, and interest in and to the Provider Elements. No rights are granted except as expressly stated in this Agreement."),

      p("Customer owns and retains all right, title, and interest in and to Customer Data. Customer grants Provider a limited right to use Customer Data solely as necessary to provide the Software, support, and Implementation Services."),

      p("Unless otherwise agreed in an Order Form, Provider owns all generic learnings, methods, templates, scripts, improvements, configurations, and know-how developed in connection with the Implementation Services, excluding Customer Data and Customer Confidential Information."),

      p("Customer may provide feedback. Provider may use feedback without restriction or obligation, provided Provider does not disclose Customer Confidential Information."),

      // ==================== 11. CUSTOMER DATA, SECURITY, AND PRIVACY ====================
      heading1("11. Customer Data, Security, and Privacy"),

      p("Each Party shall comply with applicable data protection laws. Because the Software is self-hosted by Customer and Customer Data remains on Customer's infrastructure, Provider does not routinely process Customer personal data. If the Parties agree that Provider will process personal data, the Parties shall execute a separate data processing addendum."),

      p("Provider shall maintain reasonable administrative, technical, and organizational safeguards for Provider systems used to provide support and Implementation Services."),

      p("Provider will not use identifiable Customer Data to train models for other customers without Customer's written consent."),

      // ==================== 12. ARTIFICIAL INTELLIGENCE AND AUTOMATED OUTPUTS ====================
      heading1("12. Artificial Intelligence and Automated Outputs"),

      p("The Software may generate Outputs using artificial intelligence, automated systems, or other computational methods. Outputs may be incomplete, inaccurate, stale, or inappropriate for a particular purpose."),

      p("Customer is responsible for testing, validating, approving, and monitoring Outputs and for maintaining human review and governance appropriate to the use case. Provider does not warrant that Outputs will be error-free, complete, compliant with Customer policies, or suitable for any particular business decision."),

      p("Provider does not use Customer Data to train, fine-tune, or improve AI models. The Open Source Software does not transmit Customer Data to Provider."),

      p("Customer shall not use Outputs or other artifacts generated through use of the Enterprise Software to create a training corpus, benchmark, or evaluation dataset for a competing product or model, except with Provider's prior written consent."),

      // ==================== 13. CONFIDENTIALITY ====================
      heading1("13. Confidentiality"),

      p([
        { text: "Confidential Information", bold: true },
        { text: " means non-public information disclosed by one Party to the other that is marked confidential or should reasonably be understood as confidential given its nature and the circumstances of disclosure." },
      ]),

      p("The receiving Party shall use Confidential Information only to perform this Agreement, protect it using at least reasonable care, and disclose it only to personnel, Affiliates, contractors, advisors, and subprocessors with a need to know and confidentiality obligations at least as protective as this Agreement."),

      p("Confidentiality obligations do not apply to information that is public without breach, already known without restriction, independently developed without use of Confidential Information, lawfully received from a third party, or required to be disclosed by law."),

      p("Confidentiality obligations last for five (5) years after disclosure, except trade secrets and Customer Data remain protected as long as they remain non-public."),

      // ==================== 14. WARRANTIES AND DISCLAIMERS ====================
      heading1("14. Warranties and Disclaimers"),

      p("Provider warrants that it will perform Implementation Services in a professional and workmanlike manner. Customer's exclusive remedy for breach is re-performance or refund of the affected prepaid service Fees."),

      p("Except as expressly stated, the Software, Enterprise Software, Open Source Software, Outputs, support, and services are provided as-is and as-available. Provider disclaims all implied warranties, including merchantability, fitness for a particular purpose, non-infringement, accuracy, uninterrupted operation, and error-free performance."),

      // ==================== 15. INDEMNIFICATION ====================
      heading1("15. Indemnification"),

      p("Provider shall defend Customer against third-party claims alleging that the Enterprise Software infringes such third party's intellectual property rights, and shall pay final damages awarded or settlements approved by Provider."),

      p("Customer shall defend Provider against third-party claims arising from Customer Data, Customer's use of the Software in violation of law or this Agreement, or Customer's products or services."),

      p("The indemnified Party must promptly notify the indemnifying Party, reasonably cooperate, and allow the indemnifying Party to control defense and settlement."),

      // ==================== 16. LIMITATION OF LIABILITY ====================
      heading1("16. Limitation of Liability"),

      p("Neither Party shall be liable for indirect, incidental, special, consequential, punitive, exemplary damages, loss of profits, loss of revenue, or business interruption."),

      p("Each Party's aggregate liability shall not exceed the Fees paid or payable by Customer under the applicable Order Form in the twelve (12) months preceding the event giving rise to liability."),

      p("The liability cap does not apply to Customer's payment obligations, breach of license restrictions, either Party's confidentiality obligations, indemnification obligations, gross negligence, willful misconduct, or fraud."),

      // ==================== 17. PUBLICITY ====================
      heading1("17. Publicity"),

      p("Provider may identify Customer as a customer using Customer's name and logo in customer lists, websites, and sales materials, with Customer's prior written consent. Press releases or case studies require Customer's separate prior written approval."),

      // ==================== 18. MISCELLANEOUS ====================
      heading1("18. Miscellaneous"),

      heading3("18.1 Non-Solicitation"),
      p("Neither Party shall solicit or hire the other Party's employees during the term and for twelve (12) months thereafter, unless expressly agreed in writing."),

      heading3("18.2 Assignment"),
      p("Neither Party may assign this Agreement without the other Party's prior written consent, except to an Affiliate or in connection with a merger, acquisition, or sale of substantially all assets."),

      heading3("18.3 Force Majeure"),
      p("Neither Party is liable for delay or failure caused by events beyond reasonable control."),

      heading3("18.4 Independent Contractors"),
      p("The Parties are independent contractors. This Agreement does not create a partnership, agency, or joint venture."),

      heading3("18.5 Notices"),
      p("Notices shall be sent to the addresses in the Order Form and are effective upon receipt."),

      heading3("18.6 Entire Agreement"),
      p("This Agreement is the entire agreement regarding its subject matter. Amendments must be in writing and signed by both Parties."),

      heading3("18.7 Governing Law and Dispute Resolution"),
      p("This Agreement is governed by the laws of [YOUR JURISDICTION], without regard to conflict-of-law rules."),
      p("Any dispute shall be resolved through good-faith negotiation, then mediation, then the courts of [YOUR JURISDICTION]."),

      heading3("18.8 Severability"),
      p("If any provision is found invalid, the remainder continues in effect."),

      heading3("18.9 No Waiver"),
      p("Failure to enforce any provision shall not constitute a waiver."),

      heading3("18.10 Electronic Signature"),
      p("This Agreement may be signed electronically and in counterparts."),

      // ==================== SIGNATURES ====================
      heading1("Signatures", true),

      emptyLine(),

      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [4680, 4680],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders: { ...noBorders, right: { style: BorderStyle.SINGLE, size: 1, color: "FFFFFF" } },
                width: { size: 4680, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 0, right: 200 },
                children: [
                  new Paragraph({ children: [new TextRun({ text: "[YOUR COMPANY NAME]", bold: true, size: 22, font: "Arial" })], spacing: { after: 200 } }),
                  new Paragraph({ children: [new TextRun({ text: "Name: ___________________________", size: 20, font: "Arial" })], spacing: { after: 120 } }),
                  new Paragraph({ children: [new TextRun({ text: "Title: ___________________________", size: 20, font: "Arial" })], spacing: { after: 120 } }),
                  new Paragraph({ children: [new TextRun({ text: "Date: ___________________________", size: 20, font: "Arial" })], spacing: { after: 120 } }),
                  emptyLine(),
                  new Paragraph({ children: [new TextRun({ text: "Signature: _______________________", size: 20, font: "Arial" })], spacing: { after: 0 } }),
                ],
              }),
              new TableCell({
                borders: { ...noBorders, left: { style: BorderStyle.SINGLE, size: 1, color: "FFFFFF" } },
                width: { size: 4680, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 200, right: 0 },
                children: [
                  new Paragraph({ children: [new TextRun({ text: "[CUSTOMER NAME]", bold: true, size: 22, font: "Arial" })], spacing: { after: 200 } }),
                  new Paragraph({ children: [new TextRun({ text: "Name: ___________________________", size: 20, font: "Arial" })], spacing: { after: 120 } }),
                  new Paragraph({ children: [new TextRun({ text: "Title: ___________________________", size: 20, font: "Arial" })], spacing: { after: 120 } }),
                  new Paragraph({ children: [new TextRun({ text: "Date: ___________________________", size: 20, font: "Arial" })], spacing: { after: 120 } }),
                  emptyLine(),
                  new Paragraph({ children: [new TextRun({ text: "Signature: _______________________", size: 20, font: "Arial" })], spacing: { after: 0 } }),
                ],
              }),
            ],
          }),
        ],
      }),

      // ==================== ANNEX 1 ====================
      heading1("Annex 1: Description of Services", true),

      heading2("1. Enterprise Software"),
      bullet("Self-hosted annual enterprise license deployed on Customer infrastructure.", "bullets2"),
      bullet("Unlimited internal seats during the subscription term.", "bullets2"),
      bullet("Company-branded user interface.", "bullets2"),
      bullet("SSO support, subject to Customer identity-provider configuration.", "bullets2"),
      bullet("[Additional enterprise features specific to your product].", "bullets2"),

      heading2("2. Initial Implementation Services"),
      bullet("[TO COMPLETE] days of implementation services (on-site or remote).", "bullets3"),
      bullet("[Describe initial setup scope].", "bullets3"),
      bullet("Review and configuration of [relevant setup areas].", "bullets3"),
      bullet("[TO COMPLETE] months of follow-up sessions.", "bullets3"),

      heading2("3. Additional Consulting Services"),
      p("Beyond the initial Implementation Services, Customer may request additional consulting or advisory services. Additional services are billed at [TO COMPLETE] US dollars per hour, invoiced monthly in arrears."),

      heading2("4. Out of Scope Unless Separately Agreed"),
      bullet("Managed hosting by Provider.", "bullets4"),
      bullet("Custom software development beyond configuration and implementation support.", "bullets4"),
      bullet("Production operation of Customer infrastructure.", "bullets4"),
      bullet("Formal SLA, SOC 2 report, or dedicated security review package.", "bullets4"),

      // ==================== ANNEX 2 ====================
      heading1("Annex 2: Financial Terms", true),

      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [2800, 3760, 2800],
        rows: [
          threeColRow("Item", "Description", "Fee", [2800, 3760, 2800], true),
          threeColRow("Enterprise license", "[TO COMPLETE - describe what's included]", "[TO COMPLETE]/year", [2800, 3760, 2800]),
          threeColRow("Implementation services", "[TO COMPLETE - describe scope]", "[TO COMPLETE] one-time", [2800, 3760, 2800]),
          threeColRow("Year 1 total", "Initial term.", "[TO COMPLETE]", [2800, 3760, 2800]),
          threeColRow("Renewal after Year 1", "Enterprise license renewal.", "[TO COMPLETE]/year", [2800, 3760, 2800]),
          threeColRow("Additional consulting", "Professional services beyond the initial scope.", "[TO COMPLETE]/hour", [2800, 3760, 2800]),
        ],
      }),
      emptyLine(),

      p([{ text: "Payment Schedule: ", bold: true }, { text: "[TO COMPLETE]" }]),
      p([{ text: "Currency: ", bold: true }, { text: "[TO COMPLETE]" }]),

      // ==================== ANNEX 3 ====================
      heading1("Annex 3: Order Form", true),

      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [3000, 6360],
        rows: [
          twoColRow("Field", "Value", [3000, 6360], true),
          twoColRow("Order Form No.", "[TO COMPLETE]", [3000, 6360]),
          twoColRow("Customer", "[TO COMPLETE]", [3000, 6360]),
          twoColRow("Provider", "[YOUR COMPANY NAME]", [3000, 6360]),
          twoColRow("Effective Date", "Date of last signature", [3000, 6360]),
          twoColRow("Initial Term", "[TO COMPLETE] months from Effective Date", [3000, 6360]),
          twoColRow("License", "[YOUR PRODUCT] Enterprise self-hosted license", [3000, 6360]),
          twoColRow("Seats", "Unlimited internal Users", [3000, 6360]),
          twoColRow("Deployment Model", "Self-hosted by Customer on Customer infrastructure", [3000, 6360]),
          twoColRow("Included Support", "Priority support during Business Hours", [3000, 6360]),
          twoColRow("Implementation Scope", "[TO COMPLETE]", [3000, 6360]),
          twoColRow("Enterprise License Fee", "[TO COMPLETE]/year", [3000, 6360]),
          twoColRow("Implementation Fee", "[TO COMPLETE] one-time", [3000, 6360]),
          twoColRow("Year 1 Total", "[TO COMPLETE]", [3000, 6360]),
          twoColRow("Billing Contact", "[TO COMPLETE]", [3000, 6360]),
          twoColRow("Technical Contacts", "[TO COMPLETE]", [3000, 6360]),
        ],
      }),

      // ==================== ANNEX 4 ====================
      heading1("Annex 4: Technical Requirements", true),

      bullet("Customer must provide appropriate self-hosting infrastructure for the Software, including compute, storage, networking, DNS, TLS, secrets management, backup, monitoring, and access controls.", "bullets5"),
      bullet("Customer must configure permissions, identity-provider integration, and least-privilege access according to its internal policies.", "bullets5"),
      bullet("[Add product-specific technical requirements].", "bullets5"),

    ],
  }],
});

Packer.toBuffer(doc).then(buffer => {
  const outPath = __dirname + "/enterprise-service-agreement.docx";
  fs.writeFileSync(outPath, buffer);
  console.log("Generated: " + outPath + " (" + buffer.length + " bytes)");
});
