import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import donut from '../images/donut.png'

const StyledWrapper = styled.div`
    .product-card{
        display:flex;
        flex-direction: column;
        justify-content:center;
        width: 12em;
        height: 14em;
        margin:2em;
        padding:2em 1em;
        border-radius:3px;
        -webkit-box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.50);
        -moz-box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.5);
        box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.5);
        background: #f9f9f9;
        color: #5fd5f3;
        font-family: 'Yeseva One';

        .card-food-container{
            width:100%;
            text-align: center;

            .card-food-image{
                background-size: cover;
                background-repeat: no-repeat;
                background-color: #00000005;
                border: 3px solid #5fd5f3;
                border-radius:50%;
                width:8em;
                height:8em;
                margin: auto;
            }

            .card-food-name{
                padding:0.5em;
                font-size: 1.6em;
            }
            .card-food-price{
                font-size: 1.8em;
            }
        }
        

    }
    .card-food-overlay{
            display:flex;
            flex-direction:column;
            position:absolute;
            width: 12em;
            height: 14em;
            padding:2em 1em;
            margin:2em;
            transition:1s;
            opacity:0%;
            font-family: Oswald;
            color: white;
            text-align:center;
            &:hover{
                background: #5fd5f3;
                opacity:100%;
            }

            h4{
                font-size: 1.6em;
                padding: 0.5em;
            }

            .card-food-overlay-ingredients{
                
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                text-align: center;
                font-size: 1.4em;
                list-style: none;
                height:100%;
                .card-food-overlay-ingredient{
                    font-family: Oswald;
                }
            }
        }

`;

const ProductCard = (props) => {
    
    //const image = props.image;

    return(
    <>
        <StyledWrapper>
            <div className="card-food-overlay">
                <h4>Ingredients:</h4>
                <ul className="card-food-overlay-ingredients">
                    <li className="card-food-overlay-ingredient">Ingredient 1</li>
                    <li className="card-food-overlay-ingredient">Ingredient 2</li>
                    <li className="card-food-overlay-ingredient">Ingredient 3</li>
                    <li className="card-food-overlay-ingredient">Ingredient 4</li>
                </ul>
            </div>
            <div className="product-card" id="product-card">
                <div className="card-food-container">
                    {/* <div className="card-food-image">
                    </div> */}
                    <img src={props.image} className="card-food-image"/>
                <h4 className="card-food-name">{props.name}</h4>
                    {/* <p className="card-food-price">19.00 PLN</p> */}
                </div>
                
            </div>
        </StyledWrapper>
    </>
)
}

export default ProductCard;