"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HelpSupportPage() {
  const { t } = useLanguage();

  // Get FAQ items from translations instead of dummy data
  const faqItems = [
    {
      id: "faq1",
      question: t("support.faqItems.faq1.question"),
      answer: t("support.faqItems.faq1.answer"),
    },
    {
      id: "faq2",
      question: t("support.faqItems.faq2.question"),
      answer: t("support.faqItems.faq2.answer"),
    },
    {
      id: "faq3",
      question: t("support.faqItems.faq3.question"),
      answer: t("support.faqItems.faq3.answer"),
    },
    {
      id: "faq4",
      question: t("support.faqItems.faq4.question"),
      answer: t("support.faqItems.faq4.answer"),
    },
  ];
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark-jungle-green">
          {t("support.helpSupport")}
        </h1>
        <p className="text-slate-500">{t("support.findAnswers")}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* FAQ Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 text-dark-jungle-green">
            {t("support.faq")}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Support Section */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("support.needMoreHelp")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-600">
                {t("support.contactSupport")}
              </p>
              <div>
                <a
                  href="mailto:support@safepass.gov"
                  className="flex items-center gap-3 group"
                >
                  <Mail className="h-5 w-5 text-sage-green" />
                  <span className="font-medium group-hover:underline">
                    {t("support.emailSupport")}
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="tel:+880123456789"
                  className="flex items-center gap-3 group"
                >
                  <Phone className="h-5 w-5 text-sage-green" />
                  <span className="font-medium group-hover:underline">
                    {t("support.supportHotline")}
                  </span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
