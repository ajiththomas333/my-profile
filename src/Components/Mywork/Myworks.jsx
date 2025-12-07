import React from 'react'
import "./Myworks.css"
import Service_data from "../../assets/MyworkData"


function Myworks() {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
              <h1>My latest work</h1>
              <img src="https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-vector-abstract-elegant-colorful-flowing-spectrum-wave-lines-isolated-on-white-png-image_4863925.png" alt="" />
            </div>
            <div className="mywork-cotainer">
              {
              
              Service_data.map((workdata,index)=>{
                return(
                <img key={index} src={workdata.w_img}/>
              )})
            }
            </div>
            <div className="mywork-showmore">
                <p>show more</p>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/022/056/356/small/hand-painted-arrow-clip-art-free-png.png" alt="" />
            </div>
      
    </div>
  )
}

export default Myworks
