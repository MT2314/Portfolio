import React from 'react';
import about from '../img/mike.jpg';
import { ImLibreoffice } from 'react-icons/im';
// Resume
import resume from '../assets/MikeTkachuk - Resume.pdf'

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
                <div className="icon-holder">            
                    <a href={resume}>
                    <ImLibreoffice className="icon resume" />
                    Resume
                </a>
                </div>

            </div>
            <div className="about-info">
                <h4>My name is <span> Mike Tkachuk</span> and I am an aspiring Web Developer </h4>
                <p className="about-text">
                    Designed and developed web applications using a variety of technologies, frame works and libraries. Utilizing APIs, third-party integrations
                    and databases developing dynamic and responsive applications and web sites. 
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: {
                            new Date().getFullYear() - 2021 + 27
                        }</p>
                        <p>: Canadian</p>
                        <p>: English, Ukrainian</p>
                        <p>: Etobicoke, Ontario</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ImageSection;
