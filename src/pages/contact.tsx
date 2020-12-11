import React, { useState } from "react"
import styled from "styled-components"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper, Cols } from "../styles"
import { Button } from "../components/Button"
import Icon from "../components/Icon"

// const socialLinks = [
//   {
//     href: "",
//     icon: "facebook",
//   },
//   {
//     href: "",
//     icon: "instagram",
//   },
//   {
//     href: "",
//     icon: "twitter",
//   },
// ]

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function ContactPage({ location, data }) {
  const [state, setState] = useState({})
  const [error, setError] = useState("")

  const handleChange = e => {
    if (error) {
      setError("")
    }
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(result => {
        console.log("result", result)
        navigate(form.getAttribute("action"))
      })
      .catch(e => {
        console.log("e", e)
        setError("Form could not be submitted. Please try again later.")
      })
  }
  return (
    <Layout location={location}>
      {/* <HeroImg fluid={data.heroImg.childImageSharp.fluid} /> */}
      <Wrapper>
        <div className="container">
          <Cols css="grid-gap: 6rem;">
            <div className="mobile-reverse-item ">
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out:
                  <input name="bot-field" onChange={handleChange} />
                </label>
              </p>
              <form
                name="contact"
                method="POST"
                action="/thank-you/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="margins"
              >
                <label>
                  Name*
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Email*
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Phone
                  <input type="text" name="phone" onChange={handleChange} />
                </label>
                <label>
                  Message*
                  <textarea
                    name="message"
                    required
                    onChange={handleChange}
                  ></textarea>
                </label>
                {error && <p className="red-text small">{error}</p>}
                <Button type="submit" color="orange">
                  Send
                </Button>
              </form>
            </div>
            <div>
              <h2 className="black-text">Let's Connect</h2>
              {/* <Social>
                <ul>
                  {socialLinks.map(({ href, icon }) => (
                    <li key={href}>
                      <a href={href} target="_blank">
                        <Icon name={icon} color="var(--darkerGray)" />
                      </a>
                    </li>
                  ))}
                </ul>
              </Social> */}
              <div>
                <div
                  style={{
                    margin: "2rem 1rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Icon name="phone" />
                  <p style={{ margin: "0 0 0 2rem" }}>(480) 361-0523</p>
                </div>
                <div
                  style={{
                    margin: "2rem 1rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Icon name="gps" />
                  <p style={{ margin: "0 0 0 2rem" }}>
                    1870 W. Main St.
                    <br />
                    Mesa, AZ 85202
                  </p>
                </div>
              </div>
            </div>
          </Cols>
        </div>
      </Wrapper>
      <SEO title="Contact" pathname={location.pathname} />
    </Layout>
  )
}

const Social = styled.div`
  ul {
    display: flex;
    li {
      margin: 1rem;
      svg {
        width: 3rem;
        height: 3rem;
        &:hover * {
          transition: 0.3s ease all;
          fill: var(--red);
        }
      }
    }
  }
`

const HeroImg = styled(Img)`
  max-height: 30rem;
`

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "stove.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
