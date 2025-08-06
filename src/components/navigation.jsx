import { House, FileText } from "phosphor-react";
import { Link } from "react-router-dom";

const navItems = [
  { icon: House, path: "/" },
  { icon: FileText, path: "/createCV" },
];

const Navigation = () => {
  return (
    <aside>
      <nav className="flex flex-col w-max h-screen p-2 gap-4 bg-stone-800 border-r border-gray-400">
        {navItems.map(({ icon: Icon, path }, index) => (
          <Link key={index} to={path} className="text-2xl text-white">
            <Icon />
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Navigation;
