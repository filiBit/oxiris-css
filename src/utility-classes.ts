import { breakpoints } from "./breakpoints.ts";
import type { CssRuleDefinitionSet } from "./types.ts";

const hRules: CssRuleDefinitionSet = Array.from(new Array(17)).map((
    _,
    idx,
) => [
    `h-${idx}`,
    [`height: calc(${idx} * var(--ox-base-length))`],
]);

hRules.push(["h-100\\%", ["height: 100%"]]);

const maxHRules: CssRuleDefinitionSet = Array.from(new Array(17)).map((
    _,
    idx,
) => [
    `max-h-${idx}`,
    [`max-height: calc(${idx} * var(--ox-base-length))`],
]);

maxHRules.push(["max-h-100\\%", ["max-height: 100%"]], ["max-h-100vh", [
    "max-height: 100vh",
]]);

const minHRules: CssRuleDefinitionSet = Array.from(new Array(17)).map((
    _,
    idx,
) => [
    `min-h-${idx}`,
    [`min-height: calc(${idx} * var(--ox-base-length))`],
]);

minHRules.push(["min-h-100vh", [
    "min-height: 100vh",
]]);

maxHRules.push(["max-h-100\\%", ["max-height: 100%"]], ["max-h-100vh", [
    "max-height: 100vh",
]]);

const wRules: CssRuleDefinitionSet = Array.from(new Array(17)).map((
    _,
    idx,
) => [
    `w-${idx}`,
    [`width: calc(${idx} * var(--ox-base-length))`],
]);

wRules.push(["w-100\\%", ["width: 100%"]]);

const maxWRules: CssRuleDefinitionSet = Array.from(new Array(17)).map((
    _,
    idx,
) => [
    `max-w-${idx}`,
    [`max-width: calc(${idx} * var(--ox-base-length))`],
]);

maxWRules.push(["max-w-100\\%", ["max-width: 100%"]]);

const gapRules: CssRuleDefinitionSet = Array.from(new Array(17)).map((
    _,
    idx,
) => [`gap-${idx}`, [`gap: calc(${idx} * var(--ox-base-length))`]]);

const roundRules: CssRuleDefinitionSet = Array.from(new Array(17)).map((
    _,
    idx,
) => [`round-${idx}`, [
    `border-radius: calc(var(--ox-round-factor) * ${idx} * var(--ox-base-length))`,
]]);

const wSpanRules: CssRuleDefinitionSet = Array.from(new Array(16)).map((
    _,
    idx,
) => [
    `x-span-${idx + 1}`,
    [`width: calc(${
        idx + 1
    } * var(--ox-cell-width) + ${idx} * var(--ox-cell-gap))`],
]);

const maxWSpanRules: CssRuleDefinitionSet = Array.from(new Array(16)).map((
    _,
    idx,
) => [
    `max-x-span-${idx + 1}`,
    [`max-width: calc(${
        idx + 1
    } * var(--ox-cell-width) + ${idx} * var(--ox-cell-gap))`],
]);

const ySpanRules: CssRuleDefinitionSet = Array.from(new Array(16)).map((
    _,
    idx,
) => [
    `y-span-${idx + 1}`,
    [`height: calc(${
        idx + 1
    } * var(--ox-cell-width) + ${idx} * var(--ox-cell-gap))`],
]);

const maxYSpanRules: CssRuleDefinitionSet = Array.from(new Array(16)).map((
    _,
    idx,
) => [
    `max-y-span-${idx + 1}`,
    [`max-height: calc(${
        idx + 1
    } * var(--ox-cell-width) + ${idx} * var(--ox-cell-gap))`],
]);

const mRules: CssRuleDefinitionSet = Array.from(new Array(17)).flatMap((
    _,
    idx,
) => [[
    `m-${idx}`,
    [`margin: calc(${idx} * var(--ox-base-length))`],
], [
    `mx-${idx}`,
    [
        `margin-left: calc(${idx} * var(--ox-base-length))`,
        `margin-right: calc(${idx} * var(--ox-base-length))`,
    ],
], [
    `my-${idx}`,
    [
        `margin-top: calc(${idx} * var(--ox-base-length))`,
        `margin-bottom: calc(${idx} * var(--ox-base-length))`,
    ],
], [
    `mt-${idx}`,
    [
        `margin-top: calc(${idx} * var(--ox-base-length))`,
    ],
], [
    `mr-${idx}`,
    [
        `margin-right: calc(${idx} * var(--ox-base-length))`,
    ],
], [
    `mb-${idx}`,
    [
        `margin-bottom: calc(${idx} * var(--ox-base-length))`,
    ],
], [
    `ml-${idx}`,
    [
        `margin-left: calc(${idx} * var(--ox-base-length))`,
    ],
]]);

