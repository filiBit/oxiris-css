import { ModifierDefinition } from "../common/rule.ts";

export const STATE_MODIFIER_DEFINITIONS: ModifierDefinition[] = [
    [
        "hover\\:",
        ":hover",
    ],
    [
        "active\\:",
        ":active",
    ],
    [
        "focus\\:",
        ":focus",
    ],
    [
        "open\\:",
        "[open]",
    ],
    [
        "dark .dark\\:",
        "",
    ],
    [
        "light .light\\:",
        "",
    ],
];

export const MEDIA_QUERY_DEFINITIONS: ModifierDefinition[] = [
    [
        "sm\\:",
        "min-width: 640px",
    ],
    [
        "md\\:",
        "min-width: 768px",
    ],
    [
        "lg\\:",
        "min-width: 1024px",
    ],
    [
        "xl\\:",
        "min-width: 1280px",
    ],
    [
        "\\2xl\\:",
        "min-width: 1536px",
    ],
];

export const PARENT_QUERY_DEFINITIONS: ModifierDefinition[] = [];
