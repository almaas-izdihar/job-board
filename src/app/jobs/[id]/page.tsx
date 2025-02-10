import { Job } from "@/app/types/job";
import { Button } from "@/components/ui/button";
import { EditIcon, TrashIcon } from "lucide-react";
import Link from "next/link";

interface JobIdPageProps {
  params: Promise<{ id: string }>;
}

export default async function JobIdPage({ params }: JobIdPageProps) {
  const id = (await params).id;

  const response = await fetch(`${process.env.API_URL}/jobs/${id}`);
  const job: Job = await response.json();

  if (!response.ok) {
    return (
      <div>
        <p>Job with ID: {id} is not found</p>
      </div>
    );
  }

  return (
    <div className="text-card-foreground space-y-8">
      <div className="flex gap-2">
        <Button asChild variant="secondary" size="sm">
          <Link href={`/jobs/${job.id}/edit`}>
            <EditIcon />
            Edit
          </Link>
        </Button>
        <Button variant="destructive" size="sm">
          <TrashIcon />
          Delete
        </Button>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{job.title}</h2>
        <p className="text-lg">
          {job.company} in {job.location}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Job Details</h3>
          <p>
            <strong>Level:</strong> {job.level || "Unknown"}
          </p>
          <p>
            <strong>Job Type:</strong> {job.jobType || "Unknown"}
          </p>
          <p>
            <strong>Workplace:</strong> {job.workplaceType || "Unknown"}
          </p>
          <p>
            <strong>Salary Range:</strong>
            <span> Rp </span>
            <span>{job.salaryMin?.toLocaleString() || "10.000.000"}</span>
            <span> - Rp </span>
            <span>{job.salaryMax?.toLocaleString() || "20.000.000"}</span>
          </p>
          <p>
            <strong>Experience: </strong>
            <span>{job.experienceMin || 0}</span>
            <span> - </span>
            <span>{job.experienceMax || 1}</span>
            <span> years</span>
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p>{job.description || "Detailed description"}</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Benefits</h3>

          {!job.benefits?.length && "Benefit details"}
          {job.benefits?.length && (
            <ul className="list-disc pl-5">
              {job.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
