import { useState } from "react";
import PersonalDetails from "./section/content";
import Preview from "./preview";

const PreviewContent = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    linkedIn: "",
  });

  return (
    <div className="flex gap-8 p-8 bg-stone-800 min-h-screen text-white">
      <PersonalDetails data={data} setData={setData} />
      <Preview data={data} />
    </div>
  );
};

export default PreviewContent;
