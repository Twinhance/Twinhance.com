
import Head from 'next/head'
import Layout from '../comps/Layout'
import Link from 'next/link'

const About = () => {
  return (
    <>
    <Layout>
    <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1>About</h1>
        <p>Testing</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
      </div>

        <Link href="/patrick">
            <a className="btn">
                Meet Patrick:
            </a>
        </Link>
        <Link href="/thomas">
            <a className="btn">
                Meet Thomas:
            </a>
        </Link>
    </Layout>
    </>
  );
}
 
export default About;