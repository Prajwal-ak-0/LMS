"use client";

import { UserButton } from "@clerk/nextjs";
import {NextUIProvider} from '@nextui-org/react';
// import {Nav} from '@/components/Nav';
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <NextUIProvider>
      <Navbar/>
    </NextUIProvider>
  )
}