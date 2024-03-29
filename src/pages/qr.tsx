import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper } from "../styles"
import { Menu } from "../components/Menu"

export default function MenuPage({ location }) {
  return (
    <Layout location={location}>
      <SEO title="Menu" pathname={location.pathname} />
      <Wrapper width="tight">
        <div className="bottom-padding">
          <Menu />
        </div>
        <div className="container center-text">
          <p className="small">
            Consuming raw or undercooked meats, poultry, seafood, shellfish or
            eggs may increase your risk of foodborne illness. <br />
            Caution: stone bowls may be very hot.
          </p>
          <Hr />
          <p>
            Made by{" "}
            <a href="https://purefunc.io" target="_blank">
              Pure Func
            </a>
          </p>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Hr = styled.hr`
  background: var(--lineColor);
  height: 1px;
  border: none;
`
