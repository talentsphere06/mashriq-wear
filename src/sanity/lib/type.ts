// export interface Product {
//     _id: string;
//     name: string;
//     slug: {
//     _type: "slug";
//     current: string; 
//     };
//     description: string;
//     price: number;
//     stock: number;
//     category?: string;
//     image: {
//         asset : {
//             _ref: string;
//             _type: "image";
//         }
//     };
// } 

export interface Product {
  image: any;
  _id: string;
  name: string;
  slug: {
    _type: "slug";
    current: string;
  };
  description: string;
  price: number;
  stock: number;
  category?: string;
  fabric?: string;
  care?: string;

  // 👇 replaces single image
  variants: Variant[];
}

export interface Variant {
  color: string;
  images: SanityImage[];
}

// 👇 for images stored in Sanity
export interface SanityImage {
  _key?: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}


export interface Category {
  _id: string;
  name: string;
  slug: {
    _type: "slug";
    current: string;
  }; 
  category: string;
  variants: Variant[];
  // image?: {
  //   asset: {
  //     _ref: string;
  //     _type: "image";
  //   };
  // };
}
