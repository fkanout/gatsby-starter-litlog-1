import React from "react"
import Link from "gatsby-link"

const LwdContentList = ({ type, data }) => {
  if (data) {
    return (
      <table>
      <thead>
        <tr>
          <th>link</th>
          <th>title</th>
        </tr>
      </thead>
      <tbody>
        {data.allMarkdownRemark.edges.map(({ node }, index) => {
          const slug = node.fields.slug.toString();
          const fields = slug.split("/");
          if (fields.length > 3 && fields[3] == type)
          return (
            <tr key={index}>
              <td>
              <Link to={node.fields.slug}>{node.fields.slug}</Link>
              </td>
              <td>
                {node.frontmatter.title}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
    )
  } else {
    return <span>no data</span>
  }
}

export default LwdContentList

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
