import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact(props) {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_31jp94u', 'template_xecj5xe', form.current, 'PCswOmhawnTPKEMe6',)
            .then(
                () => {
                    console.log("성공")
                }, (error) => {
                    console.log('실패', error.text);
                },
            );
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <>
            <section className='sct4' id='Contact'>
                <h2>작은 의견도 수중하게 생각하는 <span className='permanent'>me</span></h2>
                <div className='sct4-main-container'>
                    <div className='sct4-info'>
                        <h3>Get In Touch</h3>
                        <address>
                            <ul>
                                <li>NAME</li>
                                <li>E-mail</li>
                                <li>HP</li>
                            </ul>
                            <ul>
                                <li>Kim Jin Woo</li>
                                <li>krlawls1@gmail.com</li>
                                <li>010-4540-6254</li>
                            </ul>
                        </address>
                    </div>
                    <div className='sct4-feedback'>
                        <div className='triangle'></div>
                        <div className='sct4-feedback-container'>
                            <form ref={form} onSubmit={sendEmail}>
                                <div>
                                    <input type="text" placeholder='Name' name="user_name" value={name} onChange={handleNameChange} />
                                </div>
                                <div>
                                    <input type="email" placeholder='E-mail' name="user_email" value={email} onChange={handleEmailChange} />
                                </div>
                                <div>
                                    <textarea name="message" placeholder='Message' value={message} onChange={handleMessageChange} />
                                </div>
                                <div className='submitBox'>
                                    <input className='submit' type="submit" value="FEEDBACK" row="250" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
