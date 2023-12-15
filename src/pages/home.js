import { Button, Grid } from "@mui/material";
import Banner from "../assets/newImages/banner.png";
import playPeers from "../assets/newImages/PlaywithPeers.png";
import playPeers2 from "../assets/newImages/PurposeDrivenPlay.png";
import playPeers3 from "../assets/newImages/ScreenPlayFun.png";
import playmoParents from "../assets/newImages/parents1.png";
import playmoParentsImg from "../assets/newImages/Trust.png";
import worksImg1 from "../assets/newImages/Effortlessly.png";
import worksImg4 from "../assets/newImages/Planning.png";
import worksImg2 from "../assets/newImages/Premier.png";
import worksImg3 from "../assets/newImages/Revel.png";
import Adventure from "../assets/newImages/adventure.png";
import CarouselSlider from "./carousel";
import Footer from "../component/footer";
import RightTop from "../assets/newImages/spring-img.png";
import LefttopImg from "../assets/newImages/yellow-plates.png";

const Home = () => {
  return (
    <div className="bg-grey ">
      <div className="bg-image">
        <div className="bg-img-first">
          <div className="container-fluid">
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
              <Grid item xs={12} md={6} sm={6}>
                <div className="playmo-section">
                  <p className="doorstep">
                    Fun Experiences,
                    <br />
                    for your kids,{" "}
                  </p>
                  <h3 className="delivered">Delivered to your doorstep!</h3>
                  <p className="playdates">
                    Curated learning experiences inspired from the best across
                    the world, brought to your home in power-packed playdates.
                  </p>
                  <div>
                    <Button className="join-btn" variant="contained">
                      Join the Waitlist{" "}
                    </Button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6} sm={6}>
                <div className="main-image">
                  {/* <img src={Banner} style={{width:'100%'}} alt="img not found" /> */}
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      {/* ***************************** */}
      <div className="section-2" id="for-kids">
        <div className="container-fluid">
          <div className="subtitle">
            <span>why playmo for kids?</span>
          </div>
          <Grid container spacing={8}>
            <Grid item xs={12} md={4} sm={4}>
              <div className="box lg-blue ">
                <div className="card bg-color-for-img lg-blue ">
                  <img src={LefttopImg} className="left-top-img" />
                  <img src={playPeers} alt="img not found" />
                </div>
                <h3>Play with Peers</h3>
                <p>
                  We want kids to find their voice, learn, & make the most of
                  their childhood our small, intimate playgroups of 4 to 5 kids,
                  enable just that
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={4} sm={4}>
              <div className="box lg-yellow">
                <div className="card bg-color-for-img lg-yellow ">
                  <img src={playPeers2} alt="img not found" />
                </div>
                <h3>Purpose Driven Play</h3>
                <p>
                  Waldorf, Montessori, or Reggio? Our activity curriculum is
                  inspired from the best to give your child a well rounded
                  learning experience.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={4} sm={4}>
              <div className="box lg-pink ">
                <div className="card bg-color-for-img lg-pink ">
                  <img src={RightTop} className="right-top-img" />
                  <img src={playPeers3} alt="img not found" />
                </div>
                <h3>Screen-Free Fun</h3>
                <p>
                  Waldorf, Montessori, or Reggio? Our activity curriculum is
                  inspired from the best to give your child a well rounded
                  learning experience.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      {/* ******************** */}
      <div className="section-third" id="for-parents">
        <div className="subtitle">
          <span>Why playmo for Parents?</span>
        </div>
        <div className="container">
          <div>
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
              <Grid item xs={12} md={6} sm={12}>
                <div className="playmoParents">
                  <img
                    src={playmoParents}
                    style={{ width: "100%" }}
                    alt="img not found"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6} sm={12}>
                <div className="right-side">
                  <Grid container spacing={2} sx={{ alignItems: "top" }}>
                    <Grid item xs={12} md={6} sm={8} className="box-data">
                      <div className="trust-circle">
                        <h4 className="text-lg-sky">Forge Your Trust Circle</h4>
                        <div className="show-mobile">
                          <img src={playmoParentsImg} alt="img not found" />
                        </div>
                        <p>
                          Connect with parents that you share your values and
                          parenting style, so parenting can be guilt-free and
                          fun
                        </p>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6} sm={4} className="box-data ">
                      <div className="des-show space-l">
                        {" "}
                        <img src={playmoParentsImg} alt="img not found" />
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} sx={{ alignItems: "top", mt: 5 }}>
                    <Grid item xs={12} md={6} sm={4} className="box-data">
                      <div className="des-show">
                        {" "}
                        <img src={worksImg1} alt="img not found" />
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6} sm={8} className="box-data">
                      <div className="trust-circle space-l">
                        <h4 className="text-lg-pink">
                          {" "}
                          Effortlessly Accommodating
                        </h4>
                        <div className="show-mobile">
                          <img src={worksImg1} alt="img not found" />
                        </div>
                        <p>
                          We build a seamless extension of your world, crafting
                          safe and enjoyable play experiences for your kids
                          while you do your thing!
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      {/* ********************* */}
      <div className="section-fourth" id="how-it-works">
        <div className="container">
          <div className="subtitle">
            <span className="">How it works?</span>
          </div>
          <div className="space">
            <Grid container className="grid-box">
              <Grid item xs={12} md={4} sm={4}>
                <div className="box box1">
                  <div className="card">
                    <div className="img-how-it-work">
                      <img src={worksImg2} alt="img not found" />
                    </div>
                    <h3>Set Up: Effortless Playdate Planning</h3>
                  </div>
                  <p>
                    Sync your schedule, set preferences, and let us curate your
                    child’s ideal playgroup. Simple steps to the perfect
                    playmate match!
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4} sm={4}>
                <div className="box box2">
                  <div className="card">
                    <div className="img-how-it-work">
                      <img src={worksImg3} alt="img not found" />
                    </div>
                    <h3>Execute: Premier Play Curated for You</h3>
                  </div>
                  <p>
                    Wide range of activities mapped perfectly to development
                    aspects! Our facilitators work the magic{" "}
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4} sm={4}>
                <div className="box box3">
                  <div className="card">
                    <div className="img-how-it-work">
                      <img src={worksImg4} alt="img not found" />
                    </div>
                    <h3>Revel: Home is Where the Play Is</h3>
                  </div>
                  <p>
                    Relax and watch the joy unfold. Playmo turns your home into
                    an oasis of fun learning, where your child and their new
                    buddies flourish!
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      {/* ***************************************** */}
      <div className="section-five">
        <div className="container">
          <div className="join-section">
            <h4>
              We are so excited for you{" "}
              <span className="join-circle">to join </span>our fun playdates
            </h4>
            {/* <Button className="joinbtn">Join the Waitlist </Button> */}
            <Button className="join-btn" variant="contained">
              Join the Waitlist{" "}
            </Button>
            <div className="slider-Carousel">
              <CarouselSlider />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
