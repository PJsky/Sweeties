import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import footerBackground from '../images/footer-background.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


const StyledWrapper = styled.div`
    .footer{
        width:100%;
        height:30vh;
        background:#f9f9f9;
        background-image: url(${footerBackground});
        background-size:     cover;
        background-repeat:   no-repeat;
        background-position: center center; 
        background-attachment: fixed;
        background-repeat: no-repeat;
        .footer-dots {
        display:flex;
        flex-direction:column;
        justify-content:center;
        width:100%;
        height:100%;
        background: #00000099;
        background-image: radial-gradient(#ffffff30 10%, transparent -100%);
        background-size: 3px 3px;

        .footer-social-media{
            margin:auto;
            .contact-icon{
                color:#f9f9f9;
                padding: 0.4em;
                margin: 0.6em;
                border:2px solid white;
                border-radius: 50%;
                width: 2em;
                height: 2em;
                transition: 0.5s;
                &:hover{
                    cursor:pointer;
                    color:#4ec4e2;
                    border-color:#4ec4e2;
                    background-color: #000;
                }
            }
        }
     }  
    }

`;

const Footer = () => (
    <>
        <StyledWrapper>
            <div className="footer" id="footer">
                <div className="footer-dots">
                    <div className="footer-social-media">
                        <FontAwesomeIcon className="contact-icon" icon={faFacebookF} />
                        <FontAwesomeIcon className="contact-icon" icon={faTwitter} />
                        <FontAwesomeIcon className="contact-icon" icon={faInstagram} />
                    </div>                
                </div>
            </div>
        </StyledWrapper>
    </>
)

export default Footer;