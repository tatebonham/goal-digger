import { Link, NavigationType } from "react-router-dom"

export default function NavBar(){
    return(
        <nav>
            <div>
                
                <Link to="/"> Home Page </Link> |
                <Link to="/user/login"> Login </Link> |
                <Link to="/user/new"> Create New Account </Link> |
                <Link to="/user/:id"> Go To Your Profile </Link> |
                <Link to="/"> LogOut </Link>
               
            </div>
        </nav>
    )
}