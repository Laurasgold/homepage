type Item = {
  id?: string
  name: string
  nameKr?: string
  description?: string
  descriptionKr?: string
  price: string
}

type MenuItem = {
  title: string
  titleKr?: string
  note?: string
  items?: Item[]
}

export const foods: MenuItem[] = [
  {
    title: "Appetizer",
    titleKr: "",
    note: "",
    items: [
      {
        id: "E-1",
        name: "Bean-Curd Korean Pancake",
        nameKr: "콩비지전",
        description:
          "Ground bean curd pancake topped with kimchi, seafoods and green onion",
        descriptionKr: "",
        price: "11.50",
      },
      {
        id: "E-2",
        name: " Mung-bean Korean Pancake",
        nameKr: "녹두전",
        description: "Ground mung-bean pancake topped with vegetable toppings",
        descriptionKr: "",
        price: "10.50",
      },
      {
        id: "E-3",
        name: "Fresh Soft Tofu Salad",
        nameKr: "순두부 샐러드",
        description:
          "Fresh mixed Greens topped with Fresh house-made tofu and homemade Melon soy salad dressing",
        descriptionKr: "",
        price: "11.00",
      },
      {
        id: "E-4",
        name: "Fried Tofu",
        nameKr: "구이 두부 샐러드",
        description:
          "Fresh Mixed greens topped with grilled tofu and homemade sauce",
        descriptionKr: "",
        price: "11.50",
      },
      {
        id: "E-5",
        name:
          "Grilled Fresh Tofu with wild sesame oil and homemade soybean sauce",
        nameKr: "들기름 두부 구이",
        description: "",
        descriptionKr: "",
        price: "11.50",
      },
    ],
  },
  {
    title: "Tofu Soup",
    titleKr: "순두부",
    note: "Rice is served in stone pot individually",
    items: [
      {
        id: "TS1",
        name: "Dumpling Soft Tofu Soup",
        nameKr: "만두 순두부",
        description:
          "Dumplings, House-Made Soft Tofu, Assorted Veggies and Kimchi",
        descriptionKr: "",
        price: "12.50",
      },
      {
        id: "TS2",
        name: "Korean Miso Soft Tofu Soup",
        nameKr: "된장 순두부",
        description:
          "Korean Miso Broth, House-Made Soft Tofu, Assorted Veggies",
        descriptionKr: "",
        price: "12.50",
      },
      {
        id: "TS3",
        name: "Beef(Brisket) Soft Tofu Soup",
        nameKr: "소고기 순두부",
        description:
          "Premium Brisket, House-Made Soft Tofu, Assorted veggies and Kimchi",
        descriptionKr: "",
        price: "12.90",
      },
      {
        id: "TS4",
        name: "Oyster Soft Tofu Soup",
        nameKr: "굴 순두부",
        description:
          "Oyster, House-Made Soft Tofu, Assorted Veggies and Kimchi",
        descriptionKr: "",
        price: "12.90",
      },
      {
        id: "TS5",
        name: "Intestine Soft Tofu Soup",
        nameKr: "내장 순두부",
        description:
          "Intestine, House-Made Soft Tofu, Assorted Veggies and Kimchi",
        descriptionKr: "",
        price: "12.90",
      },
      {
        id: "TS6",
        name: ": Seaweed Abalone Soft Tofu Soup",
        nameKr: " 해초 순두부",
        description:
          "Seaweed, House-Made Soft Tofu, Assorted Veggies and Kimchi",
        descriptionKr: "",
        price: "12.50",
      },
      {
        id: "TS7",
        name: "Seafood Soft Tofu Soup",
        nameKr: "해물 순두부",
        description:
          "Seafood Medley (Clam, Mussell, Shrimp, Calimari, Scallops), House-Made Soft Tofu, Assorted Veggies and Kimchi",
        descriptionKr: "",
        price: "12.90",
      },
      {
        id: "TS8",
        name: "Kimchi Soft Tofu Soup",
        nameKr: "김치 순두부",
        description: "Pork, House-Made Soft Tofu, Veggies and Kimchi",
        descriptionKr: "",
        price: "12.50",
      },
      {
        id: "TS9",
        name: "Soft Tofu Soup",
        nameKr: "초당 순두부",
        description: "Fresh tofu and soy bean sauce",
        descriptionKr: "",
        price: "11.50",
      },
    ],
  },
  {
    title: "Special Traditional",
    titleKr: "",
    note: "Rice is served in stone pot individually",
    items: [
      {
        id: "ST1",
        name: "Pork Soybean Curd",
        nameKr: "콩비지",
        description: "Kongbiji: house-made ground soybean, pork, kimchi",
        descriptionKr: "",
        price: "11.95",
      },
      {
        id: "ST2",
        name: "Beef Bulgogi",
        nameKr: "전통 소불고기",
        description: "",
        descriptionKr: "",
        price: "14.95",
      },
      {
        id: "ST3",
        name: "Pork Bulgogi",
        nameKr: "전통 돼지 불고기",
        description: "",
        descriptionKr: "",
        price: "13.95",
      },
    ],
  },
  {
    title: "Tofu Soup Combo",
    titleKr: "순두부 콤보",
    note: "Rice is served in stone pot individually",
    items: [
      {
        id: "TC1",
        name: "Marinated Back-Ribs Combo",
        nameKr: "콩비지",
        description: "Marinated Back-Ribs + Soft Tofu Soup",
        descriptionKr: "",
        price: "19.50",
      },
      {
        id: "TC2",
        name: "LA Style Ribs Combo",
        nameKr: "LA 갈비 콤보",
        description: "LA Style Ribs + Soft Tofu Soup",
        descriptionKr: "",
        price: "19.50",
      },
      {
        id: "TC3",
        name: "Marinated Crab Combo",
        nameKr: "양념게장 콤보",
        description: "Marinated Crab + Soft Tofu Soup",
        descriptionKr: "",
        price: "19.50",
      },
      {
        id: "TC4",
        name: "Spicy Korean Chicken Combo",
        nameKr: "닭갈비 콤보",
        description: "Spicy Korean Chicken + Soft Tofu Soup",
        descriptionKr: "",
        price: "19.50",
      },
      {
        id: "TC6",
        name: "Beef Combo",
        nameKr: "소불고기 콤보",
        description: "Beef Bulgogi + Soft Tofu Soup",
        descriptionKr: "",
        price: "19.50",
      },
      {
        id: "TC7",
        name: "Yellow Pollack Combo",
        nameKr: "황태구이 콤보",
        description: "Grilled Yellow Pollack Slices + Soft Tofu Soup",
        descriptionKr: "",
        price: "19.50",
      },
      {
        id: "TC8",
        name: "Butter Abalone Combo",
        nameKr: "전복구이 콤보",
        description: "Butter Roasted Abalone + Soft Tofu Soup",
        descriptionKr: "",
        price: "26.50",
      },
      {
        id: "TC9",
        name: "Spicy Pork Combo",
        nameKr: "돼지 불고기",
        description: "BBQ Spicy Pork + Soft Tofu Soup",
        descriptionKr: "",
        price: "19.50",
      },
    ],
  },
  {
    title: "Stone Bibim Bap",
    titleKr: "돌솥 비빔밥",
    note:
      "All Bibimbap is served on a searing hot stone bowl with soybean paste soup",
    items: [
      {
        id: "SB1",
        name: "Beef Bulgogi Bibimbap",
        nameKr: "소불고기 돌솥",
        description: "Marinated beef, Assorted Veggies",
        descriptionKr: "",
        price: "14.50",
      },
      {
        id: "SB2",
        name: "Fresh Tofu Bibimbap",
        nameKr: "순두부 돌솥",
        description: "Fresh tofu, Assorted Veggies",
        descriptionKr: "",
        price: "13.50",
      },
      {
        id: "SB3",
        name: "Kimchi Bibimbap",
        nameKr: "김치 돌솥",
        description: "Kimchi, pork and Assorted Veggies",
        descriptionKr: "",
        price: "13.50",
      },
      {
        id: "SB4",
        name: "Spicy Pork bulgogi Bibimbap",
        nameKr: "매운 돼지 불고기 돌솥",
        description: "Spicy Pork bulgogi, Assorted Veggies",
        descriptionKr: "",
        price: "14.50",
      },
      {
        id: "SB5",
        name: "Seaweed Salad Bibimbap",
        nameKr: "해초 돌솥",
        description: "Assorted Veggies and Seaweeds",
        descriptionKr: "",
        price: "13.50",
      },
    ],
  },
  {
    title: "Tofu Hot pot",
    titleKr: "전골",
    note: "Rice is served in stone pot individually",
    items: [
      {
        id: "THP1",
        name: "Soft Tofu Dumpling Hot Pot",
        nameKr: "순두부 만두 전골",
        description: "House Made Tofu + Dumplings + Assorted Veggies + Kimchi",
        descriptionKr: "",
        price: "27.90",
      },
      {
        id: "THP2",
        name: "Soft Tofu intestine Hot Pot",
        nameKr: "순두부 내장 전골",
        description:
          "House Made Soft Tofu + Mushroom Medley + Assorted Veggies + Assorted intestine",
        descriptionKr: "",
        price: "32.90",
      },
      {
        id: "THP3",
        name: "Soft Tofu Champong Hot Pot",
        nameKr: "순두부 짬뽕 전골",
        description:
          "House Made Soft Tofu + Mushroom Medley + Assorted Veggies + Shrimp + Calimari + Clam + Muscle + Special Spicy Broth",
        descriptionKr: "",
        price: "34.90",
      },
      {
        id: "THP4",
        name: "Soft Tofu Seafood Hot Pot",
        nameKr: "순두부 해물전골 ",
        description:
          "Soft Tofu + Seafood Medley (Octopus + Shrimp + Abalone + Clams + squid and more)",
        descriptionKr: "",
        price: "39.90",
      },
    ],
  },
  {
    title: "Noodles",
    titleKr: "국수",
    note: "",
    items: [
      {
        id: "ND1",
        name: "Cold Soy Bean Noodles",
        nameKr: "냉콩국수",
        description: "House Made Tofu + Dumplings + Assorted Veggies + Kimchi",
        descriptionKr: "",
        price: "12.90",
      },
      {
        id: "ND2",
        name: "Soft Tofu Seafood Spicy Noodles",
        nameKr: "순두부 해물 칼국수",
        description: "",
        descriptionKr: "",
        price: "14.50",
      },
    ],
  },
  {
    title: "Bossam",
    titleKr: "Steamed Pork Dish for 2-3",
    note: "",
    items: [
      {
        id: "",
        name: "Bossam",
        nameKr: "",
        description:
          "Steamed/Sliced Pork Belly + Sliced Garlic + Assorted Veggie Wrap + Jalapeno + Shrimp Sauce",
        descriptionKr: "",
        price: "29.50",
      },
      {
        id: "",
        name: "Pyun-yook",
        nameKr: "",
        description:
          "Steamed Beef head + Sliced Garlic + Assorted Veggie Wrap + Jalapeno + Shrimp Sauce",
        descriptionKr: "",
        price: "27.50",
      },
    ],
  },
  {
    title: "Vegetarian",
    titleKr: "No Fish or Meat",
    note: "",
    items: [
      {
        id: "VT1",
        name: "Fresh Soft Tofu Salad",
        nameKr: "순두부 샐러드",
        description:
          "Fresh mixed Greens topped with Fresh house-made tofu and homemade soy salad dressing",
        descriptionKr: "",
        price: "11.50",
      },
      {
        id: "VT2",
        name: "Grilled Tofu Salad",
        nameKr: "두부 구이 샐러드",
        description:
          "Fresh Mixed greens topped with Deep-fried tofu and homemade soy salad dressing",
        descriptionKr: "",
        price: "11.50",
      },
      {
        id: "VT3",
        name: "Fresh Soft-Tofu",
        nameKr: "초두부",
        description:
          "Fresh-House Made Tofu to be enjoyed fresh with our special soy sauce dressing.",
        descriptionKr: "",
        price: "11.90",
      },
      {
        id: "VT4",
        name: "Kimchi Soft Tofu Soup",
        nameKr: "김치 순두부",
        description: "House-Made Soft Tofu, Veggies and Kimchi",
        descriptionKr: "",
        price: "12.50",
      },
      {
        id: "VT5",
        name: "Seaweed Soft Tofu Soup",
        nameKr: "해초 순두부",
        description:
          "Assorted Seaweed, House-Made Soft Tofu, Assorted Veggies and Kimchi",
        descriptionKr: "",
        price: "12.50",
      },
      {
        id: "VT6",
        name: "Vegetable Soft Tofu Soup",
        nameKr: "야채 순두부",
        description: "Mixed Vegetables, House-Made Soft Tofu and Kimchi",
        descriptionKr: "",
        price: "11.90",
      },
      {
        id: "VT7",
        name: "Kimchi Hot Stone Bibimbap",
        nameKr: "김치 비빔밥",
        description: "Kimchi, veggies and healthy gochujang sauce",
        descriptionKr: "",
        price: "14.90",
      },
      {
        id: "VT8",
        name: "Seaweed Hot Stone Bibimbap",
        nameKr: "해초 비빔밥",
        description: "Seaweeds and healthy gochujang sauce",
        descriptionKr: "",
        price: "14.90",
      },
      {
        id: "VT9",
        name: "Tofu Hot Stone Bibimbap",
        nameKr: "순두부 비빔밥",
        description: "Tofu, Assorted Veggies and Gochujang sauce",
        descriptionKr: "",
        price: "14.90",
      },
    ],
  },
]

