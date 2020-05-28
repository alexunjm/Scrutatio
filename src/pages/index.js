import React from "react"

import Layout from "../components/default/layout"
import SEO from "../components/default/seo"
import JSONAtBuildTime from "../components/default/json-at-buildtime"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Hi brothers</h2>
    <p>Welcome to your own dialogue with God.</p>
    <p>Now go write and listen some great words that Lord arouses within us.</p>
    <JSONAtBuildTime />
  </Layout>
)

export default IndexPage
