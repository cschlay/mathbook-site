import { Footer } from "../molecules/Footer";
import { Header } from "../molecules/Header";
import { ReactNode } from "react";

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
