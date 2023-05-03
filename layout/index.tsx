import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Topbar from "./Topbar";
import SlickSlider from "./Slider";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Topbar />
      <Navbar />
      <SlickSlider />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
