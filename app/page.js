"use client"

import Nav from "@/components/Navbar";
import { UserButton } from "@clerk/nextjs";

// Main component
const page = () => {
  return (
    <>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};

export default page;
