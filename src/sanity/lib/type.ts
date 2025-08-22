export interface Product {
    _id: string;
    name: string;
    descriptiton?: string;
    price?: number;
    image: {
        asset : {
            _ref: string;
            _type: "image";
        }
    };
} 