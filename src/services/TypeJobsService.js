import { baseService } from "./baseService";

export class TypeJobsService extends baseService {
  getTypeJobs = () => {
    return this.get(`/api/type-jobs`);
  };

  getDetailTypeJob = (id) => {
    return this.get(`/api/type-jobs/${id}`);
  };

  createTypeJob = (data) => {
    return this.post(`/api/type-jobs`, data);
  };

  deleteTypeJob = (id) => {
    return this.delete(`/api/type-jobs/${id}`);
  };

  updateTypeJob = (id, data) => {
    return this.put(`/api/type-jobs/${id}`, data);
  };
}

export const typeJobsService = new TypeJobsService();
