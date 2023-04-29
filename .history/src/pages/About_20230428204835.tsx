import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/About.module.css"
import Leader from '@/comps/Leader'

export default function About() {
  return (
    <main className={styles.about__container}>
      <section className={styles.about_us__section1}>
          <iframe className={styles.about_us__video} width="700" height="330" src="https://www.youtube.com/embed/nHbjY5i7Fao" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </section>
      <section className={styles.about_us__section2}>
      <h1 className={styles.about_us__page_title}>Our History</h1>
        <p>Plantada en Guadalajara, por los misioneros Steve y Amy Robertson en el verano del a&ntilde;o 2010, la iglesia comenz&oacute; como misi&oacute;n, pasando por congregaci&oacute;n hasta establecerse como iglesia, una comunidad de la Iglesia Presbiteriana de M&eacute;xico.</p>
        <p>La Iglesia Cristo Rey Eterno, existe para dar gloria a Dios Padre, Hijo, y Esp&iacute;ritu Santo, es nuestro deseo mostrar el amor de Dios a todos y ser instrumentos de Dios para que otros conozcan el mensaje de salvaci&oacute;n revelado en las Sagradas Escrituras.</p><p>Nuestras creencias: Junto con otras Iglesias hist&oacute;ricas, afirmamos las verdades B&iacute;blicas b&aacute;sicas como son la Trinidad, la encarnaci&oacute;n de Jesucristo en el vientre de la virgen Mar&iacute;a, la crucifixi&oacute;n, muerte, sepultura y resurrecci&oacute;n de Jesucristo para salvaci&oacute;n de su pueblo.</p>
        <p>Enfatizamos que la Biblia es la palabra de Dios y nuestra &uacute;nica regla infalible de fe y conducta, la salvaci&oacute;n como un regalo de Dios, a Cristo como el &uacute;nico Redentor del pueblo de Dios, y la fe como &eacute;l &uacute;nico medio para recibir la salvaci&oacute;n de Dios.</p>
        <p>Nuestra visi&oacute;n: Que muchos como nosotros puedan experimentar el regalo de Dios que es la vida eterna, siendo a&ntilde;adidos por Dios a la Iglesia Cristo Rey Eterno, donde sean capacitados para dar gloria a Dios.</p>
        <p>Nuestra misi&oacute;n: Que la gente con las que nos relacionamos pueda ver el amor de Dios en nosotros por medio de nuestras palabras y acciones de misericordia, servicio y compa&ntilde;erismo.</p>  
      </section>
      <section className={styles.about_us__section3}>
        <h1 className={styles.about_us__page_title}>Our Leadership</h1>
            <Leader/>
            <Leader/>
            <Leader/>
            <Leader/>
      </section>     

   
    </main>
  )
}
