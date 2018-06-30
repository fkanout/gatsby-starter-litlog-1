import React from 'react'
import Link from "gatsby-link"

const LitlogContentList = ({ type, data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>link</th>
          <th>title</th>
        </tr>
      </thead>
      <tbody>
        {data.allMarkdownRemark.edges.map(({ node }, index) =>
          <tr key={index}>
            <td>
            <Link to={node.fields.slug}>{node.fields.slug}</Link>
            </td>
            <td>
              {node.frontmatter.title}
            </td>
          </tr>
        )}
      </tbody>
    </table>
)}

export default LitlogContentList
export const allMarkdownFragment = graphql`
fragment AllMarkdownFragment on MarkdownRemarkConnection {
	totalCount
  edges {
    node {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
}`;
