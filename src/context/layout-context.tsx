"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface LayoutContextType {
  activeLayout: 1 | 2;
  setActiveLayout: (layout: 1 | 2) => void;
}

const LayoutContext = createContext<LayoutContextType>({
  activeLayout: 2,
  setActiveLayout: () => {},
});

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [activeLayout, setActiveLayoutState] = useState<1 | 2>(2);

  useEffect(() => {
    // Check URL or localStorage on mount
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlLayout = params.get("layout");
      if (urlLayout === "1") {
        setActiveLayoutState(1);
      } else if (urlLayout === "2") {
        setActiveLayoutState(2);
      } else {
        const saved = localStorage.getItem("bz_active_layout");
        if (saved === "1" || saved === "2") {
          setActiveLayoutState(Number(saved) as 1 | 2);
        }
      }
    }
  }, []);

  const setActiveLayout = (layout: 1 | 2) => {
    setActiveLayoutState(layout);
    if (typeof window !== "undefined") {
      localStorage.setItem("bz_active_layout", String(layout));
      const url = new URL(window.location.href);
      url.searchParams.set("layout", String(layout));
      window.history.replaceState({}, "", url.toString());
    }
  };

  return (
    <LayoutContext.Provider value={{ activeLayout, setActiveLayout }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  return useContext(LayoutContext);
}

