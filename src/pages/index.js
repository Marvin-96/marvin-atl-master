import * as React from "react"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import PortfolioProject from "../components/portfolioProject"
import FrontSection from "../components/frontsection"
import "../styles/global.scss"
import Prefooter from "../components/prefooter"
import moi from "../images/marvinmensah.jpg"
import { graphql } from "gatsby"
import Link from "gatsby-link"

// markup
const IndexPage = ({data}) => {

  const posts = data.allMarkdownRemark.edges;


  return (
   
    <main>
      <Layout>

      <div class="screen" id="screenScrolling">
        <Navbar></Navbar>    
        <FrontSection> </FrontSection>
      </div>

      <section>
        <div className="content">
          <div className="presentation">
            <div className="pdp" data-scroll-class="appear">
              <img src={moi} alt="logo-img" />
            </div>
            <div className="presentation-txt" id="introTxt">
              <p className data-scroll data-scroll-speed={1}> Bonjour ! </p>  
              <p className data-scroll data-scroll-speed={2}>
               J'aime imaginer, créer et prototyper. 
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section-2" id="portfolio">
        <h2> Mon Portfolio</h2>

      </section>
      {posts.map(({node}) => (
        <section>
        <div className="content" key={ node.id} >
        <PortfolioProject  pImg={node.frontmatter.frontimage} pTitle={node.frontmatter.title} pLink={node.frontmatter.path}  /> 
        </div>
        </section>

      ) )}
     
      <section id="contact">
      <Prefooter ></Prefooter>
      </section>
     
      <Footer></Footer>
      
      </Layout>
     </main>

  )
}

export const pageQuery  = graphql`
query IndexQuery {
    
   
  allMarkdownRemark(sort: {fields: frontmatter___id, order: DESC}, filter: {frontmatter: {type: {eq: "projects-post"}}}) {
    edges {
      node {
        frontmatter {
          title
          path
          date
          role
          situation
          summary
          solution
          type
          frontimage
          id
          isPublished
        }
        excerpt
      }
    }
  }
}
`

export default IndexPage