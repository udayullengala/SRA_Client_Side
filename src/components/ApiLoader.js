import React from 'react'

const ApiLoader = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{position: 'fixed', top: '0px', left: '0px', width: '100%', height: '100vh', background: 'rgba(0, 0, 0, 0.2)', zIndex: '99999'}}>
        <div className="spinner-border text-primary" role="status">
        </div>
    </div>
  )
}

export default ApiLoader