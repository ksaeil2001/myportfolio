"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useTranslations } from "next-intl";

export function LoginForm() {
  const t = useTranslations('login');
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [status, setStatus] = useState<"IDLE" | "SUCCESS">("IDLE");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};
    if (!form.email.trim()) newErrors.email = t('emailRequired');
    if (!form.password.trim()) newErrors.password = t('passwordRequired');
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setStatus("SUCCESS");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4" aria-labelledby="login-form-heading">
      <h2 id="login-form-heading" className="sr-only">
        {t('title')}
      </h2>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {t('email')}
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
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {t('password')}
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className={`mt-1 w-full rounded-md p-2 bg-white dark:bg-neutral-900 border ${errors.password ? "border-red-500" : "border-gray-300 dark:border-gray-700"}`}
          aria-invalid={errors.password ? "true" : undefined}
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
      </div>
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
      >
        {t('submit')}
      </button>
      <div aria-live="polite" className="sr-only">
        {status === "SUCCESS" && t('success')}
      </div>
    </form>
  );
}
