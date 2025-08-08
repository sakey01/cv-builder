const Preview = ({ data }) => {
  return (
    <section className="flex justify-center items-start w-full h-full bg-stone-900 p-8">
      <div className="w-full max-w-[794px] aspect-[1/1.4142] bg-white text-black border border-stone-400 shadow-md p-8">
        {/* Name */}
        <h1 className="text-3xl font-bold mb-4">
          {`${data.firstName || ""} ${data.lastName || ""}`.trim()}
        </h1>

        {/* Contact Info */}
        <p>Email: {data.email || "N/A"}</p>
        <p>Phone: {data.phone || "N/A"}</p>
        <p>City: {data.city || "N/A"}</p>
        <p>LinkedIn: {data.linkedIn || "N/A"}</p>
      </div>
    </section>
  );
};

export default Preview;
