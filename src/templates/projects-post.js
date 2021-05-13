import React from 'react'
import Layout from "../components/layout"
import Main from "../components/main"
import "../styles/global.scss"
import "../styles/projectview.scss"


import { graphql } from "gatsby"



export const postQuery = graphql`
  query PostIndexByPath($path: String!) {
    markdownRemark(
      frontmatter: { path: { eq: $path } }) {
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
    
    
    

        <div className="content">
            <h1 className="title p-project"> {post.frontmatter.title} </h1>


            <img className="img-pg" src={post.frontmatter.frontimage} alt="sweatmagazine.png"></img>
            <p className="p-role"> {post.frontmatter.role} </p>
            
            <div className="text-content txt-project">
                <div className="">
                    <h2> Situation</h2>
                    <p className="">  
                        {post.frontmatter.situation}
                    </p>
                </div>

                <div className="">
                        <h2> Réponse </h2>
                        <p className="">  
                        {post.frontmatter.solution}
                        </p>
                </div>
            </div>

           
            <div className="project-content" dangerouslySetInnerHTML={{ __html: post.html }} />

        </div>


    
        </Main>
  </Layout>
)
}