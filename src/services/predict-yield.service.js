import instance from "../http-common";

class PredictYieldService {
    create(data) {
        return instance.post(`/predictions/`, data);
    }

    predict(data) {
        return instance.post(`/predictions/predict/`, data);
    }

    getById(id) {
        return instance.get(`/predictions/${id}/`);
    }

    update(id, data) {
        return instance.put(`/predictions/update/${id}/`, data);
    }

    delete(id) {
        return instance.delete(`/predictions/${id}/`);
    }

}

export default new PredictYieldService();