export const beverageandDeserts: MenuItem[] = [
  {
    title: "A. Traditional Korean Drink",
    titleKr: "",
    items: [
      {
        id: "HT1",
        name: "Soy Milk/Pomegranate Tea",
        nameKr: "",
        price: "4.50",
      },
      {
        id: "DT2",
        name: "Soy Milk/Green Tea",
        nameKr: "",
        price: "4.50",
      },
      {
        id: "HT3",
        name: "Soy Milk/Plum Tea",
        nameKr: "",
        price: "4.50",
      },
      {
        id: "DT4",
        name: "Soy Milk/Strawberry",
        nameKr: "",
        price: "4.50",
      },
      {
        id: "HT5",
        name: "Soy Milk/Jujube Tea",
        nameKr: "",
        price: "4.50",
      },
      {
        id: "DT6",
        name: "Soy Milk/Raw Honey Tea",
        nameKr: "",
        price: "4.90",
      },
    ],
  },
  {
    title: "B. Coke Products - $1.75",
    titleKr: "",
    // items: [
    //   {
    //     id: "",
    //     name: "",
    //     nameKr: "",
    //     price: "",
    //   },
    // ],
  },
  {
    title: "C. Liquor",
    titleKr: "",
    items: [
      {
        id: "",
        name: "Soju",
        nameKr: "소주",
        price: "10.90",
      },
      {
        id: "",
        name: "Bakseju",
        nameKr: "백세주",
        price: "11.95",
      },
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
  {
    title: "D. Dessert",
    titleKr: "",
    items: [
      {
        id: "",
        name: "Soft Tofu Frozen Yogurt",
        nameKr: "",
        price: "3.50",
      },
      {
        id: "",
        name: "Soy Milk Snowflake Bingsoo",
        nameKr: "",
        price: "9.90",
      },
      {
        id: "",
        name: "Additional Toppings (Strawberry/Mango/Blueberry)",
        nameKr: "",
        price: "1.50",
      },
    ],
  },
]
