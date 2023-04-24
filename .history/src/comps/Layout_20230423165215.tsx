import Footer from "./Footer/Footer";
import Navbar from "./Header/Navbar";
import styles from '@/styles/Layout.module.css'
export default function Layout({children}) {
    return (
        <main className={styles.website__body}>
            <Navbar/>
            <main>{children}</main>
            <footer className={styles.website__footer}><Footer/></footer>
        </main>
    )
}