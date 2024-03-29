import React from "react";
import rehypeReact from "rehype-react";
import LitlogLink from "../components/litlog-link";

export default ({ data }) => {
  const post = data.markdownRemark;
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { 
      "litlog-link": LitlogLink
    },
  }).Compiler;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      {
        renderAst(post.htmlAst)
      }
    </div>
  );
};

export const query = graphql`
  query LitlogPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`;
