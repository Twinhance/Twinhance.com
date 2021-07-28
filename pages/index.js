import Head from 'next/head'
import Link from 'next/link'
import Layout from '../comps/Layout'
import Blog from '../comps/Blog'
import Image from 'next/image'

/*Props from getStaticProps()*/
export default function Home(props) {

  // const blogs = props.files.map(file => (
  //   <Blog
  //     name={file.fileName}
  //     link={file.link}
  //     key={file.fileName}
  //   />
  // ));

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
      
      <section className="content">
        <a className="twitter-timeline" data-width="600" data-height="1000" data-dnt="true" data-theme="light" href="https://twitter.com/twinhance?ref_src=twsrc%5Etfw">Tweets by twinhance</a> 
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </section>


      {/* <section id="blogs">
        <div className="content">
          <h2>Blogs:</h2>
          <div className="info-card-container">
            {blogs}
          </div>
        </div>
      </section> */}
    </Layout>
  )
}

// export async function getStaticProps() {
//   var fs = require('fs');
//   var files = [];
//   var fileNames = fs.readdirSync('../twinhance/pages/blog');
//   files = fileNames.map(fileName => {
//     return {
//       fileName: fileName,
//       link: '/blog/' + fileName.substring(0, fileName.length - 3) // Substring to remove the .js at the end.
//     };
//   })
//   console.log(files);
//   return { props: { files: files } }
// }

