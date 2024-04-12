import React, { Component } from 'react'
import "./index.css"

const reference = [
  {
    id : 1,
    title: "Briyani",
    description: "Dummy Description Dummy Description Dummy Description Dummy Description Dummy Description Dummy Description",
    imageUrl : "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    isBookmarked: false
  },
  {
    id:2,
    title: "Panner Butter Masala",
    description:"Dummy Description Dummy Description Dummy Description Dummy Description Dummy Description Dummy Description",
    imageUrl : "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    isBookmarked:false
  }

]



class  Login extends Component  {
  state = {username: "" , password: ""}

  onChangeUsername = (event) =>{
    this.setState({username:event.target.value})
}

onChangePassword = (event) => {
    this.setState({password:event.target.value})
}

onSubmitLogin= async (event) => {
  event.preventDefault()
  const {username,password} = this.state
  const userDetails = {username,password};
  const {history} = this.props 
  const options = {
    method : "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userDetails)
  }
  const response = await fetch("/login/check", options)
  const data = response.json()
  if(data === "Redirect to Home"){
   
    history.push("/home")
  }
  else{
    history.push("/signup")
  }
}

  render(){
    const {username,password} = this.state
    return (
      <div className='login-container'>
          <h1 className='login-heading'>Login</h1>
          <div className='secondary-container'>
              <form className='form-container' onSubmit={this.onSubmitLogin}>
              <label className='label' htmlFor='username'>Username</label>
                <input className='input-ele' type='text' onChange={this.onChangeUsername} id='username' placeholder='Username' value={username} />

                <label className='label' htmlFor='password'>Password</label>
                <input className='input-ele' type='password' onChange={this.onChangePassword} id='password' placeholder='Password'  value={password} />
              
                 <button className='login-btn' type='submit'>Login</button>
              </form>
         </div>
          
          </div>
    )
  }
 
}

export default Login