import Link from 'next/link'
import React from 'react'
import logoImage from '../../public/images/logo-no-background.png'
import Image from 'next/image'
const Navbar = () => {
  return (
    <>
    
      <style>{`
        :root {
          --background: 0 0% 100%;
          --foreground: 240 10% 3.9%;
          --card: 0 0% 100%;
          --card-foreground: 240 10% 3.9%;
          --popover: 0 0% 100%;
          --popover-foreground: 240 10% 3.9%;
          --primary: 240 5.9% 10%;
          --primary-foreground: 0 0% 98%;
          --secondary: 240 4.8% 95.9%;
          --secondary-foreground: 240 5.9% 10%;
          --muted: 240 4.8% 95.9%;
          --muted-foreground: 240 3.8% 45%;
          --accent: 240 4.8% 95.9%;
          --accent-foreground: 240 5.9% 10%;
          --destructive: 0 72% 51%;
          --destructive-foreground: 0 0% 98%;
          --border: 240 5.9% 90%;
          --input: 240 5.9% 90%;
          --ring: 240 5.9% 10%;
          --chart-1: 173 58% 39%;
          --chart-2: 12 76% 61%;
          --chart-3: 197 37% 24%;
          --chart-4: 43 74% 66%;
          --chart-5: 27 87% 67%;
          --radius: 0.5rem;
        }
        img[src="/placeholder.svg"],
        img[src="/placeholder-user.jpg"] {
          filter: sepia(0.3) hue-rotate(-60deg) saturate(0.5) opacity(0.8);
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Inter', sans-serif;
          --font-sans-serif: 'Inter';
        }
        body {
          font-family: 'Inter', sans-serif;
          --font-sans-serif: 'Inter';
        }
      `}</style>
   <header className="bg-primary text-primary-foreground px-4 lg:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
        {/* <Link href="/login/login.tsx" legacyBehavior>
  <a className="hover:underline">Login</a> */}
{/* </Link> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            {/* <path d="M4 4v16"></path>
            <path d="M9 4v16"></path> */}
          </svg>
          {/* <span className="text-lg font-bold">yh9sdn</span>  */}
          {/* @ts-ignore */}
          <Image src={logoImage} width={150} alt='Logo image'/>
        </Link>
        <nav className="hidden lg:flex items-center gap-4">
          <Link href="/work" className="hover:underline">Find Work</Link>
          <Link href="/findtalent" className="hover:underline">Find Talent</Link>
          {/* <Link href="/clients" className="hover:underline">Clients</Link> */}
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
            <Link href ="/wallet" className='font-bold mr-5 py-2 px-3 border-2 rounded-lg'>Wallet</Link>
          <Link href="/login" className="hover:underline">Login</Link>
          <Link href="/signup" className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            Sign Up
          </Link>
        </div>
      </header>
    </>
  )
}

export default Navbar