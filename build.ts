console.log("Build start");

import postcss from "npm:postcss";
import cssnano from "npm:cssnano";
import cssnanoPresetLite from "npm:cssnano-preset-lite";
import * as fs from "@std/fs";
import { makeUtilityClasses } from "./src/utility-classes.ts";
import { makeComponentClasses } from "./src/component-classes.ts";

const VERSION = "1.0.0";

const currentYear = new Date().getUTCFullYear();

const AUTHOR_NOTE = `Oxiris CSS ${VERSION} ${currentYear} Filip Biterski`;

const envCss = new TextDecoder().decode(
    await Deno.readFile("./src/environment.css"),
) + "\n";

console.log("Build Utility classes");
const utilityClasses = makeUtilityClasses();

console.log("Build Component classes");
const componentClasses = makeComponentClasses();

console.log("Prepare postcss");
const postcssPlugins = [cssnano({ preset: cssnanoPresetLite })];
const postcssProcessor = postcss(postcssPlugins);

console.log("Prepare dist dir");
await fs.emptyDir("./dist");

console.log("Create dist files");
Deno.writeFile(
    `./dist/oxiris-css-${VERSION}-env.css`,
    new TextEncoder().encode(
        `/* ${AUTHOR_NOTE} */\n` +
            await postcssProcessor.process(envCss, { from: undefined }).then((
                res,
            ) => res.css),
    ),
);
Deno.writeFile(
    `./dist/oxiris-css-${VERSION}-utility.css`,
    new TextEncoder().encode(
        `/* ${AUTHOR_NOTE} */\n` +
            await postcssProcessor.process(utilityClasses, { from: undefined })
                .then((res) => res.css),
    ),
);
Deno.writeFile(
    `./dist/oxiris-css-${VERSION}-component.css`,
    new TextEncoder().encode(
        `/* ${AUTHOR_NOTE} */\n` +
            await postcssProcessor.process(componentClasses, {
                from: undefined,
            }).then((res) => res.css),
    ),
);
Deno.writeFile(
    `./dist/oxiris-css-${VERSION}-utility+component.css`,
    new TextEncoder().encode(
        `/* ${AUTHOR_NOTE} */\n` +
            await postcssProcessor.process(utilityClasses + componentClasses, {
                from: undefined,
            })
                .then((
                    res,
                ) => res.css),
    ),
);
Deno.writeFile(
    `./dist/oxiris-css-${VERSION}-env+utility.css`,
    new TextEncoder().encode(
        `/* ${AUTHOR_NOTE} */\n` +
            await postcssProcessor.process(envCss + utilityClasses, {
                from: undefined,
            }).then((
                res,
            ) => res.css),
    ),
);
Deno.writeFile(
    `./dist/oxiris-css-${VERSION}-env+component.css`,
    new TextEncoder().encode(
        `/* ${AUTHOR_NOTE} */\n` +
            await postcssProcessor.process(envCss + componentClasses, {
                from: undefined,
            }).then((
                res,
            ) => res.css),
    ),
);
Deno.writeFile(
    `./dist/oxiris-css-${VERSION}-env+utility+component.css`,
    new TextEncoder().encode(
        `/* ${AUTHOR_NOTE} */\n` +
            await postcssProcessor.process(
                envCss + componentClasses + utilityClasses,
                { from: undefined },
            ).then((res) => res.css),
    ),
);

console.log("Done");
