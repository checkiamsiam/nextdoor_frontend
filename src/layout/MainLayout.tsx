import Header from "@/components/common/Header/Header";
import React from "react";
import Footer from "@/components/common/Footer/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
