import { useState } from "react";
import { CaretRight } from "phosphor-react";
import { PersonalDetails, Summary, WorkExperience } from "./sectionForm";

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

// Key value pair for section titles
const SectionComponents = {
  "Personal Details": PersonalDetails,
  Summary,
  "Work Experience": WorkExperience,
};

const CVSectionList = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [formData, setFormData] = useState({});

  // Toggle visibilty of title content
  const toggle = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    // Map title to components
    <div className="flex flex-col gap-6 w-full">
      {sectionTitles.map((title, index) => (
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
            {title}
          </button>

          {/* Conditionally render components if the index matches */}
          {isOpen === index &&
            SectionComponents[title] &&
            (() => {
              const Component = SectionComponents[title];
              return <Component data={formData} setData={setFormData} />;
            })()}

          <hr className="text-stone-600 opacity-60" />
        </div>
      ))}
    </div>
  );
};

export default CVSectionList;
