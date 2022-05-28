import { ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface Props {
  children: ReactNode;
}
export const LayoutBase = ({ children }: Props): JSX.Element => {
  return (
    <>
      <main>
        <Header />
        {children}
      </main>
      <Footer />
    </>
  );
};
