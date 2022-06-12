module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["jest"],
  rules: {
    "sort-imports": [
      "warn",
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],
  },
};
