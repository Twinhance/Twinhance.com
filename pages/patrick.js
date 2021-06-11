import Head from 'next/head'
import Link from 'next/link'
import Layout from '../comps/Layout'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className="wallpaper">
{/*         <Image src="/vercel.svg" sizes="100%" layout="fill" objectFit="fill" /> */}
    </div>
    <Layout>
    <Head>
        <title>About | Patrick</title>
        <meta name="keywords"/>
      </Head>
      <div>
        <h1>Patrick</h1>
        <p>h1 guyz, th1z 1s m3</p>
      </div>
    </Layout>
    </>
  )
}