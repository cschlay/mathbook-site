import { LayoutBase } from "../organisms/LayoutBase";
import { TableOfContents } from "../molecules/TableOfContents";
import { TitleHeader } from "../atoms/TitleHeader";
import Head from "next/head";

const IndexPage = () => {
  return (
    <LayoutBase>
      <Head>
        <title>Mathbook Project</title>
      </Head>
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
