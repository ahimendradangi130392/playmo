import { Grid } from "@mui/material";
import playmoLogo from "../assets/fullogo.png";
import Instagram from "../assets/newImages/instagram.png";
import faceBook from "../assets/newImages/facebook.png";
import Linkdin from "../assets/newImages/linkedin.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="socila-media">
          <span>
            <a
              target="_blank"
              className="bg-lg-sky"
              href="https://www.instagram.com/withplaymo/"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
          </span>

          <span>
            <a
              target="_blank"
              className="bg-lg-pink"
              href="https://www.linkedin.com/company/withplaymo/"
            >
              <img src={Linkdin} alt="Linkdin " />
            </a>
          </span>
        </div>
        <div className="container">
          <Grid container spacing={5}>
            <Grid item xs={12} md={4} sm={12} sx={{ alignSelf: "center" }}>
              <div className="footer-logo">
                {" "}
                <img src={playmoLogo} alt="logo" />
              </div>
            </Grid>
            <Grid item xs={12} md={8} sm={12}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={5} sm={4}>
                  <div>
                    <h4>Company</h4>
                    <ul>
                      <li>
                        <a>How it works</a>
                      </li>
                      {/* <li><a>Pricing</a></li> */}
                      {/* <li><a>Docs</a></li> */}
                    </ul>
                  </div>
                </Grid>
                {/* <Grid item xs={12} md={5} sm={4} >
                        <div>
                            <h4>Resources</h4>
                            <ul>
                                <li><a>Blog post name list goes here</a></li>
                                <li><a>Blog post name list goes here</a></li>
                                <li><a>Blog post name list goes here</a></li>
                                <li><a>See all resources &gt;  </a></li>
                            </ul>
                        </div>
                    </Grid> */}
                <Grid item xs={12} md={5} sm={4}>
                  <div>
                    <h4>About</h4>
                    <ul>
                      <li>
                        <a>Terms & Conditions</a>
                      </li>
                      <li>
                        <a>Privacy policy</a>
                      </li>
                      {/* <li className='socila-media'><span className='bg-lg-sky'><a>
                                <img src={Instagram} alt='Instagram' />
                                    </a></span>
                                <span className='bg-lg-pink'><a>
                                <img src={Linkdin} alt='Linkdin ' />
                               
                                    </a></span>
                                    <span className='bg-lg-yellow'><a>
                                <img src={faceBook} alt='faceBook' />                                    
                                        </a></span></li> */}
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className="copyright">
          <p>Copyright © 2023 Asamom Tech Private Limited</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
