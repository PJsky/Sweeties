import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import ProductCard from './ProductCard'
import donut from '../images/donut.png'
import donut2 from '../images/donut2.png'
import cookies from '../images/cookies.png'
import appleTurnover from '../images/apple-turnover.png'
import cupcake from '../images/cupcake.png'
import bread7 from '../images/seven-seasons-bread.jpg'
import bananaBread from '../images/banana-bread.png'

const StyledWrapper = styled.div`
    .products{
        width:100%;
        background:#fff;
        padding-bottom:4em;
        .products-text-container{
            /* max-width:860px; */
            width:100%;
            margin:auto;
            .products-text-header{
                width:100%;
                font-size:1.5em;
                text-align:center;
                font-family:'Yeseva One';
                font-size:3em;
                font-weight:400;
                text-align:center;
                color:#5fd5f3;
                padding: 4rem 0;
                padding-top:6rem;
            }
            .about-text-paragraph{
                font-family: 'Oswald';

            }
        }
        .products-menu-filter{
            width:fit-content;
            margin:auto;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            button{
                width: 5em;
                height: 2em;
                margin: .5em;
                font-family: Oswald;
                font-size:1.5em;
                font-weight:bold;
                height:100%;
                border: 2px solid #5fd5f3;
                background: #ffffff00;
                color:#5fd5f3;
                transition:0.5s;
                @media only screen and (max-width: 580px) {width:fit-content; padding:0 1em;}
                &:hover{
                    cursor:pointer;
                    background: #5fd5f3;
                    color: white;
                }
                &:focus{
                    outline:none;
                }
            }
            .button-active{
                background: #5fd5f3;
                color: white;
            }
        }
        .products-menu-items{
            display:flex;
            flex-wrap:wrap;
            justify-content: center;
            max-width:1170px;
            margin: auto;
            padding-top: 4em;
            .products-item{
                width:300px;
                height:100px;
                background-color: #444;
                border:1px solid white;
                &:nth-child(odd){
                    background-color: #777;
                }
            }
        }
        .products-menu-items-animated{
            animation: reloadMenu 2s;
        }

    }

    @keyframes reloadMenu {
    from {opacity:0%;}
    to {opacity:100%;}
    }

`;

const Products = () => {

    let [isProducts,setIsProducts] = useState(0);

    const reloadProducts = (productsState) => {
        setIsProducts(productsState);
        let menu = document.querySelector(".products-menu-items");
        menu.classList.remove("products-menu-items-animated");
        setTimeout(()=>{
            menu.classList.add("products-menu-items-animated");
        },10);
    }

    const products = [
        {image:donut, name:"CLASSIC DONUT", type:2}, 
        {image:donut2, name:"ALMOND DONUT", type:2}, 
        {image:appleTurnover, name:"APPLE TURNOVER", type:2}, 
        {image:cupcake, name:"CUPCAKE", type:2}, 
        {image:cookies, name:"SWEETIE'S COOKIES", type:2}, 
        {image:bananaBread, name:"BANANA BREAD", type:1}, 
        {image:bread7, name:"SEVEN SEASONS BREAD", type:1}, 
    ]

    const getProducts = (typeChosen) =>{
        let productCards = [];
        for(let product of products)
            if(product.type == typeChosen || typeChosen==0)
                productCards.push(
                    <ProductCard image={product.image} name={product.name}/>
                )
        return productCards;
    }

return (
    <>
        <StyledWrapper>
            <div className="products" id="products">
                <div className="products-text-container">
                    <h2 className="products-text-header">Popular products</h2>
                </div>
                <div className="products-menu-filter">
                    <button className={isProducts==0? "button-active" : ""} onClick={()=>{reloadProducts(0)}}>ALL</button>
                    <button className={isProducts==1? "button-active" : ""} onClick={()=>{reloadProducts(1)}}>BREADS</button>
                    <button className={isProducts==2? "button-active" : ""} onClick={()=>{reloadProducts(2)}}>PASTERIES</button>
                </div>
                <div className="products-menu-items">
                    {/* <ProductCard image={donut} name="CLASSIC DONUT"/>
                    <ProductCard image={donut2} name="ALMOND DONUT"/>
                    <ProductCard image={appleTurnover} name="APPLE TURNOVER"/>
                    <ProductCard image={cupcake} name="CUPCAKE"/>
                    <ProductCard image={cookies} name="SWEETIE'S COOKIES"/> */}
                    {getProducts(isProducts)}
                </div>
            </div>
        </StyledWrapper>
    </>
)}

export default Products;