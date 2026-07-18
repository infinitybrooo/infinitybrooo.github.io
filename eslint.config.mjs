import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: [
      "node_modules/**",
      "docs/**",
      "assets/**",
      ".wrangler/**",
      "test-results/**",
      "playwright-report/**",
      "**/*.sprites-backup-*.js"
    ]
  },
  js.configs.recommended,
  {
    files: ["js/**/*.js", "functions/**/*.js", "tools/**/*.mjs", "tests/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        ...globals.browser,
        ...globals.node,
        AudioManager: "readonly",
        CGOverlay: "readonly",
        getResponsiveAssetUrl: "readonly",
        setFloatingUiHidden: "readonly",
        actualizarUiFlotantePorOverlays: "readonly",
        showLoadingScreen: "readonly",
        showToast: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-redeclare": "off",
      "no-empty": ["error", { "allowEmptyCatch": true }]
    }
  },
  {
    files: ["js/biblia-produccion.js", "functions/**/*.js", "tools/**/*.mjs", "tests/**/*.js"],
    languageOptions: {
      sourceType: "module"
    }
  }
];
