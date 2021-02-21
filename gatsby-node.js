const _ = require("lodash")
const path = require(`path`)
const { paginate } = require("gatsby-awesome-pagination")



exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } } }
        sort: { order: DESC, fields: publishedAt }
      ) {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
      allSanityCategory(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allSanityPost.edges || []
  const categories = result.data.allSanityCategory.edges || []

  posts.forEach((edge, index) => {
    const path = `/blog/${edge.node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: edge.node.slug.current,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    })
  })


  categories.forEach((edge, index) => {
    const path = `/blog/categoria/${edge.node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/category.js"),
      context: { slug: edge.node.slug.current },
    })
  })

}