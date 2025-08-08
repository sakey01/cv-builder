import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, DownloadSimple } from "phosphor-react";

const Header = () => {
  const [title, setTitle] = useState("Untitled CV");

  return (
    <header className="flex items-center justify-between mb-16 w-full">
      <div className="flex items-center w-full">
        <Link to="/">
          <ArrowLeft className="text-white rounded hover:bg-stone-700 text-xl" />
        </Link>

        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="CV Title"
          className="px-2 py-1 mx-6 rounded w-full focus:border"
        />
      </div>

      <button className="flex items-center gap-2 btn">
        <DownloadSimple />
        Download
      </button>
    </header>
  );
};

export default Header;
