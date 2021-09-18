import React from 'react'
import ErrorLogo from '../Error.svg'
import './styles/Error.css'

function Error() {
  return (
    <div className='error-container'>
      <img src={ErrorLogo} alt='Error Logo' className='error-svg' />
      <h2 className='error-text'>Something went wrong!</h2>
    </div>
  )
}

export default Error
