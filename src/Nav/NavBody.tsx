import React, { useContext } from "react";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  HomeIcon,
  LibraryIcon,
  LightBulbIcon,
  PlusCircleIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { NavbarContext } from "../Global/Context";
export default function NavBody() {

  const {Auth} = useContext(NavbarContext)
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem  title="HOME" Icon={HomeIcon} to={"/"} />
        {Auth.admin=='true' && <> <HeaderItem  title="CREATE" Icon={PlusCircleIcon} to={"/create"} />
        <HeaderItem  title="DESHOARD" Icon={LibraryIcon} to={"/deshboard"} /></>}
        <HeaderItem title="TRENDING" Icon={LightBulbIcon} to={"/TRENDING"} />
        <HeaderItem title="VEIFIED" Icon={BadgeCheckIcon} to={"/VEIFIED"} />
        <HeaderItem title="COLLECTIONS" Icon={SearchIcon} to={"/COLLECTIONS"} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} to={"/account"} />
        
      </div>
      <img
        src="https://img.pngio.com/blog-blogger-blogspot-circle-gradient-media-social-media-icon-blog-icon-png-512_512.png"
        className="object-contain animate-pulse"
         
        width="50px"
      />
      
    </header>
  );
}
