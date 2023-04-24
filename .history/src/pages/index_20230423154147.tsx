import Image from 'next/image'
import { Inter } from 'next/font/google'
import homeImage from "../comps/images/home_image.jpeg"
import Navbar from '@/comps/Header/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <p>Every day they continued to meet together in the temple courts. They broke bread in their homes and ate together with glad and sincere hearts, praising God and enjoying the favor of all the people. And the Lord added to their number daily those who were being saved.</p>
        <p>Acts 2:46-47</p>
      </div>
      <Image alt="Home page image" src={homeImage} width={500}/>
    </>
  )
}
