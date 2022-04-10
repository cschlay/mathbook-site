import * as React from "react";
import styled from "@emotion/styled";
import { Link } from "./Link";

export interface TableOfContentsItem {
  id: string;
  frontmatter: {
    title: string;
    sources: string[];
  };
  slug: string;
}

interface Props {
  items: TableOfContentsItem[];
}

const Container = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  a {
    color: var(--color-link);
  }
  a:hover {
  }

  li {
    padding: 0.25rem;
  }
`;

export const TableOfContents = ({ items }: Props) => {
  return (
    <Container>
      {items.map((node) => (
        <li key={node.id}>
          <Link href={`/${node.slug}`}>{node.frontmatter.title}</Link>
        </li>
      ))}
    </Container>
  );
};
