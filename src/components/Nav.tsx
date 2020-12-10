import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { below } from "../styles"
import { Button } from "./Button"

type LinkType = {
  to: string
  text: string
}

type Props = {
  links: LinkType[]
}

const Nav = ({ links }: Props) => (
  <NavBar>
    <ul>
      {links.map(({ to, text }) => (
        <li key={text}>
          <Link to={to} className="nav-link" aria-label={text}>
            {text}
          </Link>
        </li>
      ))}
      <li>
        <Button size="small">Order Now</Button>
      </li>
    </ul>
  </NavBar>
)

export default Nav

const NavBar = styled.nav`
  li {
    font-family: var(--headingFont);
    display: inline-block;
    font-weight: 700;
    margin-left: 4rem;
    a {
      color: var(--white);
      &:hover {
        color: var(--red);
      }
    }
  }
  ${below.medium`
    display: none;
  `}
`
