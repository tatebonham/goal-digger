export default function GoalCard(props){

    const token = localStorage.getItem('jwt')
        const options = {
            headers: {
                'Authorization': token
            }
    }

    return(
        <div>
            <div>
               - { props.content }
            </div>
            <div>{props.img_url ? <img src={props.img_url} alt={props.content} height={200} width={300} /> : null}</div>
            <div>{props.note}</div>
        </div>
    )
}