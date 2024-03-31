import React from 'react'
import Navbar from '../components/Navbar'

const BlankLayout = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default BlankLayout