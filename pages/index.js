import Head from 'next/head'
import React from 'react'

const Home = () => (
  <div>
    <Head>
      <title>Homes</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>



    <div className='hero'>
      <h1 className='title'>strawberry-hotel-lima</h1>
      <p className='description'>
        
      </p>


    </div>


    <style jsx>{`
 
     
    `}</style>

    <style jsx>{`
         :global(body) {
          @import url('https://fonts.googleapis.com/css?family=Lora&display=swap');
          
          margin: 0;
          font-family: font-family: 'Lora', serif;      
          background-color: #2c2e33;
        }
        
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 100px;
        font-weight: 400;
        color: #e1b400;
        text-align: center;
      }
     


    `}</style>

    
  </div>
)

export default Home
