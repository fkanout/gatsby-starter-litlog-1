import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>fileAbsolutePath</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {data.allMarkdownRemark.edges.map(({ node }, index) =>
            <tr key={index}>
              <td>
                {node.fileAbsolutePath}
              </td>
              <td>
                {node.frontmatter.title}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [fileAbsolutePath] }) {
      totalCount
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            title
          }
        }
      }
    }
  }
`;