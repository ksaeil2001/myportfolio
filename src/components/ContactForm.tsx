"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import emailjs from "emailjs-com";
import { useToast } from "./Providers";
import { useLoading } from "./LoadingProvider";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"IDLE" | "SUCCESS" | "ERROR">("IDLE");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const { show } = useToast();
  const { start, done } = useLoading();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!form.name.trim()) newErrors.name = "이름을 입력해주세요";
    if (!form.email.trim()) newErrors.email = "이메일을 입력해주세요";
    if (!form.message.trim()) newErrors.message = "메시지를 입력해주세요";
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      setStatus("IDLE");
      return;
    }
    setErrors({});
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "Missing EmailJS environment variables. Ensure the following are set: NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY",
        { serviceId, templateId, publicKey },
      );
      show(
        "Email service is not configured properly. Please check the environment variables.",
        "error",
      );
      setStatus("ERROR");
      return;
    }
    start();
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        publicKey
      );
      setStatus("SUCCESS");
      setForm({ name: "", email: "", message: "" });
      show("메시지가 전송되었습니다!", "success");
    } catch (err) {
      console.error(
        "Email service error details:",
        (err as Error).message || err,
      );
      setStatus("ERROR");
      show("전송 중 오류가 발생했습니다. 서비스 상태를 확인해주세요.", "error");
    } finally {
      done();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-12 space-y-4" aria-labelledby="contact-form-heading">
      <h2 id="contact-form-heading" className="sr-only">
        Contact Form
      </h2>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          이름
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className={`mt-1 w-full rounded-md p-2 bg-white dark:bg-neutral-900 border ${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"}`}
          aria-invalid={errors.name ? "true" : undefined}
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          이메일
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={`mt-1 w-full rounded-md p-2 bg-white dark:bg-neutral-900 border ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"}`}
          aria-invalid={errors.email ? "true" : undefined}
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          메시지
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={`mt-1 w-full rounded-md p-2 bg-white dark:bg-neutral-900 border ${errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-700"}`}
          aria-invalid={errors.message ? "true" : undefined}
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
      >
        보내기
      </button>
      <div aria-live="polite" className="sr-only">
        {status === "SUCCESS" && "메시지가 전송되었습니다!"}
        {status === "ERROR" && "전송 중 오류가 발생했습니다."}
      </div>
    </form>
  );
}
