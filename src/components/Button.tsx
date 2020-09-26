import styled, { css } from "styled-components"
import { below } from "../styles"

const orangeButtonStyle = css`
  background: var(--orange);
  color: var(--white);
  border: 2px solid var(--orange);
  &:hover {
    background: var(--orange);
    border-color: var(--orange);
    color: var(--white);
    box-shadow: var(--elevation-2);
  }
`

const redButtonStyle = css`
  background: var(--primaryColor);
  color: var(--white);
  border: 2px solid var(--primaryColor);
  &:hover {
    background: var(--primaryColor);
    border-color: var(--primaryColor);
    color: var(--white);
    box-shadow: var(--elevation-2);
  }
`

export const Button = styled.button`
  display: inline-block;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  font-size: var(--largeFontSize);
  font-family: var(--headingFont);
  padding: 1.9rem 4.7rem;
  transition: 0.3s ease all;
  line-height: 1;

  &:disabled {
    background: var(--grey);
    cursor: auto;
  }
  & + & {
    margin-left: 20px;
  }
  ${({ size }: { size?: string }) =>
    size === "small" &&
    css`
      padding: 1.5rem 3.5rem;
      font-size: var(--baseFontSize);
    `};
  ${({ color }: { color?: string }) => {
    if (color === "orange") return orangeButtonStyle
    return redButtonStyle
  }};
  ${below.xSmall`
    display: block;
    padding: 1.3rem 2.3rem 1.2rem;
    & + & {
      margin: 20px 0 0 0;
    }
  `}
`
