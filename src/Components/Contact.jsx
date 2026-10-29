import React, { useState } from 'react';
import '../Styles/Contact.css'
import { FiSend } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { SiMedium } from "react-icons/si";
import { EMAIL, socials } from '../data/links';

const icons = {
    LinkedIn: CiLinkedin,
    GitHub: FaGithub,
    Email: BiLogoGmail,
    Medium: SiMedium,
};

const iconLinks = socials.filter(({ label }) => icons[label]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ name, email, message }) {
    const errors = {};
    if (!name.trim()) errors.name = 'Please tell me your name.';
    if (!emailPattern.test(email.trim())) errors.email = 'Enter a valid email so I can reply.';
    if (message.trim().length < 10) errors.message = 'Say a little more (at least 10 characters).';
    return errors;
}

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);

    const onChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setSent(false);
    };

    // there is no backend, so the message is handed to the visitor's mail app
    const onSubmit = (e) => {
        e.preventDefault();
        const found = validate(form);
        setErrors(found);
        if (Object.keys(found).length) return;

        const subject = encodeURIComponent(`Portfolio message from ${form.name.trim()}`);
        const body = encodeURIComponent(`${form.message.trim()}\n\n${form.name.trim()}\n${form.email.trim()}`);
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
        setSent(true);
    };

    return (
        <section className="contactMePage" id="contact">
            <h2>Let's talk</h2>
            <div className="contactMeOuter">
                <div className="contactMeInner">
                    <form className="innerContent" onSubmit={onSubmit} noValidate>
                        <div className="field">
                            <input
                                type="text" name="name" placeholder="Name" aria-label="Name"
                                autoComplete="name" value={form.name} onChange={onChange}
                                aria-invalid={Boolean(errors.name)}
                            />
                            {errors.name && <span className="fieldError" role="alert">{errors.name}</span>}
                        </div>
                        <div className="field">
                            <input
                                type="email" name="email" placeholder="Your email" aria-label="Your email"
                                autoComplete="email" value={form.email} onChange={onChange}
                                aria-invalid={Boolean(errors.email)}
                            />
                            {errors.email && <span className="fieldError" role="alert">{errors.email}</span>}
                        </div>
                        <div className="field fieldGrow">
                            <textarea
                                name="message" aria-label="Message"
                                placeholder="Wanna ask me anything? I am just a 'Hi' after"
                                value={form.message} onChange={onChange}
                                aria-invalid={Boolean(errors.message)}
                            />
                            {errors.message && <span className="fieldError" role="alert">{errors.message}</span>}
                        </div>
                        <button type="submit" className="sendButton" aria-label="Send message">
                            <FiSend />
                        </button>
                        <p className="formStatus" role="status">
                            {sent && 'Opening your email app with the message ready to send.'}
                        </p>
                    </form>
                    <nav className="sideInnerBar" aria-label="Social links">
                        {iconLinks.map(({ label, href }) => {
                            const Icon = icons[label];
                            return (
                                <a
                                    key={label} href={href} className="iconContact" aria-label={label}
                                    target={label === 'Email' ? undefined : '_blank'} rel="noopener noreferrer"
                                >
                                    <Icon className="iconsForCommunication" />
                                </a>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default Contact;
