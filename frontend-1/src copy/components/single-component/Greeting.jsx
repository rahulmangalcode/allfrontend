import React from 'react'
import './greeting.css'

const Greeting = () => {
  return (
    <React.Fragment>

      <>
        <h1>this is fragment</h1>
      </>

      <div className='greeting'>
        <h1>Hello world</h1>
        <p>welcome to react</p>

      </div>
     <br />
     <label htmlFor='email'>Email</label>
     <input id='email' type='email' />

    </React.Fragment>




  )
}

export default Greeting