import React from 'react'
import "./Contact.css"

function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c71a34b7-a7a5-4a11-84f8-9367b3c379f4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>get in touch</h1>
            <img src="https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-vector-abstract-elegant-colorful-flowing-spectrum-wave-lines-isolated-on-white-png-image_4863925.png" alt="" />
        </div>
        <div className="contact-section">
            <div className="left-section">
                <h1>let's talk</h1>
             <p>A skilled website freelancer specializing in design, development, SEO, and e-commerce, delivering high-quality websites tailored to client needs. Ensures clear communication, timely delivery, and ongoing support, addressing all aspects from design to post-launch maintenance.</p>
             <div className="contact-details">
                <div className="contact-detail">
                 <img src="https://static.vecteezy.com/system/resources/thumbnails/023/431/013/small/messages-mail-icons-mail-notifications-transparent-background-illustration-free-png.png" alt="" /><p>ajiththomas543@gmail.com</p>

                </div>
                <div className="contact-detail">
                <img src="https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-phone-line-icon-on-a-white-background-png-image_4830670.png" alt="" /><p>+23223098</p>
                    
             </div>
             <div className="contact-detail">
             <img src="https://static.vecteezy.com/system/resources/thumbnails/048/725/704/small_2x/graphics-push-pin-pointer-png.png" alt="" /><p>CA,usa</p>
                    
            </div>
             </div>

            </div>
            <form onSubmit={onSubmit}  className="contact-right">
            <label htmlFor=''>Your Name</label>
            <input type='text' placeholder='enter your name' name="name"/>
            <label htmlFor=''>Your email</label>
            <input type='email' placeholder='enter your email' name="email"/>
            <label htmlFor=''>write yor message</label>
            <textarea name='message'  rows="8" placeholder='enter your message'></textarea>
            <button type='submit' className="contact-submit">submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
