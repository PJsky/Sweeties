import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
//import {Link} from 'gatsby'
import backgroundImage from '../images/bread-large.jpg';
import sideBar from '../images/side-bars.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Navbar from './Navbar';
const GlobalStyle = createGlobalStyle`

    body{
        padding: 0;
        margin: 0;
        
    }
    html{
        scroll-behavior: smooth; 
    }
    

    *, *::before, *::after{
        padding: 0;
        margin: 0;
    }

    @media only screen and (max-width: 1280px) {
        html{
            font-size:14px;
        }
    }
    /* @media only screen and (max-width: 690px) {
        html{
            font-size:12px;
        }
        .hero-text-upper{
                img{
                    width:5%;
                }
            }
    } */
    @media only screen and (max-width: 640px) {
        .hero-text-upper{
            img{
                width:20px;
                height:10px;
                margin:0;
            }
        }
        .navigation-sticky{
            justify-content: center;
            flex-wrap:wrap;
            
        }
    }
    @media only screen and (max-width: 460px) {
        .hero-text-upper{
            display:none;
            img{
                width:10px;
                height:10px;
                margin:0;
            }
        }
    }
    @media only screen and (max-width: 420px) {
        .top-info-bar-contact{
            display:none !important;
        }
    }
    @media only screen and (max-width: 280px) {
        html{
            font-size:10px;
        }
    }
`;


const StyledWrapper = styled.div`
    .hero{
        position: absolute;
        width: 100%;    
        height: 100vh;
        min-height: 800px;
        background-color: black;
        background-image: url(${backgroundImage});
    }
    .hero:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(127, 127, 127, 0.5);
        background-image: radial-gradient(#ffffff77 10%, transparent -100%);
        background-size: 3px 3px;
    }    
    .hero-overlay{
        position:relative;
        background-color: #00000077;
        width:100%;
        height: 100vh;
        min-height: 800px;
    }
    .top-info-bar{
        border-bottom: 1px solid #ffffffbb;
        font-family: Oswald;
        font-size:1em;
        color:white;
        
        .top-info-bar-container{
            display:flex;
            justify-content:space-between;
            max-width:1170px;
            margin:auto;
            @media only screen and (max-width:860px){
                flex-wrap:wrap;
                justify-content:center;
                .top-info-bar-media{
                    min-height: 45px;
                    width:auto !important;
                }
            }

            .top-info-bar-contact{
                display:flex;
                width: fit-content;
                white-space:nowrap;
                p{
                    padding: 12px 6px;
                    &:first-of-type{
                        margin-right:24px;
                    }
                }
                .contact-icon{
                    height:100%;

                    &:first-child{
                        margin-left:24px;
                    }
                }
            }

            .top-info-bar-media{
                display:flex;
                justify-content: flex-end;
                width: 40%;
                .media-container{
                    display:flex;
                    justify-content:center;
                    width:42px;
                    height:100%;
                    transition:0.5s;
                    &:hover{
                        cursor:pointer;
                        background-color:white;
                        color:black;
                    }
                    .media-icon{
                        margin-left:24px;
                        height:100%;
                        margin:auto;
                    }
                }
                .order-now-button{
                    font-family: Oswald;
                    font-size:1em;
                    font-weight:bold;
                    height:100%;
                    width:120px;
                    border: 0px;
                    background: black;
                    color:white;
                    transition:0.5s;
                    &:hover{
                        cursor:pointer;
                        background: white;
                        color: black;
                    }
                    &:focus{
                        outline:none;
                    }
                }
            }

        } 
    }
    .hero-main{
        /* position:absolute; */
        top: 9em;
        width:100%;
        height:84%;
        margin:auto;
        @media only screen and (max-width: 480px) {margin-top:9em;}
        .hero-text{
            width: 100%;
            margin:auto;
            color:white;
            
            h1{
                font-size:4em;
                text-align:center;
                font-weight:400;
                font-family:'Yeseva One';
                padding-top: 4rem;

            }
            .hero-text-upper{
                font-size:1.5em;
                text-align:center;
                font-family:'Yeseva One';
                margin-top:5rem;

                img{
                    margin: 0px 20px 3px 20px;
                    color:white;
                    stroke:white;
                    fill:white;
                }
            }
            .hero-text-lower{
                font-family: 'Oswald';
                /* max-width:860px; */
                width:50vw;
                max-height:35vh;
                overflow: hidden;
                margin:auto;
                margin-bottom: 1rem;
                padding:4rem;
                @media only screen and (max-width: 480px) {display:none;}

            }
                .hero-text-button-container{
                    width:100%;
                    display:flex;
                    justify-content:space-around;
                    .hero-text-button{
                        font-size: 1.5rem;
                        font-family: Oswald;
                        font-weight: bold;
                        padding: 0.5rem 4rem;
                        background: #ffffff00;
                        color:white;
                        border: 2px solid white;
                        border-radius:2px;
                        @media only screen and (max-width: 480px) {margin-top:1rem;}
                        transition: 0.5s;
                        &:hover{
                            cursor: pointer;
                            background: white;
                            color:black;
                        }
                }
            }
        }
    }

`;

