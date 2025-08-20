import Benefits from "@/components/Career/Benefits";
import CareerHero from "@/components/Career/CareerHero";
import HiringProcess from "@/components/Career/HiringProcess";
import OpenPositions from "@/components/Career/OpenPositions";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join Our Technology Team",
  description: "Build your career with us. We're looking for talented engineers, developers, and technology professionals to join our innovative team.",
};

const CareerPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Careers"
        description="Join our team of innovators and help shape the future of technology"
      />
      
      <CareerHero />
      <Benefits />
      <OpenPositions />
      <HiringProcess />
    </>
  );
};

export default CareerPage;