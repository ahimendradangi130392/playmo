import { Button, Grid } from "@mui/material"
import Banner from '../assets/banner.png'
import fullogo from '../assets/fullogo.png'
// import playPeers from '../assets/play-with-peers.jpg'
import playPeers2 from '../assets/44.png'
import playPeers3 from '../assets/45.png'
import playPeers from '../assets/47.png'
import playmoParents from '../assets/playmo-parents.jpg'
import playmoParentsImg from '../assets/playmo-parents-2.jpg'
import playmoParentsImg1 from '../assets/46.png'
import worksImg from '../assets/how-it-works-image-1.png'
import worksImg1 from '../assets/Layer14.png'
import worksImg4 from '../assets/Layer15.png'

import worksImg2 from '../assets/Layer12.png'
import worksImg3 from '../assets/Layer13.png'


const Home =()=>{
    return(<>
  <div className="bg-grey">
    <div className="container-fluid">
        <Grid container spacing={2} sx={{alignItems:'center'}}>
            <Grid item xs={12} md={6} sm={6}>
                <div className="main-image">
                <img src={Banner} style={{width:'100%'}} />
                </div>
            </Grid>
            <Grid item xs={12} md={6} sm={6} >
                <div className="playmo-section">
                <div className="img-section"><img src={fullogo}/></div>
                    <p className="doorstep">Fun experiences for your kids, delivered to your doorstep!</p>
                    <p className="playdates">Curated learning experiences inspired from the best across the world, brought to your home in power-packed playdates.</p>
                    <div>
                    <Button className="join-btn" variant="contained">Join The Waitlist </Button>
                    </div>
                </div>
            </Grid>
        </Grid>
       
    </div>
  </div>
  {/* ***************************** */}
  <div className="section-2" id="for-kids">
    <div className="container-fluid">
        <h2 className="subtitle">why playmo for kids?</h2>
        <Grid container spacing={8} >
            <Grid item xs={12} md={4} sm={4} >
                <div className="box">
                    <div className="card"> 
                        <h3>Play with Peers</h3>
                        <img src={playPeers}/>
                    </div>
                    <p>We want kids to find their voice, learn, & make the most of their childhood our small, intimate playgroups of 4 to 5 kids, enable just that</p>
                </div>
                </Grid>
                <Grid item xs={12} md={4} sm={4} >
                <div className="box">
                    <div className="card"> 
                        <h3>Purpose Driven Play</h3>
                        <img src={playPeers2}/>
                    </div>
                    <p>Waldorf, Montessori, or Reggio? Our activity curriculum is inspired from the best to give your child a well rounded learning experience.</p>
                </div>
                </Grid>
                <Grid item xs={12} md={4} sm={4} >
                <div className="box">
                    <div className="card"> 
                        <h3>Screen Play Fun</h3>
                        <img src={playPeers3}/>
                    </div>
                    <p>Waldorf, Montessori, or Reggio? Our activity curriculum is inspired from the best to give your child a well rounded learning experience.</p>
                </div>
                </Grid>
        </Grid>
    </div>

  </div>
  {/* ******************** */}
  <div className="section-third" id="for-parents">
    <div className="container">
        <div>
            <Grid container spacing={2} sx={{alignItems:'center'}}>
                        <Grid item  xs={12} md={6} sm={12} >
                            <div className="playmoParents"><img src={playmoParents} style={{width:'100%'}} />
                            <div className="parents"><h3>why playmo for parents ?</h3></div></div>
                        </Grid>
                        <Grid item  xs={12} md={6} sm={12} >
                        <div  className="right-side">
                        <Grid container spacing={1} sx={{alignItems:'center'}}>
                                <Grid item xs={12} md={6} sm={8} className="box-data">
                                    <div className="trust-circle" >
                                        <h4>Forge Your Trust Circle:</h4>
                                        <div className="show-mobile"><img src={playmoParentsImg}/></div>
                                        <p>Connect with parents that you share your values and parenting style, so parenting can be guilt-free and fun</p>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} sm={4} className="box-data">
                            <div className="des-show"> <img src={playmoParentsImg}/></div>
                                </Grid>
                        </Grid>
                        <Grid container spacing={1} sx={{alignItems:'center',mt:5}}>
                                <Grid item xs={12} md={6} sm={4}   className="box-data">
                                <div className="des-show"> <img src={worksImg1}/></div>

                                </Grid>
                                <Grid item xs={12} md={6} sm={8} className="box-data">
                                    <div className="trust-circle space-l">
                                        <h4>Effortlessly Accommodating</h4>
                                        <div className="show-mobile"><img src={worksImg1}/></div>
                                        <p>We build a seamless extension of your world, crafting safe and enjoyable play experiences for your kids while you do your thing!</p>
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
        <h2 className="subtitle">HOW IT WORKS?</h2>
        <Grid container  className="grid-box" >
            <Grid item xs={12} md={4} sm={4} >
                <div className="box">
                    <div className="card"> 
                        <div className="img-how-it-work"><img src={worksImg4}/></div>
                        <h3>Set Up: Effortless Playdate Planning</h3>
                    </div>
                    <p>Sync your schedule, set preferences, and let us curate your child’s ideal playgroup. Simple steps to the perfect playmate match!</p>
                </div>
                </Grid>
                <Grid item  xs={12} md={4} sm={4}>
                <div className="box">
                    <div className="card"> 
                        <div className="img-how-it-work"><img src={worksImg2}/></div>
                        <h3>Set Up: Effortless Playdate Planning</h3>
                    </div>
                    <p>Sync your schedule, set preferences, and let us curate your child’s ideal playgroup. Simple steps to the perfect playmate match!</p>
                </div>
                </Grid>
                <Grid item  xs={12} md={4} sm={4}>
                <div className="box">
                    <div className="card"> 
                        <div className="img-how-it-work"><img src={worksImg3}/></div>
                        <h3>Set Up: Effortless Playdate Planning</h3>
                    </div>
                    <p>Sync your schedule, set preferences, and let us curate your child’s ideal playgroup. Simple steps to the perfect playmate match!</p>
                </div>
                </Grid>
              
        </Grid>
    </div>

  </div>
    </>
    )
}
export default Home