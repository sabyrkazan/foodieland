import wagyuBurger from '@/assets/images/recipes/1.jpg'
import roastedSalmon from '@/assets/images/recipes/2.jpg'
import strawberryOatmealPancake from '@/assets/images/recipes/3.jpg'
import mixedMayonnaiseSalad from '@/assets/images/recipes/4.jpg'
import chickenMeatballsCreamCheese from '@/assets/images/recipes/5.jpg'
import fruityOrangeBlueberryPancake from '@/assets/images/recipes/7.jpg'
import onePotChickenRice from '@/assets/images/recipes/8.jpg'
import creamyChickenBaconPasta from '@/assets/images/recipes/9.jpg'

import favoriteIcon from '@/assets/icons/heart/heart-fill.svg'
import unfavoriteIcon from '@/assets/icons/heart/heart-solid.svg'

export const recipes = [
  {
    id: 1,
    type: 'card',
    imgSrc: wagyuBurger,
    favoriteImgSrc: favoriteIcon,
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    tags: [
      {
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        icon: 'cutlery',
        label: 'Snack',
      },
    ],
  },
  {
    id: 2,
    type: 'card',
    imgSrc: roastedSalmon,
    favoriteImgSrc: unfavoriteIcon,
    title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    tags: [
      {
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        icon: 'cutlery',
        label: 'Fish',
      },
    ],
  },
  {
    id: 3,
    type: 'card',
    imgSrc: strawberryOatmealPancake,
    favoriteImgSrc: unfavoriteIcon,
    title: 'Strawberry Oatmeal Pancake with Honey Syrup',
    tags: [
      {
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        icon: 'cutlery',
        label: 'Breakfast',
      },
    ],
  },
  {
    id: 4,
    type: 'card',
    imgSrc: mixedMayonnaiseSalad,
    favoriteImgSrc: favoriteIcon,
    title: 'Fresh and Healthy Mixed Mayonnaise Salad',
    tags: [
      {
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        icon: 'cutlery',
        label: 'Healthy',
      },
    ],
  },
  {
    id: 5,
    type: 'card',
    imgSrc: chickenMeatballsCreamCheese,
    favoriteImgSrc: unfavoriteIcon,
    title: 'Chicken Meatballs with Cream Cheese',
    tags: [
      {
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        icon: 'cutlery',
        label: 'Meat',
      },
    ],
  },
  {
    id: 6,
    type: 'banner',
  },
  {
    id: 7,
    type: 'card',
    imgSrc: fruityOrangeBlueberryPancake,
    favoriteImgSrc: favoriteIcon,
    title: 'Fruity Pancake with Orange & Blueberry',
    tags: [
      {
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        icon: 'cutlery',
        label: 'Sweet',
      },
    ],
  },
  {
    id: 8,
    type: 'card',
    imgSrc: onePotChickenRice,
    favoriteImgSrc: unfavoriteIcon,
    title: 'The Best Easy One Pot Chicken and Rice',
    tags: [
      {
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        icon: 'cutlery',
        label: 'Snack',
      },
    ],
  },
  {
    id: 9,
    type: 'card',
    imgSrc: creamyChickenBaconPasta,
    favoriteImgSrc: unfavoriteIcon,
    title: 'The Creamiest Creamy Chicken and Bacon Pasta',
    tags: [
      {
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        icon: 'cutlery',
        label: 'Noodles',
      },
    ],
  },
]
