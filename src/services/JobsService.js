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

  getJobDetail = (id) => {
    return this.get(`/api/jobs/${id}`);
  };

  bookingJob = (id) => {
    return this.patch(`/api/jobs/booking/${id}`);
  };
}

export const jobsService = new JobsService();
