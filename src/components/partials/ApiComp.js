import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavBar({currentUser, setCurrentUser}) {

    const [api, setApi] = useState('')

    const [errorMessage, setErrorMessage] = useState('')

    const [form, setForm] = useState({
        content: '',
        completed: false
    })

    const navigate = useNavigate()

    useEffect(() => {
        const getApi = async () => {
            try{
                // const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/bucketlist`)
                // // console.log(response.data)
                // // setApi(response.data.item)
                // setForm({...form, content: response.data.item})
                // setForm({...form, content: api})
                
            } catch(err) {
                console.warn(err)
                if(err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }

        getApi()
    }, [])
   
    console.log('api', api)
    console.log('content', form.content)
        const addGoal = async (e) => {
            // await setForm({...form, content: api})
            e.preventDefault()
            console.log(form)
            try{
                const token = localStorage.getItem('jwt')
                const options = {
                    headers: {
                        'Authorization': token
                    }
                }
                if(currentUser){
                    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/goals`, form, options)
                    await navigate('/user/profile')
                }else{
                    await navigate('/user/new')
                }
            } catch(err) {
                console.warn(err)
                if(err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }

    
    const updateApi = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/bucketlist`)
            // console.log(response.data)
            setApi(response.data.item)
            setForm({...form, content: response.data.item})
        } catch(err) {
            console.warn(err)
            if(err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }



    return(
        <div>
            <form onSubmit={updateApi}>
                <button type="submit"><h3>Get Inspired!</h3></button>
            </form>

            <h2>{api}</h2>

            <form onSubmit={addGoal}>
                <button type="submit"><h3>Add to my goals!</h3></button>
            </form>

        </div>
    )
}