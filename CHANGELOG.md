# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `.fg=$bg` utility rule with declaration: `color: var(--ox-bg)`
- `.bg=$fg` utility rule with declaration: `background: var(--ox-accent-)`

### Changed

- Rename CSS custom properties from `--ox-space-<x>` to single `--ox-base-length`
- Replace `em` values with unitless for `.lh-<n>` rules ([see the reason](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#prefer_unitless_numbers_for_line-height_values))

### Removed

- `.tab-bar` component rule

### Fixed

- CSS specificity of `.border-<...>` rules
- CSS specificity in dist file: "utility+component"

## [1.0.0] 2024-11-05

### Added

- The framework
