import * as React from "react";
import { Helmet } from "react-helmet";
import { LicenseAttribution } from "../components/LicenseAttribution";
import { graphql } from "gatsby";

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
    <main>
      <Helmet title="Mathbook Project" defer={false} />

      <h1>Mathbook Project</h1>
      <LicenseAttribution />

      <h2>Table of Contents</h2>
      <ul>
        {data.allMdx.nodes.map((node) => (
          <li key={node.id}>
            <a href={`/${node.slug}`}>{node.frontmatter.title}</a>
          </li>
        ))}
      </ul>
    </main>
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
