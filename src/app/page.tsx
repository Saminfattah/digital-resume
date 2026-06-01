import { BrandSite } from "@/components/brand-site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Samin Al Fattah",
  jobTitle: [
    "Finance Professional",
    "Equity Research and Valuation Specialist",
    "Data and Business Intelligence Analyst"
  ],
  url: "https://samin-alfattah.com",
  sameAs: [
    "https://www.linkedin.com/in/samin-alfattah",
    "https://github.com/samin-alfattah"
  ],
  knowsAbout: [
    "Equity Research",
    "Financial Modeling",
    "Valuation",
    "Forecasting",
    "Business Intelligence",
    "Power BI",
    "SQL",
    "Python",
    "BigQuery"
  ],
  award: [
    "CFA Research Challenge Champion",
    "Microsoft Office Specialist Champion",
    "ExcelMaestros Champion",
    "Data Hackathon Champion",
    "FINXCEL Champion"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <BrandSite />
    </>
  );
}
