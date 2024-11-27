import { breakpoints } from "./breakpoints.ts";
import type { CssRuleDefinitionSet } from "./types.ts";

const cssRules: CssRuleDefinitionSet = [
    [
        "button",
        [
            "position: relative",
            "display: flex",
            "align-items: center",
            "justify-content: center",
            "border: 1px solid var(--ox-accent)",
            "border-radius: calc(var(--ox-round-factor) * var(--ox-base-length))",
            "padding: 0 calc(2 * var(--ox-base-length))",
            "height: calc(8 * var(--ox-base-length))",
            "text-decoration: none",
            "font-size: inherit",
            "line-height: 1.5",
            "color: var(--ox-accent)",
            "background: var(--ox-accent-bg)",
            "font-family: inherit",
            "user-select: none",
            "cursor: pointer",
            "letter-spacing: inherit",
        ],
    ],
    ["button.disabled,.button:disabled", [
        "filter: opacity(0.6)",
        "cursor: not-allowed",
    ]],
    ["button.active:not(.toggle)", [
        "color: var(--ox-bg)",
        "background: var(--ox-accent)",
    ]],
    ["button.toggle", [
        "padding-right: calc(3 * var(--ox-base-length))",
    ]],
    [
        "table",
        [
            "border: 1px solid var(--ox-accent)",
            "display:flex",
            "flex-direction: column",
        ],
    ],
    [
        "table > *",
        [
            "min-height: calc(6 * var(--ox-base-length))",
            "border-bottom: 1px solid var(--ox-accent)",
            "display: flex",
            "align-items: stretch",
        ],
    ],
    [
        "table > *:last-child",
        ["border-bottom: none"],
    ],
    [
        "table > * > *",
        [
            "padding: var(--ox-base-length)",
            "display:flex",
            "flex-basis: 1px",
            "flex-grow: 1",
            "flex-wrap: wrap",
            "align-items:center",
        ],
    ],
    [
        "table > * > *:not(:last-child)",
        ["border-right: 1px solid var(--ox-accent)"],
    ],
    [
        "table > *:nth-child(2n-1)",
        ["background: var(--ox-blur)"],
    ],
    [
        "table > *:first-child",
        [
            "border: none",
            "font-weight: var(--ox-f-weight-xl)",
            "background: var(--ox-accent)",
            "color: var(--ox-bg)",
        ],
    ],
    [
        "table > *:first-child > *",
        [
            "border-color: var(--ox-bg)",
        ],
    ],
    ["h1", [
        "font-size: var(--ox-f-size-2xl)",
        "font-weight: var(--ox-f-weight-lg)",
    ]],
    ["h2", [
        "font-size: var(--ox-f-size-xl)",
        "font-weight: var(--ox-f-weight-xl)",
    ]],
    ["h3", [
        "font-size: var(--ox-f-size-lg)",
        "font-weight: var(--ox-f-weight-2xl)",
    ]],
    ["text-md", [
        "font-size: var(--ox-f-size-md)",
        "font-weight: var(--ox-f-weight-md)",
    ]],
    ["text-sm", [
        "font-size: var(--ox-f-size-sm)",
        "font-weight: var(--ox-f-weight-sm)",
    ]],
    ["tab-bar", [
        "color: var(--ox-bg)",
        "background: var(--ox-accent)",
    ]],
];

const cssPseudoRules: CssRuleDefinitionSet = [
    ["button:hover", [
        "background: var(--ox-blur)",
    ]],
    ["button.active:hover:not(.toggle)", [
        "filter: brightness(0.8)",
    ]],
    ["button:active", [
        "filter: brightness(0.7)",
    ]],
    ["button.toggle::after", [
        'content: ""',
        "position: absolute",
        "top: var(--ox-base-length)",
        "right: var(--ox-base-length)",
        "border: 1px solid var(--ox-accent)",
        "width: var(--ox-base-length)",
        "height: var(--ox-base-length)",
        "background: none",
        "border-radius: calc(var(--ox-round-factor) * var(--ox-base-length))",
    ]],
    ["button.toggle.active::after", [
        "background: var(--ox-accent)",
    ]],
    ["link:hover", ["background: var(--ox-accent)", "color: var(--ox-bg)"]],
];

export function makeComponentClasses(): string {
    let text = "";

    for (const [k, v] of cssRules) {
        text += `.${k} {\n${v.join(";\n")};\n}\n`;
    }

    for (const [prefix, value] of breakpoints) {
        text += `@media (min-width: ${value}) {\n`;
        for (const [k, v] of cssRules) {
            text += `.${prefix}\\:${k} {\n${v.join(";\n")};\n}\n`;
        }

        text += "}\n";
    }

    for (const [k, v] of cssPseudoRules) {
        text += `.${k} {\n${v.join(";\n")};\n}\n`;
    }

    return text;
}
