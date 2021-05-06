import * as React from "react"
import Layout from '../components/layout'
import Main from '../components/main'
import Footer from '../components/footer'

import MainArticlePreview from '../components/mainArticlePreview'
import '../styles/theblog.scss'
import '../styles/global.scss'
import Content from '../components/content'
import { graphql } from "gatsby"
import Link from "gatsby-link"
// markup




const theBlog = ({data}) => {

 return (


    
   <main>
      <Layout>
        <Main>
         

        <Content>       
            <MainArticlePreview>  </MainArticlePreview>       
        </Content>

        <Content>          
          <div className="LastPostsSection">


              <div  className="postsWrapper">
              {/* <h2> Les derniers Posts</h2> */}
              {data.allMarkdownRemark.edges.map((post) => (  
                <div className="postPrev"  key={post.node.id} >
                 <img className="img" src={post.node.frontmatter.frontimage} /> 
                  <h3> {post.node.frontmatter.title} </h3>
                  <div className="postSupElement">
                  <h5>{post.node.frontmatter.role}</h5>
                  <h5> - {post.node.frontmatter.date}</h5>
                  </div>
                  <Link className="customButton" to={post.node.frontmatter.path}> Lire la suite</Link>

              </div>
                ) )}
          </div>
          </div>
        </Content>

      
      
      </Main>
      </Layout>
     </main>

  )}


export const pageQuery  = graphql` 
query BlogIndexQuery  {
  allMarkdownRemark(
    sort: {fields: frontmatter___id, order: DESC}
  ) {
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
    pageInfo {
      currentPage
      hasNextPage
      hasPreviousPage
      itemCount
      pageCount
      perPage
    }
  }
}

`

export default theBlog
