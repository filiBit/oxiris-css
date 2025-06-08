import type { CssRuleDefinitionSet } from "../common/rule.ts";

const hRules: CssRuleDefinitionSet = Array.from(new Array(33)).map((
    _,
    idx,
) => [
    `h-${idx}`,
    [`height: calc(${idx} * var(--ox-base-length))`, "flex-shrink: 0"],
]);

hRules.push(["h-100\\%", ["height: 100%", "flex-shrink: 0"]], ["h-auto", [
    "height: auto",
]]);

const maxHRules: CssRuleDefinitionSet = Array.from(new Array(33)).map((
    _,
    idx,
) => [
    `max-h-${idx}`,
    [`max-height: calc(${idx} * var(--ox-base-length))`],
]);

maxHRules.push(["max-h-100\\%", ["max-height: 100%"]], ["max-h-100vh", [
    "max-height: 100vh",
]]);

const minHRules: CssRuleDefinitionSet = Array.from(new Array(33)).map((
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

const wRules: CssRuleDefinitionSet = Array.from(new Array(33)).map((
    _,
    idx,
) => [
    `w-${idx}`,
    [`width: calc(${idx} * var(--ox-base-length))`, "flex-shrink: 0"],
]);

wRules.push(["w-100\\%", ["width: 100%", "flex-shrink: 0"]], ["w-auto", [
    "width: auto",
]]);

const maxWRules: CssRuleDefinitionSet = Array.from(new Array(33)).map((
    _,
    idx,
) => [
    `max-w-${idx}`,
    [`max-width: calc(${idx} * var(--ox-base-length))`],
]);

maxWRules.push(["max-w-100\\%", ["max-width: 100%"]]);

const gapRules: CssRuleDefinitionSet = Array.from(new Array(33)).map((
    _,
    idx,
) => [`gap-${idx}`, [`gap: calc(${idx} * var(--ox-base-length))`]]);

const roundRules: CssRuleDefinitionSet = Array.from(new Array(33)).map((
    _,
    idx,
) => [`round-${idx}`, [
    `border-radius: calc(var(--ox-round-factor) * ${idx} * var(--ox-base-length))`,
]]);

const wSpanRules: CssRuleDefinitionSet = Array.from(new Array(33)).map((
    _,
    idx,
) => [
    `w-span-${idx}`,
    [
        `width: calc(${idx} * var(--ox-grid-track-width) + ${
            idx - 1
        } * var(--ox-grid-line-width))`,
        "flex-shrink: 0",
    ],
]);

const minWSpanRules: CssRuleDefinitionSet = Array.from(new Array(33)).map((
    _,
    idx,
) => [
    `min-w-span-${idx}`,
    [`min-width: calc(${idx} * var(--ox-grid-track-width) + ${
        idx - 1
    } * var(--ox-grid-line-width))`],
]);

const maxWSpanRules: CssRuleDefinitionSet = Array.from(new Array(33)).map((
    _,
    idx,
) => [
    `max-w-span-${idx}`,
    [`max-width: calc(${idx} * var(--ox-grid-track-width) + ${
        idx - 1
    } * var(--ox-grid-line-width))`],
]);

const hSpanRules: CssRuleDefinitionSet = Array.from(new Array(33)).map((
    _,
    idx,
) => [
    `h-span-${idx}`,
    [
        `height: calc(${idx} * var(--ox-grid-track-width) + ${
            idx - 1
        } * var(--ox-grid-line-width))`,
        "flex-shrink: 0",
    ],
]);

const minHSpanRules: CssRuleDefinitionSet = Array.from(new Array(33)).map((
    _,
    idx,
) => [
    `min-h-span-${idx}`,
    [`min-height: calc(${idx} * var(--ox-grid-track-width) + ${
        idx - 1
    } * var(--ox-grid-line-width))`],
]);

const maxHSpanRules: CssRuleDefinitionSet = Array.from(new Array(33)).map((
    _,
    idx,
) => [
    `max-h-span-${idx}`,
    [`max-height: calc(${idx} * var(--ox-grid-track-width) + ${
        idx - 1
    } * var(--ox-grid-line-width))`],
]);

const mRules: CssRuleDefinitionSet = Array.from(new Array(33)).flatMap((
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

const pRules: CssRuleDefinitionSet = Array.from(new Array(33)).flatMap((
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

const lhRules: CssRuleDefinitionSet = Array.from(new Array(33)).flatMap((
    _,
    idx,
) => [[
    `lh-${idx}`,
    [`line-height: calc(${idx} * var(--ox-base-length))`],
]]);

lhRules.push([
    "lh-1\\.3",
    ["line-height: 1.3"],
], [
    "lh-1\\.5",
    ["line-height: 1.5"],
], [
    "lh-2",
    ["line-height: 2"],
]);

const borderRules: CssRuleDefinitionSet = [
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
    [
        "border-1px",
        ["border: 1px solid currentColor"],
    ],
    [
        "border-top-1px",
        ["border-top: 1px solid currentColor"],
    ],
    [
        "border-right-1px",
        ["border-right: 1px solid currentColor"],
    ],
    [
        "border-bottom-1px",
        ["border-bottom: 1px solid currentColor"],
    ],
    [
        "border-left-1px",
        ["border-left: 1px solid currentColor"],
    ],
    [
        "border-2px",
        ["border: 2px solid currentColor"],
    ],
    [
        "border-top-2px",
        ["border-top: 2px solid currentColor"],
    ],
    [
        "border-right-2px",
        ["border-right: 2px solid currentColor"],
    ],
    [
        "border-bottom-2px",
        ["border-bottom: 2px solid currentColor"],
    ],
    [
        "border-left-2px",
        ["border-left: 2px solid currentColor"],
    ],
];

const boxSizeRules: CssRuleDefinitionSet = [
    ["border-box", ["box-sizing: border-box"]],
    ["content-box", ["box-sizing: content-box"]],
];

const colorRules: CssRuleDefinitionSet = [
    ["hue-neutral", [
        "color: var(--ox-neutral-1)",
        "--ox-color-1: var(--ox-neutral-1)",
        "--ox-color-2: var(--ox-neutral-2)",
        "--ox-color-2: var(--ox-neutral-3)",
        "--ox-fg: var(--ox-neutral-1)",
        "--ox-bg: var(--ox-background)",
    ]],
    ["hue-a", [
        "color: var(--ox-a-1)",
        "--ox-color-1: var(--ox-a-1)",
        "--ox-color-2: var(--ox-a-2)",
        "--ox-color-3: var(--ox-a-3)",
        "--ox-fg: var(--ox-a-1)",
        "--ox-bg: var(--ox-background)",
    ]],
    ["hue-b", [
        "color: var(--ox-b-1)",
        "--ox-color-1: var(--ox-b-1)",
        "--ox-color-2: var(--ox-b-2)",
        "--ox-color-3: var(--ox-b-3)",
        "--ox-fg: var(--ox-b-1)",
        "--ox-bg: var(--ox-background)",
    ]],
    ["hue-c", [
        "color: var(--ox-c-1)",
        "--ox-color-1: var(--ox-c-1)",
        "--ox-color-2: var(--ox-c-2)",
        "--ox-color-3: var(--ox-c-3)",
        "--ox-fg: var(--ox-c-1)",
        "--ox-bg: var(--ox-background)",
    ]],
    ["hue-d", [
        "color: var(--ox-d-1)",
        "--ox-color-1: var(--ox-d-1)",
        "--ox-color-2: var(--ox-d-2)",
        "--ox-color-3: var(--ox-d-3)",
        "--ox-fg: var(--ox-d-1)",
        "--ox-bg: var(--ox-background)",
    ]],
    ["chroma-fg-0", [
        "color: var(--ox-background)",
        "--ox-fg: var(--ox-background)",
    ]],
    ["chroma-fg-1", [
        "color: var(--ox-color-1)",
        "--ox-fg: var(--ox-color-1)",
    ]],
    ["chroma-fg-2", [
        "color: var(--ox-color-2)",
        "--ox-fg: var(--ox-color-2)",
    ]],
    ["chroma-fg-3", [
        "color: var(--ox-color-3)",
        "--ox-fg: var(--ox-color-3)",
    ]],
    ["chroma-bg-0", [
        "background: var(--ox-background)",
        "--ox-bg: var(--ox-background)",
    ]],
    ["chroma-bg-1", [
        "background: var(--ox-color-1)",
        "--ox-bg: var(--ox-color-1)",
    ]],
    ["chroma-bg-2", [
        "background: var(--ox-color-2)",
        "--ox-bg: var(--ox-color-2)",
    ]],
    ["chroma-bg-3", [
        "background: var(--ox-color-3)",
        "--ox-bg: var(--ox-color-3)",
    ]],
    ["color-invert", [
        "color: var(--ox-bg)",
        "background: var(--ox-fg)",
        "border-color: currentColor",
    ]],
    ["color-revert", [
        "color: var(--ox-fg)",
        "background: var(--ox-bg)",
        "border-color: currentColor",
    ]],
];

const letterRules: CssRuleDefinitionSet = [
    ["letter-0\\.05em", ["letter-spacing: 0.05em"]],
    ["letter-0\\.1em", ["letter-spacing: 0.1em"]],
    ["letter-0\\.15em", ["letter-spacing: 0.15em"]],
    ["letter-0\\.2em", ["letter-spacing: 0.2em"]],
];

const filterRules: CssRuleDefinitionSet = [
    ["filter-low", ["filter: grayscale(1) brightness(0.75)"]],
    ["filter-no", ["filter: none"]],
];

export const definitions: CssRuleDefinitionSet = [
    ...borderRules,
    ...hRules,
    ...minHRules,
    ...maxHRules,
    ...wRules,
    ...maxWRules,
    ...gapRules,
    ...roundRules,
    ...wSpanRules,
    ...minWSpanRules,
    ...maxWSpanRules,
    ...hSpanRules,
    ...minHSpanRules,
    ...maxHSpanRules,
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
        "align-self-start",
        ["align-self: flex-start"],
    ],
    [
        "align-self-center",
        ["align-self: center"],
    ],
    [
        "align-self-end",
        ["align-self: flex-end"],
    ],
    [
        "justify-self-start",
        ["justify-self: start"],
    ],
    [
        "justify-self-center",
        ["justify-self: center"],
    ],
    [
        "justify-self-end",
        ["justify-self: end"],
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
    ["select-none", ["user-select: none"]],
    ["select-text", ["user-select: text"]],
    ["select-all", ["user-select: all"]],
    ["select-auto", ["user-select: auto"]],
];
