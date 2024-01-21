import React from 'react'

function Login() {
  return (
    <div>
      <div className='container'>
        <h2>Login</h2>
        <form>
            <label>
                Email:
                <input type='text' placeholder='Email Id'/>
            </label>
            <label>
                Password:
                <input type='password' placeholder='Password'/>
            </label>
            <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default login
