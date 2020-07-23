import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Offer from "../components/Offer"
import Products from "../components/Products"
import Footer from "../components/Footer"
import '../style/fonts.css'
const IndexPage = () => (

  
  <>
      <SEO title="Sweetie's bread" />
      <Hero/>
      <About/>
      <Offer/>
      <Products/>
      <Footer/>
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </>
)

export default IndexPage;
