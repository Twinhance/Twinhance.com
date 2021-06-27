import Head from 'next/head'
import Link from 'next/link'
import Layout from '../comps/Layout'
import Image from 'next/image'
import React from 'react';
import styles from '../styles/Home.module.css';

// Open in new tab safely. This is why we do it safely: https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

export default function Home() {
  return (
    <>
    {/* <Image src="/vercel.svg" sizes="100%" layout="fill" objectFit="fill" />  */}
    <html className="PM">
      <Head>
        <title>About | Patrick</title>
        <meta name="keywords"/>
      </Head>



      <body className="PM">
        <div className="PM content gradient">
          <div className="PM profile"></div>
          <h1 className="PM">Patrick Morris</h1>
        </div>
      </body>

      <div className="PM grid-container">
        <div className="PM grid-item" onClick={()=> openInNewTab("https://github.com/PatTheNoble")}>Github</div>
        <div className="PM grid-item" onClick={()=> openInNewTab("https://twitter.com/twinhance")}>Game Dev</div>
        <div className="PM grid-item" onClick={()=> openInNewTab("https://github.com/PatTheNoble")}>Web Dev</div>   
      </div>

        
      {/* {
        React.createElement(
          'span',
          {className: 'mushroom'}
        )
      } */}
      </html>
    </>
  )
}
/*
if (typeof window === 'object') {
   // Check if document is finally loaded
   var i;
   for (i = 0; i < 29; i++) {
     let div = document.createElement('div');
     div.classList.add('PM');
     div.classList.add('mushroom');
     document.body.appendChild(div)
   }
}
*/