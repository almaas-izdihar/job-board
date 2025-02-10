// import { Job } from "@/app/types/job";

import { Job } from "@/app/types/job";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";

interface EditJobIdPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditJobIdPage({ params }: EditJobIdPageProps) {
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

  async function editJob(formData: FormData) {
    "use server";

    const jobData = {
      title: formData.get("title"),
      company: formData.get("company"),
      location: formData.get("location"),
    };

    const response = await fetch(`${process.env.API_URL}/jobs`, {
      method: "put",
      body: JSON.stringify(jobData),
    });

    const newJob = await response.json();

    console.info({ newJob });

    redirect("/");

    // Ideally redirect to /jobs/:id but if using a mock REST API,
    // there will be no new data
  }

  return (
    <div className="max-w-xs space-y-8">
      <h2 className="text-2xl">Create New Job Post</h2>

      <form action={editJob} className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="title">Job Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Software Engineer"
            defaultValue={job.title}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            name="company"
            placeholder="Bearmentor"
            defaultValue={job.company}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            placeholder="Remote"
            defaultValue={job.location}
          />
        </div>
        <div>
          <Button type="submit">Submit Job Post</Button>
        </div>
      </form>
    </div>
  );
}
