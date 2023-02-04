import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

async function getProductList() {
  const response = await fetch("http://localhost:3003/api/getAllProducts", {
    method: "GET",
  });
  const json = await response.json();
  return json;
}

async function getUser() {
  const response = await fetch("http://localhost:3003/api/getUser", {
    method: "GET",
  });
  const json = response.json();
  return json;
}

export default function Home() {
  const [productList, setProductList] = useState();
  const [render, setRender] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getProductList().then((data) => {
      setProductList(data);
      setRender(false);
    });
  }, [render]);

  async function deleteProduct(name) {
    await fetch("http://localhost:3003/api/deleteProduct", {
      method: "PUT",
      body: JSON.stringify({
        name: name,
      }),
    });
    setRender(true);
  }
  
  return (
    <>
      <Link href="CreateProduct">CreateProduct</Link>
      <Link href="RegisterUser">CreateUser</Link>
      {}
      {productList ? (
        productList.map((product, index) => (
          <p id={index}>
            name:{product.name}desc:{product.description},price:
            {product.price}
            <button
              style={{ padding: 20 }}
              onClick={() => {
                deleteProduct(product.name);
              }}
            >
              Delete
            </button>
            <button
              style={{ padding: 20 }}
              onClick={() => {
                router.push({
                  pathname: "/UpdateProduct",
                  query: product,
                });
              }}
            >
              EDIT
            </button>
          </p>
        ))
      ) : (
        <></>
      )}
    </>
  );
}
