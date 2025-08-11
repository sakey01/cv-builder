import { useState } from "react";
import { CaretRight } from "phosphor-react";

const sectionTitles = [
  "Personal Details",
  "Summary",
  "Work Experience",
  "Education",
  "Skills",
  "Projects",
  "Certifications",
  "Volunteering",
];

const CVSectionList = () => {
  const [isOpen, setIsOpen] = useState([]);

  const toggle = (title) => {
    if (isOpen.includes(title)) setIsOpen(isOpen.filter((i) => i !== title));
    else setIsOpen([...isOpen, title]);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {sectionTitles.map((title) => (
        <div key={title} className="flex flex-col gap-4">
          <button
            onClick={() => toggle(title)}
            className="flex items-center gap-4 cursor-pointer transition duration-300 hover:underline"
          >
            <span
              className={`transition-transform duration-300 ${
                isOpen.includes(title) ? "rotate-90" : "rotate-0"
              }`}
            >
              <CaretRight />
            </span>
            {title}
          </button>

          {isOpen.includes(title) && <h1>hello</h1>}

          <hr className="text-stone-600 opacity-60" />
        </div>
      ))}
    </div>
  );
};

export default CVSectionList;
