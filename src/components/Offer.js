import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import offerBackround from '../images/offer.jpg'
import sweetBunOffer from '../images/sweet-bun-offer2.jpg'

const StyledWrapper = styled.div`
    .offer{
        width:100%;
        background:#424242;
        background-image: url(${offerBackround});
        background-size: 100% 150%;
        background-position: 0 -300px;
        background-attachment: fixed;
        background-repeat: no-repeat;
    }
    .offer-dots {
        background: #000000aa;
        background-image: radial-gradient(#ffffff30 10%, transparent -100%);
        background-size: 3px 3px;
    }    
    .offer-overlay{
        position:relative;
        background-color: #000000ff;
        width:100%;
    }
    .offer-container{
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 10em 0;
        width:100%;
        height: 100%;

        .offer-container-card{
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            width: 60vw;
            height: 40vw;
            margin:auto;
            background: black;
            background-image: url(${sweetBunOffer});
            background-size:cover;
            -webkit-box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
            @media only screen and (max-width: 480px) {height:70%; width: 60%;}

            .sweet-bun-card{
                background: white;
                min-width:70%;
                margin-left:50%;
                -webkit-box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
                box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.75);
                .sweet-bun-card-text{
                    margin:3em 2em;
                    h3{
                        font-size: 2em;
                        font-family:'Yeseva One';
                    }
                    p{
                        padding-top:1em;
                        font-size: 1.5em;
                        font-family: 'Oswald';
                        @media only screen and (max-width: 580px) {display:none;}
                    }
                    .sweet-bun-card-button{
                        margin:2em 0;
                        width:100%;
                        @media only screen and (max-width: 480px) {display:none;}

                        button{
                            width:200px;
                            margin:auto;
                            font-family: Oswald;
                            font-size:1.5em;
                            font-weight:bold;
                            height:100%;
                            border: 2px solid black;
                            background: white;
                            color:black;
                            transition:0.5s;
                            @media only screen and (max-width: 580px) {width:fit-content; padding:0 1em;}
                            &:hover{
                                cursor:pointer;
                                background: black;
                                color: white;
                            }
                            &:focus{
                                outline:none;
                            }
                        }
                    }
                }
            }
        }
    }

`;

const Offer = () => (
    <>
        <StyledWrapper>
            <div className="offer" id="offer">
            <div className="offer-dots">
                <div className="offer-container">
                    <div className="offer-container-card">
                            <div className="sweet-bun-card">
                                <div className="sweet-bun-card-text">
                                    <h3>40% off for Cream puffs </h3>
                                    <p>Small, sweet and amazing. Our cream puffs are made with love and were chosen to be sold with a discount. </p>
                                    <div className="sweet-bun-card-button"><button>ORDER NOW</button></div>
                                </div>

                            </div>
                    </div>
                </div>
            </div>
            </div>
        </StyledWrapper>
    </>
)

export default Offer;