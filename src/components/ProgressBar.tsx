"use client";
import { useEffect, useState } from "react";
import Router from "next/router";

export default function ProgressBar() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return loading ? (
    <div className="fixed top-0 left-0 w-full h-1 bg-blue-500 animate-pulse z-50" />
  ) : null;
}
