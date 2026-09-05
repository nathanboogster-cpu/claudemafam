import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Separate standalone apps, each with its own config/lint/build — see
    // their READMEs or the project root notes.
    "pet-spa-luxe/**",
    "bark-and-bork-mobile-pet-spa/**",
    "sittin-pretty-pet-grooming/**",
    "flos-happy-clipper/**",
  ]),
]);

export default eslintConfig;