mRules.push([
    `mx-auto`,
    [
        `margin-left: auto`,
        `margin-right: auto`,
    ],
]);

const pRules: CssRuleDefinitionSet = Array.from(new Array(17)).flatMap((
    _,
    idx,
) => [
    [
        `p-${idx}`,
        [`padding: calc(${idx} * var(--ox-base-length))`],
    ],
    [
        `px-${idx}`,
        [
            `padding-left: calc(${idx} * var(--ox-base-length))`,
            `padding-right: calc(${idx} * var(--ox-base-length))`,
        ],
    ],
    [
        `py-${idx}`,
        [
            `padding-top: calc(${idx} * var(--ox-base-length))`,
            `padding-bottom: calc(${idx} * var(--ox-base-length))`,
        ],
    ],
    [
        `pt-${idx}`,
        [
            `padding-top: calc(${idx} * var(--ox-base-length))`,
        ],
    ],
    [
        `pr-${idx}`,
        [
            `padding-right: calc(${idx} * var(--ox-base-length))`,
        ],
    ],
    [
        `pb-${idx}`,
        [
            `padding-bottom: calc(${idx} * var(--ox-base-length))`,
        ],
    ],
    [
        `pl-${idx}`,
        [
            `padding-left: calc(${idx} * var(--ox-base-length))`,
        ],
    ],
]);

const textRules: CssRuleDefinitionSet = [[
    `text-left`,
    [`text-align: left`],
], [
    `text-center`,
    [`text-align: center`],
], [
    `text-right`,
    [`text-align: right`],
]];

const lhRules: CssRuleDefinitionSet = Array.from(new Array(17)).flatMap((
    _,
    idx,
) => [[
    `lh-${idx}`,
    [`line-height: calc(${idx} * var(--ox-base-length))`],
]]);

lhRules.push([
    "lh-1\\.5em",
    ["line-height: 1.5em"],
], [
    "lh-2em",
    ["line-height: 2em"],
]);

const borderRules: CssRuleDefinitionSet = [
    [
        "border-1px",
        ["border: 1px solid var(--ox-accent)"],
    ],
    [
        "border-top-1px",
        ["border-top: 1px solid var(--ox-accent)"],
    ],
    [
        "border-right-1px",
        ["border-right: 1px solid var(--ox-accent)"],
    ],
    [
        "border-bottom-1px",
        ["border-bottom: 1px solid var(--ox-accent)"],
    ],
    [
        "border-left-1px",
        ["border-left: 1px solid var(--ox-accent)"],
    ],
    [
        "border-2px",
        ["border: 2px solid var(--ox-accent)"],
    ],
    [
        "border-top-2px",
        ["border-top: 2px solid var(--ox-accent)"],
    ],
    [
        "border-right-2px",
        ["border-right: 2px solid var(--ox-accent)"],
    ],
    [
        "border-bottom-2px",
        ["border-bottom: 2px solid var(--ox-accent)"],
    ],
    [
        "border-left-2px",
        ["border-left: 2px solid var(--ox-accent)"],
    ],
    [
        "border-0",
        ["border: none"],
    ],
    [
        "border-top-0",
        ["border-top: none"],
    ],
    [
        "border-right-0",
        ["border-right: none"],
    ],
    [
        "border-bottom-0",
        ["border-bottom: none"],
    ],
    [
        "border-left-0",
        ["border-left: none"],
    ],
];

const boxSizeRules: CssRuleDefinitionSet = [
    ["border-box", ["box-sizing: border-box"]],
    ["content-box", ["box-sizing: content-box"]],
];

const colorRules: CssRuleDefinitionSet = [
    ["primary", [
        "color: var(--ox-primary)",
        "--ox-accent: var(--ox-primary)",
        "--ox-blur: var(--ox-primary-blur)",
        "--ox-accent-bg: var(--ox-primary-bg, var(--ox-bg))",
    ]],
    ["secondary", [
        "color: var(--ox-secondary)",
        "--ox-accent: var(--ox-secondary)",
        "--ox-blur: var(--ox-secondary-blur)",
        "--ox-accent-bg: var(--ox-secondary-bg, var(--ox-bg))",
    ]],
    ["tertiary", [
        "color: var(--ox-tertiary)",
        "--ox-accent: var(--ox-tertiary)",
        "--ox-blur: var(--ox-tertiary-blur)",
        "--ox-accent-bg: var(--ox-tertiary-bg, var(--ox-bg))",
    ]],
    ["quaternary", [
        "color: var(--ox-quaternary)",
        "--ox-accent: var(--ox-quaternary)",
        "--ox-blur: var(--ox-quaternary-blur)",
        "--ox-accent-bg: var(--ox-quaternary-bg, var(--ox-bg))",
    ]],
    ["solid", [
        "background: var(--ox-accent-bg)",
    ]],
];

