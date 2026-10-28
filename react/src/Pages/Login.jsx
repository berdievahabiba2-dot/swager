import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginRequest } from "../api/auth";

const Login = () => {
    const navigate =useNavigate()
    const handleSubmit = async (e) =>{ 
        e.preventDefault()
        const obj = {
            email: e.target.email.value,
            password: e.target.password.value,
        } 
        const token = await LoginRequest(obj)
        if  (token){
            navigate("/",{replace:true})
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="email" name='email'/>
            <input type="password" name='password' />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}
export default Login
