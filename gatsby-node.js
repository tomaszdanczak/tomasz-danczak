const path = require('path')
const slugify = require("slugify")


// Absolute imports
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/components/templates/PostLayout/PostLayout.jsx`)

  const result = await graphql(`
    query {
      allDatoCmsBlogPost {
        nodes {
          id
          title
        }
      }
    }
  `)

  result.data.allDatoCmsBlogPost.nodes.forEach(post => {
    const slugifiedTitle = slugify(post.title, {
      lower: true
    })

    createPage({
      path: `articles/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: post.id
      },
    })
  })
}
