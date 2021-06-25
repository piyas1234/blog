import React, { useState } from "react";
import Api from "../../Axios/Api";

function Signup() {
  const [msg, setMsg] = useState('')
  const [Auth, setAuth] = useState('')
  const [formData, setFormData] = useState({
    name:null,
    email:null,
    password:null,
    confirmPassword:null,
  });
  const onchangeHandler = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

 const onSubmit = async ()=>{
  if(formData.name===null || formData.confirmPassword===null || formData.email===null ){
    return setMsg('Fill all the fields')
  }
  const User = await Api.post(`/auth/signup`,formData)
  setAuth(User.data.message)
  setMsg('')
 }

console.log(Auth)
  return (
    <div>
       {msg && <div className="text-pink-600 text-center bg-green-400 p-2">{msg}</div>}
       {Auth && <div className="text-pink-600 text-center bg-green-400 p-2">{Auth}</div>}

      <form className="m-auto text-center" action="" method="post">
        <input
          className="w-3/4 m-5   bg-gray-200  p-2"
          placeholder="name"
          type="text"
          name="name"
          id=""
          onChange={onchangeHandler}
        />
        <input
          className="w-3/4 m-5   bg-gray-200  p-2"
          placeholder="email"
          type="text"
          name="email"
          id=""
          onChange={onchangeHandler}
        />
        <input
          className="w-3/4 m-5 bg-gray-200 p-2"
          type="password"
          name="password"
          placeholder="password"
          id=""
          onChange={onchangeHandler}
        />
        <input
          className="w-3/4 m-5 bg-gray-200 p-2"
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          id=""
          onChange={onchangeHandler}
        />

        <input
          className="w-3/4 m-5 bg-purple-700 text-white p-2 border-r-3"
          type="button"
          value="SignUp"
          onClick={onSubmit}
        />
      </form>
    </div>
  );
}

export default Signup;
