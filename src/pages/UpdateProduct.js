import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

async function updateProduct(name, description, price, oldName) {
  await fetch("http://localhost:3003/api/updateProduct", {
    method: "PUT",
    body: JSON.stringify({
      data: {
        name: name,
        description: description,
        price: price,
      },
      oldName: oldName,
    }),
  });
}

export default function CreateProduct() {
  const data = useRouter();
  const product = data.query;
  const [productName, setProductName] = useState(product.name);
  const [productDescription, setProductDescription] = useState(
    product.description
  );
  const [productPrice, setProductPrice] = useState(product.price);

  return (
    <>
      <input
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      ></input>
      <input
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
      ></input>
      <input
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      ></input>
      <button
        onClick={() => {
          updateProduct(
            productName,
            productDescription,
            productPrice,
            product.name
          );
        }}
      >
        updateProduct
      </button>
      <Link href="/">Home</Link>
    </>
  );
}
