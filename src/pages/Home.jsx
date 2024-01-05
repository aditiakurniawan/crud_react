import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";

export default function Home() {
  const { mahasiswa, loading, setLoading } = useContext(DataContext);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <main className="min-h-screen">
      <div>
        <div className="py-32 text-center">
          {loading ? (
            <h1 className="font-extrabold text-4xl ">Loading ...</h1>
          ) : (
            <h1 className="font-extrabold md:text-4xl sm:text-sm">
              Jumlah Mahasiswa : {mahasiswa.length}
            </h1>
          )}
        </div>
      </div>
    </main>
  );
}
