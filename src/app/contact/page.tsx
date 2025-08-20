import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | DChoiceCore - Get in Touch with Our Experts",
  description: "Have questions about our technology services? Contact our team for consultations on AI, cloud computing, cybersecurity, and digital transformation solutions.",
  keywords: "contact, technology consulting, AI solutions, cloud services, cybersecurity, software development",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Our Team"
        description="Reach out to discuss how our technology solutions can transform your business. Our experts are ready to help with AI, cloud, cybersecurity, and digital innovation."
      />

      <Contact />
    </>
  );
};

export default ContactPage;