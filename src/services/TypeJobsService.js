import { baseService } from "./baseService";

export class TypeJobsService extends baseService {
  getTypeJobs = () => {
    return this.get(`/api/type-jobs`);
  };
}

export const typeJobsService = new TypeJobsService();
