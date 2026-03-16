import './Recipes.scss'
import { Section } from '@/layouts/Section'

export default () => {
  return (
    <Section
      headerMode="vertical"
      title="Simple and tasty recipes"
      titleId="recipes"
      description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
      descriptionClassName="recipes__description"
    ></Section>
  )
}
