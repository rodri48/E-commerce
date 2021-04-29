import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  console.log(items, "productos , itemlist");

  return (
    <div>
      {items.map((dato) => {
        return (
          <div>
            <Item
              style={{ width: "50%", height: "50px" }}
              img={dato.imagen}
              articulo={dato.artiuclo}
              marca={dato.Marca}
              precio={dato.price}
            ></Item>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
