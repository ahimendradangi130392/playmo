import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Adventure from "../assets/newImages/adventure.png";
import thought1 from "../assets/newImages/gray.png";
import "./carousel.css";
import thought2 from "../assets/newImages/pink.png";
import Adventure2 from "../assets/newImages/Adventure2.png";
import Adventure3 from "../assets/newImages/Adventure3.png";
import Adventure4 from "../assets/newImages/thought-icon.png";
import Adventure5 from "../assets/newImages/thought-icon-gray.png";

const CarouselSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      autoPlaySpeed={3000}
      autoPlay={true}
      infinite={true}
    >
      <div>
        <div className="carousel-item">
          <div className="adventure person">
            <img src={Adventure} alt="adventure " />
          </div>
          <div className="adventure thought thought-1">
            <img src={thought1} alt="thought1" />
            <div className="thought-text">
              <h5>Stuti & Kartik</h5>
              <h6>Parents of Kashini, 4 yrs old</h6>
              <p>
                <span class="fa fa-quote-left"></span>A big thank you for
                organizing such a fun session - it was the highlight of
                Kashini's first ever birthday party! The kids enjoyed the kits a
                lot, they are a perfect mix of fun and learning
                <span class="fa fa-quote-right"></span>
              </p>
            </div>
          </div>
          <div className="adventure thought thought-2">
            <img src={thought2} alt="thought2" />
            <div className="thought-text">
              <h5>Suchismitaa</h5>
              <h6>Parent of 1 yrs old</h6>
              <p>
                <span class="fa fa-quote-left"></span>This is new and of great
                value!<span class="fa fa-quote-right"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="carousel-item">
          <div className="adventure person">
            <img src={Adventure3} alt="Adventure3 " />
          </div>
          <div className="adventure thought thought-3">
            <img src={Adventure5} alt="thought1" />
            <div className="thought-text">
              <h5>Vartika</h5>
              <h6> Mom of Krisha, 5 yrs old</h6>
              <p>
                <span class="fa fa-quote-left"></span>Lovely initiative by
                playmo! Kids had so much fun :{" "}
                <span class="fa fa-quote-right"></span>
              </p>
            </div>
          </div>
          <div className="adventure thought thought-4 ">
            <img src={Adventure4} alt="thought2" />
            <div className="thought-text">
              <h5>Soumali</h5>
              <h6>Mom of Renesa & Rhythm, 3 and 1 yrs old</h6>
              <p>
                <span class="fa fa-quote-left"></span>Renesa enjoyed so much!
                The best part is that it is as per our schedules and at a
                convenient location near us. Thanks a lot, and we will come
                every week!<span class="fa fa-quote-right"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="carousel-item">
          <div className="adventure person">
            <img src={Adventure2} alt="Adventure2 " />
          </div>
          <div className="adventure thought thought-3">
            <img src={Adventure5} alt="thought2" />
            <div className="thought-text">
              <h5>Devjani M</h5>
              <h6>Mom of Krisha, 5 yrs old</h6>
              <p>
                <span class="fa fa-quote-left"></span>Such a new concept -
                definitely the need of the hour
                <span class="fa fa-quote-right"></span>
              </p>
            </div>
          </div>
          <div className="adventure thought thought-2">
            <img src={Adventure4} alt="thought1" />
            <div className="thought-text">
              <h5>Rashmi S</h5>
              <h6>Mom of Viniya, 3 yrs old</h6>
              <p>
                <span class="fa fa-quote-left"></span>Viniya had a lot of fun!
                This is such a great initiative - already recommended this to my
                daughter's friends and look forward to getting her for the next
                one!<span class="fa fa-quote-right"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
export default CarouselSlider;
