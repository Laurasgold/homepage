import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper, Cols } from "../styles"
import logo from "../images/stone_white_logo.png"

export default function AboutPage({ location }) {
  return (
    <Layout location={location}>
      <SEO title="About" pathname={location.pathname} />
      <Wrapper>
        <div className="container">
          <Cols css="grid-gap: 6rem;">
            <section>
              <h1>The Stone Tofu Family</h1>
              <p className="large">
                We are a Korean family who are realizing our dream to share our
                authentic Korean cuisine. Our goal is to give customers a
                comfortable setting to experience traditional, healthy, and well
                rounded meals that will make your bellies and hearts full.
              </p>
              <p className="large">
                We prepare our side dishes seasonally depending on what is fresh
                in market. We come in early to prepare and make tofu daily to
                serve fresh. We care for our staff and customers like family,
                and wish to give you an experience filled with love and care.
              </p>
            </section>
            <aside>
              <Img src={logo} alt="The Stone logo" className="logo" />
            </aside>
          </Cols>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Img = styled.img`
  background: var(--black);
  padding: 10px;
  margin: var(--margins);
`
