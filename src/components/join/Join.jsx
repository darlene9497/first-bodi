import './join.css';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Join() {
  const form = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
  
    if (form.current && name && email) {
      emailjs
        .sendForm('service_uqr4z1y', 'template_akmaek5', form.current, 'uEp8ptSzaD4gWijrm')
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
  
      setName('');
      setEmail('');
      setSubmitted(true);
    }
  };
    

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to </span>
          <span>start your</span>
        </div>
        <div>
          <span>fitness journey</span>
          <span className="stroke-text"> with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
        <input
            type="text"
            name="user_name"
            placeholder={submitted ? 'Name submitted!' : 'Enter your name'}
            value={name}
            onChange={handleNameChange}
            disabled={submitted}
          />
          <input
            type="email"
            name="user_email"
            placeholder={submitted ? 'Email sent!' : 'Enter your email'}
            value={email}
            onChange={handleEmailChange}
            disabled={submitted}
          />
          <button
            className="btn btn-j"
            type="submit"
            onClick={sendEmail}
            disabled={!email || submitted}
          >
            {submitted ? 'Email Sent!' : 'Join Now'}
          </button>
        </form>
      </div>
    </div>
  );
}

