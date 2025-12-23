import React,{useState} from 'react'
import Input from '../../components/input/Input'

function Login() {
  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>
      <div>

        <Input
          label="Enter Email:"
          
        />
      </div>

    </div>
  )
}

export default Login