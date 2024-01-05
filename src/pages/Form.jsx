import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MahasiswaService from "../services/MahasiswaService";

export default function Form() {
  const initialMahasiswaState = {
    id: null,
    name: "",
    alamat: "",
    tanggal_lahir: "",
  };
  const [mahasiswa, setMahasiswa] = useState(initialMahasiswaState);
  const [submitted, setSubmitted] = useState(false);
  const { id } = useParams();

  const getMahasiswa = (id) => {
    MahasiswaService.getMahasiswaById(id)
      .then((response) => {
        setMahasiswa(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id) getMahasiswa(id);
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMahasiswa({ ...mahasiswa, [name]: value });
  };

  const saveMahasiswa = () => {
    var data = {
      name: mahasiswa.name,
      alamat: mahasiswa.alamat,
      tanggal_lahir: mahasiswa.tanggal_lahir,
    };

    if (
      mahasiswa.name === "" ||
      mahasiswa.alamat === "" ||
      mahasiswa.tanggal_lahir === ""
    ) {
      alert("Input Tidak Boleh Kosong");
      return;
    }
    MahasiswaService.createMahasiswa(data)
      .then((response) => {
        setMahasiswa({
          id: response.data.id,
          name: response.data.name,
          alamat: response.data.alamat,
          tanggal_lahir: response.data.tanggal_lahir,
        });
        setSubmitted(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newMahasiswa = () => {
    setMahasiswa(initialMahasiswaState);
    setSubmitted(false);
  };

  const updateMahasiswa = () => {
    MahasiswaService.updateMahasiswa(mahasiswa.id, mahasiswa)
      .then((response) => {
        console.log(response.data);
        setSubmitted(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {submitted ? (
        <div
          className="alert alert-success mx-auto w-1/2 h-screen flex flex-col justify-center items-center gap-10 p-10"
          role="alert"
        >
          <h4 className="alert-heading text-4xl text-center text-green-500 font-extrabold">
            Berhasil {id ? "Edit" : "Menambahkan"} Data Mahasiswa
          </h4>
          {id ? (
            <Link to="/mahasiswa" className="bg-blue-500 text-white px-3 py-3">
              Kembali
            </Link>
          ) : (
            <button
              className=" bg-blue-500 text-white px-3 py-3 mx-2"
              onClick={newMahasiswa}
            >
              Tambah Data Mahasiswa
            </button>
          )}
        </div>
      ) : (
        <div>
          <div className="form w-1/2 mx-auto h-screen flex flex-col justify-center items-start gap-3 p-1">
            <h1 className="font-extrabold md:text-2xl lg:text-4xl mx-auto mb-5">
              {id ? "Edit" : "Tambah"} Data Mahasiswa
            </h1>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control shadow border border-slate-500 w-full py-2 px-2"
              id="name"
              required
              value={mahasiswa.name}
              onChange={handleInputChange}
              name="name"
            />

            <label htmlFor="alamat">Alamat</label>
            <input
              type="text"
              className="form-control shadow border border-slate-500 w-full py-2 px-2"
              id="alamat"
              required
              value={mahasiswa.alamat}
              onChange={handleInputChange}
              name="alamat"
            />

            <label htmlFor="tanggal_lahir">Tanggal Lahir</label>
            <input
              type="date"
              className="form-control shadow border border-slate-500 w-full py-2 px-2"
              id="tanggal_lahir"
              required
              value={mahasiswa.tanggal_lahir}
              onChange={handleInputChange}
              name="tanggal_lahir"
            />
            <div className="w-full mt-5">
              <button
                onClick={id ? updateMahasiswa : saveMahasiswa}
                className=" bg-blue-500 text-white px-4 py-2 mx-auto my-5"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
