import Head from 'next/head'
import Link from 'next/link'
import Layout from '../comps/Layout'
import Blog from '../comps/Blog'
import Image from 'next/image'

/*Props from getStaticProps()*/
export default function Home() {
  return (
    /* <div className="Twinhance page" style={{backgroundImage:"url(Gradient-BG.svg)", backgroundRepeat:"no-repeat", backgroundSize:"100%"}}>*/
    <Layout>
      <Head>
        <title>Twinhance</title>
        <meta name="keywords" />
        <link rel="shortcut icon" href="/Twinhance-Logo2.svg" />
      </Head>

      {/* <img className="shake" src="Twinhance-Logo2.svg" alt="Twinhance Logo" width="70%" style={{ maxWidth: "550px", margin: "auto", display: "block" }} /> */}
      <section id="home">
        <div className="hero-image">
          <div className="hero-text">
            <img className="hero-logo" src="/Twinhance-Logo2.svg" />
            Twinhance
          </div>
        </div>
        <div className="hero-arrow shake" onClick={() => { document.getElementById("about").scrollIntoView({ behavior: 'smooth' }); }}>
          &#x25BC;
        </div>
      </section>

      <section id="about">
        <p>
          <strong>
            Twinhance is a small but passionate team of game developers.
          </strong>
          <br /><br /><br /><br />
          We are Thomas and Patrick, twin brothers, game developers and fellow gamers.
          Our objective is to bring you the most enjoyable games that we can, games that are enhanced with heart, dedication and passion, we hope you will enjoy them! 
          <br /><br /><br /><br />
        </p>
      </section>

      <section id="games">
        <div className="games-wrapper">

          <div className="game">
            <div className="iframe-container">
              <iframe loading="lazy" frameBorder="0" allowFullScreen src="https://www.youtube.com/embed/arQa6euRnF0"></iframe>
            </div>
          </div>

          <div className="game">
            <div className="game-image"></div>
          </div>

        </div>
      </section>
    </Layout>
  )
}

