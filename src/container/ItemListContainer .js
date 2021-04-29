import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

function ItemListContainer({ greetings }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      const productos = [
        {
          id: 1,
          articulo: "Camiseta",
          Marca: "Nike",
          price: 17.99,
          imagen:
            "https://images-na.ssl-images-amazon.com/images/I/71Oi2Yrl60L._AC_UX385_.jpg",
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
            "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa0e3a63e/products/NI_AR2375-010/NI_AR2375-010-1.JPG",
        },
      ];

      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });

    promesa
      .then((res) => {
        console.log(res, "promesa");
        setItems(res);
      })

      .catch(() => {
        console.log("hubo un problema");
      });
  }, []);

  return (
    <div>
      <h1> {greetings} </h1>

      <div>
        <ItemList items={items} />
      </div>
    </div>
  );
}

export default ItemListContainer;
