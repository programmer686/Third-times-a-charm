import Footer from "./Footer/Footer";
import Navbar from "./Header/Navbar";
import styles from '@/styles/Layout.module.css'
const Layout = ( {children} ) => {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    )
  }

  export default Layout