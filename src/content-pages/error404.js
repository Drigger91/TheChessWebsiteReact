import React from 'react'
import Navbar from '../components/Navbar'
import { CardAnimation } from '../components/Services/serviceElements'

const Error404 = () => {
  return (
    <div className='error'>
        <div className='error_animation'>
                <lottie-player
                  src="https://assets4.lottiefiles.com/packages/lf20_suhe7qtm.json"
                  background="transparent"
                  speed=".5"
                  loop
                  autoplay
                ></lottie-player>
        </div>
        <h2 className='error_heading'>
            Page Not Found!
        </h2>
    </div>
  )
}

export default Error404