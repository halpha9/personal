"use client";

import { ThemeProvider } from "./theme";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
