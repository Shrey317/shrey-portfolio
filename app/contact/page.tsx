import { pageMetadata } from "@/lib/metadata";
import ContactForm from "@/components/sections/ContactForm";
export const metadata = pageMetadata(
  "Contact",
  "Contact Shrey Patel about junior developer roles, graduate opportunities, software internships and meaningful projects.",
  "/contact",
);
export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-main container">
      <ContactForm />
    </main>
  );
}
