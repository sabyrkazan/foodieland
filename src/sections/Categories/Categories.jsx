import './Categories.scss'
import { Section } from '@/layouts/Section'
import { CategoryCard } from '@/components/CategoryCard'
import { Grid } from '@/components/Grid'
import { categories } from './categories.data'

export default () => {
  return (
    <Section
      headerMode="justify-between"
      title="Categories"
      titleId="categories"
      linkLabel="View All Categories"
    >
      <Grid columns={6}>
        {categories.map(({ id, ...category }) => (
          <CategoryCard key={id} {...category} />
        ))}
      </Grid>
    </Section>
  )
}
