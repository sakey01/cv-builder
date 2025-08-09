const detailItems = ["First Name", "Last Name", "Email", "Phone", "City", "LinkedIn"];

export const PersonalDetails = ({ data, setData }) => {
  return (
    <section className="flex flex-col gap-4 p-4">
      {detailItems.map((item) => (
        <div key={item} className="flex flex-col">
          <label htmlFor={item} className="mb-1">
            {item}
          </label>
          <input
            id={item}
            type="text"
            name={item}
            value={data[item] || ""}
            onChange={(e) => setData({ ...data, [item]: e.target.value })}
            className="px-2 py-1 border border-stone-600 rounded focus:border-stone-300"
          />
        </div>
      ))}
    </section>
  );
};

export const Summary = ({ data }) => (
  <div className="flex flex-col gap-4 p-4">
    <label>Summary</label>
    <textarea
      type="text"
      name="summary"
      value={""}
      onChange={(e) => {e.target.value = data[Summary]}}
      className="px-2 py-1 border border-stone-600 rounded focus:border-stone-300 resize-none"
    />
  </div>
);

export const WorkExperience = ({ data }) => (
  <div className="flex flex-col gap-4 p-4">
    <label>Summary</label>
    <textarea
      type="text"
      name="summary"
      value={data[WorkExperience] || ""}
      onChange={(e) => {e.target.value = data[WorkExperience]}}
      className="px-2 py-1 border border-stone-600 rounded focus:border-stone-300 resize-none"
    />
  </div>
);
