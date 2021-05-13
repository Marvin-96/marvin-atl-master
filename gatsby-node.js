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
          
        }
      }
    }
    
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
 // Create Templates pages
 const posts = res.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`./src/templates/${node.frontmatter.type}.js`), 
      })
    })

  // Create blog-list pages

  const postsPerPage = 4
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/the_blog` : `/the_blog/${i + 1}`,
      component: path.resolve("./src/pages/the_blog.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })



})

}