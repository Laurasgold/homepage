import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Icon from "./Icon"

type Props = {
  title?: string
  children: JSX.Element
  subtitle?: string
  hasBorder?: boolean
  hasPadding?: boolean
  style?: any
}

export function Accordion({
  title = "",
  subtitle = "",
  hasBorder = true,
  hasPadding = true,
  style = {},
  children,
}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const variants = {
    expanded: () => ({
      height: "auto",
      opacity: 1,
    }),
    collapsed: () => ({
      height: 0,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  }

  return (
    <AccordionWrapper
      hasPadding={hasPadding}
      hasBorder={hasBorder}
      hasTitle={!!title || !!subtitle}
      className="accordion-wrapper"
      style={style}
    >
      <div className="accordion" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {title && <h3 className="h6">{title}</h3>}
        {subtitle && <h6>{subtitle}</h6>}

        <Icon
          name="caret"
          style={{
            transform: isMenuOpen && "rotate(-180deg)",
            transition: "var(--transitionSpeed) ease-in-out transform",
            minWidth: "14px",
          }}
        />
      </div>
      <motion.div
        initial={isMenuOpen ? "expanded" : "collapsed"}
        animate={isMenuOpen ? "expanded" : "collapsed"}
        variants={variants}
      >
        {children}
      </motion.div>
    </AccordionWrapper>
  )
}

const AccordionWrapper = styled.div<{
  hasTitle?: boolean
  hasBorder?: boolean
  hasPadding?: boolean
}>`
  border-radius: var(--inputRadius);
  ${({ hasBorder }) =>
    hasBorder &&
    `
  border: 1px solid var(--lineColor);
  
  `}
  margin: var(--smallBaseMargin) 0 0;
  .accordion {
    display: flex;
    justify-content: ${({ hasTitle }) =>
      hasTitle ? "space-between" : "center"};
    align-items: center;
    overflow: hidden;
    ${({ hasPadding }) =>
      hasPadding &&
      `
    padding: var(--cardPadding);
  
  `}
    cursor: pointer;
    margin: 0;

    h3 {
      margin: 0;
      color: var(--black);
    }
    h6 {
      margin: 0;
    }
  }
  div {
    overflow: hidden;
  }
`
