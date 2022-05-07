import React from 'react';


const Otp
    <div class="AotpPage">
      
       <div class="AotpHead">
        <img src="https://mamaearth.in/static/mamaearth/arrow_back.svg" onclick="location.href='./login.html' " class="AotpBack" />Verify OTP</div>
       <div class="Aotping">
           <img src="https://mamaearth.in/static/mamaearth/otp.svg" />
       </div>
       <div class="AotpInputForm">
           <div class="AotpInputDiv">
               Sent to
               <a>XXXXXX<span class="Alast4Digit"></span>
                   <img src="https://mamaearth.in/static/mamaearth/pen.svg" height="12px" width="10px"  onclick="window.location.href='./login.html' " />
               </a>
           </div>
           <div class="AEnterText">Enter OTP</div>
           <div class="AotpinptField">
                <input autocomplete="off" class="otp-field" type="number" name="otp" maxlength="1" value="">
                <input autocomplete="off" class="otp-field" type="number" name="otp" maxlength="1" value="">
                <input autocomplete="off" class="otp-field" type="number" name="otp" maxlength="1" value="">
                <input autocomplete="off" class="otp-field" type="number" name="otp" maxlength="1" value="">
           </div>
           <div class="BpopupOTP"></div>
           <div class="AresentOTP">Resent OTP <span></span></div>
           <div class="AsubmitOTP">
               <button onclick="AsubmitmyOTP()">Verify</button>
           </div>
           <div class="AnotShare">DO NOT SHARE THIS OTP WITH ANYONE</div>
       </div>
    </div>

    
