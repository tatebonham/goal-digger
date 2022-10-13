import { useParams, useNavigate } from 'react-router-dom' 
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function GoalEdit(){
    //  state to hold our form
    const [form, setForm] = useState({
        content: '',
        imageUrl: '',
        note: '', 
        completed: ''
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
            setForm({content: goal[0].content, imageUrl: goal[0].img_url, note: goal[0].note, completed: goal[0].completed})
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
    const completed = async e => {
        e.preventDefault()
        try {
            if(form.completed){
                setForm({...form, completed: false})
            } else{
                setForm({...form, completed: true})
            }
        } catch(err) {
            console.warn(err)
            if(err.response){
                setErrorMessage(err.response.data.message)
            }
        }
    }

console.log(form)
    return(
        <div>
            <h1>Edit Goals:</h1>
            <p>{errorMessage}</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='content'><h2>Content:</h2></label>
                    <input 
                        type='text'
                        id='content'
                        value={form.content}
                        // placeholder='Add your goal here'
                        onChange={e => setForm ({ ...form, content: e.target.value})}
                        />
                </div>
                <div>
                    <label htmlFor='imageUrl'><h2>Image URL:</h2></label>
                    <input 
                        type='text'
                        id='imageUrl'
                        value={form.imageUrl}
                        // placeholder='Add direct URL'
                        onChange={e => setForm ({ ...form, imageUrl: e.target.value})}
                        />
                </div>
                <div>
                    <label htmlFor='note'><h2>Additional Notes:</h2></label>
                    <input 
                        type='text'
                        id='note'
                        value={form.note}
                        placeholder='Thoughts? Ideas? Concerns?'
                        onChange={e => setForm ({ ...form, note: e.target.value})}
                        />
                </div>
                <div>
                    <button onClick={completed}><h2>{form.completed ? 'Yet to be Achieved': 'Goal Achieved' }</h2></button>
                </div>

                <button type='submit'><h2>Submit edits</h2></button>

            </form>

            <form onSubmit={handleDelete}>

                <button type='submit'><h2>Remove goal from my list</h2></button>

            </form>
        </div>
    )
}