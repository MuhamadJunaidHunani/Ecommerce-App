import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  productList = [
    {
      categoryName: "Electronics",
      products: [
        {
          productId: 1,
          productName: "Headphones",
          productImg: "src/assets/Images/ProductImages/headphone.avif",
          productAlt: "Image of Headphones",
          productDescription: "High-quality headphones with noise-cancellation and superior sound.",
          productPrice: 199.99
        },
        {
          productId: 2,
          productName: "Laptop",
          productImg: "src/assets/Images/ProductImages/laptop.jpg",
          productAlt: "Image of Laptop",
          productDescription: "A powerful laptop suitable for all your computing needs.",
          productPrice: 999.99
        },
        {
          productId: 3,
          productName: "Mouse",
          productImg: "src/assets/Images/ProductImages/mouse.jpg",
          productAlt: "Image of Mouse",
          productDescription: "An ergonomic wireless mouse with high precision.",
          productPrice: 29.99
        },
        {
          productId: 4,
          productName: "Speaker",
          productImg: "src/assets/Images/ProductImages/speaker.jpg",
          productAlt: "Image of Speaker",
          productDescription: "A portable Bluetooth speaker with excellent sound quality.",
          productPrice: 49.99
        }
      ]
    },
    {
      categoryName: "Home Appliances",
      products: [
        {
          productId: 5,
          productName: "Washing Machine",
          productImg: "src/assets/Images/ProductImages/washmach.avif",
          productAlt: "Image of Washing Machine",
          productDescription: "A high-efficiency washing machine with multiple wash settings.",
          productPrice: 499.99
        },
        {
          productId: 6,
          productName: "Microwave Oven",
          productImg: "src/assets/Images/ProductImages/oven.webp",
          productAlt: "Image of Microwave Oven",
          productDescription: "A compact microwave oven with quick heating capabilities.",
          productPrice: 89.99
        },
        {
          productId: 7,
          productName: "Blender",
          productImg: "src/assets/Images/ProductImages/glender.webp",
          productAlt: "Image of Blender",
          productDescription: "A powerful blender perfect for smoothies and soups.",
          productPrice: 59.99
        },
        {
          productId: 8,
          productName: "Iron",
          productImg: "src/assets/Images/ProductImages/iron.jpg",
          productAlt: "Image of Iron",
          productDescription: "A steam iron with adjustable temperature settings.",
          productPrice: 29.99
        }
      ]
    },
    {
      categoryName: "Fashion",
      products: [
        {
          productId: 9,
          productName: "Shirt",
          productImg: "src/assets/Images/ProductImages/shirt.webp",
          productAlt: "Image of Shirt",
          productDescription: "A comfortable cotton shirt available in various sizes.",
          productPrice: 19.99
        },
        {
          productId: 10,
          productName: "Watch",
          productImg: "E:/MY PROJECTS/test/src/assets/Images/ProductImages/watch.png",
          productAlt: "Image of Watch",
          productDescription: "A stylish wristwatch with a leather strap.",
          productPrice: 79.99
        },
        {
          productId: 11,
          productName: "Shoes",
          productImg: "src/assets/Images/ProductImages/shoes.webp",
          productAlt: "Image of Shoes",
          productDescription: "Comfortable and durable shoes for everyday wear.",
          productPrice: 49.99
        },
        {
          productId: 12,
          productName: "Jacket",
          productImg: "src/assets/Images/ProductImages/jacket.avif",
          productAlt: "Image of Jacket",
          productDescription: "A stylish and warm jacket for cold weather.",
          productPrice: 99.99
        }
      ]
    }
  ];
}
