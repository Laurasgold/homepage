import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { below } from "../styles"
import Nav from "./Nav"
import MobileMenu from "./MobileMenu"
import { useScrollPosition } from "../hooks"
import logo from "../images/stone_white_logo.png"

const links = [
  {
    to: "/menu/",
    text: "Menu",
  },
  {
    to: "/about/",
    text: "About",
  },
  {
    to: "/contact/",
    text: "Contact",
  },
]

const Header = () => {
  return (
    <HeaderWrapper>
      <InnerHeader>
        <h1 className="no-margins logo">
          <Link to="/" aria-label="Home page">
            <img src={logo} alt="The Stone logo" className="logo" />
          </Link>
        </h1>
        <div className="nav-wrapper">
          <MobileMenu links={links} />
          <Nav links={links} />
        </div>
      </InnerHeader>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background: var(--black);
  top: 0;
  width: 100%;
  height: var(--headerHeight);
  z-index: var(--headerLevel);
  position: fixed;
  box-shadow: var(--elevation-2);
`

const InnerHeader = styled.div`
  position: relative;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--basePadding);
  max-width: 1146px;
  margin: 0 auto;
  display: flex;
  height: 100%;
  transition: all ease-out 0.5s;
  .logo {
    flex-shrink: 1;
    height: 115px;
    width: 184px;
    a {
      display: flex;
      align-items: center;
      background: none;
      img {
        padding: 1rem;
      }
    }
  }
  ${below.medium`
    .logo {
      height: calc(115px * 0.65);
      width: calc(184px * 0.65);
    }
  `}
`
