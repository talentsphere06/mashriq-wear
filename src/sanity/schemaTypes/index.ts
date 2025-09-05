import { type SchemaTypeDefinition } from 'sanity'
import { Products } from './product'
import order from './order'
import { Category } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products, Category,order],
}
