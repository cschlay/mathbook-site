import { TableOfContents } from "../components/TableOfContents";
import { LayoutBase } from "../components/layouts/LayoutBase";
import { TitleHeader } from "../components/TitleHeader";

const IndexPage = () => {
  return (
    <LayoutBase>
      <main>
        <TitleHeader>Mathbook Project (Logic Edition)</TitleHeader>
        <p>
          This is a hobbyist mathematics textbook based on open source
          textbooks. There is attempts to include concrete examples and
          comments.
        </p>
        <TableOfContents />
      </main>
    </LayoutBase>
  );
};

export default IndexPage;
