"use client";

import AdminNavigation from "@/app/_components/AdminNavigation";
import React, { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AdminNavigation />
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
};

export default AdminLayout;
