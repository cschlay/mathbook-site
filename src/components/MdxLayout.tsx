import { Definition } from "./MathDisplay/Definition";
import { Example } from "./MathDisplay/Example";
import { MathDisplay } from "./MathDisplay/MathDisplay";
import { MDXProvider } from "@mdx-js/react";
import { LayoutBase } from "./layouts/LayoutBase";
import { Link } from "./Link";
import { Problem } from "./MathDisplay/Problem";
import { Proposition } from "./MathDisplay/Proposition";
import { TitleHeader } from "./TitleHeader";
import { ReactNode } from "react";
import { PreviousPageButton } from "./PreviousPageButton";

interface Props {
  children: ReactNode;
  pageContext: {
    frontmatter: {
      title: string;
    };
  };
}

const MdxLayout = ({ children, pageContext }: Props) => {
  return (
    <LayoutBase>
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
