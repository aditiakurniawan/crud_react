import axios from "axios";

const url =
  "https://65955e5804335332df829205.mockapi.io/api-nashta/v1/mahasiswa";

class MahasiswaService {
  getMahasiswa() {
    return axios.get(url);
  }

  getMahasiswaById(id) {
    return axios.get(`${url}/${id}`);
  }

  createMahasiswa(data) {
    return axios.post(url, data);
  }

  updateMahasiswa(id, data) {
    return axios.put(`${url}/${id}`, data);
  }

  deleteMahasiswa(id) {
    return axios.delete(`${url}/${id}`);
  }

  deleteAllMahasiswa() {
    return axios.delete(url);
  }

  findByTitle(title) {
    return axios.get(`${url}?title=${title}`);
  }
}

export default new MahasiswaService();
