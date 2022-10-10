import { useParams, Link} from 'react-router-dom' 

// pages for the user to see
import GoalEdit from "../goals/GoalEdit"
import GoalNew from "../goals/GoalNew"
import ProfileEdit from "./ProfileEdit"

export default function Profile(){

    const [goal, setGoal] = useState([])

    const goalLink = goal.map(goal => {
        return(
            <div key={goal._id}>
                <Link to={`/goal/${goal._id}`}>{goal.content}</Link>
            </div>
        )
    })
    goalLink()

    return(
        <div>
            <h1>Welcome to your profile</h1>
            {/* create new goal */}
            <Link to="/goals/GoalNew"> New Goals </Link> 
            {/* edit your profile */}
            <Link to = "/users/profileEdit"> Edit yor profile</Link>
    
        </div>
    )
}