import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import bread1 from '../images/bread1.svg'
import bread2 from '../images/bread2.svg'
const StyledWrapper = styled.div`
    .about{
        width:100%;
        background:#f0f0f0f0;
        
        .about-text-container{
            /* max-width:860px; */
            width:100%;
            margin:auto;
            .about-text-header{
                font-size:1.5em;
                text-align:center;
                font-family:'Yeseva One';
                font-size:3em;
                font-weight:400;
                text-align:center;
                color:#5fd5f3;
                padding: 4rem;
                padding-top:6rem;
            }
            .about-text-paragraph{
                font-family: 'Oswald';
                width:50vw;
                margin:auto;
            }
            
        }

        .bread-images-bottom{
            display:flex;
            width:100%;
            justify-content: space-between;
            .bread-images-basket{
                width:30%;
                transform: scaleX(-1);
            }
            .bread-images-ingredients{
                width:65%;
            }
        }
    }

`;

const About = () => (
    <>
        <StyledWrapper>
            <div className="about" id="about">
                <div className="about-text-container">
                    <h2 className="about-text-header">About us</h2>
                    <p className="about-text-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in vestibulum est. Pellentesque a neque ex. Sed sagittis mauris eget congue pretium. Aenean fermentum suscipit leo a pellentesque. Nullam egestas nunc quis faucibus accumsan. Aliquam gravida et sapien eu ultrices. Proin suscipit turpis sit amet nisl placerat, volutpat semper mauris pretium.
                        <br/>
                        <br/>
                        Phasellus ultrices vehicula ornare. Mauris consectetur, quam eu bibendum scelerisque, mi sem eleifend arcu, et lacinia ex est ut sem. In iaculis congue diam elementum dictum. Aenean non hendrerit nisi. Vivamus nulla purus, feugiat non ultricies id, auctor sit amet augue. In ac quam a nunc sodales commodo in ut lacus. Maecenas in ante ut eros convallis bibendum. Quisque in enim diam. Pellentesque euismod augue tristique arcu feugiat luctus. Praesent nec interdum tellus. Sed ut sapien in mauris lacinia ultrices.
                    </p>
                </div>
                <div className="bread-images-bottom">
                    <img className="bread-images-basket" src={bread1} alt="React Logo" />
                    <img className="bread-images-ingredients" src={bread2} alt="React Logo" />
                </div>
            </div>
            
        </StyledWrapper>
    </>
)

export default About;