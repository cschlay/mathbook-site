import * as React from "react";
import { TableOfContents } from "../components/TableOfContents";
import { LayoutBase } from "../components/layouts/LayoutBase";
import { SectionItem } from "../types";
import { TitleHeader } from "../components/TitleHeader";
import { graphql } from "gatsby";

interface Props {
  data: {
    allMdx: {
      nodes: SectionItem[];
    };
  };
}

const IndexPage = ({ data }: Props): JSX.Element => {
  return (
    <LayoutBase>
      <main>
        <TitleHeader>Mathbook Project (Logic Edition)</TitleHeader>
        <p>
          This is a hobbyist mathematics textbook based on open source
          textbooks. There is attempts to include concrete examples and
          comments.
        </p>
        <TableOfContents items={data.allMdx.nodes} />
      </main>
    </LayoutBase>
  );
};

export const query = graphql`
  query TableOfContentsQuery {
    allMdx(sort: { fields: slug }) {
      nodes {
        frontmatter {
          title
          sources
        }
        id
        slug
      }
    }
  }
`;

export default IndexPage;
