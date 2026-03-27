"use client"

import React from 'react'
import { useTheme } from 'next-themes';
import ClickSpark from "@/components/ClickSpark";

interface ClientLayoutProps {
  children: React.ReactNode
}

function ClientLayout({ children }: ClientLayoutProps) {
  const { theme } = useTheme();

  return (
    <ClickSpark
      sparkColor={theme === "dark" ? 'white' : "black"}
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {children}
    </ClickSpark>
  )
}

export default ClientLayout