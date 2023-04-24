import Footer from "./Footer/Footer";
import Navbar from "./Header/Navbar";
import styles from '@/styles/Layout.module.css'
export default function Layout({children}) {
    return (
        <main className={styles.website__body}>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </main>
    )
}