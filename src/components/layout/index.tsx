import { FunctionComponent, Children } from "react";
import Navbar from "../navbar";
import { iProps } from "../../interfaces/iProps.interface";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  ...props
}: iProps) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
    </>
  );
};

export default Layout;
