import React, { useContext, useState } from "react";
import Api from "../../Axios/Api";
import { NavbarContext } from "../../Global/Context";

function Login() {
  const {Auth , setAuth} = useContext(NavbarContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const onSubmit = async () => {
    const User = await Api.post(`/auth/login`, {
      email,
      password,
    });
    setAuth(User.data);
  };
  console.log(Auth);
  return (
    <div>
      {msg && <div className="text-center bg-purple-700">{msg}</div>}
      <form className="m-auto" action="" method="post">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="w-3/4 m-5   bg-gray-200  p-2"
          placeholder="email"
          type="text"
          name="email"
          id=""
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="w-3/4 m-5 bg-gray-200 p-2"
          type="password"
          name="password"
          placeholder="password"
          id=""
        />
        <input
          className="w-3/4 m-5 bg-purple-700 text-white p-2 border-r-3"
          type="button"
          value="Login"
          onClick={onSubmit}
        />
      </form>
    </div>
  );
}

export default Login;
