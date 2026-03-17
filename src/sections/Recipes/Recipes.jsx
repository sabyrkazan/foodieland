import './Recipes.scss'
import { Section } from '@/layouts/Section'
import { Grid } from '@/components/Grid'
import { RecipeBanner } from '@/components/RecipeBanner'
import { RecipeCard } from '@/components/RecipeCard'
import { recipes } from './recipes.data'

export default () => {
  return (
    <Section
      headerMode="vertical"
      title="Simple and tasty recipes"
      titleId="recipes"
      description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
      descriptionClassName="recipes__description"
    >
      <Grid className="recipes__grid" columns={3}>
        {recipes.map(({ id, ...recipe }) =>
          recipe.type === 'banner' ? (
            <RecipeBanner key={id} />
          ) : (
            <RecipeCard key={id} {...recipe} />
          )
        )}
      </Grid>
    </Section>
  )
}
