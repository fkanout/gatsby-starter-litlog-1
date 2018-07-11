/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const site = process.env.LITLOG_SITE;

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: `${slug}`,
    })
  }
};

exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators;
  return new Promise(resolve => {
    page.context = {
      "siteRe": `/src\/pages\/litlog\/sites\/${site}/`
    };
    resolve();
  });
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const litlogPageTemplate = path.resolve(`./src/templates/litlog-page.js`);
    const contentPostTemplate = path.resolve(`./src/templates/litlog-content-post.js`);
    const contentPageTemplate = path.resolve(`./src/templates/litlog-content-page.js`);
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              filter: { id: { regex: "/content\/pages/|content\/posts/|src\/pages\/litlog/" } }
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        const items = result.data.allMarkdownRemark.edges;
        // Create litlog pages
        const siteRe = new RegExp(`/src\/pages\/litlog\/sites\/${site}/`);
        const litlogPages = items.filter(item => siteRe.test(item.node.id));
        litlogPages.forEach(({ node }) => {
          const slug = node.fields.slug;

          createPage({
            path: slug,
            component: litlogPageTemplate,
            context: {
              slug
            }
          });
        });
        // Create posts
        const posts = items.filter(item => /content\/posts/.test(item.node.id));
        posts.forEach(({ node }) => {
          const slug = node.fields.slug;

          createPage({
            path: slug,
            component: contentPostTemplate,
            context: {
              slug
            }
          });
        });
        // Create posts
        const pages = items.filter(item => /content\/pages/.test(item.node.id));
        pages.forEach(({ node }) => {
          const slug = node.fields.slug;

          createPage({
            path: slug,
            component: contentPageTemplate,
            context: {
              slug
            }
          });
        });

      })
    );
  });
};
