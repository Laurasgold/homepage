import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Wrapper, below } from "../styles"
import logo from "../images/stone_white_logo.png"
import Icon from "../components/Icon"

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

const socialLinks = [
  {
    href: "",
    icon: "facebook",
  },
  {
    href: "",
    icon: "instagram",
  },
  {
    href: "",
    icon: "twitter",
  },
]

export default function Footer() {
  return (
    <FooterWrapper className="center-text black-bg white-text">
      <Wrapper>
        <div className="top-padding">
          <nav>
            <ul>
              {links.map(({ to, text }) => (
                <li key={to}>
                  <Link to={to}>{text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <img src={logo} alt="The Stone logo" className="logo" />
          <div className="social">
            <ul>
              {socialLinks.map(({ href, icon }) => (
                <li key={href}>
                  <a href={href} target="_blank">
                    <Icon name={icon} color="var(--white)" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="copyright">
            &copy; {new Date().getFullYear()} The Stone
          </p>
        </div>
      </Wrapper>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    justify-content: center;
    li {
      margin: 1rem;
      a {
        color: var(--lightesterGray);
        font-weight: bold;
        &:hover {
          color: var(--red);
        }
      }
    }
  }
  img {
    padding: 1rem;
    height: 115px;
    width: 184px;
    margin: auto;
  }
  .copyright {
    color: var(--lightGray);
  }
  .social {
    li {
      flex: 1;
      svg {
        width: 3rem;
        height: 3rem;
      }
    }
  }
  ${below.medium`
    img {
      height: calc(115px * 0.75);
      width: calc(184px * 0.75);
    }
  `}
`
