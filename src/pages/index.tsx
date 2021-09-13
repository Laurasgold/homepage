import React from "react"
import { graphql, Link } from "gatsby"
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "../components/Button"
import { Wrapper, Grid } from "../styles"

import bibimbap from "../images/menu/bibimbap.jpg"
import cheodangSundubu from "../images/menu/cheodang-sundubu.jpg"
import dorsolBibimbap from "../images/menu/dorsol-bibimbap.jpg"
import dubuSalad from "../images/menu/dubu-salad.jpg"
import dwenjangSundubu from "../images/menu/dwenjang-sundubu.jpg"
import gopjangSundubu from "../images/menu/gopjang-sundubu.jpg"
import manduSundubu from "../images/menu/mandu-sundubu.jpg"
import nengkongKarlgugsu from "../images/menu/nengkong-kargugsu.jpg"
import seafoodSundubu from "../images/menu/seafood-sundubu-jungle.jpg"
import sundubu from "../images/menu/sundubu.jpg"

const IndexPage = ({ data, location }) => {
  if (!data) return null

  const {
    heroImg,
    // bibimbap,
    // cheodangSundubu,
    // dorsolBibimbap,
    // dubuSalad,
    // dwenjangSundubu,
    // gopjangSundubu,
    // manduSundubu,
    // nengkongKarlgugsu,
    // seafoodSundubu,
    // sundubu,
  } = data

  const images = [
    {
      image: bibimbap,
      alt: "",
    },
    {
      image: dorsolBibimbap,
      alt: "",
    },

    {
      image: manduSundubu,
      alt: "",
    },
    {
      image: dwenjangSundubu,
      alt: "",
    },
    {
      image: dubuSalad,
      alt: "",
    },
    {
      image: gopjangSundubu,
      alt: "",
    },

    {
      image: nengkongKarlgugsu,
      alt: "",
    },
    {
      image: seafoodSundubu,
      alt: "",
    },
    {
      image: sundubu,
      alt: "",
    },
    {
      image: cheodangSundubu,
      alt: "",
    },
  ]

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <BgImage image={getImage(heroImg)} alt="Sundubu">
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
      </BgImage>
      <div className="center-text white-text orange-bg padding">
        <h3 className="no-margins">Online Ordering Coming Soon!</h3>
      </div>
      <Wrapper>
        <Grid cols={[1, 1, 2]} className="container">
          <div className="margins">
            <h2 className="no-top-margin">What is Tofu?</h2>
            <p>
              Tofu is a protein made much in the same way cheese is made from
              milk — by condensing milk made from soybeans. The texture depends
              on how much water and natural coagulants are used. You can use
              tofu to replace meat, dairy, and eggs. Tofu will absorb the flavor
              of your other ingredients — whether they’re sweet, savory, or
              spicy — and has very little flavor on its own. Best of all, tofu
              is good for you. It’s packed with protein, and it is dairy free,
              gluten free, cholesterol free, and vegan!
            </p>
          </div>
          <div className="margins">
            <iframe
              width="547"
              height="328"
              src="https://www.youtube.com/embed/RhEB1sjSSf8"
              frameBorder="0"
              style={{ margin: "0 auto" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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
        <div>
          <Grid cols={[1, 1, 2]} className="container">
            {images.map(({ image, alt }) => (
              <img src={image} alt={alt} />
            ))}
          </Grid>
        </div>
      </Wrapper>
      {/* <div className="gray-bg">
        <Wrapper>
          <Grid cols={[1, 1, 2]} className="container">
            <div></div>
          </Grid>
        </Wrapper>
      </div> */}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    heroImg: file(relativePath: { eq: "soup.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    # Menu items
    # bibimbap: file(relativePath: { eq: "menu/bibimbap.jpg" }) {
    #   childImageSharp {
    #     gatsbyImageData
    #   }
    # }
    # cheodangSundubu: file(relativePath: { eq: "menu/cheodang-sundubu.jpg" }) {
    #   childImageSharp {
    #     gatsbyImageData
    #   }
    # }
    # dorsolBibimbap: file(relativePath: { eq: "menu/dorsol-bibimbap.jpg" }) {
    #   childImageSharp {
    #     gatsbyImageData
    #   }
    # }
    # dubuSalad: file(relativePath: { eq: "menu/dubu-salad.jpg" }) {
    #   childImageSharp {
    #     gatsbyImageData
    #   }
    # }
    # dwenjangSundubu: file(relativePath: { eq: "menu/dwenjang-sundubu.jpg" }) {
    #   childImageSharp {
    #     gatsbyImageData
    #   }
    # }
    # gopjangSundubu: file(relativePath: { eq: "menu/gopjang-sundubu.jpg" }) {
    #   childImageSharp {
    #     gatsbyImageData
    #   }
    # }
    # manduSundubu: file(relativePath: { eq: "menu/mandu-sundubu.jpg" }) {
    #   childImageSharp {
    #     gatsbyImageData
    #   }
    # }
    # nengkongKarlgugsu: file(
    #   relativePath: { eq: "menu/nengkong-kargugsu.jpg" }
    # ) {
    #   childImageSharp {
    #     gatsbyImageData
    #   }
    # }
    # seafoodSundubu: file(
    #   relativePath: { eq: "menu/seafood-sundubu-jungle.jpg" }
    # ) {
    #   childImageSharp {
    #     gatsbyImageData
    #   }
    # }
    # sundubu: file(relativePath: { eq: "menu/sundubu.jpg" }) {
    #   childImageSharp {
    #     gatsbyImageData
    #   }
    # }
  }
`
