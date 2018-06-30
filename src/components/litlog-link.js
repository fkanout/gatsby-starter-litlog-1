import React from 'react'
import Link from 'gatsby-link'

const LitlogLink = ({ to, children }) => {
  return (
    <Link to={to}>
      {children}
    </Link>
)}

export default LitlogLink
