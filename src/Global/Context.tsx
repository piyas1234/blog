import React, { useEffect, useState } from "react";
import Api from "../Axios/Api";
interface NavbarContextValue {
  data: any;
  setData: any;
  Auth: any;
  setAuth: any;
  loading: any;
  setLoading: any;
}

export const NavbarContext = React.createContext<NavbarContextValue>({
  data: String,
  setData: () => {},
  Auth: String,
  setAuth: () => {},
  loading: String,
  setLoading: () => {},
});

const Context = (props: any) => {
  const [data, setData] = useState([]);
  const [Auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    LoadData();
    setLoading(false);
  }, [loading]);

  const LoadData = async () => {
    const allData = await Api.get("/product");
    setData(allData.data);
  };
  return (
    <NavbarContext.Provider
      value={{ data, setData, Auth, setAuth, loading, setLoading }}
    >
      {props.children}
    </NavbarContext.Provider>
  );
};

export default Context;
