const detailItems = ["First Name", "Last Name", "Email", "Phone Number", "City", "LinkedIn"];

const DetailsBody = () => (
  <section className="flex flex-col gap-2">
    {detailItems.map((item, index) => (
      <div key={index} className="flex items-center justify-between">
        <div className="mr-8">
          <label className="text-nowrap">{item}</label>
        </div>
        <input
          name={item}
          className="px-2 py-1 border border-stone-600 rounded focus:border-stone-300"
        />
      </div>
    ))}
  </section>
);

export const ProfileBody = () => (
  <section>
    <label>Summary</label>
    <textarea className="border w-full h-40 p-2" />
  </section>
);

export const ExperienceBody = () => (
  <section>
    <label>Experiences</label>
    <textarea className="border w-full h-40 p-2" />
  </section>
);

export default DetailsBody;