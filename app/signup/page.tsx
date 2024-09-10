"use client";

import { SignUp, useSignUp } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const SignUpPage = () => {
  const { signUp } = useSignUp();
  const router = useRouter();

  useEffect(() => {
    // Check if the user has completed the sign-up process
    if (signUp && signUp.status === 'complete') {
      router.push('/work');
    }
  }, [signUp, router]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <SignUp 
        path="/signup" 
        routing="path" 
        signInUrl="/signin"
        // No need for afterSignUpUrl
      />
    </div>
  );
};

export default SignUpPage;
