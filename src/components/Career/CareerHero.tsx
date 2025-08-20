"use client";

const CareerHero = () => {
  const scrollToPositions = () => {
    const positionsSection = document.getElementById('open-positions');
    if (positionsSection) {
      positionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCulture = () => {
    // This could scroll to a culture section if you create one
    alert("Culture section coming soon! In the meantime, check out our About page.");
  };

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl mb-6">
              Build Your Career in <span className="text-primary">Technology Innovation</span>
            </h1>
            <p className="text-lg text-body-color dark:text-body-color-dark mb-8 leading-relaxed">
              Join a team that's transforming businesses through cutting-edge technology solutions. 
              We're looking for passionate individuals who want to make an impact in AI, cloud computing, 
              cybersecurity, and digital transformation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToPositions}
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                View Open Positions
              </button>
              <button 
                onClick={scrollToCulture}
                className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
              >
                Learn About Our Culture
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-primary/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-dark rounded-lg p-6 shadow-md text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-body-color dark:text-body-color-dark">Team Members</div>
                  </div>
                  <div className="bg-white dark:bg-dark rounded-lg p-6 shadow-md text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-body-color dark:text-body-color-dark">Countries Served</div>
                  </div>
                  <div className="bg-white dark:bg-dark rounded-lg p-6 shadow-md text-center">
                    <div className="text-3xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-body-color dark:text-body-color-dark">Client Satisfaction</div>
                  </div>
                  <div className="bg-white dark:bg-dark rounded-lg p-6 shadow-md text-center">
                    <div className="text-3xl font-bold text-primary mb-2">25+</div>
                    <div className="text-sm text-body-color dark:text-body-color-dark">Open Positions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;