import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mahasiswa from "./pages/Mahasiswa";
import Form from "./pages/Form";
import Navbar from "./component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mahasiswa" element={<Mahasiswa />} />
        <Route path="/mahasiswa/tambah" element={<Form />} />
        <Route path="/mahasiswa/:id" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
