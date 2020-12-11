import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper } from "../styles"
import { Button } from "../components/Button"

export default function AboutPage({ location }) {
  return (
    <Layout location={location}>
      <SEO title="Thank You" pathname={location.pathname} />
      <Wrapper>
        <div className="container">
          <h1>Thank you!</h1>
          <p className="largest">We will get back to you soon.</p>
          <Button as={Link} to="/">
            Go Home
          </Button>
        </div>
      </Wrapper>
    </Layout>
  )
}
