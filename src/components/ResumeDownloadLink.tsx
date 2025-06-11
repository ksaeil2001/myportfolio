"use client";
import Link from "next/link";
import { useToast } from "./Providers";
import { AnchorHTMLAttributes, useEffect, useState } from "react";

export default function ResumeDownloadLink(
  props: AnchorHTMLAttributes<HTMLAnchorElement>,
) {
  const { show } = useToast();
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    fetch("/resume.pdf", { method: "HEAD" })
      .then((res) => setAvailable(res.ok))
      .catch(() => setAvailable(false));
  }, []);

  if (!available) {
    return (
      <span
        {...props}
        aria-disabled="true"
        className="cursor-not-allowed text-gray-400"
      >
        이력서 준비 중입니다
      </span>
    );
  }

  return (
    <Link
      {...props}
      href="/resume.pdf"
      download
      onClick={(e) => {
        props.onClick?.(e);
        show("이력서 다운로드가 시작되었습니다.", "info");
      }}
    />
  );
}
