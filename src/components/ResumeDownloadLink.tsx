"use client";
import Link from "next/link";
import { useToast } from "./Providers";
import { AnchorHTMLAttributes, useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function ResumeDownloadLink(
  props: AnchorHTMLAttributes<HTMLAnchorElement>,
) {
  const { show } = useToast();
  const t = useTranslations('resumeLink');
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
        {t('unavailable')}
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
        show(t('toast'), "info");
      }}
    />
  );
}
