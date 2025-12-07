import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/NCR_logo_without_background.png" alt="" />
                <p>Front-End Developer with years of experience in building responsive, user-friendly websites using HTML, CSS, JavaScript, and frameworks like React and Vue.js. Skilled in creating optimized</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt="" />
                    <input type='text' placeholder='enter your email'/>
                </div>
                <div className="footer-subscribe">subscribe </div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2025 ajith thomas .</p>
        <div className="footer-bottem-right">
         <p>term of services</p>
         <p>privacy policy</p>
          <p>connect withme</p>

        </div>
        </div>
    </div>
  )
}

export default Footer
