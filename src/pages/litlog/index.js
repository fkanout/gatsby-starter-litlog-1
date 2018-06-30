import React from "react"
import LitlogContentList from "../../components/litlog-content-list"

export default ({ data }) => {
  return (
    <div>
      <LitlogContentList data={data}></LitlogContentList>
    </div>
  );
};

export const query = graphql`
query LitlogIndexQuery {
  allMarkdownRemark(sort: {fields: [fileAbsolutePath]}) {
    ...AllMarkdownFragment
  }
}
`;
