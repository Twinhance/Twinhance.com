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

                <div className="TM profile-pic" />

                <div className="TM social-media">
                    <img src="/LinkedIn.svg" onClick={() => window.open("https://www.linkedin.com/in/thomas-morris-5043881a0/")} />
                    <img src="/Github.svg" onClick={() => window.open("https://github.com/Thomakiin")} />
                    <Link href="/">LinkedIn</Link>
                    <Link href="/"><a>Github</a></Link>
                </div>

                <h1 className="TM title"> Thomas Morris</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>

                <h1 className="TM title">Projects:</h1>

                <Project thumbnail="/Thomas2.jpg" title="Project 1" />


            </main>
        </>
    )
}

/*
<div className="projects-container TM">
    <Project thumbnail="/Thomas2.jpg"/>
    <div className="project TM">Typing Game</div>
    <div className="project TM">Periwiggle</div>
</div>*/