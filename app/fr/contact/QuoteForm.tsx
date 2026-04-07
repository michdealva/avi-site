"use client";

import { useState, type FormEvent } from "react";
import { BRANDS, UI_FR } from "@/data/content-fr";

export default function QuoteFormFR() {
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
          {UI_FR.contact.formSuccess}
        </h3>
      </div>
    );
  }

  const urgencyOptions = UI_FR.contact.formUrgencyOptions;

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-machine-black">
            {UI_FR.contact.formName} <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-lg border border-border-light bg-white px-4 py-3 text-sm text-machine-black placeholder:text-dust focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-machine-black">
            {UI_FR.contact.formCompany} <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="mt-1 block w-full rounded-lg border border-border-light bg-white px-4 py-3 text-sm text-machine-black placeholder:text-dust focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-machine-black">
            {UI_FR.contact.formEmail} <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-lg border border-border-light bg-white px-4 py-3 text-sm text-machine-black placeholder:text-dust focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-machine-black">
            {UI_FR.contact.formPhone}
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
          {UI_FR.contact.formBrand}
        </label>
        <select
          id="brand"
          name="brand"
          className="mt-1 block w-full rounded-lg border border-border-light bg-white px-4 py-3 text-sm text-machine-black focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
        >
          <option value="">{UI_FR.contact.formBrandPlaceholder}</option>
          {BRANDS.map((brand) => (
            <option key={brand.name} value={brand.name}>
              {brand.name}
            </option>
          ))}
          <option value="Other">Autre</option>
        </select>
      </div>

      {/* Urgency */}
      <fieldset>
        <legend className="block text-sm font-medium text-machine-black">
          {UI_FR.contact.formUrgency}
        </legend>
        <div className="mt-2 flex flex-wrap gap-6">
          {urgencyOptions.map((option) => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="urgency"
                value={option.value}
                defaultChecked={option.value === "urgent"}
                className="h-4 w-4 border-border-light text-signal focus:ring-signal"
              />
              <span className={`text-sm font-medium ${
                option.value === "emergency" ? "text-danger" :
                option.value === "urgent" ? "text-urgent" : "text-signal"
              }`}>
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-machine-black">
          {UI_FR.contact.formIssue}
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          className="mt-1 block w-full rounded-lg border border-border-light bg-white px-4 py-3 text-sm text-machine-black placeholder:text-dust focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
          placeholder={UI_FR.contact.formIssuePlaceholder}
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="rounded-lg border border-danger/30 bg-danger/5 p-4 text-sm text-danger">
          Une erreur est survenue. Veuillez nous appeler directement ou reessayer.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 items-center justify-center rounded-lg bg-signal px-10 font-semibold text-white transition-colors hover:bg-signal-dark disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours..." : UI_FR.contact.formSubmit}
      </button>
    </form>
  );
}
