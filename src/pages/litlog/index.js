import React from "react"
import LitlogContentList from "../../components/litlog-content-list"

export default ({ data }) => {
  const types = ["requests", "tasks", "changes"];
  return (
    <div>
      {types.map((item, i) => <LitlogContentList data={data} type={item} key={i} />)}
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
