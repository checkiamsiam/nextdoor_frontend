import Head from "next/head";
import { ReactNode } from "react";
import AuthContainer from "@/components/Auth/Authcontainer";
import LoginForm from "@/components/Auth/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <AuthContainer
        title="Welcome back."
        subtitle="New Here?"
        linkPath="/register"
        linkText="Register Now"
      >
        <LoginForm />
      </AuthContainer>
    </>
  );
};

export default LoginPage;

LoginPage.getLayout = (page: ReactNode) => <>{page}</>;
