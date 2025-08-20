const HiringProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Application Review",
      description: "Our team reviews your application and portfolio within 48 hours."
    },
    {
      number: "02",
      title: "Screening Call",
      description: "A 30-minute call with our HR team to discuss your experience and expectations."
    },
    {
      number: "03",
      title: "Technical Assessment",
      description: "A practical task or coding challenge relevant to the position."
    },
    {
      number: "04",
      title: "Technical Interview",
      description: "In-depth discussion with our technical team about your skills and approach."
    },
    {
      number: "05",
      title: "Culture Fit Interview",
      description: "Meet with team members to ensure alignment with our values and culture."
    },
    {
      number: "06",
      title: "Offer",
      description: "We extend an offer to successful candidates within 3-5 business days."
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-dark">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl mb-4">
            Our Hiring Process
          </h2>
          <p className="text-lg text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
            We've designed our process to be transparent, efficient, and respectful of your time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white dark:bg-gray-dark p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                {step.title}
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-dark p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Have Questions?
            </h3>
            <p className="text-body-color dark:text-body-color-dark mb-6">
              Our recruitment team is here to help you through the process.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Contact Recruitment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;