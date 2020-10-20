import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper } from "../styles"
import { beverageandDeserts, foods } from "../data/menu"

export default function MenuPage({ location }) {
  return (
    <Layout location={location}>
      <SEO title="Menu" pathname={location.pathname} />
      <Wrapper width="tight">
        <div className="container">
          <h1>Menu</h1>
          <MenuList>
            {foods.map((food, i) => (
              <li className="food-category" key={food.title}>
                <h3 className="food-title">
                  {i + 1}. {food.title} {food.titleKr && `(${food.titleKr})`}
                </h3>
                {food.note && <p className="note">*{food.note}</p>}
                <ul>
                  {food.items.map(item => (
                    <li key={item.id} className="food-item">
                      <div>
                        <h5 className="food-name">
                          {item.id && item.id + "."}{" "}
                          {item.nameKr && item.nameKr + ":"} {item.name}
                        </h5>
                        <p style={{ color: "var(--lightGray" }}>
                          {item.description}
                        </p>
                      </div>
                      <h5 className="price">${item.price}</h5>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <h3 className="food-title">{foods.length + 1}. Beverages</h3>
            {beverageandDeserts.map(food => (
              <li className="food-category" key={food.title}>
                <h5 className="beverage-title">
                  {food.title} {food.titleKr && `(${food.titleKr})`}
                </h5>
                {food.items && (
                  <ul>
                    {food.items.map(item => (
                      <li key={item.id} className="beverage-item">
                        <p className="beverage-name">
                          {item.id && item.id + "."}{" "}
                          {item.nameKr && item.nameKr + ":"} {item.name}
                        </p>
                        <h5 className="price">${item.price}</h5>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </MenuList>
        </div>
      </Wrapper>
    </Layout>
  )
}

const MenuList = styled.ol`
  list-style: none;
  margin-left: 0;
  .food-title {
    color: var(--black);
    margin-bottom: 0;
  }
  .note {
    font-size: small;
    font-style: italic;
    margin: 0.5rem 0 0;
  }
  .food-item,
  .beverage-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
    .food-name {
      margin-bottom: 0.5rem;
    }
    .price {
      margin-left: 2rem;
      color: var(--black);
    }
    & + & {
      margin-left: 1rem;
    }

    p {
      margin: 0 0 0 0.5rem;
    }
  }
  .beverage-title {
    margin: 4rem 1rem 1rem 0;
  }
  .beverage-item {
    .beverage-name,
    .price {
      margin: 1.5rem 0;
      color: var(--black);
    }
  }
`
