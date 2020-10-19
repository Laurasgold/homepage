type Item = {
  id?: string
  name: string
  nameKr?: string
  description?: string
  descriptionKr?: string
  price: string
}

type Food = {
  title: string
  titleKr?: string
  note?: string
  items: Item[]
}

type Beverage = {
  title: string
  titleKr?: string
  id?: string
  name: string
  nameKr?: string
  price: string
}

export const foods: Food[] = [
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
]

export const beverageandDeserts: Beverage[] = [
  {
    title: "",
    titleKr: "",
    id: "",
    name: "",
    nameKr: "",
    price: "",
  },
]
