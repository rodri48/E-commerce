import React from "react";

const item = ({ img, articulo, marca, precio }) => {
  return (
    <>
      <h1>this is the catalog</h1>
      <div>
        <h2> {articulo} </h2>
        <h3> {precio} </h3>
        <img src={img} alt="" />
        <h3> {marca} </h3>
      </div>
    </>
  );
};

export default item;
