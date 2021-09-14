import React from 'react'
import './styles/SingleInfo.css'

function SingleInfo({ id, title, body }) {
  return (
    <section className='single-item'>
      <h1 className='ids'>{id}</h1>
      <div className='text-data'>
        <h3 className='title capitalize'>
          <span style={{ fontSize: '1.25em' }}>Title: </span>
          {title}
        </h3>
        <p className='body'>{body}</p>
      </div>
    </section>
  )
}

export default SingleInfo
