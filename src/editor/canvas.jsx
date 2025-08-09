const A4_WIDTH = 210;
const A4_HEIGHT = 297;
const A4_ASPECT_RATIO = A4_HEIGHT / A4_WIDTH;

const Canvas = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      {/* Responsive container for a4 paper */}
      <div className="relative">
        <article
          contentEditable
          suppressContentEditableWarning={true}
          className="p-8  text-gray-900
                     font-sans text-base leading-relaxed"
          style={{ userSelect: "text" }}
        >
          <h1 className="text-3xl font-bold mb-1">Your Name</h1>
          <p className="text-sm text-gray-600 mb-6">
            Job Title • Location • email@example.com • 01234 567890
          </p>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <p>Write a short summary about yourself and your experience...</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Experience</h2>
            <h3 className="text-lg font-semibold">Job Title — Company</h3>
            <p className="text-sm text-gray-500 mb-2">Month Year — Present</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Responsibility or achievement one</li>
              <li>Responsibility or achievement two</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            <p>School / University — Degree</p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Canvas;
