import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function ProfileEdit({currentUser, setCurrentUser}){
    const navigate =useNavigate()

    const [errorMessage, setErrorMessage] = useState('')
    
    const [form, setForm] = useState({
        name: "",
        email: ""
    })

    const token = localStorage.getItem('jwt')
    const options = {
        headers: {
            'Authorization': token
        }
    }

    useEffect(() => {
        const getUser = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users`, options)
            console.log('Response name:', response.data.name)
            setForm({name: response.data.name, email: response.data.email})
            // setContent(response.data.goals[0].content)
            // console.log(response.data.goals[0].content)
        } catch (err) {
            console.warn(err)
            if(err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }
    getUser()
}, [])
    console.log(form)

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            // post form to backend
            console.log(form)
            const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/edit`, form, options)
            console.log(e.target.value)
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
    //  console.log(currentUser)
    return(
        <div>
            <h1> Edit Profile Information </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Update Name: </label>
                    <input
                        type = "text"
                        id = "name"
                        value = {form.name}
                        placeholder = "Enter your new user name"
                        onChange = { e => setForm({...form, name: e.target.value})}
                    />
                <label htmlFor="email">Update Email:</label>
                    <input
                        type = "text"
                        id = "email"
                        value = {form.email}
                        placeholder = "Enter your new email"
                        onChange ={ e => setForm({...form, email: e.target.value})}
                        />
                {/* <label htmlFor="password"> Update password:</label>
                    <input 
                        type= "text"
                        id = "password"
                        placeholder="Enter your new password"
                        onChange ={ e => setForm({...form, password:e.target.value})}
                        value={form.password}
                        /> */}
                <button type="submit"> Update Profile </button>
            </form>
        </div>
    )
}