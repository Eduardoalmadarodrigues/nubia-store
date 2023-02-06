import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  async function getUser(userName, password) {
    const response = await fetch("http://localhost:3003/api/getUser", {
      method: "PUT",
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    });
    const data = await response.json();
    setUser(data);
    if (!data.error) {
      setTimeout(() => {console.log(user);router.push({ pathname: "/", query: data })}, 2000);
    }
  }
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [user, setUser] = useState();

  return (
    <>
      <p>{user?.error || (user?.name ? "Seja bem vindo, " + user?.name : "")}</p>
      <input onChange={(e) => setUserName(e.target.value)}></input>
      <input onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={() => getUser(userName, passWord)}>ENTRAR</button>
    </>
  );
}
