"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { CONTACT_PAGE } from "@/constants/contact/page";

/* "Or leave a note" (Figma 29:637 desktop · 259:320 stacked). Posts to /api/contact. */

type Status = "idle" | "sending" | "sent" | "error";

export function NoteForm({ variant }: { variant: "desktop" | "stacked" }) {
  const f = CONTACT_PAGE.form;
  const desktop = variant === "desktop";
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.name, email: data.email, message: data.message }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  const label = cn("font-sans text-[16px] font-medium uppercase tracking-[1.4px] text-[#ABB3A9]", desktop ? "leading-[20px]" : "leading-[26px]");
  const field =
    "w-full border-b border-[#343D35] bg-transparent py-[8px] font-sans text-[16px] text-[#F2F0E9] outline-none transition-colors placeholder:text-[#ABB3A9] focus:border-[#FF4802]";
  const id = (name: string) => `${variant}-${name}`;

  return (
    <form onSubmit={onSubmit} className={cn("flex flex-col", desktop ? "gap-[32px]" : "gap-[24px]")}>
      <p className={label}>{f.title}</p>
      {/* Figma fixes the first field at 65px tall on desktop, so the next field starts 6px higher */}
      <div className={cn("flex flex-col gap-[8px]", desktop && "h-[65px]")}>
        <label htmlFor={id("name")} className={label}>
          {f.name.label}
        </label>
        <input id={id("name")} name="name" type="text" required autoComplete="name" placeholder={f.name.placeholder} className={cn(field, "h-[43px]")} />
      </div>
      <div className="flex flex-col gap-[8px]">
        <label htmlFor={id("email")} className={label}>
          {f.email.label}
        </label>
        <input id={id("email")} name="email" type="email" required autoComplete="email" placeholder={f.email.placeholder} className={cn(field, "h-[43px]")} />
      </div>
      <div className="flex flex-col gap-[8px]">
        <label htmlFor={id("message")} className={label}>
          {f.message.label}
        </label>
        <textarea id={id("message")} name="message" required placeholder={f.message.placeholder} className={cn(field, "h-[121px] resize-none leading-[26px]")} />
      </div>
      <div className={cn("flex flex-col", desktop ? "gap-[16px]" : "contents")}>
        <button
          type="submit"
          disabled={status === "sending"}
          className={cn(
            "flex cursor-pointer items-center gap-[12px] border border-[#343D35] px-[22px] py-[15px] font-sans text-[16px] font-medium uppercase leading-[20px] text-[#FF4802] transition-colors hover:border-[#FF4802] disabled:cursor-wait disabled:opacity-60",
            desktop ? "self-start" : "w-full"
          )}
        >
          <span className="tracking-[3.08px]">{status === "sending" ? "Sending" : f.submit}</span>
          <span className="w-[20px] text-center">{" ↗"}</span>
        </button>
        <p role="status" aria-live="polite" className={cn("font-mono-code text-[16px] text-[#ABB3A9]", desktop ? "w-[400px] max-w-full leading-[20px]" : "leading-[26px]")}>
          {status === "sent" ? "Thanks — your note is on its way. I reply within one working day." : status === "error" ? error : f.note}
        </p>
      </div>
    </form>
  );
}
