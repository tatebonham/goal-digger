import { useState } from "react"
import axios from "axios"

export default function ProfileEdit({currentUser, setCurrentUser}){
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
            const response = await axios.update(`${process.env.REACT_APP_SERVER_URL}api-v1/users/:id/edit`, reqBody)
            
            const { token } = response.data
            localStorage.setItem("jwt", token)
            // decode the token
            const decoded = jwt_decode(token)
            // set the user in Apps state to be the decoded token
            setCurrentUser(decoded)
            // got to user profile page
            navigate("users/:id")

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
                        value = {name}
                    />
                <label htmlFor="email">Update Email:</label>
                    <input
                        type = "text"
                        id = "email"
                        placeholder = "Enter your new email"
                        onChange = {e=> setEmail(e.target.value)}
                        value = {email}
                        />
                <label htmlFor="password"> Update password:</label>
                    <input 
                        type= "text"
                        id = "email"
                        placeholder="Enter your new password"
                        onChange ={ e=> setPassword(e.target.value)}
                        value={password}
                        />
                <button type="submit"> Update Profile </button>
            </form>
        </div>
    )
}