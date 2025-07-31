import { useState } from 'react'
import './App.css'

import qrCode from "./assets/image-qr-code.png"


function App() {
  return (
    <div className='container'>
      <div className='card'>
        <img className='img' src={qrCode} alt="img QR Code" />
        <h1 className='title'>Improve your front-end skills by building projects</h1>
        <p className='description'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>

      </div>
    </div>
  )
}

export default App
