import { useState } from "react";
import DetailsBody from "./sectionBody";
import { ProfileBody, ExperienceBody } from "./sectionBody";
import {CaretRight} from 'phosphor-react';

const sectionTitles = [
  "Details",
  "Profile",
  "Experiences",
  "Education",
  "Skills",
  "Projects",
  "Certificates",
  "Volunteering",
];

const SectionComponents = {
  Details: DetailsBody,
  Profile: ProfileBody,
  Experiences: ExperienceBody,
};

const SectionHeaders = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggle = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
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

export default SectionHeaders;
