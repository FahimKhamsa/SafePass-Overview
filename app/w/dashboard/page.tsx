"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BadgeCheck,
  Briefcase,
  HeartPulse,
  ShieldCheck,
  Banknote,
} from "lucide-react";
import { format } from "date-fns";
import { useLanguage } from "@/contexts/LanguageContext";

export default function VcDashboardPage() {
  const { t } = useLanguage();
  const workerName = "Karim Ahmed"; // In a real app, this would come from the user session

  // DUMMY DATA for Verifiable Credentials
  const credentials = [
    {
      titleKey: "dashboard.verifiedPassport",
      issuerKey: "dashboard.govBangladesh",
      issueDate: new Date(2025, 7, 29),
      icon: <ShieldCheck className="h-8 w-8 text-viridian-green" />,
    },
    {
      titleKey: "dashboard.nationalId",
      issuerKey: "dashboard.govBangladesh",
      issueDate: new Date(2025, 7, 29),
      icon: <BadgeCheck className="h-8 w-8 text-viridian-green" />,
    },
    {
      titleKey: "dashboard.medicalClearance",
      issuerKey: "dashboard.dhakaCentralHospital",
      issueDate: new Date(2025, 8, 20),
      icon: <HeartPulse className="h-8 w-8 text-viridian-green" />,
    },
    {
      titleKey: "dashboard.certifiedWelder",
      issuerKey: "dashboard.bmetTrainingCenter",
      issueDate: new Date(2025, 7, 15),
      icon: <Briefcase className="h-8 w-8 text-viridian-green" />,
    },
    {
      titleKey: "dashboard.bankAccountVerified",
      issuerKey: "dashboard.sonaliBank",
      issueDate: new Date(2025, 6, 5),
      icon: <Banknote className="h-8 w-8 text-viridian-green" />,
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-dark-jungle-green">
          {t("dashboard.welcomeBack", { name: workerName })}
        </h1>
        <p className="text-slate-500">{t("dashboard.portfolioDescription")}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {credentials.map((cred) => (
          <Card
            key={cred.titleKey}
            className="hover:shadow-md transition-shadow"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                {cred.icon}
                <Badge variant="secondary">{t("dashboard.verified")}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg text-dark-jungle-green">
                {t(cred.titleKey)}
              </CardTitle>
              <CardDescription className="mt-1">
                {t("dashboard.issuedBy")} {t(cred.issuerKey)}
              </CardDescription>
              <p className="text-xs text-slate-400 mt-4">
                {t("dashboard.issuedOn")} {format(cred.issueDate, "PPP")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
