import { baseService } from "./baseService";

export class CommentsService extends baseService {
  getCommentsByJobs = (jobId) => {
    return this.get(`/api/comments/by-job/${jobId}`);
  };
}

export const commentsService = new CommentsService();
