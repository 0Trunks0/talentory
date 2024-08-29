// pages/signup.tsx or pages/signup.js
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <SignUp path="/signup" routing="path" signInUrl="/signin" />
    </div>
  );
};

export default SignUpPage;
