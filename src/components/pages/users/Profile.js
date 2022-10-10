import { useParams, Link} from 'react-router-dom' 



// pages for the user to see
import GoalEdit from "../goals/GoalEdit"
import GoalNew from "../goals/GoalNew"
import ProfileEdit from "./ProfileEdit"

export default function Profile(){
    return(
        <div>
            {/* create new goal */}
            <Link to="/goals/GoalNew"> New Goals </Link> 
            {/* edit your profile */}
            <Link to = "/users/profileEdit"> Edit yor profile</Link>
    
        </div>
    )
}