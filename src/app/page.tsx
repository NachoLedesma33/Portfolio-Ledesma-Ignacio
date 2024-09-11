"use client";

import { useState } from "react";
import Navbar from "@/app/Components/Navbar";
import Content from "@/app/Components/Content";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("About Me");

  return (
    <div className="flex min-h-screen">
      <Navbar setActiveTab={setActiveTab} />
      <Content activeTab={activeTab} />
    </div>
  );
}
