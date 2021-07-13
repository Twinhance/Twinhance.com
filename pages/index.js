import Head from 'next/head'
import Link from 'next/link'
import Layout from '../comps/Layout'
import Blog from '../comps/Blog'
import Image from 'next/image'
import { useState } from 'react'

//Props from getStaticProps()
export default function Home(props) {
  const [hamburgerClass, setHamburgerClass] = useState("");

  function manageBugerClick(){
    console.log("Hello");
    if(hamburgerClass === "drop-down"){
      setHamburgerClass("");
    }
    else{
      setHamburgerClass("drop-down");
    }
  }

  const blogs = props.files.map(file => (
    <li key={file.fileName}>
      <Blog
        name={file.fileName}
        link={file.link}
        key={file.fileName}
      />
    </li>
  ));

  return (
    // <div className="Twinhance page" style={{backgroundImage:"url(Gradient-BG.svg)", backgroundRepeat:"no-repeat", backgroundSize:"100%"}}>
    <div className="Twinhance page">
      <Head>
        <title>Twinhance</title>
        <meta name="keywords" />
        <link rel="shortcut icon" href="/Twinhance-Logo2.svg" />
      </Head>
      <nav>
        <img src="https://PatTheNoble.github.io/Hamburger.svg" className={hamburgerClass + " hamburger"} alt="Hamburger" width="23px" onClick={manageBugerClick}/>
        <a href="" className={hamburgerClass}>Home</a>
        <a href="" className={hamburgerClass}>Home</a>
        <a href="" className={hamburgerClass}>Home</a>
      </nav>
      <img className="shake" src="Twinhance-Logo2.svg" alt="Twinhance Logo" width="40%" style={{margin:"auto", display: "block"}}/>

      <section className="content">
          <div>
            <h1>About:</h1>
            <p>
              We are groot. Lorem Ipsum delore Lorem Ipsum delore Lorem Ipsum delore Lorem Ipsum delore Lorem Ipsum delore Lorem Ipsum delore 
            </p>

            <h1>Blogs:</h1>
            <ul>
              {blogs}
            </ul>
          </div>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  var fs = require('fs');
  var files = [];
  var fileNames = fs.readdirSync('../twinhance/pages/blog');
  files = fileNames.map(fileName => {
    return {
      fileName: fileName,
      link: '/blog/' + fileName.substring(0, fileName.length - 3) // Substring to remove the .js at the end.
    };
  })
  console.log(files);
  return { props: { files: files } }
}
