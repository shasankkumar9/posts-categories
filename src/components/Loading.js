import React from 'react'
import './styles/Loading.css'

function Loading() {
  return (
    <div className='loader'>
      <div className='spinner'>
        <div className='spinner-text'>Loading</div>
        <div className='spinner-sector spinner-sector-red'></div>
        <div className='spinner-sector spinner-sector-blue'></div>
        <div className='spinner-sector spinner-sector-green'></div>
      </div>
    </div>
  )
}

export default Loading
