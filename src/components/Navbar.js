import React, { useEffect } from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import backgroundImage from '../images/bread-large.jpg';


const StyledWrapper = styled.div`
    .navigation-bar{
        width:100%;
        height:6em;
        color:white;
        transition: height 0.5s;
        font-family: Oswald;
        

        .navigation-bar-container{
            display:flex;
            justify-content:space-between;
            max-width:1170px;
            margin:auto;
            height:100%;
            @media only screen and (max-width: 480px) {justify-content:center;}

            .navigation-bar-logo{
                display: flex;
                flex-direction: column;
                justify-content: center;
                max-width:200px;
                /* background: #bbbbbb33; */
                padding:2rem;
                .logo{
                    padding-bottom: 12px;
                    width: 168px;
                    height:54px;
                    font-family: Sacramento;
                    font-size: 54px;
                    font-style:italic;
                    text-align: center;
                    color: #5fd5f3;
                    /* border: 2px solid #5fd5f3; */
                    /* border-radius:40%; */
                    /* background: #ffffff; */
                    -webkit-user-select: none; /* Safari */        
                    -moz-user-select: none; /* Firefox */
                    -ms-user-select: none; /* IE10+/Edge */
                    user-select: none; /* Standard */
                    opacity:80%;
                    margin: auto;
                }
            }
            .navigation-bar-links{
                display:flex;
                list-style: none;
                width:55%;
                height: 100%;
                font-size:1.5em;
                @media only screen and (max-width: 480px) {display:none;}
                li{
                    width:24%;
                    text-align: center;
                    padding-top: 1.3em;
                    border-top:3px solid #ffffff00;
                    transition: padding-top 0.5s;
                    a{
                        color: #fff;
                        text-decoration:none;
                        &:hover{
                            cursor:pointer;
                            color: #5fd5f3;
                        }
                    }
                }
                .active-link{
                    border-top:3px solid #5fd5f3;
                    a{color: #5fd5f3;}
                }
            }
        }
    }
    .navigation-sticky.navigation-bar{
        position:fixed;
        z-index:100;
        top:0;
        background-color: #ffffff;
        color:black;
        height:5em;
        -webkit-box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
        @media only screen and (max-width: 480px) {
            .navigation-bar-links{width:100% !important; justify-content:center;}
            .navigation-bar-logo{display:none;}
            }
            @media only screen and (max-width: 360px) {
            height:4em;
            .navigation-bar-links{
                font-size: 16px !important;
                width:100% !important;
                justify-content:center;}
            .navigation-bar-logo{display:none;}
            }
        .navigation-bar-links{
                display:flex;
                list-style: none;
                width:55%;
                height: 100%;
                font-size:24px;
                li{
                    width:25%;
                    text-align: center;
                    padding-top: 0.75em ;
                    border-top:3px solid #ffffff00;
                    transition: 0.5s;

                    a{
                        color: #000;
                        text-decoration:none;
                        &:hover{
                            cursor:pointer;
                            color: #5fd5f3;
                        }
                    }
                }
                .active-link{
                    border-top:3px solid #5fd5f3;
                    a{color: #5fd5f3;
                    }
                }
            }
            .navigation-bar-logo{
                display: flex;
                flex-direction: column;
                justify-content: center;
                max-width:200px;
                /* background: #bbbbbb33; */
                padding:2rem;
                .logo{
                    color: #ffffff;
                    opacity:100%;
                }
            }
    }
`;

const Navbar = () => {


    let navbar,navbarReplacement;
    const makeNavSticky = () => {
         navbar = document.querySelector(".navigation-bar");
         navbarReplacement = document.querySelector(".nav-replacement");
         var height = navbar.offsetTop;
         window.addEventListener('scroll', function(e) {
                if(window.scrollY > height){
                    navbar.className = "navigation-bar navigation-sticky"
                    navbarReplacement.className = "navigation-bar"
                }else{
                    navbar.className = "navigation-bar"
                    navbarReplacement.className = "nav-replacement"
                }
          })
    }
    
    useEffect(()=>{try{makeNavSticky()}catch(e){}},[])


    return (
    <>
        <StyledWrapper>
            <div className="nav-replacement"></div>
            <nav className="navigation-bar">
                <div className="navigation-bar-container">
                    <div className="navigation-bar-logo" id="#sticky-logo">
                        <div className="logo">Sweetie's</div>
                        </div>
                    <ul className="navigation-bar-links">
                        <li className="active-link"><a href="#about">HOME</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#about">OFFER</a></li>
                        <li><a href="#about">CONTACT</a></li>
                    </ul>
                </div>
            </nav>
        </StyledWrapper>
    </>


)}

export default Navbar;