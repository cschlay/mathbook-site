import * as React from "react";
import { Link } from "./Link";
import { SectionItem } from "../types";
import { buildToc } from "../utils/buildToc";
import styled from "@emotion/styled";

interface Props {
  items: SectionItem[];
}

const StyledUl = styled.ul`
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

const StyledHeader = styled.h2`
  text-transform: capitalize;
`;

export const TableOfContents = ({ items }: Props): JSX.Element => {
  const toc = buildToc(items);

  return (
    <>
      {toc.map((chapter) => (
        <React.Fragment key={chapter.index}>
          <StyledHeader>
            {chapter.index} {chapter.name}
          </StyledHeader>
          <StyledUl>
            {chapter.items.map((section, secId) => (
              <li key={section.id}>
                <Link href={`/${section.slug}`}>
                  {chapter.index}.{secId + 1} {section.frontmatter.title}
                </Link>
              </li>
            ))}
          </StyledUl>
        </React.Fragment>
      ))}
    </>
  );
};
