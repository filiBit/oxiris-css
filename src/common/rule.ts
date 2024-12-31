export type CssRuleDefinition = [string, string[]];

export type CssRuleDefinitionSet = CssRuleDefinition[];

export type ModifierDefinition = [string, string];

export function makeDeclarationBlock(declarations: string[]): string {
    return declarations.join(";\n") + ";";
}

export function makeStandardRules(
    ruleDefinitions: CssRuleDefinitionSet,
): string[] {
    return ruleDefinitions.map(([selector, declarations]) =>
        "." + selector + " {\n" + makeDeclarationBlock(declarations) + "\n}"
    );
}

export function makeStateModifiers(
    ruleDefinitions: CssRuleDefinitionSet,
    stateModifierDefinitions: ModifierDefinition[],
): string[] {
    return ruleDefinitions.flatMap(([selector, declarations]) =>
        stateModifierDefinitions.map(([prefix, suffix]) =>
            "." + prefix + selector + suffix + " {\n" +
            makeDeclarationBlock(declarations) + "\n}"
        )
    );
}

export function makeMediaModifierBlocks(
    rules: string[],
    mediaRuleDefinitions: ModifierDefinition[],
): string[] {
    return mediaRuleDefinitions.map(([prefix, feature]) =>
        `@media (${feature}) {\n` + rules.map((r) =>
            "." + prefix + r.slice(1)
        ).join("\n") +
        "\n}"
    );
}
