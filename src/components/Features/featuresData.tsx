import { FaCode, FaCloud, FaRobot, FaLink, FaLock, FaServer } from 'react-icons/fa';
import { Feature } from "@/types/feature";
import { TbDeviceAnalytics } from 'react-icons/tb'
import { FaDraftingCompass } from 'react-icons/fa';      
import { FaUserTie } from 'react-icons/fa';              
import { FaChalkboardTeacher } from 'react-icons/fa'; 

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <FaCode size={40} className="fill-current" />,
    title: "Software Engineering",
    paragraph: "AI-powered custom software solutions tailored to your business needs — built with modern technologies, agile methodologies, and delivered in as little as two weeks.",
  },
  {
    id: 2,
    icon: <FaCloud size={40} className="fill-current" />,
    title: "Cloud Infrastructure",
    paragraph: "Scalable cloud solutions with DevOps practices to ensure reliability, security, and performance.",
  },
  {
    id: 3,
    icon: <FaRobot size={40} className="fill-current" />,
    title: "AI & Data Science",
    paragraph: "Advanced analytics and AI solutions to extract insights, predict trends, and drive data-informed decisions.",
  },
 {
  id: 4,
  icon: <FaUserTie size={40} className="fill-current" />,
  title: "Outsourcing & Tech Talent Services",
  paragraph:
    "Access top-tier developers and engineering teams to scale your business with flexible staffing solutions.",
},
  {
    id: 5,
    icon: <FaLock size={40} className="fill-current" />,
    title: "Cybersecurity",
    paragraph: "Comprehensive security solutions to protect your data, infrastructure, and business operations.",
  },
  {
    id: 6,
    icon: <FaServer size={40} className="fill-current" />,
    title: "Platform-as-a-Service",
    paragraph: "Custom PaaS and SaaS offerings designed to accelerate your business processes and digital transformation.",
  },
  {
    id: 7,
    icon: <TbDeviceAnalytics size={40} className="fill-current" />,
    title: "IoT Solutions",
    paragraph: "End-to-end Internet of Things solutions connecting devices, collecting data, and enabling smart operations.",
  },
  {
  id: 8,
  icon: <FaDraftingCompass size={40} className="fill-current" />,
  title: "Technical Consulting & Architecture",
  paragraph:
    "Expert guidance on system design, software architecture, and scalable infrastructure tailored to your goals.",
},
{
  id: 9,
  icon: <FaChalkboardTeacher size={40} className="fill-current" />,
  title: "Training & Capacity Building",
  paragraph:
    "Empower your team with training programs in modern technologies, agile methods, and digital innovation.",
}

];

export default featuresData;
