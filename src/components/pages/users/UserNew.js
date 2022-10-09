import { useState } from "react"
import axios from "axios"
import jwt_decode from "jwt-decode"
import { Navigate }  from "react-router-dom"


export default function UserNew({currentUser, setCurrentUser}){
// state for the controlled form
const [name, setName] =useState(" ")
const [email, setEmail]= useState(" ")
const [password, setPassword] = useState (" ")
const [msg, setMsg] = useState(" ")

// handle form submit
const handleSubmit = async e =>{
    e.preventDefault()
    try{
        // posts form body to the backend server
        const reqBody = {
            name, 
            email,
            password
        }
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}api-v1/users/new`, reqBody)
        // save the token in local storage
        const { token } = response.data
        localStorage.setItem("jwt", token)
        // decode the token
        const decoded = jwt_decode(token)
        // set the user in Apps state to be the decoded token
        setCurrentUser(decoded)

    }catch(err){
        console.warn(err)
        if(err.response){
            if(err.response.status === 400){
                setMsg(err.response.data.msg)
            }
        }
    }
}

// render a navigate component if user is already logged in 
    if (currentUser){
        return <Navigate to = "users/profile" />
    }
    return(
        <div>
           <h1> Sign up to create your Bucket List </h1>
            {/* display msg if error occure */}
            <p> {msg}</p>

            {/* new user form */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Name: </label>
                    <input
                        type = "text"
                        id = "name"
                        placeholder = "Enter your user name"
                        onChange = {e=>setName(e.target.value)}
                        value = {name}
                    />
                <label htmlFor="email"> Email:</label>
                    <input
                        type = "text"
                        id = "email"
                        placeholder = "Enter your email"
                        onChange = {e=> setEmail(e.target.value)}
                        value = {email}
                        />
                <label htmlFor="password"> Password:</label>
                    <input
                        type = "text"
                        id = "password"
                        placeholder = "Choose your password"
                        onChange = {e=> setPassword(e.target.value)}
                        value = {password}
                    />
                <button type="submit"> Register </button>
            </form>
        </div>
    )
}