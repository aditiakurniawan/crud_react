import { useState, useEffect } from "react";
import MahasiswaService from "../services/MahasiswaService";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Mahasiswa() {
  const { mahasiswa, setMahasiswa, loading, setLoading } =
    useContext(DataContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await MahasiswaService.getMahasiswa().then((res) => {
          setMahasiswa(res.data);
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const deleteMahasiswaById = async (id) => {
    await MahasiswaService.deleteMahasiswa(id).then((res) => {
      setMahasiswa(mahasiswa.filter((mahasiswa) => mahasiswa.id !== id));
      console.log(res.data);
    });
  };

  const dateFormat = (date) => {
    return new Date(date).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      const fetchData = async () => {
        try {
          await MahasiswaService.getMahasiswa().then((res) => {
            setMahasiswa(res.data);
            setLoading(false);
          });
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
    setMahasiswa(
      mahasiswa.filter(
        (mahasiswa) =>
          mahasiswa.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !==
          -1
      )
    );
  };

  return (
    <>
      {loading ? (
        <div className=" mx-auto w-1/2 h-screen flex flex-col justify-center items-center gap-10 p-10">
          <h4 className=" text-2xl text-center text-black font-bold">
            Loading...
          </h4>
        </div>
      ) : (
        <main className="min-h-screen md:px-10">
          <div>
            <div className="py-5 text-center">
              <h1 className="font-extrabold text-4xl">Mahasiswa</h1>
            </div>

            <div className="max-w-7xl min-h-screen gap-9 mx-auto">
              <div className="row py-8">
                <Link
                  to="/mahasiswa/tambah"
                  className=" bg-blue-500 text-white px-3 py-1 mx-2"
                >
                  Tambah
                </Link>
                <input
                  type="text"
                  className="shadow border border-slate-100 py-1 px-2"
                  placeholder="  search data..."
                  value={search}
                  onChange={onChangeSearch}
                />
              </div>

              <div className="row  mx-auto">
                <table className="w-full min-h-60 text-center">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Nama</th>
                      <th>Tanggal Lahir</th>
                      <th>Alamat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mahasiswa.map((mahasiswa) => (
                      <tr key={mahasiswa.id}>
                        <td> {mahasiswa.id} </td>
                        <td> {mahasiswa.name} </td>
                        <td>{dateFormat(mahasiswa.tanggal_lahir)}</td>
                        <td> {mahasiswa.alamat}</td>
                        <td>
                          <Link
                            to={`/mahasiswa/${mahasiswa.id}`}
                            className="bg-yellow-500 text-white px-3 py-1 mx-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteMahasiswaById(mahasiswa.id)}
                            className="bg-red-500 text-white px-3 py-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
