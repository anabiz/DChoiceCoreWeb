import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | DChoiceCore - Leading Technology Innovation Company",
  description: "DChoiceCore is a premier technology company specializing in AI, cloud computing, cybersecurity, and digital transformation solutions for businesses worldwide.",
  keywords: "about us, technology company, AI solutions, cloud services, cybersecurity, digital transformation, software development",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Our Company"
        description="Discover how DChoiceCore is driving digital innovation and helping businesses transform through cutting-edge technology solutions and expertise."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;