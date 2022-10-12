import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function GoalNew(){
    //  state to hold our form
    const [form, setForm] = useState({
        content: '',
        imageUrl: ''
    })
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    // submit event handler
    const handleSubmit = async e => {   
        e.preventDefault()
        try {
            const token = localStorage.getItem('jwt')
            const options = {
                headers: {
                    'Authorization': token
                }
            }

            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/goals`, form, options)
            console.log(response.data)
            console.log(form)
            navigate('/user/profile')
        } catch (err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }
    return(
        <div>
            <h1> New Goals:</h1>
            <p>{errorMessage}</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='content'>Content</label>
                    <input 
                        type='text'
                        id='content'
                        value={form.content}
                        placeholder='Add your goal here'
                        onChange={e => setForm ({ ...form, content: e.target.value})}
                        />
                </div>
                <div>
                    <label htmlFor='imageUrl'>Image URL</label>
                    <input 
                        type='text'
                        id='imageUrl'
                        value={form.imageUrl}
                        placeholder='Add direct URL'
                        onChange={e => setForm ({ ...form, imageUrl: e.target.value})}
                        />
                </div>

                <button type='submit'>Make a new goal</button>

            </form>
        </div>
    )
}