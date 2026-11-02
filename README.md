# PROJECT #12: HI SHARKS

Status: Personal responsive campaign web app, 0.2.0; payment link not configured
Owner: Leterel
Created: 2026-10-28

## Vision

Hi Sharks is an original concept for voluntary financial support.

The initial version is a personal project: respectfully approach
potential benefactors, wealthy individuals, philanthropists and
other supporters with a genuine request for financial assistance.

The tone may be humorous, self-aware and bold, but the project
must remain truthful, transparent, lawful and respectful.

A future version may become a public platform where people can
submit bills or financial assistance requests and supporters
can voluntarily help pay them.

## Two Distinct Product Stages

### Stage 1: Personal MVP

- A personal landing page explaining the story and request
- Clear description of what financial support is needed for
- Optional presentation of supporting documents
- Voluntary support or donation options
- Transparent progress and updates
- Contact information for legitimate inquiries
- A recognizable original brand identity
- No automated harassment or mass unsolicited messaging

### Stage 2: Public Platform

- User accounts and profiles
- Submission of bills or assistance requests
- Document upload and privacy controls
- Voluntary financial contributions
- Payment provider integration
- Optional direct payment to verified billers
- Request status and progress tracking
- Transparency and reporting
- Fraud detection and abuse prevention
- Moderation, disputes and appeals

## Core Product Principles

- Voluntary participation
- Honest representation of financial needs
- No guaranteed payments or outcomes
- No misleading claims or impersonation
- Privacy by design
- Accessible and respectful user experience
- No copying of another application's branding or implementation

## Verification and Fraud Prevention

Research:
- Identity verification where proportionate
- Document authenticity checks
- Duplicate-request detection
- Reporting and moderation
- Protection against identity theft
- Protection of supporters and recipients
- Safe handling of sensitive financial information

Do not publish personal bills or identifying information by default.

## Payments and Legal Questions

Before launching payment functionality, investigate:
- Payment service providers
- Platform fees and refunds
- Consumer protection
- GDPR and data retention
- Tax implications
- Donation versus gift versus commercial payment
- Financial regulation and money transmission obligations
- Cross-border payments
- Terms of service and liability

Do not collect or hold third-party funds without appropriate
legal and technical arrangements.

## Contact and Outreach

Investigate lawful public contact channels:
- Official philanthropic organizations
- Publicly advertised business contacts
- Foundation application processes
- Legitimate partnership or sponsorship inquiries

No scraping of private contact data.
No deceptive identities.
No unsolicited mass messaging.
No invented contact information.

## Possible Technical Architecture

Candidates for later evaluation:
- Web application
- Responsive landing page
- Secure backend
- Database
- Object storage for documents
- Authentication
- Payment provider integration
- Moderation dashboard

No framework, hosting provider or payment processor
has been selected yet.

## Roadmap

1. Define the personal story and funding objective
2. Define the original Hi Sharks brand and tone
3. Design the personal MVP
4. Research legal and payment requirements
5. Prototype a landing page
6. Test usability and transparency
7. Evaluate public-platform feasibility
8. Design verification and abuse controls
9. Consider a controlled pilot

## Open Decisions

- Exact personal funding objective
- Branding and visual style
- Public versus private presentation of documents
- Preferred payment channels
- Jurisdictions and compliance
- Whether a public platform should be built at all
- Monetization and operating costs

## Development Rules

Primary environment: Windows / PowerShell 7
Version control: GitHub
Prefer local development and free tools where practical.

Keep Project #12 separate from all other projects.
Do not modify unrelated projects from within this project’s tools.
Do not assume software is already installed.
Do not incur costs without approval.

## Project Continuity

This repository is the persistent project notebook.

Future sessions should read this README before proceeding.
Distinguish established facts from proposals.
Do not claim an MVP exists until it has actually been built.

## Local draft prototype — 2026-11-02

Run `npm start`, open http://127.0.0.1:8863. Node 22+, no packages required.
The synthetic example can be replaced with a title, story and whole-euro goal.
Preview uses plain text, and JSON export includes only those approved fields
plus an explicit `private-draft` status. No personal story is invented for the
owner. Refreshing discards unsaved edits. `npm test` checks export boundaries.

No payments, documents, outreach, accounts or live campaign. Exported drafts
may contain whatever the author types and must be checked before sharing.
The old draft editor remains at `/draft.html`.

## Confirmed personal direction — 2026-11-02

The user explicitly chose a humorous personal appeal to wealthy people:
**“Haste mal ’ne Mark?”** Hi Sharks asks for voluntary personal support for the
owner. A public bill-sharing platform is only an older future idea, not the
current scope. No invented hardship, target sum, supporters or receipts.

`npm start` opens the new responsive campaign at http://127.0.0.1:8863.
One web interface covers desktop, phone and tablet layouts. A web-app manifest
and service worker prepare browser installation/offline use on supported browsers;
this is not an App Store or Play Store release. Actual iPhone/Safari and physical
Android tests have not been performed. Android testing remains emulator-only.

The page includes a personal request, a manually prepared pitch, copy/share
controls, honest funding status and optional browser installation. It does not
scrape rich people's details or send anyone a message automatically.

`campaign-config.json` contains public settings. `supportUrl` and `publicUrl`
stay empty until real approved HTTPS destinations exist. The support action is
disabled meanwhile; no fake payment, fake campaign URL or fake donation counter.
Only the public campaign shell is cached; private draft exports are not cached.

For a public static deployment, run
`node tools/package-web.mjs PATH-TO-A-NEW-DIRECTORY`. The parent directory must
exist; an existing target is rejected. This packages only the public campaign,
its web manifest, 192/512-pixel icons, Apple touch icon and MIT license. Relative
asset URLs support hosting at a domain root or project subdirectory. The private
draft editor is deliberately excluded from this bundle. HTTPS hosting is required
for service workers outside localhost. No hosting, payment provider, contacts or
fees have been configured during this implementation.

## Entwicklung und Übergabe

[AGENTS.md](AGENTS.md) bündelt den Einstieg für Entwickler und KI-Agenten; [TESTING.md](TESTING.md) nennt reproduzierbare Prüfungen und deren Grenzen. Der aktuelle Übergabestand steht in [HANDOFF.md](HANDOFF.md).
