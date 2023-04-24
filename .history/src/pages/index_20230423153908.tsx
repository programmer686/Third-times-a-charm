import Image from 'next/image'
import { Inter } from 'next/font/google'
import homeImage from "../comps/images/home_image.jpeg"
import Navbar from '@/comps/Header/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Image alt="Home page image" src={homeImage} width={500}/>
    </>
  )
}
