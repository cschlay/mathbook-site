import * as React from "react";
import { Definition } from "./MathDisplay/Definition";
import { Example } from "./MathDisplay/Example";
import { MathDisplay } from "./MathDisplay/MathDisplay";
import { MDXProvider } from "@mdx-js/react";
import { LayoutBase } from "./layouts/LayoutBase";
import { Link } from "./Link";
import { PageContext } from "gatsby/dist/gatsby/src/query/types";
import { Problem } from "./MathDisplay/Problem";
import { Proposition } from "./MathDisplay/Proposition";
import { PreviousPageButton } from "./PreviousPageButton";
import { TitleHeader } from "./TitleHeader";

interface Props {
  children: React.ReactChildren;
  pageContext: PageContext;
}

const MdxLayout = ({ children, pageContext }: Props): JSX.Element => {
  return (
    <LayoutBase>
      <PreviousPageButton />
      <TitleHeader>{pageContext.frontmatter.title}</TitleHeader>
      <MDXProvider
        components={{
          a: Link,
          Definition,
          Example,
          Problem,
          Proposition,
          tex: MathDisplay,
        }}
      >
        {children}
      </MDXProvider>
    </LayoutBase>
  );
};

export default MdxLayout;
