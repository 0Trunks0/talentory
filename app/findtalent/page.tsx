import { PaymentButton } from "@/Components/payment/PaymentButton";

export default function Home() {
  return (
<div className="container mx-auto py-10 px-4 md:px-6">
  <div className="flex flex-col md:flex-row items-center justify-between mb-8">
    <h1 className="text-3xl font-bold mb-4 md:mb-0">Find Talent</h1>
    <div className="flex items-center w-full md:w-auto">
      <input
        className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 mr-4 bg-white dark:bg-gray-800 dark:text-white"
        placeholder="Search for skills, location, or name"
      />
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
        Search
      </button>
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mr-4">
            <img className="aspect-square h-full w-full" alt="Freelancer" src="/placeholder-user.jpg" />
          </span>
          <div>
            <h3 className="text-lg font-bold">John Doe</h3>
            <p className="text-gray-500 dark:text-gray-400">Web Developer</p>
          </div>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-yellow-500 mr-1"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span className="text-gray-500 dark:text-gray-400">4.8</span>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Experienced web developer with expertise in React, Node.js, and MongoDB.
      </p>
      <div className="flex flex-wrap gap-2">
        <div>React</div>
        <div>Node.js</div>
        <div>MongoDB</div>
      </div>
      <div className="mt-4">
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
          View Profile
        </button>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mr-4">
            <img className="aspect-square h-full w-full" alt="Freelancer" src="/placeholder-user.jpg" />
          </span>
          <div>
            <h3 className="text-lg font-bold">Sarah Anderson</h3>
            <p className="text-gray-500 dark:text-gray-400">Graphic Designer</p>
          </div>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-yellow-500 mr-1"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span className="text-gray-500 dark:text-gray-400">4.6</span>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Talented graphic designer with a strong portfolio in branding and UI/UX design.
      </p>
      <div className="flex flex-wrap gap-2">
        <div>Branding</div>
        <div>UI/UX</div>
        <div>Photoshop</div>
        <div>Figma</div>
      </div>
      <div className="mt-4">
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
          View Profile
        </button>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mr-4">
            <img className="aspect-square h-full w-full" alt="Freelancer" src="/placeholder-user.jpg" />
          </span>
          <div>
            <h3 className="text-lg font-bold">Michael Kim</h3>
            <p className="text-gray-500 dark:text-gray-400">Mobile Developer</p>
          </div>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-yellow-500 mr-1"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span className="text-gray-500 dark:text-gray-400">4.7</span>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Experienced mobile developer with expertise in iOS and Android development.
      </p>
      <div className="flex flex-wrap gap-2">
        <div>iOS</div>
        <div>Android</div>
        <div>Swift</div>
        <div>Kotlin</div>
      </div>
      <div className="mt-4">
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
          View Profile
        </button>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mr-4">
            <img className="aspect-square h-full w-full" alt="Freelancer" src="/placeholder-user.jpg" />
          </span>
          <div>
            <h3 className="text-lg font-bold">Jessica Lee</h3>
            <p className="text-gray-500 dark:text-gray-400">Content Writer</p>
          </div>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-yellow-500 mr-1"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span className="text-gray-500 dark:text-gray-400">4.9</span>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Skilled content writer with experience in creating engaging and SEO-optimized content.
      </p>
      <div className="flex flex-wrap gap-2">
        <div>Content Writing</div>
        <div>SEO</div>
        <div>Copywriting</div>
      </div>
      <div className="mt-4">
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
          View Profile
        </button>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mr-4">
            <img className="aspect-square h-full w-full" alt="Freelancer" src="/placeholder-user.jpg" />
          </span>
          <div>
            <h3 className="text-lg font-bold">Tom Wilson</h3>
            <p className="text-gray-500 dark:text-gray-400">Data Analyst</p>
          </div>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-yellow-500 mr-1"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span className="text-gray-500 dark:text-gray-400">4.7</span>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Experienced data analyst with expertise in data visualization and business intelligence.
      </p>
      <div className="flex flex-wrap gap-2">
        <div>Data Analysis</div>
        <div>Data Visualization</div>
        <div>SQL</div>
        <div>Power BI</div>
      </div>
      <div className="mt-4">
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
          View Profile
        </button>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mr-4">
            <img className="aspect-square h-full w-full" alt="Freelancer" src="/placeholder-user.jpg" />
          </span>
          <div>
            <h3 className="text-lg font-bold">Emily Garcia</h3>
            <p className="text-gray-500 dark:text-gray-400">Digital Marketer</p>
          </div>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-yellow-500 mr-1"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span className="text-gray-500 dark:text-gray-400">4.8</span>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Skilled digital marketer with expertise in SEO, social media marketing, and email campaigns.
      </p>
      <div className="flex flex-wrap gap-2">
        <div>SEO</div>
        <div>Social Media</div>
        <div>Email Marketing</div>
      </div>
      <div className="mt-4">
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
          View Profile
        </button>
      </div>
    </div>
  </div>
  <div className="mt-8">
    <nav aria-label="pagination" className="mx-auto flex w-full justify-center" role="navigation">
      <ul className="flex flex-row items-center gap-1">
        <li className="">
          <li className="">
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pl-2.5"
              aria-label="Go to previous page"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-left h-4 w-4"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              <span>Previous</span>
            </a>
          </li>
        </li>
        <li className="">
          <li className="">
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
              href="#"
            >
              1
            </a>
          </li>
        </li>
        <li className="">
          <li className="">
            <a
              aria-current="page"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
              href="#"
            >
              2
            </a>
          </li>
        </li>
        <li className="">
          <li className="">
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
              href="#"
            >
              3
            </a>
          </li>
        </li>
        <li className="">
          <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-ellipsis h-4 w-4"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
            <span className="sr-only">More pages</span>
          </span>
        </li>
        <li className=""></li>
      </ul>
    </nav>
  </div>
</div>
  )}