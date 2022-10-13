import { Link} from 'react-router-dom' 
import { useState, useEffect } from 'react'
import axios from 'axios'
import GoalCard from '../../partials/GoalCard'
import GoalListAccordian from '../../partials/GoallListAccordian'

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

    const completedGoals = goals.filter(goal => goal.completed === true)

    const incompleteGoals = goals.filter(goal => goal.completed === false)


    console.log(`completed goals:`, completedGoals)
    console.log(`completed goals:`, incompleteGoals)
    const goalLink = incompleteGoals.map(goal => {
        if(goal.completed === false) {
            console.log(`completed goals:`, goal)
            return(
                <div key={goal._id}>
                    <GoalCard completed={goal.completed} content={goal.content} img_url={goal.img_url} note={goal.note}   />
                    <Link to={`/goal/${goal._id}/edit`} >Edit Goal</Link>
                </div>
            )
        }
    })
    const completedGoalLink = completedGoals.map(goal => {
        if(goal.completed === true) {
            console.log(`completed goals:`, goal)
            return(
                <div key={goal._id} >
                    <GoalCard completed={goal.completed} content={goal.content} img_url={goal.img_url} note={goal.note}   />
                    <Link to={`/goal/${goal._id}/edit`} >Edit Goal</Link>
                </div>
            )

        }
    })

    return(
        <div>
            <h1>Welcome to your profile</h1>
            {errorMessage}
            {/* create new goal */}
            <Link to="/goal/new"> New Goals </Link> 
            {/* edit your profile */}
            <Link to = "/user/edit"> Edit your profile</Link>
            <div className='row'>
                <div className='Bucketlist column'>
                    <h2>Bucketlist Goals</h2>
                    {goalLink}
                </div>
        
                <div className='completed column'>
                    <h2>Completed Goals</h2>
                    {completedGoalLink}

                </div>
        </div>
        </div>
    )
}