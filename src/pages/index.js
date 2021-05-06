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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio, architecto perspiciatis dolorum fugit, cupiditate enim non tenetur ad tempora vero quis fuga asperiores fugiat. Odit error mollitia doloremque aut!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section-2" id="portfolio">
        <h2> Mon Portfolio</h2>

      </section>
      {data.allMarkdownRemark.edges.map((post) => (  
      <section>
        <div className="content" key={post.node.id} >

       
          <div className="portfolioProjectwrapper" id="portfolioProject"  >
          <div className="projectImg" id="projectImg" data-scroll data-scroll-speed={1}>
            <Link to={post.node.frontmatter.path}>     
              <img src={post.node.frontmatter.frontimage} style={{backgroundColor: '#000'}} alt="Black-Mamba-website" /> 
            </Link>
          </div>
          <div className="projectDesc" data-scroll data-scroll-speed={-1} id="projectDesc">
            <Link to={post.node.frontmatter.path}>
              <h2 id="projectImg"> {post.node.frontmatter.title}  </h2>
              <li> Site Web </li>
              <li> Site Web </li>
              <li> Site Web </li>
            </Link>
          </div>
        </div>
               
          
          
        </div>
      </section> ) )}
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