import { BrandSite } from "@/components/brand-site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Samin Al Fattah",
  image: "https://samin-alfattah.com/images/profile-picture.png",
  jobTitle: [
    "Finance Professional",
    "Equity Research and Valuation Specialist",
    "Data and Business Intelligence Analyst"
  ],
  url: "https://samin-alfattah.com",
  sameAs: [
    "https://www.linkedin.com/in/saminfattah/",
    "https://github.com/Saminfattah"
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
    "Champion of CFA Institute Research Challenge in Bangladesh 2025-26",
    "Champion of Microsoft Office Specialist Championship 2025 National Round",
    "ExcelMaestros Champion",
    "Champion of Career Edge Data Hackathon 2024",
    "Champion of FINXCEL 9.0 2025"
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
