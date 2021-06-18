import React from "react";
import "./contact.scss";
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import {db} from "../../firebase"; 

function Contact() {

    // firebase values
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    const [submit, setSubmit] = React.useState(false);
    const year = new Date().getFullYear();
    const btnStyle = { color:"white", fontSize:"1.5em", backgroundColor:"#0c0c0c" };

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("contacts")
            .add({
                name: name,
                email: email,
                message: message
            })
            .then(() => {
                setName("");
                setEmail("");
                setMessage("");
                setSubmit(true);
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    return (
        <div className="contact" id="contact">
            <h1>CONTACT</h1>
            <h2>_________</h2>
            
            <div className="top">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="new-password"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="new-password"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        autoComplete="new-password"
                        required
                    />
                    {submit && <span>Your message was sent successfully. Thanks!</span>}
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
            <div className="bottom">
                <div className="bottomContainer">
                    <a
                    href="https://www.linkedin.com/in/rohit-v-170b76162/">
                        <button className="socialButton">
                            <FaLinkedinIn className="logo" style={btnStyle} />
                        </button>
                    </a>
                    <a
                    href="https://www.instagram.com/r0hit4real/">
                        <button className="socialButton">
                            <FaInstagram className="logo" style={btnStyle} />
                        </button>
                    </a>
                    <a
                    href="https://github.com/rohit-vrrr">
                        <button className="socialButton">
                            <FaGithub className="logo" style={btnStyle} />
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
