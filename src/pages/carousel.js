import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Adventure from '../assets/newImages/adventure.png'
import thought1 from '../assets/newImages/gray.png'
import './carousel.css'
import thought2 from '../assets/newImages/pink.png'
import Adventure2 from '../assets/newImages/Adventure2.png'
import Adventure3 from '../assets/newImages/Adventure3.png'

const  CarouselSlider=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
    <Carousel responsive={responsive}
    autoPlaySpeed={3000}
    autoPlay={true}
    infinite={true}
    >
        <div>
        <div className="carousel-item" >
                <div className="adventure person">
                        <img src={Adventure } alt="adventure "/>
                </div>
                <div className="adventure thought">
                        <img src={thought1 } alt="thought1"/>
                        <div className="thought-text">
                                <h5>Stuti & Kartik</h5>
                                <h6>Parents of Kashini, 4</h6>
                        <p><span class="fa fa-quote-left"></span>A big thank you for organizing such 
                        a fun session - it was the highlight of Kashini's first
                        ever birthday party! The kids enjoyed the kits a lot, they are a perfect mix of fun and learning<span class="fa fa-quote-right"></span>
                        </p>
                        </div>
                </div>
                <div className="adventure thought">
                        <img src={thought2 } alt="thought2"/>
                        <div className="thought-text">
                                <h5>Suchismitaa</h5>
                                <h6>parent of 1 yo</h6>
                                <p><span class="fa fa-quote-left"></span>This is new and of great value!<span class="fa fa-quote-right"></span></p>
                        </div>
                </div>
        </div>
        </div>
        <div>
        <div className="carousel-item" >
                <div className="adventure person">
                        <img src={Adventure2 } alt="Adventure2 "/>
                </div>
                <div className="adventure thought">
                        <img src={thought1 } alt="thought1"/>
                        <div className="thought-text">
                                <h5>Stuti & Kartik</h5>
                                <h6>Parents of Kashini, 4</h6>
                        <p><span class="fa fa-quote-left"></span>A big thank you for organizing such 
                        a fun session - it was the highlight of Kashini's first
                        ever birthday party! The kids enjoyed the kits a lot, they are a perfect mix of fun and learning<span class="fa fa-quote-right"></span>
                        </p>
                        </div>
                </div>
                <div className="adventure thought ">
                        <img src={thought2 } alt="thought2"/>
                        <div className="thought-text">
                                <h5>Suchismitaa</h5>
                                <h6>parent of 1 yo</h6>
                                <p><span class="fa fa-quote-left"></span>This is new and of great value!<span class="fa fa-quote-right"></span></p>
                        </div>
                </div>
        </div>            
        </div>
        <div>
            
            <div className="carousel-item" >
                <div className="adventure person">
                        <img src={Adventure3 } alt="Adventure3 "/>
                </div>
                <div className="adventure thought">
                        <img src={thought2 } alt="thought2"/>
                        <div className="thought-text">
                                <h5>Suchismitaa</h5>
                                <h6>parent of 1 yo</h6>
                                <p><span class="fa fa-quote-left"></span>This is new and of great value!<span class="fa fa-quote-right"></span></p>
                        </div>
                </div>  
                <div className="adventure thought">
                        <img src={thought1 } alt="thought1"/>
                        <div className="thought-text">
                                <h5>Stuti & Kartik</h5>
                                <h6>Parents of Kashini, 4</h6>
                        <p><span class="fa fa-quote-left"></span>A big thank you for organizing such 
                        a fun session - it was the highlight of Kashini's first
                        ever birthday party! The kids enjoyed the kits a lot, they are a perfect mix of fun and learning<span class="fa fa-quote-right"></span>
                        </p>
                        </div>
                </div>
             
        </div>
        </div>
    </Carousel>
    )
}   
export default CarouselSlider