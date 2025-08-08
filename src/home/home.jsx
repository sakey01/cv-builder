import Navigation from "../components/navigation";
import Table from "../home/table";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex">
      {/* ------ Nav side bar ------ */}
      <Navigation height={"h-screen"}/>
      {/* ------ Header ----- */}
      <main className="flex-col w-full p-4">
        <div className="flex h-max items-center justify-between mb-16 w-full">
          <h1 className="text-2xl font-semibold">CV Builder</h1>
          <div>
            {/* ------ Button to go to editor ----- */}
            <Link className="flex items-center gap-2 btn" to={"/editor"}>
              <span>+</span> Create New CV
            </Link>
          </div>
        </div>

        {/* ------ Table of saved CVs ------ */}
        <Table />
      </main>
    </div>
  );
};

export default Home;
