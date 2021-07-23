import React from "react"
import styled from "styled-components"
import Icon from "./Icon"

export const keyItems = {
  image: {
    name: "Has image (tap to view)",
    symbol: (
      <Icon
        name="image"
        color="var(--red)"
        style={{ margin: "0 0 -4px 2px" }}
      />
    ),
  },
  spicy: {
    name: "Spicy",
    symbol: "🌶️",
  },
  vegetarian: {
    name: "Vegetarian",
    symbol: "🌿",
  },
  vegan: {
    name: "Vegan",
    symbol: "Ⓥ",
  },
}

export function MenuKey() {
  return (
    <KeyWrapper>
      <h5 className="no-margins">Key</h5>
      {/* <hr /> */}
      <ul>
        {Object.entries(keyItems).map(([key, { name, symbol }]) => (
          <li key={key}>
            {symbol} : {name}
          </li>
        ))}
      </ul>
    </KeyWrapper>
  )
}

const KeyWrapper = styled.div`
  margin: var(--margins);
  hr {
    margin: var(--smallBaseMargin) 0;
  }
  ul {
    padding: 0 var(--cardPadding);
    border-radius: var(--inputRadius);
    border: 1px solid var(--darkGray);
    margin-top: var(--smallBaseMargin);
    li {
      font-size: var(--largeFontSize);
      margin: var(--smallBaseMargin) 0;
    }
  }
`
