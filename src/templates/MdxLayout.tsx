import Head from "next/head";
import { LayoutBase } from "../organisms/LayoutBase";
import { MdxFrontmatter } from "../types";
import { ReactNode } from "react";
import { TitleHeader } from "../atoms/TitleHeader";

interface Props {
  children: ReactNode;
  meta: MdxFrontmatter;
}

const MdxLayout = ({ children, meta }: Props) => {
  const { title } = meta;

  return (
    <LayoutBase>
      <Head>
        <title>{title}</title>
      </Head>
      <TitleHeader>{title}</TitleHeader>
      {children}
    </LayoutBase>
  );
};

export default MdxLayout;
