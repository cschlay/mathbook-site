import { LayoutBase } from "./layouts/LayoutBase";
import { TitleHeader } from "./TitleHeader";
import { ReactNode } from "react";
import { MdxFrontmatter } from "../types";
import Head from "next/head";

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
