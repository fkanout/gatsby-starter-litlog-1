import React from 'react'

const LwdContentList = ({ type, data }) => {
  return (
    <span>
      Hello, World!
    </span>
)}

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
