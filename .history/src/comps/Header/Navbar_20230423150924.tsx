import Link from "next/link";
import styles from "@/styles/Footer.module.css"
export default function Navbar() {
    return (
            <nav className={styles.nav_container}>
                    <ul className={styles.nav_link__container}>
                        <li className={styles.nav_link_li}>
                            <Link href="/" className={styles.nav_link_link}>
                                Overview
                            </Link>
                        </li>
                        <li className={styles.nav_link_li}>
                            <Link href="/" className={styles.nav_link_link}>
                                Materials
                            </Link>
                        </li>
                        <li className={styles.nav_link_li}>
                            <Link href="/" className={styles.nav_link_link}>
                                Who we Are
                            </Link>
                        </li>
                    </ul>
            </nav>
    )
}