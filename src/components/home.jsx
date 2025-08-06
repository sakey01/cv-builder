import Navigation from "./navigation";
import Table from "./table";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex">
      <Navigation />
      <main className="flex-col w-full p-4">
        <div className="flex h-max items-center justify-between mb-16 w-full">
          <h1 className="text-2xl font-semibold">CV Maker</h1>
          <div>
            <Link
              className="btn"
              to={"/createCV"}
            >
              + Create New CV
            </Link>
          </div>
        </div>

        <Table />
      </main>
    </div>
  );
};

export default Home;
