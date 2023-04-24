import Image from 'next/image'
import { Inter } from 'next/font/google'
import homeImage from "../comps/images/home_image.jpeg"
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/Header/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <section className={styles.overview_section1_container}>
          <p className={styles.section1__welcome}>Iglesia Cristo Rey Eterno</p>
      </section>
      <section className={styles.overview_section2__container}>
        <div className={styles.bible_verse__container}>
          <p className={styles.bible_verse__text}>Every day they continued to meet together in the temple courts. They broke bread in their homes and ate together with glad and sincere hearts, praising God and enjoying the favor of all the people. And the Lord added to their number daily those who were being saved. - <em>Acts 2:46-47</em></p>
        </div>
      </section>
      <section className={styles.overview_section3__container}>
        
      </section>
    </main>
  )
}
