import React from 'react'
import Link from 'gatsby-link'

const LitlogLink = ({ to, children }) => {
  const goto = `/litlog${to}`;
  return (
    <Link to={goto}>
      {children}
    </Link>
)}

export default LitlogLink
