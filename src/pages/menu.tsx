import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper } from "../styles"

export default function MenuPage({ location }) {
  return (
    <Layout location={location}>
      <SEO title="Menu" pathname={location.pathname} />
      <Wrapper>
        <div className="container">
          <h1>menu</h1>
        </div>
      </Wrapper>
    </Layout>
  )
}
