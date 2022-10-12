import React from "react";
import { Slide } from "react-slideshow-image";

const slideImages = [
    {
    url:images/Christmas-Markets-Europe.webp,
    caption: "European Christmas Market"
    },
    {
    url: images/Hot-air-balloons-Cappadocia-Turkey.jpeg,
    caption: "Hot Air Balloons Festival in Turkey"

    },
    {
    url:images/Surfing-Hawaii-bucket-list-experience.webp,
    caption: "Surfing in Hawaii"
    },
    {
     url:images/Swimming-turtle.webp,
     caption: "Swim with the turtles"
    },
    {
     url:images/Visiting-50-states.webp,
     caption: "Visit all 50 US States"
    }
]

const properties = {
    duration:5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slideshow = ()=>{
    return (
    <div className="slide-container">
        <Slide>
            {slideImages.map((slideImage, index)=>{
                <div className="each-slide" key={index}>
                    <div style={{backgroundImage : `url(${slideImage.url})`}}>
                        <span>{slideImage.caption}</span>
                    </div>
                </div>
            })}
        </Slide>
    </div>
    )
    }