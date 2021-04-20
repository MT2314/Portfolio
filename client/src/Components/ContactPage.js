
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

import emailjs from 'emailjs-com'

function ContactPage(props) {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kp00f1p', 'template_kbabijp', e.target, 'user_w7mh3uylfrM9gxKbCdrMp')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {props.show && <Button variant="danger" style={{ width: "5%", marginLeft: "95%" }} onClick={props.onHide}>X</Button>}
        <Modal.Body>
          <section className="contact-section ml-1 mr-1">
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-6 mb-5">
                <h1 className="mb-4" style={{ borderBottom: '1px solid' }}>Contact Me</h1>

                <form onSubmit={sendEmail}>
                  {/* Grid row */}
                  <div className="row mb-2">
                    {/* Grid column */}
                    <div className="col-md-6">
                      <div className="md-form mb-4">
                        <input type="text" id="contact-name" className="form-control" placeholder="Your name" name="name" />
                      </div>
                    </div>
                    {/* Grid column */}
                    {/* Grid column */}
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input type="text" id="contact-email" className="form-control" placeholder="Your Email" name="email" />
                      </div>
                    </div>
                  </div>
                  {/* Grid row */}
                  <div className="row mb-2">
                    {/* Grid column */}
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                        <input type="text" id="contact-Subject" className="form-control" placeholder="Subject" name="subject" />
                      </div>
                    </div>
                  </div>
                  {/* Grid row */}
                  <div className="row mb-2">
                    {/* Grid column */}
                    <div className="col-md-12">
                      <div className="md-form">
                        <textarea id="contact-message" className="form-control md-textarea" rows={3} placeholder="Your Message" defaultValue={""} name="message" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-md-left">
                    <input type="submit" className="btn btn-primary btn-md" value = "Send" />
                  </div>
                </form>
              </div>
              {/* Contact Info */}
              <div className="col-md-6  text-center container mt-5">
                <div className="card info-card border-info">
                  <div className="card-title mt-2 rounded container" style={{ lineHeight: '40px', fontSize: '5vh' }}>Contact Info</div>
                  <ul className="list-group list-group-flush ">
                    <li className="list-group-item">Mike Tkachuk</li>
                    <li className="list-group-item">tkachuk2314@gmail.com</li>
                    <li className="list-group-item">(647)-410-5436</li>
                    <li className="list-group-item">Toronto, Canada</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContactPage;
