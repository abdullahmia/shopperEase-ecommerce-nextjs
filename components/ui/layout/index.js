import Subscribe from "../../subscribe";
import Footer from "../footer";
import Navigation from "../header/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className="lg:px-0 px-5">{children}</main>
      <Subscribe />
      <Footer />
    </>
  )
}

export default Layout;