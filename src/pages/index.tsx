import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper, Grid, Card } from "../styles"

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <HeroBackgroundImg fluid={data.heroImg.childImageSharp.fluid} alt="Sundubu">
      <Wrapper>
        <Grid className="container">
          <div>
            <h1>
              <span className="red-text">The Stone</span>{" "}
              <span className="white-text">Tofu House</span>
            </h1>
            <p
              className="largest white-text"
              style={{ fontSize: "var(--heading-three)" }}
            >
              Homemade Tofu Made Same Day
            </p>
          </div>
        </Grid>
      </Wrapper>
    </HeroBackgroundImg>
    <Wrapper>
      <div className="container"></div>
    </Wrapper>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const HeroBackgroundImg = styled(BackgroundImage)`
  height: 70vh;
`
