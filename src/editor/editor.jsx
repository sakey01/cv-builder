import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, DownloadSimple } from "phosphor-react";
import Navigation from "../components/navigation";
import SectionHead from "./section/sectionList";
import Preview from "./preview";

// ---- Main Page -------
const Editor = () => {
  const [title, setTitle] = useState("Untitled CV");

  return (
    <div className="flex">
      <Navigation />

      <main className="flex flex-col w-full px-8 py-4">

        {/* ---------- Header ----------*/}
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
              className="px-2 py-1 mx-6 rounded w-full focus:border"
              placeholder="CV Title"
            />
          </div>
          {/* ------ Right-side Header ------ */}
          <button className="flex items-center gap-2 btn">
            <DownloadSimple />
            Download
          </button>
        </header>

        {/* ------- Content -------- */}
        <div className="grid grid-cols-[1fr_1fr] gap-8">
          <div>
            <div className="flex gap-4 mb-8">
              <button className="btn bg-stone-600">Edit Content</button>
              <button className="btn">Design</button>
            </div>
            {/* ------- Section title list ------- */}
            <SectionHead />
          </div>
          {/* ------- CV page preview ------- */}
          <Preview />
        </div>
      </main>
    </div>
  );
};

export default Editor;
