const Canvas = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="relative w-[794px] h-[1123px] bg-white shadow-lg overflow-auto">
        <article
          contentEditable
          suppressContentEditableWarning={true}
          className="p-12 text-gray-900"
          style={{ userSelect: "text" }}
        ></article>
      </div>
    </div>
  );
};

export default Canvas;
