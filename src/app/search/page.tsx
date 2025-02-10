import { Job } from "@/app/types/job";
import { JobCards } from "@/components/job/job-cards";

interface SearchPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const keyword = (await searchParams).keyword;

  const response = await fetch(
    `${process.env.API_URL}/jobs?title_like=${keyword}`
  );
  const jobs: Job[] = await response.json();

  return <JobCards jobs={jobs}></JobCards>;
}
