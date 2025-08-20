import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DChoiceCore | Innovative Technology Solutions for Enterprises",
  description: "Comprehensive technology services including AI & Data Science, Cloud Infrastructure, Cybersecurity, Software Engineering, B2B Integrations, IoT Solutions, and Digital Transformation.",
  keywords: "technology solutions, AI, cloud computing, cybersecurity, software development, digital transformation, enterprise technology",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      {/* <Pricing /> */}
      <Blog />
      <Contact />
    </>
  );
}