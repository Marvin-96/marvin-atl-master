import * as React from "react"
import Layout from '../components/layout'
import Main from '../components/main'
import Footer from '../components/footer'
import CustomButton from '../components/customButton'
import MainArticlePreview from '../components/mainArticlePreview'
import '../styles/theblog.scss'
import '../styles/global.scss'
import Content from '../components/content'
import { graphql } from "gatsby"
import Link from "gatsby-link"
// markup




class theBlog extends React.Component {

  render(){
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/the_blog' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

 return (
      <main>
      <Layout>
        <Main>
         
        {posts.map(({ node }) => 
        
        { if(node.frontmatter.id == 1)

        return (
        <Content>
              
            <MainArticlePreview Atitle={node.frontmatter.title} 
                                Aimg={node.frontmatter.frontimage} 
                                alink={node.frontmatter.path} 
                                tag={node.frontmatter.role}
                                date={node.frontmatter.date}
                                />
        </Content>
        )
      }
    )}
        <Content>          
          <div className="LastPostsSection">


              <div  className="postsWrapper">
                {/* <h2> Les derniers Posts</h2> */}
                {posts.map(({ node }) => 
                
                { if(node.frontmatter.id != 1)

                  return (

                  <div className="postPrev"  key={node.id} >
                      <img className="img" src={node.frontmatter.frontimage} /> 
                        <h3> {node.frontmatter.title} </h3>
                        <div className="postSupElement">
                        <h5>{node.frontmatter.role}</h5>
                        <h5> - {node.frontmatter.date}</h5>
                  </div>
                    {/* <CustomButton path={node.frontmatter.path}> </CustomButton> */}
                    <Link className="customButton" to={node.frontmatter.path}> Lire la suite</Link>

              </div>
                 )})}

{/* 
<ul className="pagination"

        >
          {!isFirst && (
            <Link  to={prevPage} rel="prev">
              ← Page Precedante
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`/the_blog/${i === 0 ? '' : i + 1}`}
                style={{
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  background: i + 1 === currentPage ? 'var(--pimaryColor)' : '',
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Page Suivante
            </Link>
          )}
        </ul> */}
          </div>
          
          </div>

        </Content>

      
      
      </Main>
      </Layout>
     </main>

  )}  }


export default theBlog


export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: {frontmatter: {type: {eq: "blog-post"}}}
    ) {
      edges {
        node {
          excerpt
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
         
        }
      }
    }
  }
`

