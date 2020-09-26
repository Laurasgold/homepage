import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper } from "../styles"

export default function AboutPage({ location }) {
  return (
    <Layout location={location}>
      <SEO title="About" pathname={location.pathname} />
      <Wrapper>
        <div className="container">
          <h1>about</h1>
        </div>
      </Wrapper>
    </Layout>
  )
}
