import "./contact.css";
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Location from "../../images/location.png";
import { useRef } from "react"; 
import { useState } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_ydbz821', 'template_2ee627a', formRef.current, 'JVMgmJAGiLl3bE6Da')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Contact Me</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        radaa.sirak@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Location} alt="" className="c-icon" />
                        Edmonton, Alberta, Canada
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    If you would like to get in contact.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="Subject" name="user_subject" />
                    <input type="text" placeholder="Email" name="user_email" />
                    <textarea rows="5" placeholder="Message" name="message"></textarea>
                    <button>Submit</button>
                    {done && "Thank you..."}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact