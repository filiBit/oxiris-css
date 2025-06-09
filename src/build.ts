console.log("Build start");

import postcss from "npm:postcss";
import cssnano from "npm:cssnano";
import cssnanoPresetLite from "npm:cssnano-preset-lite";
import * as fs from "@std/fs";
import {
    makeMediaModifierBlocks,
    makeStandardRules,
    makeStateModifiers,
} from "./common/rule.ts";
import { definitions as utilityDefinitions } from "./definitions/utilities.ts";
import { definitions as componentDefinitions } from "./definitions/components.ts";
import {
    MEDIA_QUERY_DEFINITIONS,
    STATE_MODIFIER_DEFINITIONS,
} from "./definitions/modifiers.ts";

const VERSION = "2.5.0";

const creationYear = 2024;

const AUTHOR_NOTE = `Oxiris CSS ${VERSION} © ${creationYear} Filip Biterski`;

const envCss = new TextDecoder().decode(
    await Deno.readFile("./src/definitions/environment.css"),
) + "\n";

console.log("Build utility classes");
const utility = makeStandardRules(utilityDefinitions);

console.log("Build components classes");
const component = makeStandardRules(componentDefinitions);

console.log("Build modifiers classes");
const stateModifiers = makeStateModifiers(
    utilityDefinitions,
    STATE_MODIFIER_DEFINITIONS,
);
const mediaModifiers = makeMediaModifierBlocks(
    [component, utility, stateModifiers].flat(),
    MEDIA_QUERY_DEFINITIONS,
);

export const css = [
    component,
    utility,
    stateModifiers,
    mediaModifiers,
].flat().join("\n");

console.log("Prepare postcss");
const postcssPlugins = [cssnano({ preset: cssnanoPresetLite })];
const postcssProcessor = postcss(postcssPlugins);

console.log("Prepare dist dir");
await fs.emptyDir("./dist");

console.log("Create dist files");

Deno.writeFile(
    `./dist/oxiris-css-${VERSION}.css`,
    new TextEncoder().encode(
        `/* ${AUTHOR_NOTE} */\n\n` + "/* ENVIRONMENT LAYER */\n\n" + envCss +
            "/* UTILITY AND COMPONENT LAYERS */\n\n" +
            await postcssProcessor.process(
                css,
                { from: undefined },
            ).then((res) => res.css),
    ),
);

console.log("Done");
