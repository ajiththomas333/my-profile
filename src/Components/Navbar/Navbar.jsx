import React, { useRef, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Navbar() {
  const[menu,setmenu]=useState("home")
  const menuref=useRef();

  const openMenu=()=>{
    menuref.current.style.right="0"
  }
  const closeMenu=()=>{
    menuref.current.style.right="-350px"
  }
  return (
    <div className='Navbar'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/NCR_logo_without_background.png" alt=""  />
      <img style={{width:"90px",height:"70px"}} src="https://static.vecteezy.com/system/resources/thumbnails/033/153/185/small/hamburger-list-icons-png.png" onClick={openMenu} alt="" className='nav-open'/>

      <ul ref={menuref} className="nav-menu">
        <img style={{width:"40px",height:"30px"}} src="https://icon-library.com/images/menu-icon-white-png/menu-icon-white-png-5.jpg" onClick={closeMenu} alt="" className='nav-men-close' />
      <li> <AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setmenu("home")}>Home</p></AnchorLink>{menu==="home"? <img style={{width:"70px",height:"20px"}} src='https://pngimg.com/d/red_arrow_PNG1.png'/>:<></>}</li>
      <li> <AnchorLink className='anchor-link' offset={50}href='#about'><p onClick={()=>setmenu("About me")}>About me</p></AnchorLink>{menu==="About me"? <img style={{width:"70px",height:"20px"}} src='https://pngimg.com/d/red_arrow_PNG1.png'/>:<></>}</li>
      <li> <AnchorLink className='anchor-link' offset={50}href='#service'><p onClick={()=>setmenu("servies")}>servies</p></AnchorLink>{menu==="servies"? <img style={{width:"70px",height:"20px"}} src='https://pngimg.com/d/red_arrow_PNG1.png'/>:<></>}</li>
      <li> <AnchorLink className='anchor-link' offset={50}href='#work'> <p onClick={()=>setmenu("portfolio")}>portfolio</p></AnchorLink>{menu==="portfolio"? <img style={{width:"70px",height:"20px"}} src='https://pngimg.com/d/red_arrow_PNG1.png'/>:<></>}</li>
      <li> <AnchorLink className='anchor-link' offset={50}href='#contact'><p onClick={()=>setmenu("contact")}>contact</p></AnchorLink>{menu==="contact"? <img style={{width:"70px",height:"20px"}} src='https://pngimg.com/d/red_arrow_PNG1.png'/>:<></>}</li>
      </ul>
      <AnchorLink className='anchor-link' offset={50}href='#contact'> <div  className="connect">connect with me</div></AnchorLink>
    </div>
  )
}

export default Navbar
