import React from "react"
import Layout from "../components/layout"
import { Wrapper } from "../styles"
import SEO from "../components/seo"

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <Wrapper>
      <div className="container">
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
