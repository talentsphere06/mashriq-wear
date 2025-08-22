export const Products = {
  "name": "product",
  "title": "Product",
  "type": "document",
  "fields": [
    {
      "name": "name",
      "title": "Name",
      "type": "string"
    },
    {
      "name": "slug",
      "title": "Slug",
      "type": "slug",
      "options": {
        "source": "name",
        "maxLength": 96
      }
    },
    {
      "name": "image",
      "title": "Image",
      "type": "image",
      "options": {
        "hotspot": true
      }
    },
    {
      "name": "description",
      "title": "Description",
      "type": "text"
    },
    {
      "name": "price",
      "title": "Price",
      "type": "number"
    },
    {
      "name": "size",
      "title": "Size",
      "type": "string",
      "options": {
        "list": [
          { "title": "XS", "value": "xs" },
          { "title": "S", "value": "s" },
          { "title": "M", "value": "m" },
          { "title": "L", "value": "l" },
          { "title": "XL", "value": "xl" }
        ]
      }
    },
    {
      "name": "color",
      "title": "Color",
      "type": "string",
      "options": {
        "list": [
          { "title": "White", "value": "white" },
          { "title": "Black", "value": "black" },
          { "title": "Brown", "value": "brown" }
        ]
      }
    },
    {
      "name": "fabric",
      "title": "Fabric",
      "type": "string"
    },
    {
      "name": "care",
      "title": "Care Instructions",
      "type": "text"
    }
  ]
}
