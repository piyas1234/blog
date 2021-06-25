import React, { useContext, useState } from "react";
import { NavbarContext } from "../../Global/Context";
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./signup";
const AccoutScreen = () => {
  const {Auth, setAuth} = useContext(NavbarContext)
  const [active, setActive] = useState(true);
  console.log(Auth)
  return Auth.auth?
  (<div>
    <Profile data={setAuth} />
  </div>)
  : (
    <div className="lg:w-2/4 md:w-3/4 m-auto bg-white p-10 border-8 border-r-8 text-gray-800">
      {active && <Login />}
      {!active && <Signup />}
      {active && (
        <span>
          Have not a account?{" "}
          <button className="text-blue-700" onClick={() => setActive(!active)}>
            signup
          </button>
        </span>
      )}
      {!active && (
        <span>
          Have a account?{" "}
          <button className="text-blue-700" onClick={() => setActive(!active)}>
            Login
          </button>
        </span>
      )}
    </div>
  );
};

export default AccoutScreen;
