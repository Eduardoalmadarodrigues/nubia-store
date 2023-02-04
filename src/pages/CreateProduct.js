import Link from "next/link";
import { useState } from "react";

async function createProduct(name, price, description) {
  await fetch("http://localhost:3003/api/createProduct", {
    method: "PUT",
    body: JSON.stringify({
      name: name,
      price: Number(price),
      description: description,
    }),
  });
}

export default function CreateProduct() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  return (
    <>
      <input
        placeholder="name"
        onChange={(e) => setProductName(e.target.value)}
      ></input>
      <input
        placeholder="description"
        onChange={(e) => setProductDescription(e.target.value)}
      ></input>
      <input
        placeholder="price"
        onChange={(e) => setProductPrice(e.target.value)}
      ></input>
      <button
        style={{ padding: 20 }}
        onClick={() => {
          createProduct(productName, productPrice, productDescription);
        }}
      >
        createProduct
      </button>
      <Link href="/">Home</Link>
    </>
  );
}
