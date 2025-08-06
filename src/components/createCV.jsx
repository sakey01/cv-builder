import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, DownloadSimple, CaretRight } from "phosphor-react";
import Navigation from "./navigation";


// Section content
const detailItems = [
  "First Name", "Last Name", "Email", "Phone Number", "City", "LinkedIn"
]

const DetailsBody = () => {
  return (
    <section className="flex flex-col gap-2">
      {detailItems.map((item, index) => {
        return (
          <div key={index} className="flex gap-4">
            <label>{item}</label>
            <input name={item} className="px-2 py-1 border"/>
          </div>
        )
      })}
    </section>
  );
};

const ProfileBody = () => {
  return (
    <section >
      <label>Summary</label>
      <textarea className="border w-full h-40 p-2"/>
    </section>
  );
};

const ExperienceBody = () => {
  return (
    <section >
      <label>Experiences</label>
      <textarea className="border w-full h-40 p-2"/>
    </section>
  );
};

const sectionTitles = ["Details", "Profile", "Experience", "Education", "Skills", "Certificates"];

const SectionComponents = {
  Details: DetailsBody,
  Profile: ProfileBody,
  Experience: ExperienceBody,
};

// section titles
const SectionHeaders = () => {
  const [isOpen, setisOpen] = useState(null);

  const toggle = (index) => {
    setisOpen(isOpen === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {sectionTitles.map((sectionTitle, index) => (
        <div key={index} className="flex flex-col gap-4">
          <button
            onClick={() => toggle(index)}
            className="flex items-center gap-4 cursor-pointer transition duration-300 hover:underline"
          >
            <span
              className={`transition-transform duration-300 ${
                isOpen === index ? "rotate-90" : "rotate-0"
              }`}
            >
              <CaretRight />
            </span>
            {sectionTitle}
          </button>
          {isOpen === index &&
            (() => {
              const Component = SectionComponents[sectionTitle];
              return Component ? <Component /> : null;
            })()}
          <hr className="text-stone-600" />
        </div>
      ))}
    </div>
  );
};

// PAGE
const Page = () => {
  return (
    <section className="h-screen p-4">
      <div className="w-full h-full bg-white border rounded shadow-lg p-4"></div>
    </section>
  );
};


// Main
const CreateCV = () => {
  const [title, setTitle] = useState("undefined");

  return (
    <div className="flex">
      <Navigation />
      <main className="flex flex-col w-full px-8 py-4">
        <header className="flex items-center justify-between mb-16 w-full">
          <Link to="/">
            <ArrowLeft />
          </Link>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-1/2 px-2 py-1 focus:border"
            placeholder="CV Title"
          />
          <button className="flex items-center gap-2 btn">
            <DownloadSimple />
            Download
          </button>
        </header>

        <div className="grid grid-cols-[1fr_1fr] gap-8">
          <section>
            <div className="flex gap-4 mb-8">
              <button className="btn bg-stone-600">
                Edit Content
              </button>
              <button className="btn">Design</button>
            </div>
            <SectionHeaders />
          </section>
          <Page />
        </div>
      </main>
    </div>
  );
};

export default CreateCV;
