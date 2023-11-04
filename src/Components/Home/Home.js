import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop:'200px'}}>
        <h1>
            <Link to="/login">Log-In</Link>
        </h1>
        <br/>
        <div>
        <h1>    
            <Link to="/signup">Sign-Up</Link>
        </h1>
        </div>

    </div>
  )
}

export default Home