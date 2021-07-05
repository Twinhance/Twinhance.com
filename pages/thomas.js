import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import NavLeft from '../comps/TM_Nav_Left';
import NavTop from '../comps/TM_Nav_Top';
import Project from '../comps/TM_Project';
//import profilePic from '../public/TMProfilePic.jpg'

export default function Home() {
    return (
        <>
            <Head>
                <title>Thomas Morris</title>
            </Head>
            <NavTop />
            <main className="TM">

                <nav className="nav-top TM">
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/ninjas/"><a>Games</a></Link>
                </nav>

                <div className="TM profile-pic" />
                <h1 className="TM title"> Thomas Morris</h1>

                <div className="TM social-media">
                    <img src="/LinkedIn.svg" onClick={() => window.open("https://www.linkedin.com/in/thomas-morris-5043881a0/")} />
                    <img src="/Github.svg" onClick={() => window.open("https://github.com/Thomakiin")} />
                    <Link href="/">Twitter?</Link>
                </div>

                <section className="TM">
                    <h2 className="TM">About Me:</h2>
                    <p className="TM"> Hi! I'm Thomas, a twin brother and indie game developer. I am self-taught, self-motivated and would love to become an essential part of your team if you're interested!</p>
                </section>

                <section className="TM">
                    <h2 className="TM">Other Stuff:</h2>
                    <p className="TM">I've been developing games in Unity and Unreal Engine with my twin brother for 2 years where I learned 3D modelling, texturing, level design, programming in c# and c++ and much more</p>
                </section>


            </main>
        </>
    )
}
/*
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>


<h1 className="TM title">Projects:</h1>
<Project thumbnail="/Thomas2.jpg" title="Project 1" />


*/