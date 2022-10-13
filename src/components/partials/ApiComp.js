import axios from 'axios'
import { useEffect, useState } from 'react'

export default function NavBar() {

    const [api, setApi] = useState('')

    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        const getApi = async () => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/bucketlist`)
                // console.log(response.data)
                setApi(response.data.item)
            } catch(err) {
                console.warn(err)
                if(err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getApi()
    }, [])
    
    const updateApi = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/bucketlist`)
            // console.log(response.data)
            setApi(response.data.item)
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
                <button type="submit"><h2>Get Inspired!</h2></button>
            </form>
            <h2>{api}</h2>
        </div>
    )
}