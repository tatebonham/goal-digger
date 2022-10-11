import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function ProfileEdit({currentUser, setCurrentUser}){
    const navigate =useNavigate()

    const [errorMessage, setErrorMessage] = useState('')
    
    const [form, setForm] = useState({
        name: " ",
        email: " ",
        password: " "
    })

    const handleSubmit = async e =>{
        e.preventdefault()
        try{
            const token = localStorage.getItem('jwt')
            const options = {
                headers: {
                    'Authorization': token
                }
            }
            e.preventdefault()
            // post form to backend
            const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/edit`, form, options)
            // got to user profile page
            navigate(`/`)

        }catch(err){
            if(err.response){
              if(err.response.status===400){
                setErrorMessage(err.response.data.message)
              } 
            }
        }
       
    }
     console.log(currentUser)
    return(
        <div>
            <h1> Edit Profile Information </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Update Name: </label>
                    <input
                        type = "text"
                        id = "name"
                        placeholder = "Enter your new user name"
                        onChange = { e => setForm({...form, name:e.target.value})}
                        value = {form.name}
                    />
                <label htmlFor="email">Update Email:</label>
                    <input
                        type = "text"
                        id = "email"
                        placeholder = "Enter your new email"
                        onChange ={ e => setForm({...form, email:e.target.value})}
                        value = {form.email}
                        />
                <label htmlFor="password"> Update password:</label>
                    <input 
                        type= "text"
                        id = "email"
                        placeholder="Enter your new password"
                        onChange ={ e => setForm({...form, password:e.target.value})}
                        value={form.password}
                        />
                <button type="submit"> Update Profile </button>
            </form>
        </div>
    )
}