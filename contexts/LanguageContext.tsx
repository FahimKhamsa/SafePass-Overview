"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "bn";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>("en");

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("worker-language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "bn")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("worker-language", lang);
  };

  // Translation function with parameter support
  const t = (key: string, params?: Record<string, string>): string => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    if (typeof value !== "string") {
      return key; // Return key if translation not found
    }

    // Replace parameters in the translation
    if (params) {
      return value.replace(/\{(\w+)\}/g, (match: string, paramKey: string) => {
        return params[paramKey] || match;
      });
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translation data
const translations = {
  en: {
    navigation: {
      dashboard: "Dashboard",
      findJobs: "Find Jobs",
      myApplications: "My Applications",
      myGrievances: "My Grievances",
      helpSupport: "Help & Support",
      settings: "Settings",
    },
    header: {
      workerProfile: "Worker Profile",
      support: "Support",
      logout: "Logout",
      toggleMenu: "Toggle navigation menu",
      toggleUser: "Toggle user menu",
    },
    dashboard: {
      welcomeBack: "Welcome back, {name}!",
      portfolioDescription:
        "This is your secure digital portfolio. Share credentials with trusted employers with a single tap.",
      verifiedPassport: "Verified Passport",
      nationalId: "National ID (NID)",
      medicalClearance: "Medical Clearance",
      certifiedWelder: "Certified Welder",
      bankAccountVerified: "Bank Account Verified",
      verified: "Verified",
      issuedBy: "Issued by:",
      issuedOn: "Issued on:",
      govBangladesh: "Govt. of Bangladesh",
      dhakaCentralHospital: "Dhaka Central Hospital",
      bmetTrainingCenter: "BMET Training Center",
      sonaliBank: "Sonali Bank",
    },
    settings: {
      profileSettings: "Profile & Settings",
      manageInfo: "Manage your personal information and account settings.",
      profile: "Profile",
      credentials: "Credentials",
      privacySecurity: "Privacy & Security",
      personalInformation: "Personal Information",
      editProfile: "Edit Profile",
      cancel: "Cancel",
      saveChanges: "Save Changes",
      changePhoto: "Change Photo",
      fullName: "Full Name",
      emailAddress: "Email Address",
      phoneNumber: "Phone Number",
      dateOfBirth: "Date of Birth",
      address: "Address",
      bio: "Bio",
      skills: "Skills",
      verifiedCredentials: "Verified Credentials",
      privacySecuritySettings: "Privacy & Security Settings",
      profileVisibility: "Profile Visibility",
      profileVisibilityDesc: "Control who can see your profile information",
      twoFactorAuth: "Two-Factor Authentication",
      twoFactorAuthDesc: "Add an extra layer of security to your account",
      dataExport: "Data Export",
      dataExportDesc: "Download a copy of your personal data",
      manage: "Manage",
      enable: "Enable",
      export: "Export",
      verifiedOn: "Verified on",
    },
    support: {
      helpSupport: "Help & Support",
      findAnswers:
        "Find answers to your questions and get help when you need it.",
      faq: "Frequently Asked Questions",
      needMoreHelp: "Need More Help?",
      contactSupport:
        "If you can't find the answer you're looking for, please contact our support team or a partner NGO.",
      emailSupport: "Email Support",
      supportHotline: "Support Hotline",
      faqItems: {
        faq1: {
          question: "How do I recover my wallet if I lose my phone?",
          answer:
            'You must use the 12-word recovery phrase you saved during signup. On a new device, go to the login screen and tap "Recover Wallet" to begin the process. If you have lost your phrase, access cannot be recovered.',
        },
        faq2: {
          question: "Is my personal data and documents safe?",
          answer:
            "Yes. Your personal documents and credentials are encrypted and stored in your self-sovereign wallet. Only you can control who sees your information. SafePass cannot access your private data.",
        },
        faq3: {
          question: "What is a Smart Contract?",
          answer:
            "It is a digital employment agreement stored on the blockchain. Its terms cannot be changed after you sign it, which protects you from contract substitution and ensures your employer honors the agreement.",
        },
        faq4: {
          question: "Who sees my grievance report if I file one?",
          answer:
            "Grievance reports are sent directly to authorized officials at government bodies like the BMET and trusted partner NGOs for an impartial investigation. You can choose to submit anonymously to protect your identity.",
        },
      },
    },
    jobs: {
      findYourNextJob: "Find Your Next Job",
      browseOpportunities:
        "Browse verified opportunities from trusted recruitment agencies.",
      searchPlaceholder: "Search by job title or company...",
      filterByCountry: "Filter by country",
      allCountries: "All Countries",
      noJobsFound: "No Jobs Found",
      tryAdjusting: "Try adjusting your search or filters.",
    },
    applications: {
      myApplications: "My Applications",
      trackApplications:
        "Track your job applications and their current status.",
      noApplications: "No Applications Yet",
      startApplying: "Start applying to jobs to see your applications here.",
    },
    grievances: {
      myGrievances: "My Grievances",
      reportIssues: "Report issues and track the resolution process.",
      fileNewGrievance: "File New Grievance",
      noGrievances: "No Grievances Filed",
      noIssuesReported: "You haven't reported any issues yet.",
    },
  },
  bn: {
    navigation: {
      dashboard: "ড্যাশবোর্ড",
      findJobs: "চাকরি খুঁজুন",
      myApplications: "আমার আবেদন",
      myGrievances: "আমার অভিযোগ",
      helpSupport: "সহায়তা ও সাপোর্ট",
      settings: "সেটিংস",
    },
    header: {
      workerProfile: "কর্মী প্রোফাইল",
      support: "সাপোর্ট",
      logout: "লগআউট",
      toggleMenu: "নেভিগেশন মেনু টগল করুন",
      toggleUser: "ইউজার মেনু টগল করুন",
    },
    dashboard: {
      welcomeBack: "স্বাগতম, {name}!",
      portfolioDescription:
        "এটি আপনার নিরাপদ ডিজিটাল পোর্টফোলিও। বিশ্বস্ত নিয়োগকর্তাদের সাথে একটি ট্যাপেই শংসাপত্র শেয়ার করুন।",
      verifiedPassport: "যাচাইকৃত পাসপোর্ট",
      nationalId: "জাতীয় পরিচয়পত্র (এনআইডি)",
      medicalClearance: "মেডিকেল ক্লিয়ারেন্স",
      certifiedWelder: "সার্টিফাইড ওয়েল্ডার",
      bankAccountVerified: "ব্যাংক অ্যাকাউন্ট যাচাইকৃত",
      verified: "যাচাইকৃত",
      issuedBy: "প্রদানকারী:",
      issuedOn: "প্রদানের তারিখ:",
      govBangladesh: "বাংলাদেশ সরকার",
      dhakaCentralHospital: "ঢাকা কেন্দ্রীয় হাসপাতাল",
      bmetTrainingCenter: "বিএমইটি প্রশিক্ষণ কেন্দ্র",
      sonaliBank: "সোনালী ব্যাংক",
    },
    settings: {
      profileSettings: "প্রোফাইল ও সেটিংস",
      manageInfo: "আপনার ব্যক্তিগত তথ্য এবং অ্যাকাউন্ট সেটিংস পরিচালনা করুন।",
      profile: "প্রোফাইল",
      credentials: "শংসাপত্র",
      privacySecurity: "গোপনীয়তা ও নিরাপত্তা",
      personalInformation: "ব্যক্তিগত তথ্য",
      editProfile: "প্রোফাইল সম্পাদনা",
      cancel: "বাতিল",
      saveChanges: "পরিবর্তন সংরক্ষণ",
      changePhoto: "ছবি পরিবর্তন",
      fullName: "পূর্ণ নাম",
      emailAddress: "ইমেইল ঠিকানা",
      phoneNumber: "ফোন নম্বর",
      dateOfBirth: "জন্ম তারিখ",
      address: "ঠিকানা",
      bio: "জীবনী",
      skills: "দক্ষতা",
      verifiedCredentials: "যাচাইকৃত শংসাপত্র",
      privacySecuritySettings: "গোপনীয়তা ও নিরাপত্তা সেটিংস",
      profileVisibility: "প্রোফাইল দৃশ্যমানতা",
      profileVisibilityDesc:
        "কে আপনার প্রোফাইল তথ্য দেখতে পারবে তা নিয়ন্ত্রণ করুন",
      twoFactorAuth: "দ্বি-ফ্যাক্টর প্রমাণীকরণ",
      twoFactorAuthDesc: "আপনার অ্যাকাউন্টে অতিরিক্ত নিরাপত্তার স্তর যোগ করুন",
      dataExport: "ডেটা রপ্তানি",
      dataExportDesc: "আপনার ব্যক্তিগত ডেটার একটি কপি ডাউনলোড করুন",
      manage: "পরিচালনা",
      enable: "সক্রিয়",
      export: "রপ্তানি",
      verifiedOn: "যাচাইকৃত",
    },
    support: {
      helpSupport: "সহায়তা ও সাপোর্ট",
      findAnswers:
        "আপনার প্রশ্নের উত্তর খুঁজুন এবং প্রয়োজনের সময় সহায়তা পান।",
      faq: "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
      needMoreHelp: "আরও সহায়তা প্রয়োজন?",
      contactSupport:
        "আপনি যদি আপনার খোঁজা উত্তর খুঁজে না পান, তাহলে আমাদের সাপোর্ট টিম বা অংশীদার এনজিওর সাথে যোগাযোগ করুন।",
      emailSupport: "ইমেইল সাপোর্ট",
      supportHotline: "সাপোর্ট হটলাইন",
      faqItems: {
        faq1: {
          question:
            "আমি যদি আমার ফোন হারিয়ে ফেলি তাহলে কীভাবে আমার ওয়ালেট পুনরুদ্ধার করব?",
          answer:
            'সাইনআপের সময় আপনি যে ১২-শব্দের পুনরুদ্ধার বাক্যাংশ সংরক্ষণ করেছিলেন তা ব্যবহার করতে হবে। একটি নতুন ডিভাইসে, লগইন স্ক্রিনে যান এবং প্রক্রিয়া শুরু করতে "ওয়ালেট পুনরুদ্ধার করুন" এ ট্যাপ করুন। আপনি যদি আপনার বাক্যাংশ হারিয়ে ফেলেন, তাহলে অ্যাক্সেস পুনরুদ্ধার করা যাবে না।',
        },
        faq2: {
          question: "আমার ব্যক্তিগত তথ্য এবং নথিপত্র কি নিরাপদ?",
          answer:
            "হ্যাঁ। আপনার ব্যক্তিগত নথি এবং শংসাপত্রগুলি এনক্রিপ্ট করা হয় এবং আপনার স্ব-সার্বভৌম ওয়ালেটে সংরক্ষিত হয়। শুধুমাত্র আপনিই নিয়ন্ত্রণ করতে পারেন কে আপনার তথ্য দেখবে। SafePass আপনার ব্যক্তিগত ডেটা অ্যাক্সেস করতে পারে না।",
        },
        faq3: {
          question: "স্মার্ট কন্ট্রাক্ট কী?",
          answer:
            "এটি ব্লকচেইনে সংরক্ষিত একটি ডিজিটাল কর্মসংস্থান চুক্তি। আপনি এটি স্বাক্ষর করার পরে এর শর্তাবলী পরিবর্তন করা যায় না, যা আপনাকে চুক্তি প্রতিস্থাপন থেকে রক্ষা করে এবং নিশ্চিত করে যে আপনার নিয়োগকর্তা চুক্তি মেনে চলবেন।",
        },
        faq4: {
          question:
            "আমি যদি একটি অভিযোগ দাখিল করি তাহলে কে আমার অভিযোগের রিপোর্ট দেখবে?",
          answer:
            "অভিযোগের রিপোর্টগুলি সরাসরি BMET এর মতো সরকারি সংস্থার অনুমোদিত কর্মকর্তাদের এবং বিশ্বস্ত অংশীদার এনজিওগুলিতে নিরপেক্ষ তদন্তের জন্য পাঠানো হয়। আপনার পরিচয় রক্ষা করতে আপনি বেনামে জমা দেওয়ার বিকল্প বেছে নিতে পারেন।",
        },
      },
    },
    jobs: {
      findYourNextJob: "আপনার পরবর্তী চাকরি খুঁজুন",
      browseOpportunities:
        "বিশ্বস্ত নিয়োগ সংস্থাগুলি থেকে যাচাইকৃত সুযোগ ব্রাউজ করুন।",
      searchPlaceholder: "চাকরির শিরোনাম বা কোম্পানি দ্বারা অনুসন্ধান করুন...",
      filterByCountry: "দেশ অনুযায়ী ফিল্টার করুন",
      allCountries: "সব দেশ",
      noJobsFound: "কোন চাকরি পাওয়া যায়নি",
      tryAdjusting: "আপনার অনুসন্ধান বা ফিল্টার সামঞ্জস্য করার চেষ্টা করুন।",
    },
    applications: {
      myApplications: "আমার আবেদনসমূহ",
      trackApplications:
        "আপনার চাকরির আবেদন এবং তাদের বর্তমান অবস্থা ট্র্যাক করুন।",
      noApplications: "এখনও কোন আবেদন নেই",
      startApplying: "আপনার আবেদনগুলি এখানে দেখতে চাকরিতে আবেদন শুরু করুন।",
    },
    grievances: {
      myGrievances: "আমার অভিযোগসমূহ",
      reportIssues: "সমস্যা রিপোর্ট করুন এবং সমাধান প্রক্রিয়া ট্র্যাক করুন।",
      fileNewGrievance: "নতুন অভিযোগ দাখিল করুন",
      noGrievances: "কোন অভিযোগ দাখিল করা হয়নি",
      noIssuesReported: "আপনি এখনও কোন সমস্যা রিপোর্ট করেননি।",
    },
  },
};
