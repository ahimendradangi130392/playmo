
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './profile.scss'
import { Card, Checkbox, FormControlLabel, FormGroup, StepLabel } from '@mui/material';
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
const steps = ['You', 'Kiddo', 'Playmo!'];

const  RegisterProfile=()=> {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        // backgroundImage:
        //   "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
        backgroundColor:"#6D9EA2"
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        // backgroundImage:
        //   "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
        backgroundColor:"#6D9EA2"

      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));
  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;
  
    const icons = {
      1: "1",
      2: "2",
      3: "3",
    };
  
    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }
  const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
        backgroundColor:"#6D9EA2",
      // backgroundImage:
      //   "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundColor:"#6D9EA2",
      // backgroundImage:
      //   "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    }),
  }));
  
  return (
    <div className='profile-container'>
        <div className='welcome-title'> 
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
            <path d="M11.1771 13.0387C12.2058 13.0387 13.0397 12.2048 13.0397 11.1761C13.0397 10.1474 12.2058 9.31348 11.1771 9.31348C10.1484 9.31348 9.31445 10.1474 9.31445 11.1761C9.31445 12.2048 10.1484 13.0387 11.1771 13.0387Z" fill="#231F20"/>
            <path d="M11.1771 6.51917C12.2058 6.51917 13.0397 5.68525 13.0397 4.65656C13.0397 3.62787 12.2058 2.79395 11.1771 2.79395C10.1484 2.79395 9.31445 3.62787 9.31445 4.65656C9.31445 5.68525 10.1484 6.51917 11.1771 6.51917Z" fill="#231F20"/>
            <path d="M11.1771 19.5573C12.2058 19.5573 13.0397 18.7233 13.0397 17.6946C13.0397 16.666 12.2058 15.832 11.1771 15.832C10.1484 15.832 9.31445 16.666 9.31445 17.6946C9.31445 18.7233 10.1484 19.5573 11.1771 19.5573Z" fill="#231F20"/>
            </svg>
            </span>
            <h3>Welcome to Playmo!</h3>
        </div>
        <div  style={{width:"100%"}} >
          <div className=''>
{/* <CustomizedSteppers/> */}
          </div>
            <Box className="profileSteper">
            <Stepper nonLinear activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((label, index) => (
                <Step key={label} completed={completed[index]}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {/* <StepButton color="inherit" onClick={handleStep(index)}> */}
                    {label}
                    </StepLabel>
                    {/* </StepButton> */}
                </Step>
                ))}
            </Stepper>
            <div>
                {allStepsCompleted() ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
                ) : (
                <React.Fragment>
                    {
                    activeStep==1?
                    <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                   <div className='card-box'>
                   <Card variant="outlined">
                    <div className='add-data'>
                   <TextField label="Your  home address (required) " variant="standard" sx={{width:"100%"}}/>
                   <p>Your approximate location will be visible to your network, but your exact address will not
                     be visible without your permission.</p>
                     <div class="google-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                     <p>Drag the map to adjust how location will appear to your trusted network.</p>
                   </div>
                   </Card>

                    </div>
                </Typography>:activeStep==2?
                <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                   <div className='card-box'>
                    <Card variant="outlined">
                        <div className='profile-img'>
                            <div className='imgs'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="146" height="146" viewBox="0 0 146 146" fill="none">
                        <circle cx="73" cy="73" r="73" fill="#6D9EA2" fill-opacity="0.27"/>
                        </svg>
                            <div className='camera-icon'>
                                <input type='file'/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                    <g clip-path="url(#clip0_110_16886)">
                                    <path d="M7.875 11.8125C7.875 10.6044 8.85438 9.625 10.0625 9.625C11.2706 9.625 12.25 10.6044 12.25 11.8125C12.25 13.0206 11.2706 14 10.0625 14C8.85438 14 7.875 13.0206 7.875 11.8125Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.59222 4.1095L6.33025 2.9996C6.63403 2.54277 6.78592 2.31434 6.98679 2.14897C7.16462 2.00256 7.3696 1.89271 7.58997 1.82569C7.8389 1.75 8.11321 1.75 8.66183 1.75H11.4632C12.0118 1.75 12.2861 1.75 12.535 1.82569C12.7554 1.89271 12.9604 2.00256 13.1382 2.14897C13.3391 2.31434 13.491 2.54276 13.7947 2.9996L14.5328 4.1095C14.6356 4.26409 14.687 4.34141 14.7492 4.40341C14.8706 4.52451 15.025 4.60725 15.1931 4.64133C15.2792 4.65878 15.372 4.65878 15.5577 4.65878C16.551 4.65878 17.0477 4.65878 17.4491 4.7915C18.2378 5.05229 18.8565 5.67099 19.1173 6.45967C19.25 6.86104 19.25 7.35774 19.25 8.35112V15.4875C19.25 16.9576 19.25 17.6927 18.9639 18.2542C18.7122 18.7482 18.3106 19.1497 17.8167 19.4014C17.2552 19.6875 16.5201 19.6875 15.05 19.6875H5.075C3.60486 19.6875 2.86979 19.6875 2.30827 19.4014C1.81435 19.1497 1.41278 18.7482 1.16111 18.2542C0.875 17.6927 0.875 16.9576 0.875 15.4875V8.35112C0.875 7.35774 0.875 6.86104 1.00772 6.45967C1.26851 5.67099 1.88721 5.05229 2.67589 4.7915C3.07726 4.65878 3.57395 4.65878 4.56734 4.65878C4.753 4.65878 4.84583 4.65878 4.9319 4.64133C5.1 4.60725 5.25437 4.52451 5.37583 4.40341C5.43802 4.34141 5.48942 4.2641 5.59222 4.1095ZM10.0625 7.875C7.88788 7.875 6.125 9.63788 6.125 11.8125C6.125 13.9871 7.88788 15.75 10.0625 15.75C12.2371 15.75 14 13.9871 14 11.8125C14 9.63788 12.2371 7.875 10.0625 7.875Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_110_16886">
                                    <rect width="21" height="21" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                            </div>
                            </div>
                            
                        </div>
                        <p>Add your Kid’s photo</p>
                        <div className='add-data'>
                        <TextField label="Kid’s Name " variant="standard" sx={{width:"100%"}}/>
                        <TextField label="DD/ MM/ YYYY" variant="standard" sx={{width:"100%"}}/>
                        <FormControl variant="standard" sx={{  width: "100%" }} className='customDropdown-icon'>
                            <InputLabel id="demo-simple-select-standard-label">How often does your child play with other similar age kids, apart from school/ classes?</InputLabel>
                            <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="What is your household setup?"
                            >
                            <MenuItem value={10}>Nuclear Family - just us and  kid(s)</MenuItem>
                            <MenuItem value={20}>Supplemented nuclear Family <p>(Grand parents live near by)</p></MenuItem>
                            <MenuItem value={30}>Joint Family <p>(Stay with Grand parents)</p></MenuItem>
                            <MenuItem value={40}>Big happy Joint Family <p>(Stay with Grand parents)</p></MenuItem>
                            </Select>
                        </FormControl>
                        <div className='custom_radio-section'>
                        <InputLabel id="">Which programs is your child enrolled in?</InputLabel>
                        {/* <div class="custom_radio">
                            <div><input type="radio" id="featured-1" name="featured" /><label for="featured-1">yes</label></div>
                            <div><input type="radio" id="featured-2" name="featured"/><label for="featured-2">No</label></div>
                           </div> */}
                           <div class="custom_radio third-step">
                           <div className={`${checked==true? "active" :""} checkbox-item`} ><input onChange={e => setChecked(!checked)} checked={checked}  type="Checkbox" id="featured-1" name="featured" /><label for="featured-1">Preschool</label></div>
                           <div className={`${checked==true? "active" :""} checkbox-item`} ><input onChange={e => setChecked(!checked)} checked={checked}  type="Checkbox" id="featured-1" name="featured" /><label for="featured-1">School</label></div>
                            <div className={`${checked==true? "active" :""} checkbox-item`} ><input onChange={e => setChecked(!checked)} checked={checked}  type="Checkbox" id="featured-1" name="featured" /><label for="featured-1">Other classes- sports  </label></div>
                            <div className={`${checked2==true? "active" :""} checkbox-item`}><input type="Checkbox" id="featured-2" name="featured" checked={checked2 }  onChange={e => setChecked2(!checked2)}/><label for="featured-2">None</label></div>
                           </div>
                        </div>
                        {checked ==true?  <div className='radio-section'>
                        <InputLabel id="">Work Arrangement?</InputLabel>
                        <div class="custom_radios">
                            <div className='radio-item'><input type="radio" id="featured-1" name="Work"    /><label for="featured-1">Work from home</label></div>
                            <div className='radio-item'><input type="radio" id="featured-2" name="Work"/><label for="featured-2">Work from office</label></div>
                            <div className='radio-item'><input type="radio" id="featured-2" name="Work"/><label for="featured-2">Hybrid</label></div>
                           </div>
                        </div>:""}
                       
                        </div>
                    </Card>
                    </div>
                    </Typography>:
                    <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                    <div className='card-box'>
                    <Card variant="outlined">
                        <div className='profile-img'>
                            <div className='imgs'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="146" height="146" viewBox="0 0 146 146" fill="none">
                        <circle cx="73" cy="73" r="73" fill="#6D9EA2" fill-opacity="0.27"/>
                        </svg>
                            <div className='camera-icon'>
                                <input type='file'/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                    <g clip-path="url(#clip0_110_16886)">
                                    <path d="M7.875 11.8125C7.875 10.6044 8.85438 9.625 10.0625 9.625C11.2706 9.625 12.25 10.6044 12.25 11.8125C12.25 13.0206 11.2706 14 10.0625 14C8.85438 14 7.875 13.0206 7.875 11.8125Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.59222 4.1095L6.33025 2.9996C6.63403 2.54277 6.78592 2.31434 6.98679 2.14897C7.16462 2.00256 7.3696 1.89271 7.58997 1.82569C7.8389 1.75 8.11321 1.75 8.66183 1.75H11.4632C12.0118 1.75 12.2861 1.75 12.535 1.82569C12.7554 1.89271 12.9604 2.00256 13.1382 2.14897C13.3391 2.31434 13.491 2.54276 13.7947 2.9996L14.5328 4.1095C14.6356 4.26409 14.687 4.34141 14.7492 4.40341C14.8706 4.52451 15.025 4.60725 15.1931 4.64133C15.2792 4.65878 15.372 4.65878 15.5577 4.65878C16.551 4.65878 17.0477 4.65878 17.4491 4.7915C18.2378 5.05229 18.8565 5.67099 19.1173 6.45967C19.25 6.86104 19.25 7.35774 19.25 8.35112V15.4875C19.25 16.9576 19.25 17.6927 18.9639 18.2542C18.7122 18.7482 18.3106 19.1497 17.8167 19.4014C17.2552 19.6875 16.5201 19.6875 15.05 19.6875H5.075C3.60486 19.6875 2.86979 19.6875 2.30827 19.4014C1.81435 19.1497 1.41278 18.7482 1.16111 18.2542C0.875 17.6927 0.875 16.9576 0.875 15.4875V8.35112C0.875 7.35774 0.875 6.86104 1.00772 6.45967C1.26851 5.67099 1.88721 5.05229 2.67589 4.7915C3.07726 4.65878 3.57395 4.65878 4.56734 4.65878C4.753 4.65878 4.84583 4.65878 4.9319 4.64133C5.1 4.60725 5.25437 4.52451 5.37583 4.40341C5.43802 4.34141 5.48942 4.2641 5.59222 4.1095ZM10.0625 7.875C7.88788 7.875 6.125 9.63788 6.125 11.8125C6.125 13.9871 7.88788 15.75 10.0625 15.75C12.2371 15.75 14 13.9871 14 11.8125C14 9.63788 12.2371 7.875 10.0625 7.875Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_110_16886">
                                    <rect width="21" height="21" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                            </div>
                            </div>
                            
                        </div>
                        <p>Please make sure that your profile picture is a photo of yourself</p>
                        <div className='add-data'>
                        <TextField label="Name" variant="standard" sx={{width:"100%"}}/>
                        <TextField label="Email" variant="standard" sx={{width:"100%"}}/>
                        <FormControl variant="standard" sx={{  width: "100%" }} className='customDropdown-icon'>
                            <InputLabel id="demo-simple-select-standard-label">What is your household setup?</InputLabel>
                            <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="What is your household setup?"
                            >
                            <MenuItem value={10}>Nuclear Family - just us and  kid(s)</MenuItem>
                            <MenuItem value={20}>Supplemented nuclear Family <p>(Grand parents live near by)</p></MenuItem>
                            <MenuItem value={30}>Joint Family <p>(Stay with Grand parents)</p></MenuItem>
                            <MenuItem value={40}>Big happy Joint Family <p>(Stay with Grand parents)</p></MenuItem>
                            </Select>
                        </FormControl>
                        <div className='custom_radio-section'>
                        <InputLabel id="">Are you working?</InputLabel>
                        {/* <div class="custom_radio">
                            <div><input type="radio" id="featured-1" name="featured" /><label for="featured-1">yes</label></div>
                            <div><input type="radio" id="featured-2" name="featured"/><label for="featured-2">No</label></div>
                           </div> */}
                           <div class="custom_radio">
                            <div className={`${checked==true? "active" :""} checkbox-item`} ><input onChange={e => setChecked(!checked)} checked={checked}  type="Checkbox" id="featured-1" name="featured" /><label for="featured-1">yes</label></div>
                            <div className={`${checked2==true? "active" :""} checkbox-item`}><input type="Checkbox" id="featured-2" name="featured" checked={checked2 }  onChange={e => setChecked2(!checked2)}/><label for="featured-2">No</label></div>
                           </div>
                        </div>
                        {checked ==true?  <div className='radio-section'>
                        <InputLabel id="">Work Arrangement?</InputLabel>
                        <div class="custom_radios">
                            <div className='radio-item'><input type="radio" id="featured-1" name="Work"    /><label for="featured-1">Work from home</label></div>
                            <div className='radio-item'><input type="radio" id="featured-2" name="Work"/><label for="featured-2">Work from office</label></div>
                            <div className='radio-item'><input type="radio" id="featured-2" name="Work"/><label for="featured-2">Hybrid</label></div>
                           </div>
                        </div>:""}
                       
                        </div>
                    </Card>
                    </div>
                    </Typography>
                    }
                    {/* <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                    eeee {activeStep + 1}
                    </Typography> */}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleComplete} sx={{ mr: 1 }} className='submit-btn'>
                     <div>
                         <p>Add your Spouse/Partner  </p>
                      <span>Create a Family account </span>
                     </div>
                    
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.74256 19.8452C7.12769 19.3448 7.0349 18.4407 7.5353 17.8258L12.6121 11.5878L7.64056 5.26549C7.15053 4.64232 7.25846 3.7399 7.88163 3.24987C8.5048 2.75984 9.40723 2.86777 9.89725 3.49094L15.5786 10.7159C15.9936 11.2436 15.9873 11.9885 15.5635 12.5092L9.76194 19.6379C9.26154 20.2528 8.35743 20.3456 7.74256 19.8452Z" fill="white"/>
                        </svg>
                     
                    </Button>
                    {/* {activeStep !== steps.length &&
                        (completed[activeStep] ? (
                        <Typography variant="caption" sx={{ display: 'inline-block' }}>
                            Step {activeStep + 1} already completed
                        </Typography>
                        ) : (
                        <Button onClick={handleComplete}>
                            {completedSteps() === totalSteps() - 1
                            ? 'Finish'
                            : 'Complete Step'}
                        </Button>
                        ))} */}
                    </Box>
                </React.Fragment>
                )}
            </div>
            </Box>
            </div>
    </div>
  );
}
export default  RegisterProfile