# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `.color-invert` utility rule for inverting the color scheme
- `.color-renvert` utility rule for reverting the color scheme
- Neutral color palette
- Dark and light color schemes
- `.hue-<{ a, b, c, d }>` utility rules for applying the context of a hue palette
- `.chroma-fg-<{ 1, 2, 3 }>` utility rules for applying the chroma of an active hue context to a foreground
- `.chroma-bg-<{ 1, 2, 3 }>` utility rules for applying the chroma of an active hue context to a background

### Changed

- Rename CSS custom properties from `--ox-space-<x>` to single `--ox-base-length`
- Replace `em` values with unitless for `.lh-<n>` rules ([see the reason](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#prefer_unitless_numbers_for_line-height_values))
- Set height of class component `.button` to 6 base-length
- Rename `.x-span`, `.max-x-span`, `.y-span` and `.max-y-span` into `.w-span`, `.max-w-span`, `.h-span` and `.max-h-span`
- Rename `--ox-cell-width` to `--ox-grid-track-width`
- Rename `--ox-cell-gap` to `--ox-cell-line-width`
- Replace `.table` component rule with `.table-<{1, 2, 3, ..., 16}>`
- Rename color variables
- declaration blocks of following rules `.w-<n>`, `.w-span-<n>`, `.h-<n>` and `h-span-<n>` now include a `flex-shrink: 0` declaration

### Removed

- `.tab-bar` component rule
- `.solid` utility rule

### Fixed

- CSS specificity of `.border-<...>` rules
- CSS specificity in dist file: "utility+component"

## [1.0.0] 2024-11-05

### Added

- The framework
