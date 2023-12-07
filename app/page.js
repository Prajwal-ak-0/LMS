"use client";

import { UserButton } from "@clerk/nextjs";
import {NextUIProvider} from '@nextui-org/react';

export default function Home() {
  return (
    <NextUIProvider>
      <UserButton afterSignOutUrl="/"/>
    </NextUIProvider>
  )
}