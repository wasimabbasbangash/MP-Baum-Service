import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
  phone: Number,
};
export const Contact = (props) => {
  const [{ name, email, message,phone }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => {
    setState({ ...initialState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l3h7i0f", //serviceId
        // "YOUR_TEMPLATE_ID", //templateId
        "template_uahe2z9",
        e.target,
        "eNtWkdavcHiquH7pe" //publicKey
      )
      .then(
        (result) => {
          toast.success("Nachricht erfolgreich gesendet!")
          clearState();
        },
        (error) => {
          toast.error("Es ist ein Fehler aufgetreten!")
        }
      );
  };
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>KONTAKTIEREN SIE UNS</h2>
                <p>
                  Bitte füllen Sie das untenstehende Formular aus, um uns eine E-Mail zu senden. Wir werden uns
                  so schnell wie möglich mit Ihnen in Verbindung setzen.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                          type='text'
                          id='name'
                          name='name'
                          className='form-control'
                          placeholder='Name*'
                          required
                          onChange={handleChange}
                          value={name}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                          type='number'
                          id='phone'
                          name='phone'
                          className='form-control'
                          placeholder='Handynummer'
                          onChange={handleChange}
                          value={phone}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <input
                          type='email'
                          id='email'
                          name='email'
                          className='form-control'
                          placeholder='E-mail*'
                          required
                          onChange={handleChange}
                          value={email}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                      name='message'
                      id='message'
                      className='form-control'
                      rows='4'
                      placeholder='Nachricht*'
                      required
                      onChange={handleChange}
                      value={message}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Kontaktinformationen</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Adresse
                </span>
                {props.data ? props.data.address : "loading"}
                <br/>
                {props.data ? props.data.address2 : "loading"}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Handynummer
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
                <br/>
                {props.data ? props.data.phone2 : "loading"}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> E-mail
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"} target="_blank" rel="noopener noreferrer">
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"} target="_blank" rel="noopener noreferrer">
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
          &copy; 2024. Design und Entwicklung: Waseem Abbas & Parth Gajera (Orbit Owl Solutions).
            {/* <a href='http://www.templatewire.com' rel='nofollow'>
              TemplateWire
            </a> */}
          </p>
        </div>
      </div>
      <ToastContainer position="top-center"/>
    </div>
  );
};
