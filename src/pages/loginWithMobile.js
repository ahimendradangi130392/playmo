import React from 'react'
import { useState } from 'react'
import PlaymoIcon from '../assets/newImages/playmo-icon.png'
import './login.css'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { MuiOtpInput } from 'mui-one-time-password-input';
const MobileRegister=()=>{
    const [otp, setOtp] = useState('')
    const [counter, setCounter] = useState(60);
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);
    const handleChange = (newValue) => {
      setOtp(newValue)
    }
    const[step1,setSetp1]=useState()
    const[step2,setSetp2]=useState()
const VerifyNumber=()=>{
    setSetp2(true)
} 
    return(<>
            {/* *************************** */}
            <div className='login-container'>
            <div className='login-page-step'>
                <div className='top-bar-section'>
                    <div>
                        <div className='back-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2568 3.20042C15.8768 3.69444 15.9789 4.59754 15.4849 5.21754L10.4729 11.5078L15.5095 17.7783C16.0059 18.3964 15.9073 19.2999 15.2893 19.7963C14.6712 20.2927 13.7677 20.1941 13.2713 19.5761L7.51555 12.4102C7.09513 11.8868 7.09367 11.1419 7.51204 10.6169L13.2396 3.42854C13.7337 2.80853 14.6368 2.7064 15.2568 3.20042Z" fill="black"/>
                            </svg><span>Back</span>
                        </div>
                    
                        </div>
                        <div>
                            <p className='nav-tital-text'>Enter phone number</p>
                        </div>
                        <div className='back-btn' onClick={VerifyNumber}>
                       <span> Verify</span>
                        </div>

                </div>
               
      

            {
                    step2==true? 
                    <div className='Verify-section'>
                        <p>Enter the 6-digit code we sent to </p>
                        <p className='mobile-number'>+918779955386</p>
                       <div className='otp-box'>
                       <MuiOtpInput value={otp} onChange={handleChange} length={6} />
                       </div>
                       <span className='resend-otp'>Resend Code 0:{counter}</span>
                       <p><Link>Terms of service   Privacy Policy</Link></p>
                    </div>:   
                      <div>
                        <div className='mobileregister'>
                            <TextField className='enter-number' id="outlined-basic" label="Number" variant="outlined" sx={{width:"100%"}} type='number' />
                        </div>
                        <p className='privacy-policy'>
                        By tapping Verify, you are indicating that you accept our 
                            <Link> Terms of Service </Link> and <Link> Privacy Policy</Link>. An SMS may be sent.
                        Message & data rates may apply.  
                        </p>
            </div>
                }
        </div>    
        </div>
    
     </>
    )
}
export default MobileRegister