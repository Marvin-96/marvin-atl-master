import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layout"
import Main from "../components/main"
import Content from '../components/content'
import { graphql } from "gatsby"



export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        id
        path
        title
        date
        summary
        frontimage
        type
        isPublished
        role
        situation
        solution
      }
    }
  }
`

export default function Template({data}) {
    const post = data.markdownRemark
    return (
        <Layout>
          <Main>
        <Content>
        <div className="post">
    
            
             <div> 
               <Link to="/the_blog" className="customButton"> retour </Link>
            </div> 
            <div className="postInfo">
              
                  <h2 className="post-datetime"> {post.frontmatter.date}</h2>
            </div>

                <img className="img-fluid" alt={post.frontmatter.title} src={post.frontmatter.frontimage}></img>
                <h1> {post.frontmatter.title}</h1>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
            
            
        
        
        </div>
        </Content>
        </Main>
        </Layout>
    )
}
