module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: ["eslint:recommended", "next/core-web-vitals", "prettier"],
  plugins: ["jest"],
};
