"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Why Choose Us?`;

export function TextGenerateEffectDemo() {
  return (
    <div className="flex justify-center items-center py-8 px-4">
      <div className="bg-[#cddf32] rounded-lg py-6 px-12 inline-block text-center">
        <TextGenerateEffect words={words} className="text-3xl font-bold" />
      </div>
    </div>
  );
}