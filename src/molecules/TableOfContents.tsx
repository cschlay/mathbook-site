import { Link } from "../atoms/Link";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > a {
    padding: 0.25rem 0;
    width: fit-content;
  }
`;

export const TableOfContents = () => {
  return (
    <Container>
      <h2>1 Sets</h2>
      <Item chapter="sets" section="Extensionality" />
      <Item chapter="sets" section="Subsets and Power Sets" />
      <Item chapter="sets" section="Unions and Intersections" />

      <h2>2 Relations</h2>
      <Item chapter="relations" section="Relations as Sets" />
    </Container>
  );
};

interface ItemProps {
  chapter: string;
  section: string;
}

const Item = ({ chapter, section }: ItemProps) => {
  const slug = section.replaceAll(" ", "-").toLowerCase();

  return <Link href={`/logic/${chapter}/${slug}`}>{section}</Link>;
};
