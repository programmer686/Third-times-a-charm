import styles from "@/styles/Logo.module.css"

export default function Logo() {
    return (
        <main className={styles.logo_container}>
            <h1 className={styles.logo_icre_logo}>ICRE</h1>
            <p className={styles.logo_icre_fullname}>Iglesia Presbiteriana Cristo Rey Eterno</p>
        </main>
    )
}