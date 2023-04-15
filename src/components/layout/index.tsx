import { FunctionComponent, Children } from "react";
import Navbar from "../navbar";
import { iProps } from "../../interfaces/iProps.interface";
import Footer from "@/components/footer";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  ...props
}: iProps) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
