"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Copy, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/data";
import SocialLinks from "@/components/shared/SocialLinks";
type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
const initial: Fields = { name: "", email: "", subject: "", message: "" };
export default function ContactForm() {
  const [fields, setFields] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.links.email);
      setCopyStatus("Email address copied.");
    } catch {
      setCopyStatus(`Copy unavailable. Email: ${siteConfig.links.email}`);
    }
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Errors = {};
    if (!fields.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!fields.subject.trim()) next.subject = "Please add a subject.";
    if (fields.message.trim().length < 10)
      next.message = "Please write at least 10 characters.";
    setErrors(next);
    setStatus("");
    const firstError = Object.keys(next)[0];
    if (firstError) {
      document.getElementById(firstError)?.focus();
      return;
    }
    const subject = fields.subject.trim().replace(/[\r\n]/g, " ");
    const body = `Hi Shrey,\n\n${fields.message.trim()}\n\n${fields.name.trim()}\n${fields.email.trim()}`;
    window.location.href = `mailto:${siteConfig.links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Your email app has been requested. Nothing has been sent yet—review and send the message there. If it didn’t open, copy the email address and your message into your email service. Your draft is still here.",
    );
  }
  return (
    <>
      <div className="page-heading">
        <p className="eyebrow">SAY HELLO / CONTACT</p>
        <h1>
          Have an opportunity
          <br />
          in mind<span className="accent">?</span>
        </h1>
        <p>
          I&apos;m open to junior developer roles, graduate opportunities,
          internships and meaningful software projects. I&apos;d love to
          connect.
        </p>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <p className="eyebrow">LET&apos;S START A CONVERSATION</p>
          <a
            className="contact-email"
            href={`mailto:${siteConfig.links.email}`}
          >
            {siteConfig.links.email}
            <ArrowUpRight size={22} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="text-link copy-button"
            onClick={copyEmail}
          >
            <Copy size={15} aria-hidden="true" />
            Copy email address
          </button>
          <p className="copy-status" role="status">
            {copyStatus}
          </p>
          <p className="contact-location">
            <MapPin size={17} aria-hidden="true" />
            {siteConfig.location}
          </p>
          <SocialLinks />
          <div className="contact-availability">
            <p className="availability">
              <span />
              Open to opportunities
            </p>
            <p>
              Tell me about your team, the role or the problem you&apos;re
              working on.
            </p>
          </div>
        </div>
        <form onSubmit={submit} noValidate className="contact-form">
          <h2>Compose an email.</h2>
          <p className="form-intro" id="form-help">
            This form opens your email app with a draft. You send it from there;
            this website does not send or store messages.
          </p>
          <div className="form-fields">
            {(["name", "email", "subject", "message"] as const).map((field) => (
              <div className={`field field-${field}`} key={field}>
                <label htmlFor={field}>
                  {
                    {
                      name: "Your name",
                      email: "Email address",
                      subject: "Subject",
                      message: "Your message",
                    }[field]
                  }{" "}
                  <span aria-hidden="true">*</span>
                </label>
                {field === "message" ? (
                  <textarea
                    id={field}
                    name={field}
                    required
                    rows={5}
                    minLength={10}
                    maxLength={1500}
                    value={fields[field]}
                    aria-invalid={!!errors[field]}
                    aria-describedby={
                      errors[field] ? `${field}-error` : "message-help"
                    }
                    onChange={(event) =>
                      setFields({ ...fields, [field]: event.target.value })
                    }
                    placeholder="A little about the opportunity…"
                  />
                ) : (
                  <input
                    id={field}
                    name={field}
                    required
                    type={field === "email" ? "email" : "text"}
                    autoComplete={
                      field === "name"
                        ? "name"
                        : field === "email"
                          ? "email"
                          : undefined
                    }
                    maxLength={field === "email" ? 254 : 120}
                    value={fields[field]}
                    aria-invalid={!!errors[field]}
                    aria-describedby={
                      errors[field] ? `${field}-error` : undefined
                    }
                    onChange={(event) =>
                      setFields({ ...fields, [field]: event.target.value })
                    }
                    placeholder={
                      field === "name"
                        ? "Your name"
                        : field === "email"
                          ? "you@company.com"
                          : "An opportunity to work together"
                    }
                  />
                )}
                {errors[field] && (
                  <p id={`${field}-error`} className="field-error" role="alert">
                    {errors[field]}
                  </p>
                )}
              </div>
            ))}
          </div>
          <p id="message-help" className="field-help">
            10–1,500 characters. All fields required.
          </p>
          <button
            className="button button-primary"
            type="submit"
            aria-describedby="form-help"
          >
            Open email app
            <ArrowUpRight size={17} aria-hidden="true" />
          </button>
          <p role="status" className="form-status">
            {status}
          </p>
        </form>
      </div>
    </>
  );
}
