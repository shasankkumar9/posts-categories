import React from 'react'
import ErrorLogo from '../Error.svg'

function Error() {
  return (
    <>
      <img src={ErrorLogo} alt='Error Logo' className='error-svg' />
      <h2 classNam='error-text'>Something went wrong!</h2>
    </>
  )
}

export default Error
