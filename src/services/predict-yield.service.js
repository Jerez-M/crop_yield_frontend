import http from "../http-common";

class PredictYieldService {
  predict(data) {
    return http.post("/predict", data);
  }

  getAllPredictions() {
    return http.get("/predictions");
  }

  getPrediction(id) {
    return http.get(`/predictions/${id}`);
  }

  createPrediction(data) {
    return http.post("/predictions", data);
  }

  updatePrediction(id, data) {
    return http.put(`/predictions/${id}`, data);
  }

  deletePrediction(id) {
    return http.delete(`/predictions/${id}`);
  }
}

// Fix: Assign instance to a variable before exporting
const predictYieldService = new PredictYieldService();
export default predictYieldService;