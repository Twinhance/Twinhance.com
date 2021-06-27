import Head from 'next/head'
import Link from 'next/link'
import Layout from '../comps/Layout'
import styles from '../styles/thomas.module.css'
import Image from 'next/image'
//import profilePic from '../public/TMProfilePic.jpg'

export default function Home() {
    return (
        <>
            <Head>
                <title>Thomas Morris</title>
            </Head>

           {/* <Image src={profilePic} alt="Picture of the author" />*/}
            <img src="/TMProfilePic.jpg" alt="Picture of the author" />
            <h1 className={styles.tm} >Thomas Morris</h1>
            <p className={styles.tm}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>

            <h1>Projects:</h1>

            <div class="grid-container">
                <div class="grid-item">Typing Game</div>
                <div class="grid-item">Periwiggle</div>
            </div>
        </>
    )
}