import styles from '@/styles/Latest_Sermons.module.css'

export default function Latest_Sermons() {
    return (
        <main className={styles.latest_sermons__container}>
            <iframe className={styles.latest_sermons__video} width="280" height="160" src="https://www.youtube.com/embed/EWn4-Ph-K-Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <p className={styles.latest_sermons__video}>Todo con orden</p>           
        </main>
    )
}