import React from "react"
import { graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "../components/Button"
import { Wrapper, Grid, Card } from "../styles"

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <HeroBackgroundImg fluid={data.heroImg.childImageSharp.fluid} alt="Sundubu">
      <Wrapper>
        <Grid className="container" cols={[1, 1, 2]}>
          <div>
            <h1>
              <span className="red-text">THE STONE</span>
              <br />
              <span className="white-text">Tofu House</span>
            </h1>
            <p
              className="largest white-text"
              style={{ fontSize: "var(--heading-three)" }}
            >
              Homemade Tofu Made Same Day
            </p>
            <Button as={Link} to="/menu/">
              View Menu
            </Button>
          </div>
        </Grid>
      </Wrapper>
    </HeroBackgroundImg>
    <Wrapper>
      <Grid cols={[1, 1, 2]} className="container">
        <div className="margins">
          <h2 className="no-top-margin">What is Tofu?</h2>
          <p>
            Tofu is a protein made much in the same way cheese is made from milk
            — by condensing milk made from soybeans. The texture depends on how
            much water and natural coagulants are used. You can use tofu to
            replace meat, dairy, and eggs. Tofu will absorb the flavor of your
            other ingredients — whether they’re sweet, savory, or spicy — and
            has very little flavor on its own. Best of all, tofu is good for
            you. It’s packed with protein, and it is dairy free, gluten free,
            cholesterol free, and vegan!
          </p>
        </div>
        <div className="margins">
          <iframe
            width="547"
            height="328"
            src="https://www.youtube.com/embed/RhEB1sjSSf8"
            frameborder="0"
            style={{ margin: "0 auto" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Grid>
      <Grid cols={[1, 1, 3]} className="center-text bottom-padding">
        <div>
          <h2 className="orange-text">Traditional</h2>
          <p className="large">
            Our tofu house prides itself in preserving the art of tofu making
            that dates back thousands of years.
          </p>
        </div>
        <div>
          <h2 className="orange-text">Healthy</h2>
          <p className="large">
            A satisfying and nutritious plant based protein for all types of
            diets.
          </p>
        </div>
        <div>
          <h2 className="orange-text">Handmade</h2>
          <p className="large">
            Handmade tofu made same day. Fresh tofu made using traditional
            Korean methods for over 100 years.
          </p>
        </div>
      </Grid>
    </Wrapper>
    <div className="gray-bg">
      <Wrapper>
        <Grid cols={[1, 1, 2]} className="container">
          <div></div>
        </Grid>
      </Wrapper>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "soup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const HeroBackgroundImg = styled(BackgroundImage)`
  /* height: 70vh; */
`
