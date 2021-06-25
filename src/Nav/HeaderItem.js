import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function HeaderItem({ title, Icon, to }) {
  return (
    <NavLink activeClassName="animate-bounce"  to={to}>
      <div className="group items-center flex flex-col cursor-pointer w-12 sm:w-20 hover:text-white">
        <Icon className="h-8 mb-1 group-hover:animate-bounce" />
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">
          {" "}
          {title}
        </p>
      </div>
    </NavLink>
  );
}
