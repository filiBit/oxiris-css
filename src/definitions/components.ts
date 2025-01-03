import type { CssRuleDefinitionSet } from "../common/rule.ts";

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
    `table-${n + 1} > *:nth-of-type(${n + 1}n)`,
    [
        "border-right: none",
    ],
], [
    `table-${n + 1} > *:nth-last-of-type(-n + ${n + 1})`,
    [
        "border-bottom: none",
    ],
]]);

export const definitions: CssRuleDefinitionSet = [
    ...tableRules,
    [
        "button",
        [
            "position: relative",
            "display: flex",
            "align-items: center",
            "justify-content: center",
            "border: 1px solid var(--ox-fg)",
            "border-radius: calc(var(--ox-round-factor) * var(--ox-base-length))",
            "padding: 0 calc(2 * var(--ox-base-length))",
            "height: calc(6 * var(--ox-base-length))",
            "text-decoration: none",
            "font-size: inherit",
            "line-height: 1.5",
            "color: var(--ox-fg)",
            "background: var(--ox-bg)",
            "font-family: inherit",
            "user-select: none",
            "cursor: pointer",
            "letter-spacing: inherit",
        ],
    ],
    ["button:hover", [
        "filter: brightness(1.2)",
    ]],
    ["button.var-contained", [
        "border: none",
        "color: var(--ox-bg)",
        "background: var(--ox-fg)",
    ]],
    ["button.var-indicator,.button.var-indicator-filled", [
        "padding-right: calc(3 * var(--ox-base-length))",
    ]],
    ["button.var-indicator::after,.button.var-indicator-filled::after", [
        'content: ""',
        "position: absolute",
        "top: var(--ox-base-length)",
        "right: var(--ox-base-length)",
        "border: 1px solid currentColor",
        "width: var(--ox-base-length)",
        "height: var(--ox-base-length)",
        "border-radius: calc(var(--ox-round-factor) * var(--ox-base-length))",
        "background: none",
    ]],
    [
        "button.var-indicator-filled::after",
        [
            "background: currentColor !important",
        ],
    ],
    [
        "button.disabled,.button:disabled,.button-contained.disabled,.button-contained:disabled",
        [
            "opacity: 0.6",
            "cursor: not-allowed",
        ],
    ],
    ["link", ["text-decoration: underline", "cursor: pointer"]],
    ["link:hover", ["background: var(--ox-color-1)", "color: var(--ox-bg)"]],
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
