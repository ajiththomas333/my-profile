import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import "./Banner.css"

function Banner() {
  return (
    <div id='home' className='Banner'>
        
        <img src="https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=" alt="" />
         <h1><span>I'am Ajith Thomas</span> fullstack developer based in india</h1>
         <p>A full-stack developer handles both front-end (HTML, CSS, JavaScript) and back-end (databases, server-side languages) to build complete web applications..</p>
        <div className="Banner_action">
        <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="Banner-connect">connect with me</div></AnchorLink>
        <div className="Banner-resume">resume</div>
        </div>
    </div>
  )
}

export default Banner
