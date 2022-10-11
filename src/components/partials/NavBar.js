import userEvent from "@testing-library/user-event"
import { Link } from "react-router-dom"
import jwt_decode from "jwt-decode"

export default function NavBar({currentUser, setCurrentUser}){
    // event handler to log the user out when needed
    const handleLogout = () => {
    // check to see if a token exists in local storage
    if (localStorage.getItem('jwt')) {
    // if so, delete it
    localStorage.removeItem('jwt')
    // set the user in the App state to be null
    setCurrentUser(null)
      }
    }

    const loggedIn = (
        <>
        <Link to = "/user/profile"> Your Profile </Link> 
        <Link to ="/"> <span onClick={handleLogout}>Log Out </span></Link> 
        </>
    )

    const loggedOut =(
        <>
        <Link to= "/user/new"> Sign Up </Link> 
        <Link to= "/user/login"> Log into your Account</Link> 
        </>

    )

    return(
        <nav>
            <div>
                <Link to ="/"> Home </Link> 
                {currentUser ? loggedIn : loggedOut}
                <Link to ="/goal/new"> Create New Goal</Link>
            </div>
        </nav>
    )
}