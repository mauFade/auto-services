module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
  ignore: ["**/*.d.ts"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@application": "./src/application",
          "@infra": "./src/infra",
          "@domain": "./src/domain",
          "@configs": "./src/configs",
        },
      },
    ],
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
  ],
};
