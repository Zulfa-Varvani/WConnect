import React, {useState} from "react";
import "./Contact.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);

    return (
        <form className="form"/* onSubmit={handleSubmit}*/>
            <h1>Contact Us!</h1>
    
            <label>Name</label>
            <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
    
            <label>Email</label>
            <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
    
            <label>Message</label>
            <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ></textarea>
    
            <button
            type="submit"
            style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
            >
            Submit
            </button>
        </form>
    );
}

export default Contact;