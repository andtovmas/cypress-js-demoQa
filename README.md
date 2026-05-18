# Cypress JS Automation Framework

A clean, scalable test automation framework built with [Cypress](https://www.cypress.io/) using the Page Object Model pattern.

## Project Structure

```
cypress/
├── e2e/
│   ├── api/          # API tests (JSONPlaceholder)
│   └── ui/           # UI tests (TextBox, Practice Form, Modal Dialogs)
├── fixtures/         # Test data (JSON)
├── pages/            # Page Object classes
└── support/          # Custom commands and global config
```

## Prerequisites

- Node.js (v16+)
- npm

## Setup

```bash
# Install dependencies
npm install

# Create a .env file in the root directory
```

`.env` example:

```
BASE_URL=https://demoqa.com
API_BASE_URL=https://jsonplaceholder.typicode.com
```

## Running Tests

```bash
# Open Cypress Test Runner
npx cypress open

# Run all tests headlessly
npx cypress run

# Run only UI tests
npx cypress run --spec "cypress/e2e/ui/**"

# Run only API tests
npx cypress run --spec "cypress/e2e/api/**"
```

## Test Coverage

| Area | Spec | Description |
|------|------|-------------|
| UI | `textbox.cy.js` | Form input validation and submission |
| UI | `practiceForm.cy.js` | Multi-field form with required field checks |
| UI | `modalDialogs.cy.js` | Small/large modal open, verify, and close |
| API | `api.cy.js` | GET/POST requests against JSONPlaceholder |

## Key Patterns

- **Page Object Model** — each page has a dedicated class encapsulating locators, data, and actions.
- **Environment variables** — `dotenv` keeps URLs and config out of source code.
- **Custom commands** — reusable Cypress commands defined in `support/commands.js`.