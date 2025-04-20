"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Link from "next/link";

export default function ServicesPage() {
    const words = `We offer a wide range of services to grow your business.`;
  return (
    <>
      {/* Hero Section with enhanced gradient */}
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center relative w-full gap-8 mx-auto px-8 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800 -z-10"></div>

        {/* Animated dots pattern */}
        <div className="absolute inset-0 -z-5 opacity-30 dark:opacity-20">
          <svg
            className="absolute w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="dotPattern"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="4"
                  cy="4"
                  r="2"
                  fill="currentColor"
                  className="text-blue-500 dark:text-blue-400"
                />
              </pattern>
              <pattern
                id="dotPattern2"
                x="10"
                y="10"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="4"
                  cy="4"
                  r="1.5"
                  fill="currentColor"
                  className="text-emerald-500 dark:text-emerald-400"
                />
              </pattern>
              <pattern
                id="dotPattern3"
                x="20"
                y="20"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="4"
                  cy="4"
                  r="1"
                  fill="currentColor"
                  className="text-purple-500 dark:text-purple-400"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#dotPattern)"
              className="animate-float-slow"
            />
            <rect
              width="100%"
              height="100%"
              fill="url(#dotPattern2)"
              className="animate-float-medium"
            />
            <rect
              width="100%"
              height="100%"
              fill="url(#dotPattern3)"
              className="animate-float-fast"
            />
          </svg>
        </div>

        {/* Animated gradient blobs */}
        <div className="absolute inset-0 -z-5 overflow-hidden">
          <div className="blob blob-blue"></div>
          <div className="blob blob-purple"></div>
          <div className="blob blob-teal"></div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center w-full mb-12 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-blue-800 to-neutral-700 dark:from-white dark:via-blue-300 dark:to-neutral-300 relative z-10">
          <TextGenerateEffect words={words} />
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl relative z-10">
          <Card title="Web Development" icon={<WebDevIcon />}>
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900"
            />
            <div className="absolute bottom-8 left-0 right-0 px-6 text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 transition-opacity duration-300">
              Custom websites built with cutting-edge technologies for optimal
              performance and user experience.
            </div>
          </Card>

          <Card title="UI/UX Design" icon={<DesignIcon />}>
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            <div className="absolute bottom-8 left-0 right-0 px-6 text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 transition-opacity duration-300">
              User-centered design that balances aesthetics with functionality
              to create engaging experiences.
            </div>
          </Card>

          <Card title="Digital Marketing" icon={<MarketingIcon />}>
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
            <div className="absolute bottom-8 left-0 right-0 px-6 text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 transition-opacity duration-300">
              Strategic campaigns that increase visibility and drive qualified
              traffic to your digital properties.
            </div>
          </Card>
        </div>
      </div>

      {/* Additional Services Section with enhanced gradient */}
      <div className="py-16 px-8 bg-gradient-to-r from-neutral-100 via-blue-50/30 to-neutral-100 dark:from-neutral-900 dark:via-blue-950/30 dark:to-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-blue-800 to-neutral-700 dark:from-white dark:via-blue-300 dark:to-neutral-300">
            Additional Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Solutions",
                description:
                  "Custom online stores built with Shopify, WooCommerce, or headless commerce solutions. We optimize for conversions with intuitive checkout flows and mobile-first design.",
                icon: "🛒",
                gradient:
                  "hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/20 dark:hover:to-cyan-900/20",
              },
              {
                title: "Mobile Applications",
                description:
                  "Native iOS and Android apps or cross-platform solutions using React Native or Flutter. We build apps that deliver exceptional user experiences with offline capabilities.",
                icon: "📱",
                gradient:
                  "hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20",
              },
              {
                title: "Content Strategy",
                description:
                  "Data-driven content planning that aligns with your business goals. We create editorial calendars, SEO-optimized blog posts, case studies, and engaging social media content.",
                icon: "✍️",
                gradient:
                  "hover:from-amber-50 hover:to-yellow-50 dark:hover:from-amber-900/20 dark:hover:to-yellow-900/20",
              },
              {
                title: "SEO & Analytics",
                description:
                  "Comprehensive SEO audits, keyword research, and technical optimization. We implement Google Analytics 4 and create custom dashboards to track your most important KPIs.",
                icon: "🔍",
                gradient:
                  "hover:from-green-50 hover:to-emerald-50 dark:hover:from-green-900/20 dark:hover:to-emerald-900/20",
              },
              {
                title: "Brand Identity",
                description:
                  "Complete brand development including logo design, color palettes, typography, and brand guidelines. We create cohesive visual identities that resonate with your target audience.",
                icon: "🎨",
                gradient:
                  "hover:from-red-50 hover:to-orange-50 dark:hover:from-red-900/20 dark:hover:to-orange-900/20",
              },
              {
                title: "Maintenance & Support",
                description:
                  "Proactive website maintenance with regular updates, security patches, and performance optimization. We offer SLA-backed support packages with dedicated response times.",
                icon: "🔧",
                gradient:
                  "hover:from-teal-50 hover:to-cyan-50 dark:hover:from-teal-900/20 dark:hover:to-cyan-900/20",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all duration-300 bg-white dark:bg-neutral-900 hover:bg-gradient-to-br ${service.gradient}`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section with new gradient */}
      <div className="py-16 px-8 bg-gradient-to-b from-white via-neutral-50 to-blue-50/30 dark:from-neutral-950 dark:via-neutral-900 dark:to-blue-950/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-blue-800 to-neutral-700 dark:from-white dark:via-blue-300 dark:to-neutral-300">
            Our Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business goals, target audience, and project requirements through in-depth consultations.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Our team develops a comprehensive roadmap outlining the technical approach, timeline, and deliverables.",
              },
              {
                step: "03",
                title: "Design & Development",
                description:
                  "We create wireframes, design mockups, and build your solution with regular client feedback and iterations.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "After thorough testing, we deploy your project and provide ongoing maintenance and optimization.",
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="relative p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 flex items-center justify-center text-white font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-4">
                  {phase.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section with new gradient */}
      <div className="py-16 px-8 bg-gradient-to-r from-neutral-100 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-blue-800 to-neutral-700 dark:from-white dark:via-blue-300 dark:to-neutral-300">
            Technologies We Use
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { name: "React", icon: "⚛️" },
              { name: "Next.js", icon: "▲" },
              { name: "Node.js", icon: "🟢" },
              { name: "TypeScript", icon: "🔷" },
              { name: "Tailwind CSS", icon: "🌊" },
              { name: "WordPress", icon: "📝" },
              { name: "Shopify", icon: "🛍️" },
              { name: "AWS", icon: "☁️" },
              { name: "Firebase", icon: "🔥" },
              { name: "MongoDB", icon: "🍃" },
              { name: "PostgreSQL", icon: "🐘" },
              { name: "GraphQL", icon: "⬢" },
            ].map((tech, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-md transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white dark:hover:from-blue-900/10 dark:hover:to-neutral-900"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section with enhanced gradient */}
      <div className="py-16 px-8 bg-gradient-to-br from-blue-50 via-white to-neutral-50 dark:from-blue-950/30 dark:via-neutral-950 dark:to-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-blue-800 to-neutral-700 dark:from-white dark:via-blue-300 dark:to-neutral-300">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 text-neutral-700 dark:text-neutral-300">
            Let's discuss how our team of experts can help you achieve your
            business goals with a tailored digital strategy. We offer free
            initial consultations to understand your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-600 dark:to-purple-600 text-white font-medium rounded-md hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const WebDevIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-black dark:text-white group-hover/canvas-card:text-white"
    >
      <path
        d="M8 9L11 12L8 15M13 15H16M5 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const DesignIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-black dark:text-white group-hover/canvas-card:text-white"
    >
      <path
        d="M7 7H7.01M12 7H12.01M17 7H17.01M7 12H7.01M12 12H12.01M17 12H17.01M7 17H7.01M12 17H12.01M17 17H17.01M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const MarketingIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-black dark:text-white group-hover/canvas-card:text-white"
    >
      <path
        d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
