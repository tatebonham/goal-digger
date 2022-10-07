import { Link, NavigationType } from "react-router-dom"

export default function NavBar(){
    return(
        <nav>
            <div>
                
                    <Link to = "/"> Home Page </Link> |
                    <Link to ="/UserLogin"> Login </Link> |
                    <Link to ="/UserNew"> Create New Account </Link> |
                    <Link to ="/Profile"> Go To Your Profile </Link> |
                    <Link to ="/"> LogOut </Link>
               
            </div>
        </nav>
    )
}