import { baseService } from "./baseService";

export class SubTypeJobsService extends baseService {
  getSubTypeJobs = () => {
    return this.get(`/api/sub-type-jobs`);
  };
}

export const subTypeJobsService = new SubTypeJobsService();
