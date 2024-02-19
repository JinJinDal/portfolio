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
                        {/* <h3>INFO</h3> */}
                        <address>
                            <div><span>NAME</span><span>김진우</span></div>
                            <div><span>E-mail</span><a href='#'>krlawls1@gmail.com</a></div>
                            <div><span>HP</span><a>010-4540-6254</a></div>
                        </address>
                        <div className='sct4-img-box'></div>
                    </div>
                    <div className='sct4-feedback'>
                        <div className='sct4-feedback-container'>
                            <form ref={form} onSubmit={sendEmail}>
                                <div>
                                <label className={name ? 'hidden' : ''}>Name</label>
                                <input type="text" name="user_name" value={name} onChange={handleNameChange} />
                                </div>
                                <div>
                                    <label className={email ? 'hidden' : ''}>Email</label>
                                    <input type="email" name="user_email" value={email} onChange={handleEmailChange} />
                                </div>
                                <div>
                                    <label className={message ? 'hidden' : ''}>Message</label>
                                    <textarea name="message" value={message} onChange={handleMessageChange} />
                                </div>
                                
                                <input className='submit' type="submit" value="Send" row="250" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
