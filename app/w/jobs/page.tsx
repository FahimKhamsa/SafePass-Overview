"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { jobListings, Job } from "@/lib/dummy-data";
import { JobCard } from "@/components/worker-portal/job-card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function JobFeedPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");

  const filteredJobs = useMemo(() => {
    let jobs = jobListings;

    if (searchQuery) {
      jobs = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.companyName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCountry !== "all") {
      jobs = jobs.filter((job) => job.country === selectedCountry);
    }

    return jobs;
  }, [searchQuery, selectedCountry]);

  const countries = [...new Set(jobListings.map((job) => job.country))];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark-jungle-green">
          {t("jobs.findYourNextJob")}
        </h1>
        <p className="text-slate-500">{t("jobs.browseOpportunities")}</p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-slate-50 rounded-lg border">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <Input
            placeholder={t("jobs.searchPlaceholder")}
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedCountry} onValueChange={setSelectedCountry}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder={t("jobs.filterByCountry")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("jobs.allCountries")}</SelectItem>
            {countries.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Job Listings Grid */}
      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold">{t("jobs.noJobsFound")}</h3>
          <p className="text-slate-500 mt-2">{t("jobs.tryAdjusting")}</p>
        </div>
      )}
    </div>
  );
}
