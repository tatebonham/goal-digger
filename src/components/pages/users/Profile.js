import React from "react"
import { useEffect, useState, Link } from "react-router-dom"
import bootstrap from 'bootstrap'


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
        </div>
    )
}