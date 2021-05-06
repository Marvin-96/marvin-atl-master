const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve('src/templates/blog-post.js')

  const projectTemplate = path.resolve('src/templates/projects-post.js')


  return await graphql(`
    {
      allMarkdownRemark(sort: {fields: frontmatter___id, order: DESC}) {
        edges {
          node {
            html
            id
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
          totalCount
        }
      }
    }
    
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`./src/templates/${node.frontmatter.type}.js`), 
      })
    })
})

}