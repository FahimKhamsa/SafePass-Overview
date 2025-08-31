import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, FileText, Users } from "lucide-react";

// Agency-specific FAQ items
const agencyFaqItems = [
  {
    id: "faq-1",
    question: "How do I post a new job listing on SafePass?",
    answer:
      "Navigate to the 'Job Listings' section from your dashboard and click 'Create New Job'. Fill in all required details including job description, salary, location, and required credentials. Once submitted, your job will be reviewed and published within 24 hours.",
  },
  {
    id: "faq-2",
    question: "How does the Trust Score system work for agencies?",
    answer:
      "Your Trust Score is calculated based on successful placements, worker feedback, contract compliance, and regulatory adherence. Higher scores improve your visibility to workers and employers. You can view your detailed Trust Score breakdown in the Dashboard.",
  },
  {
    id: "faq-3",
    question: "What documents are required for worker verification?",
    answer:
      "Workers must provide verified passport, national ID, medical clearance, and relevant skill certificates. All documents are verified through our blockchain-based system to ensure authenticity and prevent fraud.",
  },
  {
    id: "faq-4",
    question: "How do I issue smart contracts to selected candidates?",
    answer:
      "After selecting a candidate, go to their profile and click 'Issue Contract'. Fill in the employment terms, salary, and start date. The smart contract will be automatically generated and sent to the worker for digital signature.",
  },
  {
    id: "faq-5",
    question: "What are the fees for using SafePass?",
    answer:
      "SafePass charges a small transaction fee for successful placements and smart contract issuance. There are no upfront costs for posting jobs or accessing the platform. Detailed pricing is available in your agency settings.",
  },
  {
    id: "faq-6",
    question: "How can I track my agency's performance metrics?",
    answer:
      "Your dashboard provides comprehensive analytics including placement success rates, average time-to-hire, worker satisfaction scores, and Trust Score trends. You can also generate detailed reports for regulatory compliance.",
  },
];

export default function AgencySupportPage() {
  return (
    <div className="pl-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark-jungle-green">
          Agency Support Center
        </h1>
        <p className="text-slate-500">
          Get help with recruitment processes, compliance, and platform features
          designed for agencies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* FAQ Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 text-dark-jungle-green">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {agencyFaqItems.map((item) => (
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
              <CardTitle>Business Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-600">
                Need assistance with your agency operations? Our business
                support team is here to help.
              </p>
              <div>
                <a
                  href="mailto:agency-support@safepass.gov"
                  className="flex items-center gap-3 group"
                >
                  <Mail className="h-5 w-5 text-sage-green" />
                  <span className="font-medium group-hover:underline">
                    Agency Support Email
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="tel:+880123456700"
                  className="flex items-center gap-3 group"
                >
                  <Phone className="h-5 w-5 text-sage-green" />
                  <span className="font-medium group-hover:underline">
                    Business Hotline
                  </span>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-viridian-green" />
                <span className="font-medium">Compliance Guidelines</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-viridian-green" />
                <span className="font-medium">Best Practices Guide</span>
              </div>
              <p className="text-sm text-slate-600">
                Access comprehensive documentation and training materials for
                ethical recruitment practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
