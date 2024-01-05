import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export default function Navbar() {
  const { loading, setLoading } = useContext(DataContext);
  return (
    <nav className="bg-black border-b-2 border-gray-800">
      <div className=" sm:max-w-full md:max-w-2xl lg:max-w-7xl xl:max-w-screen 2xl:w-screen-2xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className=" flex items-center space-x-1">
              <Link
                to="/"
                className="xs:py-3 sm:py-4 md:py-5 py-2 px-3  hover:text-white text-gray-400"
              >
                {loading ? "Loading..." : "Logo"}
              </Link>
            </div>
          </div>

          <div className=" flex items-center space-x-1">
            <Link
              to="/"
              className="xs:py-3 sm:py-4 md:py-5 py-2 px-3  hover:text-white text-gray-400"
              onClick={() => setLoading(true)}
            >
              Home
            </Link>
            <Link
              to="/mahasiswa"
              className="xs:py-3 sm:py-4 md:py-5 py-2 px-3  hover:text-white text-gray-400"
              onClick={() => setLoading(true)}
            >
              Mahasiswa
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
