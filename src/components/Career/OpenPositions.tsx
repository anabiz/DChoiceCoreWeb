"use client";

import { useState } from "react";

const OpenPositions = () => {
  const [activeDepartment, setActiveDepartment] = useState("all");
  const [selectedPosition, setSelectedPosition] = useState(null);
  
  const positions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "engineering",
      type: "Full-time",
      location: "Remote",
      description: "Build scalable web applications using React, Node.js, and cloud technologies.",
      requirements: [
        "5+ years of experience with React and Node.js",
        "Experience with cloud platforms (AWS/Azure/GCP)",
        "Strong knowledge of database systems",
        "Experience with CI/CD pipelines"
      ]
    },
    {
      id: 2,
      title: "DevOps Engineer",
      department: "engineering",
      type: "Full-time",
      location: "Hybrid",
      description: "Implement CI/CD pipelines and manage cloud infrastructure on AWS/Azure.",
      requirements: [
        "3+ years of DevOps experience",
        "Expertise with Docker and Kubernetes",
        "Experience with infrastructure as code (Terraform/CloudFormation)",
        "Strong scripting skills (Bash/Python)"
      ]
    },
    {
      id: 3,
      title: "AI/ML Engineer",
      department: "ai",
      type: "Full-time",
      location: "Remote",
      description: "Develop machine learning models and AI solutions for enterprise clients.",
      requirements: [
        "Advanced degree in Computer Science or related field",
        "Experience with TensorFlow, PyTorch, or similar frameworks",
        "Strong background in machine learning algorithms",
        "Experience with data preprocessing and analysis"
      ]
    },
    {
      id: 4,
      title: "Cybersecurity Specialist",
      department: "security",
      type: "Full-time",
      location: "On-site",
      description: "Protect systems and networks from cyber threats and ensure compliance.",
      requirements: [
        "Certifications like CISSP, CISM, or CEH",
        "Experience with security tools and frameworks",
        "Knowledge of network protocols and security architecture",
        "Experience with vulnerability assessment"
      ]
    },
    {
      id: 5,
      title: "Cloud Solutions Architect",
      department: "engineering",
      type: "Contract",
      location: "Remote",
      description: "Design and implement cloud-native solutions for various business needs.",
      requirements: [
        "7+ years of cloud architecture experience",
        "Expert knowledge of AWS/Azure services",
        "Experience with microservices architecture",
        "Strong communication and client-facing skills"
      ]
    },
    {
      id: 6,
      title: "Data Scientist",
      department: "ai",
      type: "Full-time",
      location: "Hybrid",
      description: "Analyze complex data sets and build predictive models for business insights.",
      requirements: [
        "PhD or Master's in Data Science, Statistics, or related field",
        "Experience with Python data science stack (Pandas, NumPy, Scikit-learn)",
        "Strong statistical analysis skills",
        "Experience with data visualization tools"
      ]
    }
  ];

  const departments = [
    { id: "all", name: "All Departments" },
    { id: "engineering", name: "Engineering" },
    { id: "ai", name: "AI & Data Science" },
    { id: "security", name: "Cybersecurity" }
  ];

  const filteredPositions = activeDepartment === "all" 
    ? positions 
    : positions.filter(position => position.department === activeDepartment);

  const handleApplyClick = (position) => {
    setSelectedPosition(position);
    // Scroll to application form
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    alert(`Thank you for applying to ${selectedPosition.title}! We'll review your application soon.`);
    setSelectedPosition(null);
    // Reset form
    e.target.reset();
  };

  return (
    <section className="py-16 md:py-20 lg:py-28 ">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl mb-4">
            Open Positions
          </h2>
          <p className="text-lg text-body-color dark:text-body-color-dark">
            Join our team and work on challenging projects with cutting-edge technology.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map(dept => (
            <button
              key={dept.id}
              onClick={() => setActiveDepartment(dept.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeDepartment === dept.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-body-color hover:bg-gray-200 dark:bg-dark dark:hover:bg-gray-800"
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>

        {/* Positions List */}
        <div className="grid gap-6 mb-16">
          {filteredPositions.map(position => (
            <div key={position.id} className="bg-white dark:bg-gray-dark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-3">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {position.type}
                    </span>
                    <span className="bg-gray-100 dark:bg-dark px-3 py-1 rounded-full text-sm">
                      {position.location}
                    </span>
                    <span className="bg-gray-100 dark:bg-dark px-3 py-1 rounded-full text-sm capitalize">
                      {position.department}
                    </span>
                  </div>
                  <p className="text-body-color dark:text-body-color-dark mb-4">
                    {position.description}
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-black dark:text-white mb-2">Key Requirements:</h4>
                    <ul className="list-disc list-inside text-sm text-body-color dark:text-body-color-dark space-y-1">
                      {position.requirements.slice(0, 2).map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                      {position.requirements.length > 2 && (
                        <li>+{position.requirements.length - 2} more requirements</li>
                      )}
                    </ul>
                  </div>
                </div>
                <button 
                  onClick={() => handleApplyClick(position)}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPositions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-body-color dark:text-body-color-dark text-lg">
              No positions available in this department at the moment. Check back later!
            </p>
          </div>
        )}

        {/* Application Form */}
        <div id="application-form" className="bg-white dark:bg-gray-dark p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
            {selectedPosition ? `Apply for: ${selectedPosition.title}` : "Apply for Position"}
          </h3>
          
          {!selectedPosition ? (
            <p className="text-body-color dark:text-body-color-dark text-center">
              Please select a position above to apply.
            </p>
          ) : (
            <form onSubmit={handleSubmitApplication} className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-dark"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-dark"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-dark"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-dark"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Resume/CV *
                </label>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-dark file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Cover Letter
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-dark"
                  placeholder="Tell us why you're interested in this position..."
                ></textarea>
              </div>
              
              <div className="flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedPosition(null)}
                  className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;