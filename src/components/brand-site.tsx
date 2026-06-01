"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  BriefcaseBusiness,
  ChartCandlestick,
  ChevronRight,
  Database,
  Download,
  Github,
  LineChart,
  Linkedin,
  Mail,
  Medal,
  PieChart,
  Send,
  Sigma,
  Sparkles,
  Target,
  Trophy
} from "lucide-react";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const navItems = ["Work", "Wins", "Expertise", "Contact"];

const heroStats = [
  { value: "6+", label: "National Championships" },
  { value: "96%", label: "Forecast Accuracy" },
  { value: "97%", label: "Sales Forecast Accuracy" },
  { value: "2+", label: "Years Professional Experience" }
];

const highlights = [
  {
    icon: Trophy,
    year: "2024",
    title: "CFA Research Challenge Champion",
    body: "Led research, valuation, investment thesis development, and final defense for Robi Axiata."
  },
  {
    icon: Medal,
    year: "2023",
    title: "Microsoft Office Specialist Champion",
    body: "National recognition for applied Excel, modeling discipline, and productivity mastery."
  },
  {
    icon: Sigma,
    year: "2023",
    title: "ExcelMaestros Champion",
    body: "Converted spreadsheet logic into decision-ready models under competitive constraints."
  },
  {
    icon: BrainCircuit,
    year: "2024",
    title: "Data Hackathon Champion",
    body: "Built analytical workflows that transformed raw data into clear recommendations."
  },
  {
    icon: ChartCandlestick,
    year: "2024",
    title: "FINXCEL Champion",
    body: "Demonstrated finance, strategy, and valuation strength in a national competition setting."
  },
  {
    icon: Sparkles,
    year: "2024",
    title: "UNDP Frontier Technology Mentee",
    body: "Selected for exposure to emerging technology, innovation, and decision science."
  }
];

const caseStudies = [
  {
    kicker: "Case Study 01",
    title: "DSE Insight",
    headline: "Building a Valuation Platform for Bangladeshi Investors",
    summary:
      "A research-driven platform concept that makes valuation, data collection, and dashboard analysis more accessible for investors following the Dhaka Stock Exchange.",
    pillars: [
      "Reverse DCF",
      "Relative Valuation",
      "Data Collection",
      "Dashboard Design",
      "Investor Workflow"
    ],
    result: "A practical intelligence layer for moving from company data to valuation judgment."
  },
  {
    kicker: "Case Study 02",
    title: "Robi Axiata Equity Research",
    headline: "Winning Bangladesh's CFA Research Challenge",
    summary:
      "An end-to-end equity research process combining financial modeling, DCF, relative valuation, DDM, investment thesis construction, and final recommendation defense.",
    pillars: [
      "Research Process",
      "Financial Model",
      "DCF",
      "Relative Valuation",
      "DDM",
      "Recommendation"
    ],
    result: "A championship-level investment case built on evidence, valuation rigor, and clear communication."
  }
];

const experience = [
  {
    org: "A.O. Smith Bangladesh",
    icon: Database,
    focus: "Forecasting, BI, and data infrastructure",
    points: [
      "Built forecasting workflows across sales and business planning cycles.",
      "Used Power BI, BigQuery, Looker Studio, and warehouse logic to improve decision visibility.",
      "Applied SARIMA and analytical modeling to support measurable forecast accuracy."
    ]
  },
  {
    org: "CapeC",
    icon: BriefcaseBusiness,
    focus: "Research and consulting impact",
    points: [
      "Supported research and consulting work across Oxfam, SOS Children's Village, and Justice and Care.",
      "Translated qualitative and market evidence into findings for program and business decisions.",
      "Worked across social impact, evaluation, and business analysis contexts."
    ]
  }
];

const expertise = {
  Finance: {
    icon: PieChart,
    skills: ["Financial Modeling", "Valuation", "DCF", "Equity Research", "Forecasting"],
    note: "Turning market questions into structured valuation work."
  },
  Analytics: {
    icon: BarChart3,
    skills: ["Power BI", "SQL", "Python", "BigQuery", "Looker Studio"],
    note: "Designing clean data paths from raw source to executive signal."
  },
  Research: {
    icon: BookOpenCheck,
    skills: ["Impact Evaluation", "Market Research", "Qualitative Research", "Business Analysis"],
    note: "Finding the question beneath the data and making it useful."
  }
};

