import AuthContainer from "@/components/Auth/Authcontainer";
import RegisterForm from "@/components/Auth/RegisterForm";
import Head from "next/head";
import { ReactNode } from "react";

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>Register Now | NextDoor</title>
      </Head>

      <AuthContainer
        title="Create Account"
        subtitle="Already Have an account?"
        linkPath="/login"
        linkText="Login Now"
      >
        <RegisterForm />
      </AuthContainer>
    </>
  );
};

export default RegisterPage;

RegisterPage.getLayout = (page: ReactNode) => <>{page}</>;
