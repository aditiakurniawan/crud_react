import { createContext, useState, useEffect } from "react";
import MahasiswaService from "../services/MahasiswaService";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      await MahasiswaService.getMahasiswa().then((res) => {
        setMahasiswa(res.data);
        setLoading(false);
        console.log(loading);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        mahasiswa,
        setMahasiswa,
        loading,
        setLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
