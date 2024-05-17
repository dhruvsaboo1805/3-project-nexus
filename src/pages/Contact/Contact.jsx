import React, { useState, useRef } from "react";
import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero_contact from "../../components/HeroSection/Hero_contact";
import Footer from "../../components/Footer/Footer";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import useGSAP from "../../hooks/useGsap";
import gsap from "gsap";

const Contact = () => {
    const [isContactPage, setContactPage] = useState(true);

    // const service_id = process.env.REACT_APP_SERVICE_ID;
    // const public_id = process.env.REACT_APP_PUBLIC_ID;
    // const contact_template_id = process.env.REACT_APP_CONTACT_US_TEMPLATE_ID;
    // console.log(process.env);
    // console.log(process.env);

    const formRef = useGSAP((element) => {
        gsap.fromTo(element, 
            { opacity: 0, x: 100 }, 
            { opacity: 1, x: 0, duration: 1.5, scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "top 30%",
                scrub: true,
            }}
        );
    });


    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_ttvw8si', 'template_deno9xg', form.current, {
                publicKey: 'nP2m46ScHPCwe9_fi',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success("Your Message is Sent");

                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Something Went Wrong");
                },
            );
            e.target.reset();
    };

    return (
        <div>
            <Navbar></Navbar>
            <Hero_contact isContactPage={isContactPage}></Hero_contact>
            <div className="contact-form-container" ref={formRef}>
                <h2 className="contact-main-heading">Drop Us a Message</h2>
                <form className="contact-form" onSubmit={handleSubmit} ref={form}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="user_name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                        />
                    </div>
                    <button type="submit" value="Send" className="contact-button">Send Message</button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Contact;