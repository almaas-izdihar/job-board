import Link from "next/link";

import { Job } from "@/app/types/job";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface JobCardsProps {
  jobs: Job[];
}

export function JobCards({ jobs }: JobCardsProps) {
  return (
    <ul className="space-y-4">
      {jobs.map((job) => (
        <li key={job.id}>
          <Link href={`/jobs/${job.id}`}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h2 className="text-2xl font-bold">{job.title}</h2>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p>
                  {job.company} in {job.location}
                </p>
              </CardContent>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}
