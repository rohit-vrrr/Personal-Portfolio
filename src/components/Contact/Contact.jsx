import React from "react";
import "./contact.scss";
import Button from '@material-ui/core/Button';

function Contact() {

    const [message, setMessage] = React.useState(false);

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
            <div className="bottom"></div>
        </div>
    );
}

export default Contact;
