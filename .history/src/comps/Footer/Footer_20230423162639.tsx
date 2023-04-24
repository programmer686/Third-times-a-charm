import styles from '@/styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer_container}>
            <p className={styles.footer_logo}>Iglesia Cristo Rey Eterno</p>
            <div className={styles.footer_info__container}>
                <div className={styles.footer_info__box}>
                    <p class {
                        constructor(parameters) {
                            
                        }
                    }>
                        Dirección:<br/>
                        Clavel Rojo 3105 Col. Loma Bonita<br/>
                        Entre Av. Ahuehuetes y Calle Bronce<br/>
                    </p>
                </div>
                <div className={styles.footer_info__box}>
                    <p>
                        Como contactarnos:<br/>
                        info@icre.org.mx<br/>
                        Tel. 33 2959 1641 <br/>
                    </p>
                </div>
                <div className={styles.footer_info__box}>
                    <p>
                        Site map:<br/>
                        Overivew<br/>
                        Materials<br/>
                        Who we are<br/>
                    </p>
                </div>
            </div>
        </footer>
    )
}