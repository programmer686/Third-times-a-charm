import styles from '@/styles/Home.module.css'

export default function Latest_Sermons() {
    return (
        <main className={styles.latest_material__container}>
            <iframe className={styles.latest_material__video} width="280" height="160" src="https://www.youtube.com/embed/EWn4-Ph-K-Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <p className={styles.latest_material__title}>Todo con orden</p>
            <p className={styles.latest_material__speaker}>Jorge Carillo</p>
            <iframe className={styles.latest_material__video} width="280" height="160" src="https://www.youtube.com/embed/OhvaqYjfFUg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>           
            <p className={styles.latest_material__title}>Todo con orden</p>
            <p className={styles.latest_material__speaker}>Tono Barrera</p>              
        </main>
                
       
    )
    }