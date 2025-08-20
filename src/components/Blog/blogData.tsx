import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "AI-Powered Solutions: Transforming Enterprise Operations",
    paragraph:
      "Discover how artificial intelligence is revolutionizing business processes, from predictive analytics to automated decision-making systems.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Dr. Sarah Chen",
      image: "/images/blog/author-01.jpg",
      designation: "AI Research Director",
    },
    tags: ["Artificial Intelligence"],
    publishDate: "March 15, 2024",
  },
  {
    id: 2,
    title: "Cloud Security Best Practices for Financial Institutions",
    paragraph:
      "Essential security measures and compliance frameworks to protect sensitive financial data in cloud environments against emerging threats.",
    image: "/images/blog/cloud-security.jpg",
    author: {
      name: "Michael Rodriguez",
      image: "/images/blog/author-02.jpg",
      designation: "Cybersecurity Architect",
    },
    tags: ["Cybersecurity"],
    publishDate: "March 10, 2024",
  },
  {
    id: 3,
    title: "Microservices Architecture: Scaling Enterprise Applications",
    paragraph:
      "How microservices enable businesses to scale efficiently while maintaining performance, reliability, and rapid deployment capabilities.",
    image: "/images/blog/microservices.jpg",
    author: {
      name: "Emily Watson",
      image: "/images/blog/author-03.jpg",
      designation: "DevOps Lead Engineer",
    },
    tags: ["Cloud Computing"],
    publishDate: "March 5, 2024",
  },
  {
    id: 4,
    title: "IoT Integration Strategies for Smart Infrastructure",
    paragraph:
      "Best practices for implementing Internet of Things solutions that connect devices, collect data, and enable intelligent operations.",
    image: "/images/blog/iot-solutions.jpg",
    author: {
      name: "James Wilson",
      image: "/images/blog/author-04.jpg",
      designation: "IoT Solutions Architect",
    },
    tags: ["IoT"],
    publishDate: "February 28, 2024",
  },
  {
    id: 5,
    title: "Data Engineering: Building Analytics Pipelines",
    paragraph:
      "Modern approaches to data pipeline architecture that ensure reliable data processing, transformation, and analysis at scale.",
    image: "/images/blog/data-engineering.jpg",
    author: {
      name: "Lisa Zhang",
      image: "/images/blog/author-05.jpg",
      designation: "Data Engineer",
    },
    tags: ["Data Engineering"],
    publishDate: "February 22, 2024",
  },
  {
    id: 6,
    title: "Digital Transformation: API Integration Strategies",
    paragraph:
      "How seamless API integrations with banks, telcos, and government systems are driving digital transformation across industries.",
    image: "/images/blog/api-integration.jpg",
    author: {
      name: "David Kim",
      image: "/images/blog/author-06.jpg",
      designation: "Integration Specialist",
    },
    tags: ["B2B Integration"],
    publishDate: "February 15, 2024",
  },
];

export default blogData;