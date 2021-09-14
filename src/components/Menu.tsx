import React, { Key, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Modal from "./Modal"
import Icon from "./Icon"
// import { MenuKey, keyItems } from "./MenuKey"
import { Accordion } from "./Accordion"

type Item = {
  id: string
  name: string
  name_kr?: string
  description?: string
  description_kr?: string
  price: string
  image?: string
}

type MenuItem = {
  category_image?: string
  category_title: string
  category_title_kr?: string
  category_note?: string
  category_price?: string
  items?: Item[]
}

export function Menu() {
  const data = useStaticQuery(graphql`
    query {
      heroImg: file(relativePath: { eq: "stone-img.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      # Menu items
      bibimbap: file(relativePath: { eq: "menu/bibimbap.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }

      grilledIntestines: file(
        relativePath: { eq: "menu/grilled-intestines.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }

      crab: file(relativePath: { eq: "menu/crab.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }

      yellowPollock: file(relativePath: { eq: "menu/yellow-pollock.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }

      beefBibimbap: file(
        relativePath: { eq: "menu/beef-bulgulgi-bibimbap.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }

      porkBibimbap: file(
        relativePath: { eq: "menu/spicy-pork-bibimbap.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }

      porkTraditional: file(
        relativePath: { eq: "menu/spicy-pork-traditional.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      cheodangSundubu: file(relativePath: { eq: "menu/cheodang-sundubu.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      dorsolBibimbap: file(relativePath: { eq: "menu/dorsol-bibimbap.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      dubuSalad: file(relativePath: { eq: "menu/dubu-salad.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      dwenjangSundubu: file(relativePath: { eq: "menu/dwenjang-sundubu.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      gopjangSundubu: file(relativePath: { eq: "menu/gopjang-sundubu.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      manduSundubu: file(relativePath: { eq: "menu/mandu-sundubu.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      nengkongKarlgugsu: file(
        relativePath: { eq: "menu/nengkong-kargugsu.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      seafoodSundubu: file(
        relativePath: { eq: "menu/seafood-sundubu-jungle.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      sundubu: file(relativePath: { eq: "menu/sundubu.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      porkKimchiTofu: file(
        relativePath: { eq: "menu/pork-belly-kimchi-tofu.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      # Categories
      allComboCsv {
        nodes {
          category_image
          category_note
          category_title
          category_title_kr
          description
          description_kr
          id
          image
          name_kr
          name
          price
        }
      }
      allNoodlesCsv {
        nodes {
          category_image
          category_note
          category_title
          category_title_kr
          description
          description_kr
          id
          image
          name
          name_kr
          price
        }
      }
      allSpecialTraditionalCsv {
        nodes {
          category_image
          category_note
          category_title
          category_title_kr
          description
          description_kr
          id
          image
          name
          name_kr
          price
        }
      }
      allStoneBibimBapCsv {
        nodes {
          category_image
          category_note
          category_title
          category_title_kr
          description
          description_kr
          id
          image
          name
          name_kr
          price
        }
      }
      allTofuHotPotCsv {
        nodes {
          category_image
          category_note
          category_title
          category_title_kr
          description
          description_kr
          id
          image
          name
          name_kr
          price
        }
      }
      allTofuSoupCsv {
        nodes {
          category_image
          category_note
          category_title
          category_title_kr
          description
          description_kr
          id
          image
          name_kr
          name
          price
        }
      }
      allVegetarianCsv {
        nodes {
          category_image
          category_note
          category_title
          category_title_kr
          description
          description_kr
          id
          image
          name
          name_kr
          price
        }
      }
      allAppetizerCsv {
        nodes {
          category_image
          category_note
          category_title
          category_title_kr
          description
          description_kr
          id
          image
          name
          name_kr
          price
        }
      }
      allLiquorCsv {
        nodes {
          category_image
          category_price
          category_title
          category_title_kr
          id
          image
          name
          price
          name_kr
        }
      }
      allPepsiProductsCsv {
        nodes {
          category_image
          category_price
          category_title
          category_title_kr
          image
          id
          name_kr
          name
          price
        }
      }
    }
  `)

  const foodCategories: MenuItem[] = [
    {
      category_image: data.allAppetizerCsv.nodes[0]?.category_image,
      category_note: data.allAppetizerCsv.nodes[0]?.category_note,
      category_title: data.allAppetizerCsv.nodes[0]?.category_title,
      category_title_kr: data.allAppetizerCsv.nodes[0]?.category_title_kr,
      items: data.allAppetizerCsv.nodes,
    },
    {
      category_image: data.allTofuSoupCsv.nodes[0]?.category_image,
      category_note: data.allTofuSoupCsv.nodes[0]?.category_note,
      category_title: data.allTofuSoupCsv.nodes[0]?.category_title,
      category_title_kr: data.allTofuSoupCsv.nodes[0]?.category_title_kr,
      items: data.allTofuSoupCsv.nodes,
    },
    {
      category_image: data.allSpecialTraditionalCsv.nodes[0]?.category_image,
      category_title: data.allSpecialTraditionalCsv.nodes[0]?.category_title,
      category_note: data.allSpecialTraditionalCsv.nodes[0]?.category_note,
      category_title_kr:
        data.allSpecialTraditionalCsv.nodes[0]?.category_title_kr,
      items: data.allSpecialTraditionalCsv.nodes,
    },
    {
      category_image: data.allComboCsv.nodes[0]?.category_image,
      category_note: data.allComboCsv.nodes[0]?.category_note,
      category_title: data.allComboCsv.nodes[0]?.category_title,
      category_title_kr: data.allComboCsv.nodes[0]?.category_title_kr,
      items: data.allComboCsv.nodes,
    },
    {
      category_image: data.allStoneBibimBapCsv.nodes[0]?.category_image,
      category_note: data.allStoneBibimBapCsv.nodes[0]?.category_note,
      category_title: data.allStoneBibimBapCsv.nodes[0]?.category_title,
      category_title_kr: data.allStoneBibimBapCsv.nodes[0]?.category_title_kr,
      items: data.allStoneBibimBapCsv.nodes,
    },
    {
      category_image: data.allTofuHotPotCsv.nodes[0]?.category_image,
      category_note: data.allTofuHotPotCsv.nodes[0]?.category_note,
      category_title: data.allTofuHotPotCsv.nodes[0]?.category_title,
      category_title_kr: data.allTofuHotPotCsv.nodes[0]?.category_title_kr,
      items: data.allTofuHotPotCsv.nodes,
    },
    {
      category_image: data.allNoodlesCsv.nodes[0]?.category_image,
      category_note: data.allNoodlesCsv.nodes[0]?.category_note,
      category_title: data.allNoodlesCsv.nodes[0]?.category_title,
      category_title_kr: data.allNoodlesCsv.nodes[0]?.category_title_kr,
      items: data.allNoodlesCsv.nodes,
    },
    {
      category_image: data.allVegetarianCsv.nodes[0]?.category_image,
      category_note: data.allVegetarianCsv.nodes[0]?.category_note,
      category_title: data.allVegetarianCsv.nodes[0]?.category_title,
      category_title_kr: data.allVegetarianCsv.nodes[0]?.category_title_kr,
      items: data.allVegetarianCsv.nodes,
    },
  ]

  const beverageandDeserts: MenuItem[] = [
    {
      category_title: data.allPepsiProductsCsv.nodes[0]?.category_title,
      category_title_kr: data.allPepsiProductsCsv.nodes[0]?.category_title_kr,
      category_price: data.allPepsiProductsCsv.nodes[0]?.category_price,
      category_image: data.allPepsiProductsCsv.nodes[0]?.category_image,
      items: data.allPepsiProductsCsv.nodes,
    },
    {
      category_title: data.allLiquorCsv.nodes[0]?.category_title,
      category_title_kr: data.allLiquorCsv.nodes[0]?.category_title_kr,
      category_price: data.allLiquorCsv.nodes[0]?.category_price,
      category_image: data.allLiquorCsv.nodes[0]?.category_image,
      items: data.allLiquorCsv.nodes,
    },
  ]

  const [modalImage, setModalImage] = useState("")

  return (
    <>
      <GatsbyImage image={getImage(data.heroImg)} alt="The Stone Tofu" />
      <MenuList className="margins">
        {foodCategories.map((food, i) => (
          <Accordion
            title={`${i + 1}. ${food.category_title} ${
              food.category_title_kr && `(${food.category_title_kr})`
            }`}
          >
            <li className="food-category" key={food.category_title}>
              {food.category_image && (
                <GatsbyImage
                  image={
                    data[food.category_image].childImageSharp.gatsbyImageData
                  }
                  alt={food.category_title}
                />
              )}

              {food.category_note && (
                <p className="note">- {food.category_note}</p>
              )}
              <ul>
                {food.items.map(item => (
                  <li key={item.id} className="food-item">
                    <div>
                      <h5 className="food-name">
                        {item.id && item.id + "."}{" "}
                        {item.name_kr && item.name_kr + ":"} {item.name}{" "}
                        {item.image && (
                          <Icon
                            name="image"
                            onClick={
                              item.image
                                ? () => setModalImage(item.image)
                                : null
                            }
                            color="var(--red)"
                            style={{
                              margin: "0 0 -2px var(--halfMargin)",
                              cursor: "pointer",
                            }}
                          />
                        )}
                      </h5>
                      <p>{item.description}</p>
                    </div>
                    <h5 className="price">${item.price}</h5>
                  </li>
                ))}
              </ul>
            </li>
          </Accordion>
        ))}
        <Accordion title={`${foodCategories.length + 1}. Beverages`}>
          <div>
            {beverageandDeserts.map(beverage => (
              <li className="food-category" key={beverage.category_title}>
                <h5 className="beverage-title">
                  {beverage.category_title}{" "}
                  {beverage.category_title_kr &&
                    `(${beverage.category_title_kr})`}
                  {beverage?.category_price && ` - $${beverage.category_price}`}
                </h5>
                {beverage.items && (
                  <ul>
                    {beverage.items.map(item => (
                      <li key={item.id} className="beverage-item">
                        <p className="beverage-name">
                          {/* {item.id && item.id + "."}{" "} */}
                          {item.name_kr && item.name_kr + ":"} {item.name}
                        </p>
                        {item.price && <h5 className="price">${item.price}</h5>}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </div>
        </Accordion>
        {/* <MenuKey /> */}
      </MenuList>
      <Modal isActive={!!modalImage} closeAction={() => setModalImage("")}>
        {modalImage && (
          <GatsbyImage
            alt="Menu Item"
            image={data[modalImage].childImageSharp.gatsbyImageData}
          />
        )}
      </Modal>
    </>
  )
}

const MenuList = styled.ol`
  list-style: none;
  margin-left: 0;
  .food-title {
    color: var(--black);
    margin-bottom: 0;
  }
  .food-category {
    padding: var(--cardPadding);
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
    margin: 0;
    .food-name {
      color: var(--black);
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
    color: var(--black);
    margin: 4rem 1rem 1rem 0;
  }
  .beverage-item {
    .beverage-name,
    .price {
      margin: 1.5rem 0;
    }
    .price {
      color: var(--black);
    }
  }
`
