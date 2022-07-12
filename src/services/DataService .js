import http from "../http-common";
class DataService {
  getAll() {
    return http.get("/vehicle");
  }
  getAllDriver() {
    return http.get("/driver");
  }
  getAllBooking() {
    return http.get("/booking");
  }
  getSigleBooking(id) {
    return http.get(`/booking/${id}`);
  }
  get(id) {
    return http.get(`/vehicle/${id}`);
  }
  create(data) {
    return http.post("/vehicle", data);
  }
  update(id, data) {
    return http.put(`/vehicle/${id}`, data);
  }
  delete(id) {
    return http.delete(`/vehicle/${id}`);
  }
}
export default new DataService();