const Hero = () => {
    return(
    <>
        <GlobalStyle/>
        <StyledWrapper>
            <div className="hero"></div>
            <div className="hero-overlay">
                <div className="top-info-bar">
                    <div className="top-info-bar-container">
                        <div className="top-info-bar-contact">
                            <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
                            <p>Email: example@example.com</p>
                            <FontAwesomeIcon className="contact-icon" icon={faPhone} />
                            <p>Telephone: +55 555 555 555</p>
                        </div>
                        <div className="top-info-bar-media">
                            <div className="media-container">
                                <FontAwesomeIcon className="media-icon" icon={faFacebookF} />
                            </div>
                            <div className="media-container">
                                <FontAwesomeIcon className="media-icon" icon={faTwitter} />
                            </div>
                            <div className="media-container">
                                <FontAwesomeIcon className="media-icon" icon={faInstagram} />
                            </div>
                            <button className="order-now-button">ORDER NOW</button>
                        </div>
                    </div>
                </div>
                <Navbar/>
                <main className="hero-main">
                    <div className="hero-text">
                        <p className="hero-text-upper">
                            <img src={sideBar} alt="React Logo" />
                            The Freshest and The Tastiest
                            <img src={sideBar} alt="React Logo" />
                        </p>
                        <h1>Sweetie's Bakery</h1>
                        <p className="hero-text-lower">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in vestibulum est. Pellentesque a neque ex. Sed sagittis mauris eget congue pretium. Aenean fermentum suscipit leo a pellentesque. Nullam egestas nunc quis faucibus accumsan. Aliquam gravida et sapien eu ultrices. Proin suscipit turpis sit amet nisl placerat, volutpat semper mauris pretium.
                            <br/>
                            <br/>
                            Phasellus ultrices vehicula ornare. Mauris consectetur, quam eu bibendum scelerisque, mi sem eleifend arcu, et lacinia ex est ut sem. In iaculis congue diam elementum dictum. Aenean non hendrerit nisi. Vivamus nulla purus, feugiat non ultricies id, auctor sit amet augue. In ac quam a nunc sodales commodo in ut lacus. Maecenas in ante ut eros convallis bibendum. Quisque in enim diam. Pellentesque euismod augue tristique arcu feugiat luctus. Praesent nec interdum tellus. Sed ut sapien in mauris lacinia ultrices.
                        </p>
                        <div className="hero-text-button-container">
                            <button className="hero-text-button" onClick={()=>console.log()}>ORDER NOW</button>
                        </div>
                    </div>
                </main>
            </div>
        </StyledWrapper>
    </>
)}

export default Hero;