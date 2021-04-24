import React, { useState } from "react";

export default function FuncComponent() {
  // state must have a type e.g const, let
  const [articulos] = useState([
    {
      id: 1,
      articulo: "Camiseta",
      Marca: "Nike",
      price: 17.99,
      imagen:
        "https://drifters.com.ar/uploads/product_image/20810/650w_CU0290-010-AA.jpg",
    },
    {
      id: 2,
      articulo: "Zapatos",
      Marca: "Nike",
      price: 20.99,
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1e77b85d-9f41-44aa-acba-6312881b82a5/calzado-air-max-viva-bskNbl.png",
    },
    {
      id: 3,
      articulo: "Short",
      Marca: "Nike",
      price: 15.99,
      image:
        "https://www.plutosport.de/media/catalog/product/cache/image/1800x/040ec09b1e35df139433887a97daa66f/N/i/Nike_Sportswear_Club_Short_Heren.jpg",
    },
  ]);

  console.log(articulos.articulo);

  return (
    <>
      <h1>this is the catalog</h1>
      <div>
        <h2>
          {articulos.map((art) => {
            return (
              <div>
                <h1>{art.articulo}</h1>
                <h3>{art.price} </h3>
                <img src={art.image} alt="" />
              </div>
            );
          })}
        </h2>
      </div>
    </>
  );
}
