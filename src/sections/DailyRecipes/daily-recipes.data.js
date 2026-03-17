import tropicalFruitSalad from '@/assets/images/daily-recipes/1.jpg'
import wagyuCheeseburger from '@/assets/images/daily-recipes/2.jpg'
import japaneseFriedRice from '@/assets/images/daily-recipes/3.jpg'
import cauliflowerTaco from '@/assets/images/daily-recipes/4.jpg'
import rainbowChickenSalad from '@/assets/images/daily-recipes/5.jpg'
import bbqSpicySandwich from '@/assets/images/daily-recipes/6.jpg'
import veganLettuceWraps from '@/assets/images/daily-recipes/7.jpg'
import chickenRamenSoup from '@/assets/images/daily-recipes/8.jpg'

import favoriteIcon from '@/assets/icons/heart/heart-fill.svg'
import unfavoriteIcon from '@/assets/icons/heart/heart-solid.svg'

export const dailyRecipes = [
  {
    id: 1,
    imgSrc: tropicalFruitSalad,
    favoriteImgSrc: favoriteIcon,
    title: 'Mixed Tropical Fruit Salad with Superfood Boosts',
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
    id: 2,
    imgSrc: wagyuCheeseburger,
    favoriteImgSrc: unfavoriteIcon,
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    tags: [
      {
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        icon: 'cutlery',
        label: 'Western',
      },
    ],
  },
  {
    id: 3,
    imgSrc: japaneseFriedRice,
    favoriteImgSrc: favoriteIcon,
    title: 'Healthy Japanese Fried Rice with Asparagus',
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
    id: 4,
    imgSrc: cauliflowerTaco,
    favoriteImgSrc: unfavoriteIcon,
    title: 'Cauliflower Walnut Vegetarian Taco Meat',
    tags: [
      {
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        icon: 'cutlery',
        label: 'Eastern',
      },
    ],
  },
  {
    id: 5,
    imgSrc: rainbowChickenSalad,
    favoriteImgSrc: favoriteIcon,
    title: 'Rainbow Chicken Salad with Almond Honey Mustard Dressing',
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
    id: 6,
    imgSrc: bbqSpicySandwich,
    favoriteImgSrc: unfavoriteIcon,
    title: 'Barbeque Spicy Sandwiches with Chips',
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
    id: 7,
    imgSrc: veganLettuceWraps,
    favoriteImgSrc: unfavoriteIcon,
    title: 'Firecracker Vegan Lettuce Wraps - Spicy!',
    tags: [
      {
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        icon: 'cutlery',
        label: 'Seafood',
      },
    ],
  },
  {
    id: 8,
    imgSrc: chickenRamenSoup,
    favoriteImgSrc: favoriteIcon,
    title: 'Chicken Ramen Soup with Mushroom',
    tags: [
      {
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        icon: 'cutlery',
        label: 'Japanese',
      },
    ],
  },
]
