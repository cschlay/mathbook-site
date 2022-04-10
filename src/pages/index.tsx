import * as React from "react";
import { LayoutBase } from "../components/layouts/LayoutBase";
import { LicenseAttribution } from "../components/LicenseAttribution";
import {
  TableOfContents,
  TableOfContentsItem,
} from "../components/TableOfContents";
import { TitleHeader } from "../components/TitleHeader";
import { graphql } from "gatsby";

interface Props {
  data: {
    allMdx: {
      nodes: TableOfContentsItem[];
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

        <h2>Contents</h2>
        <TableOfContents items={data.allMdx.nodes} />
      </main>
    </LayoutBase>
  );
};

export const query = graphql`
  query TableOfContentsQuery {
    allMdx {
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
