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
        name: "Bean Curd Korean Pancake",
        nameKr: "콩비지전",
        description:
          "Ground bean curd pancake with kimchi, seafoods, and green onion",
        descriptionKr: "",
        price: "11.50",
      },
      {
        id: "E-2",
        name: " Mung bean Korean Pancake",
        nameKr: "녹두전",
        description: "Ground mung-bean pancake with vegetables",
        descriptionKr: "",
        price: "8.50",
      },
      {
        id: "E-3",
        name: "Fresh Soft Tofu Salad",
        nameKr: "순두부 샐러드",
        description:
          "Fresh mixed greens topped with housemade tofu and our special melon soy salad dressing",
        descriptionKr: "",
        price: "11.50",
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
        name: "Sesame Oil Fried Tofu",
        nameKr: "들기름 두부 구이",
        description: "Grilled fresh tofu with wild sesame oil and homemade soybean sauce",
        descriptionKr: "",
        price: "11.50",
      },
    ],
  },
  {
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
      },
      {
        id: "TS2",
        name: "Korean Miso Soft Tofu Soup",
        nameKr: "된장 순두부",
        description:
          "Korean miso broth, house made soft tofu, and assorted vegetables",
        descriptionKr: "",
        price: "12.50",
      },
      {
        id: "TS3",
        name: "Beef(Brisket) Soft Tofu Soup",
        nameKr: "소고기 순두부",
        description:
          "Premium brisket, house made soft tofu, assorted vegetables, and kimchi",
        descriptionKr: "",
        price: "12.90",
      },
      {
        id: "TS4",
        name: "Oyster Soft Tofu Soup",
        nameKr: "굴 순두부",
        description:
          "Oyster, house made soft tofu, assorted vegetables, and kimchi",
        descriptionKr: "",
        price: "12.90",
      },
      {
        id: "TS5",
        name: "Intestine Soft Tofu Soup",
        nameKr: "내장 순두부",
        description:
          "Intestine, house made soft tofu, assorted vegetables, and kimchi",
        descriptionKr: "",
        price: "12.90",
      },
      {
        id: "TS6",
        name: ": Seaweed Soft Tofu Soup",
        nameKr: " 해초 순두부",
        description:
          "Seaweed, house made soft tofu, assorted vegetables, and kimchi",
        descriptionKr: "",
        price: "12.50",
      },
      {
        id: "TS7",
        name: "Seafood Soft Tofu Soup",
        nameKr: "해물 순두부",
        description:
          "Seafood medley (clam, mussell, shrimp, calimari, scallops), house made soft tofu, assorted vegetables, and kimchi",
        descriptionKr: "",
        price: "12.90",
      },
      {
        id: "TS8",
        name: "Kimchi Soft Tofu Soup",
        nameKr: "김치 순두부",
        description: "Pork, house made soft tofu, assorted vegetables, and kimchi",
        descriptionKr: "",
        price: "12.50",
      },
      {
        id: "TS9",
        name: "Soft Tofu Soup",
        nameKr: "초당 순두부",
        description: "Fresh house made soft tofu and soy bean sauce",
        descriptionKr: "",
        price: "11.50",
      },
    ],
  },
  {
    title: "Special Traditional",
    titleKr: "",
    note: "Serves 2-3 people and comes with rice",
    items: [
      {
        id: "ST1",
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
        description: "Korean BBQ style marinated ribeye beef",
        descriptionKr: "",
        price: "27.90",
      },
      {
        id: "ST3",
        name: "Pork Bulgogi",
        nameKr: "전통 돼지 불고기",
        description: "Korean BBQ style marinated pork",
        descriptionKr: "",
        price: "25.90",
      },
    ],
  },
  {
    title: "Tofu Soup Combo",
    titleKr: "순두부 콤보",
    note: "Comes with a serving of rice",
    items: [
      {
        id: "TC1",
        name: "Marinated Back-Ribs Combo",
        nameKr: "돼지갈비콤보",
        description: "Marinated back ribs + Soft tofu soup",
        descriptionKr: "",
        price: "19.50",
      },
      {
        id: "TC2",
        name: "LA Style Ribs Combo",
        nameKr: "LA 갈비 콤보",
        description: "LA style ribs + Soft tofu soup",
        descriptionKr: "",
        price: "19.50",
      },
      {
        id: "TC3",
        name: "Marinated Crab Combo",
        nameKr: "양념게장 콤보",
        description: "Marinated crab + Soft tofu soup",
        descriptionKr: "",
        price: "19.50",
      },
      {
        id: "TC4",
        name: "Spicy Korean Chicken Combo",
        nameKr: "닭갈비 콤보",
        description: "Spicy korean chicken + Soft tofu soup",
        descriptionKr: "",
        price: "19.50",
      },
      {
        id: "TC6",
        name: "Beef Combo",
        nameKr: "소불고기 콤보",
        description: "Korean BBQ style beef bulgogi + Soft tofu soup",
        descriptionKr: "",
        price: "19.50",
      },
      {
        id: "TC7",
        name: "Yellow Pollack Combo",
        nameKr: "황태구이 콤보",
        description: "Grilled yellow pollack + Soft tofu soup",
        descriptionKr: "",
        price: "19.50",
      },
      {
        id: "TC8",
        name: "Butter Abalone Combo",
        nameKr: "전복구이 콤보",
        description: "Butter roasted abalone + Soft tofu soup",
        descriptionKr: "",
        price: "19.50",
      },
      {
        id: "TC9",
        name: "Spicy Pork Combo",
        nameKr: "돼지불고기 콤보 ",
        description: " Korean BBQ style spicy pork + Soft tofu soup",
        descriptionKr: "",
        price: "19.50",
      },
       {
        id: "TC10",
        name: "Grilled Fish Combo",
        nameKr: "생선구어 콤보",
        description: " Grilled fish + Soft tofu soup",
        descriptionKr: "",
        price: "19.50",
      },
    ],
  },
  {
    title: "Stone Bibim Bap",
    titleKr: "돌솥 비빔밥",
    note:
      "Served on a searing hot stone bowl with soybean paste soup",
    items: [
      {
        id: "SB1",
        name: "Beef Bulgogi Bibimbap",
        nameKr: "소불고기 돌솥",
        description: "Marinated korean BBQ style bulgogi beef and assorted veggies",
        descriptionKr: "",
        price: "14.50",
      },
      {
        id: "SB2",
        name: "Fresh Tofu Bibimbap",
        nameKr: "순두부 돌솥",
        description: "House made tofu and assorted veggies",
        descriptionKr: "",
        price: "13.50",
      },
      {
        id: "SB3",
        name: "Kimchi Bibimbap",
        nameKr: "김치 돌솥",
        description: "Kimchi, marinated korean BBQ pork, and assorted veggies",
        descriptionKr: "",
        price: "13.50",
      },
      {
        id: "SB4",
        name: "Spicy Pork bulgogi Bibimbap",
        nameKr: "매운 돼지 불고기 돌솥",
        description: "Korean BBQ style spicy pork bulgogi and assorted veggies",
        descriptionKr: "",
        price: "14.50",
      },
      {
        id: "SB5",
        name: "Seaweed Salad Bibimbap",
        nameKr: "해초 돌솥",
        description: "Assorted veggies and seaweeds",
        descriptionKr: "",
        price: "13.50",
      },
    ],
  },
  {
    title: "Tofu Hot pot",
    titleKr: "전골",
    note: "Serves 2-3 people and comes with rice",
    items: [
      {
        id: "THP1",
        name: "Soft Tofu Dumpling Hot Pot",
        nameKr: "순두부 만두 전골",
        description: "House made soft tofu + Dumplings + Assorted vegetables + Kimchi",
        descriptionKr: "",
        price: "27.90",
      },
      {
        id: "THP2",
        name: "Soft Tofu intestine Hot Pot",
        nameKr: "순두부 내장 전골",
        description:
          "House made soft tofu + Mushroom medley + Assorted vegetables + Intestine",
        descriptionKr: "",
        price: "32.90",
      },
      {
        id: "THP3",
        name: "Soft Tofu Champong Hot Pot",
        nameKr: "순두부 짬뽕 전골",
        description:
          "House made soft tofu + Mushroom medley + Assorted vegetables + Seafood medley (shrimp, calimari, clam, muscle), + House special spicy broth",
        descriptionKr: "",
        price: "34.90",
      },
      {
        id: "THP4",
        name: "Soft Tofu Seafood Hot Pot",
        nameKr: "순두부 해물전골 ",
        description:
          "House made soft tofu + Seafood medley (octopus + shrimp + abalone + clams + squid and more)",
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
        description: "House made soft tofu + Dumplings + Assorted vegetables + Kimchi",
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
        nameKr: "보쌈",
        description:
          "Steamed sliced pork belly + Sliced garlic + Assorted veggie wraps + Jalapeno + Shrimp sauce",
        descriptionKr: "",
        price: "29.50",
      },
      {
        id: "",
        name: "Pyun-yook",
        nameKr: "편육",
        description:
          "Steamed, pressed, and sliced beef + Sliced garlic + Assorted veggie wraps + Jalapeno + Shrimp sauce",
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
          "Fresh mixed greens topped with house made tofu and our special soy salad dressing",
        descriptionKr: "",
        price: "11.50",
      },
      {
        id: "VT2",
        name: "Grilled Tofu Salad",
        nameKr: "두부 구이 샐러드",
        description:
          "Fresh mixed greens topped with deep fried tofu and our special soy salad dressing",
        descriptionKr: "",
        price: "11.50",
      },
      {
        id: "VT3",
        name: "Fresh Soft Tofu",
        nameKr: "초두부",
        description:
          "House made tofu to be enjoyed fresh with our special soy sauce dressing.",
        descriptionKr: "",
        price: "11.90",
      },
      {
        id: "VT4",
        name: "Kimchi Soft Tofu Soup",
        nameKr: "김치 순두부",
        description: "House made soft tofu, veggies, and kimchi",
        descriptionKr: "",
        price: "12.50",
      },
      {
        id: "VT5",
        name: "Seaweed Soft Tofu Soup",
        nameKr: "해초 순두부",
        description:
          "Assorted seaweed, house made soft tofu, assorted vegetables, and kimchi",
        descriptionKr: "",
        price: "12.50",
      },
      {
        id: "VT6",
        name: "Vegetable Soft Tofu Soup",
        nameKr: "야채 순두부",
        description: "Mixed vegetables, house made soft tofu, and kimchi",
        descriptionKr: "",
        price: "11.90",
      },
      {
        id: "VT7",
        name: "Kimchi Hot Stone Bibimbap",
        nameKr: "김치 비빔밥",
        description: "Kimchi and assortment of vegetables",
        descriptionKr: "",
        price: "14.90",
      },
      {
        id: "VT8",
        name: "Seaweed Hot Stone Bibimbap",
        nameKr: "해초 비빔밥",
        description: "Assorted seaweed and vegetables",
        descriptionKr: "",
        price: "14.90",
      },
      {
        id: "VT9",
        name: "Tofu Hot Stone Bibimbap",
        nameKr: "순두부 비빔밥",
        description: "Tofu, and assortment of vegetables",
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
    title: "B. Pepsi Products - $1.75",
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
