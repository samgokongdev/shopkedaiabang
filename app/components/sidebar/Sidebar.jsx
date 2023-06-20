import React from "react";
import DekstopSidebar from "./DekstopSidebar";
import MobileFooter from "./MobileFooter";
import getCurrentUser from "@/app/actions/getCurrentUser";

export default async function Sidebar({ children }) {
  const currentUser = await getCurrentUser();
  return (
    <div className="h-full">
      <DekstopSidebar currentUser={currentUser} />
      <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}
