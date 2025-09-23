// export const Products = {
//   "name": "product",
//   "title": "Product",
//   "type": "document",
//   "fields": [
//     {
//       "name": "name",
//       "title": "Name",
//       "type": "string"
//     },
//     {
//       "name": "slug",
//       "title": "Slug",
//       "type": "slug",
//       "options": {
//         "source": "name",
//         "maxLength": 96
//       }
//     },
//     {
//       "name": "image",
//       "title": "Image",
//       "type": "image",
//       "options": {
//         "hotspot": true
//       }
//     },
//     {
//       "name": "description",
//       "title": "Description",
//       "type": "text"
//     },
//     {
//       "name": "price",
//       "title": "Price",
//       "type": "number"
//     },
//     {
//       "name": "size",
//       "title": "Size",
//       "type": "string",
//       "options": {
//         "list": [
//           { "title": "XS", "value": "xs" },
//           { "title": "S", "value": "s" },
//           { "title": "M", "value": "m" },
//           { "title": "L", "value": "l" },
//           { "title": "XL", "value": "xl" }
//         ]
//       }
//     },
//     // {
//     //   "name": "color",
//     //   "title": "Color",
//     //   "type": "string",
//     //   "options": {
//     //     "list": [
//     //       { "title": "White", "value": "white" },
//     //       { "title": "Black", "value": "black" },
//     //       { "title": "Brown", "value": "brown" }
//     //     ]
//     //   }
//     // },
//     {
//   name: "color",
//   title: "Color",
//   type: "array",
//   of: [{ type: "string" }],
//   options: {
//     list: [
//       { title: "White", value: "white" },
//       { title: "Red", value: "red" },
//       { title: "Blue", value: "blue" },
//       { title: "Black", value: "black" },
//       { title: "Yellow", value: "yellow" },
//       { title: "Brown", value: "brown" }
//     ],
//     layout: "checkbox"
//   }
// },
//     {
//       "name": "stock",
//       "title": "Stock",
//       "type": "number"
//     },
//     {
//       "name": "category",
//       "title": "Category",
//       "type": "string",
//     },
//     {
//       "name": "fabric",
//       "title": "Fabric",
//       "type": "string"
//     },
//     {
//       "name": "care",
//       "title": "Care Instructions",
//       "type": "text"
//     }
//   ]
// }


export const Products = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },

    // 👇 NEW: Variants (color + images)
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
                  { title: "Green", value: "green" },
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
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },

    // 👇 Sizes as array instead of single string
    {
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "XS", value: "xs" },
          { title: "S", value: "s" },
          { title: "M", value: "m" },
          { title: "L", value: "l" },
          { title: "XL", value: "xl" },
        ],
      },
    },

    {
      name: "stock",
      title: "Stock",
      type: "number",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "fabric",
      title: "Fabric",
      type: "string",
    },
    {
      name: "care",
      title: "Care Instructions",
      type: "text",
    },
  ],
};
