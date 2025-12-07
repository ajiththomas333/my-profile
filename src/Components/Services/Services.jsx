import React from 'react'
import './Services.css'
import Service_data from "../../assets/ServicesData"
function Services() {
  return (
    <div id='service' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src="https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-vector-abstract-elegant-colorful-flowing-spectrum-wave-lines-isolated-on-white-png-image_4863925.png" alt="" />
        </div>
        <div className="services-container">
            {
                Service_data.map((service,index)=>{
                   return <div key={index} className='service-format'>
                     <h3>{service.s_no}</h3>
                     <h2>{service.s_name}</h2>
                     <p>{service.s_desc}</p>
                     <div className='service-readmore'>
                        <p>Read more</p>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/022/056/356/small/hand-painted-arrow-clip-art-free-png.png" alt="" />
                     </div>
                   </div>

                })
            }

        </div>
      
    </div>
  )
}

export default Services
