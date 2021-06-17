import React, { useState } from "react";
import "./Verification.css";
// import { Link } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
// import { useAuth } from "../../../Authentication/Main";

function ForgotPassword() {


  const [clicked, setClicked] = useState(false)
  const [success, setSuccess] = useState(true)
  const [countdown, setCountdown] = useState(10)  

  const id =React.useRef(null);

  const clear=()=>{
  window.clearInterval(id.current)
}

  React.useEffect(()=>{
     id.current=window.setInterval(()=>{
      setCountdown((time)=>time-1)
    },1000)
    return ()=>clear();
  },[])

  React.useEffect(()=>{
    if(countdown===0){
      clear()
    }

  },[countdown])
 
  
  const handleSubmit = (e) => {

    e.preventDefault();
    setTimeout(() => {
      setClicked(!clicked);
    }, 500)
  }


  return (
    <div className='mainContainer'>
      {success ?
      // ( If Successfully verified
      <div className="rp-container contain">
        <p>Successfully Verified</p>
        <img src="https://img.icons8.com/fluent/500/fa314a/new-post.png" alt='icon'/>

        <small>Click the button below or you will be redirected in <strong>00:0{countdown}</strong></small>

        <div className='buttons'>
          <button className="btn" onClick={handleSubmit} disabled={clicked}>
            {clicked ?
              <CircularProgress style={{ color: '#fff', width: '20px', height: '20px' }} />
              :
              'Continue'}
          </button>
        </div>
      </div>
      // Successfully verified ends )
      
      :

      // ( !Successfully verified 
      <div className="rp-container contain">
        <p>Email Verification Failed</p>
        <img src="https://img.icons8.com/fluent/500/fa314a/remove-message.png" alt='icon'/> 
         <small>Click the button below to resend verification link to your email.</small>

        <div className='buttons'>
          <button className="btn" onClick={handleSubmit} disabled={clicked}>
            {clicked ?
              <CircularProgress style={{ color: '#fff', width: '20px', height: '20px' }} />
              :
              'Resend Verification Link'}
          </button>
        </div>
      </div>
      // !Successfully verified ends )

      }
    </div>
  );
}

export default ForgotPassword;
