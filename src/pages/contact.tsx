import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper } from "../styles"

export default function ContactPage({ location }) {
  return (
    <Layout location={location}>
      <Wrapper>
        <div className="container">
          <h1>contact</h1>
        </div>
      </Wrapper>
      <SEO title="Contact" pathname={location.pathname} />
    </Layout>
  )
}
