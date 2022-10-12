import Carousel from 'react-bootstrap/Carousel';

function CarouselFade() {
  return (
    <Carousel fade>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Christmas-Markets-Europe.webp"
          alt="Holiday Village"
        />
        <Carousel.Caption>
          <h3>Holiday Village</h3>
          <p>Visit a European Holiday Village</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Hot-air-balloons-Cappadocia-Turkey.jpeg"
          alt="Hot Air balloons over Cappadocia Turkey"
        />
        <Carousel.Caption>
          <h3>Cappadocia, Turkey</h3>
          <p>Attend the hot air balloon festival</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Surfing-Hawaii-bucket-list-experience.webp"
          alt="Person surfing in the ocean"
        />
        <Carousel.Caption>
          <h3>Surf Hawaii</h3>
          <p> Learn to surf </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Swimming-turtle.webp"
          alt="person swimmin with a sea turtle"
        />
        <Carousel.Caption>
          <h3>Swim with the Turtles</h3>
          <p> Learn to scuba dive and swim with the sea turtles</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Visiting-50-states.webp"
          alt="Map of the United States"
        />
        <Carousel.Caption>
          <h3>Travel the US</h3>
          <p>Visit all 50 US states </p>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  );
}

export default CarouselFade

