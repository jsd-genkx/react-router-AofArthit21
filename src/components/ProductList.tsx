import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "I" },
  { id: 2, name: "A" },
  { id: 3, name: "B" },
];

function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;