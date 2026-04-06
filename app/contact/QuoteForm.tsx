"use client";

import { useState, type FormEvent } from "react";
import { BRANDS } from "@/data/content";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      brand: (form.elements.namedItem("brand") as HTMLSelectElement).value,
      urgency: (form.elements.namedItem("urgency") as HTMLInputElement).value,
      description: (form.elements.namedItem("description") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-10 rounded-lg border border-signal/30 bg-signal/5 p-8 text-center">
        <svg
          className="mx-auto h-12 w-12 text-signal"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h3 className="mt-4 text-xl font-semibold text-machine-black">
          Quote request sent
        </h3>
        <p className="mt-2 text-sm text-shop-grey">
          We&rsquo;ll get back to you within 2 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-machine-black">
            Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-lg border border-border-light bg-white px-4 py-3 text-sm text-machine-black placeholder:text-dust focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
            placeholder="Your name"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-machine-black">
            Company <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="mt-1 block w-full rounded-lg border border-border-light bg-white px-4 py-3 text-sm text-machine-black placeholder:text-dust focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
            placeholder="Company name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-machine-black">
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-lg border border-border-light bg-white px-4 py-3 text-sm text-machine-black placeholder:text-dust focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
            placeholder="you@company.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-machine-black">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 block w-full rounded-lg border border-border-light bg-white px-4 py-3 text-sm text-machine-black placeholder:text-dust focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
            placeholder="(514) 555-1234"
          />
        </div>
      </div>

      {/* Machine Brand */}
      <div>
        <label htmlFor="brand" className="block text-sm font-medium text-machine-black">
          Machine Brand
        </label>
        <select
          id="brand"
          name="brand"
          className="mt-1 block w-full rounded-lg border border-border-light bg-white px-4 py-3 text-sm text-machine-black focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
        >
          <option value="">Select a brand</option>
          {BRANDS.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Urgency */}
      <fieldset>
        <legend className="block text-sm font-medium text-machine-black">
          Urgency
        </legend>
        <div className="mt-2 flex flex-wrap gap-6">
          {[
            { value: "emergency", label: "Emergency", color: "text-danger" },
            { value: "urgent", label: "Urgent", color: "text-urgent" },
            { value: "scheduled", label: "Scheduled", color: "text-signal" },
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="urgency"
                value={option.value}
                defaultChecked={option.value === "urgent"}
                className="h-4 w-4 border-border-light text-signal focus:ring-signal"
              />
              <span className={`text-sm font-medium ${option.color}`}>
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-machine-black">
          Describe the issue
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          className="mt-1 block w-full rounded-lg border border-border-light bg-white px-4 py-3 text-sm text-machine-black placeholder:text-dust focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
          placeholder="Machine model, error codes, symptoms, when it started..."
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="rounded-lg border border-danger/30 bg-danger/5 p-4 text-sm text-danger">
          Something went wrong. Please call us directly or try again.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 items-center justify-center rounded-lg bg-signal px-10 font-semibold text-white transition-colors hover:bg-signal-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Quote Request"}
      </button>
    </form>
  );
}
