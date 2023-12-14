
import { useNavigate  } from 'react-router-dom';
import PlaymoIcon from '../assets/newImages/playmo-icon.png'
import './login.css'
const LoginPage=()=>{
    const navigate = useNavigate ();
    const mobileRegister=()=>{
        navigate('/mobile-register');
    }
    return(<>
    {/* *********** step 1*************** */}
        {/* <div className='login-container'>
            <div className='login-page'>
                <div className='logo'>
                    <img src={PlaymoIcon} />
                </div>
                <div className='term-and-conditions-section'> 
                    <p>By signing up you agree to our </p>
                    <p className='term-and-conditions'><a>Terms & Conditions</a></p>
                 </div>
            </div>
        </div> */}


        {/* ******************step -2 ****************** */}
        <div className='login-container'>
            <div className='login-page'>
                <div className='logo'>
                    <img src={PlaymoIcon} />
                </div>
                <div className='ragister-section'>
                    <p>Sign Up or sign in below</p>
                    <button className='ragister-btn' onClick={mobileRegister}>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path d="M4.14189 12.1663C9.62819 17.6526 13.0932 16.4976 15.4032 14.1876C16.0411 13.5497 16.0411 12.5154 15.4032 11.8776L13.5083 9.98264C12.8007 9.27496 11.6533 9.27496 10.9456 9.98264C10.303 10.6253 9.36714 10.9068 8.57555 10.4603C8.11072 10.1981 7.57007 9.81943 7.02942 9.27878C6.48877 8.73813 6.11008 8.19748 5.84788 7.73264C5.40136 6.94106 5.68291 6.00524 6.32555 5.3626C7.03323 4.65491 7.03323 3.50754 6.32555 2.79986L4.43064 0.904946C3.79275 0.267052 2.75851 0.267051 2.12062 0.904946C-0.189403 3.21497 -1.34441 6.68 4.14189 12.1663Z" fill="white"/>
                        </svg>
                          Continue with phone number</button>
                    <p>Please enter a Whatsapp number</p>
                </div>
                <div className='term-and-conditions-section'> 
                    <p>By signing up you agree to our </p>
                    <p className='term-and-conditions'><a>Terms & Conditions</a></p>
                 </div>
            </div>
        </div>        
    
     </>
    )
}
export default LoginPage