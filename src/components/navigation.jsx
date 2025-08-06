import { House, FileText } from "phosphor-react";
import { Link } from "react-router-dom";
import React from "react";

const navItems = [
  { icon: House, path: "/" },
  { icon: FileText, path: "/editor" },
];

const Navigation = () => {
  return (
    <aside>
      <nav className="flex flex-col w-max h-full p-2 gap-4 bg-stone-700 border-r border-stone-500">
        {navItems.map(({ icon, path }, index) => (
          <Link key={index} to={path} className="text-2xl text-white">
               {React.createElement(icon)}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Navigation;
