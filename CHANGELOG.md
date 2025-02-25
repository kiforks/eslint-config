# 📝 Changelog

## [1.2.5] - 2025-02-25

### 🔄 Updates

- **ESLint Rules Adjustment**  
  Disabled the `max-classes-per-file` and `no-inline-comments` rules to provide more flexibility in code structure and commenting practices.  
  [🔗 PR #13](https://github.com/kiforks/eslint-config/pull/13) by [@kiforks](https://github.com/kiforks)

---

## [1.2.4] - 2025-02-20

### ✨ New Features

- **No Unused Variables Rule**  
  Added the `@typescript-eslint/no-unused-vars` rule to the TypeScript configuration to prevent unused variables and enhance code cleanliness.  
  [🔗 PR #12](https://github.com/kiforks/eslint-config/pull/12) by [@kiforks](https://github.com/kiforks)

### 🔄 Updates

- **Test Configuration Adjustment**  
  Turned off the `prefer-destructuring` rule for test files to improve test flexibility and developer experience.  
  [🔗 PR #12](https://github.com/kiforks/eslint-config/pull/12) by [@kiforks](https://github.com/kiforks)

---

## [1.2.3] - 2025-02-20

### 🔄 Updates

- **Package Downgrade**  
  Downgraded the `eslint-config-prettier` package version for improved compatibility with existing configurations.  
  [🔗 PR #11](https://github.com/kiforks/eslint-config/pull/11) by [@kiforks](https://github.com/kiforks)

---

## [1.2.2] - 2025-02-20

### 🔄 Updates

- **TypeScript Configuration Cleanup**  
  Removed `@typescript-eslint/explicit-function-return-type` from the TypeScript configuration file to simplify code readability and developer experience.  
  [🔗 PR #10](https://github.com/kiforks/eslint-config/pull/10) by [@kiforks](https://github.com/kiforks)

---

## [1.2.1] - 2025-02-12

### ✨ New Features

- **Package Updates & Formatting**  
  Updated package versions and ran Prettier to maintain code style consistency.  
  [🔗 PR #9](https://github.com/kiforks/eslint-config/pull/9) by [@kiforks](https://github.com/kiforks)

- **Jest Configuration Cleanup**  
  Removed unnecessary disabled rules from the Jest configuration for improved maintainability.  
  [🔗 PR #9](https://github.com/kiforks/eslint-config/pull/9) by [@kiforks](https://github.com/kiforks)

- **Disable Recommend Configuration**  
  Added explicit file extensions for the `disable-recommend` configuration to improve rule application.  
  [🔗 PR #9](https://github.com/kiforks/eslint-config/pull/9) by [@kiforks](https://github.com/kiforks)

- **Sorting Rule Adjustment**  
  Disabled the `sort-imports` rule for test configurations to allow greater flexibility in test structuring.  
  [🔗 PR #9](https://github.com/kiforks/eslint-config/pull/9) by [@kiforks](https://github.com/kiforks)

---

## [1.2.0] - 2024-12-21

### ✨ New Features

- **Disable Recommend Configuration**  
  Added a new `disable-recommend` configuration with custom rules for stricter linting control.  
  [🔗 PR #8](https://github.com/kiforks/eslint-config/pull/8) by [@kiforks](https://github.com/kiforks)

### 📚 Documentation

- **README Update**  
  Updated the `README` file to include information about the new `disable-recommend` configuration.  
  [🔗 PR #8](https://github.com/kiforks/eslint-config/pull/8) by [@kiforks](https://github.com/kiforks)

---

## [1.1.2] - 2024-12-20

### 🐛 Fixes

- **JavaScript Configuration Build**  
  Added the missing `javascript.js` file to the `files` field in `package.json` to fix the build and ensure proper publishing.  
  [🔗 PR #7](https://github.com/kiforks/stylelint-config/pull/7) by [@kiforks](https://github.com/kiforks)

### 📚 Documentation

- **README Update**  
  Updated the `README` file to include information about the new JavaScript configuration.  
  [🔗 PR #7](https://github.com/kiforks/stylelint-config/pull/7) by [@kiforks](https://github.com/kiforks)

---

## [1.1.1] - 2024-12-19

### 🔄 Updates

- **Changelog and PR Template**  
  Updated the changelog format and pull request template to follow best practices for clarity and consistency.  
  [🔗 PR #6](https://github.com/kiforks/stylelint-config/pull/6) by [@kiforks](https://github.com/kiforks)

---

## [1.1.0] - 2024-12-18

### ✨ New Features

- **JavaScript Configuration**  
  Added a separate configuration specifically for JavaScript.  
  [🔗 PR #5](https://github.com/kiforks/stylelint-config/pull/5) by [@kiforks](https://github.com/kiforks)

### 🔄 Updates

- **Test Configurations**  
  Updated rules for test configurations.  
  [🔗 PR #5](https://github.com/kiforks/stylelint-config/pull/5) by [@kiforks](https://github.com/kiforks)

---

## [1.0.1] - 2024-12-18

### 🐛 Fixes

- **File Names**  
  Corrected file names to ensure consistent exports and imports.

---

## [1.0.0] - 2024-12-18

### 🚀 Major Changes

- **Initial Release**  
  The first stable version of the configuration is now available.

---

### 📌 Notes

- Each update includes links to the corresponding Pull Requests for full details.
- Contributions are credited with links to the authors.
