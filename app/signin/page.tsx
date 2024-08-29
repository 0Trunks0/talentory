// pages/signin.tsx or pages/signin.js
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <SignIn path="/signin" routing="path" signUpUrl="/signup" />
    </div>
  );
};

export default SignInPage;