const letterRules: CssRuleDefinitionSet = [
    ["letter-0\\.05em", ["letter-spacing: 0.05em"]],
    ["letter-0\\.1em", ["letter-spacing: 0.1em"]],
];

const filterRules: CssRuleDefinitionSet = [
    ["filter-low", ["filter: grayscale(1) brightness(0.75)"]],
    ["filter-no", ["filter: none"]],
];

const cssRules: CssRuleDefinitionSet = [
    ...borderRules,
    ...hRules,
    ...minHRules,
    ...maxHRules,
    ...wRules,
    ...maxWRules,
    ...gapRules,
    ...roundRules,
    ...wSpanRules,
    ...maxWSpanRules,
    ...ySpanRules,
    ...maxYSpanRules,
    ...mRules,
    ...pRules,
    ...textRules,
    ...lhRules,
    ...boxSizeRules,
    ...colorRules,
    ...letterRules,
    ...filterRules,
    ["hide", ["display: none"]],
    [
        "row",
        ["display: flex", "flex-direction: row"],
    ],
    [
        "col",
        ["display: flex", "flex-direction: column"],
    ],
    [
        "border-gap > *",
        ["border-left: none", "border-top: none"],
    ],
    [
        "border-gap-x > *:not(:first-child)",
        ["border-left: none"],
    ],
    [
        "border-gap-y > *:not(:first-child)",
        ["border-top: none"],
    ],
    ["flex-wrap", ["flex-wrap: wrap"]],
    [
        "justify-start",
        ["justify-content: flex-start"],
    ],
    [
        "justify-center",
        ["justify-content: center"],
    ],
    [
        "justify-end",
        ["justify-content: flex-end"],
    ],
    [
        "justify-between",
        ["justify-content: space-between"],
    ],
    [
        "align-start",
        ["align-items: flex-start"],
    ],
    [
        "align-center",
        ["align-items: center"],
    ],
    [
        "align-end",
        ["align-items: flex-end"],
    ],
    [
        "grow-0",
        ["flex-grow: 0"],
    ],
    [
        "grow",
        ["flex-grow: 1"],
    ],
    [
        "shrink-0",
        ["flex-shrink: 0"],
    ],
    [
        "shrink",
        ["flex-shrink: 1"],
    ],
    [
        "relative",
        ["position: relative"],
    ],
    [
        "absolute",
        ["position: absolute"],
    ],
    [
        "fixed",
        ["position: fixed"],
    ],
    ["top", ["top: 0"]],
    ["right", ["right: 0"]],
    ["bottom", ["bottom: 0"]],
    ["left", ["left: 0"]],
    ["overflow-no", ["overflow: hidden"]],
    ["basis-1", ["flex-basis: 1px;"]],
    [
        "f-size-sm",
        ["font-size: var(--ox-f-size-sm)"],
    ],
    [
        "f-size-md",
        ["font-size: var(--ox-f-size-md)"],
    ],
    [
        "f-size-lg",
        ["font-size: var(--ox-f-size-lg)"],
    ],
    [
        "f-size-xl",
        ["font-size: var(--ox-f-size-xl)"],
    ],
    [
        "f-size-2xl",
        ["font-size: var(--ox-f-size-2xl)"],
    ],
    [
        "f-weight-sm",
        ["font-weight: var(--ox-f-weight-sm)"],
    ],
    [
        "f-weight-md",
        ["font-weight: var(--ox-f-weight-md)"],
    ],
    [
        "f-weight-lg",
        ["font-weight: var(--ox-f-weight-lg)"],
    ],
    [
        "f-weight-xl",
        ["font-weight: var(--ox-f-weight-xl)"],
    ],
    ["break-all", ["word-break: break-all"]],
];

const cssHoverRules: CssRuleDefinitionSet = [
    ...borderRules,
    ...roundRules,
    ...colorRules,
    ...filterRules,
];

export function makeUtilityClasses(): string {
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

    for (const [k, v] of cssHoverRules) {
        text += `.hover\\:${k}:hover {\n${v.join(";\n")};\n}\n`;
    }

    return text;
}
