import React from "react";

export default function Home() {
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
        .center-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh; /* Adjusts to full viewport height */
        }
      `}</style>
      <div className="center-container">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md" data-v0-t="card">
          <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
            <h3 className="whitespace-nowrap tracking-tight text-2xl font-semibold">Wallet</h3>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 gap-2">
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
                className="h-4 w-4"
              >
                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
              </svg>
              View Transactions
            </button>
          </div>
          <div className="p-6 grid gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="text-5xl font-bold text-primary">₹ 12,345</div>
              <div className="text-muted-foreground text-lg">Current Balance</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex items-center justify-center gap-2">
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
                  className="h-5 w-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                Deposit
              </button>
              <button className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center justify-center gap-2">
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
                  className="h-5 w-5"
                >
                  <path d="M5 12h14"></path>
                </svg>
                Withdraw
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground text-sm">Last Transaction</div>
              <div className="text-sm font-medium">₹ 500 - Groceries</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