const certifications = [
  "CFA Level I Passed",
  "BBA Finance & Banking",
  "FMVA",
  "Equity Analyst",
  "Equity Research Associate",
  "Microsoft Office Specialist"
];

const dashboardItems = [
  {
    title: "Favorite Areas",
    items: ["Equity Research", "Valuation", "Data Analytics", "Forecasting", "Business Intelligence"]
  },
  {
    title: "Current Learning",
    items: ["CFA Journey", "Capital Markets", "Financial Modeling", "Data Science"]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export function BrandSite() {
  const [activeExpertise, setActiveExpertise] =
    useState<keyof typeof expertise>("Finance");
  const active = expertise[activeExpertise];
  const ExpertiseIcon = active.icon;

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        left: `${(index * 17) % 100}%`,
        top: `${(index * 29) % 100}%`,
        delay: index * 0.12
      })),
    []
  );

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/72 backdrop-blur-xl">
        <nav className="section-shell flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="Samin Al Fattah home">
            <span className="grid size-9 place-items-center rounded-md border border-primary/30 bg-primary/10 font-semibold text-primary">
              SA
            </span>
            <span className="hidden text-sm font-medium text-foreground sm:inline">
              Samin Al Fattah
            </span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </div>
          <Button asChild size="sm">
            <a href="#contact">
              <Mail />
              Contact
            </a>
          </Button>
        </nav>
      </header>

      <section id="top" className="relative min-h-screen pt-24">
        <div className="absolute inset-0 chart-grid opacity-35" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#020617_0%,rgba(2,6,23,0.78)_44%,rgba(2,6,23,0.38)_100%)]" />
        <Image
          src="/images/finance-data-research-hero.png"
          alt="Abstract finance data research visual"
          fill
          priority
          className="object-cover object-right opacity-60"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0">
          {particles.map((particle) => (
            <motion.span
              key={`${particle.left}-${particle.top}`}
              className="absolute size-1 rounded-full bg-primary/70"
              style={{ left: particle.left, top: particle.top }}
              animate={{ opacity: [0.1, 0.85, 0.1], scale: [1, 1.8, 1] }}
              transition={{ duration: 4, delay: particle.delay, repeat: Infinity }}
            />
          ))}
        </div>

        <div className="section-shell relative z-10 grid min-h-[calc(100vh-6rem)] items-center gap-10 py-16 lg:grid-cols-[1.03fr_0.97fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <Badge className="mb-5 border-primary/30 bg-primary/10 text-primary">
              Finance x Data x Research
            </Badge>
            <h1 className="text-balance text-5xl font-semibold leading-[0.96] tracking-normal text-foreground sm:text-7xl lg:text-8xl">
              Samin Al Fattah
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              CFA Level I | Valuation Specialist | Data & BI Analyst
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I combine finance, analytics, and research to turn complex data into
              actionable business and investment decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#work">
                  View My Work
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="/resume/Samin-Al-Fattah-Resume.pdf" download>
                  <Download />
                  Download Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass shine rounded-lg p-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35 + index * 0.09 }}
              >
                <div className="font-mono text-4xl font-semibold text-primary">
                  {stat.value}
                </div>
                <div className="mt-3 text-sm leading-6 text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Section id="why" eyebrow="Why I Do What I Do" title="Markets ask better questions when finance and data sit at the same table.">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <PortraitPlaceholder />
          <div className="space-y-6 text-base leading-8 text-slate-300">
            <p>
              My work starts with curiosity: why a company is valued the way it is,
              why a forecast breaks, why a dashboard changes a decision, and why
              a research finding becomes useful only when it is clearly framed.
            </p>
            <p>
              I am drawn to the point where valuation, analytics, and business
              judgment meet. That is where numbers stop being raw output and
              become a defensible view of risk, opportunity, and action.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Valuation", "Decision Science", "Business Problems"].map((item) => (
                <div key={item} className="rounded-md border border-border bg-white/[0.03] p-4 text-sm text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="wins" eyebrow="Highlight Reel" title="Competition-tested credibility, built across finance, data, and research.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
                className={cn(
                  "glass shine rounded-lg p-5",
                  index === 0 && "md:col-span-2 lg:col-span-1"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-md bg-primary/10 text-primary">
                    <Icon />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{item.year}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-normal">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section id="work" eyebrow="Featured Case Studies" title="The center of the brand: applied research that turns into decisions.">
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-lg border border-border bg-[linear-gradient(135deg,rgba(15,23,42,0.88),rgba(2,6,23,0.74))]"
            >
              <div className="grid gap-0 lg:grid-cols-[0.94fr_1.06fr]">
                <div className="p-6 sm:p-8 lg:p-10">
                  <Badge>{study.kicker}</Badge>
                  <h3 className="mt-5 text-3xl font-semibold tracking-normal text-balance sm:text-4xl">
                    {study.headline}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-muted-foreground">
                    {study.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.pillars.map((pillar) => (
                      <span
                        key={pillar}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                      >
                        {pillar}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {["Live Demo", "GitHub", "Screenshots"].map((cta) => (
                      <Button
                        key={cta}
                        asChild
                        size="sm"
                        variant={cta === "Live Demo" ? "default" : "secondary"}
                      >
                        <a href="#" aria-label={`${study.title} ${cta}`}>
                          {cta}
                          <ChevronRight />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
                <CaseVisual index={index} title={study.title} result={study.result} />
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Professional Experience" title="Business impact presented through outcomes, not chronology.">
        <div className="grid gap-5 lg:grid-cols-2">
          {experience.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.org} className="glass">
                <CardHeader>
                  <div className="mb-4 grid size-11 place-items-center rounded-md bg-secondary text-secondary-foreground">
                    <Icon />
                  </div>
                  <CardTitle className="text-2xl">{item.org}</CardTitle>
                  <p className="text-sm text-primary">{item.focus}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-sm leading-6 text-muted-foreground">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section id="expertise" eyebrow="Expertise" title="An interactive map of the capabilities behind the brand.">
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex flex-col gap-3">
            {(Object.keys(expertise) as Array<keyof typeof expertise>).map((key) => {
              const Icon = expertise[key].icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveExpertise(key)}
                  className={cn(
                    "flex min-h-16 items-center justify-between rounded-md border px-4 text-left transition",
                    activeExpertise === key
                      ? "border-primary/50 bg-primary/10 text-foreground"
                      : "border-border bg-white/[0.03] text-muted-foreground hover:bg-white/[0.06]"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="size-5" />
                    {key.toUpperCase()}
                  </span>
                  <ArrowRight className="size-4" />
                </button>
              );
            })}
          </div>
          <div className="glass rounded-lg p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <span className="grid size-14 place-items-center rounded-md bg-primary text-background">
                <ExpertiseIcon />
              </span>
              <div>
                <h3 className="text-2xl font-semibold">{activeExpertise}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{active.note}</p>
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {active.skills.map((skill) => (
                <motion.div
                  key={skill}
                  layout
                  className="rounded-md border border-border bg-background/45 p-4 text-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="education" eyebrow="Education & Certifications" title="Signals of rigor, credibility, and continued momentum.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item, index) => (
            <div
              key={item}
              className={cn(
                "rounded-lg border border-border bg-white/[0.035] p-5",
                index === 0 && "border-primary/50 bg-primary/10"
              )}
            >
              <Award className="mb-5 size-5 text-primary" />
              <h3 className="text-lg font-semibold">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                A credibility marker supporting finance, research, and analytical execution.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="dashboard" eyebrow="Personal Dashboard" title="A more human view of what I keep returning to.">
        <div className="grid gap-5 lg:grid-cols-2">
          {dashboardItems.map((group) => (
            <div key={group.title} className="glass rounded-lg p-6">
              <h3 className="text-xl font-semibold">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} className="bg-white/[0.04]">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section id="contact" className="border-t border-white/10 py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge className="mb-5 border-primary/30 bg-primary/10 text-primary">Contact</Badge>
            <h2 className="text-balance text-4xl font-semibold tracking-normal sm:text-5xl">
              Let&apos;s Build Something Meaningful Together
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
              Reach out for equity research, valuation, analytics, forecasting,
              BI, or consulting conversations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <a href="mailto:hello@samin-alfattah.com">
                  <Mail />
                  Email
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="https://www.linkedin.com/in/samin-alfattah">
                  <Linkedin />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="https://github.com/samin-alfattah">
                  <Github />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
          <form className="glass rounded-lg p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-muted-foreground">
                Name
                <input className="mt-2 h-11 w-full rounded-md border border-input bg-background/50 px-3 text-foreground outline-none ring-primary/40 transition focus:ring-2" />
              </label>
              <label className="text-sm text-muted-foreground">
                Email
                <input type="email" className="mt-2 h-11 w-full rounded-md border border-input bg-background/50 px-3 text-foreground outline-none ring-primary/40 transition focus:ring-2" />
              </label>
            </div>
            <label className="mt-4 block text-sm text-muted-foreground">
              Message
              <textarea className="mt-2 min-h-32 w-full resize-y rounded-md border border-input bg-background/50 p-3 text-foreground outline-none ring-primary/40 transition focus:ring-2" />
            </label>
            <Button className="mt-5 w-full" type="button">
              <Send />
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="section-shell flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-md border border-primary/30 bg-primary/10 text-xs font-semibold text-primary">
              SA
            </span>
            <span>Finance x Data x Research</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-foreground">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-white/10 py-24">
      <div className="section-shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-10 max-w-3xl"
        >
          <Badge className="mb-5 border-primary/30 bg-primary/10 text-primary">
            {eyebrow}
          </Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-normal sm:text-5xl">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function PortraitPlaceholder() {
  return (
    <div className="glass relative min-h-[420px] overflow-hidden rounded-lg p-6">
      <div className="absolute inset-0 chart-grid opacity-35" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <Badge>Professional Image Placeholder</Badge>
          <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
            Replace this designed placeholder with a professional portrait when available.
          </p>
        </div>
        <div className="mx-auto grid size-44 place-items-center rounded-full border border-primary/30 bg-[radial-gradient(circle,rgba(56,189,248,0.20),rgba(15,23,42,0.85))] text-5xl font-semibold text-primary">
          SA
        </div>
        <div className="grid grid-cols-3 gap-3">
          {["Markets", "Models", "Signals"].map((item) => (
            <span key={item} className="rounded-md bg-white/[0.04] px-3 py-2 text-center text-xs text-muted-foreground">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CaseVisual({
  index,
  title,
  result
}: {
  index: number;
  title: string;
  result: string;
}) {
  return (
    <div className="chart-grid relative min-h-[420px] border-t border-border bg-background/45 p-6 lg:border-l lg:border-t-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(20,184,166,0.18),transparent_28rem)]" />
      <div className="relative z-10 flex h-full flex-col justify-between gap-8">
        <div className="rounded-lg border border-border bg-background/70 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Valuation Output
              </p>
              <h4 className="mt-2 text-xl font-semibold">{title}</h4>
            </div>
            <LineChart className="size-6 text-primary" />
          </div>
          <div className="mt-6 h-36 rounded-md border border-white/10 bg-[linear-gradient(180deg,rgba(56,189,248,0.12),transparent)] p-4">
            <svg viewBox="0 0 360 120" className="h-full w-full" role="img" aria-label={`${title} valuation chart`}>
              <path
                d={index === 0 ? "M5 94 C54 80 74 62 110 68 C151 75 158 33 205 42 C248 51 257 18 356 23" : "M5 82 C42 88 75 44 112 50 C160 58 171 76 214 53 C260 28 286 32 356 18"}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M5 104 L356 104"
                stroke="rgba(148,163,184,0.35)"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-background/70 p-5">
          <p className="text-sm leading-6 text-muted-foreground">{result}</p>
        </div>
      </div>
    </div>
  );
}
