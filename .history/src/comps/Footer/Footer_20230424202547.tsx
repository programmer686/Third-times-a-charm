import styles from '@/styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer_container}>
            <p className={styles.footer_logo}>Iglesia Cristo Rey Eterno</p>
            <div className={styles.footer_info__container}>
                <div className={styles.footer_info__box}>
                    <p className={styles.footer_info__text}>
                        <strong><u>Dirección:</u></strong><br/>
                        Clavel Rojo 3105 Col. Loma Bonita<br/>
                        Entre Av. Ahuehuetes y Calle Bronce<br/>
                    </p>
                </div>
                <div className={styles.footer_info__box}>
                    <p className={styles.footer_info__text}>
                        <strong><u>Como contactarnos:</u></strong><br/>
                        <a href="malito:info@icre.org.mx" class>info@icre.org.mx</a><br/>
                        Tel. 33 2959 1641 <br/>
                    </p>
                </div>
                <div className={styles.footer_info__box}>
                    <p className={styles.footer_info__text}>
                        <strong><u>Site map:</u></strong><br/>
                        <Link href="/" className={styles.footer__nav_link}>Overivew</Link><br/>
                        <Link href="/Materials" className={styles.footer__nav_link}>Materials</Link><br/>
                        <Link href="/About" className={styles.footer__nav_link}>Who we are</Link><br/>
                    </p>
                </div>
            </div>
            <div className={styles.footer_createdBy_footer}>
                <p className={styles.footer_powered_by}>Powered by Vercel</p>
            </div>
        </footer>
    )
}