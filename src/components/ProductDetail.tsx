import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams(); // ดึง id จาก URL

  return <div>Product Detail for ID: {id}</div>;
}

export default ProductDetail;
