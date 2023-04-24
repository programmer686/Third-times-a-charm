import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/About.module.css"

export default function About() {
  return (
    <main className={styles.about__container}>
      <iframe width="900" height="430" src="https://www.youtube.com/embed/nHbjY5i7Fao" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      <p className={styles.about__history_text}>

      Plantada en Guadalajara, por los misioneros Steve y Amy Robertson en el verano del año 2010, la iglesia comenzó como misión, pasando por congregación hasta establecerse como iglesia, una comunidad de la Iglesia Presbiteriana de México.
      <br/>
      La Iglesia Cristo Rey Eterno, existe para dar gloria a Dios Padre, Hijo, y Espíritu Santo, es nuestro deseo mostrar el amor de Dios a todos y ser instrumentos de Dios para que otros conozcan el mensaje de salvación revelado en las Sagradas Escrituras.
      <br/>
      Nuestras creencias:
      Junto con otras Iglesias históricas, afirmamos las verdades Bíblicas básicas como son la Trinidad, la encarnación de Jesucristo en el vientre de la virgen María, la crucifixión, muerte, sepultura y resurrección de Jesucristo para salvación de su pueblo.
      <br/>
      Enfatizamos que la Biblia es la palabra de Dios y nuestra única regla infalible de fe y conducta, la salvación como un regalo de Dios, a Cristo como el único Redentor del pueblo de Dios, y la fe como él único medio para recibir la salvación de Dios.
      <br/>
      Nuestra visión:
      Que muchos como nosotros puedan experimentar el regalo de Dios que es la vida eterna, siendo añadidos por Dios a la Iglesia Cristo Rey Eterno, donde sean   capacitados para dar gloria a Dios.
      <br/>
      Nuestra misión:
      Que la gente con las que nos relacionamos pueda ver el amor de Dios en nosotros por medio de nuestras palabras y acciones de misericordia, servicio y compañerismo.
      </p>
    </main>
  )
}
