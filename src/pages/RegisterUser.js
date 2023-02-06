import { useRouter } from "next/router";
import { useState } from "react";

async function registerUser(name, email, password) {
  await fetch("http://localhost:3003/api/registerUser", {
    method: "PUT",
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  });
}

export default function RegisterUser() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <input
        placeholder="Nome"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button
        onClick={() => {
          registerUser(name, email, password);
        }}
      >
        Register
      </button>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Home
      </button>
    </>
  );
}
