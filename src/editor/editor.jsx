import Header from "./header";
import Navigation from "../components/navigation";
import ToggleSectionForm from "./toggleSection";
import Canvas from "./canvas";

const Editor = () => {
  return (
    <div className="flex">
      <Navigation height="h-full" />

      <main className="flex flex-col w-full px-8 py-4">
        <Header />

        {/* Content */}
        <div className="grid grid-cols-[1fr_1fr] gap-8">
          <div>
            <div className="flex gap-4 mb-8">
              <button className="btn bg-stone-600">Edit Content</button>
              <button className="btn">Design</button>
            </div>

            <ToggleSectionForm />
          </div>

          {/* A4 Preview page */}
          <Canvas />
        </div>
      </main>
    </div>
  );
};

export default Editor;
