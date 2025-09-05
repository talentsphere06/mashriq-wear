export const Category = {
  "name": "category",
  "title": "Category",
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
      "name": "stock",
      "title": "Stock",
      "type": "number"
    },
    {
      "name": "category",
      "title": "Category",
      "type": "string",
    },
  ]
}
