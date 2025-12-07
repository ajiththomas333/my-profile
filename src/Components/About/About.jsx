import React from 'react'
import './About.css'
function About() {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src="https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-vector-abstract-elegant-colorful-flowing-spectrum-wave-lines-isolated-on-white-png-image_4863925.png" alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img  src="https://img.freepik.com/free-photo/front-view-modern-boy-with-sunglasses-posing_23-2148423101.jpg" alt="" />

                </div>
                <div className="about-right">
                    <div className="about-paragraph">

                        <p>Front-End Developer with  years of experience in building responsive, user-friendly websites using HTML, CSS, JavaScript, and frameworks like React and Vue.js. Skilled in creating optimized, maintainable code and collaborating with teams to deliver high-quality web applications.</p>
                        <p>Front-End Developer with years of experience in building responsive, user-friendly websites using HTML, CSS, JavaScript, and frameworks like React and Vue.js. Skilled in creating optimized.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>html & css</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>react js</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>next.js</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECT COMPLETE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>50+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About
