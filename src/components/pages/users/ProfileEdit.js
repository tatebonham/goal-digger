import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import jwt_decode from "jwt-decode"

export default function ProfileEdit({currentUser, setCurrentUser}){
    const navigate =useNavigate()
    
    const [name, setName] =useState(" ")
    const [email, setEmail] = useState(" ")
    const [password,setPassword] = useState (" ")

    const handleSubmit = async e =>{
        e.preventdefault()
        try{
            const reqBody ={
                name,
                email,
                password
            }
            const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}api-v1/users/edit`, reqBody)
            
            const { token } = response.data
            localStorage.setItem("jwt", token)
            // decode the token
            const decoded = jwt_decode(token)
            // set the user in Apps state to be the decoded token
            setCurrentUser(decoded)
            // got to user profile page
            navigate(`/`)

        }catch(err){
            if(err.response){
              if(err.response.status===400){
                setEmail.msg(err.response.data.mag)
              } 
            }
        }
    }
    return(
        <div>
            <h1> Edit Profile Information </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Update Name: </label>
                    <input
                        type = "text"
                        id = "name"
                        placeholder = "Enter your new user name"
                        onChange = {e=>setName(e.target.value)}
                        value = {currentUser.name}
                    />
                <label htmlFor="email">Update Email:</label>
                    <input
                        type = "text"
                        id = "email"
                        placeholder = "Enter your new email"
                        onChange = {e=> setEmail(e.target.value)}
                        value = {currentUser.email}
                        />
                <label htmlFor="password"> Update password:</label>
                    <input 
                        type= "text"
                        id = "email"
                        placeholder="Enter your new password"
                        onChange ={ e=> setPassword(e.target.value)}
                        value={currentUser.password}
                        />
                <button type="submit"> Update Profile </button>
            </form>
        </div>
    )
}