import Footer from "./Footer";
import Navigation from "./header/Navigation";

const Layout = ({children}) => {
  return (
    <>
        <Navigation />
        <main className="lg:px-0 px-5">{children}</main>
        <Footer />
    </>
  )
}

export default Layout;