import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper } from "../styles"
import { Menu } from "../components/Menu"

export default function MenuPage({ location }) {
  return (
    <Layout location={location}>
      <SEO title="Menu" pathname={location.pathname} />
      <Wrapper width="tight">
        <div className="container">
          <h1>Menu</h1>
          <Menu />
        </div>
      </Wrapper>
    </Layout>
  )
}
