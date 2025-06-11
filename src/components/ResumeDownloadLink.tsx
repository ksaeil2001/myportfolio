"use client";
import Link from "next/link";
import { useToast } from "./Providers";
import { AnchorHTMLAttributes } from "react";

export default function ResumeDownloadLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { show } = useToast();
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
