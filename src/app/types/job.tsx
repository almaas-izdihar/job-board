// Notice the title case
export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;

  level?: string;
  salaryMin?: number;
  salaryMax?: number;
  experienceMin?: number;
  experienceMax?: number;
  jobType?: string;
  workplaceType?: string;
  description?: string;
  benefits?: string[];
};

// Notice the singular word, without "s"
export const exampleJob: Job = {
  id: "abc",
  title: "Frontend Developer",
  company: "Bearmentor",
  location: "Remote",
};

// Notice the plural word, with "s" at the end
export const exampleJobs: Job[] = [
  {
    id: "def",
    title: "Frontend Developer",
    company: "Bearmentor",
    location: "Remote",
  },
  {
    id: "ghi",
    title: "Backend Developer",
    company: "Bearmentor",
    location: "Remote",
  },
  {
    id: "jkl",
    title: "Full Stack Developer",
    company: "Bearmentor",
    location: "Remote",
  },
];
