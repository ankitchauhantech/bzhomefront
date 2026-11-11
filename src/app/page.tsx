"use client";
import React, { Suspense } from "react";
import { useLayout } from "@/context/layout-context";
import { DesignOne } from "@/components/designs/design-one";
import { DesignTwo } from "@/components/designs/design-two";
import { DesignThree } from "@/components/designs/design-three";

function HomeContent() {
  const { activeLayout } = useLayout();

  return (
    <div className="relative min-h-screen">
      {activeLayout === 1 && <DesignTwo />}
      {activeLayout === 2 && <DesignOne />}
      {activeLayout === 3 && <DesignThree />}
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading Bravo Zulu Alliance...</div>}>
      <HomeContent />
    </Suspense>
  );
}
