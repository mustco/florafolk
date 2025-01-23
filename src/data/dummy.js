import {
  leafOne,
  leafTwo,
  leafThree,
  leafFour,
  leafFive,
  leafSix,
  background,
  logo,

  bestPlant1,
  bestPlant2,
  bestPlant3,
  bestPlant4,
  bestPlant5,
  bestPlant6,
  bestPlant7,
  avatar

} from "../assets";

const navLink = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About Us",
    url: "/about",
  },
  {
    id: 3,
    title: "Plants",
    url: "/plants",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];

const getBestPlants = ()=> [
  {
    id: 1,
    image: bestPlant1,
    title: "Angel Vine",
    description:
      "Angel Vine (Cissus striata) is a fast-growing, trailing plant known for its delicate, bright green leaves and ability to thrive indoors or outdoors.",
    category: "hanging plant",
    original_price: {
      amount: 600000,
      currency: "IDR",
    },
    discount_price: {
      amount: 402000,
      currency: "IDR",
    },
    discount_percentage: 33,
  },
  {
    id: 2,
    image: bestPlant2,
    title: "Bougainvillea",
    description:
      "Bougainvillea is a vibrant, colorful flowering plant that thrives in hot, sunny climates, making it perfect for outdoor gardens.",
    category: "outdoor plant",
    original_price: {
      amount: 900000,
      currency: "IDR",
    },
    discount_price: {
      amount: 675000,
      currency: "IDR",
    },
    discount_percentage: 25,
  },
  {
    id: 3,
    image: bestPlant3,
    title: "Calathea",
    description:
      "Calathea is an indoor plant famous for its beautiful foliage with intricate patterns and vibrant colors. It thrives in moderate light and high humidity.",
    category: "indoor plant",
    original_price: {
      amount: 750000,
      currency: "IDR",
    },
    discount_price: {
      amount: 525000,
      currency: "IDR",
    },
    discount_percentage: 30,
  },
  {
    id: 4,
    image: bestPlant4,
    title: "Eucalyptus",
    description:
      "Eucalyptus plants have aromatic leaves that are often used for their medicinal properties. They thrive in sunny outdoor settings.",
    category: "outdoor plant",
    original_price: {
      amount: 825000,
      currency: "IDR",
    },
    discount_price: {
      amount: 602250,
      currency: "IDR",
    },
    discount_percentage: 27,
  },
  {
    id: 5,
    image: bestPlant5,
    title: "Lavender",
    description:
      "Lavender is a fragrant herb that is well-loved for its soothing aroma and beautiful purple flowers. It grows best in outdoor gardens with plenty of sunlight.",
    category: "outdoor plant",
    original_price: {
      amount: 525000,
      currency: "IDR",
    },
    discount_price: {
      amount: 420000,
      currency: "IDR",
    },
    discount_percentage: 20,
  },
  {
    id: 6,
    image: bestPlant6,
    title: "Monstera Deliciosa",
    description:
      "Monstera Deliciosa is an indoor plant with large, glossy leaves known for their unique split patterns. It thrives in bright, indirect light.",
    category: "indoor plant",
    original_price: {
      amount: 1050000,
      currency: "IDR",
    },
    discount_price: {
      amount: 756000,
      currency: "IDR",
    },
    discount_percentage: 28,
  },
  {
    id: 7,
    image: bestPlant7,
    title: "Sansevieria Trifasciata",
    description:
      "Sansevieria Trifasciata, also known as Snake Plant, is a hardy and low-maintenance plant that can thrive in low light conditions, making it ideal for indoor spaces.",
    category: "indoor plant",
    original_price: {
      amount: 750000,
      currency: "IDR",
    },
    discount_price: {
      amount: 450000,
      currency: "IDR",
    },
    discount_percentage: 40,
  },
];

const plantLover = () => [
    {
      id:1,
      name:"Jhon Doe",
      rating:5,
      review:"lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum.",
      avatar:avatar
    },
    {
      id:2,
      name:"Jhon Doe",
      rating:5,
      review:"lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum.",
      avatar:avatar
    },
    {
      id:3,
      name:"Jhon Doe",
      rating:5,
      review:"lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum.",
      avatar:avatar
    },
    {
      id:4,
      name:"Jhon Doe",
      rating:5,
      review:"lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum.",
      avatar:avatar
    },
    {
      id:5,
      name:"Jhon Doe",
      rating:5,
      review:"lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum.",
      avatar:avatar
    },
    {
      id:6,
      name:"Jhon Doe",
      rating:5,
      review:"lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum.",
      avatar:avatar
    }
]

export default {navLink, getBestPlants, plantLover};
