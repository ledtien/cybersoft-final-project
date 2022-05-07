import { baseService } from "./baseService";

export class CommentsService extends baseService {
  getCommentsByJobs = (jobId) => {
    return this.get(`/api/comments/by-job/${jobId}`);
  };

  postComment = (comment) => {
    return this.post(`/api/comments`, comment);
  };
}

export const commentsService = new CommentsService();
