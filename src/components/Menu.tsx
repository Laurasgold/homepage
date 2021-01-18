import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Modal from "./Modal"
import Icon from "./Icon"

type Item = {
  id?: string
  name: string
  nameKr?: string
  description?: string
  descriptionKr?: string
  price: string
  image?: string
}

type MenuItem = {
  image?: string
  title: string
  titleKr?: string
  note?: string
  items?: Item[]
}

export function Menu() {
  const {
    heroImg,
    bibimbap,
    beefBibimbap,
    porkBibimbap,
    porkTraditional,
    dorsolBibimbap,
    dubuSalad,
    cheodangSundubu,
    dwenjangSundubu,
    gopjangSundubu,
    manduSundubu,
    seafoodSundubu,
    sundubu,
    nengkongKarlgugsu,
  } = useStaticQuery(graphql`
    query {
      heroImg: file(relativePath: { eq: "stone-img.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      # Menu items
      bibimbap: file(relativePath: { eq: "menu/bibimbap.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      beefBibimbap: file(
        relativePath: { eq: "menu/beef-bulgulgi-bibimbap.jpeg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      porkBibimbap: file(
        relativePath: { eq: "menu/spicy-pork-bibimbap.jpeg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      porkTraditional: file(
        relativePath: { eq: "menu/spicy-pork-traditional.jpeg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cheodangSundubu: file(relativePath: { eq: "menu/cheodang-sundubu.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dorsolBibimbap: file(relativePath: { eq: "menu/dorsol-bibimbap.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dubuSalad: file(relativePath: { eq: "menu/dubu-salad.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dwenjangSundubu: file(relativePath: { eq: "menu/dwenjang-sundubu.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      gopjangSundubu: file(relativePath: { eq: "menu/gopjang-sundubu.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      manduSundubu: file(relativePath: { eq: "menu/mandu-sundubu.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      nengkongKarlgugsu: file(
        relativePath: { eq: "menu/nengkong-kargugsu.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      seafoodSundubu: file(
        relativePath: { eq: "menu/seafood-sundubu-jungle.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sundubu: file(relativePath: { eq: "menu/sundubu.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const foods: MenuItem[] = [
    {
      image: heroImg.childImageSharp.fluid,
      title: "Appetizer",
      titleKr: "",
      note: "",
      items: [
        {
          id: "A-1",
          name: "Bean Curd Korean Pancake",
          nameKr: "콩비지전",
          description:
            "Ground bean curd pancake with kimchi, seafoods, and green onion",
          descriptionKr: "",
          price: "11.50",
        },
        {
          id: "A-2",
          name: "Fresh Soft Tofu Salad",
          nameKr: "순두부 샐러드",
          description:
            "Fresh mixed greens topped with housemade tofu and our special melon soy salad dressing",
          descriptionKr: "",
          price: "11.50",
        },
        {
          id: "A-3",
          name: "Sesame Oil Fried Tofu",
          nameKr: "들기름 두부 구이",
          description:
            "Grilled fresh tofu with wild sesame oil and homemade soybean sauce",
          descriptionKr: "",
          price: "11.50",
        },
      ],
    },
    {
      image: "",
      title: "Tofu Soup",
      titleKr: "순두부",
      note: "Comes with a serving of rice",
      items: [
        {
          id: "TS1",
          name: "Dumpling Soft Tofu Soup",
          nameKr: "만두 순두부",
          description:
            "Dumplings, house made soft tofu, assorted vegetables, and kimchi",
          descriptionKr: "",
          price: "12.50",
          image: manduSundubu.childImageSharp.fluid,
        },
        {
          id: "TS2",
          name: "Korean Miso Soft Tofu Soup",
          nameKr: "된장 순두부",
          description:
            "Korean miso broth, house made soft tofu, assorted vegetables, mussels, and clams",
          descriptionKr: "",
          price: "12.50",
          image: dwenjangSundubu.childImageSharp.fluid,
        },
        {
          id: "TS3",
          name: "Beef Soft Tofu Soup",
          nameKr: "소고기 순두부",
          description:
            "Premium beef, house made soft tofu, assorted vegetables, and kimchi",
          descriptionKr: "",
          price: "12.90",
          image: "",
        },
        {
          id: "TS4",
          name: "Oyster Soft Tofu Soup",
          nameKr: "굴 순두부",
          description:
            "Oyster, house made soft tofu, assorted vegetables, and kimchi",
          descriptionKr: "",
          price: "12.90",
          image: "",
        },
        {
          id: "TS5",
          name: "Intestine Soft Tofu Soup",
          nameKr: "내장 순두부",
          description:
            "Intestine, house made soft tofu, assorted vegetables, and kimchi",
          descriptionKr: "",
          price: "12.90",
          image: gopjangSundubu.childImageSharp.fluid,
        },
        {
          id: "TS6",
          name: "Seaweed Soft Tofu Soup",
          nameKr: " 해초 순두부",
          description:
            "5 different kinds of seaweed, house made soft tofu, assorted vegetables, and kimchi",
          descriptionKr: "",
          price: "12.50",
          image: "",
        },
        {
          id: "TS7",
          name: "Seafood Soft Tofu Soup",
          nameKr: "해물 순두부",
          description:
            "Seafood medley (clam, mussell, shrimp, calimari), house made soft tofu, assorted vegetables, and kimchi",
          descriptionKr: "",
          price: "12.90",
          image: "",
        },
        {
          id: "TS8",
          name: "Kimchi Soft Tofu Soup",
          nameKr: "김치 순두부",
          description:
            "Pork, house made soft tofu, assorted vegetables, and kimchi",
          descriptionKr: "",
          price: "12.50",
          image: "",
        },
        {
          id: "TS9",
          name: "Traditional Plain Soft Tofu Soup",
          nameKr: "초당 순두부",
          description:
            "Fresh house made soft tofu and soy bean sauce (not spicy)",
          descriptionKr: "",
          price: "11.50",
          image: cheodangSundubu.childImageSharp.fluid,
        },
        {
          id: "TS10",
          name: "Ham & Sausage Tofu Soup",
          nameKr: "햄, 소세지 순두부",
          description:
            "Ham, sausage, house made soft tofu, assorted vegetables, and kimchi",
          descriptionKr: "",
          price: "12.90",
          image: "",
        },
      ],
    },
    {
      image: "",
      title: "Special Traditional",
      titleKr: "",
      note: "Serves 2-3 people and comes with rice",
      items: [
        {
          id: "ST1",
          image: "",
          name: "Pork Soybean Curd",
          nameKr: "콩비지",
          description: "Kongbiji: house-made ground soybean, pork, kimchi",
          descriptionKr: "",
          price: "21.90",
        },
        {
          id: "ST2",
          name: "Beef Bulgogi",
          nameKr: "전통 소불고기",
          description:
            "Korean BBQ style marinated ribeye beef, with broth, mushrooms, and assorted vegetables in a large pot",
          descriptionKr: "",
          price: "27.90",
        },
        {
          id: "ST3",
          name: "Spicy Pork Bulgogi",
          image: porkTraditional.childImageSharp.fluid,
          nameKr: "매운 돼지 불고기",
          description:
            "Korean BBQ style marinated pork, with broth, mushrooms, and assorted vegetables in a large pot",
          descriptionKr: "",
          price: "25.90",
        },
      ],
    },
    {
      image: sundubu.childImageSharp.fluid,
      title: "Tofu Soup Combo",
      titleKr: "순두부 콤보",
      note: "Comes with a serving of rice",
      items: [
        {
          id: "C1",
          name: "Marinated Back-Ribs Combo",
          nameKr: "돼지갈비콤보",
          description: "Marinated back ribs + Your choice of soft tofu soup",
          descriptionKr: "",
          price: "19.50",
        },
        {
          id: "C2",
          name: "LA Style Ribs Combo",
          nameKr: "LA 갈비 콤보",
          description: "LA style ribs + Your choice of soft tofu soup",
          descriptionKr: "",
          price: "19.50",
        },
        {
          id: "C3",
          name: "Marinated Crab Combo",
          nameKr: "양념게장 콤보",
          description: "Marinated crab + Your choice of soft tofu soup",
          descriptionKr: "",
          price: "19.50",
        },
        {
          id: "C4",
          name: "Spicy Korean Chicken Combo",
          nameKr: "닭 불고기 콤보",
          description: "Spicy korean chicken + Your choice of soft tofu soup",
          descriptionKr: "",
          price: "19.50",
        },
        {
          id: "C5",
          name: "Beef Bulgogi Combo",
          nameKr: "소불고기 콤보",
          description:
            "Korean BBQ style beef bulgogi + Your choice of soft tofu soup",
          descriptionKr: "",
          price: "19.50",
        },
        {
          id: "C6",
          name: "Yellow Pollack Combo",
          nameKr: "황태구이 콤보",
          description: "Grilled yellow pollack + Your choice of soft tofu soup",
          descriptionKr: "",
          price: "19.50",
        },
        {
          id: "C7",
          name: "Spicy Pork Combo",
          nameKr: "돼지불고기 콤보 ",
          description:
            " Korean BBQ style spicy pork + Your choice of soft tofu soup",
          descriptionKr: "",
          price: "19.50",
        },
        {
          id: "C8",
          name: "Intestine Combo",
          nameKr: "곱창 콤보",
          description: " Grilled Intestine + Your choice of soft tofu soup",
          descriptionKr: "",
          price: "20.50",
        },
        {
          id: "C9",
          name: "Brisket Combo",
          nameKr: "차돌 콤보",
          description: "Marinated brisket + Your choice of soft tofu soup",
          descriptionKr: "",
          price: "21.50",
        },
      ],
    },
    {
      image: dorsolBibimbap.childImageSharp.fluid,
      title: "Stone Bibim Bap",
      titleKr: "돌솥 비빔밥",
      note: "Served on a searing hot stone bowl with soybean paste soup",
      items: [
        {
          id: "B1",
          image: beefBibimbap.childImageSharp.fluid,
          name: "Beef Bulgogi Bibimbap",
          nameKr: "소불고기 돌솥",
          description:
            "Marinated korean BBQ style bulgogi beef and assorted veggies",
          descriptionKr: "",
          price: "14.50",
        },
        {
          id: "B2",
          name: "Fresh Tofu Bibimbap",
          nameKr: "순두부 돌솥",
          description: "House made tofu and assorted veggies",
          descriptionKr: "",
          price: "13.50",
        },
        {
          id: "B3",
          name: "Kimchi Bibimbap",
          nameKr: "김치 돌솥",
          description: "Kimchi, marinated pork, and assorted veggies",
          descriptionKr: "",
          price: "13.50",
        },
        {
          id: "B4",
          image: porkBibimbap.childImageSharp.fluid,
          name: "Spicy Pork Bulgogi Bibimbap",
          nameKr: "매운 돼지 불고기 돌솥",
          description:
            "Korean BBQ style spicy pork bulgogi and assorted veggies",
          descriptionKr: "",
          price: "14.50",
        },
        {
          id: "B5",
          name: "Seaweed Salad Bibimbap",
          nameKr: "해초 돌솥",
          description: "Assorted veggies and seaweeds",
          descriptionKr: "",
          price: "14.50",
        },
      ],
    },
    {
      image: seafoodSundubu.childImageSharp.fluid,
      title: "Tofu Hot pot",
      titleKr: "전골",
      note: "Serves 2-3 people and comes with rice",
      items: [
        {
          id: "HP1",
          name: "Soft Tofu Dumpling Hot Pot",
          nameKr: "순두부 만두 전골",
          description:
            "House made soft tofu + Dumplings + Assorted vegetables + Kimchi",
          descriptionKr: "",
          price: "29.90",
        },
        {
          id: "HP2",
          name: "Soft Tofu intestine Hot Pot",
          nameKr: "순두부 내장 전골",
          description:
            "House made soft tofu + Mushroom medley + Assorted vegetables + Intestine",
          descriptionKr: "",
          price: "32.90",
        },
        {
          id: "HP3",
          name: "Soft Tofu Seafood Hot Pot",
          nameKr: "순두부 해물전골 ",
          description:
            "House made soft tofu + Seafood medley (baby octopus + shrimp + abalone + clams + squid and more)",
          descriptionKr: "",
          price: "39.90",
        },
      ],
    },
    {
      image: "",
      title: "Noodles",
      titleKr: "국수",
      note: "",
      items: [
        {
          id: "N1",
          name: "Soft Tofu Seafood Spicy Noodles",
          nameKr: "순두부 해물 칼국수",
          description: "",
          descriptionKr: "",
          price: "16.50",
        },
      ],
    },
    // {
    //   image: "",
    //   title: "Bossam",
    //   titleKr: "Steamed Pork Dish for 2-3",
    //   note: "",
    //   items: [
    //     {
    //       id: "",
    //       name: "Bossam",
    //       nameKr: "보쌈",
    //       description:
    //         "Steamed sliced pork belly + Sliced garlic + Assorted veggie wraps + Jalapeno + Shrimp sauce",
    //       descriptionKr: "",
    //       price: "29.50",
    //     },
    //   ],
    // },
    {
      image: dubuSalad.childImageSharp.fluid,
      title: "Vegetarian",
      titleKr: "No Fish or Meat",
      note: "",
      items: [
        {
          id: "V1",
          name: "Fresh Soft Tofu Salad",
          nameKr: "순두부 샐러드",
          description:
            "Fresh mixed greens topped with house made tofu and our special soy salad dressing",
          descriptionKr: "",
          price: "11.50",
        },
        {
          id: "V2",
          name: "Vegetarian Korean Miso Soft Tofu Soup",
          nameKr: "된장 순두부",
          description:
            "Korean miso broth, house made soft tofu, and assorted vegetables",
          descriptionKr: "",
          price: "12.50",
        },
        {
          id: "V3",
          name: "Vegetarian Kimchi Soft Tofu Soup",
          nameKr: "김치 순두부",
          description: "House made soft tofu, veggies, and kimchi",
          descriptionKr: "",
          price: "12.50",
        },
        {
          id: "V4",
          name: "Vegetarian Seaweed Soft Tofu Soup",
          nameKr: "해초 순두부",
          description:
            "Assorted seaweed, house made soft tofu, assorted vegetables, and kimchi",
          descriptionKr: "",
          price: "12.50",
        },
        {
          id: "V5",
          name: "Vegetable Soft Tofu Soup",
          nameKr: "야채 순두부",
          description: "Mixed vegetables, house made soft tofu, and kimchi",
          descriptionKr: "",
          price: "11.90",
        },
        {
          id: "V6",
          name: "Vegetarian Kimchi Hot Stone Bibimbap",
          nameKr: "김치 돌솥",
          description: "Kimchi and assortment of vegetables",
          descriptionKr: "",
          price: "13.50",
        },
        {
          id: "V7",
          name: "Vegetarian Seaweed Hot Stone Bibimbap",
          nameKr: "해초 돌솥",
          description: "Assorted seaweed and vegetables",
          descriptionKr: "",
          price: "14.50",
        },
        {
          id: "V8",
          name: "Vegetarian Tofu Hot Stone Bibimbap",
          nameKr: "순두부 돌솥",
          description: "Tofu, and assortment of vegetables",
          descriptionKr: "",
          price: "13.50",
        },
      ],
    },
  ]

  const beverageandDeserts: MenuItem[] = [
    // {
    //   image: "",
    //   title: "A. Traditional Korean Drink",
    //   titleKr: "",
    //   items: [
    //     {
    //       id: "HT1",
    //       name: "Soy Milk/Pomegranate Tea",
    //       nameKr: "",
    //       price: "4.50",
    //     },
    //     {
    //       id: "DT2",
    //       name: "Soy Milk/Green Tea",
    //       nameKr: "",
    //       price: "4.50",
    //     },
    //     {
    //       id: "HT3",
    //       name: "Soy Milk/Plum Tea",
    //       nameKr: "",
    //       price: "4.50",
    //     },
    //     {
    //       id: "DT4",
    //       name: "Soy Milk/Strawberry",
    //       nameKr: "",
    //       price: "4.50",
    //     },
    //     {
    //       id: "HT5",
    //       name: "Soy Milk/Jujube Tea",
    //       nameKr: "",
    //       price: "4.50",
    //     },
    //     {
    //       id: "DT6",
    //       name: "Soy Milk/Raw Honey Tea",
    //       nameKr: "",
    //       price: "4.90",
    //     },
    //   ],
    // },
    {
      image: "",
      title: "Pepsi Products - $2.50",
      titleKr: "",
      items: [
        {
          id: "",
          name: "Mountain Dew",
          nameKr: "",
          price: "",
        },
        {
          id: "",
          name: "Pepsi",
          nameKr: "",
          price: "",
        },
        {
          id: "",
          name: "Diet Pepsi",
          nameKr: "",
          price: "",
        },
        {
          id: "",
          name: "Tropicana Lemonade",
          nameKr: "",
          price: "",
        },
        {
          id: "",
          name: "Sierra Mist",
          nameKr: "",
          price: "",
        },
        {
          id: "",
          name: "Dr. Pepper",
          nameKr: "",
          price: "",
        },
        {
          id: "",
          name: "Ice Tea (sweetened or unsweetened)",
          nameKr: "",
          price: "",
        },
      ],
    },
    {
      image: "",
      title: "Liquor",
      titleKr: "",
      items: [
        {
          id: "",
          name: "Soju",
          nameKr: "소주",
          price: "10.90",
        },
        // {
        //   id: "",
        //   name: "Baekseju",
        //   nameKr: "백세주",
        //   price: "11.95",
        // },
        {
          id: "",
          name: "Beer",
          nameKr: "맥주",
          price: "6.90",
        },
        {
          id: "",
          name: "Rice-Wine",
          nameKr: "막걸리",
          price: "9.90",
        },
      ],
    },
    // {
    //   image: "",
    //   title: "D. Dessert",
    //   titleKr: "",
    //   items: [
    //     {
    //       id: "",
    //       name: "Soft Tofu Frozen Yogurt",
    //       nameKr: "",
    //       price: "3.50",
    //     },
    //     {
    //       id: "",
    //       name: "Soy Milk Snowflake Bingsoo",
    //       nameKr: "",
    //       price: "9.90",
    //     },
    //     {
    //       id: "",
    //       name: "Additional Toppings (Strawberry/Mango/Blueberry)",
    //       nameKr: "",
    //       price: "1.50",
    //     },
    //   ],
    // },
  ]

  const [modalImage, setModalImage] = useState("")

  return (
    <>
      <MenuList>
        {foods.map((food, i) => (
          <li className="food-category" key={food.title}>
            {food.image && (
              <Img
                fluid={food.image}
                alt={food.title}
                style={{ marginTop: "var(--baseMargin)" }}
              />
            )}
            <h3 className="food-title">
              {i + 1}. {food.title} {food.titleKr && `(${food.titleKr})`}
            </h3>
            {food.note && <p className="note">- {food.note}</p>}
            <ul>
              {food.items.map(item => (
                <li key={item.id} className="food-item">
                  <div>
                    <h5 className="food-name">
                      {item.id && item.id + "."}{" "}
                      {item.nameKr && item.nameKr + ":"} {item.name}{" "}
                      {item.image && (
                        <Icon
                          name="image"
                          onClick={
                            item.image ? () => setModalImage(item.image) : null
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
                    {item.price && <h5 className="price">${item.price}</h5>}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </MenuList>
      <Modal isActive={!!modalImage} closeAction={() => setModalImage("")}>
        {modalImage && <Img fluid={modalImage} />}
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
