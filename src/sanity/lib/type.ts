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

// export interface Product {
//     _id : string;
//     name : string;
//     _type: "product";
//     image : {
//         asset : {
//             _ref : string;
//             _type : "image";
//         }
//     };
//     price : number;
//     description?: string;
//     stock: number;
//     tag?: string;
    // slug : {
    //     _type : "slug";
    //     current : string; 
    // }
// }