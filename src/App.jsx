import React, { createContext, useState } from 'react';
import Cart from './Components/Cart';

export const mycontext=createContext('');
const App = () => {
  const value=[
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://fr.shopping.rakuten.com/photo/1931622228_L.jpg"
              
            ]
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
              "https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg?downsize=*:360"
             
            ]
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            "images": [
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTrl5E4K666jipl34nqGDyIJJic8TT4EUwXR-hXwidCSAsosqbRqr4IIqjKM7qS48D1x2eAJ7o-YtoclJUanbAN8o3Z6IUssVgc3rpjj17u6NnLfE0wbRrf",
                
            ]
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            "images": [
                "https://www.oppo.com/content/dam/oppo/product-asset-library/f19/f19-overview-v1/v1/assets/chunk3-img-1920.jpg",
                
            ]
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            "images": [
                "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p30/P30_orange.png",
                
            ]
        }
    ]
  const[data,setData]=useState(value);

  return (
    <div>
     
      <mycontext.Provider value={[data,setData]}>
        <Cart />
      </mycontext.Provider>
    </div>
  );
};

export default App;