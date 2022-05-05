import { baseService } from "./baseService";

export class JobsService extends baseService {
  getJobsByName = (name) => {
    return this.get(`/api/jobs/by-name?name=${name}`);
  };
  getAllJobs = () => {
    return this.get(`/api/jobs`);
  };
}

export const jobsService = new JobsService();
