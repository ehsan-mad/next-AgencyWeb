import Image from "next/image";
import { HeroSectionOne } from "./Hero";
import Services from "./services";
import { CardHoverEffectDemo } from "@/components/CardHoverEffect";
import { TextGenerateEffectDemo } from "@/components/TextGenerateEffectDemo";
import { WhyChooseText } from "@/components/Whychoosetext";
import { AnimatedTestimonialsDemo } from "@/components/testimonials";
import Footer from "@/components/footer";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="min-h-screen">
      <ClerkProvider>
        
       
      </ClerkProvider>
      <main className="flex justify-center flex-col bg-accent">
        <HeroSectionOne />
        <div className="bg-gradient-to-b from-[#fdfbfb] to-[#ebedee]">
          <Services />
        </div>
        <div className="bg-gradient-to-b from-[#cfd9df] to-[#e2ebf0]">
          <TextGenerateEffectDemo />
          {/* <WhyChooseText/> */}
          <CardHoverEffectDemo />
        </div>
        <AnimatedTestimonialsDemo />
      </main>
    </div>
  );
}
