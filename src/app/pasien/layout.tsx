import React, { ReactNode } from "react";
import Layout, { Header, Content, Footer } from "antd/es/layout/layout";
import HeaderUser from "../_components/user/header-user";
import { NavbarUser } from "../_components/user/navbar-user";

// Define Type for Props
interface LayoutProps {
  children: ReactNode;
}

const UserLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Layout className="min-h-screen flex flex-col">
      {/* TODO: remove header padding and move HeaderUesr to Header as child */}
      <Header style={{
        backgroundColor: "white",
      }}/> 
      <HeaderUser/>

      {/* Main Content (Dynamic via children) */}
      <Content className="flex-grow p-4 bg-white flex overflow-y-auto scrollbar-none">
        {children}
      </Content>

      {/* Footer */}
      <NavbarUser/>
    </Layout>
  );
};

export default UserLayout;
