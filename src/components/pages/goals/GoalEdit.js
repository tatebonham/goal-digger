import { useParams, useNavigate } from 'react-router-dom' 
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function GoalEdit(){
    //  state to hold our form
    const [form, setForm] = useState({
        content: '',
        imageUrl: ''
    })
    // const [content, setContent] = useState('')

    const token = localStorage.getItem('jwt')
    const options = {
        headers: {
            'Authorization': token
        }
    }
    console.log(options)
    const [errorMessage, setErrorMessage] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getGoal = async () => {
        try {
            console.log(id)
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/goals/${id}`, options)
            const goal = response.data.goals.filter(goal => goal._id === id)
            console.log(goal)
            console.log(goal[0].content)
            setForm({content: goal[0].content, imageUrl: goal[0].img_url})
            // setContent(response.data.goals)
            // console.log(response.data)
        
            // console.log(response.data.goals[0].content)
            // console.log(response.data.goals[0].img_url)
        } catch (err) {
            console.warn(err)
            if(err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }
    getGoal()
}, [])
    // console.log(content)
    // console.log(form)

    const handleSubmit = async e => {
        e.preventDefault()
        try {

            const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/goals/${id}`, form, options)
            navigate(`/user/profile`)
        } catch(err) {
            console.warn(err)
            if(err.response){
                setErrorMessage(err.response.data.message)
            }
        }
    }

    const handleDelete = async e => {
        e.preventDefault()
        try {
            console.log(options)
            const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/goals/${id}`, options)
            navigate(`/user/profile`)
        } catch(err) {
            console.warn(err)
            if(err.response){
                setErrorMessage(err.response.data.message)
            }
        }
    }


    return(
        <div>
            <h1>Edit Goals:</h1>
            <p>{errorMessage}</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='content'>Content</label>
                    <input 
                        type='text'
                        id='content'
                        value={form.content}
                        // placeholder='Add your goal here'
                        onChange={e => setForm ({ ...form, content: e.target.value})}
                        />
                </div>
                <div>
                    <label htmlFor='imageUrl'>Image URL</label>
                    <input 
                        type='text'
                        id='imageUrl'
                        value={form.imageUrl}
                        // placeholder='Add direct URL'
                        onChange={e => setForm ({ ...form, imageUrl: e.target.value})}
                        />
                </div>
                {/* <div>
                    <label htmlFor='completed'>Complete Goals</label>
                    <input 
                        type='text'
                        id='completed'
                        value={form.completed}
                        placeholder='goal completed?'
                        onChange={e => setForm ({ ...form, completed: e.target.value})}
                        />
                </div> */}

                <button type='submit'>Submit edits</button>

            </form>

            <form onSubmit={handleDelete}>

                <button type='submit'>Remove goal from my list</button>

            </form>
        </div>
    )
}