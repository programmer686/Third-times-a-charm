import Image from 'next/image'
import { Inter } from 'next/font/google'
import homeImage from "../comps/images/home_image.jpeg"
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/Header/Navbar'
import Latest_Sermons from '@/comps/Latest_Sermons'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <section className={styles.overview_section1_container}>
          <p className={styles.section1__welcome}> Bienvenido!<br/>Iglesia Cristo Rey Eterno</p>
      </section>
      <section className={styles.overview_section2__container}>
        <div className={styles.bible_verse__container}>
          <p className={styles.bible_verse__text}>Every day they continued to meet together in the temple courts. They broke bread in their homes and ate together with glad and sincere hearts, praising God and enjoying the favor of all the people. And the Lord added to their number daily those who were being saved. - Acts 2:46-47</p>
        </div>
      </section>
      <section className={styles.overview_section3__container}>
        <div>
          <div className={styles.laters_materials__sermons_container}>
            <Latest_Sermons/>
          </div>
        </div>
        <div className={styles.bulletin__container}>
          <p className={styles.bulletin__title}>Bulletin</p>
          <p className={styles.bulletin__event}>Church Service: 10:00 AM CST every Sunday</p>
          <p className={styles.bulletin__event}>Men's Breakfast: 9:00 AM CST on every first Saturday of the month</p>
          <p className={styles.bulletin__event}>Youth Group: 7:00 PM CST every second and fourth Friday of the Month</p>
        </div>
      </section>
    </main>
  )
}
