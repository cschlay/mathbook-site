# Mathbook Project

[![Netlify Status](https://api.netlify.com/api/v1/badges/5fb1915b-b313-4dfd-8019-fe27c00824ce/deploy-status)](https://app.netlify.com/sites/mathbook/deploys)

This repository contains the frontend and most of the text content files. The backend repository is at https://github.com/cschlay/mathbook.

## Attributions

This project is based on open source and public mathematics textbooks.
The source is always explicitly mentioned since multiple sources exists, they are marked in `.mdx` as 

```html
<!-- This file contains text from Open Logic Project, used under CC BY 4.0. License.
Content is modified to fit computer science approach, see README.md -->

<!-- SOURCE: OLP -->
Text that is directly used under the terms of license. Modifications are included.
<!-- END SOURCE: OLP -->
```

Any text without attributions is original to this project.

### Open Logic Project (OLP)

This project uses texts provided by [Open Logic Project](https://openlogicproject.org/about/
) which is used under [CC BY 4.0. license](https://creativecommons.org/licenses/by/4.0/).
Texts have been changed to embed the material into the software and modified to fit with other texts.

* The changes are made to embed the material into TypeScript code and Markdown.
* Some parts of the texts have been modified, combined with other sources, or not included in the project. The goal is to make it more fit for computer science.

The primary version used is http://builds.openlogicproject.org/open-logic-debug.pdf.

## License

The project is licensed under [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/).
Notice that it only covers the code and original texts but not texts taken from other projects.
Proper attributions to those projects need to be included.

## Development Environment

Install latest Node.js and yarn.

```bash
yarn install --dev
yarn dev
```

## Notes

* `remark-math` version `3.0.1` works with Gatsby but doesn't work with `react-markdown`
* `remark-math` version `4.0.0` doesn't work with current Gatsby version
