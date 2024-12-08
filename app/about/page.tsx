export default function Home() {
    return (
<div className="container mx-auto py-10 px-4 md:px-6">
  <div className="flex flex-col md:flex-row items-center justify-between mb-8">
    <h1 className="text-3xl font-bold mb-4 md:mb-0">About Us</h1>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        At our freelancing website, our mission is to connect talented professionals with businesses and individuals
        who need their expertise. We believe that the future of work is flexible and empowering, and we strive to
        create a platform that enables freelancers to thrive and clients to find the perfect talent for their
        needs.
      </p>
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-4">Our Story</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Our website was founded by a team of passionate entrepreneurs who saw the potential in the freelance
        economy. We&apos;ve been in the industry for over a decade, and we&apos;ve witnessed the incredible growth and
        transformation of the way people work. Our goal is to create a seamless and efficient platform that empowers
        both freelancers and clients to achieve their goals.
      </p>
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-4">Our Values</h2>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
        <li className="mb-2">Integrity: We are committed to honesty and transparency in all our dealings.</li>
        <li className="mb-2">Excellence: We strive for the highest standards of quality in everything we do.</li>
        <li className="mb-2">Innovation: We are constantly exploring new ways to improve the freelance experience.</li>
        <li className="mb-2">Empowerment: We believe in empowering freelancers and clients to achieve their goals.</li>
      </ul>
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-4">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <div className="flex items-center mb-2">
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mr-4">
              <img className="aspect-square h-full w-full" alt="Team Member" src="\images\logo-white.png" />
            </span>
            <div>
              <h3 className="text-lg font-bold">Sanket Nijhawan</h3>
              <p className="text-gray-500 dark:text-gray-400">Co-Founder</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            {/* John is a seasoned entrepreneur with a passion for empowering freelancers. He brings a wealth of
            experience and a deep understanding of the industry.a passion for empowering freelancers. He brings a
            wealth of experience */}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <div className="flex items-center mb-2">
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mr-4">
              {/* <img className="aspect-square h-full w-full" alt="Team Member" src="/placeholder-user.jpg" /> */}
            </span>
            <div>
              {/* <h3 className="text-lg font-bold">Sarah Anderson</h3>
              <p className="text-gray-500 dark:text-gray-400">Co-Founder</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)
}
