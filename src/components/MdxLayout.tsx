import { LayoutBase } from "./layouts/LayoutBase";
import { TitleHeader } from "./TitleHeader";
import { ReactNode } from "react";
import { MdxFrontmatter } from "../types";

interface Props {
  children: ReactNode;
  meta: MdxFrontmatter;
}

const MdxLayout = ({ children, meta }: Props) => {
  const { title } = meta;

  return (
    <LayoutBase>
      <TitleHeader>{title}</TitleHeader>
      {children}
    </LayoutBase>
  );
};

export default MdxLayout;
