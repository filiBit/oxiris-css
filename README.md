# Oxiris CSS

A CSS framework organized into three layers:

- Environment
- Utility
- Component

**Environment** layer contains CSS variables and style setup necessary for the rest of the layers to work. This layer can be edited to customize spacing, colors and enable theme switch.

**Utility** layer contains utility classes.

**Component** layer contains component classes.

## Usage

Include a css file appropriate for your use case, from the `/dist` directory, into your web app. If you're unsure, use the distribution file that features all three layers.

## Examples

Located in the `examples` directory.

## Documentation

Doesn't exist yet.

# Production

To help make your app faster, Oxiris CSS is already minified with [CSSnano](https://cssnano.github.io/cssnano/); however, it can be further optimized for individual projects.

File size of Oxiris can be reduced by removing CSS declarations unused by your web app.

This is a list of tools and guides to help you start:

- [UnCSS](https://github.com/uncss/uncss) - a tool that removes unused CSS from your stylesheets
- [PurgeCSS](https://purgecss.com/) - another tool for removing unused CSS
- [PostCSS](https://postcss.org/) - a general tools for transforming CSS with plugins
- [postcss-uncss](https://github.com/uncss/postcss-uncss) - UnCSS as a PostCSS plugin
- [Other optimization plugins](https://postcss.org/docs/postcss-plugins#optimizations) - may be useful
