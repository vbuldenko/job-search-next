import { Job, UserProfile } from "@/types";

export const getLikedJobs = (): Job[] => {
  try {
    const likedJobs = localStorage.getItem("likedJobs");
    return likedJobs ? JSON.parse(likedJobs) : [];
  } catch (error) {
    console.error("Error parsing liked jobs from localStorage:", error);
    return [];
  }
};

export const saveLikedJobs = (jobs: Job[]): void => {
  try {
    localStorage.setItem("likedJobs", JSON.stringify(jobs));
  } catch (error) {
    console.error("Error saving liked jobs to localStorage:", error);
  }
};

export const toggleLikedJob = (job: Job): boolean => {
  const likedJobs = getLikedJobs();
  const existingIndex = likedJobs.findIndex((j) => j.job_id === job.job_id);

  if (existingIndex > -1) {
    likedJobs.splice(existingIndex, 1);
    saveLikedJobs(likedJobs);
    return false;
  } else {
    likedJobs.push(job);
    saveLikedJobs(likedJobs);
    return true;
  }
};

export const isJobLiked = (jobId: string): boolean => {
  const likedJobs = getLikedJobs();
  return likedJobs.some((job) => job.job_id === jobId);
};

export const removeLikedJob = (jobId: string): void => {
  const likedJobs = getLikedJobs();
  const filteredJobs = likedJobs.filter((job) => job.job_id !== jobId);
  saveLikedJobs(filteredJobs);
};

export const clearLikedJobs = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("likedJobs");
  }
};

export const saveProfile = (profile: UserProfile): void => {
  localStorage.setItem("userProfile", JSON.stringify(profile));
};

export const getProfile = (): UserProfile | null => {
  const profile = localStorage.getItem("userProfile");
  return profile ? JSON.parse(profile) : null;
};
