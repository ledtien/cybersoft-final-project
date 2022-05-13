import { baseService } from "./baseService";

export class SubTypeJobsService extends baseService {
  getSubTypeJobs = () => {
    return this.get(`/api/sub-type-jobs`);
  };

  createSubTypeJob = (data) => {
    return this.post(`/api/sub-type-jobs`, data);
  };

  uploadImageSubTypeJob = (id, formData) => {
    return this.post(`/api/sub-type-jobs/upload-image/${id}`, formData);
  };

  updateSubTypeJob = (id, data) => {
    return this.put(`/api/sub-type-jobs/${id}`, data);
  };

  deleteSubTypeJob = (id) => {
    return this.delete(`/api/sub-type-jobs/${id}`);
  };
}

export const subTypeJobsService = new SubTypeJobsService();
