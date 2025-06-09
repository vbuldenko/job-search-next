export interface ApplyOption {
  publisher: string;
  apply_link: string;
  is_direct: boolean;
}

export interface JobRequiredExperience {
  no_experience_required: boolean;
  required_experience_in_months: number | null;
  experience_mentioned: boolean;
  experience_preferred: boolean;
}

export interface JobHighlights {
  Qualifications?: string[];
  Responsibilities?: string[];
  Benefits?: string[];
}

export interface Job {
  job_id: string;
  employer_name: string;
  employer_logo: string | null;
  employer_website: string;
  employer_company_type: string | null;
  employer_linkedin: string | null;
  job_publisher: string;
  job_employment_type: string;
  job_employment_types: string[];
  job_employment_type_text: string;
  job_title: string;
  job_apply_link: string;
  job_apply_is_direct: boolean;
  job_apply_quality_score: number | null;
  apply_options: ApplyOption[];
  job_description: string;
  job_is_remote: boolean;
  job_posted_human_readable: string;
  job_posted_at_timestamp: number;
  job_posted_at_datetime_utc: string;
  job_location: string;
  job_city: string;
  job_state: string;
  job_country: string;
  job_latitude: number;
  job_longitude: number;
  job_benefits: string[] | null;
  job_google_link: string;
  job_offer_expiration_datetime_utc: string | null;
  job_offer_expiration_timestamp: number | null;
  job_required_experience: JobRequiredExperience;
  job_salary: number | null;
  job_min_salary: number | null;
  job_max_salary: number | null;
  job_salary_currency: string | null;
  job_salary_period: string | null;
  job_highlights: JobHighlights;
  job_job_title: string | null;
  job_posting_language: string | null;
  job_onet_soc: string;
  job_onet_job_zone: string;
  job_occupational_categories: string | null;
  job_naics_code: string | null;
  job_naics_name: string | null;
}

