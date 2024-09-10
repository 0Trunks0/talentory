// pages/index.tsx or pages/index.js

import { PaymentButton } from "@/Components/payment/PaymentButton";
import Link from "next/link";

export default function Home() {
  return (
    <>
    
     <div className="flex flex-col min-h-[100dvh]">
  {/* <h1> Talentory</h1> */}
  <section className="bg-primary py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center gap-6 text-center text-primary-foreground">
    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
      Empower Your Potential, Freelance Your Future
    </h1>
    <p className="max-w-xl text-lg">
      Talentory is a comprehensive freelancing platform that connects talented freelancers with clients seeking
      their expertise.
    </p>
    <div className="flex items-center gap-4 w-full max-w-md">
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
        placeholder="Search for services"
        type="text"
      />
      <button
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex-shrink-0"
        type="submit"
      >
        Search
      </button>
    </div>
  </section>
  <section className="bg-muted py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Services</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our top-rated freelance services across various categories.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"></div>
    </div>
  </section>
  <section className="bg-background py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from our satisfied clients about their experience with Talentory.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"></div>
      </div>
    </div>
  </section>
  <section className="bg-muted py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Benefits of Talentory</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover why Talentory is the preferred choice for freelancers and clients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"></div>
      </div>
    </div>
  </section>
  <footer className="bg-primary text-primary-foreground px-4 lg:px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
    <div className="flex items-center gap-2">
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
        className="h-6 w-6"
      >
        <path d="M4 4v16"></path>
        <path d="M9 4v16"></path>
      </svg>
      <span className="text-lg font-bold">Talentory</span>
    </div>
    <nav className="flex items-center gap-4 mt-4 sm:mt-0">
      <a className="hover:underline" href="#">
        About
      </a>
      <a className="hover:underline" href="#">
        Contact
      </a>
      <a className="hover:underline" href="#">
        Terms of Service
      </a>
      <a className="hover:underline" href="#">
        Privacy Policy
      </a>
    </nav>
  </footer>
</div>
    </>
  );
}
