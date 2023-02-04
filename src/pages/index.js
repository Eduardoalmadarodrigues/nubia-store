import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {InfoWrapper, ProductWrapper} from '../styles/index'

async function getProductList() {
  const response = await fetch("http://localhost:3000/api/getAllProducts", {
    method: "GET",
  });
  const json = await response.json();
  return json;
}

async function getUser() {
  const response = await fetch("http://localhost:3000/api/getUser", {
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
    getProductList().then((data) => {+
      setProductList(data);
      setRender(false);
    });
  }, [render]);

  async function deleteProduct(name) {
    await fetch("http://localhost:3000/api/deleteProduct", {
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
          <ProductWrapper id={index}>
           <InfoWrapper>name:{product.name}</InfoWrapper> <InfoWrapper>desc:{product.description}</InfoWrapper>,price:
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
          </ProductWrapper>
        ))
      ) : (
        <></>
      )}
    </>
  );
}
