import * as React from "react";
import { LicenseAttribution } from "../components/LicenseAttribution";
import { graphql } from "gatsby";
import { TitleHeader } from "../components/TitleHeader";
import { LayoutBase } from "../components/layouts/LayoutBase";

interface gqlNode {
  id: string;
  frontmatter: {
    title: string;
    sources: string[];
  };
  slug: string;
}

interface Props {
  data: {
    allMdx: {
      nodes: gqlNode[];
    };
  };
}

const IndexPage = ({ data }: Props): JSX.Element => {
  return (
    <LayoutBase>
      <main>
        <TitleHeader>Mathbook Project (Logic Edition)</TitleHeader>
        <LicenseAttribution />

        <h2>Contents</h2>
        <ul>
          {data.allMdx.nodes.map((node) => (
            <li key={node.id}>
              <a href={`/${node.slug}`}>{node.frontmatter.title}</a>
            </li>
          ))}
        </ul>
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
