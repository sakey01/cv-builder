import { useState } from "react";
import PersonalDetails, {  Summary, WorkExperience } from "./content";
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

// ----- Maps title list into components ------
const SectionComponents = {
  "Personal Details": PersonalDetails,
  Summary: Summary,
  "Work Experience": WorkExperience,
};
// ----- Title for each section which can be toggled to display components assigned -------
const List = () => {
  const [isOpen, setIsOpen] = useState(null);

  // ------ Index matching to correctly display components -------
  const toggle = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };


  // ------ Maping titles into compnents ------
  return (
    <div className="flex flex-col gap-6 w-full">
      {sectionTitles.map((title, index) => (
        <div key={index} className="flex flex-col gap-4">
          <button
            onClick={() => toggle(index)}
            className="flex items-center gap-4 cursor-pointer transition duration-300 hover:underline"
          >
            {/* ----- Rotate the arrow down on open ----- */}
            <span
              className={`transition-transform duration-300 ${
                isOpen === index ? "rotate-90" : "rotate-0"
              }`}
            >
              <CaretRight />
            </span>
            {title}
          </button>

          {/* ------ Conditinoally display the content under title ----- */}
          {isOpen === index &&
            (() => {
              const Component = SectionComponents[title];
              return Component ? <Component /> : null;
            })()}

          <hr className="text-stone-600 opacity-60" />
        </div>
      ))}
    </div>
  );
};

export default List;
