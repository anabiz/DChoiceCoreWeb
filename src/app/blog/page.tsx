import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Insights & Updates | DChoiceCore",
  description: "Stay informed with the latest trends, innovations, and best practices in software development, AI, cloud computing, and cybersecurity.",
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Technology Insights"
        description="Explore our latest articles on AI, cloud computing, cybersecurity, and digital transformation trends shaping the future of business technology."
      />

      <section className="pb-20 pt-16">
        <div className="container">
          {/* Blog Filters/Categories */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <button className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
              All Topics
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 dark:bg-dark dark:hover:bg-gray-800 px-6 py-2 rounded-lg text-sm font-medium transition-colors">
              AI & Data Science
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 dark:bg-dark dark:hover:bg-gray-800 px-6 py-2 rounded-lg text-sm font-medium transition-colors">
              Cloud Computing
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 dark:bg-dark dark:hover:bg-gray-800 px-6 py-2 rounded-lg text-sm font-medium transition-colors">
              Cybersecurity
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 dark:bg-dark dark:hover:bg-gray-800 px-6 py-2 rounded-lg text-sm font-medium transition-colors">
              DevOps
            </button>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogData.map((blog) => (
              <SingleBlog key={blog.id} blog={blog} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="bg-gray-100 hover:bg-primary hover:text-white dark:bg-dark dark:hover:bg-primary flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button className="bg-primary text-white flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium">
                1
              </button>
              
              <button className="bg-gray-100 hover:bg-primary hover:text-white dark:bg-dark dark:hover:bg-primary flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors">
                2
              </button>
              
              <button className="bg-gray-100 hover:bg-primary hover:text-white dark:bg-dark dark:hover:bg-primary flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors">
                3
              </button>
              
              <span className="flex h-10 w-10 items-center justify-center text-sm text-gray-500">
                ...
              </span>
              
              <button className="bg-gray-100 hover:bg-primary hover:text-white dark:bg-dark dark:hover:bg-primary flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors">
                8
              </button>
              
              <button className="bg-gray-100 hover:bg-primary hover:text-white dark:bg-dark dark:hover:bg-primary flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </nav>
          </div>

          {/* Newsletter Subscription CTA */}
          <div className="mt-16 lg:mt-20 rounded-lg bg-primary/5 p-6 lg:p-8 text-center dark:bg-dark">
            <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl">
              Stay Updated with Technology Trends
            </h3>
            <p className="mb-4 text-body-color dark:text-body-color-dark sm:mb-6 text-sm sm:text-base">
              Subscribe to our newsletter for the latest insights on AI, cloud computing, and cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm sm:text-base focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-dark"
              />
              <button className="bg-primary text-white px-4 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm sm:text-base sm:whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;