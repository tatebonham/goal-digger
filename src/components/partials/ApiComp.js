import { useState } from "react"

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


    return(
        <div>
            <h2>{api}</h2>
        </div>
    )
}