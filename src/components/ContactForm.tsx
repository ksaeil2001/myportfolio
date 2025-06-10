"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import emailjs from "emailjs-com";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"IDLE" | "SUCCESS" | "ERROR">("IDLE");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus("SUCCESS");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("ERROR");
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
          className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 p-2"
          value={form.name}
          onChange={handleChange}
        />
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
          className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 p-2"
          value={form.email}
          onChange={handleChange}
        />
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
          className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 p-2"
          value={form.message}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
      >
        보내기
      </button>
      {status === "SUCCESS" && (
        <p className="text-green-600">메시지가 전송되었습니다!</p>
      )}
      {status === "ERROR" && (
        <p className="text-red-600">전송 중 오류가 발생했습니다.</p>
      )}
    </form>
  );
}
