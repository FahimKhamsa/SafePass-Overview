"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function CreateJobListingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    country: "",
    salary: "",
    description: "",
  });
  const router = useRouter();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Implement API call to create job listing
    console.log("Creating job listing:", formData);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    // On success, redirect to jobs dashboard
    router.push("/a/jobs");
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-dark-jungle-green">
          Create New Job Listing
        </h1>
        <p className="text-slate-500">
          Fill in the details to post a new job opportunity.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="job-title">Job Title</Label>
            <Input
              id="job-title"
              placeholder="e.g., Senior Welder"
              value={formData.jobTitle}
              onChange={(e) => handleInputChange("jobTitle", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company-name">Company Name</Label>
            <Input
              id="company-name"
              placeholder="e.g., Qatar Gas"
              value={formData.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select
              value={formData.country}
              onValueChange={(value) => handleInputChange("country", value)}
            >
              <SelectTrigger id="country">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="qatar">Qatar</SelectItem>
                <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
                <SelectItem value="uae">UAE</SelectItem>
                <SelectItem value="oman">Oman</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="salary">Salary</Label>
            <Input
              id="salary"
              placeholder="e.g., $2500/mo"
              value={formData.salary}
              onChange={(e) => handleInputChange("salary", e.target.value)}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Job Description</Label>
          <Textarea
            id="description"
            placeholder="Describe the responsibilities, qualifications, and benefits..."
            className="min-h-[150px]"
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            required
          />
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-viridian-green hover:bg-sage-green"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Post Job Listing"}
          </Button>
        </div>
      </form>
    </div>
  );
}
