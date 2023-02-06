import { useRouter } from "next/router";
import defaultUserImage from "public/defaultUserImage";
import { useState } from "react";

async function registerUser(name, email, password, userImage) {
  await fetch("http://localhost:3003/api/registerUser", {
    method: "PUT",
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      image: userImage
    }),
  });
}

export default function RegisterUser() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userImage, setUserImage] = useState(defaultUserImage)
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
        <input
            accept="image/jpg"
            type="file"
        placeholder="image"     
        onChange={(e) =>{         
          const reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);
          reader.onload = () => {
            setUserImage(reader.result);
          }}}
      ></input>
      <button
        onClick={() => {
          registerUser(name, email, password, userImage);
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
