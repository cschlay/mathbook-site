import * as React from "react";
import { Link } from "./Link";
import styled from "@emotion/styled";

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

export const TableOfContents = ({ items }: Props): JSX.Element => {
  const content: Record<string, TableOfContentsItem[]> = items.reduce(
    (result, item) => {
      const [chapter] = item.slug.split("/").slice(-2);
      const key = chapter.replace(/[0-9]*_/, "").replace(/-/g, " ");
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(item);
      return result;
    },
    {}
  );
  return (
    <>
      {Object.entries(content).map(([name, items]) => (
        <List key={name} name={name} items={items} />
      ))}
    </>
  );
};

interface ListProps {
  name: string;
  items: TableOfContentsItem[];
}

const StyledHeader = styled.h2`
  text-transform: capitalize;
`;

const List = ({ name, items }: ListProps): JSX.Element => {
  return (
    <>
      <StyledHeader>{name}</StyledHeader>
      <Container>
        {items.map((node) => (
          <li key={node.id}>
            <Link href={`/${node.slug}`}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </Container>
    </>
  );
};
