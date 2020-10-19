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
      <Wrapper>
        <div className="container">
          <MenuList>
            {foods.map(food => (
              <li className="food-category" key={food.title}>
                <h3>
                  {food.title} {food.titleKr && `(${food.titleKr})`}
                </h3>
                {food.note && <span>*{food.note}</span>}
                <ul>
                  {food.items.map(item => (
                    <li key={item.id} className="food-item">
                      <div>
                        <h5>
                          {item.id}. {item.nameKr}: {item.name}
                        </h5>
                        <p>{item.description}</p>
                      </div>
                      <h5>${item.price}</h5>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </MenuList>
        </div>
      </Wrapper>
    </Layout>
  )
}

const MenuList = styled.ol`
  .food-item {
    display: flex;
    justify-content: space-between;
    /* margin-bottom: 0;
      & + & {
        margin-left: 1rem;
      }
    }
    p {
      margin: 0 0 0 1rem;
    } */
  }
`
