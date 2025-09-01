"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  FileText,
  Camera,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Dummy worker data
const workerData = {
  name: "Ahmed Rahman",
  email: "ahmed.rahman@email.com",
  phone: "+880 1712-345678",
  dateOfBirth: "1990-05-15",
  address: "Dhaka, Bangladesh",
  nid: "1234567890123",
  passport: "BP1234567",
  avatar: "https://i.pravatar.cc/150?u=worker",
  skills: ["Welding", "Construction", "Safety Protocols"],
  experience: "5 years",
  bio: "Experienced welder with expertise in construction and industrial projects. Committed to safety and quality workmanship.",
};

const credentials = [
  { name: "Passport", status: "Verified", date: "2024-01-15" },
  { name: "National ID", status: "Verified", date: "2024-01-10" },
  { name: "Medical Certificate", status: "Verified", date: "2024-02-01" },
  { name: "Welder Certificate", status: "Verified", date: "2024-01-20" },
];

export default function WorkerSettingsPage() {
  const { t } = useLanguage();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(workerData);

  const handleSave = () => {
    // TODO: Save data to backend
    setIsEditing(false);
    console.log("Saving worker profile data:", formData);
  };

  const handleCancel = () => {
    setFormData(workerData);
    setIsEditing(false);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark-jungle-green">
          {t("settings.profileSettings")}
        </h1>
        <p className="text-slate-500">{t("settings.manageInfo")}</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">{t("settings.profile")}</TabsTrigger>
          <TabsTrigger value="credentials">
            {t("settings.credentials")}
          </TabsTrigger>
          <TabsTrigger value="privacy">
            {t("settings.privacySecurity")}
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{t("settings.personalInformation")}</CardTitle>
                {!isEditing ? (
                  <Button onClick={() => setIsEditing(true)}>
                    {t("settings.editProfile")}
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={handleCancel}>
                      {t("settings.cancel")}
                    </Button>
                    <Button onClick={handleSave}>
                      {t("settings.saveChanges")}
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={formData.avatar} />
                  <AvatarFallback>
                    {formData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <Button variant="outline" size="sm">
                    <Camera className="h-4 w-4 mr-2" />
                    {t("settings.changePhoto")}
                  </Button>
                )}
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("settings.fullName")}</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t("settings.emailAddress")}</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t("settings.phoneNumber")}</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dob">{t("settings.dateOfBirth")}</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="dob"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dateOfBirth: e.target.value,
                        })
                      }
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">{t("settings.address")}</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">{t("settings.bio")}</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) =>
                      setFormData({ ...formData, bio: e.target.value })
                    }
                    disabled={!isEditing}
                    rows={3}
                  />
                </div>
              </div>

              {/* Skills Section */}
              <div className="space-y-2">
                <Label>{t("settings.skills")}</Label>
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Credentials Tab */}
        <TabsContent value="credentials" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("settings.verifiedCredentials")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {credentials.map((credential, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-viridian-green" />
                      <div>
                        <p className="font-medium">{credential.name}</p>
                        <p className="text-sm text-slate-500">
                          {t("settings.verifiedOn")}{" "}
                          {new Date(credential.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      <Shield className="h-3 w-3 mr-1" />
                      {credential.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Privacy & Security Tab */}
        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("settings.privacySecuritySettings")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">
                    {t("settings.profileVisibility")}
                  </p>
                  <p className="text-sm text-slate-500">
                    {t("settings.profileVisibilityDesc")}
                  </p>
                </div>
                <Button variant="outline">{t("settings.manage")}</Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{t("settings.twoFactorAuth")}</p>
                  <p className="text-sm text-slate-500">
                    {t("settings.twoFactorAuthDesc")}
                  </p>
                </div>
                <Button variant="outline">{t("settings.enable")}</Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{t("settings.dataExport")}</p>
                  <p className="text-sm text-slate-500">
                    {t("settings.dataExportDesc")}
                  </p>
                </div>
                <Button variant="outline">{t("settings.export")}</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
