import { breakpoints } from "./breakpoints.ts";
import type { CssRuleDefinitionSet } from "./types.ts";

const tableRules: CssRuleDefinitionSet = Array.from(new Array(16)).flatMap((
    _,
    n,
) => [[
    `table-${n + 1}`,
    [
        "display: grid",
        `grid-template-columns: repeat(${n + 1}, auto)`,
        "border: 1px solid currentColor",
        "border-radius: var(--ox-base-length)",
        "overflow: hidden",
    ],
], [
    `table-${n + 1} > *`,
    [
        "border-bottom: 1px solid currentColor",
        "border-right: 1px solid currentColor",
        "display: flex",
        "align-items: center",
        "padding: var(--ox-base-length)",
        "min-height: calc(6 * var(--ox-base-length))",
    ],
], [
    `table-${n + 1} *:nth-of-type(${n + 1}n)`,
    [
        "border-right: none",
    ],
], [
    `table-${n + 1} *:nth-last-of-type(-n + ${n + 1})`,
    [
        "border-bottom: none",
    ],
]]);

const cssRules: CssRuleDefinitionSet = [
    ...tableRules,
    [
        "button",
        [
            "position: relative",
            "display: flex",
            "align-items: center",
            "justify-content: center",
            "border: 1px solid currentColor",
            "border-radius: calc(var(--ox-round-factor) * var(--ox-base-length))",
            "padding: 0 calc(2 * var(--ox-base-length))",
            "height: calc(6 * var(--ox-base-length))",
            "text-decoration: none",
            "font-size: inherit",
            "line-height: 1.5",
            "color: var(--ox-color-1)",
            "background: var(--ox-color-2)",
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
        "background: var(--ox-color-1)",
    ]],
    ["button.toggle", [
        "padding-right: calc(3 * var(--ox-base-length))",
    ]],

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
];

const cssPseudoRules: CssRuleDefinitionSet = [
    ["button:hover", [
        "background: var(--ox-color-3)",
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
        "border: 1px solid currentColor",
        "width: var(--ox-base-length)",
        "height: var(--ox-base-length)",
        "background: none",
        "border-radius: calc(var(--ox-round-factor) * var(--ox-base-length))",
    ]],
    ["button.toggle.active::after", [
        "background: var(--ox-color-1)",
    ]],
    ["link:hover", ["background: var(--ox-color-1)", "color: var(--ox-bg)"]],
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
