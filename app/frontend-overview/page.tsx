"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Users, Building2, ArrowRight } from "lucide-react";

export default function FrontendOverviewPage() {
  const router = useRouter();

  const handleWorkerContinue = () => {
    router.push("/w/dashboard");
  };

  const handleAgencyContinue = () => {
    router.push("/a/dashboard");
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-slate-50 p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-dark-jungle-green mb-4">
            SafePass Frontend Demo
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            This is a frontend overview of the SafePass platform. Since
            there&apos;s no backend connected, you can explore the interface as
            either a Worker or an Agency to see the full functionality with
            dummy data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Worker Portal Card */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-light-grayish-green rounded-full w-fit">
                <Users className="h-12 w-12 text-viridian-green" />
              </div>
              <CardTitle className="text-2xl text-dark-jungle-green">
                Worker Portal
              </CardTitle>
              <CardDescription className="text-base">
                Experience the platform from a migrant worker&apos;s perspective
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-slate-600">
                <p>• View and manage verifiable credentials</p>
                <p>• Browse and apply for job opportunities</p>
                <p>• Track application status and milestones</p>
                <p>• File grievances and get support</p>
                <p>• Manage pre-departure requirements</p>
              </div>
              <Button
                onClick={handleWorkerContinue}
                className="w-full bg-viridian-green hover:bg-sage-green group-hover:bg-sage-green transition-colors"
              >
                Continue as Worker
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Agency Portal Card */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-light-grayish-green rounded-full w-fit">
                <Building2 className="h-12 w-12 text-viridian-green" />
              </div>
              <CardTitle className="text-2xl text-dark-jungle-green">
                Agency Portal
              </CardTitle>
              <CardDescription className="text-base">
                Explore the recruitment agency management interface
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-slate-600">
                <p>• Monitor trust score and analytics</p>
                <p>• Post and manage job listings</p>
                <p>• Review candidate applications</p>
                <p>• Issue smart contracts</p>
                <p>• Track placement success rates</p>
              </div>
              <Button
                onClick={handleAgencyContinue}
                className="w-full bg-viridian-green hover:bg-sage-green group-hover:bg-sage-green transition-colors"
              >
                Continue as Agency
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
            <span className="text-sm text-amber-800">
              Demo Mode: All data is simulated for demonstration purposes
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
