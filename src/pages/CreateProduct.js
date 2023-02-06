import Link from "next/link";
import defaultProductImage from "public/defaultProductImage";
import { useState } from "react";

async function createProduct(name, price, description, productImage) {
  await fetch("http://localhost:3003/api/createProduct", {
    method: "PUT",
    body: JSON.stringify({
      name: name,
      price: Number(price),
      description: description,
      image: productImage
    }),
  });
}

export default function CreateProduct() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState(defaultProductImage);
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
            <input
            accept="image/jpg"
            type="file"
        placeholder="image"     
        onChange={(e) =>{         
          const reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);
          reader.onload = () => {
            setProductImage(reader.result);
          }}}
      ></input>
      <button
        style={{ padding: 20 }}
        onClick={() => {
          createProduct(productName, productPrice, productDescription, productImage);
        }}
      >
        createProduct
      </button>
      <Link href="/">Home</Link>
    </>
  );
}
