import React, { Component } from 'react'
import {v4 as uuidv4} from "uuid"
import "./index.css"


class Signup extends Component {
    state = {username: "" , password: "", email:""}


    onChangeUsername = (event) =>{
        this.setState({username:event.target.value})
    }

    onChangePassword = (event) => {
        this.setState({password:event.target.value})
    }

    onChangeEmail = (event) => {
        this.setState({email:event.target.value})
    }

//     fetch('https://mywebsite.example/endpoint/', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   })
// })

    onSubmitSignup = async (event) => {
        event.preventDefault()
        // console.log("Clicked")
        const {username,password,email} = this.state
        const bodyData = {id : `${uuidv4()}` ,username,password,email};
        const options = {
            method :"POST",
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
            body: JSON.stringify(bodyData)
        }
        const response = await fetch("/signup/user",options)
        const data = await response.json()

    }



    render(){
        const {username,password,email} = this.state
        // console.log(username,password,email)
        return (
            <div className='login-container'>
        <h1 className='login-heading'>Signup</h1>
        <div className='signup-container'>
            <form className='form-container' onSubmit={this.onSubmitSignup}>
                <label className='label' htmlFor='username'>Username</label>
                <input className='input-ele' type='text' onChange={this.onChangeUsername} id='username' placeholder='Username' value={username} />

                <label className='label' htmlFor='password'>Password</label>
                <input className='input-ele' type='password' onChange={this.onChangePassword} id='password' placeholder='Password'  value={password} />

                <label className='label' htmlFor="email">Email</label>
                <input className='input-ele' type='text' onChange={this.onChangeEmail} id='email' placeholder='Email' value={email} />

                <button className='login-btn' type='submit'>Signup</button>
            </form>
       </div>
        
        </div>
          )
    }
 
}

export default Signup