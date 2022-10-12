import { useEffect, useState } from 'react'





export default function Home(){
    // goal from the backend

    const [errorMessage, setErrorMessage] = useState('')

    console.log('server url', process.env.REACT_APP_SERVER_URL)
    useEffect(() => {
        const getGoals = async () => {
            try{
                // const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/goal`)
                // console.log(response.data)
                // setGoal(response.data)
            } catch(err) {
                console.warn(err)
                if(err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getGoals()
    }, [])
    // carousel functions
    // let slideIndex = 0


    // function showSlides(){
    //     let i
    //     let slides = document.getElementsByClassName("mySlides")
    //     for (let i = 0; i < slides.length; i++){
    //         slides[i].style.display = "none"
    //     }
    //     slideIndex ++
    //     if (slideIndex > slides.length) {slideIndex = 1}
    //     slides[slideIndex-1].style.display = "block"
    //     setTimeout(showSlides, 2000)
    // }
    // showSlides()

 

    return(
    <div>
        <h1>Welcome to your bucket list</h1>
        <h2>Most recent goals</h2>
        <p>{errorMessage}</p>
    </div>

       // {/* slide show */}
        //{/* <div className='slideshowContainer'>
               // {/* images with caption text */}
            // {/* <div className="mySlides fade">
                // <img src="public/images/Christmas-Markets-Europe.webp" style="width:100%"/>
                // <div className="text">Visit a Holiday Market in Europe</div>
            // </div>
            // <div className="mySlides fade">
                // <img src="public/images/Hot-air-balloons-Cappadocia-Turkey.jpeg" style="width:100%"/>
                // <div className="text">Go to the Hot Air Balloon Festival in Turkey</div>
            // </div>
            // <div className="mySlides fade">
                // <img src="public/images/Surfing-Hawaii-bucket-list-experience.webp"style="width:100%" />
                // <div className="text">Learn to Surf</div>
            // </div>
            // <div className="mySlides fade">
                // <img src="public/images/Swimming-turtle.webp" style="width:100%"/>
                // <div className="text">Swim with the Turtles</div>
            // </div>
            // <div className="mySlides fade">
                // <img src="public/images/Visiting-50-states.webp"style="width:100%"/>
                // <div className="text">Visit All 50 US States</div>
            // </div> 
        //  </div> */}
 //{/* style="width:100%" */}
        // {/* The dots/circles  */}
       // {/* <div style="text-align:center">
            // <span className ="dot" onclick="currentSlide(1)"></span>
            // <span className ="dot" onclick="currentSlide(2)"></span>
            // <span className ="dot" onclick="currentSlide(3)"></span> */}
       // {/* </div> */}
   
        
    
    )
}