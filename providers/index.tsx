"use client";

import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./theme";
import AppProvider from "./app";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <AppProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
        <Analytics />
      </ThemeProvider>
    </AppProvider>
  );
}
