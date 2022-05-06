import { baseService } from "./baseService";

export class JobsService extends baseService {
  getJobsByName = (name) => {
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
}

export const jobsService = new JobsService();
