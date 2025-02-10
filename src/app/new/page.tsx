// import { Job } from "@/app/types/job";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function NewJobPage() {
  async function createNewJob(formData: FormData) {
    "use server";

    const jobData = {
      title: formData.get("title"),
      company: formData.get("company"),
      location: formData.get("location"),
    };

    console.log({ jobData });

    const response = await fetch(`${process.env.API_URL}/jobs`, {
      method: "post",
      body: JSON.stringify(jobData),
    });

    const newJob = await response.json();

    console.log({ newJob });
  }

  return (
    <div className="max-w-xs space-y-8">
      <h2 className="text-2xl">Create New Job Post</h2>

      <form action={createNewJob} className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="title">Job Title</Label>
          <Input id="title" name="title" placeholder="Software Engineer" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="company">Company Name</Label>
          <Input id="company" name="company" placeholder="Bearmentor" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="location">Location</Label>
          <Input id="location" name="location" placeholder="Remote" />
        </div>
        <div>
          <Button type="submit">Submit Job Post</Button>
        </div>
      </form>
    </div>
  );
}
