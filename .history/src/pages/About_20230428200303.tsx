import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/About.module.css"

export default function About() {
  return (
    <main className={styles.about__container}>
      <h1 className={styles.about_us__page_title}>Our History</h1>
      <div className={styles.about_us__vide_container}>
          <iframe className={styles.about_us__video} width="700" height="330" src="https://www.youtube.com/embed/nHbjY5i7Fao" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
     

   
    </main>
  )
}
