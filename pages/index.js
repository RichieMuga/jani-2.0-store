import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jani Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Component-2.ico" />
      </Head>
      <NavBar />

    </div>
  )
}
