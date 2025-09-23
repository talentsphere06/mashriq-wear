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
    // {
    //   "name": "image",
    //   "title": "Image",
    //   "type": "image",
    //   "options": {
    //     "hotspot": true
    //   }
    // },
      {
      name: "variants",
      title: "Variants",
      type: "array",
      of: [
        {
          type: "object",
          name: "variant",
          fields: [
            {
              name: "color",
              title: "Color",
              type: "string",
              options: {
                list: [
                  { title: "White", value: "white" },
                  { title: "Red", value: "red" },
                  { title: "Blue", value: "blue" },
                  { title: "Black", value: "black" },
                  { title: "Yellow", value: "yellow" },
                  { title: "Brown", value: "brown" },
                  { title: "Orange", value: "orange" },
                  { title: "Purple", value: "purple" },
                ],
              },
            },
            {
              name: "images",
              title: "Images",
              type: "array",
              of: [{ type: "image" }],
              options: { hotspot: true },
            },
          ],
        },
      ],
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
