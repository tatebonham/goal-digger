import { Link} from 'react-router-dom' 
import { useState, useEffect } from 'react'
import axios from 'axios'
import GoalCard from '../../partials/GoalCard'

export default function Profile(){

    const [goals, setGoals] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(()=>{
        const getGoals = async () => {
            try{
                const token = localStorage.getItem('jwt')
                const options = {
                    headers: {
                        'Authorization': token
                    }
                }
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/goals`, options)
                setGoals(response.data.goals)
            } catch(err) {
                console.warn(err)
                if(err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getGoals()
    }, [])
    console.log(goals)

    const goalLink = goals.map(goal => {
        return(
            <div key={goal._id}>
                <Link to={`/goal/${goal._id}`}>{goal.content}</Link>
            </div>
        )
    })

    return(
        <div>
            <h1>Welcome to your profile</h1>
            {errorMessage}
            {/* create new goal */}
            <Link to="/goals/GoalNew"> New Goals </Link> 
            {/* edit your profile */}
            <Link to = "/users/profileEdit"> Edit yor profile</Link>
            <GoalCard />
            {goalLink}
    
        </div>
    )
}