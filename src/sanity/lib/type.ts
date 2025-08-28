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
    image: {
        asset : {
            _ref: string;
            _type: "image";
        }
    };
} 
