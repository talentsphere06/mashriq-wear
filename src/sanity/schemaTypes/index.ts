import { type SchemaTypeDefinition } from 'sanity'
import { Products } from './product'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products, order],
}