export const mockJobs: Job[] = [
  {
    job_id: "VnVsqdlLW-S4XAiNAAAAAA==",
    employer_name: "United Airlines",
    employer_logo: null,
    employer_website: "https://www.united.com",
    employer_company_type: null,
    employer_linkedin: null,
    job_publisher: "United Airlines Jobs",
    job_employment_type: "FULLTIME",
    job_employment_types: ["FULLTIME"],
    job_employment_type_text: "Full-time",
    job_title: "Software Developer",
    job_apply_link:
      "https://careers.united.com/us/en/job/WHQ00024224/Software-Developer",
    job_apply_is_direct: false,
    job_apply_quality_score: null,
    apply_options: [
      {
        publisher: "United Airlines Jobs",
        apply_link:
          "https://careers.united.com/us/en/job/WHQ00024224/Software-Developer",
        is_direct: false,
      },
      {
        publisher: "Indeed",
        apply_link: "https://www.indeed.com/viewjob?jk=f9f3e24699cc8d63",
        is_direct: false,
      },
      {
        publisher: "LinkedIn",
        apply_link:
          "https://www.linkedin.com/jobs/view/software-developer-at-united-airlines-4027614589",
        is_direct: false,
      },
    ],
    job_description:
      "There's never been a more exciting time to join United Airlines. We're on a path towards becoming the best airline in the history of aviation. Our shared purpose – Connecting People, Uniting the World – is about more than getting people from one place to another. United's Revenue Management team is growing and we are seeking a Software Developer to come join us! The Software Developer plays an important role in creating and maintaining the strategic partnership between business needs and technology delivery.",
    job_is_remote: false,
    job_posted_human_readable: "1 day ago",
    job_posted_at_timestamp: 1732492800,
    job_posted_at_datetime_utc: "2024-11-25T00:00:00.000Z",
    job_location: "Chicago, IL",
    job_city: "Chicago",
    job_state: "Illinois",
    job_country: "US",
    job_latitude: 41.8781136,
    job_longitude: -87.6297982,
    job_benefits: ["health_insurance"],
    job_google_link: "https://www.google.com/search?q=jobs&gl=us&hl=en&udm=8",
    job_offer_expiration_datetime_utc: null,
    job_offer_expiration_timestamp: null,
    job_required_experience: {
      no_experience_required: false,
      required_experience_in_months: null,
      experience_mentioned: false,
      experience_preferred: false,
    },
    job_salary: null,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {
      Qualifications: [
        "Bachelor's degree in Computer science, software engineering, or related field",
        "3+ years of experience in a similar role",
        "Proficient in a coding language and building back-end components",
        "Problem solving and attention to detail",
      ],
      Responsibilities: [
        "Assist in design, develop and modify software applications/systems",
        "Collaborates with cross-functional teams to understand business requirements",
        "Complete comprehensive unit testing on all developed/enhanced software",
        "Participates in code reviews to ensure code adheres to standards",
      ],
    },
    job_job_title: null,
    job_posting_language: null,
    job_onet_soc: "15113200",
    job_onet_job_zone: "4",
    job_occupational_categories: null,
    job_naics_code: null,
    job_naics_name: null,
  },
  {
    job_id: "vkjeB63QCA2uyqZ3AAAAAA==",
    employer_name: "Phoenix Recruitment",
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiRex6jj6ikQceZCw2f9_uX5UCmcjUafRMEPP&s=0",
    employer_website: "https://www.phoenixsearch.com",
    employer_company_type: null,
    employer_linkedin: null,
    job_publisher: "LinkedIn",
    job_employment_type: "FULLTIME",
    job_employment_types: ["FULLTIME"],
    job_employment_type_text: "Full-time",
    job_title: "Mid-Level Front-End Developer",
    job_apply_link:
      "https://www.linkedin.com/jobs/view/mid-level-front-end-developer-at-phoenix-recruitment-4084597597",
    job_apply_is_direct: false,
    job_apply_quality_score: null,
    apply_options: [
      {
        publisher: "LinkedIn",
        apply_link:
          "https://www.linkedin.com/jobs/view/mid-level-front-end-developer-at-phoenix-recruitment-4084597597",
        is_direct: false,
      },
      {
        publisher: "Huzzle",
        apply_link:
          "https://www.huzzle.app/jobs/mid-level-front-end-developer-167568",
        is_direct: false,
      },
    ],
    job_description:
      "This is a remote position. The Front-End Developer is responsible for building the client side of our web applications. The Front-End Developer will translate our company and customer needs into functional and appealing interactive applications. Create user-friendly web pages, maintain and improve website, optimize applications for maximum speed.",
    job_is_remote: true,
    job_posted_human_readable: "1 day ago",
    job_posted_at_timestamp: 1732492800,
    job_posted_at_datetime_utc: "2024-11-25T00:00:00.000Z",
    job_location: "Chicago, IL",
    job_city: "Chicago",
    job_state: "Illinois",
    job_country: "US",
    job_latitude: 41.8781136,
    job_longitude: -87.6297982,
    job_benefits: null,
    job_google_link: "https://www.google.com/search?q=jobs&gl=us&hl=en&udm=8",
    job_offer_expiration_datetime_utc: null,
    job_offer_expiration_timestamp: null,
    job_required_experience: {
      no_experience_required: false,
      required_experience_in_months: null,
      experience_mentioned: false,
      experience_preferred: false,
    },
    job_salary: null,
    job_min_salary: 85000,
    job_max_salary: 95000,
    job_salary_currency: "USD",
    job_salary_period: "YEAR",
    job_highlights: {
      Qualifications: [
        "5+ years of experience as a Front-end Developer",
        "Hands-on experience with markup languages",
        "Familiarity with browser testing and debugging",
        "Strong communication skills",
      ],
      Responsibilities: [
        "Create user-friendly web pages",
        "Maintain and improve website",
        "Optimize applications for maximum speed",
        "Design mobile-based features",
      ],
      Benefits: ["Base Salary: $85K-$95K", "Remote work opportunity"],
    },
    job_job_title: null,
    job_posting_language: null,
    job_onet_soc: "15113400",
    job_onet_job_zone: "3",
    job_occupational_categories: null,
    job_naics_code: null,
    job_naics_name: null,
  },
  {
    job_id: "A9BWoy_aC7zO2GuzAAAAAA==",
    employer_name: "Cloud Resources LLC",
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxvjajCpWJRroUCiNgFljtLqcWC8Thx-bQ6EFr&s=0",
    employer_website: "http://cloudresources.net",
    employer_company_type: null,
    employer_linkedin: null,
    job_publisher: "LinkedIn",
    job_employment_type: "FULLTIME",
    job_employment_types: ["FULLTIME"],
    job_employment_type_text: "Full-time",
    job_title: ".Net Developer",
    job_apply_link:
      "https://www.linkedin.com/jobs/view/net-developer-at-cloud-resources-llc-4082193199",
    job_apply_is_direct: false,
    job_apply_quality_score: null,
    apply_options: [
      {
        publisher: "LinkedIn",
        apply_link:
          "https://www.linkedin.com/jobs/view/net-developer-at-cloud-resources-llc-4082193199",
        is_direct: false,
      },
    ],
    job_description:
      "Location: Chicago IL. Type: 5 days in person. Duration: 1-3 years. Domain: Healthcare. Should be a hardcore developer with deep experience integrating applications with AWS cloud services. Should be able to work independently and own deliverables. Core skills required: .NET Core, ASP.NET, C#, Blazor UI Frameworks.",
    job_is_remote: false,
    job_posted_human_readable: "17 hours ago",
    job_posted_at_timestamp: 1732546800,
    job_posted_at_datetime_utc: "2024-11-25T15:00:00.000Z",
    job_location: "Chicago, IL",
    job_city: "Chicago",
    job_state: "Illinois",
    job_country: "US",
    job_latitude: 41.8781136,
    job_longitude: -87.6297982,
    job_benefits: null,
    job_google_link: "https://www.google.com/search?q=jobs&gl=us&hl=en&udm=8",
    job_offer_expiration_datetime_utc: null,
    job_offer_expiration_timestamp: null,
    job_required_experience: {
      no_experience_required: false,
      required_experience_in_months: null,
      experience_mentioned: false,
      experience_preferred: false,
    },
    job_salary: null,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {
      Qualifications: [
        ".NET Core expertise",
        "ASP.NET proficiency",
        "C# programming skills",
        "Blazor UI Frameworks experience",
        "AWS cloud services integration experience",
      ],
      Responsibilities: [
        "Develop applications using .NET Core and ASP.NET",
        "Integrate applications with AWS cloud services",
        "Work independently and own deliverables",
        "Collaborate with healthcare domain teams",
      ],
    },
    job_job_title: null,
    job_posting_language: null,
    job_onet_soc: "15113200",
    job_onet_job_zone: "4",
    job_occupational_categories: null,
    job_naics_code: null,
    job_naics_name: null,
  },
];
