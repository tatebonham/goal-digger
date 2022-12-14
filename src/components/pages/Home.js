import axios from 'axios'
import { useEffect, useState } from 'react'
import ApiComp from '../partials/ApiComp'

import CarouselFade from "../partials/CarouselFade"


export default function Home({currentUser, setCurrentUser}){
    // goal from the backend

    const [api, setApi] = useState('')

    const [errorMessage, setErrorMessage] = useState('')

    // console.log('server url', process.env.REACT_APP_SERVER_URL)

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

    return(
    <div>
        <h1>Welcome To Goal Digger</h1>
        
        <h2><ApiComp currentUser={currentUser} setCurrentUser={setCurrentUser}  /></h2>
        <p>{errorMessage}</p>
        <CarouselFade />
    </div>
    )
}