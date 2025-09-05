export interface Product {
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
    image: {
        asset : {
            _ref: string;
            _type: "image";
        }
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
  image?: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
}
