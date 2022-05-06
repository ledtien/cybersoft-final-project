import { baseService } from "./baseService";

export class TypeJobsService extends baseService {
  getTypeJobs = () => {
    return this.get(`/api/type-jobs`);
  };

  getDetailTypeJob = (id) => {
    return this.get(`/api/type-jobs/${id}`);
  };
}

export const typeJobsService = new TypeJobsService();
