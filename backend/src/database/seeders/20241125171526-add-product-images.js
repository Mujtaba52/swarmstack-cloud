'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductImages', [
      {
        "productId": 1,
        "imageUrl": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 2,
        "imageUrl": "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 3,
        "imageUrl": "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 4,
        "imageUrl": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 5,
        "imageUrl": "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 6,
        "imageUrl": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 6,
        "imageUrl": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 6,
        "imageUrl": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 7,
        "imageUrl": "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 7,
        "imageUrl": "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 7,
        "imageUrl": "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 8,
        "imageUrl": "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 8,
        "imageUrl": "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 8,
        "imageUrl": "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 9,
        "imageUrl": "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 9,
        "imageUrl": "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 9,
        "imageUrl": "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 10,
        "imageUrl": "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 10,
        "imageUrl": "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 10,
        "imageUrl": "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 11,
        "imageUrl": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 11,
        "imageUrl": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 11,
        "imageUrl": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 12,
        "imageUrl": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 12,
        "imageUrl": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 12,
        "imageUrl": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 13,
        "imageUrl": "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 13,
        "imageUrl": "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 13,
        "imageUrl": "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 14,
        "imageUrl": "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 14,
        "imageUrl": "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 14,
        "imageUrl": "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 15,
        "imageUrl": "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 15,
        "imageUrl": "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 15,
        "imageUrl": "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 16,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 17,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 18,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 19,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 19,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 20,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 21,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 22,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 23,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Eggs/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 24,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 25,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 26,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 27,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 28,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 28,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 28,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 28,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 29,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Juice/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 30,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 31,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Lemon/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 32,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Milk/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 33,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Mulberry/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 34,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Nescafe%20Coffee/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 35,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Potatoes/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 36,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Protein%20Powder/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 37,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Red%20Onions/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 38,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Rice/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 39,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Soft%20Drinks/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 40,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Strawberry/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 41,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 41,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 42,
        "imageUrl": "https://cdn.dummyjson.com/products/images/groceries/Water/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 43,
        "imageUrl": "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 43,
        "imageUrl": "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 43,
        "imageUrl": "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 44,
        "imageUrl": "https://cdn.dummyjson.com/products/images/home-decoration/Family%20Tree%20Photo%20Frame/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 45,
        "imageUrl": "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 45,
        "imageUrl": "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 45,
        "imageUrl": "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 46,
        "imageUrl": "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 46,
        "imageUrl": "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 46,
        "imageUrl": "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 46,
        "imageUrl": "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 47,
        "imageUrl": "https://cdn.dummyjson.com/products/images/home-decoration/Table%20Lamp/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 48,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Bamboo%20Spatula/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 49,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 49,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 50,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Whisk/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 51,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 51,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 51,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 51,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 52,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Carbon%20Steel%20Wok/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 53,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Chopping%20Board/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 54,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Citrus%20Squeezer%20Yellow/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 55,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Egg%20Slicer/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 56,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 56,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 56,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 56,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 57,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fine%20Mesh%20Strainer/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 58,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fork/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 59,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Glass/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 60,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Grater%20Black/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 61,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Hand%20Blender/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 62,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Ice%20Cube%20Tray/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 63,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Kitchen%20Sieve/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 64,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Knife/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 65,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Lunch%20Box/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 66,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 66,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 66,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 66,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 67,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 67,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 68,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Pan/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 69,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Plate/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 70,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Red%20Tongs/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 71,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Silver%20Pot%20With%20Glass%20Cap/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 72,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Slotted%20Turner/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 73,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spice%20Rack/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 74,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spoon/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 75,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Tray/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 76,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Wooden%20Rolling%20Pin/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 77,
        "imageUrl": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Yellow%20Peeler/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 78,
        "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 78,
        "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 78,
        "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 79,
        "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 79,
        "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 79,
        "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 80,
        "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 80,
        "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 80,
        "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 81,
        "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 81,
        "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 81,
        "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 82,
        "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 82,
        "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 82,
        "imageUrl": "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 83,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 83,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 83,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 83,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 84,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 84,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 84,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 84,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 85,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 85,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 85,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 85,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 86,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 86,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 86,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 86,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 87,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 87,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 87,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 87,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 88,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 88,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 88,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 88,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 89,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 89,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 89,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 89,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 90,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 90,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 90,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 90,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 91,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 91,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 91,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 91,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 92,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 92,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 92,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 92,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 93,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 93,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 93,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 94,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 94,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 94,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 95,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 95,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 95,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 96,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 96,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 96,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 97,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 97,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 97,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 98,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 98,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 98,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 99,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 99,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 100,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 100,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 100,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 101,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 102,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpower%20Wireless%20Charger/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 103,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20HomePod%20Mini%20Cosmic%20Grey/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 104,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 104,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 105,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 105,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 106,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 106,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 106,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 107,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Beats%20Flex%20Wireless%20Earphones/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 108,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 108,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 108,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 108,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 109,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Monopod/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 109,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Monopod/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 110,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 111,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Stick%20Monopod/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 112,
        "imageUrl": "https://cdn.dummyjson.com/products/images/mobile-accessories/TV%20Studio%20Camera%20Pedestal/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 113,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 113,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 113,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 113,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 114,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 114,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 114,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 114,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 115,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 115,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 115,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 115,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 116,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 116,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 116,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 116,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 117,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 117,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 117,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 117,
        "imageUrl": "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 118,
        "imageUrl": "https://cdn.dummyjson.com/products/images/skin-care/Attitude%20Super%20Leaves%20Hand%20Soap/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 118,
        "imageUrl": "https://cdn.dummyjson.com/products/images/skin-care/Attitude%20Super%20Leaves%20Hand%20Soap/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 118,
        "imageUrl": "https://cdn.dummyjson.com/products/images/skin-care/Attitude%20Super%20Leaves%20Hand%20Soap/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 119,
        "imageUrl": "https://cdn.dummyjson.com/products/images/skin-care/Olay%20Ultra%20Moisture%20Shea%20Butter%20Body%20Wash/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 119,
        "imageUrl": "https://cdn.dummyjson.com/products/images/skin-care/Olay%20Ultra%20Moisture%20Shea%20Butter%20Body%20Wash/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 119,
        "imageUrl": "https://cdn.dummyjson.com/products/images/skin-care/Olay%20Ultra%20Moisture%20Shea%20Butter%20Body%20Wash/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 120,
        "imageUrl": "https://cdn.dummyjson.com/products/images/skin-care/Vaseline%20Men%20Body%20and%20Face%20Lotion/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 120,
        "imageUrl": "https://cdn.dummyjson.com/products/images/skin-care/Vaseline%20Men%20Body%20and%20Face%20Lotion/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 120,
        "imageUrl": "https://cdn.dummyjson.com/products/images/skin-care/Vaseline%20Men%20Body%20and%20Face%20Lotion/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 121,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 121,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 121,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 122,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 122,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 122,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 123,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 123,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 123,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 124,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 124,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 124,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 125,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 125,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 125,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 126,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 126,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 126,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 127,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 127,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 127,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 127,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 128,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 128,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 128,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 129,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 129,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 129,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 130,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 130,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 130,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 131,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 131,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 131,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 132,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 132,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 132,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 133,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 133,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 133,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 134,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 134,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 134,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 135,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 135,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 135,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 136,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 136,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 136,
        "imageUrl": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 137,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/American%20Football/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 138,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Ball/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 139,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Glove/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 139,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Glove/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 139,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Glove/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 140,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 141,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball%20Rim/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 142,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Ball/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 143,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Bat/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 144,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 144,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 144,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 144,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 145,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Wicket/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 146,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Feather%20Shuttlecock/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 147,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Football/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 148,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Golf%20Ball/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 149,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Iron%20Golf/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 150,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Metal%20Baseball%20Bat/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 151,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Ball/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 152,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Racket/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 153,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sports-accessories/Volleyball/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 154,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 154,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 154,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 155,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sunglasses/Classic%20Sun%20Glasses/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 155,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sunglasses/Classic%20Sun%20Glasses/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 155,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sunglasses/Classic%20Sun%20Glasses/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 156,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 156,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 156,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 157,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 157,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 157,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 158,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 158,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 158,
        "imageUrl": "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 159,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 159,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 159,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 159,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 160,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 160,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 160,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 160,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 161,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 161,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 161,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 161,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 162,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Blue%20Frock/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 162,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Blue%20Frock/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 162,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Blue%20Frock/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 162,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Blue%20Frock/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 163,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 163,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 163,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 163,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 164,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 164,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 164,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 164,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 165,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Short%20Frock/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 165,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Short%20Frock/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 165,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Short%20Frock/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 165,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Short%20Frock/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 166,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 166,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 166,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 166,
        "imageUrl": "https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 167,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 167,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 167,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 167,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 167,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/5.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 167,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/6.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 168,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 168,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 168,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 168,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 168,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/5.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 168,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/6.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 169,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 169,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 169,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 169,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 169,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/5.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 169,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/6.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 170,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 170,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 170,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 170,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 170,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/5.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 170,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/6.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 171,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 171,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 171,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 171,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 171,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/5.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 171,
        "imageUrl": "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/6.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 172,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 172,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 172,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 173,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-bags/Heshe%20Women's%20Leather%20Bag/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 173,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-bags/Heshe%20Women's%20Leather%20Bag/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 173,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-bags/Heshe%20Women's%20Leather%20Bag/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 174,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 174,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 174,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 175,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-bags/White%20Faux%20Leather%20Backpack/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 175,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-bags/White%20Faux%20Leather%20Backpack/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 175,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-bags/White%20Faux%20Leather%20Backpack/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 176,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-bags/Women%20Handbag%20Black/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 176,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-bags/Women%20Handbag%20Black/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 176,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-bags/Women%20Handbag%20Black/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 177,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 177,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 177,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 177,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 178,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 178,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 178,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 178,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 179,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 179,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 179,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 179,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 180,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 180,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 180,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 180,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 181,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 181,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 181,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 181,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 182,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Crystal%20Earring/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 182,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Crystal%20Earring/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 182,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Crystal%20Earring/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 183,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 183,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 183,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 184,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-jewellery/Tropical%20Earring/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 184,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-jewellery/Tropical%20Earring/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 184,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-jewellery/Tropical%20Earring/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 185,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 185,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 185,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 185,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 186,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 186,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 186,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 186,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 187,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 187,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 187,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 187,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 188,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 188,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 188,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 188,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 189,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 189,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 189,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 189,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/4.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 190,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 190,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 190,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 191,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 191,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 191,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 192,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 192,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 192,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 193,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 193,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 193,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/3.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 194,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-watches/Women's%20Wrist%20Watch/1.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 194,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-watches/Women's%20Wrist%20Watch/2.png"
       ,"createdAt": "2024-05-23T08:56:21.618Z"
},
      {
        "productId": 194,
        "imageUrl": "https://cdn.dummyjson.com/products/images/womens-watches/Women's%20Wrist%20Watch/3.png"
        ,"createdAt": "2024-05-23T08:56:21.618Z"
      }
    ], {});

},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductImages', null, {});
  }
};
