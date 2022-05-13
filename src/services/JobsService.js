import { baseService } from "./baseService";

export class JobsService extends baseService {
  getJobsByName = (name = "") => {
    return this.get(`/api/jobs/by-name?name=${name}`);
  };
  getAllJobs = () => {
    return this.get(`/api/jobs`);
  };

  getJobsBySubType = (id, pageVisited, pageLimit) => {
    return this.get(
      `/api/jobs/by-sub-type?subType=${id}&skip=${pageVisited}&limit=${pageLimit}`
    );
  };

  getJobDetail = (id) => {
    return this.get(`/api/jobs/${id}`);
  };

  bookingJob = (id) => {
    return this.patch(`/api/jobs/booking/${id}`);
  };

  getJobsByUser = () => {
    return this.get(`/api/jobs/by-user`);
  };

  jobDone = (id) => {
    return this.patch(`/api/jobs/done/${id}`);
  };

  createJob = (data) => {
    return this.post(`/api/jobs`, data);
  };

  updateJob = (id, data) => {
    return this.put(`/api/jobs/${id}`, data);
  };

  deleteJob = (id) => {
    return this.delete(`/api/jobs/${id}`);
  };

  uploadImageJob = (id, formData) => {
    return this.post(`/api/jobs/upload-image/${id}`, formData);
  };
}

export const jobsService = new JobsService();
