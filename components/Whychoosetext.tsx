"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Our agency combines strategic thinking with creative execution to deliver results that exceed expectations. With over a decade of industry experience, we've helped hundreds of businesses transform their digital presence. We pride ourselves on our collaborative approach, transparent communication, and commitment to measurable outcomes. Our team of specialists works tirelessly to ensure your brand stands out in today's competitive landscape.`;

export function WhyChooseText() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 container bg-blue-200 rounded-4xl mb-2 ">
      <TextGenerateEffect words={words} />
    </div>
  );
}