import { Job, UserProfile } from "@/types";

export const getJobRecommendations = (
  allJobs: Job[],
  userProfile: UserProfile
) => {
  const keywords = userProfile.desiredJobTitle.toLowerCase().split(" ");
  const aboutKeywords = userProfile.aboutMe.toLowerCase().split(" ");

  return allJobs
    .map((job) => {
      let score = 0;
      const jobText = `${job.job_title} ${job.job_description}`.toLowerCase();

      keywords.forEach((keyword) => {
        if (keyword.length > 2 && jobText.includes(keyword)) {
          score += 3;
        }
      });

      aboutKeywords.forEach((keyword) => {
        if (keyword.length > 3 && jobText.includes(keyword)) {
          score += 1;
        }
      });

      return { ...job, recommendationScore: score };
    })
    .filter((job) => job.recommendationScore > 0)
    .sort((a, b) => b.recommendationScore - a.recommendationScore)
    .slice(0, 10);
};

export const filterJobs = (allJobs: Job[], query: string) => {
  const searchTerms = query.toLowerCase().split(" ");
  return allJobs.filter((job) => {
    const jobText =
      `${job.job_title} ${job.employer_name} ${job.job_description}`.toLowerCase();
    return searchTerms.some((term) => jobText.includes(term));
  });
};
