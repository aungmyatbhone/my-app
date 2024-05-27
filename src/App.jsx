import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import Specials from './Components/Specials'

import special1 from './assets/special1.png'
import special2 from './assets/special2.png'
import special3 from './assets/special3.png'

function App() {

  return (
    <>
      <Header />
      <Main />
      
      <section id='specialSection'>
        <h2 style={{"textAlign": "left"}}>Specials</h2>
        <Specials imgSource={special1} />
        <Specials imgSource={special2}/>
        <Specials imgSource={special3}/>
      </section>
      <Footer />
    </>
  )
}

export default App
