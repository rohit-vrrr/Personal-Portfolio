import React from "react";
import "./contact.scss";
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

function Contact() {

    const [message, setMessage] = React.useState(false);
    const year = new Date().getFullYear();

    const handleSubmit = (e) => {
        e.preventDefault();

        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <h1>CONTACT</h1>
            <h2>_________</h2>
            
            <div className="top">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" autoComplete="new-password" />
                    <input type="text" placeholder="Enter email" autoComplete="new-password" />
                    <textarea placeholder="Your Message" autoComplete="new-password" />
                    {message && <span>Your message was sent successfully. Thanks!</span>}
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
            <div className="bottom">
                <div className="bottomContainer">
                    <a
                    href="https://www.linkedin.com/in/rohit-v-170b76162/">
                        <button className="socialButton">
                            <FaLinkedinIn color="white" size="1.5em" />
                        </button>
                    </a>
                    <a
                    href="https://www.instagram.com/r0hit4real/">
                        <button className="socialButton">
                            <FaInstagram color="white" size="1.5em" />
                        </button>
                    </a>
                    <a
                    href="https://github.com/rohit-vrrr">
                        <button className="socialButton">
                            <FaGithub color="white" size="1.5em" />
                        </button>
                    </a>
                </div>
                <span className="spanName">
                    ROHIT{" "}
                    <span className="spanYear">
                        © {year}
                    </span>
                </span>
            </div>
        </div>
    );
}

export default Contact;
