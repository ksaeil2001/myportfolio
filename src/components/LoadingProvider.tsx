"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import Router from "next/router";

interface LoadingContextValue {
  start: () => void;
  done: () => void;
}

const LoadingContext = createContext<LoadingContextValue | undefined>(undefined);

export function useLoading() {
  const ctx = useContext(LoadingContext);
  if (!ctx) throw new Error("useLoading must be used within LoadingProvider");
  return ctx;
}

export default function LoadingProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleEnd = () => setLoading(false);
    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleEnd);
    Router.events.on("routeChangeError", handleEnd);
    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleEnd);
      Router.events.off("routeChangeError", handleEnd);
    };
  }, []);

  const start = () => setLoading(true);
  const done = () => setLoading(false);

  return (
    <LoadingContext.Provider value={{ start, done }}>
      {loading && (
        <div className="fixed top-0 left-0 z-50 h-1 w-full animate-pulse bg-blue-500" />
      )}
      {children}
    </LoadingContext.Provider>
  );
}
